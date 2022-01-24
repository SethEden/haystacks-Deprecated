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

/**
 * @function getUserNameFromEmail
 * @description Converts an email input into a username.
 * @param {string} inputData A string that contains an email address value.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string value of the sub-string from before the '@' symbol.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
export const getUserNameFromEmail = function(inputData, inputMetaData) {
  let functionName = getUserNameFromEmail.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    loggers.consoleLog(namespacePrefix + functionName, msg.cIndexOfTheSpace + bas.cAt +
      sys.cSpaceIsColonSpace + inputData.indexOf(bas.cAt));
    returnData = inputData.substr(0, inputData.indexOf(bas.cAt));
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function replaceSpacesWithPlus
 * @description Replaces all spaces in the input string with plus symbols.
 * @param {string} inputData A string that contains spaces that should be converted to plus symbols.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string but with space characters converted to plus symbols.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
export const replaceSpacesWithPlus = function(inputData, inputMetaData) {
  let functionName = replaceSpacesWithPlus.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    // returnData = inputData.replace(/ /g, bas.cPlus);
    returnData = aryParse.replaceCharacterWithCharacter(inputData, [/ /g, bas.cPlus]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function replaceColonWithUnderscore
 * @description Replaces all colons in the input string with underscore symbols.
 * @param {string} inputData A string that contains colons that should be converted to underscore symbols.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as teh input String but with colon characters converted to underscore symbols.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const replaceColonWithUnderscore = function(inputData, inputMetaData) {
  let functionName = replaceColonWithUnderscore.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    // returnData = inputData.replace(/:/g, bas.cUnderscore);
    returnData = aryParse.replaceCharacterWithCharacter(inputData, [/:/g, bas.cUnderscore]);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function cleanCarriageReturnFromString
 * @desription Cleans carriage return characters from the input data and trims off any leading or training spaces.
 * @param {string} inputData The string that should be scrubbed for carriage returns.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as teh input string, but with all carriage return characters removed.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const cleanCarriageReturnFromString = function(inputData, inputMetaData) {
  let functionName = cleanCarriageReturnFromString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    // returnData = inputData.replace(/\s+/g, bas.cSpace);
    returnData = aryParse.replaceCharacterWithCharacter(inputData, [/\s+/g, bas.cSpace]).trim();
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function convertStringToLowerCase
 * @description Converts the input String to the same string but with no upper case letters.
 * @param {string} inputData The string that should have all upper case letters changed to lower case letters.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The corrected string with all lower case letters.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const convertStringToLowerCase = function(inputData, inputMetaData) {
  let functionName = convertStringToLowerCase.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = inputData.toLowerCase();
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function convertStringToUpperCase
 * @description Converts the input string to the same string but with no lower case letters.
 * @param {string} inputData The string that should have all lower case letters changed to upper case letters.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The corrected string with all upper case letters.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const convertStringToUpperCase = function(inputData, inputMetaData) {
  let functionName = convertStringToUpperCase.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = inputData.toUpperCase();
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getFileNameFromPath
 * @description Gets the file name from a string that contains the path and the file name.
 * @param {string} inputData The string that should have all the folders and path removed from it.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The file name and file extension string without the full path.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const getFileNameFromPath = function(inputData, inputMetaData) {
  let functionName = getFileNameFromPath.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    // Clean the path string for any double slashes.
    if (inputData.includes(bas.cDoubleForwardSlash)) {
      inputData = swapDoubleForwardSlashToSingleForwardSlash(inputData, '');
    }
    if (inputData.includes(bas.cForwardSlash)) {
      inputData = swapForwadSlashToBackSlash(inputData, '');
    }
    // inputData right before processing is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataRightBeforeProcessingIs + inputData);
    returnData = inputData.split(bas.cBackSlash).pop().trim();
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getFileExtension
 * @description Parses the file name and it may or may not also include the full path,
 * but regardless it gets the file extension of the file.
 * @param {string} inputData The string that should contain the file name to which we want to get the file extension from.
 * @param {string} inputMetaData Not sued for this business rule.
 * @return {string} The file extension such as txt, xml, csv, etc...
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const getFileExtension = function(inputData, inputMetaData) {
  let functionName = getFileExtension.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = path.extname(inputData);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function removeDotFromFileExtension
 * @description Removes the Dot from the file extension.
 * example: If the input is ".txt", the return value will just be "txt".
 * @param {string} inputData The string that should contain the file extension that is being modified.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The file extension without the dot prefix.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const removeDotFromFileExtension = function(inputData, inputMetaData) {
  let functionName = removeDotFromFileExtension.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = inputData.substring(1);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function removeFileExtensionFromFileName
 * @description Removes the file extension from the file name if it is there.
 * Otherwise it will remove all the characters after the last period in the file name.
 * @param {string} inputData The string that should have all the characters after the last period in the file name removed.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same input string but without the file extension or all the characters removed after the last dot.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const removeFileExtensionFromFileName = function(inputData, inputMetaData) {
  let functionName = removeFileExtensionFromFileName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = inputData.replace(/\.[^/.]+$/, '');
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getValueFromAssignmentOperationString
 * @description Parses the input string and finds the value on the right side of the '=' sign.
 * @param {string} inputData The string that should be parsed for the value on the right side of the assignmet operator.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string value of whatever is on the right side of the assinment operator.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const getValueFromAssignmentOperationString = function(inputData, inputMetaData) {
  let functionName = getValueFromAssignmentOperationString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let parsedString = inputData.split(bas.cEqual);
    loggers.consoleLog(namespacePrefix + functionName, msg.cparsedStringSpaceTerm + bas.cSpace + num.c1 + msg.cSpaceIsColonSpace + parsedString[0]);
    loggers.consoleLog(namespacePrefix + functionName, msg.cparsedStringSpaceTerm + bas.cSpace + num.c2 + msg.cSpaceIsColonSpace + parsedString[1]);
    returnData = parsedString[1].replace(/['"]+/g, '');
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function aggregateNumericalDifferenceBetweenTwoStrings
 * @description Determines the delta difference between the two input strings and returns it as a number.
 * @param {string} inputData String 1 to compare.
 * @param {string} inputMetaData String 2 to compare.
 * @return {integer} The delta difference between the two strings, expressed as a number.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const aggregateNumericalDifferenceBetweenTwoStrings = function(inputData, inputMetaData) {
  let functionName = aggregateNumericalDifferenceBetweenTwoStrings.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = -1;
  if (inputData && inputMetaData) {
    // Convert the input strings to lower case and clean them up for parsing.
    let string1 = inputData.toLowerCase().replace(/\W/g, '');
    let string2 = inputMetaData.toLowerCase().replace(/\W/g, '');
    loggers.consoleLog(namespacePrefix + functionName, msg.cstring1Is + string1);
    loggers.consoleLog(namespacePrefix + functionName, msg.cstring2Is + string2);

    // Build some arrays of variations on string 2, we will use these for doing the comparisons.
    let variation0 = array(string2.length + 1).fill(0).map((v, i) => i);
    let variation1 = Array(string2.length + 1).fill(0);
    loggers.consoleLog(namespacePrefix + functionName, msg.cvariation0ValueIs + variation0);
    loggers.consoleLog(namespacePrefix + functionName, msg.cvariation1ValueIs + variation1);

    for (let i = 0; i < string1.length; i++) {
      loggers.consoleLog(namespacePrefix + functionName, msg.ciValueIs + i);
      variation1[0] = i + 1;
      loggers.consoleLog(namespacePrefix + functionName, msg.cvariation0ValueIs + variation0);
      for (let j = 0; j < string2.length; j++) {
        loggers.consoleLog(namespacePrefix + functionName, msg.cjValueIs + j);
        let deletionCost = variation0[j + 1] + 1;
        let insertionCost = variation1[j] + 1;
        let substitutionCost;
        if (string1[i] === string2[j]) {
          substitutionCost = variation0[j];
        } else {
          substitutionCost = variation0[j] + 1;
        }
        loggers.consoleLog(namespacePrefix + functionName, msg.cdeletionCostIs + deletionCost);
        loggers.consoleLog(namespacePrefix + functionName, msg.cinsertionCostIs + insertionCost);
        loggers.consoleLog(namespacePrefix + functionName, msg.csubstitutionCostIs + substitutionCost);
        variation1[j + 1] = math.min(deletionCost, insertionCost, substitutionCost);
        loggers.consoleLog(namespacePrefix + functionName, msg.cvariation1ValueIs + variation1);
      } // End-for (let j = 0; j < string2.length; j++)
      let temp = variation1;
      variation1 = variation0;
      variation0 = temp;
    } // End-for (let i = 0; i < string1.length; i++)
    returnData = variation0[string2.length];
  } // End-if (inputData && inputMetaData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function countCamelCaseWords
 * @description Takes a string in camelCase and returns the number of words that it contains based on camel case rules.
 * @param {string} inputData String to count words from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {integer} The number of camel case wrods found in the string.
 * @author Seth Hollingsead
 * @date 2022/01/23
 * @NOTE Might not work so well with numbers as part of the string, they are not treated as capital letters.
 * We might need to do some refactoring of this function if
 * mixed numbers and camel case strings ever becomes a requirement as input to this function.
 * @NOTE Based on the implementation for the business rule/function aryParse.convertCamelCaseStringToArray.
 */
