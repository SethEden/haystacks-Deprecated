/**
 * @file dataBroker.js
 * @module dataBroker
 * @description Contains all of the lower level data processing functions,
 * and also acts as an interface for calling the fileOperations.
 * @requires module:ruleBroker
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/15
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleBroker from './ruleBroker.js';
import configurator from '../executrix/configurator.js';
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cfg, fnc, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// brokers.dataBroker.
const namespacePrefix = wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

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
  let rules = [biz.cswapBackSlashToForwardSlash, biz.creadDirectoryContents];
  let filesFound = [];
  // console.log(`execute business rules: ${JSON.stringify(rules)}`);
  filesFound = ruleBroker.processRules(dataPath, '', rules);
  loggers.consoleLog(namespacePrefix + functionName, msg.cfilesFoundIs + JSON.stringify(filesFound));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`filesFound is: ${JSON.stringify(filesFound)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return filesFound;
};

/**
 * @function findUniversalDebugConfigSetting
 * @description Determines if there is any True setting for the debug settings
 * in either the application system config or the framework system config files.
 * @param {array<string>} appConfigFilesToLoad The list of files for the app config files.
 * @param {array<string>} frameworkConfigFilesToLoad The list of files for the framework config files.
 * @return {boolean} A True or False value to indicate if debug setting value is set in
 * either the app config system file or the framework config system file.
 * @author Seth Hollingsead
 * @date 2022/01/18
 */
function findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad) {
  let functionName = findUniversalDebugConfigSetting.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`appConfigFilesToLoad is: ${JSON.stringify(appConfigFilesToLoad)}`);
  // console.log(`frameworkConfigFilesToLoad is: ${JSON.stringify(frameworkConfigFilesToLoad)}`);
  let universalDebugConfigSetting = false;
  let appConfigDebugSetting = false;
  let frameworkConfigDebugSetting = false;
  appConfigDebugSetting = findIndividualDebugConfigSetting(appConfigFilesToLoad);
  frameworkConfigDebugSetting = findIndividualDebugConfigSetting(frameworkConfigFilesToLoad);
  if (appConfigDebugSetting === true || frameworkConfigDebugSetting === true) {
    universalDebugConfigSetting = true;
  }
  // console.log(`universalDebugConfigSetting is: ${universalDebugConfigSetting}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return universalDebugConfigSetting;
};

/**
 * @function findIndividualDebugConfigSetting
 * @description Finds if a debugSetting is set for a particular set of config files.
 * @param {array<string>} filesToLoad A list of files that should be searched for
 * a system config file and then for a debugSetting in that file.
 * @return {boolean} A True or False value to indicate what the value of
 * the debug setting is for the set of system config files.
 * @author Seth Hollingsead
 * @date 2022/01/18
 */
function findIndividualDebugConfigSetting(filesToLoad) {
  let functionName = findIndividualDebugConfigSetting.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`filesToLoad is: ${JSON.stringify(filesToLoad)}`);
  let individualDebugConfigSetting = false;
  let foundSystemData = false;
  let systemConfigFileName = sys.csystemConfigFileName; // 'framework.system.json';
  let applicationConfigFileName = sys.capplicationConfigFileName; // 'application.system.json';
  let multiMergedData = {};
  let systemDotDebugSettings = wrd.csystem + bas.cDot + cfg.cdebugSettings;

  for (let i = 0; i < filesToLoad.length; i++) {
    let fileToLoad = filesToLoad[i];
    // console.log('fileToLoad is: ' + fileToLoad);
    if (fileToLoad.includes(systemConfigFileName) || fileToLoad.includes(applicationConfigFileName)) {
      let dataFile = preprocessJsonFile(fileToLoad);
      multiMergedData[wrd.csystem] = {};
      multiMergedData[wrd.csystem] = dataFile;
      foundSystemData = true;
    }
    if (foundSystemData === true) {
      break;
    }
  }
  if (multiMergedData[wrd.csystem]) {
    if (multiMergedData[wrd.csystem][systemDotDebugSettings]) {
      individualDebugConfigSetting = true;
    }
  }
  // console.log(`individualDebugConfigSetting is: ${individualDebugConfigSetting}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return individualDebugConfigSetting;
};

