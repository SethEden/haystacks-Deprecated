/**
 * @file rulesLibrary.js
 * @module rulesLibrary
 * @description Contains all of the system defined busness rules as a map between function names and function calls.
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:function.constants
 * @requires module:system.constants
 * @requires module:arrayParsing
 * @requires module:stringParsing
 * @requires module:stringParsingUtilities
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

let bas = require('../constants/basic.constants');
let biz = require('../constants/business.constants');
let fnc = require('../constants/function.constants');
let sys = require('../constants/system.constants');
let arrayParsing = require('./rules/arrayParsing');
let stringParsing = require('./rules/stringParsing');
let stringParsingUtilities = require('./rules/stringParsingUtilities');
let D = require('../structures/data');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = sys.cbusinessRules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initRulesLibrary
 * @description Initializes the business rules function data structure on D.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Please be aware that the Commands and BusinessRules data fields in the
 * D-data structure are going to display as empty when printing out the D-data structure even when using JSON.stringify().
 * This is because the functions cannot really be serialized in any way. It actually kind of makes sense,
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
     // ArrayParsing rules in order
     // ***********************************************
     [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => arrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
     [biz.cconvertCamelCaseStringToArray]: (inputData, inputMetaData) => arrayParsing.convertCamelCaseStringToArray(inputData, inputMetaData),
     [biz.cgetWordsArrayFromString]: (inputData, inputMetaData) => arrayParsing.getWordsArrayFromString(inputData, inputMetaData),
     [biz.crecombineStringArrayWithSpaces]: (inputData, inputMetaData) => arrayParsing.recombineStringArrayWithSpaces(inputData, inputMetaData),
     [biz.cconvertArrayToCamelCaseString]: (inputData, inputMetaData) => arrayParsing.convertArrayToCamelCaseString(inputData, inputMetaData),
     [biz.cdoesArrayContainLowerCaseConsolidatedString]: (inputData, inputMetaData) => arrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData),
     [biz.cdoesArrayContainCharacter]: (inputData, inputMetaData) => arrayParsing.doesArrayContainCharacter(inputData, inputMetaData),
     [biz.cremoveCharacterFromArray]: (inputData, inputMetaData) => arrayParsing.removeCharacterFromArray(inputData, inputMetaData),
     [biz.cascertainMatchingElements]: (inputData, inputMetaData) => arrayParsing.ascertainMatchingElements(inputData, inputMetaData),
     [biz.cdoesArrayContainFilename]: (inputData, inputMetaData) => arrayParsing.doesArrayContainFilename(inputData, inputMetaData),
     [biz.cgetLengthOfLongestStringInArray]: (inputData, inputMetaData) => arrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData),
     [biz.csearchForPatternsInStringArray]: (inputData, inputMetaData) => arrayParsing.searchForPatternsInStringArray(inputData, inputMetaData),
     [biz.cvalidatePatternsThatNeedImplementation]: (inputData, inputMetaData) => arrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData),
     [biz.csolveLehmerCode]: (inputData, inputMetaData) => arrayParsing.solveLehmerCode(inputData, inputMetaData),
     [biz.crecursiveArrayExpansion]: (inputData, inputMetaData) => arrayParsing.recursiveArrayExpansion(inputData, inputMetaData),
     [biz.cgetLehmerCodeValue]: (inputData, inputMetaData) => arrayParsing.getLehmerCodeValue(inputData, inputMetaData),
     [biz.carraysAreEqual]: (inputData, inputMetaData) => arrayParsing.arraysAreEqual(inputData, inputMetaData),
     [biz.cstoreData]: (inputData, inputMetaData) => arrayParsing.storeData(inputData, inputMetaData),
     [biz.cgetStoredData]: (inputData, inputMetaData) => arrayParsing.getStoredData(inputData, inputMetaData),
     [biz.cisObjectEmpty]: (inputData, inputMetaData) => arrayParsing.isObjectEmpty(inputData, inputMetaData),
     [biz.cisArrayEmpty]: (inputData, inputMetaData) => arrayParsing.isArrayEmpty(inputData, inputMetaData),
     [biz.cisObject]: (inputData, inputMetaData) => arrayParsing.isObject(inputData, inputMetaData),
     [biz.cisArray]: (inputData, inputMetaData) => arrayParsing.isArray(inputData, inputMetaData),
     [biz.cisArrayOrObject]: (inputData, inputMetaData) => arrayParsing.isArrayOrObject(inputData, inputMetaData),
     [biz.cisNonZeroLengthArray]: (inputData, inputMetaData) => arrayParsing.isNonZeroLengthArray(inputData, inputMetaData),
     [biz.carrayDeepClone]: (inputData, inputMetaData) => arrayParsing.arrayDeepClone(inputData, inputMetaData),
     [biz.creplaceCharacterAtIndex]: (inputData, inputMetaData) => arrayParsing.replaceCharacterAtIndex(inputData, inputMetaData),
     [biz.cgenerateCommandAliases]: (inputData, inputMetaData) => arrayParsing.generateCommandAliases(inputData, inputMetaData),
     [biz.caggregateCommandArguments]: (inputData, inputMetaData) => arrayParsing.aggregateCommandArguments(inputData, inputMetaData),
     [biz.cgetFileAndPathListForPath]: (inputData, inputMetaData) => arrayParsing.getFileAndPathListForPath(inputData, inputMetaData),
     [biz.cparseColorRangeInputs]: (inputData, inputMetaData) => arrayParsing.parseColorRangeInputs(inputData, inputMetaData),

     // ***********************************************
     // stringParsing rules in order
     // ***********************************************
     [biz.csingleQuoteSwapAfterEquals]: (inputData, inputMetaData) => stringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData),
     [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => stringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
     [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => stringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
     [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => stringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
     [biz.cswapDoubleBackSlashToSingleBackSlash]: (inputData, inputMetaData) => stringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData),
     [biz.creplaceDoublePercentWithMessage]: (inputData, inputMetaData) => stringParsing.replaceDoublePercentWithMessage(inputData, inputMetaData),

     // ***********************************************
     // stringParsingutilities rules in order
     // ***********************************************
     [biz.cparseSystemRootPath]: (inputData, inputMetaData) => stringParsingUtilities.parseSystemRootPath(inputData, inputMetaData),
     [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsingUtilities.stringToDataType(inputData, inputMetaData),
     [biz.cstringToBoolean]: (inputData, inputMetaData) => stringParsingUtilities.stringToBoolean(inputData, inputMetaData),
     [biz.cdetermineObjectDataType]: (inputData, inputMetaData) => stringParsingUtilities.determineObjectDataType(inputData, inputMetaData),
     [biz.cisBoolean]: (inputData, inputMetaData) => stringParsingUtilities.isBoolean(inputData, inputMetaData),
     [biz.cisInteger]: (inputData, inputMetaData) => stringParsingUtilities.isInteger(inputData, inputMetaData),
     [biz.cisFloat]: (inputData, inputMetaData) => stringParsingUtilities.isFloat(inputData, inputMetaData),
     [biz.cisString]: (inputData, inputMetaData) => stringParsingUtilities.isString(inputData, inputMetaData),
     [biz.creplaceDoublePercentWithMessage]: (inputData, inputMetaData) => stringParsingUtilities.replaceDoublePercentWithMessage(inputData, inputMetaData),
     [biz.cutilitiesReplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(inputData, inputMetaData),
   }
   // console.log(`END ${namespacePrefix}${functionName} function`);
};

module.exports = {
  [fnc.cinitRulesLibrary]: () => initRulesLibrary()
};