export const countCamelCaseWords = function(inputData, inputMetaData) {
  let functionName = countCamelCaseWords.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData) {
    let caps = [];
    for (let i = 1; i < inputData.length; i++) {
      if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) { caps.push(i); }
    }
    returnData = caps.length;
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function doesStringContainAcronym
 * @description Scans a string and determiens if there are 2 or more immediately adjacent upper-case characters in the string.
 * Example: nodeJS where JS is an acronym for JavaScript.
 * @param {string} inputData The string that should be scanned to determine if it contains an acronym or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input string contains an acronym.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const doesStringContainAcronym = function(inputData, inputMetaData) {
  let functionName = doesStringContainAcronym.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  let lastCharacterWasUpperCase = false;
  let caps = [];
  if (inputData) {
    for (let i = 1; i < inputData.length; i++) {
      // if the last character was upper case and the current character is upper case,
      // then we have found an acronym and we can exit the loop.
      if (lastCharacterWasUpperCase === true && gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        returnData = true;
        break;
      }
      if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        lastCharacterWasUpperCase = true;
      } else {
        lastCharacterWasUpperCase = false;
      }
    } // End-for (let i = 1; i < inputData.length; i++)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function countDelimiterInString
 * @description Takes a string and returns the number of specified delimiters it contains.
 * @param {string} inputData String to count delimiters from.
 * @param {string} inputMetaData The delimiter that should be used when counting from the input string.
 * @return {integer} The number of delimiters found in the string.
 * @author Seth Hollingsead
 * @date 2022/01/23
 * @NOTE: https://stackoverflow.com/questions/35849174/count-spaces-in-a-string
 */
export const countDelimiterInString = function(inputData, inputMetaData) {
  let functionName = countDelimiterInString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData && inputMetaData) {
    returnData = (inputData.split(inputMetaData).length - 1);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function determineWordDelimiter
 * @description Determines what delimiter should e used to break a string up into words if possible.
 * @param {string} inputData The string that should be examined to determine what delimiter should be used to break it up into words.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The delimiter that should be used, or if camelCase then the function will return the string "CamelCase".
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const determineWordDelimiter = function(inputData, inputMetaData) {
  let functionName = determineWordDelimiter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let camelCaseWordCount = countCamelCaseWords(inputData, '');
    loggers.consoleLog(namespacePrefix + functionName, msg.ccamelCaseWordCountIs + camelCaseWordCount);
    let containsAcronym = doesStringContainAcronym(inputData, '');
    loggers.consoleLog(namespacePrefix + functionName, msg.ccontainsAcronymIs + containsAcronym);
    let spacesCount = countDelimiterInString(inputData, bas.cSpace);
    loggers.consoleLog(namespacePrefix + functionName, msg.cspacesCountIs + spacesCount);
    let periodCount = countDelimiterInString(inputData, bas.cDot);
    loggers.consoleLog(namespacePrefix + functionName, msg.cperiodCountIs + periodCount);
    let dashCount = countDelimiterInString(inputData, bas.cDash);
    loggers.consoleLog(namespacePrefix + functionName, msg.cdashCountIs + dashCount);
    let comaCount = countDelimiterInString(inputData, bas.cComa);
    loggers.consoleLog(namespacePrefix + functionName, msg.ccomaCountIs + comaCount);
    let underscoreCount = countDelimiterInString(inputData, bas.cUnderscore);
    loggers.consoleLog(namespacePrefix + functionName, msg.cunderscoreCountIs + underscoreCount);
    let plusCount = countDelimiterInString(inputData, bas.cPlus);
    loggers.consoleLog(namespacePrefix + functionName, msg.cplusCountIs + plusCount);
    let percentCount = countDelimiterInString(inputData, bas.cPercent);
    loggers.consoleLog(namespacePrefix + functionName, msg.cpercentCountIs + percentCount);
    if (
      camelCaseWordCount > 0 &&
      containsAcronym === false &&
      spacesCount === 0 &&
      periodCount === 0 &&
      dashCount === 0 &&
      comaCount === 0 &&
      underscoreCount === 0 &&
      plusCount === 0 &&
      percentCount === 0) {
        returnData = sys.cCamelCase;
        // We haven't hit the case eyt where we need to differenciate between all these extra caes, and there are several of them.
        // We could have multiple acronyms in a word, or in multiple words that are camelCase.
        // Each of these could be really complex special cases.
        // If we get to that point we will handle those cases on a case by case basis to improve the algorithm.
        // } else if (camelCaseWordCount > 1 && containsAcronym === false)
    } else if (spacesCount > 0 && periodCount === 0 && dashCount === 0 && comaCount === 0 && underscoreCount === 0 && plusCount === 0 && percentCount === 0) {
      returnData = bas.cSpace;
    } else if (spacesCount === 0 && periodCount > 0 && dashCount === 0 && comaCount === 0 && underscoreCount === 0 && plusCount === 0 && percentCount === 0) {
      returnData = bas.cDot;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount > 0 && comaCount === 0 && underscoreCount === 0 && plusCount === 0 && percentCount === 0) {
      returnData = bas.cDash;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount === 0 && comaCount > 0 && underscoreCount === 0 && plusCount === 0 && percentCount === 0) {
      returnData = bas.cComa;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount === 0 && comaCount === 0 && underscoreCount > 0 && plusCount === 0 && percentCount === 0) {
      returnData = bas.cUnderscore;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount === 0 && comaCount === 0 && underscoreCount === 0 && plusCount > 0 && percentCount === 0) {
      returnData = bas.cPlus;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount === 0 && comaCount === 0 && underscoreCount === 0 && plusCount === 0 && percentCount > 0) {
      returnData = bas.cPercent;
    } else {
      // We don't need to be showing this warning unless we are debugging.
      // WARNING: Mixed string. Cannot determine what delimiter should be used to break up the string into words.
      loggers.consoleLog(namespacePrefix + functionName, msg.cDetermineWordDelimiterMessage1 + msg.cDetermineWordDelimiterMessage2 +
      msg.cDetermineWordDelimiterMessage3 + msg.cDetermineWordDelimiterMessage4);
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getWordCountInString
 * @description Gets the number of words in a string, it expects words to be
 * delimited by either camel-case, spaces, period, dash, underscore, plus or percent symbols.
 * @param {string} inputData The string that words should be counted from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {integer} The number of words that were found in the string.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const getWordCountInString = function(inputData, inputMetaData) {
  let functionName = getWordCountInString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData) {
    let wordDelimiter = determineWordDelimiter(inputData, inputMetaData);
    if (wordDelimiter === sys.cCamelCase) {
      returnData = countCamelCaseWords(inputData, '');
    } else if (wordDelimiter !== '') {
      returnData = inputData.split(wordDelimiter).length;
    } else {
      // We don't need to be showing this warning unless we are debugging.
      // WARNING: Mixed string. Cannot determine how words are delimited in the string. Unable to count words.
      loggers.consoleLog(namespacePrefix + functionName, msg.cGetWordCountInStringMessage1 + msg.cGetWordCountInStringMessage2 + msg.cGetWordCountInStringMessage3);
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function doesStringContainUpperCaseCharacter
 * @description Determines if the input string contains at least one upper case character or not.
 * @param {string} inputData The string that should be checked for upper case characters.
 * @param {string} inputMetaData Not used fro this business rule.
 * @return {boolean} True or False to indicate if the string contains
 * at least one upper case character or more, or not any upper case characters.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const doesStringContainUpperCaseCharacter = function(inputData, inputMetaData) {
  let functionName = doesStringContainUpperCaseCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    for (let i = 1; i < inputData.length; i++) {
      if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        returnData = true;
        break;
      }
    } // End-for (let i = 1; i < inputData.length; i++)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function doesStringContainLowerCaseCharacter
 * @description Determines if the input string contains at least one lower case character or not.
 * @param {string} inputData The string that should be checked for lower case characters.
 * @param {string} inputMetaData Not used fro this business rule.
 * @return {boolean} True or False to indicate if the string contains
 * at least one lower case character or more, or not any lower case characters.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const doesStringContainLowerCaseCharacter = function(inputData, inputMetaData) {
  let functionName = doesStringContainLowerCaseCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    for (let i = 1; i < inputData.length; i++) {
      if (gen.cLowerCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        returnData = true;
        break;
      }
    } // End-for (let i = 1; i < inputData.length; i++)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isFirstCharacterLowerCase
 * @description Determines if the first character of the string is a lower case character or not.
 * @param {string} inputData The string that should be checked to determine if the first character is lower case or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the first character of the string is a lower case character or not.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const isFirstCharacterLowerCase = function(inputData, inputMetaData) {
  let functionName = isFirstCharacterLowerCase.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = gen.cLowerCaseEnglishAlphabet.includes(inputData.charAt(0));
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isFirstCharacterUpperCase
 * @description Determines if the first character of the string is an upper case character or not.
 * @param {string} inputData The string that should be checked to determine if the first character is upper case or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the first character of the string is an upper case character or not.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const isFirstCharacterUpperCase = function(inputData, inputMetaData) {
  let functionName = isFirstCharacterUpperCase.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(0));
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isStringList
 * @description Determines if the input string is a list or not.
 * @param {string} inputData The string that should be checked if it is a list or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input string is a list or not a list.
 * Using the list of system defned primary, secondary or tertiary command delimiters.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const isStringList = function(inputData, inputMetaData) {
  let functionName = isStringList.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let primaryCommandDelimiter = configurator.getConfigurationSetting(wr1.csystem, cfg.cPrimaryCommandDelimiter);
    let secondaryCommandDelimiter = configurator.getConfigurationSetting(wr1.csystem, cfg.cSecondaryCommandDelimiter);
    let tertiaryCommandDelimiter = configurator.getConfigurationSetting(wr1.csystem, cfg.cTertiaryCommandDelimiter);
    if (inputData.ncludes(primaryCommandDelimiter) === true ||
    inputData.includes(secondaryCommandDelimiter) === true ||
    inputData.includes(tertiaryCommandDelimiter) === true) {
      returnData = true;
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isStringCamelCase
 * @description Determines if an input string is a camel case string or not.
 * @param {string} inputData The string that should be checked for the camel case qualifications.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string is camel case or not.
 * @author Seth Hollingsead
 * @date 2022/01/23
 * @NOTE Even if we have an all upper case acronym at the end fo the camel case string,
 * the string itself is still considered camel case.
 * Valid Examples:
 * myParsedXML
 * fireflyWonder1996
 * wonderWomand1984
 * covidMedicalCase
 * aBc
 */
export const isStringCamelCase = function(inputData, inputMetaData) {
  let functionName = isStringCamelCase.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let foundFirstCapitalLetter = false;
    // First make sure the string meets the basic qualifiecations of a camel case string.
    // 1. Does not contain underscore or dash word seperators.
    // 2. Contains at least 1 lower case letter or more.
    // 3. Contains at least 1 upper case letter or more.
    // 4. Has a lower case or upper case first letter of the first word.
    if (!inputData.match(/[\s_-]/g) && doesStringContainUpperCaseCharacter(inputData, '') &&
    doesStringContainLowerCaseCharacter(inputData, '') &&
    (isFirstCharacterLowerCase(inputData, '') || isFirstCharacterUpperCase(inputData, ''))) {
      for (let i = 1; i < inputData.length; i++) {
        // Now chck or the fnal qualification:
        // 3. Ensure that upper case letters are seperated by lower case letters
        // (numbers also allowed, but there should be at least some lower case letters)
        // NOTE: This for-loop is how we iterate over the characters of the string.

        // First we need to ok for the first upper case letter.
        if (foundFirstCapitalLetter === false) {
          if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
            // Found an upper case letter, ensure the next letter is lower case.
            foundFirstCapitalLetter = true;
          }
        } else if (foundFirstCapitalLetter === true) {
          if (gen.cLowerCaseEnglishAlphabet.includes(inputData.charAt(i))) {
            returnData = true;
            break; // Sufficent evidence to prove this is a camel case string.
          }
        }
      } // End-for (let i = 1; i < inputData.length; i++)
    } // End-if (!inputData.match(/[\s_-]/g) && doesStringContainUpperCaseCharacter(inputData, '') &&...)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function mapWordToCamelCaseWord
 * @description Takes a string key and an indexed string value and maps the word to an upper case first letter word.
 * @param {string} inputData The string key/value that should be converted to a camel case word.
 * @param {string} inputMetaData The string index for the map to the value that should be used.
 * @return {string} A string where the word has been converted into a camel case word.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const mapWordToCamelCaseWord = function(inputData, inputMetaData) {
  let functionName = mapWordToCamelCaseWord.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = inputData.replace(/^./, character => character.toUpperCase());
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function simplifyAndConsolidateString
 * @description Takes a string, and returns a version of it converted to lower case,
 * with all digits and symbols and whitespace removed.
 * @param {string} inputData The string that should be simplified and consolidated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string that has been simplified and consolidated by converting to lower case, removign all digits, symbols and white space.
 * @author Seth Hollingsead
 * @date 2022/01/23
 * @NOTE I think this function is not completely working as expected, probably soemthing to do with that regular expression.
 * Input was: 11UpberDriver321CodeClearance0x#0000FF-akaBlue
 * Output was: 11upberdriver321codeclearance0x0000ffakablue
 * As you can see tehre are stil some numbers coming through.
 * Might need to revisit this one when time allows, and if there is ever a business need again.
 */
export const simplifyAndConsolidateString = function(inputData, inputMetaData) {
  let functionName = simplifyAndConsolidateString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = _.replace(inputData.toLowerCase(), /[\W]/g, '');
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function compareSimplifiedAndConsolidatedStrings
 * @description Compares two strings by their simplified versions (see simplifyAndConsolidateString()).
 * @param {string} inputData The first string to be compared.
 * @param {string} inputMetaData The second string to be compared.
 * @return {boolean} A True or False value to indicate if the strings are virtually identical or not.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const compareSimplifiedAndConsolidatedStrings = function(inputData, inputMetaData) {
  let functionName = compareSimplifiedAndConsolidatedStrings.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    returnData = simplifyAndConsolidateString(inputData, '') === simplifyAndConsolidateString(inputMetaData, '');
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function ascertainMatchingFilenames
 * @description Compares two file names after stripping off the path and determines if they are matching or not.
 * @param {string} inputData The first filename and path that should be used in making the file name comparison.
 * @param {string} inputMetaData The second filename and path that should be used in makign the file name comparison.
 * @return {boolean} A True or False value to indicate if the file names are equivalent.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const ascertainMatchingFilenames = function(inputData, inputMetaData) {
  let functionName = ascertainMatchingFilenames.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    if (path.basename(inputData) === path.basename(inputMetaData)) {
      // Filenames match
      loggers.consoleLog(namespacePrefix + functionName, msg.cFilenamesMatch);
      returnData = true;
    } else {
      // Filenames do not match
      loggers.consoleLog(namespacePrefix + functionName, msg.cFilenamesDoNotMatch);
      returnData = false;
    }
  } // End-if (inputData && inputMetaData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function validateConstantsDataValidation
 * @description Validates that validation data to ensure that all the contents of the
 * constants validation data matches with the actual constants definitions.
 * @param {string} inputData the path of the constants file that should be validated.
 * @param {string} inputMetaData The name of the data hive that contains the appropriate matching constants validation data.
 * @return {boolean} True or False to indicate if all of the contents of the constants are fully validated or not.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
export const validateConstantsDataValidation = function(inputData, inputMetaData) {
  let functionName = validateConstantsDataValidation.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = false;
  let foundAFailure = false;
  if (inputData && inputMetaData) {
    const liner = new lineByLine(inputData);
    let line;
    let colorizeLogsEnabled = configurator.getConfigurationSetting(wr1.csystem, cfg.cEnableColorizedConsoleLogs);

    while (line = liner.next()) {
      loggers.consoleLog(namespacePrefix + functionName, 'constants line is: ' + line.toString(gen.cascii));
      let lineInCode = line.toString(gen.cascii);
      let foundConstant = false;
      // TODO: This logic will need to change!!
      if (lineInCode.includes(sys.cexportconst) === true) {
        let lineArray = lineInCode.split(bas.cSpace);
        // lineArray[2] is
        loggers.consoleLog(namespacePrefix + functionName, msg.cineArray2Is + lineArray[2]);
        foundConstant = validateConstantsDataValidationLineItemName(lineAray[2], inputMetaData);
        let qualifiedConstantsFilename = getFileNameFromPath(inputData, '');
        if (foundConstant === true) {
          if (configurator.getConfigurationSetting(wr1.csystem, cfg.cDisplayIndividualConstantsValidationPassMessages) === true) {
            let passMessage = wr1.cPASS + bas.cColon + bas.cSpace + lineArray[2] + bas.cSpace + wr1.cPASS;
            if (colorizeLogsEnabled === true) {
              passMessage = chalk.rgb(0,0,0)(passMessage);
              passMessage = chalk.bgRgb(0,255,0)(passMessage);
            }
            console.log(qualifiedConstantsFilename + bas.cColon + bas.cSpace + passMessage)
          } // End-if (configurator.getConfigurationSetting(wr1.csystem, cfg.cDisplayIndividualConstantsValidationPassMessages) === true)
        } else { // Else-clause if (foundConstant === true)
          if (configurator.getConfigurationSetting(wr1.csystem, cfg.cDisplayIndividualCosntantsValidationFailMessages) === true) {
            let failMessage = wr1.cFAIL + bas.cColon + bas.cSpace + lineArray[2] + bas.cSpace + wr1.cFAIL;
            if (colorizeLogsEnabled === true) {
              failMessage = chalk.rgb(0,0,0)(failMessage);
              failMessage = chalk.bgRgb(255,0,0)(failMessage);
            }
            let qualifiedConstantsPrefix = determineConstantsContextQualifiedPrefix(qualifiedConstantsFilename, '');
            console.log(qualifiedCosntantsFilename + bas.cColon + bas.cSpace + failMessage);
            // loggers.consoleLog(namespacePrefix + functionName, wr1.cFAIL + bas.cSpace + lineArray[2] + bas.cSpace + wr1.cFAIL);
            let suggestedLineOfCode = determineSuggestedConstantsValidationLineOfCode(lineArray[2], qualifiedConstantsPrefix);
            if (suggestedLineOfCode !== '') {
              if (colorizeLogsEnabled === true) {
                suggestedLineOfCode = chalk.rgb(0,0,0)(suggestedLineOfCode);
                suggestedLineOfCode = chalk.bgRgb(255,0,0)(suggestedLineOfCode);
              }
              // Suggested line of code is:
              console.log(msg.cSuggestedLineOfCodeIs + suggestedLineOfCode);
            } // End-if (suggestedLineOfCode !== '')
          } // End-if (configurator.getConfigurationSetting(wr1.csystem, cfg.cDisplayIndividualCosntantsValidationFailMessages) === true)
          foundAFailure = true;
        }
      } // End-if (lineInCode.includes(sys.cexportconst) === true)
    } // End-while (line = liner.next())
  } // End-if (inputData && inputMetaData)
  if (foundAFailure === false) {
    returnData = true;
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function determineConstantsContextQualifiedPrefix
 * @description
 * @param  {[type]} inputData                   [description]
 * @param  {[type]} inputMetaData               [description]
 * @return {[type]}               [description]
 */
export const determineConstantsContextQualifiedPrefix = function(inputData, inputMetaData) {

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
