/**
 * @file warden.js
 * @module warden
 * @description Contains all the functions to manage the entire application framework at the highest level.
 * Also provides an interface to easily manage all the framework features & various functionality from a single entry point.
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:configuration.constants
 * @requires module:function.constants
 * @requires module:system.constants
 * @requires module:word.constants
 * @requires module:chiefConfiguration
 * @requires module:ruleBroker
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/15
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var bas = require('../constants/basic.constants');
var biz = require('../constants/business.constants');
var cfg = require('../constants/configuration.constants');
var fnc = require('../constants/function.constants');
var sys = require('../constants/system.constants');
var wrd = require('../constants/word.constants');
var chiefConfiguration = require('./chiefConfiguration');
var ruleBroker = require('../brokers/ruleBroker');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

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
 */
function processRootPath(configData) {
  let functionName = processRootPath.name;
  console.log('bas.cDot resolves as: ' + bas.cDot);
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`configData is: ${JSON.stringify(configData)}`);
  let rules = {};
  rules[0] = biz.cparseSystemRootPath;
  ruleBroker.bootStrapBusinessRules();
  let applicationName = configData[sys.capplicationName];
  let pathToProcess = configData[cfg.crootPath];
  let resolvedPath = ruleBroker.processRules(pathToProcess, applicationName, rules);
  let rootPath = path.resolve(resolvedPath);
  console.log(`rootPath is: ${rootPath}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
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
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`configData is: ${JSON.stringify(configData)}`);
  let appConfigPath = configData[cfg.cappConfigPath];
  let frameworkConfigPath = configData[cfg.cframeworkConfigPath];
  chiefConfiguration.setupConfiguration(appConfigPath, frameworkConfigPath);
  console.log(`END ${namespacePrefix}${functionName} function`);
};

module.exports = {
  [fnc.cprocessRootPath]: (configData) => processRootPath(configData),
  [fnc.cinitFrameworkSchema]: (configData) => initFrameworkSchema(configData)
};
