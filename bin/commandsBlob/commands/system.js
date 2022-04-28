/**
* @file system.js
* @module system
* @description Contains all of the system level commands.
* @requires module:ruleBroker
* @requires module:configurator
* @requires module:loggers
* @requires module:data
* @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
* @requires {@link https://www.npmjs.com/package/figlet|figlet}
* @requires {@link https://www.npmjs.com/package/path|path}
* @author Seth Hollingsead
* @date 2022/04/20
* @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
*/

// Internal imports
import ruleBroker from '../../brokers/ruleBroker.js';
import configurator from '../../executrix/configurator.js';
import loggers from '../../executrix/loggers.js';
import D from '../../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import figlet from 'figlet';
import path from 'path';

const {bas, biz, cmd, cfg, fnc, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// commandsBlob.commands.system.
const namespacePrefix = sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + baseFileName + bas.cDot;
// prompt();

/**
* @function echoCommand
* @description Returns the input as the output without any changes.
* @param {array<boolean|string|integer>} inputData String that should be echoed.
* inputData[0] === 'echoCommand'
* @param {string} inputMetaData Not used for this business rule.
* @return {boolean} True to indicate that the application should not exit.
* @author Seth Hollingsead
* @date 2022/02/04
*/
const echoCommand = function(inputData, inputMetaData) {
  let functionName = echoCommand.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (inputData) {
    inputData.shift();
    console.log(inputData.join(bas.cSpace));
  } else {
    // Nothing to echo.
    console.log(msg.cNothingToEcho);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
* @function exit
* @description Returns false so the entire application can exit.
* @param {array<boolean|string|integer>} inputData Not used for this command.
* inputData[0] === 'exit'
* @param {string} inputMetaData Not used for this command.
* @return {boolean} False to indicate that the application should exit.
* @author Seth Hollingsead
* @date 2022/02/04
*/
const exit = function(inputData, inputMetaData) {
  let functionName = exit.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
* @function version
* @description Dispalys the current version number for the current application.
* @param {array<boolean|string|integer>} inputData Not used for this command.
* inputData[0] = 'version'
* inputData[1] === 'application|framework' (optional)
* @param {string} inputMetaData Not used for this command.
* @return {boolean} True to indicate that the application should not exit.
* @author Seth Hollingsead
* @date 2022/02/04
*/
const version = function(inputData, inputMetaData) {
  let functionName = version.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let configVersion = '';
  let appContext = '';
  if (inputData.length === 2) {
     appContext = inputData[1];
     if (appContext.toUpperCase() === wrd.cAPPLICATION) {
        configVersion = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationVersionNumber);
     } else if (appContext.toUpperCase() === wrd.cFRAMEWORK) {
        configVersion = configurator.getConfigurationSetting(wrd.csystem, sys.cFrameworkVersionNumber);
     } else {
        configVersion = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationVersionNumber);
     }
  } else {
    configVersion = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationVersionNumber);
  }
  console.log(configVersion);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
* @function about
* @description Displays the message about the current application.
* @param {array<boolean|string|integer>} inputData Not used for this command.
* inputData[0] === 'about'
* inputData[1] === 'application|framework' (optional)
* @param {string} inputMetaData Not used for this command.
* @return {boolean} True to indicate that the application should not exit.
* @author Seth Hollingsead
* @date 2022/02/04
*/
const about = function(inputData, inputMetaData) {
  let functionName = about.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let configDescription = '';
  let appContext = '';
  if (inputData.length === 2) {
    appContext = inputData[1];
    if (appContext.toUpperCase() === wrd.cAPPLICATION) {
      configDescription = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationDescription);
    } else if (appContext.toUpperCase() === wrd.cFRAMEWORK) {
      configDescription = configurator.getConfigurationSetting(wrd.csystem, sys.cFrameworkDescription);
    } else {
      configDescription = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationDescription);
    }
  } else {
    configDescription = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationDescription);
  }
  console.log(configDescription);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
