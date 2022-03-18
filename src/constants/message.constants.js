/**
 * @file message.constants.js
 * @module message-constants
 * @description Contains many re-usable message constants.
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:numeric.constants
 * @requires module:phonic.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @author Seth Hollingsead
 * @date 2021/12/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './basic.constants.js';
import * as gen from './generic.constants.js';
import * as num from './numeric.constants.js';
import * as phn from './phonic.constants.js';
import * as sys from './system.constants.js';
import * as wr1 from './word1.constants.js';

// Logging Constants
export const cBEGIN_Function = wr1.cBEGIN + bas.cSpace + bas.cDoublePercent + bas.cSpace + wr1.cFunction; // BEGIN %% Function
export const cEND_Function = wr1.cEND + bas.cSpace + bas.cDoublePercent + bas.cSpace + wr1.cFunction; // END %% Function
export const cinputData = wr1.cinput + wr1.cData; // inputData
export const cInputData = wr1.cInput + wr1.cData; // InputData
export const cinputMetaData = wr1.cinput + wr1.cMetaData; // inputMetaData
export const cInputMetaData = wr1.cInput + wr1.cMetaData; // InputMetaData
export const cinputDataIs = cinputData + sys.cSpaceIsColonSpace; // input Data is:
export const cinputMetaDataIs = wr1.cinput + wr1.cMetaData + sys.cSpaceIsColonSpace; // input MetaData is:
export const creturnDataIs = wr1.creturn + wr1.cData + sys.cSpaceIsColonSpace; // return Data is:

// System Messages
// // WARNING: No .env file found! Going to default to the DEVELOPMENT ENVIRONMENT!
export const cApplicationWarningMessage1a = wr1.cWARNING + bas.cColon + bas.cSpace + bas.cNo + bas.cSpace + gen.cDotEnv + bas.cSpace + wr1.cFile + bas.cSpace + wr1.cfound + bas.cExclamation + bas.cSpace; // WARNING: No .End File found!
export const cApplicationWarningMessage1b = wr1.cGoing + bas.cSpace + bas.cto + bas.cSpace + wr1.cdefault + bas.cSpace + bas.cto + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cDEVELOPMENT + bas.cSpace + wr1.cENVIRONMENT + bas.cExclamation; // Going to default to the DEVELOPMENT ENVIRONMENT!
export const cCharacterGenerationMessage1 = wr1.ctype + bas.cTo + wr1.cGenerate + sys.cSpaceIsColonSpace; // typeToGenerate is:
export const cCharacterGenerationMessage2 = sys.cGenerateA + bas.cSpace + wr1.cnumber + bas.cDot; // Generate a number.
export const cCharacterGenerationMessage3 = sys.cGenerateA + bas.cSpace + wr1.crandom + bas.cSpace + wr1.cupper + bas.cSpace + wr1.ccase + bas.cSpace + bas.cor + bas.cSpace + wr1.clower + bas.cSpace + wr1.ccase + bas.cSpace + wr1.cletter + bas.cDot; // Generate a random upper case or lower case letter.
export const cCharacterGenerationMessage4 = sys.cGenerateA + bas.cSpace + wr1.cspecial + bas.cSpace + wr1.ccharacter + bas.cDot; // Generate a special character.
export const cCharacterGenerationMessage5 = wr1.cDEFAULT + bas.cColon + bas.cSpace + sys.cGenerateA + bas.cSpace + wr1.crandom + bas.cSpace + wr1.cupper + bas.cSpace + wr1.ccase + bas.cSpace + bas.cor + bas.cSpace + wr1.clower + bas.cSpace + wr1.ccase + bas.cSpace + wr1.cletter + bas.cDot; // DEFAULT: Generate a random upper case or lower case letter.
export const cMathOperationsMessage1 = sys.cbigInteger + sys.cSpaceIsColonSpace; // bigInteger is:
export const cnumberOfCharactersToGenerateIs = sys.cnumberOfCharactersToGenerate + sys.cSpaceIsColonSpace; // numberOfCharactersToGenerate is:
export const cgenerateSpecialCharactersIs = sys.cgenerateSpecialCharacters + sys.cSpaceIsColonSpace; // generateSpecialCharacters is:
export const callowableSpecialCharactersIs = sys.callowableSpecialCharacters + sys.cSpaceIsColonSpace; // allowableSpecialCharacters is:
export const cspecifiedSuffixAndDomainIs = sys.cspecifiedSuffixAndDomain + sys.cSpaceIsColonSpace; // specifiedSuffixAndDomain is:
export const cfailureModeIs = sys.cfailureMode + sys.cSpaceIsColonSpace; // failureMode is:
export const cprefixIs = wr1.cprefix + sys.cSpaceIsColonSpace; // prefix is:
export const csuffixIs = wr1.csuffix + sys.cSpaceIsColonSpace; // suffix is:
export const cWithoutTheAtSymbol = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cSpace + wr1.csymbol + bas.cDot; // Without the @ symbol.
export const cWithoutThePrefix = sys.cWithoutThe + bas.cSpace + wr1.cprefix + bas.cDot; // Without the prefix.
export const cWithoutTheSuffix = sys.cWithoutThe + bas.cSpace + wr1.csuffix + bas.cDot; // Without the suffix.
export const cWithoutTheAtSymbolAndPrefix = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cSpace + sys.candPrefix + bas.cDot; // Without the @ and prefix.
export const cDEFAULTWithoutTheAtSymbolAndPrefix = wr1.cDEFAULT + bas.cColon + bas.cSpace + cWithoutTheAtSymbolAndPrefix // DEFAULT: Without the @ and prefix.
export const cdomainNameIs = wr1.cdomain + wr1.cName + sys.cSpaceIsColonSpace; // domainName is:
export const cnumberOfPrefixCharactersIs = wr1.cnumber + bas.cOf + wr1.cPrefix + wr1.cCharacters + sys.cSpaceIsColonSpace; // numberOfPrefixCharacters is:
export const cnumberOfSuffixCharactersIs = wr1.cnumber + bas.cOf + wr1.cSuffix + wr1.cCharacters + sys.cSpaceIsColonSpace; // numberOfSuffixCharacters is:
export const cWithoutTheDotSymbol = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cSpace + wr1.csymbol + bas.cDot; // Without the . symbol.
export const cWithoutTheAtAndDotSymbols = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cSpace + wr1.cand + bas.cSpace + bas.cDot + bas.cSpace + wr1.csymbols + bas.cDot; // Without the @ and . symbols.
export const cWithoutTheDomainName = sys.cWithoutThe + bas.cSpace + sys.cdomainSpaceName + bas.cDot; // Without the domain name.
export const cWithoutTheAtSymbolAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the @ and domain name.
export const cWithoutTheDotAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the . and domain name.
export const cWithoutTheAtSymbolDotAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + bas.cDot + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the @, . and domain name.
export const cWithoutTheDotAndPrefix = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cSpace + sys.candPrefix + bas.cDot; // Without the . and prefix.
export const cWithoutTheAtSymbolAndSuffix = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cSpace + sys.candSuffix + bas.cDot; // Without the @ and suffix.
export const cWithoutTheDotAndSuffix = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cSpace + sys.candSuffix + bas.cDot; // Without the . and suffix.
export const cWithoutTheAtSymbolDotAndPrefix = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + bas.cDot + bas.cSpace + sys.candPrefix + bas.cDot; // Without the @, . and prefix.
export const cWithoutTheAtSymbolDotAndSuffix = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + bas.cDot + bas.cSpace + sys.candSuffix + bas.cDot; // Without the @, . and suffix.
export const cWithoutTheAtSymbolDotPrefixAndSuffix = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + bas.cDot + bas.cComa + bas.cSpace + wr1.cprefix + bas.cSpace + sys.candSuffix + bas.cDot; // Without the @, ., prefix and suffix.
export const cWithoutThePrefixAndDomainName = sys.cWithoutThe + bas.cSpace + wr1.cprefix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the prefix and domain name.
export const cWithoutTheSuffixAndDomainName = sys.cWithoutThe + bas.cSpace + wr1.csuffix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the suffix and domain name.
export const cWithoutThePrefixAndSuffix = sys.cWithoutThe + bas.cSpace + wr1.cprefix + bas.cSpace + sys.candSuffix + bas.cDot; // Without the prefix and suffix.
export const cWithoutThePrefixSuffixAndDomainName = sys.cWithoutThe + bas.cSpace + wr1.cprefix + bas.cComa + bas.cSpace + wr1.csuffix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the prefix, suffix and domain name.
export const cWithoutTheAtSymbolPrefixAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + wr1.cprefix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the @, prefix and domain name.
export const cWithoutTheDotPrefixAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cComa + bas.cSpace + wr1.cprefix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the ., prefix and domain name.
export const cWithoutTheAtSymbolSuffixAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + wr1.csuffix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the @, suffix and domain name.
export const cWithoutTheDotSuffixAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cComa + bas.cSpace + wr1.csuffix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the ., suffix and domain name.
export const cWithoutTheAtSymbolPrefixSuffixAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + wr1.cprefix + bas.cComa + bas.cSpace + wr1.csuffix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the @, prefix, suffix and domain name.
export const cWithoutTheDotPrefixSuffixAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cComa + bas.cSpace + wr1.cprefix + bas.cComa + bas.cSpace + wr1.csuffix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the ., prefix, suffix and domain name.
export const cWithoutThePrefixSuffixAndAtSymbol = sys.cWithoutThe + bas.cSpace + wr1.cprefix + bas.cComa + bas.cSpace + wr1.csuffix + bas.cSpace + wr1.cname + bas.cAt + bas.cDot; // Without the prefix, suffix and @.
export const cWithoutThePrefixSuffixAndDot = sys.cWithoutThe + bas.cSpace + wr1.cprefix + bas.cComa + bas.cSpace + wr1.csuffix + bas.cSpace + wr1.cand + bas.cSpace + bas.cDot + bas.cDot; // Without the prefix, suffix and ..
export const cIndexOfTheSpace = wr1.cIndex + bas.cSpace + bas.cof + bas.cSpace + wr1.cthe + bas.cSpace; // Index of the
export const cisResolvingAs = bas.cis + bas.cSpace + wr1.cresolving + bas.cSpace + bas.cas + bas.cColon + bas.cSpace; // is resolving as:
export const cparsedStringSpaceTerm = wr1.cparsed + wr1.cString + bas.cSpace + wr1.cterm; // parsedString term
export const cstring1Is = wr1.cstring + num.c1 + sys.cSpaceIsColonSpace; // string1 is:
export const cstring2Is = wr1.cstring + num.c2 + sys.cSpaceIsColonSpace; // string2 is:
export const cvariation0ValueIs = wr1.cvariation + num.c0 + bas.cSpace + wr1.cvalue + sys.cSpaceIsColonSpace; // variation0 value is:
export const cvariation1ValueIs = wr1.cvariation + num.c1 + bas.cSpace + wr1.cvalue + sys.cSpaceIsColonSpace; // variation1 value is:
export const ciValueIs = bas.ci + bas.cSpace + wr1.cvalue + sys.cSpaceIsColonSpace; // i value is:
export const cjValueIs = bas.cj + bas.cSpace + wr1.cvalue + sys.cSpaceIsColonSpace; // j value is:
export const cdeletionCostIs = wr1.cdeletion + wr1.cCost + sys.cSpaceIsColonSpace; // deletionCost is:
export const cinsertionCostIs = wr1.cinsertion + wr1.cCost + sys.cSpaceIsColonSpace; // insertionCost is:
export const csubstitutionCostIs = wr1.csubstitution + wr1.cCost + sys.cSpaceIsColonSpace; // substitutionCost is:
export const ccamelCaseWordCountIs = wr1.ccamel + wr1.cCase + wr1.cWord + wr1.cCount + sys.cSpaceIsColonSpace; // camelCaseWordCount is:
export const ccontainsAcronymIs = wr1.ccontains + wr1.cAcronym + sys.cSpaceIsColonSpace; // containsAcronym is:
export const cspacesCountIs = wr1.cspaces + wr1.cCount + sys.cSpaceIsColonSpace; // spacesCount is:
export const cperiodCountIs = wr1.cperiod + wr1.cCount + sys.cSpaceIsColonSpace; // periodCount is:
export const cdashCountIs = wr1.cdash + wr1.cCount + sys.cSpaceIsColonSpace; // dashCount is:
export const cunderscoreCountIs = wr1.cunderscore + wr1.cCount + sys.cSpaceIsColonSpace; // underscoreCount is:
export const cplusCountIs = wr1.cplus + wr1.cCount + sys.cSpaceIsColonSpace; // plusCount is:
export const cpercentCountIs = wr1.cpercent + wr1.cCount + sys.cSpaceIsColonSpace; // percentCount is:
export const cstringDeltaValueIs = wr1.cstring + gen.cDelta + bas.cSpace + wr1.cvalue + sys.cSpaceIsColonSpace; // stringDelta value is:
export const cFilenamesMatch = wr1.cFilenames + bas.cSpace + wr1.cmatch; // Filenames match
export const cFilenamesDoNotMatch = wr1.cFilenames + bas.cSpace + bas.cdo + bas.cSpace + gen.cnot + bas.cSpace + wr1.cmatch; // Filenames do not match
export const cconstantsLineIs = wr1.cconstants + wr1.cLine + sys.cSpaceIsColonSpace; // constants line is:
export const cArrayElementsMatch = wr1.cArray + bas.cSpace + wr1.celements + bas.cSpace + wr1.cmatch; // Array elements match
export const cArrayElementsDoNotMatch = wr1.cArray + bas.cSpace + wr1.celements + bas.cSpace + bas.cdo + bas.cSpace + gen.cnot + bas.cSpace + wr1.cmatch; // Array elements do not match
export const clineArray2Is = wr1.cline + wr1.cArray + bas.cOpenBracket + num.c2 + bas.cCloseBracket + sys.cSpaceIsColonSpace; // lineArray[2] is:
export const cSuggestedLineOfCodeIs = wr1.cSuggested + bas.cSpace + wr1.cline + bas.cSpace + bas.cof + bas.cSpace + wr1.ccode + sys.cSpaceIsColonSpace; // Suggested line of code is:
export const cErrorUnknownConstantFile = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cUnknown + bas.cSpace + wr1.cconstant + bas.cSpace + wr1.cfile + bas.cDot; // ERROR: Unknown constant file.
export const cconstantsTypesKeysIs = wr1.cconstants + wr1.cTypes + wr1.cKeys + sys.cSpaceIsColonSpace; // constantsTypesKeys is:
export const cconstantTypeKeyIs = wr1.cconstant + wr1.cType + wr1.cKey + sys.cSpaceIsColonSpace; // constantTypeKey is:
export const cconstantTypeValuesIs = wr1.cconstant + wr1.cType + wr1.cValues + sys.cSpaceIsColonSpace; // constantTypeValues is:
export const cconstantsKeysIs = wr1.cconstants + wr1.cKeys + sys.cSpaceIsColonSpace; // constantsKeys is:
export const cconstantKeyIs = wr1.cconstant + wr1.cKey + sys.cSpaceIsColonSpace; // constantKey is:
export const cconstantActualValueIs = wr1.cconstant + wr1.cActual + wr1.cValue + sys.cSpaceIsColonSpace; // constantActualValue is:
export const cconstantNameIs = wr1.cconstant + wr1.cName + sys.cSpaceIsColonSpace; // constantName is:
export const cconstantValueIs = wr1.cconstant + wr1.cValue + sys.cSpaceIsColonSpace; // constantValue is:
export const cdeltaLengthIs = wr1.cdelta + wr1.cLength + sys.cSpaceIsColonSpace; // deltaLength is:
export const crecursiveSubStringIs = wr1.crecursive + wr1.cSubString + sys.cSpaceIsColonSpace; // recursiveSubString is:
export const cmaxStringLengthIs = gen.cmax + wr1.cString + wr1.cLength + sys.cSpaceIsColonSpace; // maxStringLength is:
export const cminStringLengthIs = gen.cmin + wr1.cString + wr1.cLength + sys.cSpaceIsColonSpace; // minStringLength is:
export const ccurrentMasterStringArrayElementIs = sys.ccurrentMasterStringArrayElement + sys.cSpaceIsColonSpace; // currentMasterStringArrayElement is:
export const cConstantDoesNotExist = wr1.cConstant + bas.cSpace + wr1.cdoes + bas.cSpace + gen.cNOT + bas.cSpace + wr1.cexist + bas.cColon + bas.cSpace; // Constant does NOT exist:
export const cConstantDoesExist = wr1.cConstant + bas.cSpace + wr1.cdoes + bas.cSpace + wr1.cexist + bas.cColon + bas.cSpace; // Constant does exist:
export const cBEGIN_ithLoop = wr1.cBEGIN + bas.cSpace + bas.ci + bas.cDash + bas.cth + bas.cSpace + wr1.cloop + bas.cColon + bas.cSpace; // BEGIN i-th loop:
export const cBEGIN_ithIteration = wr1.cBEGIN + bas.cSpace + bas.ci + bas.cDash + bas.cth + bas.cSpace + wr1.citeration + bas.cColon + bas.cSpace; // BEGIN i-th iteration:
export const cBEGIN_jthLoop = wr1.cBEGIN + bas.cSpace + bas.cj + bas.cDash + bas.cth + bas.cSpace + wr1.cloop + bas.cColon + bas.cSpace; // BEGIN j-th loop:
export const cBEGIN_kthIteration = wr1.cBEGIN + bas.cSpace + bas.ck + bas.cDash + bas.cth + bas.cSpace + wr1.citeration + bas.cColon + bas.cSpace; // BEGIN k-th iteration:
export const cEND_ithLoop = wr1.cEND + bas.cSpace + bas.ci + bas.cDash + bas.cth + bas.cSpace + wr1.cloop + bas.cColon + bas.cSpace; // END i-th loop:
export const cEND_ithIteration = wr1.cEND + bas.cSpace + bas.ci + bas.cDash + bas.cth + bas.cSpace + wr1.cIteration + bas.cColon + bas.cSpace; // END i-th iteration:
export const cEND_jthLoop = wr1.cEND + bas.cSpace + bas.cj + bas.cDash + bas.cth + bas.cSpace + wr1.cloop + bas.cColon + bas.cSpace; // END j-th loop:
export const cEND_kthIteration = wr1.cEND + bas.cSpace + bas.ck + bas.cDash + bas.cth + bas.cSpace + wr1.citeration + bas.cColon + bas.cSpace; // END k-th iteration:
export const ccurrentCommandIs = wr1.ccurrent + wr1.cCommand + sys.cSpaceIsColonSpace; // currentCommand is:
export const caliasListIs = wr1.calias + wr1.cList + sys.cSpaceIsColonSpace; // aliasList is:
export const ccurrentAliasIs = wr1.ccurrent + wr1.cAlias + sys.cSpaceIsColonSpace; // currentAlias is:
export const cduplicateAliasCountIs = wr1.cduplicate + wr1.cAlias + wr1.cCount + sys.cSpaceIsColonSpace; // duplicateAliasCount is:
export const cduplicateCommandAliasIs = wr1.cduplicate + bas.cSpace + wr1.cCommand + bas.cSpace + wr1.cAlias + sys.cSpaceIsColonSpace; // duplicate command alias is:
export const ccommandWordAliasesBeforeChangeIs = wr1.ccommand + wr1.cWord + wr1.cAliases + bas.cSpace + wr1.cBEFORE + bas.cSpace + wr1.cCHANGE + sys.cSpaceIsColonSpace; // commandWordAliases BEFORE CHANGE is:
export const ccommandWordAliasesAfterChangeIs = wr1.ccommand + wr1.cWord + wr1.cAliases + wr1.cArray + bas.cSpace + wr1.cAFTER + bas.cSpace + wr1.cCHANGE + sys.cSpaceIsColonSpace; // commandWordAliasesArray AFTER CHANGE is:
export const cmasterCommandWordAlisesArrayIs = wr1.cmaster + wr1.cCommand + wr1.cWord + wr1.cAliases + wr1.cArray + sys.cSpaceIsColonSpace; // masterCommandWordAliasesArray is:
export const cmasterArrayIndexIs = wr1.cmaster + wr1.cArray + wr1.cIndex + sys.cSpaceIsColonSpace; // masterArrayIndex is:
export const cCommandAliasesAre = wr1.cCommand + bas.cSpace + wr1.cAliases + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // Command Aliases are:
export const cexpandedLehmerCodeArrayIs = wr1.cexpanded + sys.cLehmerCodeArray + sys.cSpaceIsColonSpace; // expandedLehmerCodeArray is:
export const cindexOfExpansionIs = wr1.cindex + bas.cOf + wr1.cExpansion + sys.cSpaceIsColonSpace; // indexOfExpansion is:
export const carrayToBeExpandedIs = wr1.carray+ bas.cTo + bas.cBe + wr1.cExpanded + sys.cSpaceIsColonSpace; // arrayToBeExpanded is:
export const climitOfExpansionIs = wr1.climit + bas.cOf + wr1.cExpansion + sys.cSpaceIsColonSpace;  // limitOfExpansion is:
export const cpushingLehmerCodeArray1ToReturnDataValue = wr1.cpushing + bas.cSpace + sys.cLehmerCodeArray + num.c1 + bas.cSpace + bas.cto + bas.cSpace + sys.creturnData + bas.cSpace + wr1.cvalue + bas.cColon + bas.cSpace; // pushing lehmerCodeArray1 to returnData value:
export const creturnDataAfterPushIs = sys.creturnData + bas.cSpace + wr1.cafter + bas.cSpace + wr1.cpush + sys.cSpaceIsColonSpace; // returnData after push is:
export const creturnDataAfterLevel1Is = sys.creturnData + bas.cSpace + wr1.cafter + bas.cSpace + wr1.clevel + bas.cSpace + num.c1 + sys.cSpaceIsColonSpace; // returnData after Level 1 is:
export const carrayToBeExpandedDotLengthIs = wr1.carray + bas.cTo + bas.cBe + wr1.cExpanded + bas.cDot + wr1.clength + sys.cSpaceIsColonSpace; // arrayToBeExpanded.length is:
export const creturnDataDotLengthIs = sys.creturnData + bas.cDot + wr1.cLength + sys.cSpaceIsColonSpace; // returnData.length is:
export const creturnDataBeforePopIs = sys.creturnData + bas.cSpace + wr1.cBEFORE + bas.cSpace + wr1.cPOP + sys.cSpaceIsColonSpace; // returnData BEFORE POP is:
export const creturnDataAfterPopIs = sys.creturnData + bas.cSpace + wr1.cAFTER + bas.cSpace + wr1.cPOP + sys.cSpaceIsColonSpace; // returnData AFTER POP is:
export const cmasterTempReturnDataBeforeRecursiveCallIs = wr1.cmaster + wr1.cTemp + wr1.cReturn + wr1.cData + bas.cSpace + wr1.cBEFORE + bas.cSpace + wr1.crecursive + bas.cSpace + wr1.ccall + sys.cSpaceIsColonSpace; // masterTempReturnData BEFORE recursive call is:
export const ctempReturnData1Is = wr1.ctemp + wr1.cReturn + wr1.cData + num.c1 + sys.cSpaceIsColonSpace; // tempReturnData1 is:
export const ctempReturnData1DotLengthIs = wr1.ctemp + wr1.cReturn + wr1.cData + num.c1 + wr1.clength + sys.cSpaceIsColonSpace; // tempReturnData1.length is:
export const cpushingTempReturnData1Kvalue = wr1.cpushing + bas.cSpace + wr1.ctemp + wr1.cReturn + wr1.cData + num.c1 + bas.cOpenBracket + bas.ck + bas.cCloseBracket + bas.cSpace + wr1.cvalue + bas.cColon + bas.cSpace; // pushing tempReturnData1[k] value:
export const cmasterTempReturnDataAfterRecursiveCallIs = wr1.cmaster + wr1.cTemp + wr1.cReturn + wr1.cData + bas.cSpace + wr1.cAFTER + bas.cSpace + wr1.crecursive + bas.cSpace + wr1.ccall + sys.cSpaceIsColonSpace; // masterTempReturnData AFTER recursive call is:
export const clookupIndexIs = wr1.clookup + wr1.cIndex + sys.cSpaceIsColonSpace; // lookupIndex is:
export const clookupValueIs = wr1.clookup + wr1.cValue + sys.cSpaceIsColonSpace; // lookupValue is:
export const cDataCatagoryShouldBe = wr1.cData + bas.cSpace + wr1.cCatagory + bas.cSpace + wr1.cshould + bas.cSpace + bas.cbe + bas.cColon + bas.cSpace; // Data Catagory should be:
export const cDataCatagoryDetailNameShouldBe = wr1.cData + bas.cSpace + wr1.cCatagory + bas.cSpace + wr1.cDetail + bas.cSpace + wr1.cName + bas.cSpace + wr1.cshould + bas.cSpace + bas.cbe + bas.cColon + bas.cSpace; // Data Catagory Detail Name should be:
export const cKeywordNameShouldBe = wr1.cKeyword + bas.cSpace + wr1.cName + bas.cSpace + wr1.cshould + bas.cSpace + bas.cbe + bas.cColon + bas.cSpace; // Keyword Name should be:
export const cpathElementIs = wr1.cpath + wr1.cElement + sys.cSpaceIsColonSpace; // pathElement is:
export const ccaseIEqual0 = wr1.ccase + bas.cColon + bas.cSpace + bas.ci + bas.cSpace + bas.cEqual + bas.cSpace + num.c0; // case: i = 0
export const ccasePathElementEqual = wr1.ccase + bas.cColon + bas.cSpace + wr1.cpath + wr1.cElement + bas.cSpace + bas.cEqual + bas.cSpace; // case: pathElement =
export const ccaseElse = wr1.ccase + bas.cSpace + wr1.celse; // case else
export const creturnDataSoFarIs = sys.creturnData + bas.cSpace + bas.cso + bas.cSpace + wr1.cfar + sys.cSpaceIsColonSpace; // returnData so far is:
export const cpathArrayIs = wr1.cpath + wr1.cArray + sys.cSpaceIsColonSpace; // pathArray is:
export const ccurrentPathElementIs = wr1.ccurrent + bas.cSpace + wr1.cpath + bas.cSpace + wr1.celement + sys.cSpaceIsColonSpace; // current path element is:
export const cAttemptingToLoadXmlData = wr1.cAttempting + bas.cSpace + bas.cto + bas.cSpace + wr1.cload + bas.cSpace + gen.cXML + bas.cSpace + wr1.cdata + bas.cExclamation; // Attempting to load XML data!
export const cAttemptingToLoadCsvData = wr1.cAttempting + bas.cSpace + bas.cto + bas.cSpace + wr1.cload + bas.cSpace + gen.cCSV + bas.cSpace + wr1.cdata + bas.cExclamation; // Attempting to load CSV data!
export const cAttemptingToLoadJsonData = wr1.cAttempting + bas.cSpace + bas.cto + bas.cSpace + wr1.cload + bas.cSpace + gen.cJSON + bas.cSpace + wr1.cdata + bas.cExclamation; // Attempting to load JSON data!
export const cLoadedDataIs = wr1.cLoaded + bas.cSpace + wr1.cdata + sys.cSpaceIsColonSpace; // Loaded data is:
export const cattributeArrayIs = wr1.cattribute + wr1.cArray + sys.cSpaceIsColonSpace; // attributeArray is:
export const cattributeArray0Is = wr1.cattribute + wr1.cArray + bas.cOpenBracket + num.c0 + bas.cCloseBracket + sys.cSpaceIsColonSpace; // attributeArray[0] is:
export const cattributeArray1Is = wr1.cattribute + wr1.cArray + bas.cOpenBracket + num.c1 + bas.cCloseBracket + sys.cSpaceIsColonSpace; // attributeArray[1] is:
export const carrayIs = wr1.carray + sys.cSpaceIsColonSpace; // array is:
export const cvalueIs = wr1.cvalue + sys.cSpaceIsColonSpace; // value is:
export const cmyFunctionIs = bas.cmy + wr1.cFunction + sys.cSpaceIsColonSpace; // myFunction is:
export const carrayInputObjectIsNotAnArray = wr1.carray + bas.cSpace + wr1.cinput + bas.cSpace + wr1.cobject + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + bas.can + bas.cSpace + wr1.carray + bas.cDot; // array input object is not an array.
export const cTheValueWasFoundInTheArray = wr1.cThe + bas.cSpace + wr1.cvalue + bas.cSpace + wr1.cwas + bas.cSpace + wr1.cfound + bas.cSpace + bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.carray + bas.cDot; // The value was found in the array.
export const cTheValueWasNotFoundInTheArray = wr1.cThe + bas.cSpace + wr1.cvalue + bas.cSpace + wr1.cwas + bas.cSpace + gen.cNOT + bas.cSpace + wr1.cfound + bas.cSpace + bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.carray + bas.cDot; // The value was NOT found in the array.
export const coriginalStringIs = wr1.coriginal + wr1.cString + sys.cSpaceIsColonSpace; // originalString is:
export const cindexIs = wr1.cindex + sys.cSpaceIsColonSpace; // index is:
export const creplacementIs = wr1.creplacement + sys.cSpaceIsColonSpace; // replacement is:
export const cDEPLOY_APPLICATION = wr1.cDEPLOY + bas.cUnderscore + wr1.cAPPLICATION; // DEPLOY APPLICATION
export const cRELEASE_APPLICATION = wr1.cRELEASE + bas.cUnderscore + wr1.cAPPLICATION; // RELEASE APPLICATION
export const cDeploymentWasCompleted = wr1.cDeployment + bas.cSpace + wr1.cwas + bas.cSpace + wr1.ccompleted + bas.cColon + bas.cSpace; // Deployment was completed:
export const cDeploymentFailed = wr1.cDeployment + bas.cSpace + wr1.cfailed; // Deployment failed
export const cReleaseFailed = wr1.cRelease + bas.cSpace + wr1.cfailed; // Release failed
// export const cinputDataIis = cinputData + bas.cOpenBracket + bas.ci + bas.cCloseBracket + sys.cSpaceIsColonSpace; // inputData[i] is:
export const caggregateCommandStringIs = wr1.caggregate + wr1.cCommand + wr1.cString + sys.cSpaceIsColonSpace; // aggregateCommandString is:
export const cmetaDataParametersIs = wr1.cmetaData + wr1.cParameters + sys.cSpaceIsColonSpace; // metaDataParameters is:
export const cmetaDataParametersLengthIs = wr1.cmetaData + wr1.cParameters + bas.cSpace + wr1.cLength + sys.cSpaceIsColonSpace; // metaDataParameters length is:
export const cmetaDataPathAndFilenameIs = wr1.cmetaData + wr1.cPath + wr1.cAnd + wr1.cFilename + sys.cSpaceIsColonSpace; // metaDataPathAndFilename is:
export const cpathAndFilenameIs = wr1.cpath + wr1.cAnd + wr1.cFilename + sys.cSpaceIsColonSpace; // pathAndFilename is:
export const ccontentsAre = wr1.ccontents + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // contents are:
export const ccontentsOfDare = wr1.ccontents + bas.cSpace + bas.cof + bas.cSpace + bas.cD + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // contents of D are:
export const cBEGIN_ithIterationOfInputDataArray = cBEGIN_ithIteration + bas.cof + bas.cSpace + wr1.cthe + bas.cSpace + cinputData + bas.cSpace + wr1.carray + bas.cDot + bas.cSpace + bas.ci + sys.cSpaceIsColonSpace; // Begin the i-th iteration of the inputData array. i is:
export const ccurrentRuleIs = wr1.ccurrent + wr1.cRule + sys.cSpaceIsColonSpace; // currentRule is:
export const crulesIs = wr1.crules + sys.cSpaceIsColonSpace; // rules is:
export const cruleInputDataIs = wr1.crule + cInputData + sys.cSpaceIsColonSpace; // ruleInputData is:
export const cruleInputMetaData = wr1.crule + wr1.cInput + wr1.cMetaData + sys.cSpaceIsColonSpace; // ruleInputMetaData is:
export const cBusinessRuleStartTimeIs = wr1.cBusiness + bas.cSpace + wr1.cRule + bas.cSpace + wr1.cStart + bas.cSpace + wr1.ctime + sys.cSpaceIsColonSpace; // Business Rule Start time is:
export const cBusinessRuleEndTimeIs = wr1.cBusiness + bas.cSpace + wr1.cRule + bas.cSpace + wr1.cEnd + bas.cSpace + wr1.ctime + sys.cSpaceIsColonSpace; // Business Rule End time is:
export const cBusinessRuleRunTimeIs = wr1.cBusiness + wr1.cRule + bas.cSpace + wr1.crun + bas.cDash + wr1.ctime + sys.cSpaceIsColonSpace; // BusinessRule run-time is:
export const ccommandStringBeforeAttemptedDelimiterSwapIs = wr1.ccommand + wr1.cString + bas.cSpace + wr1.cbefore + bas.cSpace + wr1.cattempted + bas.cSpace + wr1.cswap + sys.cSpaceIsColonSpace; // commandString before attempted delimiter swap is:
export const creplaceCharacterWithCharacterRuleIs = wr1.creplace + wr1.cCharacter + wr1.cWith + wr1.cCharacter + wr1.cRule + sys.cSpaceIsColonSpace; // replaceCharacterWithCharacterRule is:
export const cRuleOutputIs = wr1.cRule + bas.cSpace + wr1.coutput + sys.cSpaceIsColonSpace; // Rule output is:
export const ccamelCaseCommandNameArrayIs = wr1.ccamel + wr1.cCase + wr1.cCommand + wr1.cName + wr1.cArray + sys.cSpaceIsColonSpace; // camelCaseCommandNameArray is:
export const ccurrentCommandWordIs = wr1.ccurrent + wr1.cCommand + wr1.cWord + sys.cSpaceIsColonSpace; // current commandWord is:
export const cPARSER_ERROR = wr1.cPARSER + bas.cUnderscore + wr1.cERROR + bas.cColon + bas.cSpace; // PARSER ERROR:
export const ccommandAliasDataStructureIs = wr1.ccommand + wr1.cAlias + wr1.cData + wr1.cStructure + sys.cSpaceIsColonSpace; // commandAliasDataStructure is:
export const cuserDefinedConstantIs = wr1.cuser + wr1.cDefined + wr1.cConstant + sys.cSpaceIsColonSpace; // userDefinedConstant is:
export const cwordCountIs = wr1.cword + wr1.cCount + sys.cSpaceIsColonSpace; // wordCount is:
export const cwordsArrayIs = wr1.cwords + wr1.cArray + sys.cSpaceIsColonSpace; // wordsArray is:
export const cOptimizedConstantDefinitionForWord = wr1.cOptimized + bas.cSpace + wr1.cconstant + bas.cSpace + wr1.cdefinition + bas.cSpace + wr1.cfor + bas.cSpace + wr1.cword + bas.cColon + bas.cSpace; // Optimized constant definition for word:
export const cuserDefinedConstantListIs = wr1.cuser + wr1.cDefined + wr1.cConstants + wr1.cList + sys.cSpaceIsColonSpace; // userDefinedConstantList is:
export const cuserDefinedConstantListContainsComas = wr1.cuser + wr1.cDefined + wr1.cConstants + wr1.cList + bas.cSpace + wr1.ccontains + bas.cSpace + wr1.ccomas; // userDefinedConstantList contains comas
export const cuserDefinedConstantsListArrayIs = wr1.cuser + wr1.cDefined + wr1.cConstants + wr1.cList + wr1.cArray + sys.cSpaceIsColonSpace; // userDefinedConstantsListArray is:
export const cuserDefinedConstantsListDoesNotContainComas = wr1.cuser + wr1.cDefined + wr1.cConstant + wr1.cList + bas.cSpace + wr1.cDOES + bas.cSpace + gen.cNOT + bas.cSpace + wr1.ccontain + bas.cSpace + wr1.ccomas; // userDefinedConstantList DOES NOT contain comas
export const ccommonPatternsArrayIs = wr1.ccommon + wr1.cPatterns + wr1.cArray + sys.cSpaceIsColonSpace; // commonPatternsArray is:
export const cbusinessRuleCounterIs = wr1.cbusiness + wr1.cRule + wr1.cCounter + sys.cSpaceIsColonSpace; // businessRuleCounter is:
export const cbusinessRulePerformanceSumIs = wr1.cbusiness + wr1.cRule + wr1.cPerformance + wr1.cSum + sys.cSpaceIsColonSpace; // businessRulePerformanceSum is:
export const cDoneBusinessRulePerformanceSumIs = wr1.cDONE + bas.cExclamation + bas.cSpace + cbusinessRulePerformanceSumIs; // DONE! businessRulePerformanceSum is:
export const caverageIs = wr1.caverage + sys.cSpaceIsColonSpace; // average is:
export const cbusinessRulePerformanceStdSumIs = wr1.cbusiness + wr1.cRule + wr1.cPerformance + phn.cStd + wr1.cSum + sys.cSpaceIsColonSpace; // businessRulePerformanceStdSum is:
export const cDoneBusinessRulePerformanceStdSumIs = wr1.cDONE + bas.cExclamation + bas.cSpace + cbusinessRulePerformanceStdSumIs; // DONE! businessRulePerformanceStdSum is:
export const cstandardDevIs = wr1.cstandard + phn.cDev + sys.cSpaceIsColonSpace; // standardDev is:
export const ccommandCounterIs = wr1.ccommand + wr1.cCounter + sys.cSpaceIsColonSpace; // commandCounter is:
export const ccommandPerformanceSumIs = wr1.ccommand + wr1.cPerformance + wr1.cSum + sys.cSpaceIsColonSpace; // commandPerformanceSum is:
export const cDoneCommandPerformanceSumIs = wr1.cDONE + bas.cExclamation + bas.cSpace + ccommandPerformanceSumIs; // DONE! commandPerformanceSum is:
export const ccommandPerformanceStdSumIs = wr1.ccommand + wr1.cPerformance + phn.cStd + wr1.cSum + sys.cSpaceIsColonSpace; // commandPerformanceStdSum is:
export const cDoneCommandPerformanceStdSumIs = wr1.cDONE + bas.cExclamation + bas.cSpace + ccommandPerformanceStdSumIs; // DONE! commandPerformanceStdSum is:
export const ccolorKeysIs = wr1.ccolor + wr1.cKeys + sys.cSpaceIsColonSpace; // colorKeys is:
export const ccurrentColorNameIs = wr1.ccurrent + wr1.cColor + wr1.cName + sys.cSpaceIsColonSpace; // currentColorName is:
export const ccurrentColorObjectIs = wr1.ccurrent + wr1.cColor + wr1.cObject + sys.cSpaceIsColonSpace; // currentColorObject is:
export const ccurrentColorHexValueIs = wr1.ccurrent + wr1.cColor + phn.cHex + wr1.cValue + sys.cSpaceIsColonSpace; // currentColorHexValue is:
export const cruleOutputIs = wr1.crule + wr1.cOutput + sys.cSpaceIsColonSpace; // ruleOutput is:
export const cBeginPhase1ConstantsValidation = wr1.cBEGIN + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cValidation; // BEGIN Phase 1 Constants Validation
export const cEndPhase1ConstantsValidation = wr1.cEND + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cValidation; // END Phase 1 Constants Validation
export const cBeginPhase2ConstantsValidation = wr1.cBEGIN + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cValidation; // BEGIN Phase 2 Constants Validation
export const cEndPhase2ConstantsValidation = wr1.cEND + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cValidation; // END Phase 2 Constants Validation
export const cconstantsPathIs = wr1.cconstants + wr1.cPath + sys.cSpaceIsColonSpace; // constantsPath is:
export const cresolvedConstantsPath_BasicIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cBasic + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Basic is:
export const cresolvedConstantsPath_BusinessIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cBusiness + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Business is:
export const cresolvedConstantsPath_ColorIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cColor + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Color is:
export const cresolvedConstantsPath_CommandIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cCommand + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Command is:
export const cresolvedConstantsPath_ConfigurationIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cConfiguration + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Configuration is:
export const cresolvedConstantsPath_CountryIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cCountry + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Country Is:
export const cresolvedConstantsPath_ElementIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cElement + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Element is:
export const cresolvedConstantsPath_GenericIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cGeneric + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Generic is:
export const cresolvedConstantsPath_IsotopeIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cIsotope + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Isotope is:
export const cresolvedConstantsPath_KnotIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cKnot + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Knot is:
export const cresolvedConstantsPath_LanguageIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cLanguage + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Language is:
export const cresolvedConstantsPath_MessageIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cMessage + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Messages is:
export const cresolvedConstantsPath_NumericIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cNumeric + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Numeric is:
export const cresolvedConstantsPath_PhonicIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cPhonic + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Phonic is:
export const cresolvedConstantsPath_ShapeIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cShape + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Shape is:
export const cresolvedConstantsPath_SystemIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cSystem + sys.cSpaceIsColonSpace; // resolvedConstantsPath_System is:
export const cresolvedConstantsPath_UnitIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cUnit + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Unit is:
export const cresolvedConstantsPath_WordIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cWord + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Word is:
export const cBasicConstantsPhase1Validation = wr1.cBasic + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Basic Constants Phase 1 Validation
export const cBusinessConstantsPhase1Validation = wr1.cBusiness + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Business Constants Phase 1 Validation
export const cColorConstantsPhase1Validation = wr1.cColor + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Color Constants Phase 1 Validation
export const cCommandConstantsPhase1Validation = wr1.cCommand + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Command Constants Phase 1 Validation
export const cConfigurationConstantsPhase1Validation = wr1.cConfiguration + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Configuration Constants Phase 1 Validation
export const cCountryConstantsPhase1Validation = wr1.cCountry + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Country Constants Phase 1 Validation
export const cElementConstantsPhase1Validation = wr1.cElement + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Element Constants Phase 1 Validation
export const cGenericConstantsPhase1Validation = wr1.cGeneric + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Generic Constants Phase 1 Validation
export const cIsotopeConstantsPhase1Validation = wr1.cIsotope + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Isotope Constants Phase 1 Validation
export const cKnotConstantsPhase1Validation = wr1.cKnot + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Knot Constants Phase 1 Validation
export const cLanguageConstantsPhase1Validation = wr1.cLanguage + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Language Constants Phase 1 Validation
export const cMessageConstantsPhase1Validation = wr1.cMessage + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Message Constants Phase 1 Validation
export const cNumericalConstantsPhase1Validation = wr1.cNumerical + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Numerical Constants Phase 1 Validation
export const cPhonicConstantsPhase1Validation = wr1.cPhonic + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Phonic Constants Phase 1 Validation
export const cShapeConstantsPhase1Validation = wr1.cShape + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Shape Constants Phase 1 Validation
export const cSystemConstantsPhase1Validation = wr1.cSystem + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // System Constants Phase 1 Validation
export const cUnitConstantsPhase1Validation = wr1.cUnit + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Unit Constants Phase 1 Validation
export const cWordConstantsPhase1Validation = wr1.cWord + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Word Constants Phase 1 Validation
export const cBasicConstantsPhase2Validation = wr1.cBasic + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Basic Constants Phase 2 Validation
export const cBusinessConstantsPhase2Validation = wr1.cBusiness + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Business Constants Phase 2 Validation
export const cColorConstantsPhase2Validation = wr1.cColor + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Color Constants Phase 2 Validation
export const cCommandConstantsPhase2Validation = wr1.cCommand + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Command Constants Phase 2 Validation
export const cConfigurationConstantsPhase2Validation = wr1.cConfiguration + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Configuration Constants Phase 2 Validation
export const cCountryConstantsPhase2Validation = wr1.cCountry + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Country Constants Phase 2 Validation
export const cElementConstantsPhase2Validation = wr1.cElement + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Element Constants Phase 2 Validation
export const cGenericConstantsPhase2Validation = wr1.cGeneric + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Generic Constants Phase 2 Validation
export const cIsotopeConstantsPhase2Validation = wr1.cIsotope + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Isotope Constants Phase 2 Validation
export const cKnotConstantsPhase2Validation = wr1.cKnot + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Knot Constants Phase 2 Validation
export const cLanguageConstantsPhase2Validation = wr1.cLanguage + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Language Constants Phase 2 Validation
export const cMessageConstantsPhase2Validation = wr1.cMessage + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Message Constants Phase 2 Validation
export const cNumericalConstantsPhase2Validation = wr1.cNumerical + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Numerical Constants Phase 2 Validation
export const cPhonicConstantsPhase2Validation = wr1.cPhonic + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Phonic Constants Phase 2 Validation
export const cShapeConstantsPhase2Validation = wr1.cShape + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Shape Constants Phase 2 Validation
export const cSystemConstantsPhase2Validation = wr1.cSystem + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // System Constants Phase 2 Validation
export const cUnitConstantsPhase2Validation = wr1.cUnit + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Unit Constants Phase 2 Validation
export const cWordConstantsPhase2Validation = wr1.cWord + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Word Constants Phase 2 Validation
export const ccommandStringIs = wr1.ccommand + wr1.cString + sys.cSpaceIsColonSpace; // commandString is:
export const ccommandDelimiterIs = wr1.ccommand + wr1.cDelimiter + sys.cSpaceIsColonSpace; // commandDelimiter is:
export const ccommandToExecuteBeforeTheAliasIs = wr1.ccommand + bas.cTo + wr1.cExecute + bas.cSpace + wr1.cbefore + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cAlias + sys.cSpaceIsColonSpace; // commandToExecute before the Alias is:
export const ccommandToExecuteAfterTheAliasIs = wr1.ccommand + bas.cTo + wr1.cExecute + bas.cSpace + wr1.cafter + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cAlias + sys.cSpaceIsColonSpace; // commandToExecute after the Alias is:
export const cWarningTheSpecifiedCommand = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cThe + bas.cSpace + wr1.cspecified + bas.cSpace + wr1.ccommand + bas.cColon + bas.cSpace; // WARNING: The specified command:
export const cdoesNotExistPleaseTryAgain = bas.cSpace + wr1.cdoes + bas.cSpace + gen.cnot + bas.cSpace + wr1.cexist + bas.cComa + bas.cSpace + wr1.cplease + bas.cSpace + wr1.ctry + bas.cSpace + wr1.cagain + bas.cExclamation; // does not exist, please try again!
export const ccommandStringContainsEitherSingleQuoteOrBackTickQuote = wr1.ccommand + wr1.cString + bas.cSpace + wr1.ccontains + bas.cSpace + wr1.ceither + bas.cSpace + bas.ca + bas.cSpace + wr1.csingle + wr1.cQuote + bas.cSpace + bas.cor + bas.cSpace + bas.ca + bas.cSpace + wr1.cback + wr1.cTick + wr1.cQuote; // commandString contains either a singleQuote or a backTickQuote
export const ccommandStringContainsSingleQuote = wr1.ccommand + wr1.cString + bas.cSpace + wr1.ccontains + bas.cSpace + bas.ca + bas.cSpace + wr1.csingle + wr1.cQuote + bas.cExclamation; // commandString contains a singleQuote!
export const cnumberOfSingleQuotesIsEven = wr1.cnumber + bas.cOf + wr1.cSingle + wr1.cQuotes + bas.cSpace + bas.cis + bas.cSpace + bas.cGreaterThan + bas.cEqual + bas.cSpace + num.c2 + bas.cSpace + bas.cAndPersand + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cnumber + bas.cOf + wr1.cSingle + wr1.cQuotes + bas.cSpace + bas.cis + bas.cSpace + wr1.cEVEN + bas.cExclamation + bas.cSpace + wr1.cYAY + bas.cExclamation; // numberOfSingleQuotes is >= 2 & the numberOfSingleQuotes is EVEN! YAY!
export const cFirstIndexIs = num.cFirst + bas.cSpace + wr1.cindex + sys.cSpaceIsColonSpace; // First index is:
export const ccommandStringAfterTaggingTheFirstStringDelimiter = wr1.ccommand + wr1.cString + bas.cSpace + wr1.cafter + bas.cSpace + wr1.ctagging + bas.cSpace + wr1.cthe + bas.cSpace + num.cfirst + bas.cSpace + wr1.cstring + bas.cSpace + wr1.cdelimiter + bas.cColon + bas.cSpace; // commandString after tagging the first string delimiter:
export const cAdditionalIndexIs = wr1.cAdditional + bas.cSpace + wr1.cindex + sys.cSpaceIsColonSpace; // Additional index is:
export const coddIndex = wr1.codd + bas.cSpace + wr1.cindex; // odd index
export const cevenIndex = wr1.ceven + bas.cSpace + wr1.cindex; // even index
export const ccommandStringAfterTaggingAnOddStringDelimiter = wr1.ccommand + wr1.cString + bas.cSpace + wr1.cafter + bas.cSpace + wr1.ctagging + bas.cSpace + bas.can + bas.cSpace + wr1.codd + bas.cSpace + wr1.cstring + bas.cSpace + wr1.cdelimiter + bas.cColon + bas.cSpace; // commandString after tagging an odd string delimiter:
export const ccommandStringAfterTaggingAnEvenStringDelimiter = wr1.ccommand + wr1.cString + bas.cSpace + wr1.cafter + bas.cSpace + wr1.ctagging + bas.cSpace + bas.can + bas.cSpace + wr1.ceven + bas.cSpace + wr1.cstring + bas.cSpace + wr1.cdelimiter + bas.cColon + bas.cSpace; // commandString after tagging an even string delimiter:
export const cpreSplitCommandStringIs = phn.cpre + wr1.cSplit + wr1.cCommand + wr1.cString + sys.cSpaceIsColonSpace; // preSplitCommandString is:
export const cpostSplitCommandStringIs = wr1.cpost + wr1.cSplit + wr1.cCommand + wr1.cString + bas.cOpenBracket + bas.ck + bas.cCloseBracket + sys.cSpaceIsColonSpace; // postSplitCommandString[k] is:
export const cpreSplitCommandStringElementIs = phn.cpre + wr1.cSplit + wr1.cCommand + wr1.cString + wr1.cElement + sys.cSpaceIsColonSpace; // preSplitCommandStringElement is:
export const cDoingStraightSplitCommandString = wr1.cDoing + bas.cSpace + bas.ca + bas.cSpace + wr1.cstraight + bas.cSpace + wr1.csplit + bas.cSpace + bas.cof + bas.cSpace + wr1.cthe + bas.cSpace + wr1.ccommand + wr1.cString + bas.cColon + bas.cSpace; // Doing a straight split of the commandString:
export const cCommandStartTimeIs = wr1.cCommand + bas.cSpace + wr1.cStart + bas.cSpace + wr1.ctime + sys.cSpaceIsColonSpace; // Command Start time is:
export const cCommandEndTimeIs = wr1.cCommand + bas.cSpace + wr1.cEnd + bas.cSpace + wr1.ctime + sys.cSpaceIsColonSpace; // Command End time is:
export const cCommandRunTimeIs = wr1.cCommand + bas.cSpace + wr1.crun + bas.cDash + wr1.ctime + sys.cSpaceIsColonSpace; // Command run-time is:
export const ccommandAliasesFilePathConfigurationNameIs = wr1.ccommand + wr1.cAliases + wr1.cFile + wr1.cPath + wr1.cConfiguration + wr1.cName + sys.cSpaceIsColonSpace; // commandAliasesFilePathConfigurationName is:
export const ccommandIs = wr1.ccommand + sys.cSpaceIsColonSpace; // command is:
export const ccommandToExecuteIs = wr1.ccommand + bas.cTo + wr1.cExecute + sys.cSpaceIsColonSpace; // commandToExecute is:
export const ccommandArgsIs = wr1.ccommand + gen.cArgs + sys.cSpaceIsColonSpace; // commandArgs is:
export const celseClauseLookingForCommandAliases = wr1.celse + bas.cDash + wr1.cclause + bas.cSpace + wr1.clooking + bas.cSpace + wr1.cfor + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.caliases + bas.cDot; // else-clause looking for command aliases.
export const callCommandAliasesIs = wr1.call + wr1.cCommand + wr1.cAliases + sys.cSpaceIsColonSpace; // allCommandAliases is:
export const ccontextNameIs = wr1.ccontext + wr1.cName + sys.cSpaceIsColonSpace; // contextName is:
export const callXmlDataIs = wr1.call + gen.cXml + wr1.cData + sys.cSpaceIsColonSpace; // allXmlData is:
export const cdataPathConfigurationNameIs = wr1.cdata + wr1.cPath + wr1.cConfiguration + wr1.cName + sys.cSpaceIsColonSpace; // dataPathConfigurationName is:
export const cdataPathIs = wr1.cdata + wr1.cPath + sys.cSpaceIsColonSpace; // dataPath is:
export const cfilesFoundIs = wr1.cfiles + wr1.cFound + sys.cSpaceIsColonSpace; // filesFound is:
export const cfileToLoadIs = wr1.cfile + wr1.cTo + wr1.cLoad + sys.cSpaceIsColonSpace; // fileToLoad is:
export const cfilesToLoadIs = wr1.cfiles + wr1.cTo + wr1.cLoad + sys.cSpaceIsColonSpace; // filesToLoad is:
export const cdataFileToMergeIs = wr1.cdata + wr1.cFile + bas.cSpace + bas.cTo + bas.cSpace + wr1.cmerge + sys.cSpaceIsColonSpace; // dataFile to merge is:
export const cparsedDataFileIs = wr1.cparsed + wr1.cData + wr1.cFile + sys.cSpaceIsColonSpace; // parsedDataFile is:
export const cexecuteBusinessRules = wr1.cexecute + bas.cSpace + wr1.cbusiness + bas.cSpace + wr1.crules + bas.cColon + bas.cSpace; // execute business rules:
export const cdataFileIs = wr1.cdata + wr1.cFile + sys.cSpaceIsColonSpace; // dataFile is:
export const cmergedDataIs = wr1.cmerged + wr1.cData + sys.cSpaceIsColonSpace; // mergedData is:
export const cdebugConfigurationSettingValueIs = wr1.cdebug + wr1.cConfiguration + wr1.cSetting + wr1.cValue + sys.cSpaceIsColonSpace; // debugConfigurationSettingValue is:
export const cclientRootPathIs = wr1.cclient + wr1.cRoot + wr1.cPath + sys.cSpaceIsColonSpace; // clientRootPath is:
export const cappConfigResourcesPathIs = phn.capp + wr1.cConfig + wr1.cResources + wr1.cPath + sys.cSpaceIsColonSpace; // appConfigResourcesPath is:
export const cappConfigReferencePathIs = phn.capp + wr1.cConfig + wr1.cReference + wr1.cPath + sys.cSpaceIsColonSpace; // appConfigReferencePath is:
export const cclientMetaDataPathIs = wr1.cclient + wr1.cMetaData + wr1.cPath + sys.cSpaceIsColonSpace; // clientMetaDataPath is:
export const cclientCommandAliasesPathIs = wr1.cclient + wr1.cCommand + wr1.cAliases + wr1.cPath + sys.cSpaceIsColonSpace; // clientCommandAliasesPath is:
export const cclientWorkflowsPathIs = wr1.cclient + wr1.cWorkflows + wr1.cPath + sys.cSpaceIsColonSpace; // clientWorkflowsPath is:
export const cframeworkRootPathIs = wr1.cframework + wr1.cRoot + wr1.cPath + sys.cSpaceIsColonSpace; // frameworkRootPath is:
export const cappConfigPathIs = phn.capp + wr1.cConfig + wr1.cPath + sys.cSpaceIsColonSpace; // appConfigPath is:
export const cframeworkResourcesPathIs = wr1.cframework + wr1.cResources + wr1.cPath + sys.cSpaceIsColonSpace; // frameworkResourcesPath is:
export const cframeworkFullMetaDataPathIs = wr1.cframework + wr1.cFull + wr1.cMetaData + wr1.cPath + sys.cSpaceIsColonSpace; // frameworkFullMetaDataPath is:
export const cframeworkConfigPathIs = wr1.cframework + wr1.cConfig + wr1.cPath + sys.cSpaceIsColonSpace; // frameworkConfigPath is:
export const cframeworkCommandAliasesPathIs = wr1.cframework + wr1.cCommand + wr1.cAliases + wr1.cPath + sys.cSpaceIsColonSpace; // frameworkCommandAliasesPath is:
export const cframeworkWorkflowsPathIs = wr1.cframework + wr1.cWorkflows + wr1.cPath + sys.cSpaceIsColonSpace; // frameworkWorkflowsPath is:
export const ccommandAliasesPathIs = wr1.ccommand + wr1.cAliases + wr1.cPath + sys.cSpaceIsColonSpace; // commandAliasesPath is:
export const cworkflowPathIs = wr1.cworkflow + wr1.cPath + sys.cSpaceIsColonSpace; // workflowPath is:
export const cALL_DATA_IS = wr1.cALL + bas.cSpace + wr1.cDATA + bas.cSpace + wr1.cIS + bas.cColon + bas.cSpace; // ALL DATA is:
export const cAllLoadedDataIs = wr1.cAll + bas.cSpace + wr1.cloaded + bas.cSpace + wr1.cdata + sys.cSpaceIsColonSpace; // All loaded data is:
export const cconfigDataIs = wr1.cconfig + wr1.cData + sys.cSpaceIsColonSpace; // configData is:
export const cERROR = wr1.cERROR + bas.cColon + bas.cSpace; // ERROR:
// ERROR: Invalid access to:
export const cErrorInvalidAccessTo = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cInvalid + bas.cSpace + wr1.cAccess + bas.cSpace + wr1.cTo + bas.cColon + bas.cSpace;
export const crootPathIs = wr1.croot + wr1.cPath + sys.cSpaceIsColonSpace; // rootPath is:
export const caskIs = wr1.cask + sys.cSpaceIsColonSpace; // ask is:
export const cINPUT = wr1.cINPUT + bas.cColon + bas.cSpace; // INPUT:
export const cinputIs = wr1.cinput + sys.cSpaceIsColonSpace; // input is:
export const cstartTimeIs = wr1.cstart + wr1.cTime + sys.cSpaceIsColonSpace; // startTime is:
export const cendTimeIs = wr1.cend + wr1.cTime + sys.cSpaceIsColonSpace; // endTime is:
export const cdeltaTimeResultIs = wr1.cdelta + wr1.cTime + wr1.cResult + sys.cSpaceIsColonSpace; // deltaTimeResult is:
export const cclientConfigurationIs = wr1.cclient + wr1.cConfiguration + sys.cSpaceIsColonSpace; // clientConfiguration is:
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const cloadedAndMergedDataAllFilesIs = wr1.cloaded + wr1.cAnd + wr1.cMerged + wr1.cData + wr1.cAll + wr1.cFiles + sys.cSpaceIsColonSpace; // loadedAndMergedDataAllFiles is:
export const cloadedAndMergedDataAllFilesContentsAre = wr1.cloaded + wr1.cAnd + wr1.cMerged + wr1.cData + wr1.cAll + wr1.cFiles + bas.cSpace + wr1.ccontents + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // loadedAndMergedDataAllFiles contents are:
export const ccommandWorkflowFilePathConfigurationNameIs = wr1.ccommand + wr1.cWorkflow + wr1.cFile + wr1.cPath + wr1.cConfiguration + wr1.cName + sys.cSpaceIsColonSpace; // commandWorkflowFilePathConfigurationName is:
export const ccontentsOfDataStructreIs = wr1.ccontents + bas.cSpace + bas.cof + bas.cSpace + bas.cD + bas.cDash + wr1.cdata + bas.cSpace + wr1.cstructure + sys.cSpaceIsColonSpace; // contents of D-data structure is:
export const cclientBusinessRulesAre = wr1.cclient + wr1.cBusiness + wr1.cRules + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // clientBusinessRules are:
export const cclientCommandsAre = wr1.cclient + wr1.cCommands + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // clientCommands are:
export const ccommandAliasesPathConfigNameIs = wr1.ccommand + wr1.cAliases + wr1.cPath + wr1.cConfig + wr1.cName + sys.cSpaceIsColonSpace; // commandAliasesPathConfigName is:
export const cresolvedSystemCommandsAliasesPathIs = wr1.cresolved + wr1.cSystem + wr1.cCommands + wr1.cAliases + wr1.cPath + sys.cSpaceIsColonSpace; // resolvedSystemCommandsAliasesPath is:
export const cresolvedClientCommandsAliasesPathIs = wr1.cresolved + wr1.cClient + wr1.cCommands + wr1.cAliases + wr1.cPath + sys.cSpaceIsColonSpace; // resolvedClientCommandsAliasesPath is:
export const cresolvedCustomCommandsAliasesPathIs = wr1.cresolved + wr1.cCustom + wr1.cCommands + wr1.cAliases + wr1.cPath + sys.cSpaceIsColonSpace; // resolvedCustomCommandsAliasesPath is:
export const cworkflowPathConfigurationNameIs = wr1.cworkflow + wr1.cPath + wr1.cConfiguration + wr1.cName + sys.cSpaceIsColonSpace; // workflowPathConfigurationName is:
export const cresolvedSystemWorkflowsPathIs = wr1.cresolved + wr1.cSystem + wr1.cWorkflows + wr1.cPath + sys.cSpaceIsColonSpace; // resolvedSystemWorkflowsPath is:
export const cresolvedClientWorkflowsPathIs = wr1.cresolved + wr1.cClient + wr1.cWorkflows + wr1.cPath + sys.cSpaceIsColonSpace; // resolvedClientWorkflowsPath is:
export const cresolvedCustomWorkflowsPathIs = wr1.cresolved + wr1.cCustom + wr1.cWorkflows + wr1.cPath + sys.cSpaceIsColonSpace; // resolvedCustomWorkflowsPath is:
export const cbusinessRuleIs = wr1.cbusiness + wr1.cRule + sys.cSpaceIsColonSpace; // businessRule is:
export const cruleInputIs = wr1.crule + wr1.cInput + sys.cSpaceIsColonSpace; // ruleInput is:
export const cruleMetaDataIs = wr1.crule + wr1.cMetaData + sys.cSpaceIsColonSpace; // ruleMetaData is:
export const cconfigurationNamespaceIs = wr1.cconfiguration + wr1.cName + wr1.cspace + sys.cSpaceIsColonSpace; // configurationNamespace is:
export const cconfigurationNameIs = wr1.cconfiguration + wr1.cName + sys.cSpaceIsColonSpace; // configurationName is:
export const cconfigurationValueIs = wr1.cconfiguration + wr1.cValue + sys.cSpaceIsColonSpace; // configurationValue is:
export const creturnConfiguraitonValueIs = wr1.creturn + wr1.cConfiguration + wr1.cValue + sys.cSpaceIsColonSpace; // returnConfigurationValue is:
export const cattributeJsonStringIs = wr1.cattribute + gen.cJson + wr1.cString + sys.cSpaceIsColonSpace; // attributeJsonString is:
export const cappAttributeNameIs = gen.capp + wr1.cAttribute + wr1.cName + sys.cSpaceIsColonSpace; // appAttributeName is:
export const cappAttributeValueIs = gen.capp + wr1.cAttribute + wr1.cValue + sys.cSpaceIsColonSpace; // appAttributeValue is:
export const cexecuteBusinessRulesColon = wr1.cexecute + bas.cSpace + wr1.cbusiness + bas.cSpace + wr1.crules + bas.cColon + bas.cSpace; // execute business rules:
export const cdataPathAfterBusinessRulesProcessingIs = wr1.cdata + wr1.cPath + bas.cSpace + wr1.cafter + bas.cSpace + wr1.cbusiness + bas.cSpace + wr1.crules + bas.cSpace + wr1.cprocessing + sys.cSpaceIsColonSpace; // dataPath after business rules processing is:
export const cFileToLoadIs = wr1.cFile + bas.cSpace + bas.cto + bas.cSpace + wr1.cload + sys.cSpaceIsColonSpace; // File to load is:
export const cfileExtensionIs = wr1.cfile + wr1.cExtension + sys.cSpaceIsColonSpace; // fileExtension is:
export const cexecuteBusienssRulesColon = wr1.cexecute + wr1.cBusiness + wr1.cRules + bas.cColon + bas.cSpace; // executeBusinessRules:
export const cloadedFileDataIs = wr1.cloaded + bas.cSpace + wr1.cfile + bas.cSpace + wr1.cdata + sys.cSpaceIsColonSpace; // loaded file data is:
export const cBEGIN_PROCESSING_ADDITIONAL_DATA = wr1.cBEGIN + bas.cSpace + wr1.cPROCESSING + bas.cSpace + wr1.cADDITIONAL + bas.cSpace + wr1.cDATA; // BEGIN PROCESSING ADDITIONAL DATA
export const cDONE_PROCESSING_ADDITIONAL_DATA = wr1.cDONE + bas.cSpace + wr1.cPROCESSING + bas.cSpace + wr1.cADDITIONAL + bas.cSpace + wr1.cDATA; // DONE PROCESSING ADDITIONAL DATA
export const cMERGED_dataIs = wr1.cMERGED + bas.cSpace + wr1.cdata + sys.cSpaceIsColonSpace; // MERGED data is:
export const cparsedDataFileContentsAre = wr1.cparsed + wr1.cData + wr1.cFile + bas.cSpace + wr1.ccontents + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // parsedDataFile contents are:
export const cdataCatagoryIs = wr1.cdata + wr1.cCatagory + sys.cSpaceIsColonSpace; // dataCatagory is:
export const cfullyParsedDataIs = wr1.cfully + bas.cSpace + wr1.cparsed + bas.cSpace + wr1.cdata + sys.cSpaceIsColonSpace; // fully parsed data is:
export const cD_finalMergeIs = bas.cD + bas.cSpace + wr1.cfinal + bas.cSpace + wr1.cmerge + sys.cSpaceIsColonSpace; // D final merge is:
export const cdataStorageContextNameIs = wr1.cdata + wr1.cStorage + wr1.cContext + wr1.cName + sys.cSpaceIsColonSpace; // dataStorageContextName is:
export const cdataToStoreIs = wr1.cdata + bas.cTo + wr1.cStore + sys.cSpaceIsColonSpace; // dataToStore is:
export const cdataCatagoryDetailsNameIs = wr1.cdata + wr1.cCatagory + wr1.cDetails + wr1.cName + sys.cSpaceIsColonSpace; // dataCatagoryDetailsName is:
export const ctempDataIs = wr1.ctemp + wr1.cData + sys.cSpaceIsColonSpace; // tempData is:
export const ctargetDataIs = wr1.ctarget + wr1.cData + sys.cSpaceIsColonSpace; // targetData is:
export const cpageNameIs = wr1.cpage + wr1.cName + sys.cSpaceIsColonSpace; // pageName is:
export const cdataToMergeIs = wr1.cdata + bas.cSpace + bas.cto + bas.cSpace + wr1.cMerge + sys.cSpaceIsColonSpace; // data to Merge is:
export const cdataToMergeElementCountIs = wr1.cdata + bas.cTo + wr1.cMerge + wr1.cElement + wr1.cCount + sys.cSpaceIsColonSpace; // dataToMergeElementCount is:
export const cdataToMergeElementCountIs1 = wr1.cdata + bas.cTo + wr1.cMerge + wr1.cElement + wr1.cCount + sys.cSpaceIsColonSpace + num.c1; // dataToMergeElementCount is 1
export const ccheckIfThePageNameIsNotAnEmptyString = wr1.ccheck + bas.cSpace + bas.cif + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cpage + wr1.cName + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + bas.can + bas.cSpace + wr1.cempty + bas.cSpace + wr1.cstring; // check if the pageName is not an empty string
export const cpageNameIsNotAnEmptyString = wr1.cpage + wr1.cName + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + bas.can + bas.cSpace + wr1.cempty + bas.cSpace + wr1.cstring; // pageName is not an empty string
export const cCheckIfTheDataCatagoryIsAnEmptyStringOrNot = wr1.cCheck + bas.cSpace + bas.cif + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cdata + wr1.cCatagory + bas.cSpace + bas.cis + bas.cSpace + bas.can + bas.cSpace + wr1.cempty + bas.cSpace + wr1.cstring + bas.cSpace + bas.cor + bas.cSpace + gen.cnot; // Check if the dataCatagory is an empty string or not
export const cdataCatagoryIsNotAnEmptyString = wr1.cdata + wr1.cCatagory + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + bas.can + bas.cSpace + wr1.cempty + bas.cSpace + wr1.cstring + bas.cExclamation; // dataCatagory is not an empty string!
export const cdataCatagoryIsAnEmptyString = wr1.cdata + wr1.cCatagory + bas.cSpace + bas.cIS + bas.cSpace + bas.can + bas.cSpace + wr1.cempty + bas.cSpace + wr1.cstring + bas.cExclamation; // dataCatagory IS an empty string!
export const ctargetDataContentIs = wr1.ctarget + wr1.cData + bas.cSpace + wr1.ccontent + sys.cSpaceIsColonSpace; // targetData content is:
export const cafterAttemptToMergeResultsAre = wr1.cafter + bas.cSpace + wr1.cattempt + bas.cSpace + bas.cto + bas.cSpace + wr1.cmerge + bas.cComa + bas.cSpace + wr1.cresults + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // after attempt to merge, results are:
export const cMergedDataIs = wr1.cMerged + bas.cSpace + wr1.cdata + sys.cSpaceIsColonSpace; // Merged data is:
export const cpageNameIsAnEmptyString = wr1.cpage + wr1.cName + bas.cSpace + bas.cis + bas.cSpace + bas.can + bas.cSpace + wr1.cempty + bas.cSpace + wr1.cstring; // pageName is an empty string
export const cCaughtTheSpecialCaseThatWeAreMergingFlatList = wr1.cCaught + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cspecial + bas.cSpace + wr1.ccase + bas.cSpace + wr1.cthat + bas.cSpace + bas.cwe + bas.cSpace + wr1.care + bas.cSpace + wr1.cmerging + bas.cSpace + bas.ca + bas.cSpace + wr1.cflat + bas.cSpace + wr1.clist + bas.cDot; // Caught the special case that we are merging a flat list.
export const cinsideTheForLoop = wr1.cinside + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cfor + bas.cDash + wr1.cloop; // inside the for-loop
export const ckeyIs = wr1.ckey + sys.cSpaceIsColonSpace; // key is:
export const ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs = wr1.ctarget + wr1.cData + bas.cSpace + bas.cis + bas.cSpace + wr1.cmodified + bas.cSpace + bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cinput + bas.cSpace + wr1.cpass + bas.cDash + bas.cby + bas.cDash + wr1.creference + bas.cSpace + wr1.cvariable + bas.cSpace + wr1.ccontent + sys.cSpaceIsColonSpace; // targetData is modified in the input pass-by-reference variable content is:
export const cdataObjectValueIs = wr1.cdata + wr1.cObject + bas.cSpace + wr1.cvalue + sys.cSpaceIsColonSpace; // dataObject value is:
export const celementNameIs = wr1.celement + wr1.cName + sys.cSpaceIsColonSpace; // elementName is:
export const cdataObjectIs = wr1.cdata + wr1.cObject + sys.cSpaceIsColonSpace; // dataObject is:
export const celementNamePatternIs = wr1.celement + wr1.cName + wr1.cPattern + sys.cSpaceIsColonSpace; // elementNamePattern is:
export const celementCountIs = wr1.celement + wr1.cCount + sys.cSpaceIsColonSpace; // elementCount is:
export const cERROR_Colon = wr1.cERROR + bas.cColon + bas.cSpace; // ERROR:
export const cfileAndPathToLoadFromIs = wr1.cfile + bas.cSpace + wr1.cand + bas.cSpace + wr1.cpath + bas.cSpace + bas.cto + bas.cSpace + wr1.cload + bas.cSpace + wr1.cfrom + sys.cSpaceIsColonSpace; // file and path to load from is:
export const cDoneLoadingDataFrom = wr1.cDONE + bas.cSpace + wr1.cloading + bas.cSpace + wr1.cdata + bas.cSpace + wr1.cfrom + bas.cColon + bas.cSpace; // DONE loading data from:
export const cfileAndPathToWriteDataToIs = wr1.cfile + bas.cSpace + wr1.cand + bas.cSpace + wr1.cpath + bas.cSpace + bas.cto + bas.cSpace + wr1.cwrite + bas.cSpace + wr1.cdata + bas.cSpace + bas.cto + bas.cSpace + bas.cis + bas.cColon + bas.cSpace; // file and path to write data to is:
export const cdataToWriteIs = wr1.cdata + bas.cSpace + bas.cto + bas.cSpace + wr1.cwrite + sys.cSpaceIsColonSpace; // data to write is:
export const cDataWasWrittenToTheFile = wr1.cData + bas.cSpace + wr1.cwas + bas.cSpace + wr1.cwritten + bas.cSpace + bas.cto + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cfile + bas.cColon + bas.cSpace; // Data was written to the file:
export const cPathThatShouldBeScannedIs = wr1.cPath + bas.cSpace + wr1.cthat + bas.cSpace + wr1.cshould + bas.cSpace + bas.cbe + bas.cSpace + wr1.cscanned + sys.cSpaceIsColonSpace; // Path that should be scanned is:
export const cfilesFoundAre = wr1.cfiles + bas.cSpace + wr1.cfound + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // files found are:
export const cdirectorIs = wr1.cdirectory + sys.cSpaceIsColonSpace; // directory is:
export const cdirectoryPathIs = wr1.cdirectory + wr1.cPath + sys.cSpaceIsColonSpace; // directoryPath is:
export const csourceFolderIs = wr1.csource + wr1.cFolder + sys.cSpaceIsColonSpace; // sourceFolder is:
export const cdestinationFolderIs = wr1.cdestination + wr1.cFolder + sys.cSpaceIsColonSpace; // destinationFolder is:
export const ccopySuccessIs = wr1.ccopy + wr1.cSuccess + sys.cSpaceIsColonSpace; // copySuccess is:
export const ccurrentVersionIs = wr1.ccurrent + bas.cSpace + wr1.cversion + sys.cSpaceIsColonSpace; // current version is:
export const creleasedArchiveFilesListIs = wr1.creleased + bas.cSpace + wr1.carchive + bas.cSpace + wr1.cfiles + bas.cSpace + wr1.clist + sys.cSpaceIsColonSpace; // released archive files list is:
export const cfileIs = wr1.cfile + sys.cSpaceIsColonSpace; // file is:
export const cfileNameIs = wr1.cfile + wr1.cName + sys.cSpaceIsColonSpace; // fileName is:
export const creleaseFilesListIs = wr1.crelease + bas.cSpace + wr1.cfiles + bas.cSpace + wr1.clist + sys.cSpaceIsColonSpace; // release files list is:
export const creleaseDateTimeStampIs = wr1.crelease + bas.cSpace + wr1.cdate + bas.cDash + wr1.ctime + bas.cSpace + wr1.cstamp + sys.cSpaceIsColonSpace; // release date-time stamp is:
export const creleaseFileNameIs = wr1.crelease + bas.cSpace + wr1.cfile + wr1.cName + sys.cSpaceIsColonSpace; // release fileName is:
export const cDoneWritingTheZipFile = wr1.cDone + bas.cSpace + wr1.cwriting + bas.cSpace + wr1.cthe + bas.cSpace + gen.czip + bas.cSpace + wr1.cfile + bas.cColon + bas.cSpace; // Done writing the zip file:
export const cSetTheReturnPackageSuccessFlagToTrue = wr1.cSet + bas.cSpace + wr1.cthe + bas.cSpace + wr1.creturn + bas.cSpace + wr1.cpackage + wr1.cSuccess + bas.cSpace + wr1.cflag + bas.cSpace + bas.cto + bas.cSpace + gen.cTRUE; // Set the return packageSuccess flag to TRUE
export const ccurrentVersionAlreadyReleased = wr1.ccurrent + bas.cSpace + wr1.cversion + bas.cSpace + wr1.calready + bas.cSpace + wr1.creleased; // current version already released
export const cpackageSuccessIs = wr1.cpackage + wr1.cSuccess + sys.cSpaceIsColonSpace; // packageSuccess is:
export const cRootPathBeforeProcessingIs = wr1.cRoot + wr1.cPath + bas.cSpace + wr1.cbefore + bas.cSpace + wr1.cprocessing + sys.cSpaceIsColonSpace; // RootPath before processing is:
export const cRootPathAfterProcessingIs = wr1.cRoot + wr1.cPath + bas.cSpace + wr1.cafter + bas.cSpace + wr1.cprocessing + sys.cSpaceIsColonSpace; // RootPath after processing is:
export const cSourceIs = wr1.csource + sys.cSpaceIsColonSpace; // source is:
export const ctargetIs = wr1.ctarget + sys.cSpaceIsColonSpace; // target is:
export const cErrorCouldNotCopyFile = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cCould + bas.cSpace + gen.cnot + bas.cSpace + wr1.ccopy + bas.cSpace + wr1.cfile + bas.cColon + bas.cSpace; // ERROR: Could not copy file:
export const cErrorCouldNotCreateFolder = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cCould + bas.cSpace + gen.cnot + bas.cSpace + wr1.ccreate + bas.cSpace + wr1.cfolder + bas.cColon + bas.cSpace; // ERROR: Could not create folder:
export const csuccessfullCopyIs = wr1.csuccessful + wr1.cCopy + sys.cSpaceIsColonSpace; // successfullCopy is:
export const cErrorCouldNotCopyFolderContents = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cCould + bas.cSpace + gen.cnot + bas.cSpace + wr1.ccopy + bas.cSpace + wr1.cfolder + bas.cSpace + wr1.ccontents + bas.cColon + bas.cSpace; // ERROR: Could not copy folder contents:
export const cargumentValueIs = wr1.cargument + wr1.cValue + sys.cSpaceIsColonSpace; // argumentValue is:
export const cconsolidatedArgumentModeIs = wr1.cconsolidated + wr1.cArgument + wr1.cMode + sys.cSpaceIsColonSpace; // consolidatedArgumentMode is:
export const cPushingArgumentValueToReturnDataAsArrayElement = wr1.cPushing + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cargument + wr1.cValue + bas.cSpace + bas.cto + bas.cSpace + wr1.cthe + bas.cSpace + wr1.creturn + wr1.cData + bas.cSpace + bas.cas + bas.cSpace + bas.can + bas.cSpace + wr1.carray + bas.cSpace + wr1.celement; // Pushing the argumentValue to the returnData as an array element
export const cargumentValueLengthGreaterThanZero = wr1.cargument + wr1.cValue + bas.cDot + wr1.cLength + bas.cSpace + bas.cGreaterThan + bas.cSpace + num.c0; // argumentValue.length > 0
export const cCallingAnalyzeArgumentIndexIs = wr1.cCalling + wr1.cAnalyze + wr1.cArgument + wr1.cIndex + sys.cSpaceIsColonSpace; // Calling AnalyzeArgumentIndex is:
export const cReturnArgumentValueSameAsItWasPassedIn = wr1.cReturn + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cargument + wr1.cValue + bas.cSpace + wr1.cthe + bas.cSpace + wr1.csame + bas.cSpace + bas.cas + bas.cSpace + bas.cit + bas.cSpace + wr1.cwas + bas.cSpace + wr1.cpassed + bas.cSpace + bas.cin + bas.cDot; // Return the argumentValue the same as it was passed in.
export const cCheckIfThereAreBracketsOrNoBrackets = wr1.cCheck + bas.cSpace + bas.cif + bas.cSpace + wr1.cthere + bas.cSpace + wr1.care + bas.cSpace + wr1.cbrackets + bas.cSpace + bas.cor + bas.cSpace + bas.cno + bas.cSpace + wr1.cbrackets + bas.cDot; // Check if there are brackets or no brackets.
export const cBracketsWereFound = wr1.cBrackets + bas.cSpace + wr1.cwere + bas.cSpace + wr1.cfound; // Brackets were found
export const cCheckIfThereIsRegularExpressionOrNot = wr1.cCheck + bas.cSpace + bas.cif + bas.cSpace + wr1.cthere + bas.cSpace + bas.cis + bas.cSpace + bas.ca + bas.cSpace + wr1.cRegular + bas.cSpace + wr1.cExpression + bas.cSpace + bas.cor + bas.cSpace + gen.cnot + bas.cDot; // Check if there is a Regular Expression or not.
export const cRegularExpressionWasFound = bas.cA + bas.cSpace + wr1.cregular + bas.cSpace + wr1.cexpression + bas.cSpace + wr1.cwas + bas.cSpace + wr1.cfound + bas.cExclamation; // A regular expression was found!
export const cNoRegExpFound = bas.cNO + bas.cSpace + gen.cRegExp + bas.cSpace + wr1.cfound + bas.cExclamation; // NO RegExp found!
export const cBracketsAreFound = wr1.cBrackets + bas.cSpace + wr1.cARE + bas.cSpace + wr1.cfound + bas.cExclamation; // Brackets ARE found!
export const cNoSecondaryCommandArgumentDelimiters = bas.cNO + bas.cSpace + wr1.csecondary + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cargument + bas.cSpace + wr1.cdelimiters + bas.cDot; // NO secondary command argument delimiters.
export const cregularExpressionIs = wr1.cregular + bas.cSpace + wr1.cexpression + sys.cSpaceIsColonSpace; // regular expression is:
export const cregExValueIs = gen.cregEx + wr1.cValue + sys.cSpaceIsColonSpace; // regExValue is:
export const cregularExpressionFlagsAre = wr1.cregular + bas.cSpace + wr1.cexpression + bas.cSpace + wr1.cflags + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // regular expression flags are:
export const cregExFlagsIs = gen.cregEx + wr1.cFlags + sys.cSpaceIsColonSpace; // regExFlags is:
export const cargumentValueContainsTheDelimiterLetsSplitIt = wr1.cargument + wr1.cValue + bas.cSpace + wr1.ccontains + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cdelimiter + bas.cColon + bas.cSpace + wr1.cLets + bas.cSpace + wr1.csplit + bas.cSpace + bas.cit + bas.cExclamation; // argumentValue contains the delimiter, lets split it!
export const cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs = wr1.cargument + wr1.cValue + bas.cSpace + wr1.cafter + bas.cSpace + wr1.cattempting + bas.cSpace + bas.cto + bas.cSpace + wr1.cremove + bas.cSpace + bas.ca + bas.cSpace + wr1.copen + bas.cSpace + wr1.cbracket + bas.cSpace + wr1.cfrom + bas.cSpace + wr1.call + bas.cSpace + wr1.carray + bas.cSpace + wr1.celements + sys.cSpaceIsColonSpace; // argumentValue after attempting to remove a open bracket from all array elements is:
export const cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs = wr1.cargument + wr1.cValue + bas.cSpace + wr1.cafter + bas.cSpace + wr1.cattempting + bas.cSpace + bas.cto + bas.cSpace + wr1.cremove + bas.cSpace + bas.ca + bas.cSpace + wr1.cclose + bas.cSpace + wr1.cbracket + bas.cSpace + wr1.cfrom + bas.cSpace + wr1.call + bas.cSpace + wr1.carray + bas.cSpace + wr1.celements + sys.cSpaceIsColonSpace; // argumentValue after attempting to remove a close bracket from all array elements is:
export const csecondaryCommandArgsDelimiterIs = wr1.csecondary + wr1.cCommand + gen.cArgs + wr1.cDelimiter + sys.cSpaceIsColonSpace; // secondaryCommandArgsDelimiter is:
export const cargumentArrayIs = wr1.cargument + wr1.cArray + sys.cSpaceIsColonSpace; // argumentArray is:
export const cformattingIs = wr1.cformatting + sys.cSpaceIsColonSpace; // formatting is:
export const cdeltaTimeIs = wr1.cdelta + wr1.cTime + sys.cSpaceIsColonSpace; // deltaTime is:
export const cformatIs = wr1.cformat + sys.cSpaceIsColonSpace; // format is:
export const creturnDeltaTimeIs = wr1.creturn + wr1.cDelta + wr1.cTime + sys.cSpaceIsColonSpace; // returnDeltaTime is:
export const csleepTimeIs = wr1.csleep + wr1.cTime + sys.cSpaceIsColonSpace; // sleepTime is:
export const cworkflowNameIs = wr1.cworkflow + wr1.cName + sys.cSpaceIsColonSpace; // workflowName is:
export const ccurrentWorkflowIs = wr1.ccurrent + wr1.cWorkflow + sys.cSpaceIsColonSpace; // currentWorkflow is:
export const cworkflowValueIs = wr1.cworkflow + wr1.cValue + sys.cSpaceIsColonSpace; // workflowValue is:
export const cdataHivePathArrayIs = wr1.cdata + wr1.cHive + wr1.cPath + wr1.cArray + sys.cSpaceIsColonSpace; // dataHivePathArray is:
export const ccontentsOfLeafDataHiveElementIs = wr1.ccontents + bas.cSpace + bas.cof + bas.cSpace + wr1.cleaf + wr1.cData + wr1.cHive + wr1.cElement + sys.cSpaceIsColonSpace; // contents of leafDataHiveElement is:
export const centryIs = wr1.centry + sys.cSpaceIsColonSpace; // entry is:
export const cattributeValueIs = wr1.cattribute + wr1.cValue + sys.cSpaceIsColonSpace; // attributeValue is:
export const ckey2Is = wr1.ckey + num.c2 + sys.cSpaceIsColonSpace; // key2 is:
export const centityIs = wr1.centity + sys.cSpaceIsColonSpace; // entity is:
export const cqueueNameSpaceIs = wr1.cqueue + wr1.cName + wr1.cSpace + sys.cSpaceIsColonSpace; // queueNameSpace Is:
export const cstackNameSpaceIs = wr1.cstack + wr1.cName + wr1.cSpace + sys.cSpaceIsColonSpace; // stackNameSpace Is:
export const cWarningStackColon = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cStack + bas.cColon + bas.cSpace; // WARNING: Stack:
export const cAlreadyExists = bas.cSpace + wr1.cALREADY + bas.cSpace + wr1.cexist + bas.cExclamation; // ALREADY exist!
export const cdoesNotExist = bas.cSpace + wr1.cdoes + bas.cSpace + gen.cnot + bas.cSpace + wr1.cexist + bas.cExclamation; // does not exist!
export const cisEmpty = bas.cSpace + bas.cis + bas.cSpace + wr1.cempty + bas.cExclamation; // is empty!
export const cContentsOfTheStackNamespace = wr1.cContents + bas.cSpace + bas.cof + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cstack + bas.cSpace + wr1.cname + wr1.cspace + bas.cColon + bas.cSpace; // Contents of the stack namespace:
export const cwordDelimiterIs = wr1.cword + wr1.cDelimiter + sys.cSpaceIsColonSpace; // wordDelimiter is:
export const cstringContainsAcronymIs = wr1.cstring + wr1.cContains + wr1.cAcronym + sys.cSpaceIsColonSpace; // stringContainsAcronym is:
export const cErrorZipPackageReleaseFailed = wr1.cERROR + bas.cColon + bas.cSpace + gen.cZip + bas.cSpace + wr1.cpackage + bas.cSpace + wr1.crelease + bas.cSpace + wr1.cfailed + bas.cColon + bas.cSpace; // ERROR: Zip package release failed:
export const cminimumColorRangeIs = wr1.cminimum + wr1.cColor + wr1.cRange + sys.cSpaceIsColonSpace; // minimumColorRange is:
export const cmaximumColorRangeIs = wr1.cmaximum + wr1.cColor + wr1.cRange + sys.cSpaceIsColonSpace; // maximumColorRange is:
export const callSystemConstantsValidationDataIs = wr1.call + wr1.cSystem + wr1.cConstants + wr1.cValidation + wr1.cData + sys.cSpaceIsColonSpace; // allSystemConstantsValidationData is:
export const callClientConstantsValidationDataIs = wr1.call + wr1.cClient + wr1.cConstants + wr1.cValidation + wr1.cData + sys.cSpaceIsColonSpace; // allClientConstantsValidationData is:
export const cconstantLibraryDataIs = wr1.cconstant + wr1.cLibrary + wr1.cData + sys.cSpaceIsColonSpace; // constantLibraryData is:
export const cclientValidationDataIs = wr1.cclient + wr1.cValidation + wr1.cData + sys.cSpaceIsColonSpace; // clientValidationData is:
export const carrayValidationDataIs = wr1.carray + wr1.cValidation + wr1.cData + sys.cSpaceIsColonSpace; // arrayValidationData is:
export const cfilesListLimitIs = wr1.cfiles + wr1.cList + wr1.cLimit + sys.cSpaceIsColonSpace; // filesListLimit is:
export const cenableLimitIs = wr1.cenable + wr1.cLimit + sys.cSpaceIsColonSpace; // enableLimit is:
export const cfilesLimitIs = wr1.cfiles + wr1.cLimit + sys.cSpaceIsColonSpace; // filesLimit is:
export const cinputDataRightBeforeProcessingIs = cinputData + wr1.cRight + wr1.cBefore + wr1.cProcessing + sys.cSpaceIsColonSpace; // inputData right before processing is:
export const cnumberIs = wr1.cnumber + sys.cSpaceIsColonSpace; // number is:
export const capplicationMetaDataPathAndFilenameIs = wr1.capplication + wr1.cMetaData + wr1.cPath + wr1.cAnd + wr1.cFilename + sys.cSpaceIsColonSpace; // applicationMetaDataPathAndFilename is:
export const cframeworkMetaDataPathAndFilenameIs = wr1.cframework + wr1.cMetaData + wr1.cPath + wr1.cAnd + wr1.cFilename + sys.cSpaceIsColonSpace; // frameworkMetaDataPathAndFilename is:
export const capplicationMetaDataIs = wr1.capplication + wr1.cMetaData + sys.cSpaceIsColonSpace; // applicationMetaData is:
export const cframeworkMetaDataIs = wr1.cframework + wr1.cMetaData + sys.cSpaceIsColonSpace; // frameworkMetaData is:
export const cApplicationNameIs = wr1.cApplication + wr1.cName + sys.cSpaceIsColonSpace; // ApplicationName is:
export const cApplicationVersionNumberIs = wr1.cApplication + wr1.cVersion + wr1.cNumber + sys.cSpaceIsColonSpace; // ApplicationVersionNumber is:
export const cApplicationDescriptionIs = wr1.cApplication + wr1.cDescription + sys.cSpaceIsColonSpace; // ApplicationDescription is:
export const cFrameworkNameIs = wr1.cFramework + wr1.cName + sys.cSpaceIsColonSpace; // FrameworkName is:
export const cFrameworkVersionNumberIs = wr1.cFramework + wr1.cVersion + wr1.cNumber + sys.cSpaceIsColonSpace; // FrameworkVersionNumber is:
export const cFrameworkDescriptionIs = wr1.cFramework + wr1.cDescription + sys.cSpaceIsColonSpace; // FrameworkDescription is:
export const csessionDateTimeStampIs = wr1.csession + wr1.cDate + wr1.cTime + wr1.cStamp + sys.cSpaceIsColonSpace; // sessionDateTimeStamp is:
export const clogFileNameIs = wr1.clog + wr1.cFileName + sys.cSpaceIsColonSpace; // logFileName is:
export const cprimaryCommandDelimiterIs = wr1.cprimary + wr1.cCommand + wr1.cDelimiter + sys.cSpaceIsColonSpace; // primaryCommandDelimiter is:
export const csecondaryCommandDelimiterIs = wr1.csecondary + wr1.cCommand + wr1.cDelimiter + sys.cSpaceIsColonSpace; // secondaryCommandDelimiter is:
export const ctertiaryCommandDelimiterIs = wr1.ctertiary + wr1.cCommand + wr1.cDelimiter + sys.cSpaceIsColonSpace; // tertiaryCommandDelimiter is:
export const ccommandSequencerCommandToEnqueueIs = wr1.ccommand + wr1.cSequencer + bas.cSpace + wr1.cCommand + bas.cSpace + bas.cTo + bas.cSpace + wr1.cEnqueue + sys.cSpaceIsColonSpace; // commandSequencer Command To Enqueue is:
export const cWarningMessageIsUndefined = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cmessage + bas.cSpace + wr1.cis + bas.cSpace + wr1.cundefined; // WARNING: message is undefined
export const cclassPathIs = wr1.cclass + wr1.cPath + sys.cSpaceIsColonSpace; // classPath is:
export const cargsArrayContainsRegEx1Is = gen.cargs + wr1.cArray + wr1.cContains + wr1.cRegEx + num.c1 + sys.cSpaceIsColonSpace; // argsArrayContainsRegEx1 is:
export const cargsArrayContainsRegEx2Is = gen.cargs + wr1.cArray + wr1.cContains + wr1.cRegEx + num.c2 + sys.cSpaceIsColonSpace; // argsArrayContainsRegEx2 is:
export const cargsArrayContainsColonIs = gen.cargs + wr1.cArray + wr1.cContains + wr1.cColon + sys.cSpaceIsColonSpace; // argsArrayContainsColon is:
export const cfileToSaveToIs = wr1.cfile + wr1.cTo + wr1.cSave + wr1.cTo + sys.cSpaceIsColonSpace; // fileToSaveTo is:
export const cdataToWriteOutIs = wr1.cdata + wr1.cTo + wr1.cWrite + wr1.cOut + sys.cSpaceIsColonSpace; // dataToWriteOut is:
export const clogFilePathAndNameIs = gen.clog + wr1.cFile + wr1.cPath + wr1.cAnd + wr1.cName + sys.cSpaceIsColonSpace; // logFilePathAndName is:
export const cmetaDataOutputIs = wr1.cmetaData + wr1.cOutput + sys.cSpaceIsColonSpace; // metaDataOutput is:
export const callCommandAliasesDataIs = wr1.call + wr1.cCommand + wr1.cAliases + wr1.cData + sys.cSpaceIsColonSpace; // allCommandAliasesData is:

// Capture the session date-time-stamp so we can determine a log file name.
export const cCaptureSessionDateTimeStampLogFileName = wr1.cCapture + bas.cSpace + wr1.cthe + bas.cSpace + wr1.csession + bas.cSpace + wr1.cdate + bas.cDash + wr1.ctime + bas.cDash + wr1.cstamp + bas.cSpace + bas.cso + bas.cSpace + wr1.cwe + bas.cSpace + wr1.ccan + bas.cSpace + wr1.cdetermine + bas.cSpace + bas.ca + bas.cSpace + wr1.clog + bas.cSpace + wr1.cfile + bas.cSpace + wr1.cname + bas.cDot;
// WARNING: Some rules do not exist:
export const cProcessRulesWarningSomeRulesDoNotExist = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cSome + bas.cSpace + wr1.crules + bas.cSpace + wr1.cdo + bas.cSpace + gen.cnot + bas.cSpace + wr1.cexist + bas.cColon + bas.cSpace;
// WARNING: Mixed string. Cannot determine what delimiter should be used to break up the string into words.
export const cDetermineWordDelimiterMessage1 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cMixed + bas.cSpace + wr1.cstring + bas.cDot + bas.cSpace; // WARNING: Mixed string.
export const cDetermineWordDelimiterMessage2 = wr1.cCannot + bas.cSpace + wr1.cdetermine + bas.cSpace + wr1.cwhat + bas.cSpace + wr1.cdelimiter + bas.cSpace + wr1.cshould + bas.cSpace; // Cannot determine what delimiter should
export const cDetermineWordDelimiterMessage3 = bas.cbe + bas.cSpace + wr1.cused + bas.cSpace + bas.cto + bas.cSpace + wr1.cbreak + bas.cSpace + bas.cup + bas.cSpace + wr1.cthe + bas.cSpace; // be used to break up the
export const cDetermineWordDelimiterMessage4 = wr1.cstring + bas.cSpace + wr1.cinto + bas.cSpace + wr1.cwords + bas.cDot; // string into words.
// WARNING: Mixed string. Cannot determine how words are delimited in the string. Unable to count words.
export const cGetWordCountInStringMessage1 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cMixed + bas.cSpace + wr1.cstring + bas.cDot + bas.cSpace; // WARNING: Mixed string.
export const cGetWordCountInStringMessage2 = wr1.cCannot + bas.cSpace + wr1.cdetermine + bas.cSpace + wr1.chow + bas.cSpace + wr1.cwords + bas.cSpace + wr1.care + bas.cSpace + wr1.cdelimited + bas.cSpace; // Cannot determine how words are delimited
export const cGetWordCountInStringMessage3 = bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cstring + bas.cDot + bas.cSpace + wr1.cUnable + bas.cSpace + bas.cto + bas.cSpace + wr1.ccount + bas.cSpace + wr1.cwords + bas.cDot; // in the string. Unable to count words.
// WARNING: Mixed string. Cannot get words from the string. Unable to determine words.
export const cGetWordsArrayFromStringMessage1 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cMixed + bas.cSpace + wr1.cString + bas.cDot + bas.cSpace; // WARNING: Mixed string.
export const cGetWordsArrayFromStringMessage2 = wr1.cCannot + bas.cSpace + wr1.cget + bas.cSpace + wr1.cwords + bas.cSpace + wr1.cfrom + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cstring + bas.cDot + bas.cSpace; // Cannot get words from the string.
export const cGetWordsArrayFromStringMessage3 = wr1.cUnable + bas.cSpace + bas.cto + bas.cSpace + wr1.cdetermine + bas.cSpace + wr1.cwords + bas.cDot; // Unable to determine words.
// Please enter a named command where the first word starts with a lower case letter and all other words in the named command start with an upper case letter:
export const cCommandNamePrompt1 = wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cnamed + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cwhere + bas.cSpace; // Please enter a named command where
export const cCommandNamePrompt2 = wr1.cthe + bas.cSpace + num.cfirst + bas.cSpace + wr1.cword + bas.cSpace + wr1.cstarts + bas.cSpace + wr1.cwith + bas.cSpace + bas.ca + bas.cSpace; // the first word starts with a
export const cCommandNamePrompt3 = wr1.clower + bas.cSpace + wr1.ccase + bas.cSpace + wr1.cletter + bas.cSpace + wr1.cand + bas.cSpace + wr1.call + bas.cSpace + wr1.cother + bas.cSpace; // lower case letter and all other
export const cCommandNamePrompt4 = wr1.cwords + bas.cSpace + bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cnamed + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cstart + bas.cSpace; // words in the named command start
export const cCommandNamePrompt5 = wr1.cwith + bas.cSpace + bas.can + bas.cSpace + wr1.cupper + bas.cSpace + wr1.ccase + bas.cSpace + wr1.cletter + bas.cColon; // with an upper case letter:
// Please enter a list of command word abreviations/acronyms/aliases for the command word:
export const cCommandWordAliasPrompt1 = wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.clist + bas.cSpace + bas.cof + bas.cSpace + wr1.ccommand + bas.cSpace;
export const cCommandWordAliasPrompt2 = wr1.cword + bas.cSpace + wr1.cabreviations + bas.cForwardSlash + wr1.cacronyms + bas.cForwardSlash + wr1.caliases + bas.cSpace;
export const cCommandWordAliasPrompt3 = wr1.cfor + bas.cSpace + wr1.cthe + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cword + bas.cColon;
// Please enter a string you would like to define as a constant in the constants system:
export const cConstantPrompt1 = wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cstring + bas.cSpace + wr1.cyou + bas.cSpace + wr1.cwould + bas.cSpace; // Please enter a string you would
export const cConstantPrompt2 = wr1.clike + bas.cSpace + bas.cto + bas.cSpace + wr1.cdefine + bas.cSpace + bas.cas + bas.cSpace + bas.ca + bas.cSpace + wr1.cconstant + bas.cSpace; // like to define as a constant
export const cConstantPrompt3 = bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cconstants + bas.cSpace + wr1.csystem + bas.cColon; // in the constants system:
// Please enter a coma separated list of strings you would like to define in the constants system:
export const cConstantsListPrompt1 = wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.ccoma + bas.cSpace + wr1.cseparated + bas.cSpace + wr1.clist + bas.cSpace + bas.cof + bas.cSpace;
export const cConstantsListPrompt2 = wr1.cstrings + bas.cSpace + wr1.cyou + bas.cSpace + wr1.cwould + bas.cSpace + wr1.clike + bas.cSpace + bas.cto + bas.cSpace + wr1.cdefine + bas.cSpace + bas.cin + bas.cSpace;
export const cConstantsListPrompt3 = wr1.cthe + bas.cSpace + wr1.cconstants + bas.cSpace + wr1.csystem + bas.cColon;
// Please enter a coma separated list of strings you would like to search for common patterns:
export const cConstantsListPatternSearchPrompt1 = wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.ccoma + bas.cSpace + wr1.cseparated + bas.cSpace + wr1.clist + bas.cSpace + bas.cof + bas.cSpace; // Please enter a coma separated list of
export const cConstantsListPatternSearchPrompt2 = wr1.cstrings + bas.cSpace + wr1.cyou + bas.cSpace + wr1.cwould + bas.cSpace + wr1.clike + bas.cSpace + bas.cto + bas.cSpace + wr1.csearch + bas.cSpace + wr1.cfor + bas.cSpace; // strings you would like to search for
export const cConstantsListPatternSearchPrompt3 = wr1.ccommon + bas.cSpace + wr1.cpatterns + bas.cColon; // common patterns:
// ERROR: Attempted to generate a suggested line of code to validate the constant, ' +
// 'but the constant is not formatted correctly, it should begin with a lower case "c". ' +
// 'Please reformat the constant correctly so a line of code can be generated for you.
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1 = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cAttempted + bas.cSpace + bas.cto + bas.cSpace + wr1.cgenerate + bas.cSpace + bas.ca + bas.cSpace + wr1.csuggested + bas.cSpace; // ERROR: Attempted to generate a suggested
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2 = wr1.cline + bas.cSpace + bas.cof + bas.cSpace + wr1.ccode + bas.cSpace + bas.cto + bas.cSpace + wr1.cvalidate + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cconstant + bas.cComa + bas.cSpace; // line of code to validate the constant,
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3 = wr1.cbut + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cconstant + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + wr1.cformatted + bas.cSpace + wr1.ccorrectly + bas.cComa + bas.cSpace; // but the constant is not formatted correctly,
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4 = bas.cit + bas.cSpace + wr1.cshould + bas.cSpace + wr1.cbegin + bas.cSpace + wr1.cwith + bas.cSpace + bas.ca + bas.cSpace + wr1.clower + bas.cSpace + wr1.ccase + bas.cSpace + bas.cDoubleQuote + bas.cc + bas.cDoubleQuote + bas.cDot + bas.cSpace; // it should begin with a lower case "c".
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5 = wr1.cPlease + bas.cSpace + wr1.creformat + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cconstant + bas.cSpace + wr1.ccorrectly + bas.cSpace + bas.cso + bas.cSpace + bas.ca + bas.cSpace; // Please reformat the constant correctly so a
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6 = wr1.cline + bas.cSpace + bas.cof + bas.cSpace + wr1.ccode + bas.cSpace + wr1.ccan + bas.cSpace + bas.cbe + bas.cSpace + wr1.cgenerated + bas.cSpace + wr1.cfor + bas.cSpace + wr1.cyou + bas.cDot; // line of code can be generated for you.
export const cSearchForPatternsInStringArrayMessage1 = sys.ccurrentMasterStringArrayElement + bas.cSpace + wr1.cdoes + bas.cSpace + gen.cnot + bas.cSpace + wr1.ccontain + bas.cSpace + bas.ca + bas.cSpace + wr1.cspace + bas.cSpace + wr1.ccharacter; // currentMasterStringArrayElement does not contain a space character
// WARNING: The current string being searched contains a space character, we are going to skip comparison.
export const cSearchForPatternsInStringArrayMessage2 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cThe + bas.cSpace + wr1.ccurrent + bas.cSpace + wr1.cstring + bas.cSpace + wr1.cbeing + bas.cSpace + wr1.csearched + bas.cSpace + wr1.ccontains + bas.cSpace + bas.ca + bas.cSpace + wr1.cspace + bas.cSpace + wr1.ccharacter + bas.cComa + bas.cSpace; // WARNING: The current string being search contains a space character,
export const cSearchForPatternsInStringArrayMessage3 = bas.cwe + bas.cSpace + wr1.care + bas.cSpace + wr1.cgoing + bas.cSpace + bas.cto + bas.cSpace + wr1.cskip + bas.cSpace + wr1.ccomparison + bas.cDot; // we are going to skip comparison.
// WARNING: InputData was not an array or had an empty array.
export const cSearchForPatternsInStringArrayMessage4 = wr1.cWARNING + bas.cColon + bas.cSpace + cInputData + bas.cSpace + wr1.cwas + bas.cSpace + gen.cnot + bas.cSpace + bas.can + bas.cSpace + wr1.carray + bas.cSpace + bas.cor + bas.cSpace + wr1.chad + bas.cSpace + bas.can + bas.cSpace + wr1.cempty + bas.cSpace + wr1.carray + bas.cDot; // WARNING: InputData was not an array or had an empty array.
// WARNING: No data to load, please specify a valid path & filename!
export const cLoadDataFileMessage1 = wr1.cWARNING + bas.cColon + bas.cSpace + bas.cNo + bas.cSpace + wr1.cdata + bas.cSpace + bas.cto + bas.cSpace + wr1.cload + bas.cComa + bas.cSpace; // WARNING: No data to load,
export const cloadDataFileMessage2 = wr1.cplease + bas.cSpace + wr1.cspecify + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.cpath + bas.cSpace + bas.cAndPersand + bas.cSpace + wr1.cfilename + bas.cExclamation; // please specify a valid path & filename!
export const cloadDataFileMessage3 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cInvalid + bas.cSpace + wr1.cfile + bas.cSpace + wr1.cformat + bas.cComa + bas.cSpace + wr1.cfile + bas.cSpace + wr1.cformats + bas.cSpace + wr1.csupported + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // WARNING: Invalid file format, file formats supported are:
// WARNING: No data to save, please specify a valid path & filename!
export const csaveDataFileMessage1 = wr1.cWARNING + bas.cColon + bas.cSpace + bas.cNo + bas.cSpace + wr1.cdata + bas.cSpace + bas.cto + bas.cSpace + wr1.csave + bas.cComa + bas.cSpace; // WARNING: No data to save,
// ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another release.
export const cdeployApplicationMessage1a = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cRelease + bas.cSpace + wr1.cfailed + bas.cSpace + wr1.cbecause + bas.cSpace + bas.cof + bas.cSpace + bas.ca + bas.cSpace + wr1.cfailure + bas.cSpace + bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cconstants + bas.cSpace + wr1.cvalidation + bas.cSpace + wr1.csystem + bas.cDot + bas.cSpace; // ERROR: Release failed because of a failure in the constants validation system.
export const cdeployApplicationMessage2a = wr1.cPlease + bas.cSpace + wr1.cfix + bas.cSpace + gen.cASAP + bas.cSpace + wr1.cbefore + bas.cSpace + wr1.cattempting + bas.cSpace + wr1.canother + bas.cSpace + wr1.crelease + bas.cDot; // Please fix ASAP before attempting another release.
// ERROR: Release failed because of a failure in the commands alias validation system. Please fix ASAP before attempting another release.
export const cdeployApplicationMessage1b = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cRelease + bas.cSpace + wr1.cfailed + bas.cSpace + wr1.cbecause + bas.cSpace + bas.cof + bas.cSpace + bas.ca + bas.cSpace + wr1.cfailure + bas.cSpace + bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.ccommands + bas.cSpace + wr1.calias + bas.cSpace + wr1.cvalidation + bas.cSpace + wr1.csystem + bas.cDot + bas.cSpace; //ERROR: Release failed because of a failure in the commands alias validation system.
export const ccommandSequencerMessage1 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cnominal + bas.cDot + wr1.ccommand + wr1.cSequencer + bas.cColon + bas.cSpace + wr1.cThe + bas.cSpace + wr1.cspecified + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cwas + bas.cSpace + gen.cnot + bas.cSpace + wr1.cfound + bas.cComa + bas.cSpace; // WARNING: nominal.commandSequencer: The specified command was not found,
export const ccommandSequencerMessage2 = wr1.cplease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cand + bas.cSpace + wr1.ctry + bas.cSpace + wr1.cagain + bas.cDot; // Please enter a valid command and try again.
export const cworkflowMessage1 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cnominal + bas.cDot + wr1.cworkflow + bas.cColon + bas.cSpace + wr1.cThe + bas.cSpace + wr1.cspecified + bas.cSpace + wr1.cworkflow + bas.cColon + bas.cSpace; // WARNING: nominal.workflow: The specified workflow:
export const cworkflowMessage2 = bas.cSpace + wr1.cwas + bas.cSpace + gen.cnot + bas.cSpace + wr1.cfound + bas.cSpace + bas.cin + bas.cSpace + wr1.ceither + bas.cSpace + wr1.cthe + bas.cSpace + wr1.csystem + bas.cSpace + wr1.cdefined + bas.cSpace + wr1.cworkflows + bas.cComa + bas.cSpace + bas.cor + bas.cSpace + wr1.cclient + bas.cSpace + wr1.cdefined + bas.cSpace + wr1.cworkflows + bas.cDot; // was not found in either the system defined workflows, or client defined workflows.
export const cworkflowMessage3 = bas.cSpace + wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.cworkflow + bas.cSpace + wr1.cname + bas.cSpace + wr1.cand + bas.cSpace + wr1.ctry + bas.cSpace + wr1.cagain + bas.cDot; // Please enter a valid workflow name and try again.
// After attempting to replace the secondaryCommandArgsDelimiter with the primaryCommandDelimiter commandString is:
export const ccommandGeneratorMessage1 = wr1.cAfter + bas.cSpace + wr1.cattempting + bas.cSpace + bas.cto + bas.cSpace + wr1.creplace + bas.cSpace + wr1.cthe + bas.cSpace + wr1.csecondary + wr1.cCommand + gen.cArgs + wr1.cDelimiter + bas.cSpace + wr1.cwith + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cprimary + wr1.cCommand + wr1.cDelimiter + bas.cSpace + wr1.ccommand + wr1.cString + sys.cSpaceIsColonSpace;
// After attempting to replace the tertiaryCommandDelimiter with the secondaryCommandArgsDelimiter commandString is:
export const ccommandGeneratorMessage2 = wr1.cAfter + bas.cSpace + wr1.cattempting + bas.cSpace + bas.cto + bas.cSpace + wr1.creplace + bas.cSpace + wr1.cthe + bas.cSpace + wr1.ctertiary + wr1.cCommand + wr1.cDelimiter + bas.cSpace + wr1.cwith + bas.cSpace + wr1.cthe + bas.cSpace + wr1.csecondary + wr1.cCommand + gen.cArgs + wr1.cDelimiter + bas.cSpace + wr1.ccommand + wr1.cString + sys.cSpaceIsColonSpace;
// WARNING: nominal.commandGenerator: Must enter a number greater than 0, number entered:
export const ccommandGeneratorMessage3 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cnominal + bas.cDot + wr1.ccommand + wr1.cGenerator + bas.cColon + bas.cSpace + wr1.cMust + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cnumber + bas.cSpace + wr1.cgreater + bas.cSpace + wr1.cthan + bas.cSpace + num.c0 + bas.cComa + bas.cSpace + wr1.cnumber + bas.cSpace + wr1.centered + bas.cColon + bas.cSpace;
// WARNING: nominal.commandGenerator: Number entered for the number of commands to generate is not a number:
export const ccommandGeneratorMessage4 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cnominal + bas.cDot + wr1.ccommand + wr1.cGenerator + bas.cColon + bas.cSpace + wr1.cNumber + bas.cSpace + wr1.centered + bas.cSpace + wr1.cfor + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cnumber + bas.cSpace + bas.cof + bas.cSpace + wr1.ccommands + bas.cSpace + bas.cto + bas.cSpace + wr1.cgenerate + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + bas.ca + bas.cSpace + wr1.cnumber + bas.cColon + bas.cSpace;
// WARNING: nominal.commandGenerator: The specified command:
export const ccommandGeneratorMessage5 = wr1.cWarning + bas.cColon + bas.cSpace + wr1.cnominal + bas.cDot + wr1.ccommand + wr1.cGenerator + bas.cColon + bas.cSpace + wr1.cThe + bas.cSpace + wr1.cspecified + bas.cSpace + wr1.ccommand + bas.cColon + bas.cSpace;
// was not found, please enter a valid command and try again.
export const ccommandGeneratorMessage6 = bas.cSpace + wr1.cwas + bas.cSpace + gen.cnot + bas.cSpace + wr1.cfound + bas.cComa + bas.cSpace + wr1.cplease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cand + bas.cSpace + wr1.ctry + bas.cSpace + wr1.cagain + bas.cDot;
// Command can be called by passing parameters and bypass the prompt system.
export const ccommandAliasGeneratorMessage1 = wr1.cCommand + bas.cSpace + wr1.ccan + bas.cSpace + bas.cbe + bas.cSpace + wr1.ccalled + bas.cSpace + bas.cby + bas.cSpace + wr1.cpassing + bas.cSpace + wr1.cparameters + bas.cSpace + wr1.cand + bas.cSpace + wr1.cbypass + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cprompt + bas.cSpace + wr1.csystem + bas.cDot;
// EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
export const ccommandAliasGeneratorMessage2 = wr1.cEXAMPLE + bas.cColon + bas.cSpace + bas.cOpenCurlyBrace + bas.cDoubleQuote + wr1.cconstants + bas.cDoubleQuote + bas.cColon + bas.cDoubleQuote + bas.cc + bas.cComa + gen.cconst + bas.cDoubleQuote + bas.cComa + bas.cDoubleQuote + wr1.cGenerator + bas.cDoubleQuote + bas.cColon + bas.cDoubleQuote + bas.cg + bas.cComa + phn.cgen + bas.cComa + phn.cgen + bas.crt + bas.cr + bas.cDoubleQuote + bas.cComa + bas.cDoubleQuote + wr1.cList +
bas.cDoubleQuote + bas.cColon + bas.cDoubleQuote + bas.cl + bas.cComa + bas.cls + bas.ct + bas.cDoubleQuote + bas.cCloseCurlyBrace;
// INVALID INPUT: Please enter a valid camel-case command name.
export const ccommandAliasGeneratorMessage3 = wr1.cINVALID + bas.cSpace + wr1.cINPUT + bas.cColon + bas.cSpace + wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.ccamel + bas.cDash + wr1.ccase + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cname + bas.cDot;
// INVALID INPUT: Please enter a valid command word alias list.
export const ccommandAliasGeneratorMessage4 = wr1.cINVALID + bas.cSpace + wr1.cINPUT + bas.cColon + bas.cSpace + wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cword + bas.cSpace + wr1.calias + bas.cSpace + wr1.clist + bas.cDot;
// INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.
export const ccommandAliasGeneratorMessage5 = wr1.cINVALID + bas.cSpace + wr1.cCOMMAND + bas.cSpace + wr1.cINPUT + bas.cColon + bas.cSpace + wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cdata + bas.cSpace + wr1.cwhen + bas.cSpace + wr1.ctrying + bas.cSpace + bas.cto + bas.cSpace + wr1.ccall + bas.cSpace + wr1.cwith + bas.cSpace + wr1.cparameters + bas.cDot;
// INVALID INPUT: Please enter a valid constant value that contains more than 4 characters.
export const cconstantsGeneratorMessage1 = wr1.cINVALID + bas.cSpace + wr1.cINPUT + bas.cColon + bas.cSpace + wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.cconstant + bas.cSpace + wr1.cvalue + bas.cSpace + wr1.cthat + bas.cSpace + wr1.ccontains + bas.cSpace + wr1.cmore + bas.cSpace + wr1.cthan + bas.cSpace + num.c4 + bas.cSpace + wr1.ccharacters + bas.cDot;
// WARNING: The constant has already been defined in the following library(ies):
export const cconstantsGeneratorMessage2 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cThe + bas.cSpace + wr1.cconstant + bas.cSpace + wr1.chas + bas.cSpace + wr1.calready + bas.cSpace + wr1.cbeen + bas.cSpace + wr1.cdefined + bas.cSpace + bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cfollowing + bas.cSpace + wr1.clibrary + bas.cOpenParenthesis + phn.cies + bas.cCloseParenthesis + bas.cColon + bas.cSpace;
// INVALID INPUT: Please enter a valid constant list.
export const cconstantsGeneratorListMessage1 = wr1.cINVALID + bas.cSpace + wr1.cINPUT + bas.cColon + bas.cSpace + wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.cconstant + bas.cSpace + wr1.cList + bas.cDot;
// PASSED: All duplicate command aliases validation tests!
export const cvalidateCommandAliasesMessage1 = wr1.cPASSED + bas.cColon + bas.cSpace + wr1.cAll + bas.cSpace + wr1.cduplicate + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cAliases + bas.cSpace + wr1.cvalidation + bas.cSpace + wr1.ctests + bas.cExclamation;
// About to call the rule broker to process on the number of single quotes
export const cgetCommandArgsMessage1 = wr1.cAbout + bas.cSpace + bas.cto + bas.cSpace + wr1.ccall + bas.cSpace + wr1.cthe + bas.cSpace + wr1.crule + bas.cSpace + wr1.cbroker + bas.cSpace + bas.cto + bas.cSpace + wr1.cprocess + bas.cSpace + bas.con + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cnumber + bas.cSpace + bas.cof + bas.cSpace + wr1.csingle + bas.cSpace + wr1.cquotes + bas.cSpace; // About to call the rule broker to process on the number of single quotes
// and determine if it-be even or odd
export const cgetCommandArgsMessage2 = wr1.cand + bas.cSpace + wr1.cdetermine + bas.cSpace + bas.cif + bas.cSpace + bas.cit + bas.cDash + bas.cbe + bas.cSpace + wr1.ceven + bas.cSpace + bas.cor + bas.cSpace + wr1.codd;
// WARNING: Command does not exist, please enter a valid command and try again!
export const cexecuteCommandMessage1 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cCommand + bas.cSpace + wr1.cdoes + bas.cSpace + gen.cnot + bas.cSpace + wr1.cexist + bas.cComa + bas.cSpace + wr1.cplease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cand + bas.cSpace + wr1.ctry + bas.cSpace + wr1.cagain + bas.cExclamation;
// WARNING: lexical.parseBusinessRuleArgument: Invalid combination of inputs to the lexical.parseBusinessRuleArgument function!
export const cparseBusinessRuleArgumentMessage1 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.clexical + bas.cDot + wr1.cparse + wr1.cBusiness + wr1.cRule + wr1.cArgument + bas.cColon + bas.cSpace + wr1.cInvalid + bas.cSpace + wr1.ccombination + bas.cSpace + bas.cof + bas.cSpace + wr1.cinputs + bas.cSpace + bas.cto + bas.cSpace + wr1.cthe + bas.cSpace + wr1.clexical + bas.cDot + wr1.cparse + wr1.cBusiness + wr1.cRule + wr1.cArgument + bas.cSpace + wr1.cfunction + bas.cExclamation + bas.cSpace;
export const cparseBusinessRuleArgumentMessage2 = wr1.cPlease + bas.cSpace + wr1.cadjust + bas.cSpace + wr1.cinputs + bas.cSpace + wr1.cand + bas.cSpace + wr1.ctry + bas.cSpace + wr1.cagain + bas.cDot; //Please adjust inputs and try again.
// Caught the case that the user may have only specified a single data hive, such as the configuration data hive.
export const cprintDataHiveAttributesMessage1 = wr1.cCaught + bas.cSpace + wr1.cthe + bas.cSpace + wr1.ccase + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cuser + bas.cSpace + wr1.cmay + bas.cSpace + wr1.chave + bas.cSpace + wr1.conly + bas.cSpace + wr1.cspecified + bas.cSpace + bas.ca + bas.cSpace + wr1.csingle + bas.cSpace + wr1.cdata + bas.cSpace + wr1.chive + bas.cComa + bas.cSpace;
export const cprintDataHiveAttributesMessage2 = wr1.csuch + bas.cSpace + bas.cas + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cconfiguration + bas.cSpace + wr1.cdata + bas.cSpace + wr1.chive + bas.cDot;
// ERROR: Please enter a valid name.space.attributeName for the system to print out attribute data from.
export const cprintDataHiveAttributesMessage3 = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.cname + bas.cDot + wr1.cspace + bas.cDot + wr1.cattribute + wr1.cName + bas.cSpace + wr1.cfor + bas.cSpace + wr1.cthe + bas.cSpace + wr1.csystem + bas.cSpace + bas.cto + bas.cSpace + wr1.cprint + bas.cSpace + wr1.cout + bas.cSpace + wr1.cattribute + bas.cSpace + wr1.cdata + bas.cSpace + wr1.cfrom + bas.cDot;
// Nothing to echo.
export const cNothingToEcho = wr1.cNothing + bas.cSpace + bas.cto + bas.cSpace + wr1.cecho + bas.cDot; // Nothing to echo.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 'Caught the case that the input string contains the global carriage return term.'
export const cprompt01 = 'cprompt01';
// 'index of the carriage return character: '
export const cprompt02 = 'cprompt02';
// 'Caught the case that the string includes a carriage return and new line characters.'
export const cprompt03 = 'cprompt03';
// '!file.includes(undefined)'
export const cprintMessageToFile01 = 'cprintMessageToFile01';
// 'ERROR: Failure to log to file: '
export const cprintMessageToFile02 = 'cprintMessageToFile02';
// 'ERROR: Log File includes undefined.'
export const cprintMessageToFile03 = 'cprintMessageToFile03';

// Coded System Messages
// EXAMPLE:
// '!mergedData[wr1.csystem] && !D[wr1.csystem] === true'