/**
 * @function loadAllCsvData
 * @description Loads al of the contents of all files and  folders and sub-folders at the specified path and builds a list of files to load,
 * then loads them accordingly in the D.contextName_fileName.
 * @param {array<string>} filesToLoad The data structure containing all of the files to load data from.
 * @param {string} contextName The context name that should be used when adding data to the D data structure.
 * @return {object} The data in a JSON object after it was loaded from the file.
 * @author Seth Hollingsead
 * @date 2022/01/27
 */
function loadAllCsvData(filesToLoad, contextName) {
  let functionName = loadAllCsvData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // filesToLoad is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cfilesToLoadIs + JSON.stringify(filesToLoad));
  // contextName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  // let rules = [biz.cgetFileNameFromPath, biz.cremoveFileExtensionFromFileName];
  let parsedDataFile;
  for (let i = 0; i < filesToLoad.length; i++) {
    let fileToLoad = filesToLoad[i];
    // File to load is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cFileToLoadIs + fileToLoad);
    // NOTE: We still need a filename to use as a context for the page data that we just loaded.
    // A context name will be composed of the input context name wtih the file name we are processing
    // which tells us where we will put the data in the D[contextName] sub-structure.
    let fileExtension = ruleBroker.processRules(fileToLoad, '', [biz.cgetFileExtension, biz.cremoveDotFromFileExtension]);
    // fileExtension is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cfileExtensionIs + fileExtension);
    if (fileExtension === gen.ccsv || fileExtension === gen.cCsv || fileExtension === gen.cCSV) {
      // execute business rules:
      // loggers.consoleLog(namespacePrefix + functionName, msg.cexecuteBusienssRulesColon + JSON.stringify(rules));
      // This next line is commented out because it was resulting in colors_colors, which didn't make any sense.
      // contextName = contextName + bas.cUnderscore + ruleBroker.processRules(fileToLoad, '', rules);

      // contextName is:
      loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
      let dataFile = ruleBroker.processRules(fileToLoad, '', [biz.cgetCsvData]);
      // loaded file data is:
      loggers.consoleLog(namespacePrefix + functionName , msg.cloadedFileDataIs + JSON.stringify(dataFile));
      parsedDataFile = processCsvData(dataFile, contextName);
    } // End-if (fileExtension === gen.ccsv || fileExtension === gen.cCsv || fileExtension === gen.cCSV)
  } // End-for (let i = 0; i < filesToLoad.length; i++)
  // parsedDataFile is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cparsedDataFileIs + JSON.stringify(parsedDataFile));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return parsedDataFile;
};

/**
 * @function loadedAllXmlData
 * @description Loads all the context of all files and folders and sub-folders at the specified apth and builds a list of files to load,
 * then loads them accordingly in the D.contextName_fileName.
 * @param {array<string>} filesToLoad The data structure containing all of the files to load data from.
 * @param {string} contextName The context name that should be used when adding data to the D data structure.
 * @return {object} A JSON object that contains all of the data that was loaded and parsed from all the input files list.
 * @author Seth Hollingsead
 * @date 2022/01/27
 */