* @function name
* @description Displays the name of the current application in standard font format, nothing special.
* Optional argument to output in figlet font.
* @param {array<boolean|string|integer>} inputData An array that could really contain anything depending
* on what the user entered, but the functino converts and filters out for a boolean
* True or False value internally to the function.
* inputData[0] === 'name'
* inputData[1] === 'application|framework' (optional)
* inputData[2] === 'true|false' (optional)
* @param {string} inputMetaData Not used for this command.
* @return {boolean} True to indicate that the application should not exit.
* @author Seth Hollingsead
* @date 2022/02/04
*/
const name = function(inputData, inputMetaData) {
  let functionName = name.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let reportedName = '';
  let figletFont = '';
  let appContext = '';
  let useFancyFont = false;
  let rules = [];
  rules[0] = biz.cstringToDataType;
  if (inputData.length === 2) {
    appContext = inputData[1];
  }
  if (inputData.length === 3) {
    appContext = inputData[1];
    useFancyFont = ruleBroker.processRules(inputData[2], '', rules);
  }
  if (appContext !== '') {
    if (appContext.toUpperCase() === wrd.cAPPLICATION) {
      reportedName = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationName);
    } else if (appContext.toUpperCase() === wrd.cFRAMEWORK) {
      reportedName = configurator.getConfigurationSetting(wrd.csystem, sys.cFrameworkName);
    } else {
      reportedName = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationName);
    }
  } else {
    reportedName = configurator.getConfigurationSetting(wrd.csystem, sys.cApplicationName);
  }
  if (useFancyFont === true) {
    figletFont = configurator.getConfigurationSetting(wrd.csystem, cfg.cfigletFont);
    console.log(figlet.textSync(reportedName, {font: figletFont, horizontalLayout: sys.cfull}));
  } else {
    console.log(reportedName);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
* @function clearScreen
* @description Clears all data from the console cache by printing a bunch of blank lines to the screen.
* @param {string} inputData Not used for this command.
* @param {string} inputMetaData Not used for this command.
* @return {boolean} True to indicate that the application should not exit.
* @author Seth Hollingsead
* @date 2022/02/04
*/
const clearScreen = function(inputData, inputMetaData) {
  let functionName = clearScreen.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  // loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = true;
  // console.clear(); // This will clear the screen, but not the cache, you can still scroll up and see the previous commands.
  // process.stdout.write('\u001B[2J\u-001B[0;0f'); // Same as above.
  process.stdout.write('\u001b[H\u001b[2J\u001b[3J');
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
* @function help
* @description Displays all the information about all of the commands in the system,
* including both system defined commands and client defined commands.
* @param {array<boolean|string|integer>} inputData Not used for this command.
* inputData[0] = 'help'
* @param {string} inputMetaData Not used for this command.
* @return {boolean} True to indicate that the application should not exit.
* @author Seth Hollingsead
* @date 2022/02/22
*/
const help = function(inputData, inputMetaData) {
  let functionName = help.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = true;
  loggers.consoleTableLog(baseFileName + bas.cDot + functionName, D[sys.cCommandsAliases][wrd.cCommands], [wrd.cName, wrd.cDescription]);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
* @function workflowHelp
* @description Displays all the information about all the workflows in the system,
* including both system defined workflows & client defined workflows.
* @param {array<boolean|string|integer>} inputData Not used for this command.
* inputData[0] = 'workflowHelp'
* @param {string} inputMetaData Not used for this command.
* @return {boolean} True to indicate that the application should not exit.
* @author Seth Hollingsead
* @date 2022/02/22
*/
const workflowHelp = function(inputData, inputMetaData) {
  let functionName = workflowHelp.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = true;
  loggers.consoleTableLog(baseFileName + bas.cDot + functionName, D[sys.cCommandWorkflows][wrd.cWorkflows], [wrd.cName]);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

export default {
  echoCommand,
  exit,
  version,
  about,
  name,
  clearScreen,
  help,
  workflowHelp
};