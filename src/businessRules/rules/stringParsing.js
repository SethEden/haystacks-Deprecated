// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js

/**
 * @file stringParsing.js
 * @module stringParsing
 * @description Contains all system defned business rules for parsing strings,
 * with values of all kinds, and various parsing operations.
 * @requires module:configurator
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var configurator = require('../../executrix/configurator');
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
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`inputData is: ${JSON.stringify(inputData)}`);
  console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  let returnData = '';
  if (inputData) {
    let applicationName = inputMetaData; // Rename it for readability.
    let pathElements = inputData.split('\\');
    loop1:
    for (let i = 0; i < pathElements.length; i++) {
      console.log(`BEGIN iteration i: ${i}`);
      let pathElement = pathElements[i];
      console.log(`pathElement is: ${pathElement}`);
      if (i === 0) {
        console.log('case: i === 0');
        returnData = pathElement;
      } else if (pathElement === applicationName) {
        console.log(`case: pathElement === ${applicationName}`);
        returnData = `${returnData}\\${pathElement}\\`;
        break loop1;
      } else {
        console.log('case else');
        returnData = `${returnData}\\${pathElement}`;
      }
    }
  }
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
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
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`originalString is: ${originalString}`);
  console.log(`index is: ${index}`);
  console.log(`replacement is: ${replacement}`);
  let returnData;
  if (originalString != '' && index >= 0 && replacement != '') {
    returnData = originalString.substr(0, index) + replacement + originalString.substr(index + replacement.length);
  }
  console.log(`returnData is: ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};
