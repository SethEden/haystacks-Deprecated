/**
 * @file chiefConfiguration.js
 * @module chiefConfiguration
 * @description Contains all the functions to manage the configuration system,
 * such as oading, setup, parsing & processing.
 * @requires module:configurator
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/13
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var chiefData = require('./chiefData');
var configurator = require('../executrix/configurator');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = `controllers.${baseFileName}.`;

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
  configurator.setConfigurationSetting('appConfigPath', appConfigPath);
  configurator.setConfigurationSetting('frameworkConfigPath', frameworkConfigPath);
  let allAppConfigData = {};
  let allFrameworkConfigData = {};
  // TODO: Implement these functions.
  allFrameworkConfigData = chiefData.setupAllJsonConfigData('frameworkConfigPath', 'configuration');
  allAppConfigData = chiefData.setupAllJsonConfigData('appConfigPath', 'configuration');
  // TODO: parseLoadedConfigurationData
  // TODO: merge App Config Data & Framework Config Data
  console.log(`END ${namespacePrefix}${functionName} function`);
};

module.exports = {
  ['setupConfiguration']: (appConfigPath, frameworkConfigPath) => setupConfiguration(appConfigPath, frameworkConfigPath)
};
