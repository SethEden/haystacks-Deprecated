/**
 * @file warden.js
 * @module warden
 * @description Contains all the functions to manage the entire application framework at the highest level.
 * Also provides an interface to easily manage all the framework features & various functionality from a single entry point.
 * @requires module:dataBroker
 * @requires module:ruleBroker
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:configuration.constants
 * @requires module:function.constants
 * @requires module:generic.constants
 * @requires module:message.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @requires module:chiefCommander
 * @requires module:chiefConfiguration
 * @requires module:chiefData
 * @requires module:chiefWorkflow
 * @requires module:configurator
 * @requires module:fileOperations
 * @requires module:loggers
 * @requires module:timers
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/15
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import dataBroker from '../brokers/dataBroker.js';
import ruleBroker from '../brokers/ruleBroker.js';
import * as bas from '../constants/basic.constants.js';
import * as biz from '../constants/business.constants.js';
import * as cfg from '../constants/configuration.constants.js';
import * as fnc from '../constants/function.constants.js';
import * as gen from '../constants/generic.constants.js';
import * as msg from '../constants/message.constants.js';
import * as sys from '../constants/system.constants.js';
import * as wr1 from '../constants/word1.constants.js';
import chiefCommander from './chiefCommander.js';
import chiefConfiguration from './chiefConfiguration.js';
import chiefData from './chiefData.js';
import chiefWorkflow from './chiefWorkflow.js';
import configurator from '../executrix/configurator.js';
import fileOperations from '../executrix/fileOperations.js';
import loggers from '../executrix/loggers.js';
import timers from '../executrix/timers.js';
import D from '../structures/data.js';
// External imports
import path from 'path';

const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// controllers.warden.
const namespacePrefix = wr1.ccontrollers + bas.cDot + baseFileName + bas.cDot;

 /**
 * @function processRootPath
 * @description Processes the root path of the application using business rules.
 * @NOTE: By calling path.resolve(__dirname); This does not return the true root path of the application.
 * It returns the path to the currently executing file, or the file that was executed first.
 * which is: C:/Calculator2/Application/Calculator2/
 * But what we really need for the root path is just C:/Calculator2/
 * @param {string} inputPath The path for the entry point to the framework, ie: main.js
 * @return {string} the true root path of the application.
 * @author Seth Hollingsead
 * @date 2021/10/12
 * @NOTE Cannot use the loggers here, because dependency data will have never been loaded.
 */
function processRootPath(inputPath) {
  let functionName = processRootPath.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputPath is: ${inputPath}`);
  let rules = [];
  rules[0] = biz.cparseSystemRootPath;
  ruleBroker.bootStrapBusinessRules();
  chiefCommander.bootStrapCommands();
  let resolvedPath = ruleBroker.processRules(inputPath, sys.cActualFrameworkName, rules);
  dataBroker.setupDataStorage();
  let rootPath = path.resolve(resolvedPath);
  // console.log(`rootPath is: ${rootPath}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return rootPath;
};

/**
 * @function initFrameworkSchema
 * @description Setup all the framework data and configuration settings.
 * @param {object} configData All of the configuration data that should be parsed as part of the setup process.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/12
 */
