/**
 * @file auxiliaryArrayParsing.js
 * @module auxiliaryArrayParsing
 * @description Contains all system defined business rules for parsing arrays specific to auxiliary capabilities.
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/lodash|lodash}
 * @requires {@link https://mathjs.org/index.html|math}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/26
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import loggers from '../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import _ from 'lodash';
import * as math from 'mathjs';
import path from 'path';

const {bas, cfg, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

 /**
  * @function parseColorRangeInputs
  * @description Parses minimum and maximum range integer values to ensure they are in the range of 0 - 255.
  * @param {string|integer} inputData The number in either numeric or string format that
  * represents the minimum range that should be used to generate the random color.
  * @param {string|integer} inputMetaData The nubmer in either numeric or string format that
  * represents the maximum range that should be used to generate the random color.
  * @return {array<integer>} The minimum and maximum values returned in an array.
  * returnData[0] = minimum value.
  * returnData[1] = maximum value.
  * @author Seth Hollingsead
  * @date 2022/01/21
  */
 const parseColorRangeInputs = function(inputData, inputMetaData) {
   let functionName = parseColorRangeInputs.name;
   loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
   loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
   loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
   let returnData = [0,0,0];
   let minimumColorRange = 0;
   let tempMinimumColorRange = 0;
   let maximumColorRange = 0;
   let tempMaximumColorRange = 0;
   if (inputData && inputMetaData && inputData !== '' && inputMetaData !== '') {
     // Try to parse them as numbers for the range.
     if (typeof(inputData) === 'string') {
       tempMinimumColorRange = parseInt(inputData);
     } else if (typeof(inputData) === 'number') {
       tempMinimumColorRange = inputData;
     }
     if (typeof(inputMetaData) === 'string') {
       tempMaximumColorRange = parseInt(inputMetaData);
     } else if (typeof(inputMetaData) === 'number') {
       tempMaximumColorRange = inputMetaData;
     }
     if (tempMinimumColorRange < tempMaximumColorRange) {
       minimumColorRange = tempMinimumColorRange;
       maximumColorRange = tempMaximumColorRange;
     } else if (tempMinimumColorRange > tempMaximumColorRange) {
       minimumColorRange = tempMaximumColorRange;
       maximumColorRange = tempMinimumColorRange;
     }
   } // End-if (inputData && inputMetaData && inputData !== '' && inputMetaData !== '')
   if (minimumColorRange < 0) {
     minimumColorRange = Math.abs(minimumColorRange);
   } else if (minimumColorRange > 255) {
     minimumColorRange = 255;
   }
   if (maximumColorRange < 0) {
     maximumColorRange = Math.abs(maximumColorRange);
   } else if (maximumColorRange > 255) {
     maximumColorRange = 255;
   }
   returnData = [minimumColorRange, maximumColorRange];
   loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
   loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
   return returnData;
 };

 // ******************************************************
 // Internal functions
 // ******************************************************

 /**
  * @function doesArrayContainValue
  * @description Checks if an array contains a value, checking equality by function(val, arr[i]).
  * @NOTE Do not call this function from the rulesLibrary as it doesn't follow the business rule pattern.
  * This function is strictly a supporting function to aid the business rules, for use internal to the business rules only.
  * @param {array<string|integer|boolean|float|object>} array the input array that should be searched for the given input value.
  * @param {string|integer|boolean|float|object} value The value that should be searched for in the input array.
  * @param {function} myFunction The function that should be used to do the search.
  * @return {boolean} A True or False to indicate if the value was found in the array or not found.
  * @author Seth Hollingsead
  * @date 2022/01/21
  */
 function doesArrayContainValue(array, value, myFunction) {
   let functionName = doesArrayContainValue.name;
   loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
   // array is:
   loggers.consoleLog(namespacePrefix + functionName, msg.carrayIs + JSON.stringify(array));
   // value is:
   loggers.consoleLog(namespacePrefix + functionName, msg.cvalueIs + value);
   // Not sure how this will output, would be good to also put some type checing on this input variable.
   // myFunction is:
   loggers.consoleLog(namespacePrefix + functionName, msg.cmyFunctionIs + JSON.stringify(myFunction));
   let returnData = false;
   if (_.isArray(array) === false) {
     // array input object is not an array.
     loggers.consoleLog(namespacePrefix + functionName, msg.carrayInputObjectIsNotAnArray);
     returnData = false;
   }
   if (!!array.find(i => myFunction(i, value))) {
     // The value was found in the array.
     loggers.consoleLog(namespacePrefix + functionName, msg.cTheValueWasFoundInTheArray);
     returnData = true;
   } else {
     // The value was NOT found in the array.
     loggers.consoleLog(namespacePrefix + functionName, msg.cTheValueWasNotFoundInTheArray);
     returnData = false;
   }
   loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
   loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
   return returnData;
 };

 export default {
   parseColorRangeInputs,
   doesArrayContainValue
 };