/**
 * @file business.constants.js
 * @module business.constants
 * @description Contains many re-usable business rules constants.
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:numeric.constants
 * @requires module:phonic.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @author Seth Hollingsead
 * @date 2021/10/29
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './basic.constants.js';
import * as gen from './generic.constants.js';
import * as num from './numeric.constants.js';
import * as phn from './phonic.constants.js';
import * as sys from './system.constants.js';
import * as wr1 from './word1.constants.js';

// Business Rules
export const cecho = wr1.cecho; // echo
export const cEcho = wr1.cEcho; // Echo

// ***********************************************
// ArrayParsing rules in order
// ***********************************************
export const creplaceCharacterWithCharacter = wr1.creplace + wr1.cCharacter + wr1.cWith + wr1.cCharacter; // replaceCharacterWithCharacter
export const cconvertCamelCaseStringToArray = wr1.cconvert + wr1.cCamel + wr1.cCase + wr1.cString + wr1.cTo + wr1.cArray; // convertCamelCaseStringToArray
export const cgetWordsArrayFromString = wr1.cget + wr1.cWords + wr1.cArray + wr1.cFrom + wr1.cString; // getWordsArrayFromString
export const crecombineStringArrayWithSpaces = wr1.crecombine + wr1.cString + wr1.cArray + wr1.cWith + wr1.cSpaces; // recombineStringArrayWithSpaces
export const cconvertArrayToCamelCaseString = wr1.cconvert + wr1.cArray + wr1.cTo + wr1.cCamel + wr1.cCase + wr1.cString; // convertArrayToCamelCaseString
export const cdoesArrayContainLowerCaseConsolidatedString = wr1.cdoes + wr1.cArray + wr1.cContain + wr1.cLower + wr1.cCase + wr1.cConsolidated + wr1.cString; // doesArrayContainLowerCaseConsolidatedString
export const cdoesArrayContainCharacter = wr1.cdoes + wr1.cArray + wr1.cContain + wr1.cCharacter; // doesArrayContainCharacter
export const cremoveCharacterFromArray = wr1.cremove + wr1.cCharacter + wr1.cFrom + wr1.cArray; // removeCharacterFromArray
export const cascertainMatchingElements = wr1.cascertain + wr1.cMatching + wr1.cElements; // ascertainMatchingElements
export const cdoesArrayContainFilename = wr1.cdoes + wr1.cArray + wr1.cContain + wr1.cFilename; // doesArrayContainFilename
export const cgetLengthOfLongestStringInArray = wr1.cget + wr1.cLength + wr1.cOf + wr1.cLongest + wr1.cString + bas.cIn + wr1.cArray; // getLengthOfLongestStringInArray
export const csearchForPatternsInStringArray = wr1.csearch + wr1.cFor + wr1.cPatterns + bas.cIn + wr1.cString + wr1.cArray; // searchForPatternsInStringArray
export const cvalidatePatternsThatNeedImplementation = wr1.cvalidate + wr1.cPatterns + wr1.cThat + wr1.cNeed + wr1.cImplementation; // validatePatternsThatNeedImplementation
export const csolveLehmerCode = wr1.csolve + wr1.cLehmer + wr1.cCode; // solveLehmerCode
export const crecursiveArrayExpansion = wr1.crecursive + wr1.cArray + wr1.cExpansion; // recursiveArrayExpansion
export const cgetLehmerCodeValue = wr1.cget + wr1.cLehmer + wr1.cCode + wr1.cValue; // getLehmerCodeValue
export const carraysAreEqual = wr1.carrays + wr1.cAre + wr1.cEqual; // arraysAreEqual
export const cstoreData = wr1.cstore + wr1.cData; // storeData
export const cgetStoredData = wr1.cget + wr1.cStored + wr1.cData; // getStoredData
export const cisObjectEmpty = wr1.cis + wr1.cObject + wr1.cEmpty; // isObjectEmpty
export const cisArrayEmpty = wr1.cis + wr1.cArray + wr1.cEmpty; // isArrayEmpty
export const cisObject = wr1.cis + wr1.cObject; // isObject
export const cisArray = wr1.cis + wr1.cArray; // isArray
export const cisArrayOrObject = wr1.cis + wr1.cArray + wr1.cOr + wr1.cObject; // isArrayOrObject
export const cisNonZeroLengthArray = wr1.cis + phn.cNon + wr1.cZero + wr1.cLength + wr1.cArray; // isNonZeroLengthArray
export const carrayDeepClone = wr1.carray + wr1.cDeep + wr1.cClone; // arrayDeepClone
export const creplaceCharacterAtIndex = wr1.creplace + wr1.cCharacter + wr1.cAt + wr1.cIndex; // replaceCharacterAtIndex
export const cgenerateCommandAliases = wr1.cgenerate + wr1.cCommand + wr1.cAliases; // generateCommandAliases
export const caggregateCommandArguments = wr1.caggregate + wr1.cCommand + wr1.cArguments; // aggregateCommandArguments
export const cgetFileAndPathListForPath = wr1.cget + wr1.cFile + wr1.cAnd + wr1.cPath + wr1.cList + wr1.cFor + wr1.cPath; // getFileAndPathListForPath
export const cparseColorRangeInputs = wr1.cparse + wr1.cColor + wr1.cRange + wr1.cInputs; // parseColorRangeInputs
export const cdoesArrayContainValue = wr1.cdoes + wr1.cArray + wr1.cContain + wr1.cValue; // doesArrayContainValue

// ***********************************************
// characterGeneration rules in order
// ***********************************************
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter = wr1.crandomly + wr1.cGenerate + wr1.cMixed + wr1.cCase + wr1.cLetter + wr1.cOr + wr1.cSpecial + wr1.cCharacter; // randomlyGenerateMixedCaseLetterOrSpecialCharacter
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter = wr1.crandomly + wr1.cGenerate + wr1.cUpper + wr1.cCase + wr1.cLetter + wr1.cOr + wr1.cSpecial + wr1.cCharacter; // randomlyGenerateUpperCaseLetterOrSpecialCharacter
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter = wr1.crandomly + wr1.cGenerate + wr1.cLower + wr1.cCase + wr1.cLetter + wr1.cOr + wr1.cSpecial + wr1.cCharacter; // randomlyGenerateLowerCaseLetterOrSpecialCharacter
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter = wr1.crandomly + wr1.cGenerate + wr1.cEither + wr1.cMixed + wr1.cCase + wr1.cLetter + wr1.cOr + wr1.cNumber + wr1.cOr + wr1.cSpecial + wr1.cCharacter; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter = wr1.crandomly + wr1.cGenerate + wr1.cEither + wr1.cUpper + wr1.cCase + wr1.cLetter + wr1.cOr + wr1.cNumber + wr1.cOr + wr1.cSpecial + wr1.cCharacter; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter = wr1.crandomly + wr1.cGenerate + wr1.cEither + wr1.cLower + wr1.cCase + wr1.cLetter + wr1.cOr + wr1.cNumber + wr1.cOr + wr1.cSpecial + wr1.cCharacter; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter
export const crandomlyGenerateMixedCaseAlphaNumericCharacter = wr1.crandomly + wr1.cGenerate + wr1.cMixed + wr1.cCase + wr1.cAlpha + wr1.cNumeric + wr1.cCharacter; // randomlyGenerateMixedCaseAlphaNumericCharacter
export const crandomlyGenerateUpperCaseAlphaNumericCharacter = wr1.crandomly + wr1.cGenerate + wr1.cUpper + wr1.cCase + wr1.cAlpha + wr1.cNumeric + wr1.cCharacter; // randomlyGenerateUpperCaseAlphaNumericCharacter
export const crandomlyGenerateLowerCaseAlphaNumericCharacter = wr1.crandomly + wr1.cGenerate + wr1.cLower + wr1.cCase + wr1.cAlpha + wr1.cNumeric + wr1.cCharacter; // randomlyGenerateLowerCaseAlphaNumericCharacter
export const crandomlyGenerateNumericCharacter = wr1.crandomly + wr1.cGenerate + wr1.cNumeric + wr1.cCharacter; // randomlyGenerateNumericCharacter
export const crandomlyGenerateSpecialCharacter = wr1.crandomly + wr1.cGenerate + wr1.cSpecial + wr1.cCharacter; // randomlyGenerateSpecialCharacter
export const crandomlyGenerateNumberInRange = wr1.crandomly + wr1.cGenerate + wr1.cNumber + wr1.cIn + wr1.cRange; // randomlyGenerateNumberInRange
export const crandomlyGenerateBooleanValue = wr1.crandomly + wr1.cGenerate + wr1.cBoolean + wr1.cValue; // randomlyGenerateBooleanValue
export const crandomlyGenerateMixedCaseAlphabeticCharacter = wr1.crandomly + wr1.cGenerate + wr1.cMixed + wr1.cCase + wr1.cAlphabetic + wr1.cCharacter; // randomlyGenerateMixedCaseAlphabeticCharacter
export const crandomlyGenerateLowerCaseLetter = wr1.crandomly + wr1.cGenerate + wr1.cLower + wr1.cCase + wr1.cLetter; // randomlyGenerateLowerCaseLetter
export const crandomlyGenerateUpperCaseLetter = wr1.crandomly + wr1.cGenerate + wr1.cUpper + wr1.cCase + wr1.cLetter; // randomlyGenerateUpperCaseLetter
export const cconvertNumberToUpperCaseLetter = wr1.cconvert + wr1.cNumber + wr1.cTo + wr1.cUpper + wr1.cCase + wr1.cLetter; // convertNumberToUpperCaseLetter
export const cconvertNumberToLowerCaseLetter = wr1.cconvert + wr1.cNumber + wr1.cTo + wr1.cLower + wr1.cCase + wr1.cLetter; // convertNumberToLowerCaseLetter

// ***********************************************
// mathOperations rules in order
// ***********************************************
export const chex2rgbConversion = gen.chex + num.c2 + gen.crgb + wr1.cConversion; // hex2rgbConversion
export const cisOdd = wr1.cis + wr1.cOdd; // isOdd
export const cisEven = wr1.cis + wr1.cEven; // isEven

// ***********************************************
// stringGeneration rules in order
// ***********************************************
export const cgenerateRandomMixedCaseTextByLength = wr1.cgenerate + wr1.cRandom + wr1.cMixed + wr1.cCase + wr1.cText + wr1.cBy + wr1.cLength; // generateRandomMixedCaseTextByLength
export const cgenerateRandomUpperCaseTextByLength = wr1.cgenerate + wr1.cRandom + wr1.cUpper + wr1.cCase + wr1.cText + wr1.cBy + wr1.cLength; // generateRandomUpperCaseTextByLength
export const cgenerateRandomLowerCaseTextByLength = wr1.cgenerate + wr1.cRandom + wr1.cLower + wr1.cCase + wr1.cText + wr1.cBy + wr1.cLength; // generateRandomLowerCaseTextByLength
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength = wr1.cgenerate + wr1.cRandom + wr1.cMixed + wr1.cCase + wr1.cText + wr1.cWith + wr1.cSpecial + wr1.cCharacters + wr1.cBy + wr1.cLength; // generateRandomMixedCaseTextWithSpecialCharactersByLength
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength = wr1.cgenerate + wr1.cRandom + wr1.cUpper + wr1.cCase + wr1.cText + wr1.cWith + wr1.cSpecial + wr1.cCharacters + wr1.cBy + wr1.cLength; // generateRandomUpperCaseTextWithSpecialCharactersByLength
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength = wr1.cgenerate + wr1.cRandom + wr1.cLower + wr1.cCase + wr1.cText + wr1.cWith + wr1.cSpecial + wr1.cCharacters + wr1.cBy + wr1.cLength; // generateRandomLowerCaseTextWithSpecialCharactersByLength
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength = wr1.cgenerate + wr1.cRandom + wr1.cMixed + wr1.cCase + wr1.cAlpha + wr1.cNumeric + wr1.cCode + wr1.cBy + wr1.cLength; // generateRandomMixedCaseAlphaNumericCodeByLength
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength = wr1.cgenerate + wr1.cRandom + wr1.cUpper + wr1.cCase + wr1.cAlpha + wr1.cNumeric + wr1.cCode + wr1.cBy + wr1.cLength; // generateRandomUpperCaseAlphaNumericCodeByLength
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength = wr1.cgenerate + wr1.cRandom + wr1.cLower + wr1.cCase + wr1.cAlpha + wr1.cNumeric + wr1.cCode + wr1.cBy + wr1.cLength; // generateRandomLowerCaseAlphaNumericCodeByLength
export const cgenerateRandomNumericCodeByLength = wr1.cgenerate + wr1.cRandom + wr1.cNumeric + wr1.cCode + wr1.cBy + wr1.cLength; // generateRandomNumericCodeByLength
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength = wr1.cgenerate + wr1.cRandom + wr1.cMixed + wr1.cCase + wr1.cAlpha + wr1.cNumeric + wr1.cCode + wr1.cWith + wr1.cSpecial + wr1.cCharacters + wr1.cBy + wr1.cLength; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength = wr1.cgenerate + wr1.cRandom + wr1.cUpper + wr1.cCase + wr1.cAlpha + wr1.cNumeric + wr1.cCode + wr1.cWith + wr1.cSpecial + wr1.cCharacters + wr1.cBy + wr1.cLength; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength = wr1.cgenerate + wr1.cRandom + wr1.cLower + wr1.cCase + wr1.cAlpha + wr1.cNumeric + wr1.cCode + wr1.cWith + wr1.cSpecial + wr1.cCharacters + wr1.cBy + wr1.cLength; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength
export const cgenerateRandomSpecialCharacterCodeByLength = wr1.cgenerate + wr1.cRandom + wr1.cSpecial + wr1.cCharacter + wr1.cCode + wr1.cBy + wr1.cLength; // generateRandomSpecialCharacterCodeByLength
export const cgenerateValidEmail = wr1.cgenerate + wr1.cValid + wr1.cEmail; // generateValidEmail
export const cgenerateInvalidEmail = wr1.cgenerate + wr1.cInvalid + wr1.cEmail; // generateInvalidEmail
export const cgenerateValidEmailWithSpecificSuffixAndDomainName = wr1.cgenerate + wr1.cValid + wr1.cEmail + wr1.cWith + wr1.cSpecific + wr1.cSuffix + wr1.cAnd + wr1.cDomain + wr1.cName; // generateValidEmailWithSpecificSuffixAndDomainName
export const cgenerateRandomValidEmail = wr1.cgenerate + wr1.cRandom + wr1.cValid + wr1.cEmail; // generateRandomValidEmail
export const cgenerateInvalidEmailWithSpecificSuffixAndDomainName = wr1.cgenerate + wr1.cInvalid + wr1.cEmail + wr1.cWith + wr1.cSpecific + wr1.cSuffix + wr1.cAnd + wr1.cDomain + wr1.cName; // generateInvalidEmailWithSpecificSuffixAndDomainName
export const cgenerateRandomInvalidEmail = wr1.cgenerate + wr1.cRandom + wr1.cInvalid + wr1.cEmail; // generateRandomInvalidEmail
export const cgenerateRandomBrightColor = wr1.cgenerate + wr1.cRandom + wr1.cBright + wr1.cColor; // generateRandomBrightColor
export const cgenerateRandomDarkColor = wr1.cgenerate + wr1.cRandom + wr1.cDark + wr1.cColor; // generateRandomDarkColor
export const cgenerateRandomColor = wr1.cgenerate + wr1.cRandom + wr1.cColor; // generateRandomColor

// ***********************************************
// StringParsing rules in order
// ***********************************************
export const csingleQuoteSwapAfterEquals = wr1.csingle + wr1.cQuote + wr1.cSwap + wr1.cAfter + wr1.cEquals; // singleQuoteSwapAfterEquals
export const cswapForwardSlashToBackSlash = wr1.cswap + sys.cForwardSlash + bas.cTo + sys.cBackSlash; // swapForwadSlashToBackSlash
export const cswapBackSlashToForwardSlash = wr1.cswap + sys.cBackSlash + bas.cTo + sys.cForwardSlash; // swapBackSlashToForwardSlash
export const cswapDoubleForwardSlashToSingleForwardSlash = wr1.cswap + wr1.cDouble + sys.cForwardSlash + bas.cTo + wr1.cSingle + sys.cForwardSlash; // swapDoubleForwardSlashToSingleForwardSlash
export const cswapDoubleBackSlashToSingleBackSlash = wr1.cswap + wr1.cDouble + sys.cBackSlash + bas.cTo + wr1.cSingle + sys.cBackSlash; // swapDoubleBackSlashToSingleBackSlash
export const cgetUserNameFromEmail = wr1.cget + wr1.cUser + wr1.cName + wr1.cFrom + wr1.cEmail; // getUserNameFromEmail
export const creplaceSpacesWithPlus = wr1.creplace + wr1.cSpaces + wr1.cWith + wr1.cPlus; // replaceSpacesWithPlus
export const creplaceColonWithUnderscore = wr1.creplace + wr1.cColon + wr1.cWith + wr1.cUnderscore; // replaceColonWithUnderscore
export const ccleanCarriageReturnFromString = wr1.cclean + wr1.cCarriage + wr1.cReturn + wr1.cFrom + wr1.cString; // cleanCarriageReturnFromString
export const cconvertStringToLowerCase = wr1.cconvert + wr1.cString + wr1.cTo + wr1.cLower + wr1.cCase; // convertStringToLowerCase
export const cconvertStringToUpperCase = wr1.cconvert + wr1.cString + wr1.cTo + wr1.cUpper + wr1.cCase; // convertStringToUpperCase
export const cgetFileNameFromPath = wr1.cget + wr1.cFile + wr1.cName + wr1.cFrom + wr1.cPath; // getFileNameFromPath
export const cgetFileExtension = wr1.cget + wr1.cFile + wr1.cExtension; // getFileExtension
export const cremoveDotFromFileExtension = wr1.cremove + wr1.cDot + wr1.cFrom + wr1.cFile + wr1.cExtension; // removeDotFromFileExtension
export const cremoveFileExtensionFromFileName = wr1.cremove + wr1.cFile + wr1.cExtension + wr1.cFrom + wr1.cFileName; // removeFileExtensionFromFileName
export const cgetValueFromAssignmentOperationString = wr1.cget + wr1.cValue + wr1.cFrom + wr1.cAssignment + wr1.cOperation + wr1.cString; // getValueFromAssignmentOperationString
export const caggregateNumericalDifferenceBetweenTwoStrings = wr1.caggregate + wr1.cNumerical + wr1.cDifference + wr1.cBetween + num.cTwo + wr1.cStrings; // aggregateNumericalDifferenceBetweenTwoStrings
export const ccountCamelCaseWords = wr1.ccount + wr1.cCamel + wr1.cCase + wr1.cWords; // countCamelCaseWords
export const cdoesStringContainAcronym = wr1.cdoes + wr1.cString + wr1.cContain + wr1.cAcronym; // doesStringContainAcronym
export const ccountDelimiterInString = wr1.ccount + wr1.cDelimiter + wr1.cIn + wr1.cString; // countDelimiterInString
export const cdetermineWordDelimiter = wr1.cdetermine + wr1.cWord + wr1.cDelimiter; // determineWordDelimiter
export const cgetWordCountInString = wr1.cget + wr1.cWord + wr1.cCount + wr1.cIn + wr1.cString; // getWordCountInString
export const cdoesStringContainUpperCaseCharacter = wr1.cdoes + wr1.cString + wr1.cContain + wr1.cUpper + wr1.cCase + wr1.cCharacter; // doesStringContainUpperCaseCharacter
export const cdoesStringContainLowerCaseCharacter = wr1.cdoes + wr1.cString + wr1.cContain + wr1.cLower + wr1.cCase + wr1.cCharacter; // doesStringContainLowerCaseCharacter
export const cisFirstCharacterLowerCase = wr1.cis + wr1.cFirst + wr1.cCharacter + wr1.cLower + wr1.cCase; // isFirstCharacterLowerCase
export const cisFirstCharacterUpperCase = wr1.cis + wr1.cFirst + wr1.cCharacter + wr1.cUpper + wr1.cCase; // isFirstCharacterUpperCase
export const cisStringList = wr1.cis + wr1.cString + wr1.cList; // isStringList
export const cisStringCamelCase = wr1.cis + wr1.cString + wr1.cCamel + wr1.cCase; // isStringCamelCase
export const cmapWordToCamelCaseWord = wr1.cmap + wr1.cWord + wr1.cTo + wr1.cCamel + wr1.cCase + wr1.cWord; // mapWordToCamelCaseWord
export const csimplifyAndConsolidateString = wr1.csimplify + wr1.cAnd + wr1.cConsolidate + wr1.cString; // simplifyAndConsolidateString
export const ccompareSimplifiedAndConsolidatedStrings = wr1.ccompare + wr1.cSimplified + wr1.cAnd + wr1.cConsolidated + wr1.cStrings; // compareSimplifiedAndConsolidatedStrings
export const cascertainMatchingFilenames = wr1.cascertain + wr1.cMatching + wr1.cFilenames; // ascertainMatchingFilenames
export const cvalidateConstantsDataValidation = wr1.cvalidate + wr1.cConstants + wr1.cData + wr1.cValidation; // validateConstantsDataValidation
export const cdetermineConstantsContextQualifiedPrefix = wr1.cdeterine + wr1.cConstants + wr1.cContext + wr1.Qualified + wr1.cPrefix; // determineConstantsContextQualifiedPrefix
export const cdetermineSuggestedConstantsValidationLineOfCode = wr1.cdetermine + wr1.cSuggested + wr1.cConstants + wr1.cValidation + wr1.cLine + wr1.cOf + wr1.cCode; // determineSuggestedConstantsValidationLineOfCode
export const cvalidateConstantsDataValidationLineItemName = wr1.cvalidate + wr1.cConstants + wr1.cData + wr1.cVaidation + wr1.cLine + wr1.cItem + wr1.cName; // validateConstantsDataValidationLineItemName
export const cdoesConstantExist = wr1.cdoes + wr1.cConstant + wr1.cExist; // doesConstantExist
export const cgetConstantType = wr1.cget + wr1.cConstant + wr1.cType; // getConstantType
export const cgetConstantActualValue = wr1.cget + wr1.cConstant + wr1.cActual + wr1.cValue; // getConstantActualValue
export const cgetConstantName = wr1.cget + wr1.cConstant + wr1.cName; // getConstantName
export const cfindConstantName = wr1.cfind + wr1.cConstant + wr1.cName; // findConstantName
export const cisConstantTypeValid = wr1.cis + wr1.cConstant + wr1.cType + wr1.cValid; // isConstantTypeValid
export const cconvertConstantTypeToConstantPrefix = wr1.cconvert + wr1.cConstant + wr1.cType + wr1.cTo + wr1.cConstant + wr1.cPrefix; // convertConstantTypeToConstantPrefix
export const cconstantsOptimizedFulfillmentSystem = wr1.cconstants + wr1.cOptimized + wr1.cFulfillment + wr1.cSystem; // constantsOptimizedFulfillmentSystem
export const cconstantsFulfillmentSystem = wr1.ccosntants + wr1.cFullfillment + wr1.cSystem; // constantsFulfillmentSystem
export const cvalidateConstantsDataValues = wr1.cvalidate + wr1.cConstants + wr1.cData + wr1.cValues; // validateConstantsDataValues
export const cisValidCommandNameString = wr1.cis + wr1.cValid + wr1.cCommand + wr1.cName + wr1.cString; // isValidCommandNameString
export const cisConstantValid = wr1.cis + wr1.cConstant + wr1.cValid; // isConstantValid
export const ccountDuplicateCommandAliases = wr1.ccount + wr1.cDuplicate + wr1.cCommand + wr1.cAliases; // countDuplicateCommandAliases
export const cgetDataCatagoryFromDataContextName = wr1.cget + wr1.cData + wr1.cCatagory + wr1.cFrom + wr1.cData + wr1.cContext + wr1.cName; // getDataCatagoryFromDataContextName
export const cgetDataCatagoryDetailNameFromDataContextName = wr1.cget + wr1.cData + wr1.cCatagory + wr1.cDetail + wr1.cName + wr1.cFrom + wr1.cData + wr1.cContext + wr1.cName; // getDataCatagoryDetailNameFromDataContextName
export const cgetKeywordNameFromDataContextName = wr1.cget + wr1.cKeyword + wr1.cName + wr1.cFrom + wr1.cData + wr1.cContext + wr1.cName; // getKeywordNameFromDataContextName
export const cremoveXnumberOfFoldersFromEndOfPath = wr1.cremove + bas.cX + wr1.cnumber + wr1.cOf + wr1.cFolders + wr1.cFrom + wr1.cEnd + wr1.cOf + wr1.cPath; // removeXnumberOfFoldersFromEndOfPath
export const cgetFirstTopLevelFolderFromPath = wr1.cget + num.cFirst + wr1.cTop + wr1.cLevel + wr1.cFolder + wr1.cFrom + wr1.cPath; // getFirstTopLevelFolderFromPath
export const cloadDataFile = wr1.cload + wr1.cData + wr1.cFile; // loadDataFile
export const csaveDataFile = wr1.csave + wr1.cData + wr1.cFile; // saveDataFile
export const csupportedFileFormatsAre = wr1.csupported + wr1.cFile + wr1.cFormats + wr1.cAre; // supportedFileFormatsAre
export const cgetAttributeName = wr1.cget + wr1.cAttribute + wr1.cName; // getAttributeName
export const cgetAttributeValue = wr1.cget + wr1.cAttribute + wr1.cValue; // getAttributeValue
export const ccleanCommandInput = wr1.cclean + wr1.cCommand + wr1.cInput; // cleanCommandInput

// ***********************************************
// StringParsingUtiities rules in order
// ***********************************************
export const cparseSystemRootPath = wr1.cparse + wr1.cSystem + wr1.cRoot + wr1.cPath; // parseSystemRootPath
export const cstringToDataType = wr1.cstring + wr1.cTo + wr1.cData + wr1.cType; // stringToDataType
export const cstringToBoolean = wr1.cstring + wr1.cTo + wr1.cBoolean; // stringToBoolean
export const cdetermineObjectDataType = wr1.cdetermine + wr1.cObject + wr1.cData + wr1.cType; // determineObjectDataType
export const cisBoolean = wr1.cis + wr1.cBoolean; // isBoolean
export const cisInteger = wr1.cis + wr1.cInteger; // isInteger
export const cisFloat = wr1.cis + wr1.cFloat; // isFloat
export const cisString = wr1.cis + wr1.cString; // isString
export const creplaceDoublePercentWithMessage = wr1.creplace + wr1.cDouble + wr1.cPercent + wr1.cWith + wr1.cMessage; // replaceDoublePercentWithMessage
export const cutilitiesReplaceCharacterWithCharacter = wr1.cutilities + wr1.cReplace + wr1.cCharacter + wr1.cWith + wr1.cCharacter; // utilitiesReplaceCharacterWithCharacter
