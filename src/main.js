#!/usr/bin/env node

/**
 * @file main.js
 * @module main
 * @description Contains all customer facing functions to are used to interface with the rest of the application framework.
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:configuration.constants
 * @requires module:country.constants
 * @requires module:function.constants
 * @requires module:generic.constants
 * @requires module:language.constants
 * @requires module:message.constants
 * @requires module:numeric.constants
 * @requires module:phonic.constants
 * @requires module:system.constants
 * @requires module:unit.constants
 * @requires module:word1.constants
 * @requires module:word2.constants
 * @requires module:warden
 * @requires module:loggers
 * @requires module:prompt
 * @requires module:timers
 * @requires module:allConstantsValidationMetadata
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/url|url}
 * @requires {@link https://www.npmjs.com/package/dotenv|dotenv}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/14
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './constants/basic.constants.js';
import * as biz from './constants/business.constants.js';
import * as cmd from './constants/command.constants.js';
import * as cfg from './constants/configuration.constants.js';
import * as ctr from './constants/country.constants.js';
import * as fnc from './constants/function.constants.js';
import * as gen from './constants/generic.constants.js';
import * as lng from './constants/language.constants.js';
import * as msg from './constants/message.constants.js';
import * as num from './constants/numeric.constants.js';
import * as phn from './constants/phonic.constants.js';
import * as sys from './constants/system.constants.js';
import * as unt from './constants/unit.constants.js';
import * as wr1 from './constants/word1.constants.js';
import * as wr2 from './constants/word2.constants.js';
import warden from './controllers/warden.js';
import loggers from './executrix/loggers.js';
import prompt from './executrix/prompt.js';
import timers from './executrix/timers.js';
import allSysCV from './resources/constantsValidation/allConstantsValidationMetadata.js';
import D from './structures/data.js';
// External imports
import url from 'url';
import dotenv from 'dotenv';
import path from 'path';

const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// main.
const namespacePrefix = baseFileName + bas.cDot;
dotenv.config();
const {NODE_ENV} = process.env;

/**
* @function initFramework
* @description Initializes the framework systems.
* @param {object} clientConfiguration A configuration data object that contains
* all the data needed to bootstrap the framework for a client application.
* @return {void}
* @author Seth Hollingsead
* @date 2021/10/07
*/
function initFramework(clientConfiguration) {
 let functionName = initFramework.name;
 // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
 // console.log(`clientConfiguration is: ${JSON.stringify(clientConfiguration)}`);
 loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
 loggers.consoleLog(namespacePrefix + functionName, msg.cclientConfigurationIs + clientConfiguration);

 // let frameworkRootPath = path.resolve(process.cwd());
 // let frameworkRootPath = path.resolve(path.dirname(import.meta.url));
 let frameworkCodeRootPath = url.fileURLToPath(path.dirname(import.meta.url));
 let frameworkCommandAliasesPath = '';
 let frameworkWorkflowsPath = '';
 frameworkCodeRootPath = warden.processRootPath(frameworkCodeRootPath) + bas.cDoubleForwardSlash;
 let frameworkRootPath = frameworkCodeRootPath;
 if (NODE_ENV === wr1.cdevelopment) {
   frameworkCodeRootPath = frameworkCodeRootPath + sys.cFrameworkDevelopRootPath;
 } else if (NODE_ENV === wr1.cproduction) {
   frameworkCodeRootPath = frameworkCodeRootPath + sys.cFrameworkProductionRootPath;
 } else {
   // WARNING: No .env file found! Going to default to the DEVELOPMENT ENVIRONMENT!
   console.log(msg.cApplicationWarningMessage1a + msg.cApplicationWarningMessage1b);
   frameworkCodeRootPath = frameworkCodeRootPath + sys.cFrameworkDevelopRootPath;
 }
 frameworkCommandAliasesPath = frameworkCodeRootPath + sys.cframeworkResourcesCommandAliasesPath;
 frameworkWorkflowsPath = frameworkCodeRootPath + sys.cframeworkResourcesWorkflowsPath;

 clientConfiguration[cfg.cframeworkRootPath] = path.resolve(frameworkRootPath);
 clientConfiguration[cfg.cframeworkConstantsPath] = frameworkCodeRootPath + sys.cframeworkConstantsPath;
 clientConfiguration[cfg.cappConfigPath] = clientConfiguration[cfg.cappConfigReferencePath];
 clientConfiguration[cfg.cframeworkResourcesPath] = frameworkCodeRootPath + sys.cframeworkResourcesPath;
 clientConfiguration[cfg.cclientMetaDataPath] = path.resolve(clientConfiguration[cfg.cclientRootPath] + clientConfiguration[cfg.cclientMetaDataPath]);
 clientConfiguration[cfg.cframeworkFullMetaDataPath] = path.resolve(clientConfiguration[cfg.cframeworkResourcesPath] + sys.cmetaDatadotJson);
 clientConfiguration[cfg.cframeworkConfigPath] = frameworkCodeRootPath + sys.cframeworkResourcesConfigurationPath;
 clientConfiguration[cfg.cframeworkCommandAliasesPath] = frameworkCommandAliasesPath;
 clientConfiguration[cfg.cframeworkWorkflowsPath] = frameworkWorkflowsPath;
 clientConfiguration[cfg.cframeworkConstantsValidationData] = allSysCV.initiaizeAllSystemConstantsValidationData;
 warden.initFrameworkSchema(clientConfiguration);
 loggers.consoleLog(namespacePrefix + functionName, msg.cAllLoadedDataIs + JSON.stringify(D));
 loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
 // console.log('All loaded data is: ' + JSON.stringify(D));
 // console.log(`END ${namespacePrefix}${functionName} function`);
};

