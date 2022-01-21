/**
 * @file constant.constants.js
 * @module constant.constants
 * @description Contains all the constants used to define the constants for export.
 * These remove the need for cirulcar dependencies even though some of them are re-definitions from other files.
 * @requires module:basic.constants
 * @requires module:phonic.constants
 * @requires module:word2.constants
 * @author Seth Hollingsead
 * @date 2021/11/16
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 * @NOTE: We have a second word constants file, to avoid circular dependent constants definitions.
 * Also so we don't have to redefine all the words in this file.
 */

import * as bas from './basic.constants';
import * as phn from './phonic.constants';
import * as wr2 from './word2.constants';

// Redefined words, used below in this file, redefined so we don't have circular dependencies
let cDot = bas.cDo + bas.ct; // Dot
let cCongo = bas.cC + phn.congo; // Congo
let cGuinea = bas.cGu + phn.cinea; // Guinea
let cone = bas.co + bas.cne; // one
let cSan = bas.cSa + bas.cn; // San
let cSierra = bas.cSi + bas.cer + bas.cra; // Sierra
let cEnglish = bas.cEn + bas.cgl + phn.cish; // English

let cCotedlvoire = bas.cCo + bas.cte + bas.cd + bas.clv + bas.coi + bas.cre; // Cotedlvoire
let cCaboVerde = bas.cCa + bas.cbo + phn.cVer + bas.cde; // CaboVerde
let cCentralAfricanRepublic = wr2.cCentral + wr2.cAfrican + wr2.cRepublic; // CentralAfricanRepublic
let cCostaRica = wr2.cCost + bas.ca + bas.cR + phn.cica; // CostaRica
let cDemocraticRepublicOfTheCongo = wr2.cDemocratic + wr2.cRepublic + wr2.cOf + wr2.cThe + cCongo; // DemocraticRepublicOfTheCongo
let cDominicanRepublic = bas.cDo + phn.cminica + bas.cn + bas.cR + bas.cep + phn.cublic; // cDominicanRepublic
let cElSalvador = bas.cEl + bas.cSa + bas.clv + phn.cador; // ElSalvador
let cEquatorialGuinea = phn.cEqu + phn.cator + bas.cia + bas.cl + bas.cG + phn.cuinea; // EquatorialGuinea
let cGuineaBissau = bas.cGu + phn.cinea + bas.cBi + bas.css + bas.cau; // GuineaBissau
let cHolySee = bas.cHo + bas.cly + bas.cSe + bas.ce; // HolySee
let cMarshallIslands = bas.cMa + bas.crs + bas.cha + bas.cll + bas.cIs + bas.cla + phn.cnds; // MarshallIslands
let cNewZealand = wr2.cNew + bas.cZe + phn.cala + bas.cnd; // NewZealand
let cNorthKorea = bas.cNo + bas.crt + bas.ch + bas.cK + phn.corea; // NorthKorea
let cNorthMacedonia = bas.cNo + bas.crt + bas.ch + bas.cM + phn.cace + bas.cdo + phn.cnia; // NorthMacedonia
let cPapuaNewGuinea = wr2.cPapua + wr2.cNew + cGuinea; // PapuaNewGuinea
let cSaintKitts = bas.cSa + phn.cint + bas.cKi + bas.ctt + bas.cs; // SaintKitts
let cSaintLucia = bas.cSa + phn.cint + bas.cLu + bas.cci + bas.ca; // SaintLucia
let cSaintVincent = bas.cSa + phn.cint + bas.cVi + phn.cnce + bas.cnt; // SaintVincent
let cSanMarino = cSan + bas.cMa + bas.cri + bas.cno; // SanMarino
let cSaoTome = bas.cSa + bas.co + bas.cT + phn.come; // SaoTome
let cSaudiArabia = bas.cSa + bas.cud + bas.ci + bas.cA + bas.cra + phn.cbia; // SaudiArabia
let cSierraLeone = cSierra + bas.cLe + cone; // SierraLeone
let cSolomonIslands = bas.cSo + bas.clo + phn.cmon + bas.cIs + bas.cla + phn.cnds; // SolomonIslands
let cSouthAfrica = bas.cSo + bas.cut + bas.ch + bas.cA + phn.cfrica; // SouthAfrica
let cSouthKorea = bas.cSo + bas.cut + bas.ch + bas.cK + phn.corea; // SouthKorea
let cSouthSudan = bas.cSo + bas.cut + bas.ch + bas.cS + phn.cudan; // SouthSudan
let cSriLanka = bas.cSr + bas.ci + bas.cL + bas.can + bas.cka; // SriLanka
let cTimorLeste = bas.cTi + bas.cmo + bas.cr + bas.cL + phn.cest + bas.ce; // TimorLeste
let cTrinidadAndTabago = wr2.cTrinidad + wr2.cAnd + wr2.cTabago; // TrinidadAndTabago
let cUnitedArabEmirates = wr2.cUnited + wr2.cArab + wr2.cEmirates; // UnitedArabEmirates
let cUnitedKingdom = wr2.cUnited + bas.cKi + bas.cng + phn.cdom; // UnitedKingdom
let cUnitedStatesOfAmerica = wr2.cUnited + wr2.cStates + wr2.cOf + wr2.cAmerica; // UnitedStatesOfAmmerica

let cLowerCaseEnglishAlphabet = wr2.cLower + wr2.cCase + cEnglish + wr2.cAlphabet; // LowerCaseEnglishAlphabet
let cUpperCaseEnglishAlphabet = wr2.cUpper + wr2.cCase + cEnglish + wr2.cAlphabet; // UpperCaseEnglishAlphabet
let cAllNumbers = wr2.cAll + wr2.cNumbers; // AllNumbers
let cMostSpecialCharacters = wr2.cMost + wr2.cSpecial + wr2.cCharacters; // MostSpecialCharacters

let cctrl_a = phn.cctrl + bas.cUnderscore + bas.ca; // ctrl_a
let cctrl_b = phn.cctrl + bas.cUnderscore + bas.cb; // ctrl_b
let cctrl_c = phn.cctrl + bas.cUnderscore + bas.cc; // ctrl_c
let cctrl_d = phn.cctrl + bas.cUnderscore + bas.cd; // ctrl_d
let cctrl_e = phn.cctrl + bas.cUnderscore + bas.ce; // ctrl_e
let cctrl_f = phn.cctrl + bas.cUnderscore + bas.cf; // ctrl_f
let cctrl_g = phn.cctrl + bas.cUnderscore + bas.cg; // ctrl_g
let cctrl_h = phn.cctrl + bas.cUnderscore + bas.ch; // ctrl_h
let cctrl_i = phn.cctrl + bas.cUnderscore + bas.ci; // ctrl_i
let cctrl_j = phn.cctrl + bas.cUnderscore + bas.cj; // ctrl_j
let cctrl_k = phn.cctrl + bas.cUnderscore + bas.ck; // ctrl_k
let cctrl_l = phn.cctrl + bas.cUnderscore + bas.cl; // ctrl_l
let cctrl_m = phn.cctrl + bas.cUnderscore + bas.cm; // ctrl_m
let cctrl_n = phn.cctrl + bas.cUnderscore + bas.cn; // ctrl_n
let cctrl_o = phn.cctrl + bas.cUnderscore + bas.co; // ctrl_o
let cctrl_p = phn.cctrl + bas.cUnderscore + bas.cp; // ctrl_p
let cctrl_q = phn.cctrl + bas.cUnderscore + bas.cq; // ctrl_q
let cctrl_r = phn.cctrl + bas.cUnderscore + bas.cr; // ctrl_r
let cctrl_s = phn.cctrl + bas.cUnderscore + bas.cs; // ctrl_s
let cctrl_t = phn.cctrl + bas.cUnderscore + bas.ct; // ctrl_t
let cctrl_u = phn.cctrl + bas.cUnderscore + bas.cu; // ctrl_u
let cctrl_v = phn.cctrl + bas.cUnderscore + bas.cv; // ctrl_v
let cctrl_w = phn.cctrl + bas.cUnderscore + bas.cw; // ctrl_w
let cctrl_x = phn.cctrl + bas.cUnderscore + bas.cx; // ctrl_x
let cctrl_y = phn.cctrl + bas.cUnderscore + bas.cy; // ctrl_y
let cctrl_z = phn.cctrl + bas.cUnderscore + bas.cz; // ctrl_z

let cframeworkResourcesConfigurationPath = wr2.cframework + wr2.cResources + wr2.cConfiguration + wr2.cPath; // cframeworkResourcesConfigurationPath
let csystemConfigFileName = wr2.csystem + wr2.cConfig + wr2.cFile + wr2.cName; // csystemConfigFileName
let capplicationConfigFileName = wr2.capplication + wr2.cConfig + wr2.cFile + wr2.cName; // capplicationConfigFileName

// Constants Filenames
let cbasic_constants_js = wr2.cbasic + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // basic_constants_js
let cbusiness_constants_js = wr2.cbusiness + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // business_constants_js
let ccolor_constants_js = wr2.ccolor + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // color_constants_js
let ccommand_constants_js = wr2.ccommand + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // command_constants_js
let cconfiguration_constants_js = wr2.cconfiguration + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // configuration_constants_js
let cconstant_constants_js = wr2.cconstant + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // constant_constant_js
let ccountry_constants_js = wr2.ccountry + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // country_constants_js
let celement_constants_js = wr2.celement + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // element_constants_js
let cgeneric_constants_js = wr2.cgeneric + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // generic_constants_js
let cisotope_constants_js = wr2.cisotope + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // isotope_constants_js
let cknot_constants_js = wr2.cknot + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // knot_constants_js
let clanguage_constants_js = wr2.clanguage + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // language_constants_js
let cmessage_constants_js = wr2.cmessage + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // message_constants_js
let cnumeric_constants_js = wr2.cnumeric + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // numeric_constants_js
let cphonic_constants_js = wr2.cphonic + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // phonic_constants_js
let cshape_constants_js = wr2.cshape + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // shape_constants_js
let csystem_constants_js = wr2.csystem + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // system_constants_js
let cunit_constants_js = wr2.cunit + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // unit_constants_js
let cword_constants_js = wr2.cword + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // word_constants_js

// Message constant constants
// Logging constant constants
let cBEGIN_Function = wr2.cBEGIN + bas.cUnderscore + wr2.cFunction; // BEGIN_Function
let cEND_Function = wr2.cEND + bas.cUnderscore + wr2.cFunction; // END_Function
let cinputData = wr2.cinput + wr2.cData; // inputData
let cInputData = wr2.cInput + wr2.cData; // InputData
let cinputMetaData = wr2.cinput + wr2.cMetaData; // inputMetaData
let cInputMetaData = wr2.cInput + wr2.cMetaData; // InputMetaData
let cinputDataIs = wr2.cinput + wr2.cData + wr2.cIs; // inputDataIs
let cinputMetaDataIs = wr2.cinput + wr2.cMetaData + wr2.cIs; // inputMetaDataIs
let creturnDataIs = wr2.creturn + wr2.cData + wr2.cIs; // returnDataIs
let cSpaceIsColonSpace = wr2.cSpace + wr2.cIs + wr2.cColon + wr2.cSpace; // cSpaceIsColonSpace

