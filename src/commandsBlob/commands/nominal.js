/**
 * @file nominal.js
 * @module nominal
 * @description Contains all of the nominal system commands.
 * @requires module:commandBroker
 * @requires module:dataBroker
 * @requires module:ruleBroker
 * @requires module:workflowBroker
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:command.constants
 * @requires module:configuration.constants
 * @requires module:generic.constants
 * @requires module:message.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @requires module:configurator
 * @requires module:fileOperations
 * @requires module:lexical
 * @requires module:loggers
 * @requires module:timers
 * @requires module:data
 * @requires module:queue
 * @requires module:stack
 * @requires {@link https://www.npmjs.com/package/prompt-sync|prompt-sync}
 * @requires {@link https://www.npmjs.com/package/figlet|figlet}
 * @requires {@link https://mathjs.org/index.html|math}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import commandBroker from '../../brokers/commandBroker.js';
import dataBroker from '../../brokers/dataBroker.js';
import ruleBroker from '../../brokers/ruleBroker.js';
import workflowBroker from '../../brokers/workflowBroker.js';
import * as bas from '../../constants/basic.constants.js';
import * as biz from '../../constants/business.constants.js';
import * as cmd from '../../constants/command.constants.js';
import * as cfg from '../../constants/configuration.constants.js';
import * as fnc from '../../constants/function.constants.js';
import * as gen from '../../constants/generic.constants.js';
import * as msg from '../../constants/message.constants.js';
import * as sys from '../../constants/system.constants.js';
import * as wr1 from '../../constants/word1.constants.js';
import configurator from '../../executrix/configurator.js';
import fileOperations from '../../executrix/fileOperations.js';
import lexical from '../../executrix/lexical.js';
import loggers from '../../executrix/loggers.js';
import timers from '../../executrix/timers.js';
import D from '../../structures/data.js';
import queue from '../../structures/queue.js';
import stack from '../../structures/stack.js';
// External imports
// import prompt from 'prompt-sync';
import figlet from 'figlet';
import * as math from 'mathjs';
import path from 'path';

const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// commandsBlob.commands.nominal.
const namespacePrefix = sys.ccommandsBlob + bas.cDot + wr1.ccommands + bas.cDot + baseFileName + bas.cDot;
// prompt();

/**
 * @function echoCommand
 * @description Returns the input as the output without any changes.
 * @param {array<boolean|string|integer} inputData String that shoudl be echoed.
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
 * @param {array<boolean|string|integer} inputData Not used for thsi command.
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
    if (appContext.toUpperCase() === wr1.cAPPLICATION) {
      configVersion = configurator.getConfigurationSetting(wr1.csystem, sys.cApplicationVersionNumber);
    } else if (appContext.toUpperCase() === wr1.cFRAMEWORK) {
      configVersion = configurator.getConfigurationSetting(wr1.csystem, sys.cFrameworkVersionNumber);
    } else {
      configVersion = configurator.getConfigurationSetting(wr1.csystem, sys.cApplicationVersionNumber);
    }
  } else {
    configVersion = configurator.getConfigurationSetting(wr1.csystem, sys.cApplicationVersionNumber);
  }
  console.log(configVersion);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function about
 * @description Displays the message about the current application.
 * @param {array<boolean|string|integer} inputData Not used for this command.
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
    if (appContext.toUpperCase() === wr1.cAPPLICATION) {
      configDescription = configurator.getConfigurationSetting(wr1.csystem, sys.cApplicationDescription);
    } else if (appContext.toUpperCase() === wr1.cFRAMEWORK) {
      configDescription = configurator.getConfigurationSetting(wr1.csystem, sys.cFrameworkDescription);
    } else {
      configDescription = configurator.getConfigurationSetting(wr1.csystem, sys.cApplicationDescription);
    }
  } else {
    configDescription = configurator.getConfigurationSetting(wr1.csystem, sys.cApplicationDescription);
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
    if (appContext.toUpperCase() === wr1.cAPPLICATION) {
      reportedName = configurator.getConfigurationSetting(wr1.csystem, sys.cApplicationName);
    } else if (appContext.toUpperCase() === wr1.cFRAMEWORK) {
      reportedName = configurator.getConfigurationSetting(wr1.csystem, sys.cFrameworkName);
    } else {
      reportedName = configurator.getConfigurationSetting(wr1.csystem, sys.cApplicationName);
    }
  } else {
    reportedName = configurator.getConfigurationSetting(wr1.csystem, sys.cApplicationName);
  }
  if (useFancyFont === true) {
    figletFont = configurator.getConfigurationSetting(wr1.csystem, cfg.cfigletFont);
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
  loggers.consoleTableLog(baseFileName + bas.cDot + functionName, D[sys.cCommandsAliases][wr1.cCommands], [wr1.cName, wr1.cDescription]);
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
  loggers.consoleTableLog(baseFileName + bas.cDot + functionName, D[sys.cCommandWorkflows][wr1.cWorkflows], [wr1.cName]);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function commandSequencer
 * @description Takes an arguments array where the second array object would contain a list of
 * commands that should be enqueued to the command queue.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a list of commands that should be enqueued to the command queue.
 * inputData[0] === 'commandSequencer'
 * inputData[1] === command string 1
 * inputData[2] === command string 2
 * inputData[n] === command string n
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/22
 */
