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
 * @function stringToDataType
 * @description Converts a string to the appropriate data value.
 * So if it's a string value of "3.1415926535897932384626433832" Then it will get converted to a float of the same value.
 * If it's a string value of "false" then it will get converted to a Boolean of the same value.
 * If it's a string value of "12" then it will get converted to an integer of the same value.
 * If it's a string value of "Happy Birthday" it will get returned the same as the input, no change, since it's just a string.
 * If it's an array of strings, or collection object, it will get returned as the same as the input, no change.
 * @param {string} inputData The string that should be converted to some value.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {object|string|boolean|integer} Returns a value of whatever type the string should be converted to as appropriate.
 * @author Seth Hollingsead
 * @date 2021/11/10
 */
export const stringToDataType = function(inputData, inputMetaData) {
  let functionName = stringToDataType.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`inputData is: ${JSON.stringify(inputData)}`);
  console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData = false;
  if (inputData) {
    let dataType = determineObjectDataType(inputData, '');
    switch (dataType) {
      case 'Boolean':
        returnData = stringToBoolean(inputData, '');
        break;
      case 'Integer':
        returnData = parseInt(inputData, '');
        break;
      case 'Float':
        returnData = parseFloat(inputData, '');
        break;
      case 'String':
        returnData = inputData;
        break;
      default: // We don't know what kind of object this is, better just return it the way it is.
        returnData = inputData;
        break;
    }
  }
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function stringToBoolean
 * @description Converts a string to a boolean value.
 * @param {string} inputData A string that contains a truthy or falsy value and should be converted to a Boolean value.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of either True or False according to the business rule conversion.
 * @author Seth Hollingsead
 * @date 2021/11/10
 * @NOTE We cannot pass in a 1 or 0 to this function and expect it to evaluate as a True or False because:
 * We have another function that is passng strings into the function, and also part of that check to look for data-types is a check to see if a sring is a number.
 * If we cause this function to evaluate a 0 or 1 to a Boolean, then the integer function would never get a chance to evaluate.
 */
export const stringToBoolean = function(inputData, inputMetaData) {
  let functionName = stringToBoolean.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`inputData is: ${JSON.stringify(inputData)}`);
  console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData = false;
  if (inputData) {
    if (typeof inputData === 'boolean') {
      returnData = inputData;
    } else {
      switch (inputData.toLowerCase().trim()) {
        case 'true': case 't': case 'y': case 'yes': case 'on':
          returnData = true;
          break;
        case 'false': case 'f': case 'n': case 'no': case 'off':
          returnData = false;
          break;
        default:
          returnData = false;
          break;
      }
    }
  }
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function determineObjectDataType
 * @description Determines if the contents fo a string are actually a Boolean, Integer, Float, String or something else.
 * @param {string} inputData A string that contains some value that we should figure out
 * what kind of data type that data is, Boolean, Integer, Float, String or something else.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A strng that ndicates if the data type should be Boolean, Inteer, Float, String or something else.
 * @author Seth Hollingsead
 * @date 2021/11/10
 */
export const determineObjectDataType = function(inputData, inputMetaData) {
  let functionName = determineObjectDataType.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`inputData is: ${JSON.stringify(inputData)}`);
  console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData = false;
  if (inputData) {
    if (isBoolean(inputData, '') === true) {
      returnData = 'Boolean';
    } else if (isInteger(inputData, '') === true) {
      returnData = 'Integer';
    } else if (isFloat(inputData, '') === true) {
      returnData = 'Float';
    } else if (isString(inputData, '') === true) {
      returnData = 'String';
    } else { // Otherwise we cannot figure out what the data type is.
      // No real way to tell the difference between Short, Long and Double.
      // And we don't really need to tell the difference between all these complicated data types.
      // At least not yet!
      returnData = 'Object';
    }
  }
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function isBoolean
 * @description Determines if the input strng is a Boolean type of value,
 * "true", "True", "TRUE", "t", "T", "y", "Y", "yes", "Yes", "YES", "on", "On", "ON" or
 * "false", "False", "FALSE", "f", "F", "n", "N", "no", "No", "NO"
 * @param {string} inputData The string that should be checked if it is a Boolean style value or not, culd be some form of "true" or "false".
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of True or False to indicate if the input string is a Boolean or not.
 * @author Seth Hollingsead
 * @date 2021/11/10
 */
export const isBoolean = function(inputData, inputMetaData) {
  let functionName = isBoolean.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`inputData is: ${JSON.stringify(inputData)}`);
  console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData = false;
  if (inputData) {
    if (typeof inputData === 'boolean') {
      returnData = true;
    } else {
      inputData = inputData.toLowerCase().trim();
      if (inputData === 'true' || inputData === 't' || inputData === 'y' || inputData === 'yes' || inputData === 'on' ||
      inputData === 'false' || inputData === 'f' || inputData === 'n' || inputData === 'no' || inputData === 'off') {
        returnData = true;
      } else {
        returnData = false;
      }
    }
  }
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function isInteger
 * @description Determines if the input string is an integer type of value -9007299254740992 to 9007299254740992.
 * @param {string} inputData The string that should be checked if it is an integer style value or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of True or False to indicate if the input string is an integer or not.
 * @author Seth Hollingsead
 * @date 2021/11/10
 */
export const isInteger = function(inputData, inputMetaData) {
  let functionName = isInteger.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`inputData is: ${JSON.stringify(inputData)}`);
  console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData = false;
  if (inputData) {
    if (!isNaN(inputData)) {
      if (inputData % 1 === 0) {
        // It's a whole number, aka: integer
        returnData = true;
      } else { // Else clause is redundant, but kept here for code completeness.
        // Might be a number, but ot a whole number.
        returnData = false;
      }
    } else { // Else clause is redundant, but kept here for code completeness.
      // Possibly also console log here for debugging.
      returnData = false;
    }
  }
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function isFloat
 * @description Determines if the input string is a floating point type of vaue or not.
 * @param {string} inputData The string that should be checked if it is an integer style value or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of True or False to ndicate if the input string is a foatng point number or not.
 * @author Seth Hollingsead
 * @date 2021/11/10
 */
export const isFloat = function(inputData, inputMetaData) {
  let functionName = isFloat.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`inputData is: ${JSON.stringify(inputData)}`);
  console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData = false;
  if (inputData) {
    if (!isNaN(inputData) && inputData.indexOf('.') !== -1) {
      returnData = true;
    } else { // Else clause is redundant, but kept here for code completeness.
      // Possibly also console log here for debugging.
      returnData = false;
    }
  }
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function isString
 * @description Determines if the input string is a string or not, by process of elimination,
 * aka if it's not a Boolean, and not an Integer and not a Float then it must be a string.
 * @param {string} inputData The string that should be checked if it is a string and not a Boolean, Integer or Float.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of True or False to indicate if the input string is a string and
 * not a Boolean, Integer or Float; or not (meaning is would be one of those 3 data types, discuised as a string).
 * @author Seth Hollingsead
 * @date 2021/11/10
 */
export const isString = function(inputData, inputMetaData) {
  let functionName = isString.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`inputData is: ${JSON.stringify(inputData)}`);
  console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData = false;
  if (inputData) {
    if (isBoolean(inputData, '') === false && isInteger(inputData, '') === false && isFloat(inputData, '') === false &&
    (typeof inputData === 'string' || inputData instanceof String)) {
      returnData = true; // If it's not a Boolean, and not an Integer, and not a Float, then it must be a string,
      // especially given the type of the variable is a string!
    } else { // Else clause is redundant, but kept here for code completeness.
      // Possilby also console log here for debugging.
      returnData = false;
    }
  }
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
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
