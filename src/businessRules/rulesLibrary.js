/**
 * @file rulesLibrary.js
 * @module rulesLibrary
 * @description Contains all of the system defined busness rules as a map between function names and function calls.
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:system.constants
 * @requires module:stringParsing
 * @requires module:arrayParsing
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var bas = require('../constants/basic.constants');
var biz = require('../constants/business.constants');
var fnc = require('../constants/function.constants');
var sys = require('../constants/system.constants');
var stringParsing = require('./rules/stringParsing');
var arrayParsing = require('./rules/arrayParsing');
var D = require('../structures/data');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = sys.cbusinessRules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initRulesLibrary
 * @description Initializes the business rules function data structure on D.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Please be aware that the Commands and BusinessRules data fields in the
 * D-data structure are going to display as empty when printing out the D-data structure even when using JSON.stringify().
 * This is because the fnctions cannot really be serialized in any way. It actually kind of makes sense,
 * but could be really confusing if you are struggling, trying to debug commands or business rules that do not appear to exist.
 */
 function initRulesLibrary() {
   let functionName = initRulesLibrary.name;
   // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
   D[sys.cbusinessRules] = {};
   D[sys.cbusinessRules] = {
     [biz.cecho]: (inputData, inputMetaData) => console.log(JSON.stringify(inputData)),

     // Business Rules
     // ***********************************************
     // stringParsing rules in order
     // ***********************************************
     [biz.cparseSystemRootPath]: (inputData, inputMetaData) => stringParsing.parseSystemRootPath(inputData, inputMetaData),
     [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsing.stringToDataType(inputData, inputMetaData),
     [biz.cstringToBoolean]: (inputData, inputMetaData) => stringParsing.stringToBoolean(inputData, inputMetaData),
     [biz.cdetermineObjectDataType]: (inputData, inputMetaData) => stringParsing.determineObjectDataType(inputData, inputMetaData),
     [biz.cisBoolean]: (inputData, inputMetaData) => stringParsing.isBoolean(inputData, inputMetaData),
     [biz.cisInteger]: (inputData, inputMetaData) => stringParsing.isInteger(inputData, inputMetaData),
     [biz.cisFloat]: (inputData, inputMetaData) => stringParsing.isFloat(inputData, inputMetaData),
     [biz.cisString]: (inputData, inputMetaData) => stringParsing.isString(inputData, inputMetaData),
     [biz.csingleQuoteSwapAfterEquals]: (inputData, inputMetaData) => stringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData),
     [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => stringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
     [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => stringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
     [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => stringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
     [biz.cswapDoubleBackSlashToSingleBackSlash]: (inputData, inputMetaData) => stringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData),

     // ***********************************************
     // ArrayParsing rules in order
     // ***********************************************
     [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => arrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
   }
   // console.log(`END ${namespacePrefix}${functionName} function`);
};

module.exports = {
  [fnc.cinitRulesLibrary]: () => initRulesLibrary()
};
