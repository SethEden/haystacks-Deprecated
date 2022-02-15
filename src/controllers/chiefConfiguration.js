/**
 * @file chiefConfiguration.js
 * @module chiefConfiguration
 * @description Contains all the functions to manage the configuration system,
 * such as oading, setup, parsing & processing.
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:configuration.constants
 * @requires module:function.constants
 * @requires module:message.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @requires module:ruleBroker
 * @requires module:chiefData
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/13
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

import * as bas from '../constants/basic.constants.js';
import * as biz from '../constants/business.constants.js';
import * as cfg from '../constants/configuration.constants.js';
import * as fnc from '../constants/function.constants.js';
import * as msg from '../constants/message.constants.js';
import * as sys from '../constants/system.constants.js';
import * as wr1 from '../constants/word1.constants.js';
import ruleBroker from '../brokers/ruleBroker.js';
import chiefData from './chiefData.js';
import configurator from '../executrix/configurator.js';
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
import path from 'path';
let baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
let namespacePrefix = wr1.ccontrollers + bas.cDot + baseFileName +bas.cDot;

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
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cappConfigPathIs + appConfigPath);
  loggers.consoleLog(namespacePrefix + functionName, msg.cframeworkConfigPathIs + frameworkConfigPath);
  let rules = {};
  rules[0] = biz.cswapBackSlashToForwardSlash;
  appConfigPath = ruleBroker.processRules(appConfigPath, '', rules);
  // console.log(`appConfigPath after rule processing is: ${appConfigPath}`);
  frameworkConfigPath = ruleBroker.processRules(frameworkConfigPath, '', rules);
  // console.log(`frameworkConfigPath after rule processing is: ${frameworkConfigPath}`);
  configurator.setConfigurationSetting(wr1.csystem, sys.cappConfigPath, appConfigPath);
  configurator.setConfigurationSetting(wr1.csystem, sys.cframeworkConfigPath, frameworkConfigPath);
  let allAppConfigData = {};
  let allFrameworkConfigData = {};
  let universalDebugConfigSetting = chiefData.searchForUniversalDebugConfigSetting(
    sys.cappConfigPath, sys.cframeworkConfigPath
  );
  allFrameworkConfigData = chiefData.setupAllJsonConfigData(sys.cframeworkConfigPath, wr1.cconfiguration);
  allAppConfigData = chiefData.setupAllJsonConfigData(sys.cappConfigPath, wr1.cconfiguration);
  parseLoadedConfigurationData(allFrameworkConfigData);
  parseLoadedConfigurationData(allAppConfigData);
  // console.log('ALL DATA IS: ' + JSON.stringify(D));
  // console.log(`END ${namespacePrefix}${functionName} function`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cALL_DATA_IS + JSON.stringify(D));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function parseLoadedConfigurationData
 * @description Parses through all of the configuration data that we just loaded from the XML files and
 * adds that data to the correct data-structures in the D.[configuration] data hive.
 * @param {object} allConfigurationData A JSON data structure object that contains all configuration meta-data.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/11/10
 * @NOTE Cannot use the loggers here, because dependency data will have never been loaded.
 */
function parseLoadedConfigurationData(allConfigurationData) {
  let functionName = parseLoadedConfigurationData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`allConfigurationData is: ${JSON.stringify(allConfigurationData)}`);
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

  highLevelSystemConfigurationContainer = allConfigurationData[wr1.csystem];
  // console.log('highLevelSystemConfigurationContainer is: ' + JSON.stringify(highLevelSystemConfigurationContainer));
  highLevelDebugConfigurationContainer = allConfigurationData[cfg.cdebugSettings];
  // console.log('highLevelDebugConfigurationContainer is: ' + JSON.stringify(highLevelDebugConfigurationContainer));

  for (let key in highLevelSystemConfigurationContainer) {
    fullyQualifiedName = '';
    namespace = '';
    name = '';
    value = '';
    value = highLevelSystemConfigurationContainer[key];
    // console.log('value is: ' + value);
    if (!!value || value === false) {
      fullyQualifiedName = key;
      // console.log('fullyQualifiedName is: ' + fullyQualifiedName);

      name = configurator.processConfigurationNameRules(fullyQualifiedName);
      // console.log('name is: ' + name);
      namespace = configurator.processConfigurationNamespaceRules(fullyQualifiedName);
      // console.log('namespace is: ' + namespace);
      value = configurator.processConfigurationValueRules(name, value);
      // console.log('value BEFORE rule processing is: ' + value);
      value = ruleBroker.processRules(value, '', rules);
      // console.log('value AFTER rule processing is: ' + value);
      if ((namespace === wr1.csystem && name === cfg.cdebugSettings) &&
      configurator.getConfigurationSetting(namespace, name) === true) {
        // console.log('CAUGHT THE CASE THAT WE ARE SETTING A FALSE VALUE FOR DEBUG-SETTINGS');
        // NOTE: DO NOT over write the value because the base value is already saved as true.
        // Over writing it with true, doesn't do anything, and over writing it with false
        // destroys whatever setting the user may have set from the client application.
      } else {
        configurator.setConfigurationSetting(namespace, name, value);
      }
    }
  }

  for (let key in highLevelDebugConfigurationContainer) {
    fullyQualifiedName = '';
    namespace = '';
    name = '';
    value = '';
    value = highLevelDebugConfigurationContainer[key];
    // console.log('value is: ' + value);
    if (!!value || value === false) {
      fullyQualifiedName = key;
      // console.log('fullyQualifiedName is: ' + fullyQualifiedName);

      name = configurator.processConfigurationNameRules(fullyQualifiedName);
      // console.log('name is: ' + name);
      namespace = configurator.processConfigurationNamespaceRules(fullyQualifiedName);
      // console.log('namespace is: ' + namespace);
      value = configurator.processConfigurationValueRules(name, value);
      // console.log('value BEFORE rule processing is: ' + value);
      value = ruleBroker.processRules(value, '', rules);
      // console.log('value AFTER rule processing is: ' + value);

      configurator.setConfigurationSetting(namespace, name, value);

    }
  }
  // console.log(`END ${namespacePrefix}${functionName} function`);
};

export default {
  [fnc.csetupConfiguration]: (appConfigPath, frameworkConfigPath) => setupConfiguration(
    appConfigPath, frameworkConfigPath
  )
};
