// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js

/**
 * @file stringParsing.js
 * @module stringParsing
 * @description Contains all system defined business rules for parsing strings,
 * with values of all kinds, and various parsing operations.
 * Excluding functions that cannot use the loggers.
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:message.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @requires module:loggers
 * @requires module:arrayParsing
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

let bas = require('../../constants/basic.constants');
let gen = require('../../constants/generic.constants');
let msg = require('../../constants/message.constants');
let sys = require('../../constants/system.constants');
let wr1 = require('../../constants/word1.constants');
let loggers = require('../../executrix/loggers');
let arrayParsing = require('./arrayParsing');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = sys.cbusinessRules + bas.cDot + wr1.crules + bas.cDot + baseFileName + bas.cDot;

/**
* @function singleQuoteSwapAfterEquals
* @description Swaps single quote characters in the middle of the string wih double quote characters n the middle of the string.
* input: 'inut[name='emailAddress'][class='username']'
* output: 'input[name="emailAddress"][class="username"]'
* @param {string} inputData A string that contains text with single quotes that should be swapped for double quotes.
* @param {string} inputMetaData Not used for this business rule.
* @return {string} A string that contains text where single quotes have been exchanged for double quotes.
* @author Seth Hollingsead
* @date 2021/10/28
*/
export const singleQuoteSwapAfterEquals = function(inputData, inputMetaData) {
  let functionName = singleQuoteSwapAfterEquals.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    if (inputData.includes(bas.cSingleQuote) === true) {
      // First replace all the quotes in the string with double quotes.
      returnData = inputData.replace(/'/g, bas.cDoubleQuote);
      // Next replace the first and last double quote with single quote.
      if (returnData.indexOf(bas.cDoubleQuote) === 0) {
        returnData = inputData.replace(bas.cDoubleQuote, bas.cSingleQuote);
      }
      if (returnData.charAt(returnData.length - 1) === bas.cDoubleQuote) {
        returnData = returnData.slice(0, -1) + bas.cSingleQuote;
      }
    } else {
      returnData = inputData;
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
* @function swapForwardSlashToBackSlash
* @description Swaps all forward slash characters in a string for back slash characters.
* @param {string} inputData String that might contain some forward slashes.
* @param {string} inputMetaData Not used for this business rule.
* @return {string} The same as the input string, just all forward slash characters
* swapped for back slash characters.
* @author Seth Hollingsead
* @date 2021/10/28
*/
export const swapForwardSlashToBackSlash = function(inputData, inputMetaData) {
  let functionName = swapForwardSlashToBackSlash.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\//g, bas.cBackSlash]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
* @function swapBackSlashToForwardSlash
* @description Swaps all back slash characters in a string for forward slash characters.
* @param {string} inputData String that might contains some back slashes.
* @param {string} inputMetaData Not used for this business rule.
* @return {string} The same as the input string, just all back slash characters
* swapped for forward slash characters.
* @author Seth Hollingsead
* @date 2021/10/28
*/
export const swapBackSlashToForwardSlash = function(inputData, inputMetaData) {
  let functionName = swapBackSlashToForwardSlash.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\\/g, bas.cForwardSlash]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
* @function swapDoubleForwardSlashToSingleForwardSlash
* @description Swaps all double forward slash characters for sinle forward slash characters.
* @param {string} inputData String that might contain some double forward slashes.
* @param {string} inputMetaData Not used for this business rule.
* @return {string} The same as the input string, just all double forward slash characters
* swapped for single forward slash characters.
* @author Seth Hollingsead
* @date 2021/10/28
*/
export const swapDoubleForwardSlashToSingleForwardSlash = function(inputData, inputMetaData) {
  let functionName = swapDoubleForwardSlashToSingleForwardSlash.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\/\//g, bas.cForwardSlash]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
* @function swapDoubleBackSlashToSingleBackSlash
* @description Swaps all double back slash characters for single back slash characters.
* @param {string} inputData String that might contain some double back slashes.
* @param {string} inputMetaData Not used for this business rule.
* @return {string} The same as the input string, just all duble back slash characters
* swapped for single back slash characters.
* @author Seth Hollingsead
* @date 2021/10/28
*/
export const swapDoubleBackSlashToSingleBackSlash = function(inputData, inputMetaData) {
  let functionName = swapDoubleBackSlashToSingleBackSlash.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\\\\/g, bas.cBackSlash]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

// ******************************************************
// Internal functions
// ******************************************************

/**
 * @function replaceCharacterAtIndexOfString
 * @description Replaces the character at a specified index with another character.
 * @param {string} originalString The string where the replacement should be made.
 * @param {integer} index The index of the character where the replacement should be made.
 * @param {string} replacement The character or string that should be inserted at the specified index.
 * @return {string} The string after the replacement has been made.
 * @author Seth Hollingsead
 * @date 2021/10/28
 * @NOTE: https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
const replaceCharacterAtIndexOfString = function(originalString, index, replacement) {
  let functionName = replaceCharacterAtIndexOfString.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`originalString is: ${originalString}`);
  // console.log(`index is: ${index}`);
  // console.log(`replacement is: ${replacement}`);
  let returnData;
  if (originalString != '' && index >= 0 && replacement != '') {
    returnData = originalString.substr(0, index) + replacement + originalString.substr(index + replacement.length);
  }
  // console.log(`returnData is: ${returnData}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};
