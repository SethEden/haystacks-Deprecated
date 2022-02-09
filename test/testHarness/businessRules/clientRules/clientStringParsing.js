/**
 * @file clientStringParsing.js
 * @module clientStringParsing
 * @description Contains all client defined business rules for parsing strings, values, arrays,
 * values of all kinds, with various operations.
 * @requires module:haystacks
 * @requires module:haystacks.basic.constants
 * @requires module:haystacks.word1.constants
 * @requires module:haystacks.system.constants
 * @requires module:application.business.constants
 * @requires module:application.message.constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/08
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

let haystacks = require('../../../../src/main.js');
let bas = haystacks.bas;
let wr1 = haystacks.wr1;
let sys = haystacks.sys;
let app_biz = require('../../constants/application.business.constants');
let apc = require('../../constants/application.constants');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
// testHarness.businessRules.clientRules.clientStringParsing.
let namespacePrefix = apc.ctestHarness + bas.cDot + wr1.cbusiness + wr1.cRules + bas.cDot + wr1.cclient + wr1.cRules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function customEcho
 * @description A quick buisness rule to validate that the new dynamic data storage technique for business rules.
 * @param {string} inputData The strign input data.
 * @param {string} inputMetaData The string of input meta-data.
 * @return {string} An echo of the inputData with some hard-coded modifier.
 * @author Seth Hollingsead
 * @date 2022/02/08
 */
export const customEcho = function(inputData, inputMetaData) {
  let functionName = customEcho.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log('inputData is: ' + inputData);
  console.log('inputMetaData is: ' + inputMetaData);
  let returnData;
  // clientStringParsing.customEcho
  returnData = inputData + app_msg.cclientStringParsingDotCustomEcho;
  console.log('returnData is: ' + returnData);
  console.log(`END ${namespacePrefix}${functionName} function`);
};
