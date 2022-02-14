/**
 * @file chiefData.js
 * @module chiefData
 * @description Contains all the functions to manage the loading and processing of data,
 * such as XML files, CSV files or JSON files. Additional file type processing should be added in this module.
 * @requires module:basic.constants
 * @requires module:configuration.constants
 * @requires module:function.constants
 * @requires module:message.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @requires module:dataBroker
 * @requires module:configurator
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/13
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

let bas = require('../constants/basic.constants.js');
let cfg = require('../constants/configuration.constants.js');
let fnc = require('../constants/function.constants.js');
let msg = require('../constants/message.constants.js');
let sys = require('../constants/system.constants.js');
let wr1 = require('../constants/word1.constants.js');
let dataBroker = require('../brokers/dataBroker.js');
let configurator = require('../executrix/configurator.js');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = wr1.ccontrollers + bas.cDot + baseFileName + bas.cDot;

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

module.exports = {
  [fnc.csearchForUniversalDebugConfigSetting]: (appConfigPathName, frameworkConfigPathName, contextName) => searchForUniversalDebugConfigSetting(
    appConfigPathName, frameworkConfigPathName, contextName
  ),
  [fnc.csetupAllJsonConfigData]: (dataPathConfigurationName, contextName) => setupAllJsonConfigData(dataPathConfigurationName, contextName)
};
