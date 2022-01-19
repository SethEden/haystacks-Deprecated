/**
 * @file arrayParsing.js
 * @module arrayParsing
 * @description Contains all system defined business rules for parsing arrays with various operations.
 * @requires module:basic.constants
 * @requires module:message.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @requires module:stringParsingUtilities
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/28
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var bas = require('../../constants/basic.constants');
var msg = require('../../constants/message.constants');
var sys = require('../../constants/system.constants');
var wr1 = require('../../constants/word1.constants');
var stringParsingUtilities = require('./stringParsingUtilities');
var loggers = require('../../executrix/loggers');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = sys.cbusinessRules + bas.cDot + wr1.crules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function replaceCharacterWithCharacter
 * @description Replaces all of the specified character in the inputData with another specified character.
 * @param {string} inputData A string that may or may not contain the specified
 * characters that should be converted to another specified character.
 * @param {array<string,string} inputMetaData An array of data that contains 2 additional string parameters:
 * inputMetaData[0] === character2Find - The character to be searched and replaced from the input string.
 * inputMetaData[1] === character2Replace - The character that should be used to replace
 * the character specified for replacement from the input data.
 * @return {string} The same as the input string but with specified characters converted to the other specified character.
 * @author Seth Hollingsead
 * @date 2021/10/28
 */
export const replaceCharacterWithCharacter = function(inputData, inputMetaData) {
  let functionName = replaceCharacterWithCharacter.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${inputData}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (!inputData && !inputMetaData) {
    returnData = false;
  } else {
    returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function convertCamelCaseStringToArray
 * @description Takes a string in camelCase and returns an array of the words.
 * @param {string} inputData String to decompose into an array.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string} The array of words that were composed in the original string.
 * @author Seth Hollingsead
 * @date 2022/01/18
 * @NOTE Might not work so well with numbers as part of the string, they are not treated as capital letters.
 * We might need to do some refactoring of this function if
 * mixed numbers and camel case strings ever becomes a requirement as input to this function.
 */
export const convertCamelCaseStringToArray = function(inputData, inputMetaData) {
  let functionName = convertCamelCaseStringToArray.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  let caps = [];
  for (let i = 1; i < inputData.length; i++) {
    if (gen.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) { caps.push(i); }
  }
  if (caps.length > 0) {
    let last = 0;
    let decomposedString = [];
    for (let j = 0; j < caps.length; j++) {
      decomposedString.push(inputData.slice(last, caps[j]));
      last = caps[j];
    }
    decomposedString.push(inputData.slice(last));
    returnData = decomposedString;
  } else {
    returnData = [inputData];
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getWordsArrayFromString
 * @description Gets an array of words from a string,
 * automatically determining how the words are delimited based on common word delimiters: camel case, space, period, dash & underscore.
 * @param {string} inputData The string that should be broken down into words and returned as an array.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string>} The array of words found in the string.
 * @author Seth Hollingsead
 * @date 2022/01/18
 */
export const getWordsArrayFromString = function(inputData, inputMetaData) {
  let functionName = getWordsArrayFromString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (inputData) {
    let wordCount = strParse.getWordCountInString(inputData, '');
    // wordCount is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cwordCountIs + wordCount);
    if (wordCount > 0) {
      let wordDelimiter = strParse.determineWordDelimiter(inputData, inputMetaData);
      // wordDelimiter is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cwordDelimiterIs + wordDelimiter);
      let stringContainsAcronym = strParse.doesStringContainAcronym(inputData, '');
      // stringContainsAcronym is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cstringContainsAcronymIs + stringContainsAcronym);
      if (wordDelimiter === sys.cCamelCase && stringContainsAcronym === false) {
        returnData = convertCamelCaseStringToArray(inputData, '');
      } else if (wordDelimiter != '' && wordDelimiter != sys.cCamelCase) {
        returnData = inputData.split(wordDelimiter);
      } else {
        // We don't need to be showing this warning unless we are debugging.
        loggers.consoleLog(namespacePrefix + functionName, msg.cGetWordsArrayFromStringMessage1 + msg.cGetWordsArrayFromStringMessage2 + msg.cGetWordsArrayFromStringMessage3);
      }
    } // end-if (wordCount > 0)
  } // end-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};
