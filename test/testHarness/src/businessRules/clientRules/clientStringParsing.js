/**
 * @file clientStringParsing.js
 * @module clientStringParsing
 * @description Contains all client defined business rules for parsing strings, values, arrays,
 * values of all kinds, with various operations.
 * @requires module:application.business.constants
 * @requires module:application.constants
 * @requires module:application.message.constants
 * @requires module:haystacks
 * @requires module:haystacks.basic.constants
 * @requires module:haystacks.message.constants
 * @requires module:haystacks.word1.constants
 * @requires module:haystacks.system.constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/08
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_biz from '../../constants/application.business.constants.js';
import * as apc from '../../constants/application.constants.js';
import * as app_msg from '../../constants/application.message.constants.js';
// External imports
import haystacks from 'haystacks';
let bas = haystacks.bas;
let msg = haystacks.msg;
let sys = haystacks.sys;
let wr1 = haystacks.wr1;
import path from 'path';

const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// testHarness.businessRules.clientRules.clientStringParsing.
const namespacePrefix = apc.cApplicationName + bas.cDot + wr1.cbusiness + wr1.cRules + bas.cDot + wr1.cclient + wr1.cRules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function customEcho
 * @description A quick buisness rule to validate that the new dynamic data storage technique for business rules.
 * @param {string} inputData The string input data.
 * @param {string} inputMetaData The string of input meta-data.
 * @return {string} An echo of the inputData with some hard-coded modifier.
 * @author Seth Hollingsead
 * @date 2022/02/08
 */
