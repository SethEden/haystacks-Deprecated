/**
 * @file message.constants.js
 * @module message-constants
 * @description Contains many re-usable message constants.
 * @requires module:basic.constants
 * @requires module:constant.constants
 * @requires module:phonic.constants
 * @requires module:numeric.constants
 * @requires module:generic.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @author Seth Hollingsead
 * @date 2021/12/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var bas = require('./basic.constants');
var con = require('./constant.constants');
var phn = require('./phonic.constants');
var num = require('./numeric.constants');
var gen = require('./generic.constants');
var sys = require('./system.constants');
var wr1 = require('./word1.constants');

// Logging Constants
let cBEGIN_Function = wr1.cBEGIN + bas.cSpace + bas.cDoublePercent + bas.cSpace + wr1.cFunction; // BEGIN %% Function
let cEND_Function = wr1.cEND + bas.cSpace + bas.cDoublePercent + bas.cSpace + wr1.cFunction; // END %% Function
let cinputData = wr1.cinput + wr1.cData; // inputData
let cInputData = wr1.cInput + wr1.cData; // InputData
let cinputMetaData = wr1.cinput + wr1.cMetaData; // inputMetaData
let cInputMetaData = wr1.cInput + wr1.cMetaData; // InputMetaData
let cinputDataIs = cinputData + sys.cSpaceIsColonSpace; // input Data is:
let cinputMetaDataIs = wr1.cinput + wr1.cMetaData + sys.cSpaceIsColonSpace; // input MetaData is:
let creturnDataIs = wr1.creturn + wr1.cData + sys.cSpaceIsColonSpace; // return Data is:

// System Messages
let cCharacterGenerationMessage1 = wr1.ctype + bas.cTo + wr1.cGenerate + sys.cSpaceIsColonSpace; // typeToGenerate is:
let cCharacterGenerationMessage2 = sys.cGenerateA + bas.cSpace + wr1.cnumber + bas.cDot; // Generate a number.
let cCharacterGenerationMessage3 = sys.cGenerateA + bas.cSpace + wr1.crandom + bas.cSpace + wr1.cupper + bas.cSpace + wr1.ccase + bas.cSpace + bas.cor + bas.cSpace + wr1.clower + bas.cSpace + wr1.ccase + bas.cSpace + wr1.cletter + bas.cDot; // Generate a random upper case or lower case letter.
let cCharacterGenerationMessage4 = sys.cGenerateA + bas.cSpace + wr1.cspecial + bas.cSpace + wr1.ccharacter + bas.cDot; // Generate a special character.
let cCharacterGenerationMessage5 = wr1.cDEFAULT + bas.cColon + bas.cSpace + sys.cGenerateA + bas.cSpace + wr1.crandom + bas.cSpace + wr1.cupper + bas.cSpace + wr1.ccase + bas.cSpace + bas.cor + bas.cSpace + wr1.clower + bas.cSpace + wr1.ccase + bas.cSpace + wr1.cletter + bas.cDot; // DEFAULT: Generate a random upper case or lower case letter.
let cMathOperationsMessage1 = sys.cbigInteger + sys.cSpaceIsColonSpace; // bigInteger is:
let cnumberOfCharactersToGenerateIs = sys.cnumberOfCharactersToGenerate + sys.cSpaceIsColonSpace; // numberOfCharactersToGenerate is:
let cgenerateSpecialCharactersIs = sys.cgenerateSpecialCharacters + sys.cSpaceIsColonSpace; // generateSpecialCharacters is:
let callowableSpecialCharactersIs = sys.callowableSpecialCharacters + sys.cSpaceIsColonSpace; // allowableSpecialCharacters is:
let cspecifiedSuffixAndDomainIs = sys.cspecifiedSuffixAndDomain + sys.cSpaceIsColonSpace; // specifiedSuffixAndDomain is:
let cfailureModeIs = sys.cfailureMode + sys.cSpaceIsColonSpace; // failureMode is:
let cprefixIs = wr1.cprefix + sys.cSpaceIsColonSpace; // prefix is:
let csuffixIs = wr1.csuffix + sys.cSpaceIsColonSpace; // suffix is:
let cWithoutTheAtSymbol = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cSpace + wr1.csymbol + bas.cDot; // Without the @ symbol.
let cWithoutThePrefix = sys.cWithoutThe + bas.cSpace + wr1.cprefix + bas.cDot; // Without the prefix.
let cWithoutTheSuffix = sys.cWithoutThe + bas.cSpace + wr1.csuffix + bas.cDot; // Without the suffix.
let cWithoutTheAtSymbolAndPrefix = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cSpace + sys.candPrefix + bas.cDot; // Without the @ and prefix.
let cDEFAULTWithoutTheAtSymbolAndPrefix = wr1.cDEFAULT + bas.cColon + bas.cSpace + cWithoutTheAtSymbolAndPrefix // DEFAULT: Without the @ and prefix.
let cdomainNameIs = wr1.cdomain + wr1.cName + sys.cSpaceIsColonSpace; // domainName is:
let cnumberOfPrefixCharactersIs = wr1.cnumber + bas.cOf + wr1.cPrefix + wr1.cCharacters + sys.cSpaceIsColonSpace; // numberOfPrefixCharacters is:
let cnumberOfSuffixCharactersIs = wr1.cnumber + bas.cOf + wr1.cSuffix + wr1.cCharacters + sys.cSpaceIsColonSpace; // numberOfSuffixCharacters is:
let cWithoutTheDotSymbol = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cSpace + wr1.csymbol + bas.cDot; // Without the . symbol.
let cWithoutTheAtAndDotSymbols = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cSpace + wr1.cand + bas.cSpace + bas.cDot + bas.cSpace + wr1.csymbols + bas.cDot; // Without the @ and . symbols.
let cWithoutTheDomainName = sys.cWithoutThe + bas.cSpace + sys.cdomainSpaceName + bas.cDot; // Without the domain name.
let cWithoutTheAtSymbolAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the @ and domain name.
let cWithoutTheDotAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the . and domain name.
let cWithoutTheAtSymbolDotAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + bas.cDot + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the @, . and domain name.
let cWithoutTheDotAndPrefix = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cSpace + sys.candPrefix + bas.cDot; // Without the . and prefix.
let cWithoutTheAtSymbolAndSuffix = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cSpace + sys.candSuffix + bas.cDot; // Without the @ and suffix.
let cWithoutTheDotAndSuffix = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cSpace + sys.candSuffix + bas.cDot; // Without the . and suffix.
let cWithoutTheAtSymbolDotAndPrefix = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + bas.cDot + bas.cSpace + sys.candPrefix + bas.cDot; // Without the @, . and prefix.
let cWithoutTheAtSymbolDotAndSuffix = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + bas.cDot + bas.cSpace + sys.candSuffix + bas.cDot; // Without the @, . and suffix.
let cWithoutTheAtSymbolDotPrefixAndSuffix = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + bas.cDot + bas.cComa + bas.cSpace + wr1.cprefix + bas.cSpace + sys.candSuffix + bas.cDot; // Without the @, ., prefix and suffix.
let cWithoutThePrefixAndDomainName = sys.cWithoutThe + bas.cSpace + wr1.cprefix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the prefix and domain name.
let cWithoutTheSuffixAndDomainName = sys.cWithoutThe + bas.cSpace + wr1.csuffix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the suffix and domain name.
let cWithoutThePrefixAndSuffix = sys.cWithoutThe + bas.cSpace + wr1.cprefix + bas.cSpace + sys.candSuffix + bas.cDot; // Without the prefix and suffix.
let cWithoutThePrefixSuffixAndDomainName = sys.cWithoutThe + bas.cSpace + wr1.cprefix + bas.cComa + bas.cSpace + wr1.csuffix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the prefix, suffix and domain name.
let cWithoutTheAtSymbolPrefixAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + wr1.cprefix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the @, prefix and domain name.
let cWithoutTheDotPrefixAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cComa + bas.cSpace + wr1.cprefix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the ., prefix and domain name.
let cWithoutTheAtSymbolSuffixAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + wr1.csuffix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the @, suffix and domain name.
let cWithoutTheDotSuffixAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cComa + bas.cSpace + wr1.csuffix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the ., suffix and domain name.
let cWithoutTheAtSymbolPrefixSuffixAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + wr1.cprefix + bas.cComa + bas.cSpace + wr1.csuffix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the @, prefix, suffix and domain name.
let cWithoutTheDotPrefixSuffixAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cComa + bas.cSpace + wr1.cprefix + bas.cComa + bas.cSpace + wr1.csuffix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the ., prefix, suffix and domain name.
let cWithoutThePrefixSuffixAndAtSymbol = sys.cWithoutThe + bas.cSpace + wr1.cprefix + bas.cComa + bas.cSpace + wr1.csuffix + bas.cSpace + wr1.cname + bas.cAt + bas.cDot; // Without the prefix, suffix and @.
let cWithoutThePrefixSuffixAndDot = sys.cWithoutThe + bas.cSpace + wr1.cprefix + bas.cComa + bas.cSpace + wr1.csuffix + bas.cSpace + wr1.cand + bas.cSpace + bas.cDot + bas.cDot; // Without the prefix, suffix and ..
let cIndexOfTheSpace = wr1.cIndex + bas.cSpace + bas.cof + bas.cSpace + wr1.cthe + bas.cSpace; // Index of the
let cisResolvingAs = bas.cis + bas.cSpace + wr1.cresolving + bas.cSpace + bas.cas + bas.cColon + bas.cSpace; // is resolving as:
let cparsedStringSpaceTerm = wr1.cparsed + wr1.cString + bas.cSpace + wr1.cterm; // parsedString term
let cstring1Is = wr1.cstring + num.c1 + sys.cSpaceIsColonSpace; // string1 is:
let cstring2Is = wr1.cstring + num.c2 + sys.cSpaceIsColonSpace; // string2 is:
let cvariation0ValueIs = wr1.cvariation + num.c0 + bas.cSpace + wr1.cvalue + sys.cSpaceIsColonSpace; // variation0 value is:
let cvariation1ValueIs = wr1.cvariation + num.c1 + bas.cSpace + wr1.cvalue + sys.cSpaceIsColonSpace; // variation1 value is:
let ciValueIs = bas.ci + bas.cSpace + wr1.cvalue + sys.cSpaceIsColonSpace; // i value is:
let cjValueIs = bas.cj + bas.cSpace + wr1.cvalue + sys.cSpaceIsColonSpace; // j value is:
let cdeletionCostIs = wr1.cdeletion + wr1.cCost + sys.cSpaceIsColonSpace; // deletionCost is:
let cinsertionCostIs = wr1.cinsertion + wr1.cCost + sys.cSpaceIsColonSpace; // insertionCost is:
let csubstitutionCostIs = wr1.csubstitution + wr1.cCost + sys.cSpaceIsColonSpace; // substitutionCost is:
let ccamelCaseWordCountIs = wr1.ccamel + wr1.cCase + wr1.cWord + wr1.cCount + sys.cSpaceIsColonSpace; // camelCaseWordCount is:
let ccontainsAcronymIs = wr1.ccontains + wr1.cAcronym + sys.cSpaceIsColonSpace; // containsAcronym is:
let cspacesCountIs = wr1.cspaces + wr1.cCount + sys.cSpaceIsColonSpace; // spacesCount is:
let cperiodCountIs = wr1.cperiod + wr1.cCount + sys.cSpaceIsColonSpace; // periodCount is:
let cdashCountIs = wr1.cdash + wr1.cCount + sys.cSpaceIsColonSpace; // dashCount is:
let cunderscoreCountIs = wr1.cunderscore + wr1.cCount + sys.cSpaceIsColonSpace; // underscoreCount is:
let cstringDeltaValueIs = wr1.cstring + gen.cDelta + bas.cSpace + wr1.cvalue + sys.cSpaceIsColonSpace; // stringDelta value is:
let cFilenamesMatch = wr1.cFilenames + bas.cSpace + wr1.cmatch; // Filenames match
let cFilenamesDoNotMatch = wr1.cFilenames + bas.cSpace + bas.cdo + bas.cSpace + gen.cnot + bas.cSpace + wr1.cmatch; // Filenames do not match
let cArrayElementsMatch = wr1.cArray + bas.cSpace + wr1.celements + bas.cSpace + wr1.cmatch; // Array elements match
let cArrayElementsDoNotMatch = wr1.cArray + bas.cSpace + wr1.celements + bas.cSpace + bas.cdo + bas.cSpace + gen.cnot + bas.cSpace + wr1.cmatch; // Array elements do not match
let clineArray2Is = wr1.cline + wr1.cArray + bas.cOpenBracket + num.c2 + bas.cCloseBracket + sys.cSpaceIsColonSpace; // lineArray[2] is:
let cSuggestedLineOfCodeIs = wr1.cSuggested + bas.cSpace + wr1.cline + bas.cSpace + bas.cof + bas.cSpace + wr1.ccode + sys.cSpaceIsColonSpace; // Suggested line of code is:
let cErrorUnknownConstantFile = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cUnknown + bas.cSpace + wr1.cconstant + bas.cSpace + wr1.cfile + bas.cDot; // ERROR: Unknown constant file.
let cconstantsTypesKeysIs = wr1.cconstants + wr1.cTypes + wr1.cKeys + sys.cSpaceIsColonSpace; // constantsTypesKeys is:
let cconstantTypeKeyIs = wr1.cconstant + wr1.cType + wr1.cKey + sys.cSpaceIsColonSpace; // constantTypeKey is:
let cconstantTypeValuesIs = wr1.cconstant + wr1.cType + wr1.cValues + sys.cSpaceIsColonSpace; // constantTypeValues is:
let cconstantsKeysIs = wr1.cconstants + wr1.cKeys + sys.cSpaceIsColonSpace; // constantsKeys is:
let cconstantKeyIs = wr1.cconstant + wr1.cKey + sys.cSpaceIsColonSpace; // constantKey is:
let cconstantActualValueIs = wr1.cconstant + wr1.cActual + wr1.cValue + sys.cSpaceIsColonSpace; // constantActualValue is:
let cconstantNameIs = wr1.cconstant + wr1.cName + sys.cSpaceIsColonSpace; // constantName is:
let cconstantValueIs = wr1.cconstant + wr1.cValue + sys.cSpaceIsColonSpace; // constantValue is:
let cdeltaLengthIs = wr1.cdelta + wr1.cLength + sys.cSpaceIsColonSpace; // deltaLength is:
let crecursiveSubStringIs = wr1.crecursive + wr1.cSubString + sys.cSpaceIsColonSpace; // recursiveSubString is:
let cmaxStringLengthIs = gen.cmax + wr1.cString + wr1.cLength + sys.cSpaceIsColonSpace; // maxStringLength is:
let cminStringLengthIs = gen.cmin + wr1.cString + wr1.cLength + sys.cSpaceIsColonSpace; // minStringLength is:
let ccurrentMasterStringArrayElementIs = sys.ccurrentMasterStringArrayElement + sys.cSpaceIsColonSpace; // currentMasterStringArrayElement is:
let cConstantDoesNotExist = wr1.cConstant + bas.cSpace + wr1.cdoes + bas.cSpace + gen.cNOT + bas.cSpace + wr1.cexist + bas.cColon + bas.cSpace; // Constant does NOT exist:
let cConstantDoesExist = wr1.cConstant + bas.cSpace + wr1.cdoes + bas.cSpace + wr1.cexist + bas.cColon + bas.cSpace; // Constant does exist:
let cBEGIN_ithLoop = wr1.cBEGIN + bas.cSpace + bas.ci + bas.cDash + bas.cth + bas.cSpace + wr1.cloop + bas.cColon + bas.cSpace; // BEGIN i-th loop:
let cBEGIN_ithIteration = wr1.cBEGIN + bas.cSpace + bas.ci + bas.cDash + bas.cth + bas.cSpace + wr1.citeration + bas.cColon + bas.cSpace; // BEGIN i-th iteration:
let cBEGIN_jthLoop = wr1.cBEGIN + bas.cSpace + bas.cj + bas.cDash + bas.cth + bas.cSpace + wr1.cloop + bas.cColon + bas.cSpace; // BEGIN j-th loop:
let cBEGIN_kthIteration = wr1.cBEGIN + bas.cSpace + bas.ck + bas.cDash + bas.cth + bas.cSpace + wr1.citeration + bas.cColon + bas.cSpace; // BEGIN k-th iteration:
let cEND_ithLoop = wr1.cEND + bas.cSpace + bas.ci + bas.cDash + bas.cth + bas.cSpace + wr1.cloop + bas.cColon + bas.cSpace; // END i-th loop:
let cEND_ithIteration = wr1.cEND + bas.cSpace + bas.ci + bas.cDash + bas.cth + bas.cSpace + wr1.cIteration + bas.cColon + bas.cSpace; // END i-th iteration:
let cEND_jthLoop = wr1.cEND + bas.cSpace + bas.cj + bas.cDash + bas.cth + bas.cSpace + wr1.cloop + bas.cColon + bas.cSpace; // END j-th loop:
let cEND_kthIteration = wr1.cEND + bas.cSpace + bas.ck + bas.cDash + bas.cth + bas.cSpace + wr1.citeration + bas.cColon + bas.cSpace; // END k-th iteration:
let ccurrentCommandIs = wr1.ccurrent + wr1.cCommand + sys.cSpaceIsColonSpace; // currentCommand is:
let caliasListIs = wr1.calias + wr1.cList + sys.cSpaceIsColonSpace; // aliasList is:
let ccurrentAliasIs = wr1.ccurrent + wr1.cAlias + sys.cSpaceIsColonSpace; // currentAlias is:
let cduplicateAliasCountIs = wr1.cduplicate + wr1.cAlias + wr1.cCount + sys.cSpaceIsColonSpace; // duplicateAliasCount is:
let cduplicateCommandAliasIs = wr1.cduplicate + bas.cSpace + wr1.cCommand + bas.cSpace + wr1.cAlias + sys.cSpaceIsColonSpace; // duplicate command alias is:
let ccommandWordAliasesBeforeChangeIs = wr1.ccommand + wr1.cWord + wr1.cAliases + bas.cSpace + wr1.cBEFORE + bas.cSpace + wr1.cCHANGE + sys.cSpaceIsColonSpace; // commandWordAliases BEFORE CHANGE is:
let ccommandWordAliasesAfterChangeIs = wr1.ccommand + wr1.cWord + wr1.cAliases + wr1.cArray + bas.cSpace + wr1.cAFTER + bas.cSpace + wr1.cCHANGE + sys.cSpaceIsColonSpace; // commandWordAliasesArray AFTER CHANGE is:
let cmasterCommandWordAlisesArrayIs = wr1.cmaster + wr1.cCommand + wr1.cWord + wr1.cAliases + wr1.cArray + sys.cSpaceIsColonSpace; // masterCommandWordAliasesArray is:
let cmasterArrayIndexIs = wr1.cmaster + wr1.cArray + wr1.cIndex + sys.cSpaceIsColonSpace; // masterArrayIndex is:
let cCommandAliasesAre = wr1.cCommand + bas.cSpace + wr1.cAliases + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // Command Aliases are:
let cexpandedLehmerCodeArrayIs = wr1.cexpanded + sys.cLehmerCodeArray + sys.cSpaceIsColonSpace; // expandedLehmerCodeArray is:
let cindexOfExpansionIs = wr1.cindex + bas.cOf + wr1.cExpansion + sys.cSpaceIsColonSpace; // indexOfExpansion is:
let carrayToBeExpandedIs = wr1.carray+ bas.cTo + bas.cBe + wr1.cExpanded + sys.cSpaceIsColonSpace; // arrayToBeExpanded is:
let climitOfExpansionIs = wr1.climit + bas.cOf + wr1.cExpansion + sys.cSpaceIsColonSpace;  // limitOfExpansion is:
let cpushingLehmerCodeArray1ToReturnDataValue = wr1.cpushing + bas.cSpace + sys.cLehmerCodeArray + num.c1 + bas.cSpace + bas.cto + bas.cSpace + sys.creturnData + bas.cSpace + wr1.cvalue + bas.cColon + bas.cSpace; // pushing lehmerCodeArray1 to returnData value:
let creturnDataAfterPushIs = sys.creturnData + bas.cSpace + wr1.cafter + bas.cSpace + wr1.cpush + sys.cSpaceIsColonSpace; // returnData after push is:
let creturnDataAfterLevel1Is = sys.creturnData + bas.cSpace + wr1.cafter + bas.cSpace + wr1.clevel + bas.cSpace + num.c1 + sys.cSpaceIsColonSpace; // returnData after Level 1 is:
let carrayToBeExpandedDotLengthIs = wr1.carray + bas.cTo + bas.cBe + wr1.cExpanded + bas.cDot + wr1.clength + sys.cSpaceIsColonSpace; // arrayToBeExpanded.length is:
let creturnDataDotLengthIs = sys.creturnData + bas.cDot + wr1.cLength + sys.cSpaceIsColonSpace; // returnData.length is:
let creturnDataBeforePopIs = sys.creturnData + bas.cSpace + wr1.cBEFORE + bas.cSpace + wr1.cPOP + sys.cSpaceIsColonSpace; // returnData BEFORE POP is:
let creturnDataAfterPopIs = sys.creturnData + bas.cSpace + wr1.cAFTER + bas.cSpace + wr1.cPOP + sys.cSpaceIsColonSpace; // returnData AFTER POP is:
let cmasterTempReturnDataBeforeRecursiveCallIs = wr1.cmaster + wr1.cTemp + wr1.cReturn + wr1.cData + bas.cSpace + wr1.cBEFORE + bas.cSpace + wr1.crecursive + bas.cSpace + wr1.ccall + sys.cSpaceIsColonSpace; // masterTempReturnData BEFORE recursive call is:
let ctempReturnData1Is = wr1.ctemp + wr1.cReturn + wr1.cData + num.c1 + sys.cSpaceIsColonSpace; // tempReturnData1 is:
let ctempReturnData1DotLengthIs = wr1.ctemp + wr1.cReturn + wr1.cData + num.c1 + wr1.clength + sys.cSpaceIsColonSpace; // tempReturnData1.length is:
let cpushingTempReturnData1Kvalue = wr1.cpushing + bas.cSpace + wr1.ctemp + wr1.cReturn + wr1.cData + num.c1 + bas.cOpenBracket + bas.ck + bas.cCloseBracket + bas.cSpace + wr1.cvalue + bas.cColon + bas.cSpace; // pushing tempReturnData1[k] value:
let cmasterTempReturnDataAfterRecursiveCallIs = wr1.cmaster + wr1.cTemp + wr1.cReturn + wr1.cData + bas.cSpace + wr1.cAFTER + bas.cSpace + wr1.crecursive + bas.cSpace + wr1.ccall + sys.cSpaceIsColonSpace; // masterTempReturnData AFTER recursive call is:
let clookupIndexIs = wr1.clookup + wr1.cIndex + sys.cSpaceIsColonSpace; // lookupIndex is:
let clookupValueIs = wr1.clookup + wr1.cValue + sys.cSpaceIsColonSpace; // lookupValue is:
let cDataCatagoryShouldBe = wr1.cData + bas.cSpace + wr1.cCatagory + bas.cSpace + wr1.cshould + bas.cSpace + bas.cbe + bas.cColon + bas.cSpace; // Data Catagory should be:
let cDataCatagoryDetailNameShouldBe = wr1.cData + bas.cSpace + wr1.cCatagory + bas.cSpace + wr1.cDetail + bas.cSpace + wr1.cName + bas.cSpace + wr1.cshould + bas.cSpace + bas.cbe + bas.cColon + bas.cSpace; // Data Catagory Detail Name should be:
let cKeywordNameShouldBe = wr1.cKeyword + bas.cSpace + wr1.cName + bas.cSpace + wr1.cshould + bas.cSpace + bas.cbe + bas.cColon + bas.cSpace; // Keyword Name should be:
let cpathElementIs = wr1.cpath + wr1.cElement + sys.cSpaceIsColonSpace; // pathElement is:
let ccaseIEqual0 = wr1.ccase + bas.cColon + bas.cSpace + bas.ci + bas.cSpace + bas.cEqual + bas.cSpace + num.c0; // case: i = 0
let ccasePathElementEqual = wr1.ccase + bas.cColon + bas.cSpace + wr1.cpath + wr1.cElement + bas.cSpace + bas.cEqual + bas.cSpace; // case: pathElement =
let ccaseElse = wr1.ccase + bas.cSpace + wr1.celse; // case else
let creturnDataSoFarIs = sys.creturnData + bas.cSpace + bas.cso + bas.cSpace + wr1.cfar + sys.cSpaceIsColonSpace; // returnData so far is:
let cpathArrayIs = wr1.cpath + wr1.cArray + sys.cSpaceIsColonSpace; // pathArray is:
let ccurrentPathElementIs = wr1.ccurrent + bas.cSpace + wr1.cpath + bas.cSpace + wr1.celement + sys.cSpaceIsColonSpace; // current path element is:
let cAttemptingToLoadXmlData = wr1.cAttempting + bas.cSpace + bas.cto + bas.cSpace + wr1.cload + bas.cSpace + gen.cXML + bas.cSpace + wr1.cdata + bas.cExclamation; // Attempting to load XML data!
let cAttemptingToLoadCsvData = wr1.cAttempting + bas.cSpace + bas.cto + bas.cSpace + wr1.cload + bas.cSpace + gen.cCSV + bas.cSpace + wr1.cdata + bas.cExclamation; // Attempting to load CSV data!
let cAttemptingToLoadJsonData = wr1.cAttempting + bas.cSpace + bas.cto + bas.cSpace + wr1.cload + bas.cSpace + gen.cJSON + bas.cSpace + wr1.cdata + bas.cExclamation; // Attempting to load JSON data!
let cLoadedDataIs = wr1.cLoaded + bas.cSpace + wr1.cdata + sys.cSpaceIsColonSpace; // Loaded data is:
let cattributeArrayIs = wr1.cattribute + wr1.cArray + sys.cSpaceIsColonSpace; // attributeArray is:
let cattributeArray0Is = wr1.cattribute + wr1.cArray + bas.cOpenBracket + num.c0 + bas.cCloseBracket + sys.cSpaceIsColonSpace; // attributeArray[0] is:
let carrayIs = wr1.carray + sys.cSpaceIsColonSpace; // array is:
let cvalueIs = wr1.cvalue + sys.cSpaceIsColonSpace; // value is:
let cmyFunctionIs = bas.cmy + wr1.cFunction + sys.cSpaceIsColonSpace; // myFunction is:
let carrayInputObjectIsNotAnArray = wr1.carray + bas.cSpace + wr1.cinput + bas.cSpace + wr1.cobject + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + bas.can + bas.cSpace + wr1.carray + bas.cDot; // array input object is not an array.
let cTheValueWasFoundInTheArray = wr1.cThe + bas.cSpace + wr1.cvalue + bas.cSpace + wr1.cwas + bas.cSpace + wr1.cfound + bas.cSpace + bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.carray + bas.cDot; // The value was found in the array.
let cTheValueWasNotFoundInTheArray = wr1.cThe + bas.cSpace + wr1.cvalue + bas.cSpace + wr1.cwas + bas.cSpace + gen.cNOT + bas.cSpace + wr1.cfound + bas.cSpace + bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.carray + bas.cDot; // The value was NOT found in the array.
let coriginalStringIs = wr1.coriginal + wr1.cString + sys.cSpaceIsColonSpace; // originalString is:
let cindexIs = wr1.cindex + bas.cSpace + sys.cSpaceIsColonSpace; // index is:
let creplacementIs = wr1.creplacement + sys.cSpaceIsColonSpace; // replacement is:
let cDEPLOY_APPLICATION = wr1.cDEPLOY + bas.cUnderscore + wr1.cAPPLICATION; // DEPLOY APPLICATION
let cRELEASE_APPLICATION = wr1.cRELEASE + bas.cUnderscore + wr1.cAPPLICATION; // RELEASE APPLICATION
let cDeploymentWasCompleted = wr1.cDeployment + bas.cSpace + wr1.cwas + bas.cSpace + wr1.ccompleted + bas.cColon + bas.cSpace; // Deployment was completed:
let cDeploymentFailed = wr1.cDeployment + bas.cSpace + wr1.cfailed; // Deployment failed
let cReleaseFailed = wr1.cRelease + bas.cSpace + wr1.cfailed; // Release failed
let cinputDataIis = cinputData + bas.cOpenBracket + bas.ci + bas.cCloseBracket + sys.cSpaceIsColonSpace; // inputData[i] is:
let caggregateCommandStringIs = wr1.caggregate + wr1.cCommand + wr1.cString + sys.cSpaceIsColonSpace; // aggregateCommandString is:
let cmetaDataParametersIs = wr1.cmetaData + wr1.cParameters + sys.cSpaceIsColonSpace; // metaDataParameters is:
let cmetaDataParametersLengthIs = wr1.cmetaData + wr1.cParameters + bas.cSpace + wr1.cLength + sys.cSpaceIsColonSpace; // metaDataParameters length is:
let cmetaDataPathAndFilenameIs = wr1.cmetaData + wr1.cPath + wr1.cAnd + wr1.cFilename + sys.cSpaceIsColonSpace; // metaDataPathAndFilename is:
let cpathAndFilenameIs = wr1.cpath + wr1.cAnd + wr1.cFilename + sys.cSpaceIsColonSpace; // pathAndFilename is:
let ccontentsAre = wr1.ccontents + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // contents are:
let ccontentsOfDare = wr1.ccontents + bas.cSpace + bas.cof + bas.cSpace + bas.cD + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // contents of D are:
let cBEGIN_ithIterationOfInputDataArray = cBEGIN_ithIteration + bas.cof + bas.cSpace + wr1.cthe + bas.cSpace + cinputData + bas.cSpace + wr1.carray + bas.cDot + bas.cSpace + bas.ci + sys.cSpaceIsColonSpace; // Begin the i-th iteration of the inputData array. i is:
let ccurrentRuleIs = wr1.ccurrent + wr1.cRule + sys.cSpaceIsColonSpace; // currentRule is:
let crulesIs = wr1.crules + sys.cSpaceIsColonSpace; // rules is:
let cruleInputDataIs = wr1.crule + cInputData + sys.cSpaceIsColonSpace; // ruleInputData is:
let cruleInputMetaData = wr1.crule + wr1.cInput + wr1.cMetaData + sys.cSpaceIsColonSpace; // ruleInputMetaData is:
let cBusinessRuleStartTimeIs = wr1.cBusiness + bas.cSpace + wr1.cRule + bas.cSpace + wr1.cStart + bas.cSpace + wr1.ctime + sys.cSpaceIsColonSpace; // Business Rule Start time is:
let cBusinessRuleEndTimeIs = wr1.cBusiness + bas.cSpace + wr1.cRule + bas.cSpace + wr1.cEnd + bas.cSpace + wr1.ctime + sys.cSpaceIsColonSpace; // Business Rule End time is:
let cBusinessRuleRunTimeIs = wr1.cBusiness + wr1.cRule + bas.cSpace + wr1.crun + bas.cDash + wr1.ctime + sys.cSpaceIsColonSpace; // BusinessRule run-time is:
let ccommandStringBeforeAttemptedDelimiterSwapIs = wr1.ccommand + wr1.cString + bas.cSpace + wr1.cbefore + bas.cSpace + wr1.cattempted + bas.cSpace + wr1.cswap + sys.cSpaceIsColonSpace; // commandString before attempted delimiter swap is:
let creplaceCharacterWithCharacterRuleIs = wr1.creplace + wr1.cCharacter + wr1.cWith + wr1.cCharacter + wr1.cRule + sys.cSpaceIsColonSpace; // replaceCharacterWithCharacterRule is:
let cRuleOutputIs = wr1.cRule + bas.cSpace + wr1.coutput + sys.cSpaceIsColonSpace; // Rule output is:
let ccamelCaseCommandNameArrayIs = wr1.ccamel + wr1.cCase + wr1.cCommand + wr1.cName + wr1.cArray + sys.cSpaceIsColonSpace; // camelCaseCommandNameArray is:
let ccurrentCommandWordIs = wr1.ccurrent + wr1.cCommand + wr1.cWord + sys.cSpaceIsColonSpace; // current commandWord is:
let cPARSER_ERROR = wr1.cPARSER + bas.cUnderscore + wr1.cERROR + bas.cColon + bas.cSpace; // PARSER ERROR:
let ccommandAliasDataStructureIs = wr1.ccommand + wr1.cAlias + wr1.cData + wr1.cStructure + sys.cSpaceIsColonSpace; // commandAliasDataStructure is:
let cuserDefinedConstantIs = wr1.cuser + wr1.cDefined + wr1.cConstant + sys.cSpaceIsColonSpace; // userDefinedConstant is:
let cwordCountIs = wr1.cword + wr1.cCount + sys.cSpaceIsColonSpace; // wordCount is:
let cwordsArrayIs = wr1.cwords + wr1.cArray + sys.cSpaceIsColonSpace; // wordsArray is:
let cOptimizedConstantDefinitionForWord = wr1.cOptimized + bas.cSpace + wr1.cconstant + bas.cSpace + wr1.cdefinition + bas.cSpace + wr1.cfor + bas.cSpace + wr1.cword + bas.cColon + bas.cSpace; // Optimized constant definition for word:
let cuserDefinedConstantListIs = wr1.cuser + wr1.cDefined + wr1.cConstants + wr1.cList + sys.cSpaceIsColonSpace; // userDefinedConstantList is:
let cuserDefinedConstantListContainsComas = wr1.cuser + wr1.cDefined + wr1.cConstants + wr1.cList + bas.cSpace + wr1.ccontains + bas.cSpace + wr1.ccomas; // userDefinedConstantList contains comas
let cuserDefinedConstantsListArrayIs = wr1.cuser + wr1.cDefined + wr1.cConstants + wr1.cList + wr1.cArray + sys.cSpaceIsColonSpace; // userDefinedConstantsListArray is:
let cuserDefinedConstantsListDoesNotContainComas = wr1.cuser + wr1.cDefined + wr1.cConstant + wr1.cList + bas.cSpace + wr1.cDOES + bas.cSpace + gen.cNOT + bas.cSpace + wr1.ccontain + bas.cSpace + wr1.ccomas; // userDefinedConstantList DOES NOT contain comas
let ccommonPatternsArrayIs = wr1.ccommon + wr1.cPatterns + wr1.cArray + sys.cSpaceIsColonSpace; // commonPatternsArray is:
let cbusinessRuleCounterIs = wr1.cbusiness + wr1.cRule + wr1.cCounter + sys.cSpaceIsColonSpace; // businessRuleCounter is:
let cbusinessRulePerformanceSumIs = wr1.cbusiness + wr1.cRule + wr1.cPerformance + wr1.cSum + sys.cSpaceIsColonSpace; // businessRulePerformanceSum is:
let cDoneBusinessRulePerformanceSumIs = wr1.cDONE + bas.cExclamation + bas.cSpace + cbusinessRulePerformanceSumIs; // DONE! businessRulePerformanceSum is:
let caverageIs = wr1.caverage + sys.cSpaceIsColonSpace; // average is:
let cbusinessRulePerformanceStdSumIs = wr1.cbusiness + wr1.cRule + wr1.cPerformance + phn.cStd + wr1.cSum + sys.cSpaceIsColonSpace; // businessRulePerformanceStdSum is:
let cDoneBusinessRulePerformanceStdSumIs = wr1.cDONE + bas.cExclamation + bas.cSpace + cbusinessRulePerformanceStdSumIs; // DONE! businessRulePerformanceStdSum is:
let cstandardDevIs = wr1.cstandard + phn.cDev + sys.cSpaceIsColonSpace; // standardDev is:
let ccommandCounterIs = wr1.ccommand + wr1.cCounter + sys.cSpaceIsColonSpace; // commandCounter is:
let ccommandPerformanceSumIs = wr1.ccommand + wr1.cPerformance + wr1.cSum + sys.cSpaceIsColonSpace; // commandPerformanceSum is:
let cDoneCommandPerformanceSumIs = wr1.cDONE + bas.cExclamation + bas.cSpace + ccommandPerformanceSumIs; // DONE! commandPerformanceSum is:
let ccommandPerformanceStdSumIs = wr1.ccommand + wr1.cPerformance + phn.cStd + wr1.cSum + sys.cSpaceIsColonSpace; // commandPerformanceStdSum is:
let cDoneCommandPerformanceStdSumIs = wr1.cDONE + bas.cExclamation + bas.cSpace + ccommandPerformanceStdSumIs; // DONE! commandPerformanceStdSum is:
let ccolorKeysIs = wr1.ccolor + wr1.cKeys + sys.cSpaceIsColonSpace; // colorKeys is:
let ccurrentColorNameIs = wr1.ccurrent + wr1.cColor + wr1.cName + sys.cSpaceIsColonSpace; // currentColorName is:
let ccurrentColorObjectIs = wr1.ccurrent + wr1.cColor + wr1.cObject + sys.cSpaceIsColonSpace; // currentColorObject is:
let ccurrentColorHexValueIs = wr1.ccurrent + wr1.cColor + phn.cHex + wr1.cValue + sys.cSpaceIsColonSpace; // currentColorHexValue is:
let cruleOutputIs = wr1.crule + wr1.cOutput + sys.cSpaceIsColonSpace; // ruleOutput is:
let cBeginPhase1ConstantsValidation = wr1.cBEGIN + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cValidation; // BEGIN Phase 1 Constants Validation
let cEndPhase1ConstantsValidation = wr1.cEND + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cValidation; // END Phase 1 Constants Validation
let cBeginPhase2ConstantsValidation = wr1.cBEGIN + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cValidation; // BEGIN Phase 2 Constants Validation
let cEndPhase2ConstantsValidation = wr1.cEND + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cValidation; // END Phase 2 Constants Validation
let cconstantsPathIs = wr1.cconstants + wr1.cPath + sys.cSpaceIsColonSpace; // constantsPath is:
let cresolvedConstantsPath_BasicIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cBasic + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Basic is:
let cresolvedConstantsPath_BusinessIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cBusiness + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Business is:
let cresolvedConstantsPath_ColorIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cColor + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Color is:
let cresolvedConstantsPath_CommandIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cCommand + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Command is:
let cresolvedConstantsPath_ConfigurationIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cConfiguration + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Configuration is:
let cresolvedConstantsPath_CountryIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cCountry + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Country Is:
let cresolvedConstantsPath_ElementIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cElement + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Element is:
let cresolvedConstantsPath_GenericIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cGeneric + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Generic is:
let cresolvedConstantsPath_IsotopeIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cIsotope + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Isotope is:
let cresolvedConstantsPath_KnotIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cKnot + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Knot is:
let cresolvedConstantsPath_LanguageIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cLanguage + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Language is:
let cresolvedConstantsPath_MessageIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cMessage + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Messages is:
let cresolvedConstantsPath_NumericIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cNumeric + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Numeric is:
let cresolvedConstantsPath_PhonicIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cPhonic + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Phonic is:
let cresolvedConstantsPath_ShapeIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cShape + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Shape is:
let cresolvedConstantsPath_SystemIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cSystem + sys.cSpaceIsColonSpace; // resolvedConstantsPath_System is:
let cresolvedConstantsPath_UnitIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cUnit + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Unit is:
let cresolvedConstantsPath_WordIs = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cWord + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Word is:
let cBasicConstantsPhase1Validation = wr1.cBasic + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Basic Constants Phase 1 Validation
let cBusinessConstantsPhase1Validation = wr1.cBusiness + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Business Constants Phase 1 Validation
let cColorConstantsPhase1Validation = wr1.cColor + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Color Constants Phase 1 Validation
let cCommandConstantsPhase1Validation = wr1.cCommand + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Command Constants Phase 1 Validation
let cConfigurationConstantsPhase1Validation = wr1.cConfiguration + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Configuration Constants Phase 1 Validation
let cCountryConstantsPhase1Validation = wr1.cCountry + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Country Constants Phase 1 Validation
let cElementConstantsPhase1Validation = wr1.cElement + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Element Constants Phase 1 Validation
let cGenericConstantsPhase1Validation = wr1.cGeneric + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Generic Constants Phase 1 Validation
let cIsotopeConstantsPhase1Validation = wr1.cIsotope + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Isotope Constants Phase 1 Validation
let cKnotConstantsPhase1Validation = wr1.cKnot + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Knot Constants Phase 1 Validation
let cLanguageConstantsPhase1Validation = wr1.cLanguage + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Language Constants Phase 1 Validation
let cMessageConstantsPhase1Validation = wr1.cMessage + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Message Constants Phase 1 Validation
let cNumericalConstantsPhase1Validation = wr1.cNumerical + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Numerical Constants Phase 1 Validation
let cPhonicConstantsPhase1Validation = wr1.cPhonic + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Phonic Constants Phase 1 Validation
let cShapeConstantsPhase1Validation = wr1.cShape + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Shape Constants Phase 1 Validation
let cSystemConstantsPhase1Validation = wr1.cSystem + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // System Constants Phase 1 Validation
let cUnitConstantsPhase1Validation = wr1.cUnit + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Unit Constants Phase 1 Validation
let cWordConstantsPhase1Validation = wr1.cWord + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Word Constants Phase 1 Validation
let cBasicConstantsPhase2Validation = wr1.cBasic + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Basic Constants Phase 2 Validation
let cBusinessConstantsPhase2Validation = wr1.cBusiness + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Business Constants Phase 2 Validation
let cColorConstantsPhase2Validation = wr1.cColor + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Color Constants Phase 2 Validation
let cCommandConstantsPhase2Validation = wr1.cCommand + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Command Constants Phase 2 Validation
let cConfigurationConstantsPhase2Validation = wr1.cConfiguration + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Configuration Constants Phase 2 Validation
let cCountryConstantsPhase2Validation = wr1.cCountry + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Country Constants Phase 2 Validation
let cElementConstantsPhase2Validation = wr1.cElement + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Element Constants Phase 2 Validation
let cGenericConstantsPhase2Validation = wr1.cGeneric + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Generic Constants Phase 2 Validation
let cIsotopeConstantsPhase2Validation = wr1.cIsotope + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Isotope Constants Phase 2 Validation
let cKnotConstantsPhase2Validation = wr1.cKnot + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Knot Constants Phase 2 Validation
let cLanguageConstantsPhase2Validation = wr1.cLanguage + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Language Constants Phase 2 Validation
let cMessageConstantsPhase2Validation = wr1.cMessage + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Message Constants Phase 2 Validation
let cNumericalConstantsPhase2Validation = wr1.cNumerical + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Numerical Constants Phase 2 Validation
let cPhonicConstantsPhase2Validation = wr1.cPhonic + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Phonic Constants Phase 2 Validation
let cShapeConstantsPhase2Validation = wr1.cShape + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Shape Constants Phase 2 Validation
let cSystemConstantsPhase2Validation = wr1.cSystem + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // System Constants Phase 2 Validation
let cUnitConstantsPhase2Validation = wr1.cUnit + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Unit Constants Phase 2 Validation
let cWordConstantsPhase2Validation = wr1.cWord + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Word Constants Phase 2 Validation
let ccommandStringIs = wr1.ccommand + wr1.cString + sys.cSpaceIsColonSpace; // commandString is:
let ccommandDelimiterIs = wr1.ccommand + wr1.cDelimiter + sys.cSpaceIsColonSpace; // commandDelimiter is:
let ccommandToExecuteBeforeTheAliasIs = wr1.ccommand + bas.cTo + wr1.cExecute + bas.cSpace + wr1.cbefore + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cAlias + sys.cSpaceIsColonSpace; // commandToExecute before the Alias is:
let ccommandToExecuteAfterTheAliasIs = wr1.ccommand + bas.cTo + wr1.cExecute + bas.cSpace + wr1.cafter + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cAlias + sys.cSpaceIsColonSpace; // commandToExecute after the Alias is:
let cWarningTheSpecifiedCommand = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cThe + bas.cSpace + wr1.cspecified + bas.cSpace + wr1.ccommand + bas.cColon + bas.cSpace; // WARNING: The specified command:
let cdoesNotExistPleaseTryAgain = bas.cSpace + wr1.cdoes + bas.cSpace + gen.cnot + bas.cSpace + wr1.cexist + bas.cComa + bas.cSpace + wr1.cplease + bas.cSpace + wr1.ctry + bas.cSpace + wr1.cagain + bas.cExclamation; // does not exist, please try again!
let ccommandStringContainsEitherSingleQuoteOrBackTickQuote = wr1.ccommand + wr1.cString + bas.cSpace + wr1.ccontains + bas.cSpace + wr1.ceither + bas.cSpace + bas.ca + bas.cSpace + wr1.csingle + wr1.cQuote + bas.cSpace + bas.cor + bas.cSpace + bas.ca + bas.cSpace + wr1.cback + wr1.cTick + wr1.cQuote; // commandString contains either a singleQuote or a backTickQuote
let ccommandStringContainsSingleQuote = wr1.ccommand + wr1.cString + bas.cSpace + wr1.ccontains + bas.cSpace + bas.ca + bas.cSpace + wr1.csingle + wr1.cQuote + bas.cExclamation; // commandString contains a singleQuote!
let cnumberOfSingleQuotesIsEven = wr1.cnumber + bas.cOf + wr1.cSingle + wr1.cQuotes + bas.cSpace + bas.cis + bas.cSpace + bas.cGreaterThan + bas.cEqual + bas.cSpace + num.c2 + bas.cSpace + bas.cAndPersand + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cnumber + bas.cOf + wr1.cSingle + wr1.cQuotes + bas.cSpace + bas.cis + bas.cSpace + wr1.cEVEN + bas.cExclamation + bas.cSpace + wr1.cYAY + bas.cExclamation; // numberOfSingleQuotes is >= 2 & the numberOfSingleQuotes is EVEN! YAY!
let cFirstIndexIs = num.cFirst + bas.cSpace + wr1.cindex + sys.cSpaceIsColonSpace; // First index is:
let ccommandStringAfterTaggingTheFirstStringDelimiter = wr1.ccommand + wr1.cString + bas.cSpace + wr1.cafter + bas.cSpace + wr1.ctagging + bas.cSpace + wr1.cthe + bas.cSpace + num.cfirst + bas.cSpace + wr1.cstring + bas.cSpace + wr1.cdelimiter + bas.cColon + bas.cSpace; // commandString after tagging the first string delimiter:
let cAdditionalIndexIs = wr1.cAdditional + bas.cSpace + wr1.cindex + sys.cSpaceIsColonSpace; // Additional index is:
let coddIndex = wr1.codd + bas.cSpace + wr1.cindex; // odd index
let cevenIndex = wr1.ceven + bas.cSpace + wr1.cindex; // even index
let ccommandStringAfterTaggingAnOddStringDelimiter = wr1.ccommand + wr1.cString + bas.cSpace + wr1.cafter + bas.cSpace + wr1.ctagging + bas.cSpace + bas.can + bas.cSpace + wr1.codd + bas.cSpace + wr1.cstring + bas.cSpace + wr1.cdelimiter + bas.cColon + bas.cSpace; // commandString after tagging an odd string delimiter:
let ccommandStringAfterTaggingAnEvenStringDelimiter = wr1.ccommand + wr1.cString + bas.cSpace + wr1.cafter + bas.cSpace + wr1.ctagging + bas.cSpace + bas.can + bas.cSpace + wr1.ceven + bas.cSpace + wr1.cstring + bas.cSpace + wr1.cdelimiter + bas.cColon + bas.cSpace; // commandString after tagging an even string delimiter:
let cpreSplitCommandStringIs = phn.cpre + wr1.cSplit + wr1.cCommand + wr1.cString + sys.cSpaceIsColonSpace; // preSplitCommandString is:
let cpostSplitCommandStringIs = wr1.cpost + wr1.cSplit + wr1.cCommand + wr1.cString + bas.cOpenBracket + bas.ck + bas.cCloseBracket + sys.cSpaceIsColonSpace; // postSplitCommandString[k] is:
let cpreSplitCommandStringElementIs = phn.cpre + wr1.cSplit + wr1.cCommand + wr1.cString + wr1.cElement + sys.cSpaceIsColonSpace; // preSplitCommandStringElement is:
let cDoingStraightSplitCommandString = wr1.cDoing + bas.cSpace + bas.ca + bas.cSpace + wr1.cstraight + bas.cSpace + wr1.csplit + bas.cSpace + bas.cof + bas.cSpace + wr1.cthe + bas.cSpace + wr1.ccommand + wr1.cString + bas.cColon + bas.cSpace; // Doing a straight split of the commandString:
let cCommandStartTimeIs = wr1.cCommand + bas.cSpace + wr1.cStart + bas.cSpace + wr1.ctime + sys.cSpaceIsColonSpace; // Command Start time is:
let cCommandEndTimeIs = wr1.cCommand + bas.cSpace + wr1.cEnd + bas.cSpace + wr1.ctime + sys.cSpaceIsColonSpace; // Command End time is:
let cCommandRunTimeIs = wr1.cCommand + bas.cSpace + wr1.crun + bas.cDash + wr1.ctime + sys.cSpaceIsColonSpace; // Command run-time is:
let ccommandAliasesFilePathConfigurationNameIs = wr1.ccommand + wr1.cAliases + wr1.cFile + wr1.cPath + wr1.cConfiguration + wr1.cName + sys.cSpaceIsColonSpace; // commandAliasesFilePathConfigurationName is:
let ccommandIs = wr1.ccommand + sys.cSpaceIsColonSpace; // command is:
let ccommandToExecuteIs = wr1.ccommand + bas.cTo + wr1.cExecute + sys.cSpaceIsColonSpace; // commandToExecute is:
let ccontextNameIs = wr1.ccontext + wr1.cName + sys.cSpaceIsColonSpace; // contextName is:
let callSystemConfigurationsIs = wr1.call + wr1.cSystem + wr1.cConfigurations + sys.cSpaceIsColonSpace; // allSystemConfigurations is:
let cdataPathConfigurationNameIs = wr1.cdata + wr1.cPath + wr1.cConfiguration + wr1.cName + sys.cSpaceIsColonSpace; // dataPathConfigurationName is:
let cdataPathIs = wr1.cdata + wr1.cPath + sys.cSpaceIsColonSpace; // dataPath is:
let cfilesFoundIs = wr1.cfiles + wr1.cFound + sys.cSpaceIsColonSpace; // filesFound is:
let cfileToLoadIs = wr1.cfile + wr1.cTo + wr1.cLoad + sys.cSpaceIsColonSpace; // fileToLoad is:
let cfilesToLoadIs = wr1.cfiles + wr1.cTo + wr1.cLoad + sys.cSpaceIsColonSpace; // filesToLoad is:
let ccontextNameIs = wr1.ccontext + wr1.cName + sys.cSpaceIsColonSpace; // contextName is:
let cdataFileToMergeIs = wr1.cdata + wr1.cFile + bas.cSpace + bas.cTo + bas.cSpace + wr1.cmerge + sys.cSpaceIsColonSpace; // dataFile to merge is:
let cparsedDataFileIs = wr1.cparsed + wr1.cData + wr1.cFile + sys.cSpaceIsColonSpace; // parsedDataFile is:
let cexecuteBusinessRules = wr1.cexecute + bas.cSpace + wr1.cbusiness + bas.cSpace + wr1.crules + bas.cColon + bas.cSpace; // execute business rules:
let cdataFileIs = wr1.cdata + wr1.cFile + sys.cSpaceIsColonSpace; // dataFile is:
let cmergedDataIs = wr1.cmerged + wr1.cData + sys.cSpaceIsColonSpace; // mergedData is:
let cdebugConfigurationSettingValueIs = wr1.cdebug + wr1.cConfiguration + wr1.cSetting + wr1.cValue + sys.cSpaceIsColonSpace; // debugConfigurationSettingValue is:
let cappConfigPathIs = phn.capp + wr1.cConfig + wr1.cPath + sys.cSpaceIsColonSpace; // appConfigPath is:
let cframeworkConfigPathIs = wr1.cframework + wr1.cConfig + wr1.cPath + sys.cSpaceIsColonSpace; // frameworkConfigPath is:
let cALL_DATA_IS = wr1.cALL + bas.cSpace + wr1.cDATA + bas.cSpace + wr1.cIS + bas.cColon + bas.cSpace; // ALL DATA is:
let cAllLoadedDataIs = wr1.cAll + bas.cSpace + wr1.cloaded + bas.cSpace + wr1.cdata + sys.cSpaceIsColonSpace; // All loaded data is:
let cconfigDataIs = wr1.cconfig + wr1.cData + sys.cSpaceIsColonSpace; // configData is:
let cERROR = wr1.cERROR + bas.cColon + bas.cSpace; // ERROR:
// ERROR: Invalid access to:
let cErrorInvalidAccessTo = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cInvalid + bas.cSpace + wr1.cAccess + bas.cSpace + wr1.cTo + bas.cColon + bas.cSpace;
let crootPathIs = wr1.croot + wr1.cPath + sys.cSpaceIsColonSpace; // rootPath is:
let caskIs = wr1.cask + sys.cSpaceIsColonSpace; // ask is:
let cINPUT = wr1.cINPUT + bas.cColon + bas.cSpace; // INPUT:
let cinputIs = wr1.cinput + sys.cSpaceIsColonSpace; // input is:
let cstartTimeIs = wr1.cstart + wr1.cTime + sys.cSpaceIsColonSpace; // startTime is:
let cendTimeIs = wr1.cend + wr1.cTime + sys.cSpaceIsColonSpace; // endTime is:
let cdeltaTimeResultIs = wr1.cdelta + wr1.cTime + wr1.cResult + sys.cSpaceIsColonSpace; // deltaTimeResult is:
let cclientConfigurationIs = wr1.cclient + wr1.cConfiguration + sys.cSpaceIsColonSpace; // clientConfiguration is:
// 'Caught the case that the input string contains the global carriage return term.'
let cprompt01 = 'cprompt01';
// 'index of the carriage return character: '
let cprompt02 = 'cprompt02';
// 'Caught the case that the string includes a carriage return and new line characters.'
let cprompt03 = 'cprompt03';
// '!file.includes(undefined)'
let cprintMessageToFile01 = 'cprintMessageToFile01';
// 'ERROR: Failure to log to file: '
let cprintMessageToFile02 = 'cprintMessageToFile02';
// 'ERROR: Log File includes undefined.'
let cprintMessageToFile03 = 'cprintMessageToFile03';

// Coded System Messages
// EXAMPLE:
// '!mergedData[wr1.csystem] && !D[wr1.csystem] === true'

module.exports = {
  // Logging Constants
  [bas.cc + con.cBEGIN_Function]: cBEGIN_Function, // BEGIN %% Function
  [bas.cc + con.cEND_Function]: cEND_Function, // END %% Function
  [bas.cc + con.cinputData]: cinputData, // inputData
  [bas.cc + con.cInputData]: cInputData, // InputData
  [bas.cc + con.cinputMetaData]: cinputMetaData, // inputMetaData
  [bas.cc + con.cInputMetaData]: cInputMetaData, // InputMetaData
  [bas.cc + con.cinputDataIs]: cinputDataIs, // input Data is:
  [bas.cc + con.cinputMetaDataIs]: cinputMetaDataIs, // input MetaData is:
  [bas.cc + con.creturnDataIs]: creturnDataIs, // return Data is:

  // System Messages
  [bas.cc + cCharacterGenerationMessage1]: cCharacterGenerationMessage1, // typeToGenerate is:
  [bas.cc + cCharacterGenerationMessage2]: cCharacterGenerationMessage2, // Generate a number.
  [bas.cc + cCharacterGenerationMessage3]: cCharacterGenerationMessage3, // Generate a random upper case or lower case letter.
  [bas.cc + cCharacterGenerationMessage4]: cCharacterGenerationMessage4, // Generate a special character.
  [bas.cc + cCharacterGenerationMessage5]: cCharacterGenerationMessage5, // DEFAULT: Generate a random upper case or lower case letter.
  [bas.cc + cMathOperationsMessage1]: cMathOperationsMessage1, // bigInteger is:
  [bas.cc + cnumberOfCharactersToGenerateIs]: cnumberOfCharactersToGenerateIs, // numberOfCharactersToGenerate is:
  [bas.cc + cgenerateSpecialCharactersIs]: cgenerateSpecialCharactersIs, // generateSpecialCharacters is:
  [bas.cc + callowableSpecialCharactersIs]: callowableSpecialCharactersIs, // allowableSpecialCharacters is:
  [bas.cc + cspecifiedSuffixAndDomainIs]: cspecifiedSuffixAndDomainIs, // specifiedSuffixAndDomain is:
  [bas.cc + cfailureModeIs]: cfailureModeIs, // failureMode is:
  [bas.cc + cprefixIs]: cprefixIs, // prefix is:
  [bas.cc + csuffixIs]: csuffixIs, // suffix is:
  [bas.cc + cWithoutTheAtSymbol]: cWithoutTheAtSymbol, // Without the @ symbol.
  [bas.cc + cWithoutThePrefix]: cWithoutThePrefix, // Without the prefix.
  [bas.cc + cWithoutTheSuffix]: cWithoutTheSuffix, // Without the suffix.
  [bas.cc + cWithoutTheAtSymbolAndPrefix]: cWithoutTheAtSymbolAndPrefix, // Without the @ and prefix.
  [bas.cc + cDEFAULTWithoutTheAtSymbolAndPrefix]: cDEFAULTWithoutTheAtSymbolAndPrefix, // DEFAULT: Without the @ and prefix.
  [bas.cc + cdomainNameIs]: cdomainNameIs, // domainName is:
  [bas.cc + cnumberOfPrefixCharactersIs]: cnumberOfPrefixCharactersIs, // numberOfPrefixCharacters is:
  [bas.cc + cnumberOfSuffixCharactersIs]: cnumberOfSuffixCharactersIs, // numberOfSuffixCharacters is:
  [bas.cc + cWithoutTheDotSymbol]: cWithoutTheDotSymbol, // Without the . symbol.
  [bas.cc + cWithoutTheAtAndDotSymbols]: cWithoutTheAtAndDotSymbols, // Without the @ and . symbols.
  [bas.cc + cWithoutTheDomainName]: cWithoutTheDomainName, // Without the domain name.
  [bas.cc + cWithoutTheAtSymbolAndDomainName]: cWithoutTheAtSymbolAndDomainName, // Without the @ and domain name.
  [bas.cc + cWithoutTheDotAndDomainName]: cWithoutTheDotAndDomainName, // Without the . and domain name.
  [bas.cc + cWithoutTheAtSymbolDotAndDomainName]: cWithoutTheAtSymbolDotAndDomainName, // Without the @, . and domain name.
  [bas.cc + cWithoutTheDotAndPrefix]: cWithoutTheDotAndPrefix, // Without the . and prefix.
  [bas.cc + cWithoutTheAtSymbolAndSuffix]: cWithoutTheAtSymbolAndSuffix, // Without the @ and suffix.
  [bas.cc + cWithoutTheDotAndSuffix]: cWithoutTheDotAndSuffix, // Without the . and suffix.
  [bas.cc + cWithoutTheAtSymbolDotAndPrefix]: cWithoutTheAtSymbolDotAndPrefix, // Without the @, . and prefix.
  [bas.cc + cWithoutTheAtSymbolDotAndSuffix]: cWithoutTheAtSymbolDotAndSuffix, // Without the @, . and suffix.
  [bas.cc + cWithoutTheAtSymbolDotPrefixAndSuffix]: cWithoutTheAtSymbolDotPrefixAndSuffix, // Without the @, ., prefix and suffix.
  [bas.cc + cWithoutThePrefixAndDomainName]: cWithoutThePrefixAndDomainName, // Without the prefix and domain name.
  [bas.cc + cWithoutTheSuffixAndDomainName]: cWithoutTheSuffixAndDomainName, // Without the suffix and domain name.
  [bas.cc + cWithoutThePrefixAndSuffix]: cWithoutThePrefixAndSuffix, // Without the prefix and suffix.
  [bas.cc + cWithoutThePrefixSuffixAndDomainName]: cWithoutThePrefixSuffixAndDomainName, // Without the prefix, suffix and domain name.
  [bas.cc + cWithoutTheAtSymbolPrefixAndDomainName]: cWithoutTheAtSymbolPrefixAndDomainName, // Without the @, prefix and domain name.
  [bas.cc + cWithoutTheDotPrefixAndDomainName]: cWithoutTheDotPrefixAndDomainName, // Without the ., prefix and domain name.
  [bas.cc + cWithoutTheAtSymbolSuffixAndDomainName]: cWithoutTheAtSymbolSuffixAndDomainName, // Without the @, suffix and domain name.
  [bas.cc + cWithoutTheDotSuffixAndDomainName]: cWithoutTheDotSuffixAndDomainName, // Without the ., suffix and domain name.
  [bas.cc + cWithoutTheAtSymbolPrefixSuffixAndDomainName]: cWithoutTheAtSymbolPrefixSuffixAndDomainName, // Without the @, prefix, suffix and domain name.
  [bas.cc + cWithoutTheDotPrefixSuffixAndDomainName]: cWithoutTheDotPrefixSuffixAndDomainName, // Without the ., prefix, suffix and domain name.
  [bas.cc + cWithoutThePrefixSuffixAndAtSymbol]: cWithoutThePrefixSuffixAndAtSymbol, // Without the prefix, suffix and @.
  [bas.cc + cWithoutThePrefixSuffixAndDot]: cWithoutThePrefixSuffixAndDot, // Without the prefix, suffix and ..
  [bas.cc + cIndexOfTheSpace]: cIndexOfTheSpace, // Index of the
  [bas.cc + cisResolvingAs]: cisResolvingAs, // is resolving as:
  [bas.cc + cparsedStringSpaceTerm]: cparsedStringSpaceTerm, // parsedString term
  [bas.cc + cstring1Is]: cstring1Is, // string1 is:
  [bas.cc + cstring2Is]: cstring2Is, // string2 is:
  [bas.cc + cvariation0ValueIs]: cvariation0ValueIs, // variation0 value is:
  [bas.cc + cvariation1ValueIs]: cvariation1ValueIs, // variation1 value is:
  [bas.cc + ciValueIs]: ciValueIs, // i value is:
  [bas.cc + cjValueIs]: cjValueIs, // j value is:
  [bas.cc + cdeletionCostIs]: cdeletionCostIs, // deletionCost is:
  [bas.cc + cinsertionCostIs]: cinsertionCostIs, // insertionCost is:
  [bas.cc + csubstitutionCostIs]: csubstitutionCostIs, // substitutionCost is:
  [bas.cc + ccamelCaseWordCountIs]: ccamelCaseWordCountIs, // camelCaseWordCount is:
  [bas.cc + ccontainsAcronymIs]: ccontainsAcronymIs, // containsAcronym is:
  [bas.cc + cspacesCountIs]: cspacesCountIs, // spacesCount is:
  [bas.cc + cperiodCountIs]: cperiodCountIs, // periodCount is:
  [bas.cc + cdashCountIs]: cdashCountIs, // dashCount is:
  [bas.cc + cunderscoreCountIs]: cunderscoreCountIs, // underscoreCount is:
  [bas.cc + cstringDeltaValueIs]: cstringDeltaValueIs, // stringDelta value is:
  [bas.cc + cFilenamesMatch]: cFilenamesMatch, // Filenames match
  [bas.cc + cFilenamesDoNotMatch]: cFilenamesDoNotMatch, // Filenames do not match
  [bas.cc + cArrayElementsMatch]: cArrayElementsMatch, // Array elements match
  [bas.cc + cArrayElementsDoNotMatch]: cArrayElementsDoNotMatch, // Array elements do not match
  [bas.cc + clineArray2Is]: clineArray2Is, // lineArray[2] is:
  [bas.cc + cSuggestedLineOfCodeIs]: cSuggestedLineOfCodeIs, // Suggested line of code is:
  [bas.cc + cErrorUnknownConstantFile]: cErrorUnknownConstantFile, // ERROR: Unknown constant file.
  [bas.cc + cconstantsTypesKeysIs]: cconstantsTypesKeysIs, // constantsTypesKeys is:
  [bas.cc + cconstantTypeKeyIs]: cconstantTypeKeyIs, // constantTypeKey is:
  [bas.cc + cconstantTypeValuesIs]: cconstantTypeValuesIs, // constantTypeValues is:
  [bas.cc + cconstantsKeysIs]: cconstantsKeysIs, // constantsKeys is:
  [bas.cc + cconstantKeyIs]: cconstantKeyIs, // constantKey is:
  [bas.cc + cconstantActualValueIs]: cconstantActualValueIs, // constantActualValue is:
  [bas.cc + cconstantNameIs]: cconstantNameIs, // constantName is:
  [bas.cc + cconstantValueIs]: cconstantValueIs, // constantValue is:
  [bas.cc + cdeltaLengthIs]: cdeltaLengthIs, // deltaLength is:
  [bas.cc + crecursiveSubStringIs]: crecursiveSubStringIs, // recursiveSubString is:
  [bas.cc + cmaxStringLengthIs]: cmaxStringLengthIs, // maxStringLength is:
  [bas.cc + cminStringLengthIs]: cminStringLengthIs, // minStringLength is:
  [bas.cc + ccurrentMasterStringArrayElementIs]: ccurrentMasterStringArrayElementIs, // currentMasterStringArrayElement is:
  [bas.cc + cConstantDoesNotExist]: cConstantDoesNotExist, // Constant does NOT exist:
  [bas.cc + cConstantDoesExist]: cConstantDoesExist, // Constant does exist:
  [bas.cc + cBEGIN_ithLoop]: cBEGIN_ithLoop, // BEGIN i-th loop:
  [bas.cc + cBEGIN_ithIteration]: cBEGIN_ithIteration, // BEGIN i-th iteration:
  [bas.cc + cBEGIN_jthLoop]: cBEGIN_jthLoop, // BEGIN j-th loop:
  [bas.cc + cBEGIN_kthIteration]: cBEGIN_kthIteration, // BEGIN k-th iteration:
  [bas.cc + cEND_ithLoop]: cEND_ithLoop, // END i-th loop:
  [bas.cc + cEND_ithIteration]: cEND_ithIteration, // END i-th iteration:
  [bas.cc + cEND_jthLoop]: cEND_jthLoop, // END j-th loop:
  [bas.cc + cEND_kthIteration]: cEND_kthIteration, // END k-th iteration:
  [bas.cc + ccurrentCommandIs]: ccurrentCommandIs, // currentCommand is:
  [bas.cc + caliasListIs]: caliasListIs, // aliasList is:
  [bas.cc + ccurrentAliasIs]: ccurrentAliasIs, // currentAlias is:
  [bas.cc + cduplicateAliasCountIs]: cduplicateAliasCountIs, // duplicateAliasCount is:
  [bas.cc + cduplicateCommandAliasIs]: cduplicateCommandAliasIs, // duplicate command alias is:
  [bas.cc + ccommandWordAliasesBeforeChangeIs]: ccommandWordAliasesBeforeChangeIs, // commandWordAliases BEFORE CHANGE is:
  [bas.cc + ccommandWordAliasesAfterChangeIs]: ccommandWordAliasesAfterChangeIs, // commandWordAliasesArray AFTER CHANGE is:
  [bas.cc + cmasterCommandWordAlisesArrayIs]: cmasterCommandWordAlisesArrayIs, // masterCommandWordAliasesArray is:
  [bas.cc + cmasterArrayIndexIs]: cmasterArrayIndexIs, // masterArrayIndex is:
  [bas.cc + cCommandAliasesAre]: cCommandAliasesAre, // Command Aliases are:
  [bas.cc + cexpandedLehmerCodeArrayIs]: cexpandedLehmerCodeArrayIs, // expandedLehmerCodeArray is:
  [bas.cc + cindexOfExpansionIs]: cindexOfExpansionIs, // indexOfExpansion is:
  [bas.cc + carrayToBeExpandedIs]: carrayToBeExpandedIs, // arrayToBeExpanded is:
  [bas.cc + climitOfExpansionIs]: climitOfExpansionIs, // limitOfExpansion is:
  [bas.cc + cpushingLehmerCodeArray1ToReturnDataValue]: cpushingLehmerCodeArray1ToReturnDataValue, // pushing lehmerCodeArray1 to returnData value:
  [bas.cc + creturnDataAfterPushIs]: creturnDataAfterPushIs, // returnData after push is:
  [bas.cc + creturnDataAfterLevel1Is]: creturnDataAfterLevel1Is, // returnData after Level 1 is:
  [bas.cc + carrayToBeExpandedDotLengthIs]: carrayToBeExpandedDotLengthIs, // arrayToBeExpanded.length is:
  [bas.cc + creturnDataDotLengthIs]: creturnDataDotLengthIs, // returnData.length is:
  [bas.cc + creturnDataBeforePopIs]: creturnDataBeforePopIs, // returnData BEFORE POP is:
  [bas.cc + creturnDataAfterPopIs]: creturnDataAfterPopIs, // returnData AFTER POP is:
  [bas.cc + cmasterTempReturnDataBeforeRecursiveCallIs]: cmasterTempReturnDataBeforeRecursiveCallIs, // masterTempReturnData BEFORE recursive call is:
  [bas.cc + ctempReturnData1Is]: ctempReturnData1Is, // tempReturnData1 is:
  [bas.cc + ctempReturnData1DotLengthIs]: ctempReturnData1DotLengthIs, // tempReturnData1.length is:
  [bas.cc + cpushingTempReturnData1Kvalue]: cpushingTempReturnData1Kvalue, // pushing tempReturnData1[k] value:
  [bas.cc + cmasterTempReturnDataAfterRecursiveCallIs]: cmasterTempReturnDataAfterRecursiveCallIs, // masterTempReturnData AFTER recursive call is:
  [bas.cc + clookupIndexIs]: clookupIndexIs, // lookupIndex is:
  [bas.cc + clookupValueIs]: clookupValueIs, // lookupValue is:
  [bas.cc + cDataCatagoryShouldBe]: cDataCatagoryShouldBe, // Data Catagory should be:
  [bas.cc + cDataCatagoryDetailNameShouldBe]: cDataCatagoryDetailNameShouldBe, // Data Catagory Detail Name should be:
  [bas.cc + cKeywordNameShouldBe]: cKeywordNameShouldBe, // Keyword Name should be:
  [bas.cc + cpathElementIs]: cpathElementIs, // pathElement is:
  [bas.cc + ccaseIEqual0]: ccaseIEqual0, // case: i = 0
  [bas.cc + ccasePathElementEqual]: ccasePathElementEqual, // case: pathElement =
  [bas.cc + ccaseElse]: ccaseElse, // case else
  [bas.cc + creturnDataSoFarIs]: creturnDataSoFarIs, // returnData so far is:
  [bas.cc + cpathArrayIs]: cpathArrayIs, // pathArray is:
  [bas.cc + ccurrentPathElementIs]: ccurrentPathElementIs, // current path element is:
  [bas.cc + cAttemptingToLoadXmlData]: cAttemptingToLoadXmlData, // Attempting to load XML data!
  [bas.cc + cAttemptingToLoadCsvData]: cAttemptingToLoadCsvData, // Attempting to load CSV data!
  [bas.cc + cAttemptingToLoadJsonData]: cAttemptingToLoadJsonData, // Attempting to load JSON data!
  [bas.cc + cLoadedDataIs]: cLoadedDataIs, // Loaded data is:
  [bas.cc + cattributeArrayIs]: cattributeArrayIs, // attributeArray is:
  [bas.cc + cattributeArray0Is]: cattributeArray0Is, // attributeArray[0] is:
  [bas.cc + carrayIs]: carrayIs, // array is:
  [bas.cc + cvalueIs]: cvalueIs, // value is:
  [bas.cc + cmyFunctionIs]: cmyFunctionIs, // myFunction is:
  [bas.cc + carrayInputObjectIsNotAnArray]: carrayInputObjectIsNotAnArray, // array input object is not an array.
  [bas.cc + cTheValueWasFoundInTheArray]: cTheValueWasFoundInTheArray, // The value was found in the array.
  [bas.cc + cTheValueWasNotFoundInTheArray]: cTheValueWasNotFoundInTheArray, // The value was NOT found in the array.
  [bas.cc + coriginalStringIs]: coriginalStringIs, // originalString is:
  [bas.cc + cindexIs]: cindexIs, // index is:
  [bas.cc + creplacementIs]: creplacementIs, // replacement is:
  [bas.cc + cDEPLOY_APPLICATION]: cDEPLOY_APPLICATION, // DEPLOY APPLICATION
  [bas.cc + cRELEASE_APPLICATION]: cRELEASE_APPLICATION, // RELEASE APPLICATION
  [bas.cc + cDeploymentWasCompleted]: cDeploymentWasCompleted, // Deployment was completed:
  [bas.cc + cDeploymentFailed]: cDeploymentFailed, // Deployment failed
  [bas.cc + cReleaseFailed]: cReleaseFailed, // Release failed
  [bas.cc + cinputDataIis]: cinputDataIis, // inputData[i] is:
  [bas.cc + caggregateCommandStringIs]: caggregateCommandStringIs, // aggregateCommandString is:
  [bas.cc + cmetaDataParametersIs]: cmetaDataParametersIs, // metaDataParameters is:
  [bas.cc + cmetaDataParametersLengthIs]: cmetaDataParametersLengthIs, // metaDataParameters length is:
  [bas.cc + cmetaDataPathAndFilenameIs]: cmetaDataPathAndFilenameIs, // metaDataPathAndFilename is:
  [bas.cc + cpathAndFilenameIs]: cpathAndFilenameIs, // pathAndFilename is:
  [bas.cc + ccontentsAre]: ccontentsAre, // contents are:
  [bas.cc + ccontentsOfDare]: ccontentsOfDare, // contents of D are:
  [bas.cc + cBEGIN_ithIterationOfInputDataArray]: cBEGIN_ithIterationOfInputDataArray, // Begin the i-th iteration of the inputData array. i is:
  [bas.cc + ccurrentRuleIs]: ccurrentRuleIs, // currentRule is:
  [bas.cc + crulesIs]: crulesIs, // rules is:
  [bas.cc + cruleInputDataIs]: cruleInputDataIs, // ruleInputData is:
  [bas.cc + cruleInputMetaData]: cruleInputMetaData, // ruleInputMetaData is:
  [bas.cc + cBusinessRuleStartTimeIs]: cBusinessRuleStartTimeIs, // Business Rule Start time is:
  [bas.cc + cBusinessRuleEndTimeIs]: cBusinessRuleEndTimeIs, // Business Rule End time is:
  [bas.cc + cBusinessRuleRunTimeIs]: cBusinessRuleRunTimeIs, // BusinessRule run-time is:
  [bas.cc + ccommandStringBeforeAttemptedDelimiterSwapIs]: ccommandStringBeforeAttemptedDelimiterSwapIs, // commandString before attempted delimiter swap is:
  [bas.cc + creplaceCharacterWithCharacterRuleIs]: creplaceCharacterWithCharacterRuleIs, // replaceCharacterWithCharacterRule is:
  [bas.cc + cRuleOutputIs]: cRuleOutputIs, // Rule output is:
  [bas.cc + ccamelCaseCommandNameArrayIs]: ccamelCaseCommandNameArrayIs, // camelCaseCommandNameArray is:
  [bas.cc + ccurrentCommandWordIs]: ccurrentCommandWordIs, // current commandWord is:
  [bas.cc + cPARSER_ERROR]: cPARSER_ERROR, // PARSER ERROR:
  [bas.cc + ccommandAliasDataStructureIs]: ccommandAliasDataStructureIs, // commandAliasDataStructure is:
  [bas.cc + cuserDefinedConstantIs]: cuserDefinedConstantIs, // userDefinedConstant is:
  [bas.cc + cwordCountIs]: cwordCountIs, // wordCount is:
  [bas.cc + cwordsArrayIs]: cwordsArrayIs, // wordsArray is:
  [bas.cc + cOptimizedConstantDefinitionForWord]: cOptimizedConstantDefinitionForWord, // Optimized constant definition for word:
  [bas.cc + cuserDefinedConstantListIs]: cuserDefinedConstantListIs, // userDefinedConstantList is:
  [bas.cc + cuserDefinedConstantListContainsComas]: cuserDefinedConstantListContainsComas, // userDefinedConstantList contains comas
  [bas.cc + cuserDefinedConstantsListArrayIs]: cuserDefinedConstantsListArrayIs, // userDefinedConstantsListArray is:
  [bas.cc + cuserDefinedConstantsListDoesNotContainComas]: cuserDefinedConstantsListDoesNotContainComas, // userDefinedConstantList DOES NOT contain comas
  [bas.cc + ccommonPatternsArrayIs]: ccommonPatternsArrayIs, // commonPatternsArray is:
  [bas.cc + cbusinessRuleCounterIs]: cbusinessRuleCounterIs, // businessRuleCounter is:
  [bas.cc + cbusinessRulePerformanceSumIs]: cbusinessRulePerformanceSumIs, // businessRulePerformanceSum is:
  [bas.cc + cDoneBusinessRulePerformanceSumIs]: cDoneBusinessRulePerformanceSumIs, // DONE! businessRulePerformanceSum is:
  [bas.cc + caverageIs]: caverageIs, // average is:
  [bas.cc + cbusinessRulePerformanceStdSumIs]: cbusinessRulePerformanceStdSumIs, // businessRulePerformanceStdSum is:
  [bas.cc + cDoneBusinessRulePerformanceStdSumIs]: cDoneBusinessRulePerformanceStdSumIs, // DONE! businessRulePerformanceStdSum is:
  [bas.cc + cstandardDevIs]: cstandardDevIs, // standardDev is:
  [bas.cc + ccommandCounterIs]: ccommandCounterIs, // commandCounter is:
  [bas.cc + ccommandPerformanceSumIs]: ccommandPerformanceSumIs, // commandPerformanceSum is:
  [bas.cc + cDoneCommandPerformanceSumIs]: cDoneCommandPerformanceSumIs, // DONE! commandPerformanceSum is:
  [bas.cc + ccommandPerformanceStdSumIs]: ccommandPerformanceStdSumIs, // commandPerformanceStdSum is:
  [bas.cc + cDoneCommandPerformanceStdSumIs]: cDoneCommandPerformanceStdSumIs, // DONE! commandPerformanceStdSum is:
  [bas.cc + ccolorKeysIs]: ccolorKeysIs, // colorKeys is:
  [bas.cc + ccurrentColorNameIs]: ccurrentColorNameIs, // currentColorName is:
  [bas.cc + ccurrentColorObjectIs]: ccurrentColorObjectIs, // currentColorObject is:
  [bas.cc + ccurrentColorHexValueIs]: ccurrentColorHexValueIs, // currentColorHexValue is:
  [bas.cc + cruleOutputIs]: cruleOutputIs, // ruleOutput is:
  [bas.cc + cBeginPhase1ConstantsValidation]: cBeginPhase1ConstantsValidation, // BEGIN Phase 1 Constants Validation
  [bas.cc + cEndPhase1ConstantsValidation]: cEndPhase1ConstantsValidation, // END Phase 1 Constants Validation
  [bas.cc + cBeginPhase2ConstantsValidation]: cBeginPhase2ConstantsValidation, // BEGIN Phase 2 Constants Validation
  [bas.cc + cEndPhase2ConstantsValidation]: cEndPhase2ConstantsValidation, // END Phase 2 Constants Validation
  [bas.cc + cconstantsPathIs]: cconstantsPathIs, // constantsPath is:
  [bas.cc + cresolvedConstantsPath_BasicIs]: cresolvedConstantsPath_BasicIs, // resolvedConstantsPath_Basic is:
  [bas.cc + cresolvedConstantsPath_BusinessIs]: cresolvedConstantsPath_BusinessIs, // resolvedConstantsPath_Business is:
  [bas.cc + cresolvedConstantsPath_ColorIs]: cresolvedConstantsPath_ColorIs, // resolvedConstantsPath_Color is:
  [bas.cc + cresolvedConstantsPath_CommandIs]: cresolvedConstantsPath_CommandIs, // resolvedConstantsPath_Command is:
  [bas.cc + cresolvedConstantsPath_ConfigurationIs]: cresolvedConstantsPath_ConfigurationIs, // resolvedConstantsPath_Configuration is:
  [bas.cc + cresolvedConstantsPath_CountryIs]: cresolvedConstantsPath_CountryIs, // resolvedConstantsPath_Country Is:
  [bas.cc + cresolvedConstantsPath_ElementIs]: cresolvedConstantsPath_ElementIs, // resolvedConstantsPath_Element is:
  [bas.cc + cresolvedConstantsPath_GenericIs]: cresolvedConstantsPath_GenericIs, // resolvedConstantsPath_Generic is:
  [bas.cc + cresolvedConstantsPath_IsotopeIs]: cresolvedConstantsPath_IsotopeIs, // resolvedConstantsPath_Isotope is:
  [bas.cc + cresolvedConstantsPath_KnotIs]: cresolvedConstantsPath_KnotIs, // resolvedConstantsPath_Knot is:
  [bas.cc + cresolvedConstantsPath_LanguageIs]: cresolvedConstantsPath_LanguageIs, // resolvedConstantsPath_Language is:
  [bas.cc + cresolvedConstantsPath_MessageIs]: cresolvedConstantsPath_MessageIs, // resolvedConstantsPath_Messages is:
  [bas.cc + cresolvedConstantsPath_NumericIs]: cresolvedConstantsPath_NumericIs, // resolvedConstantsPath_Numeric is:
  [bas.cc + cresolvedConstantsPath_PhonicIs]: cresolvedConstantsPath_PhonicIs, // resolvedConstantsPath_Phonic is:
  [bas.cc + cresolvedConstantsPath_ShapeIs]: cresolvedConstantsPath_ShapeIs, // resolvedConstantsPath_Shape is:
  [bas.cc + cresolvedConstantsPath_SystemIs]: cresolvedConstantsPath_SystemIs, // resolvedConstantsPath_System is:
  [bas.cc + cresolvedConstantsPath_UnitIs]: cresolvedConstantsPath_UnitIs, // resolvedConstantsPath_Unit is:
  [bas.cc + cresolvedConstantsPath_WordIs]: cresolvedConstantsPath_WordIs, // resolvedConstantsPath_Word is:
  [bas.cc + cBasicConstantsPhase1Validation]: cBasicConstantsPhase1Validation, // Basic Constants Phase 1 Validation
  [bas.cc + cBusinessConstantsPhase1Validation]: cBusinessConstantsPhase1Validation, // Business Constants Phase 1 Validation
  [bas.cc + cColorConstantsPhase1Validation]: cColorConstantsPhase1Validation, // Color Constants Phase 1 Validation
  [bas.cc + cCommandConstantsPhase1Validation]: cCommandConstantsPhase1Validation, // Command Constants Phase 1 Validation
  [bas.cc + cConfigurationConstantsPhase1Validation]: cConfigurationConstantsPhase1Validation, // Configuration Constants Phase 1 Validation
  [bas.cc + cCountryConstantsPhase1Validation]: cCountryConstantsPhase1Validation, // Country Constants Phase 1 Validation
  [bas.cc + cElementConstantsPhase1Validation]: cElementConstantsPhase1Validation, // Element Constants Phase 1 Validation
  [bas.cc + cGenericConstantsPhase1Validation]: cGenericConstantsPhase1Validation, // Generic Constants Phase 1 Validation
  [bas.cc + cIsotopeConstantsPhase1Validation]: cIsotopeConstantsPhase1Validation, // Isotope Constants Phase 1 Validation
  [bas.cc + cKnotConstantsPhase1Validation]: cKnotConstantsPhase1Validation, // Knot Constants Phase 1 Validation
  [bas.cc + cLanguageConstantsPhase1Validation]: cLanguageConstantsPhase1Validation, // Language Constants Phase 1 Validation
  [bas.cc + cMessageConstantsPhase1Validation]: cMessageConstantsPhase1Validation, // Message Constants Phase 1 Validation
  [bas.cc + cNumericalConstantsPhase1Validation]: cNumericalConstantsPhase1Validation, // Numerical Constants Phase 1 Validation
  [bas.cc + cPhonicConstantsPhase1Validation]: cPhonicConstantsPhase1Validation, // Phonic Constants Phase 1 Validation
  [bas.cc + cShapeConstantsPhase1Validation]: cShapeConstantsPhase1Validation, // Shape Constants Phase 1 Validation
  [bas.cc + cSystemConstantsPhase1Validation]: cSystemConstantsPhase1Validation, // System Constants Phase 1 Validation
  [bas.cc + cUnitConstantsPhase1Validation]: cUnitConstantsPhase1Validation, // Unit Constants Phase 1 Validation
  [bas.cc + cWordConstantsPhase1Validation]: cWordConstantsPhase1Validation, // Word Constants Phase 1 Validation
  [bas.cc + cBasicConstantsPhase2Validation]: cBasicConstantsPhase2Validation, // Basic Constants Phase 2 Validation
  [bas.cc + cBusinessConstantsPhase2Validation]: cBusinessConstantsPhase2Validation, // Business Constants Phase 2 Validation
  [bas.cc + cColorConstantsPhase2Validation]: cColorConstantsPhase2Validation, // Color Constants Phase 2 Validation
  [bas.cc + cCommandConstantsPhase2Validation]: cCommandConstantsPhase2Validation, // Command Constants Phase 2 Validation
  [bas.cc + cConfigurationConstantsPhase2Validation]: cConfigurationConstantsPhase2Validation, // Configuration Constants Phase 2 Validation
  [bas.cc + cCountryConstantsPhase2Validation]: cCountryConstantsPhase2Validation, // Country Constants Phase 2 Validation
  [bas.cc + cElementConstantsPhase2Validation]: cElementConstantsPhase2Validation, // Element Constants Phase 2 Validation
  [bas.cc + cGenericConstantsPhase2Validation]: cGenericConstantsPhase2Validation, // Generic Constants Phase 2 Validation
  [bas.cc + cIsotopeConstantsPhase2Validation]: cIsotopeConstantsPhase2Validation, // Isotope Constants Phase 2 Validation
  [bas.cc + cKnotConstantsPhase2Validation]: cKnotConstantsPhase2Validation, // Knot Constants Phase 2 Validation
  [bas.cc + cLanguageConstantsPhase2Validation]: cLanguageConstantsPhase2Validation, // Language Constants Phase 2 Validation
  [bas.cc + cMessageConstantsPhase2Validation]: cMessageConstantsPhase2Validation, // Message Constants Phase 2 Validation
  [bas.cc + cNumericalConstantsPhase2Validation]: cNumericalConstantsPhase2Validation, // Numerical Constants Phase 2 Validation
  [bas.cc + cPhonicConstantsPhase2Validation]: cPhonicConstantsPhase2Validation, // Phonic Constants Phase 2 Validation
  [bas.cc + cShapeConstantsPhase2Validation]: cShapeConstantsPhase2Validation, // Shape Constants Phase 2 Validation
  [bas.cc + cSystemConstantsPhase2Validation]: cSystemConstantsPhase2Validation, // System Constants Phase 2 Validation
  [bas.cc + cUnitConstantsPhase2Validation]: cUnitConstantsPhase2Validation, // Unit Constants Phase 2 Validation
  [bas.cc + cWordConstantsPhase2Validation]: cWordConstantsPhase2Validation, // Word Constants Phase 2 Validation
  [bas.cc + ccommandStringIs]: ccommandStringIs, // commandString is:
  [bas.cc + ccommandDelimiterIs]: ccommandDelimiterIs, // commandDelimiter is:
  [bas.cc + ccommandToExecuteBeforeTheAliasIs]: ccommandToExecuteBeforeTheAliasIs, // commandToExecute before the Alias is:
  [bas.cc + ccommandToExecuteAfterTheAliasIs]: ccommandToExecuteAfterTheAliasIs, // commandToExecute after the Alias is:
  [bas.cc + cWarningTheSpecifiedCommand]: cWarningTheSpecifiedCommand, // WARNING: The specified command:
  [bas.cc + cdoesNotExistPleaseTryAgain]: cdoesNotExistPleaseTryAgain, // does not exist, please try again!
  [bas.cc + ccommandStringContainsEitherSingleQuoteOrBackTickQuote]: ccommandStringContainsEitherSingleQuoteOrBackTickQuote, // commandString contains either a singleQuote or a backTickQuote
  [bas.cc + ccommandStringContainsSingleQuote]: ccommandStringContainsSingleQuote, // commandString contains a singleQuote!
  [bas.cc + cnumberOfSingleQuotesIsEven]: cnumberOfSingleQuotesIsEven, // numberOfSingleQuotes is >= 2 & the numberOfSingleQuotes is EVEN! YAY!
  [bas.cc + cFirstIndexIs]: cFirstIndexIs, // First index is:
  [bas.cc + ccommandStringAfterTaggingTheFirstStringDelimiter]: ccommandStringAfterTaggingTheFirstStringDelimiter, // commandString after tagging the first string delimiter:
  [bas.cc + cAdditionalIndexIs]: cAdditionalIndexIs, // Additional index is:
  [bas.cc + coddIndex]: coddIndex, // odd index
  [bas.cc + cevenIndex]: cevenIndex, // even index
  [bas.cc + ccommandStringAfterTaggingAnOddStringDelimiter]: ccommandStringAfterTaggingAnOddStringDelimiter, // commandString after tagging an odd string delimiter:
  [bas.cc + ccommandStringAfterTaggingAnEvenStringDelimiter]: ccommandStringAfterTaggingAnEvenStringDelimiter, // commandString after tagging an even string delimiter:
  [bas.cc + cpreSplitCommandStringIs]: cpreSplitCommandStringIs, // preSplitCommandString is:
  [bas.cc + cpostSplitCommandStringIs]: cpostSplitCommandStringIs, // postSplitCommandString[k] is:
  [bas.cc + cpreSplitCommandStringElementIs]: cpreSplitCommandStringElementIs, // preSplitCommandStringElement is:
  [bas.cc + cDoingStraightSplitCommandString]: cDoingStraightSplitCommandString, // Doing a straight split of the commandString:
  [bas.cc + cCommandStartTimeIs]: cCommandStartTimeIs, // Command Start time is:
  [bas.cc + cCommandEndTimeIs]: cCommandEndTimeIs, // Command End time is:
  [bas.cc + cCommandRunTimeIs]: cCommandRunTimeIs, // Command run-time is:
  [bas.cc + ccommandAliasesFilePathConfigurationNameIs]: ccommandAliasesFilePathConfigurationNameIs, // commandAliasesFilePathConfigurationName is:
  [bas.cc + ccommandIs]: ccommandIs, // command is:
  [bas.cc + ccommandToExecuteIs]: ccommandToExecuteIs, // commandToExecute is:
  [bas.cc + ccontextNameIs]: ccontextNameIs, // contextName is:
  [bas.cc + callSystemConfigurationsIs]: callSystemConfigurationsIs, // allSystemConfigurations is:
  [bas.cc + cdataPathConfigurationNameIs]: cdataPathConfigurationNameIs, // dataPathConfigurationName is:
  [bas.cc + con.cdataPathIs]: cdataPathIs, // dataPath is:
  [bas.cc + con.cfilesFoundIs]: cfilesFoundIs, // filesFound is:
  [bas.cc + con.cfileToLoadIs]: cfileToLoadIs, // fileToLoad is:
  [bas.cc + con.cfilesToLoadIs]: cfilesToLoadIs, // filesToLoad is:
  [bas.cc + con.ccontextNameIs]: ccontextNameIs, // contextName is:
  [bas.cc + con.cdataFileToMergeIs]: cdataFileToMergeIs, // dataFile to merge is:
  [bas.cc + con.cparsedDataFileIs]: cparsedDataFileIs, // parsedDataFile is:
  [bas.cc + con.cexecuteBusinessRules]: cexecuteBusinessRules, // execute business rules:
  [bas.cc + con.cdataFileIs]: cdataFileIs, // dataFile is:
  [bas.cc + con.cmergedDataIs]: cmergedDataIs, // mergedData is:
  [bas.cc + con.cdebugConfigurationSettingValueIs]: cdebugConfigurationSettingValueIs, // debugConfigurationSettingValue is:
  [bas.cc + con.cappConfigPathIs]: cappConfigPathIs, // appConfigPath is:
  [bas.cc + con.cframeworkConfigPathIs]: cframeworkConfigPathIs, // frameworkConfigPath is:
  [bas.cc + con.cALL_DATA_IS]: cALL_DATA_IS, // ALL DATA is:
  [bas.cc + con.cAllLoadedDataIs]: cAllLoadedDataIs, // All loaded data is:
  [bas.cc + con.cconfigDataIs]: cconfigDataIs, // configData is:
  [bas.cc + con.cERROR]: cERROR, // ERROR:
  [bas.cc + con.cErrorInvalidAccessTo]: cErrorInvalidAccessTo, // ERROR: Invalid access to:
  [bas.cc + con.crootPathIs]: crootPathIs, // rootPath is:
  [bas.cc + con.caskIs]: caskIs, // ask is:
  [bas.cc + con.cINPUT]: cINPUT, // INPUT:
  [bas.cc + con.cinputIs]: cinputIs, // input is:
  [bas.cc + con.cstartTimeIs]: cstartTimeIs, // startTime is:
  [bas.cc + con.cendTimeIs]: cendTimeIs, // endTime is:
  [bas.cc + con.cdeltaTimeResultIs]: cdeltaTimeResultIs, // deltaTimeResult is:
  [bas.cc + con.cclientConfigurationIs]: cclientConfigurationIs, // clientConfiguration is:
  [bas.cc + con.cprompt01]: cprompt01, // 'Caught the case that the input string contains the global carriage return term.'
  [bas.cc + con.cprompt02]: cprompt02, // 'index of the carriage return character: '
  [bas.cc + con.cprompt03]: cprompt03, // 'Caught the case that the string includes a carriage return and new line characters.'
  [bas.cc + con.cprintMessageToFile01]: cprintMessageToFile01, // '!file.includes(undefined)'
  [bas.cc + con.cprintMessageToFile02]: cprintMessageToFile02, // 'ERROR: Failure to log to file: '
  [bas.cc + con.cprintMessageToFile03]: cprintMessageToFile03, // 'ERROR: Log File includes undefined.'

  // Coded System Messages
  // EXAMPLE: '!mergedData[wr1.csystem] && !D[wr1.csystem] === true'
};
