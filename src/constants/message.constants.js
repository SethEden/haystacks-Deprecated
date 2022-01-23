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

let bas = require('./basic.constants');
let con = require('./constant.constants');
let phn = require('./phonic.constants');
let num = require('./numeric.constants');
let gen = require('./generic.constants');
let sys = require('./system.constants');
let wr1 = require('./word1.constants');

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
let cplusCountIs = wr1.cplus + wr1.cCount + sys.cSpaceIsColonSpace; // plusCount is:
let cpercentCountIs = wr1.cpercent + wr1.cCount + sys.cSpaceIsColonSpace; // percentCount is:
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
// let cinputDataIis = cinputData + bas.cOpenBracket + bas.ci + bas.cCloseBracket + sys.cSpaceIsColonSpace; // inputData[i] is:
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let cloadedAndMergedDataAllFilesIs = wr1.cloaded + wr1.cAnd + wr1.cMerged + wr1.cData + wr1.cAll + wr1.cFiles + sys.cSpaceIsColonSpace; // loadedAndMergedDataAllFiles is:
let cloadedAndMergedDataAllFilesContentsAre = wr1.cloaded + wr1.cAnd + wr1.cMerged + wr1.cData + wr1.cAll + wr1.cFiles + bas.cSpace + wr1.ccontents + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // loadedAndMergedDataAllFiles contents are:
let ccommandWorkflowFilePathConfigurationNameIs = wr1.ccommand + wr1.cWorkflow + wr1.cFile + wr1.cPath + wr1.cConfiguration + wr1.cName + sys.cSpaceIsColonSpace; // commandWorkflowFilePathConfigurationName is:
let ccontentsOfDataStructreIs = wr1.ccontents + bas.cSpace + bas.cof + bas.cSpace + bas.cD + bas.cDash + wr1.cdata + bas.cSpace + wr1.cstructure + sys.cSpaceIsColonSpace; // contents of D-data structure is:
let cclientBusinessRulesAre = wr1.cclient + wr1.cBusiness + wr1.cRules + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // clientBusinessRules are:
let cclientCommandsAre = wr1.cclient + wr1.cCommands + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // clientCommands are:
let csystemCommandsAliasesPathIs = wr1.csystem + wr1.cCommands + wr1.cAliases + wr1.cPath + sys.cSpaceIsColonSpace; // systemCommandsAliasesPath is:
let cclientCommandsAliasesPathIs = wr1.cclient + wr1.cCommands + wr1.cAliases + wr1.cPath + sys.cSpaceIsColonSpace; // clientCommandsAliasesPath is:
let cresolvedSystemCommandsAliasesPathIs = wr1.cresolved + wr1.cSystem + wr1.cCommands + wr1.cAliases + wr1.cPath + sys.cSpaceIsColonSpace; // resolvedSystemCommandsAliasesPath is:
let cresolvedClientCommandsAliasesPathIs = wr1.cresolved + wr1.cClient + wr1.cCommands + wr1.cAliases + wr1.cPath + sys.cSpaceIsColonSpace; // resolvedClientCommandsAliasesPath is:
let csystemWorkflowPathIs = wr1.csystem + wr1.cWorkflow + wr1.cPath + sys.cSpaceIsColonSpace; // systemWorkflowPath is:
let cclientWorkflowPathIs = wr1.cclient + wr1.cWorkflow + wr1.cPath + sys.cSpaceIsColonSpace; // clientWorkflowPath is:
let cresolvedSystemWorkflowsPathIs = wr1.cresolved + wr1.cSystem + wr1.cWorkflows + wr1.cPath + sys.cSpaceIsColonSpace; // resolvedSystemWorkflowsPath is:
let cresolvedClientWorkflowsPathIs = wr1.cresolved + wr1.cClient + wr1.cWorkflows + wr1.cPath + sys.cSpaceIsColonSpace; // resolvedClientWorkflowsPath is:
let cbusinessRuleIs = wr1.cbusiness + wr1.cRule + sys.cSpaceIsColonSpace; // businessRule is:
let cruleInputIs = wr1.crule + wr1.cInput + sys.cSpaceIsColonSpace; // ruleInput is:
let cruleMetaDataIs = wr1.crule + wr1.cMetaData + sys.cSpaceIsColonSpace; // ruleMetaData is:
let cconfigurationNamespaceIs = wr1.cconfiguration + wr1.cName + wr1.cspace + sys.cSpaceIsColonSpace; // configurationNamespace is:
let cconfigurationNameIs = wr1.cconfiguration + wr1.cName + sys.cSpaceIsColonSpace; // configurationName is:
let cconfigurationValueIs = wr1.cconfiguration + wr1.cValue + sys.cSpaceIsColonSpace; // configurationValue is:
let creturnConfiguraitonValueIs = wr1.creturn + wr1.cConfiguration + wr1.cValue + sys.cSpaceIsColonSpace; // returnConfigurationValue is:
let cattributeJsonStringIs = wr1.cattribute + gen.cJson + wr1.cString + sys.cSpaceIsColonSpace; // attributeJsonString is:
let cappAttributeNameIs = gen.capp + wr1.cAttribute + wr1.cName + sys.cSpaceIsColonSpace; // appAttributeName is:
let cappAttributeValueIs = gen.capp + wr1.cAttribute + wr1.cValue + sys.cSpaceIsColonSpace; // appAttributeValue is:
let cexecuteBusinessRulesColon = wr1.cexecute + bas.cSpace + wr1.cbusiness + bas.cSpace + wr1.crules + bas.cColon + bas.cSpace; // execute business rules:
let cdataPathAfterBusinessRulesProcessingIs = wr1.cdata + wr1.cPath + bas.cSpace + wr1.cafter + bas.cSpace + wr1.cbusiness + bas.cSpace + wr1.crules + bas.cSpace + wr1.cprocessing + sys.cSpaceIsColonSpace; // dataPath after business rules processing is:
let cFileToLoadIs = wr1.cFile + bas.cSpace + bas.cto + bas.cSpace + wr1.cload + sys.cSpaceIsColonSpace; // File to load is:
let cfileExtensionIs = wr1.cfile + wr1.cExtension + sys.cSpaceIsColonSpace; // fileExtension is:
let cloadedFileDataIs = wr1.cloaded + bas.cSpace + wr1.cfile + bas.cSpace + wr1.cdata + sys.cSpaceIsColonSpace; // loaded file data is:
let cBEGIN_PROCESSING_ADDITIONAL_DATA = wr1.cBEGIN + bas.cSpace + wr1.cPROCESSING + bas.cSpace + wr1.cADDITIONAL + bas.cSpace + wr1.cDATA; // BEGIN PROCESSING ADDITIONAL DATA
let cDONE_PROCESSING_ADDITIONAL_DATA = wr1.cDONE + bas.cSpace + wr1.cPROCESSING + bas.cSpace + wr1.cADDITIONAL + bas.cSpace + wr1.cDATA; // DONE PROCESSING ADDITIONAL DATA
let cMERGED_dataIs = wr1.cMERGED + bas.cSpace + wr1.cdata + sys.cSpaceIsColonSpace; // MERGED data is:
let cparsedDataFileContentsAre = wr1.cparsed + wr1.cData + wr1.cFile + bas.cSpace + wr1.ccontents + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // parsedDataFile contents are:
let cdataCatagoryIs = wr1.cdata + wr1.cCatagory + sys.cSpaceIsColonSpace; // dataCatagory is:
let cfullyParsedDataIs = wr1.cfully + bas.cSpace + wr1.cparsed + bas.cSpace + wr1.cdata + sys.cSpaceIsColonSpace; // fully parsed data is:
let cD_finalMergeIs = bas.cD + bas.cSpace + wr1.cfinal + bas.cSpace + wr1.cmerge + sys.cSpaceIsColonSpace; // D final merge is:
let cdataStorageContextNameIs = wr1.cdata + wr1.cStorage + wr1.cContext + wr1.cName + sys.cSpaceIsColonSpace; // dataStorageContextName is:
let cdataToStoreIs = wr1.cdata + bas.cTo + wr1.cStore + sys.cSpaceIsColonSpace; // dataToStore is:
let cdataCatagoryDetailsNameIs = wr1.cdata + wr1.cCatagory + wr1.cDetails + wr1.cName + sys.cSpaceIsColonSpace; // dataCatagoryDetailsName is:
let ctempDataIs = wr1.ctemp + wr1.cData + sys.cSpaceIsColonSpace; // tempData is:
let ctargetDataIs = wr1.ctarget + wr1.cData + sys.cSpaceIsColonSpace; // targetData is:
let cpageNameIs = wr1.cpage + wr1.cName + sys.cSpaceIsColonSpace; // pageName is:
let cdataToMergeIs = wr1.cdata + bas.cSpace + bas.cto + bas.cSpace + wr1.cMerge + sys.cSpaceIsColonSpace; // data to Merge is:
let cdataToMergeElementCountIs = wr1.cdata + bas.cTo + wr1.cMerge + wr1.cElement + wr1.cCount + sys.cSpaceIsColonSpace; // dataToMergeElementCount is:
let cdataToMergeElementCountIs1 = wr1.cdata + bas.cTo + wr1.cMerge + wr1.cElement + wr1.cCount + sys.cSpaceIsColonSpace + num.c1; // dataToMergeElementCount is 1
let ccheckIfThePageNameIsNotAnEmptyString = wr1.ccheck + bas.cSpace + bas.cif + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cpage + wr1.cName + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + bas.can + bas.cSpace + wr1.cempty + bas.cSpace + wr1.cstring; // check if the pageName is not an empty string
let cpageNameIsNotAnEmptyString = wr1.cpage + wr1.cName + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + bas.can + bas.cSpace + wr1.cempty + bas.cSpace + wr1.cstring; // pageName is not an empty string
let cCheckIfTheDataCatagoryIsAnEmptyStringOrNot = wr1.cCheck + bas.cSpace + bas.cif + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cdata + wr1.cCatagory + bas.cSpace + bas.cis + bas.cSpace + bas.can + bas.cSpace + wr1.cempty + bas.cSpace + wr1.cstring + bas.cSpace + bas.cor + bas.cSpace + gen.cnot; // Check if the dataCatagory is an empty string or not
let cdataCatagoryIsNotAnEmptyString = wr1.cdata + wr1.cCatagory + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + bas.can + bas.cSpace + wr1.cempty + bas.cSpace + wr1.cstring + bas.cExclamation; // dataCatagory is not an empty string!
let cdataCatagoryIsAnEmptyString = wr1.cdata + wr1.cCatagory + bas.cSpace + bas.cIS + bas.cSpace + bas.can + bas.cSpace + wr1.cempty + bas.cSpace + wr1.cstring + bas.cExclamation; // dataCatagory IS an empty string!
let ctargetDataContentIs = wr1.ctarget + wr1.cData + bas.cSpace + wr1.ccontent + sys.cSpaceIsColonSpace; // targetData content is:
let cafterAttemptToMergeResultsAre = wr1.cafter + bas.cSpace + wr1.cattempt + bas.cSpace + bas.cto + bas.cSpace + wr1.cmerge + bas.cComa + bas.cSpace + wr1.cresults + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // after attempt to merge, results are:
let cMergedDataIs = wr1.cMerged + bas.cSpace + wr1.cdata + sys.cSpaceIsColonSpace; // Merged data is:
let cpageNameIsAnEmptyString = wr1.cpage + wr1.cName + bas.cSpace + bas.cis + bas.cSpace + bas.can + bas.cSpace + wr1.cempty + bas.cSpace + wr1.cstring; // pageName is an empty string
let cCaughtTheSpecialCaseThatWeAreMergingFlatList = wr1.cCaught + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cspecial + bas.cSpace + wr1.ccase + bas.cSpace + wr1.cthat + bas.cSpace + bas.cwe + bas.cSpace + wr1.care + bas.cSpace + wr1.cmerging + bas.cSpace + bas.ca + bas.cSpace + wr1.cflat + bas.cSpace + wr1.clist + bas.cDot; // Caught the special case that we are merging a flat list.
let cinsideTheForLoop = wr1.cinside + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cfor + bas.cDash + wr1.cloop; // inside the for-loop
let ckeyIs = wr1.ckey + sys.cSpaceIsColonSpace; // key is:
let ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs = wr1.ctarget + wr1.cData + bas.cSpace + bas.cis + bas.cSpace + wr1.cmodified + bas.cSpace + bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cinput + bas.cSpace + wr1.cpass + bas.cDash + bas.cby + bas.cDash + wr1.creference + bas.cSpace + wr1.cvariable + bas.cSpace + wr1.ccontent + sys.cSpaceIsColonSpace; // targetData is modified in the input pass-by-reference variable content is:
let cdataObjectValueIs = wr1.cdata + wr1.cObject + bas.cSpace + wr1.cvalue + sys.cSpaceIsColonSpace; // dataObject value is:
let celementNameIs = wr1.celement + wr1.cName + sys.cSpaceIsColonSpace; // elementName is:
let cdataObjectIs = wr1.cdata + wr1.cObject + sys.cSpaceIsColonSpace; // dataObject is:
let celementNamePatternIs = wr1.celement + wr1.cName + wr1.cPattern + sys.cSpaceIsColonSpace; // elementNamePattern is:
let celementCountIs = wr1.celement + wr1.cCount + sys.cSpaceIsColonSpace; // elementCount is:
let cERROR_Colon = wr1.cERROR + bas.cColon + bas.cSpace; // ERROR:
let cfileAndPathToLoadFromIs = wr1.cfile + bas.cSpace + wr1.cand + bas.cSpace + wr1.cpath + bas.cSpace + bas.cto + bas.cSpace + wr1.cload + bas.cSpace + wr1.cfrom + sys.cSpaceIsColonSpace; // file and path to load from is:
let cDoneLoadingDataFrom = wr1.cDONE + bas.cSpace + wr1.cloading + bas.cSpace + wr1.cdata + bas.cSpace + wr1.cfrom + bas.cColon + bas.cSpace; // DONE loading data from:
let cfileAndPathToWriteDataToIs = wr1.cfile + bas.cSpace + wr1.cand + bas.cSpace + wr1.cpath + bas.cSpace + bas.cto + bas.cSpace + wr1.cwrite + bas.cSpace + wr1.cdata + bas.cSpace + bas.cto + bas.cSpace + bas.cis + bas.cColon + bas.cSpace; // file and path to write data to is:
let cdataToWriteIs = wr1.cdata + bas.cSpace + bas.cto + bas.cSpace + wr1.cwrite + sys.cSpaceIsColonSpace; // data to write is:
let cDataWasWrittenToTheFile = wr1.cData + bas.cSpace + wr1.cwas + bas.cSpace + wr1.cwritten + bas.cSpace + bas.cto + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cfile + bas.cColon + bas.cSpace; // Data was written to the file:
let cPathThatShouldBeScannedIs = wr1.cPath + bas.cSpace + wr1.cthat + bas.cSpace + wr1.cshould + bas.cSpace + bas.cbe + bas.cSpace + wr1.cscanned + sys.cSpaceIsColonSpace; // Path that should be scanned is:
let cfilesFoundAre = wr1.cfiles + bas.cSpace + wr1.cfound + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // files found are:
let cdirectorIs = wr1.cdirectory + sys.cSpaceIsColonSpace; // directory is:
let cdirectoryPathIs = wr1.cdirectory + wr1.cPath + sys.cSpaceIsColonSpace; // directoryPath is:
let csourceFolderIs = wr1.csource + wr1.cFolder + sys.cSpaceIsColonSpace; // sourceFolder is:
let cdestinationFolderIs = wr1.cdestination + wr1.cFolder + sys.cSpaceIsColonSpace; // destinationFolder is:
let ccopySuccessIs = wr1.ccopy + wr1.cSuccess + sys.cSpaceIsColonSpace; // copySuccess is:
let ccurrentVersionIs = wr1.ccurrent + bas.cSpace + wr1.cversion + sys.cSpaceIsColonSpace; // current version is:
let creleasedArchiveFilesListIs = wr1.creleased + bas.cSpace + wr1.carchive + bas.cSpace + wr1.cfiles + bas.cSpace + wr1.clist + sys.cSpaceIsColonSpace; // released archive files list is:
let cfileIs = wr1.cfile + sys.cSpaceIsColonSpace; // file is:
let cfileNameIs = wr1.cfile + wr1.cName + sys.cSpaceIsColonSpace; // fileName is:
let creleaseFilesListIs = wr1.crelease + bas.cSpace + wr1.cfiles + bas.cSpace + wr1.clist + sys.cSpaceIsColonSpace; // release files list is:
let creleaseDateTimeStampIs = wr1.crelease + bas.cSpace + wr1.cdate + bas.cDash + wr1.ctime + bas.cSpace + wr1.cstamp + sys.cSpaceIsColonSpace; // release date-time stamp is:
let creleaseFileNameIs = wr1.crelease + bas.cSpace + wr1.cfile + wr1.cName + sys.cSpaceIsColonSpace; // release fileName is:
let cDoneWritingTheZipFile = wr1.cDone + bas.cSpace + wr1.cwriting + bas.cSpace + wr1.cthe + bas.cSpace + gen.czip + bas.cSpace + wr1.cfile + bas.cColon + bas.cSpace; // Done writing the zip file:
let cSetTheReturnPackageSuccessFlagToTrue = wr1.cSet + bas.cSpace + wr1.cthe + bas.cSpace + wr1.creturn + bas.cSpace + wr1.cpackage + wr1.cSuccess + bas.cSpace + wr1.cflag + bas.cSpace + bas.cto + bas.cSpace + gen.cTRUE; // Set the return packageSuccess flag to TRUE
let ccurrentVersionAlreadyReleased = wr1.ccurrent + bas.cSpace + wr1.cversion + bas.cSpace + wr1.calready + bas.cSpace + wr1.creleased; // current version already released
let cpackageSuccessIs = wr1.cpackage + wr1.cSuccess + sys.cSpaceIsColonSpace; // packageSuccess is:
let cRootPathBeforeProcessingIs = wr1.cRoot + wr1.cPath + bas.cSpace + wr1.cbefore + bas.cSpace + wr1.cprocessing + sys.cSpaceIsColonSpace; // RootPath before processing is:
let cRootPathAfterProcessingIs = wr1.cRoot + wr1.cPath + bas.cSpace + wr1.cafter + bas.cSpace + wr1.cprocessing + sys.cSpaceIsColonSpace; // RootPath after processing is:
let cSourceIs = wr1.csource + sys.cSpaceIsColonSpace; // source is:
let ctargetIs = wr1.ctarget + sys.cSpaceIsColonSpace; // target is:
let cErrorCouldNotCopyFile = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cCould + bas.cSpace + gen.cnot + bas.cSpace + wr1.ccopy + bas.cSpace + wr1.cfile + bas.cColon + bas.cSpace; // ERROR: Could not copy file:
let cErrorCouldNotCreateFolder = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cCould + bas.cSpace + gen.cnot + bas.cSpace + wr1.ccreate + bas.cSpace + wr1.cfolder + bas.cColon + bas.cSpace; // ERROR: Could not create folder:
let csuccessfullCopyIs = wr1.csuccessful + wr1.cCopy + sys.cSpaceIsColonSpace; // successfullCopy is:
let cErrorCouldNotCopyFolderContents = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cCould + bas.cSpace + gen.cnot + bas.cSpace + wr1.ccopy + bas.cSpace + wr1.cfolder + bas.cSpace + wr1.ccontents + bas.cColon + bas.cSpace; // ERROR: Could not copy folder contents:
let cargumentValueIs = wr1.cargument + wr1.cValue + sys.cSpaceIsColonSpace; // argumentValue is:
let cconsolidatedArgumentModeIs = wr1.cconsolidated + wr1.cArgument + wr1.cMode + sys.cSpaceIsColonSpace; // consolidatedArgumentMode is:
let cPushingArgumentValueToReturnDataAsArrayElement = wr1.cPushing + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cargument + wr1.cValue + bas.cSpace + bas.cto + bas.cSpace + wr1.cthe + bas.cSpace + wr1.creturn + wr1.cData + bas.cSpace + bas.cas + bas.cSpace + bas.can + bas.cSpace + wr1.carray + bas.cSpace + wr1.celement; // Pushing the argumentValue to the returnData as an array element
let cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse = wr1.cCalling + bas.cSpace + wr1.canalyze + wr1.cArgument + bas.cSpace + wr1.cfor + bas.cSpace + wr1.cindex + bas.cSpace + wr1.cEqual + bas.cSpace + num.c2 + bas.cComa + bas.cSpace + wr1.cconsolidated + wr1.cArgument + wr1.cMode + bas.cSpace + bas.cEqual + bas.cSpace + gen.cfalse; // Calling analyzeArgument for index = 2, consolidatedArgumentMode = false
let cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue = wr1.cCalling + bas.cSpace + wr1.canalyze + wr1.cArgument + bas.cSpace + wr1.cfor + bas.cSpace + wr1.cindex + bas.cSpace + bas.cEqual + bas.cSpace + num.c2 + bas.cComa + bas.cSpace + wr1.cconsolidated + wr1.cArgument + wr1.cMode + bas.cSpace + bas.cEqual + bas.cSpace + gen.ctrue; // Calling analyzeArgument for index = 2, consolidatedArgumentMode = true
let cargumentValueLengthGreaterThanZero = wr1.cargument + wr1.cValue + bas.cDot + wr1.cLength + bas.cSpace + bas.cGreaterThan + bas.cSpace + num.c0; // argumentValue.length > 0
let cReturnArgumentValueSameAsItWasPassedIn = wr1.cReturn + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cargument + wr1.cValue + bas.cSpace + wr1.cthe + bas.cSpace + wr1.csame + bas.cSpace + bas.cas + bas.cSpace + bas.cit + bas.cSpace + wr1.cwas + bas.cSpace + wr1.cpassed + bas.cSpace + bas.cin + bas.cDot; // Return the argumentValue the same as it was passed in.
let cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse = wr1.cCalling + bas.cSpace + wr1.canalyze + wr1.cArgument + bas.cSpace + wr1.cfor + bas.cSpace + wr1.cindex + bas.cSpace + bas.cEqual + bas.cSpace + num.c3 + bas.cComa + bas.cSpace + wr1.cconsolidated + wr1.cArgument + wr1.cMode + bas.cSpace + bas.cEqual + bas.cSpace + gen.cfalse; // Calling analyzeArgument for index = 3, consolidatedArgumentMode = false
let cCheckIfThereAreBracketsOrNoBrackets = wr1.cCheck + bas.cSpace + bas.cif + bas.cSpace + wr1.cthere + bas.cSpace + wr1.care + bas.cSpace + wr1.cbrackets + bas.cSpace + bas.cor + bas.cSpace + bas.cno + bas.cSpace + wr1.cbrackets + bas.cDot; // Check if there are brackets or no brackets.
let cBracketsWereFound = wr1.cBrackets + bas.cSpace + wr1.cwere + bas.cSpace + wr1.cfound; // Brackets were found
let cCheckIfThereIsRegularExpressionOrNot = wr1.cCheck + bas.cSpace + bas.cif + bas.cSpace + wr1.cthere + bas.cSpace + bas.cis + bas.cSpace + bas.ca + bas.cSpace + wr1.cRegular + bas.cSpace + wr1.cExpression + bas.cSpace + bas.cor + bas.cSpace + gen.cnot + bas.cDot; // Check if there is a Regular Expression or not.
let cRegularExpressionWasFound = bas.cA + bas.cSpace + wr1.cregular + bas.cSpace + wr1.cexpression + bas.cSpace + wr1.cwas + bas.cSpace + wr1.cfound + bas.cExclamation; // A regular expression was found!
let cNoRegExpFound = bas.cNO + bas.cSpace + gen.cRegExp + bas.cSpace + wr1.cfound + bas.cExclamation; // NO RegExp found!
let cBracketsAreFound = wr1.cBrackets + bas.cSpace + wr1.cARE + bas.cSpace + wr1.cfound + bas.cExclamation; // Brackets ARE found!
let cNoSecondaryCommandArgumentDelimiters = bas.cNO + bas.cSpace + wr1.csecondary + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cargument + bas.cSpace + wr1.cdelimiters + bas.cDot; // NO secondary command argument delimiters.
let cregularExpressionIs = wr1.cregular + bas.cSpace + wr1.cexpression + sys.cSpaceIsColonSpace; // regular expression is:
let cregExValueIs = gen.cregEx + wr1.cValue + sys.cSpaceIsColonSpace; // regExValue is:
let cregularExpressionFlagsAre = wr1.cregular + bas.cSpace + wr1.cexpression + bas.cSpace + wr1.cflags + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // regular expression flags are:
let cregExFlagsIs = gen.cregEx + wr1.cFlags + sys.cSpaceIsColonSpace; // regExFlags is:
let cargumentValueContainsTheDelimiterLetsSplitIt = wr1.cargument + wr1.cValue + bas.cSpace + wr1.ccontains + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cdelimiter + bas.cColon + bas.cSpace + wr1.cLets + bas.cSpace + wr1.csplit + bas.cSpace + bas.cit + bas.cExclamation; // argumentValue contains the delimiter, lets split it!
let cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs = wr1.cargument + wr1.cValue + bas.cSpace + wr1.cafter + bas.cSpace + wr1.cattempting + bas.cSpace + bas.cto + bas.cSpace + wr1.cremove + bas.cSpace + bas.ca + bas.cSpace + wr1.copen + bas.cSpace + wr1.cbracket + bas.cSpace + wr1.cfrom + bas.cSpace + wr1.call + bas.cSpace + wr1.carray + bas.cSpace + wr1.celements + sys.cSpaceIsColonSpace; // argumentValue after attempting to remove a open bracket from all array elements is:
let cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs = wr1.cargument + wr1.cValue + bas.cSpace + wr1.cafter + bas.cSpace + wr1.cattempting + bas.cSpace + bas.cto + bas.cSpace + wr1.cremove + bas.cSpace + bas.ca + bas.cSpace + wr1.cclose + bas.cSpace + wr1.cbracket + bas.cSpace + wr1.cfrom + bas.cSpace + wr1.call + bas.cSpace + wr1.carray + bas.cSpace + wr1.celements + sys.cSpaceIsColonSpace; // argumentValue after attempting to remove a close bracket from all array elements is:
let csecondaryCommandArgsDelimiterIs = wr1.csecondary + wr1.cCommand + gen.cArgs + wr1.cDelimiter + sys.cSpaceIsColonSpace; // secondaryCommandArgsDelimiter is:
let cargumentArrayIs = wr1.cargument + wr1.cArray + sys.cSpaceIsColonSpace; // argumentArray is:
let cformattingIs = wr1.cformatting + sys.cSpaceIsColonSpace; // formatting is:
let cdeltaTimeIs = wr1.cdelta + wr1.cTime + sys.cSpaceIsColonSpace; // deltaTime is:
let cformatIs = wr1.cformat + sys.cSpaceIsColonSpace; // format is:
let creturnDeltaTimeIs = wr1.creturn + wr1.cDelta + wr1.cTime + sys.cSpaceIsColonSpace; // returnDeltaTime is:
let csleepTimeIs = wr1.csleep + wr1.cTime + sys.cSpaceIsColonSpace; // sleepTime is:
let cworkflowNameIs = wr1.cworkflow + wr1.cName + sys.cSpaceIsColonSpace; // workflowName is:
let ccurrentWorkflowIs = wr1.ccurrent + wr1.cWorkflow + sys.cSpaceIsColonSpace; // currentWorkflow is:
let cworkflowValueIs = wr1.cworkflow + wr1.cValue + sys.cSpaceIsColonSpace; // workflowValue is:
let cdataHivePathArrayIs = wr1.cdata + wr1.cHive + wr1.cPath + wr1.cArray + sys.cSpaceIsColonSpace; // dataHivePathArray is:
let ccontentsOfLeafDataHiveElementIs = wr1.ccontents + bas.cSpace + bas.cof + bas.cSpace + wr1.cleaf + wr1.cData + wr1.cHive + wr1.cElement + sys.cSpaceIsColonSpace; // contents of leafDataHiveElement is:
let centryIs = wr1.centry + sys.cSpaceIsColonSpace; // entry is:
let cattributeValueIs = wr1.cattribute + wr1.cValue + sys.cSpaceIsColonSpace; // attributeValue is:
let ckey2Is = wr1.ckey + num.c2 + sys.cSpaceIsColonSpace; // key2 is:
let centityIs = wr1.centity + sys.cSpaceIsColonSpace; // entity is:
let cqueueNameSpaceIs = wr1.cqueue + wr1.cName + wr1.cSpace + sys.cSpaceIsColonSpace; // queueNameSpace Is:
let cstackNameSpaceIs = wr1.cstack + wr1.cName + wr1.cSpace + sys.cSpaceIsColonSpace; // stackNameSpace Is:
let cWarningStackColon = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cStack + bas.cColon + bas.cSpace; // WARNING: Stack:
let cAlreadyExists = wr1.cALREADY + bas.cSpace + wr1.cexist + bas.cExclamation; // ALREADY exist!
let cdoesNotExist = bas.cSpace + wr1.cdoes + bas.cSpace + gen.cnot + bas.cSpace + wr1.cexist + bas.cExclamation; // does not exist!
let cisEmpty = bas.cSpace + bas.cis + bas.cSpace + wr1.cempty + bas.cExclamation; // is empty!
let cContentsOfTheStackNamespace = wr1.cContents + bas.cSpace + bas.cof + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cstack + bas.cSpace + wr1.cname + wr1.cspace + bas.cColon + bas.cSpace; // Contents of the stack namespace:
let cwordDelimiterIs = wr1.cword + wr1.cDelimiter + sys.cSpaceIsColonSpace; // wordDelimiter is:
let cstringContainsAcronymIs = wr1.cstring + wr1.cContains + wr1.cAcronym + sys.cSpaceIsColonSpace; // stringContainsAcronym is:
let cErrorZipPackageReleaseFailed = wr1.cERROR + bas.cColon + bas.cSpace + gen.cZip + bas.cSpace + wr1.cpackage + bas.cSpace + wr1.crelease + bas.cSpace + wr1.cfailed + bas.cColon + bas.cSpace; // ERROR: Zip package release failed:
let cminimumColorRangeIs = wr1.cminimum + wr1.cColor + wr1.cRange + sys.cSpaceIsColonSpace; // minimumColorRange is:
let cmaximumColorRangeIs = wr1.cmaximum + wr1.cColor + wr1.cRange + sys.cSpaceIsColonSpace; // maximumColorRange is:
let callSystemConstantsValidationDataIs = wr1.call + wr1.cSystem + wr1.cConstants + wr1.cValidation + wr1.cData + sys.cSpaceIsColonSpace; // allSystemConstantsValidationData is:
let callClientConstantsValidationDataIs = wr1.call + wr1.cClient + wr1.cConstants + wr1.cValidation + wr1.cData + sys.cSpaceIsColonSpace; // allClientConstantsValidationData is:
let cconstantLibraryDataIs = wr1.cconstant + wr1.cLibrary + wr1.cData + sys.cSpaceIsColonSpace; // constantLibraryData is:
let cclientValidationDataIs = wr1.cclient + wr1.cValidation + wr1.cData + sys.cSpaceIsColonSpace; // clientValidationData is:
let carrayValidationDataIs = wr1.carray + wr1.cValidation + wr1.cData + sys.cSpaceIsColonSpace; // arrayValidationData is:
let cfilesListLimitIs = wr1.cfiles + wr1.cList + wr1.cLimit + sys.cSpaceIsColonSpace; // filesListLimit is:
let cenableLimitIs = wr1.cenable + wr1.cLimit + sys.cSpaceIsColonSpace; // enableLimit is:
let cfilesLimitIs = wr1.cfiles + wr1.cLimit + sys.cSpaceIsColonSpace; // filesLimit is:
let cinputDataRightBeforeProcessingIs = cinputData + wr1.cRight + wr1.cBefore + wr1.cProcessing + sys.cSpaceIsColonSpace; // inputData right before processing is:

