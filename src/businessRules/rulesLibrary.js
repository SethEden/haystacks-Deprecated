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
     [biz.cgetUserNameFromEmail]: (inputData, inputMetaData) => getUserNameFromEmail(inputData, inputMetaData),
     [biz.creplaceSpacesWithPlus]: (inputData, inputMetaData) => replaceSpacesWithPlus(inputData, inputMetaData),
     [biz.creplaceColonWithUnderscore]: (inputData, inputMetaData) => replaceColonWithUnderscore(inputData, inputMetaData),
     [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => cleanCarriageReturnFromString(inputData, inputMetaData),
     [biz.cconvertStringToLowerCase]: (inputData, inputMetaData) => convertStringToLowerCase(inputData, inputMetaData),
     [biz.cconvertStringToUpperCase]: (inputData, inputMetaData) => convertStringToUpperCase(inputData, inputMetaData),
     [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => getFileNameFromPath(inputData, inputMetaData),
     [biz.cgetFileExtension]: (inputData, inputMetaData) => getFileExtension(inputData, inputMetaData),
     [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => removeDotFromFileExtension(inputData, inputMetaData),
     [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => removeFileExtensionFromFileName(inputData, inputMetaData),
     [biz.cgetValueFromAssignmentOperationString]: (inputData, inputMetaData) => getValueFromAssignmentOperationString(inputData, inputMetaData),
     [biz.caggregateNumericalDifferenceBetweenTwoStrings]: (inputData, inputMetaData) => aggregateNumericalDifferenceBetweenTwoStrings(inputData, inputMetaData),
     [biz.ccountCamelCaseWords]: (inputData, inputMetaData) => countCamelCaseWords(inputData, inputMetaData),
     [biz.cdoesStringContainAcronym]: (inputData, inputMetaData) => doesStringContainAcronym(inputData, inputMetaData),
     [biz.ccountDelimiterInString]: (inputData, inputMetaData) => countDelimiterInString(inputData, inputMetaData),
     [biz.cdetermineWordDelimiter]: (inputData, inputMetaData) => determineWordDelimiter(inputData, inputMetaData),
     [biz.cgetWordCountInString]: (inputData, inputMetaData) => getWordCountInString(inputData, inputMetaData),
     [biz.cdoesStringContainUpperCaseCharacter]: (inputData, inputMetaData) => doesStringContainUpperCaseCharacter(inputData, inputMetaData),
     [biz.cdoesStringContainLowerCaseCharacter]: (inputData, inputMetaData) => doesStringContainLowerCaseCharacter(inputData, inputMetaData),
     [biz.cisFirstCharacterLowerCase]: (inputData, inputMetaData) => isFirstCharacterLowerCase(inputData, inputMetaData),
     [biz.cisFirstCharacterUpperCase]: (inputData, inputMetaData) => isFirstCharacterUpperCase(inputData, inputMetaData),
     [biz.cisStringList]: (inputData, inputMetaData) => isStringList(inputData, inputMetaData),
     [biz.cisStringCamelCase]: (inputData, inputMetaData) => isStringCamelCase(inputData, inputMetaData),
     [biz.cmapWordToCamelCaseWord]: (inputData, inputMetaData) => mapWordToCamelCaseWord(inputData, inputMetaData),
     [biz.csimplifyAndConsolidateString]: (inputData, inputMetaData) => simplifyAndConsolidateString(inputData, inputMetaData),
     [biz.ccompareSimplifiedAndConsolidatedStrings]: (inputData, inputMetaData) => compareSimplifiedAndConsolidatedStrings(inputData, inputMetaData),
     [biz.cascertainMatchingFilenames]: (inputData, inputMetaData) => ascertainMatchingFilenames(inputData, inputMetaData),
     [biz.cvalidateConstantsDataValidation]: (inputData, inputMetaData) => validateConstantsDataValidation(inputData, inputMetaData),
     [biz.cdetermineConstantsContextQualifiedPrefix]: (inputData, inputMetaData) => determineConstantsContextQualifiedPrefix(inputData, inputMetaData),
     [biz.cdetermineSuggestedConstantsValidationLineOfCode]: (inputData, inputMetaData) => determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData),
     [biz.cvalidateConstantsDataValidationLineItemName]: (inputData, inputMetaData) => validateConstantsDataValidationLineItemName(inputData, inputMetaData),
     [biz.cdoesConstantExist]: (inputData, inputMetaData) => doesConstantExist(inputData, inputMetaData),
     [biz.cgetConstantType]: (inputData, inputMetaData) => getConstantType(inputData, inputMetaData),
     [biz.cgetConstantActualValue]: (inputData, inputMetaData) => getConstantActualValue(inputData, inputMetaData),
     [biz.cgetConstantName]: (inputData, inputMetaData) => getConstantName(inputData, inputMetaData),
     [biz.cfindConstantName]: (inputData, inputMetaData) => findConstantName(inputData, inputMetaData),
     [biz.cisConstantTypeValid]: (inputData, inputMetaData) => isConstantTypeValid(inputData, inputMetaData),
     [biz.cconvertConstantTypeToConstantPrefix]: (inputData, inputMetaData) => convertConstantTypeToConstantPrefix(inputData, inputMetaData),
     [biz.cconstantsOptimizedFulfillmentSystem]: (inputData, inputMetaData) => constantsOptimizedFulfillmentSystem(inputData, inputMetaData),
     [biz.cconstantsFulfillmentSystem]: (inputData, inputMetaData) => constantsFulfillmentSystem(inputData, inputMetaData),
     [biz.cvalidateConstantsDataValues]: (inputData, inputMetaData) => validateConstantsDataValues(inputData, inputMetaData),
     [biz.cisValidCommandNameString]: (inputData, inputMetaData) => isValidCommandNameString(inputData, inputMetaData),
     [biz.cisConstantValid]: (inputData, inputMetaData) => isConstantValid(inputData, inputMetaData),
     [biz.ccountDuplicateCommandAliases]: (inputData, inputMetaData) => countDuplicateCommandAliases(inputData, inputMetaData),
     [biz.cgetDataCatagoryFromDataContextName]: (inputData, inputMetaData) => getDataCatagoryFromDataContextName(inputData, inputMetaData),
     [biz.cgetDataCatagoryDetailNameFromDataContextName]: (inputData, inputMetaData) => getDataCatagoryDetailNameFromDataContextName(inputData, inputMetaData),
     [biz.cgetKeywordNameFromDataContextName]: (inputData, inputMetaData) => getKeywordNameFromDataContextName(inputData, inputMetaData),
     [biz.cremoveXnumberOfFoldersFromEndOfPath]: (inputData, inputMetaData) => removeXnumberOfFoldersFromEndOfPath(inputData, inputMetaData),
     [biz.cgetFirstTopLevelFolderFromPath]: (inputData, inputMetaData) => getFirstTopLevelFolderFromPath(inputData, inputMetaData),
     [biz.cloadDataFile]: (inputData, inputMetaData) => loadDataFile(inputData, inputMetaData),
     [biz.csupportedFileFormatsAre]: (inputData, inputMetaData) => supportedFileFormatsAre(inputData, inputMetaData),
     [biz.cgetAttributeName]: (inputData, inputMetaData) => getAttributeName(inputData, inputMetaData),
     [biz.cgetAttributeValue]: (inputData, inputMetaData) => getAttributeValue(inputData, inputMetaData),
     [biz.cisOdd]: (inputData, inputMetaData) => isOdd(inputData, inputMetaData),
     [biz.cisEven]: (inputData, inputMetaData) => isEven(inputData, inputMetaData),
     [biz.ccleanCommandInput]: (inputData, inputMetaData) => cleanCommandInput(inputData, inputMetaData),

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
