/**
 * @file nominal.js
 * @module nominal
 * @description Contains all of the nominal system commands.
 * @requires module:configurator
 * @requires module:lexical
 * @requires module:fileOperations
 * @requires module:dataBroker
 * @requires module:commandBroker
 * @requires module:ruleBroker
 * @requires module:workflowBroker
 * @requires module:queue
 * @requires module:stack
 * @requires module:timers
 * @requires module:loggers
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:word1.constants
 * @requires module:system.constants
 * @requires module:command.constants
 * @requires module:business.constants
 * @requires module:configuration.constants
 * @requires module:message.constants
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/prompt-sync|prompt-sync}
 * @requires {@link https://www.npmjs.com/package/figlet|figlet}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires {@link https://mathjs.org/index.html|math}
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

let configurator = require('../../executrix/configurator');
let lexical = require('../../executrix/lexical');
let fileOperations = require('../../executrix/fileOperations');
let dataBroker = require('../../brokers/dataBroker');
let commandBroker = require('../../brokers/commandBroker');
let ruleBroker = require('../../brokers/ruleBroker');
let workflowBroker = require('../../brokers/workflowBroker');
let queue = require('../../structures/queue');
let stack = require('../../structures/stack');
let timers = require('../../executrix/timers');
let loggers = require('../../executrix/loggers');
let bas = require('../../constants/basic.constants');
let gen = require('../../constants/generic.constants');
let wr1 = require('../../constants/word1.constants');
let sys = require('../../constants/system.constants');
let cmd = require('../../constants/command.constants');
let biz = require('../../constants/business.constants');
let cfg = require('../../constants/configuration.constants');
let msg = require('../../constants/message.constants');
let D = require('../../structures/data');
let prompt = require('prompt-sync')();
let figlet = require('figlet');
let path = require('path');
let math = require('mathjs');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
// commandsBlob.commands.nominal.
var namespacePrefix = wr1.ccommands + wrd.cBlob + bas.cDot + wr1.ccommands + bas.cDot + baseFileName + bas.cDot;

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
export const echoCommand = function(inputData, inputMetaData) {
  let functionName = echoCommand.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
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
export const exit = function(inputData, inputMetaData) {
  let functionName = exit.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
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
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
export const version = function(inputData, inputMetaData) {
  let functionName = version.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = true;
  console.log(configurator.getConfigurationSetting(wr1.csystem, sys.cApplicationVersionNumber));
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function about
 * @description Displays the message about the current application.
 * @param {array<boolean|string|integer} inputData Not used for this command.
 * inputData[0] === 'about'
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
export const about = function(inputData, inputMetaData) {
  let functionName = about.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = true;
  console.log(configurator.getConfigurationSetting(wr1.csystem, sys.cApplicationDescription));
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
 * inputData[1] === 'true|false' (optional)
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
export const name = function(inputData, inputMetaData) {
  let functionName = name.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = true;
  let applicationName = configurator.getConfigurationSetting(wr1.csystem, sys.cApplicationName);
  let figletFont = '';
  let useFancyFont = false;
  let rules = [];
  rules[0] = biz.cstringToDataType;
  useFancyFont = ruleBroker.processRules(inputData[1], '', rules);
  if (useFancyFont === true) {
    figletFont = configurator.getConfigurationSetting(wr1.csystem, cfg.cFigletFont);
    console.log(figlet.textSync(applicationName, {font: figletFont, horizontalLayout: sys.cfull}));
  } else {
    console.log(applicationName);
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
export const clearScreen = function(inputData, inputMetaData) {
  let functionName = clearScreen.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = true;
  // console.clear(); // This will clear the screen, but not the cache, you can still scroll up and see the previous commands.
  // process.stdout.write('\u001B[2J\u-001B[0;0f'); // Same as above.
  process.stdout.write('\u001b[H\u001b[2J\u001b[3J');
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};
