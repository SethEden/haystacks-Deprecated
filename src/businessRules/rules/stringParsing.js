// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js

/**
 * @file stringParsing.js
 * @module stringParsing
 * @description Contains all system defined business rules for parsing strings,
 * with values of all kinds, and various parsing operations.
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:system.constants
 * @requires module:word.constants
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:arrayParsing
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var bas = require('../../constants/basic.constants');
var gen = require('../../constants/generic.constants');
var sys = require('../../constants/system.constants');
var wrd = require('../../constants/word.constants');
var configurator = require('../../executrix/configurator');
var loggers = require('../../executrix/loggers');
var arrayParsing = require('./arrayParsing');
var D = require('../../structures/data');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function parseSystemRootPath
 * @description Parses the root path as returned by calling: path.resolve(__dirname);
 * This business rule looks for the "AppName" part of the path
 * and will parse that out to determine where on the hard drive this "appName" folder is installed at.
 * @NOTE: The "AppName" is derived from the configuration settings called "applicationName"
 * which should have been set by the system when it was loaded.
 * @param {string} inputData The root path as defined by calling path.resolve(__dirname);
 * @param {string} inputMetaData The name of the application.
 * @return {string} A string with the path up to the application folder,
 * where ever that is installed on the local system currently executing.
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Cannot use the loggers here, because dependency data will have never been loaded.
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
    } // End for-loop: (let i = 0; i < pathElements.length; i++)
  } // End-if (inputData)
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function stringToDataType
 * @description Converts a string to the appropriate data value.
 * So if it's a string value of "3.1415926535897932384626433832" Then it will get converted to a float of the same value.
 * If it's a string value of "false" then it will get converted to a boolean of the same value.
 * If it's a string value of "12" then it will get converted to an integer of the same value.
 * If it's a string value of "Happy Birthday" it will get returned the same as the input, no change, since it's just a string.
 * If it's an array of strings, or collection object, it will get returned as the same as the input, no change.
 * @param {string} inputData The string that should be converted to some value.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {object|string|boolean|integer} Returns a value of whatever type the string should be converted to as appropriate.
 * @author Seth Hollingsead
 * @date 2021/11/10
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
export const stringToDataType = function(inputData, inputMetaData) {
  let functionName = stringToDataType.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData = false;
  if (inputData) {
    let dataType = determineObjectDataType(inputData, '');
    switch (dataType) {
      case wrd.cBoolean:
        returnData = stringToBoolean(inputData, '');
        break;
      case wrd.cInteger:
        returnData = parseInt(inputData, '');
        break;
      case wrd.cFloat:
        returnData = parseFloat(inputData, '');
        break;
      case wrd.cString:
        returnData = inputData;
        break;
      default: // We don't know what kind of object this is, better just return it the way it is.
        returnData = inputData;
        break;
    }
  } // End-if (inputData)
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function stringToBoolean
 * @description Converts a string to a boolean value.
 * @param {string} inputData A string that contains a truthy or falsy value and should be converted to a boolean value.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of either True or False according to the business rule conversion.
 * @author Seth Hollingsead
 * @date 2021/11/10
 * @NOTE We cannot pass in a 1 or 0 to this function and expect it to evaluate as a True or False because:
 * We have another function that is passing strings into the function, and also part of that check to look for data-types is a check to see if a string is a number.
 * If we cause this function to evaluate a 0 or 1 to a Boolean, then the integer function would never get a chance to evaluate.
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
export const stringToBoolean = function(inputData, inputMetaData) {
  let functionName = stringToBoolean.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData = false;
  if (inputData) {
    if (typeof inputData === wrd.cboolean) {
      returnData = inputData;
    } else {
      switch (inputData.toLowerCase().trim()) {
        case gen.ctrue: case bas.ct: case bas.cy: case gen.cyes: case bas.con:
          returnData = true;
          break;
        case gen.cfalse: case bas.cf: case bas.cn: case bas.cno: case gen.coff:
          returnData = false;
          break;
        default:
          returnData = false;
          break;
      }
    }
  }
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function determineObjectDataType
 * @description Determines if the contents of a string are actually a Boolean, Integer, Float, String or something else.
 * @param {string} inputData A string that contains some value that we should figure out
 * what kind of data type that data is, Boolean, Integer, Float, String or something else.
 * @param {string} inputMetaDataNot Not used for this business rule.
 * @return {string} A string that indicates if the data type should be Boolean, Integer, Float, String or something else.
 * @author Seth Hollingsead
 * @date 2021/11/10
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
export const determineObjectDataType = function(inputData, inputMetaData) {
  let functionName = determineObjectDataType.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData = false;
  if (inputData) {
    if (isBoolean(inputData, '') === true) {
      returnData = wrd.cBoolean;
    } else if (isInteger(inputData, '') === true) {
      returnData = wrd.cInteger;
    } else if (isFloat(inputData, '') === true) {
      returnData = wrd.cFloat;
    } else if (isString(inputData, '') === true) {
      returnData = wrd.cString;
    } else { // Otherwise we cannot figure out what the data type is.
      // No real way to tell the difference between Short, Long and Double.
      // And we don't really need to tell the difference between all these complicated data types.
      // At least not yet!
      returnData = wrd.cObject;
    }
  }
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function isBoolean
 * @description Determines if the input string is a boolean type of value,
 * "true", "True", "TRUE", "t", "T", "y", "Y", "yes", "Yes", "YES", "on", "On", "ON" or
 * "false", "False", "FALSE", "f", "F", "n", "N", "no", "No", "NO"
 * @param {string} inputData The string that should be checked if it is a Boolean style value or not, could be some form of "true" or "false".
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of True or False to indicate if the input string is a Boolean or not.
 * @author Seth Hollingsead
 * @date 2021/11/10
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
export const isBoolean = function(inputData, inputMetaData) {
  let functionName = isBoolean.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData = false;
  if (inputData) {
    if (typeof inputData === 'boolean') {
      returnData = true;
    } else {
      inputData = inputData.toLowerCase().trim();
      if (inputData === gen.ctrue || inputData === bas.ct || inputData === bas.cy || inputData === gen.cyes || inputData === bas.con ||
      inputData === gen.cfalse || inputData === bas.cf || inputData === bas.cn || inputData === bas.cno || inputData === gen.coff) {
        returnData = true;
      } else {
        returnData = false;
      }
    }
  }
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function isInteger
 * @description Determines if the input string is an integer type of value -9007299254740992 to 9007299254740992.
 * @param {string} inputData The string that should be checked if it is an integer style value or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of true or false to indicate if the input string is an integer or not.
 * @author Seth Hollingsead
 * @date 2021/11/10
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
export const isInteger = function(inputData, inputMetaData) {
  let functionName = isInteger.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData = false;
  if (inputData) {
    if (!isNaN(inputData)) {
      if (inputData % 1 === 0) {
        // It's a whole number, aka: integer
        returnData = true;
      } else { // Else clause is redundant, but kept here for code completeness.
        // Might be a number, but not a whole number.
        returnData = false;
      }
    } else { // Else clause is redundant, but kept here for code completeness.
      // Possibly also console log here for debugging.
      returnData = false;
    }
  }
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function isFloat
 * @description Determines if the input string is a floating point type of value or not.
 * @param {string} inputData The string that should be checked if it is an integer style value or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of true or false to indicate if the input string is a floating point number or not.
 * @author Seth Hollingsead
 * @date 2021/11/10
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
export const isFloat = function(inputData, inputMetaData) {
  let functionName = isFloat.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData = false;
  if (inputData) {
    if (!isNaN(inputData) && inputData.indexOf(bas.cDot) !== -1) {
      returnData = true;
    } else { // Else clause is redundant, but kept here for code completeness.
      // Possibly also console log here for debugging.
      returnData = false;
    }
  }
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function isString
 * @description Determines if the input string is a string or not, by process of elimination,
 * aka if it's not a Boolean, and not an Integer and not a Float then it must be a string.
 * @param {string} inputData The string that should be checked if it is a string and not a Boolean, Integer or Float.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of true or false to indicate if the input string is a string and
 * not a Boolean, Integer or Float; or not (meaning it would be one of those 3 data types, discuised as a string).
 * @author Seth Hollingsead
 * @date 2021/11/10
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
export const isString = function(inputData, inputMetaData) {
  let functionName = isString.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData = false;
  if (inputData) {
    if (isBoolean(inputData, '') === false && isInteger(inputData, '') === false && isFloat(inputData, '') === false &&
    (typeof inputData === wrd.cstring || inputData instanceof String)) {
      returnData = true; // If it's not a Boolean, and not an Integer, and not a Float, then it must be a string,
      // especially given the type of the variable is a string!
    } else { // Else clause is redundant, but kept here for code completeness.
      // Possibly also console log here for debugging.
      returnData = false;
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
  loggers.consoleLog(namespacePrefix + functionName, 'BEGIN %% function');
  loggers.consoleLog(namespacePrefix + functionName, `inputData is: ${JSON.stringify(inputData)}`);
  loggers.consoleLog(namespacePrefix + functionName, `inputMetaData is: ${JSON.stringify(inputMetaData)}`);
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
  loggers.consoleLog(namespacePrefix + functionName, `returnData is: ${JSON.stringify(returnData)}`);
  loggers.consoleLog(namespacePrefix + functionName, 'END %% function');
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
  loggers.consoleLog(namespacePrefix + functionName, 'BEGIN %% function');
  loggers.consoleLog(namespacePrefix + functionName, `inputData is: ${JSON.stringify(inputData)}`);
  loggers.consoleLog(namespacePrefix + functionName, `inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\//g, bas.cBackSlash]);
  }
  loggers.consoleLog(namespacePrefix + functionName, `returnData is: ${JSON.stringify(returnData)}`);
  loggers.consoleLog(namespacePrefix + functionName, 'END %% function');
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
  loggers.consoleLog(namespacePrefix + functionName, 'BEGIN %% function');
  loggers.consoleLog(namespacePrefix + functionName, `inputData is: ${JSON.stringify(inputData)}`);
  loggers.consoleLog(namespacePrefix + functionName, `inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\\/g, bas.cForwardSlash]);
  }
  loggers.consoleLog(namespacePrefix + functionName, `returnData is: ${JSON.stringify(returnData)}`);
  loggers.consoleLog(namespacePrefix + functionName, 'END %% function');
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
  loggers.consoleLog(namespacePrefix + functionName, 'BEGIN %% function');
  loggers.consoleLog(namespacePrefix + functionName, `inputData is: ${JSON.stringify(inputData)}`);
  loggers.consoleLog(namespacePrefix + functionName, `inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\/\//g, bas.cForwardSlash]);
  }
  loggers.consoleLog(namespacePrefix + functionName, `returnData is: ${JSON.stringify(returnData)}`);
  loggers.consoleLog(namespacePrefix + functionName, 'END %% function');
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
  loggers.consoleLog(namespacePrefix + functionName, 'BEGIN %% function');
  loggers.consoleLog(namespacePrefix + functionName, `inputData is: ${JSON.stringify(inputData)}`);
  loggers.consoleLog(namespacePrefix + functionName, `inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData;
  if (!inputData) {
    returnData = false;
  } else {
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\\\\/g, bas.cBackSlash]);
  }
  loggers.consoleLog(namespacePrefix + functionName, `returnData is: ${JSON.stringify(returnData)}`);
  loggers.consoleLog(namespacePrefix + functionName, 'END %% function');
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function replaceDoublePercentWithMessage
 * @description Parses the input string and replaces any instance of a double percentage sign
 * with the input Meta Data string.
 * @param {string} inputData The string that might contain the double percentage signs.
 * @param {string} inputMetaData The string that should replace the double percentage signs.
 * @return {string} The modified string with the message inserted.
 * @author Seth Hollingsead
 * @date 2021/12/24
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
export const replaceDoublePercentWithMessage = function(inputData, inputMetaData) {
  let functionName = replaceDoublePercentWithMessage.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData = '';
  if (inputData) {
    returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [bas.cDoublePercent, inputMetaData]);
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
