/**
 * @file timers.js
 * @module timers
 * @description Contains all of the functions needed for generating time stamps,
 * reformatting time stamps and tracking time durations.
 * @requires module:basic.constants
 * @requires module:function.constants
 * @requires module:message.constants
 * @requires module:word1.constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires {@link https://www.npmjs.com/package/moment|moment}
 * @author Seth Hollingsead
 * @date 2021/10/19
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

import * as bas from '../constants/basic.constants.js';
import * as fnc from '../constants/function.constants.js';
import * as msg from '../constants/message.constants.js';
import * as wr1 from '../constants/word1.constants.js';
import path from 'path';
import moment from 'moment';

const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// executrix.timers.
const namespacePrefix = wr1.cexecutrix + bas.cDot + baseFileName + bas.cDot;

/**
 * @function getNowMoment
 * @description Returns a time stamp string formatted according to the input formatting string.
 * @param {string} formatting The formatting string, that tells moment in what format to
 * return the value for the day, month, year, hour, minute, second and millisecond.
 * @return {string} A time stamp string that has been formatted accroding to the input format.
 * @author Seth Hollingsead
 * @date 2021/10/19
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
 function getNowMoment(formatting) {
   let functionName = getNowMoment.name;
   // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
   // console.log(`formatting is: ${formatting}`);
   let returnData = '';
   returnData = moment().format(formatting);
   // console.log(`returnData is: ${returnData}`);
   // console.log(`END ${namespacePrefix}${functionName} function`);
   return returnData;
 };

/**
 * @function computeDeltaTime
 * @description Computes the time difference between two different date-time stamps in milliseconds.
 * @param {string} startTime The start of the time period that should be computed.
 * @param {string} endTime The end of the time period that should be computed.
 * @return {integer} The difference between the beginning time and ending time in milliseconds.
 * @author Seth Hollingsead
 * @date 2021/10/19
 */
function computeDeltaTime(startTime, endTime) {
  let functionName = computeDeltaTime.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`startTime is: ${startTime}`);
  // console.log(`endTime is: ${endTime}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cstartTimeIs + startTime);
  loggers.consoleLog(namespacePrefix + functionName, msg.cendTimeIs + endTime);
  let deltaTimeResult;
  startTime = moment(startTime, gen.cYYYYMMDD_HHmmss_SSS);
  endTime = moment(endTime, gen.cYYYYMMDD_HHmmss_SSS);
  deltaTimeResult = endTime.diff(startTime); // Should wok in milliseconds out of the box!
  loggers.consoleLog(namespacePrefix + functionName, msg.cdeltaTimeResultIs + deltaTimeResult);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`deltaTimeResult is: ${deltaTimeResult}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return deltaTimeResult;
};

export default {
  [fnc.cgetNowMoment]: (formatting) => getNowMoment(formatting),
  [fnc.ccomputeDeltaTime]: (startTime, endTime) => computeDeltaTime(startTime, endTime)
};
