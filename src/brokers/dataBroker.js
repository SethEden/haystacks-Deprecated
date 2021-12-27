/**
 * @file dataBroker.js
 * @module dataBroker
 * @description Contains all of the lower level data processing functions,
 * and also acts as an interface for calling the fileBroker.
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:configuration.contants
 * @requires module:generic.constants
 * @requires module:message.constants
 * @requires module:system.constants
 * @requires module:word.constants
 * @requires module:ruleBroker
 * @requires module:fileOperations
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/15
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var bas = require('../constants/basic.constants');
var biz = require('../constants/business.constants');
var cfg = require('../constants/configuration.constants');
var fnc = require('../constants/function.constants');
var gen = require('../constants/generic.constants');
var msg = require('../constants/message.constants');
var sys = require('../constants/system.constants');
var wrd = require('../constants/word.constants');
var ruleBroker = require('./ruleBroker');
var fileOperations = require('../executrix/fileOperations');
var loggers = require('../executrix/loggers');
var D = require('../structures/data');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function scanDataPath
 * @description Scans the specified path and returns a collection
 * of all the files contained recursively within that path and all sub-folders.
 * @param {string} dataPath The path that should be recursively scanned for files in all the folders.
 * @return {array<string>} An array of strings that each have the full path and file name
 * at all levels of the specified path including sub-folders.
 * @author Seth Hollingsead
 * @date 2021/10/15
 */
function scanDataPath(dataPath) {
  let functionName = scanDataPath.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`dataPath is: ${dataPath}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathIs + dataPath);
  let rules = {};
  let filesFound = [];
  rules[0] = biz.cswapBackSlashToForwardSlash;
  // console.log(`execute business rules: ${JSON.stringify(rules)}`);
  dataPath = ruleBroker.processRules(dataPath, '', rules);
  // console.log(`dataPath after business rules processing is: ${dataPath}`);
  filesFound = fileOperations.readDirectoryContents(dataPath);
  loggers.consoleLog(namespacePrefix + functionName, msg.cfilesFoundIs + JSON.stringify(filesFound));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`filesFound is: ${JSON.stringify(filesFound)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return filesFound;
};

/**
 * @function loadAllJsonData
 * @description Loads all the contents of all files and folders and sub-folders at the specified path and builds a list of files to load,
 * then loads them accordingly in the D.contextName.
 * @param {array<string>} filesToLoad The data structure containing all of the files to load data from.
 * @param {string} contextName The context name that should be used when adding data to the D-data structure.
 * @return {object} A JSON object that contains all fo the data that was loaded and parsed from all the input files list.
 * @author Seth Hollingsead
 * @date 2021/10/15
 */
function loadAllJsonData(filesToLoad, contextName) {
  let functionName = loadAllJsonData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`filesToLoad is: ${JSON.stringify(filesToLoad)}`);
  // console.log(`contextName is: ${contextName}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cfilesToLoadIs + JSON.stringify(filesToLoad));
  loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let foundSystemData = false;
  let systemConfigFileName = sys.csystemConfigFileName; // 'framework.system.json';
  let applicationConfigFileName = sys.capplicationConfigFileName; // 'application.system.json';
  let multiMergedData = {};
  let parsedDataFile = {};

  // Before we load all configuration data we need to FIRST load all the system configuration settings.
  // There will be a system configuration setting that will tell us if we need to load the debug setngs or not.
  for (let i = 0; i < filesToLoad.length; i++) {
    let fileToLoad = filesToLoad[i];
    if (fileToLoad.includes(systemConfigFileName) || fileToLoad.includes(applicationConfigFileName)) {
      let dataFile = preprocessJsonFile(fileToLoad);

      // NOTE: In this case we have just loaded either the framework configuration data or the application configuration data,
      // and nothing else. So we can just assign the data to the multiMergedData.
      // We will need to merge all the other files,
      // but there will be a setting here we should examin to determine if the rest of the data should even be loadd or not.
      // We will have a new setting that determines if all the extra debug settings should be loaded or not.
      // This way the application performance can be seriously optimized to greater levels of lean performance.
      // Adding all that extra debugging cnfiguration settings can affect load times, and application performance to a much lesser degree.
      multiMergedData[wrd.csystem] = {};
      multiMergedData[wrd.csystem] = dataFile;
      foundSystemData = true;
    }
    if (foundSystemData === true) {
      break;
    }
  }

  // Now we need to determine if we should load the rest of the data.
  if (debugSettingsEnabledLogic(multiMergedData) === true) {
    for (let j = 0; j < filesToLoad.length; j++) {
      let fileToLoad = filesToLoad[j];
      if (!fileToLoad.includes(systemConfigFileName) && !fileToLoad.includes(applicationConfigFileName)
      && fileToLoad.toUpperCase().includes(gen.cDotJSON)) {
        let dataFile = preprocessJsonFile(fileToLoad);
        // console.log('dataFile to merge is: ' + JSON.stringify(dataFile));
        loggers.consoleLog(namespacePrefix + functionName, msg.cdataFileToMergeIs + JSON.stringify(dataFile));
        if (!multiMergedData[cfg.cdebugSettings]) {
          multiMergedData[cfg.cdebugSettings] = {};
          multiMergedData[cfg.cdebugSettings] = dataFile;
        } else {
          Object.assign(multiMergedData[cfg.cdebugSettings], dataFile);
        }
      }
    }
  }
  parsedDataFile = multiMergedData;
  // console.log(`parsedDataFile is: ${JSON.stringify(parsedDataFile)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cparsedDataFileIs + JSON.stringify(parsedDataFile));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return parsedDataFile;
};