function loadAllXmlData(filesToLoad, contextName) {
  let functionName = loadAllXmlData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // filesToLoad is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cfilesToLoadIs + JSON.stringify(filesToLoad));
  // contextName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let j = 0;
  let multiMergedData = {};
  let parsedDataFile = {};
  let fileNameRules = [biz.cgetFileNameFromPath, biz.cremoveFileExtensionFromFileName];
  for (let i = 0; i < filesToLoad.length; i++) {
    loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_ithLoop + i);
    let fileToLoad = filesToLoad[i];
    fileToLoad = ruleBroker.processRules(fileToLoad, '', [biz.cswapDoubleForwardSlashToSingleForwardSlash]);
    // File to load is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cFileToLoadIs + fileToLoad);
    // NOTE: We still need a filename to use as a cotnext for the page data that we just loaded.
    // A context name will be composed of the input context name with the file name we are processing
    // wich tells us where we wll ptu the data in the D[contextName] sub-structure.
    let fileExtension = ruleBroker.processRules(fileToLoad, '', [biz.cgetFileExtension, biz.cremoveDotFromFileExtension]);
    // fileExtension is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cfileExtensionIs + fileExtension);
    if (fileExtension === gen.cxml || fileExtension === gen.cXml || fileExtension === gen.cXML) {
      // execute business rules:
      loggers.consoleLog(namespacePrefix + functionName, msg.cexecuteBusinessRulesColon + JSON.stringify(fileNameRules));
      contextName = contextName + bas.cUnderscore + ruleBroker.processRules(fileToLoad, '', fileNameRules);
      // contextName is:
      loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
      let dataFile = ruleBroker.processRules(fileToLoad, '', [biz.cgetXmlData]);
      // loaded file data is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cloadedFileDataIs + JSON.stringify(dataFile));
      // BEGIN PROCESSING ADDITIONAL DATA
      loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_PROCESSING_ADDITIONAL_DATA);
      if (j === 0) {
        j++;
        multiMergedData = dataFile;
      } else {
        j++;
        multiMergedData = mergeData(multiMergedData, wrd.cPage, '', dataFile);
      }
      // DONE PROCESSING ADDITIONAL DATA
      loggers.consoleLog(namespacePrefix + functionName, msg.cDONE_PROCESSING_ADDITIONAL_DATA);
      // MERGED data is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cMERGED_dataIs + JSON.stringify(multiMergedData));
      dataFile = {};
    } // End-if (fileExtension === gen.cxml || fileExtension === gen.cXml || fileExtension === gen.cXML)
    loggers.consoleLog(namespacePrefix + functionName, msg.cEND_ithLoop + i);
  } // End-for (let i = 0; i < filesToLoad.length; i++)
  parsedDataFile = {}; // Clear it, so we can re-assign it to the merged locator data or whatever kind of data it is from all files.
  parsedDataFile = processXmlData(multiMergedData, contextName);
  // parsedDataFile contents are:
  loggers.consoleLog(namespacePrefix + functionName, msg.cparsedDataFileContentsAre + JSON.stringify(parsedDataFile));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return parsedDataFile;
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
  // filesToLoad is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cfilesToLoadIs + JSON.stringify(filesToLoad));
  // contextName is:
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
    // console.log('fileToLoad is: ' + fileToLoad);
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
  if (configurator.getConfigurationSetting(wrd.csystem, cfg.cdebugSettings) === true) {
    for (let j = 0; j < filesToLoad.length; j++) {
      let fileToLoad = filesToLoad[j];
      if (!fileToLoad.includes(systemConfigFileName) && !fileToLoad.includes(applicationConfigFileName)
      && fileToLoad.toUpperCase().includes(gen.cDotJSON) && !fileToLoad.toLowerCase().includes(wrd.cmetadata + gen.cDotjson)) {
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
 * @function processCsvData
 * @description Processes all of the CSV data into a usable format and executes any additional processing rules.
 * @param {object} data A JSON object that contains all of the data loaded from a CSV file.
 * @param {string} contextName The name that should be used when adding the objects to the D data structure for data-sharing.
 * @return {object} A parsed and cleaned up JSON object where all of the CSV data is collated and organized and cleaned up ready for use.
 * @author Seth Hollingsead
 * @date 2022/01/27
 */
function processCsvData(data, contextName) {
  let functionName = processCsvData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // input data is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(data));
  // contextName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let parsedData = extractDataFromPapaParseObject(data, contextName);
  let dataCatagory = getDataCatagoryFromContextName(contextName);
  // dataCatagory is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataCatagoryIs + dataCatagory);
  let dataCatagoryDetailName;
  if (contextName.includes(wrd.cWorkflow)) {
    // Processing a workflow
    Object.assign(D[wrd.cWorkflow], parsedData[contextName]);
  } else if (contextName.includes(wrd.ccolors)) {
    D[wrd.ccolors] = {};
    Object.assign(D[wrd.ccolors], parsedData);
  } else {
    // Processing all other kinds of files.
    if (typeof D[dataCatagory] !== 'undefined' && D[dataCatagory]) {
      Object.assign(D[dataCatagory], parsedData);
      mergeData(D, dataCatagory, '', 0, parsedData);
    } else {
      D[dataCatagory] = {};
      Object.assign(D[dataCatagory], parsedData);
      mergeData(D, dataCatagory, '', 0, parsedData);
    }
  }
  // fully parsed data is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cfullyParsedDataIs + JSON.stringify(parsedData));
  // D final merge is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cD_finalMergeIs + JSON.stringify(D));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return parsedData;
};

/**
 * @function processXmlData
 * @description Does some final processing on JSON data loaded from an XML file,
 * converting the data into a usable format and executes any additional data processing rules.
 * @param {object} data A JSON object that contains all of the data loaded from a XML file.
 * @param {string} contextName The name that should be used when adding the objects to the D data structure for data-sharing.
 * @return {object} A parsed and cleaned up JSON object where all of the XML data is collated and organized and cleaned up ready for use.
 * @author Seth Hollingsead
 * @date 2022/02/22
 */
function processXmlData(data, contextName) {
  let functionName = processXmlData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // input data is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(data));
  // contextName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let dataCatagory = getDataCatagoryFromContextName(contextName);
  // dataCatagory is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataCatagoryIs + dataCatagory);
  let parsedDataFile = {};
  if (dataCatagory === sys.cCommandsAliases) {
    parsedDataFile[sys.cCommandsAliases] = {};
    parsedDataFile[sys.cCommandsAliases][wrd.cCommands] = {};
    for (let i = 0; i < data[sys.cCommandsAliases][wrd.cCommand].length; i++) {
      let command = data[sys.cCommandsAliases][wrd.cCommand][i][bas.cDollar];
      parsedDataFile[sys.cCommandsAliases][wrd.cCommands][command.Name] = command;
    } // End-for (let i = 0; i < data[sys.cCommandAliases][wrd.cCommand].length; i++)
  } else if (dataCatagory === sys.cCommandWorkflows) { // End-if (dataCatagory === sys.cCommandsAliases)
    parsedDataFile[sys.cCommandWorkflows] = {};
    parsedDataFile[sys.cCommandWorkflows][wrd.cWorkflows] = {};
    for (let j = 0; j < data[sys.cCommandWorkflows][wrd.cWorkflow].length; j++) {
      let workflow = data[sys.cCommandWorkflows][wrd.cWorkflow][j][bas.cDollar];
      parsedDataFile[sys.cCommandWorkflows][wrd.cWorkflows][workflow.Name] = workflow;
    } // End-for (let j = 0; j < data[sys.cCommandWorkflows][wrd.cWorkflow].length; j++)
  } // End-else-if (dataCatagory === sys.cCommandWorkflows)

  // parsedDataFile is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cparsedDataFileIs + JSON.stringify(parsedDataFile));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return parsedDataFile;
};

/**
 * @function preprocessJsonFile
 * @description Load all of the data from a single JSON data file.
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
  let filePathRules = [biz.cswapDoubleForwardSlashToSingleForwardSlash, biz.cgetJsonData];
  // console.log(`execute business rules: ${JSON.stringify(filePathRules)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cexecuteBusinessRules + JSON.stringify(filePathRules));
  let dataFile = ruleBroker.processRules(fileToLoad, '', filePathRules);
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataFileIs + JSON.stringify(dataFile));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`dataFile is: ${JSON.stringify(dataFile)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return dataFile;
};

/**
 * @function writeJsonDataToFile
 * @description This is a wrapper function for businessRules.rules.fileOperations.writeJsonData.
 * @param {string} fileToSaveTo The full path to the file that should have the data written to it.
 * @param {object} dataToWriteOut The JSON data that should be written out to the specified JSON file.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/11
 */
function writeJsonDataToFile(fileToSaveTo, dataToWriteOut) {
  let functionName = writeJsonDataToFile.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cfileToSaveToIs + fileToSaveTo);
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataToWriteOutIs + JSON.stringify(dataToWriteOut));
  let fileWriteRules = [biz.cwriteJsonData];
  let writeSuccess = ruleBroker.processRules(path.resolve(fileToSaveTo), dataToWriteOut, fileWriteRules);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function setupDataStorage
 * @description Does the initial setup of data storage on the D data structure.
 * @return {void} Nothing to return.
 * @author Seth Hollingsead
 * @date 2022/01/20
 */
function setupDataStorage() {
  let functionName = storeData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  D[sys.cDataStorage] = {};
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function storeData
 * @description Stores some data in a data storage hive on the D data structure, under a caller specified sub-data storage hie name.
 * @param {string} dataStorageContextName The sub-data storage hive under-which the data should be stored.
 * @param {string|boolean|integer|float|array|object} dataToStore The data that should be stored, in any format.
 * @return {boolean} A True or False to indicate if the data storage was successful or not.
 * @author Seth Hollingsead
 * @date 2022/01/20
 */
function storeData(dataStorageContextName, dataToStore) {
  let functionName = storeData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataStorageContextName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataStorageContextNameIs + dataStorageContextName);
  // data To Store is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataToStoreIs + JSON.stringify(dataToStore));
  let returnData = false;
  D[sys.cDataStorage][dataStorageContextName] = {};
  D[sys.cDataStorage][dataStorageContextName] = dataToStore;
  returnData = true;
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getData
 * @description Gets some data from a caller specified sub-data storage hive name.
 * @param {string} dataStorageContextName The sub-data storage hive which should be retrieved.
 * @return {object} the data that is found, if any at the specified location on the data storage hive.
 * @author Seth Hollingsead
 * @date 2022/01/20
 */
function getData(dataStorageContextName) {
  let functionName = storeData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataStorageContextName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataStorageContextNameIs + dataStorageContextName);
  let returnData = false;
  if (D[sys.cDataStorage][dataStorageContextName] !== null && !!D[sys.cDataStorage][dataStorageContextName]) {
    returnData = D[sys.cDataStorage][dataStorageContextName];
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function clearData
 * @description Clears out all of the data stored in the DataStorage data hive of the D data structure,
 * or a particular stored data element if a contextName is provided.
 * @param {string} dataStorageContextName (OPTIONAL) The sub-data storage hive which should be cleared.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/01/20
 */
function clearData(dataStorageContextName) {
  let functionName = clearData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataStorageContextName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataStorageContextNameIs + dataStorageContextName);
  if (D[sys.cDataStorage][dataStorageContextName] !== null && !!D[sys.cDataStorage][dataStorageContextName] && dataStorageContextName !== '') {
    D[sys.cDataStorage][dataStorageContextName] = {};
  } else {
    D[sys.cDataStorage] = {};
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function initializeConstantsValidationData
 * @description Initializes the constants validation data structure.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/22
 */
function initializeConstantsValidationData() {
  let functionName = initializeConstantsValidationData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  D[sys.cConstantsValidationData] = {};
  D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {};
  D[sys.cConstantsValidationData][sys.cConstantsFileNames] = {};
  D[sys.cConstantsValidationData][sys.cConstantsPrefix] = {};
  D[sys.cConstantsValidationData][sys.cConstantsFilePaths] = {};
  D[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages] = {};
  D[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages] = {};
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function addConstantsValidationData
 * @description Adds a library of constants vaidation data to the existing constants vaidation data.
 * @param {array<array<string,object>>} constantLibraryData The array of data that should be added to the validation data et for the purpose of validation.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/22
 */
function addConstantsValidationData(constantLibraryData) {
  let functionName = addConstantsValidationData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // constantLibraryData is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cconstantLibraryDataIs + JSON.stringify(constantLibraryData));
  for (let key1 in constantLibraryData[sys.cConstantsValidationData]) {
    if (constantLibraryData[sys.cConstantsValidationData].hasOwnProperty(key1)) {
      if (key1 === sys.cConstantsFilePaths ||
      key1 === sys.cConstantsPhase1ValidationMessages ||
      key1 === sys.cConstantsPhase2ValidationMessages ||
      key1 === sys.cConstantsShortNames ||
      key1 === sys.cConstantsFileNames ||
      key1 === sys.cConstantsPrefix) {
        addDeeplyNestedConstantsValidationData(key1, constantLibraryData[sys.cConstantsValidationData][key1]);
      } else {
        let data1 = constantLibraryData[sys.cConstantsValidationData][key1];
        D[sys.cConstantsValidationData][key1] = [];
        Object.assign(D[sys.cConstantsValidationData][key1], data1);
      }
    } // End-if (constantLibraryData[sys.cConstantsValidationData].hasOwnProperty(key1))
  } // End-for (let key1 in constantLibraryData[sys.cConstantsValidationData])
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function addDeeplyNestedConstantsValidationData
 * @description Adds all the constants validation auxilary data that is deeply nested inside sub-data structures to the main D-data structure.
 * Such as file paths, and validation messages.
 * @param {string} contextName The name that should be used when accessing and alo adding the data to the D-data structure.
 * @param {array<array<string,object>>} deeplyNestedData The actual data that should be added.
 * @author Seth Hollingsead
 * @date 2022/03/22
 */
function addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData) {
  let functionName = addDeeplyNestedConstantsValidationData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // contextName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  // deeplyNestedData is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdeeplyNestedDataIs + JSON.stringify(deeplyNestedData));

  let d_dataStructureConstantsFilePaths = D[sys.cConstantsValidationData][contextName];
  for (let key2 in deeplyNestedData) {
    if (deeplyNestedData.hasOwnProperty(key2)) {
      let data2 = deeplyNestedData[key2];
      D[sys.cConstantsValidationData][contextName][key2] = data2;
    }
  } // End-for (let key2 in deeplyNestedData)
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function getDataCatagoryFromContextName
 * @description Gets the data catagory, given the context name.
 * @param {string} contextName The context name which will be something like Applicatino_xxxx or Script_nnnn or Command_yyyy
 * @return {string} The string before the first cUnderscore (Application, Script, Command, etc).
 * @author Seth Hollingsead
 * @date 2022/01/27
 */
function getDataCatagoryFromContextName(contextName) {
  let functionName = getDataCatagoryFromContextName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // contextName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let dataCatagory = '';
  dataCatagory = ruleBroker.processRules(contextName, '', [biz.cgetDataCatagoryFromDataContextName]);
  // dataCatagory is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataCatagoryIs + dataCatagory);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return dataCatagory;
};

/**
 * @function getDataCatagoryDtailNameFromContextName
 * @description Gets the data catagory detail name, given the context name.
 * @param {string} contextName The name which will be somethinglike Command_ApiPost or Script_ApiMacroX.
 * @return {string} The string afer the first cUnderscore (ApiPost or ApiMacroX).
 * @author Seth Hollingsead
 * @date 2022/01/27
 */
function getDataCatagoryDetailNameFromContextName(contextName) {
  let functionName = getDataCatagoryFromContextName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // contextName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let dataCatagoryDetailName = '';
  dataCatagoryDetailName = ruleBroker.processRules(contextName, '', [biz.cgetDataCatagoryDetailNameFromDataContextName]);
  // dataCatagoryDetailsName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataCatagoryDetailsNameIs + dataCatagoryDetailName);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return dataCatagoryDetailName;
};

/**
 * @function extractDataFromPapaParseObject
 * @description Extracts the parsed data from the papa parse data object.
 * @param {object} data Contains the full contents of the papaparse data object, for which we need to get data out of.
 * @param {string} contextName The name of the context either Command, Macro from which data should be retrieved.
 * @return {object} The fully parsed data that we intend to use for the application.
 * @author Seth Hollingsead
 * @date 2022/01/27
 */
function extractDataFromPapaParseObject(data, contextName) {
  let functionName = extractDataFromPapaParseObject.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // input data is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(data));
  // contextName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let cleanKeysRules = [biz.ccleanCarriageReturnFromString];
  let tempData = {};
  let validDataAdded = false;
  if (contextName === wrd.ccolors) {
    contextName = sys.cColorData;
  }
  // contextName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  tempData[contextName] = {};
  let highLevelDataCount = Object.keys(data[wrd.cdata]).length;
  for (let i = 0; i <= highLevelDataCount; i++) {
    validDataAdded = false;
    let lowLevelTempData = {};
    if (contextName === sys.cColorData) {
      let colorName = '';
      for (let key in data[wrd.cdata][i]) {
        validDataAdded = true;
        let newKey = ruleBroker.processRules(key, '', cleanKeysRules);
        if (key === sys.cColorName) {
          colorName = data[wrd.cdata][i][key];
        }
        lowLevelTempData[newKey] = ruleBroker.processRules(data[wrd.cdata][i][key], '', cleanKeysRules);
      } // End-for (let key in data[wrd.cdata][i])
      if (validDataAdded === true) {
        tempData[contextName][colorName] = {};
        if (i === 0) {
          tempData[contextName][colorName] = lowLevelTempData;
        } else {
          Object.assign(tempData[contextName][colorName], lowLevelTempData);
        }
      } // End-if (validDataAdded === true)
    } else { // Else-clause (contextName === sys.cColorData)
      for (let key in data[wrd.cdata][i]) {
        validDataAdded = true;
        let newKey = ruleBroker.processRules(key, '', cleanKeysRules);
        lowLevelTempData[newKey] = ruleBroker.processRules(data[wrd.cdata][i][key], '', cleanKeysRules);
      } // End-for (let key in data[wrd.cdata][i])
      if (validDataAdded === true) {
        tempData[contextName][i] = {};
        if (i === 0) {
          tempData[contextName][i] = lowLevelTempData;
        } else {
          Object.assign(tempData[contextName][i], lowLevelTempData);
        }
      } // End-if (validDataAdded === true)
    } // End-else
  } // End-for (let i = 0; i <= highLevelDataCount; i++)
  // tempData is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ctempDataIs + JSON.stringify(tempData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return tempData;
};

/**
 * @function mergeData
 * @description Merge data with the D data structure for the specified data catagory and optional name.
 * @param {object} targetData The target data object where the dataToMerge should be merged with.
 * @param {string} dataCatagory Command or Script to indicate what catagory the test data should be used as.
 * @param {string} pageName (Optional) The name of the page where the data should be merged under. Pass as empty string if nothing.
 * @param {object} dataToMerge The data to be merged.
 * @return {object} A merged set of data combining all of the original data plus all of the additional data from the dataToMerge data set.
 * @author Seth Hollingsead
 * @date 2022/01/27
 */
function mergeData(targetData, dataCatagory, pageName, dataToMerge) {
  let functionName = mergeData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // targetData is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ctargetDataIs + JSON.stringify(targetData));
  // dataCatagory is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataCatagoryIs + dataCatagory);
  // pageName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpageNameIs + pageName);
  // data to Merge is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataToMergeIs + JSON.stringify(dataToMerge));
  let dataToMergeElementCount = getDataElementCount(dataToMerge, '', '');
  // dataToMergeElementCount is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataToMergeElementCountIs + dataToMergeElementCount);
  if (dataToMergeElementCount === 1) {
    // dataToMergeElementCoutn is 1
    loggers.consoleLog(namespacePrefix + functionName, msg.cdataToMergeElementCountIs1);
    // check if the pageName is not an empty string
    loggers.consoleLog(namespacePrefix + functionName, msg.ccheckIfThePageNameIsNotAnEmptyString);
    if (pageName !== '') {
      // pageName is not an empty string
      loggers.consoleLog(namespacePrefix + functionName, msg.cpageNameIsNotAnEmptyString);
      // Check if the dataCatagory is an emptys string or not
      loggers.consoleLog(namespacePrefix + functionName, msg.cCheckIfTheDataCatagoryIsAnEmptyStringOrNot);
      if (dataCatagory !== '') {
        // dataCatagory is not an empty string!
        loggers.consoleLog(namespacePrefix + functionName, msg.cdataCatagoryIsNotAnEmptyString);
        Object.assign(targetData[dataCatagory][pageName], dataToMerge);
      } else {
        // dataCatagory IS an empty sring!
        loggers.consoleLog(namespacePrefix + functionName, msg.cdataCatagoryIsAnEmptyString);
        // data to Merge is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cdataToMergeIs + JSON.stringify(dataToMerge));
        // targetData content is:
        loggers.consoleLog(namespacePrefix + functionName, msg.ctargetDataContentIs + JSON.stringify(targetData));
        Object.assign(targetData[pageName], dataToMerge);
        // after attempt to merge, results are:
        loggers.consoleLog(namespacePrefix + functionName, msg.caferAttemptToMergeResultsAre);
        // Merged data is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cMergedDataIs + JSON.stringify(dataToMerge));
        // targetData content is:
        loggers.consoleLog(namespacePrefix + functionName, msg.ctargetDataContentIs + JSON.stringify(targetData));
      }
    } else {
        // pageName is an empty string
        loggers.consoleLog(namespacePrefix + functionName, msg.cpageNameIsAnEmptyString);
        if (targetData[dataCatagory] === undefined) {
          targetData[dataCatagory] = {}; // Make sure to create a landing place for it, before we attempt to dump the data over there.
        }
        // Otherwise it will just throw an error.
        Object.assign(targetData[dataCatagory], dataToMerge);
    }
  } else {
    // Caught the special case that we are merging a flat list.
    loggers.consoleLog(namespacePrefix + functionName, msg.cCaughtTheSpecialCaseThatWeAreMergingFlatList);
    // targetData content is:
    loggers.consoleLog(namespacePrefix + functionName, msg.ctargetDataContentIs + JSON.stringify(targetData));
    for (let key in dataToMerge) {
      // inside the for-loop
      loggers.consoleLog(namespacePrefix + functionName, msg.cinsideTheForLoop);
      // key is:
      loggers.consoleLog(namespacePrefix + functionName, msg.ckeyIs + key);
      // pageName is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cpageNameIs + pageName);
      targetData[pageName][key] = dataToMerge[key];
    } // End-for (let key in dataToMerge)
  }
  // target data is modified in the input pass-by-reference variable content is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs +
    JSON.stringify(targetData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return targetData;
};

/**
 * @function getDataElement
 * @description Gets the named value from the data object then cleans it from any carriage return characters.
 * @param {object} dataObject The data object with all data.
 * @param {string} pageName The name of the page where the data should be found.
 * @param {string} elementName The name of the data element that should be found for the given page.
 * @return {string} The data element with all carriage return characters removed from it.
 * @author Seth Hollingsead
 * @date 2022/01/28
 */
function getDataElement(dataObject, pageName, elementName) {
  let functionName = getDataElement.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataObject value is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataObjectValueIs + JSON.stringify(dataObject));
  // pageName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpageNameIs + pageName);
  // elementName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.celementNameIs + elementName);
  let returnData = dataObject[pageName][elementName];
  let rules = [biz.ccleanCarriageReturnFromString];
  // execute business rules:
  loggers.consoleLog(namespacePrefix + functionName, msg.cexecuteBusinessRulesColon + JSON.stringify(rules));
  returnData = ruleBroker.processRules(returnData, '', rules);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getDataElementCount
 * @description Gets the count of the number of elements that match a given patern,
 * if an empty string is passed in for the pattern then the count of the collection is returned with no pattern matching.
 * @param {object} dataObject The data map with all data.
 * @param {string} pageName The name of the page were the data shoudl be found.
 * @param {string} elementNamePattern A string containing a pattern that should be matched in the object collection,
 * to establish a count of elements that match this pattern.
 * @return {integer} A count of either the number of data elements in the object collection,
 * or a count for the number of data elements that match a pattern that is passed in.
 * @author Seth Hollingsead
 * @date 2022/01/28
 */
function getDataElementCount(dataObject, pageName, elementNamePattern) {
  let functionName = getDataElementCount.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataObject is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataObjectIs + JSON.stringify(dataObject));
  // pageName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpageNameIs + pageName);
  // elementNamePattern is:
  loggers.consoleLog(namespacePrefix + functionName, msg.celementNamePatternIs + elementNamePattern);
  let elementCollection;
  let elementCount = 0;
  if (pageName === '') {
    elementCollection = dataObject;
  } else {
    elementCollection = dataObject[pageName];
  }
  if (!elementNamePattern || elementNamePattern === '') {
    elementCount = Object.keys(elementCollection).length;
  } else {
    for (let key in elementCollection) {
      if (elementCollection.hasOwnProperty(key)) {
        if (key.includes(elementNamePattern)) {
          elementCount++;
        }
      } // End-if (elementCollection.hasOwnProperty(key))
    } // End-for (let key in elementCollection)
  }
  // elementCount is:
  loggers.consoleLog(namespacePrefix + functionName, msg.celementCountIs + elementCount);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return elementCount;
};

export default {
  [fnc.cscanDataPath]: (dataPath) => scanDataPath(dataPath),
  [fnc.cfindUniversalDebugConfigSetting]: (appConfigFilesToLoad, frameworkConfigFilesToLoad) => findUniversalDebugConfigSetting(
    appConfigFilesToLoad, frameworkConfigFilesToLoad
  ),
  [fnc.cloadAllCsvData]: (filesToLoad, contextName) => loadAllCsvData(filesToLoad, contextName),
  [fnc.cloadAllXmlData]: (filesToLoad, contextName) => loadAllXmlData(filesToLoad, contextName),
  [fnc.cloadAllJsonData]: (filesToLoad, contextName) => loadAllJsonData(filesToLoad, contextName),
  [fnc.cprocessCsvData]: (data, contextName) => processCsvData(data, contextName),
  [fnc.cpreprocessJsonFile]: (fileToLoad) => preprocessJsonFile(fileToLoad),
  [fnc.cwriteJsonDataToFile]: (fileToSaveTo, dataToWriteOut) => writeJsonDataToFile(fileToSaveTo, dataToWriteOut),
  [fnc.csetupDataStorage]: () => setupDataStorage(),
  [fnc.cstoreData]: (dataStorageContextName, dataToStore) => storeData(dataStorageContextName, dataToStore),
  [fnc.cgetData]: (dataStorageContextName) => getData(dataStorageContextName),
  [fnc.cclearData]: (dataStorageContextName) => clearData(dataStorageContextName),
  [fnc.cinitializeConstantsValidationData]: () => initializeConstantsValidationData(),
  [fnc.caddConstantsValidationData]: (constantLibraryData) => addConstantsValidationData(constantLibraryData),
  [fnc.caddDeeplyNestedConstantsValidationData]: (contextName, deeplyNestedData) => addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData)
};