const commandSequencer = function(inputData, inputMetaData) {
  let functionName = commandSequencer.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  for (let i = 1; i < inputData.length; i++) {
    let commandString = inputData[i];
    let primaryCommandDelimiter = configurator.getConfigurationSetting(wr1.csystem, cfg.cprimaryCommandDelimiter);
    loggers.consoleLog(namespacePrefix + functionName, msg.cprimaryCommandDelimiterIs + primaryCommandDelimiter);
    if (primaryCommandDelimiter === null || primaryCommandDelimiter !== primaryCommandDelimiter || primaryCommandDelimiter === undefined) {
      primaryCommandDelimiter = bas.cSpace;
    }
    console.log('cfg.csecondaryCommandDelimiter resolves as: ' + cfg.csecondaryCommandDelimiter);
    console.log('cfg.ctertiaryCommandDelimiter resolves as: ' + cfg.ctertiaryCommandDelimiter);
    let secondaryCommandArgsDelimiter = configurator.getConfigurationSetting(wr1.csystem, cfg.csecondaryCommandDelimiter);
    loggers.consoleLog(namespacePrefix + functionName, msg.csecondaryCommandDelimiterIs + secondaryCommandArgsDelimiter);
    let tertiaryCommandDelimiter = configurator.getConfigurationSetting(wr1.csystem, cfg.ctertiaryCommandDelimiter);
    loggers.consoleLog(namespacePrefix + functionName, msg.ctertiaryCommandDelimiterIs + tertiaryCommandDelimiter);
    // Replace 2nd & rd level delimiters and down-increemnt them so we are dealing with command strings that can actually be executed.
    const regEx1 = new RegExp(secondaryCommandArgsDelimiter, 'g');
    commandString = commandString.replace(regEx1, primaryCommandDelimiter);
    console.log('commandString after secondaryCommandArgsDelimiter replace with primaryCommandDelimiter is: ' + commandString);
    if (commandString.includes(tertiaryCommandDelimiter)) {
      const regEx2 = new RegExp(tertiaryCommandDelimiter, 'g');
      commandString = commandString.replace(regEx2, secondaryCommandArgsDelimiter);
      console.log('commandString after tertiaryCommandDelimiter replace with secondaryCommandArgsDelimiter is: ' + commandString);
    }
    let currentCommand = commandBroker.getValidCommand(commandString, primaryCommandDelimiter);
    let commandArgs = commandBroker.getCommandArgs(commandString, primaryCommandDelimiter);
    // We need to recompose the command arguments for the current command using the sys.cPrimaryCommandDelimiter.
    if (currentCommand !== false) {
      for (let j = 1; j < commandArgs.length; j++) {
        currentCommand = currentCommand + primaryCommandDelimiter + commandArgs[j];
      } // End-for (let j = 1; j < commandArgs.length; j++)
      loggers.consoleLog(namespacePrefix + functionName, msg.ccommandSequencerCommandToEnqueueIs + currentCommand);
      queue.enqueue(sys.cCommandQueue, currentCommand);
    } else { // End-if (currentCommand !== false)
      // WARNING: nominal.commandSequencer: The specified command was not found, please enter a valid command and try again.
      console.log(msg.ccommandSequencerMessage1 + msg.ccommandSequencerMessage2);
    }
  } // End-for (let i = 1; i < inputData.length; i++)
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
  workflowHelp,
  commandSequencer
};
