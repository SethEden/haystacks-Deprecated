/**
 * @file timers.js
 * @module timers
 * @description Contains all of the functions needed for generating time stamps,
 * reformatting time stamps and trackng time durations.
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires {@link https://www.npmjs.com/package/moment|moment}
 * @author Seth Hollingsead
 * @date 2021/10/19
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

 var path = require('path');
 var moment = require('moment');
 var baseFileName = path.basename(module.filename, path.extname(module.filename));
 var namespacePrefix = `executrix.${baseFileName}.`;

/**
 * @function getNowMoment
 * @description Returns a time stamp string formatted according to the input formatting string.
 * @param {string} formatting The formatting string, that tells moment in what format to
 * return the value for the day, month, year, hour, minute, second and millisecond.
 * @return {strng} A time stamp string that has been formatted accroding to the input format.
 * @author Seth Hollingsead
 * @date 2021/10/19
 */
 function getNowMoment(formatting) {
   // let functionName = getNowMoment.name;
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
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`startTime is: ${startTime}`);
  console.log(`endTime is: ${endTime}`);
  let deltaTimeResult;
  startTime = moment(startTime, 'YYYYMMDD_HHmmss_SSS');
  endTime = moment(endTime, 'YYYYMMDD_HHmmss_SSS');
  deltaTimeResult = endTime.diff(startTime); // Should wok in milliseconds out of the box!
  console.log(`deltaTimeResult is: ${deltaTimeResult}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return deltaTimeResult;
};
