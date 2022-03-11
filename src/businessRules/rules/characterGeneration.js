/**
 * @file characterGeneration.js
 * @module characterGeneration
 * @description Contains all business rules for randomly generating characters of all kinds.
 * @requires module:stringParsingUtilities
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:generic.constants
 * @requires module:message.constants
 * @requires module:numeric.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/01/25
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import stringParsingUtilities from './stringParsingUtilities.js';
import * as bas from '../../constants/basic.constants.js';
import * as biz from '../../constants/business.constants.js';
import * as gen from '../../constants/generic.constants.js';
import * as msg from '../../constants/message.constants.js';
import * as num from '../../constants/numeric.constants.js';
import * as sys from '../../constants/system.constants.js';
import * as wr1 from '../../constants/word1.constants.js';
import loggers from '../../executrix/loggers.js';
// External imports
import path from 'path';

const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.characterGeneration.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wr1.crules + bas.cDot + baseFileName + bas.cDot;

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
const randomlyGenerateMixedCaseLetterOrSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateMixedCaseLetterOrSpecialCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
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
const randomlyGenerateUpperCaseLetterOrSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateUpperCaseLetterOrSpecialCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
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
const randomlyGenerateLowerCaseLetterOrSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateLowerCaseLetterOrSpecialCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
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
const randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
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
const randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
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
const randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
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
const randomlyGenerateMixedCaseAlphaNumericCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateMixedCaseAlphaNumericCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
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
const randomlyGenerateUpperCaseAlphaNumericCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateUpperCaseAlphaNumericCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
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
const randomlyGenerateLowerCaseAlphaNumericCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateLowerCaseAlphaNumericCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
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
const randomlyGenerateNumericCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateNumericCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
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
const randomlyGenerateSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateSpecialCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
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
 * @function randomlyGenerateNumberInRange
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
const randomlyGenerateNumberInRange = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateNumberInRange.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData && inputMetaData) {
    let minimum = parseInt(inputData);
    let maximum = parseInt(inputMetaData[0]);
    let addOne = stringParsingUtilities.stringToBoolean(inputMetaData[1]);
    let addMinimum = stringParsingUtilities.stringToBoolean(inputMetaData[2]);
    if (addOne === true) {
      if (addMinimum === true) {
        returnData = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      } else {
        returnData = Math.floor(Math.random() * (maximum - minimum + 1));
      }
    } else {
      if (addMinimum === true) {
        returnData = Math.floor(Math.random() * (maximum - minimum)) + minimum;
      } else {
        returnData = Math.floor(Math.random() * (maximum - minimum));
      }
    }
  } // End-if (inputData && inputMetaData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData.toString();
};

/**
 * @function randomlyGenerateBooleanValue
 * @description Randomly generates a boolean value {@code TRUE} or {@code FALSE}.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A boolean value that is
 * either {@code TRUE} or {@code FALSE} as a random 50-50 chance of one or the other.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
const randomlyGenerateBooleanValue = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateBooleanValue.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = Math.random() >= 0.5;
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateMixedCaseAlphabeticCharacter
 * @description Randomly generates either an upper case or
 * lower case random english alphabetic letter from a-z or A-Z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated english alphabetic letter from a-z or A-Z.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
const randomlyGenerateMixedCaseAlphabeticCharacter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateMixedCaseAlphabeticCharacter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(gen.cUpperCaseEnglishAlphabet + gen.cLowerCaseEnglishAlphabet);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateLowerCaseLetter
 * @description Randomly generates a lower case english alphabetic letter from a-z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A ranomly generated english alphabetic letter from a-z.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
const randomlyGenerateLowerCaseLetter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateLowerCaseLetter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(gen.cLowerCaseEnglishAlphabet);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateUpperCaseLetter
 * @description Randomly generates an upper case alphabetic letter from A-Z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated alphabetic letter from A-Z.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
const randomlyGenerateUpperCaseLetter = function(inputData, inputMetaData) {
  let functionName = randomlyGenerateUpperCaseLetter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(gen.cUpperCaseEnglishAlphabet);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function convertNumberToUpperCaseLetter
 * @description Converts a number from 1-26 into an upper case letter of the english alphabet A-Z.
 * @param {sring} inputData A string that contaisn a number in the range of 1-26 that
 * should be converted to an upper case letter of the english alphabet.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A letter of the alphabet where 1-26 is converted in a letter A-Z.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
const convertNumberToUpperCaseLetter = function(inputData, inputMetaData) {
  let functionName = convertNumberToUpperCaseLetter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let number = parseInt(inputData);
    number--;
    // number is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cnumberIs + number);
    if (number > 25 || number < 0) {
      returnData = ''; // Shouldn't actually ened to do this, but it's a good place holder.
    } else {
      returnData = gen.cUpperCaseEnglishAlphabet.substring(number, number + 1).toUpperCase();
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function convertNumberToLowerCaseLetter
 * @description Converts a number from 1-26 into a lower case letter of the english alphabet a-z.
 * @param {string} inputData A string that contains a number in the range of 1-26 that
 * should be converted in a ower case letter of the english alphabet.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A letter of the alphabet where 1-26 is converted to a letter a-z.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
const convertNumberToLowerCaseLetter = function(inputData, inputMetaData) {
  let functionName = convertNumberToLowerCaseLetter.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let number = parseInt(inputData);
    number--;
    // number is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cnumberIs + number);
    if (number > 25 || number < 0) {
      returnData = ''; // Shouldn't actually ened to do this, but it's a good place holder.
    } else {
      returnData = gen.cUpperCaseEnglishAlphabet.substring(number, number + 1).toLowerCase();
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

export default {
  randomlyGenerateMixedCaseLetterOrSpecialCharacter,
  randomlyGenerateUpperCaseLetterOrSpecialCharacter,
  randomlyGenerateLowerCaseLetterOrSpecialCharacter,
  randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter,
  randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter,
  randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter,
  randomlyGenerateMixedCaseAlphaNumericCharacter,
  randomlyGenerateUpperCaseAlphaNumericCharacter,
  randomlyGenerateLowerCaseAlphaNumericCharacter,
  randomlyGenerateNumericCharacter,
  randomlyGenerateSpecialCharacter,
  randomlyGenerateNumberInRange,
  randomlyGenerateBooleanValue,
  randomlyGenerateMixedCaseAlphabeticCharacter,
  randomlyGenerateLowerCaseLetter,
  randomlyGenerateUpperCaseLetter,
  convertNumberToUpperCaseLetter,
  convertNumberToLowerCaseLetter
};
