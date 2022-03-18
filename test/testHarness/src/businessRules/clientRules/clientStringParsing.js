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

export default {
  customEcho
};