// System Messages constant constants
let cCharacterGenerationMessage1 = wr2.cCharacter + wr2.cGeneration + wr2.cMessage + wr2.c1; // cCharacterGenerationMessage1
let cCharacterGenerationMessage2 = wr2.cCharacter + wr2.cGeneration + wr2.cMessage + wr2.c2; // cCharacterGenerationMessage2
let cCharacterGenerationMessage3 = wr2.cCharacter + wr2.cGeneration + wr2.cMessage + wr2.c3; // cCharacterGenerationMessage3
let cCharacterGenerationMessage4 = wr2.cCharacter + wr2.cGeneration + wr2.cMessage + wr2.c4; // cCharacterGenerationMessage4
let cCharacterGenerationMessage5 = wr2.cCharacter + wr2.cGeneration + wr2.cMessage + wr2.c5; // cCharacterGenerationMessage5
let cMathOperationsMessage1 = wr2.cMath + wr2.cOperations + wr2.cMessage + wr2.c1; // cMathOperationsMessage1
let cnumberOfCharactersToGenerateIs = wr2.cnumber + wr2.cOf + wr2.cCharacters + wr2.cTo + wr2.cGenerate + wr2.cIs; // cnumberOfCharactersToGenerateIs
let cgenerateSpecialCharactersIs = wr2.cgeenrate + wr2.cSpecial + wr2.cCharacters + wr2.cIs; // cgenerateSpecialCharactersIs
let callowableSpecialCharactersIs = wr2.callowable + wr2.cSpecial + wr2.cCharacters + wr2.cIs; // callowableSpecialCharactersIs
let cspecifiedSuffixAndDomainIs = wr2.cspecified + wr2.cSuffix + wr2.cAnd + wr2.cDomain + wr2.cIs; // cspecifiedSuffixAndDomainIs
let cfailureModeIs = wr2.cfailure + wr2.cMode + wr2.cIs; // cfailureModeIs
let cprefixIs = wr2.cprefix + wr2.cIs; // cprefixIs
let csuffixIs = wr2.csuffix + wr2.cIs; // csuffixIs
let cWithoutTheAtSymbol = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol; // cWithoutTheAtSymbol
let cWithoutThePrefix = wr2.cWithout + wr2.cThe + wr2.cPrefix; // cWithoutThePrefix
let cWithoutTheSuffix = wr2.cWithout + wr2.cThe + wr2.cSuffix; // cWithoutTheSuffix
let cWithoutTheAtSymbolAndPrefix = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cAnd + wr2.cPrefix; // cWithoutTheAtSymbolAndPrefix
let cDEFAULTWithoutTheAtSymbolAndPrefix = wr2.cDEFAULT + wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cAnd + wr2.cPrefix; // cDEFAULTWithoutTheAtSymbolAndPrefix
let cdomainNameIs = wr2.cdomain + wr2.cName + wr2.cIs; // cdomainNameIs
let cnumberOfPrefixCharactersIs = wr2.cnumber + wr2.cOf + wr2.cPrefix + wr2.cCharacters + wr2.cIs; // cnumberOfPrefixCharactersIs
let cnumberOfSuffixCharactersIs = wr2.cnumber + wr2.cOf + wr2.cSuffix + wr2.cCharacters + wr2.cIs; // cnumberOfSuffixCharactersIs
let cWithoutTheDotSymbol = wr2.cWithout + wr2.cThe + wr2.cDot + wr2.cSymbol; // cWithoutTheDotSymbol
let cWithoutTheAtAndDotSymbols = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cAnd + wr2.cDot + wr2.cSymbols; // cWithoutTheAtAndDotSymbols
let cWithoutTheDomainName = wr2.cWithout + wr2.cThe + wr2.cDomain + wr2.cName; // cWithoutTheDomainName
let cWithoutTheAtSymbolAndDomainName = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutTheAtSymbolAndDomainName
let cWithoutTheDotAndDomainName = wr2.cWithout + wr2.cThe + wr2.cDot + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutTheDotAndDomainName
let cWithoutTheAtSymbolDotAndDomainName = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cDot + wr2.cAnd + wr2.cDoman + wr2.cName; // cWithoutTheAtSymbolDotAndDomainName
let cWithoutTheDotAndPrefix = wr2.cWithout + wr2.cThe + wr2.cDot + wr2.cAnd + wr2.cPrefix; // cWithoutTheDotAndPrefix
let cWithoutTheAtSymbolAndSuffix = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cAnd + wr2.cSuffix; // cWithoutTheAtSymbolAndSuffix
let cWithoutTheDotAndSuffix = wr2.cWithout + wr2.cThe + wr2.cDot + wr2.cAnd + wr2.cSuffix; // cWithoutTheDotAndSuffix
let cWithoutTheAtSymbolDotAndPrefix = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cDot + wr2.cAnd + wr2.cPrefix; // cWithoutTheAtSymbolDotAndPrefix
let cWithoutTheAtSymbolDotAndSuffix = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cDot + wr2.cAnd + wr2.cSuffix; // cWithoutTheAtSymbolDotAndSuffix
let cWithoutTheAtSymbolDotPrefixAndSuffix = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cDot + wr2.cPrefix + wr2.cAnd + wr2.cSuffix; // cWithoutTheAtSymbolDotPrefixAndSuffix
let cWithoutThePrefixAndDomainName = wr2.cWithout + wr2.cThe + wr2.cPrefix + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutThePrefixAndDomainName
let cWithoutTheSuffixAndDomainName = wr2.cWithout + wr2.cThe + wr2.cSuffix + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutTheSuffixAndDomainName
let cWithoutThePrefixAndSuffix = wr2.cWithout + wr2.cThe + wr2.cPrefix + wr2.cAnd + wr2.cSuffix; // cWithoutThePrefixAndSuffix
let cWithoutThePrefixSuffixAndDomainName = wr2.cWithout + wr2.cThe + wr2.cPrefix + wr2.cSuffix + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutThePrefixSuffixAndDomainName
let cWithoutTheAtSymbolPrefixAndDomainName = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cPrefix + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutTheAtSymbolPrefixAndDomainName
let cWithoutTheDotPrefixAndDomainName = wr2.cWithout + wr2.cThe + wr2.cDot + wr2.cPrefix + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutTheDotPrefixAndDomainName
let cWithoutTheAtSymbolSuffixAndDomainName = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cSuffix + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutTheAtSymbolSuffixAndDomainName
let cWithoutTheDotSuffixAndDomainName = wr2.cWithout + wr2.cThe + wr2.cDot + wr2.cSuffix + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutTheDotSuffixAndDomainName
let cWithoutTheAtSymbolPrefixSuffixAndDomainName = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cPrefix + wr2.cSuffix + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutTheAtSymbolPrefixSuffixAndDomainName
let cWithoutTheDotPrefixSuffixAndDomainName = wr2.cWithout + wr2.cThe + wr2.cDot + wr2.cPrefix + wr2.cSuffix + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutTheDotPrefixSuffixAndDomainName
let cWithoutThePrefixSuffixAndAtSymbol = wr2.cWithout + wr2.cThe + wr2.cPrefix + wr2.cSuffix + wr2.And + wr2.cAt + wr2.cSymbol; // cWithoutThePrefixSuffixAndAtSymbol
let cWithoutThePrefixSuffixAndDot = wr2.cWithout + wr2.cThe + wr2.cPrefix + wr2.cSuffix + wr2.cAnd + wr2.cDot; // cWithoutThePrefixSuffixAndDot
let cIndexOfTheSpace = wr2.cIndex + wr2.cOf + wr2.cThe + wr2.cSpace; // cIndexOfTheSpace
let cisResolvingAs = wr2.cis + wr2.cResolving + wr2.cAs; // cisResolvingAs
let cparsedStringSpaceTerm = wr2.cparsed + wr2.cString + wr2.cSpace + wr2.cTerm; // cparsedStringSpaceTerm
let cstring1Is = wr2.cstring + wr2.c1 + wr2.cIs; // cstring1Is
let cstring2Is = wr2.cstring + wr2.c2 + wr2.cIs; // cstring2Is
let cvariation0ValueIs = wr2.cvariation + wr2.c0 + wr2.cValue + wr2.cIs; // cvariation0ValueIs
let cvariation1ValueIs = wr2.cvariation + wr2.c1 + wr2.cValue + wr2.cIs; // cvariation1ValueIs
let ciValueIs = bas.ci + wr2.cValue + wr2.cIs; // ciValueIs
let cjValueIs = bas.cj + wr2.cValue + wr2.cIs; // cjValueIs
let cdeletionCostIs = wr2.cdeletion + wr2.cCost + wr2.cIs; // cdeletionCostIs
let cinsertionCostIs = wr2.cinsertion + wr2.cCost + wr2.cIs; // cinsertionCostIs
let csubstitutionCostIs = wr2.csubstitution + wr2.cCost + wr2.cIs; // csubstitutionCostIs
let ccamelCaseWordCountIs = wr2.ccamel + wr2.cCase + wr2.cWord + wr2.cCount + wr2.cIs; // ccamelCaseWordCountIs
let ccontainsAcronymIs = wr2.ccontains + wr2.cAcronym + wr2.cIs; // ccontainsAcronymIs
let cspacesCountIs = wr2.cspaces + wr2.cCount + wr2.cIs; // cspacesCountIs
let cperiodCountIs = wr2.cperiod + wr2.cCount + wr2.cIs; // cperiodCountIs
let cdashCountIs = wr2.cdash + wr2.cCount + wr2.cIs; // cdashCountIs
let cunderscoreCountIs = wr2.cunderscore + wr2.cCount + wr2.cIs; // cunderscoreCountIs
let cstringDeltaValueIs = wr2.cstring + wr2.cDelta + wr2.cValue + wr2.cIs; // cstringDeltaValueIs
let cFilenamesMatch = wr2.cFilenames + wr2.cMatch; // cFilenamesMatch
let cFilenamesDoNotMatch = wr2.cFilenames + bas.cDo + wr2.cNot + wr2.cMatch; // cFilenamesDoNotMatch
let cArrayElementsMatch = wr2.cArray + wr2.cElements + wr2.cMatch; // cArrayElementsMatch
let cArrayElementsDoNotMatch = wr2.cArray + wr2.cElements + bas.cDo + wr2.cNot + wr2.cMatch; // cArrayElementsDoNotMatch
let clineArray2Is = wr2.cline + wr2.cArray + wr2.c2 + wr2.cIs; // clineArray2Is
let cSuggestedLineOfCodeIs = wr2.cSuggested + wr2.cline + wr2.cOf + wr2.cCode + wr2.cIs; // cSuggestedLineOfCodeIs
let cErrorUnknownConstantFile = wr2.cError + wr2.cUnknown + wr2.cConstant + wr2.cFile; // cErrorUnknownConstantFile
let cconstantsTypesKeysIs = wr2.cconstants + wr2.cTypes + wr2.cKeys + wr2.cIs; // cconstantsTypesKeysIs
let cconstantTypeKeyIs = wr2.cconstants + wr2.cType + wr2.cKey + wr2.cIs; // cconstantTypeKeyIs
let cconstantTypeValuesIs = wr2.cconstants + wr2.cType + wr2.cValues + wr2.cIs; // cconstantTypeValuesIs
let cconstantsKeysIs = wr2.cconstants + wr2.cKeys + wr2.cIs; // cconstantsKeysIs
let cconstantKeyIs = wr2.cconstant + wr2.cKey + wr2.cIs; // cconstantKeyIs
let cconstantActualValueIs = wr2.cconstant + wr2.cActual + wr2.cValue + wr2.cIs; // cconstantActualValueIs
let cconstantNameIs = wr2.cconstant + wr2.cName + wr2.cIs; // cconstantNameIs
let cconstantValueIs = wr2.cconstant + wr2.cValue + wr2.cIs; // cconstantValueIs
let cdeltaLengthIs = wr2.cdelta + wr2.cLength + wr2.cIs; // cdeltaLengthIs
let crecursiveSubStringIs = wr2.crecursive + wr2.cSubString + wr2.cIs; // crecursiveSubStringIs
let cmaxStringLengthIs = wr2.cmax + wr2.cString + wr2.cLength + wr2.cIs; // cmaxStringLengthIs
let cminStringLengthIs = wr2.cmin + wr2.cString + wr2.cLength + wr2.cIs; // cminStringLengthIs
let ccurrentMasterStringArrayElementIs = wr2.ccurrent + wr2.cMaster + wr2.cString + wr2.cArray + wr2.cElement + wr2.cIs; // ccurrentMasterStringArrayElementIs
let cConstantDoesNotExist = wr2.cConstant + wr2.cDoes + wr2.cNot + wr2.cExist; // cConstantDoesNotExist
let cConstantDoesExist = wr2.cConstant + wr2.cDoes + wr2.cExist; // cConstantDoesExist
let cBEGIN_ithLoop = wr2.cBEGIN + bas.cUnderscore + phn.cith + wr2.cLoop; // cBEGIN_ithLoop
let cBEGIN_ithIteration = wr2.cBEGIN + bas.cUnderscore + phn.cith + wr2.cIteration; // cBEGIN_ithIteration
let cBEGIN_jthLoop = wr2.cBEGIN + bas.cUnderscore + phn.cjth + wr2.cLoop; // cBEGIN_jthLoop
let cBEGIN_kthIteration = wr2.cBEGIN + bas.cUnderscore + phn.ckth + wr2.cIteration; // cBEGIN_kthIteration
let cEND_ithLoop = wr2.cEND + bas.cUnderscore + phn.cith + wr2.cLoop; // cEND_ithLoop
let cEND_ithIteration = wr2.cEND + bas.cUnderscore + phn.cith + wr2.cIteration; // cEND_ithIteration
let cEND_jthLoop = wr2.cEND + bas.cUnderscore + phn.cjth + wr2.cLoop; // cEND_jthLoop
let cEND_kthIteration = wr2.cEND + bas.cUnderscore + phn.ckth + wr2.cIteration; // cEND_kthIteration
let ccurrentCommandIs = wr2.ccurrent + wr2.cCommand + wr2.cIs; // ccurrentCommandIs
let caliasListIs = wr2.calias + wr2.cList + wr2.cIs; // caliasListIs
let ccurrentAliasIs = wr2.ccurrent + wr2.cAlias + wr2.cIs; // ccurrentAliasIs
let cduplicateAliasCountIs = wr2.cduplicate + wr2.cAlias + wr2.cCount + wr2.cIs; // cduplicateAliasCountIs
let cduplicateCommandAliasIs = wr2.cduplicate + wr2.cCommand + wr2.cAlias + wr2.cIs; // cduplicateCommandAliasIs
let ccommandWordAliasesBeforeChangeIs = wr2.ccommand + wr2.cWord + wr2.cAliases + wr2.cBefore + wr2.cChange + wr2.cIs; // ccommandWordAliasesBeforeChangeIs
let ccommandWordAliasesAfterChangeIs = wr2.ccommand + wr2.cWord + wr2.cAliases + wr2.cAfter + wr2.cChange + wr2.cIs; // ccommandWordAliasesAfterChangeIs
let cmasterCommandWordAlisesArrayIs = wr2.cmaster + wr2.cCommand + wr2.cWord + wr2.cAliases + wr2.cArray + wr2.cIs; // cmasterCommandWordAlisesArrayIs
let cmasterArrayIndexIs = wr2.cmater + wr2.cArray + wr2.cIndex + wr2.cIs; // cmasterArrayIndexIs
let cCommandAliasesAre = wr2.cCommand + wr2.cAliases + wr2.cAre; // cCommandAliasesAre
let cexpandedLehmerCodeArrayIs = wr2.cexpanded + wr2.cLehmer + wr2.cCode + wr2.cAray + wr2.cIs; // cexpandedLehmerCodeArrayIs
let cindexOfExpansionIs = wr2.cindex + wr2.cOf + wr2.cExpansion + wr2.cIs; // cindexOfExpansionIs
let carrayToBeExpandedIs = wr2.carray + wr2.cTo + wr2.cBe + wr2.cExpanded + wr2.cIs; // carrayToBeExpandedIs
let climitOfExpansionIs = wr2.climit + wr2.cOf + wr2.cExpansion + wr2.cIs; // climitOfExpansionIs
let cpushingLehmerCodeArray1ToReturnDataValue = wr2.cpushing + wr2.cLehmer + wr2.cCode + wr2.cArray + wr2.c1 + wr2.cTo + wr2.cReturn + wr2.cData + wr2.cValue; // cpushingLehmerCodeArray1ToReturnDataValue
let creturnDataAfterPushIs = wr2.creturn + wr2.cData + wr2.cAfter + wr2.cPush + wr2.cIs; // creturnDataAfterPushIs
let creturnDataAfterLevel1Is = wr2.creturn + wr2.cData + wr2.cAfter + wr2.cLevel + wr2.c1 + wr2.cIs; // creturnDataAfterLevel1Is
let carrayToBeExpandedDotLengthIs = wr2.carray + wr2.cTo + wr2.cBe + wr2.cExpanded + wr2.cDot + wr2.cLength + wr2.cIs; // carrayToBeExpandedDotLengthIs
let creturnDataDotLengthIs = wr2.creturn + wr2.cData + wr2.cDot + wr2.cLength + wr2.cIs; // creturnDataDotLengthIs
let creturnDataBeforePopIs = wr2.creturn + wr2.cData + wr2.cBefore + wr2.cPop + wr2.cIs; // creturnDataBeforePopIs
let creturnDataAfterPopIs = wr2.creturn + wr2.cData + wr2.cAfter + wr2.cPop + wr2.cIs; // creturnDataAfterPopIs
let cmasterTempReturnDataBeforeRecursiveCallIs = wr2.cmaster + wr2.cTemp + wr2.cReturn + wr2.cData + wr2.cData + wr2.cBefore + wr2.cRecursive + wr2.cCall + wr2.cIs; // cmasterTempReturnDataBeforeRecursiveCallIs
let ctempReturnData1Is = wr2.ctemp + wr2.cReturn + wr2.cData + wr2.c1 + wr2.cIs; // ctempReturnData1Is
let ctempReturnData1DotLengthIs = wr2.ctemp + wr2.cReturn + wr2.cData + wr2.c1 + wr2.Dot + wr2.cLength + wr2.cIs; // ctempReturnData1DotLengthIs
let cpushingTempReturnData1Kvalue = wr2.cpushing + wr2.cTemp + wr2.cReturn + wr2.cData + wr2.c1 + bas.cK + wr2.cvalue; // cpushingTempReturnData1Kvalue
let cmasterTempReturnDataAfterRecursiveCallIs = wr2.cmaster + wr2.cTemp + wr2.cReturn + wr2.cData + wr2.cAfter + wr2.cRecursive + wr2.cCall + wr2.cIs; // cmasterTempReturnDataAfterRecursiveCallIs
let clookupIndexIs = wr2.clookup + wr2.cIndex + wr2.cIs; // clookupIndexIs
let clookupValueIs = wr2.clookup + wr2.cValue + wr2.cIs; // clookupValueIs
let cDataCatagoryShouldBe = wr2.cData + wr2.cCatagory + wr2.cShould + wr2.cBe; // cDataCatagoryShouldBe
let cDataCatagoryDetailNameShouldBe = wr2.cData + wr2.cCatagory + wr2.cDetail + wr2.cName + wr2.cShould + wr2.cBe; // cDataCatagoryDetailNameShouldBe
let cKeywordNameShouldBe = wr2.cKeyword + wr2.cName + wr2.cShould + wr2.cBe; // cKeywordNameShouldBe
let cpathElementIs = wr2.cpath + wr2.cElement + wr2.cIs; // cpathElementIs
let ccaseIEqual0 = wr2.ccase + bas.cI + wr2.cEqual + wr2.c0; // ccaseIEqual0
let ccasePathElementEqual = wr2.ccase + wr2.cPath + wr2.cElement + wr2.cEqual; // ccasePathElementEqual
let ccaseElse = wr2.ccase + wr2.cElse; // ccaseElse
let creturnDataSoFarIs = wr2.creturn + wr2.cData + bas.cSo + wr2.cFar + wr2.cIs; // creturnDataSoFarIs
let cpathArrayIs = wr2.cpath + wr2.Array + wr2.cIs; // cpathArrayIs
let ccurrentPathElementIs = wr2.ccurrent + wr2.cPath + wr2.cElement + wr2.cIs; // ccurrentPathElementIs
let cAttemptingToLoadXmlData = wr2.cAttempting + wr2.cTo + wr2.cLoad + wr2.cXml + wr2.cData; // cAttemptingToLoadXmlData
let cAttemptingToLoadCsvData = wr2.cAttempting + wr2.cTo + wr2.cLoad + wr2.cCsv + wr2.cData; // cAttemptingToLoadCsvData
let cAttemptingToLoadJsonData = wr2.cAttempting + wr2.cTo + wr2.cLoad + wr2.cJson + wr2.cData; // cAttemptingToLoadJsonData
let cLoadedDataIs = wr2.cLoaded + wr2.cData + wr2.cIs; // cLoadedDataIs
let cattributeArrayIs = wr2.cattribute + wr2.cArray + wr2.cIs; // cattributeArrayIs
let cattributeArray0Is = wr2.cattribute + wr2.cArray + wr2.c0 + wr2.cIs; // cattributeArray0Is
let carrayIs = wr2.carray + wr2.cIs; // carrayIs
let cvalueIs = wr2.cvalue + wr2.cIs; // cvalueIs
let cmyFunctionIs = wr2.cmy + wr2.cFunction + wr2.cIs; // cmyFunctionIs
let carrayInputObjectIsNotAnArray = wr2.carray + wr2.cInput + wr2.cObject + wr2.cIs + wr2.cNot + bas.cAn + wr2.cArray; // carrayInputObjectIsNotAnArray
let cTheValueWasFoundInTheArray = wr2.cThe + wr2.cValue + wr2.cWas + wr2.cFound + bas.cIn + wr2.cThe + wr2.cArray; // cTheValueWasFoundInTheArray
let cTheValueWasNotFoundInTheArray = wr2.cThe + wr2.cValue + wr2.cWas + wr2.cNot + wr2.cFound + bas.cIn + wr2.cThe + wr2.cArray; // cTheValueWasNotFoundInTheArray
let coriginalStringIs = wr2.corignal + wr2.cString + wr2.cIs; // coriginalStringIs
let cindexIs = wr2.cindex + wr2.cIs; // cindexIs
let creplacementIs = wr2.creplacement + wr2.cIs; // creplacementIs
let cDEPLOY_APPLICATION = wr2.cDEPLOY + bas.cUnderscore + wr2.cAPPLICATION; // cDEPLOY_APPLICATION
let cRELEASE_APPLICATION = wr2.cRELEASE + bas.cUnderscore + wr2.cAPPLICATION; // cRELEASE_APPLICATION
let cDeploymentWasCompleted = wr2.cDeployment + wr2.cWas + wr2.cCompleted; // cDeploymentWasCompleted
let cDeploymentFailed = wr2.cDeployment + wr2.cFailed; // cDeploymentFailed
let cReleaseFailed = wr2.cRelease + wr2.cFailed; // cReleaseFailed
// let cinputDataIis = wr2.cinput + wr2.cData + bas.cI + wr2.cis; // cinputDataIis
let caggregateCommandStringIs = wr2.caggregate + wr2.cCommand + wr2.cString + wr2.cIs; // caggregateCommandStringIs
let cmetaDataParametersIs = wr2.cmeta + wr2.cData + wr2.cParameters + wr2.cIs; // cmetaDataParametersIs
let cmetaDataParametersLengthIs = wr2.cmeta + wr2.cData + wr2.cParameters + wr2.cLength + wr2.cIs; // cmetaDataParametersLengthIs
let cmetaDataPathAndFilenameIs = wr2.cmeta + wr2.cData + wr2.cPath + wr2.cAnd + wr2.cFilename + wr2.cIs; // cmetaDataPathAndFilenameIs
let cpathAndFilenameIs = wr2.cpath + wr2.cAnd + wr2.cFilename + wr2.cIs; // cpathAndFilenameIs
let ccontentsAre = wr2.ccontents + wr2.cAre; // ccontentsAre
let ccontentsOfDare = wr2.ccontents + wr2.cOf + wr2.cDare; // ccontentsOfDare
let cBEGIN_ithIterationOfInputDataArray = wr2.cBEGIN + bas.cUnder + phn.cith + wr2.cIteration + wr2.cOf + wr2.cInput + wr2.cData + wr2.cArray; // cBEGIN_ithIterationOfInputDataArray
let ccurrentRuleIs = wr2.ccurrent + wr2.cRule + wr2.cIs; // ccurrentRuleIs
let crulesIs = wr2.crules + wr2.cIs; // crulesIs
let cruleInputDataIs = wr2.crule + wr2.cInput + wr2.cData + wr2.cIs; // cruleInputDataIs
let cruleInputMetaData = wr2.crule + wr2.cInput + wr2.cMeta + wr2.cData; // cruleInputMetaData
let cBusinessRuleStartTimeIs = wr2.cBusness + wr2.cRule + wr2.cStart + wr2.cTime + wr2.cIs; // cBusinessRuleStartTimeIs
let cBusinessRuleEndTimeIs = wr2.cBusiness + wr2.cRule + wr2.cEnd + wr2.cTime + wr2.cIs; // cBusinessRuleEndTimeIs
let cBusinessRuleRunTimeIs = wr2.cBusiness + wr2.cRule + wr2.cRun + wr2.cTme + wr2.cIs; // cBusinessRuleRunTimeIs
let ccommandStringBeforeAttemptedDelimiterSwapIs = wr2.ccommand + wr2.cString + wr2.cBefore + wr2.cAttempted + wr2.cDelimiter + wr2.cSwap + wr2.cIs; // ccommandStringBeforeAttemptedDelimiterSwapIs
let creplaceCharacterWithCharacterRuleIs = wr2.creplace + wr2.cCharacter + wr2.cWith + wr2.cCharacter + wr2.cRule + wr2.cIs; // creplaceCharacterWithCharacterRuleIs
let cRuleOutputIs = wr2.cRule + wr2.cOutput + wr2.cIs; // cRuleOutputIs
let ccamelCaseCommandNameArrayIs = wr2.ccamel + wr2.cCase + wr2.cCommand + wr2.cName + wr2.cArray + wr2.cIs; // ccamelCaseCommandNameArrayIs
let ccurrentCommandWordIs = wr2.ccurrent + wr2.cCommand + wr2.cWord + wr2.cIs; // ccurrentCommandWordIs
let cPARSER_ERROR = wr2.cPARSER + bas.cUnderscore + wr2.cERROR; // cPARSER_ERROR
let ccommandAliasDataStructureIs = wr2.ccommand + wr2.cAlias + wr2.cData + wr2.cStructure + wr2.cIs; // ccommandAliasDataStructureIs
let cuserDefinedConstantIs = wr2.cuser + wr2.cDefned + wr2.cConstant + wr2.cIs; // cuserDefinedConstantIs
let cwordCountIs = wr2.cword + wr2.cCount + wr2.cIs; // cwordCountIs
let cwordsArrayIs = wr2.cwords + wr2.cArray + wr2.cIs; // cwordsArrayIs
let cOptimizedConstantDefinitionForWord = wr2.cOptimized + wr2.cConstant + wr2.cDefinition + wr2.cFor + wr2.cWord; // cOptimizedConstantDefinitionForWord
let cuserDefinedConstantListIs = wr2.cuser + wr2.cDefined + wr2.cConstant + wr2.cList + wr2.cIs; // cuserDefinedConstantListIs
let cuserDefinedConstantListContainsComas = wr2.cuser + wr2.cDefined + wr2.cConstant + wr2.cList + wr2.cContains + wr2.cComas; // cuserDefinedConstantListContainsComas
let cuserDefinedConstantsListArrayIs = wr2.cuser + wr2.cDefined + wr2.cConstants + wr2.cList + wr2.cArray + wr2.cIs; // cuserDefinedConstantsListArrayIs
let cuserDefinedConstantsListDoesNotContainComas = wr2.cuser + wr2.cDefined + wr2.cConstants + wr2.cList + wr2.cDoes + wr2.cNot + wr2.cContain + wr2.cComas; // cuserDefinedConstantsListDoesNotContainComas
let ccommonPatternsArrayIs = wr2.ccommon + wr2.cPatterns + wr2.cArray + wr2.cIs; // ccommonPatternsArrayIs
let cbusinessRuleCounterIs = wr2.cbusiness + wr2.cRule + wr2.cConter + wr2.cIs; // cbusinessRuleCounterIs
let cbusinessRulePerformanceSumIs = wr2.cbusiness + wr2.cRule + wr2.cPerformance + wr2.cSum + wr2.cIs; // cbusinessRulePerformanceSumIs
let cDoneBusinessRulePerformanceSumIs = wr2.cDone + wr2.cBusiness + wr2.cRule + wr2.cPerformance + wr2.cSum + wr2.cIs; // cDoneBusinessRulePerformanceSumIs
let caverageIs = wr2.caverage + wr2.cIs; // caverageIs
let cbusinessRulePerformanceStdSumIs = wr2.cbusiness + wr2.cRule + wr2.cPerformance + phn.cStd + wr2.cSum + wr2.cIs; // cbusinessRulePerformanceStdSumIs
let cDoneBusinessRulePerformanceStdSumIs = wr2.cDone + wr2.cBusienss + wr2.cRule + wr2.cPerformance + phn.cStd + wr2.cSum + wr2.cIs; // cDoneBusinessRulePerformanceStdSumIs
let cstandardDevIs = wr2.cstandard + phn.cDev + wr2.cIs; // cstandardDevIs
let ccommandCounterIs = wr2.ccommand + wr2.cCounter + wr2.cIs; // ccommandCounterIs
let ccommandPerformanceSumIs = wr2.ccommand + wr2.cPerformance + wr2.cSum + wr2.cIs; // ccommandPerformanceSumIs
let cDoneCommandPerformanceSumIs = wr2.cDone + wr2.cCommand + wr2.cPerformance + wr2.cSum + wr2.cIs; // cDoneCommandPerformanceSumIs
let ccommandPerformanceStdSumIs = wr2.ccommand + wr2.cPerformance + phn.cStd + wr2.cSum + wr2.cIs; // ccommandPerformanceStdSumIs
let cDoneCommandPerformanceStdSumIs = wr2.cDone + wr2.cCommand + wr2.cPerformance + phn.cStd + wr2.cSum + wr2.cIs; // cDoneCommandPerformanceStdSumIs
let ccolorKeysIs = wr2.ccolor + wr2.cKeys + wr2.cIs; // ccolorKeysIs
let ccurrentColorNameIs = wr2.ccurrent + wr2.cColor + wr2.cName + wr2.cIs; // ccurrentColorNameIs
let ccurrentColorObjectIs = wr2.ccurrent + wr2.cColor + wr2.cObject + wr2.cIs; // ccurrentColorObjectIs
let ccurrentColorHexValueIs = wr2.ccurrent + wr2.cColor + wr2.cHex + wr2.cValue + wr2.cIs; // ccurrentColorHexValueIs
let cruleOutputIs = wr2.crule + wr2.cOutput + wr2.cIs; // cruleOutputIs
let cBeginPhase1ConstantsValidation = wr2.cBegin + wr2.cPhase + wr2.c1 + wr2.cConstants + wr2.cValidation; // cBeginPhase1ConstantsValidation
let cEndPhase1ConstantsValidation = wr2.cEnd + wr2.cPhase + wr2.c1 + wr2.cConstants + wr2.cValidation; // cEndPhase1ConstantsValidation
let cBeginPhase2ConstantsValidation = wr2.cBegin + wr2.cPhase + wr2.c2 + wr2.cConstants + wr2.cValidation; // cBeginPhase2ConstantsValidation
let cEndPhase2ConstantsValidation = wr2.cEnd + wr2.cPhase + wr2.c2 + wr2.cConstants + wr2.cValidation; // cEndPhase2ConstantsValidation
let cconstantsPathIs = wr2.cconstants + wr2.cPath + wr2.cIs; // cconstantsPathIs
let cresolvedConstantsPath_BasicIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cBasic + wr2.cIs; // cresolvedConstantsPath_BasicIs
let cresolvedConstantsPath_BusinessIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cBusiness + wr2.cIs; // cresolvedConstantsPath_BusinessIs
let cresolvedConstantsPath_ColorIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cColor + wr2.cIs; // cresolvedConstantsPath_ColorIs
let cresolvedConstantsPath_CommandIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cCommand + wr2.cIs; // cresolvedConstantsPath_CommandIs
let cresolvedConstantsPath_ConfigurationIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cConfiguration + wr2.cIs; // cresolvedConstantsPath_ConfigurationIs
let cresolvedConstantsPath_CountryIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cCountry + wr2.cIs; // cresolvedConstantsPath_CountryIs
let cresolvedConstantsPath_ElementIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cElement + wr2.cIs; // cresolvedConstantsPath_ElementIs
let cresolvedConstantsPath_GenericIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cGeneric + wr2.cIs; // cresolvedConstantsPath_GenericIs
let cresolvedConstantsPath_IsotopeIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cIsotope + wr2.cIs; // cresolvedConstantsPath_IsotopeIs
let cresolvedConstantsPath_KnotIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cKnot + wr2.cIs; // cresolvedConstantsPath_KnotIs
let cresolvedConstantsPath_LanguageIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cLanguage + wr2.cIs; // cresolvedConstantsPath_LanguageIs
let cresolvedConstantsPath_MessageIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cMessage + wr2.cIs; // cresolvedConstantsPath_MessageIs
let cresolvedConstantsPath_NumericIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cNumeric + wr2.cIs; // cresolvedConstantsPath_NumericIs
let cresolvedConstantsPath_PhonicIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cPhonic + wr2.cIs; // cresolvedConstantsPath_PhonicIs
let cresolvedConstantsPath_ShapeIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cShape + wr2.cIs; // cresolvedConstantsPath_ShapeIs
let cresolvedConstantsPath_SystemIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cSystem + wr2.cIs; // cresolvedConstantsPath_SystemIs
let cresolvedConstantsPath_UnitIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cUnit + wr2.cIs; // cresolvedConstantsPath_UnitIs
let cresolvedConstantsPath_WordIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cWord + wr2.cIs; // cresolvedConstantsPath_WordIs
let cBasicConstantsPhase1Validation = wr2.cBasic + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cBasicConstantsPhase1Validation
let cBusinessConstantsPhase1Validation = wr2.cBusiness + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cBusinessConstantsPhase1Validation
let cColorConstantsPhase1Validation = wr2.cColor + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cColorConstantsPhase1Validation
let cCommandConstantsPhase1Validation = wr2.cCommand + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cCommandConstantsPhase1Validation
let cConfigurationConstantsPhase1Validation = wr2.cConfiguration + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cConfigurationConstantsPhase1Validation
let cCountryConstantsPhase1Validation = wr2.cCountry + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cCountryConstantsPhase1Validation
let cElementConstantsPhase1Validation = wr2.cElement + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cElementConstantsPhase1Validation
let cGenericConstantsPhase1Validation = wr2.cGeneric + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cGenericConstantsPhase1Validation
let cIsotopeConstantsPhase1Validation = wr2.cIsotope + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cIsotopeConstantsPhase1Validation
let cKnotConstantsPhase1Validation = wr2.cKnot + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cKnotConstantsPhase1Validation
let cLanguageConstantsPhase1Validation = wr2.cLanguage + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cLanguageConstantsPhase1Validation
let cMessageConstantsPhase1Validation = wr2.cMessage + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cMessageConstantsPhase1Validation
let cNumericalConstantsPhase1Validation = wr2.cNumerical + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cNumericalConstantsPhase1Validation
let cPhonicConstantsPhase1Validation = wr2.cPhonic + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cPhonicConstantsPhase1Validation
let cShapeConstantsPhase1Validation = wr2.cShape + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cShapeConstantsPhase1Validation
let cSystemConstantsPhase1Validation = wr2.cSystem + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cSystemConstantsPhase1Validation
let cUnitConstantsPhase1Validation = wr2.cUnit + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cUnitConstantsPhase1Validation
let cWordConstantsPhase1Validation = wr2.cWord + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cWordConstantsPhase1Validation
let cBasicConstantsPhase2Validation = wr2.cBasic + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cBasicConstantsPhase2Validation
let cBusinessConstantsPhase2Validation = wr2.cBusiness + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cBusinessConstantsPhase2Validation
let cColorConstantsPhase2Validation = wr2.cColor + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cColorConstantsPhase2Validation
let cCommandConstantsPhase2Validation = wr2.cCommand + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cCommandConstantsPhase2Validation
let cConfigurationConstantsPhase2Validation = wr2.cConfiguration + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cConfigurationConstantsPhase2Validation
let cCountryConstantsPhase2Validation = wr2.cCountry + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cCountryConstantsPhase2Validation
let cElementConstantsPhase2Validation = wr2.cElement + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cElementConstantsPhase2Validation
let cGenericConstantsPhase2Validation = wr2.cGeneric + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cGenericConstantsPhase2Validation
let cIsotopeConstantsPhase2Validation = wr2.cIsotope + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cIsotopeConstantsPhase2Validation
let cKnotConstantsPhase2Validation = wr2.cKnot + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cKnotConstantsPhase2Validation
let cLanguageConstantsPhase2Validation = wr2.cLanguage + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cLanguageConstantsPhase2Validation
let cMessageConstantsPhase2Validation = wr2.cMessage + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cMessageConstantsPhase2Validation
let cNumericalConstantsPhase2Validation = wr2.cNumerical + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cNumericalConstantsPhase2Validation
let cPhonicConstantsPhase2Validation = wr2.cPhonic + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cPhonicConstantsPhase2Validation
let cShapeConstantsPhase2Validation = wr2.cShape + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cShapeConstantsPhase2Validation
let cSystemConstantsPhase2Validation = wr2.cSystem + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cSystemConstantsPhase2Validation
let cUnitConstantsPhase2Validation = wr2.cUnit + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cUnitConstantsPhase2Validation
let cWordConstantsPhase2Validation = wr2.cWord + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cWordConstantsPhase2Validation
let ccommandStringIs = wr2.ccmmand + wr2.cString + wr2.cIs; // ccommandStringIs
let ccommandDelimiterIs = wr2.ccommand + wr2.cDelimiter + wr2.cIs; // ccommandDelimiterIs
let ccommandToExecuteBeforeTheAliasIs = wr2.ccommand + wr2.cTo + wr2.cExecute + wr2.cBefore + wr2.cThe + wr2.cAlias + wr2.cIs; // ccommandToExecuteBeforeTheAliasIs
let ccommandToExecuteAfterTheAliasIs = wr2.ccmmand + wr2.cTo + wr2.cExecute + wr2.cAfter + wr2.cThe + wr2.cAlias + wr2.cIs; // ccommandToExecuteAfterTheAliasIs
let cWarningTheSpecifiedCommand = wr2.cWarning + wr2.cThe + wr2.cSpecified + wr2.cCommand; // cWarningTheSpecifiedCommand
let cdoesNotExistPleaseTryAgain = wr2.cdoes + wr2.cNot + wr2.cExist + wr2.cPlease + wr2.cTry + wr2.cAgain; // cdoesNotExistPleaseTryAgain
let ccommandStringContainsEitherSingleQuoteOrBackTickQuote = wr2.ccmmand + wr2.cString + wr2.cContains + wr2.cEither + wr2.cSingle + wr2.cQuote + wr2.cOr + wr2.cBack + wr2.cTick + wr2.cQuote; // ccommandStringContainsEitherSingleQuoteOrBackTickQuote
let ccommandStringContainsSingleQuote = wr2.ccommand + wr2.cString + wr2.cContains + wr2.cSingle + wr2.cQuote; // ccommandStringContainsSingleQuote
let cnumberOfSingleQuotesIsEven = wr2.cnumber + wr2.cOf + wr2.cSingle + wr2.cQuotes + wr2.cIs + wr2.cEven; // cnumberOfSingleQuotesIsEven
let cFirstIndexIs = wr2.cFirst + wr2.cIndex + wr2.cIs; // cFirstIndexIs
let ccommandStringAfterTaggingTheFirstStringDelimiter = wr2.ccommand + wr2.cString + wr2.cAfter + wr2.cTagging + wr2.cThe + wr2.cFirst + wr2.cSring + wr2.cDelimiter; // ccommandStringAfterTaggingTheFirstStringDelimiter
let cAdditionalIndexIs = wr2.cAdditional + wr2.cIndex + wr2.cIs; // cAdditionalIndexIs
let coddIndex = wr2.codd + wr2.cIndex; // coddIndex
let cevenIndex = wr2.ceven + wr2.cIndex; // cevenIndex
let ccommandStringAfterTaggingAnOddStringDelimiter = wr2.ccommand + wr2.cString + wr2.cAfter + wr2.cTagging + bas.cAn + wr2.cOdd + wr2.cString + wr2.cDelimiter; // ccommandStringAfterTaggingAnOddStringDelimiter
let ccommandStringAfterTaggingAnEvenStringDelimiter = wr2.ccommand + wr2.cString + wr2.cAfter + wr2.cTagging + bas.cAn + wr2.cEven + wr2.cString + wr2.cDelimiter; // ccommandStringAfterTaggingAnEvenStringDelimiter
let cpreSplitCommandStringIs = phn.cpre + wr2.cSplit + wr2.cCommand + wr2.cString + wr2.cIs; // cpreSplitCommandStringIs
let cpostSplitCommandStringIs = wr2.cpost + wr2.cSplit + wr2.cCommand + wr2.cString + wr2.cIs; // cpostSplitCommandStringIs
let cpreSplitCommandStringElementIs = phn.cpre + wr2.cSplit + wr2.cCommand + wr2.cString + wr2.cElement + wr2.cIs; // cpreSplitCommandStringElementIs
let cDoingStraightSplitCommandString = wr2.cDoing + wr2.cStraight + wr2.cSplit + wr2.cCommand + wr2.cString; // cDoingStraightSplitCommandString
let cCommandStartTimeIs = wr2.cCommand + wr2.cStart + wr2.cTime + wr2.cIs; // cCommandStartTimeIs
let cCommandEndTimeIs = wr2.cCommand + wr2.cEnd + wr2.cTime + wr2.cIs; // cCommandEndTimeIs
let cCommandRunTimeIs = wr2.cCommand + wr2.cRun + wr2.cTime + wr2.cIs; // cCommandRunTimeIs
let ccommandAliasesFilePathConfigurationNameIs = wr2.ccommand + wr2.cAliases + wr2.cFile + wr2.cPath + wr2.cConfiguration + wr2.cName + wr2.cIs; // ccommandAliasesFilePathConfigurationNameIs
let ccommandIs = wr2.ccommand + wr2.cIs; // ccommandIs
let ccommandToExecuteIs = wr2.ccommand + wr2.cTo + wr2.cExecute + wr2.cIs; // ccommandToExecuteIs
let ccontextNameIs = wr2.ccontext + wr2.cName + wr2.cIs; // ccontextNameIs
let callSystemConfigurationsIs = wr2.ccall + wr2.cSystem + wr2.cConfigurations + wr2.cIs; // callSystemConfigurationsIs
let cdataPathConfigurationNameIs = wr2.cdata + wr2.cPath + wr2.cConfiguration + wr2.cName + wr2.cIs; // cdataPathConfigurationNameIs
let cdataPathIs = wr2.cdata + wr2.cPath + wr2.cIs; // dataPathIs
let cfilesFoundIs = wr2.cfiles + wr2.cFound + wr2.cIs; // filesFoundIs
let cfileToLoadIs = wr2.cfile + wr2.cTo + wr2.cLoad + wr2.cIs; // fileToLoadIs
let cfilesToLoadIs = wr2.cfiles + wr2.cTo + wr2.cLoad + wr2.cIs; // filesToLoadIs
let cdataFileToMergeIs = wr2.cdata + wr2.cFile + bas.cTo + wr2.cMerge + wr2.cIs; // dataFileToMergeIs
let cparsedDataFileIs = wr2.cparsed + wr2.cData + wr2.cFile + wr2.cIs; // parsedDataFileIs
let cexecuteBusinessRules = wr2.cexecute + wr2.cBusiness + wr2.cRules; // executeBusinessRules
let cdataFileIs = wr2.cdata + wr2.cFile + wr2.cIs; // dataFileIs
let cmergedDataIs = wr2.cmerged + wr2.cData + wr2.cIs; // mergedDataIs
let cdebugConfigurationSettingValueIs = wr2.cdebug + wr2.cConfiguration + wr2.cSetting + wr2.cValue + wr2.cIs; // debugConfigurationSettingValueIs
let cappConfigPathIs = phn.capp + wr2.cConfig + wr2.cPath + wr2.cIs; // appConfigPathIs
let cframeworkConfigPathIs = wr2.cframework + wr2.cConfig + wr2.cPath + wr2.cIs; // frameworkConfigPathIs
let cALL_DATA_IS = wr2.cALL + bas.cUnderscore + wr2.cDATA + bas.cUnderscore + wr2.cIS; // ALL_DATA_IS
let cAllLoadedDataIs = wr2.cAll + wr2.cLoaded + wr2.cData + wr2.cIs; // AllLoadedDataIs
let cconfigDataIs = wr2.cconfig + wr2.cData + wr2.cIs; // configDataIs
let cERROR = wr2.cERROR; // ERROR:
let cErrorInvalidAccessTo = wr2.cError + wr2.cInvalid + wr2.cAccess + wr2.cTo; // ErrorInvalidAccessTo
let crootPathIs = wr2.croot + wr2.cPath + wr2.cIs; // rootPathIs
let caskIs = wr2.cask + wr2.cIs; // askIs
let cINPUT = wr2.cINPUT; // INPUT
let cinputIs = wr2.cinput + wr2.cIs; // inputIs
let cstartTimeIs = wr2.cstart + wr2.cTime + wr2.cIs; // startTimeIs
let cendTimeIs = wr2.cend + wr2.cTime + wr2.cIs; // endTimeIs
let cdeltaTimeResultIs = wr2.cdelta + wr2.cTime + wr2.cResult + wr2.cIs; // deltaTimeResultIs
let cclientConfigurationIs = wr2.cclient + wr2.cConfiguration + wr2.cIs; // clientConfigurationIs
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let cloadedAndMergedDataAllFilesIs = wr2.cloaded + wr2.cAnd + wr2.cMerged + wr2.cData + wr2.cAll + wr2.cFiles + wr2.cIs; // loadedAndMergedDataAllFilesIs
let cloadedAndMergedDataAllFilesContentsAre = wr2.cloaded + wr2.cAnd + wr2.cMerged + wr2.cData + wr2.cAll + wr2.cFiles + wr2.cContents + wr2.cAre; // loadedAndMergedDataAllFilesContentsAre
let ccommandWorkflowFilePathConfigurationNameIs = wr2.ccommand + wr2.cWorkflow + wr2.cFile + wr2.cPath + wr2.cConfiguratino + wr2.cName + wr2.cIs; // commandWorkflowFilePathConfigurationNameIs
let ccontentsOfDataStructreIs = wr2.ccontents + wr2.cOf + wr2.cData + wr2.cStructure + wr2.cIs; // contentsOfDataStructreIs
let cclientBusinessRulesAre = wr2.cclient + wr2.cBusiness + wr2.cRules + wr2.cAre; // clientBusinessRulesAre
let cclientCommandsAre = wr2.cclient + wr2.cCommands + wr2.cAre; // clientCommandsAre
let csystemCommandsAliasesPathIs = wr2.csystem + wr2.cCommands + wr2.cAliases + wr2.cPath + wr2.cIs; // systemCommandsAliasesPathIs
let cclientCommandsAliasesPathIs = wr2.cclient + wr2.cCommands + wr2.cAliases + wr2.cPath + wr2.cIs; // clientCommandsAliasesPathIs
let cresolvedSystemCommandsAliasesPathIs = wr2.cresolved + wr2.cSystem + wr2.cCommands + wr2.cAliases + wr2.cPath + wr2.cIs; // resolvedSystemCommandsAliasesPathIs
let cresolvedClientCommandsAliasesPathIs = wr2.cresoled + wr2.cClient + wr2.cCommands + wr2.cAliases + wr2.cPath + wr2.cIs; // resolvedClientCommandsAliasesPathIs
let csystemWorkflowPathIs = wr2.csystem + wr2.cWorkflow + wr2.cPath + wr2.cIs; // systemWorkflowPathIs
let cclientWorkflowPathIs = wr2.cclient + wr2.cWorkflow + wr2.cPath + wr2.cIs; // clientWorkflowPathIs
let cresolvedSystemWorkflowsPathIs = wr2.cresolved + wr2.cSystem + wr2.cWorkflows + wr2.cPath + wr2.cIs; // resolvedSystemWorkflowsPathIs
let cresolvedClientWorkflowsPathIs = wr2.cresolved + wr2.cClient + wr2.cWorkflows + wr2.cPath + wr2.cIs; // resolvedClientWorkflowsPathIs
let cbusinessRuleIs = wr2.cbusiness + wr2.cRules + wr2.cIs; // businessRuleIs
let cruleInputIs = wr2.crule + wr2.cInput + wr2.cIs; // ruleInputIs
let cruleMetaDataIs = wr2.crule + wr2.cMetaData + wr2.cIs; // ruleMetaDataIs
let cconfigurationNamespaceIs = wr2.cconfiguratino + wr2.cNamespace + wr2.cIs; // configurationNamespaceIs
let cconfigurationNameIs = wr2.cconfiguration + wr2.cName + wr2.cIs; // configurationNameIs
let cconfigurationValueIs = wr2.cconfiguration + wr2.cValue + wr2.cIs; // configurationValueIs
let creturnConfigurationValueIs = wr2.creturn + wr2.cConfiguration + wr2.cValue + wr2.cIs; // returnConfigurationValueIs
let cattributeJsonStringIs = wr2.cattribute + wr2.cJson + wr2.cString + wr2.cIs; // attributeJsonStringIs
let cappAttributeNameIs = wr2.capp + wr2.cAttribute + wr2.cName + wr2.cIs; // appAttributeNameIs
let cappAttributeValueIs = wr2.capp + wr2.cAttribute + wr2.Value + wr2.cIs; // appAttributeValueIs
let cexecuteBusinessRulesColon = wr2.cexecute + wr2.cBusiness + wr2.cRules + wr2.cColon; // executeBusinessRulesColon
let cdataPathAfterBusinessRulesProcessingIs = wr2.cdata + wr2.cPath + wr2.cAfter + wr2.cBusiness + wr2.cRules + wr2.cProcessing + wr2.cIs; // dataPathAfterBusinessRulesProcessingIs
let cFileToLoadIs = wr2.cFile + wr2.cTo + wr2.cLoad + wr2.cIs; // FileToLoadIs
let cfileExtensionIs = wr2.cfile + wr2.cExtension + wr2.cIs; // fileExtensionIs
let cloadedFileDataIs = wr2.cloaded + wr2.cFile + wr2.cData + wr2.cIs; // loadedFileDataIs
let cBEGIN_PROCESSING_ADDITIONAL_DATA = wr2.cBEGIN + bas.cUnderscore + wr2.cPROCESSING + bas.cUnderscore + wr2.cADDITIONAL + bas.cUnderscore + wr2.cDATA; // BEGIN_PROCESSING_ADDITIONAL_DATA
let cDONE_PROCESSING_ADDITIONAL_DATA = wr2.cDONE + bas.cUnderscore + wr2.cPROCESSING + bas.cUnderscore + wr2.cADDITIONAL + bas.cUnderscore + wr2.cDATA; // DONE_PROCESSING_ADDITIONAL_DATA
let cMERGED_dataIs = wr2.cMERGED + bas.cUnderscore + wr2.cdata + wr2.cIs; // MERGED_dataIs
let cparsedDataFileContentsAre = wr2.cparsed + wr2.cData + wr2.cFile + wr2.cContents + wr2.cAre; // parsedDataFileContentsAre
let cdataCatagoryIs = wr2.cdata + wr2.cCatagory + wr2.cIs; // dataCatagoryIs
let cfullyParsedDataIs = wr2.cfully + wr2.cParsed + wr2.cData + wr2.cIs; // fullyParsedDataIs
let cD_finalMergeIs = bas.cD + bas.cUnderscore + wr2.cfinal + wr2.cMerge + wr2.cIs; // D_finalMergeIs
let cdataStorageContextNameIs = wr2.cdata + wr2.cStorage + wr2.cContext + wr2.cName + wr2.cIs; // dataStorageContextNameIs
let cdataToStoreIs = wr2.cdata + wr2.cTo + wr2.cStore + wr2.cIs; // dataToStoreIs
let cdataCatagoryDetailsNameIs = wr2.cdata + wr2.cCatagory + wr2.cDetails + wr2.cName + wr2.cIs; // dataCatagoryDetailsNameIs
let ctempDataIs = wr2.ctemp + wr2.cData + wr2.cIs; // tempDataIs
let ctargetDataIs = wr2.ctarget + wr2.cData + wr2.cIs; // targetDataIs
let cpageNameIs = wr2.cpage + wr2.cName + wr2.cIs; // pageNameIs
let cdataToMergeIs = wr2.cdata + wr2.cTo + wr2.cMerge + wr2.cIs; // dataToMergeIs
let cdataToMergeElementCountIs = wr2.cdata + wr2.cTo + wr2.cMerge + wr2.cElement + wr2.cCount + wr2.cIs; // dataToMergeElementCountIs
let cdataToMergeElementCountIs1 = wr2.cdata + wr2.cTo + wr2.cMerge + wr2.cElement + wr2.cCount + wr2.cIs + wr2.c1; // dataToMergeElementCountIs1
let ccheckIfThePageNameIsNotAnEmptyString = wr2.ccheck + bas.cIf + wr2.cThe + wr2.cPage + wr2.cName + wr2.cIs + wr2.cNot + bas.cAn + wr2.cEmpty + wr2.cString; // checkIfThePageNameIsNotAnEmptyString
let cpageNameIsNotAnEmptyString = wr2.cpage + wr2.cName + wr2.cIs + wr2.cNot + bas.cAn + wr2.cEmpty + wr2.cString; // pageNameIsNotAnEmptyString
let cCheckIfTheDataCatagoryIsAnEmptyStringOrNot = wr2.cCheck + bas.cIf + wr2.cThe + wr2.cData + wr2.cCatagory + wr2.cIs + bas.cAn + wr2.cEmpty + wr2.cString + wr2.cOr + wr2.cNot; // CheckIfTheDataCatagoryIsAnEmptyStringOrNot
let cdataCatagoryIsNotAnEmptyString = wr2.cdata + wr2.cCatagory + wr2.cIs + wr2.cNot + bas.cAn + wr2.cEmpty + wr2.cString; // dataCatagoryIsNotAnEmptyString
let cdataCatagoryIsAnEmptyString = wr2.cdata + wr2.cCatagory + wr2.cIs + bas.cAn + wr2.cEmpty + wr2.cString; // dataCatagoryIsAnEmptyString
let ctargetDataContentIs = wr2.ctarget + wr2.cData + wr2.cContent + wr2.cIs; // targetDataContentIs
let cafterAttemptToMergeResultsAre = wr2.cafter + wr2.cAttempt + wr2.cTo + wr2.cMerge + wr2.cResults + wr2.cAre; // afterAttemptToMergeResultsAre
let cMergedDataIs = wr2.cMerged + wr2.cData + wr2.cIs; // MergedDataIs
let cpageNameIsAnEmptyString = wr2.capge + wr2.cName + wr2.cIs + bas.cAn + wr2.cEmpty + wr2.cString; // pageNameIsAnEmptyString
let cCaughtTheSpecialCaseThatWeAreMergingFlatList = wr2.cCaught + wr2.cThe + wr2.cSpecial + wr2.cCase + wr2.cThat + bas.cWe + wr2.cAre + wr2.cMerging + wr2.cFlat + wr2.cList; // CaughtTheSpecialCaseThatWeAreMergingFlatList
let cinsideTheForLoop = wr2.cinside + wr2.cThe + wr2.cFor + wr2.cLoop; // insideTheForLoop
let ckeyIs = wr2.ckey + wr2.cIs; // keyIs
let ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs = wr2.ctarget + wr2.cData + wr2.cIs + wr2.cModified + bas.cIn + wr2.cThe + wr2.cInput + wr2.cPass + wr2.cBy + wr2.cReference + wr2.cVariable + wr2.cContent + wr2.cIs; // targetDataIsModifiedInTheInputPassByReferenceVariableContentIs
let cdataObjectValueIs = wr2.cdata + wr2.cObject + wr2.cValue + wr2.cIs; // dataObjectValueIs
let celementNameIs = wr2.celement + wr2.cName + wr2.cIs; // elementNameIs
let cdataObjectIs = wr2.cdata + wr2.cObject + wr2.cIs; // dataObjectIs
let celementNamePatternIs = wr2.celement + wr2.cName + wr2.cPattern + wr2.cIs; // elementNamePatternIs
let celementCountIs = wr2.celement + wr2.cCount + wr2.cIs; // elementCountIs
let cERROR_Colon = wr2.cERROR + bas.cUnderscore + wr2.cColon; // ERROR_Colon
let cfileAndPathToLoadFromIs = wr2.cfile + wr2.cAnd + wr2.cPath + wr2.cTo + wr2.cLoad + wr2.cFrom + wr2.cIs; // fileAndPathToLoadFromIs
let cDoneLoadingDataFrom = wr2.cDone + wr2.cLoading + wr2.cData + wr2.cFrom; // DoneLoadingDataFrom
let cfileAndPathToWriteDataToIs = wr2.cfile + wr2.cAnd + wr2.cPath + wr2.cTo + wr2.cWrite + wr2.cData + wr2.cTo + wr2.cIs; // fileAndPathToWriteDataToIs
let cdataToWriteIs = wr2.cdata + wr2.cTo + wr2.cWrite + wr2.cIs; // dataToWriteIs
let cDataWasWrittenToTheFile = wr2.cData + wr2.cWas + wr2.cWritten + wr2.cTo + wr2.cThe + wr2.cFile; // DataWasWrittenToTheFile
let cPathThatShouldBeScannedIs = wr2.cPath + wr2.cThat + wr2.cShould + wr2.cBe + wr2.cScanned + wr2.cIs; // PathThatShouldBeScannedIs
let cfilesFoundAre = wr2.cfiles + wr2.cFound + wr2.cAre; // filesFoundAre
let cdirectorIs = wr2.cdiretor + wr2.cIs; // directorIs
let cdirectoryPathIs = wr2.cdirectory + wr2.cPath + wr2.cIs; // directoryPathIs
let csourceFolderIs = wr2.csource + wr2.cFolder + wr2.cIs; // sourceFolderIs
let cdestinationFolderIs = wr2.cdestination + wr2.cFolder + wr2.cIs; // destinationFolderIs
let ccopySuccessIs = wr2.ccopy + wr2.cSuccess + wr2.cIs; // copySuccessIs
let ccurrentVersionIs = wr2.ccurrent + wr2.cVersion + wr2.cIs; // currentVersionIs
let creleasedArchiveFilesListIs = wr2.creleased + wr2.cArchive + wr2.cFiles + wr2.cList + wr2.cIs; // releasedArchiveFilesListIs
let cfileIs = wr2.cfile + wr2.cIs; // fileIs
let cfileNameIs = wr2.cfileName + wr2.cIs; // fileNameIs
let creleaseFilesListIs = wr2.crelease + wr2.cFiles + wr2.cList + wr2.cIs; // releaseFilesListIs
let creleaseDateTimeStampIs = wr2.crelease + wr2.cDate + wr2.cTime + wr2.cStamp + wr2.cIs; // releaseDateTimeStampIs
let creleaseFileNameIs = wr2.crelease + wr2.cFileName + wr2.cIs; // releaseFileNameIs
let cDoneWritingTheZipFile = wr2.cDone + wr2.cWriting + wr2.cThe + wr2.cZip + wr2.cFile; // DoneWritingTheZipFile
let cSetTheReturnPackageSuccessFlagToTrue = wr2.cSet + wr2.cThe + wr2.cReturn + wr2.cPackage + wr2.cSuccess + wr2.cFlag + wr2.cTo + wr2.cTrue; // SetTheReturnPackageSuccessFlagToTrue
let ccurrentVersionAlreadyReleased = wr2.ccurrent + wr2.cVersion + wr2.cAlready + wr2.cReleased; // currentVersionAlreadyReleased
let cpackageSuccessIs = wr2.cpackage + wr2.cSuccess + wr2.cIs; // packageSuccessIs
let cRootPathBeforeProcessingIs = wr2.cRoot + wr2.cPath + wr2.cBefore + wr2.cProcessing + wr2.cIs; // RootPathBeforeProcessingIs
let cRootPathAfterProcessingIs = wr2.cRoot + wr2.cPath + wr2.cAfter + wr2.cProcessing + wr2.cIs; // RootPathAfterProcessingIs
let cSourceIs = wr2.cSource + wr2.cIs; // SourceIs
let ctargetIs = wr2.ctarget + wr2.cIs; // targetIs
let cErrorCouldNotCopyFile = wr2.cError + wr2.cCould + wr2.cNot + wr2.cCopy + wr2.cFile; // ErrorCouldNotCopyFile
let cErrorCouldNotCreateFolder = wr2.cError + wr2.cCould + wr2.cNot + wr2.cCreate + wr2.cFolder; // ErrorCouldNotCreateFolder
let csuccessfullCopyIs = wr2.csuccessfull + wr2.cCopy + wr2.cIs; // successfullCopyIs
let cErrorCouldNotCopyFolderContents = wr2.cError + wr2.cCould + wr2.cNot + wr2.cCopy + wr2.cFolder + wr2.cContents; // ErrorCouldNotCopyFolderContents
let cargumentValueIs = wr2.cargument + wr2.cValue + wr2.cIs; // argumentValueIs
let cconsolidatedArgumentModeIs = wr2.cconsolidated + wr2.cArgument + wr2.cMode + wr2.cIs; // consolidatedArgumentModeIs
let cPushingArgumentValueToReturnDataAsArrayElement = wr2.cPushing + wr2.cArgument + wr2.cValue + wr2.cTo + wr2.cReturn + wr2.cData + wr2.cAs + wr2.cArray + wr2.cElement; // PushingArgumentValueToReturnDataAsArrayElement
let cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse = wr2.cCalling + wr2.cAnalyze + wr2.cArgument + wr2.cIndex + wr2.c2 + wr2.cConsolidated + wr2.cArgument + wr2.cMode + wr2.cFalse; // CallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse
let cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue = wr2.cCalling + wr2.cAnalyze + wr2.cArgument + wr2.cIndex + wr2.c2 + wr2.cConsolidated + wr2.cArgument + wr2.cMode + wr2.cTrue; // CallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue
let cargumentValueLengthGreaterThanZero = wr2.cargument + wr2.cValue + wr2.cLength + wr2.cGreater + wr2.cThan + wr2.cZero; // argumentValueLengthGreaterThanZero
let cReturnArgumentValueSameAsItWasPassedIn = wr2.cReturn + wr2.cArgument + wr2.cValue + wr2.cSame + wr2.cAs + bas.cIt + wr2.cWas + wr2.cPassed + bas.cIn; // ReturnArgumentValueSameAsItWasPassedIn
let cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse = wr2.cCalling + wr2.cAnalyze + wr2.cArgument + wr2.cIndex + wr2.c3 + wr2.cConsolidated + wr2.cArgument + wr2.cMode + wr2.cFalse; // CallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse
let cCheckIfThereAreBracketsOrNoBrackets = wr2.cCheck + bas.cIf + wr2.cThere + wr2.cAre + wr2.cBrackets + wr2.cOr + bas.cNo + wr2.cBrackets; // CheckIfThereAreBracketsOrNoBrackets
let cBracketsWereFound = wr2.cBrackets + wr2.cWere + wr2.cFound; // BracketsWereFound
let cCheckIfThereIsRegularExpressionOrNot = wr2.cCheck + bas.cIf + wr2.cThere + wr2.cIs + wr2.cRegular + wr2.cExpression + wr2.cOr + wr2.cNot; // CheckIfThereIsRegularExpressionOrNot
let cRegularExpressionWasFound = wr2.cRegular + wr2.cExpression + wr2.cWas + wr2.cFound; // RegularExpressionWasFound
let cNoRegExpFound = wr2.cNo + phn.cReg + phn.cExp + wr2.cFound; // NoRegExpFound
let cBracketsAreFound = wr2.cBrackets + wr2.cAre + wr2.cFound; // BracketsAreFound
let cNoSecondaryCommandArgumentDelimiters = wr2.cNo + wr2.cSecondary + wr2.cCommand + wr2.cArgument + wr2.cDelimiters; // NoSecondaryCommandArgumentDelimiters
let cregularExpressionIs = wr2.cregular + wr2.cExpression + wr2.cIs; // regularExpressionIs
let cregExValueIs = phn.creg + bas.cEx + wr2.cValue + wr2.cIs; // regExValueIs
let cregularExpressionFlagsAre = wr2.cregular + wr2.cExpression + wr2.cFlags + wr2.cAre; // regularExpressionFlagsAre
let cregExFlagsIs = phn.creg + bas.cEx + wr2.cFlags + wr2.cIs; // regExFlagsIs
let cargumentValueContainsTheDelimiterLetsSplitIt = wr2.cargument + wr2.cValue + wr2.cContains + wr2.cThe + wr2.cDelimiter + wr2.cLets + wr2.cSplit + wr2.cIt; // argumentValueContainsTheDelimiterLetsSplitIt
let cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs = wr2.cargument + wr2.cValue + wr2.cAfter + wr2.cAttemptng + wr2.cTo + wr2.cRemove + wr2.cOpen + wr2.cBracket + wr2.cFrom + wr2.cAll + wr2.cArray + wr2.cElements + wr2.cIs; // argumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs
let cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs = wr2.cargument + wr2.cValue + wr2.cAfter + wr2.cAttempting + wr2.cTo + wr2.cRemove + wr2.cClose + wr2.cBracket + wr2.cFrom + wr2.cAll + wr2.cArray + wr2.cElements + wr2.cIs; // argumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs
let csecondaryCommandArgsDelimiterIs = wr2.csecondary + wr2.cCommand + wr2.cArgs + wr2.cDelimiter + wr2.cIs; // secondaryCommandArgsDelimiterIs
let cargumentArrayIs = wr2.cargument + wr2.cArray + wr2.cIs; // argumentArrayIs
let cformattingIs = wr2.cformatting + wr2.cIs; // formattingIs
let cdeltaTimeIs = wr2.cdelta + wr2.cTime + wr2.cIs; // deltaTimeIs
let cformatIs = wr2.cformat + wr2.cIs; // formatIs
let creturnDeltaTimeIs = wr2.ceturn + wr2.cDelta + wr2.cTime + wr2.cIs; // returnDeltaTimeIs
let csleepTimeIs = wr2.csleep + wr2.cTime + wr2.cIs; // sleepTimeIs
let cworkflowNameIs = wr2.cworkflow + wr2.cName + wr2.cIs; // workflowNameIs
let ccurrentWorkflowIs = wr2.ccurrent + wr2.cWorkflow + wr2.cIs; // currentWorkflowIs
let cworkflowValueIs = wr2.cworkflow + wr2.cValue + wr2.cIs; // workflowValueIs
let cdataHivePathArrayIs = wr2.cdata + wr2.cHive + wr2.cPath + wr2.cArray + wr2.cIs; // dataHivePathArrayIs
let ccontentsOfLeafDataHiveElementIs = wr2.ccontents + wr2.cOf + wr2.cLeaf + wr2.cData + wr2.cHive + wr2.cElement + wr2.cIs; // contentsOfLeafDataHiveElementIs
let centryIs = wr2.centry + wr2.cIs; // entryIs
let cattributeValueIs = wr2.cattribute + wr2.cValue + wr2.cIs; // attributeValueIs
let ckey2Is = wr2.ckey + wr2.c2 + wr2.cIs; // key2Is
let centityIs = wr2.centry + wr2.cIs; // entityIs
let cqueueNameSpaceIs = wr2.cqueue + wr2.cName + wr2.cSpace + wr2.cIs; // queueNameSpaceIs
let cstackNameSpaceIs = wr2.cstack + wr2.cName + wr2.cSpace + wr2.cIs; // stackNameSpaceIs
let cWarningStackColon = wr2.cWarning + wr2.cStack + wr2.cColon; // WarningStackColon
let cAlreadyExists = wr2.cAlready + wr2.cExists; // AlreadyExists
let cdoesNotExist = wr2.cdoes + wr2.cNot + wr2.cExist; // doesNotExist
let cisEmpty = wr2.cis + wr2.cEmpty; // isEmpty
let cContentsOfTheStackNamespace = wr2.cContents + wr2.cOf + wr2.cThe + wr2.cStack + wr2.cNamespace; // ContentsOfTheStackNamespace
let cwordDelimiterIs = wr2.cword + wr2.cDelimiter + wr2.cIs; // wordDelimiterIs
let cstringContainsAcronymIs = wr2.cstring + wr2.cContains + wr2.cAcronym + wr2.cIs; // stringContainsAcronymIs
let cErrorZipPackageReleaseFailed = wr2.cError + wr2.cZip + wr2.cPackage + wr2.cRelease + wr2.cFailed; // ErrorZipPackageReleaseFailed
let cminimumColorRangeIs = wr2.cminimum + wr2.cColor + wr2.cRange + wr2.cIs; // minimumColorRangeIs
let cmaximumColorRangeIs = wr2.cmaximum + wr2.cColor + wr2.cRange + wr2.cIs; // maximumColorRangeIs
let callSystemConstantsValidationDataIs = wr2.call + wr2.cSystem + wr2.cConstants + wr2.cValidation + wr2.cData + wr2.cIs; // allSystemConstantsValidationDataIs
let callClientConstantsValidationDataIs = wr2.call + wr2.cClient + wr2.cConstants + wr2.cValidation + wr2.cData + wr2.cIs; // allClientConstantsValidationDataIs
let cconstantLibraryDataIs = wr2.cconstant + wr2.cLibrary + wr2.cData + wr2.cIs; // constantLibraryDataIs
let cclientValidationDataIs = wr2.cclient + wr2.cValidation + wr2.cData + wr2.cIs; // clientValidationDataIs
let carrayValidationDataIs = wr2.carray + wr2.cValidation + wr2.cData + wr2.cIs; // arrayValidationDataIs
let cfilesListLimitIs = wr2.cfiles + wr2.cList + wr2.cLimit + wr2.cIs; // filesListLimitIs
let cenableLimitIs = wr2.cenable + wr2.cLimit + wr2.cIs; // enableLimitIs
let cfilesLimitIs = wr2.cfiles + wr2.cLimit + wr2.cIs; // filesLimitIs

