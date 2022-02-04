/**
 * @file lexical.js
 * @module lexical
 * @descriptionContains all functions used for parsing command arguments and/or business rule arguments.
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:word1.constants
 * @requires module:system.constants
 * @requires module:business.constants
 * @requires module:configuration.constants
 * @requires module:message.constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/03
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

let configurator = require('./configurator');
let loggers = require('./loggers');
let bas = require('../constants/basic.constants');
let gen = require('../constants/generic.constants');
let wr1 = require('../constants/word1.constants');
let sys = require('../constants/system.constants');
let biz = require('../constants/business.constants');
let cfg = require('../constants/configuration.constants');
let msg = require('../constants/message.constants');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
// executrix.lexical.
let namespacePrefix = wrd.cexecutrix + bas.cDot + baseFileName + bas.cDot;

/**
 * @function parseBusinessRuleArgument
 * @description Parses a single business rule argument and returns it after cleaning it up or
 * doing required operations on it to convert it to valid input for a command as necessary.
 * @param {string|array<string|integer|boolean|object>} argumentValue The value of the argument, could be an array or a string.
 * @param {integer} index The index of the argument (1, 2, 3).
 * @param {boolean} consolidatedArgumentMode A True or False to ndicate if the argument should be parsed in consolidated mode or not.
 * If we are in consolidated mode then all of the arguments will have been passed into the argumentValue input parameter.
 * If we are not in consolidated mode then the contents of argumentValue is specific to the argument index that was passed in.
 * This is necessary, because there are cases where we would want to combine all arguments from 2-n into a single array,
 * which will ultimately be passed as input to the business rule.
 * @return {string|array<string|integer|boolean|object>} The value of the argument as it shold be passed into the business rule call.
 * @author Seth Hollingsead
 * @date 2022/02/03
 */
