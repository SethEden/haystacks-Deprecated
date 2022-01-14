/**
 * @file loggers.js
 * @module loggers
 * @description Contains all of the functions necessary for logging to the console,
 * and logging to a system-specified log file.
 * Additional logic is in place to allow the configuration file to define which
 * modules/files & functions should participate in logging operations.
 * @requires module:configurator
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/fs|fs}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/18
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var configurator = require('../executrix/configurator');
var D = require('../structures/data');
var fs = require('fs');
var path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `executrix.${baseFileName}.`;

/**
 * @function consoleLog
 * @description Compares the class path to a series of configuration settings to determine
 * if we should log to the console or not.
 * Also can provisionally log to a log file as well since the console
 * is technically a transient data output.
 * @param {string} classPath The class path for the caller of this function file.function or class.method.
 * @param {string} message The message or data contents that should be dumped to the output.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/01/13
 */
function consoleLog(classPath, message) {
  if (Object.keys(D).length !== 0) { // Make sure we don't log anything if we haven't yet loaded the configuration data.
    let consoleLogEnabled = configurator.getConfigurationSetting('consoleLogEnabled');
    if (consoleLogEnabled === true) {
      console.log('BEGIN loggers.consoleLog function');
      console.log(`classPath is: ${classPath}`);
      console.log(`message is: ${message}`);
      let logFile = configurator.getConfigurationSetting('applicationCleanedRootPath');
      if (logFile !== undefined) {
        logFile = `${logFile}//logs`;
        console.log(`Logfile before path.resolve is: ${logFile}`);
        logFile = path.resolve(logFile);
        console.log(`Logfile after path.resolve is: ${logFile}`);
        logFile = logFile + '//' + configurator.getConfigurationSetting('logFilePathAndName');
        console.log(`logFile after adding the log filename: ${logFile}`);
      }

      let debugFunctionSetting = false;
      let debugFileSetting = false;
      let debugSetting = false;
      let outputMessage = '';
      let configurationName = '';
      let configurationNamespace = '';


      console.log('END loggers.consoleLog function');
    } // end-if (consoleLogEnabled === true)
  } // end-if (Object.keys(D).length != 0)
};
