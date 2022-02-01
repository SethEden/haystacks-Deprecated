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
     // characterGeneration rules in order
     // ***********************************************
     [biz.crandomlyGenerateMixedCaseLetterOrSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateUpperCaseLetterOrSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateLowerCaseLetterOrSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateMixedCaseAlphaNumericCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateUpperCaseAlphaNumericCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateLowerCaseAlphaNumericCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateNumericCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateNumericCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateSpecialCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateNumberInRange]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateNumberInRange(inputData, inputMetaData),
     [biz.crandomlyGenerateBooleanValue]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateBooleanValue(inputData, inputMetaData),
     [biz.crandomlyGenerateMixedCaseAlphabeticCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter(inputData, inputMetaData),
     [biz.crandomlyGenerateLowerCaseLetter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseLetter(inputData, inputMetaData),
     [biz.crandomlyGenerateUpperCaseLetter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseLetter(inputData, inputMetaData),
     [biz.cconvertNumberToUpperCaseLetter]: (inputData, inputMetaData) => characterGeneration.convertNumberToUpperCaseLetter(inputData, inputMetaData),
     [biz.cconvertNumberToLowerCaseLetter]: (inputData, inputMetaData) => characterGeneration.convertNumberToLowerCaseLetter(inputData, inputMetaData),

     // ***********************************************
     // mathOperations rules in order
     // ***********************************************
     [biz.chex2rgbConversion]: (inputData, inputMetaData) => mathOperations.hex2rgbConversion(inputData, inputMetaData),

     // ***********************************************
     // stringGeneration rules in order
     // ***********************************************
     [biz.cgenerateRandomMixedCaseTextByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseTextByLength(inputData, inputMetaData),
     [biz.cgenerateRandomUpperCaseTextByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseTextByLength(inputData, inputMetaData),
     [biz.cgenerateRandomLowerCaseTextByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseTextByLength(inputData, inputMetaData),
     [biz.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength(inputData, inputMetaData),
     [biz.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength(inputData, inputMetaData),
     [biz.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength(inputData, inputMetaData),
     [biz.cgenerateRandomMixedCaseAlphaNumericCodeByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength(inputData, inputMetaData),
     [biz.cgenerateRandomUpperCaseAlphaNumericCodeByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength(inputData, inputMetaData),
     [biz.cgenerateRandomLowerCaseAlphaNumericCodeByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength(inputData, inputMetaData),
     [biz.cgenerateRandomNumericCodeByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomNumericCodeByLength(inputData, inputMetaData),
     [biz.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(inputData, inputMetaData),
     [biz.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength(inputData, inputMetaData),
     [biz.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength(inputData, inputMetaData),
     [biz.cgenerateRandomSpecialCharacterCodeByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomSpecialCharacterCodeByLength(inputData, inputMetaData),
     [biz.cgenerateValidEmail]: (inputData, inputMetaData) => stringGeneration.generateValidEmail(inputData, inputMetaData),
     [biz.cgenerateInvalidEmail]: (inputData, inputMetaData) => stringGeneration.generateInvalidEmail(inputData, inputMetaData),
     [biz.cgenerateRandomBrightColor]: (inputData, inputMetaData) => stringGeneration.generateRandomBrightColor(inputData, inputMetaData),
     [biz.cgenerateRandomDarkColor]: (inputData, inputMetaDate) => stringGeneration.generateRandomDarkColor(inputData, inputMetaData),
     [biz.cgenerateRandomColor]: (inputData, inputMetaData) => stringGeneration.generateRandomColor(inputData, inputMetaData),

     // ***********************************************
     // stringParsing rules in order
     // ***********************************************
     [biz.csingleQuoteSwapAfterEquals]: (inputData, inputMetaData) => stringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData),
     [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => stringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
     [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => stringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
     [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => stringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
     [biz.cswapDoubleBackSlashToSingleBackSlash]: (inputData, inputMetaData) => stringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData),
     [biz.cgetUserNameFromEmail]: (inputData, inputMetaData) => stringParsing.getUserNameFromEmail(inputData, inputMetaData),
     [biz.creplaceSpacesWithPlus]: (inputData, inputMetaData) => stringParsing.replaceSpacesWithPlus(inputData, inputMetaData),
     [biz.creplaceColonWithUnderscore]: (inputData, inputMetaData) => stringParsing.replaceColonWithUnderscore(inputData, inputMetaData),
     [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => stringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
     [biz.cconvertStringToLowerCase]: (inputData, inputMetaData) => stringParsing.convertStringToLowerCase(inputData, inputMetaData),
     [biz.cconvertStringToUpperCase]: (inputData, inputMetaData) => stringParsing.convertStringToUpperCase(inputData, inputMetaData),
     [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => stringParsing.getFileNameFromPath(inputData, inputMetaData),
     [biz.cgetFileExtension]: (inputData, inputMetaData) => stringParsing.getFileExtension(inputData, inputMetaData),
     [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => stringParsing.removeDotFromFileExtension(inputData, inputMetaData),
     [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => stringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
     [biz.cgetValueFromAssignmentOperationString]: (inputData, inputMetaData) => stringParsing.getValueFromAssignmentOperationString(inputData, inputMetaData),
     [biz.caggregateNumericalDifferenceBetweenTwoStrings]: (inputData, inputMetaData) => stringParsing.aggregateNumericalDifferenceBetweenTwoStrings(inputData, inputMetaData),
     [biz.ccountCamelCaseWords]: (inputData, inputMetaData) => stringParsing.countCamelCaseWords(inputData, inputMetaData),
     [biz.cdoesStringContainAcronym]: (inputData, inputMetaData) => stringParsing.doesStringContainAcronym(inputData, inputMetaData),
     [biz.ccountDelimiterInString]: (inputData, inputMetaData) => stringParsing.countDelimiterInString(inputData, inputMetaData),
     [biz.cdetermineWordDelimiter]: (inputData, inputMetaData) => stringParsing.determineWordDelimiter(inputData, inputMetaData),
     [biz.cgetWordCountInString]: (inputData, inputMetaData) => stringParsing.getWordCountInString(inputData, inputMetaData),
     [biz.cdoesStringContainUpperCaseCharacter]: (inputData, inputMetaData) => stringParsing.doesStringContainUpperCaseCharacter(inputData, inputMetaData),
     [biz.cdoesStringContainLowerCaseCharacter]: (inputData, inputMetaData) => stringParsing.doesStringContainLowerCaseCharacter(inputData, inputMetaData),
     [biz.cisFirstCharacterLowerCase]: (inputData, inputMetaData) => stringParsing.isFirstCharacterLowerCase(inputData, inputMetaData),
     [biz.cisFirstCharacterUpperCase]: (inputData, inputMetaData) => stringParsing.isFirstCharacterUpperCase(inputData, inputMetaData),
     [biz.cisStringList]: (inputData, inputMetaData) => stringParsing.isStringList(inputData, inputMetaData),
     [biz.cisStringCamelCase]: (inputData, inputMetaData) => stringParsing.isStringCamelCase(inputData, inputMetaData),
     [biz.cmapWordToCamelCaseWord]: (inputData, inputMetaData) => stringParsing.mapWordToCamelCaseWord(inputData, inputMetaData),
     [biz.csimplifyAndConsolidateString]: (inputData, inputMetaData) => stringParsing.simplifyAndConsolidateString(inputData, inputMetaData),
     [biz.ccompareSimplifiedAndConsolidatedStrings]: (inputData, inputMetaData) => stringParsing.compareSimplifiedAndConsolidatedStrings(inputData, inputMetaData),
     [biz.cascertainMatchingFilenames]: (inputData, inputMetaData) => stringParsing.ascertainMatchingFilenames(inputData, inputMetaData),
     [biz.cvalidateConstantsDataValidation]: (inputData, inputMetaData) => stringParsing.validateConstantsDataValidation(inputData, inputMetaData),
     [biz.cdetermineConstantsContextQualifiedPrefix]: (inputData, inputMetaData) => stringParsing.determineConstantsContextQualifiedPrefix(inputData, inputMetaData),
     [biz.cdetermineSuggestedConstantsValidationLineOfCode]: (inputData, inputMetaData) => stringParsing.determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData),
     [biz.cvalidateConstantsDataValidationLineItemName]: (inputData, inputMetaData) => stringParsing.validateConstantsDataValidationLineItemName(inputData, inputMetaData),
     [biz.cdoesConstantExist]: (inputData, inputMetaData) => stringParsing.doesConstantExist(inputData, inputMetaData),
     [biz.cgetConstantType]: (inputData, inputMetaData) => stringParsing.getConstantType(inputData, inputMetaData),
     [biz.cgetConstantActualValue]: (inputData, inputMetaData) => stringParsing.getConstantActualValue(inputData, inputMetaData),
     [biz.cgetConstantName]: (inputData, inputMetaData) => stringParsing.getConstantName(inputData, inputMetaData),
     [biz.cfindConstantName]: (inputData, inputMetaData) => stringParsing.findConstantName(inputData, inputMetaData),
     [biz.cisConstantTypeValid]: (inputData, inputMetaData) => stringParsing.isConstantTypeValid(inputData, inputMetaData),
     [biz.cconvertConstantTypeToConstantPrefix]: (inputData, inputMetaData) => stringParsing.convertConstantTypeToConstantPrefix(inputData, inputMetaData),
     [biz.cconstantsOptimizedFulfillmentSystem]: (inputData, inputMetaData) => stringParsing.constantsOptimizedFulfillmentSystem(inputData, inputMetaData),
     [biz.cconstantsFulfillmentSystem]: (inputData, inputMetaData) => stringParsing.constantsFulfillmentSystem(inputData, inputMetaData),
     [biz.cvalidateConstantsDataValues]: (inputData, inputMetaData) => stringParsing.validateConstantsDataValues(inputData, inputMetaData),
     [biz.cisValidCommandNameString]: (inputData, inputMetaData) => stringParsing.isValidCommandNameString(inputData, inputMetaData),
     [biz.cisConstantValid]: (inputData, inputMetaData) => stringParsing.isConstantValid(inputData, inputMetaData),
     [biz.ccountDuplicateCommandAliases]: (inputData, inputMetaData) => stringParsing.countDuplicateCommandAliases(inputData, inputMetaData),
     [biz.cgetDataCatagoryFromDataContextName]: (inputData, inputMetaData) => stringParsing.getDataCatagoryFromDataContextName(inputData, inputMetaData),
     [biz.cgetDataCatagoryDetailNameFromDataContextName]: (inputData, inputMetaData) => stringParsing.getDataCatagoryDetailNameFromDataContextName(inputData, inputMetaData),
     [biz.cgetKeywordNameFromDataContextName]: (inputData, inputMetaData) => stringParsing.getKeywordNameFromDataContextName(inputData, inputMetaData),
     [biz.cremoveXnumberOfFoldersFromEndOfPath]: (inputData, inputMetaData) => stringParsing.removeXnumberOfFoldersFromEndOfPath(inputData, inputMetaData),
     [biz.cgetFirstTopLevelFolderFromPath]: (inputData, inputMetaData) => stringParsing.getFirstTopLevelFolderFromPath(inputData, inputMetaData),
     [biz.cloadDataFile]: (inputData, inputMetaData) => stringParsing.loadDataFile(inputData, inputMetaData),
     [biz.csupportedFileFormatsAre]: (inputData, inputMetaData) => stringParsing.supportedFileFormatsAre(inputData, inputMetaData),
     [biz.cgetAttributeName]: (inputData, inputMetaData) => stringParsing.getAttributeName(inputData, inputMetaData),
     [biz.cgetAttributeValue]: (inputData, inputMetaData) => stringParsing.getAttributeValue(inputData, inputMetaData),
     [biz.cisOdd]: (inputData, inputMetaData) => stringParsing.isOdd(inputData, inputMetaData),
     [biz.cisEven]: (inputData, inputMetaData) => stringParsing.isEven(inputData, inputMetaData),
     [biz.ccleanCommandInput]: (inputData, inputMetaData) => stringParsing.cleanCommandInput(inputData, inputMetaData),

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
