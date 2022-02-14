/**
 * @file business.constants.js
 * @module business.constants
 * @description Contains many re-usable business rules constants.
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:phonic.constants
 * @requires module:numeric.constants
 * @requires module:word1.constants
 * @requires module:system.constants
 * @author Seth Hollingsead
 * @date 2021/10/29
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

import * as bas from './basic.constants.js';
import * as gen from './generic.constants.js';
let phn = require('./phonic.constants.js');
let num = require('./numeric.constants.js');
let wr1 = require('./word1.constants.js');
let sys = require('./system.constants.js');

// Business Rules
let cecho = wr1.cecho; // echo
let cEcho = wr1.cEcho; // Echo

// ***********************************************
// ArrayParsing rules in order
// ***********************************************
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

// ***********************************************
// characterGeneration rules in order
// ***********************************************
let crandomlyGenerateMixedCaseLetterOrSpecialCharacter = wr1.crandomly + wr1.cGenerate + wr1.cMixed + wr1.cCase + wr1.cLetter + wr1.cOr + wr1.cSpecial + wr1.cCharacter; // randomlyGenerateMixedCaseLetterOrSpecialCharacter
let crandomlyGenerateUpperCaseLetterOrSpecialCharacter = wr1.crandomly + wr1.cGenerate + wr1.cUpper + wr1.cCase + wr1.cLetter + wr1.cOr + wr1.cSpecial + wr1.cCharacter; // randomlyGenerateUpperCaseLetterOrSpecialCharacter
let crandomlyGenerateLowerCaseLetterOrSpecialCharacter = wr1.crandomly + wr1.cGenerate + wr1.cLower + wr1.cCase + wr1.cLetter + wr1.cOr + wr1.cSpecial + wr1.cCharacter; // randomlyGenerateLowerCaseLetterOrSpecialCharacter
let crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter = wr1.crandomly + wr1.cGenerate + wr1.cEither + wr1.cMixed + wr1.cCase + wr1.cLetter + wr1.cOr + wr1.cNumber + wr1.cOr + wr1.cSpecial + wr1.cCharacter; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter
let crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter = wr1.crandomly + wr1.cGenerate + wr1.cEither + wr1.cUpper + wr1.cCase + wr1.cLetter + wr1.cOr + wr1.cNumber + wr1.cOr + wr1.cSpecial + wr1.cCharacter; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter
let crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter = wr1.crandomly + wr1.cGenerate + wr1.cEither + wr1.cLower + wr1.cCase + wr1.cLetter + wr1.cOr + wr1.cNumber + wr1.cOr + wr1.cSpecial + wr1.cCharacter; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter
let crandomlyGenerateMixedCaseAlphaNumericCharacter = wr1.crandomly + wr1.cGenerate + wr1.cMixed + wr1.cCase + wr1.cAlpha + wr1.cNumeric + wr1.cCharacter; // randomlyGenerateMixedCaseAlphaNumericCharacter
let crandomlyGenerateUpperCaseAlphaNumericCharacter = wr1.crandomly + wr1.cGenerate + wr1.cUpper + wr1.cCase + wr1.cAlpha + wr1.cNumeric + wr1.cCharacter; // randomlyGenerateUpperCaseAlphaNumericCharacter
let crandomlyGenerateLowerCaseAlphaNumericCharacter = wr1.crandomly + wr1.cGenerate + wr1.cLower + wr1.cCase + wr1.cAlpha + wr1.cNumeric + wr1.cCharacter; // randomlyGenerateLowerCaseAlphaNumericCharacter
let crandomlyGenerateNumericCharacter = wr1.crandomly + wr1.cGenerate + wr1.cNumeric + wr1.cCharacter; // randomlyGenerateNumericCharacter
let crandomlyGenerateSpecialCharacter = wr1.crandomly + wr1.cGenerate + wr1.cSpecial + wr1.cCharacter; // randomlyGenerateSpecialCharacter
let crandomlyGenerateNumberInRange = wr1.crandomly + wr1.cGenerate + wr1.cNumber + wr1.cIn + wr1.cRange; // randomlyGenerateNumberInRange
let crandomlyGenerateBooleanValue = wr1.crandomly + wr1.cGenerate + wr1.cBoolean + wr1.cValue; // randomlyGenerateBooleanValue
let crandomlyGenerateMixedCaseAlphabeticCharacter = wr1.crandomly + wr1.cGenerate + wr1.cMixed + wr1.cCase + wr1.cAlphabetic + wr1.cCharacter; // randomlyGenerateMixedCaseAlphabeticCharacter
let crandomlyGenerateLowerCaseLetter = wr1.crandomly + wr1.cGenerate + wr1.cLower + wr1.cCase + wr1.cLetter; // randomlyGenerateLowerCaseLetter
let crandomlyGenerateUpperCaseLetter = wr1.crandomly + wr1.cGenerate + wr1.cUpper + wr1.cCase + wr1.cLetter; // randomlyGenerateUpperCaseLetter
let cconvertNumberToUpperCaseLetter = wr1.cconvert + wr1.cNumber + wr1.cTo + wr1.cUpper + wr1.cCase + wr1.cLetter; // convertNumberToUpperCaseLetter
let cconvertNumberToLowerCaseLetter = wr1.cconvert + wr1.cNumber + wr1.cTo + wr1.cLower + wr1.cCase + wr1.cLetter; // convertNumberToLowerCaseLetter

// ***********************************************
// mathOperations rules in order
// ***********************************************
let chex2rgbConversion = gen.chex + num.c2 + gen.crgb + wr1.cConversion; // hex2rgbConversion

// ***********************************************
// stringGeneration rules in order
// ***********************************************
let cgenerateRandomMixedCaseTextByLength = wr1.cgenerate + wr1.cRandom + wr1.cMixed + wr1.cCase + wr1.cText + wr1.cBy + wr1.cLength; // generateRandomMixedCaseTextByLength
let cgenerateRandomUpperCaseTextByLength = wr1.cgenerate + wr1.cRandom + wr1.cUpper + wr1.cCase + wr1.cText + wr1.cBy + wr1.cLength; // generateRandomUpperCaseTextByLength
let cgenerateRandomLowerCaseTextByLength = wr1.cgenerate + wr1.cRandom + wr1.cLower + wr1.cCase + wr1.cText + wr1.cBy + wr1.cLength; // generateRandomLowerCaseTextByLength
let cgenerateRandomMixedCaseTextWithSpecialCharactersByLength = wr1.cgenerate + wr1.cRandom + wr1.cMixed + wr1.cCase + wr1.cText + wr1.cWith + wr1.cSpecial + wr1.cCharacters + wr1.cBy + wr1.cLength; // generateRandomMixedCaseTextWithSpecialCharactersByLength
let cgenerateRandomUpperCaseTextWithSpecialCharactersByLength = wr1.cgenerate + wr1.cRandom + wr1.cUpper + wr1.cCase + wr1.cText + wr1.cWith + wr1.cSpecial + wr1.cCharacters + wr1.cBy + wr1.cLength; // generateRandomUpperCaseTextWithSpecialCharactersByLength
let cgenerateRandomLowerCaseTextWithSpecialCharactersByLength = wr1.cgenerate + wr1.cRandom + wr1.cLower + wr1.cCase + wr1.cText + wr1.cWith + wr1.cSpecial + wr1.cCharacters + wr1.cBy + wr1.cLength; // generateRandomLowerCaseTextWithSpecialCharactersByLength
let cgenerateRandomMixedCaseAlphaNumericCodeByLength = wr1.cgenerate + wr1.cRandom + wr1.cMixed + wr1.cCase + wr1.cAlpha + wr1.cNumeric + wr1.cCode + wr1.cBy + wr1.cLength; // generateRandomMixedCaseAlphaNumericCodeByLength
let cgenerateRandomUpperCaseAlphaNumericCodeByLength = wr1.cgenerate + wr1.cRandom + wr1.cUpper + wr1.cCase + wr1.cAlpha + wr1.cNumeric + wr1.cCode + wr1.cBy + wr1.cLength; // generateRandomUpperCaseAlphaNumericCodeByLength
let cgenerateRandomLowerCaseAlphaNumericCodeByLength = wr1.cgenerate + wr1.cRandom + wr1.cLower + wr1.cCase + wr1.cAlpha + wr1.cNumeric + wr1.cCode + wr1.cBy + wr1.cLength; // generateRandomLowerCaseAlphaNumericCodeByLength
let cgenerateRandomNumericCodeByLength = wr1.cgenerate + wr1.cRandom + wr1.cNumeric + wr1.cCode + wr1.cBy + wr1.cLength; // generateRandomNumericCodeByLength
let cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength = wr1.cgenerate + wr1.cRandom + wr1.cMixed + wr1.cCase + wr1.cAlpha + wr1.cNumeric + wr1.cCode + wr1.cWith + wr1.cSpecial + wr1.cCharacters + wr1.cBy + wr1.cLength; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength
let cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength = wr1.cgenerate + wr1.cRandom + wr1.cUpper + wr1.cCase + wr1.cAlpha + wr1.cNumeric + wr1.cCode + wr1.cWith + wr1.cSpecial + wr1.cCharacters + wr1.cBy + wr1.cLength; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength
let cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength = wr1.cgenerate + wr1.cRandom + wr1.cLower + wr1.ccase + wr1.cAlpha + wr1.cNuemric + wr1.cCode + wr1.cWith + wr1.cSpecial + wr1.cCharacters + wr1.cBy + wr1.cLength; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength
let cgenerateRandomSpecialCharacterCodeByLength = wr1.cgenerate + wr1.cRandom + wr1.cSpecial + wr1.cCharacter + wr1.cCode + wr1.cBy + wr1.cLength; // generateRandomSpecialCharacterCodeByLength
let cgenerateValidEmail = wr1.cgenerate + wr1.cValid + wr1.cEmail; // generateValidEmail
let cgenerateInvalidEmail = wr1.cgenerate + wr1.cInvalid + wr1.cEmail; // generateInvalidEmail
let cgenerateValidEmailWithSpecificSuffixAndDomainName = wr1.cgenerate + wr1.cValid + wr1.cEmail + wr1.cWith + wr1.cSpecific + wr1.cSuffix + wr1.cAnd + wr1.cDomain + wr1.cName; // generateValidEmailWithSpecificSuffixAndDomainName
let cgenerateRandomValidEmail = wr1.cgenerate + wr1.cRandom + wr1.cValid + wr1.cEmail; // generateRandomValidEmail
let cgenerateInvalidEmailWithSpecificSuffixAndDomainName = wr1.cgenerate + wr1.cInvalid + wr1.cEmail + wr1.cWith + wr1.cSpecific + wr1.cSuffix + wr1.cAnd + wr1.cDomain + wr1.cName; // generateInvalidEmailWithSpecificSuffixAndDomainName
let cgenerateRandomInvalidEmail = wr1.cgenerate + wr1.cRandom + wr1.cInvalid + wr1.cEmail; // generateRandomInvalidEmail
let cgenerateRandomBrightColor = wr1.cgenerate + wr1.cRandom + wr1.cBright + wr1.cColor; // generateRandomBrightColor
let cgenerateRandomDarkColor = wr1.cgenerate + wr1.cRandom + wr1.cDark + wr1.cColor; // generateRandomDarkColor
let cgenerateRandomColor = wr1.cgenerate + wr1.cRandom + wr1.cColor; // generateRandomColor

// ***********************************************
// StringParsing rules in order
// ***********************************************
let csingleQuoteSwapAfterEquals = wr1.csingle + wr1.cQuote + wr1.cSwap + wr1.cAfter + wr1.cEquals; // singleQuoteSwapAfterEquals
let cswapForwardSlashToBackSlash = wr1.cswap + sys.cForwardSlash + bas.cTo + sys.cBackSlash; // swapForwadSlashToBackSlash
let cswapBackSlashToForwardSlash = wr1.cswap + sys.cBackSlash + bas.cTo + sys.cForwardSlash; // swapBackSlashToForwardSlash
let cswapDoubleForwardSlashToSingleForwardSlash = wr1.cswap + wr1.cDouble + sys.cForwardSlash + bas.cTo + wr1.cSingle + sys.cForwardSlash; // swapDoubleForwardSlashToSingleForwardSlash
let cswapDoubleBackSlashToSingleBackSlash = wr1.cswap + wr1.cDouble + sys.cBackSlash + bas.cTo + wr1.cSingle + sys.cBackSlash; // swapDoubleBackSlashToSingleBackSlash
let cgetUserNameFromEmail = wr1.cget + wr1.cUser + wr1.cName + wr1.cFrom + wr1.cEmail; // getUserNameFromEmail
let creplaceSpacesWithPlus = wr1.creplace + wr1.cSpaces + wr1.cWith + wr1.cPlus; // replaceSpacesWithPlus
let creplaceColonWithUnderscore = wr1.creplace + wr1.cColon + wr1.cWith + wr1.cUnderscore; // replaceColonWithUnderscore
let ccleanCarriageReturnFromString = wr1.cclean + wr1.cCarriage + wr1.cReturn + wr1.cFrom + wr1.cString; // cleanCarriageReturnFromString
let cconvertStringToLowerCase = wr1.cconvert + wr1.cString + wr1.cTo + wr1.cLower + wr1.cCase; // convertStringToLowerCase
let cconvertStringToUpperCase = wr1.cconvert + wr1.cString + wr1.cTo + wr1.cUpper + wr1.cCase; // convertStringToUpperCase
let cgetFileNameFromPath = wr1.cget + wr1.cFile + wr1.cName + wr1.cFrom + wr1.cPath; // getFileNameFromPath
let cgetFileExtension = wr1.cget + wr1.cFile + wr1.cExtension; // getFileExtension
let cremoveDotFromFileExtension = wr1.cremove + wr1.cDot + wr1.cFrom + wr1.cFile + wr1.cExtension; // removeDotFromFileExtension
let cremoveFileExtensionFromFileName = wr1.cremove + wr1.cFile + wr1.cExtension + wr1.cFrom + wr1.cFileName; // removeFileExtensionFromFileName
let cgetValueFromAssignmentOperationString = wr1.cget + wr1.cValue + wr1.cFrom + wr1.cAssignment + wr1.cOperation + wr1.cString; // getValueFromAssignmentOperationString
let caggregateNumericalDifferenceBetweenTwoStrings = wr1.caggregate + wr1.cNumerical + wr1.cDifference + wr1.cBetween + wr1.cTwo + wr1.cStrings; // aggregateNumericalDifferenceBetweenTwoStrings
let ccountCamelCaseWords = wr1.ccount + wr1.cCamel + wr1.cCase + wr1.cWords; // countCamelCaseWords
let cdoesStringContainAcronym = wr1.cdoes + wr1.cString + wr1.cContain + wr1.cAcronym; // doesStringContainAcronym
let ccountDelimiterInString = wr1.ccount + wr1.cDelimiter + wr1.cIn + wr1.cString; // countDelimiterInString
let cdetermineWordDelimiter = wr1.cdetermine + wr1.cWord + wr1.cDelimiter; // determineWordDelimiter
let cgetWordCountInString = wr1.cget + wr1.cWord + wr1.cCount + wr1.cIn + wr1.cString; // getWordCountInString
let cdoesStringContainUpperCaseCharacter = wr1.cdoes + wr1.cString + wr1.cContain + wr1.cUpper + wr1.cCase + wr1.cCharacter; // doesStringContainUpperCaseCharacter
let cdoesStringContainLowerCaseCharacter = wr1.cdoes + wr1.cString + wr1.cContain + wr1.cLower + wr1.cCase + wr1.cCharacter; // doesStringContainLowerCaseCharacter
let cisFirstCharacterLowerCase = wr1.cis + wr1.cFirst + wr1.cCharacter + wr1.cLower + wr1.cCase; // isFirstCharacterLowerCase
let cisFirstCharacterUpperCase = wr1.cis + wr1.cFirst + wr1.cCharacter + wr1.cUpper + wr1.cCase; // isFirstCharacterUpperCase
let cisStringList = wr1.cis + wr1.cString + wr1.cList; // isStringList
let cisStringCamelCase = wr1.cis + wr1.cString + wr1.cCamel + wr1.cCase; // isStringCamelCase
let cmapWordToCamelCaseWord = wr1.cmap + wr1.cWord + wr1.cTo + wr1.cCamel + wr1.cCase + wr1.cWord; // mapWordToCamelCaseWord
let csimplifyAndConsolidateString = wr1.csimplify + wr1.cAnd + wr1.cConsolidate + wr1.cString; // simplifyAndConsolidateString
let ccompareSimplifiedAndConsolidatedStrings = wr1.ccompare + wr1.cSimplified + wr1.cAnd + wr1.cConsolidated + wr1.cStrings; // compareSimplifiedAndConsolidatedStrings
let cascertainMatchingFilenames = wr1.cascertain + wr1.cMatching + wr1.cFilenames; // ascertainMatchingFilenames
let cvalidateConstantsDataValidation = wr1.cvalidate + wr1.cConstants + wr1.cData + wr1.cValidation; // validateConstantsDataValidation
let cdetermineConstantsContextQualifiedPrefix = wr1.cdeterine + wr1.cConstants + wr1.cContext + wr1.Qualified + wr1.cPrefix; // determineConstantsContextQualifiedPrefix
let cdetermineSuggestedConstantsValidationLineOfCode = wr1.cdetermine + wr1.cSuggested + wr1.cConstants + wr1.cValidation + wr1.cLine + wr1.cOf + wr1.cCode; // determineSuggestedConstantsValidationLineOfCode
let cvalidateConstantsDataValidationLineItemName = wr1.cvalidate + wr1.cConstants + wr1.cData + wr1.cVaidation + wr1.cLine + wr1.cItem + wr1.cName; // validateConstantsDataValidationLineItemName
let cdoesConstantExist = wr1.cdoes + wr1.cConstant + wr1.cExist; // doesConstantExist
let cgetConstantType = wr1.cget + wr1.cConstant + wr1.cType; // getConstantType
let cgetConstantActualValue = wr1.cget + wr1.cConstant + wr1.cActual + wr1.cValue; // getConstantActualValue
let cgetConstantName = wr1.cget + wr1.cConstant + wr1.cName; // getConstantName
let cfindConstantName = wr1.cfind + wr1.cConstant + wr1.cName; // findConstantName
let cisConstantTypeValid = wr1.cis + wr1.cConstant + wr1.cType + wr1.cValid; // isConstantTypeValid
let cconvertConstantTypeToConstantPrefix = wr1.cconvert + wr1.cConstant + wr1.cType + wr1.cTo + wr1.cConstant + wr1.cPrefix; // convertConstantTypeToConstantPrefix
let cconstantsOptimizedFulfillmentSystem = wr1.cconstants + wr1.cOptimized + wr1.cFulfillment + wr1.cSystem; // constantsOptimizedFulfillmentSystem
let cconstantsFulfillmentSystem = wr1.ccosntants + wr1.cFullfillment + wr1.cSystem; // constantsFulfillmentSystem
let cvalidateConstantsDataValues = wr1.cvalidate + wr1.cConstants + wr1.cData + wr1.cValues; // validateConstantsDataValues
let cisValidCommandNameString = wr1.cis + wr1.cValid + wr1.cCommand + wr1.cName + wr1.cString; // isValidCommandNameString
let cisConstantValid = wr1.cis + wr1.cConstant + wr1.cValid; // isConstantValid
let ccountDuplicateCommandAliases = wr1.ccount + wr1.cDuplicate + wr1.cCommand + wr1.cAliases; // countDuplicateCommandAliases
let cgetDataCatagoryFromDataContextName = wr1.cget + wr1.cData + wr1.cCatagory + wr1.cFrom + wr1.cData + wr1.cContext + wr1.cName; // getDataCatagoryFromDataContextName
let cgetDataCatagoryDetailNameFromDataContextName = wr1.cget + wr1.cData + wr1.cCatagory + wr1.cDetail + wr1.cName + wr1.cFrom + wr1.cData + wr1.cContext + wr1.cName; // getDataCatagoryDetailNameFromDataContextName
let cgetKeywordNameFromDataContextName = wr1.cget + wr1.cKeyword + wr1.cName + wr1.cFrom + wr1.cData + wr1.cContext + wr1.cName; // getKeywordNameFromDataContextName
let cremoveXnumberOfFoldersFromEndOfPath = wr1.cremove + bas.cX + wr1.cnumber + wr1.cOf + wr1.cFolders + wr1.cFrom + wr1.cEnd + wr1.cOf + wr1.cPath; // removeXnumberOfFoldersFromEndOfPath
let cgetFirstTopLevelFolderFromPath = wr1.cget + wr1.cFirst + wr1.cTop + wr1.cLevel + wr1.cFolder + wr1.cFrom + wr1.cPath; // getFirstTopLevelFolderFromPath
let cloadDataFile = wr1.cload + wr1.cData + wr1.cFile; // loadDataFile
let csupportedFileFormatsAre = wr1.csupported + wr1.cFile + wr1.cFormats + wr1.cAre; // supportedFileFormatsAre
let cgetAttributeName = wr1.cget + wr1.cAttribute + wr1.cName; // getAttributeName
let cgetAttributeValue = wr1.cget + wr1.cAttribute + wr1.cValue; // getAttributeValue
let cisOdd = wr1.cis + wr1.cOdd; // isOdd
let cisEven = wr1.cis + wr1.cEven; // isEven
let ccleanCommandInput = wr1.cclean + wr1.cCommand + wr1.cInput; // cleanCommandInput

// ***********************************************
// StringParsingUtiities rules in order
// ***********************************************
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
  // ***********************************************
  // ArrayParsing rules in order
  // ***********************************************
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

  // ***********************************************
  // characterGeneration rules in order
  // ***********************************************
  [bas.cc + crandomlyGenerateMixedCaseLetterOrSpecialCharacter]: crandomlyGenerateMixedCaseLetterOrSpecialCharacter, // randomlyGenerateMixedCaseLetterOrSpecialCharacter
  [bas.cc + crandomlyGenerateUpperCaseLetterOrSpecialCharacter]: crandomlyGenerateUpperCaseLetterOrSpecialCharacter, // randomlyGenerateUpperCaseLetterOrSpecialCharacter
  [bas.cc + crandomlyGenerateLowerCaseLetterOrSpecialCharacter]: crandomlyGenerateLowerCaseLetterOrSpecialCharacter, // randomlyGenerateLowerCaseLetterOrSpecialCharacter
  [bas.cc + crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter]: crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter, // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter
  [bas.cc + crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter]: crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter, // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter
  [bas.cc + crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter]: crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter, // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter
  [bas.cc + crandomlyGenerateMixedCaseAlphaNumericCharacter]: crandomlyGenerateMixedCaseAlphaNumericCharacter, // randomlyGenerateMixedCaseAlphaNumericCharacter
  [bas.cc + crandomlyGenerateUpperCaseAlphaNumericCharacter]: crandomlyGenerateUpperCaseAlphaNumericCharacter, // randomlyGenerateUpperCaseAlphaNumericCharacter
  [bas.cc + crandomlyGenerateLowerCaseAlphaNumericCharacter]: crandomlyGenerateLowerCaseAlphaNumericCharacter, // randomlyGenerateLowerCaseAlphaNumericCharacter
  [bas.cc + crandomlyGenerateNumericCharacter]: crandomlyGenerateNumericCharacter, // randomlyGenerateNumericCharacter
  [bas.cc + crandomlyGenerateSpecialCharacter]: crandomlyGenerateSpecialCharacter, // randomlyGenerateSpecialCharacter
  [bas.cc + crandomlyGenerateNumberInRange]: crandomlyGenerateNumberInRange, // randomlyGenerateNumberInRange
  [bas.cc + crandomlyGenerateBooleanValue]: crandomlyGenerateBooleanValue, // randomlyGenerateBooleanValue
  [bas.cc + crandomlyGenerateMixedCaseAlphabeticCharacter]: crandomlyGenerateMixedCaseAlphabeticCharacter, // randomlyGenerateMixedCaseAlphabeticCharacter
  [bas.cc + crandomlyGenerateLowerCaseLetter]: crandomlyGenerateLowerCaseLetter, // randomlyGenerateLowerCaseLetter
  [bas.cc + crandomlyGenerateUpperCaseLetter]: crandomlyGenerateUpperCaseLetter, // randomlyGenerateUpperCaseLetter
  [bas.cc + cconvertNumberToUpperCaseLetter]: cconvertNumberToUpperCaseLetter, // convertNumberToUpperCaseLetter
  [bas.cc + cconvertNumberToLowerCaseLetter]: cconvertNumberToLowerCaseLetter, // convertNumberToLowerCaseLetter

  // ***********************************************
  // mathOperations rules in order
  // ***********************************************
  [bas.cc + chex2rgbConversion]: chex2rgbConversion, // hex2rgbConversion

  // ***********************************************
  // stringGeneration rules in order
  // ***********************************************
  [bas.cc + cgenerateRandomMixedCaseTextByLength]: cgenerateRandomMixedCaseTextByLength, // generateRandomMixedCaseTextByLength
  [bas.cc + cgenerateRandomUpperCaseTextByLength]: cgenerateRandomUpperCaseTextByLength, // generateRandomUpperCaseTextByLength
  [bas.cc + cgenerateRandomLowerCaseTextByLength]: cgenerateRandomLowerCaseTextByLength, // generateRandomLowerCaseTextByLength
  [bas.cc + cgenerateRandomMixedCaseTextWithSpecialCharactersByLength]: cgenerateRandomMixedCaseTextWithSpecialCharactersByLength, // generateRandomMixedCaseTextWithSpecialCharactersByLength
  [bas.cc + cgenerateRandomUpperCaseTextWithSpecialCharactersByLength]: cgenerateRandomUpperCaseTextWithSpecialCharactersByLength, // generateRandomUpperCaseTextWithSpecialCharactersByLength
  [bas.cc + cgenerateRandomLowerCaseTextWithSpecialCharactersByLength]: cgenerateRandomLowerCaseTextWithSpecialCharactersByLength, // generateRandomLowerCaseTextWithSpecialCharactersByLength
  [bas.cc + cgenerateRandomMixedCaseAlphaNumericCodeByLength]: cgenerateRandomMixedCaseAlphaNumericCodeByLength, // generateRandomMixedCaseAlphaNumericCodeByLength
  [bas.cc + cgenerateRandomUpperCaseAlphaNumericCodeByLength]: cgenerateRandomUpperCaseAlphaNumericCodeByLength, // generateRandomUpperCaseAlphaNumericCodeByLength
  [bas.cc + cgenerateRandomLowerCaseAlphaNumericCodeByLength]: cgenerateRandomLowerCaseAlphaNumericCodeByLength, // generateRandomLowerCaseAlphaNumericCodeByLength
  [bas.cc + cgenerateRandomNumericCodeByLength]: cgenerateRandomNumericCodeByLength, // generateRandomNumericCodeByLength
  [bas.cc + cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength]: cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength, // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength
  [bas.cc + cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength]: cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength, // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength
  [bas.cc + cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength]: cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength, // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength
  [bas.cc + cgenerateRandomSpecialCharacterCodeByLength]: cgenerateRandomSpecialCharacterCodeByLength, // generateRandomSpecialCharacterCodeByLength
  [bas.cc + cgenerateValidEmail]: cgenerateValidEmail, // generateValidEmail
  [bas.cc + cgenerateInvalidEmail]: cgenerateInvalidEmail, // generateInvalidEmail
  [bas.cc + cgenerateValidEmailWithSpecificSuffixAndDomainName]: cgenerateValidEmailWithSpecificSuffixAndDomainName, // generateValidEmailWithSpecificSuffixAndDomainName
  [bas.cc + cgenerateRandomValidEmail]: cgenerateRandomValidEmail, // generateRandomValidEmail
  [bas.cc + cgenerateInvalidEmailWithSpecificSuffixAndDomainName]: cgenerateInvalidEmailWithSpecificSuffixAndDomainName, // generateInvalidEmailWithSpecificSuffixAndDomainName
  [bas.cc + cgenerateRandomInvalidEmail]: cgenerateRandomInvalidEmail, // generateRandomInvalidEmail
  [bas.cc + cgenerateRandomBrightColor]: cgenerateRandomBrightColor, // generateRandomBrightColor
  [bas.cc + cgenerateRandomDarkColor]: cgenerateRandomDarkColor, // generateRandomDarkColor
  [bas.cc + cgenerateRandomColor]: cgenerateRandomColor, // generateRandomColor

  // ***********************************************
  // StringParsing rules in order
  // ***********************************************
  [bas.cc + csingleQuoteSwapAfterEquals]: csingleQuoteSwapAfterEquals,
  [bas.cc + cswapForwardSlashToBackSlash]: cswapForwardSlashToBackSlash,
  [bas.cc + cswapBackSlashToForwardSlash]: cswapBackSlashToForwardSlash,
  [bas.cc + cswapDoubleForwardSlashToSingleForwardSlash]: cswapDoubleForwardSlashToSingleForwardSlash,
  [bas.cc + cswapDoubleBackSlashToSingleBackSlash]: cswapDoubleBackSlashToSingleBackSlash,
  [bas.cc + cgetUserNameFromEmail]: cgetUserNameFromEmail, // getUserNameFromEmail
  [bas.cc + creplaceSpacesWithPlus]: creplaceSpacesWithPlus, // replaceSpacesWithPlus
  [bas.cc + creplaceColonWithUnderscore]: creplaceColonWithUnderscore, // replaceColonWithUnderscore
  [bas.cc + ccleanCarriageReturnFromString]: ccleanCarriageReturnFromString, // cleanCarriageReturnFromString
  [bas.cc + cconvertStringToLowerCase]: cconvertStringToLowerCase, // convertStringToLowerCase
  [bas.cc + cconvertStringToUpperCase]: cconvertStringToUpperCase, // convertStringToUpperCase
  [bas.cc + cgetFileNameFromPath]: cgetFileNameFromPath, // getFileNameFromPath
  [bas.cc + cgetFileExtension]: cgetFileExtension, // getFileExtension
  [bas.cc + cremoveDotFromFileExtension]: cremoveDotFromFileExtension, // removeDotFromFileExtension
  [bas.cc + cremoveFileExtensionFromFileName]: cremoveFileExtensionFromFileName, // removeFileExtensionFromFileName
  [bas.cc + cgetValueFromAssignmentOperationString]: cgetValueFromAssignmentOperationString, // getValueFromAssignmentOperationString
  [bas.cc + caggregateNumericalDifferenceBetweenTwoStrings]: caggregateNumericalDifferenceBetweenTwoStrings, // aggregateNumericalDifferenceBetweenTwoStrings
  [bas.cc + ccountCamelCaseWords]: ccountCamelCaseWords, // countCamelCaseWords
  [bas.cc + cdoesStringContainAcronym]: cdoesStringContainAcronym, // doesStringContainAcronym
  [bas.cc + ccountDelimiterInString]: ccountDelimiterInString, // countDelimiterInString
  [bas.cc + cdetermineWordDelimiter]: cdetermineWordDelimiter, // determineWordDelimiter
  [bas.cc + cgetWordCountInString]: cgetWordCountInString, // getWordCountInString
  [bas.cc + cdoesStringContainUpperCaseCharacter]: cdoesStringContainUpperCaseCharacter, // doesStringContainUpperCaseCharacter
  [bas.cc + cdoesStringContainLowerCaseCharacter]: cdoesStringContainLowerCaseCharacter, // doesStringContainLowerCaseCharacter
  [bas.cc + cisFirstCharacterLowerCase]: cisFirstCharacterLowerCase, // isFirstCharacterLowerCase
  [bas.cc + cisFirstCharacterUpperCase]: cisFirstCharacterUpperCase, // isFirstCharacterUpperCase
  [bas.cc + cisStringList]: cisStringList, // isStringList
  [bas.cc + cisStringCamelCase]: cisStringCamelCase, // isStringCamelCase
  [bas.cc + cmapWordToCamelCaseWord]: cmapWordToCamelCaseWord, // mapWordToCamelCaseWord
  [bas.cc + csimplifyAndConsolidateString]: csimplifyAndConsolidateString, // simplifyAndConsolidateString
  [bas.cc + ccompareSimplifiedAndConsolidatedStrings]: ccompareSimplifiedAndConsolidatedStrings, // compareSimplifiedAndConsolidatedStrings
  [bas.cc + cascertainMatchingFilenames]: cascertainMatchingFilenames, // ascertainMatchingFilenames
  [bas.cc + cvalidateConstantsDataValidation]: cvalidateConstantsDataValidation, // validateConstantsDataValidation
  [bas.cc + cdetermineConstantsContextQualifiedPrefix]: cdetermineConstantsContextQualifiedPrefix, // determineConstantsContextQualifiedPrefix
  [bas.cc + cdetermineSuggestedConstantsValidationLineOfCode]: cdetermineSuggestedConstantsValidationLineOfCode, // determineSuggestedConstantsValidationLineOfCode
  [bas.cc + cvalidateConstantsDataValidationLineItemName]: cvalidateConstantsDataValidationLineItemName, // validateConstantsDataValidationLineItemName
  [bas.cc + cdoesConstantExist]: cdoesConstantExist, // doesConstantExist
  [bas.cc + cgetConstantType]: cgetConstantType, // getConstantType
  [bas.cc + cgetConstantActualValue]: cgetConstantActualValue, // getConstantActualValue
  [bas.cc + cgetConstantName]: cgetConstantName, // getConstantName
  [bas.cc + cfindConstantName]: cfindConstantName, // findConstantName
  [bas.cc + cisConstantTypeValid]: cisConstantTypeValid, // isConstantTypeValid
  [bas.cc + cconvertConstantTypeToConstantPrefix]: cconvertConstantTypeToConstantPrefix, // convertConstantTypeToConstantPrefix
  [bas.cc + cconstantsOptimizedFulfillmentSystem]: cconstantsOptimizedFulfillmentSystem, // constantsOptimizedFulfillmentSystem
  [bas.cc + cconstantsFulfillmentSystem]: cconstantsFulfillmentSystem, // constantsFulfillmentSystem
  [bas.cc + cvalidateConstantsDataValues]: cvalidateConstantsDataValues, // validateConstantsDataValues
  [bas.cc + cisValidCommandNameString]: cisValidCommandNameString, // isValidCommandNameString
  [bas.cc + cisConstantValid]: cisConstantValid, // isConstantValid
  [bas.cc + ccountDuplicateCommandAliases]: ccountDuplicateCommandAliases, // countDuplicateCommandAliases
  [bas.cc + cgetDataCatagoryFromDataContextName]: cgetDataCatagoryFromDataContextName, // getDataCatagoryFromDataContextName
  [bas.cc + cgetDataCatagoryDetailNameFromDataContextName]: cgetDataCatagoryDetailNameFromDataContextName, // getDataCatagoryDetailNameFromDataContextName
  [bas.cc + cgetKeywordNameFromDataContextName]: cgetKeywordNameFromDataContextName, // getKeywordNameFromDataContextName
  [bas.cc + cremoveXnumberOfFoldersFromEndOfPath]: cremoveXnumberOfFoldersFromEndOfPath, // removeXnumberOfFoldersFromEndOfPath
  [bas.cc + cgetFirstTopLevelFolderFromPath]: cgetFirstTopLevelFolderFromPath, // getFirstTopLevelFolderFromPath
  [bas.cc + cloadDataFile]: cloadDataFile, // loadDataFile
  [bas.cc + csupportedFileFormatsAre]: csupportedFileFormatsAre, // supportedFileFormatsAre
  [bas.cc + cgetAttributeName]: cgetAttributeName, // getAttributeName
  [bas.cc + cgetAttributeValue]: cgetAttributeValue, // getAttributeValue
  [bas.cc + cisOdd]: cisOdd, // isOdd
  [bas.cc + cisEven]: cisEven, // isEven
  [bas.cc + ccleanCommandInput]: ccleanCommandInput, // cleanCommandInput

  // ***********************************************
  // StringParsingUtilities rules in order
  // ***********************************************
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
