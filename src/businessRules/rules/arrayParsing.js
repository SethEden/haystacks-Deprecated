/**
 * @file arrayParsing.js
 * @module arrayParsing
 * @description Contains all system defined business rules for parsing arrays with various operations.
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/28
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = `brokers.${baseFileName}.`;

/**
 * @function replaceCharacterWithCharacter
 * @description Replaces all of the specified character in the inputData with another specified character.
 * @param {string} inputData A string that may or may not contain the specified
 * characters that should be converted to another specified character.
 * @param {array<string,string} inputMetaData An array of data that contains 2 aditional string parameters:
 * inputMetaData[0] === character2Find - The character to be searched and replaced from the input string.
 * inputMetaData[1] === character2Replace - The character that should be used to replace
 * the character specified for replacement from the input data.
 * @return {string} The same as the input string but with specified characters cnverted to the other specified character.
 * @author Seth Hollingsead
 * @date 2021/10/28
 */
export const replaceCharacterWithCharacter = function(inputData, inputMetaData) {
  let functionName = replaceCharacterWithCharacter.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`inputData is: ${inputData}`);
  console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData;
  let character2Find = inputMetaData[0];
  let character2Replace = inputMetaData[1];
  if (!inputData && !character2Find && !character2Replace) {
    returnData = false;
  } else {
    returnData = inputData.replace(character2Find, character2Replace);
  }
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};