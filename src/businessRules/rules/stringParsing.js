// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js

/**
 * @file stringParsing.js
 * @module stringParsing
 * @description Contains all system defned business rules for parsing strings,
 * with values of all kinds, and various parsing operations.
 * @requires module:basic.constants
 * @requires module:configurator
 * @requires module:arrayParsing
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var bas = require('../../constants/basic.constants');
var configurator = require('../../executrix/configurator');
var arrayParsing = require('./arrayParsing');
var D = require('../../structures/data');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = `brokers.${baseFileName}.`;

/**
 * @function parseSystemRootPath
 * @description Parses the root path as returned by calling: path.resolve(__dirname);
 * This business rule looks for the "AppName" part of the path
 * and will parse that out to determine where on the hard drive this "appName" folder is installed at.
 * @NOTE: The "AppName" is derived from the configuration settings called "applicationName"
 * which should have been set by the system when it was loaded.
 * @param {string} inputData The root path as dfined by calling path.resolve(__dirname);
 * @param {string} inputMetaData The name of the application.
 * @return {string} A string ith the path up to the application folder,
 * where ever that is installed on the local system executing the tests.
 * @author Seth Hollingsead
 * @date 2021/10/27
 */
export const parseSystemRootPath = function(inputData, inputMetaData) {
  let functionName = parseSystemRootPath.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData = '';
  if (inputData) {
    let applicationName = inputMetaData; // Rename it for readability.
    let pathElements = inputData.split(bas.cBackSlash);
    loop1:
    for (let i = 0; i < pathElements.length; i++) {
      // console.log(`BEGIN iteration i: ${i}`);
      let pathElement = pathElements[i];
      // console.log(`pathElement is: ${pathElement}`);
      if (i === 0) {
        // console.log('case: i === 0');
        returnData = pathElement;
      } else if (pathElement === applicationName) {
        // console.log(`case: pathElement === ${applicationName}`);
        returnData = returnData + bas.cBackSlash + pathElement + bas.cBackSlash; // `${returnData}\\${pathElement}\\`;
        break loop1;
      } else {
        // console.log('case else');
        returnData = returnData + bas.cBackSlash + pathElement; // `${returnData}\\${pathElement}`;
      }
    }
  }
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

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
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    if (inputData.includes('\'') === true) {
      // First replace all the quotes in the string with double quotes.
      returnData = inputData.replace(/'/g, '"');
      // Next replace the first and last double quote with single quote.
      if (returnData.indexOf('"') === 0) {
        returnData = inputData.replace('"', '\'');
      }
      if (returnData.charAt(returnData.length - 1) === '"') {
        returnData = returnData.slice(0, -1) + '\'';
      }
    } else {
      returnData = inputData;
    }
  }
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
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\//g, '\\']);
  }
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
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\\/g, '/']);
  }
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
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\/\//g, '/']);
  }
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
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\\\\/g, '\\']);
  }
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
