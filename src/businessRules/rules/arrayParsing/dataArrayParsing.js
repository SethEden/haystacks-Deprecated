/**
 * @file dataArrayParsing.js
 * @module dataArrayParsing
 * @description Contains all system defined business rules for parsing arrays specific to data.
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/26
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import loggers from '../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, cfg, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function arraysAreEqual
 * @description Determines if a set of arrays are equal or not.
 * @param {array<string|integer|boolean|float|object>} inputData The first array that should be checked for equality.
 * @param {array<string|integer|boolean|float|object>} inputMetaData The second array that should be checked for equality.
 * @return {boolean} True or False to indicate if the arrays are equal or not equal.
 * @autor Seth Hollingsead
 * @date 2022/01/20
 * @NOTE: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
 */
const arraysAreEqual = function(inputData, inputMetaData) {
  let functionName = arraysAreEqual.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData && inputMetaData) {
    if (inputData === inputMetaData) { returnData = true; }
    if (inputData === null || inputMetaData === null) { returnData === false; }
    if (inputData.length != inputMetaData.length) { returnData === false; }
  } // End-if (inputData && inputMetaData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function storeData
 * @description Stores some data using the DataStorage data hie on the D data store.
 * @param {string} inputData The context name that the data should be stored with.
 * @param {string|integer|boolean|object|array} inputMetaData The data that should be stored.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/01/20
 */
const storeData = function(inputData, inputMetaData) {
  let functionName = arraysAreEqual.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData && inputMetaData) {
    dataBroker.storeData(inputData, inputMetaData);
    returnData = true;
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getStoredData
 * @description Gets the named data strod in the D data structure in the DataStorage data hive.
 * @param {string} inputData The name of the sub-data hive that should contain the stored data we are lookign for.
 * @param {string} inputMetData Not used for tis business rule.
 * @return {object} The data that was stored in the sub-data hie under the DataStorage data hive of the D data structure.
 * @author Seth Hollingsead
 * @date 2022/01/20
 */
const getStoredData = function(inputData, inputMetData) {
  let functionName = getStoredData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData) {
    returnData = dataBroker.getDate(inputData);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isObjectEmpty
 * @description Determines if a JSON object is empty or not.
 * @param {object} inputData The object that should be checked for emptyness.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the object is empty or not empty.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
const isObjectEmpty = function(inputData, inputMetaData) {
  let functionName = isObjectEmpty.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (inputData) {
    for (let key in inputData) {
      if (inputData.hasOwnProperty(key)) {
        returnData = false;
        // It may have a value, but is that value === null, if it is, reset back to true.
        if (inputData[key] === null) {
          returnData = true;
        }
      } // End-if (inputData.hasOwnProperty(key))
    } // End-for (let key in inputData)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isArrayEmpty
 * @description Determines if a JSON array is empty or not.
 * @param {array<string|integer|boolean|float|object>} inputData The array that should be checked for emptyness.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the array is empty or not empty.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
const isArrayEmpty = function(inputData, inputMetaData) {
  let functionName = isArrayEmpty.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = true;
  if (inputData) {
    returnData = !Object.keys(inputData).length;
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isObject
 * @description Determines if an object is a JSON object or not.
 * @param {object|array<string|integer|boolean|float|object>} inputData The object taht should be tested to see if it is a JSON object or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input object is an array or not.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
const isObject = function(inputData, inputMetaData) {
  let functionName = isObject.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    if (typeof inputData === 'object') {
      returnData = true;
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isArray
 * @description Determines if an object is an array or not.
 * @param {object|array<string|integer|boolean|float|object>} inputData The object that
 * should be tested to see if it is an array or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input object is an array or not.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
const isArray = function(inputData, inputMetaData) {
  let functionName = isArray.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = Array.isArray(inputData);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isArrayOrObject
 * @description Determines if an input object is either an array or a JSON object.
 * @param {object|array<string|integer|boolean|float|object>} inputData The object that
 * should be tested to see if it is either an array or a JSON object or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input object is either an array or a JSON object.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
const isArrayOrObject = function(inputData, inputMetaData) {
  let functionName = isArrayOrObject.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    if (isObject(inputData, '') === true || isArray(inputData, '') === true) {
      returnData = true;
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isNonZeroLengthArray
 * @description Determines if an object is an array of length greater than or equal to one or not.
 * @param {object|array<string|integer|boolean|float|object>} inputData The object/array that
 * should be tested to see if it is an array of length greater than or equal to 1 or not.
 * @param {string} inputMetData Not used for this business rule.
 * @return {boolean} True or False to indiate if the input object is an array of length greater than equal to zero or not.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
const isNonZeroLengthArray = function(inputData, inputMetData) {
  let functionName = isNonZeroLengthArray.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    if (isArray(inputData, '') === true && inputData.length >= 1) {
      returnData = true;
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function arrayDeepClone
 * @description Clones an array by using JSON.stringify & JSON.parse.
 * Almost all other methods of cloning an array will actually clone by referance which essentially just clones the pointer to the array.
 * @NOTE: https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
 * @param {array<string|integer|boolean|float|object>} inputData The array that should be deeply cloned.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string|integer|boolean|float|object>} The new array object after being cloned deeply.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
const arrayDeepClone = function(inputData, inputMetaData) {
  let functionName = arrayDeepClone.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && isArray(inputData, '') === true && isArrayEmpty(inputData, '') === false) {
    returnData = JSON.parse(JSON.stringify(inputData));
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

export default {
  arraysAreEqual,
  storeData,
  getStoredData,
  isObjectEmpty,
  isArrayEmpty,
  isObject,
  isArray,
  isArrayOrObject,
  isNonZeroLengthArray,
  arrayDeepClone
};