// WARNING: Mixed string. Cannot determine what delimiter should be used to break up the string into words.
let cDetermineWordDelimiterMessage1 = wr2.cDetermine + wr2.cWord + wr2.cDelimiter + wr2.cMessage + wr2.c1; // DetermineWordDelimiterMessage1
let cDetermineWordDelimiterMessage2 = wr2.cDetermine + wr2.cWord + wr2.cDelimiter + wr2.cMessage + wr2.c2; // DetermineWordDelimiterMessage2
let cDetermineWordDelimiterMessage3 = wr2.cDetermine + wr2.cWord + wr2.cDelimiter + wr2.cMessage + wr2.c3; // DetermineWordDelimiterMessage3
let cDetermineWordDelimiterMessage4 = wr2.cDetermine + wr2.cWord + wr2.cDelimiter + wr2.cMessage + wr2.c4; // DetermineWordDelimiterMessage4
// WARNING: Mixed string. Cannot determine how words are delimited in the string. Unable to count words.
let cGetWordCountInStringMessage1 = wr2.cGet + wr2.cWord + wr2.cCount + wr2.cIn + wr2.cString + wr2.cMessage + wr2.c1; // GetWordCountInStringMessage1
let cGetWordCountInStringMessage2 = wr2.cGet + wr2.cWord + wr2.cCount + wr2.cIn + wr2.cString + wr2.cMessage + wr2.c2; // GetWordCountInStringMessage2
let cGetWordCountInStringMessage3 = wr2.cGet + wr2.cWord + wr2.cCount + wr2.cIn + wr2.cString + wr2.cMessage + wr2.c3; // GetWordCountInStringMessage3
// WARNING: Mixed string. Cannot get words from the string. Unable to determine words.
let cGetWordsArrayFromStringMessage1 = wr2.cGet + wr2.cWords + wr2.cArray + wr2.cFrom + wr2.cString + wr2.cMessage + wr2.c1; // GetWordsArrayFromStringMessage1
let cGetWordsArrayFromStringMessage2 = wr2.cGet + wr2.cWords + wr2.cArray + wr2.cFrom + wr2.cString + wr2.cMessage + wr2.c2; // GetWordsArrayFromStringMessage2
let cGetWordsArrayFromStringMessage3 = wr2.cGet + wr2.cWords + wr2.cArray + wr2.cFrom + wr2.cString + wr2.cMessage + wr2.c3; // GetWordsArrayFromStringMessage3
// Please enter a named command where the first word starts with a lower case letter and all other words in the named command start with an upper case letter:
let cCommandNamePrompt2 = wr2.cCommand + wr2.cName + wr2.cPrompt + wr2.c2; // CommandNamePrompt2
let cCommandNamePrompt3 = wr2.cCommand + wr2.cName + wr2.cPrompt + wr2.c3; // CommandNamePrompt3
let cCommandNamePrompt4 = wr2.cCommand + wr2.cName + wr2.cPrompt + wr2.c4; // CommandNamePrompt4
let cCommandNamePrompt5 = wr2.cCommand + wr2.cName + wr2.cPrompt + wr2.c5; // CommandNamePrompt5
// Please enter a list of command word abreviations/acronyms/aliases for the command word:
let cCommandWordAliasPrompt1 = wr2.cCommand + wr2.cWord + wr2.cAlias + wr2.cPrompt + wr2.c1; // CommandWordAliasPrompt1
let cCommandWordAliasPrompt2 = wr2.cCommand + wr2.cWord + wr2.cAlias + wr2.cPrompt + wr2.c2; // CommandWordAliasPrompt2
let cCommandWordAliasPrompt3 = wr2.cCommand + wr2.cWord + wr2.cAlias + wr2.cPrompt + wr2.c3; // CommandWordAliasPrompt3
// Please enter a string you would like to define as a constant in the constants system:
let cConstantPrompt1 = wr2.cConstant + wr2.cPrompt + wr2.c1; // ConstantPrompt1
let cConstantPrompt2 = wr2.cConstant + wr2.cPrompt + wr2.c2; // ConstantPrompt2
let cConstantPrompt3 = wr2.cConstant + wr2.cPrompt + wr2.c3; // ConstantPrompt3
// Please enter a coma separated list of strings you would like to define in the constants system:
let cConstantsListPrompt1 = wr2.cConstants + wr2.cList + wr2.cPrompt + wr2.c1; // ConstantsListPrompt1
let cConstantsListPrompt2 = wr2.cConstants + wr2.cList + wr2.cPrompt + wr2.c2; // ConstantsListPrompt2
let cConstantsListPrompt3 = wr2.cConstants + wr2.cList + wr2.cPrompt + wr2.c3; // ConstantsListPrompt3
// Please enter a coma separated list of strings you would like to search for common patterns:
let cConstantsListPatternSearchPrompt1 = wr2.cConstants + wr2.cList + wr2.cPattern + wr2.cSearch + wr2.cPrompt + wr2.c1; // ConstantsListPatternSearchPrompt1
let cConstantsListPatternSearchPrompt2 = wr2.cConstants + wr2.cList + wr2.cPattern + wr2.cSearch + wr2.cPrompt + wr2.c2; // ConstantsListPatternSearchPrompt2
let cConstantsListPatternSearchPrompt3 = wr2.cConstants + wr2.cList + wr2.cPattern + wr2.cSearch + wr2.cPrompt + wr2.c3; // ConstantsListPatternSearchPrompt3
// ERROR: Attempted to generate a suggested line of code to validate the constant, ' +
// 'but the constant is not formatted correctly, it should begin with a lower case "c". ' +
// 'Please reformat the constant correctly so a line of code can be generated for you.
let cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1 = wr2.cDetermine + wr2.cSuggested + wr2.cConstants + wr2.cValidation + wr2.cLine + wr2.cOf + wr2.cCode + wr2.cError + wr2.cMessage + wr2.c1; // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage1
let cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2 = wr2.cDetermine + wr2.cSuggested + wr2.cConstants + wr2.cValidation + wr2.cLine + wr2.cOf + wr2.cCode + wr2.cError + wr2.cMessage + wr2.c2; // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage2
let cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3 = wr2.cDetermine + wr2.cSuggested + wr2.cConstants + wr2.cValidation + wr2.cLine + wr2.cOf + wr2.cCode + wr2.cError + wr2.cMessage + wr2.c3; // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage3
let cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4 = wr2.cDetermine + wr2.cSuggested + wr2.cConstants + wr2.cValidation + wr2.cLine + wr2.cOf + wr2.cCode + wr2.cError + wr2.cMessage + wr2.c4; // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage4
let cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5 = wr2.cDetermine + wr2.cSuggested + wr2.cConstants + wr2.cValidation + wr2.cLine + wr2.cOf + wr2.cCode + wr2.cError + wr2.cMessage + wr2.c5; // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage5
let cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6 = wr2.cDetermine + wr2.cSuggested + wr2.cConstants + wr2.cValidation + wr2.cLine + wr2.cOf + wr2.cCode + wr2.cError + wr2.cMessage + wr2.c6; // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage6
let cSearchForPatternsInStringArrayMessage1 = wr2.cSearch + wr2.cFor + wr2.cPatterns + wr2.cIn + wr2.cString + wr2.cArray + wr2.cMessage + wr2.c1; // SearchForPatternsInStringArrayMessage1
// WARNING: The current string being searched contains a space character, we are going to skip comparison.
let cSearchForPatternsInStringArrayMessage2 = wr2.cSearch + wr2.cFor + wr2.cPatterns + wr2.cIn + wr2.cString + wr2.cArray + wr2.cMessage + wr2.c2; // SearchForPatternsInStringArrayMessage2
let cSearchForPatternsInStringArrayMessage3 = wr2.cSearch + wr2.cFor + wr2.cPatterns + wr2.cIn + wr2.cString + wr2.cArray + wr2.cMessage + wr2.c3; // SearchForPatternsInStringArrayMessage3
// WARNING: InputData was not an array or had an empty array.
let cSearchForPatternsInStringArrayMessage4 = wr2.cSearch + wr2.cFor + wr2.cPatterns + wr2.cIn + wr2.cString + wr2.cArray + wr2.cMessage + wr2.c4; // SearchForPatternsInStringArrayMessage4
// WARNING: No data to load, please specify a valid path & filename!
let cLoadDataFileMessage1 = wr2.cLoad + wr2.cData + wr2.cFile + wr2.cMessage + wr2.c1; // LoadDataFileMessage1
let cloadDataFileMessage2 = wr2.cLoad + wr2.cData + wr2.cFile + wr2.cMessage + wr2.c2; // loadDataFileMessage2
let cloadDataFileMessage3 = wr2.cLoad + wr2.cData + wr2.cFile + wr2.cMessage + wr2.c3; // loadDataFileMessage3
// ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another release.
let cdeployApplicationMessage1a = wr2.cdeploy + wr2.cApplication + wr2.cMessage + wr2.c1 + wr2.ca; // deployApplicationMessage1a
let cdeployApplicationMessage2a = wr2.cdeploy + wr2.cApplication + wr2.cMessage + wr2.c2 + wr2.ca; // deployApplicationMessage2a
// ERROR: Release failed because of a failure in the commands alias validation system. Please fix ASAP before attempting another release.
let cdeployApplicationMessage1b = wr2.cdeploy + wr2.cApplication + wr2.cMessage + wr2.c1 + wr2.cb; // deployApplicationMessage1b
let ccommandSequencerMessage1 = wr2.ccommand + wr2.cSequencer + wr2.cMessage + wr2.c1; // commandSequencerMessage1
let ccommandSequencerMessage2 = wr2.ccommand + wr2.cSequencer + wr2.cMessage + wr2.c2; // commandSequencerMessage2
let cworkflowMessage1 = wr2.cworkflow + wr2.cMessage + wr2.c1; // workflowMessage1
let cworkflowMessage2 = wr2.cworkflow + wr2.cMessage + wr2.c2; // workflowMessage2
let cworkflowMessage3 = wr2.cworkflow + wr2.cMessage + wr2.c3; // workflowMessage3
// After attempting to replace the secondaryCommandArgsDelimiter with the primaryCommandDelimiter commandString is:
let ccommandGeneratorMessage1 = wr2.ccommand + wr2.cGenerator + wr2.cMessage + wr2.c1; // commandGeneratorMessage1
// After attempting to replace the tertiaryCommandDelimiter with the secondaryCommandArgsDelimiter commandString is:
let ccommandGeneratorMessage2 = wr2.ccommand + wr2.cGenerator + wr2.cMessage + wr2.c2; // commandGeneratorMessage2
// WARNING: nominal.commandGenerator: Must enter a number greater than 0, number entered:
let ccommandGeneratorMessage3 = wr2.ccommand + wr2.cGenerator + wr2.cMessage + wr2.c3; // commandGeneratorMessage3
// WARNING: nominal.commandGenerator: Number entered for the number of commands to generate is not a number:
let ccommandGeneratorMessage4 = wr2.ccommand + wr2.cGenerator + wr2.cMessage + wr2.c4; // commandGeneratorMessage4
// WARNING: nominal.commandGenerator: The specified command:
let ccommandGeneratorMessage5 = wr2.ccommand + wr2.cGenerator + wr2.cMessage + wr2.c5; // commandGeneratorMessage5
// was not found, please enter a valid command and try again.
let ccommandGeneratorMessage6 = wr2.ccommand + wr2.cGenerator + wr2.cMessage + wr2.c6; // commandGeneratorMessage6
// Command can be called by passing parameters and bypass the prompt system.
let ccommandAliasGeneratorMessage1 = wr2.ccommand + wr2.cAlias + wr2.cGenerator + wr2.cMessage + wr2.c1; // commandAliasGeneratorMessage1
// EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
let ccommandAliasGeneratorMessage2 = wr2.ccommand + wr2.cAlias + wr2.cGenerator + wr2.cMessage + wr2.c2; // commandAliasGeneratorMessage2
// INVALID INPUT: Please enter a valid camel-case command name.
let ccommandAliasGeneratorMessage3 = wr2.ccommand + wr2.cAlias + wr2.cGenerator + wr2.cMessage + wr2.c3; // commandAliasGeneratorMessage3
// INVALID INPUT: Please enter a valid command word alias list.
let ccommandAliasGeneratorMessage4 = wr2.ccommand + wr2.cAlias + wr2.cGenerator + wr2.cMessage + wr2.c4; // commandAliasGeneratorMessage4
// INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.
let ccommandAliasGeneratorMessage5 = wr2.ccommand + wr2.cAlias + wr2.cGenerator + wr2.cMessage + wr2.c5; // commandAliasGeneratorMessage5
// INVALID INPUT: Please enter a valid constant value that contains more than 4 characters.
let cconstantsGeneratorMessage1 = wr2.cconstants + wr2.cGenerator + wr2.cMessage + wr2.c1; // constantsGeneratorMessage1
// WARNING: The constant has already been defined in the following library(ies):
let cconstantsGeneratorMessage2 = wr2.cconstants + wr2.cGenerator + wr2.cMessage + wr2.c2; // constantsGeneratorMessage2
// INVALID INPUT: Please enter a valid constant list.
let cconstantsGeneratorListMessage1 = wr2.cconstants + wr2.cGenerator + wr2.cList + wr2.cMessage + wr2.c1; // constantsGeneratorListMessage1
// PASSED: All duplicate command aliases validation tests!
let cvalidateCommandAliasesMessage1 = wr2.cvalidate + wr2.cCommand + wr2.cAliases + wr2.cMessage + wr2.c1; // validateCommandAliasesMessage1
// About to call the rule broker to process on the number of single quotes
let cgetCommandArgsMessage1 = wr2.cget + wr2.cCommand + wr2.cArgs + wr2.cMessage + wr2.c1; // getCommandArgsMessage1
// and determine if it-be even or odd
let cgetCommandArgsMessage2 = wr2.cget + wr2.cCommand + wr2.cArgs + wr2.cMessage + wr2.c2; // getCommandArgsMessage2
// WARNING: Command does not exist, please enter a valid command and try again!
let cexecuteCommandMessage1 = wr2.cexecute + wr2.cCommand + wr2.cMessage + wr2.c1; // executeCommandMessage1
// WARNING: lexical.parseBusinessRuleArgument: Invalid combination of inputs to the lexical.parseBusinessRuleArgument function!
let cparseBusinessRuleArgumentMessage1 = wr2.cparse + wr2.cBusiness + wr2.cRule + wr2.cArgument + wr2.cMessage + wr2.c1; // parseBusinessRuleArgumentMessage1
let cparseBusinessRuleArgumentMessage2 = wr2.cparse + wr2.cBusiness + wr2.cRule + wr2.cArgument + wr2.cMessage + wr2.c2; // parseBusinessRuleArgumentMessage2
// Caught the case that the user may have only specified a single data hive, such as the configuration data hive.
let cprintDataHiveAttributesMessage1 = wr2.cprint + wr2.cData + wr2.cHive + wr2.cAttributes + wr2.cMessage + wr2.c1; // printDataHiveAttributesMessage1
let cprintDataHiveAttributesMessage2 = wr2.cprint + wr2.cData + wr2.cHive + wr2.cAttributes + wr2.cMessage + wr2.c2; // printDataHiveAttributesMessage2
// ERROR: Please enter a valid name.space.attributeName for the system to print out attribute data from.
let cprintDataHiveAttributesMessage3 = wr2.cprint + wr2.cData + wr2.cHive + wr2.cAttributes + wr2.cMessage + wr2.c3; // printDataHiveAttributesMessage3
// Nothing to echo.
let cNothingToEcho = wr2.cNothing + wr2.cTo + wr2.cEcho; // NothingToEcho
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let cprompt01 = wr2.cprompt + wr2.c0 + wr2.c1; // prompt01
let cprompt02 = wr2.cprompt + wr2.c0 + wr2.c2; // prompt02
let cprompt03 = wr2.cprompt + wr2.c0 + wr2.c3; // prompt03
let cprintMessageToFile01 = wr2.cprint + wr2.cMessage + wr2.cTo + wr2.cFile + wr2.c0 + wr2.c1;
let cprintMessageToFile02 = wr2.cprint + wr2.cMessage + wr2.cTo + wr2.cFile + wr2.c0 + wr2.c2;
let cprintMessageToFile03 = wr2.cprint + wr2.cMessage + wr2.cTo + wr2.cFile + wr2.c0 + wr2.c3;

