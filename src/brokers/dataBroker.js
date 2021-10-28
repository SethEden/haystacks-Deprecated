/**
 * @file dataBroker.js
 * @module dataBroker
 * @description Contains all of the lower level data processing functions,
 * and also acts as an interface for calling the fileBroker.
 * @requires module:ruleBroker
 * @requires module:fileOperations
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/15
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var ruleBroker = require('./ruleBroker');
var fileOperations = require('../executrix/fileOperations');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = `brokers.${baseFileName}.`;

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
  // let functionName = scanDataPath.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`dataPath is: ${dataPath}`);
  let rules = {};
  let filesFound = [];
  rules[0] = 'swapBackSlashToForwardSlash';
  console.log(`execute business rules: ${JSON.stringify(rules)}`);
  dataPath = ruleBroker.processRules(dataPath, '', rules);
  console.log(`dataPath after business rules processing is: ${dataPath}`);
  filesFound = fileOperations.readDirectoryContents(dataPath);
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
  let foundSystemData = false;
  let systemConfigFileName = 'framework.system.json';
  let applicationConfigFileName = 'application.system.json';
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
      multiMergedData['system'] = {};
      multiMergedData['system'] = dataFile;
      foundSystemData = true;
    }
    if (foundSystemData === true) {
      break;
    }
  }

  // Now we need to determine if we should load the rest of the data.
  if (multiMergedData['system']['system.enableDebugConfigurationSettings']) {
    if (multiMergedData['system']['system.enableDebugConfigurationSettings'] === true ||
    multiMergedData['system']['system.enableDebugConfigurationSettings'].toUpperCase() === 'TRUE') {
      for (let j = 0; j < filesToLoad.length; j++) {
        let fileToLoad = filesToLoad[j];
        if (!fileToLoad.includes(systemConfigFileName) && !fileToLoad.includes(applicationConfigFileName)
        && fileToLoad.toUpperCase().includes('.JSON')) {
          let dataFile = preprocessJsonFile(fileToLoad);

          if (!multiMergedData['debugSettings']) {
            multiMergedData['debugSettings'] = {};
            multiMergedData['debugSettings'] = dataFile;
          } else {
            Object.assign(multiMergedData['debugSettings'], dataFile);
          }
        }
      }
    }
  }
  parsedDataFile = multiMergedData;
  // console.log(`parsedDataFile is: ${JSON.stringify(parsedDataFile)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
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
  let filePathRules = {};
  filePathRules[0] = 'swapDoubleForwardSlashToSingleForwardSlash'
  console.log(`execute business rules: ${JSON.stringify(filePathRules)}`);
  let finalFileToLoad = ruleBroker.processRules(fileToLoad, '', filePathRules);
  let dataFile = fileOperations.getJsonData(finalFileToLoad);
  // console.log(`dataFile is: ${JSON.stringify(dataFile)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return dataFile;
};

module.exports = {
  ['scanDataPath']: (dataPath) => scanDataPath(dataPath),
  ['loadAllJsonData']: (filesToLoad, contextName) => loadAllJsonData(filesToLoad, contextName)
};
