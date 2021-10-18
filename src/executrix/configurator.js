/**
 * @file configurator.js
 * @module configurator
 * @description Contains the functions necessary to set and get configuration settings from the shared data structure.
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/10/13
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 * @NOTE This file is needed to keep these lower level functions separate from the chiefConfiguration.
 * Because having these functions in the chiefConfiguration can cause a circular dependency.
 */

var D = require('../structures/data');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = `executrix.${baseFileName}.`;

/**
 * @function setConfigurationSetting
 * @description Sets a configuration setting on the configuration data structure stored on the D-data structure.
 * @param {string} configurationName The key of the configuration setting.
 * @param {string|integer|boolean|double} configurationValue The value of the configuration setting.
 * @author Seth Hollingsead
 * @date 2021/10/13
 */
function setConfigurationSetting(configurationName, configurationValue) {
  let functionName = setConfigurationSetting.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`configurationName is: ${configurationName}`);
  console.log(`configurationValue is: ${configurationValue}`);
  let configurationDataRoot = D['configuration'];
  if (!configurationDataRoot) {
    D['configuration'] = {};
    configurationDataRoot = D['configuration'];
  }
  configurationDataRoot[configurationName] = configurationValue;
  console.log(`END ${namespacePrefix}${functionName} function`);
};

/**
 * @function getConfigurationSetting
 * @description Gets a configuration value based on the configuration name.
 * @param {string} configurationName The key of the configuration setting.
 * @return {string|integer|boolean|double} The value of whatever was stored in the D[configuration].
 * @author Seth Hollingsead
 * @date 2021/10/13
 */
function getConfigurationSetting(configurationName) {
  let functionName = getConfigurationSetting.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`configurationName is: ${configurationName}`);
  let returnConfigurationValue;

  if (D['configuration'] !== undefined) {
    if (D['configuration'][configurationName] !== undefined) {
      returnConfigurationValue = D['configuration'][configurationName];
    } else {
      returnConfigurationValue = undefined;
    }
  } else {
    returnConfigurationValue = undefined
  }
  console.log(`returnConfigurationValue is: ${returnConfigurationValue}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnConfigurationValue;
};

module.exports = {
  ['setConfigurationSetting']: (configurationName, configurationValue) => setConfigurationSetting(configurationName, configurationValue),
  ['getConfigurationSetting']: (configurationName) => getConfigurationSetting(configurationName)
};