// Coded System Messages constant constants
let cdebugSettingsEnabledLogic01 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c0 + wr2.c1; // debugSettingsEnabledLogic01
let cdebugSettingsEnabledLogic02 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c0 + wr2.c2; // debugSettingsEnabledLogic02
let cdebugSettingsEnabledLogic03 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c0 + wr2.c3; // debugSettingsEnabledLogic03
let cdebugSettingsEnabledLogic04 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c0 + wr2.c4; // debugSettingsEnabledLogic04
let cdebugSettingsEnabledLogic05 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c0 + wr2.c5; // debugSettingsEnabledLogic05
let cdebugSettingsEnabledLogic06 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c0 + wr2.c6; // debugSettingsEnabledLogic06
let cdebugSettingsEnabledLogic07 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c0 + wr2.c7; // debugSettingsEnabledLogic07
let cdebugSettingsEnabledLogic08 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c0 + wr2.c8; // debugSettingsEnabledLogic08
let cdebugSettingsEnabledLogic09 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c0 + wr2.c9; // debugSettingsEnabledLogic09
let cdebugSettingsEnabledLogic10 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c1 + wr2.c0; // debugSettingsEnabledLogic10
let cdebugSettingsEnabledLogic11 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c1 + wr2.c1; // debugSettingsEnabledLogic11
let cdebugSettingsEnabledLogic12 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c1 + wr2.c2; // debugSettingsEnabledLogic12