const customEcho = function(inputData, inputMetaData) {
  let functionName = customEcho.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  // clientStringParsing.customEcho
  returnData = inputData + bas.cSpace + app_msg.cclientStringParsingDotCustomEcho;
  console.log(returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function mostPopularNumber
 * @description Parses through an array of integers and determine which value is the most popular.
 * @param {array<integer>} inputData The array that should be evaluated for most popular value.
 * @param {integer} inputMetaData The length of the array that was passed in.
 * @return {integer} The most popular value in the array.
 * @author Seth Hollingsead
 * @date 2022/03/31
 */
const mostPopularNumber = function(inputData, inputMetaData) {
  let functionName = mostPopularNumber.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  let i, j, instanceCounter = 0;
  let tempArray1 = [];
  let tempArray2 = [];

  // console.log('BEGIN first for-loop');
  for (i = 0; i <= inputMetaData; i++) {
    // console.log('BEGIN nested for-loop i = ' + i);
    for (j = 0; j <= inputMetaData; j++) {
      // console.log('BEGIN nested for-loop j = ' + j);
      if (inputData[i] === inputData[j] && i !== j && i !== undefined && i !== null) {
        // console.log('FOUND a MATCH!!');
        // console.log('inputData[i] is: ' + JSON.stringify(inputData[i]));
        // console.log('inputData[j] is: ' + JSON.stringify(inputData[j]));
        tempArray1[i] = inputData[i];
        // console.log('contents of tempArray1 are: ' + JSON.stringify(tempArray1));
      } // End-if (inputData[i] === inputData[j] && i !== j && i !== undefined && i !== null)
      // console.log('END nested for-loop j = ' + j);
    } // End-for (j = 0; j <= inputMetaData; j++)
    // console.log('END nested for-loop i = ' + i);
  } // End-for (i = 0; i <= inputMetaData; i++)
  // console.log('END first for-loop');

  // console.log('BEGIN second for-loop');
  for (i = 0; i <= tempArray1.length; i++) {
    // console.log('BEGIN nested for-loop i = ' + i);
    for (j = 0; j <= tempArray1.length; j++) {
      // console.log('BEGIN iteration j = ' + j);
      if (tempArray1[i] === inputData[j] && tempArray1[i] !== undefined && tempArray1[i] !== null && i !== j) {
        // console.log('FOUND a MATCH!!');
        // console.log('tempArray1[i] is: ' + JSON.stringify(tempArray1[i]));
        // console.log('inputData[j] is ' + JSON.stringify(inputData[j]));
        // console.log('instanceCounter before increment is: ' instanceCounter);
        tempArray2[i] = ++instanceCounter;
        // console.log('instanceCounter after increment is: ' + instanceCounter);
        // console.log('contents of tempArray2 are: ' + JSON.stringify(tempArray2));
      } // End-if (tempArray1[i] === inputData[j] && tempArray1[i] !== undefined && tempArray1[i] !== null && i !== j)
      // console.log('END iteration j = ' + j);
    } // End-for (j = 0; j <= tempArray1.length; j++)
    // console.log('END nested for-loop i = ' + i);
  } // End-for (i = 0; i <= tempArray1.length; i++)
  // console.log('END second for-loop');

  // console.log('BEGIN third for-loop');
  // console.log('tempArray2.length is: ' + tempArray2.length);
  for (i = 0; i <= tempArray2.length; i++) {
    // console.log('BEGIN iteration i = ' + i);
    if (tempArray2[i] !== 0 && i === 0) {
      // console.log('if-condition i = 0 has been met! i = ' + i);
      returnData = inputData[i];
    } else {
      // console.log('if-condition-else i <> 0 has been met! i = ' + i);
      if (tempArray2[i] > returnData) {
        // console.log('found one greater');
        // console.log('tempArray2[i] is: ' + JSON.stringify(tempArray2[i]));
        // console.log('tempArray2[i - 1] is: ' + JSON.stringify(tempArray2[i - 1]));
        returnData = inputData[i];
        // console.log('returnData is: ' + returnData);
      } // End-if (tempArray2[i] > returnData)
    }
    i += 1;
    // console.log('END iteration i = ' + i);
  } // End-for (i = 0; i <= tempArray2.length; i++)
  // console.log('END third for-loop');
  haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isAlmostPalindrome
 * @description Determines if the input string is almost a Palindrome string or not.
 * @param {string} inputData The string that should be evaluated to determine if it is a Palindrome strng or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input string is a Palindrome or almost palindrome string or not.
 * @author Seth Hollingsead
 * @date 2022/03/31
 */
const isAlmostPalindrome = function(inputData, inputMetaData) {
  let functionName = isAlmostPalindrome.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  let misCompareCount = 0;
  let startingPoint, endingPoint;
  // TODO: We need to enable additional types of comparisons. The below algorthim works for if the mis-compare is in the center of the string.
  // But if the mis-compare is at the beginning or the end of the string then it can throw off all the other comparisons resulting in a false positive result.
  // We actually need to check starting with the first character but also the first + 1 character and also,
  // we need to check ending with the last - 1 character.
  // using a similar algorthim as below.
loop1:
  for (let i = 0; i < 3; i++) {
    // Setup the different start point & end points to do the comparison.
    // comparison iteration is:
    haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccomparisonIterationIs + i);
    if (i === 0) {
      startingPoint = 0;
      endingPoint = -1;
    } else if (i === 1) {
      startingPoint = 1;
      endingPoint = 0;
    } else if (i === 2) {
      startingPoint = 0;
      endingPoint = -2;
    } else { // We shouldn't get to this point, given the for-loop parameters defined above.
      returnData = false;
      break;
    }
    // startingPoint is:
    haystacks.consoleLog(namespacePrefix, functionName, app_msg.cstartingPointIs + startingPoint);
    // endingPoint is:
    haystacks.consoleLog(namespacePrefix, functionName, app_msg.cendingPointIs + endingPoint);
loop2:
    for (let j = startingPoint; j < inputData.length; j++) {
      // j value is:
      haystacks.consoleLog(namespacePrefix, functionName, msg.cjValueIs + j);
      // inputData.charAt(j) is:
      haystacks.consoleLog(namespacePrefix, functionName, app_msg.cinputDataDotCharAtJIs + inputData.charAt(j));
      // inputData.charAt(inputData.length -
      // ) is:
      haystacks.consoleLog(namespacePrefix, functionName, app_msg.cinputDataDotCharAtInputDataDotLengthDash + j + ' + ' + endingPoint + app_msg.cCloseParenthesisIs +
        inputData.charAt(inputData.length - j + endingPoint));
      if (inputData.charAt(j) !== inputData.charAt(inputData.length - j + endingPoint)) {
        // We got a mismatch!
        haystacks.consoleLog(namespacePrefix, functionName, app_msg.cWeGotMismatch);
        // misCompareCount before increment is:
        haystacks.consoleLog(namespacePrefix, functionName, app_msg.cmisCompareCountBeforeIncrementIs + misCompareCount);
        misCompareCount += 1;
        // misCompareCount post increment is:
        haystacks.consoleLog(namespacePrefix, functionName, app_msg.cmisCompareCountPostIncrementIs + misCompareCount);
        if (misCompareCount >= 2) {
          break loop2;
        }
      } // End-if (inputData.charAt(j) !== inputData.charAt(inputData.length - j + endingPoint))
    } // End-for (let j = startingPoint; j < inputData.length; j++)
    // misCompareCount after the for-loop is:
    haystacks.consoleLog(namespacePrefix, functionName, app_msg.cmisCompareCountAfterForLoopIs + misCompareCount);
    if (i === 0) {
      if (misCompareCount <= 1) {
        returnData = true;
      }
    } else if (i > 0) {
      if (misCompareCount <= 1) {
        returnData = true;
      }
    }
    haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
    // If we got a positive result then we can break out of the function and return our positive result.
    if (returnData === true) {
      break;
    } else { // Otherwise proceed with the next comparison iteration and check if one of the other scenarios will yield a positive result.
      misCompareCount = 0; // Reset it for the next comparison iteration.
    }
  } // End-for (let i = 0; i < 3; i++)
  haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function threePointAverage
 * @description Calculates the average of 3 coordinates in a 2-Dimensional plane.
 * @param {array<array<integer|float|double>>} inputData array of coordinates for the 3 points to compute average for.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<integer|float|double>} Returns the XY coordinate of the average point between all points.
 * @author Seth Hollingsead
 * @date 2022/03/31
 */
const threePointAverage = function(inputData, inputMetaData) {
  let functionName = threePointAverage.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  let xAverage, x1, x2, x3;
  let yAverage, y1, y2, y3;

  x1 = inputData[0][0];
  x2 = inputData[1][0];
  x3 = inputData[2][0];
  y1 = inputData[0][1];
  y2 = inputData[1][1];
  y3 = inputData[2][1];

  // Calculate the X-averages:
  xAverage = (x1 + x2 + x3) / 3;
  // Calculate the y-averages:
  yAverage = (y1 + y2 + y3) / 3;
  returnData = [xAverage, yAverage];
  haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function arrayCounter
 * @description Receives an array and a value, counts the number of occurances of that value in the array.
 * @param {array<integer|string|object>} inputData The array which should have it's values counted.
 * @param {integer|string|object} inputMetaData The isntance that should be counted in the array.
 * @return {integer} The count of the objects/values that was found to match out of the array.
 * @author Seth Hollingsead
 * @date 2022/03/31
 */
const arrayCounter = function(inputData, inputMetaData) {
  let functionName = arrayCounter.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData && inputMetaData) {
    for (let i = 0; i <= inputData.length; i++) {
      if (inputDatap[i] === inputMetaData) {
        returnData += 1;
      }
    } // End-for (let i = 0; i <= inputData.length; i++)
  } // End-if (inputData && inputMetaData)
  haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
};

export default {
  customEcho,
  mostPopularNumber,
  isAlmostPalindrome,
  threePointAverage
};