// WARNING: Mixed string. Cannot determine what delimiter should be used to break up the string into words.
let cDetermineWordDelimiterMessage1 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cMixed + bas.cSpace + wr1.cstring + bas.cDot + bas.cSpace; // WARNING: Mixed string.
let cDetermineWordDelimiterMessage2 = wr1.cCannot + bas.cSpace + wr1.cdetermine + bas.cSpace + wr1.cwhat + bas.cSpace + wr1.cdelimiter + bas.cSpace + wr1.cshould + bas.cSpace; // Cannot determine what delimiter should
let cDetermineWordDelimiterMessage3 = bas.cbe + bas.cSpace + wr1.cused + bas.cSpace + bas.cto + bas.cSpace + wr1.cbreak + bas.cSpace + bas.cup + bas.cSpace + wr1.cthe + bas.cSpace; // be used to break up the
let cDetermineWordDelimiterMessage4 = wr1.cstring + bas.cSpace + wr1.cinto + bas.cSpace + wr1.cwords + bas.cDot; // string into words.
// WARNING: Mixed string. Cannot determine how words are delimited in the string. Unable to count words.
let cGetWordCountInStringMessage1 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cMixed + bas.cSpace + wr1.cstring + bas.cDot + bas.cSpace; // WARNING: Mixed string.
let cGetWordCountInStringMessage2 = wr1.cCannot + bas.cSpace + wr1.cdetermine + bas.cSpace + wr1.chow + bas.cSpace + wr1.cwords + bas.cSpace + wr1.care + bas.cSpace + wr1.cdelimited + bas.cSpace; // Cannot determine how words are delimited
let cGetWordCountInStringMessage3 = bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cstring + bas.cDot + bas.cSpace + wr1.cUnable + bas.cSpace + bas.cto + bas.cSpace + wr1.ccount + bas.cSpace + wr1.cwords + bas.cDot; // in the string. Unable to count words.
// WARNING: Mixed string. Cannot get words from the string. Unable to determine words.
let cGetWordsArrayFromStringMessage1 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cMixed + bas.cSpace + wr1.cString + bas.cDot + bas.cSpace; // WARNING: Mixed string.
let cGetWordsArrayFromStringMessage2 = wr1.cCannot + bas.cSpace + wr1.cget + bas.cSpace + wr1.cwords + bas.cSpace + wr1.cfrom + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cstring + bas.cDot + bas.cSpace; // Cannot get words from the string.
let cGetWordsArrayFromStringMessage3 = wr1.cUnable + bas.cSpace + bas.cto + bas.cSpace + wr1.cdetermine + bas.cSpace + wr1.cwords + bas.cDot; // Unable to determine words.
// Please enter a named command where the first word starts with a lower case letter and all other words in the named command start with an upper case letter:
let cCommandNamePrompt1 = wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cnamed + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cwhere + bas.cSpace; // Please enter a named command where
let cCommandNamePrompt2 = wr1.cthe + bas.cSpace + num.cfirst + bas.cSpace + wr1.cword + bas.cSpace + wr1.cstarts + bas.cSpace + wr1.cwith + bas.cSpace + bas.ca + bas.cSpace; // the first word starts with a
let cCommandNamePrompt3 = wr1.clower + bas.cSpace + wr1.ccase + bas.cSpace + wr1.cletter + bas.cSpace + wr1.cand + bas.cSpace + wr1.call + bas.cSpace + wr1.cother + bas.cSpace; // lower case letter and all other
let cCommandNamePrompt4 = wr1.cwords + bas.cSpace + bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cnamed + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cstart + bas.cSpace; // words in the named command start
let cCommandNamePrompt5 = wr1.cwith + bas.cSpace + bas.can + bas.cSpace + wr1.cupper + bas.cSpace + wr1.ccase + bas.cSpace + wr1.cletter + bas.cColon; // with an upper case letter:
// Please enter a list of command word abreviations/acronyms/aliases for the command word:
let cCommandWordAliasPrompt1 = wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.clist + bas.cSpace + bas.cof + bas.cSpace + wr1.ccommand + bas.cSpace;
let cCommandWordAliasPrompt2 = wr1.cword + bas.cSpace + wr1.cabreviations + bas.cForwardSlash + wr1.cacronyms + bas.cForwardSlash + wr1.caliases + bas.cSpace;
let cCommandWordAliasPrompt3 = wr1.cfor + bas.cSpace + wr1.cthe + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cword + bas.cColon;
// Please enter a string you would like to define as a constant in the constants system:
let cConstantPrompt1 = wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cstring + bas.cSpace + wr1.cyou + bas.cSpace + wr1.cwould + bas.cSpace; // Please enter a string you would
let cConstantPrompt2 = wr1.clike + bas.cSpace + bas.cto + bas.cSpace + wr1.cdefine + bas.cSpace + bas.cas + bas.cSpace + bas.ca + bas.cSpace + wr1.cconstant + bas.cSpace; // like to define as a constant
let cConstantPrompt3 = bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cconstants + bas.cSpace + wr1.csystem + bas.cColon; // in the constants system:
// Please enter a coma separated list of strings you would like to define in the constants system:
let cConstantsListPrompt1 = wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.ccoma + bas.cSpace + wr1.cseparated + bas.cSpace + wr1.clist + bas.cSpace + bas.cof + bas.cSpace;
let cConstantsListPrompt2 = wr1.cstrings + bas.cSpace + wr1.cyou + bas.cSpace + wr1.cwould + bas.cSpace + wr1.clike + bas.cSpace + bas.cto + bas.cSpace + wr1.cdefine + bas.cSpace + bas.cin + bas.cSpace;
let cConstantsListPrompt3 = wr1.cthe + bas.cSpace + wr1.cconstants + bas.cSpace + wr1.csystem + bas.cColon;
// Please enter a coma separated list of strings you would like to search for common patterns:
let cConstantsListPatternSearchPrompt1 = wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.ccoma + bas.cSpace + wr1.cseparated + bas.cSpace + wr1.clist + bas.cSpace + bas.cof + bas.cSpace; // Please enter a coma separated list of
let cConstantsListPatternSearchPrompt2 = wr1.cstrings + bas.cSpace + wr1.cyou + bas.cSpace + wr1.cwould + bas.cSpace + wr1.clike + bas.cSpace + bas.cto + bas.cSpace + wr1.csearch + bas.cSpace + wr1.cfor + bas.cSpace; // strings you would like to search for
let cConstantsListPatternSearchPrompt3 = wr1.ccommon + bas.cSpace + wr1.cpatterns + bas.cColon; // common patterns:
// ERROR: Attempted to generate a suggested line of code to validate the constant, ' +
// 'but the constant is not formatted correctly, it should begin with a lower case "c". ' +
// 'Please reformat the constant correctly so a line of code can be generated for you.
let cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1 = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cAttempted + bas.cSpace + bas.cto + bas.cSpace + wr1.cgenerate + bas.cSpace + bas.ca + bas.cSpace + wr1.csuggested + bas.cSpace; // ERROR: Attempted to generate a suggested
let cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2 = wr1.cline + bas.cSpace + bas.cof + bas.cSpace + wr1.ccode + bas.cSpace + bas.cto + bas.cSpace + wr1.cvalidate + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cconstant + bas.cComa + bas.cSpace; // line of code to validate the constant,
let cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3 = wr1.cbut + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cconstant + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + wr1.cformatted + bas.cSpace + wr1.ccorrectly + bas.cComa + bas.cSpace; // but the constant is not formatted correctly,
let cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4 = bas.cit + bas.cSpace + wr1.cshould + bas.cSpace + wr1.cbegin + bas.cSpace + wr1.cwith + bas.cSpace + bas.ca + bas.cSpace + wr1.clower + bas.cSpace + wr1.ccase + bas.cSpace + bas.cDoubleQuote + bas.cc + bas.cDoubleQuote + bas.cDot + bas.cSpace; // it should begin with a lower case "c".
let cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5 = wr1.cPlease + bas.cSpace + wr1.creformat + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cconstant + bas.cSpace + wr1.ccorrectly + bas.cSpace + bas.cso + bas.cSpace + bas.ca + bas.cSpace; // Please reformat the constant correctly so a
let cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6 = wr1.cline + bas.cSpace + bas.cof + bas.cSpace + wr1.ccode + bas.cSpace + wr1.ccan + bas.cSpace + bas.cbe + bas.cSpace + wr1.cgenerated + bas.cSpace + wr1.cfor + bas.cSpace + wr1.cyou + bas.cDot; // line of code can be generated for you.
let cSearchForPatternsInStringArrayMessage1 = sys.ccurrentMasterStringArrayElement + bas.cSpace + wr1.cdoes + bas.cSpace + gen.cnot + bas.cSpace + wr1.ccontain + bas.cSpace + bas.ca + bas.cSpace + wr1.cspace + bas.cSpace + wr1.ccharacter; // currentMasterStringArrayElement does not contain a space character
// WARNING: The current string being searched contains a space character, we are going to skip comparison.
let cSearchForPatternsInStringArrayMessage2 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cThe + bas.cSpace + wr1.ccurrent + bas.cSpace + wr1.cstring + bas.cSpace + wr1.cbeing + bas.cSpace + wr1.csearched + bas.cSpace + wr1.ccontains + bas.cSpace + bas.ca + bas.cSpace + wr1.cspace + bas.cSpace + wr1.ccharacter + bas.cComa + bas.cSpace; // WARNING: The current string being search contains a space character,
let cSearchForPatternsInStringArrayMessage3 = bas.cwe + bas.cSpace + wr1.care + bas.cSpace + wr1.cgoing + bas.cSpace + bas.cto + bas.cSpace + wr1.cskip + bas.cSpace + wr1.ccomparison + bas.cDot; // we are going to skip comparison.
// WARNING: InputData was not an array or had an empty array.
let cSearchForPatternsInStringArrayMessage4 = wr1.cWARNING + bas.cColon + bas.cSpace + cInputData + bas.cSpace + wr1.cwas + bas.cSpace + gen.cnot + bas.cSpace + bas.can + bas.cSpace + wr1.carray + bas.cSpace + bas.cor + bas.cSpace + wr1.chad + bas.cSpace + bas.can + bas.cSpace + wr1.cempty + bas.cSpace + wr1.carray + bas.cDot; // WARNING: InputData was not an array or had an empty array.
// WARNING: No data to load, please specify a valid path & filename!
let cLoadDataFileMessage1 = wr1.cWARNING + bas.cColon + bas.cSpace + bas.cNo + bas.cSpace + wr1.cdata + bas.cSpace + bas.cto + bas.cSpace + wr1.cload + bas.cComa + bas.cSpace; // WARNING: No data to load,
let cloadDataFileMessage2 = wr1.cplease + bas.cSpace + wr1.cspecify + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.cpath + bas.cSpace + bas.cAndPersand + bas.cSpace + wr1.cfilename + bas.cExclamation; // please specify a valid path & filename!
let cloadDataFileMessage3 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cInvalid + bas.cSpace + wr1.cfile + bas.cSpace + wr1.cformat + bas.cComa + bas.cSpace + wr1.cfile + bas.cSpace + wr1.cformats + bas.cSpace + wr1.csupported + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // WARNING: Invalid file format, file formats supported are:
// ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another release.
let cdeployApplicationMessage1a = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cRelease + bas.cSpace + wr1.cfailed + bas.cSpace + wr1.cbecause + bas.cSpace + bas.cof + bas.cSpace + bas.ca + bas.cSpace + wr1.cfailure + bas.cSpace + bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cconstants + bas.cSpace + wr1.cvalidation + bas.cSpace + wr1.csystem + bas.cDot + bas.cSpace; // ERROR: Release failed because of a failure in the constants validation system.
let cdeployApplicationMessage2a = wr1.cPlease + bas.cSpace + wr1.cfix + bas.cSpace + gen.cASAP + bas.cSpace + wr1.cbefore + bas.cSpace + wr1.cattempting + bas.cSpace + wr1.canother + bas.cSpace + wr1.crelease + bas.cDot; // Please fix ASAP before attempting another release.
// ERROR: Release failed because of a failure in the commands alias validation system. Please fix ASAP before attempting another release.
let cdeployApplicationMessage1b = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cRelease + bas.cSpace + wr1.cfailed + bas.cSpace + wr1.cbecause + bas.cSpace + bas.cof + bas.cSpace + bas.ca + bas.cSpace + wr1.cfailure + bas.cSpace + bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.ccommands + bas.cSpace + wr1.calias + bas.cSpace + wr1.cvalidation + bas.cSpace + wr1.csystem + bas.cDot + bas.cSpace; //ERROR: Release failed because of a failure in the commands alias validation system.
let ccommandSequencerMessage1 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cnominal + bas.cDot + wr1.ccommand + wr1.cSequencer + bas.cColon + bas.cSpace + wr1.cThe + bas.cSpace + wr1.cspecified + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cwas + bas.cSpace + gen.cnot + bas.cSpace + wr1.cfound + bas.cComa + bas.cSpace; // WARNING: nominal.commandSequencer: The specified command was not found,
let ccommandSequencerMessage2 = wr1.cplease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cand + bas.cSpace + wr1.ctry + bas.cSpace + wr1.cagain + bas.cDot; // Please enter a valid command and try again.
let cworkflowMessage1 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cnominal + bas.cDot + wr1.cworkflow + bas.cColon + bas.cSpace + wr1.cThe + bas.cSpace + wr1.cspecified + bas.cSpace + wr1.cworkflow + bas.cColon + bas.cSpace; // WARNING: nominal.workflow: The specified workflow:
let cworkflowMessage2 = bas.cSpace + wr1.cwas + bas.cSpace + gen.cnot + bas.cSpace + wr1.cfound + bas.cSpace + bas.cin + bas.cSpace + wr1.ceither + bas.cSpace + wr1.cthe + bas.cSpace + wr1.csystem + bas.cSpace + wr1.cdefined + bas.cSpace + wr1.cworkflows + bas.cComa + bas.cSpace + bas.cor + bas.cSpace + wr1.cclient + bas.cSpace + wr1.cdefined + bas.cSpace + wr1.cworkflows + bas.cDot; // was not found in either the system defined workflows, or client defined workflows.
let cworkflowMessage3 = bas.cSpace + wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.cworkflow + bas.cSpace + wr1.cname + bas.cSpace + wr1.cand + bas.cSpace + wr1.ctry + bas.cSpace + wr1.cagain + bas.cDot; // Please enter a valid workflow name and try again.
// After attempting to replace the secondaryCommandArgsDelimiter with the primaryCommandDelimiter commandString is:
let ccommandGeneratorMessage1 = wr1.cAfter + bas.cSpace + wr1.cattempting + bas.cSpace + bas.cto + bas.cSpace + wr1.creplace + bas.cSpace + wr1.cthe + bas.cSpace + wr1.csecondary + wr1.cCommand + gen.cArgs + wr1.cDelimiter + bas.cSpace + wr1.cwith + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cprimary + wr1.cCommand + wr1.cDelimiter + bas.cSpace + wr1.ccommand + wr1.cString + sys.cSpaceIsColonSpace;
// After attempting to replace the tertiaryCommandDelimiter with the secondaryCommandArgsDelimiter commandString is:
let ccommandGeneratorMessage2 = wr1.cAfter + bas.cSpace + wr1.cattempting + bas.cSpace + bas.cto + bas.cSpace + wr1.creplace + bas.cSpace + wr1.cthe + bas.cSpace + wr1.ctertiary + wr1.cCommand + wr1.cDelimiter + bas.cSpace + wr1.cwith + bas.cSpace + wr1.cthe + bas.cSpace + wr1.csecondary + wr1.cCommand + gen.cArgs + wr1.cDelimiter + bas.cSpace + wr1.ccommand + wr1.cString + sys.cSpaceIsColonSpace;
// WARNING: nominal.commandGenerator: Must enter a number greater than 0, number entered:
let ccommandGeneratorMessage3 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cnominal + bas.cDot + wr1.ccommand + wr1.cGenerator + bas.cColon + bas.cSpace + wr1.cMust + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cnumber + bas.cSpace + wr1.cgreater + bas.cSpace + wr1.cthan + bas.cSpace + num.c0 + bas.cComa + bas.cSpace + wr1.cnumber + bas.cSpace + wr1.centered + bas.cColon + bas.cSpace;
// WARNING: nominal.commandGenerator: Number entered for the number of commands to generate is not a number:
let ccommandGeneratorMessage4 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cnominal + bas.cDot + wr1.ccommand + wr1.cGenerator + bas.cColon + bas.cSpace + wr1.cNumber + bas.cSpace + wr1.centered + bas.cSpace + wr1.cfor + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cnumber + bas.cSpace + bas.cof + bas.cSpace + wr1.ccommands + bas.cSpace + bas.cto + bas.cSpace + wr1.cgenerate + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + bas.ca + bas.cSpace + wr1.cnumber + bas.cColon + bas.cSpace;
// WARNING: nominal.commandGenerator: The specified command:
let ccommandGeneratorMessage5 = wr1.cWarning + bas.cColon + bas.cSpace + wr1.cnominal + bas.cDot + wr1.ccommand + wr1.cGenerator + bas.cColon + bas.cSpace + wr1.cThe + bas.cSpace + wr1.cspecified + bas.cSpace + wr1.ccommand + bas.cColon + bas.cSpace;
// was not found, please enter a valid command and try again.
let ccommandGeneratorMessage6 = bas.cSpace + wr1.cwas + bas.cSpace + gen.cnot + bas.cSpace + wr1.cfound + bas.cComa + bas.cSpace + wr1.cplease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cand + bas.cSpace + wr1.ctry + bas.cSpace + wr1.cagain + bas.cDot;
// Command can be called by passing parameters and bypass the prompt system.
let ccommandAliasGeneratorMessage1 = wr1.cCommand + bas.cSpace + wr1.ccan + bas.cSpace + bas.cbe + bas.cSpace + wr1.ccalled + bas.cSpace + bas.cby + bas.cSpace + wr1.cpassing + bas.cSpace + wr1.cparameters + bas.cSpace + wr1.cand + bas.cSpace + wr1.cbypass + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cprompt + bas.cSpace + wr1.csystem + bas.cDot;
// EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
let ccommandAliasGeneratorMessage2 = wr1.cEXAMPLE + bas.cColon + bas.cSpace + bas.cOpenCurlyBrace + bas.cDoubleQuote + wr1.cconstants + bas.cDoubleQuote + bas.cColon + bas.cDoubleQuote + bas.cc + bas.cComa + gen.cconst + bas.cDoubleQuote + bas.cComa + bas.cDoubleQuote + wr1.cGenerator + bas.cDoubleQuote + bas.cColon + bas.cDoubleQuote + bas.cg + bas.cComa + phn.cgen + bas.cComa + phn.cgen + bas.crt + bas.cr + bas.cDoubleQuote + bas.cComa + bas.cDoubleQuote + wr1.cList +
bas.cDoubleQuote + bas.cColon + bas.cDoubleQuote + bas.cl + bas.cComa + bas.cls + bas.ct + bas.cDoubleQuote + bas.cCloseCurlyBrace;
// INVALID INPUT: Please enter a valid camel-case command name.
let ccommandAliasGeneratorMessage3 = wr1.cINVALID + bas.cSpace + wr1.cINPUT + bas.cColon + bas.cSpace + wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.ccamel + bas.cDash + wr1.ccase + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cname + bas.cDot;
// INVALID INPUT: Please enter a valid command word alias list.
let ccommandAliasGeneratorMessage4 = wr1.cINVALID + bas.cSpace + wr1.cINPUT + bas.cColon + bas.cSpace + wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cword + bas.cSpace + wr1.calias + bas.cSpace + wr1.clist + bas.cDot;
// INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.
let ccommandAliasGeneratorMessage5 = wr1.cINVALID + bas.cSpace + wr1.cCOMMAND + bas.cSpace + wr1.cINPUT + bas.cColon + bas.cSpace + wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cdata + bas.cSpace + wr1.cwhen + bas.cSpace + wr1.ctrying + bas.cSpace + bas.cto + bas.cSpace + wr1.ccall + bas.cSpace + wr1.cwith + bas.cSpace + wr1.cparameters + bas.cDot;
// INVALID INPUT: Please enter a valid constant value that contains more than 4 characters.
let cconstantsGeneratorMessage1 = wr1.cINVALID + bas.cSpace + wr1.cINPUT + bas.cColon + bas.cSpace + wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.cconstant + bas.cSpace + wr1.cvalue + bas.cSpace + wr1.cthat + bas.cSpace + wr1.ccontains + bas.cSpace + wr1.cmore + bas.cSpace + wr1.cthan + bas.cSpace + num.c4 + bas.cSpace + wr1.ccharacters + bas.cDot;
// WARNING: The constant has already been defined in the following library(ies):
let cconstantsGeneratorMessage2 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cThe + bas.cSpace + wr1.cconstant + bas.cSpace + wr1.chas + bas.cSpace + wr1.calready + bas.cSpace + wr1.cbeen + bas.cSpace + wr1.cdefined + bas.cSpace + bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cfollowing + bas.cSpace + wr1.clibrary + bas.cOpenParenthesis + phn.cies + bas.cCloseParenthesis + bas.cColon + bas.cSpace;
// INVALID INPUT: Please enter a valid constant list.
let cconstantsGeneratorListMessage1 = wr1.cINVALID + bas.cSpace + wr1.cINPUT + bas.cColon + bas.cSpace + wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.cconstant + bas.cSpace + wr1.cList + bas.cDot;
// PASSED: All duplicate command aliases validation tests!
let cvalidateCommandAliasesMessage1 = wr1.cPASSED + bas.cColon + bas.cSpace + wr1.cAll + bas.cSpace + wr1.cduplicate + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cAliases + bas.cSpace + wr1.cvalidation + bas.cSpace + wr1.ctests + bas.cExclamation;
// About to call the rule broker to process on the number of single quotes
let cgetCommandArgsMessage1 = wr1.cAbout + bas.cSpace + bas.cto + bas.cSpace + wr1.ccall + bas.cSpace + wr1.cthe + bas.cSpace + wr1.crule + bas.cSpace + wr1.cbroker + bas.cSpace + bas.cto + bas.cSpace + wr1.cprocess + bas.cSpace + bas.con + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cnumber + bas.cSpace + bas.cof + bas.cSpace + wr1.csingle + bas.cSpace + wr1.cquotes + bas.cSpace; // About to call the rule broker to process on the number of single quotes
// and determine if it-be even or odd
let cgetCommandArgsMessage2 = wr1.cand + bas.cSpace + wr1.cdetermine + bas.cSpace + bas.cif + bas.cSpace + bas.cit + bas.cDash + bas.cbe + bas.cSpace + wr1.ceven + bas.cSpace + bas.cor + bas.cSpace + wr1.codd;
// WARNING: Command does not exist, please enter a valid command and try again!
let cexecuteCommandMessage1 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.cCommand + bas.cSpace + wr1.cdoes + bas.cSpace + gen.cnot + bas.cSpace + wr1.cexist + bas.cComa + bas.cSpace + wr1.cplease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cand + bas.cSpace + wr1.ctry + bas.cSpace + wr1.cagain + bas.cExclamation;
// WARNING: lexical.parseBusinessRuleArgument: Invalid combination of inputs to the lexical.parseBusinessRuleArgument function!
let cparseBusinessRuleArgumentMessage1 = wr1.cWARNING + bas.cColon + bas.cSpace + wr1.clexical + bas.cDot + wr1.cparse + wr1.cBusiness + wr1.cRule + wr1.cArgument + bas.cColon + bas.cSpace + wr1.cInvalid + bas.cSpace + wr1.ccombination + bas.cSpace + bas.cof + bas.cSpace + wr1.cinputs + bas.cSpace + bas.cto + bas.cSpace + wr1.cthe + bas.cSpace + wr1.clexical + bas.cDot + wr1.cparse + wr1.cBusiness + wr1.cRule + wr1.cArgument + bas.cSpace + wr1.cfunction + bas.cExclamation + bas.cSpace;
let cparseBusinessRuleArgumentMessage2 = wr1.cPlease + bas.cSpace + wr1.cadjust + bas.cSpace + wr1.cinputs + bas.cSpace + wr1.cand + bas.cSpace + wr1.ctry + bas.cSpace + wr1.cagain + bas.cDot; //Please adjust inputs and try again.
// Caught the case that the user may have only specified a single data hive, such as the configuration data hive.
let cprintDataHiveAttributesMessage1 = wr1.cCaught + bas.cSpace + wr1.cthe + bas.cSpace + wr1.ccase + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cuser + bas.cSpace + wr1.cmay + bas.cSpace + wr1.chave + bas.cSpace + wr1.conly + bas.cSpace + wr1.cspecified + bas.cSpace + bas.ca + bas.cSpace + wr1.csingle + bas.cSpace + wr1.cdata + bas.cSpace + wr1.chive + bas.cComa + bas.cSpace;
let cprintDataHiveAttributesMessage2 = wr1.csuch + bas.cSpace + bas.cas + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cconfiguration + bas.cSpace + wr1.cdata + bas.cSpace + wr1.chive + bas.cDot;
// ERROR: Please enter a valid name.space.attributeName for the system to print out attribute data from.
let cprintDataHiveAttributesMessage3 = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + bas.ca + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.cname + bas.cDot + wr1.cspace + bas.cDot + wr1.cattribute + wr1.cName + bas.cSpace + wr1.cfor + bas.cSpace + wr1.cthe + bas.cSpace + wr1.csystem + bas.cSpace + bas.cto + bas.cSpace + wr1.cprint + bas.cSpace + wr1.cout + bas.cSpace + wr1.cattribute + bas.cSpace + wr1.cdata + bas.cSpace + wr1.cfrom + bas.cDot;
// Nothing to echo.
let cNothingToEcho = wr1.cNothing + bas.cSpace + bas.cto + bas.cSpace + wr1.cecho + bas.cDot; // Nothing to echo.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  [bas.cc + con.cCharacterGenerationMessage1]: cCharacterGenerationMessage1, // typeToGenerate is:
  [bas.cc + con.cCharacterGenerationMessage2]: cCharacterGenerationMessage2, // Generate a number.
  [bas.cc + con.cCharacterGenerationMessage3]: cCharacterGenerationMessage3, // Generate a random upper case or lower case letter.
  [bas.cc + con.cCharacterGenerationMessage4]: cCharacterGenerationMessage4, // Generate a special character.
  [bas.cc + con.cCharacterGenerationMessage5]: cCharacterGenerationMessage5, // DEFAULT: Generate a random upper case or lower case letter.
  [bas.cc + con.cMathOperationsMessage1]: cMathOperationsMessage1, // bigInteger is:
  [bas.cc + con.cnumberOfCharactersToGenerateIs]: cnumberOfCharactersToGenerateIs, // numberOfCharactersToGenerate is:
  [bas.cc + con.cgenerateSpecialCharactersIs]: cgenerateSpecialCharactersIs, // generateSpecialCharacters is:
  [bas.cc + con.callowableSpecialCharactersIs]: callowableSpecialCharactersIs, // allowableSpecialCharacters is:
  [bas.cc + con.cspecifiedSuffixAndDomainIs]: cspecifiedSuffixAndDomainIs, // specifiedSuffixAndDomain is:
  [bas.cc + con.cfailureModeIs]: cfailureModeIs, // failureMode is:
  [bas.cc + con.cprefixIs]: cprefixIs, // prefix is:
  [bas.cc + con.csuffixIs]: csuffixIs, // suffix is:
  [bas.cc + con.cWithoutTheAtSymbol]: cWithoutTheAtSymbol, // Without the @ symbol.
  [bas.cc + con.cWithoutThePrefix]: cWithoutThePrefix, // Without the prefix.
  [bas.cc + con.cWithoutTheSuffix]: cWithoutTheSuffix, // Without the suffix.
  [bas.cc + con.cWithoutTheAtSymbolAndPrefix]: cWithoutTheAtSymbolAndPrefix, // Without the @ and prefix.
  [bas.cc + con.cDEFAULTWithoutTheAtSymbolAndPrefix]: cDEFAULTWithoutTheAtSymbolAndPrefix, // DEFAULT: Without the @ and prefix.
  [bas.cc + con.cdomainNameIs]: cdomainNameIs, // domainName is:
  [bas.cc + con.cnumberOfPrefixCharactersIs]: cnumberOfPrefixCharactersIs, // numberOfPrefixCharacters is:
  [bas.cc + con.cnumberOfSuffixCharactersIs]: cnumberOfSuffixCharactersIs, // numberOfSuffixCharacters is:
  [bas.cc + con.cWithoutTheDotSymbol]: cWithoutTheDotSymbol, // Without the . symbol.
  [bas.cc + con.cWithoutTheAtAndDotSymbols]: cWithoutTheAtAndDotSymbols, // Without the @ and . symbols.
  [bas.cc + con.cWithoutTheDomainName]: cWithoutTheDomainName, // Without the domain name.
  [bas.cc + con.cWithoutTheAtSymbolAndDomainName]: cWithoutTheAtSymbolAndDomainName, // Without the @ and domain name.
  [bas.cc + con.cWithoutTheDotAndDomainName]: cWithoutTheDotAndDomainName, // Without the . and domain name.
  [bas.cc + con.cWithoutTheAtSymbolDotAndDomainName]: cWithoutTheAtSymbolDotAndDomainName, // Without the @, . and domain name.
  [bas.cc + con.cWithoutTheDotAndPrefix]: cWithoutTheDotAndPrefix, // Without the . and prefix.
  [bas.cc + con.cWithoutTheAtSymbolAndSuffix]: cWithoutTheAtSymbolAndSuffix, // Without the @ and suffix.
  [bas.cc + con.cWithoutTheDotAndSuffix]: cWithoutTheDotAndSuffix, // Without the . and suffix.
  [bas.cc + con.cWithoutTheAtSymbolDotAndPrefix]: cWithoutTheAtSymbolDotAndPrefix, // Without the @, . and prefix.
  [bas.cc + con.cWithoutTheAtSymbolDotAndSuffix]: cWithoutTheAtSymbolDotAndSuffix, // Without the @, . and suffix.
  [bas.cc + con.cWithoutTheAtSymbolDotPrefixAndSuffix]: cWithoutTheAtSymbolDotPrefixAndSuffix, // Without the @, ., prefix and suffix.
  [bas.cc + con.cWithoutThePrefixAndDomainName]: cWithoutThePrefixAndDomainName, // Without the prefix and domain name.
  [bas.cc + con.cWithoutTheSuffixAndDomainName]: cWithoutTheSuffixAndDomainName, // Without the suffix and domain name.
  [bas.cc + con.cWithoutThePrefixAndSuffix]: cWithoutThePrefixAndSuffix, // Without the prefix and suffix.
  [bas.cc + con.cWithoutThePrefixSuffixAndDomainName]: cWithoutThePrefixSuffixAndDomainName, // Without the prefix, suffix and domain name.
  [bas.cc + con.cWithoutTheAtSymbolPrefixAndDomainName]: cWithoutTheAtSymbolPrefixAndDomainName, // Without the @, prefix and domain name.
  [bas.cc + con.cWithoutTheDotPrefixAndDomainName]: cWithoutTheDotPrefixAndDomainName, // Without the ., prefix and domain name.
  [bas.cc + con.cWithoutTheAtSymbolSuffixAndDomainName]: cWithoutTheAtSymbolSuffixAndDomainName, // Without the @, suffix and domain name.
  [bas.cc + con.cWithoutTheDotSuffixAndDomainName]: cWithoutTheDotSuffixAndDomainName, // Without the ., suffix and domain name.
  [bas.cc + con.cWithoutTheAtSymbolPrefixSuffixAndDomainName]: cWithoutTheAtSymbolPrefixSuffixAndDomainName, // Without the @, prefix, suffix and domain name.
  [bas.cc + con.cWithoutTheDotPrefixSuffixAndDomainName]: cWithoutTheDotPrefixSuffixAndDomainName, // Without the ., prefix, suffix and domain name.
  [bas.cc + con.cWithoutThePrefixSuffixAndAtSymbol]: cWithoutThePrefixSuffixAndAtSymbol, // Without the prefix, suffix and @.
  [bas.cc + con.cWithoutThePrefixSuffixAndDot]: cWithoutThePrefixSuffixAndDot, // Without the prefix, suffix and ..
  [bas.cc + con.cIndexOfTheSpace]: cIndexOfTheSpace, // Index of the
  [bas.cc + con.cisResolvingAs]: cisResolvingAs, // is resolving as:
  [bas.cc + con.cparsedStringSpaceTerm]: cparsedStringSpaceTerm, // parsedString term
  [bas.cc + con.cstring1Is]: cstring1Is, // string1 is:
  [bas.cc + con.cstring2Is]: cstring2Is, // string2 is:
  [bas.cc + con.cvariation0ValueIs]: cvariation0ValueIs, // variation0 value is:
  [bas.cc + con.cvariation1ValueIs]: cvariation1ValueIs, // variation1 value is:
  [bas.cc + con.ciValueIs]: ciValueIs, // i value is:
  [bas.cc + con.cjValueIs]: cjValueIs, // j value is:
  [bas.cc + con.cdeletionCostIs]: cdeletionCostIs, // deletionCost is:
  [bas.cc + con.cinsertionCostIs]: cinsertionCostIs, // insertionCost is:
  [bas.cc + con.csubstitutionCostIs]: csubstitutionCostIs, // substitutionCost is:
  [bas.cc + con.ccamelCaseWordCountIs]: ccamelCaseWordCountIs, // camelCaseWordCount is:
  [bas.cc + con.ccontainsAcronymIs]: ccontainsAcronymIs, // containsAcronym is:
  [bas.cc + con.cspacesCountIs]: cspacesCountIs, // spacesCount is:
  [bas.cc + con.cperiodCountIs]: cperiodCountIs, // periodCount is:
  [bas.cc + con.cdashCountIs]: cdashCountIs, // dashCount is:
  [bas.cc + con.cunderscoreCountIs]: cunderscoreCountIs, // underscoreCount is:
  [bas.cc + con.cplusCountIs]: cplusCountIs, // plusCount is:
  [bas.cc + con.cpercentCountIs]: cpercentCountIs, // percentCount is:
  [bas.cc + con.cstringDeltaValueIs]: cstringDeltaValueIs, // stringDelta value is:
  [bas.cc + con.cFilenamesMatch]: cFilenamesMatch, // Filenames match
  [bas.cc + con.cFilenamesDoNotMatch]: cFilenamesDoNotMatch, // Filenames do not match
  [bas.cc + con.cArrayElementsMatch]: cArrayElementsMatch, // Array elements match
  [bas.cc + con.cArrayElementsDoNotMatch]: cArrayElementsDoNotMatch, // Array elements do not match
  [bas.cc + con.clineArray2Is]: clineArray2Is, // lineArray[2] is:
  [bas.cc + con.cSuggestedLineOfCodeIs]: cSuggestedLineOfCodeIs, // Suggested line of code is:
  [bas.cc + con.cErrorUnknownConstantFile]: cErrorUnknownConstantFile, // ERROR: Unknown constant file.
  [bas.cc + con.cconstantsTypesKeysIs]: cconstantsTypesKeysIs, // constantsTypesKeys is:
  [bas.cc + con.cconstantTypeKeyIs]: cconstantTypeKeyIs, // constantTypeKey is:
  [bas.cc + con.cconstantTypeValuesIs]: cconstantTypeValuesIs, // constantTypeValues is:
  [bas.cc + con.cconstantsKeysIs]: cconstantsKeysIs, // constantsKeys is:
  [bas.cc + con.cconstantKeyIs]: cconstantKeyIs, // constantKey is:
  [bas.cc + con.cconstantActualValueIs]: cconstantActualValueIs, // constantActualValue is:
  [bas.cc + con.cconstantNameIs]: cconstantNameIs, // constantName is:
  [bas.cc + con.cconstantValueIs]: cconstantValueIs, // constantValue is:
  [bas.cc + con.cdeltaLengthIs]: cdeltaLengthIs, // deltaLength is:
  [bas.cc + con.crecursiveSubStringIs]: crecursiveSubStringIs, // recursiveSubString is:
  [bas.cc + con.cmaxStringLengthIs]: cmaxStringLengthIs, // maxStringLength is:
  [bas.cc + con.cminStringLengthIs]: cminStringLengthIs, // minStringLength is:
  [bas.cc + con.ccurrentMasterStringArrayElementIs]: ccurrentMasterStringArrayElementIs, // currentMasterStringArrayElement is:
  [bas.cc + con.cConstantDoesNotExist]: cConstantDoesNotExist, // Constant does NOT exist:
  [bas.cc + con.cConstantDoesExist]: cConstantDoesExist, // Constant does exist:
  [bas.cc + con.cBEGIN_ithLoop]: cBEGIN_ithLoop, // BEGIN i-th loop:
  [bas.cc + con.cBEGIN_ithIteration]: cBEGIN_ithIteration, // BEGIN i-th iteration:
  [bas.cc + con.cBEGIN_jthLoop]: cBEGIN_jthLoop, // BEGIN j-th loop:
  [bas.cc + con.cBEGIN_kthIteration]: cBEGIN_kthIteration, // BEGIN k-th iteration:
  [bas.cc + con.cEND_ithLoop]: cEND_ithLoop, // END i-th loop:
  [bas.cc + con.cEND_ithIteration]: cEND_ithIteration, // END i-th iteration:
  [bas.cc + con.cEND_jthLoop]: cEND_jthLoop, // END j-th loop:
  [bas.cc + con.cEND_kthIteration]: cEND_kthIteration, // END k-th iteration:
  [bas.cc + con.ccurrentCommandIs]: ccurrentCommandIs, // currentCommand is:
  [bas.cc + con.caliasListIs]: caliasListIs, // aliasList is:
  [bas.cc + con.ccurrentAliasIs]: ccurrentAliasIs, // currentAlias is:
  [bas.cc + con.cduplicateAliasCountIs]: cduplicateAliasCountIs, // duplicateAliasCount is:
  [bas.cc + con.cduplicateCommandAliasIs]: cduplicateCommandAliasIs, // duplicate command alias is:
  [bas.cc + con.ccommandWordAliasesBeforeChangeIs]: ccommandWordAliasesBeforeChangeIs, // commandWordAliases BEFORE CHANGE is:
  [bas.cc + con.ccommandWordAliasesAfterChangeIs]: ccommandWordAliasesAfterChangeIs, // commandWordAliasesArray AFTER CHANGE is:
  [bas.cc + con.cmasterCommandWordAlisesArrayIs]: cmasterCommandWordAlisesArrayIs, // masterCommandWordAliasesArray is:
  [bas.cc + con.cmasterArrayIndexIs]: cmasterArrayIndexIs, // masterArrayIndex is:
  [bas.cc + con.cCommandAliasesAre]: cCommandAliasesAre, // Command Aliases are:
  [bas.cc + con.cexpandedLehmerCodeArrayIs]: cexpandedLehmerCodeArrayIs, // expandedLehmerCodeArray is:
  [bas.cc + con.cindexOfExpansionIs]: cindexOfExpansionIs, // indexOfExpansion is:
  [bas.cc + con.carrayToBeExpandedIs]: carrayToBeExpandedIs, // arrayToBeExpanded is:
  [bas.cc + con.climitOfExpansionIs]: climitOfExpansionIs, // limitOfExpansion is:
  [bas.cc + con.cpushingLehmerCodeArray1ToReturnDataValue]: cpushingLehmerCodeArray1ToReturnDataValue, // pushing lehmerCodeArray1 to returnData value:
  [bas.cc + con.creturnDataAfterPushIs]: creturnDataAfterPushIs, // returnData after push is:
  [bas.cc + con.creturnDataAfterLevel1Is]: creturnDataAfterLevel1Is, // returnData after Level 1 is:
  [bas.cc + con.carrayToBeExpandedDotLengthIs]: carrayToBeExpandedDotLengthIs, // arrayToBeExpanded.length is:
  [bas.cc + con.creturnDataDotLengthIs]: creturnDataDotLengthIs, // returnData.length is:
  [bas.cc + con.creturnDataBeforePopIs]: creturnDataBeforePopIs, // returnData BEFORE POP is:
  [bas.cc + con.creturnDataAfterPopIs]: creturnDataAfterPopIs, // returnData AFTER POP is:
  [bas.cc + con.cmasterTempReturnDataBeforeRecursiveCallIs]: cmasterTempReturnDataBeforeRecursiveCallIs, // masterTempReturnData BEFORE recursive call is:
  [bas.cc + con.ctempReturnData1Is]: ctempReturnData1Is, // tempReturnData1 is:
  [bas.cc + con.ctempReturnData1DotLengthIs]: ctempReturnData1DotLengthIs, // tempReturnData1.length is:
  [bas.cc + con.cpushingTempReturnData1Kvalue]: cpushingTempReturnData1Kvalue, // pushing tempReturnData1[k] value:
  [bas.cc + con.cmasterTempReturnDataAfterRecursiveCallIs]: cmasterTempReturnDataAfterRecursiveCallIs, // masterTempReturnData AFTER recursive call is:
  [bas.cc + con.clookupIndexIs]: clookupIndexIs, // lookupIndex is:
  [bas.cc + con.clookupValueIs]: clookupValueIs, // lookupValue is:
  [bas.cc + con.cDataCatagoryShouldBe]: cDataCatagoryShouldBe, // Data Catagory should be:
  [bas.cc + con.cDataCatagoryDetailNameShouldBe]: cDataCatagoryDetailNameShouldBe, // Data Catagory Detail Name should be:
  [bas.cc + con.cKeywordNameShouldBe]: cKeywordNameShouldBe, // Keyword Name should be:
  [bas.cc + con.cpathElementIs]: cpathElementIs, // pathElement is:
  [bas.cc + con.ccaseIEqual0]: ccaseIEqual0, // case: i = 0
  [bas.cc + con.ccasePathElementEqual]: ccasePathElementEqual, // case: pathElement =
  [bas.cc + con.ccaseElse]: ccaseElse, // case else
  [bas.cc + con.creturnDataSoFarIs]: creturnDataSoFarIs, // returnData so far is:
  [bas.cc + con.cpathArrayIs]: cpathArrayIs, // pathArray is:
  [bas.cc + con.ccurrentPathElementIs]: ccurrentPathElementIs, // current path element is:
  [bas.cc + con.cAttemptingToLoadXmlData]: cAttemptingToLoadXmlData, // Attempting to load XML data!
  [bas.cc + con.cAttemptingToLoadCsvData]: cAttemptingToLoadCsvData, // Attempting to load CSV data!
  [bas.cc + con.cAttemptingToLoadJsonData]: cAttemptingToLoadJsonData, // Attempting to load JSON data!
  [bas.cc + con.cLoadedDataIs]: cLoadedDataIs, // Loaded data is:
  [bas.cc + con.cattributeArrayIs]: cattributeArrayIs, // attributeArray is:
  [bas.cc + con.cattributeArray0Is]: cattributeArray0Is, // attributeArray[0] is:
  [bas.cc + con.carrayIs]: carrayIs, // array is:
  [bas.cc + con.cvalueIs]: cvalueIs, // value is:
  [bas.cc + con.cmyFunctionIs]: cmyFunctionIs, // myFunction is:
  [bas.cc + con.carrayInputObjectIsNotAnArray]: carrayInputObjectIsNotAnArray, // array input object is not an array.
  [bas.cc + con.cTheValueWasFoundInTheArray]: cTheValueWasFoundInTheArray, // The value was found in the array.
  [bas.cc + con.cTheValueWasNotFoundInTheArray]: cTheValueWasNotFoundInTheArray, // The value was NOT found in the array.
  [bas.cc + con.coriginalStringIs]: coriginalStringIs, // originalString is:
  [bas.cc + con.cindexIs]: cindexIs, // index is:
  [bas.cc + con.creplacementIs]: creplacementIs, // replacement is:
  [bas.cc + con.cDEPLOY_APPLICATION]: cDEPLOY_APPLICATION, // DEPLOY APPLICATION
  [bas.cc + con.cRELEASE_APPLICATION]: cRELEASE_APPLICATION, // RELEASE APPLICATION
  [bas.cc + con.cDeploymentWasCompleted]: cDeploymentWasCompleted, // Deployment was completed:
  [bas.cc + con.cDeploymentFailed]: cDeploymentFailed, // Deployment failed
  [bas.cc + con.cReleaseFailed]: cReleaseFailed, // Release failed
  // [bas.cc + con.cinputDataIis]: cinputDataIis, // inputData[i] is:
  [bas.cc + con.caggregateCommandStringIs]: caggregateCommandStringIs, // aggregateCommandString is:
  [bas.cc + con.cmetaDataParametersIs]: cmetaDataParametersIs, // metaDataParameters is:
  [bas.cc + con.cmetaDataParametersLengthIs]: cmetaDataParametersLengthIs, // metaDataParameters length is:
  [bas.cc + con.cmetaDataPathAndFilenameIs]: cmetaDataPathAndFilenameIs, // metaDataPathAndFilename is:
  [bas.cc + con.cpathAndFilenameIs]: cpathAndFilenameIs, // pathAndFilename is:
  [bas.cc + con.ccontentsAre]: ccontentsAre, // contents are:
  [bas.cc + con.ccontentsOfDare]: ccontentsOfDare, // contents of D are:
  [bas.cc + con.cBEGIN_ithIterationOfInputDataArray]: cBEGIN_ithIterationOfInputDataArray, // Begin the i-th iteration of the inputData array. i is:
  [bas.cc + con.ccurrentRuleIs]: ccurrentRuleIs, // currentRule is:
  [bas.cc + con.crulesIs]: crulesIs, // rules is:
  [bas.cc + con.cruleInputDataIs]: cruleInputDataIs, // ruleInputData is:
  [bas.cc + con.cruleInputMetaData]: cruleInputMetaData, // ruleInputMetaData is:
  [bas.cc + con.cBusinessRuleStartTimeIs]: cBusinessRuleStartTimeIs, // Business Rule Start time is:
  [bas.cc + con.cBusinessRuleEndTimeIs]: cBusinessRuleEndTimeIs, // Business Rule End time is:
  [bas.cc + con.cBusinessRuleRunTimeIs]: cBusinessRuleRunTimeIs, // BusinessRule run-time is:
  [bas.cc + con.ccommandStringBeforeAttemptedDelimiterSwapIs]: ccommandStringBeforeAttemptedDelimiterSwapIs, // commandString before attempted delimiter swap is:
  [bas.cc + con.creplaceCharacterWithCharacterRuleIs]: creplaceCharacterWithCharacterRuleIs, // replaceCharacterWithCharacterRule is:
  [bas.cc + con.cRuleOutputIs]: cRuleOutputIs, // Rule output is:
  [bas.cc + con.ccamelCaseCommandNameArrayIs]: ccamelCaseCommandNameArrayIs, // camelCaseCommandNameArray is:
  [bas.cc + con.ccurrentCommandWordIs]: ccurrentCommandWordIs, // current commandWord is:
  [bas.cc + con.cPARSER_ERROR]: cPARSER_ERROR, // PARSER ERROR:
  [bas.cc + con.ccommandAliasDataStructureIs]: ccommandAliasDataStructureIs, // commandAliasDataStructure is:
  [bas.cc + con.cuserDefinedConstantIs]: cuserDefinedConstantIs, // userDefinedConstant is:
  [bas.cc + con.cwordCountIs]: cwordCountIs, // wordCount is:
  [bas.cc + con.cwordsArrayIs]: cwordsArrayIs, // wordsArray is:
  [bas.cc + con.cOptimizedConstantDefinitionForWord]: cOptimizedConstantDefinitionForWord, // Optimized constant definition for word:
  [bas.cc + con.cuserDefinedConstantListIs]: cuserDefinedConstantListIs, // userDefinedConstantList is:
  [bas.cc + con.cuserDefinedConstantListContainsComas]: cuserDefinedConstantListContainsComas, // userDefinedConstantList contains comas
  [bas.cc + con.cuserDefinedConstantsListArrayIs]: cuserDefinedConstantsListArrayIs, // userDefinedConstantsListArray is:
  [bas.cc + con.cuserDefinedConstantsListDoesNotContainComas]: cuserDefinedConstantsListDoesNotContainComas, // userDefinedConstantList DOES NOT contain comas
  [bas.cc + con.ccommonPatternsArrayIs]: ccommonPatternsArrayIs, // commonPatternsArray is:
  [bas.cc + con.cbusinessRuleCounterIs]: cbusinessRuleCounterIs, // businessRuleCounter is:
  [bas.cc + con.cbusinessRulePerformanceSumIs]: cbusinessRulePerformanceSumIs, // businessRulePerformanceSum is:
  [bas.cc + con.cDoneBusinessRulePerformanceSumIs]: cDoneBusinessRulePerformanceSumIs, // DONE! businessRulePerformanceSum is:
  [bas.cc + con.caverageIs]: caverageIs, // average is:
  [bas.cc + con.cbusinessRulePerformanceStdSumIs]: cbusinessRulePerformanceStdSumIs, // businessRulePerformanceStdSum is:
  [bas.cc + con.cDoneBusinessRulePerformanceStdSumIs]: cDoneBusinessRulePerformanceStdSumIs, // DONE! businessRulePerformanceStdSum is:
  [bas.cc + con.cstandardDevIs]: cstandardDevIs, // standardDev is:
  [bas.cc + con.ccommandCounterIs]: ccommandCounterIs, // commandCounter is:
  [bas.cc + con.ccommandPerformanceSumIs]: ccommandPerformanceSumIs, // commandPerformanceSum is:
  [bas.cc + con.cDoneCommandPerformanceSumIs]: cDoneCommandPerformanceSumIs, // DONE! commandPerformanceSum is:
  [bas.cc + con.ccommandPerformanceStdSumIs]: ccommandPerformanceStdSumIs, // commandPerformanceStdSum is:
  [bas.cc + con.cDoneCommandPerformanceStdSumIs]: cDoneCommandPerformanceStdSumIs, // DONE! commandPerformanceStdSum is:
  [bas.cc + con.ccolorKeysIs]: ccolorKeysIs, // colorKeys is:
  [bas.cc + con.ccurrentColorNameIs]: ccurrentColorNameIs, // currentColorName is:
  [bas.cc + con.ccurrentColorObjectIs]: ccurrentColorObjectIs, // currentColorObject is:
  [bas.cc + con.ccurrentColorHexValueIs]: ccurrentColorHexValueIs, // currentColorHexValue is:
  [bas.cc + con.cruleOutputIs]: cruleOutputIs, // ruleOutput is:
  [bas.cc + con.cBeginPhase1ConstantsValidation]: cBeginPhase1ConstantsValidation, // BEGIN Phase 1 Constants Validation
  [bas.cc + con.cEndPhase1ConstantsValidation]: cEndPhase1ConstantsValidation, // END Phase 1 Constants Validation
  [bas.cc + con.cBeginPhase2ConstantsValidation]: cBeginPhase2ConstantsValidation, // BEGIN Phase 2 Constants Validation
  [bas.cc + con.cEndPhase2ConstantsValidation]: cEndPhase2ConstantsValidation, // END Phase 2 Constants Validation
  [bas.cc + con.cconstantsPathIs]: cconstantsPathIs, // constantsPath is:
  [bas.cc + con.cresolvedConstantsPath_BasicIs]: cresolvedConstantsPath_BasicIs, // resolvedConstantsPath_Basic is:
  [bas.cc + con.cresolvedConstantsPath_BusinessIs]: cresolvedConstantsPath_BusinessIs, // resolvedConstantsPath_Business is:
  [bas.cc + con.cresolvedConstantsPath_ColorIs]: cresolvedConstantsPath_ColorIs, // resolvedConstantsPath_Color is:
  [bas.cc + con.cresolvedConstantsPath_CommandIs]: cresolvedConstantsPath_CommandIs, // resolvedConstantsPath_Command is:
  [bas.cc + con.cresolvedConstantsPath_ConfigurationIs]: cresolvedConstantsPath_ConfigurationIs, // resolvedConstantsPath_Configuration is:
  [bas.cc + con.cresolvedConstantsPath_CountryIs]: cresolvedConstantsPath_CountryIs, // resolvedConstantsPath_Country Is:
  [bas.cc + con.cresolvedConstantsPath_ElementIs]: cresolvedConstantsPath_ElementIs, // resolvedConstantsPath_Element is:
  [bas.cc + con.cresolvedConstantsPath_GenericIs]: cresolvedConstantsPath_GenericIs, // resolvedConstantsPath_Generic is:
  [bas.cc + con.cresolvedConstantsPath_IsotopeIs]: cresolvedConstantsPath_IsotopeIs, // resolvedConstantsPath_Isotope is:
  [bas.cc + con.cresolvedConstantsPath_KnotIs]: cresolvedConstantsPath_KnotIs, // resolvedConstantsPath_Knot is:
  [bas.cc + con.cresolvedConstantsPath_LanguageIs]: cresolvedConstantsPath_LanguageIs, // resolvedConstantsPath_Language is:
  [bas.cc + con.cresolvedConstantsPath_MessageIs]: cresolvedConstantsPath_MessageIs, // resolvedConstantsPath_Messages is:
  [bas.cc + con.cresolvedConstantsPath_NumericIs]: cresolvedConstantsPath_NumericIs, // resolvedConstantsPath_Numeric is:
  [bas.cc + con.cresolvedConstantsPath_PhonicIs]: cresolvedConstantsPath_PhonicIs, // resolvedConstantsPath_Phonic is:
  [bas.cc + con.cresolvedConstantsPath_ShapeIs]: cresolvedConstantsPath_ShapeIs, // resolvedConstantsPath_Shape is:
  [bas.cc + con.cresolvedConstantsPath_SystemIs]: cresolvedConstantsPath_SystemIs, // resolvedConstantsPath_System is:
  [bas.cc + con.cresolvedConstantsPath_UnitIs]: cresolvedConstantsPath_UnitIs, // resolvedConstantsPath_Unit is:
  [bas.cc + con.cresolvedConstantsPath_WordIs]: cresolvedConstantsPath_WordIs, // resolvedConstantsPath_Word is:
  [bas.cc + con.cBasicConstantsPhase1Validation]: cBasicConstantsPhase1Validation, // Basic Constants Phase 1 Validation
  [bas.cc + con.cBusinessConstantsPhase1Validation]: cBusinessConstantsPhase1Validation, // Business Constants Phase 1 Validation
  [bas.cc + con.cColorConstantsPhase1Validation]: cColorConstantsPhase1Validation, // Color Constants Phase 1 Validation
  [bas.cc + con.cCommandConstantsPhase1Validation]: cCommandConstantsPhase1Validation, // Command Constants Phase 1 Validation
  [bas.cc + con.cConfigurationConstantsPhase1Validation]: cConfigurationConstantsPhase1Validation, // Configuration Constants Phase 1 Validation
  [bas.cc + con.cCountryConstantsPhase1Validation]: cCountryConstantsPhase1Validation, // Country Constants Phase 1 Validation
  [bas.cc + con.cElementConstantsPhase1Validation]: cElementConstantsPhase1Validation, // Element Constants Phase 1 Validation
  [bas.cc + con.cGenericConstantsPhase1Validation]: cGenericConstantsPhase1Validation, // Generic Constants Phase 1 Validation
  [bas.cc + con.cIsotopeConstantsPhase1Validation]: cIsotopeConstantsPhase1Validation, // Isotope Constants Phase 1 Validation
  [bas.cc + con.cKnotConstantsPhase1Validation]: cKnotConstantsPhase1Validation, // Knot Constants Phase 1 Validation
  [bas.cc + con.cLanguageConstantsPhase1Validation]: cLanguageConstantsPhase1Validation, // Language Constants Phase 1 Validation
  [bas.cc + con.cMessageConstantsPhase1Validation]: cMessageConstantsPhase1Validation, // Message Constants Phase 1 Validation
  [bas.cc + con.cNumericalConstantsPhase1Validation]: cNumericalConstantsPhase1Validation, // Numerical Constants Phase 1 Validation
  [bas.cc + con.cPhonicConstantsPhase1Validation]: cPhonicConstantsPhase1Validation, // Phonic Constants Phase 1 Validation
  [bas.cc + con.cShapeConstantsPhase1Validation]: cShapeConstantsPhase1Validation, // Shape Constants Phase 1 Validation
  [bas.cc + con.cSystemConstantsPhase1Validation]: cSystemConstantsPhase1Validation, // System Constants Phase 1 Validation
  [bas.cc + con.cUnitConstantsPhase1Validation]: cUnitConstantsPhase1Validation, // Unit Constants Phase 1 Validation
  [bas.cc + con.cWordConstantsPhase1Validation]: cWordConstantsPhase1Validation, // Word Constants Phase 1 Validation
  [bas.cc + con.cBasicConstantsPhase2Validation]: cBasicConstantsPhase2Validation, // Basic Constants Phase 2 Validation
  [bas.cc + con.cBusinessConstantsPhase2Validation]: cBusinessConstantsPhase2Validation, // Business Constants Phase 2 Validation
  [bas.cc + con.cColorConstantsPhase2Validation]: cColorConstantsPhase2Validation, // Color Constants Phase 2 Validation
  [bas.cc + con.cCommandConstantsPhase2Validation]: cCommandConstantsPhase2Validation, // Command Constants Phase 2 Validation
  [bas.cc + con.cConfigurationConstantsPhase2Validation]: cConfigurationConstantsPhase2Validation, // Configuration Constants Phase 2 Validation
  [bas.cc + con.cCountryConstantsPhase2Validation]: cCountryConstantsPhase2Validation, // Country Constants Phase 2 Validation
  [bas.cc + con.cElementConstantsPhase2Validation]: cElementConstantsPhase2Validation, // Element Constants Phase 2 Validation
  [bas.cc + con.cGenericConstantsPhase2Validation]: cGenericConstantsPhase2Validation, // Generic Constants Phase 2 Validation
  [bas.cc + con.cIsotopeConstantsPhase2Validation]: cIsotopeConstantsPhase2Validation, // Isotope Constants Phase 2 Validation
  [bas.cc + con.cKnotConstantsPhase2Validation]: cKnotConstantsPhase2Validation, // Knot Constants Phase 2 Validation
  [bas.cc + con.cLanguageConstantsPhase2Validation]: cLanguageConstantsPhase2Validation, // Language Constants Phase 2 Validation
  [bas.cc + con.cMessageConstantsPhase2Validation]: cMessageConstantsPhase2Validation, // Message Constants Phase 2 Validation
  [bas.cc + con.cNumericalConstantsPhase2Validation]: cNumericalConstantsPhase2Validation, // Numerical Constants Phase 2 Validation
  [bas.cc + con.cPhonicConstantsPhase2Validation]: cPhonicConstantsPhase2Validation, // Phonic Constants Phase 2 Validation
  [bas.cc + con.cShapeConstantsPhase2Validation]: cShapeConstantsPhase2Validation, // Shape Constants Phase 2 Validation
  [bas.cc + con.cSystemConstantsPhase2Validation]: cSystemConstantsPhase2Validation, // System Constants Phase 2 Validation
  [bas.cc + con.cUnitConstantsPhase2Validation]: cUnitConstantsPhase2Validation, // Unit Constants Phase 2 Validation
  [bas.cc + con.cWordConstantsPhase2Validation]: cWordConstantsPhase2Validation, // Word Constants Phase 2 Validation
  [bas.cc + con.ccommandStringIs]: ccommandStringIs, // commandString is:
  [bas.cc + con.ccommandDelimiterIs]: ccommandDelimiterIs, // commandDelimiter is:
  [bas.cc + con.ccommandToExecuteBeforeTheAliasIs]: ccommandToExecuteBeforeTheAliasIs, // commandToExecute before the Alias is:
  [bas.cc + con.ccommandToExecuteAfterTheAliasIs]: ccommandToExecuteAfterTheAliasIs, // commandToExecute after the Alias is:
  [bas.cc + con.cWarningTheSpecifiedCommand]: cWarningTheSpecifiedCommand, // WARNING: The specified command:
  [bas.cc + con.cdoesNotExistPleaseTryAgain]: cdoesNotExistPleaseTryAgain, // does not exist, please try again!
  [bas.cc + con.ccommandStringContainsEitherSingleQuoteOrBackTickQuote]: ccommandStringContainsEitherSingleQuoteOrBackTickQuote, // commandString contains either a singleQuote or a backTickQuote
  [bas.cc + con.ccommandStringContainsSingleQuote]: ccommandStringContainsSingleQuote, // commandString contains a singleQuote!
  [bas.cc + con.cnumberOfSingleQuotesIsEven]: cnumberOfSingleQuotesIsEven, // numberOfSingleQuotes is >= 2 & the numberOfSingleQuotes is EVEN! YAY!
  [bas.cc + con.cFirstIndexIs]: cFirstIndexIs, // First index is:
  [bas.cc + con.ccommandStringAfterTaggingTheFirstStringDelimiter]: ccommandStringAfterTaggingTheFirstStringDelimiter, // commandString after tagging the first string delimiter:
  [bas.cc + con.cAdditionalIndexIs]: cAdditionalIndexIs, // Additional index is:
  [bas.cc + con.coddIndex]: coddIndex, // odd index
  [bas.cc + con.cevenIndex]: cevenIndex, // even index
  [bas.cc + con.ccommandStringAfterTaggingAnOddStringDelimiter]: ccommandStringAfterTaggingAnOddStringDelimiter, // commandString after tagging an odd string delimiter:
  [bas.cc + con.ccommandStringAfterTaggingAnEvenStringDelimiter]: ccommandStringAfterTaggingAnEvenStringDelimiter, // commandString after tagging an even string delimiter:
  [bas.cc + con.cpreSplitCommandStringIs]: cpreSplitCommandStringIs, // preSplitCommandString is:
  [bas.cc + con.cpostSplitCommandStringIs]: cpostSplitCommandStringIs, // postSplitCommandString[k] is:
  [bas.cc + con.cpreSplitCommandStringElementIs]: cpreSplitCommandStringElementIs, // preSplitCommandStringElement is:
  [bas.cc + con.cDoingStraightSplitCommandString]: cDoingStraightSplitCommandString, // Doing a straight split of the commandString:
  [bas.cc + con.cCommandStartTimeIs]: cCommandStartTimeIs, // Command Start time is:
  [bas.cc + con.cCommandEndTimeIs]: cCommandEndTimeIs, // Command End time is:
  [bas.cc + con.cCommandRunTimeIs]: cCommandRunTimeIs, // Command run-time is:
  [bas.cc + con.ccommandAliasesFilePathConfigurationNameIs]: ccommandAliasesFilePathConfigurationNameIs, // commandAliasesFilePathConfigurationName is:
  [bas.cc + con.ccommandIs]: ccommandIs, // command is:
  [bas.cc + con.ccommandToExecuteIs]: ccommandToExecuteIs, // commandToExecute is:
  [bas.cc + con.ccontextNameIs]: ccontextNameIs, // contextName is:
  [bas.cc + con.callSystemConfigurationsIs]: callSystemConfigurationsIs, // allSystemConfigurations is:
  [bas.cc + con.cdataPathConfigurationNameIs]: cdataPathConfigurationNameIs, // dataPathConfigurationName is:
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
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  [bas.cc + con.cloadedAndMergedDataAllFilesIs]: cloadedAndMergedDataAllFilesIs, // loadedAndMergedDataAllFiles is:
  [bas.cc + con.cloadedAndMergedDataAllFilesContentsAre]: cloadedAndMergedDataAllFilesContentsAre, // loadedAndMergedDataAllFiles contents are:
  [bas.cc + con.ccommandWorkflowFilePathConfigurationNameIs]: ccommandWorkflowFilePathConfigurationNameIs, // commandWorkflowFilePathConfigurationName is:
  [bas.cc + con.ccontentsOfDataStructreIs]: ccontentsOfDataStructreIs, // contents of D-data structure is:
  [bas.cc + con.cclientBusinessRulesAre]: cclientBusinessRulesAre, // clientBusinessRules are:
  [bas.cc + con.cclientCommandsAre]: cclientCommandsAre, // clientCommands are:
  [bas.cc + con.csystemCommandsAliasesPathIs]: csystemCommandsAliasesPathIs, // systemCommandsAliasesPath is:
  [bas.cc + con.cclientCommandsAliasesPathIs]: cclientCommandsAliasesPathIs, // clientCommandsAliasesPath is:
  [bas.cc + con.cresolvedSystemCommandsAliasesPathIs]: cresolvedSystemCommandsAliasesPathIs, // resolvedSystemCommandsAliasesPath is:
  [bas.cc + con.cresolvedClientCommandsAliasesPathIs]: cresolvedClientCommandsAliasesPathIs, // resolvedClientCommandsAliasesPath is:
  [bas.cc + con.csystemWorkflowPathIs]: csystemWorkflowPathIs, // systemWorkflowPath is:
  [bas.cc + con.cclientWorkflowPathIs]: cclientWorkflowPathIs, // clientWorkflowPath is:
  [bas.cc + con.cresolvedSystemWorkflowsPathIs]: cresolvedSystemWorkflowsPathIs, // resolvedSystemWorkflowsPath is:
  [bas.cc + con.cresolvedClientWorkflowsPathIs]: cresolvedClientWorkflowsPathIs, // resolvedClientWorkflowsPath is:
  [bas.cc + con.cbusinessRuleIs]: cbusinessRuleIs, // businessRule is:
  [bas.cc + con.cruleInputIs]: cruleInputIs, // ruleInput is:
  [bas.cc + con.cruleMetaDataIs]: cruleMetaDataIs, // ruleMetaData is:
  [bas.cc + con.cconfigurationNamespaceIs]: cconfigurationNamespaceIs, // configurationNamespace is:
  [bas.cc + con.cconfigurationNameIs]: cconfigurationNameIs, // configurationName is:
  [bas.cc + con.cconfigurationValueIs]: cconfigurationValueIs, // configurationValue is:
  [bas.cc + con.creturnConfiguraitonValueIs]: creturnConfiguraitonValueIs, // returnConfigurationValue is:
  [bas.cc + con.cattributeJsonStringIs]: cattributeJsonStringIs, // attributeJsonString is:
  [bas.cc + con.cappAttributeNameIs]: cappAttributeNameIs, // appAttributeName is:
  [bas.cc + con.cappAttributeValueIs]: cappAttributeValueIs, // appAttributeValue is:
  [bas.cc + con.cexecuteBusinessRulesColon]: cexecuteBusinessRulesColon, // execute business rules:
  [bas.cc + con.cdataPathAfterBusinessRulesProcessingIs]: cdataPathAfterBusinessRulesProcessingIs, // dataPath after business rules processing is:
  [bas.cc + con.cFileToLoadIs]: cFileToLoadIs, // File to load is:
  [bas.cc + con.cfileExtensionIs]: cfileExtensionIs, // fileExtension is:
  [bas.cc + con.cloadedFileDataIs]: cloadedFileDataIs, // loaded file data is:
  [bas.cc + con.cBEGIN_PROCESSING_ADDITIONAL_DATA]: cBEGIN_PROCESSING_ADDITIONAL_DATA, // BEGIN PROCESSING ADDITIONAL DATA
  [bas.cc + con.cDONE_PROCESSING_ADDITIONAL_DATA]: cDONE_PROCESSING_ADDITIONAL_DATA, // DONE PROCESSING ADDITIONAL DATA
  [bas.cc + con.cMERGED_dataIs]: cMERGED_dataIs, // MERGED data is:
  [bas.cc + con.cparsedDataFileContentsAre]: cparsedDataFileContentsAre, // parsedDataFile contents are:
  [bas.cc + con.cdataCatagoryIs]: cdataCatagoryIs, // dataCatagory is:
  [bas.cc + con.cfullyParsedDataIs]: cfullyParsedDataIs, // fully parsed data is:
  [bas.cc + con.cD_finalMergeIs]: cD_finalMergeIs, // D final merge is:
  [bas.cc + con.cdataStorageContextNameIs]: cdataStorageContextNameIs, // dataStorageContextName is:
  [bas.cc + con.cdataToStoreIs]: cdataToStoreIs, // dataToStore is:
  [bas.cc + con.cdataCatagoryDetailsNameIs]: cdataCatagoryDetailsNameIs, // dataCatagoryDetailsName is:
  [bas.cc + con.ctempDataIs]: ctempDataIs, // tempData is:
  [bas.cc + con.ctargetDataIs]: ctargetDataIs, // targetData is:
  [bas.cc + con.cpageNameIs]: cpageNameIs, // pageName is:
  [bas.cc + con.cdataToMergeIs]: cdataToMergeIs, // data to Merge is:
  [bas.cc + con.cdataToMergeElementCountIs]: cdataToMergeElementCountIs, // dataToMergeElementCount is:
  [bas.cc + con.cdataToMergeElementCountIs1]: cdataToMergeElementCountIs1, // dataToMergeElementCount is 1
  [bas.cc + con.ccheckIfThePageNameIsNotAnEmptyString]: ccheckIfThePageNameIsNotAnEmptyString, // check if the pageName is not an empty string
  [bas.cc + con.cpageNameIsNotAnEmptyString]: cpageNameIsNotAnEmptyString, // pageName is not an empty string
  [bas.cc + con.cCheckIfTheDataCatagoryIsAnEmptyStringOrNot]: cCheckIfTheDataCatagoryIsAnEmptyStringOrNot, // Check if the dataCatagory is an empty string or not
  [bas.cc + con.cdataCatagoryIsNotAnEmptyString]: cdataCatagoryIsNotAnEmptyString, // dataCatagory is not an empty string!
  [bas.cc + con.cdataCatagoryIsAnEmptyString]: cdataCatagoryIsAnEmptyString, // dataCatagory IS an empty string!
  [bas.cc + con.ctargetDataContentIs]: ctargetDataContentIs, // targetData content is:
  [bas.cc + con.cafterAttemptToMergeResultsAre]: cafterAttemptToMergeResultsAre, // after attempt to merge, results are:
  [bas.cc + con.cMergedDataIs]: cMergedDataIs, // Merged data is:
  [bas.cc + con.cpageNameIsAnEmptyString]: cpageNameIsAnEmptyString, // pageName is an empty string
  [bas.cc + con.cCaughtTheSpecialCaseThatWeAreMergingFlatList]: cCaughtTheSpecialCaseThatWeAreMergingFlatList, // Caught the special case that we are merging a flat list.
  [bas.cc + con.cinsideTheForLoop]: cinsideTheForLoop, // inside the for-loop
  [bas.cc + con.ckeyIs]: ckeyIs, // key is:
  [bas.cc + con.ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs]: ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs, // targetData is modified in the input pass-by-reference variable content is:
  [bas.cc + con.cdataObjectValueIs]: cdataObjectValueIs, // dataObject value is:
  [bas.cc + con.celementNameIs]: celementNameIs, // elementName is:
  [bas.cc + con.cdataObjectIs]: cdataObjectIs, // dataObject is:
  [bas.cc + con.celementNamePatternIs]: celementNamePatternIs, // elementNamePattern is:
  [bas.cc + con.celementCountIs]: celementCountIs, // elementCount is:
  [bas.cc + con.cERROR_Colon]: cERROR_Colon, // ERROR:
  [bas.cc + con.cfileAndPathToLoadFromIs]: cfileAndPathToLoadFromIs, // file and path to load from is:
  [bas.cc + con.cDoneLoadingDataFrom]: cDoneLoadingDataFrom, // DONE loading data from:
  [bas.cc + con.cfileAndPathToWriteDataToIs]: cfileAndPathToWriteDataToIs, // file and path to write data to is:
  [bas.cc + con.cdataToWriteIs]: cdataToWriteIs, // data to write is:
  [bas.cc + con.cDataWasWrittenToTheFile]: cDataWasWrittenToTheFile, // Data was written to the file:
  [bas.cc + con.cPathThatShouldBeScannedIs]: cPathThatShouldBeScannedIs, // Path that should be scanned is:
  [bas.cc + con.cfilesFoundAre]: cfilesFoundAre, // files found are:
  [bas.cc + con.cdirectorIs]: cdirectorIs, // directory is:
  [bas.cc + con.cdirectoryPathIs]: cdirectoryPathIs, // directoryPath is:
  [bas.cc + con.csourceFolderIs]: csourceFolderIs, // sourceFolder is:
  [bas.cc + con.cdestinationFolderIs]: cdestinationFolderIs, // destinationFolder is:
  [bas.cc + con.ccopySuccessIs]: ccopySuccessIs, // copySuccess is:
  [bas.cc + con.ccurrentVersionIs]: ccurrentVersionIs, // current version is:
  [bas.cc + con.creleasedArchiveFilesListIs]: creleasedArchiveFilesListIs, // released archive files list is:
  [bas.cc + con.cfileIs]: cfileIs, // file is:
  [bas.cc + con.cfileNameIs]: cfileNameIs, // fileName is:
  [bas.cc + con.creleaseFilesListIs]: creleaseFilesListIs, // release files list is:
  [bas.cc + con.creleaseDateTimeStampIs]: creleaseDateTimeStampIs, // release date-time stamp is:
  [bas.cc + con.creleaseFileNameIs]: creleaseFileNameIs, // release fileName is:
  [bas.cc + con.cDoneWritingTheZipFile]: cDoneWritingTheZipFile, // Done writing the zip file:
  [bas.cc + con.cSetTheReturnPackageSuccessFlagToTrue]: cSetTheReturnPackageSuccessFlagToTrue, // Set the return packageSuccess flag to TRUE
  [bas.cc + con.ccurrentVersionAlreadyReleased]: ccurrentVersionAlreadyReleased, // current version already released
  [bas.cc + con.cpackageSuccessIs]: cpackageSuccessIs, // packageSuccess is:
  [bas.cc + con.cRootPathBeforeProcessingIs]: cRootPathBeforeProcessingIs, // RootPath before processing is:
  [bas.cc + con.cRootPathAfterProcessingIs]: cRootPathAfterProcessingIs, // RootPath after processing is:
  [bas.cc + con.cSourceIs]: cSourceIs, // source is:
  [bas.cc + con.ctargetIs]: ctargetIs, // target is:
  [bas.cc + con.cErrorCouldNotCopyFile]: cErrorCouldNotCopyFile, // ERROR: Could not copy file:
  [bas.cc + con.cErrorCouldNotCreateFolder]: cErrorCouldNotCreateFolder, // ERROR: Could not create folder:
  [bas.cc + con.csuccessfullCopyIs]: csuccessfullCopyIs, // successfullCopy is:
  [bas.cc + con.cErrorCouldNotCopyFolderContents]: cErrorCouldNotCopyFolderContents, // ERROR: Could not copy folder contents:
  [bas.cc + con.cargumentValueIs]: cargumentValueIs, // argumentValue is:
  [bas.cc + con.cconsolidatedArgumentModeIs]: cconsolidatedArgumentModeIs, // consolidatedArgumentMode is:
  [bas.cc + con.cPushingArgumentValueToReturnDataAsArrayElement]: cPushingArgumentValueToReturnDataAsArrayElement, // Pushing the argumentValue to the returnData as an array element
  [bas.cc + con.cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse]: cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse, // Calling analyzeArgument for index = 2, consolidatedArgumentMode = false
  [bas.cc + con.cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue]: cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue, // Calling analyzeArgument for index = 2, consolidatedArgumentMode = true
  [bas.cc + con.cargumentValueLengthGreaterThanZero]: cargumentValueLengthGreaterThanZero, // argumentValue.length > 0
  [bas.cc + con.cReturnArgumentValueSameAsItWasPassedIn]: cReturnArgumentValueSameAsItWasPassedIn, // Return the argumentValue the same as it was passed in.
  [bas.cc + con.cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse]: cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse, // Calling analyzeArgument for index = 3, consolidatedArgumentMode = false
  [bas.cc + con.cCheckIfThereAreBracketsOrNoBrackets]: cCheckIfThereAreBracketsOrNoBrackets, // Check if there are brackets or no brackets.
  [bas.cc + con.cBracketsWereFound]: cBracketsWereFound, // Brackets were found
  [bas.cc + con.cCheckIfThereIsRegularExpressionOrNot]: cCheckIfThereIsRegularExpressionOrNot, // Check if there is a Regular Expression or not.
  [bas.cc + con.cRegularExpressionWasFound]: cRegularExpressionWasFound, // A regular expression was found!
  [bas.cc + con.cNoRegExpFound]: cNoRegExpFound, // NO RegExp found!
  [bas.cc + con.cBracketsAreFound]: cBracketsAreFound, // Brackets ARE found!
  [bas.cc + con.cNoSecondaryCommandArgumentDelimiters]: cNoSecondaryCommandArgumentDelimiters, // NO secondary command argument delimiters.
  [bas.cc + con.cregularExpressionIs]: cregularExpressionIs, // regular expression is:
  [bas.cc + con.cregExValueIs]: cregExValueIs, // regExValue is:
  [bas.cc + con.cregularExpressionFlagsAre]: cregularExpressionFlagsAre, // regular expression flags are:
  [bas.cc + con.cregExFlagsIs]: cregExFlagsIs, // regExFlags is:
  [bas.cc + con.cargumentValueContainsTheDelimiterLetsSplitIt]: cargumentValueContainsTheDelimiterLetsSplitIt, // argumentValue contains the delimiter, lets split it!
  [bas.cc + con.cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs]: cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs, // argumentValue after attempting to remove a open bracket from all array elements is:
  [bas.cc + con.cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs]: cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs, // argumentValue after attempting to remove a close bracket from all array elements is:
  [bas.cc + con.csecondaryCommandArgsDelimiterIs]: csecondaryCommandArgsDelimiterIs, // secondaryCommandArgsDelimiter is:
  [bas.cc + con.cargumentArrayIs]: cargumentArrayIs, // argumentArray is:
  [bas.cc + con.cformattingIs]: cformattingIs, // formatting is:
  [bas.cc + con.cdeltaTimeIs]: cdeltaTimeIs, // deltaTime is:
  [bas.cc + con.cformatIs]: cformatIs, // format is:
  [bas.cc + con.creturnDeltaTimeIs]: creturnDeltaTimeIs, // returnDeltaTime is:
  [bas.cc + con.csleepTimeIs]: csleepTimeIs, // sleepTime is:
  [bas.cc + con.cworkflowNameIs]: cworkflowNameIs, // workflowName is:
  [bas.cc + con.ccurrentWorkflowIs]: ccurrentWorkflowIs, // currentWorkflow is:
  [bas.cc + con.cworkflowValueIs]: cworkflowValueIs, // workflowValue is:
  [bas.cc + con.cdataHivePathArrayIs]: cdataHivePathArrayIs, // dataHivePathArray is:
  [bas.cc + con.ccontentsOfLeafDataHiveElementIs]: ccontentsOfLeafDataHiveElementIs, // contents of leafDataHiveElement is:
  [bas.cc + con.centryIs]: centryIs, // entry is:
  [bas.cc + con.cattributeValueIs]: cattributeValueIs, // attributeValue is:
  [bas.cc + con.ckey2Is]: ckey2Is, // key2 is:
  [bas.cc + con.centityIs]: centityIs, // entity is:
  [bas.cc + con.cqueueNameSpaceIs]: cqueueNameSpaceIs, // queueNameSpace Is:
  [bas.cc + con.cstackNameSpaceIs]: cstackNameSpaceIs, // stackNameSpace Is:
  [bas.cc + con.cWarningStackColon]: cWarningStackColon, // WARNING: Stack:
  [bas.cc + con.cAlreadyExists]: cAlreadyExists, // ALREADY exist!
  [bas.cc + con.cdoesNotExist]: cdoesNotExist, // does not exist!
  [bas.cc + con.cisEmpty]: cisEmpty, // is empty!
  [bas.cc + con.cContentsOfTheStackNamespace]: cContentsOfTheStackNamespace, // Contents of the stack namespace:
  [bas.cc + con.cwordDelimiterIs]: cwordDelimiterIs, // wordDelimiter is:
  [bas.cc + con.cstringContainsAcronymIs]: cstringContainsAcronymIs, // stringContainsAcronym is:
  [bas.cc + con.cErrorZipPackageReleaseFailed]: cErrorZipPackageReleaseFailed, // ERROR: Zip package release failed:
  [bas.cc + con.cminimumColorRangeIs]: cminimumColorRangeIs, // minimumColorRange is:
  [bas.cc + con.cmaximumColorRangeIs]: cmaximumColorRangeIs, // maximumColorRange is:
  [bas.cc + con.callSystemConstantsValidationDataIs]: callSystemConstantsValidationDataIs, // allSystemConstantsValidationData is:
  [bas.cc + con.callClientConstantsValidationDataIs]: callClientConstantsValidationDataIs, // allClientConstantsValidationData is:
  [bas.cc + con.cconstantLibraryDataIs]: cconstantLibraryDataIs, // constantLibraryData is:
  [bas.cc + con.cclientValidationDataIs]: cclientValidationDataIs, // clientValidationData is:
  [bas.cc + con.carrayValidationDataIs]: carrayValidationDataIs, // arrayValidationData is:
  [bas.cc + con.cfilesListLimitIs]: cfilesListLimitIs, // filesListLimit is:
  [bas.cc + con.cenableLimitIs]: cenableLimitIs, // enableLimit is:
  [bas.cc + con.cfilesLimitIs]: cfilesLimitIs, // filesLimit is:
  [bas.cc + con.cinputDataRightBeforeProcessingIs]: cinputDataRightBeforeProcessingIs, // inputData right before processing is:

  // WARNING: Mixed string. Cannot determine what delimiter should be used to break up the string into words.
  [bas.cc + con.cDetermineWordDelimiterMessage1]: cDetermineWordDelimiterMessage1, // WARNING: Mixed string.
  [bas.cc + con.cDetermineWordDelimiterMessage2]: cDetermineWordDelimiterMessage2, // Cannot determine what delimiter should
  [bas.cc + con.cDetermineWordDelimiterMessage3]: cDetermineWordDelimiterMessage3, // be used to break up the
  [bas.cc + con.cDetermineWordDelimiterMessage4]: cDetermineWordDelimiterMessage4, // string into words.
  // WARNING: Mixed string. Cannot determine how words are delimited in the string. Unable to count words.
  [bas.cc + con.cGetWordCountInStringMessage1]: cGetWordCountInStringMessage1, // WARNING: Mixed string.
  [bas.cc + con.cGetWordCountInStringMessage2]: cGetWordCountInStringMessage2, // Cannot determine how words are delimited
  [bas.cc + con.cGetWordCountInStringMessage3]: cGetWordCountInStringMessage3, // in the string. Unable to count words.
  // WARNING: Mixed string. Cannot get words from the string. Unable to determine words.
  [bas.cc + con.cGetWordsArrayFromStringMessage1]: cGetWordsArrayFromStringMessage1, // WARNING: Mixed string.
  [bas.cc + con.cGetWordsArrayFromStringMessage2]: cGetWordsArrayFromStringMessage2, // Cannot get words from the string.
  [bas.cc + con.cGetWordsArrayFromStringMessage3]: cGetWordsArrayFromStringMessage3, // Unable to determine words.
  // Please enter a named command where the first word starts with a lower case letter and all other words in the named command start with an upper case letter:
  [bas.cc + con.cCommandNamePrompt2]: cCommandNamePrompt2, // the first word starts with a
  [bas.cc + con.cCommandNamePrompt3]: cCommandNamePrompt3, // lower case letter and all other
  [bas.cc + con.cCommandNamePrompt4]: cCommandNamePrompt4, // words in the named command start
  [bas.cc + con.cCommandNamePrompt5]: cCommandNamePrompt5, // with an upper case letter:
  // Please enter a list of command word abreviations/acronyms/aliases for the command word:
  [bas.cc + con.cCommandWordAliasPrompt1]: cCommandWordAliasPrompt1,
  [bas.cc + con.cCommandWordAliasPrompt2]: cCommandWordAliasPrompt2,
  [bas.cc + con.cCommandWordAliasPrompt3]: cCommandWordAliasPrompt3,
  // Please enter a string you would like to define as a constant in the constants system:
  [bas.cc + con.cConstantPrompt1]: cConstantPrompt1, // Please enter a string you would
  [bas.cc + con.cConstantPrompt2]: cConstantPrompt2, // like to define as a constant
  [bas.cc + con.cConstantPrompt3]: cConstantPrompt3, // in the constants system:
  // Please enter a coma separated list of strings you would like to define in the constants system:
  [bas.cc + con.cConstantsListPrompt1]: cConstantsListPrompt1,
  [bas.cc + con.cConstantsListPrompt2]: cConstantsListPrompt2,
  [bas.cc + con.cConstantsListPrompt3]: cConstantsListPrompt3,
  // Please enter a coma separated list of strings you would like to search for common patterns:
  [bas.cc + con.cConstantsListPatternSearchPrompt1]: cConstantsListPatternSearchPrompt1, // Please enter a coma separated list of
  [bas.cc + con.cConstantsListPatternSearchPrompt2]: cConstantsListPatternSearchPrompt2, // strings you would like to search for
  [bas.cc + con.cConstantsListPatternSearchPrompt3]: cConstantsListPatternSearchPrompt3, // common patterns:
  // ERROR: Attempted to generate a suggested line of code to validate the constant, ' +
  // 'but the constant is not formatted correctly, it should begin with a lower case "c". ' +
  // 'Please reformat the constant correctly so a line of code can be generated for you.
  [bas.cc + con.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1]: cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1, // ERROR: Attempted to generate a suggested
  [bas.cc + con.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2]: cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2, // line of code to validate the constant,
  [bas.cc + con.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3]: cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3, // but the constant is not formatted correctly,
  [bas.cc + con.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4]: cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4, // it should begin with a lower case "c".
  [bas.cc + con.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5]: cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5, // Please reformat the constant correctly so a
  [bas.cc + con.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6]: cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6, // line of code can be generated for you.
  [bas.cc + con.cSearchForPatternsInStringArrayMessage1]: cSearchForPatternsInStringArrayMessage1, // currentMasterStringArrayElement does not contain a space character
  // WARNING: The current string being searched contains a space character, we are going to skip comparison.
  [bas.cc + con.cSearchForPatternsInStringArrayMessage2]: cSearchForPatternsInStringArrayMessage2, // WARNING: The current string being search contains a space character,
  [bas.cc + con.cSearchForPatternsInStringArrayMessage3]: cSearchForPatternsInStringArrayMessage3, // we are going to skip comparison.
  // WARNING: InputData was not an array or had an empty array.
  [bas.cc + con.cSearchForPatternsInStringArrayMessage4]: cSearchForPatternsInStringArrayMessage4, // WARNING: InputData was not an array or had an empty array.
  // WARNING: No data to load, please specify a valid path & filename!
  [bas.cc + con.cLoadDataFileMessage1]: cLoadDataFileMessage1, // WARNING: No data to load,
  [bas.cc + con.cloadDataFileMessage2]: cloadDataFileMessage2, // please specify a valid path & filename!
  [bas.cc + con.cloadDataFileMessage3]: cloadDataFileMessage3, // WARNING: Invalid file format, file formats supported are:
  // ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another release.
  [bas.cc + con.cdeployApplicationMessage1a]: cdeployApplicationMessage1a, // ERROR: Release failed because of a failure in the constants validation system.
  [bas.cc + con.cdeployApplicationMessage2a]: cdeployApplicationMessage2a, // Please fix ASAP before attempting another release.
  // ERROR: Release failed because of a failure in the commands alias validation system. Please fix ASAP before attempting another release.
  [bas.cc + con.cdeployApplicationMessage1b]: cdeployApplicationMessage1b, //ERROR: Release failed because of a failure in the commands alias validation system.
  [bas.cc + con.ccommandSequencerMessage1]: ccommandSequencerMessage1, // WARNING: nominal.commandSequencer: The specified command was not found,
  [bas.cc + con.ccommandSequencerMessage2]: ccommandSequencerMessage2, // Please enter a valid command and try again.
  [bas.cc + con.cworkflowMessage1]: cworkflowMessage1, // WARNING: nominal.workflow: The specified workflow:
  [bas.cc + con.cworkflowMessage2]: cworkflowMessage2, // was not found in either the system defined workflows, or client defined workflows.
  [bas.cc + con.cworkflowMessage3]: cworkflowMessage3, // Please enter a valid workflow name and try again.
  // After attempting to replace the secondaryCommandArgsDelimiter with the primaryCommandDelimiter commandString is:
  [bas.cc + con.ccommandGeneratorMessage1]: ccommandGeneratorMessage1,
  // After attempting to replace the tertiaryCommandDelimiter with the secondaryCommandArgsDelimiter commandString is:
  [bas.cc + con.ccommandGeneratorMessage2]: ccommandGeneratorMessage2,
  // WARNING: nominal.commandGenerator: Must enter a number greater than 0, number entered:
  [bas.cc + con.ccommandGeneratorMessage3]: ccommandGeneratorMessage3,
  // WARNING: nominal.commandGenerator: Number entered for the number of commands to generate is not a number:
  [bas.cc + con.ccommandGeneratorMessage4]: ccommandGeneratorMessage4,
  // WARNING: nominal.commandGenerator: The specified command:
  [bas.cc + con.ccommandGeneratorMessage5]: ccommandGeneratorMessage5,
  // was not found, please enter a valid command and try again.
  [bas.cc + con.ccommandGeneratorMessage6]: ccommandGeneratorMessage6,
  // Command can be called by passing parameters and bypass the prompt system.
  [bas.cc + con.ccommandAliasGeneratorMessage1]: ccommandAliasGeneratorMessage1,
  // EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
  [bas.cc + con.ccommandAliasGeneratorMessage2]: ccommandAliasGeneratorMessage2,
  // INVALID INPUT: Please enter a valid camel-case command name.
  [bas.cc + con.ccommandAliasGeneratorMessage3]: ccommandAliasGeneratorMessage3,
  // INVALID INPUT: Please enter a valid command word alias list.
  [bas.cc + con.ccommandAliasGeneratorMessage4]: ccommandAliasGeneratorMessage4,
  // INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.
  [bas.cc + con.ccommandAliasGeneratorMessage5]: ccommandAliasGeneratorMessage5,
  // INVALID INPUT: Please enter a valid constant value that contains more than 4 characters.
  [bas.cc + con.cconstantsGeneratorMessage1]: cconstantsGeneratorMessage1,
  // WARNING: The constant has already been defined in the following library(ies):
  [bas.cc + con.cconstantsGeneratorMessage2]: cconstantsGeneratorMessage2,
  // INVALID INPUT: Please enter a valid constant list.
  [bas.cc + con.cconstantsGeneratorListMessage1]: cconstantsGeneratorListMessage1,
  // PASSED: All duplicate command aliases validation tests!
  [bas.cc + con.cvalidateCommandAliasesMessage1]: cvalidateCommandAliasesMessage1,
  // About to call the rule broker to process on the number of single quotes
  [bas.cc + con.cgetCommandArgsMessage1]: cgetCommandArgsMessage1, // About to call the rule broker to process on the number of single quotes
  // and determine if it-be even or odd
  [bas.cc + con.cgetCommandArgsMessage2]: cgetCommandArgsMessage2,
  // WARNING: Command does not exist, please enter a valid command and try again!
  [bas.cc + con.cexecuteCommandMessage1]: cexecuteCommandMessage1,
  // WARNING: lexical.parseBusinessRuleArgument: Invalid combination of inputs to the lexical.parseBusinessRuleArgument function!
  [bas.cc + con.cparseBusinessRuleArgumentMessage1]: cparseBusinessRuleArgumentMessage1,
  [bas.cc + con.cparseBusinessRuleArgumentMessage2]: cparseBusinessRuleArgumentMessage2, //Please adjust inputs and try again.
  // Caught the case that the user may have only specified a single data hive, such as the configuration data hive.
  [bas.cc + con.cprintDataHiveAttributesMessage1]: cprintDataHiveAttributesMessage1, // Caught the case that the user may have only specified a single data hive,
  [bas.cc + con.cprintDataHiveAttributesMessage2]: cprintDataHiveAttributesMessage2, // such as the configuration data hive.
  // ERROR: Please enter a valid name.space.attributeName for the system to print out attribute data from.
  [bas.cc + con.cprintDataHiveAttributesMessage3]: cprintDataHiveAttributesMessage3,
  // Nothing to echo.
  [bas.cc + con.cNothingToEcho]: cNothingToEcho, // Nothing to echo.
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  [bas.cc + con.cprompt01]: cprompt01, // 'Caught the case that the input string contains the global carriage return term.'
  [bas.cc + con.cprompt02]: cprompt02, // 'index of the carriage return character: '
  [bas.cc + con.cprompt03]: cprompt03, // 'Caught the case that the string includes a carriage return and new line characters.'
  [bas.cc + con.cprintMessageToFile01]: cprintMessageToFile01, // '!file.includes(undefined)'
  [bas.cc + con.cprintMessageToFile02]: cprintMessageToFile02, // 'ERROR: Failure to log to file: '
  [bas.cc + con.cprintMessageToFile03]: cprintMessageToFile03, // 'ERROR: Log File includes undefined.'

  // Coded System Messages
  // EXAMPLE: '!mergedData[wr1.csystem] && !D[wr1.csystem] === true'
};
