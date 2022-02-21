/**
 * @file chiefData.js
 * @module chiefData
 * @description Contains all the functions to manage the loading and processing of data,
 * such as XML files, CSV files or JSON files. Additional file type processing should be added in this module.
 * @requires module:dataBroker
 * @requires module:basic.constants
 * @requires module:configuration.constants
 * @requires module:function.constants
 * @requires module:message.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @requires module:configurator
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/13
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import dataBroker from '../brokers/dataBroker.js';
import * as bas from '../constants/basic.constants.js';
import * as cfg from '../constants/configuration.constants.js';
import * as fnc from '../constants/function.constants.js';
import * as msg from '../constants/message.constants.js';
import * as sys from '../constants/system.constants.js';
import * as wr1 from '../constants/word1.constants.js';
import configurator from '../executrix/configurator.js';
import loggers from '../executrix/loggers.js';
// External imports
import path from 'path';

const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// controllers.chiefData.
const namespacePrefix = wr1.ccontrollers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function searchForUniversalDebugConfigSetting
 * @description Searches all of the config data files for a general solution to the
 * debugSettings configuration setting.
 * @param {string} appConfigPathName The name of the configuration setting
 * that has the path for the appConfigPath.
 * @param {string} frameworkConfigPathName The name of the configuration setting
 * that has the path for the frameworkConfigPath.
 * @param {string} contextName The context name that should be used when adding data to the D data structure.
 * @return {boolean} A True or False to indicate if the debugSettings was found to be
 * true in either of the configuration settings (appConfig Or frameworkConfig).
 * @NOTE Cannot use the loggers here, because dependency data will have never been loaded.
 */
function searchForUniversalDebugConfigSetting(appConfigPathName, frameworkConfigPathName, contextName) {
  let functionName = searchForUniversalDebugConfigSetting.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`appConfigPathName is: ${appConfigPathName}`);
  // console.log(`frameworkConfigPathName is: ${frameworkConfigPathName}`);
  // console.log(`contextName is: ${contextName}`);
  let universalDebugConfigSetting = false;
  let appConfigDataPath = configurator.getConfigurationSetting(wr1.csystem, appConfigPathName);
  let frameworkConfigDataPath = configurator.getConfigurationSetting(wr1.csystem, frameworkConfigPathName);
  appConfigDataPath = path.resolve(appConfigDataPath);
  frameworkConfigDataPath = path.resolve(frameworkConfigDataPath);
  let appConfigFilesToLoad = dataBroker.scanDataPath(appConfigDataPath, contextName);
  let frameworkConfigFilesToLoad = dataBroker.scanDataPath(frameworkConfigDataPath, contextName);
  configurator.setConfigurationSetting(wr1.csystem, cfg.cappConfigFiles, appConfigFilesToLoad);
  configurator.setConfigurationSetting(wr1.csystem, cfg.cframeworkConfigFiles, frameworkConfigFilesToLoad);
  universalDebugConfigSetting = dataBroker.findUniversalDebugConfigSetting(
    appConfigFilesToLoad, frameworkConfigFilesToLoad
  );
  configurator.setConfigurationSetting(wr1.csystem, cfg.cdebugSettings, universalDebugConfigSetting);
  // console.log(`universalDebugConfigSetting is: ${universalDebugConfigSetting}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return universalDebugConfigSetting;
};

/**
 * @function getAndProcessCsvData
 * @description Loads the specified file, parses it and converts all the data to the appropriate fromat.
 * @param {string} pathAndFilename The path and file name of the CSV file that should be loaded and parsed into JSON objects.
 * @param {string} contextName The name that should be used when adding the objects to the D data structure for data-sharing.
 * @return {object} A parsed CSV JSON object where allthe values have been converted from their string representation into actual values of appropriate type.
 * @author Seth Hollingsead
 * @date 2022/02/17
 */
function getAndProcessCsvData(pathAndFilename, contextName) {
  let functionName = getAndProcessCsvData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // cpathAndFilename is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpathAndFilenameIs + pathAndFilename);
  // contextName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  pathAndFilename =path.resolve(pathAndFilename);
  let loadedData = dataBroker.getCsvData(pathAndFilename);
  // Now pre-process the data into a usable format, string-numbers to actual numbers, string-booleans to actual booleans, etc...
  let allLoadedData = dataBroker.getAndProcessCsvData(loadedData, contextName);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return allLoadedData;
};

/**
 * @function getAndProcessXmlData
 * @description Loads the specified file, parses it and converts all values into their appropriate data types.
 * @param {string} pathAndFilename The path and file name of the XML file that should be loaded and parsed into JSON objects.
 * @return {object} A parsed XML JSON object where all the values have been converted from their strign representation into actual values of appropriate type.
 * @author Seth Hollingsead
 * @date 2022/02/17
 */
