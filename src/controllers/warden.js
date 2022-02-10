/**
 * @file warden.js
 * @module warden
 * @description Contains all the functions to manage the entire application framework at the highest level.
 * Also provides an interface to easily manage all the framework features & various functionality from a single entry point.
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:configuration.constants
 * @requires module:function.constants
 * @requires module:message.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @requires module:ruleBroker
 * @requires module:chiefConfiguration
 * @requires module:configurator
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/15
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

let bas = require('../constants/basic.constants');
let biz = require('../constants/business.constants');
let cfg = require('../constants/configuration.constants');
let fnc = require('../constants/function.constants');
let msg = require('../constants/message.constants');
let sys = require('../constants/system.constants');
let wr1 = require('../constants/word1.constants');
let ruleBroker = require('../brokers/ruleBroker');
let chiefConfiguration = require('./chiefConfiguration');
let configurator = require('../executrix/configurator');
let loggers = require('../executrix/loggers');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = wr1.ccontrollers + bas.cDot + baseFileName + bas.cDot;

 /**
 * @function processRootPath
 * @description Processes the root path of the application using business rules.
 * @NOTE: By calling path.resolve(__dirname); This does not return the true root path of the application.
 * It returns the path to the currently executing file, or the file that was executed first.
 * which is: C:/Calculator2/Application/Calculator2/
 * But what we really need for the root path is just C:/Calculator2/
 * @param {object} configData All of the configuration data that should be parsed as part of the setup process.
 * @return {string} the true root path of the application.
 * @author Seth Hollingsead
 * @date 2021/10/12
 * @NOTE Cannot use the loggers here, because dependency data will have never been loaded.
 */
function processRootPath(configData) {
  let functionName = processRootPath.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`configData is: ${JSON.stringify(configData)}`);
  let rules = {};
  rules[0] = biz.cparseSystemRootPath;
  ruleBroker.bootStrapBusinessRules();
  let applicationName = configData[sys.capplicationName];
  let pathToProcess = configData[cfg.crootPath];
  let resolvedPath = ruleBroker.processRules(pathToProcess, applicationName, rules);
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
  loggers.consoleLog(namespacePrefix + functionName, msg.cconfigDataIs + configData);
  let appConfigPath = configData[cfg.cappConfigPath];
  let frameworkConfigPath = configData[cfg.cframeworkConfigPath];
  chiefConfiguration.setupConfiguration(appConfigPath, frameworkConfigPath);

  // let appConfig = {
  //   applicationName: apc.cApplicationName,
  //   rootPath: rootPath,
  //   appConfigReferencePath: apc.cFullConfigurationPath,
  //   metaDataPath: apc.cmetaDataPath,
  //   clientCommandAliasesPath: apc.cFullCommandsPath,
  //   clientWorkflowsPath: apc.cFullWorkflowsPath,
  //   clientBusinessRules: clientRules.initClientRulesLibrary(),
  //   clientCommands: clientCommands()
  // };
  


  // console.log(`END ${namespacePrefix}${functionName} function`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function mergeClientBusienssRules
 * @description Merges the map of client defined busienss rule names and client defined business rule function calls
 * with the existing D-data structure that should already have all of the system defined business rule.
 * @param {object} cientBusinessRules A map of client defined business rule names and client defined business rule function calls.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/09
 */
function mergeClientBusinessRules(cientBusinessRules) {
  let functionName = mergeClientBusinessRules.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // console.log(`configData is: ${JSON.stringify(configData)}`);
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
  // console.log(`configData is: ${JSON.stringify(configData)}`);
  ruleBroker.addClientCommands(clientCommands);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function loadCommandAliases
 * @description Loads and merges both the system defined command aliases XML file & the cient defined command aliases XML file.
 * @param {string} systemCommandsAliasesPath The path from the application root to the system defined commands aliases XML file.
 * @param {sring} clientCommandsAliasesPath The path from the application root to the client defined commands aliases XML file.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/09
 */
function loadCommandAliases(systemCommandsAliasesPath, clientCommandsAliasesPath) {
  let functionName = loadCommandAliases.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // systemCommandsAliasesPath is:
  loggers.consoleLog(namespacePrefix + functionName, msg.csystemCommandsAliasesPathIs + systemCommandsAliasesPath);
  // clientCommandsAliasesPath is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cclientCommandsAliasesPathIs + clientCommandsAliasesPath);

  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

module.exports = {
  [fnc.cprocessRootPath]: (configData) => processRootPath(configData),
  [fnc.cinitFrameworkSchema]: (configData) => initFrameworkSchema(configData)
};
