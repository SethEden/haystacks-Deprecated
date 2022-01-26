/**
 * @file characterGeneration.js
 * @module characterGeneration
 * @description Contains all business rules for randomly generating characters of all kinds.
 * @requires module:loggers
 * @requires module:stringParsing
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:numeric.constants
 * @requires module:word1.constants
 * @requires module:system.constants
 * @requires module:business.constants
 * @requires module:message.constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/01/25
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

import loggers from '../../executrix/loggers';
import { stringToBoolean } from './stringParsingUtilities';
let bas = require('../../constants/basic.constants');
let gen = require('../../constants/generic.constants');
let num = require('../../constants/numeric.constants');
let wr1 = require('../../constants/word1.constants');
let sys = require('../../constants/system.constants');
let biz = require('../../constants/business.constants');
let msg = require('../../constants/message.constants');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = sys.cbusinessRules + bas.cDot + wr1.crules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function randomlyGenerateMixedCaseLetterOrSpecialCharacter
 * @description Randomly geenrates an english alphabetic letter from A-Z, a-z or
 * a random special character from the input list of special characters.
 * @param {string} inputData the list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random mixed case letter of the english alphabet,
 * or a random special character from the list of alowable special characters.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
export const randomlyGenerateMixedCaseLetterOrSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateMixedCaseLetterOrSpecialCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(inputData + gen.cUpperCaseEnglishAlphabet + gen.cLowerCaseEnglishAlphabet);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateUpperCaseLetterOrSpecialCharacter
 * @description Randomly generates an english alphabetic letter from A-Z or
 * a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this busienss rule.
 * @return {string} Randomly returns a random upper case letter of the english alphabet,
 * or a random special character from the ist of allowable special characters.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
export const randomlyGenerateUpperCaseLetterOrSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateUpperCaseLetterOrSpecialCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(inputData + gen.cUpperCaseEnglishAlphabet);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateLowerCaseLetterOrSpecialCharacter
 * @descriptiong Randomly generates an english alphabetic letter from a-z or
 * a random special character from the intpu list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used  to ranomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random lower case letter of the english alphabet,
 * or a random special character from the list of allowable special characters.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
export const randomlyGenerateLowerCaseLetterOrSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateLowerCaseLetterOrSpecialCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(inputData + gen.cLowerCaseEnglishAlphabet);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter
 * @description Randomly generates an alphabetic letter from A-Z, a-z or a number 0-9 or
 * a random special character from the iput ist of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random number, a random mixed case letter of the english alphabet,
 * or a random special character from the ist of allowable special characters.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
export const randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(inputData + gen.cUpperCaseEnglishAlphabet + gen.cLowerCaseEnglishAlphabet + gen.cAllNumbers);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter
 * @description Randomly generates an english alphabetic letter from A-Z or a number 0-9 or
 * a random special character from the input ist of special characters.
 * @param {string} inputData The list orf allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random number, a random upper case letter of the engish alphabet,
 * or a random special character from the list of allowable special characters.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
export const randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(inputData + gen.cUpperCaseEnglishAlphabet + gen.cAllNumbers);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter
 * @description Randomly generates an english alphabetic letter from a-z or a number 0-9 or
 * a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string}Randomly returns a random number, a random lower case letter of the english alphabet,
 * or a random special character from the list of allowable special characters.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
export const randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(inputData + gen.cLowerCaseEnglishAlphabet + gen.cAllNumbers);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateMixedCaseAlphaNumericCharacter
 * @description Randomly generates an alpha-numeric code from a-z or A-Z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param  {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random letter (could be upper case or lower case, which is also random) or a random number.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
export const randomlyGenerateMixedCaseAlphaNumericCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateMixedCaseAlphaNumericCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(gen.cUpperCaseEnglishAlphabet + gen.cLowerCaseEnglishAlphabet + gen.cAllNumbers);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateUpperCaseAlphaNumericCharacter
 * @description Randomly generates an alpha-numeric code from A-Z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random upper case letter or a random number.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
export const randomlyGenerateUpperCaseAlphaNumericCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateUpperCaseAlphaNumericCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(gen.cUpperCaseEnglishAlphabet + gen.cAllNumbers);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateLowerCaseAlphaNumericCharacter
 * @description Randomly generates an alpha-numeric code from a-z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random lower case letter or a random number.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
export const randomlyGenerateLowerCaseAlphaNumericCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateLowerCaseAlphaNumericCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(gen.cLowerCaseEnglishAlphabet + gen.cAllNumbers);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateNumericCharacter
 * @description Randomly generates a string character in the range of 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A single randomly generated string character in the range of 0-9.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
export const randomlyGenerateNumericCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateNumericCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(gen.cAllNumbers);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateSpecialCharacter
 * @description Randomly select a special character from a list of allowable special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A character randomly selected from the input list of allowable characters.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
export const randomlyGenerateSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateSpecialCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = '';
  // NOTE Canot have a "." as part of a variable name in a {set}
  let cTrue = gen.cTrue;
  if (inputData) {
    let inputDataLength = inputData.length.toString();
    let number = randomlyGenerateNumberInRange(num.c1, [inputDataLength, gen.cTrue, gen.cTrue]);
    // NOTE: The String.length() above is a 1-base count, the String.substring is zero-based.
    returnData = inputData.substring(number - 1, number);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateNumberInRange2
 * @description Randomly generates a number between the start-range and end-range.
 * @param {string} inputData A string that contains the number with the minimum value.
 * @param {array<string|integer,boolean,boolean>} inputMetaData An array with multiple input parameters:
 * inputMetaData[0] = maximumValue - A string or integer that contains the number with the maximum value.
 * inputMetaData[1] = includeMaximum - A True or False value that indicates if the maximum should be included or
 * excluded from the range of allowable range of values to return from.
 * inputMetaData[2] = addMinimum - A True or False value that indicates if the minimum should be added to the value or not.
 * @return {string} The new random number that was generated according to the input parameters.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
export const randomlyGenerateNumberInRange = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateNumberInRange.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cInputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData && inputMetaData) {
    
  } // End-if (inputData && inputMetaData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};