/**
 * @function mergeClientBusinessRules
 * @description A wrapper function to expose the warden.mergeClientBusienssRules functionality.
 * @param {object} clientBusinessRules A map of client defined business rule names and client defined business rule function calls.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
function mergeClientBusinessRules(clientBusinessRules) {
  let functionName = mergeClientBusinessRules.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  warden.mergeClientBusinessRules(clientBusinessRules);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function mergeClientCommands
 * @description A wrapper function to expose the warden.mergeClientCommands functionality.
 * @param {object} clientCommands A map of client defined command names and client defined command function calls.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
function mergeClientCommands(clientCommands) {
  let functionName = mergeClientCommands.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  warden.mergeClientCommands(clientCommands);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function loadCommandAliases
 * @description Loads and merges a set of client command aliases with the framework command aliases.
 * This function acts as a wrapper for calling the warden.loadCommandAliases function.
 * @param {string} commandAliasesPath The path to where the commands aliases XML file is stored, that should be loaded.
 * @param {string} contextName A name for the set of command aliases that should be
 * used to store the path in the configuration system so it can be loaded by the framework.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
function loadCommandAliases(commandAliasesPath, contextName) {
  let functionName = loadCommandAliases.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // commandAliasesPath is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasesPathIs + commandAliasesPath);
  // contextName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  warden.setConfigurationSetting(wr1.csystem, contextName, commandAliasesPath);
  warden.loadCommandAliases(contextName);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function loadCommandWorkflows
 * @description Loads and merges a set of client workflows with the framework workflows.
 * This function acts as a wrapper for calling the warden.loadCommandWorkflows function.
 * @param {string} workflowPath The path to where the workflows file is stored, that should be loaded.
 * @param {string} contextName A name for the workflows that should be used
 * to store the path in the configuration system so it can be loaded by the framework.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
function loadCommandWorkflows(workflowPath, contextName) {
  let functionName = loadCommandWorkflows.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // workflowPath is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowPathIs + workflowPath);
  // contextName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccontextNameIs + contextName);
  warden.setConfigurationSetting(wr1.csystem, contextName, workflowPath);
  warden.loadCommandWorkflows(contextName);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function executeBusinessRule
 * @description A wrapper call to a business rule from the warden.executeBusinessRule.
 * @NOTE It would be good to implement another function like this: executeBusinessRules,
 * since the ruleBroker supports executing multiple sequential business rules.
 * It would be good to pass that feature along to the customer, if/when there is ever a business need.
 * @param {string} businessRule The name of the business rule that should execute.
 * @param {string} ruleInput The input to the rule that is being called.
 * @param {string} ruleMetaData Additional data to input to the rule.
 * @return {string} The value that is returned from the rule is also returned.
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
function executeBusinessRule(businessRule, ruleInput, ruleMetaData) {
  let functionName = executeBusinessRule.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // businessRule is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cbusinessRuleIs + JSON.stringify(businessRule));
  // ruleInput is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cruleInputIs + JSON.stringify(ruleInput));
  // ruleMetaData is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cruleMetaDataIs + JSON.stringify(ruleMetaData));
  let returnData = warden.executeBusinessRule(businessRule, ruleInput, ruleMetaData);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function enqueueCommand
 * @description Adds a command to the command queue.
 * It is worth noting that a command could actually load a whole workflow of commands.
 * So one command can spawn into many commands that cause
 * the command queue to be very full with a very complicated workflow.
 * This also acts as a wrapper for the warden.enqueueCommand function.
 * @param {string} command The command to add to the command queue for executing.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
function enqueueCommand(command) {
  let functionName = enqueueCommand.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // command is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandIs + command);
  warden.enqueueCommand(command);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function isCommandQueueEmpty
 * @description Determines if the command queue is empty or not empty.
 * This is a wrapper function for the warden.isCommandQueueEmpty function.
 * @return {boolean} True or False to indicate if the command execution queue is empty or not.
 * Useful to determine if the command queue should continue executing or not.
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
function isCommandQueueEmpty() {
  let functionName = isCommandQueueEmpty.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = warden.isCommandQueueEmpty();
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function processCommandQueue
 * @description This is a wrapper function for the warden.processCommandQueue.
 * This leads to a call to the chiefCommander.processCommand to process an individual command.
 * This is because a command could actually invoke a command workflow that might enqueue a bunch of commands
 * to the command queue. All of them must be executed in sequence as part of the main appication loop.
 * @return {boolean} A True or False value to indicate if the command loop should termiante when it's done.
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
function processCommandQueue() {
  let functionName = processCommandQueue.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = warden.processCommandQueue();
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function setConfigurationSetting
 * @description This is just a wrapper for the warden.setConfigurationSetting function.
 * @param {string} configurationNamespace The path in the configuration JSON object
 * where the configuration setting should be set.
 * Ex: businessRules.rules.stringParsing.countCamelCaseWords
 * @param {string} configurationName The key of the configuration setting.
 * @param {string|integer|boolean|double|object} configurationValue The value of the configuration setting.
 * @return {void}
 * @author Seth Hollingsead
 * @date 222/02/18
 */