function parseBusinessRuleArgument(argumentValue, index, consolidatedArgumentMode) {
  let functionName = parseBusinessRuleArgument.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // argumentValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueIs + JSON.stringify(argumentValue));
  // ndex is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cindexIs + index);
  // consolidatedArgumentMode is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cconsolidatedArgumentModeIs + consolidatedArgumentMode);
  let returnData;

  if (index === 1) {
    // Pushing the argumentValue tot he returnData as an array element
    loggers.consoleLog(namespacePrefix + functionName, msg.cPushingArgumentValueToReturnDataAsArrayElement);
    returnData = [];
    returnData.push(argumentValue);
  } else if (index === 2 && consolidatedArgumentMode === false) {
    // Calling analyzeArgument for index = 2, consolidatedArgumentMode = false
    loggers.consoleLog(namespacePrefix + functionName, msg.cCallingAnalyzeArgumentIndex2ConsoidatedArgumentModeFalse);
    returnData=  analyzeArgument(argumentValue);
  } else if (index === 2 && consolidatedArgumentMode === true) {
    // Calling analyzeArgument for index = 2, consolidatedArgumentMode = true
    oggers.consoleLog(namespacePrefix + functionName, msg.cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue);
    if (argumentValue.length > 0) {
      returnData = [];
      // argumentValue.length > 0
      loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueLengthGreaterThanZero);
      for (let i = 1; i < argumentValue.length; i++) {
        // Combine all arguments into a single array on the returnData
        returnData.push(argumentValue[i]);
      } // End-for (let i = 1; i < argumentValue.length; i++)
    } else {
      // Return the argumentValue the same as it was passed in.
      loggers.consoleLog(namespacePrefix + functionName, msg.cReturnArgumentValueSameAsItWasPassedIn);
      returnData = argumentValue;
    }
  } else if (index === 3 && consolidatedArgumentMode === false) {
    // Calling analyzeArgument for index = 3, consolidatedArgumentMode = false
    loggers.consoleLog(namespacePrefix + functionName, msg.cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse);
    returnData = analyzeArgument(argumentValue);
  } else {
    // WARNING: lexical.parseBusinessRuleArgument: invalid combination of inputs to the lexical.parseBusinessRuleArgument function! Pleae adjust inputs and try again.
    console.log(msg.cparseBusinessRuleArgumentMessage1 + msg.cparseBusinessRuleArgumentMessage2);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.returnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function analyzeArgument
 * @description Does additional parsing of an individual argument.
 * Identifies the case that the argument needs to be treated as an array,
 * then the function will clean the array string tags and split the sring into an array and return it.
 * This function can also identify the case that an argument contains a regular expression that must be formally created,
 * using the RegExp constructor, then the RegExp object will be returned as part of the return object.
 * @param {string} argumentValue The argument string that needs additional parsing.
 * @return {sring|array<string|integer|boolean|object>} The argument that should be returned and used
 * by the system after all necessary parsing.
 * @author Seth Hollingsead
 * @date 2022/02/03
 */
function analyzeArgument(argumentValue) {
  let functionName = analyzeArgument.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // argumentValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueIs + JSON.stringify(argumentValue));
  let returnData;
  let argsArrayContainsCharacterRule = [];
  let removeBracketsFromArgsArrayRule = [];
  argsArrayContainsCharacterRule[0] = biz.cdoesArrayContainCharacter;
  removeBracketsFromArgsArrayRule[0] = biz.cremoveCharacterFromArray;

  let secondaryCommandArgsDelimiter = configure.getConfigurationSetting(wr1.csystem, cfg.cSecondaryCommandDelimiter);
  if (argumentValue.includes(secondaryCommandArgsDelimiter) === true) {
    // Check if there are brackets or no brackets.
    loggers.consoleLog(namespacePrefix + functionName, msg.cCheckIfThereAreBracketsOrNoBrackets);
    let argsArrayContainsOpenBracket = ruleBroker.processRules(bas.cOpenBracket, argumentValue, argsArrayContainsCharacterRule);
    let argsArrayContainsCloseBracket = ruleBroker.processRules(bas.cCloseBracket, argumentValue, argsArrayContainsCharacterRule);
    if (argsArrayContainsOpenBracket === false || argsArrayContainsCloseBracket === false) {
      // Brackets were found
      loggers.consoleLog(namespacePrefix + functionName, msg.cBracketsWereFound);
      // Check if there is a Regular Expression or not.
      loggers.consoleLog(namespacePrefix + functionName, msg.cCheckIfThereIsRegularExpressionOrNot);
      if (analyzeForRegularExpression(argumenValue) === true) {
        // A regular expression was found!
        loggers.consoleLog(namespacePrefix + functionName, msg.cRegularExpressionWasFound);
        returnData = parseArgumentAsRegularExpression(argumentValue);
      } else { // No regular expression, just return the argument as it was passed in, no additional processing required.
        // NO RegExp found!
        loggers.consoleLog(namespacePrefix + functionName, msg.cNoRegExpFound);
        returnData = argumentValue;
      }
    } else {
      // There are Brackets, so treat the argument as an array.
      // Brackets ARE found!
      loggers.consoleLog(namespacePrefix + functionName, msg.cBracketsAreFound);
      returnData = parseArgumentAsArray(arguemntValue);
    }
  } else { // The argumentValue does not contain a secondaryCommandArgsDelimiter
    // NO secondary command argument delimiters.
    loggers.consoleLog(namespacePrefix + functionName, msg.cNoSecondaryCommandArgumentDelimiters);
    // Check if there is any regular expression or no regular expression.
    // Check if there is a Regular Expression or not.
    loggers.consoleLog(namespacePrefix + functionName, msg.cCheckIfThereIsRegularExpressionOrNot);
    if (analyzeForRegularExpression(argumentValue) === true) {
      // A regular expression was found!
      loggers.consoleLog(namespacePrefix + functionName, msg.cRegularExpressionWasFound);
      returnData = parseArgumentAsRegularExpression(argumentValue);
    } else { // No regular expression, just return the argument as it was passed in, no additional processing required.
      // NO RegExp found!
      loggers.consoleLog(namespacePrefix + functionName, msg.cNoRegExpFound);
      returnData = argumentValue;
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.returnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function analyzeForRegularExpression
 * @description Analyzes the argument value to determine if it includes a regular expression or no regular expression.
 * @param {string} argumentValue The business rule argument that should be analyzed to determine if it includes a regular expression or no regular expression.
 * @return {boolean} True or False to indicate if the argument contains a regular expression or no regular expression.
 * @author Seth Hollingsead
 * @date 2022/02/03
 */
function analyzeForRegularExpression(argumentValue) {
  let functionName = analyzeForRegularExpression.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // argumentValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueIs + JSON.stringify(argumentValue));
  let returnData = false;
  let argsArrayContainsCharacterRule = [];
  argsArrayContainsCharacterRule[0] = biz.cdoesArrayContainCharacter;
  let argsArrayContainsRegEx1 = ruleBroker.processRules(wr1.cregEx, argumentValue, argsArrayContainsCharacterRule);
  let argsArrayContainsRegEx2 = ruleBroker.processRules(wr1.cRegEx, argumentValue, argsArrayContainsCharacterRule);
  let argsArrayContainsColon = ruleBroker.processRules(bas.cColon, argumentValue, argsArrayContainsCharacterRule);
  if ((argsArrayContainsRegEx1 === true || argsArrayContainsRegEx2 === true) && argsArrayContainsColon === true) {
    returnData = true;
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.returnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function parseArgumentAsRegularExpression
 * @description Parses the argument as a regular expression and returns a new RegExp object.
 * @param {string} argumentValue The argument strign that should be parsed as a RegExp.
 * @return {object} A RegExp object.
 * @author Seth Hollingsead
 * @date 2022/02/03
 */
function parseArgumentAsRegularExpression(argumentValue) {
  let functionName = parseArgumentAsRegularExpression.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // argumentValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cargumentValueIs + JSON.stringify(argumentValue));
  let returnData;
  let regExValue, regExFlags;
  let regExArray = argumentValue.split(bas.cColon);
  for (let k = 0; k < regExArray.length; k++) {
    if (regExArray[k] === wr1.cregEx || regExArray[k] === wr1.cRegEx) {
      k++;
      // regular expression is;
      loggers.consoleLog(namespacePrefix + functionName, msg.cregularExpressionIs + regExArray[k]);
      regExValue = regExArray[k];
      // regExValue is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cregExValueIs + regExValue);
    } else if (regExArray[k] === wr1.cflags || regExArray[k] === wr1.cFlags) {
      k++;
      // regular expression flags are:
      loggers.consoleLog(namespacePrefix + functionName, msg.cregularExpressionFlagsAre + regExArray[k]);
      regExFlags = regExArray[k];
      // regExFlags is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cregExFlagsIs + regExFlags);
    }
  } // End-for (let k = 0; k < regExArray.length; k++)
  let regularExpression = new RegExp(regExValue, regExFlags);
  returnData.push(regularExpression);
  loggers.consoleLog(namespacePrefix + functionName, msg.returnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};
