/**
 * @file loggers.js
 * @module loggers
 * @description Contains all of the functions necessary for logging to the console,
 * and logging to a system-specified log file.
 * Additional logic is in place to allow the configuration file to define which
 * modules/files & functions should participate in logging operations.
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:configuration.constants
 * @requires module:function.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @requires module:configurator
 * @requires module:fileOperations
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/18
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var bas = require('../constants/basic.constants');
var biz = require('../constants/business.constants');
var cfg = require('../constants/configuration.constants');
var fnc = require('../constants/function.constants');
var sys = require('../constants/system.constants');
var wr1 = require('../constants/word1.constants');
// var ruleBroker = require('../brokers/ruleBroker');
// NOTE: Calling this directly is an anti-pattern, but it is necessary at this time because of a circular dependency with loggers.
// We will need to refactor the business rules to accept a callback function that does the logging.
// Essentially we will need to use a dependency injection design pattern to prevent the chance of a circular dependency.
var stringParsingUtilities = require('../businessRules/rules/stringParsingUtilities');
var configurator = require('./configurator');
var fileOperations = require('./fileOperations');
var D = require('../structures/data');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix =  wr1.cexecutrix + bas.cDot + baseFileName + bas.cDot;

/**
 * @function consoleLog
 * @description Compares the class path to a series of configuration settings to determine
 * if we should log to the console or not.
 * Also can provisionally log to a log file as well since the console
 * is technically a transient data output.
 * @NOTE When it comes to dumping large amounts of data out of a script the console will not do,
 * And dumping data to an output log file is critical to debuggin certain tests and workflows.
 * @param {string} classPath The class path for the caller of this function file.function or class.method.
 * @param {string} message The message or data contents that should be dumped to the output.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/12/27
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function consoleLog(classPath, message) {
  let functionName = consoleLog.name;
  if (Object.keys(D).length !== 0) { // Make sure we don't log anything if we haven't yet loaded the configuration data.
    let consoleLogEnabled = configurator.getConfigurationSetting(wr1.csystem, cfg.cconsoleLogEnabled);
    if (consoleLogEnabled === true) {
      // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
      // console.log(`classPath is: ${classPath}`);
      // console.log(`message is: ${message}`);
      let logFile = configurator.getConfigurationSetting(wr1.csystem, sys.capplicationCleanedRootPath);
      if (logFile !== undefined) {
        logFile = logFile + bas.cDoubleForwardSlash + wr1.cLogs;
        // console.log(`Logfile before path.resolve is: ${logFile}`);
        logFile = path.resolve(logFile);
        // console.log(`Logfile after path.resolve is: ${logFile}`);
        logFile = logFile + bas.cDoubleForwardSlash + configurator.getConfigurationSetting(wr1.csystem, cfg.clogFilePathAndName);
        // console.log(`logFile after adding the log filename: ${logFile}`);
      }

      let debugFunctionSetting = false;
      let debugFileSetting = false;
      let debugSetting = false;
      let outputMessage = '';
      let configurationName = '';
      let configurationNamespace = '';

      // console.log('Determine if there is a configuration setting for the class path.');
      configurationName = configurator.processConfigurationNameRules(classPath);
      // console.log(`configurationName is: ${configurationName}`);
      configurationNamespace = configurator.processConfigurationNamespaceRules(classPath);
      // console.log(`configurationNamespace is: ${configurationNamespace}`);
      debugFunctionSetting = configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + configurationNamespace, configurationName);
      // console.log(`debugFunctionSetting is: ${debugFunctionSetting}`);
      debugFileSetting = configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + configurationNamespace, '');
      // console.log(`debugFileSetting is: ${debugFileSetting}`);
      if (debugFunctionSetting || debugFileSetting) {
        debugSetting = true;
      }
      // console.log(`debugSetting is: ${debugSetting}`);
      // console.log('DONE attempting to get the configuration setting for the class path, now check if it is not undefined and true');
      if (logFile !== undefined && (logFile.toUpperCase().includes(gen.cLOG) || logFile.toUpperCase().includes(gen.cTXT))) {
        consoleLogProcess(debugSetting, logFile, classPath, message, true);
      } else { // No text log file specified, proceed with the same process for console only.
        consoleLogProcess(debugSetting, undefined, classPath, message, false);
      }
      // console.log(`END ${namespacePrefix}${functionName} function`);
    } // end-if (consoleLogEnabled === true)
  } // end-if (Object.keys(D).length != 0)
};

/**
 * @function consoleLogProcess
 * @description A function that will print a message to a log file and the console, or just the console.
 * The output depends on if there was a txt/log file specified or not.
 * @param {boolean} debugSetting A TRUE or FALSE value to indicate if the log action is enabled or not.
 * @param {string} logFile The path to the log file where the message should be logged.
 * @param {string} classPath The class path for the caller of this function file.function or class.method.
 * @param {string} message The message or data contents that should be dumped to the output (log file and/or console).
 * @param {boolean} loggingToFileAndConsole A TRUE or FALSE value to indicate if the log should be done to the specified log file and the console.
 * If no log file is specified by the caller/settings system then this will be FALSE and only the console will be logged.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function consoleLogProcess(debugSetting, logFile, classPath, message, loggingToFileAndConsole) {
  let functionName = consoleLogProcess.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`debugSetting is: ${debugSetting}`);
  // console.log(`logFile is: ${logFile}`);
  // console.log(`classPath is: ${classPath}`);
  // console.log(`message is: ${message}`);
  // console.log(`loggingToFileAndConsole is: ${loggingToFileAndConsole}`);
  let outputMessage = '';
  let messageIsValid = false;

  if (debugSetting !== undefined && debugSetting === true) {
    // console.log('The debugSetting is not undefined and also true.');
    outputMessage = parseClassPath(logFile, classPath, message);
    // console.log(`outputMessage is: ${outputMessage}`);
    // console.log(`message is: ${message}`);
    messageIsValid = validMessage(outputMessage, message);
    if (messageIsValid === true) {
      console.log(outputMessage);
    }
    if (messageIsValid === true && loggingToFileAndConsole === true) {
      printMessageToFile(logFile, outputMessage);
      // console.log('DONE printing the message to the logFile');
    }
  } else if (configurator.getConfigurationSetting(wr1.csystem, cfg.cdebugTestExhaustive) === true) {
    // console.log('else-block the debugTestExhaustive setting is true!');
    // TODO: Add rule here to replace double percent with message/class-path.
    // Debug Exhaustive is probably not the best, we might want to consider another configuration setting to
    // enable or disable the console specifically. Right now there is no real business need for it.
    // If you really wanted to disable it just comment it out here.
    console.log(outputMessage);
    if (loggingToFileAndConsole === true) {
      printMessageToFile(logFile, outputMessage);
      // console.log('done printing the message to the log file.');
    }
  }
  // console.log('Past all of the if-else-if-else blocks of code.');
  // console.log(`END ${namespacePrefix}${functionName} function`);
};

/**
 * @function validMessage
 * @description Looks at the parsed/processed output message and the original message
 * to determine if the message is a valid message to dump to the console and/or the log file (if specified).
 * @param {string|integer|boolean|object} outputMessage The message that has been parsed/processed.
 * @param {string|integer|boolean|object} originalMessage The original message passed in before processing/parsing.
 * @return {boolean} A TRUE or FALSE to indicate if the output message should be dumped to the log file and/or the console.
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function validMessage(outputMessage, originalMessage) {
  let functionName = validMessage.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`outputMessage is: ${outputMessage}`);
  // console.log(`originalMessage is: ${originalMessage}`);
  let returnData = false;

  // This first if-condition catches the case that the output message has already
  // been parsed and modified according to the class path.
  if (outputMessage !== false && outputMessage !== originalMessage) {
    returnData = true;
  } else if (outputMessage !== false && outputMessage.includes(bas.cDoublePercent) === false) {
    // This else-if condition catches the case that the caller just wants to dump a generic message,
    // that doesn't have a class-path designation.
    returnData = true;
  }

  // console.log(`returnData is: ${returnData}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function parseClassPath
 * @description Parses the class path and message pulling it apart for logging and looking at custom debug settings.
 * @param {string} logFile The file name and path to the log file where the data should be printed.
 * @param {string} classPath The class path for the caller of this function file.function or class.method.
 * @param {string} message The message or data contents that should be dumped to the output.
 * @return {string} Returns the message that should be printed out to the console and logged to the log file.
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function parseClassPath(logFile, classPath, message) {
  let functionName = parseClassPath.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`logFile is: ${logFile}`);
  // console.log(`classPath is: ${classPath}`);
  // console.log(`message is: ${message}`);
  let configurationName = '';
  let configurationNamespace = '';
  let debugFunctionsSetting = false;
  let debugFilesSetting = false;
  let classPathArray = {};
  let rules = {};
  let returnData = '';
  rules[0] = biz.creplaceDoublePercentWithMessage;

  configurationName = configurator.processConfigurationNameRules(classPath);
  // console.log(`configurationName is: ${configurationName}`);
  configurationNamespace = configurator.processConfigurationNamespaceRules(classPath);
  // console.log(`configurationNamespace is: ${configurationNamespace}`);
  // printMessageToFile(logFile, `Getting configuration setting value for: debugFunctions|${className}.${classFunctionName}`);
  // console.log(`Getting configuration setting value for: ${configurationNamespace}.${configurationName}`);
  debugFunctionsSetting = configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + configurationNamespace, configurationName);
  // printMessageToFile(logFile, `debugFunctionsSetting is: ${debugFunctionsSetting}`);
  // console.log(`debugFunctionsSetting is: ${debugFunctionsSetting}`);
  debugFilesSetting = configurator.getConfigurationSetting(cfg.cdebugSetting + bas.cDot + configurationNamespace, '');
  // printMessageToFile(logFile, `debugFilesSetting is: ${debugFilesSetting}`);
  // console.log(`debugFilesSetting is: ${debugFilesSetting}`);
  if (debugFunctionsSetting || debugFilesSetting) {
    // TODO: Implement the colorizing of the message here.
    if (message.includes(bas.cDoublePercent)) {
      let myNameSpace = configurationNamespace + bas.cDot + configurationName;
      // console.log('message is: ' + message);
      // console.log('myNameSpace is: ' + myNameSpace);
      // console.log('rules is: ' + JSON.stringify(rules));
      // NOTE: Calling this directly is an anti-pattern, but it is necessary at this time because of a circular dependency with loggers.
      // We will need to refactor the business rules to accept a callback function that does the logging.
      // Essentially we will need to use a dependency injection design pattern to prevent the chance of a circular dependency.
      message = stringParsingUtilities.replaceDoublePercentWithMessage(message, [bas.cDoublePercent, myNameSpace]);
    }
    // console.log('setting the returnData to the message: ' + message);
    returnData = message;
  } else if ((debugFunctionsSetting === undefined && debugFilesSetting === undefined) ||
  (debugFunctionsSetting === undefined && debugFilesSetting === false) ||
  (debugFunctionsSetting === false && debugFilesSetting === undefined) ||
  (debugFunctionsSetting === false && debugFilesSetting === false)) {
    // console.log('Something is undefined && false or some combination of both, return false');
    returnData = false;
  } else {
    // TODO: Implement the colorizing of the message here.
    returnData = message;
  }
  // console.log(`returnData is: ${returnData}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function printMessageToFile
 * @description Prints a message to a log/text file.
 * @param {string} file The file path and file name where message data should be printed.
 * @param {string} message The message that should be logged to the log file if the specified flag is true.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function printMessageToFile(file, message) {
  let functionName = printMessageToFile.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`file is: ${file}`);
  // console.log(`message is: ${message}`);
  let dateTimeStamp = '';
  if (!file.includes('undefined')) { // NOTE: This usage of the string undefined, must be hard-coded here.
    // '!file.includes(undefined)'
    console.log(msg.cprintMessageToFile01);
    if (configurator.getConfigurationSetting(wr1.csystem, cfg.clogFileEnabled) === true) {
      // console.log('LogFileEnabled = true');
      if (message) {
        // TODO: Once the colorizer is setup, remove the colorizer font styles from the string.
      }
      if (configurator.getConfigurationSetting(wr1.csystem, cfg.cincludeDateTimeStampInLogFiles) === true) {
        // Individual messages need to have a time stamp on them. So lets sign the message with a time stamp.
        dateTimeStamp = timers.getNowMoment(gen.cYYYYMMDD_HHmmssSSS);
        // console.log(`dateTimeStamp is: ${dateTimeStamp}`);
        message = `${dateTimeStamp}: ${message}`;
      }
      fileOperations.appendMessageToFile(file, message);
    } else {
      // 'ERROR: Failure to log to file: '
      console.log(msg.cprintMessageToFile02 + file);
    }
  } else {
    // 'ERROR: Log File includes undefined.'
    console.log(msg.cprintMessageToFile03);
  }
  // console.log(`END ${namespacePrefix}${functionName} function`);
};

module.exports = {
  [fnc.cconsoleLog]: (classPath, message) => consoleLog(classPath, message)
};