function setConfigurationSetting(configurationNamespace, configurationName, configurationValue) {
  let functionName = setConfigurationSetting.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // configurationNamespace is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNamespaceIs + configurationNamespace);
  // configurationName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNameIs + configurationName);
  // configurationValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationValueIs + configurationValue);
  // D[sys.cConfiguration][configurationName] = configurationValue;
  warden.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function getConfigurationSetting
 * @description This is just a wrapper for the warden.getConfigurationSetting function.
 * @param {string} configurationNamespace The path in the configuration JSON object
 * where the configuration setting should be found.
 * @param {string} configurationName The key of the configuration setting.
 * @return {string|integer|boolean|double|object} The value of whatever was stored in the D[configuration][configurationName].
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
function getConfigurationSetting(configurationNamespace, configurationName) {
  let functionName = getConfigurationSetting.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // configurationNamespace is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNamespaceIs + configurationNamespace);
  // configurationName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNameIs + configurationName);
  // let returnConfigurationValue = D[sys.cConfiguration][configurationName];
  let returnConfigurationValue = warden.getConfigurationSetting(configurationNamespace, configurationName);
  // returnConfigurationValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnConfiguraitonValueIs + returnConfigurationValue);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnConfigurationValue;
};

/**
 * @function consoleLog
 * @description A wrapper function to expose the loggers.consoleLog function to the client application.
 * @param {string} theNamespacePrefix The namespace of the log that is being sent. Ex: folder.filename
 * @param {string} theFunctionName The name of the function that log is being called from.
 * @param {string|object} message The message that should be logged.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/12/30
 */
function consoleLog(theNamespacePrefix, theFunctionName, message) {
  let functionName = consoleLog.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`theNamespacePrefix is: ${theNamespacePrefix}`);
  // console.log(`theFunctionName is: ${theFunctionName}`);
  // console.log(`message is: ${JSON.stringify(message)}`);
  loggers.consoleLog(theNamespacePrefix + theFunctionName, message);
  // console.log(`END ${namespacePrefix}${functionName} function`);
};