function initFrameworkSchema(configData) {
  let functionName = initFrameworkSchema.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`configData is: ${JSON.stringify(configData)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigDataIs + JSON.stringify(configData));
  const appConfigPath = configData[cfg.cappConfigPath];
  const frameworkConfigPath = configData[cfg.cframeworkConfigPath];
  chiefConfiguration.setupConfiguration(appConfigPath, frameworkConfigPath);
  // re-declare the input now that the configuration is setup.
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigDataIs + JSON.stringify(configData));

  let applicationMetaDataPathAndFilename = configData[cfg.cclientMetaDataPath];
  let frameworkMetaDataPathAndFilename = configData[cfg.cframeworkFullMetaDataPath];
  loggers.consoleLog(namespacePrefix + functionName, msg.capplicationMetaDataPathAndFilenameIs + applicationMetaDataPathAndFilename);
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkMetaDataPathAndFilenameIs + frameworkMetaDataPathAndFilename);
  let applicationMetaData = fileOperations.getJsonData(applicationMetaDataPathAndFilename);
  let frameworkMetaData = fileOperations.getJsonData(frameworkMetaDataPathAndFilename);
  loggers.consoleLog(namespacePrefix + functionName, msg.capplicationMetaDataIs + JSON.stringify(applicationMetaData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkMetaDataIs + JSON.stringify(frameworkMetaData));

  configurator.setConfigurationSetting(wr1.csystem, cfg.cclientRootPath, configData[cfg.cclientRootPath]);
  configurator.setConfigurationSetting(wr1.csystem, cfg.cappConfigResourcesPath, configData[cfg.cappConfigResourcesPath]);
  configurator.setConfigurationSetting(wr1.csystem, cfg.cappConfigReferencePath, configData[cfg.cappConfigReferencePath]);
  configurator.setConfigurationSetting(wr1.csystem, cfg.cclientMetaDataPath, configData[cfg.cclientMetaDataPath]);
  configurator.setConfigurationSetting(wr1.csystem, cfg.cclientCommandAliasesPath, configData[cfg.cclientCommandAliasesPath]);
  configurator.setConfigurationSetting(wr1.csystem, cfg.cclientWorkflowsPath, configData[cfg.cclientWorkflowsPath]);
  configurator.setConfigurationSetting(wr1.csystem, cfg.cframeworkRootPath, configData[cfg.cframeworkRootPath]);
  configurator.setConfigurationSetting(wr1.csystem, cfg.cappConfigPath, configData[cfg.cappConfigPath]);
  configurator.setConfigurationSetting(wr1.csystem, cfg.cframeworkResourcesPath, configData[cfg.cframeworkResourcesPath]);
  configurator.setConfigurationSetting(wr1.csystem, cfg.cframeworkFullMetaDataPath, configData[cfg.cframeworkFullMetaDataPath]);
  configurator.setConfigurationSetting(wr1.csystem, cfg.cframeworkConfigPath, configData[cfg.cframeworkConfigPath]);
  configurator.setConfigurationSetting(wr1.csystem, cfg.cframeworkCommandAliasesPath, configData[cfg.cframeworkCommandAliasesPath]);
  configurator.setConfigurationSetting(wr1.csystem, cfg.cframeworkWorkflowsPath, configData[cfg.cframeworkWorkflowsPath]);

  loggers.consoleLog(namespacePrefix + functionName, msg.cclientRootPathIs + configData[cfg.cclientRootPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cappConfigResourcesPathIs + configData[cfg.cappConfigResourcesPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cappConfigReferencePathIs + configData[cfg.cappConfigReferencePath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cclientMetaDataPathIs + configData[cfg.cclientMetaDataPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cclientCommandAliasesPathIs + configData[cfg.cclientCommandAliasesPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cclientWorkflowsPathIs + configData[cfg.cclientWorkflowsPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkRootPathIs + configData[cfg.cframeworkRootPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cappConfigPathIs + configData[cfg.cappConfigPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkResourcesPathIs + configData[cfg.cframeworkResourcesPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkFullMetaDataPathIs + configData[cfg.cframeworkFullMetaDataPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkConfigPathIs + configData[cfg.cframeworkConfigPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkCommandAliasesPathIs + configData[cfg.cframeworkCommandAliasesPath]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkWorkflowsPathIs + configData[cfg.cframeworkWorkflowsPath]);

  // Make sure the color data gets loaded as well! File: colors.csv (This is used by  the colorizer to colorize the fonts for the console output)
  let allConfigurationData = chiefData.setupAllCsvData(cfg.cframeworkConfigPath, wr1.ccolors);

  configurator.setConfigurationSetting(wr1.csystem, sys.cApplicationName, applicationMetaData[wr1.cName]);
  configurator.setConfigurationSetting(wr1.csystem, sys.cApplicationVersionNumber, applicationMetaData[wr1.cVersion]);
  configurator.setConfigurationSetting(wr1.csystem, sys.cApplicationDescription, applicationMetaData[wr1.cDescription]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cApplicationNameIs + applicationMetaData[wr1.cName]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cApplicationVersionNumberIs + applicationMetaData[wr1.cVersion]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cApplicationDescriptionIs + applicationMetaData[wr1.cDescription]);

  configurator.setConfigurationSetting(wr1.csystem, sys.cFrameworkName, frameworkMetaData[wr1.cName]);
  configurator.setConfigurationSetting(wr1.csystem, sys.cFrameworkVersionNumber, frameworkMetaData[wr1.cVersion]);
  configurator.setConfigurationSetting(wr1.csystem, sys.cFrameworkDescription, frameworkMetaData[wr1.cDescription]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cFrameworkNameIs + frameworkMetaData[wr1.cName]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cFrameworkVersionNumberIs + frameworkMetaData[wr1.cVersion]);
  loggers.consoleLog(namespacePrefix + functionName, msg.cFrameworkDescriptionIs + frameworkMetaData[wr1.cDescription]);

  // TODO: Add constants data valadation loading process here, based on a configuration setting for enabling constants validation.

  let enableLogFileOutputSetting = configurator.getConfigurationSetting(wr1.csystem, cfg.clogFileEnabled);
  if (enableLogFileOutputSetting === true) {
    loggers.consoleLog(namespacePrefix + functionName, msg.cCaptureSessionDateTimeStampLogFileName);
    let sessionDateTimeStamp = timers.getNowMoment(configurator.getConfigurationSetting(wr1.csystem, cfg.cdateTimeStamp));
    loggers.consoleLog(namespacePrefix + functionName, msg.csessionDateTimeStampIs + sessionDateTimeStamp);
    let logFileName = sessionDateTimeStamp + bas.cUnderscore + applicationMetaData[wr1.cVersion] + bas.cUnderscore + applicationMetaData[wr1.cName] + gen.cDotLog;
    loggers.consoleLog(namespacePrefix + functionName, msg.clogFileNameIs + logFileName);
    configurator.setConfigurationSetting(wr1.csystem, cfg.clogFileName, logFileName);
  }

  mergeClientBusinessRules(configData[sys.cclientBusinessRules]);
  mergeClientCommands(configData[sys.cclientCommands]);
  loadCommandAliases(''); // This function will now pick up the defaults already saved in the configuration system.
  loadCommandWorkflows(''); // Same as above.
  // We can pass in a name of a configuration setting that has a path to load plugin data this way.

  // console.log(`END ${namespacePrefix}${functionName} function`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function mergeClientBusienssRules
 * @description Merges the map of client defined busienss rule names and client defined business rule function calls
 * with the existing D-data structure that should already have all of the system defined business rule.
 * @param {object} clientBusinessRules A map of client defined business rule names and client defined business rule function calls.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/09
 */
function mergeClientBusinessRules(clientBusinessRules) {
  let functionName = mergeClientBusinessRules.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // console.log(`clientBusinessRules is: ${JSON.stringify(clientBusinessRules)}`);
  ruleBroker.addClientRules(clientBusinessRules);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function mergeCientCommands
 * @description Merges the map of client defined command names and client defined command function calls
 * with the existing D-data structure that should already have all of the system defined commands.
 * @param {object} clientCommands A map of client defined command names and client defined command function calls.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/09
 */
function mergeClientCommands(clientCommands) {
  let functionName = mergeClientCommands.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // console.log(`clientCommands is: ${JSON.stringify(clientCommands)}`);
  chiefCommander.addClientCommands(clientCommands);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function loadCommandAliases
 * @description Loads and merges both the system defined command aliases XML file and
 * the client defined command aliases XML file, or an optional user defined command aliases path.
 * @param {string} commandAliasesPath The configuration name of the configuration setting where
 * the path to the commands aliases XML file is stored, that should be loaded (OPTIONAL).
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/09
 */
function loadCommandAliases(commandAliasesPathConfigName) {
  let functionName = loadCommandAliases.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // commandAliasesPathConfigName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasesPathConfigNameIs + commandAliasesPathConfigName);
  let resolvedSystemCommandsAliasesPath;
  let resolvedClientCommandsAliasesPath;
  let resolvedCustomCommandsAliasesPath;
  if (commandAliasesPathConfigName) {
    resolvedCustomCommandsAliasesPath = path.resolve(configurator.getConfigurationSetting(wr1.csystem, commandAliasesPathConfigName));
    // resolvedCustomCommandsAliasesPath is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedCustomCommandsAliasesPathIs + resolvedCustomCommandsAliasesPath);
    chiefCommander.loadCommandAliasesFromPath(commandAliasesPathConfigName);
  } else {
    resolvedSystemCommandsAliasesPath = configurator.getConfigurationSetting(wr1.csystem, cfg.cframeworkCommandAliasesPath);
    resolvedClientCommandsAliasesPath = configurator.getConfigurationSetting(wr1.csystem, cfg.cclientCommandAliasesPath);
    // resolvedSystemCommandsAliasesPath is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedSystemCommandsAliasesPathIs + resolvedSystemCommandsAliasesPath);
    // resolvedClientCommandsAliasesPath is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedClientCommandsAliasesPathIs + resolvedClientCommandsAliasesPath);
    chiefCommander.loadCommandAliasesFromPath(cfg.cframeworkCommandAliasesPath);
    chiefCommander.loadCommandAliasesFromPath(cfg.cclientCommandAliasesPath);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function loadCommandWorkflows
 * @description Loads and merges both the ssytem defined command workflows XML file and
 * client defined command workflows XML file, or an optional user defined workflow path.
 * @param {string} workflowPathConfigName The configuration name of the configuration setting where
 * the path to the workflows XML file is stored, that should be loaded (OPTIONAL).
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
function loadCommandWorkflows(workflowPathConfigName) {
  let functionName = loadCommandWorkflows.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // workflowPathConfigName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowPathConfigurationNameIs + workflowPathConfigName);
  let resolvedSystemWorkflowsPath;
  let resolvedClientWorkflowsPath;
  let resolvedCustomWorkflowsPath;
  if (workflowPathConfigName) {
    resolvedCustomWorkflowsPath = path.resolve(configurator.getConfigurationSetting(wr1.csystem, workflowPathConfigName));
    // resolvedCustomWorkflowsPath is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedCustomWorkflowsPathIs + resolvedSystemWorkflowsPath);
    chiefWorkflow.loadCommandWorkflowsFromPath(workflowPathConfigName);
  } else {
    resolvedSystemWorkflowsPath = configurator.getConfigurationSetting(wr1.csystem, cfg.cframeworkWorkflowsPath);
    resolvedClientWorkflowsPath = configurator.getConfigurationSetting(wr1.csystem, cfg.cclientWorkflowsPath);
    // resolvedSystemWorkflowsPath is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedSystemWorkflowsPathIs + resolvedSystemWorkflowsPath);
    // resolvedClientWorkflowsPath is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedClientWorkflowsPathIs + resolvedClientWorkflowsPath);
    chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath);
    chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cclientWorkflowsPath);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function executeBusinessRule
 * @description A wrapper to call a business rule from the application level code.
 * @param {string} businessRule The name of the business rule that should execute.
 * @param {string} ruleInput The input to the rule that is being called.
 * @param {string} ruleMetaData Additional data to input to the rule.
 * @return {string} The value that is returned from the rule is also returned.
 * @author Seth Hollingsead
 * @date 2022/02/16
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
  let rules = [];
  let returnData;
  rules[0] = businessRule;
  returnData = ruleBroker.processRules(ruleInput, ruleMetaData, rules);
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
 * This also acts as a wrapper for the chiefCommander.enqueueCommand function.
 * @param {string} command The command to add to the command queue for executing.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
function enqueueCommand(command) {
  let functionName = enqueueCommand.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // command is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandIs + command);
  chiefCommander.enqueueCommand(command);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function isCommandQueueEmpty
 * @description This is a wrapper for the chiefCommander.isCommandQueueEmpty function.
 * Determines if the command queue is empty or not,
 * which also determines if the application should continue executing commands from the command queue
 * in sequential order or prompt for another commnd or exit.
 * @return {boolean} True or False to indicate if command execution should continue or not.
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
function isCommandQueueEmpty() {
  let functionName = isCommandQueueEmpty.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = chiefCommander.isCommandQueueEmpty();
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function processCommandQueue
 * @description This is just a wrapper for the chiefCommander.processCommandQueue function,
 * which will ultimately call chiefCommander.processCommand to process an individual command.
 * This is because a command could actually invoke a command workflow that might enqueue a bunch of commands
 * to the command queue. All of them must be executed in sequence as part of the main application loop.
 * @return {boolean} A True or False value to indicate if the command loop should termiante when it's done.
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
function processCommandQueue() {
  let functionName = processCommandQueue.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = chiefCommander.processCommandQueue();
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function setConfigurationSetting
 * @description This is just a wrapper for the configurator setConfigurationSetting function.
 * @param {string} configurationNamespace The path in the configuration JSON object
 * where the configuration setting should be set.
 * Ex: businessRules.rules.stringParsing.countCamelCaseWords
 * @param {string} configurationName The key of the configuration setting.
 * @param {string|integer|boolean|double} configurationValue The value of the configuration setting.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
function setConfigurationSetting(configurationNamespace, configurationName, configuratinoValue) {
  let functionName = setConfigurationSetting.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // configurationNamespace is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNamespaceIs + configurationNamespace);
  // configurationName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNameIs + configurationName);
  // configurationValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationValueIs + configurationValue);
  // D[sys.cConfiguration][configurationName] = configurationValue;
  configurator.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function getConfigurationSetting
 * @description This is just a wrapper for the configurator getConfigurationSetting function.
 * @param {string} configurationNamespace The path in the configuration JSON object
 * where the configuration setting should be found.
 * @param {string} configurationName The key of the configuration setting.
 * @return {string|integer|boolean|double} The value of whatever was stored in the D[configuration].
 * @author Seth Hollingsead
 * @date 2022/02/16
 */
function getConfigurationSetting(configurationNamespace, configurationName) {
  let functionName = getConfigurationSetting.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // configurationNamespace is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNamespaceIs + configurationNamespace);
  // configurationName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigurationNameIs + configurationName);
  // let returnConfigurationValue = D[sys.cConfiguration][configurationName];
  let returnConfigurationValue = configurator.getConfigurationSetting(configurationNamespace, configurationName);
  // returnConfigurationValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnConfiguraitonValueIs + returnConfigurationValue);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnConfigurationValue;
};

/**
 * @function consoleLog
 * @description This is just a wrapper for the loggers.consoleLog function.
 * @param {string} classPath The class path fro the caller of this function file.function or class.method.
 * @param {string|boolean|integer|object} message The message or data content that should be dumped to the output.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/16
 * @NOTE We cannot insturment this code with calls to loggers.consoleLog as it would ntroduce yet another circular dependency.
 * We will have to stick with just hard coded console.logs in this case to debug at this level.
 */
function consoleLog(classPath, message) {
  // let functionName = consoleLog.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`classPath is: ${classPath}`);
  // console.log(`message is: ${message}`);
  loggers.consoleLog(classPath, message);
  // console.log(`END ${namespacePrefix}${functionName} function`);
};

/**
 * @function sleep
 * @description Causes the entire application to sleep for a set time.
 * @param {integer} sleepTime The time that the application should sleep in milliseconds.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/16
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
  [fnc.cprocessRootPath]: (inputPath) => processRootPath(inputPath),
  [fnc.cinitFrameworkSchema]: (configData) => initFrameworkSchema(configData),
  [fnc.cmergeClientBusinessRules]: (cientBusinessRules) => mergeClientBusinessRules(cientBusinessRules),
  [fnc.cmergeClientCommands]: (clientCommands) => mergeClientCommands(clientCommands),
  [fnc.cloadCommandAliases]: (commandAliasesPathConfigName) => loadCommandAliases(commandAliasesPathConfigName),
  [fnc.cloadCommandWorkflows]: (workflowPathConfigName) => loadCommandWorkflows(workflowPathConfigName),
  [fnc.cexecuteBusinessRule]: (businessRule, ruleInput, ruleMetaData) => executeBusinessRule(businessRule, ruleInput, ruleMetaData),
  [fnc.cenqueueCommand]: (command) => enqueueCommand(command),
  [fnc.cisCommandQueueEmpty]: () => isCommandQueueEmpty(),
  [fnc.cprocessCommandQueue]: () => processCommandQueue(),
  [fnc.csetConfigurationSetting]: (configurationNamespace, configurationName, configurationValue) => setConfigurationSetting(configurationNamespace, configurationName, configurationValue),
  [fnc.cgetConfigurationSetting]: (configurationNamespace, configurationName) => getConfigurationSetting(configurationNamespace, configurationName),
  [fnc.cconsoleLog]: (classPath, message) => consoleLog(classPath, message),
  [fnc.csleep]: (sleepTime) => sleep(sleepTime)
};
