/**
 * @file chiefConfiguration.js
 * @module chiefConfiguration
 * @description Contains all the functions to manage the configuration system,
 * such as oading, setup, parsing & processing.
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:configuration.constants
 * @requires module:function.constants
 * @requires module:system.constants
 * @requires module:word.constants
 * @requires module:chiefData
 * @requires module:ruleBroker
 * @requires module:configurator
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/13
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var bas = require('../constants/basic.constants');
var biz = require('../constants/business.constants');
var cfg = require('../constants/configuration.constants');
var fnc = require('../constants/function.constants');
var sys = require('../constants/system.constants');
var wrd = require('../constants/word.constants');
var chiefData = require('./chiefData');
var ruleBroker = require('../brokers/ruleBroker');
var configurator = require('../executrix/configurator');
var D = require('../structures/data');
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
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`appConfigPath is: ${appConfigPath}`);
  console.log(`frameworkConfigPath is: ${frameworkConfigPath}`);
  let rules = {};
  rules[0] = biz.cswapBackSlashToForwardSlash;
  appConfigPath = ruleBroker.processRules(appConfigPath, '', rules);
  console.log(`appConfigPath after rule processing is: ${appConfigPath}`);
  frameworkConfigPath = ruleBroker.processRules(frameworkConfigPath, '', rules);
  console.log(`frameworkConfigPath after rule processing is: ${frameworkConfigPath}`);
  configurator.setConfigurationSetting(wrd.csystem, sys.cappConfigPath, appConfigPath);
  configurator.setConfigurationSetting(wrd.csystem, sys.cframeworkConfigPath, frameworkConfigPath);
  let allAppConfigData = {};
  let allFrameworkConfigData = {};
  allFrameworkConfigData = chiefData.setupAllJsonConfigData(sys.cframeworkConfigPath, wrd.cconfiguration);
  allAppConfigData = chiefData.setupAllJsonConfigData(sys.cappConfigPath, wrd.cconfiguration);
  parseLoadedConfigurationData(allFrameworkConfigData);
  parseLoadedConfigurationData(allAppConfigData);
  console.log('ALL DATA IS: ' + JSON.stringify(D));
  console.log(`END ${namespacePrefix}${functionName} function`);
};

/**
 * @function parseLoadedConfigurationData
 * @description Parses through all of the configuration data that we just loaded from the XML files and
 * adds that data to the correct data-structures in the D.[configuration] data hive.
 * @param {object} allConfigurationData A JSON data structure object that contains all configuration meta-data.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/11/10
 */
function parseLoadedConfigurationData(allConfigurationData) {
  let functionName = parseLoadedConfigurationData.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`allConfigurationData is: ${JSON.stringify(allConfigurationData)}`);
  let highLevelSystemConfigurationContainer = {};
  let highLevelDebugConfigurationContainer = {};
  let allSystemConfigurations = {};
  let rules = {};
  let configurationElement;
  let configurationSubElement;
  let fullyQualifiedName;
  let namespace;
  let name;
  let type;
  let value;
  let version;
  let advancedDebugSettingPrefix;
  rules[0] = biz.cstringToDataType;

  highLevelSystemConfigurationContainer = allConfigurationData[wrd.csystem];
  console.log('highLevelSystemConfigurationContainer is: ' + JSON.stringify(highLevelSystemConfigurationContainer));
  highLevelDebugConfigurationContainer = allConfigurationData[cfg.cdebugSettings];
  console.log('highLevelDebugConfigurationContainer is: ' + JSON.stringify(highLevelDebugConfigurationContainer));

  for (let key in highLevelSystemConfigurationContainer) {
    fullyQualifiedName = '';
    namespace = '';
    name = '';
    value = '';
    value = highLevelSystemConfigurationContainer[key];
    console.log('value is: ' + value);
    if (!!value || value === false) {
      fullyQualifiedName = key;
      console.log('fullyQualifiedName is: ' + fullyQualifiedName);

      name = configurator.processConfigurationNameRules(fullyQualifiedName);
      console.log('name is: ' + name);
      namespace = configurator.processConfigurationNamespaceRules(fullyQualifiedName);
      console.log('namespace is: ' + namespace);
      value = configurator.processConfigurationValueRules(name, value);
      console.log('value BEFORE rule processing is: ' + value);
      value = ruleBroker.processRules(value, '', rules);
      console.log('value AFTER rule processing is: ' + value);

      configurator.setConfigurationSetting(namespace, name, value);

    }
  }

  for (let key in highLevelDebugConfigurationContainer) {
    fullyQualifiedName = '';
    namespace = '';
    name = '';
    value = '';
    value = highLevelDebugConfigurationContainer[key];
    console.log('value is: ' + value);
    if (!!value || value === false) {
      fullyQualifiedName = key;
      console.log('fullyQualifiedName is: ' + fullyQualifiedName);

      name = configurator.processConfigurationNameRules(fullyQualifiedName);
      console.log('name is: ' + name);
      namespace = configurator.processConfigurationNamespaceRules(fullyQualifiedName);
      console.log('namespace is: ' + namespace);
      value = configurator.processConfigurationValueRules(name, value);
      console.log('value BEFORE rule processing is: ' + value);
      value = ruleBroker.processRules(value, '', rules);
      console.log('value AFTER rule processing is: ' + value);

      configurator.setConfigurationSetting(namespace, name, value);

    }
  }
  console.log(`END ${namespacePrefix}${functionName} function`);
};

module.exports = {
  [fnc.csetupConfiguration]: (appConfigPath, frameworkConfigPath) => setupConfiguration(appConfigPath, frameworkConfigPath)
};
