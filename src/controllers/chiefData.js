/**
 * @file chiefData.js
 * @module chiefData
 * @description Contains all the functions to manage the loading and processing of data,
 * such as XML files, CSV files or JSON files. Additional file type processing should be added in this module.
 * @requires module:basic.constants
 * @requires module:function.constants
 * @requires module:message.constants
 * @requires module:word.constants
 * @requires module:dataBroker
 * @requires module:configurator
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/13
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var bas = require('../constants/basic.constants');
var fnc = require('../constants/function.constants');
var msg = require('../constants/message.constants');
var wrd = require('../constants/word.constants');
var dataBroker = require('../brokers/dataBroker');
var configurator = require('../executrix/configurator');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function setupAllJsonConfigData
 * @description Sets up all of the JSON data at the specified configuration path.
 * @param {string} dataPathConfigurationName The name of the configuration setting that has the path we should search.
 * @param {string} contextName The context name that should be used when adding data to the D data structure.
 * @return {object} A JSON object that contains all of the data that was loaded and merged together.
 * @author Seth Hollingsead
 * @date 2021/03/31
 * @NOTE Cannot use the loggers here, because dependency data will have never been loaded.
 */
function setupAllJsonConfigData(dataPathConfigurationName, contextName) {
  let functionName = setupAllJsonConfigData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`dataPathConfigurationName is: ${dataPathConfigurationName}`);
  // console.log(`contextName is: ${contextName}`);
  let loadedAndMergedDataAllFiles = {};
  let dataPath = configurator.getConfigurationSetting(wrd.csystem, dataPathConfigurationName);
  dataPath = path.resolve(dataPath);
  let filesToLoad = dataBroker.scanDataPath(dataPath, contextName);
  loadedAndMergedDataAllFiles = dataBroker.loadAllJsonData(filesToLoad, contextName);
  // console.log(`loadedAndMergedDataAllFiles is: ${JSON.stringify(loadedAndMergedDataAllFiles)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return loadedAndMergedDataAllFiles;
};

module.exports = {
  [fnc.csetupAllJsonConfigData]: (dataPathConfigurationName, contextName) => setupAllJsonConfigData(dataPathConfigurationName, contextName)
};
