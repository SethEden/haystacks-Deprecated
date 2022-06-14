/**
 * @file configuration.js
 * @module configuration
 * @description Contains all of the configuration system commands.
 * @requires module:dataBroker
 * @requires module:ruleBroker
 * @requires module:themeBroker
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:data
 * @requires module:queue
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import dataBroker from '../../brokers/dataBroker.js';
import ruleBroker from '../../brokers/ruleBroker.js';
import themeBroker from '../../brokers/themeBroker.js';
import configurator from '../../executrix/configurator.js';
import loggers from '../../executrix/loggers.js';
import D from '../../structures/data.js';
import queue from '../../structures/queue.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cmd, cfg, fnc, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// commandsBlob.commands.configuration.
const namespacePrefix = sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + baseFileName + bas.cDot;
// prompt();

/**
 * @function saveConfiguration
 * @description Saves out all of the configuration data to a JSON file so custom user settings can be persisted between sessions.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/03/11
 */
const saveConfiguration = function(inputData, inputMetaData) {
  let functionName = saveConfiguration.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  dataBroker.writeJsonDataToFile(configurator.getConfigurationSetting(wrd.csystem, cfg.cappConfigPath) + wrd.cconfig + gen.cDotjson, JSON.stringify(D));
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function changeConfigurationSetting
 * @description Persists a change to a user specified configuration setting.
 * This enables the user to enable or disable console log flags to use for run-time debugging.
 * This is useful also for automating changes to how and what is logged during execution.
 * Further it is useful for when a test fails, it can be automatically re-run with a more detailed log.
 * @param {array<string>} inputData An array that contains
 * the fully qualified path to the configuration setting that should be changed and
 * the data that should be assigned to it.
 * inputData[0] = changeConfigurationSetting
 * inputData[1] = fully.Qualified.Configuration.Path
 * inputData[2] = value to assign to the configuration setting property
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/05/11
 * @NOTE Test String 1: changeConfigurationSetting configuration.debugSetting.commandsBlob.commands.system true
 * Test String 2: changeConfigurationSetting debugSetting.commandsBlob.commands.system true
 */
const changeConfigurationSetting = function(inputData, inputMetaData) {
  let functionName = changeConfigurationSetting.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (inputData && inputData.length === 3) {
    let dataPath = inputData[1];
    dataPath = ruleBroker.processRules([dataPath, ''], [biz.cgetWordsArrayFromString]);
    // dataPath is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathIs + JSON.stringify(dataPath));
    let newValue = inputData[2];
    // newValue is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cnewValueIs + JSON.stringify(newValue));
    if (dataPath[0] === wrd.cconfiguration) {
      dataPath.shift(wrd.cconfiguration);
    }
    let configurationName = dataPath.pop();
    loggers.consoleLog(namespacePrefix + functionName, msg.cdataPathIs + JSON.stringify(dataPath));
    dataPath = dataPath.join(bas.cDot);
    newValue = ruleBroker.processRules([newValue, ''], [biz.cstringToDataType]);
    configurator.setConfigurationSetting(dataPath, configurationName, newValue);
  } else {
    console.log('ERROR: Invalid entry, please enter a valid configuration namespace to change, ');
    console.log('and a value to assign to the configuration setting.');
    console.log('EXAMPLE: changeConfigurationSetting debugSetting.businessRules.rules.arrayParsing.commandArrayParsing.solveLehmerCode true');
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function listConfigurationThemes
 * @description Lists all of the debug configuration themes currently installed in the resources/themes folder.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/06/10
 */
const listConfigurationThemes = function(inputData, inputMetaData) {
  let functionName = listConfigurationThemes.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let themesList = themeBroker.getNamedThemes();
  // themesList is:
  console.log(msg.cthemesListIs + JSON.stringify(themesList));
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function changeDebugConfigurationTheme
 * @description Swaps out all of the debug settings with a different theme.
 * @param {string} inputData An array that contains the name of the theme the user would like to switch to.
 * inputData[0] = changeDebugConfigurationTheme
 * inputData[1] = The name of the theme that the user would like to switch to.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/06/13
 */
const changeDebugConfigurationTheme = function(inputData, inputMetaData) {
  let functionName = changeDebugConfigurationTheme.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (inputData && inputData.length === 2) {
    let desiredThemeName = inputData[1];
    loggers.consoleLog(namespacePrefix + functionName, 'desiredThemeName is: ' + desiredThemeName);
    let namedThemePath = themeBroker.getNamedThemePath(desiredThemeName);
    if (namedThemePath != false) {
      loggers.consoleLog(namespacePrefix + functionName, 'namedThemePath is verified: ' + namedThemePath);
      configurator.setConfigurationSetting(wrd.csystem, sys.cthemeConfigPath, namedThemePath);
      let loadedThemeData = themeBroker.loadTheme(namedThemePath);
    } else {
      console.log('ERROR: The specified theme name was not found in the current list of supported themes.');
      console.log('You can find the available themes at the following path location: ' +
        configurator.getConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath));
    }
  } else {
    console.log('ERROR: Invalid entry, please enter a theme name you would like the debug settings to switch to when logging debug statements.');
    console.log('EXAMPLE: changeDebugConfigurationTheme Skywalker');
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

export default {
  saveConfiguration,
  changeConfigurationSetting,
  listConfigurationThemes,
  changeDebugConfigurationTheme
};