function getAndProcessXmlData(pathAndFilename) {
  let functionName = getAndProcessXmlData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pathAndFilename is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cpathAndFilenameIs + pathAndFilename);
  pathAndFilename = path.resolve(pathAndFilename);
  let allLoadedXmlData = dataBroker.getXmlData(pathAndFilename);
  // Now pre-process the data into a usable format, string-numbers to actual numbers, string-booleans to actual booleans, etc...
  let allXmlData = dataBroker.processXmlData(allLoadedXmlData);
  // allXmlData is:
  loggers.consoleLog(namespacePrefix + functionName, msg.callXmlDataIs + JSON.stringify(allXmlData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return allXmlData;
};

/**
 * @function setupAllCsvData
 * @description Sets up all of the specified CSV data.
 * @param {string} dataPathConfigurationName The name of the configuration setting that has the path we should search.
 * @param {string} contextName The context name that should be used when adding data to the D data structure.
 * @return {object} A JSON object that contains all of the data that was loaded from all the CSV files and merged together.
 * @author Seth Hollingsead
 * @date 2022/02/17
 */
function setupAllCsvData(dataPathConfigurationName, contextName) {
  let functionName = setupAllCsvData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataPathConfigurationName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathConfigurationNameIs + dataPathConfigurationName);
  // contextName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let loadedAndMergedDataAllFiles = {};
  let dataPath = configurator.getConfigurationSetting(wr1.csystem, dataPathConfigurationName);
  dataPath = path.resolve(dataPath);
  // dataPath is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathIs + dataPath);
  let filesToLoad = dataBroker.scanDataPath(dataPath);
  // filesToLoad is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cfilesToLoadIs + JSON.stringify(filesToLoad));
  loadedAndMergedDataAllFiles = dataBroker.loadAllCsvData(filesToLoad, contextName);
  // loadedAndMergedDataAllFiles is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cloadedAndMergedDataAllFilesIs + JSON.stringify(loadedAndMergedDataAllFiles));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return loadedAndMergedDataAllFiles;
};

/**
 * @function setupAllXmlData
 * @description Sets up all of the specified XML data.
 * @param {string} dataPathConfigurationName The name of the configuration setting that has the path we should search.
 * @param {string} contextName The context name that should be used when addng data to the D data structure.
 * @return {object} A JSON object that contains all of the data that was loaded from all the XML files and merged together.
 * @author Seth Hollingsead
 * @date 2022/02/17
 */
function setupAllXmlData(dataPathConfigurationName, contextName) {
  let functionName = setupAllXmlData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // dataPathConfigurationName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathConfigurationNameIs + dataPathConfigurationName);
  // contextName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  let loadedAndMergedDataAllFiles = {};
  let dataPath = configurator.getConfigurationSetting(wr1.csystem, dataPathConfigurationName);
  dataPath = path.resolve(dataPath);
  // dataPath is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathIs + dataPath);
  let filesToLoad = dataBroker.scanDataPath(dataPath);
  // filesToLoad is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cfilesToLoadIs + JSON.stringify(filesToLoad));
  loadedAndMergedDataAllFiles = dataBroker.loadAllXmlData(filesToLoad, contextName);
  // loadedAndMergedDataAllFiles is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cloadedAndMergedDataAllFilesIs + JSON.stringify(loadedAndMergedDataAllFiles));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return loadedAndMergedDataAllFiles;
};

/**
 * @function setupAllJsonConfigData
 * @description Sets up all of the JSON data at the specified configuration path.
 * @param {string} dataPathConfigurationName The name of the configuration setting that has the path we should search.
 * @param {string} contextName The context name that should be used when adding data to the D data structure.
 * @return {object} A JSON object that contains all of the data that was loaded and merged together.
 * @author Seth Hollingsead
 * @date 2021/03/31
 * @NOTE Cannot use the loggers here, because dependency data will have never been loaded.
 */
function setupAllJsonConfigData(dataPathConfigurationName, contextName) {
  let functionName = setupAllJsonConfigData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`dataPathConfigurationName is: ${dataPathConfigurationName}`);
  // console.log(`contextName is: ${contextName}`);
  let loadedAndMergedDataAllFiles = {};
  let filesToLoad = [];
  if (dataPathConfigurationName === sys.cappConfigPath) {
    filesToLoad = configurator.getConfigurationSetting(wr1.csystem, cfg.cappConfigFiles);
  } else if (dataPathConfigurationName === sys.cframeworkConfigPath) {
    filesToLoad = configurator.getConfigurationSetting(wr1.csystem, cfg.cframeworkConfigFiles);
  }
  loadedAndMergedDataAllFiles = dataBroker.loadAllJsonData(filesToLoad, contextName);
  // console.log(`loadedAndMergedDataAllFiles is: ${JSON.stringify(loadedAndMergedDataAllFiles)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return loadedAndMergedDataAllFiles;
};

export default {
  [fnc.csearchForUniversalDebugConfigSetting]: (appConfigPathName, frameworkConfigPathName, contextName) => searchForUniversalDebugConfigSetting(
    appConfigPathName, frameworkConfigPathName, contextName),
  [fnc.cgetAndProcessCsvData]: (pathAndFilename, contextName) => getAndProcessCsvData(pathAndFilename, contextName),
  [fnc.cgetAndProcessXmlData]: (pathAndFilename) => getAndProcessXmlData(pathAndFilename),
  [fnc.csetupAllCsvData]: (dataPathConfigurationName, contextName) => setupAllCsvData(dataPathConfigurationName, contextName),
  [fnc.csetupAllXmlData]: (dataPathConfigurationName, contextName) => setupAllXmlData(dataPathConfigurationName, contextName),
  [fnc.csetupAllJsonConfigData]: (dataPathConfigurationName, contextName) => setupAllJsonConfigData(dataPathConfigurationName, contextName)
};