/**
 * @function preprocessJsonFile
 * @description Load al of the data from a single JSON data file.
 * @param {string} fileToLoad The fully qualified path to the file that should be loaded.
 * @return {object} The JSON data object that was loaded from the specified JSON data file.
 * @author Seth Hollingsead
 * @date 2021/10/15
 */
function preprocessJsonFile(fileToLoad) {
  let functionName = preprocessJsonFile.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`fileToLoad is: ${JSON.stringify(fileToLoad)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cfileToLoadIs + JSON.stringify(fileToLoad));
  let filePathRules = {};
  filePathRules[0] = biz.cswapDoubleForwardSlashToSingleForwardSlash;
  // console.log(`execute business rules: ${JSON.stringify(filePathRules)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cexecuteBusinessRules + JSON.stringify(filePathRules));
  let finalFileToLoad = ruleBroker.processRules(fileToLoad, '', filePathRules);
  let dataFile = fileOperations.getJsonData(finalFileToLoad);
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataFileIs + JSON.stringify(dataFile));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`dataFile is: ${JSON.stringify(dataFile)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return dataFile;
};

/**
 * @function debugSettingsEnabledLogic
 * @description Runs the logic to determine if a debug configuration setting can be found or not.
 * @param {object} mergedData The data that was loaded and merged, should be checked for a debug configuration setting flag.
 * @return {boolean} True or False to indicate if the configuration debug setting was set to true or false,
 * no matter where the setting was found (D-data structure or in the mergedData object).
 * @author Seth Hollingsead
 * @date 2021/12/21
 * @NOTE: This logic is really critical for optimizing performance, while also enabling rich/powerful debugging capabilities!
 */
function debugSettingsEnabledLogic(mergedData) {
  let functionName = debugSettingsEnabledLogic.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`mergedData is: ${JSON.stringify(mergedData)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cmergedDataIs + JSON.stringify(mergedData));
  let debugConfigurationSettingValue = false;
  let systemDotDebugSettings = wrd.csystem + bas.cDot + cfg.cdebugSettings;

  if (!mergedData[wrd.csystem] && !D[wrd.csystem]) {
    // console.log('!mergedData[wrd.csystem] && !D[wrd.csystem] === true');
    loggers.consoleLog(namespacePrefix + functionName, msg.ccdebugSettingsEnabledLogic01);
    debugConfigurationSettingValue = false;
  } else if (!mergedData[wrd.csystem] && D[wrd.csystem]) {
    // console.log('!mergedData[wrd.csystem] && D[wrd.csystem] === true');
    loggers.consoleLog(namespacePrefix + functionName, msg.ccdebugSettingsEnabledLogic02);
    if (D[wrd.csystem][systemDotDebugSettings]) {
      // console.log('D[wrd.csystem][systemDotDebugSettings] === true');
      loggers.consoleLog(namespacePrefix + functionName, msg.ccdebugSettingsEnabledLogic03);
      debugConfigurationSettingValue = true;
    } else {
      // console.log('D[wrd.csystem][systemDotDebugSettings] === false');
      loggers.consoleLog(namespacePrefix + functionName, msg.ccdebugSettingsEnabledLogic04);
      debugConfigurationSettingValue = false;
    }
  } else if (mergedData[wrd.csystem] && !D[wrd.csystem]) {
    // console.log('mergedData[wrd.csystem] && !D[wrd.csystem] === true');
    loggers.consoleLog(namespacePrefix + functionName, msg.ccdebugSettingsEnabledLogic05);
    if (mergedData[wrd.csystem][systemDotDebugSettings]) {
      // console.log('mergedData[wrd.csystem][systemDotDebugSettings] === true');
      loggers.consoleLog(namespacePrefix + functionName, msg.ccdebugSettingsEnabledLogic06);
      debugConfigurationSettingValue = true;
    } else {
      // console.log('mergedData[wrd.csystem][systemDotDebugSettingss] === false');
      loggers.consoleLog(namespacePrefix + functionName, msg.ccdebugSettingsEnabledLogic07);
      debugConfigurationSettingValue = false;
    }
  } else { // Only possible case left is they are both equal to something!
    // console.log('else mergedData[wrd.csystem] && D[wrd.csystem] === true');
    loggers.consoleLog(namespacePrefix + functionName, msg.ccdebugSettingsEnabledLogic08);
    if (!mergedData[wrd.csystem][systemDotDebugSettings] && !D[wrd.csystem][systemDotDebugSettings]) {
      // console.log('!mergedData[wrd.csystem][systemDotDebugSettings] && !D[wrd.csystem][systemDotDebugSettings] === true');
      loggers.consoleLog(namespacePrefix + functionName, msg.ccdebugSettingsEnabledLogic09);
      debugConfigurationSettingValue = false;
    } else if (!mergedData[wrd.csystem][systemDotDebugSettings] && D[wrd.csystem][systemDotDebugSettings]) {
      // console.log('!mergedData[wrd.csystem][systemDotDebugSettings] && D[wrd.csystem][systemDotDebugSettings] === true');
      loggers.consoleLog(namespacePrefix + functionName, msg.ccdebugSettingsEnabledLogic10);
      debugConfigurationSettingValue = true;
    } else if (mergedData[wrd.csystem][systemDotDebugSettings] && !D[wrd.csystem][systemDotDebugSettings]) {
      // console.log('mergedData[wrd.csystem][systemDotDebugSettings] && !D[wrd.csystem][systemDotDebugSettings] === true');
      loggers.consoleLog(namespacePrefix + functionName, msg.ccdebugSettingsEnabledLogic11);
      debugConfigurationSettingValue = true;
    } else { // Only possible case left is they are both equal to something!
      // console.log('mergedData[wrd.csystem][systemDotDebugSettings] && D[wrd.csystem][systemDotDebugSettings] === true');
      loggers.consoleLog(namespacePrefix + functionName, msg.ccdebugSettingsEnabledLogic12);
      debugConfigurationSettingValue = true;
    }
  }
  // console.log(`debugConfigurationSettingValue is: ${debugConfigurationSettingValue}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cdebugConfigurationSettingValueIs + debugConfigurationSettingValue);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return debugConfigurationSettingValue;
};

module.exports = {
  [fnc.cscanDataPath]: (dataPath) => scanDataPath(dataPath),
  [fnc.cloadAllJsonData]: (filesToLoad, contextName) => loadAllJsonData(filesToLoad, contextName)
};
