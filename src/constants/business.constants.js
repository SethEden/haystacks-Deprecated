/**
 * @file business.constants.js
 * @module business.constants
 * @description Contains many re-usable business rules constants.
 * @requires module:basic.constants
 * @requires module:phonic.constants
 * @requires module:numeric.constants
 * @requires module:word1.constants
 * @requires module:system.constants
 * @author Seth Hollingsead
 * @date 2021/10/29
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

let bas = require('./basic.constants');
let phn = require('./phonic.constants');
let num = require('./numeric.constants');
let wr1 = require('./word1.constants');
let sys = require('./system.constants');

// Business Rules
let cecho = wr1.cecho; // echo
let cEcho = wr1.cEcho; // Echo

// *********************************
// ArrayParsing rules in order
// *********************************
let creplaceCharacterWithCharacter = wr1.creplace + wr1.cCharacter + wr1.cWith + wr1.cCharacter; // replaceCharacterWithCharacter
let cconvertCamelCaseStringToArray = wr1.cconvert + wr1.cCamel + wr1.cCase + wr1.cString + wr1.cTo + wr1.cArray; // convertCamelCaseStringToArray
let cgetWordsArrayFromString = wr1.cget + wr1.cWords + wr1.cArray + wr1.cFrom + wr1.cString; // getWordsArrayFromString
let crecombineStringArrayWithSpaces = wr1.crecombine + wr1.cString + wr1.cArray + wr1.cWith + wr1.cSpaces; // recombineStringArrayWithSpaces
let cconvertArrayToCamelCaseString = wr1.cconvert + wr1.cArray + wr1.cTo + wr1.cCamel + wr1.cCase + wr1.cString; // convertArrayToCamelCaseString
let cdoesArrayContainLowerCaseConsolidatedString = wr1.cdoes + wr1.cArray + wr1.cContain + wr1.cLower + wr1.cCase + wr1.cConsolidated + wr1.cString; // doesArrayContainLowerCaseConsolidatedString
let cdoesArrayContainCharacter = wr1.cdoes + wr1.cArray + wr1.cContain + wr1.cCharacter; // doesArrayContainCharacter
let cremoveCharacterFromArray = wr1.cremove + wr1.cCharacter + wr1.cFrom + wr1.cArray; // removeCharacterFromArray
let cascertainMatchingElements = wr1.cascertain + wr1.cMatching + wr1.cElements; // ascertainMatchingElements
let cdoesArrayContainFilename = wr1.cdoes + wr1.cArray + wr1.cContain + wr1.cFilename; // doesArrayContainFilename
let cgetLengthOfLongestStringInArray = wr1.cget + wr1.cLength + wr1.cOf + wr1.cLongest + wr1.cString + bas.cIn + wr1.cArray; // getLengthOfLongestStringInArray
let csearchForPatternsInStringArray = wr1.csearch + wr1.cFor + wr1.cPatterns + bas.cIn + wr1.cString + wr1.cArray; // searchForPatternsInStringArray
let cvalidatePatternsThatNeedImplementation = wr1.cvalidate + wr1.cPatterns + wr1.cThat + wr1.cNeed + wr1.cImplementation; // validatePatternsThatNeedImplementation
let csolveLehmerCode = wr1.csolve + wr1.cLehmer + wr1.cCode; // solveLehmerCode
let crecursiveArrayExpansion = wr1.crecursive + wr1.cArray + wr1.cExpansion; // recursiveArrayExpansion
let cgetLehmerCodeValue = wr1.cget + wr1.cLehmer + wr1.cCode + wr1.cValue; // getLehmerCodeValue
let carraysAreEqual = wr1.carrays + wr1.cAre + wr1.cEqual; // arraysAreEqual
let cstoreData = wr1.cstore + wr1.cData; // storeData
let cgetStoredData = wr1.cget + wr1.cStored + wr1.cData; // getStoredData
let cisObjectEmpty = wr1.cis + wr1.cObject + wr1.cEmpty; // isObjectEmpty
let cisArrayEmpty = wr1.cis + wr1.cArray + wr1.cEmpty; // isArrayEmpty
let cisObject = wr1.cis + wr1.cObject; // isObject
let cisArray = wr1.cis + wr1.cArray; // isArray
let cisArrayOrObject = wr1.cis + wr1.cArray + wr1.cOr + wr1.cObject; // isArrayOrObject
let cisNonZeroLengthArray = wr1.cis + phn.cNon + wr1.cZero + wr1.cLength + wr1.cArray; // isNonZeroLengthArray
let carrayDeepClone = wr1.carray + wr1.cDeep + wr1.cClone; // arrayDeepClone
let creplaceCharacterAtIndex = wr1.creplace + wr1.cCharacter + wr1.cAt + wr1.cIndex; // replaceCharacterAtIndex
let cgenerateCommandAliases = wr1.cgenerate + wr1.cCommand + wr1.cAliases; // generateCommandAliases
let caggregateCommandArguments = wr1.caggregate + wr1.cCommand + wr1.cArguments; // aggregateCommandArguments
let cgetFileAndPathListForPath = wr1.cget + wr1.cFile + wr1.cAnd + wr1.cPath + wr1.cList + wr1.cFor + wr1.cPath; // getFileAndPathListForPath
let cparseColorRangeInputs = wr1.cparse + wr1.cColor + wr1.cRange + wr1.cInputs; // parseColorRangeInputs
let cdoesArrayContainValue = wr1.cdoes + wr1.cArray + wr1.cContain + wr1.cValue; // doesArrayContainValue

// ********************************
// StringParsing rules in order
// ********************************
let csingleQuoteSwapAfterEquals = wr1.csingle + wr1.cQuote + wr1.cSwap + wr1.cAfter + wr1.cEquals; // singleQuoteSwapAfterEquals
let cswapForwardSlashToBackSlash = wr1.cswap + sys.cForwardSlash + bas.cTo + sys.cBackSlash; // swapForwadSlashToBackSlash
let cswapBackSlashToForwardSlash = wr1.cswap + sys.cBackSlash + bas.cTo + sys.cForwardSlash; // swapBackSlashToForwardSlash
let cswapDoubleForwardSlashToSingleForwardSlash = wr1.cswap + wr1.cDouble + sys.cForwardSlash + bas.cTo + wr1.cSingle + sys.cForwardSlash; // swapDoubleForwardSlashToSingleForwardSlash
let cswapDoubleBackSlashToSingleBackSlash = wr1.cswap + wr1.cDouble + sys.cBackSlash + bas.cTo + wr1.cSingle + sys.cBackSlash; // swapDoubleBackSlashToSingleBackSlash

// ********************************
// StringParsingUtiities rules in order
// ********************************
let cparseSystemRootPath = wr1.cparse + wr1.cSystem + wr1.cRoot + wr1.cPath; // parseSystemRootPath
let cstringToDataType = wr1.cstring + wr1.cTo + wr1.cData + wr1.cType; // stringToDataType
let cstringToBoolean = wr1.cstring + wr1.cTo + wr1.cBoolean; // stringToBoolean
let cdetermineObjectDataType = wr1.cdetermine + wr1.cObject + wr1.cData + wr1.cType; // determineObjectDataType
let cisBoolean = wr1.cis + wr1.cBoolean; // isBoolean
let cisInteger = wr1.cis + wr1.cInteger; // isInteger
let cisFloat = wr1.cis + wr1.cFloat; // isFloat
let cisString = wr1.cis + wr1.cString; // isString
let creplaceDoublePercentWithMessage = wr1.creplace + wr1.cDouble + wr1.cPercent + wr1.cWith + wr1.cMessage; // replaceDoublePercentWithMessage
let cutilitiesReplaceCharacterWithCharacter = wr1.cutilities + wr1.cReplace + wr1.cCharacter + wr1.cWith + wr1.cCharacter; // utilitiesReplaceCharacterWithCharacter

module.exports = {
  // *********************************
  // ArrayParsing rules in order
  // *********************************
  [bas.cc + creplaceCharacterWithCharacter]: creplaceCharacterWithCharacter,
  [bas.cc + cconvertCamelCaseStringToArray]: cconvertCamelCaseStringToArray, // convertCamelCaseStringToArray
  [bas.cc + cgetWordsArrayFromString]: cgetWordsArrayFromString, // getWordsArrayFromString
  [bas.cc + crecombineStringArrayWithSpaces]: crecombineStringArrayWithSpaces, // recombineStringArrayWithSpaces
  [bas.cc + cconvertArrayToCamelCaseString]: cconvertArrayToCamelCaseString, // convertArrayToCamelCaseString
  [bas.cc + cdoesArrayContainLowerCaseConsolidatedString]: cdoesArrayContainLowerCaseConsolidatedString, // doesArrayContainLowerCaseConsolidatedString
  [bas.cc + cdoesArrayContainCharacter]: cdoesArrayContainCharacter, // doesArrayContainCharacter
  [bas.cc + cremoveCharacterFromArray]: cremoveCharacterFromArray, // removeCharacterFromArray
  [bas.cc + cascertainMatchingElements]: cascertainMatchingElements, // ascertainMatchingElements
  [bas.cc + cdoesArrayContainFilename]: cdoesArrayContainFilename, // doesArrayContainFilename
  [bas.cc + cgetLengthOfLongestStringInArray]: cgetLengthOfLongestStringInArray, // getLengthOfLongestStringInArray
  [bas.cc + csearchForPatternsInStringArray]: csearchForPatternsInStringArray, // searchForPatternsInStringArray
  [bas.cc + cvalidatePatternsThatNeedImplementation]: cvalidatePatternsThatNeedImplementation, // validatePatternsThatNeedImplementation
  [bas.cc + csolveLehmerCode]: csolveLehmerCode, // solveLehmerCode
  [bas.cc + crecursiveArrayExpansion]: crecursiveArrayExpansion, // recursiveArrayExpansion
  [bas.cc + cgetLehmerCodeValue]: cgetLehmerCodeValue, // getLehmerCodeValue
  [bas.cc + carraysAreEqual]: carraysAreEqual, // arraysAreEqual
  [bas.cc + cstoreData]: cstoreData, // storeData
  [bas.cc + cgetStoredData]: cgetStoredData, // getStoredData
  [bas.cc + cisObjectEmpty]: cisObjectEmpty, // isObjectEmpty
  [bas.cc + cisArrayEmpty]: cisArrayEmpty, // isArrayEmpty
  [bas.cc + cisObject]: cisObject, // isObject
  [bas.cc + cisArray]: cisArray, // isArray
  [bas.cc + cisArrayOrObject]: cisArrayOrObject, // isArrayOrObject
  [bas.cc + cisNonZeroLengthArray]: cisNonZeroLengthArray, // isNonZeroLengthArray
  [bas.cc + carrayDeepClone]: carrayDeepClone, // arrayDeepClone
  [bas.cc + creplaceCharacterAtIndex]: creplaceCharacterAtIndex, // replaceCharacterAtIndex
  [bas.cc + cgenerateCommandAliases]: cgenerateCommandAliases, // generateCommandAliases
  [bas.cc + caggregateCommandArguments]: caggregateCommandArguments, // aggregateCommandArguments
  [bas.cc + cgetFileAndPathListForPath]: cgetFileAndPathListForPath, // getFileAndPathListForPath
  [bas.cc + cparseColorRangeInputs]: cparseColorRangeInputs, // parseColorRangeInputs
  [bas.cc + cdoesArrayContainValue]: cdoesArrayContainValue, // doesArrayContainValue

  // ********************************
  // StringParsing rules in order
  // ********************************
  [bas.cc + csingleQuoteSwapAfterEquals]: csingleQuoteSwapAfterEquals,
  [bas.cc + cswapForwardSlashToBackSlash]: cswapForwardSlashToBackSlash,
  [bas.cc + cswapBackSlashToForwardSlash]: cswapBackSlashToForwardSlash,
  [bas.cc + cswapDoubleForwardSlashToSingleForwardSlash]: cswapDoubleForwardSlashToSingleForwardSlash,
  [bas.cc + cswapDoubleBackSlashToSingleBackSlash]: cswapDoubleBackSlashToSingleBackSlash,

  // ********************************
  // StringParsingUtilities rules in order
  // ********************************
  [bas.cc + cparseSystemRootPath]: cparseSystemRootPath,
  [bas.cc + cstringToDataType]: cstringToDataType, // stringToDataType
  [bas.cc + cstringToBoolean]: cstringToBoolean, // stringToBoolean
  [bas.cc + cdetermineObjectDataType]: cdetermineObjectDataType, // determineObjectDataType
  [bas.cc + cisBoolean]: cisBoolean, // isBoolean
  [bas.cc + cisInteger]: cisInteger, // isInteger
  [bas.cc + cisFloat]: cisFloat, // isFloat
  [bas.cc + cisString]: cisString, // isString
  [bas.cc + creplaceDoublePercentWithMessage]: creplaceDoublePercentWithMessage,
  [bas.cc + cutilitiesReplaceCharacterWithCharacter]: cutilitiesReplaceCharacterWithCharacter,
};