/**
 * @function sleep
 * @description Causes the entire application to sleep for a set time.
 * This is a wrapper for the warden.sleep function.
 * @param {integer} sleepTime The time that the application should sleep in milliseconds.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/18
 */
function sleep(sleepTime) {
  let functionName = sleep.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // sleepTime is:
  loggers.consoleLog(namespacePrefix + functionName, msg.csleepTimeIs + sleepTime);
  timers.sleep(sleepTime);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

export default {
  [fnc.cinitFramework]: (clientConfiguration) => initFramework(clientConfiguration),
  [fnc.cmergeClientBusinessRules]: (clientBusinessRules) => mergeClientBusinessRules(clientBusinessRules),
  [fnc.cmergeClientCommands]: (clientCommands) => mergeClientCommands(clientCommands),
  [fnc.cloadCommandAliases]: (commandAliasesPath, contextName) => loadCommandAliases(commandAliasesPath, contextName),
  [fnc.cloadCommandWorkflows]: (workflowPath, contextName) => loadCommandWorkflows(workflowPath, contextName),
  [fnc.cexecuteBusinessRule]: (businessRule, ruleInput, ruleMetaData) => executeBusinessRule(businessRule, ruleInput, ruleMetaData),
  [fnc.cenqueueCommand]: (command) => enqueueCommand(command),
  [fnc.cisCommandQueueEmpty]: () => isCommandQueueEmpty(),
  [fnc.cprocessCommandQueue]: () => processCommandQueue(),
  [fnc.csetConfigurationSetting]: (configurationNamespace, configurationName, configurationValue) => setConfigurationSetting(configurationNamespace, configurationName, configurationValue),
  [fnc.cgetConfigurationSetting]: (configurationNamespace, configurationName) => getConfigurationSetting(configurationNamespace, configurationName),
  [fnc.cconsoleLog]: (theNamespacePrefix, theFunctionName, message) => consoleLog(theNamespacePrefix, theFunctionName, message),
  [fnc.csleep]: (sleepTime) => sleep(sleepTime),
  [fnc.cprompt]: (ask) => prompt.prompt(ask),
  [gen.cbas]: bas,
  [gen.cbiz]: biz,
  [gen.ccmd]: cmd,
  [gen.ccfg]: cfg,
  [gen.cctr]: ctr,
  [gen.cfnc]: fnc,
  [gen.cgen]: gen,
  [gen.clng]: lng,
  [gen.cmsg]: msg,
  [gen.cnum]: num,
  [gen.cphn]: phn,
  [gen.csys]: sys,
  [gen.cunt]: unt,
  [gen.cwr1]: wr1,
  [gen.cwr2]: wr2
};