module.exports = {
  [bas.cc + cDot]: cDot, // Dot
  [bas.cc + cCotedlvoire]: cCotedlvoire, // Cotedlvoire
  [bas.cc + cCaboVerde]: cCaboVerde, // CaboVerde
  [bas.cc + cCentralAfricanRepublic]: cCentralAfricanRepublic, // CentralAfricanRepublic
  [bas.cc + cCostaRica]: cCostaRica, // CostaRica
  [bas.cc + cDemocraticRepublicOfTheCongo]: cDemocraticRepublicOfTheCongo, // DemocraticRepublicOfTheCongo
  [bas.cc + cDominicanRepublic]: cDominicanRepublic, // cDominicanRepublic
  [bas.cc + cElSalvador]: cElSalvador, // ElSalvador
  [bas.cc + cEquatorialGuinea]: cEquatorialGuinea, // EquatorialGuinea
  [bas.cc + cGuineaBissau]: cGuineaBissau, // GuineaBissau
  [bas.cc + cHolySee]: cHolySee, // HolySee
  [bas.cc + cMarshallIslands]: cMarshallIslands, // MarshallIslands
  [bas.cc + cNewZealand]: cNewZealand, // NewZealand
  [bas.cc + cNorthKorea]: cNorthKorea, // NorthKorea
  [bas.cc + cNorthMacedonia]: cNorthMacedonia, // NorthMacedonia
  [bas.cc + cPapuaNewGuinea]: cPapuaNewGuinea, // PapuaNewGuinea
  [bas.cc + cSaintKitts]: cSaintKitts, // SaintKitts
  [bas.cc + cSaintLucia]: cSaintLucia, // SaintLucia
  [bas.cc + cSaintVincent]: cSaintVincent, // SaintVincent
  [bas.cc + cSanMarino]: cSanMarino, // SanMarino
  [bas.cc + cSaoTome]: cSaoTome, // SaoTome
  [bas.cc + cSaudiArabia]: cSaudiArabia, // SaudiArabia
  [bas.cc + cSierraLeone]: cSierraLeone, // SierraLeone
  [bas.cc + cSolomonIslands]: cSolomonIslands, // SolomonIslands
  [bas.cc + cSouthAfrica]: cSouthAfrica, // SouthAfrica
  [bas.cc + cSouthKorea]: cSouthKorea, // SouthKorea
  [bas.cc + cSouthSudan]: cSouthSudan, // SouthSudan
  [bas.cc + cSriLanka]: cSriLanka, // SriLanka
  [bas.cc + cTimorLeste]: cTimorLeste, // TimorLeste
  [bas.cc + cTrinidadAndTabago]: cTrinidadAndTabago, // TrinidadAndTabago
  [bas.cc + cUnitedArabEmirates]: cUnitedArabEmirates, // UnitedArabEmirates
  [bas.cc + cUnitedKingdom]: cUnitedKingdom, // UnitedKingdom
  [bas.cc + cUnitedStatesOfAmerica]: cUnitedStatesOfAmerica, // UnitedStatesOfAmmerica

  [bas.cc + cLowerCaseEnglishAlphabet]: cLowerCaseEnglishAlphabet, // LowerCaseEnglishAlphabet
  [bas.cc + cUpperCaseEnglishAlphabet]: cUpperCaseEnglishAlphabet, // UpperCaseEnglishAlphabet
  [bas.cc + cAllNumbers]: cAllNumbers, // AllNumbers
  [bas.cc + cMostSpecialCharacters]: cMostSpecialCharacters, // MostSpecialCharacters

  [bas.cc + cctrl_a]: cctrl_a, // ctrl_a
  [bas.cc + cctrl_b]: cctrl_b, // ctrl_b
  [bas.cc + cctrl_c]: cctrl_c, // ctrl_c
  [bas.cc + cctrl_d]: cctrl_d, // ctrl_d
  [bas.cc + cctrl_e]: cctrl_e, // ctrl_e
  [bas.cc + cctrl_f]: cctrl_f, // ctrl_f
  [bas.cc + cctrl_g]: cctrl_g, // ctrl_g
  [bas.cc + cctrl_h]: cctrl_h, // ctrl_h
  [bas.cc + cctrl_i]: cctrl_i, // ctrl_i
  [bas.cc + cctrl_j]: cctrl_j, // ctrl_j
  [bas.cc + cctrl_k]: cctrl_k, // ctrl_k
  [bas.cc + cctrl_l]: cctrl_l, // ctrl_l
  [bas.cc + cctrl_m]: cctrl_m, // ctrl_m
  [bas.cc + cctrl_n]: cctrl_n, // ctrl_n
  [bas.cc + cctrl_o]: cctrl_o, // ctrl_o
  [bas.cc + cctrl_p]: cctrl_p, // ctrl_p
  [bas.cc + cctrl_q]: cctrl_q, // ctrl_q
  [bas.cc + cctrl_r]: cctrl_r, // ctrl_r
  [bas.cc + cctrl_s]: cctrl_s, // ctrl_s
  [bas.cc + cctrl_t]: cctrl_t, // ctrl_t
  [bas.cc + cctrl_u]: cctrl_u, // ctrl_u
  [bas.cc + cctrl_v]: cctrl_v, // ctrl_v
  [bas.cc + cctrl_w]: cctrl_w, // ctrl_w
  [bas.cc + cctrl_x]: cctrl_x, // ctrl_x
  [bas.cc + cctrl_y]: cctrl_y, // ctrl_y
  [bas.cc + cctrl_z]: cctrl_z, // ctrl_z

  [bas.cc + cframeworkResourcesConfigurationPath]: cframeworkResourcesConfigurationPath, // cframeworkResourcesConfigurationPath
  [bas.cc + csystemConfigFileName]: csystemConfigFileName, // csystemConfigFileName
  [bas.cc + capplicationConfigFileName]: capplicationConfigFileName, // capplicationConfigFileName

  // Constants Filenames
  [bas.cc + cbasic_constants_js]: cbasic_constants_js, // basic_constants_js
  [bas.cc + cbusiness_constants_js]: cbusiness_constants_js, // business_constants_js
  [bas.cc + ccolor_constants_js]: ccolor_constants_js, // color_constants_js
  [bas.cc + ccommand_constants_js]: ccommand_constants_js, // command_constants_js
  [bas.cc + cconfiguration_constants_js]: cconfiguration_constants_js, // configuration_constants_js
  [bas.cc + cconstant_constants_js]: cconstant_constants_js, // constant_constant_js
  [bas.cc + ccountry_constants_js]: ccountry_constants_js, // country_constants_js
  [bas.cc + celement_constants_js]: celement_constants_js, // element_constants_js
  [bas.cc + cgeneric_constants_js]: cgeneric_constants_js, // generic_constants_js
  [bas.cc + cisotope_constants_js]: cisotope_constants_js, // isotope_constants_js
  [bas.cc + cknot_constants_js]: cknot_constants_js, // knot_constants_js
  [bas.cc + clanguage_constants_js]: clanguage_constants_js, // language_constants_js
  [bas.cc + cmessage_constants_js]: cmessage_constants_js, // message_constants_js
  [bas.cc + cnumeric_constants_js]: cnumeric_constants_js, // numeric_constants_js
  [bas.cc + cphonic_constants_js]: cphonic_constants_js, // phonic_constants_js
  [bas.cc + cshape_constants_js]: cshape_constants_js, // shape_constants_js
  [bas.cc + csystem_constants_js]: csystem_constants_js, // system_constants_js
  [bas.cc + cunit_constants_js]: cunit_constants_js, // unit_constants_js
  [bas.cc + cword_constants_js]: cword_constants_js, // word_constants_js

  // Message constant constants
  // Logging constant constants
  [bas.cc + cBEGIN_Function]: cBEGIN_Function, // BEGIN_Function
  [bas.cc + cEND_Function]: cEND_Function, // END_Function
  [bas.cc + cinputData]: cinputData, // inputData
  [bas.cc + cInputData]: cInputData, // InputData
  [bas.cc + cinputMetaData]: cinputMetaData, // inputMetaData
  [bas.cc + cInputMetaData]: cInputMetaData, // InputMetaData
  [bas.cc + cinputDataIs]: cinputDataIs, // inputDataIs
  [bas.cc + cinputMetaDataIs]: cinputMetaDataIs, // inputMetaDataIs
  [bas.cc + creturnDataIs]: creturnDataIs, // returnDataIs
  [bas.cc + cSpaceIsColonSpace]: cSpaceIsColonSpace, // cSpaceIsColonSpace

  // System Messages constant constants
  [bas.cc + cCharacterGenerationMessage1]: cCharacterGenerationMessage1, // cCharacterGenerationMessage1
  [bas.cc + cCharacterGenerationMessage2]: cCharacterGenerationMessage2, // cCharacterGenerationMessage2
  [bas.cc + cCharacterGenerationMessage3]: cCharacterGenerationMessage3, // cCharacterGenerationMessage3
  [bas.cc + cCharacterGenerationMessage4]: cCharacterGenerationMessage4, // cCharacterGenerationMessage4
  [bas.cc + cCharacterGenerationMessage5]: cCharacterGenerationMessage5, // cCharacterGenerationMessage5
  [bas.cc + cMathOperationsMessage1]: cMathOperationsMessage1, // cMathOperationsMessage1
  [bas.cc + cnumberOfCharactersToGenerateIs]: cnumberOfCharactersToGenerateIs, // cnumberOfCharactersToGenerateIs
  [bas.cc + cgenerateSpecialCharactersIs]: cgenerateSpecialCharactersIs, // cgenerateSpecialCharactersIs
  [bas.cc + callowableSpecialCharactersIs]: callowableSpecialCharactersIs, // callowableSpecialCharactersIs
  [bas.cc + cspecifiedSuffixAndDomainIs]: cspecifiedSuffixAndDomainIs, // cspecifiedSuffixAndDomainIs
  [bas.cc + cfailureModeIs]: cfailureModeIs, // cfailureModeIs
  [bas.cc + cprefixIs]: cprefixIs, // cprefixIs
  [bas.cc + csuffixIs]: csuffixIs, // csuffixIs
  [bas.cc + cWithoutTheAtSymbol]: cWithoutTheAtSymbol, // cWithoutTheAtSymbol
  [bas.cc + cWithoutThePrefix]: cWithoutThePrefix, // cWithoutThePrefix
  [bas.cc + cWithoutTheSuffix]: cWithoutTheSuffix, // cWithoutTheSuffix
  [bas.cc + cWithoutTheAtSymbolAndPrefix]: cWithoutTheAtSymbolAndPrefix, // cWithoutTheAtSymbolAndPrefix
  [bas.cc + cDEFAULTWithoutTheAtSymbolAndPrefix]: cDEFAULTWithoutTheAtSymbolAndPrefix, // cDEFAULTWithoutTheAtSymbolAndPrefix
  [bas.cc + cdomainNameIs]: cdomainNameIs, // cdomainNameIs
  [bas.cc + cnumberOfPrefixCharactersIs]: cnumberOfPrefixCharactersIs, // cnumberOfPrefixCharactersIs
  [bas.cc + cnumberOfSuffixCharactersIs]: cnumberOfSuffixCharactersIs, // cnumberOfSuffixCharactersIs
  [bas.cc + cWithoutTheDotSymbol]: cWithoutTheDotSymbol, // cWithoutTheDotSymbol
  [bas.cc + cWithoutTheAtAndDotSymbols]: cWithoutTheAtAndDotSymbols, // cWithoutTheAtAndDotSymbols
  [bas.cc + cWithoutTheDomainName]: cWithoutTheDomainName, // cWithoutTheDomainName
  [bas.cc + cWithoutTheAtSymbolAndDomainName]: cWithoutTheAtSymbolAndDomainName, // cWithoutTheAtSymbolAndDomainName
  [bas.cc + cWithoutTheDotAndDomainName]: cWithoutTheDotAndDomainName, // cWithoutTheDotAndDomainName
  [bas.cc + cWithoutTheAtSymbolDotAndDomainName]: cWithoutTheAtSymbolDotAndDomainName, // cWithoutTheAtSymbolDotAndDomainName
  [bas.cc + cWithoutTheDotAndPrefix]: cWithoutTheDotAndPrefix, // cWithoutTheDotAndPrefix
  [bas.cc + cWithoutTheAtSymbolAndSuffix]: cWithoutTheAtSymbolAndSuffix, // cWithoutTheAtSymbolAndSuffix
  [bas.cc + cWithoutTheDotAndSuffix]: cWithoutTheDotAndSuffix, // cWithoutTheDotAndSuffix
  [bas.cc + cWithoutTheAtSymbolDotAndPrefix]: cWithoutTheAtSymbolDotAndPrefix, // cWithoutTheAtSymbolDotAndPrefix
  [bas.cc + cWithoutTheAtSymbolDotAndSuffix]: cWithoutTheAtSymbolDotAndSuffix, // cWithoutTheAtSymbolDotAndSuffix
  [bas.cc + cWithoutTheAtSymbolDotPrefixAndSuffix]: cWithoutTheAtSymbolDotPrefixAndSuffix, // cWithoutTheAtSymbolDotPrefixAndSuffix
  [bas.cc + cWithoutThePrefixAndDomainName]: cWithoutThePrefixAndDomainName, // cWithoutThePrefixAndDomainName
  [bas.cc + cWithoutTheSuffixAndDomainName]: cWithoutTheSuffixAndDomainName, // cWithoutTheSuffixAndDomainName
  [bas.cc + cWithoutThePrefixAndSuffix]: cWithoutThePrefixAndSuffix, // cWithoutThePrefixAndSuffix
  [bas.cc + cWithoutThePrefixSuffixAndDomainName]: cWithoutThePrefixSuffixAndDomainName, // cWithoutThePrefixSuffixAndDomainName
  [bas.cc + cWithoutTheAtSymbolPrefixAndDomainName]: cWithoutTheAtSymbolPrefixAndDomainName, // cWithoutTheAtSymbolPrefixAndDomainName
  [bas.cc + cWithoutTheDotPrefixAndDomainName]: cWithoutTheDotPrefixAndDomainName, // cWithoutTheDotPrefixAndDomainName
  [bas.cc + cWithoutTheAtSymbolSuffixAndDomainName]: cWithoutTheAtSymbolSuffixAndDomainName, // cWithoutTheAtSymbolSuffixAndDomainName
  [bas.cc + cWithoutTheDotSuffixAndDomainName]: cWithoutTheDotSuffixAndDomainName, // cWithoutTheDotSuffixAndDomainName
  [bas.cc + cWithoutTheAtSymbolPrefixSuffixAndDomainName]: cWithoutTheAtSymbolPrefixSuffixAndDomainName, // cWithoutTheAtSymbolPrefixSuffixAndDomainName
  [bas.cc + cWithoutTheDotPrefixSuffixAndDomainName]: cWithoutTheDotPrefixSuffixAndDomainName, // cWithoutTheDotPrefixSuffixAndDomainName
  [bas.cc + cWithoutThePrefixSuffixAndAtSymbol]: cWithoutThePrefixSuffixAndAtSymbol, // cWithoutThePrefixSuffixAndAtSymbol
  [bas.cc + cWithoutThePrefixSuffixAndDot]: cWithoutThePrefixSuffixAndDot, // cWithoutThePrefixSuffixAndDot
  [bas.cc + cIndexOfTheSpace]: cIndexOfTheSpace, // cIndexOfTheSpace
  [bas.cc + cisResolvingAs]: cisResolvingAs, // cisResolvingAs
  [bas.cc + cparsedStringSpaceTerm]: cparsedStringSpaceTerm, // cparsedStringSpaceTerm
  [bas.cc + cstring1Is]: cstring1Is, // cstring1Is
  [bas.cc + cstring2Is]: cstring2Is, // cstring2Is
  [bas.cc + cvariation0ValueIs]: cvariation0ValueIs, // cvariation0ValueIs
  [bas.cc + cvariation1ValueIs]: cvariation1ValueIs, // cvariation1ValueIs
  [bas.cc + ciValueIs]: ciValueIs, // ciValueIs
  [bas.cc + cjValueIs]: cjValueIs, // cjValueIs
  [bas.cc + cdeletionCostIs]: cdeletionCostIs, // cdeletionCostIs
  [bas.cc + cinsertionCostIs]: cinsertionCostIs, // cinsertionCostIs
  [bas.cc + csubstitutionCostIs]: csubstitutionCostIs, // csubstitutionCostIs
  [bas.cc + ccamelCaseWordCountIs]: ccamelCaseWordCountIs, // ccamelCaseWordCountIs
  [bas.cc + ccontainsAcronymIs]: ccontainsAcronymIs, // ccontainsAcronymIs
  [bas.cc + cspacesCountIs]: cspacesCountIs, // cspacesCountIs
  [bas.cc + cperiodCountIs]: cperiodCountIs, // cperiodCountIs
  [bas.cc + cdashCountIs]: cdashCountIs, // cdashCountIs
  [bas.cc + cunderscoreCountIs]: cunderscoreCountIs, // cunderscoreCountIs
  [bas.cc + cstringDeltaValueIs]: cstringDeltaValueIs, // cstringDeltaValueIs
  [bas.cc + cFilenamesMatch]: cFilenamesMatch, // cFilenamesMatch
  [bas.cc + cFilenamesDoNotMatch]: cFilenamesDoNotMatch, // cFilenamesDoNotMatch
  [bas.cc + cArrayElementsMatch]: cArrayElementsMatch, // cArrayElementsMatch
  [bas.cc + cArrayElementsDoNotMatch]: cArrayElementsDoNotMatch, // cArrayElementsDoNotMatch
  [bas.cc + clineArray2Is]: clineArray2Is, // clineArray2Is
  [bas.cc + cSuggestedLineOfCodeIs]: cSuggestedLineOfCodeIs, // cSuggestedLineOfCodeIs
  [bas.cc + cErrorUnknownConstantFile]: cErrorUnknownConstantFile, // cErrorUnknownConstantFile
  [bas.cc + cconstantsTypesKeysIs]: cconstantsTypesKeysIs, // cconstantsTypesKeysIs
  [bas.cc + cconstantTypeKeyIs]: cconstantTypeKeyIs, // cconstantTypeKeyIs
  [bas.cc + cconstantTypeValuesIs]: cconstantTypeValuesIs, // cconstantTypeValuesIs
  [bas.cc + cconstantsKeysIs]: cconstantsKeysIs, // cconstantsKeysIs
  [bas.cc + cconstantKeyIs]: cconstantKeyIs, // cconstantKeyIs
  [bas.cc + cconstantActualValueIs]: cconstantActualValueIs, // cconstantActualValueIs
  [bas.cc + cconstantNameIs]: cconstantNameIs, // cconstantNameIs
  [bas.cc + cconstantValueIs]: cconstantValueIs, // cconstantValueIs
  [bas.cc + cdeltaLengthIs]: cdeltaLengthIs, // cdeltaLengthIs
  [bas.cc + crecursiveSubStringIs]: crecursiveSubStringIs, // crecursiveSubStringIs
  [bas.cc + cmaxStringLengthIs]: cmaxStringLengthIs, // cmaxStringLengthIs
  [bas.cc + cminStringLengthIs]: cminStringLengthIs, // cminStringLengthIs
  [bas.cc + ccurrentMasterStringArrayElementIs]: ccurrentMasterStringArrayElementIs, // ccurrentMasterStringArrayElementIs
  [bas.cc + cConstantDoesNotExist]: cConstantDoesNotExist, // cConstantDoesNotExist
  [bas.cc + cConstantDoesExist]: cConstantDoesExist, // cConstantDoesExist
  [bas.cc + cBEGIN_ithLoop]: cBEGIN_ithLoop, // cBEGIN_ithLoop
  [bas.cc + cBEGIN_ithIteration]: cBEGIN_ithIteration, // cBEGIN_ithIteration
  [bas.cc + cBEGIN_jthLoop]: cBEGIN_jthLoop, // cBEGIN_jthLoop
  [bas.cc + cBEGIN_kthIteration]: cBEGIN_kthIteration, // cBEGIN_kthIteration
  [bas.cc + cEND_ithLoop]: cEND_ithLoop, // cEND_ithLoop
  [bas.cc + cEND_ithIteration]: cEND_ithIteration, // cEND_ithIteration
  [bas.cc + cEND_jthLoop]: cEND_jthLoop, // cEND_jthLoop
  [bas.cc + cEND_kthIteration]: cEND_kthIteration, // cEND_kthIteration
  [bas.cc + ccurrentCommandIs]: ccurrentCommandIs, // ccurrentCommandIs
  [bas.cc + caliasListIs]: caliasListIs, // caliasListIs
  [bas.cc + ccurrentAliasIs]: ccurrentAliasIs, // ccurrentAliasIs
  [bas.cc + cduplicateAliasCountIs]: cduplicateAliasCountIs, // cduplicateAliasCountIs
  [bas.cc + cduplicateCommandAliasIs]: cduplicateCommandAliasIs, // cduplicateCommandAliasIs
  [bas.cc + ccommandWordAliasesBeforeChangeIs]: ccommandWordAliasesBeforeChangeIs, // ccommandWordAliasesBeforeChangeIs
  [bas.cc + ccommandWordAliasesAfterChangeIs]: ccommandWordAliasesAfterChangeIs, // ccommandWordAliasesAfterChangeIs
  [bas.cc + cmasterCommandWordAlisesArrayIs]: cmasterCommandWordAlisesArrayIs, // cmasterCommandWordAlisesArrayIs
  [bas.cc + cmasterArrayIndexIs]: cmasterArrayIndexIs, // cmasterArrayIndexIs
  [bas.cc + cCommandAliasesAre]: cCommandAliasesAre, // cCommandAliasesAre
  [bas.cc + cexpandedLehmerCodeArrayIs]: cexpandedLehmerCodeArrayIs, // cexpandedLehmerCodeArrayIs
  [bas.cc + cindexOfExpansionIs]: cindexOfExpansionIs, // cindexOfExpansionIs
  [bas.cc + carrayToBeExpandedIs]: carrayToBeExpandedIs, // carrayToBeExpandedIs
  [bas.cc + climitOfExpansionIs]: climitOfExpansionIs, // climitOfExpansionIs
  [bas.cc + cpushingLehmerCodeArray1ToReturnDataValue]: cpushingLehmerCodeArray1ToReturnDataValue, // cpushingLehmerCodeArray1ToReturnDataValue
  [bas.cc + creturnDataAfterPushIs]: creturnDataAfterPushIs, // creturnDataAfterPushIs
  [bas.cc + creturnDataAfterLevel1Is]: creturnDataAfterLevel1Is, // creturnDataAfterLevel1Is
  [bas.cc + carrayToBeExpandedDotLengthIs]: carrayToBeExpandedDotLengthIs, // carrayToBeExpandedDotLengthIs
  [bas.cc + creturnDataDotLengthIs]: creturnDataDotLengthIs, // creturnDataDotLengthIs
  [bas.cc + creturnDataBeforePopIs]: creturnDataBeforePopIs, // creturnDataBeforePopIs
  [bas.cc + creturnDataAfterPopIs]: creturnDataAfterPopIs, // creturnDataAfterPopIs
  [bas.cc + cmasterTempReturnDataBeforeRecursiveCallIs]: cmasterTempReturnDataBeforeRecursiveCallIs, // cmasterTempReturnDataBeforeRecursiveCallIs
  [bas.cc + ctempReturnData1Is]: ctempReturnData1Is, // ctempReturnData1Is
  [bas.cc + ctempReturnData1DotLengthIs]: ctempReturnData1DotLengthIs, // ctempReturnData1DotLengthIs
  [bas.cc + cpushingTempReturnData1Kvalue]: cpushingTempReturnData1Kvalue, // cpushingTempReturnData1Kvalue
  [bas.cc + cmasterTempReturnDataAfterRecursiveCallIs]: cmasterTempReturnDataAfterRecursiveCallIs, // cmasterTempReturnDataAfterRecursiveCallIs
  [bas.cc + clookupIndexIs]: clookupIndexIs, // clookupIndexIs
  [bas.cc + clookupValueIs]: clookupValueIs, // clookupValueIs
  [bas.cc + cDataCatagoryShouldBe]: cDataCatagoryShouldBe, // cDataCatagoryShouldBe
  [bas.cc + cDataCatagoryDetailNameShouldBe]: cDataCatagoryDetailNameShouldBe, // cDataCatagoryDetailNameShouldBe
  [bas.cc + cKeywordNameShouldBe]: cKeywordNameShouldBe, // cKeywordNameShouldBe
  [bas.cc + cpathElementIs]: cpathElementIs, // cpathElementIs
  [bas.cc + ccaseIEqual0]: ccaseIEqual0, // ccaseIEqual0
  [bas.cc + ccasePathElementEqual]: ccasePathElementEqual, // ccasePathElementEqual
  [bas.cc + ccaseElse]: ccaseElse, // ccaseElse
  [bas.cc + creturnDataSoFarIs]: creturnDataSoFarIs, // creturnDataSoFarIs
  [bas.cc + cpathArrayIs]: cpathArrayIs, // cpathArrayIs
  [bas.cc + ccurrentPathElementIs]: ccurrentPathElementIs, // ccurrentPathElementIs
  [bas.cc + cAttemptingToLoadXmlData]: cAttemptingToLoadXmlData, // cAttemptingToLoadXmlData
  [bas.cc + cAttemptingToLoadCsvData]: cAttemptingToLoadCsvData, // cAttemptingToLoadCsvData
  [bas.cc + cAttemptingToLoadJsonData]: cAttemptingToLoadJsonData, // cAttemptingToLoadJsonData
  [bas.cc + cLoadedDataIs]: cLoadedDataIs, // cLoadedDataIs
  [bas.cc + cattributeArrayIs]: cattributeArrayIs, // cattributeArrayIs
  [bas.cc + cattributeArray0Is]: cattributeArray0Is, // cattributeArray0Is
  [bas.cc + carrayIs]: carrayIs, // carrayIs
  [bas.cc + cvalueIs]: cvalueIs, // cvalueIs
  [bas.cc + cmyFunctionIs]: cmyFunctionIs, // cmyFunctionIs
  [bas.cc + carrayInputObjectIsNotAnArray]: carrayInputObjectIsNotAnArray, // carrayInputObjectIsNotAnArray
  [bas.cc + cTheValueWasFoundInTheArray]: cTheValueWasFoundInTheArray, // cTheValueWasFoundInTheArray
  [bas.cc + cTheValueWasNotFoundInTheArray]: cTheValueWasNotFoundInTheArray, // cTheValueWasNotFoundInTheArray
  [bas.cc + coriginalStringIs]: coriginalStringIs, // coriginalStringIs
  [bas.cc + cindexIs]: cindexIs, // cindexIs
  [bas.cc + creplacementIs]: creplacementIs, // creplacementIs
  [bas.cc + cDEPLOY_APPLICATION]: cDEPLOY_APPLICATION, // cDEPLOY_APPLICATION
  [bas.cc + cRELEASE_APPLICATION]: cRELEASE_APPLICATION, // cRELEASE_APPLICATION
  [bas.cc + cDeploymentWasCompleted]: cDeploymentWasCompleted, // cDeploymentWasCompleted
  [bas.cc + cDeploymentFailed]: cDeploymentFailed, // cDeploymentFailed
  [bas.cc + cReleaseFailed]: cReleaseFailed, // cReleaseFailed
  // [bas.cc + cinputDataIis]: cinputDataIis, // cinputDataIis
  [bas.cc + caggregateCommandStringIs]: caggregateCommandStringIs, // caggregateCommandStringIs
  [bas.cc + cmetaDataParametersIs]: cmetaDataParametersIs, // cmetaDataParametersIs
  [bas.cc + cmetaDataParametersLengthIs]: cmetaDataParametersLengthIs, // cmetaDataParametersLengthIs
  [bas.cc + cmetaDataPathAndFilenameIs]: cmetaDataPathAndFilenameIs, // cmetaDataPathAndFilenameIs
  [bas.cc + cpathAndFilenameIs]: cpathAndFilenameIs, // cpathAndFilenameIs
  [bas.cc + ccontentsAre]: ccontentsAre, // ccontentsAre
  [bas.cc + ccontentsOfDare]: ccontentsOfDare, // ccontentsOfDare
  [bas.cc + cBEGIN_ithIterationOfInputDataArray]: cBEGIN_ithIterationOfInputDataArray, // cBEGIN_ithIterationOfInputDataArray
  [bas.cc + ccurrentRuleIs]: ccurrentRuleIs, // ccurrentRuleIs
  [bas.cc + crulesIs]: crulesIs, // crulesIs
  [bas.cc + cruleInputDataIs]: cruleInputDataIs, // cruleInputDataIs
  [bas.cc + cruleInputMetaData]: cruleInputMetaData, // cruleInputMetaData
  [bas.cc + cBusinessRuleStartTimeIs]: cBusinessRuleStartTimeIs, // cBusinessRuleStartTimeIs
  [bas.cc + cBusinessRuleEndTimeIs]: cBusinessRuleEndTimeIs, // cBusinessRuleEndTimeIs
  [bas.cc + cBusinessRuleRunTimeIs]: cBusinessRuleRunTimeIs, // cBusinessRuleRunTimeIs
  [bas.cc + ccommandStringBeforeAttemptedDelimiterSwapIs]: ccommandStringBeforeAttemptedDelimiterSwapIs, // ccommandStringBeforeAttemptedDelimiterSwapIs
  [bas.cc + creplaceCharacterWithCharacterRuleIs]: creplaceCharacterWithCharacterRuleIs, // creplaceCharacterWithCharacterRuleIs
  [bas.cc + cRuleOutputIs]: cRuleOutputIs, // cRuleOutputIs
  [bas.cc + ccamelCaseCommandNameArrayIs]: ccamelCaseCommandNameArrayIs, // ccamelCaseCommandNameArrayIs
  [bas.cc + ccurrentCommandWordIs]: ccurrentCommandWordIs, // ccurrentCommandWordIs
  [bas.cc + cPARSER_ERROR]: cPARSER_ERROR, // cPARSER_ERROR
  [bas.cc + ccommandAliasDataStructureIs]: ccommandAliasDataStructureIs, // ccommandAliasDataStructureIs
  [bas.cc + cuserDefinedConstantIs]: cuserDefinedConstantIs, // cuserDefinedConstantIs
  [bas.cc + cwordCountIs]: cwordCountIs, // cwordCountIs
  [bas.cc + cwordsArrayIs]: cwordsArrayIs, // cwordsArrayIs
  [bas.cc + cOptimizedConstantDefinitionForWord]: cOptimizedConstantDefinitionForWord, // cOptimizedConstantDefinitionForWord
  [bas.cc + cuserDefinedConstantListIs]: cuserDefinedConstantListIs, // cuserDefinedConstantListIs
  [bas.cc + cuserDefinedConstantListContainsComas]: cuserDefinedConstantListContainsComas, // cuserDefinedConstantListContainsComas
  [bas.cc + cuserDefinedConstantsListArrayIs]: cuserDefinedConstantsListArrayIs, // cuserDefinedConstantsListArrayIs
  [bas.cc + cuserDefinedConstantsListDoesNotContainComas]: cuserDefinedConstantsListDoesNotContainComas, // cuserDefinedConstantsListDoesNotContainComas
  [bas.cc + ccommonPatternsArrayIs]: ccommonPatternsArrayIs, // ccommonPatternsArrayIs
  [bas.cc + cbusinessRuleCounterIs]: cbusinessRuleCounterIs, // cbusinessRuleCounterIs
  [bas.cc + cbusinessRulePerformanceSumIs]: cbusinessRulePerformanceSumIs, // cbusinessRulePerformanceSumIs
  [bas.cc + cDoneBusinessRulePerformanceSumIs]: cDoneBusinessRulePerformanceSumIs, // cDoneBusinessRulePerformanceSumIs
  [bas.cc + caverageIs]: caverageIs, // caverageIs
  [bas.cc + cbusinessRulePerformanceStdSumIs]: cbusinessRulePerformanceStdSumIs, // cbusinessRulePerformanceStdSumIs
  [bas.cc + cDoneBusinessRulePerformanceStdSumIs]: cDoneBusinessRulePerformanceStdSumIs, // cDoneBusinessRulePerformanceStdSumIs
  [bas.cc + cstandardDevIs]: cstandardDevIs, // cstandardDevIs
  [bas.cc + ccommandCounterIs]: ccommandCounterIs, // ccommandCounterIs
  [bas.cc + ccommandPerformanceSumIs]: ccommandPerformanceSumIs, // ccommandPerformanceSumIs
  [bas.cc + cDoneCommandPerformanceSumIs]: cDoneCommandPerformanceSumIs, // cDoneCommandPerformanceSumIs
  [bas.cc + ccommandPerformanceStdSumIs]: ccommandPerformanceStdSumIs, // ccommandPerformanceStdSumIs
  [bas.cc + cDoneCommandPerformanceStdSumIs]: cDoneCommandPerformanceStdSumIs, // cDoneCommandPerformanceStdSumIs
  [bas.cc + ccolorKeysIs]: ccolorKeysIs, // ccolorKeysIs
  [bas.cc + ccurrentColorNameIs]: ccurrentColorNameIs, // ccurrentColorNameIs
  [bas.cc + ccurrentColorObjectIs]: ccurrentColorObjectIs, // ccurrentColorObjectIs
  [bas.cc + ccurrentColorHexValueIs]: ccurrentColorHexValueIs, // ccurrentColorHexValueIs
  [bas.cc + cruleOutputIs]: cruleOutputIs, // cruleOutputIs
  [bas.cc + cBeginPhase1ConstantsValidation]: cBeginPhase1ConstantsValidation, // cBeginPhase1ConstantsValidation
  [bas.cc + cEndPhase1ConstantsValidation]: cEndPhase1ConstantsValidation, // cEndPhase1ConstantsValidation
  [bas.cc + cBeginPhase2ConstantsValidation]: cBeginPhase2ConstantsValidation, // cBeginPhase2ConstantsValidation
  [bas.cc + cEndPhase2ConstantsValidation]: cEndPhase2ConstantsValidation, // cEndPhase2ConstantsValidation
  [bas.cc + cconstantsPathIs]: cconstantsPathIs, // cconstantsPathIs
  [bas.cc + cresolvedConstantsPath_BasicIs]: cresolvedConstantsPath_BasicIs, // cresolvedConstantsPath_BasicIs
  [bas.cc + cresolvedConstantsPath_BusinessIs]: cresolvedConstantsPath_BusinessIs, // cresolvedConstantsPath_BusinessIs
  [bas.cc + cresolvedConstantsPath_ColorIs]: cresolvedConstantsPath_ColorIs, // cresolvedConstantsPath_ColorIs
  [bas.cc + cresolvedConstantsPath_CommandIs]: cresolvedConstantsPath_CommandIs, // cresolvedConstantsPath_CommandIs
  [bas.cc + cresolvedConstantsPath_ConfigurationIs]: cresolvedConstantsPath_ConfigurationIs, // cresolvedConstantsPath_ConfigurationIs
  [bas.cc + cresolvedConstantsPath_CountryIs]: cresolvedConstantsPath_CountryIs, // cresolvedConstantsPath_CountryIs
  [bas.cc + cresolvedConstantsPath_ElementIs]: cresolvedConstantsPath_ElementIs, // cresolvedConstantsPath_ElementIs
  [bas.cc + cresolvedConstantsPath_GenericIs]: cresolvedConstantsPath_GenericIs, // cresolvedConstantsPath_GenericIs
  [bas.cc + cresolvedConstantsPath_IsotopeIs]: cresolvedConstantsPath_IsotopeIs, // cresolvedConstantsPath_IsotopeIs
  [bas.cc + cresolvedConstantsPath_KnotIs]: cresolvedConstantsPath_KnotIs, // cresolvedConstantsPath_KnotIs
  [bas.cc + cresolvedConstantsPath_LanguageIs]: cresolvedConstantsPath_LanguageIs, // cresolvedConstantsPath_LanguageIs
  [bas.cc + cresolvedConstantsPath_MessageIs]: cresolvedConstantsPath_MessageIs, // cresolvedConstantsPath_MessageIs
  [bas.cc + cresolvedConstantsPath_NumericIs]: cresolvedConstantsPath_NumericIs, // cresolvedConstantsPath_NumericIs
  [bas.cc + cresolvedConstantsPath_PhonicIs]: cresolvedConstantsPath_PhonicIs, // cresolvedConstantsPath_PhonicIs
  [bas.cc + cresolvedConstantsPath_ShapeIs]: cresolvedConstantsPath_ShapeIs, // cresolvedConstantsPath_ShapeIs
  [bas.cc + cresolvedConstantsPath_SystemIs]: cresolvedConstantsPath_SystemIs, // cresolvedConstantsPath_SystemIs
  [bas.cc + cresolvedConstantsPath_UnitIs]: cresolvedConstantsPath_UnitIs, // cresolvedConstantsPath_UnitIs
  [bas.cc + cresolvedConstantsPath_WordIs]: cresolvedConstantsPath_WordIs, // cresolvedConstantsPath_WordIs
  [bas.cc + cBasicConstantsPhase1Validation]: cBasicConstantsPhase1Validation, // cBasicConstantsPhase1Validation
  [bas.cc + cBusinessConstantsPhase1Validation]: cBusinessConstantsPhase1Validation, // cBusinessConstantsPhase1Validation
  [bas.cc + cColorConstantsPhase1Validation]: cColorConstantsPhase1Validation, // cColorConstantsPhase1Validation
  [bas.cc + cCommandConstantsPhase1Validation]: cCommandConstantsPhase1Validation, // cCommandConstantsPhase1Validation
  [bas.cc + cConfigurationConstantsPhase1Validation]: cConfigurationConstantsPhase1Validation, // cConfigurationConstantsPhase1Validation
  [bas.cc + cCountryConstantsPhase1Validation]: cCountryConstantsPhase1Validation, // cCountryConstantsPhase1Validation
  [bas.cc + cElementConstantsPhase1Validation]: cElementConstantsPhase1Validation, // cElementConstantsPhase1Validation
  [bas.cc + cGenericConstantsPhase1Validation]: cGenericConstantsPhase1Validation, // cGenericConstantsPhase1Validation
  [bas.cc + cIsotopeConstantsPhase1Validation]: cIsotopeConstantsPhase1Validation, // cIsotopeConstantsPhase1Validation
  [bas.cc + cKnotConstantsPhase1Validation]: cKnotConstantsPhase1Validation, // cKnotConstantsPhase1Validation
  [bas.cc + cLanguageConstantsPhase1Validation]: cLanguageConstantsPhase1Validation, // cLanguageConstantsPhase1Validation
  [bas.cc + cMessageConstantsPhase1Validation]: cMessageConstantsPhase1Validation, // cMessageConstantsPhase1Validation
  [bas.cc + cNumericalConstantsPhase1Validation]: cNumericalConstantsPhase1Validation, // cNumericalConstantsPhase1Validation
  [bas.cc + cPhonicConstantsPhase1Validation]: cPhonicConstantsPhase1Validation, // cPhonicConstantsPhase1Validation
  [bas.cc + cShapeConstantsPhase1Validation]: cShapeConstantsPhase1Validation, // cShapeConstantsPhase1Validation
  [bas.cc + cSystemConstantsPhase1Validation]: cSystemConstantsPhase1Validation, // cSystemConstantsPhase1Validation
  [bas.cc + cUnitConstantsPhase1Validation]: cUnitConstantsPhase1Validation, // cUnitConstantsPhase1Validation
  [bas.cc + cWordConstantsPhase1Validation]: cWordConstantsPhase1Validation, // cWordConstantsPhase1Validation
  [bas.cc + cBasicConstantsPhase2Validation]: cBasicConstantsPhase2Validation, // cBasicConstantsPhase2Validation
  [bas.cc + cBusinessConstantsPhase2Validation]: cBusinessConstantsPhase2Validation, // cBusinessConstantsPhase2Validation
  [bas.cc + cColorConstantsPhase2Validation]: cColorConstantsPhase2Validation, // cColorConstantsPhase2Validation
  [bas.cc + cCommandConstantsPhase2Validation]: cCommandConstantsPhase2Validation, // cCommandConstantsPhase2Validation
  [bas.cc + cConfigurationConstantsPhase2Validation]: cConfigurationConstantsPhase2Validation, // cConfigurationConstantsPhase2Validation
  [bas.cc + cCountryConstantsPhase2Validation]: cCountryConstantsPhase2Validation, // cCountryConstantsPhase2Validation
  [bas.cc + cElementConstantsPhase2Validation]: cElementConstantsPhase2Validation, // cElementConstantsPhase2Validation
  [bas.cc + cGenericConstantsPhase2Validation]: cGenericConstantsPhase2Validation, // cGenericConstantsPhase2Validation
  [bas.cc + cIsotopeConstantsPhase2Validation]: cIsotopeConstantsPhase2Validation, // cIsotopeConstantsPhase2Validation
  [bas.cc + cKnotConstantsPhase2Validation]: cKnotConstantsPhase2Validation, // cKnotConstantsPhase2Validation
  [bas.cc + cLanguageConstantsPhase2Validation]: cLanguageConstantsPhase2Validation, // cLanguageConstantsPhase2Validation
  [bas.cc + cMessageConstantsPhase2Validation]: cMessageConstantsPhase2Validation, // cMessageConstantsPhase2Validation
  [bas.cc + cNumericalConstantsPhase2Validation]: cNumericalConstantsPhase2Validation, // cNumericalConstantsPhase2Validation
  [bas.cc + cPhonicConstantsPhase2Validation]: cPhonicConstantsPhase2Validation, // cPhonicConstantsPhase2Validation
  [bas.cc + cShapeConstantsPhase2Validation]: cShapeConstantsPhase2Validation, // cShapeConstantsPhase2Validation
  [bas.cc + cSystemConstantsPhase2Validation]: cSystemConstantsPhase2Validation, // cSystemConstantsPhase2Validation
  [bas.cc + cUnitConstantsPhase2Validation]: cUnitConstantsPhase2Validation, // cUnitConstantsPhase2Validation
  [bas.cc + cWordConstantsPhase2Validation]: cWordConstantsPhase2Validation, // cWordConstantsPhase2Validation
  [bas.cc + ccommandStringIs]: ccommandStringIs, // ccommandStringIs
  [bas.cc + ccommandDelimiterIs]: ccommandDelimiterIs, // ccommandDelimiterIs
  [bas.cc + ccommandToExecuteBeforeTheAliasIs]: ccommandToExecuteBeforeTheAliasIs, // ccommandToExecuteBeforeTheAliasIs
  [bas.cc + ccommandToExecuteAfterTheAliasIs]: ccommandToExecuteAfterTheAliasIs, // ccommandToExecuteAfterTheAliasIs
  [bas.cc + cWarningTheSpecifiedCommand]: cWarningTheSpecifiedCommand, // cWarningTheSpecifiedCommand
  [bas.cc + cdoesNotExistPleaseTryAgain]: cdoesNotExistPleaseTryAgain, // cdoesNotExistPleaseTryAgain
  [bas.cc + ccommandStringContainsEitherSingleQuoteOrBackTickQuote]: ccommandStringContainsEitherSingleQuoteOrBackTickQuote, // ccommandStringContainsEitherSingleQuoteOrBackTickQuote
  [bas.cc + ccommandStringContainsSingleQuote]: ccommandStringContainsSingleQuote, // ccommandStringContainsSingleQuote
  [bas.cc + cnumberOfSingleQuotesIsEven]: cnumberOfSingleQuotesIsEven, // cnumberOfSingleQuotesIsEven
  [bas.cc + cFirstIndexIs]: cFirstIndexIs, // cFirstIndexIs
  [bas.cc + ccommandStringAfterTaggingTheFirstStringDelimiter]: ccommandStringAfterTaggingTheFirstStringDelimiter, // ccommandStringAfterTaggingTheFirstStringDelimiter
  [bas.cc + cAdditionalIndexIs]: cAdditionalIndexIs, // cAdditionalIndexIs
  [bas.cc + coddIndex]: coddIndex, // coddIndex
  [bas.cc + cevenIndex]: cevenIndex, // cevenIndex
  [bas.cc + ccommandStringAfterTaggingAnOddStringDelimiter]: ccommandStringAfterTaggingAnOddStringDelimiter, // ccommandStringAfterTaggingAnOddStringDelimiter
  [bas.cc + ccommandStringAfterTaggingAnEvenStringDelimiter]: ccommandStringAfterTaggingAnEvenStringDelimiter, // ccommandStringAfterTaggingAnEvenStringDelimiter
  [bas.cc + cpreSplitCommandStringIs]: cpreSplitCommandStringIs, // cpreSplitCommandStringIs
  [bas.cc + cpostSplitCommandStringIs]: cpostSplitCommandStringIs, // cpostSplitCommandStringIs
  [bas.cc + cpreSplitCommandStringElementIs]: cpreSplitCommandStringElementIs, // cpreSplitCommandStringElementIs
  [bas.cc + cDoingStraightSplitCommandString]: cDoingStraightSplitCommandString, // cDoingStraightSplitCommandString
  [bas.cc + cCommandStartTimeIs]: cCommandStartTimeIs, // cCommandStartTimeIs
  [bas.cc + cCommandEndTimeIs]: cCommandEndTimeIs, // cCommandEndTimeIs
  [bas.cc + cCommandRunTimeIs]: cCommandRunTimeIs, // cCommandRunTimeIs
  [bas.cc + ccommandAliasesFilePathConfigurationNameIs]: ccommandAliasesFilePathConfigurationNameIs, // ccommandAliasesFilePathConfigurationNameIs
  [bas.cc + ccommandIs]: ccommandIs, // ccommandIs
  [bas.cc + ccommandToExecuteIs]: ccommandToExecuteIs, // ccommandToExecuteIs
  [bas.cc + ccontextNameIs]: ccontextNameIs, // ccontextNameIs
  [bas.cc + callSystemConfigurationsIs]: callSystemConfigurationsIs, // callSystemConfigurationsIs
  [bas.cc + cdataPathConfigurationNameIs]: cdataPathConfigurationNameIs, // cdataPathConfigurationNameIs
  [bas.cc + cdataPathIs]: cdataPathIs, // dataPathIs
  [bas.cc + cfilesFoundIs]: cfilesFoundIs, // filesFoundIs
  [bas.cc + cfileToLoadIs]: cfileToLoadIs, // fileToLoadIs
  [bas.cc + cfilesToLoadIs]: cfilesToLoadIs, // filesToLoadIs
  [bas.cc + ccontextNameIs]: ccontextNameIs, // contextNameIs
  [bas.cc + cdataFileToMergeIs]: cdataFileToMergeIs, // dataFileToMergeIs
  [bas.cc + cparsedDataFileIs]: cparsedDataFileIs, // parsedDataFileIs
  [bas.cc + cexecuteBusinessRules]: cexecuteBusinessRules, // executeBusinessRules
  [bas.cc + cdataFileIs]: cdataFileIs, // dataFileIs
  [bas.cc + cmergedDataIs]: cmergedDataIs, // mergedDataIs
  [bas.cc + cdebugConfigurationSettingValueIs]: cdebugConfigurationSettingValueIs, // debugConfigurationSettingValueIs
  [bas.cc + cappConfigPathIs]: cappConfigPathIs, // appConfigPathIs
  [bas.cc + cframeworkConfigPathIs]: cframeworkConfigPathIs, // frameworkConfigPathIs
  [bas.cc + cALL_DATA_IS]: cALL_DATA_IS, // ALL_DATA_IS
  [bas.cc + cAllLoadedDataIs]: cAllLoadedDataIs, // AllLoadedDataIs
  [bas.cc + cconfigDataIs]: cconfigDataIs, // configDataIs
  [bas.cc + cERROR]: cERROR, // ERROR:
  [bas.cc + cErrorInvalidAccessTo]: cErrorInvalidAccessTo, // ErrorInvalidAccessTo
  [bas.cc + crootPathIs]: crootPathIs, // rootPathIs
  [bas.cc + caskIs]: caskIs, // askIs
  [bas.cc + cINPUT]: cINPUT, // INPUT
  [bas.cc + cinputIs]: cinputIs, // inputIs
  [bas.cc + cstartTimeIs]: cstartTimeIs, // startTimeIs
  [bas.cc + cendTimeIs]: cendTimeIs, // endTimeIs
  [bas.cc + cdeltaTimeResultIs]: cdeltaTimeResultIs, // deltaTimeResultIs
  [bas.cc + cclientConfigurationIs]: cclientConfigurationIs, // clientConfigurationIs
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  [bas.cc + cloadedAndMergedDataAllFilesIs]: cloadedAndMergedDataAllFilesIs, // loadedAndMergedDataAllFilesIs
  [bas.cc + cloadedAndMergedDataAllFilesContentsAre]: cloadedAndMergedDataAllFilesContentsAre, // loadedAndMergedDataAllFilesContentsAre
  [bas.cc + ccommandWorkflowFilePathConfigurationNameIs]: ccommandWorkflowFilePathConfigurationNameIs, // commandWorkflowFilePathConfigurationNameIs
  [bas.cc + ccontentsOfDataStructreIs]: ccontentsOfDataStructreIs, // contentsOfDataStructreIs
  [bas.cc + cclientBusinessRulesAre]: cclientBusinessRulesAre, // clientBusinessRulesAre
  [bas.cc + cclientCommandsAre]: cclientCommandsAre, // clientCommandsAre
  [bas.cc + csystemCommandsAliasesPathIs]: csystemCommandsAliasesPathIs, // systemCommandsAliasesPathIs
  [bas.cc + cclientCommandsAliasesPathIs]: cclientCommandsAliasesPathIs, // clientCommandsAliasesPathIs
  [bas.cc + cresolvedSystemCommandsAliasesPathIs]: cresolvedSystemCommandsAliasesPathIs, // resolvedSystemCommandsAliasesPathIs
  [bas.cc + cresolvedClientCommandsAliasesPathIs]: cresolvedClientCommandsAliasesPathIs, // resolvedClientCommandsAliasesPathIs
  [bas.cc + csystemWorkflowPathIs]: csystemWorkflowPathIs, // systemWorkflowPathIs
  [bas.cc + cclientWorkflowPathIs]: cclientWorkflowPathIs, // clientWorkflowPathIs
  [bas.cc + cresolvedSystemWorkflowsPathIs]: cresolvedSystemWorkflowsPathIs, // resolvedSystemWorkflowsPathIs
  [bas.cc + cresolvedClientWorkflowsPathIs]: cresolvedClientWorkflowsPathIs, // resolvedClientWorkflowsPathIs
  [bas.cc + cbusinessRuleIs]: cbusinessRuleIs, // businessRuleIs
  [bas.cc + cruleInputIs]: cruleInputIs, // ruleInputIs
  [bas.cc + cruleMetaDataIs]: cruleMetaDataIs, // ruleMetaDataIs
  [bas.cc + cconfigurationNamespaceIs]: cconfigurationNamespaceIs, // configurationNamespaceIs
  [bas.cc + cconfigurationNameIs]: cconfigurationNameIs, // configurationNameIs
  [bas.cc + cconfigurationValueIs]: cconfigurationValueIs, // configurationValueIs
  [bas.cc + creturnConfigurationValueIs]: creturnConfigurationValueIs, // returnConfigurationValueIs
  [bas.cc + cattributeJsonStringIs]: cattributeJsonStringIs, // attributeJsonStringIs
  [bas.cc + cappAttributeNameIs]: cappAttributeNameIs, // appAttributeNameIs
  [bas.cc + cappAttributeValueIs]: cappAttributeValueIs, // appAttributeValueIs
  [bas.cc + cexecuteBusinessRulesColon]: cexecuteBusinessRulesColon, // executeBusinessRulesColon
  [bas.cc + cdataPathAfterBusinessRulesProcessingIs]: cdataPathAfterBusinessRulesProcessingIs, // dataPathAfterBusinessRulesProcessingIs
  [bas.cc + cFileToLoadIs]: cFileToLoadIs, // FileToLoadIs
  [bas.cc + cfileExtensionIs]: cfileExtensionIs, // fileExtensionIs
  [bas.cc + cloadedFileDataIs]: cloadedFileDataIs, // loadedFileDataIs
  [bas.cc + cBEGIN_PROCESSING_ADDITIONAL_DATA]: cBEGIN_PROCESSING_ADDITIONAL_DATA, // BEGIN_PROCESSING_ADDITIONAL_DATA
  [bas.cc + cDONE_PROCESSING_ADDITIONAL_DATA]: cDONE_PROCESSING_ADDITIONAL_DATA, // DONE_PROCESSING_ADDITIONAL_DATA
  [bas.cc + cMERGED_dataIs]: cMERGED_dataIs, // MERGED_dataIs
  [bas.cc + cparsedDataFileContentsAre]: cparsedDataFileContentsAre, // parsedDataFileContentsAre
  [bas.cc + cdataCatagoryIs]: cdataCatagoryIs, // dataCatagoryIs
  [bas.cc + cfullyParsedDataIs]: cfullyParsedDataIs, // fullyParsedDataIs
  [bas.cc + cD_finalMergeIs]: cD_finalMergeIs, // D_finalMergeIs
  [bas.cc + cdataStorageContextNameIs]: cdataStorageContextNameIs, // dataStorageContextNameIs
  [bas.cc + cdataToStoreIs]: cdataToStoreIs, // dataToStoreIs
  [bas.cc + cdataCatagoryDetailsNameIs]: cdataCatagoryDetailsNameIs, // dataCatagoryDetailsNameIs
  [bas.cc + ctempDataIs]: ctempDataIs, // tempDataIs
  [bas.cc + ctargetDataIs]: ctargetDataIs, // targetDataIs
  [bas.cc + cpageNameIs]: cpageNameIs, // pageNameIs
  [bas.cc + cdataToMergeIs]: cdataToMergeIs, // dataToMergeIs
  [bas.cc + cdataToMergeElementCountIs]: cdataToMergeElementCountIs, // dataToMergeElementCountIs
  [bas.cc + cdataToMergeElementCountIs1]: cdataToMergeElementCountIs1, // dataToMergeElementCountIs1
  [bas.cc + ccheckIfThePageNameIsNotAnEmptyString]: ccheckIfThePageNameIsNotAnEmptyString, // checkIfThePageNameIsNotAnEmptyString
  [bas.cc + cpageNameIsNotAnEmptyString]: cpageNameIsNotAnEmptyString, // pageNameIsNotAnEmptyString
  [bas.cc + cCheckIfTheDataCatagoryIsAnEmptyStringOrNot]: cCheckIfTheDataCatagoryIsAnEmptyStringOrNot, // CheckIfTheDataCatagoryIsAnEmptyStringOrNot
  [bas.cc + cdataCatagoryIsNotAnEmptyString]: cdataCatagoryIsNotAnEmptyString, // dataCatagoryIsNotAnEmptyString
  [bas.cc + cdataCatagoryIsAnEmptyString]: cdataCatagoryIsAnEmptyString, // dataCatagoryIsAnEmptyString
  [bas.cc + ctargetDataContentIs]: ctargetDataContentIs, // targetDataContentIs
  [bas.cc + cafterAttemptToMergeResultsAre]: cafterAttemptToMergeResultsAre, // afterAttemptToMergeResultsAre
  [bas.cc + cMergedDataIs]: cMergedDataIs, // MergedDataIs
  [bas.cc + cpageNameIsAnEmptyString]: cpageNameIsAnEmptyString, // pageNameIsAnEmptyString
  [bas.cc + cCaughtTheSpecialCaseThatWeAreMergingFlatList]: cCaughtTheSpecialCaseThatWeAreMergingFlatList, // CaughtTheSpecialCaseThatWeAreMergingFlatList
  [bas.cc + cinsideTheForLoop]: cinsideTheForLoop, // insideTheForLoop
  [bas.cc + ckeyIs]: ckeyIs, // keyIs
  [bas.cc + ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs]: ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs, // targetDataIsModifiedInTheInputPassByReferenceVariableContentIs
  [bas.cc + cdataObjectValueIs]: cdataObjectValueIs, // dataObjectValueIs
  [bas.cc + celementNameIs]: celementNameIs, // elementNameIs
  [bas.cc + cdataObjectIs]: cdataObjectIs, // dataObjectIs
  [bas.cc + celementNamePatternIs]: celementNamePatternIs, // elementNamePatternIs
  [bas.cc + celementCountIs]: celementCountIs, // elementCountIs
  [bas.cc + cERROR_Colon]: cERROR_Colon, // ERROR_Colon
  [bas.cc + cfileAndPathToLoadFromIs]: cfileAndPathToLoadFromIs, // fileAndPathToLoadFromIs
  [bas.cc + cDoneLoadingDataFrom]: cDoneLoadingDataFrom, // DoneLoadingDataFrom
  [bas.cc + cfileAndPathToWriteDataToIs]: cfileAndPathToWriteDataToIs, // fileAndPathToWriteDataToIs
  [bas.cc + cdataToWriteIs]: cdataToWriteIs, // dataToWriteIs
  [bas.cc + cDataWasWrittenToTheFile]: cDataWasWrittenToTheFile, // DataWasWrittenToTheFile
  [bas.cc + cPathThatShouldBeScannedIs]: cPathThatShouldBeScannedIs, // PathThatShouldBeScannedIs
  [bas.cc + cfilesFoundAre]: cfilesFoundAre, // filesFoundAre
  [bas.cc + cdirectorIs]: cdirectorIs, // directorIs
  [bas.cc + cdirectoryPathIs]: cdirectoryPathIs, // directoryPathIs
  [bas.cc + csourceFolderIs]: csourceFolderIs, // sourceFolderIs
  [bas.cc + cdestinationFolderIs]: cdestinationFolderIs, // destinationFolderIs
  [bas.cc + ccopySuccessIs]: ccopySuccessIs, // copySuccessIs
  [bas.cc + ccurrentVersionIs]: ccurrentVersionIs, // currentVersionIs
  [bas.cc + creleasedArchiveFilesListIs]: creleasedArchiveFilesListIs, // releasedArchiveFilesListIs
  [bas.cc + cfileIs]: cfileIs, // fileIs
  [bas.cc + cfileNameIs]: cfileNameIs, // fileNameIs
  [bas.cc + creleaseFilesListIs]: creleaseFilesListIs, // releaseFilesListIs
  [bas.cc + creleaseDateTimeStampIs]: creleaseDateTimeStampIs, // releaseDateTimeStampIs
  [bas.cc + creleaseFileNameIs]: creleaseFileNameIs, // releaseFileNameIs
  [bas.cc + cDoneWritingTheZipFile]: cDoneWritingTheZipFile, // DoneWritingTheZipFile
  [bas.cc + cSetTheReturnPackageSuccessFlagToTrue]: cSetTheReturnPackageSuccessFlagToTrue, // SetTheReturnPackageSuccessFlagToTrue
  [bas.cc + ccurrentVersionAlreadyReleased]: ccurrentVersionAlreadyReleased, // currentVersionAlreadyReleased
  [bas.cc + cpackageSuccessIs]: cpackageSuccessIs, // packageSuccessIs
  [bas.cc + cRootPathBeforeProcessingIs]: cRootPathBeforeProcessingIs, // RootPathBeforeProcessingIs
  [bas.cc + cRootPathAfterProcessingIs]: cRootPathAfterProcessingIs, // RootPathAfterProcessingIs
  [bas.cc + cSourceIs]: cSourceIs, // SourceIs
  [bas.cc + ctargetIs]: ctargetIs, // targetIs
  [bas.cc + cErrorCouldNotCopyFile]: cErrorCouldNotCopyFile, // ErrorCouldNotCopyFile
  [bas.cc + cErrorCouldNotCreateFolder]: cErrorCouldNotCreateFolder, // ErrorCouldNotCreateFolder
  [bas.cc + csuccessfullCopyIs]: csuccessfullCopyIs, // successfullCopyIs
  [bas.cc + cErrorCouldNotCopyFolderContents]: cErrorCouldNotCopyFolderContents, // ErrorCouldNotCopyFolderContents
  [bas.cc + cargumentValueIs]: cargumentValueIs, // argumentValueIs
  [bas.cc + cconsolidatedArgumentModeIs]: cconsolidatedArgumentModeIs, // consolidatedArgumentModeIs
  [bas.cc + cPushingArgumentValueToReturnDataAsArrayElement]: cPushingArgumentValueToReturnDataAsArrayElement, // PushingArgumentValueToReturnDataAsArrayElement
  [bas.cc + cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse]: cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse, // CallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse
  [bas.cc + cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue]: cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue, // CallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue
  [bas.cc + cargumentValueLengthGreaterThanZero]: cargumentValueLengthGreaterThanZero, // argumentValueLengthGreaterThanZero
  [bas.cc + cReturnArgumentValueSameAsItWasPassedIn]: cReturnArgumentValueSameAsItWasPassedIn, // ReturnArgumentValueSameAsItWasPassedIn
  [bas.cc + cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse]: cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse, // CallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse
  [bas.cc + cCheckIfThereAreBracketsOrNoBrackets]: cCheckIfThereAreBracketsOrNoBrackets, // CheckIfThereAreBracketsOrNoBrackets
  [bas.cc + cBracketsWereFound]: cBracketsWereFound, // BracketsWereFound
  [bas.cc + cCheckIfThereIsRegularExpressionOrNot]: cCheckIfThereIsRegularExpressionOrNot, // CheckIfThereIsRegularExpressionOrNot
  [bas.cc + cRegularExpressionWasFound]: cRegularExpressionWasFound, // RegularExpressionWasFound
  [bas.cc + cNoRegExpFound]: cNoRegExpFound, // NoRegExpFound
  [bas.cc + cBracketsAreFound]: cBracketsAreFound, // BracketsAreFound
  [bas.cc + cNoSecondaryCommandArgumentDelimiters]: cNoSecondaryCommandArgumentDelimiters, // NoSecondaryCommandArgumentDelimiters
  [bas.cc + cregularExpressionIs]: cregularExpressionIs, // regularExpressionIs
  [bas.cc + cregExValueIs]: cregExValueIs, // regExValueIs
  [bas.cc + cregularExpressionFlagsAre]: cregularExpressionFlagsAre, // regularExpressionFlagsAre
  [bas.cc + cregExFlagsIs]: cregExFlagsIs, // regExFlagsIs
  [bas.cc + cargumentValueContainsTheDelimiterLetsSplitIt]: cargumentValueContainsTheDelimiterLetsSplitIt, // argumentValueContainsTheDelimiterLetsSplitIt
  [bas.cc + cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs]: cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs, // argumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs
  [bas.cc + cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs]: cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs, // argumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs
  [bas.cc + csecondaryCommandArgsDelimiterIs]: csecondaryCommandArgsDelimiterIs, // secondaryCommandArgsDelimiterIs
  [bas.cc + cargumentArrayIs]: cargumentArrayIs, // argumentArrayIs
  [bas.cc + cformattingIs]: cformattingIs, // formattingIs
  [bas.cc + cdeltaTimeIs]: cdeltaTimeIs, // deltaTimeIs
  [bas.cc + cformatIs]: cformatIs, // formatIs
  [bas.cc + creturnDeltaTimeIs]: creturnDeltaTimeIs, // returnDeltaTimeIs
  [bas.cc + csleepTimeIs]: csleepTimeIs, // sleepTimeIs
  [bas.cc + cworkflowNameIs]: cworkflowNameIs, // workflowNameIs
  [bas.cc + ccurrentWorkflowIs]: ccurrentWorkflowIs, // currentWorkflowIs
  [bas.cc + cworkflowValueIs]: cworkflowValueIs, // workflowValueIs
  [bas.cc + cdataHivePathArrayIs]: cdataHivePathArrayIs, // dataHivePathArrayIs
  [bas.cc + ccontentsOfLeafDataHiveElementIs]: ccontentsOfLeafDataHiveElementIs, // contentsOfLeafDataHiveElementIs
  [bas.cc + centryIs]: centryIs, // entryIs
  [bas.cc + cattributeValueIs]: cattributeValueIs, // attributeValueIs
  [bas.cc + ckey2Is]: ckey2Is, // key2Is
  [bas.cc + centityIs]: centityIs, // entityIs
  [bas.cc + cqueueNameSpaceIs]: cqueueNameSpaceIs, // queueNameSpaceIs
  [bas.cc + cstackNameSpaceIs]: cstackNameSpaceIs, // stackNameSpaceIs
  [bas.cc + cWarningStackColon]: cWarningStackColon, // WarningStackColon
  [bas.cc + cAlreadyExists]: cAlreadyExists, // AlreadyExists
  [bas.cc + cdoesNotExist]: cdoesNotExist, // doesNotExist
  [bas.cc + cisEmpty]: cisEmpty, // isEmpty
  [bas.cc + cContentsOfTheStackNamespace]: cContentsOfTheStackNamespace, // ContentsOfTheStackNamespace
  [bas.cc + cwordDelimiterIs]: cwordDelimiterIs, // wordDelimiterIs
  [bas.cc + cstringContainsAcronymIs]: cstringContainsAcronymIs, // stringContainsAcronymIs
  [bas.cc + cErrorZipPackageReleaseFailed]: cErrorZipPackageReleaseFailed, // ErrorZipPackageReleaseFailed
  [bas.cc + cminimumColorRangeIs]: cminimumColorRangeIs, // minimumColorRangeIs
  [bas.cc + cmaximumColorRangeIs]: cmaximumColorRangeIs, // maximumColorRangeIs
  [bas.cc + callSystemConstantsValidationDataIs]: callSystemConstantsValidationDataIs, // allSystemConstantsValidationDataIs
  [bas.cc + callClientConstantsValidationDataIs]: callClientConstantsValidationDataIs, // allClientConstantsValidationDataIs
  [bas.cc + cconstantLibraryDataIs]: cconstantLibraryDataIs, // constantLibraryDataIs
  [bas.cc + cclientValidationDataIs]: cclientValidationDataIs, // clientValidationDataIs
  [bas.cc + carrayValidationDataIs]: carrayValidationDataIs, // arrayValidationDataIs
  [bas.cc + cfilesListLimitIs]: cfilesListLimitIs, // filesListLimitIs
  [bas.cc + cenableLimitIs]: cenableLimitIs, // enableLimitIs
  [bas.cc + cfilesLimitIs]: cfilesLimitIs, // filesLimitIs

  // WARNING: Mixed string. Cannot determine what delimiter should be used to break up the string into words.
  [bas.cc + cDetermineWordDelimiterMessage1]: cDetermineWordDelimiterMessage1, // DetermineWordDelimiterMessage1
  [bas.cc + cDetermineWordDelimiterMessage2]: cDetermineWordDelimiterMessage2, // DetermineWordDelimiterMessage2
  [bas.cc + cDetermineWordDelimiterMessage3]: cDetermineWordDelimiterMessage3, // DetermineWordDelimiterMessage3
  [bas.cc + cDetermineWordDelimiterMessage4]: cDetermineWordDelimiterMessage4, // DetermineWordDelimiterMessage4
  // WARNING: Mixed string. Cannot determine how words are delimited in the string. Unable to count words.
  [bas.cc + cGetWordCountInStringMessage1]: cGetWordCountInStringMessage1, // GetWordCountInStringMessage1
  [bas.cc + cGetWordCountInStringMessage2]: cGetWordCountInStringMessage2, // GetWordCountInStringMessage2
  [bas.cc + cGetWordCountInStringMessage3]: cGetWordCountInStringMessage3, // GetWordCountInStringMessage3
  // WARNING: Mixed string. Cannot get words from the string. Unable to determine words.
  [bas.cc + cGetWordsArrayFromStringMessage1]: cGetWordsArrayFromStringMessage1, // GetWordsArrayFromStringMessage1
  [bas.cc + cGetWordsArrayFromStringMessage2]: cGetWordsArrayFromStringMessage2, // GetWordsArrayFromStringMessage2
  [bas.cc + cGetWordsArrayFromStringMessage3]: cGetWordsArrayFromStringMessage3, // GetWordsArrayFromStringMessage3
  // Please enter a named command where the first word starts with a lower case letter and all other words in the named command start with an upper case letter:
  [bas.cc + cCommandNamePrompt2]: cCommandNamePrompt2, // CommandNamePrompt2
  [bas.cc + cCommandNamePrompt3]: cCommandNamePrompt3, // CommandNamePrompt3
  [bas.cc + cCommandNamePrompt4]: cCommandNamePrompt4, // CommandNamePrompt4
  [bas.cc + cCommandNamePrompt5]: cCommandNamePrompt5, // CommandNamePrompt5
  // Please enter a list of command word abreviations/acronyms/aliases for the command word:
  [bas.cc + cCommandWordAliasPrompt1]: cCommandWordAliasPrompt1, // CommandWordAliasPrompt1
  [bas.cc + cCommandWordAliasPrompt2]: cCommandWordAliasPrompt2, // CommandWordAliasPrompt2
  [bas.cc + cCommandWordAliasPrompt3]: cCommandWordAliasPrompt3, // CommandWordAliasPrompt3
  // Please enter a string you would like to define as a constant in the constants system:
  [bas.cc + cConstantPrompt1]: cConstantPrompt1, // ConstantPrompt1
  [bas.cc + cConstantPrompt2]: cConstantPrompt2, // ConstantPrompt2
  [bas.cc + cConstantPrompt3]: cConstantPrompt3, // ConstantPrompt3
  // Please enter a coma separated list of strings you would like to define in the constants system:
  [bas.cc + cConstantsListPrompt1]: cConstantsListPrompt1, // ConstantsListPrompt1
  [bas.cc + cConstantsListPrompt2]: cConstantsListPrompt2, // ConstantsListPrompt2
  [bas.cc + cConstantsListPrompt3]: cConstantsListPrompt3, // ConstantsListPrompt3
  // Please enter a coma separated list of strings you would like to search for common patterns:
  [bas.cc + cConstantsListPatternSearchPrompt1]: cConstantsListPatternSearchPrompt1, // ConstantsListPatternSearchPrompt1
  [bas.cc + cConstantsListPatternSearchPrompt2]: cConstantsListPatternSearchPrompt2, // ConstantsListPatternSearchPrompt2
  [bas.cc + cConstantsListPatternSearchPrompt3]: cConstantsListPatternSearchPrompt3, // ConstantsListPatternSearchPrompt3
  // ERROR: Attempted to generate a suggested line of code to validate the constant, ' +
  // 'but the constant is not formatted correctly, it should begin with a lower case "c". ' +
  // 'Please reformat the constant correctly so a line of code can be generated for you.
  [bas.cc + cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1]: cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1, // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage1
  [bas.cc + cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2]: cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2, // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage2
  [bas.cc + cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3]: cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3, // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage3
  [bas.cc + cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4]: cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4, // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage4
  [bas.cc + cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5]: cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5, // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage5
  [bas.cc + cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6]: cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6, // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage6
  [bas.cc + cSearchForPatternsInStringArrayMessage1]: cSearchForPatternsInStringArrayMessage1, // SearchForPatternsInStringArrayMessage1
  // WARNING: The current string being searched contains a space character, we are going to skip comparison.
  [bas.cc + cSearchForPatternsInStringArrayMessage2]: cSearchForPatternsInStringArrayMessage2, // SearchForPatternsInStringArrayMessage2
  [bas.cc + cSearchForPatternsInStringArrayMessage3]: cSearchForPatternsInStringArrayMessage3, // SearchForPatternsInStringArrayMessage3
  // WARNING: InputData was not an array or had an empty array.
  [bas.cc + cSearchForPatternsInStringArrayMessage4]: cSearchForPatternsInStringArrayMessage4, // SearchForPatternsInStringArrayMessage4
  // WARNING: No data to load, please specify a valid path & filename!
  [bas.cc + cLoadDataFileMessage1]: cLoadDataFileMessage1, // LoadDataFileMessage1
  [bas.cc + cloadDataFileMessage2]: cloadDataFileMessage2, // loadDataFileMessage2
  [bas.cc + cloadDataFileMessage3]: cloadDataFileMessage3, // loadDataFileMessage3
  // ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another release.
  [bas.cc + cdeployApplicationMessage1a]: cdeployApplicationMessage1a, // deployApplicationMessage1a
  [bas.cc + cdeployApplicationMessage2a]: cdeployApplicationMessage2a, // deployApplicationMessage2a
  // ERROR: Release failed because of a failure in the commands alias validation system. Please fix ASAP before attempting another release.
  [bas.cc + cdeployApplicationMessage1b]: cdeployApplicationMessage1b, // deployApplicationMessage1b
  [bas.cc + ccommandSequencerMessage1]: ccommandSequencerMessage1, // commandSequencerMessage1
  [bas.cc + ccommandSequencerMessage2]: ccommandSequencerMessage2, // commandSequencerMessage2
  [bas.cc + cworkflowMessage1]: cworkflowMessage1, // workflowMessage1
  [bas.cc + cworkflowMessage2]: cworkflowMessage2, // workflowMessage2
  [bas.cc + cworkflowMessage3]: cworkflowMessage3, // workflowMessage3
  // After attempting to replace the secondaryCommandArgsDelimiter with the primaryCommandDelimiter commandString is:
  [bas.cc + ccommandGeneratorMessage1]: ccommandGeneratorMessage1, // commandGeneratorMessage1
  // After attempting to replace the tertiaryCommandDelimiter with the secondaryCommandArgsDelimiter commandString is:
  [bas.cc + ccommandGeneratorMessage2]: ccommandGeneratorMessage2, // commandGeneratorMessage2
  // WARNING: nominal.commandGenerator: Must enter a number greater than 0, number entered:
  [bas.cc + ccommandGeneratorMessage3]: ccommandGeneratorMessage3, // commandGeneratorMessage3
  // WARNING: nominal.commandGenerator: Number entered for the number of commands to generate is not a number:
  [bas.cc + ccommandGeneratorMessage4]: ccommandGeneratorMessage4, // commandGeneratorMessage4
  // WARNING: nominal.commandGenerator: The specified command:
  [bas.cc + ccommandGeneratorMessage5]: ccommandGeneratorMessage5, // commandGeneratorMessage5
  // was not found, please enter a valid command and try again.
  [bas.cc + ccommandGeneratorMessage6]: ccommandGeneratorMessage6, // commandGeneratorMessage6
  // Command can be called by passing parameters and bypass the prompt system.
  [bas.cc + ccommandAliasGeneratorMessage1]: ccommandAliasGeneratorMessage1, // commandAliasGeneratorMessage1
  // EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
  [bas.cc + ccommandAliasGeneratorMessage2]: ccommandAliasGeneratorMessage2, // commandAliasGeneratorMessage2
  // INVALID INPUT: Please enter a valid camel-case command name.
  [bas.cc + ccommandAliasGeneratorMessage3]: ccommandAliasGeneratorMessage3, // commandAliasGeneratorMessage3
  // INVALID INPUT: Please enter a valid command word alias list.
  [bas.cc + ccommandAliasGeneratorMessage4]: ccommandAliasGeneratorMessage4, // commandAliasGeneratorMessage4
  // INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.
  [bas.cc + ccommandAliasGeneratorMessage5]: ccommandAliasGeneratorMessage5, // commandAliasGeneratorMessage5
  // INVALID INPUT: Please enter a valid constant value that contains more than 4 characters.
  [bas.cc + cconstantsGeneratorMessage1]: cconstantsGeneratorMessage1, // constantsGeneratorMessage1
  // WARNING: The constant has already been defined in the following library(ies):
  [bas.cc + cconstantsGeneratorMessage2]: cconstantsGeneratorMessage2, // constantsGeneratorMessage2
  // INVALID INPUT: Please enter a valid constant list.
  [bas.cc + cconstantsGeneratorListMessage1]: cconstantsGeneratorListMessage1, // constantsGeneratorListMessage1
  // PASSED: All duplicate command aliases validation tests!
  [bas.cc + cvalidateCommandAliasesMessage1]: cvalidateCommandAliasesMessage1, // validateCommandAliasesMessage1
  // About to call the rule broker to process on the number of single quotes
  [bas.cc + cgetCommandArgsMessage1]: cgetCommandArgsMessage1, // getCommandArgsMessage1
  // and determine if it-be even or odd
  [bas.cc + cgetCommandArgsMessage2]: cgetCommandArgsMessage2, // getCommandArgsMessage2
  // WARNING: Command does not exist, please enter a valid command and try again!
  [bas.cc + cexecuteCommandMessage1]: cexecuteCommandMessage1, // executeCommandMessage1
  // WARNING: lexical.parseBusinessRuleArgument: Invalid combination of inputs to the lexical.parseBusinessRuleArgument function!
  [bas.cc + cparseBusinessRuleArgumentMessage1]: cparseBusinessRuleArgumentMessage1, // parseBusinessRuleArgumentMessage1
  [bas.cc + cparseBusinessRuleArgumentMessage2]: cparseBusinessRuleArgumentMessage2, // parseBusinessRuleArgumentMessage2
  // Caught the case that the user may have only specified a single data hive, such as the configuration data hive.
  [bas.cc + cprintDataHiveAttributesMessage1]: cprintDataHiveAttributesMessage1, // printDataHiveAttributesMessage1
  [bas.cc + cprintDataHiveAttributesMessage2]: cprintDataHiveAttributesMessage2, // printDataHiveAttributesMessage2
  // ERROR: Please enter a valid name.space.attributeName for the system to print out attribute data from.
  [bas.cc + cprintDataHiveAttributesMessage3]: cprintDataHiveAttributesMessage3, // printDataHiveAttributesMessage3
  // Nothing to echo.
  [bas.cc + cNothingToEcho]: cNothingToEcho, // NothingToEcho
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  [bas.cc + cprompt01]: cprompt01, // prompt01
  [bas.cc + cprompt02]: cprompt02, // prompt02
  [bas.cc + cprompt03]: cprompt03, // prompt03
  [bas.cc + cprintMessageToFile01]: cprintMessageToFile01, // cprintMessageToFile01
  [bas.cc + cprintMessageToFile02]: cprintMessageToFile02, // cprintMessageToFile02
  [bas.cc + cprintMessageToFile03]: cprintMessageToFile03, // cprintMessageToFile03

  // Coded System Messages constant constants
  [bas.cc + cdebugSettingsEnabledLogic01]: cdebugSettingsEnabledLogic01, // debugSettingsEnabledLogic01
  [bas.cc + cdebugSettingsEnabledLogic02]: cdebugSettingsEnabledLogic02, // debugSettingsEnabledLogic02
  [bas.cc + cdebugSettingsEnabledLogic03]: cdebugSettingsEnabledLogic03, // debugSettingsEnabledLogic03
  [bas.cc + cdebugSettingsEnabledLogic04]: cdebugSettingsEnabledLogic04, // debugSettingsEnabledLogic04
  [bas.cc + cdebugSettingsEnabledLogic05]: cdebugSettingsEnabledLogic05, // debugSettingsEnabledLogic05
  [bas.cc + cdebugSettingsEnabledLogic06]: cdebugSettingsEnabledLogic06, // debugSettingsEnabledLogic06
  [bas.cc + cdebugSettingsEnabledLogic07]: cdebugSettingsEnabledLogic07, // debugSettingsEnabledLogic07
  [bas.cc + cdebugSettingsEnabledLogic08]: cdebugSettingsEnabledLogic08, // debugSettingsEnabledLogic08
  [bas.cc + cdebugSettingsEnabledLogic09]: cdebugSettingsEnabledLogic09, // debugSettingsEnabledLogic09
  [bas.cc + cdebugSettingsEnabledLogic10]: cdebugSettingsEnabledLogic10, // debugSettingsEnabledLogic10
  [bas.cc + cdebugSettingsEnabledLogic11]: cdebugSettingsEnabledLogic11, // debugSettingsEnabledLogic11
  [bas.cc + cdebugSettingsEnabledLogic12]: cdebugSettingsEnabledLogic12 // debugSettingsEnabledLogic12
};
