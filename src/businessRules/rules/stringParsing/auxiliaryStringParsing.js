/**
 * @file auxiliaryStringParsing.js
 * @module auxiliaryStringParsing
 * @description Contains all system defined business rules for parsing strings
 * focused on misc auxiliary capabilities.
 * @requires module:loggers
 * @requires module:timers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/25
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import loggers from '../../executrix/loggers.js';
import timers from '../../executrix/timers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, clr, cfg, gen, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.stringParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function getNowMoment
 * @description This function is a wrapper for the timers.getNowMoment function.
 * It returns a time stamp for the current instant that the function is called.
 * @param {string} inputData The format for the time stamp should be followed.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The current time stamp, formatted according to the inpu string.
 * @author Seth Hollingsead
 * @date 2022/04/08
 */
const getNowMoment = function(inputData, inputMetaData) {
  let functionName = getNowMoment.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = timers.getNowMoment(inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

export default {
  getNowMoment
};
