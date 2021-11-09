/**
 * @file chiefConfiguration.js
 * @module chiefConfiguration
 * @description Contains all the functions to manage the configuration system,
 * such as oading, setup, parsing & processing.
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:system.constants
 * @requires module:word.constants
 * @requires module:chiefData
 * @requires module:ruleBroker
 * @requires module:configurator
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/13
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var bas = require('../constants/basic.constants');
var biz = require('../constants/business.constants');
var sys = require('../constants/system.constants');
var wrd = require('../constants/word.constants');
var chiefData = require('./chiefData');
var ruleBroker = require('../brokers/ruleBroker');
var configurator = require('../executrix/configurator');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = wrd.ccontrollers + bas.cDot + baseFileName +bas.cDot;

/**
 * @function setupConfiguration
 * @description Sets up all of the application and framework configuration data.
 * @param {string} appConfigPath The path of the configuration files for the application layer.
 * @param {string} frameworkConfigPath The path of the configuration files for the framework layer.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/13
 */
function setupConfiguration(appConfigPath, frameworkConfigPath) {
  let functionName = setupConfiguration.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`appConfigPath is: ${appConfigPath}`);
  // console.log(`frameworkConfigPath is: ${frameworkConfigPath}`);
  let rules = {};
  rules[0] = biz.cswapBackSlashToForwardSlash;
  appConfigPath = ruleBroker.processRules(appConfigPath, '', rules);
  // console.log(`appConfigPath after rule processing is: ${appConfigPath}`);
  frameworkConfigPath = ruleBroker.processRules(frameworkConfigPath, '', rules);
  // console.log(`frameworkConfigPath after rule processing is: ${frameworkConfigPath}`);
  configurator.setConfigurationSetting(wrd.csystem, sys.cappConfigPath, appConfigPath);
  configurator.setConfigurationSetting(wrd.csystem, sys.cframeworkConfigPath, frameworkConfigPath);
  let allAppConfigData = {};
  let allFrameworkConfigData = {};
  // TODO: Implement these functions.
  allFrameworkConfigData = chiefData.setupAllJsonConfigData(sys.cframeworkConfigPath, wrd.cconfiguration);
  allAppConfigData = chiefData.setupAllJsonConfigData(sys.cappConfigPath, wrd.cconfiguration);
  // TODO: parseLoadedConfigurationData
  // TODO: merge App Config Data & Framework Config Data
  // console.log(`END ${namespacePrefix}${functionName} function`);
};

module.exports = {
  ['setupConfiguration']: (appConfigPath, frameworkConfigPath) => setupConfiguration(appConfigPath, frameworkConfigPath)
};
