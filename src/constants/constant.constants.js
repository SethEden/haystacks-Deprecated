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

import * as bas from './basic.constants.js';
import * as phn from './phonic.constants.js';
import * as wr2 from './word2.constants.js';

// Redefined words, used below in this file, redefined so we don't have circular dependencies
export const cDot = bas.cDo + bas.ct; // Dot
export const cCongo = bas.cC + phn.congo; // Congo
export const cGuinea = bas.cGu + phn.cinea; // Guinea
export const cone = bas.co + bas.cne; // one
export const cSan = bas.cSa + bas.cn; // San
export const cSierra = bas.cSi + bas.cer + bas.cra; // Sierra
export const cEnglish = bas.cEn + bas.cgl + phn.cish; // English

export const cCotedlvoire = bas.cCo + bas.cte + bas.cd + bas.clv + bas.coi + bas.cre; // Cotedlvoire
export const cCaboVerde = bas.cCa + bas.cbo + phn.cVer + bas.cde; // CaboVerde
export const cCentralAfricanRepublic = wr2.cCentral + wr2.cAfrican + wr2.cRepublic; // CentralAfricanRepublic
export const cCostaRica = wr2.cCost + bas.ca + bas.cR + phn.cica; // CostaRica
export const cDemocraticRepublicOfTheCongo = wr2.cDemocratic + wr2.cRepublic + wr2.cOf + wr2.cThe + cCongo; // DemocraticRepublicOfTheCongo
export const cDominicanRepublic = bas.cDo + phn.cminica + bas.cn + bas.cR + bas.cep + phn.cublic; // cDominicanRepublic
export const cElSalvador = bas.cEl + bas.cSa + bas.clv + phn.cador; // ElSalvador
export const cEquatorialGuinea = phn.cEqu + phn.cator + bas.cia + bas.cl + bas.cG + phn.cuinea; // EquatorialGuinea
export const cGuineaBissau = bas.cGu + phn.cinea + bas.cBi + bas.css + bas.cau; // GuineaBissau
export const cHolySee = bas.cHo + bas.cly + bas.cSe + bas.ce; // HolySee
export const cMarshallIslands = bas.cMa + bas.crs + bas.cha + bas.cll + bas.cIs + bas.cla + phn.cnds; // MarshallIslands
export const cNewZealand = wr2.cNew + bas.cZe + phn.cala + bas.cnd; // NewZealand
export const cNorthKorea = bas.cNo + bas.crt + bas.ch + bas.cK + phn.corea; // NorthKorea
export const cNorthMacedonia = bas.cNo + bas.crt + bas.ch + bas.cM + phn.cace + bas.cdo + phn.cnia; // NorthMacedonia
export const cPapuaNewGuinea = wr2.cPapua + wr2.cNew + cGuinea; // PapuaNewGuinea
export const cSaintKitts = bas.cSa + phn.cint + bas.cKi + bas.ctt + bas.cs; // SaintKitts
export const cSaintLucia = bas.cSa + phn.cint + bas.cLu + bas.cci + bas.ca; // SaintLucia
export const cSaintVincent = bas.cSa + phn.cint + bas.cVi + phn.cnce + bas.cnt; // SaintVincent
export const cSanMarino = cSan + bas.cMa + bas.cri + bas.cno; // SanMarino
export const cSaoTome = bas.cSa + bas.co + bas.cT + phn.come; // SaoTome
export const cSaudiArabia = bas.cSa + bas.cud + bas.ci + bas.cA + bas.cra + phn.cbia; // SaudiArabia
export const cSierraLeone = cSierra + bas.cLe + cone; // SierraLeone
export const cSolomonIslands = bas.cSo + bas.clo + phn.cmon + bas.cIs + bas.cla + phn.cnds; // SolomonIslands
export const cSouthAfrica = bas.cSo + bas.cut + bas.ch + bas.cA + phn.cfrica; // SouthAfrica
export const cSouthKorea = bas.cSo + bas.cut + bas.ch + bas.cK + phn.corea; // SouthKorea
export const cSouthSudan = bas.cSo + bas.cut + bas.ch + bas.cS + phn.cudan; // SouthSudan
export const cSriLanka = bas.cSr + bas.ci + bas.cL + bas.can + bas.cka; // SriLanka
export const cTimorLeste = bas.cTi + bas.cmo + bas.cr + bas.cL + phn.cest + bas.ce; // TimorLeste
export const cTrinidadAndTabago = wr2.cTrinidad + wr2.cAnd + wr2.cTabago; // TrinidadAndTabago
export const cUnitedArabEmirates = wr2.cUnited + wr2.cArab + wr2.cEmirates; // UnitedArabEmirates
export const cUnitedKingdom = wr2.cUnited + bas.cKi + bas.cng + phn.cdom; // UnitedKingdom
export const cUnitedStatesOfAmerica = wr2.cUnited + wr2.cStates + wr2.cOf + wr2.cAmerica; // UnitedStatesOfAmmerica

export const cLowerCaseEnglishAlphabet = wr2.cLower + wr2.cCase + cEnglish + wr2.cAlphabet; // LowerCaseEnglishAlphabet
export const cUpperCaseEnglishAlphabet = wr2.cUpper + wr2.cCase + cEnglish + wr2.cAlphabet; // UpperCaseEnglishAlphabet
export const cAllNumbers = wr2.cAll + wr2.cNumbers; // AllNumbers
export const cMostSpecialCharacters = wr2.cMost + wr2.cSpecial + wr2.cCharacters; // MostSpecialCharacters

export const cctrl_a = phn.cctrl + bas.cUnderscore + bas.ca; // ctrl_a
export const cctrl_b = phn.cctrl + bas.cUnderscore + bas.cb; // ctrl_b
export const cctrl_c = phn.cctrl + bas.cUnderscore + bas.cc; // ctrl_c
export const cctrl_d = phn.cctrl + bas.cUnderscore + bas.cd; // ctrl_d
export const cctrl_e = phn.cctrl + bas.cUnderscore + bas.ce; // ctrl_e
export const cctrl_f = phn.cctrl + bas.cUnderscore + bas.cf; // ctrl_f
export const cctrl_g = phn.cctrl + bas.cUnderscore + bas.cg; // ctrl_g
export const cctrl_h = phn.cctrl + bas.cUnderscore + bas.ch; // ctrl_h
export const cctrl_i = phn.cctrl + bas.cUnderscore + bas.ci; // ctrl_i
export const cctrl_j = phn.cctrl + bas.cUnderscore + bas.cj; // ctrl_j
export const cctrl_k = phn.cctrl + bas.cUnderscore + bas.ck; // ctrl_k
export const cctrl_l = phn.cctrl + bas.cUnderscore + bas.cl; // ctrl_l
export const cctrl_m = phn.cctrl + bas.cUnderscore + bas.cm; // ctrl_m
export const cctrl_n = phn.cctrl + bas.cUnderscore + bas.cn; // ctrl_n
export const cctrl_o = phn.cctrl + bas.cUnderscore + bas.co; // ctrl_o
export const cctrl_p = phn.cctrl + bas.cUnderscore + bas.cp; // ctrl_p
export const cctrl_q = phn.cctrl + bas.cUnderscore + bas.cq; // ctrl_q
export const cctrl_r = phn.cctrl + bas.cUnderscore + bas.cr; // ctrl_r
export const cctrl_s = phn.cctrl + bas.cUnderscore + bas.cs; // ctrl_s
export const cctrl_t = phn.cctrl + bas.cUnderscore + bas.ct; // ctrl_t
export const cctrl_u = phn.cctrl + bas.cUnderscore + bas.cu; // ctrl_u
export const cctrl_v = phn.cctrl + bas.cUnderscore + bas.cv; // ctrl_v
export const cctrl_w = phn.cctrl + bas.cUnderscore + bas.cw; // ctrl_w
export const cctrl_x = phn.cctrl + bas.cUnderscore + bas.cx; // ctrl_x
export const cctrl_y = phn.cctrl + bas.cUnderscore + bas.cy; // ctrl_y
export const cctrl_z = phn.cctrl + bas.cUnderscore + bas.cz; // ctrl_z

export const cframeworkResourcesConfigurationPath = wr2.cframework + wr2.cResources + wr2.cConfiguration + wr2.cPath; // cframeworkResourcesConfigurationPath
export const csystemConfigFileName = wr2.csystem + wr2.cConfig + wr2.cFile + wr2.cName; // csystemConfigFileName
export const capplicationConfigFileName = wr2.capplication + wr2.cConfig + wr2.cFile + wr2.cName; // capplicationConfigFileName

// Constants Filenames
export const cbasic_constants_js = wr2.cbasic + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // basic_constants_js
export const cbusiness_constants_js = wr2.cbusiness + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // business_constants_js
export const ccolor_constants_js = wr2.ccolor + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // color_constants_js
export const ccommand_constants_js = wr2.ccommand + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // command_constants_js
export const cconfiguration_constants_js = wr2.cconfiguration + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // configuration_constants_js
export const cconstant_constants_js = wr2.cconstant + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // constant_constant_js
export const ccountry_constants_js = wr2.ccountry + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // country_constants_js
export const celement_constants_js = wr2.celement + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // element_constants_js
export const cgeneric_constants_js = wr2.cgeneric + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // generic_constants_js
export const cisotope_constants_js = wr2.cisotope + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // isotope_constants_js
export const cknot_constants_js = wr2.cknot + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // knot_constants_js
export const clanguage_constants_js = wr2.clanguage + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // language_constants_js
export const cmessage_constants_js = wr2.cmessage + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // message_constants_js
export const cnumeric_constants_js = wr2.cnumeric + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // numeric_constants_js
export const cphonic_constants_js = wr2.cphonic + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // phonic_constants_js
export const cshape_constants_js = wr2.cshape + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // shape_constants_js
export const csystem_constants_js = wr2.csystem + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // system_constants_js
export const cunit_constants_js = wr2.cunit + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // unit_constants_js
export const cword_constants_js = wr2.cword + bas.cUnderscore + wr2.cconstants + bas.cUnderscore + bas.cjs; // word_constants_js

// Message constant constants
// Logging constant constants
export const cBEGIN_Function = wr2.cBEGIN + bas.cUnderscore + wr2.cFunction; // BEGIN_Function
export const cEND_Function = wr2.cEND + bas.cUnderscore + wr2.cFunction; // END_Function
export const cinputData = wr2.cinput + wr2.cData; // inputData
export const cInputData = wr2.cInput + wr2.cData; // InputData
export const cinputMetaData = wr2.cinput + wr2.cMetaData; // inputMetaData
export const cInputMetaData = wr2.cInput + wr2.cMetaData; // InputMetaData
export const cinputDataIs = wr2.cinput + wr2.cData + wr2.cIs; // inputDataIs
export const cinputMetaDataIs = wr2.cinput + wr2.cMetaData + wr2.cIs; // inputMetaDataIs
export const creturnDataIs = wr2.creturn + wr2.cData + wr2.cIs; // returnDataIs
export const cSpaceIsColonSpace = wr2.cSpace + wr2.cIs + wr2.cColon + wr2.cSpace; // cSpaceIsColonSpace

// System Messages constant constants
export const cCharacterGenerationMessage1 = wr2.cCharacter + wr2.cGeneration + wr2.cMessage + wr2.c1; // cCharacterGenerationMessage1
export const cCharacterGenerationMessage2 = wr2.cCharacter + wr2.cGeneration + wr2.cMessage + wr2.c2; // cCharacterGenerationMessage2
export const cCharacterGenerationMessage3 = wr2.cCharacter + wr2.cGeneration + wr2.cMessage + wr2.c3; // cCharacterGenerationMessage3
export const cCharacterGenerationMessage4 = wr2.cCharacter + wr2.cGeneration + wr2.cMessage + wr2.c4; // cCharacterGenerationMessage4
export const cCharacterGenerationMessage5 = wr2.cCharacter + wr2.cGeneration + wr2.cMessage + wr2.c5; // cCharacterGenerationMessage5
export const cMathOperationsMessage1 = wr2.cMath + wr2.cOperations + wr2.cMessage + wr2.c1; // cMathOperationsMessage1
export const cnumberOfCharactersToGenerateIs = wr2.cnumber + wr2.cOf + wr2.cCharacters + wr2.cTo + wr2.cGenerate + wr2.cIs; // cnumberOfCharactersToGenerateIs
export const cgenerateSpecialCharactersIs = wr2.cgeenrate + wr2.cSpecial + wr2.cCharacters + wr2.cIs; // cgenerateSpecialCharactersIs
export const callowableSpecialCharactersIs = wr2.callowable + wr2.cSpecial + wr2.cCharacters + wr2.cIs; // callowableSpecialCharactersIs
export const cspecifiedSuffixAndDomainIs = wr2.cspecified + wr2.cSuffix + wr2.cAnd + wr2.cDomain + wr2.cIs; // cspecifiedSuffixAndDomainIs
export const cfailureModeIs = wr2.cfailure + wr2.cMode + wr2.cIs; // cfailureModeIs
export const cprefixIs = wr2.cprefix + wr2.cIs; // cprefixIs
export const csuffixIs = wr2.csuffix + wr2.cIs; // csuffixIs
export const cWithoutTheAtSymbol = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol; // cWithoutTheAtSymbol
export const cWithoutThePrefix = wr2.cWithout + wr2.cThe + wr2.cPrefix; // cWithoutThePrefix
export const cWithoutTheSuffix = wr2.cWithout + wr2.cThe + wr2.cSuffix; // cWithoutTheSuffix
export const cWithoutTheAtSymbolAndPrefix = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cAnd + wr2.cPrefix; // cWithoutTheAtSymbolAndPrefix
export const cDEFAULTWithoutTheAtSymbolAndPrefix = wr2.cDEFAULT + wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cAnd + wr2.cPrefix; // cDEFAULTWithoutTheAtSymbolAndPrefix
export const cdomainNameIs = wr2.cdomain + wr2.cName + wr2.cIs; // cdomainNameIs
export const cnumberOfPrefixCharactersIs = wr2.cnumber + wr2.cOf + wr2.cPrefix + wr2.cCharacters + wr2.cIs; // cnumberOfPrefixCharactersIs
export const cnumberOfSuffixCharactersIs = wr2.cnumber + wr2.cOf + wr2.cSuffix + wr2.cCharacters + wr2.cIs; // cnumberOfSuffixCharactersIs
export const cWithoutTheDotSymbol = wr2.cWithout + wr2.cThe + wr2.cDot + wr2.cSymbol; // cWithoutTheDotSymbol
export const cWithoutTheAtAndDotSymbols = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cAnd + wr2.cDot + wr2.cSymbols; // cWithoutTheAtAndDotSymbols
export const cWithoutTheDomainName = wr2.cWithout + wr2.cThe + wr2.cDomain + wr2.cName; // cWithoutTheDomainName
export const cWithoutTheAtSymbolAndDomainName = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutTheAtSymbolAndDomainName
export const cWithoutTheDotAndDomainName = wr2.cWithout + wr2.cThe + wr2.cDot + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutTheDotAndDomainName
export const cWithoutTheAtSymbolDotAndDomainName = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cDot + wr2.cAnd + wr2.cDoman + wr2.cName; // cWithoutTheAtSymbolDotAndDomainName
export const cWithoutTheDotAndPrefix = wr2.cWithout + wr2.cThe + wr2.cDot + wr2.cAnd + wr2.cPrefix; // cWithoutTheDotAndPrefix
export const cWithoutTheAtSymbolAndSuffix = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cAnd + wr2.cSuffix; // cWithoutTheAtSymbolAndSuffix
export const cWithoutTheDotAndSuffix = wr2.cWithout + wr2.cThe + wr2.cDot + wr2.cAnd + wr2.cSuffix; // cWithoutTheDotAndSuffix
export const cWithoutTheAtSymbolDotAndPrefix = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cDot + wr2.cAnd + wr2.cPrefix; // cWithoutTheAtSymbolDotAndPrefix
export const cWithoutTheAtSymbolDotAndSuffix = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cDot + wr2.cAnd + wr2.cSuffix; // cWithoutTheAtSymbolDotAndSuffix
export const cWithoutTheAtSymbolDotPrefixAndSuffix = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cDot + wr2.cPrefix + wr2.cAnd + wr2.cSuffix; // cWithoutTheAtSymbolDotPrefixAndSuffix
export const cWithoutThePrefixAndDomainName = wr2.cWithout + wr2.cThe + wr2.cPrefix + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutThePrefixAndDomainName
export const cWithoutTheSuffixAndDomainName = wr2.cWithout + wr2.cThe + wr2.cSuffix + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutTheSuffixAndDomainName
export const cWithoutThePrefixAndSuffix = wr2.cWithout + wr2.cThe + wr2.cPrefix + wr2.cAnd + wr2.cSuffix; // cWithoutThePrefixAndSuffix
export const cWithoutThePrefixSuffixAndDomainName = wr2.cWithout + wr2.cThe + wr2.cPrefix + wr2.cSuffix + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutThePrefixSuffixAndDomainName
export const cWithoutTheAtSymbolPrefixAndDomainName = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cPrefix + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutTheAtSymbolPrefixAndDomainName
export const cWithoutTheDotPrefixAndDomainName = wr2.cWithout + wr2.cThe + wr2.cDot + wr2.cPrefix + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutTheDotPrefixAndDomainName
export const cWithoutTheAtSymbolSuffixAndDomainName = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cSuffix + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutTheAtSymbolSuffixAndDomainName
export const cWithoutTheDotSuffixAndDomainName = wr2.cWithout + wr2.cThe + wr2.cDot + wr2.cSuffix + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutTheDotSuffixAndDomainName
export const cWithoutTheAtSymbolPrefixSuffixAndDomainName = wr2.cWithout + wr2.cThe + wr2.cAt + wr2.cSymbol + wr2.cPrefix + wr2.cSuffix + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutTheAtSymbolPrefixSuffixAndDomainName
export const cWithoutTheDotPrefixSuffixAndDomainName = wr2.cWithout + wr2.cThe + wr2.cDot + wr2.cPrefix + wr2.cSuffix + wr2.cAnd + wr2.cDomain + wr2.cName; // cWithoutTheDotPrefixSuffixAndDomainName
export const cWithoutThePrefixSuffixAndAtSymbol = wr2.cWithout + wr2.cThe + wr2.cPrefix + wr2.cSuffix + wr2.And + wr2.cAt + wr2.cSymbol; // cWithoutThePrefixSuffixAndAtSymbol
export const cWithoutThePrefixSuffixAndDot = wr2.cWithout + wr2.cThe + wr2.cPrefix + wr2.cSuffix + wr2.cAnd + wr2.cDot; // cWithoutThePrefixSuffixAndDot
export const cIndexOfTheSpace = wr2.cIndex + wr2.cOf + wr2.cThe + wr2.cSpace; // cIndexOfTheSpace
export const cisResolvingAs = wr2.cis + wr2.cResolving + wr2.cAs; // cisResolvingAs
export const cparsedStringSpaceTerm = wr2.cparsed + wr2.cString + wr2.cSpace + wr2.cTerm; // cparsedStringSpaceTerm
export const cstring1Is = wr2.cstring + wr2.c1 + wr2.cIs; // cstring1Is
export const cstring2Is = wr2.cstring + wr2.c2 + wr2.cIs; // cstring2Is
export const cvariation0ValueIs = wr2.cvariation + wr2.c0 + wr2.cValue + wr2.cIs; // cvariation0ValueIs
export const cvariation1ValueIs = wr2.cvariation + wr2.c1 + wr2.cValue + wr2.cIs; // cvariation1ValueIs
export const ciValueIs = bas.ci + wr2.cValue + wr2.cIs; // ciValueIs
export const cjValueIs = bas.cj + wr2.cValue + wr2.cIs; // cjValueIs
export const cdeletionCostIs = wr2.cdeletion + wr2.cCost + wr2.cIs; // cdeletionCostIs
export const cinsertionCostIs = wr2.cinsertion + wr2.cCost + wr2.cIs; // cinsertionCostIs
export const csubstitutionCostIs = wr2.csubstitution + wr2.cCost + wr2.cIs; // csubstitutionCostIs
export const ccamelCaseWordCountIs = wr2.ccamel + wr2.cCase + wr2.cWord + wr2.cCount + wr2.cIs; // ccamelCaseWordCountIs
export const ccontainsAcronymIs = wr2.ccontains + wr2.cAcronym + wr2.cIs; // ccontainsAcronymIs
export const cspacesCountIs = wr2.cspaces + wr2.cCount + wr2.cIs; // cspacesCountIs
export const cperiodCountIs = wr2.cperiod + wr2.cCount + wr2.cIs; // cperiodCountIs
export const cdashCountIs = wr2.cdash + wr2.cCount + wr2.cIs; // cdashCountIs
export const cunderscoreCountIs = wr2.cunderscore + wr2.cCount + wr2.cIs; // cunderscoreCountIs
export const cplusCountIs = wr2.cplus + wr2.cCount + wr2.cIs; // plusCountIs
export const cpercentCountIs = wr2.cpercent + wr2.cCount + wr2.cIs; // percentCountIs
export const cstringDeltaValueIs = wr2.cstring + wr2.cDelta + wr2.cValue + wr2.cIs; // cstringDeltaValueIs
export const cFilenamesMatch = wr2.cFilenames + wr2.cMatch; // cFilenamesMatch
export const cFilenamesDoNotMatch = wr2.cFilenames + bas.cDo + wr2.cNot + wr2.cMatch; // cFilenamesDoNotMatch
export const cArrayElementsMatch = wr2.cArray + wr2.cElements + wr2.cMatch; // cArrayElementsMatch
export const cArrayElementsDoNotMatch = wr2.cArray + wr2.cElements + bas.cDo + wr2.cNot + wr2.cMatch; // cArrayElementsDoNotMatch
export const clineArray2Is = wr2.cline + wr2.cArray + wr2.c2 + wr2.cIs; // clineArray2Is
export const cSuggestedLineOfCodeIs = wr2.cSuggested + wr2.cline + wr2.cOf + wr2.cCode + wr2.cIs; // cSuggestedLineOfCodeIs
export const cErrorUnknownConstantFile = wr2.cError + wr2.cUnknown + wr2.cConstant + wr2.cFile; // cErrorUnknownConstantFile
export const cconstantsTypesKeysIs = wr2.cconstants + wr2.cTypes + wr2.cKeys + wr2.cIs; // cconstantsTypesKeysIs
export const cconstantTypeKeyIs = wr2.cconstants + wr2.cType + wr2.cKey + wr2.cIs; // cconstantTypeKeyIs
export const cconstantTypeValuesIs = wr2.cconstants + wr2.cType + wr2.cValues + wr2.cIs; // cconstantTypeValuesIs
export const cconstantsKeysIs = wr2.cconstants + wr2.cKeys + wr2.cIs; // cconstantsKeysIs
export const cconstantKeyIs = wr2.cconstant + wr2.cKey + wr2.cIs; // cconstantKeyIs
export const cconstantActualValueIs = wr2.cconstant + wr2.cActual + wr2.cValue + wr2.cIs; // cconstantActualValueIs
export const cconstantNameIs = wr2.cconstant + wr2.cName + wr2.cIs; // cconstantNameIs
export const cconstantValueIs = wr2.cconstant + wr2.cValue + wr2.cIs; // cconstantValueIs
export const cdeltaLengthIs = wr2.cdelta + wr2.cLength + wr2.cIs; // cdeltaLengthIs
export const crecursiveSubStringIs = wr2.crecursive + wr2.cSubString + wr2.cIs; // crecursiveSubStringIs
export const cmaxStringLengthIs = wr2.cmax + wr2.cString + wr2.cLength + wr2.cIs; // cmaxStringLengthIs
export const cminStringLengthIs = wr2.cmin + wr2.cString + wr2.cLength + wr2.cIs; // cminStringLengthIs
export const ccurrentMasterStringArrayElementIs = wr2.ccurrent + wr2.cMaster + wr2.cString + wr2.cArray + wr2.cElement + wr2.cIs; // ccurrentMasterStringArrayElementIs
export const cConstantDoesNotExist = wr2.cConstant + wr2.cDoes + wr2.cNot + wr2.cExist; // cConstantDoesNotExist
export const cConstantDoesExist = wr2.cConstant + wr2.cDoes + wr2.cExist; // cConstantDoesExist
export const cBEGIN_ithLoop = wr2.cBEGIN + bas.cUnderscore + phn.cith + wr2.cLoop; // cBEGIN_ithLoop
export const cBEGIN_ithIteration = wr2.cBEGIN + bas.cUnderscore + phn.cith + wr2.cIteration; // cBEGIN_ithIteration
export const cBEGIN_jthLoop = wr2.cBEGIN + bas.cUnderscore + phn.cjth + wr2.cLoop; // cBEGIN_jthLoop
export const cBEGIN_kthIteration = wr2.cBEGIN + bas.cUnderscore + phn.ckth + wr2.cIteration; // cBEGIN_kthIteration
export const cEND_ithLoop = wr2.cEND + bas.cUnderscore + phn.cith + wr2.cLoop; // cEND_ithLoop
export const cEND_ithIteration = wr2.cEND + bas.cUnderscore + phn.cith + wr2.cIteration; // cEND_ithIteration
export const cEND_jthLoop = wr2.cEND + bas.cUnderscore + phn.cjth + wr2.cLoop; // cEND_jthLoop
export const cEND_kthIteration = wr2.cEND + bas.cUnderscore + phn.ckth + wr2.cIteration; // cEND_kthIteration
export const ccurrentCommandIs = wr2.ccurrent + wr2.cCommand + wr2.cIs; // ccurrentCommandIs
export const caliasListIs = wr2.calias + wr2.cList + wr2.cIs; // caliasListIs
export const ccurrentAliasIs = wr2.ccurrent + wr2.cAlias + wr2.cIs; // ccurrentAliasIs
export const cduplicateAliasCountIs = wr2.cduplicate + wr2.cAlias + wr2.cCount + wr2.cIs; // cduplicateAliasCountIs
export const cduplicateCommandAliasIs = wr2.cduplicate + wr2.cCommand + wr2.cAlias + wr2.cIs; // cduplicateCommandAliasIs
export const ccommandWordAliasesBeforeChangeIs = wr2.ccommand + wr2.cWord + wr2.cAliases + wr2.cBefore + wr2.cChange + wr2.cIs; // ccommandWordAliasesBeforeChangeIs
export const ccommandWordAliasesAfterChangeIs = wr2.ccommand + wr2.cWord + wr2.cAliases + wr2.cAfter + wr2.cChange + wr2.cIs; // ccommandWordAliasesAfterChangeIs
export const cmasterCommandWordAlisesArrayIs = wr2.cmaster + wr2.cCommand + wr2.cWord + wr2.cAliases + wr2.cArray + wr2.cIs; // cmasterCommandWordAlisesArrayIs
export const cmasterArrayIndexIs = wr2.cmater + wr2.cArray + wr2.cIndex + wr2.cIs; // cmasterArrayIndexIs
export const cCommandAliasesAre = wr2.cCommand + wr2.cAliases + wr2.cAre; // cCommandAliasesAre
export const cexpandedLehmerCodeArrayIs = wr2.cexpanded + wr2.cLehmer + wr2.cCode + wr2.cAray + wr2.cIs; // cexpandedLehmerCodeArrayIs
export const cindexOfExpansionIs = wr2.cindex + wr2.cOf + wr2.cExpansion + wr2.cIs; // cindexOfExpansionIs
export const carrayToBeExpandedIs = wr2.carray + wr2.cTo + wr2.cBe + wr2.cExpanded + wr2.cIs; // carrayToBeExpandedIs
export const climitOfExpansionIs = wr2.climit + wr2.cOf + wr2.cExpansion + wr2.cIs; // climitOfExpansionIs
export const cpushingLehmerCodeArray1ToReturnDataValue = wr2.cpushing + wr2.cLehmer + wr2.cCode + wr2.cArray + wr2.c1 + wr2.cTo + wr2.cReturn + wr2.cData + wr2.cValue; // cpushingLehmerCodeArray1ToReturnDataValue
export const creturnDataAfterPushIs = wr2.creturn + wr2.cData + wr2.cAfter + wr2.cPush + wr2.cIs; // creturnDataAfterPushIs
export const creturnDataAfterLevel1Is = wr2.creturn + wr2.cData + wr2.cAfter + wr2.cLevel + wr2.c1 + wr2.cIs; // creturnDataAfterLevel1Is
export const carrayToBeExpandedDotLengthIs = wr2.carray + wr2.cTo + wr2.cBe + wr2.cExpanded + wr2.cDot + wr2.cLength + wr2.cIs; // carrayToBeExpandedDotLengthIs
export const creturnDataDotLengthIs = wr2.creturn + wr2.cData + wr2.cDot + wr2.cLength + wr2.cIs; // creturnDataDotLengthIs
export const creturnDataBeforePopIs = wr2.creturn + wr2.cData + wr2.cBefore + wr2.cPop + wr2.cIs; // creturnDataBeforePopIs
export const creturnDataAfterPopIs = wr2.creturn + wr2.cData + wr2.cAfter + wr2.cPop + wr2.cIs; // creturnDataAfterPopIs
export const cmasterTempReturnDataBeforeRecursiveCallIs = wr2.cmaster + wr2.cTemp + wr2.cReturn + wr2.cData + wr2.cData + wr2.cBefore + wr2.cRecursive + wr2.cCall + wr2.cIs; // cmasterTempReturnDataBeforeRecursiveCallIs
export const ctempReturnData1Is = wr2.ctemp + wr2.cReturn + wr2.cData + wr2.c1 + wr2.cIs; // ctempReturnData1Is
export const ctempReturnData1DotLengthIs = wr2.ctemp + wr2.cReturn + wr2.cData + wr2.c1 + wr2.Dot + wr2.cLength + wr2.cIs; // ctempReturnData1DotLengthIs
export const cpushingTempReturnData1Kvalue = wr2.cpushing + wr2.cTemp + wr2.cReturn + wr2.cData + wr2.c1 + bas.cK + wr2.cvalue; // cpushingTempReturnData1Kvalue
export const cmasterTempReturnDataAfterRecursiveCallIs = wr2.cmaster + wr2.cTemp + wr2.cReturn + wr2.cData + wr2.cAfter + wr2.cRecursive + wr2.cCall + wr2.cIs; // cmasterTempReturnDataAfterRecursiveCallIs
export const clookupIndexIs = wr2.clookup + wr2.cIndex + wr2.cIs; // clookupIndexIs
export const clookupValueIs = wr2.clookup + wr2.cValue + wr2.cIs; // clookupValueIs
export const cDataCatagoryShouldBe = wr2.cData + wr2.cCatagory + wr2.cShould + wr2.cBe; // cDataCatagoryShouldBe
export const cDataCatagoryDetailNameShouldBe = wr2.cData + wr2.cCatagory + wr2.cDetail + wr2.cName + wr2.cShould + wr2.cBe; // cDataCatagoryDetailNameShouldBe
export const cKeywordNameShouldBe = wr2.cKeyword + wr2.cName + wr2.cShould + wr2.cBe; // cKeywordNameShouldBe
export const cpathElementIs = wr2.cpath + wr2.cElement + wr2.cIs; // cpathElementIs
export const ccaseIEqual0 = wr2.ccase + bas.cI + wr2.cEqual + wr2.c0; // ccaseIEqual0
export const ccasePathElementEqual = wr2.ccase + wr2.cPath + wr2.cElement + wr2.cEqual; // ccasePathElementEqual
export const ccaseElse = wr2.ccase + wr2.cElse; // ccaseElse
export const creturnDataSoFarIs = wr2.creturn + wr2.cData + bas.cSo + wr2.cFar + wr2.cIs; // creturnDataSoFarIs
export const cpathArrayIs = wr2.cpath + wr2.Array + wr2.cIs; // cpathArrayIs
export const ccurrentPathElementIs = wr2.ccurrent + wr2.cPath + wr2.cElement + wr2.cIs; // ccurrentPathElementIs
export const cAttemptingToLoadXmlData = wr2.cAttempting + wr2.cTo + wr2.cLoad + wr2.cXml + wr2.cData; // cAttemptingToLoadXmlData
export const cAttemptingToLoadCsvData = wr2.cAttempting + wr2.cTo + wr2.cLoad + wr2.cCsv + wr2.cData; // cAttemptingToLoadCsvData
export const cAttemptingToLoadJsonData = wr2.cAttempting + wr2.cTo + wr2.cLoad + wr2.cJson + wr2.cData; // cAttemptingToLoadJsonData
export const cLoadedDataIs = wr2.cLoaded + wr2.cData + wr2.cIs; // cLoadedDataIs
export const cattributeArrayIs = wr2.cattribute + wr2.cArray + wr2.cIs; // cattributeArrayIs
export const cattributeArray0Is = wr2.cattribute + wr2.cArray + wr2.c0 + wr2.cIs; // cattributeArray0Is
export const cattributeArray1Is = wr2.cattribute + wr2.cArray + wr2.c1 + wr2.cIs; // attributeArray1Is
export const carrayIs = wr2.carray + wr2.cIs; // carrayIs
export const cvalueIs = wr2.cvalue + wr2.cIs; // cvalueIs
export const cmyFunctionIs = wr2.cmy + wr2.cFunction + wr2.cIs; // cmyFunctionIs
export const carrayInputObjectIsNotAnArray = wr2.carray + wr2.cInput + wr2.cObject + wr2.cIs + wr2.cNot + bas.cAn + wr2.cArray; // carrayInputObjectIsNotAnArray
export const cTheValueWasFoundInTheArray = wr2.cThe + wr2.cValue + wr2.cWas + wr2.cFound + bas.cIn + wr2.cThe + wr2.cArray; // cTheValueWasFoundInTheArray
export const cTheValueWasNotFoundInTheArray = wr2.cThe + wr2.cValue + wr2.cWas + wr2.cNot + wr2.cFound + bas.cIn + wr2.cThe + wr2.cArray; // cTheValueWasNotFoundInTheArray
export const coriginalStringIs = wr2.corignal + wr2.cString + wr2.cIs; // coriginalStringIs
export const cindexIs = wr2.cindex + wr2.cIs; // cindexIs
export const creplacementIs = wr2.creplacement + wr2.cIs; // creplacementIs
export const cDEPLOY_APPLICATION = wr2.cDEPLOY + bas.cUnderscore + wr2.cAPPLICATION; // cDEPLOY_APPLICATION
export const cRELEASE_APPLICATION = wr2.cRELEASE + bas.cUnderscore + wr2.cAPPLICATION; // cRELEASE_APPLICATION
export const cDeploymentWasCompleted = wr2.cDeployment + wr2.cWas + wr2.cCompleted; // cDeploymentWasCompleted
export const cDeploymentFailed = wr2.cDeployment + wr2.cFailed; // cDeploymentFailed
export const cReleaseFailed = wr2.cRelease + wr2.cFailed; // cReleaseFailed
// let cinputDataIis = wr2.cinput + wr2.cData + bas.cI + wr2.cis; // cinputDataIis
export const caggregateCommandStringIs = wr2.caggregate + wr2.cCommand + wr2.cString + wr2.cIs; // caggregateCommandStringIs
export const cmetaDataParametersIs = wr2.cmeta + wr2.cData + wr2.cParameters + wr2.cIs; // cmetaDataParametersIs
export const cmetaDataParametersLengthIs = wr2.cmeta + wr2.cData + wr2.cParameters + wr2.cLength + wr2.cIs; // cmetaDataParametersLengthIs
export const cmetaDataPathAndFilenameIs = wr2.cmeta + wr2.cData + wr2.cPath + wr2.cAnd + wr2.cFilename + wr2.cIs; // cmetaDataPathAndFilenameIs
export const cpathAndFilenameIs = wr2.cpath + wr2.cAnd + wr2.cFilename + wr2.cIs; // cpathAndFilenameIs
export const ccontentsAre = wr2.ccontents + wr2.cAre; // ccontentsAre
export const ccontentsOfDare = wr2.ccontents + wr2.cOf + wr2.cDare; // ccontentsOfDare
export const cBEGIN_ithIterationOfInputDataArray = wr2.cBEGIN + bas.cUnder + phn.cith + wr2.cIteration + wr2.cOf + wr2.cInput + wr2.cData + wr2.cArray; // cBEGIN_ithIterationOfInputDataArray
export const ccurrentRuleIs = wr2.ccurrent + wr2.cRule + wr2.cIs; // ccurrentRuleIs
export const crulesIs = wr2.crules + wr2.cIs; // crulesIs
export const cruleInputDataIs = wr2.crule + wr2.cInput + wr2.cData + wr2.cIs; // cruleInputDataIs
export const cruleInputMetaData = wr2.crule + wr2.cInput + wr2.cMeta + wr2.cData; // cruleInputMetaData
export const cBusinessRuleStartTimeIs = wr2.cBusness + wr2.cRule + wr2.cStart + wr2.cTime + wr2.cIs; // cBusinessRuleStartTimeIs
export const cBusinessRuleEndTimeIs = wr2.cBusiness + wr2.cRule + wr2.cEnd + wr2.cTime + wr2.cIs; // cBusinessRuleEndTimeIs
export const cBusinessRuleRunTimeIs = wr2.cBusiness + wr2.cRule + wr2.cRun + wr2.cTme + wr2.cIs; // cBusinessRuleRunTimeIs
export const ccommandStringBeforeAttemptedDelimiterSwapIs = wr2.ccommand + wr2.cString + wr2.cBefore + wr2.cAttempted + wr2.cDelimiter + wr2.cSwap + wr2.cIs; // ccommandStringBeforeAttemptedDelimiterSwapIs
export const creplaceCharacterWithCharacterRuleIs = wr2.creplace + wr2.cCharacter + wr2.cWith + wr2.cCharacter + wr2.cRule + wr2.cIs; // creplaceCharacterWithCharacterRuleIs
export const cRuleOutputIs = wr2.cRule + wr2.cOutput + wr2.cIs; // cRuleOutputIs
export const ccamelCaseCommandNameArrayIs = wr2.ccamel + wr2.cCase + wr2.cCommand + wr2.cName + wr2.cArray + wr2.cIs; // ccamelCaseCommandNameArrayIs
export const ccurrentCommandWordIs = wr2.ccurrent + wr2.cCommand + wr2.cWord + wr2.cIs; // ccurrentCommandWordIs
export const cPARSER_ERROR = wr2.cPARSER + bas.cUnderscore + wr2.cERROR; // cPARSER_ERROR
export const ccommandAliasDataStructureIs = wr2.ccommand + wr2.cAlias + wr2.cData + wr2.cStructure + wr2.cIs; // ccommandAliasDataStructureIs
export const cuserDefinedConstantIs = wr2.cuser + wr2.cDefned + wr2.cConstant + wr2.cIs; // cuserDefinedConstantIs
export const cwordCountIs = wr2.cword + wr2.cCount + wr2.cIs; // cwordCountIs
export const cwordsArrayIs = wr2.cwords + wr2.cArray + wr2.cIs; // cwordsArrayIs
export const cOptimizedConstantDefinitionForWord = wr2.cOptimized + wr2.cConstant + wr2.cDefinition + wr2.cFor + wr2.cWord; // cOptimizedConstantDefinitionForWord
export const cuserDefinedConstantListIs = wr2.cuser + wr2.cDefined + wr2.cConstant + wr2.cList + wr2.cIs; // cuserDefinedConstantListIs
export const cuserDefinedConstantListContainsComas = wr2.cuser + wr2.cDefined + wr2.cConstant + wr2.cList + wr2.cContains + wr2.cComas; // cuserDefinedConstantListContainsComas
export const cuserDefinedConstantsListArrayIs = wr2.cuser + wr2.cDefined + wr2.cConstants + wr2.cList + wr2.cArray + wr2.cIs; // cuserDefinedConstantsListArrayIs
export const cuserDefinedConstantsListDoesNotContainComas = wr2.cuser + wr2.cDefined + wr2.cConstants + wr2.cList + wr2.cDoes + wr2.cNot + wr2.cContain + wr2.cComas; // cuserDefinedConstantsListDoesNotContainComas
export const ccommonPatternsArrayIs = wr2.ccommon + wr2.cPatterns + wr2.cArray + wr2.cIs; // ccommonPatternsArrayIs
export const cbusinessRuleCounterIs = wr2.cbusiness + wr2.cRule + wr2.cConter + wr2.cIs; // cbusinessRuleCounterIs
export const cbusinessRulePerformanceSumIs = wr2.cbusiness + wr2.cRule + wr2.cPerformance + wr2.cSum + wr2.cIs; // cbusinessRulePerformanceSumIs
export const cDoneBusinessRulePerformanceSumIs = wr2.cDone + wr2.cBusiness + wr2.cRule + wr2.cPerformance + wr2.cSum + wr2.cIs; // cDoneBusinessRulePerformanceSumIs
export const caverageIs = wr2.caverage + wr2.cIs; // caverageIs
export const cbusinessRulePerformanceStdSumIs = wr2.cbusiness + wr2.cRule + wr2.cPerformance + phn.cStd + wr2.cSum + wr2.cIs; // cbusinessRulePerformanceStdSumIs
export const cDoneBusinessRulePerformanceStdSumIs = wr2.cDone + wr2.cBusienss + wr2.cRule + wr2.cPerformance + phn.cStd + wr2.cSum + wr2.cIs; // cDoneBusinessRulePerformanceStdSumIs
export const cstandardDevIs = wr2.cstandard + phn.cDev + wr2.cIs; // cstandardDevIs
export const ccommandCounterIs = wr2.ccommand + wr2.cCounter + wr2.cIs; // ccommandCounterIs
export const ccommandPerformanceSumIs = wr2.ccommand + wr2.cPerformance + wr2.cSum + wr2.cIs; // ccommandPerformanceSumIs
export const cDoneCommandPerformanceSumIs = wr2.cDone + wr2.cCommand + wr2.cPerformance + wr2.cSum + wr2.cIs; // cDoneCommandPerformanceSumIs
export const ccommandPerformanceStdSumIs = wr2.ccommand + wr2.cPerformance + phn.cStd + wr2.cSum + wr2.cIs; // ccommandPerformanceStdSumIs
export const cDoneCommandPerformanceStdSumIs = wr2.cDone + wr2.cCommand + wr2.cPerformance + phn.cStd + wr2.cSum + wr2.cIs; // cDoneCommandPerformanceStdSumIs
export const ccolorKeysIs = wr2.ccolor + wr2.cKeys + wr2.cIs; // ccolorKeysIs
export const ccurrentColorNameIs = wr2.ccurrent + wr2.cColor + wr2.cName + wr2.cIs; // ccurrentColorNameIs
export const ccurrentColorObjectIs = wr2.ccurrent + wr2.cColor + wr2.cObject + wr2.cIs; // ccurrentColorObjectIs
export const ccurrentColorHexValueIs = wr2.ccurrent + wr2.cColor + wr2.cHex + wr2.cValue + wr2.cIs; // ccurrentColorHexValueIs
export const cruleOutputIs = wr2.crule + wr2.cOutput + wr2.cIs; // cruleOutputIs
export const cBeginPhase1ConstantsValidation = wr2.cBegin + wr2.cPhase + wr2.c1 + wr2.cConstants + wr2.cValidation; // cBeginPhase1ConstantsValidation
export const cEndPhase1ConstantsValidation = wr2.cEnd + wr2.cPhase + wr2.c1 + wr2.cConstants + wr2.cValidation; // cEndPhase1ConstantsValidation
export const cBeginPhase2ConstantsValidation = wr2.cBegin + wr2.cPhase + wr2.c2 + wr2.cConstants + wr2.cValidation; // cBeginPhase2ConstantsValidation
export const cEndPhase2ConstantsValidation = wr2.cEnd + wr2.cPhase + wr2.c2 + wr2.cConstants + wr2.cValidation; // cEndPhase2ConstantsValidation
export const cconstantsPathIs = wr2.cconstants + wr2.cPath + wr2.cIs; // cconstantsPathIs
export const cresolvedConstantsPath_BasicIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cBasic + wr2.cIs; // cresolvedConstantsPath_BasicIs
export const cresolvedConstantsPath_BusinessIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cBusiness + wr2.cIs; // cresolvedConstantsPath_BusinessIs
export const cresolvedConstantsPath_ColorIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cColor + wr2.cIs; // cresolvedConstantsPath_ColorIs
export const cresolvedConstantsPath_CommandIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cCommand + wr2.cIs; // cresolvedConstantsPath_CommandIs
export const cresolvedConstantsPath_ConfigurationIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cConfiguration + wr2.cIs; // cresolvedConstantsPath_ConfigurationIs
export const cresolvedConstantsPath_CountryIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cCountry + wr2.cIs; // cresolvedConstantsPath_CountryIs
export const cresolvedConstantsPath_ElementIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cElement + wr2.cIs; // cresolvedConstantsPath_ElementIs
export const cresolvedConstantsPath_GenericIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cGeneric + wr2.cIs; // cresolvedConstantsPath_GenericIs
export const cresolvedConstantsPath_IsotopeIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cIsotope + wr2.cIs; // cresolvedConstantsPath_IsotopeIs
export const cresolvedConstantsPath_KnotIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cKnot + wr2.cIs; // cresolvedConstantsPath_KnotIs
export const cresolvedConstantsPath_LanguageIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cLanguage + wr2.cIs; // cresolvedConstantsPath_LanguageIs
export const cresolvedConstantsPath_MessageIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cMessage + wr2.cIs; // cresolvedConstantsPath_MessageIs
export const cresolvedConstantsPath_NumericIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cNumeric + wr2.cIs; // cresolvedConstantsPath_NumericIs
export const cresolvedConstantsPath_PhonicIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cPhonic + wr2.cIs; // cresolvedConstantsPath_PhonicIs
export const cresolvedConstantsPath_ShapeIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cShape + wr2.cIs; // cresolvedConstantsPath_ShapeIs
export const cresolvedConstantsPath_SystemIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cSystem + wr2.cIs; // cresolvedConstantsPath_SystemIs
export const cresolvedConstantsPath_UnitIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cUnit + wr2.cIs; // cresolvedConstantsPath_UnitIs
export const cresolvedConstantsPath_WordIs = wr2.cresolved + wr2.cConstants + wr2.cPath + bas.cUnderscore + wr2.cWord + wr2.cIs; // cresolvedConstantsPath_WordIs
export const cBasicConstantsPhase1Validation = wr2.cBasic + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cBasicConstantsPhase1Validation
export const cBusinessConstantsPhase1Validation = wr2.cBusiness + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cBusinessConstantsPhase1Validation
export const cColorConstantsPhase1Validation = wr2.cColor + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cColorConstantsPhase1Validation
export const cCommandConstantsPhase1Validation = wr2.cCommand + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cCommandConstantsPhase1Validation
export const cConfigurationConstantsPhase1Validation = wr2.cConfiguration + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cConfigurationConstantsPhase1Validation
export const cCountryConstantsPhase1Validation = wr2.cCountry + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cCountryConstantsPhase1Validation
export const cElementConstantsPhase1Validation = wr2.cElement + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cElementConstantsPhase1Validation
export const cGenericConstantsPhase1Validation = wr2.cGeneric + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cGenericConstantsPhase1Validation
export const cIsotopeConstantsPhase1Validation = wr2.cIsotope + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cIsotopeConstantsPhase1Validation
export const cKnotConstantsPhase1Validation = wr2.cKnot + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cKnotConstantsPhase1Validation
export const cLanguageConstantsPhase1Validation = wr2.cLanguage + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cLanguageConstantsPhase1Validation
export const cMessageConstantsPhase1Validation = wr2.cMessage + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cMessageConstantsPhase1Validation
export const cNumericalConstantsPhase1Validation = wr2.cNumerical + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cNumericalConstantsPhase1Validation
export const cPhonicConstantsPhase1Validation = wr2.cPhonic + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cPhonicConstantsPhase1Validation
export const cShapeConstantsPhase1Validation = wr2.cShape + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cShapeConstantsPhase1Validation
export const cSystemConstantsPhase1Validation = wr2.cSystem + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cSystemConstantsPhase1Validation
export const cUnitConstantsPhase1Validation = wr2.cUnit + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cUnitConstantsPhase1Validation
export const cWordConstantsPhase1Validation = wr2.cWord + wr2.cConstants + wr2.cPhase + wr2.c1 + wr2.cValidation; // cWordConstantsPhase1Validation
export const cBasicConstantsPhase2Validation = wr2.cBasic + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cBasicConstantsPhase2Validation
export const cBusinessConstantsPhase2Validation = wr2.cBusiness + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cBusinessConstantsPhase2Validation
export const cColorConstantsPhase2Validation = wr2.cColor + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cColorConstantsPhase2Validation
export const cCommandConstantsPhase2Validation = wr2.cCommand + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cCommandConstantsPhase2Validation
export const cConfigurationConstantsPhase2Validation = wr2.cConfiguration + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cConfigurationConstantsPhase2Validation
export const cCountryConstantsPhase2Validation = wr2.cCountry + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cCountryConstantsPhase2Validation
export const cElementConstantsPhase2Validation = wr2.cElement + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cElementConstantsPhase2Validation
export const cGenericConstantsPhase2Validation = wr2.cGeneric + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cGenericConstantsPhase2Validation
export const cIsotopeConstantsPhase2Validation = wr2.cIsotope + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cIsotopeConstantsPhase2Validation
export const cKnotConstantsPhase2Validation = wr2.cKnot + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cKnotConstantsPhase2Validation
export const cLanguageConstantsPhase2Validation = wr2.cLanguage + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cLanguageConstantsPhase2Validation
export const cMessageConstantsPhase2Validation = wr2.cMessage + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cMessageConstantsPhase2Validation
export const cNumericalConstantsPhase2Validation = wr2.cNumerical + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cNumericalConstantsPhase2Validation
export const cPhonicConstantsPhase2Validation = wr2.cPhonic + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cPhonicConstantsPhase2Validation
export const cShapeConstantsPhase2Validation = wr2.cShape + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cShapeConstantsPhase2Validation
export const cSystemConstantsPhase2Validation = wr2.cSystem + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cSystemConstantsPhase2Validation
export const cUnitConstantsPhase2Validation = wr2.cUnit + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cUnitConstantsPhase2Validation
export const cWordConstantsPhase2Validation = wr2.cWord + wr2.cConstants + wr2.cPhase + wr2.c2 + wr2.cValidation; // cWordConstantsPhase2Validation
export const ccommandStringIs = wr2.ccmmand + wr2.cString + wr2.cIs; // ccommandStringIs
export const ccommandDelimiterIs = wr2.ccommand + wr2.cDelimiter + wr2.cIs; // ccommandDelimiterIs
export const ccommandToExecuteBeforeTheAliasIs = wr2.ccommand + wr2.cTo + wr2.cExecute + wr2.cBefore + wr2.cThe + wr2.cAlias + wr2.cIs; // ccommandToExecuteBeforeTheAliasIs
export const ccommandToExecuteAfterTheAliasIs = wr2.ccmmand + wr2.cTo + wr2.cExecute + wr2.cAfter + wr2.cThe + wr2.cAlias + wr2.cIs; // ccommandToExecuteAfterTheAliasIs
export const cWarningTheSpecifiedCommand = wr2.cWarning + wr2.cThe + wr2.cSpecified + wr2.cCommand; // cWarningTheSpecifiedCommand
export const cdoesNotExistPleaseTryAgain = wr2.cdoes + wr2.cNot + wr2.cExist + wr2.cPlease + wr2.cTry + wr2.cAgain; // cdoesNotExistPleaseTryAgain
export const ccommandStringContainsEitherSingleQuoteOrBackTickQuote = wr2.ccmmand + wr2.cString + wr2.cContains + wr2.cEither + wr2.cSingle + wr2.cQuote + wr2.cOr + wr2.cBack + wr2.cTick + wr2.cQuote; // ccommandStringContainsEitherSingleQuoteOrBackTickQuote
export const ccommandStringContainsSingleQuote = wr2.ccommand + wr2.cString + wr2.cContains + wr2.cSingle + wr2.cQuote; // ccommandStringContainsSingleQuote
export const cnumberOfSingleQuotesIsEven = wr2.cnumber + wr2.cOf + wr2.cSingle + wr2.cQuotes + wr2.cIs + wr2.cEven; // cnumberOfSingleQuotesIsEven
export const cFirstIndexIs = wr2.cFirst + wr2.cIndex + wr2.cIs; // cFirstIndexIs
export const ccommandStringAfterTaggingTheFirstStringDelimiter = wr2.ccommand + wr2.cString + wr2.cAfter + wr2.cTagging + wr2.cThe + wr2.cFirst + wr2.cSring + wr2.cDelimiter; // ccommandStringAfterTaggingTheFirstStringDelimiter
export const cAdditionalIndexIs = wr2.cAdditional + wr2.cIndex + wr2.cIs; // cAdditionalIndexIs
export const coddIndex = wr2.codd + wr2.cIndex; // coddIndex
export const cevenIndex = wr2.ceven + wr2.cIndex; // cevenIndex
export const ccommandStringAfterTaggingAnOddStringDelimiter = wr2.ccommand + wr2.cString + wr2.cAfter + wr2.cTagging + bas.cAn + wr2.cOdd + wr2.cString + wr2.cDelimiter; // ccommandStringAfterTaggingAnOddStringDelimiter
export const ccommandStringAfterTaggingAnEvenStringDelimiter = wr2.ccommand + wr2.cString + wr2.cAfter + wr2.cTagging + bas.cAn + wr2.cEven + wr2.cString + wr2.cDelimiter; // ccommandStringAfterTaggingAnEvenStringDelimiter
export const cpreSplitCommandStringIs = phn.cpre + wr2.cSplit + wr2.cCommand + wr2.cString + wr2.cIs; // cpreSplitCommandStringIs
export const cpostSplitCommandStringIs = wr2.cpost + wr2.cSplit + wr2.cCommand + wr2.cString + wr2.cIs; // cpostSplitCommandStringIs
export const cpreSplitCommandStringElementIs = phn.cpre + wr2.cSplit + wr2.cCommand + wr2.cString + wr2.cElement + wr2.cIs; // cpreSplitCommandStringElementIs
export const cDoingStraightSplitCommandString = wr2.cDoing + wr2.cStraight + wr2.cSplit + wr2.cCommand + wr2.cString; // cDoingStraightSplitCommandString
export const cCommandStartTimeIs = wr2.cCommand + wr2.cStart + wr2.cTime + wr2.cIs; // cCommandStartTimeIs
export const cCommandEndTimeIs = wr2.cCommand + wr2.cEnd + wr2.cTime + wr2.cIs; // cCommandEndTimeIs
export const cCommandRunTimeIs = wr2.cCommand + wr2.cRun + wr2.cTime + wr2.cIs; // cCommandRunTimeIs
export const ccommandAliasesFilePathConfigurationNameIs = wr2.ccommand + wr2.cAliases + wr2.cFile + wr2.cPath + wr2.cConfiguration + wr2.cName + wr2.cIs; // ccommandAliasesFilePathConfigurationNameIs
export const ccommandIs = wr2.ccommand + wr2.cIs; // ccommandIs
export const ccommandToExecuteIs = wr2.ccommand + wr2.cTo + wr2.cExecute + wr2.cIs; // ccommandToExecuteIs
export const ccontextNameIs = wr2.ccontext + wr2.cName + wr2.cIs; // ccontextNameIs
export const callSystemConfigurationsIs = wr2.ccall + wr2.cSystem + wr2.cConfigurations + wr2.cIs; // callSystemConfigurationsIs
export const cdataPathConfigurationNameIs = wr2.cdata + wr2.cPath + wr2.cConfiguration + wr2.cName + wr2.cIs; // cdataPathConfigurationNameIs
export const cdataPathIs = wr2.cdata + wr2.cPath + wr2.cIs; // dataPathIs
export const cfilesFoundIs = wr2.cfiles + wr2.cFound + wr2.cIs; // filesFoundIs
export const cfileToLoadIs = wr2.cfile + wr2.cTo + wr2.cLoad + wr2.cIs; // fileToLoadIs
export const cfilesToLoadIs = wr2.cfiles + wr2.cTo + wr2.cLoad + wr2.cIs; // filesToLoadIs
export const cdataFileToMergeIs = wr2.cdata + wr2.cFile + bas.cTo + wr2.cMerge + wr2.cIs; // dataFileToMergeIs
export const cparsedDataFileIs = wr2.cparsed + wr2.cData + wr2.cFile + wr2.cIs; // parsedDataFileIs
export const cexecuteBusinessRules = wr2.cexecute + wr2.cBusiness + wr2.cRules; // executeBusinessRules
export const cdataFileIs = wr2.cdata + wr2.cFile + wr2.cIs; // dataFileIs
export const cmergedDataIs = wr2.cmerged + wr2.cData + wr2.cIs; // mergedDataIs
export const cdebugConfigurationSettingValueIs = wr2.cdebug + wr2.cConfiguration + wr2.cSetting + wr2.cValue + wr2.cIs; // debugConfigurationSettingValueIs
export const cappConfigPathIs = phn.capp + wr2.cConfig + wr2.cPath + wr2.cIs; // appConfigPathIs
export const cframeworkConfigPathIs = wr2.cframework + wr2.cConfig + wr2.cPath + wr2.cIs; // frameworkConfigPathIs
export const cALL_DATA_IS = wr2.cALL + bas.cUnderscore + wr2.cDATA + bas.cUnderscore + wr2.cIS; // ALL_DATA_IS
export const cAllLoadedDataIs = wr2.cAll + wr2.cLoaded + wr2.cData + wr2.cIs; // AllLoadedDataIs
export const cconfigDataIs = wr2.cconfig + wr2.cData + wr2.cIs; // configDataIs
export const cERROR = wr2.cERROR; // ERROR:
export const cErrorInvalidAccessTo = wr2.cError + wr2.cInvalid + wr2.cAccess + wr2.cTo; // ErrorInvalidAccessTo
export const crootPathIs = wr2.croot + wr2.cPath + wr2.cIs; // rootPathIs
export const caskIs = wr2.cask + wr2.cIs; // askIs
export const cINPUT = wr2.cINPUT; // INPUT
export const cinputIs = wr2.cinput + wr2.cIs; // inputIs
export const cstartTimeIs = wr2.cstart + wr2.cTime + wr2.cIs; // startTimeIs
export const cendTimeIs = wr2.cend + wr2.cTime + wr2.cIs; // endTimeIs
export const cdeltaTimeResultIs = wr2.cdelta + wr2.cTime + wr2.cResult + wr2.cIs; // deltaTimeResultIs
export const cclientConfigurationIs = wr2.cclient + wr2.cConfiguration + wr2.cIs; // clientConfigurationIs
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const cloadedAndMergedDataAllFilesIs = wr2.cloaded + wr2.cAnd + wr2.cMerged + wr2.cData + wr2.cAll + wr2.cFiles + wr2.cIs; // loadedAndMergedDataAllFilesIs
export const cloadedAndMergedDataAllFilesContentsAre = wr2.cloaded + wr2.cAnd + wr2.cMerged + wr2.cData + wr2.cAll + wr2.cFiles + wr2.cContents + wr2.cAre; // loadedAndMergedDataAllFilesContentsAre
export const ccommandWorkflowFilePathConfigurationNameIs = wr2.ccommand + wr2.cWorkflow + wr2.cFile + wr2.cPath + wr2.cConfiguratino + wr2.cName + wr2.cIs; // commandWorkflowFilePathConfigurationNameIs
export const ccontentsOfDataStructreIs = wr2.ccontents + wr2.cOf + wr2.cData + wr2.cStructure + wr2.cIs; // contentsOfDataStructreIs
export const cclientBusinessRulesAre = wr2.cclient + wr2.cBusiness + wr2.cRules + wr2.cAre; // clientBusinessRulesAre
export const cclientCommandsAre = wr2.cclient + wr2.cCommands + wr2.cAre; // clientCommandsAre
export const csystemCommandsAliasesPathIs = wr2.csystem + wr2.cCommands + wr2.cAliases + wr2.cPath + wr2.cIs; // systemCommandsAliasesPathIs
export const cclientCommandsAliasesPathIs = wr2.cclient + wr2.cCommands + wr2.cAliases + wr2.cPath + wr2.cIs; // clientCommandsAliasesPathIs
export const cresolvedSystemCommandsAliasesPathIs = wr2.cresolved + wr2.cSystem + wr2.cCommands + wr2.cAliases + wr2.cPath + wr2.cIs; // resolvedSystemCommandsAliasesPathIs
export const cresolvedClientCommandsAliasesPathIs = wr2.cresoled + wr2.cClient + wr2.cCommands + wr2.cAliases + wr2.cPath + wr2.cIs; // resolvedClientCommandsAliasesPathIs
export const csystemWorkflowPathIs = wr2.csystem + wr2.cWorkflow + wr2.cPath + wr2.cIs; // systemWorkflowPathIs
export const cclientWorkflowPathIs = wr2.cclient + wr2.cWorkflow + wr2.cPath + wr2.cIs; // clientWorkflowPathIs
export const cresolvedSystemWorkflowsPathIs = wr2.cresolved + wr2.cSystem + wr2.cWorkflows + wr2.cPath + wr2.cIs; // resolvedSystemWorkflowsPathIs
export const cresolvedClientWorkflowsPathIs = wr2.cresolved + wr2.cClient + wr2.cWorkflows + wr2.cPath + wr2.cIs; // resolvedClientWorkflowsPathIs
export const cbusinessRuleIs = wr2.cbusiness + wr2.cRules + wr2.cIs; // businessRuleIs
export const cruleInputIs = wr2.crule + wr2.cInput + wr2.cIs; // ruleInputIs
export const cruleMetaDataIs = wr2.crule + wr2.cMetaData + wr2.cIs; // ruleMetaDataIs
export const cconfigurationNamespaceIs = wr2.cconfiguratino + wr2.cNamespace + wr2.cIs; // configurationNamespaceIs
export const cconfigurationNameIs = wr2.cconfiguration + wr2.cName + wr2.cIs; // configurationNameIs
export const cconfigurationValueIs = wr2.cconfiguration + wr2.cValue + wr2.cIs; // configurationValueIs
export const creturnConfigurationValueIs = wr2.creturn + wr2.cConfiguration + wr2.cValue + wr2.cIs; // returnConfigurationValueIs
export const cattributeJsonStringIs = wr2.cattribute + wr2.cJson + wr2.cString + wr2.cIs; // attributeJsonStringIs
export const cappAttributeNameIs = wr2.capp + wr2.cAttribute + wr2.cName + wr2.cIs; // appAttributeNameIs
export const cappAttributeValueIs = wr2.capp + wr2.cAttribute + wr2.Value + wr2.cIs; // appAttributeValueIs
export const cexecuteBusinessRulesColon = wr2.cexecute + wr2.cBusiness + wr2.cRules + wr2.cColon; // executeBusinessRulesColon
export const cdataPathAfterBusinessRulesProcessingIs = wr2.cdata + wr2.cPath + wr2.cAfter + wr2.cBusiness + wr2.cRules + wr2.cProcessing + wr2.cIs; // dataPathAfterBusinessRulesProcessingIs
export const cFileToLoadIs = wr2.cFile + wr2.cTo + wr2.cLoad + wr2.cIs; // FileToLoadIs
export const cfileExtensionIs = wr2.cfile + wr2.cExtension + wr2.cIs; // fileExtensionIs
export const cloadedFileDataIs = wr2.cloaded + wr2.cFile + wr2.cData + wr2.cIs; // loadedFileDataIs
export const cBEGIN_PROCESSING_ADDITIONAL_DATA = wr2.cBEGIN + bas.cUnderscore + wr2.cPROCESSING + bas.cUnderscore + wr2.cADDITIONAL + bas.cUnderscore + wr2.cDATA; // BEGIN_PROCESSING_ADDITIONAL_DATA
export const cDONE_PROCESSING_ADDITIONAL_DATA = wr2.cDONE + bas.cUnderscore + wr2.cPROCESSING + bas.cUnderscore + wr2.cADDITIONAL + bas.cUnderscore + wr2.cDATA; // DONE_PROCESSING_ADDITIONAL_DATA
export const cMERGED_dataIs = wr2.cMERGED + bas.cUnderscore + wr2.cdata + wr2.cIs; // MERGED_dataIs
export const cparsedDataFileContentsAre = wr2.cparsed + wr2.cData + wr2.cFile + wr2.cContents + wr2.cAre; // parsedDataFileContentsAre
export const cdataCatagoryIs = wr2.cdata + wr2.cCatagory + wr2.cIs; // dataCatagoryIs
export const cfullyParsedDataIs = wr2.cfully + wr2.cParsed + wr2.cData + wr2.cIs; // fullyParsedDataIs
export const cD_finalMergeIs = bas.cD + bas.cUnderscore + wr2.cfinal + wr2.cMerge + wr2.cIs; // D_finalMergeIs
export const cdataStorageContextNameIs = wr2.cdata + wr2.cStorage + wr2.cContext + wr2.cName + wr2.cIs; // dataStorageContextNameIs
export const cdataToStoreIs = wr2.cdata + wr2.cTo + wr2.cStore + wr2.cIs; // dataToStoreIs
export const cdataCatagoryDetailsNameIs = wr2.cdata + wr2.cCatagory + wr2.cDetails + wr2.cName + wr2.cIs; // dataCatagoryDetailsNameIs
export const ctempDataIs = wr2.ctemp + wr2.cData + wr2.cIs; // tempDataIs
export const ctargetDataIs = wr2.ctarget + wr2.cData + wr2.cIs; // targetDataIs
export const cpageNameIs = wr2.cpage + wr2.cName + wr2.cIs; // pageNameIs
export const cdataToMergeIs = wr2.cdata + wr2.cTo + wr2.cMerge + wr2.cIs; // dataToMergeIs
export const cdataToMergeElementCountIs = wr2.cdata + wr2.cTo + wr2.cMerge + wr2.cElement + wr2.cCount + wr2.cIs; // dataToMergeElementCountIs
export const cdataToMergeElementCountIs1 = wr2.cdata + wr2.cTo + wr2.cMerge + wr2.cElement + wr2.cCount + wr2.cIs + wr2.c1; // dataToMergeElementCountIs1
export const ccheckIfThePageNameIsNotAnEmptyString = wr2.ccheck + bas.cIf + wr2.cThe + wr2.cPage + wr2.cName + wr2.cIs + wr2.cNot + bas.cAn + wr2.cEmpty + wr2.cString; // checkIfThePageNameIsNotAnEmptyString
export const cpageNameIsNotAnEmptyString = wr2.cpage + wr2.cName + wr2.cIs + wr2.cNot + bas.cAn + wr2.cEmpty + wr2.cString; // pageNameIsNotAnEmptyString
export const cCheckIfTheDataCatagoryIsAnEmptyStringOrNot = wr2.cCheck + bas.cIf + wr2.cThe + wr2.cData + wr2.cCatagory + wr2.cIs + bas.cAn + wr2.cEmpty + wr2.cString + wr2.cOr + wr2.cNot; // CheckIfTheDataCatagoryIsAnEmptyStringOrNot
export const cdataCatagoryIsNotAnEmptyString = wr2.cdata + wr2.cCatagory + wr2.cIs + wr2.cNot + bas.cAn + wr2.cEmpty + wr2.cString; // dataCatagoryIsNotAnEmptyString
export const cdataCatagoryIsAnEmptyString = wr2.cdata + wr2.cCatagory + wr2.cIs + bas.cAn + wr2.cEmpty + wr2.cString; // dataCatagoryIsAnEmptyString
export const ctargetDataContentIs = wr2.ctarget + wr2.cData + wr2.cContent + wr2.cIs; // targetDataContentIs
export const cafterAttemptToMergeResultsAre = wr2.cafter + wr2.cAttempt + wr2.cTo + wr2.cMerge + wr2.cResults + wr2.cAre; // afterAttemptToMergeResultsAre
export const cMergedDataIs = wr2.cMerged + wr2.cData + wr2.cIs; // MergedDataIs
export const cpageNameIsAnEmptyString = wr2.capge + wr2.cName + wr2.cIs + bas.cAn + wr2.cEmpty + wr2.cString; // pageNameIsAnEmptyString
export const cCaughtTheSpecialCaseThatWeAreMergingFlatList = wr2.cCaught + wr2.cThe + wr2.cSpecial + wr2.cCase + wr2.cThat + bas.cWe + wr2.cAre + wr2.cMerging + wr2.cFlat + wr2.cList; // CaughtTheSpecialCaseThatWeAreMergingFlatList
export const cinsideTheForLoop = wr2.cinside + wr2.cThe + wr2.cFor + wr2.cLoop; // insideTheForLoop
export const ckeyIs = wr2.ckey + wr2.cIs; // keyIs
export const ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs = wr2.ctarget + wr2.cData + wr2.cIs + wr2.cModified + bas.cIn + wr2.cThe + wr2.cInput + wr2.cPass + wr2.cBy + wr2.cReference + wr2.cVariable + wr2.cContent + wr2.cIs; // targetDataIsModifiedInTheInputPassByReferenceVariableContentIs
export const cdataObjectValueIs = wr2.cdata + wr2.cObject + wr2.cValue + wr2.cIs; // dataObjectValueIs
export const celementNameIs = wr2.celement + wr2.cName + wr2.cIs; // elementNameIs
export const cdataObjectIs = wr2.cdata + wr2.cObject + wr2.cIs; // dataObjectIs
export const celementNamePatternIs = wr2.celement + wr2.cName + wr2.cPattern + wr2.cIs; // elementNamePatternIs
export const celementCountIs = wr2.celement + wr2.cCount + wr2.cIs; // elementCountIs
export const cERROR_Colon = wr2.cERROR + bas.cUnderscore + wr2.cColon; // ERROR_Colon
export const cfileAndPathToLoadFromIs = wr2.cfile + wr2.cAnd + wr2.cPath + wr2.cTo + wr2.cLoad + wr2.cFrom + wr2.cIs; // fileAndPathToLoadFromIs
export const cDoneLoadingDataFrom = wr2.cDone + wr2.cLoading + wr2.cData + wr2.cFrom; // DoneLoadingDataFrom
export const cfileAndPathToWriteDataToIs = wr2.cfile + wr2.cAnd + wr2.cPath + wr2.cTo + wr2.cWrite + wr2.cData + wr2.cTo + wr2.cIs; // fileAndPathToWriteDataToIs
export const cdataToWriteIs = wr2.cdata + wr2.cTo + wr2.cWrite + wr2.cIs; // dataToWriteIs
export const cDataWasWrittenToTheFile = wr2.cData + wr2.cWas + wr2.cWritten + wr2.cTo + wr2.cThe + wr2.cFile; // DataWasWrittenToTheFile
export const cPathThatShouldBeScannedIs = wr2.cPath + wr2.cThat + wr2.cShould + wr2.cBe + wr2.cScanned + wr2.cIs; // PathThatShouldBeScannedIs
export const cfilesFoundAre = wr2.cfiles + wr2.cFound + wr2.cAre; // filesFoundAre
export const cdirectorIs = wr2.cdiretor + wr2.cIs; // directorIs
export const cdirectoryPathIs = wr2.cdirectory + wr2.cPath + wr2.cIs; // directoryPathIs
export const csourceFolderIs = wr2.csource + wr2.cFolder + wr2.cIs; // sourceFolderIs
export const cdestinationFolderIs = wr2.cdestination + wr2.cFolder + wr2.cIs; // destinationFolderIs
export const ccopySuccessIs = wr2.ccopy + wr2.cSuccess + wr2.cIs; // copySuccessIs
export const ccurrentVersionIs = wr2.ccurrent + wr2.cVersion + wr2.cIs; // currentVersionIs
export const creleasedArchiveFilesListIs = wr2.creleased + wr2.cArchive + wr2.cFiles + wr2.cList + wr2.cIs; // releasedArchiveFilesListIs
export const cfileIs = wr2.cfile + wr2.cIs; // fileIs
export const cfileNameIs = wr2.cfileName + wr2.cIs; // fileNameIs
export const creleaseFilesListIs = wr2.crelease + wr2.cFiles + wr2.cList + wr2.cIs; // releaseFilesListIs
export const creleaseDateTimeStampIs = wr2.crelease + wr2.cDate + wr2.cTime + wr2.cStamp + wr2.cIs; // releaseDateTimeStampIs
export const creleaseFileNameIs = wr2.crelease + wr2.cFileName + wr2.cIs; // releaseFileNameIs
export const cDoneWritingTheZipFile = wr2.cDone + wr2.cWriting + wr2.cThe + wr2.cZip + wr2.cFile; // DoneWritingTheZipFile
export const cSetTheReturnPackageSuccessFlagToTrue = wr2.cSet + wr2.cThe + wr2.cReturn + wr2.cPackage + wr2.cSuccess + wr2.cFlag + wr2.cTo + wr2.cTrue; // SetTheReturnPackageSuccessFlagToTrue
export const ccurrentVersionAlreadyReleased = wr2.ccurrent + wr2.cVersion + wr2.cAlready + wr2.cReleased; // currentVersionAlreadyReleased
export const cpackageSuccessIs = wr2.cpackage + wr2.cSuccess + wr2.cIs; // packageSuccessIs
export const cRootPathBeforeProcessingIs = wr2.cRoot + wr2.cPath + wr2.cBefore + wr2.cProcessing + wr2.cIs; // RootPathBeforeProcessingIs
export const cRootPathAfterProcessingIs = wr2.cRoot + wr2.cPath + wr2.cAfter + wr2.cProcessing + wr2.cIs; // RootPathAfterProcessingIs
export const cSourceIs = wr2.cSource + wr2.cIs; // SourceIs
export const ctargetIs = wr2.ctarget + wr2.cIs; // targetIs
export const cErrorCouldNotCopyFile = wr2.cError + wr2.cCould + wr2.cNot + wr2.cCopy + wr2.cFile; // ErrorCouldNotCopyFile
export const cErrorCouldNotCreateFolder = wr2.cError + wr2.cCould + wr2.cNot + wr2.cCreate + wr2.cFolder; // ErrorCouldNotCreateFolder
export const csuccessfullCopyIs = wr2.csuccessfull + wr2.cCopy + wr2.cIs; // successfullCopyIs
export const cErrorCouldNotCopyFolderContents = wr2.cError + wr2.cCould + wr2.cNot + wr2.cCopy + wr2.cFolder + wr2.cContents; // ErrorCouldNotCopyFolderContents
export const cargumentValueIs = wr2.cargument + wr2.cValue + wr2.cIs; // argumentValueIs
export const cconsolidatedArgumentModeIs = wr2.cconsolidated + wr2.cArgument + wr2.cMode + wr2.cIs; // consolidatedArgumentModeIs
export const cPushingArgumentValueToReturnDataAsArrayElement = wr2.cPushing + wr2.cArgument + wr2.cValue + wr2.cTo + wr2.cReturn + wr2.cData + wr2.cAs + wr2.cArray + wr2.cElement; // PushingArgumentValueToReturnDataAsArrayElement
export const cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse = wr2.cCalling + wr2.cAnalyze + wr2.cArgument + wr2.cIndex + wr2.c2 + wr2.cConsolidated + wr2.cArgument + wr2.cMode + wr2.cFalse; // CallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse
export const cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue = wr2.cCalling + wr2.cAnalyze + wr2.cArgument + wr2.cIndex + wr2.c2 + wr2.cConsolidated + wr2.cArgument + wr2.cMode + wr2.cTrue; // CallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue
export const cargumentValueLengthGreaterThanZero = wr2.cargument + wr2.cValue + wr2.cLength + wr2.cGreater + wr2.cThan + wr2.cZero; // argumentValueLengthGreaterThanZero
export const cReturnArgumentValueSameAsItWasPassedIn = wr2.cReturn + wr2.cArgument + wr2.cValue + wr2.cSame + wr2.cAs + bas.cIt + wr2.cWas + wr2.cPassed + bas.cIn; // ReturnArgumentValueSameAsItWasPassedIn
export const cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse = wr2.cCalling + wr2.cAnalyze + wr2.cArgument + wr2.cIndex + wr2.c3 + wr2.cConsolidated + wr2.cArgument + wr2.cMode + wr2.cFalse; // CallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse
export const cCheckIfThereAreBracketsOrNoBrackets = wr2.cCheck + bas.cIf + wr2.cThere + wr2.cAre + wr2.cBrackets + wr2.cOr + bas.cNo + wr2.cBrackets; // CheckIfThereAreBracketsOrNoBrackets
export const cBracketsWereFound = wr2.cBrackets + wr2.cWere + wr2.cFound; // BracketsWereFound
export const cCheckIfThereIsRegularExpressionOrNot = wr2.cCheck + bas.cIf + wr2.cThere + wr2.cIs + wr2.cRegular + wr2.cExpression + wr2.cOr + wr2.cNot; // CheckIfThereIsRegularExpressionOrNot
export const cRegularExpressionWasFound = wr2.cRegular + wr2.cExpression + wr2.cWas + wr2.cFound; // RegularExpressionWasFound
export const cNoRegExpFound = wr2.cNo + phn.cReg + phn.cExp + wr2.cFound; // NoRegExpFound
export const cBracketsAreFound = wr2.cBrackets + wr2.cAre + wr2.cFound; // BracketsAreFound
export const cNoSecondaryCommandArgumentDelimiters = wr2.cNo + wr2.cSecondary + wr2.cCommand + wr2.cArgument + wr2.cDelimiters; // NoSecondaryCommandArgumentDelimiters
export const cregularExpressionIs = wr2.cregular + wr2.cExpression + wr2.cIs; // regularExpressionIs
export const cregExValueIs = phn.creg + bas.cEx + wr2.cValue + wr2.cIs; // regExValueIs
export const cregularExpressionFlagsAre = wr2.cregular + wr2.cExpression + wr2.cFlags + wr2.cAre; // regularExpressionFlagsAre
export const cregExFlagsIs = phn.creg + bas.cEx + wr2.cFlags + wr2.cIs; // regExFlagsIs
export const cargumentValueContainsTheDelimiterLetsSplitIt = wr2.cargument + wr2.cValue + wr2.cContains + wr2.cThe + wr2.cDelimiter + wr2.cLets + wr2.cSplit + wr2.cIt; // argumentValueContainsTheDelimiterLetsSplitIt
export const cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs = wr2.cargument + wr2.cValue + wr2.cAfter + wr2.cAttemptng + wr2.cTo + wr2.cRemove + wr2.cOpen + wr2.cBracket + wr2.cFrom + wr2.cAll + wr2.cArray + wr2.cElements + wr2.cIs; // argumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs
export const cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs = wr2.cargument + wr2.cValue + wr2.cAfter + wr2.cAttempting + wr2.cTo + wr2.cRemove + wr2.cClose + wr2.cBracket + wr2.cFrom + wr2.cAll + wr2.cArray + wr2.cElements + wr2.cIs; // argumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs
export const csecondaryCommandArgsDelimiterIs = wr2.csecondary + wr2.cCommand + wr2.cArgs + wr2.cDelimiter + wr2.cIs; // secondaryCommandArgsDelimiterIs
export const cargumentArrayIs = wr2.cargument + wr2.cArray + wr2.cIs; // argumentArrayIs
export const cformattingIs = wr2.cformatting + wr2.cIs; // formattingIs
export const cdeltaTimeIs = wr2.cdelta + wr2.cTime + wr2.cIs; // deltaTimeIs
export const cformatIs = wr2.cformat + wr2.cIs; // formatIs
export const creturnDeltaTimeIs = wr2.ceturn + wr2.cDelta + wr2.cTime + wr2.cIs; // returnDeltaTimeIs
export const csleepTimeIs = wr2.csleep + wr2.cTime + wr2.cIs; // sleepTimeIs
export const cworkflowNameIs = wr2.cworkflow + wr2.cName + wr2.cIs; // workflowNameIs
export const ccurrentWorkflowIs = wr2.ccurrent + wr2.cWorkflow + wr2.cIs; // currentWorkflowIs
export const cworkflowValueIs = wr2.cworkflow + wr2.cValue + wr2.cIs; // workflowValueIs
export const cdataHivePathArrayIs = wr2.cdata + wr2.cHive + wr2.cPath + wr2.cArray + wr2.cIs; // dataHivePathArrayIs
export const ccontentsOfLeafDataHiveElementIs = wr2.ccontents + wr2.cOf + wr2.cLeaf + wr2.cData + wr2.cHive + wr2.cElement + wr2.cIs; // contentsOfLeafDataHiveElementIs
export const centryIs = wr2.centry + wr2.cIs; // entryIs
export const cattributeValueIs = wr2.cattribute + wr2.cValue + wr2.cIs; // attributeValueIs
export const ckey2Is = wr2.ckey + wr2.c2 + wr2.cIs; // key2Is
export const centityIs = wr2.centry + wr2.cIs; // entityIs
export const cqueueNameSpaceIs = wr2.cqueue + wr2.cName + wr2.cSpace + wr2.cIs; // queueNameSpaceIs
export const cstackNameSpaceIs = wr2.cstack + wr2.cName + wr2.cSpace + wr2.cIs; // stackNameSpaceIs
export const cWarningStackColon = wr2.cWarning + wr2.cStack + wr2.cColon; // WarningStackColon
export const cAlreadyExists = wr2.cAlready + wr2.cExists; // AlreadyExists
export const cdoesNotExist = wr2.cdoes + wr2.cNot + wr2.cExist; // doesNotExist
export const cisEmpty = wr2.cis + wr2.cEmpty; // isEmpty
export const cContentsOfTheStackNamespace = wr2.cContents + wr2.cOf + wr2.cThe + wr2.cStack + wr2.cNamespace; // ContentsOfTheStackNamespace
export const cwordDelimiterIs = wr2.cword + wr2.cDelimiter + wr2.cIs; // wordDelimiterIs
export const cstringContainsAcronymIs = wr2.cstring + wr2.cContains + wr2.cAcronym + wr2.cIs; // stringContainsAcronymIs
export const cErrorZipPackageReleaseFailed = wr2.cError + wr2.cZip + wr2.cPackage + wr2.cRelease + wr2.cFailed; // ErrorZipPackageReleaseFailed
export const cminimumColorRangeIs = wr2.cminimum + wr2.cColor + wr2.cRange + wr2.cIs; // minimumColorRangeIs
export const cmaximumColorRangeIs = wr2.cmaximum + wr2.cColor + wr2.cRange + wr2.cIs; // maximumColorRangeIs
export const callSystemConstantsValidationDataIs = wr2.call + wr2.cSystem + wr2.cConstants + wr2.cValidation + wr2.cData + wr2.cIs; // allSystemConstantsValidationDataIs
export const callClientConstantsValidationDataIs = wr2.call + wr2.cClient + wr2.cConstants + wr2.cValidation + wr2.cData + wr2.cIs; // allClientConstantsValidationDataIs
export const cconstantLibraryDataIs = wr2.cconstant + wr2.cLibrary + wr2.cData + wr2.cIs; // constantLibraryDataIs
export const cclientValidationDataIs = wr2.cclient + wr2.cValidation + wr2.cData + wr2.cIs; // clientValidationDataIs
export const carrayValidationDataIs = wr2.carray + wr2.cValidation + wr2.cData + wr2.cIs; // arrayValidationDataIs
export const cfilesListLimitIs = wr2.cfiles + wr2.cList + wr2.cLimit + wr2.cIs; // filesListLimitIs
export const cenableLimitIs = wr2.cenable + wr2.cLimit + wr2.cIs; // enableLimitIs
export const cfilesLimitIs = wr2.cfiles + wr2.cLimit + wr2.cIs; // filesLimitIs
export const cinputDataRightBeforeProcessingIs = cinputData + wr2.cRight + wr2.cBefore + wr2.cProcessing + wr2.cIs; // inputDataRightBeforeProcessingIs
export const cnumberIs = wr2.cnumber + wr2.cIs; // numberIs

// WARNING: Mixed string. Cannot determine what delimiter should be used to break up the string into words.
export const cDetermineWordDelimiterMessage1 = wr2.cDetermine + wr2.cWord + wr2.cDelimiter + wr2.cMessage + wr2.c1; // DetermineWordDelimiterMessage1
export const cDetermineWordDelimiterMessage2 = wr2.cDetermine + wr2.cWord + wr2.cDelimiter + wr2.cMessage + wr2.c2; // DetermineWordDelimiterMessage2
export const cDetermineWordDelimiterMessage3 = wr2.cDetermine + wr2.cWord + wr2.cDelimiter + wr2.cMessage + wr2.c3; // DetermineWordDelimiterMessage3
export const cDetermineWordDelimiterMessage4 = wr2.cDetermine + wr2.cWord + wr2.cDelimiter + wr2.cMessage + wr2.c4; // DetermineWordDelimiterMessage4
// WARNING: Mixed string. Cannot determine how words are delimited in the string. Unable to count words.
export const cGetWordCountInStringMessage1 = wr2.cGet + wr2.cWord + wr2.cCount + wr2.cIn + wr2.cString + wr2.cMessage + wr2.c1; // GetWordCountInStringMessage1
export const cGetWordCountInStringMessage2 = wr2.cGet + wr2.cWord + wr2.cCount + wr2.cIn + wr2.cString + wr2.cMessage + wr2.c2; // GetWordCountInStringMessage2
export const cGetWordCountInStringMessage3 = wr2.cGet + wr2.cWord + wr2.cCount + wr2.cIn + wr2.cString + wr2.cMessage + wr2.c3; // GetWordCountInStringMessage3
// WARNING: Mixed string. Cannot get words from the string. Unable to determine words.
export const cGetWordsArrayFromStringMessage1 = wr2.cGet + wr2.cWords + wr2.cArray + wr2.cFrom + wr2.cString + wr2.cMessage + wr2.c1; // GetWordsArrayFromStringMessage1
export const cGetWordsArrayFromStringMessage2 = wr2.cGet + wr2.cWords + wr2.cArray + wr2.cFrom + wr2.cString + wr2.cMessage + wr2.c2; // GetWordsArrayFromStringMessage2
export const cGetWordsArrayFromStringMessage3 = wr2.cGet + wr2.cWords + wr2.cArray + wr2.cFrom + wr2.cString + wr2.cMessage + wr2.c3; // GetWordsArrayFromStringMessage3
// Please enter a named command where the first word starts with a lower case letter and all other words in the named command start with an upper case letter:
export const cCommandNamePrompt2 = wr2.cCommand + wr2.cName + wr2.cPrompt + wr2.c2; // CommandNamePrompt2
export const cCommandNamePrompt3 = wr2.cCommand + wr2.cName + wr2.cPrompt + wr2.c3; // CommandNamePrompt3
export const cCommandNamePrompt4 = wr2.cCommand + wr2.cName + wr2.cPrompt + wr2.c4; // CommandNamePrompt4
export const cCommandNamePrompt5 = wr2.cCommand + wr2.cName + wr2.cPrompt + wr2.c5; // CommandNamePrompt5
// Please enter a list of command word abreviations/acronyms/aliases for the command word:
export const cCommandWordAliasPrompt1 = wr2.cCommand + wr2.cWord + wr2.cAlias + wr2.cPrompt + wr2.c1; // CommandWordAliasPrompt1
export const cCommandWordAliasPrompt2 = wr2.cCommand + wr2.cWord + wr2.cAlias + wr2.cPrompt + wr2.c2; // CommandWordAliasPrompt2
export const cCommandWordAliasPrompt3 = wr2.cCommand + wr2.cWord + wr2.cAlias + wr2.cPrompt + wr2.c3; // CommandWordAliasPrompt3
// Please enter a string you would like to define as a constant in the constants system:
export const cConstantPrompt1 = wr2.cConstant + wr2.cPrompt + wr2.c1; // ConstantPrompt1
export const cConstantPrompt2 = wr2.cConstant + wr2.cPrompt + wr2.c2; // ConstantPrompt2
export const cConstantPrompt3 = wr2.cConstant + wr2.cPrompt + wr2.c3; // ConstantPrompt3
// Please enter a coma separated list of strings you would like to define in the constants system:
export const cConstantsListPrompt1 = wr2.cConstants + wr2.cList + wr2.cPrompt + wr2.c1; // ConstantsListPrompt1
export const cConstantsListPrompt2 = wr2.cConstants + wr2.cList + wr2.cPrompt + wr2.c2; // ConstantsListPrompt2
export const cConstantsListPrompt3 = wr2.cConstants + wr2.cList + wr2.cPrompt + wr2.c3; // ConstantsListPrompt3
// Please enter a coma separated list of strings you would like to search for common patterns:
export const cConstantsListPatternSearchPrompt1 = wr2.cConstants + wr2.cList + wr2.cPattern + wr2.cSearch + wr2.cPrompt + wr2.c1; // ConstantsListPatternSearchPrompt1
export const cConstantsListPatternSearchPrompt2 = wr2.cConstants + wr2.cList + wr2.cPattern + wr2.cSearch + wr2.cPrompt + wr2.c2; // ConstantsListPatternSearchPrompt2
export const cConstantsListPatternSearchPrompt3 = wr2.cConstants + wr2.cList + wr2.cPattern + wr2.cSearch + wr2.cPrompt + wr2.c3; // ConstantsListPatternSearchPrompt3
// ERROR: Attempted to generate a suggested line of code to validate the constant, ' +
// 'but the constant is not formatted correctly, it should begin with a lower case "c". ' +
// 'Please reformat the constant correctly so a line of code can be generated for you.
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1 = wr2.cDetermine + wr2.cSuggested + wr2.cConstants + wr2.cValidation + wr2.cLine + wr2.cOf + wr2.cCode + wr2.cError + wr2.cMessage + wr2.c1; // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage1
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2 = wr2.cDetermine + wr2.cSuggested + wr2.cConstants + wr2.cValidation + wr2.cLine + wr2.cOf + wr2.cCode + wr2.cError + wr2.cMessage + wr2.c2; // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage2
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3 = wr2.cDetermine + wr2.cSuggested + wr2.cConstants + wr2.cValidation + wr2.cLine + wr2.cOf + wr2.cCode + wr2.cError + wr2.cMessage + wr2.c3; // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage3
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4 = wr2.cDetermine + wr2.cSuggested + wr2.cConstants + wr2.cValidation + wr2.cLine + wr2.cOf + wr2.cCode + wr2.cError + wr2.cMessage + wr2.c4; // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage4
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5 = wr2.cDetermine + wr2.cSuggested + wr2.cConstants + wr2.cValidation + wr2.cLine + wr2.cOf + wr2.cCode + wr2.cError + wr2.cMessage + wr2.c5; // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage5
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6 = wr2.cDetermine + wr2.cSuggested + wr2.cConstants + wr2.cValidation + wr2.cLine + wr2.cOf + wr2.cCode + wr2.cError + wr2.cMessage + wr2.c6; // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage6
export const cSearchForPatternsInStringArrayMessage1 = wr2.cSearch + wr2.cFor + wr2.cPatterns + wr2.cIn + wr2.cString + wr2.cArray + wr2.cMessage + wr2.c1; // SearchForPatternsInStringArrayMessage1
// WARNING: The current string being searched contains a space character, we are going to skip comparison.
export const cSearchForPatternsInStringArrayMessage2 = wr2.cSearch + wr2.cFor + wr2.cPatterns + wr2.cIn + wr2.cString + wr2.cArray + wr2.cMessage + wr2.c2; // SearchForPatternsInStringArrayMessage2
export const cSearchForPatternsInStringArrayMessage3 = wr2.cSearch + wr2.cFor + wr2.cPatterns + wr2.cIn + wr2.cString + wr2.cArray + wr2.cMessage + wr2.c3; // SearchForPatternsInStringArrayMessage3
// WARNING: InputData was not an array or had an empty array.
export const cSearchForPatternsInStringArrayMessage4 = wr2.cSearch + wr2.cFor + wr2.cPatterns + wr2.cIn + wr2.cString + wr2.cArray + wr2.cMessage + wr2.c4; // SearchForPatternsInStringArrayMessage4
// WARNING: No data to load, please specify a valid path & filename!
export const cLoadDataFileMessage1 = wr2.cLoad + wr2.cData + wr2.cFile + wr2.cMessage + wr2.c1; // LoadDataFileMessage1
export const cloadDataFileMessage2 = wr2.cLoad + wr2.cData + wr2.cFile + wr2.cMessage + wr2.c2; // loadDataFileMessage2
export const cloadDataFileMessage3 = wr2.cLoad + wr2.cData + wr2.cFile + wr2.cMessage + wr2.c3; // loadDataFileMessage3
// ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another release.
export const cdeployApplicationMessage1a = wr2.cdeploy + wr2.cApplication + wr2.cMessage + wr2.c1 + wr2.ca; // deployApplicationMessage1a
export const cdeployApplicationMessage2a = wr2.cdeploy + wr2.cApplication + wr2.cMessage + wr2.c2 + wr2.ca; // deployApplicationMessage2a
// ERROR: Release failed because of a failure in the commands alias validation system. Please fix ASAP before attempting another release.
export const cdeployApplicationMessage1b = wr2.cdeploy + wr2.cApplication + wr2.cMessage + wr2.c1 + wr2.cb; // deployApplicationMessage1b
export const ccommandSequencerMessage1 = wr2.ccommand + wr2.cSequencer + wr2.cMessage + wr2.c1; // commandSequencerMessage1
export const ccommandSequencerMessage2 = wr2.ccommand + wr2.cSequencer + wr2.cMessage + wr2.c2; // commandSequencerMessage2
export const cworkflowMessage1 = wr2.cworkflow + wr2.cMessage + wr2.c1; // workflowMessage1
export const cworkflowMessage2 = wr2.cworkflow + wr2.cMessage + wr2.c2; // workflowMessage2
export const cworkflowMessage3 = wr2.cworkflow + wr2.cMessage + wr2.c3; // workflowMessage3
// After attempting to replace the secondaryCommandArgsDelimiter with the primaryCommandDelimiter commandString is:
export const ccommandGeneratorMessage1 = wr2.ccommand + wr2.cGenerator + wr2.cMessage + wr2.c1; // commandGeneratorMessage1
// After attempting to replace the tertiaryCommandDelimiter with the secondaryCommandArgsDelimiter commandString is:
export const ccommandGeneratorMessage2 = wr2.ccommand + wr2.cGenerator + wr2.cMessage + wr2.c2; // commandGeneratorMessage2
// WARNING: nominal.commandGenerator: Must enter a number greater than 0, number entered:
export const ccommandGeneratorMessage3 = wr2.ccommand + wr2.cGenerator + wr2.cMessage + wr2.c3; // commandGeneratorMessage3
// WARNING: nominal.commandGenerator: Number entered for the number of commands to generate is not a number:
export const ccommandGeneratorMessage4 = wr2.ccommand + wr2.cGenerator + wr2.cMessage + wr2.c4; // commandGeneratorMessage4
// WARNING: nominal.commandGenerator: The specified command:
export const ccommandGeneratorMessage5 = wr2.ccommand + wr2.cGenerator + wr2.cMessage + wr2.c5; // commandGeneratorMessage5
// was not found, please enter a valid command and try again.
export const ccommandGeneratorMessage6 = wr2.ccommand + wr2.cGenerator + wr2.cMessage + wr2.c6; // commandGeneratorMessage6
// Command can be called by passing parameters and bypass the prompt system.
export const ccommandAliasGeneratorMessage1 = wr2.ccommand + wr2.cAlias + wr2.cGenerator + wr2.cMessage + wr2.c1; // commandAliasGeneratorMessage1
// EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
export const ccommandAliasGeneratorMessage2 = wr2.ccommand + wr2.cAlias + wr2.cGenerator + wr2.cMessage + wr2.c2; // commandAliasGeneratorMessage2
// INVALID INPUT: Please enter a valid camel-case command name.
export const ccommandAliasGeneratorMessage3 = wr2.ccommand + wr2.cAlias + wr2.cGenerator + wr2.cMessage + wr2.c3; // commandAliasGeneratorMessage3
// INVALID INPUT: Please enter a valid command word alias list.
export const ccommandAliasGeneratorMessage4 = wr2.ccommand + wr2.cAlias + wr2.cGenerator + wr2.cMessage + wr2.c4; // commandAliasGeneratorMessage4
// INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.
export const ccommandAliasGeneratorMessage5 = wr2.ccommand + wr2.cAlias + wr2.cGenerator + wr2.cMessage + wr2.c5; // commandAliasGeneratorMessage5
// INVALID INPUT: Please enter a valid constant value that contains more than 4 characters.
export const cconstantsGeneratorMessage1 = wr2.cconstants + wr2.cGenerator + wr2.cMessage + wr2.c1; // constantsGeneratorMessage1
// WARNING: The constant has already been defined in the following library(ies):
export const cconstantsGeneratorMessage2 = wr2.cconstants + wr2.cGenerator + wr2.cMessage + wr2.c2; // constantsGeneratorMessage2
// INVALID INPUT: Please enter a valid constant list.
export const cconstantsGeneratorListMessage1 = wr2.cconstants + wr2.cGenerator + wr2.cList + wr2.cMessage + wr2.c1; // constantsGeneratorListMessage1
// PASSED: All duplicate command aliases validation tests!
export const cvalidateCommandAliasesMessage1 = wr2.cvalidate + wr2.cCommand + wr2.cAliases + wr2.cMessage + wr2.c1; // validateCommandAliasesMessage1
// About to call the rule broker to process on the number of single quotes
export const cgetCommandArgsMessage1 = wr2.cget + wr2.cCommand + wr2.cArgs + wr2.cMessage + wr2.c1; // getCommandArgsMessage1
// and determine if it-be even or odd
export const cgetCommandArgsMessage2 = wr2.cget + wr2.cCommand + wr2.cArgs + wr2.cMessage + wr2.c2; // getCommandArgsMessage2
// WARNING: Command does not exist, please enter a valid command and try again!
export const cexecuteCommandMessage1 = wr2.cexecute + wr2.cCommand + wr2.cMessage + wr2.c1; // executeCommandMessage1
// WARNING: lexical.parseBusinessRuleArgument: Invalid combination of inputs to the lexical.parseBusinessRuleArgument function!
export const cparseBusinessRuleArgumentMessage1 = wr2.cparse + wr2.cBusiness + wr2.cRule + wr2.cArgument + wr2.cMessage + wr2.c1; // parseBusinessRuleArgumentMessage1
export const cparseBusinessRuleArgumentMessage2 = wr2.cparse + wr2.cBusiness + wr2.cRule + wr2.cArgument + wr2.cMessage + wr2.c2; // parseBusinessRuleArgumentMessage2
// Caught the case that the user may have only specified a single data hive, such as the configuration data hive.
export const cprintDataHiveAttributesMessage1 = wr2.cprint + wr2.cData + wr2.cHive + wr2.cAttributes + wr2.cMessage + wr2.c1; // printDataHiveAttributesMessage1
export const cprintDataHiveAttributesMessage2 = wr2.cprint + wr2.cData + wr2.cHive + wr2.cAttributes + wr2.cMessage + wr2.c2; // printDataHiveAttributesMessage2
// ERROR: Please enter a valid name.space.attributeName for the system to print out attribute data from.
export const cprintDataHiveAttributesMessage3 = wr2.cprint + wr2.cData + wr2.cHive + wr2.cAttributes + wr2.cMessage + wr2.c3; // printDataHiveAttributesMessage3
// Nothing to echo.
export const cNothingToEcho = wr2.cNothing + wr2.cTo + wr2.cEcho; // NothingToEcho
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const cprompt01 = wr2.cprompt + wr2.c0 + wr2.c1; // prompt01
export const cprompt02 = wr2.cprompt + wr2.c0 + wr2.c2; // prompt02
export const cprompt03 = wr2.cprompt + wr2.c0 + wr2.c3; // prompt03
export const cprintMessageToFile01 = wr2.cprint + wr2.cMessage + wr2.cTo + wr2.cFile + wr2.c0 + wr2.c1;
export const cprintMessageToFile02 = wr2.cprint + wr2.cMessage + wr2.cTo + wr2.cFile + wr2.c0 + wr2.c2;
export const cprintMessageToFile03 = wr2.cprint + wr2.cMessage + wr2.cTo + wr2.cFile + wr2.c0 + wr2.c3;

// Coded System Messages constant constants
export const cdebugSettingsEnabledLogic01 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c0 + wr2.c1; // debugSettingsEnabledLogic01
export const cdebugSettingsEnabledLogic02 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c0 + wr2.c2; // debugSettingsEnabledLogic02
export const cdebugSettingsEnabledLogic03 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c0 + wr2.c3; // debugSettingsEnabledLogic03
export const cdebugSettingsEnabledLogic04 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c0 + wr2.c4; // debugSettingsEnabledLogic04
export const cdebugSettingsEnabledLogic05 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c0 + wr2.c5; // debugSettingsEnabledLogic05
export const cdebugSettingsEnabledLogic06 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c0 + wr2.c6; // debugSettingsEnabledLogic06
export const cdebugSettingsEnabledLogic07 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c0 + wr2.c7; // debugSettingsEnabledLogic07
export const cdebugSettingsEnabledLogic08 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c0 + wr2.c8; // debugSettingsEnabledLogic08
export const cdebugSettingsEnabledLogic09 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c0 + wr2.c9; // debugSettingsEnabledLogic09
export const cdebugSettingsEnabledLogic10 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c1 + wr2.c0; // debugSettingsEnabledLogic10
export const cdebugSettingsEnabledLogic11 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c1 + wr2.c1; // debugSettingsEnabledLogic11
export const cdebugSettingsEnabledLogic12 = wr2.cdebug + wr2.cSettings + wr2.cEnabled + wr2.cLogic + wr2.c1 + wr2.c2; // debugSettingsEnabledLogic12

// export default {
//   [bas.cc + cDot]: cDot, // Dot
//   [bas.cc + cCotedlvoire]: cCotedlvoire, // Cotedlvoire
//   [bas.cc + cCaboVerde]: cCaboVerde, // CaboVerde
//   [bas.cc + cCentralAfricanRepublic]: cCentralAfricanRepublic, // CentralAfricanRepublic
//   [bas.cc + cCostaRica]: cCostaRica, // CostaRica
//   [bas.cc + cDemocraticRepublicOfTheCongo]: cDemocraticRepublicOfTheCongo, // DemocraticRepublicOfTheCongo
//   [bas.cc + cDominicanRepublic]: cDominicanRepublic, // cDominicanRepublic
//   [bas.cc + cElSalvador]: cElSalvador, // ElSalvador
//   [bas.cc + cEquatorialGuinea]: cEquatorialGuinea, // EquatorialGuinea
//   [bas.cc + cGuineaBissau]: cGuineaBissau, // GuineaBissau
//   [bas.cc + cHolySee]: cHolySee, // HolySee
//   [bas.cc + cMarshallIslands]: cMarshallIslands, // MarshallIslands
//   [bas.cc + cNewZealand]: cNewZealand, // NewZealand
//   [bas.cc + cNorthKorea]: cNorthKorea, // NorthKorea
//   [bas.cc + cNorthMacedonia]: cNorthMacedonia, // NorthMacedonia
//   [bas.cc + cPapuaNewGuinea]: cPapuaNewGuinea, // PapuaNewGuinea
//   [bas.cc + cSaintKitts]: cSaintKitts, // SaintKitts
//   [bas.cc + cSaintLucia]: cSaintLucia, // SaintLucia
//   [bas.cc + cSaintVincent]: cSaintVincent, // SaintVincent
//   [bas.cc + cSanMarino]: cSanMarino, // SanMarino
//   [bas.cc + cSaoTome]: cSaoTome, // SaoTome
//   [bas.cc + cSaudiArabia]: cSaudiArabia, // SaudiArabia
//   [bas.cc + cSierraLeone]: cSierraLeone, // SierraLeone
//   [bas.cc + cSolomonIslands]: cSolomonIslands, // SolomonIslands
//   [bas.cc + cSouthAfrica]: cSouthAfrica, // SouthAfrica
//   [bas.cc + cSouthKorea]: cSouthKorea, // SouthKorea
//   [bas.cc + cSouthSudan]: cSouthSudan, // SouthSudan
//   [bas.cc + cSriLanka]: cSriLanka, // SriLanka
//   [bas.cc + cTimorLeste]: cTimorLeste, // TimorLeste
//   [bas.cc + cTrinidadAndTabago]: cTrinidadAndTabago, // TrinidadAndTabago
//   [bas.cc + cUnitedArabEmirates]: cUnitedArabEmirates, // UnitedArabEmirates
//   [bas.cc + cUnitedKingdom]: cUnitedKingdom, // UnitedKingdom
//   [bas.cc + cUnitedStatesOfAmerica]: cUnitedStatesOfAmerica, // UnitedStatesOfAmmerica
//
//   [bas.cc + cLowerCaseEnglishAlphabet]: cLowerCaseEnglishAlphabet, // LowerCaseEnglishAlphabet
//   [bas.cc + cUpperCaseEnglishAlphabet]: cUpperCaseEnglishAlphabet, // UpperCaseEnglishAlphabet
//   [bas.cc + cAllNumbers]: cAllNumbers, // AllNumbers
//   [bas.cc + cMostSpecialCharacters]: cMostSpecialCharacters, // MostSpecialCharacters
//
//   [bas.cc + cctrl_a]: cctrl_a, // ctrl_a
//   [bas.cc + cctrl_b]: cctrl_b, // ctrl_b
//   [bas.cc + cctrl_c]: cctrl_c, // ctrl_c
//   [bas.cc + cctrl_d]: cctrl_d, // ctrl_d
//   [bas.cc + cctrl_e]: cctrl_e, // ctrl_e
//   [bas.cc + cctrl_f]: cctrl_f, // ctrl_f
//   [bas.cc + cctrl_g]: cctrl_g, // ctrl_g
//   [bas.cc + cctrl_h]: cctrl_h, // ctrl_h
//   [bas.cc + cctrl_i]: cctrl_i, // ctrl_i
//   [bas.cc + cctrl_j]: cctrl_j, // ctrl_j
//   [bas.cc + cctrl_k]: cctrl_k, // ctrl_k
//   [bas.cc + cctrl_l]: cctrl_l, // ctrl_l
//   [bas.cc + cctrl_m]: cctrl_m, // ctrl_m
//   [bas.cc + cctrl_n]: cctrl_n, // ctrl_n
//   [bas.cc + cctrl_o]: cctrl_o, // ctrl_o
//   [bas.cc + cctrl_p]: cctrl_p, // ctrl_p
//   [bas.cc + cctrl_q]: cctrl_q, // ctrl_q
//   [bas.cc + cctrl_r]: cctrl_r, // ctrl_r
//   [bas.cc + cctrl_s]: cctrl_s, // ctrl_s
//   [bas.cc + cctrl_t]: cctrl_t, // ctrl_t
//   [bas.cc + cctrl_u]: cctrl_u, // ctrl_u
//   [bas.cc + cctrl_v]: cctrl_v, // ctrl_v
//   [bas.cc + cctrl_w]: cctrl_w, // ctrl_w
//   [bas.cc + cctrl_x]: cctrl_x, // ctrl_x
//   [bas.cc + cctrl_y]: cctrl_y, // ctrl_y
//   [bas.cc + cctrl_z]: cctrl_z, // ctrl_z
//
//   [bas.cc + cframeworkResourcesConfigurationPath]: cframeworkResourcesConfigurationPath, // cframeworkResourcesConfigurationPath
//   [bas.cc + csystemConfigFileName]: csystemConfigFileName, // csystemConfigFileName
//   [bas.cc + capplicationConfigFileName]: capplicationConfigFileName, // capplicationConfigFileName
//
//   // Constants Filenames
//   [bas.cc + cbasic_constants_js]: cbasic_constants_js, // basic_constants_js
//   [bas.cc + cbusiness_constants_js]: cbusiness_constants_js, // business_constants_js
//   [bas.cc + ccolor_constants_js]: ccolor_constants_js, // color_constants_js
//   [bas.cc + ccommand_constants_js]: ccommand_constants_js, // command_constants_js
//   [bas.cc + cconfiguration_constants_js]: cconfiguration_constants_js, // configuration_constants_js
//   [bas.cc + cconstant_constants_js]: cconstant_constants_js, // constant_constant_js
//   [bas.cc + ccountry_constants_js]: ccountry_constants_js, // country_constants_js
//   [bas.cc + celement_constants_js]: celement_constants_js, // element_constants_js
//   [bas.cc + cgeneric_constants_js]: cgeneric_constants_js, // generic_constants_js
//   [bas.cc + cisotope_constants_js]: cisotope_constants_js, // isotope_constants_js
//   [bas.cc + cknot_constants_js]: cknot_constants_js, // knot_constants_js
//   [bas.cc + clanguage_constants_js]: clanguage_constants_js, // language_constants_js
//   [bas.cc + cmessage_constants_js]: cmessage_constants_js, // message_constants_js
//   [bas.cc + cnumeric_constants_js]: cnumeric_constants_js, // numeric_constants_js
//   [bas.cc + cphonic_constants_js]: cphonic_constants_js, // phonic_constants_js
//   [bas.cc + cshape_constants_js]: cshape_constants_js, // shape_constants_js
//   [bas.cc + csystem_constants_js]: csystem_constants_js, // system_constants_js
//   [bas.cc + cunit_constants_js]: cunit_constants_js, // unit_constants_js
//   [bas.cc + cword_constants_js]: cword_constants_js, // word_constants_js
//
//   // Message constant constants
//   // Logging constant constants
//   [bas.cc + cBEGIN_Function]: cBEGIN_Function, // BEGIN_Function
//   [bas.cc + cEND_Function]: cEND_Function, // END_Function
//   [bas.cc + cinputData]: cinputData, // inputData
//   [bas.cc + cInputData]: cInputData, // InputData
//   [bas.cc + cinputMetaData]: cinputMetaData, // inputMetaData
//   [bas.cc + cInputMetaData]: cInputMetaData, // InputMetaData
//   [bas.cc + cinputDataIs]: cinputDataIs, // inputDataIs
//   [bas.cc + cinputMetaDataIs]: cinputMetaDataIs, // inputMetaDataIs
//   [bas.cc + creturnDataIs]: creturnDataIs, // returnDataIs
//   [bas.cc + cSpaceIsColonSpace]: cSpaceIsColonSpace, // cSpaceIsColonSpace
//
//   // System Messages constant constants
//   [bas.cc + cCharacterGenerationMessage1]: cCharacterGenerationMessage1, // cCharacterGenerationMessage1
//   [bas.cc + cCharacterGenerationMessage2]: cCharacterGenerationMessage2, // cCharacterGenerationMessage2
//   [bas.cc + cCharacterGenerationMessage3]: cCharacterGenerationMessage3, // cCharacterGenerationMessage3
//   [bas.cc + cCharacterGenerationMessage4]: cCharacterGenerationMessage4, // cCharacterGenerationMessage4
//   [bas.cc + cCharacterGenerationMessage5]: cCharacterGenerationMessage5, // cCharacterGenerationMessage5
//   [bas.cc + cMathOperationsMessage1]: cMathOperationsMessage1, // cMathOperationsMessage1
//   [bas.cc + cnumberOfCharactersToGenerateIs]: cnumberOfCharactersToGenerateIs, // cnumberOfCharactersToGenerateIs
//   [bas.cc + cgenerateSpecialCharactersIs]: cgenerateSpecialCharactersIs, // cgenerateSpecialCharactersIs
//   [bas.cc + callowableSpecialCharactersIs]: callowableSpecialCharactersIs, // callowableSpecialCharactersIs
//   [bas.cc + cspecifiedSuffixAndDomainIs]: cspecifiedSuffixAndDomainIs, // cspecifiedSuffixAndDomainIs
//   [bas.cc + cfailureModeIs]: cfailureModeIs, // cfailureModeIs
//   [bas.cc + cprefixIs]: cprefixIs, // cprefixIs
//   [bas.cc + csuffixIs]: csuffixIs, // csuffixIs
//   [bas.cc + cWithoutTheAtSymbol]: cWithoutTheAtSymbol, // cWithoutTheAtSymbol
//   [bas.cc + cWithoutThePrefix]: cWithoutThePrefix, // cWithoutThePrefix
//   [bas.cc + cWithoutTheSuffix]: cWithoutTheSuffix, // cWithoutTheSuffix
//   [bas.cc + cWithoutTheAtSymbolAndPrefix]: cWithoutTheAtSymbolAndPrefix, // cWithoutTheAtSymbolAndPrefix
//   [bas.cc + cDEFAULTWithoutTheAtSymbolAndPrefix]: cDEFAULTWithoutTheAtSymbolAndPrefix, // cDEFAULTWithoutTheAtSymbolAndPrefix
//   [bas.cc + cdomainNameIs]: cdomainNameIs, // cdomainNameIs
//   [bas.cc + cnumberOfPrefixCharactersIs]: cnumberOfPrefixCharactersIs, // cnumberOfPrefixCharactersIs
//   [bas.cc + cnumberOfSuffixCharactersIs]: cnumberOfSuffixCharactersIs, // cnumberOfSuffixCharactersIs
//   [bas.cc + cWithoutTheDotSymbol]: cWithoutTheDotSymbol, // cWithoutTheDotSymbol
//   [bas.cc + cWithoutTheAtAndDotSymbols]: cWithoutTheAtAndDotSymbols, // cWithoutTheAtAndDotSymbols
//   [bas.cc + cWithoutTheDomainName]: cWithoutTheDomainName, // cWithoutTheDomainName
//   [bas.cc + cWithoutTheAtSymbolAndDomainName]: cWithoutTheAtSymbolAndDomainName, // cWithoutTheAtSymbolAndDomainName
//   [bas.cc + cWithoutTheDotAndDomainName]: cWithoutTheDotAndDomainName, // cWithoutTheDotAndDomainName
//   [bas.cc + cWithoutTheAtSymbolDotAndDomainName]: cWithoutTheAtSymbolDotAndDomainName, // cWithoutTheAtSymbolDotAndDomainName
//   [bas.cc + cWithoutTheDotAndPrefix]: cWithoutTheDotAndPrefix, // cWithoutTheDotAndPrefix
//   [bas.cc + cWithoutTheAtSymbolAndSuffix]: cWithoutTheAtSymbolAndSuffix, // cWithoutTheAtSymbolAndSuffix
//   [bas.cc + cWithoutTheDotAndSuffix]: cWithoutTheDotAndSuffix, // cWithoutTheDotAndSuffix
//   [bas.cc + cWithoutTheAtSymbolDotAndPrefix]: cWithoutTheAtSymbolDotAndPrefix, // cWithoutTheAtSymbolDotAndPrefix
//   [bas.cc + cWithoutTheAtSymbolDotAndSuffix]: cWithoutTheAtSymbolDotAndSuffix, // cWithoutTheAtSymbolDotAndSuffix
//   [bas.cc + cWithoutTheAtSymbolDotPrefixAndSuffix]: cWithoutTheAtSymbolDotPrefixAndSuffix, // cWithoutTheAtSymbolDotPrefixAndSuffix
//   [bas.cc + cWithoutThePrefixAndDomainName]: cWithoutThePrefixAndDomainName, // cWithoutThePrefixAndDomainName
//   [bas.cc + cWithoutTheSuffixAndDomainName]: cWithoutTheSuffixAndDomainName, // cWithoutTheSuffixAndDomainName
//   [bas.cc + cWithoutThePrefixAndSuffix]: cWithoutThePrefixAndSuffix, // cWithoutThePrefixAndSuffix
//   [bas.cc + cWithoutThePrefixSuffixAndDomainName]: cWithoutThePrefixSuffixAndDomainName, // cWithoutThePrefixSuffixAndDomainName
//   [bas.cc + cWithoutTheAtSymbolPrefixAndDomainName]: cWithoutTheAtSymbolPrefixAndDomainName, // cWithoutTheAtSymbolPrefixAndDomainName
//   [bas.cc + cWithoutTheDotPrefixAndDomainName]: cWithoutTheDotPrefixAndDomainName, // cWithoutTheDotPrefixAndDomainName
//   [bas.cc + cWithoutTheAtSymbolSuffixAndDomainName]: cWithoutTheAtSymbolSuffixAndDomainName, // cWithoutTheAtSymbolSuffixAndDomainName
//   [bas.cc + cWithoutTheDotSuffixAndDomainName]: cWithoutTheDotSuffixAndDomainName, // cWithoutTheDotSuffixAndDomainName
//   [bas.cc + cWithoutTheAtSymbolPrefixSuffixAndDomainName]: cWithoutTheAtSymbolPrefixSuffixAndDomainName, // cWithoutTheAtSymbolPrefixSuffixAndDomainName
//   [bas.cc + cWithoutTheDotPrefixSuffixAndDomainName]: cWithoutTheDotPrefixSuffixAndDomainName, // cWithoutTheDotPrefixSuffixAndDomainName
//   [bas.cc + cWithoutThePrefixSuffixAndAtSymbol]: cWithoutThePrefixSuffixAndAtSymbol, // cWithoutThePrefixSuffixAndAtSymbol
//   [bas.cc + cWithoutThePrefixSuffixAndDot]: cWithoutThePrefixSuffixAndDot, // cWithoutThePrefixSuffixAndDot
//   [bas.cc + cIndexOfTheSpace]: cIndexOfTheSpace, // cIndexOfTheSpace
//   [bas.cc + cisResolvingAs]: cisResolvingAs, // cisResolvingAs
//   [bas.cc + cparsedStringSpaceTerm]: cparsedStringSpaceTerm, // cparsedStringSpaceTerm
//   [bas.cc + cstring1Is]: cstring1Is, // cstring1Is
//   [bas.cc + cstring2Is]: cstring2Is, // cstring2Is
//   [bas.cc + cvariation0ValueIs]: cvariation0ValueIs, // cvariation0ValueIs
//   [bas.cc + cvariation1ValueIs]: cvariation1ValueIs, // cvariation1ValueIs
//   [bas.cc + ciValueIs]: ciValueIs, // ciValueIs
//   [bas.cc + cjValueIs]: cjValueIs, // cjValueIs
//   [bas.cc + cdeletionCostIs]: cdeletionCostIs, // cdeletionCostIs
//   [bas.cc + cinsertionCostIs]: cinsertionCostIs, // cinsertionCostIs
//   [bas.cc + csubstitutionCostIs]: csubstitutionCostIs, // csubstitutionCostIs
//   [bas.cc + ccamelCaseWordCountIs]: ccamelCaseWordCountIs, // ccamelCaseWordCountIs
//   [bas.cc + ccontainsAcronymIs]: ccontainsAcronymIs, // ccontainsAcronymIs
//   [bas.cc + cspacesCountIs]: cspacesCountIs, // cspacesCountIs
//   [bas.cc + cperiodCountIs]: cperiodCountIs, // cperiodCountIs
//   [bas.cc + cdashCountIs]: cdashCountIs, // cdashCountIs
//   [bas.cc + cunderscoreCountIs]: cunderscoreCountIs, // cunderscoreCountIs
//   [bas.cc + cplusCountIs]: cplusCountIs, // plusCountIs
//   [bas.cc + cpercentCountIs]: cpercentCountIs, // percentCountIs
//   [bas.cc + cstringDeltaValueIs]: cstringDeltaValueIs, // cstringDeltaValueIs
//   [bas.cc + cFilenamesMatch]: cFilenamesMatch, // cFilenamesMatch
//   [bas.cc + cFilenamesDoNotMatch]: cFilenamesDoNotMatch, // cFilenamesDoNotMatch
//   [bas.cc + cArrayElementsMatch]: cArrayElementsMatch, // cArrayElementsMatch
//   [bas.cc + cArrayElementsDoNotMatch]: cArrayElementsDoNotMatch, // cArrayElementsDoNotMatch
//   [bas.cc + clineArray2Is]: clineArray2Is, // clineArray2Is
//   [bas.cc + cSuggestedLineOfCodeIs]: cSuggestedLineOfCodeIs, // cSuggestedLineOfCodeIs
//   [bas.cc + cErrorUnknownConstantFile]: cErrorUnknownConstantFile, // cErrorUnknownConstantFile
//   [bas.cc + cconstantsTypesKeysIs]: cconstantsTypesKeysIs, // cconstantsTypesKeysIs
//   [bas.cc + cconstantTypeKeyIs]: cconstantTypeKeyIs, // cconstantTypeKeyIs
//   [bas.cc + cconstantTypeValuesIs]: cconstantTypeValuesIs, // cconstantTypeValuesIs
//   [bas.cc + cconstantsKeysIs]: cconstantsKeysIs, // cconstantsKeysIs
//   [bas.cc + cconstantKeyIs]: cconstantKeyIs, // cconstantKeyIs
//   [bas.cc + cconstantActualValueIs]: cconstantActualValueIs, // cconstantActualValueIs
//   [bas.cc + cconstantNameIs]: cconstantNameIs, // cconstantNameIs
//   [bas.cc + cconstantValueIs]: cconstantValueIs, // cconstantValueIs
//   [bas.cc + cdeltaLengthIs]: cdeltaLengthIs, // cdeltaLengthIs
//   [bas.cc + crecursiveSubStringIs]: crecursiveSubStringIs, // crecursiveSubStringIs
//   [bas.cc + cmaxStringLengthIs]: cmaxStringLengthIs, // cmaxStringLengthIs
//   [bas.cc + cminStringLengthIs]: cminStringLengthIs, // cminStringLengthIs
//   [bas.cc + ccurrentMasterStringArrayElementIs]: ccurrentMasterStringArrayElementIs, // ccurrentMasterStringArrayElementIs
//   [bas.cc + cConstantDoesNotExist]: cConstantDoesNotExist, // cConstantDoesNotExist
//   [bas.cc + cConstantDoesExist]: cConstantDoesExist, // cConstantDoesExist
//   [bas.cc + cBEGIN_ithLoop]: cBEGIN_ithLoop, // cBEGIN_ithLoop
//   [bas.cc + cBEGIN_ithIteration]: cBEGIN_ithIteration, // cBEGIN_ithIteration
//   [bas.cc + cBEGIN_jthLoop]: cBEGIN_jthLoop, // cBEGIN_jthLoop
//   [bas.cc + cBEGIN_kthIteration]: cBEGIN_kthIteration, // cBEGIN_kthIteration
//   [bas.cc + cEND_ithLoop]: cEND_ithLoop, // cEND_ithLoop
//   [bas.cc + cEND_ithIteration]: cEND_ithIteration, // cEND_ithIteration
//   [bas.cc + cEND_jthLoop]: cEND_jthLoop, // cEND_jthLoop
//   [bas.cc + cEND_kthIteration]: cEND_kthIteration, // cEND_kthIteration
//   [bas.cc + ccurrentCommandIs]: ccurrentCommandIs, // ccurrentCommandIs
//   [bas.cc + caliasListIs]: caliasListIs, // caliasListIs
//   [bas.cc + ccurrentAliasIs]: ccurrentAliasIs, // ccurrentAliasIs
//   [bas.cc + cduplicateAliasCountIs]: cduplicateAliasCountIs, // cduplicateAliasCountIs
//   [bas.cc + cduplicateCommandAliasIs]: cduplicateCommandAliasIs, // cduplicateCommandAliasIs
//   [bas.cc + ccommandWordAliasesBeforeChangeIs]: ccommandWordAliasesBeforeChangeIs, // ccommandWordAliasesBeforeChangeIs
//   [bas.cc + ccommandWordAliasesAfterChangeIs]: ccommandWordAliasesAfterChangeIs, // ccommandWordAliasesAfterChangeIs
//   [bas.cc + cmasterCommandWordAlisesArrayIs]: cmasterCommandWordAlisesArrayIs, // cmasterCommandWordAlisesArrayIs
//   [bas.cc + cmasterArrayIndexIs]: cmasterArrayIndexIs, // cmasterArrayIndexIs
//   [bas.cc + cCommandAliasesAre]: cCommandAliasesAre, // cCommandAliasesAre
//   [bas.cc + cexpandedLehmerCodeArrayIs]: cexpandedLehmerCodeArrayIs, // cexpandedLehmerCodeArrayIs
//   [bas.cc + cindexOfExpansionIs]: cindexOfExpansionIs, // cindexOfExpansionIs
//   [bas.cc + carrayToBeExpandedIs]: carrayToBeExpandedIs, // carrayToBeExpandedIs
//   [bas.cc + climitOfExpansionIs]: climitOfExpansionIs, // climitOfExpansionIs
//   [bas.cc + cpushingLehmerCodeArray1ToReturnDataValue]: cpushingLehmerCodeArray1ToReturnDataValue, // cpushingLehmerCodeArray1ToReturnDataValue
//   [bas.cc + creturnDataAfterPushIs]: creturnDataAfterPushIs, // creturnDataAfterPushIs
//   [bas.cc + creturnDataAfterLevel1Is]: creturnDataAfterLevel1Is, // creturnDataAfterLevel1Is
//   [bas.cc + carrayToBeExpandedDotLengthIs]: carrayToBeExpandedDotLengthIs, // carrayToBeExpandedDotLengthIs
//   [bas.cc + creturnDataDotLengthIs]: creturnDataDotLengthIs, // creturnDataDotLengthIs
//   [bas.cc + creturnDataBeforePopIs]: creturnDataBeforePopIs, // creturnDataBeforePopIs
//   [bas.cc + creturnDataAfterPopIs]: creturnDataAfterPopIs, // creturnDataAfterPopIs
//   [bas.cc + cmasterTempReturnDataBeforeRecursiveCallIs]: cmasterTempReturnDataBeforeRecursiveCallIs, // cmasterTempReturnDataBeforeRecursiveCallIs
//   [bas.cc + ctempReturnData1Is]: ctempReturnData1Is, // ctempReturnData1Is
//   [bas.cc + ctempReturnData1DotLengthIs]: ctempReturnData1DotLengthIs, // ctempReturnData1DotLengthIs
//   [bas.cc + cpushingTempReturnData1Kvalue]: cpushingTempReturnData1Kvalue, // cpushingTempReturnData1Kvalue
//   [bas.cc + cmasterTempReturnDataAfterRecursiveCallIs]: cmasterTempReturnDataAfterRecursiveCallIs, // cmasterTempReturnDataAfterRecursiveCallIs
//   [bas.cc + clookupIndexIs]: clookupIndexIs, // clookupIndexIs
//   [bas.cc + clookupValueIs]: clookupValueIs, // clookupValueIs
//   [bas.cc + cDataCatagoryShouldBe]: cDataCatagoryShouldBe, // cDataCatagoryShouldBe
//   [bas.cc + cDataCatagoryDetailNameShouldBe]: cDataCatagoryDetailNameShouldBe, // cDataCatagoryDetailNameShouldBe
//   [bas.cc + cKeywordNameShouldBe]: cKeywordNameShouldBe, // cKeywordNameShouldBe
//   [bas.cc + cpathElementIs]: cpathElementIs, // cpathElementIs
//   [bas.cc + ccaseIEqual0]: ccaseIEqual0, // ccaseIEqual0
//   [bas.cc + ccasePathElementEqual]: ccasePathElementEqual, // ccasePathElementEqual
//   [bas.cc + ccaseElse]: ccaseElse, // ccaseElse
//   [bas.cc + creturnDataSoFarIs]: creturnDataSoFarIs, // creturnDataSoFarIs
//   [bas.cc + cpathArrayIs]: cpathArrayIs, // cpathArrayIs
//   [bas.cc + ccurrentPathElementIs]: ccurrentPathElementIs, // ccurrentPathElementIs
//   [bas.cc + cAttemptingToLoadXmlData]: cAttemptingToLoadXmlData, // cAttemptingToLoadXmlData
//   [bas.cc + cAttemptingToLoadCsvData]: cAttemptingToLoadCsvData, // cAttemptingToLoadCsvData
//   [bas.cc + cAttemptingToLoadJsonData]: cAttemptingToLoadJsonData, // cAttemptingToLoadJsonData
//   [bas.cc + cLoadedDataIs]: cLoadedDataIs, // cLoadedDataIs
//   [bas.cc + cattributeArrayIs]: cattributeArrayIs, // cattributeArrayIs
//   [bas.cc + cattributeArray0Is]: cattributeArray0Is, // cattributeArray0Is
//   [bas.cc + cattributeArray1Is]: cattributeArray1Is, // attributeArray1Is
//   [bas.cc + carrayIs]: carrayIs, // carrayIs
//   [bas.cc + cvalueIs]: cvalueIs, // cvalueIs
//   [bas.cc + cmyFunctionIs]: cmyFunctionIs, // cmyFunctionIs
//   [bas.cc + carrayInputObjectIsNotAnArray]: carrayInputObjectIsNotAnArray, // carrayInputObjectIsNotAnArray
//   [bas.cc + cTheValueWasFoundInTheArray]: cTheValueWasFoundInTheArray, // cTheValueWasFoundInTheArray
//   [bas.cc + cTheValueWasNotFoundInTheArray]: cTheValueWasNotFoundInTheArray, // cTheValueWasNotFoundInTheArray
//   [bas.cc + coriginalStringIs]: coriginalStringIs, // coriginalStringIs
//   [bas.cc + cindexIs]: cindexIs, // cindexIs
//   [bas.cc + creplacementIs]: creplacementIs, // creplacementIs
//   [bas.cc + cDEPLOY_APPLICATION]: cDEPLOY_APPLICATION, // cDEPLOY_APPLICATION
//   [bas.cc + cRELEASE_APPLICATION]: cRELEASE_APPLICATION, // cRELEASE_APPLICATION
//   [bas.cc + cDeploymentWasCompleted]: cDeploymentWasCompleted, // cDeploymentWasCompleted
//   [bas.cc + cDeploymentFailed]: cDeploymentFailed, // cDeploymentFailed
//   [bas.cc + cReleaseFailed]: cReleaseFailed, // cReleaseFailed
//   // [bas.cc + cinputDataIis]: cinputDataIis, // cinputDataIis
//   [bas.cc + caggregateCommandStringIs]: caggregateCommandStringIs, // caggregateCommandStringIs
//   [bas.cc + cmetaDataParametersIs]: cmetaDataParametersIs, // cmetaDataParametersIs
//   [bas.cc + cmetaDataParametersLengthIs]: cmetaDataParametersLengthIs, // cmetaDataParametersLengthIs
//   [bas.cc + cmetaDataPathAndFilenameIs]: cmetaDataPathAndFilenameIs, // cmetaDataPathAndFilenameIs
//   [bas.cc + cpathAndFilenameIs]: cpathAndFilenameIs, // cpathAndFilenameIs
//   [bas.cc + ccontentsAre]: ccontentsAre, // ccontentsAre
//   [bas.cc + ccontentsOfDare]: ccontentsOfDare, // ccontentsOfDare
//   [bas.cc + cBEGIN_ithIterationOfInputDataArray]: cBEGIN_ithIterationOfInputDataArray, // cBEGIN_ithIterationOfInputDataArray
//   [bas.cc + ccurrentRuleIs]: ccurrentRuleIs, // ccurrentRuleIs
//   [bas.cc + crulesIs]: crulesIs, // crulesIs
//   [bas.cc + cruleInputDataIs]: cruleInputDataIs, // cruleInputDataIs
//   [bas.cc + cruleInputMetaData]: cruleInputMetaData, // cruleInputMetaData
//   [bas.cc + cBusinessRuleStartTimeIs]: cBusinessRuleStartTimeIs, // cBusinessRuleStartTimeIs
//   [bas.cc + cBusinessRuleEndTimeIs]: cBusinessRuleEndTimeIs, // cBusinessRuleEndTimeIs
//   [bas.cc + cBusinessRuleRunTimeIs]: cBusinessRuleRunTimeIs, // cBusinessRuleRunTimeIs
//   [bas.cc + ccommandStringBeforeAttemptedDelimiterSwapIs]: ccommandStringBeforeAttemptedDelimiterSwapIs, // ccommandStringBeforeAttemptedDelimiterSwapIs
//   [bas.cc + creplaceCharacterWithCharacterRuleIs]: creplaceCharacterWithCharacterRuleIs, // creplaceCharacterWithCharacterRuleIs
//   [bas.cc + cRuleOutputIs]: cRuleOutputIs, // cRuleOutputIs
//   [bas.cc + ccamelCaseCommandNameArrayIs]: ccamelCaseCommandNameArrayIs, // ccamelCaseCommandNameArrayIs
//   [bas.cc + ccurrentCommandWordIs]: ccurrentCommandWordIs, // ccurrentCommandWordIs
//   [bas.cc + cPARSER_ERROR]: cPARSER_ERROR, // cPARSER_ERROR
//   [bas.cc + ccommandAliasDataStructureIs]: ccommandAliasDataStructureIs, // ccommandAliasDataStructureIs
//   [bas.cc + cuserDefinedConstantIs]: cuserDefinedConstantIs, // cuserDefinedConstantIs
//   [bas.cc + cwordCountIs]: cwordCountIs, // cwordCountIs
//   [bas.cc + cwordsArrayIs]: cwordsArrayIs, // cwordsArrayIs
//   [bas.cc + cOptimizedConstantDefinitionForWord]: cOptimizedConstantDefinitionForWord, // cOptimizedConstantDefinitionForWord
//   [bas.cc + cuserDefinedConstantListIs]: cuserDefinedConstantListIs, // cuserDefinedConstantListIs
//   [bas.cc + cuserDefinedConstantListContainsComas]: cuserDefinedConstantListContainsComas, // cuserDefinedConstantListContainsComas
//   [bas.cc + cuserDefinedConstantsListArrayIs]: cuserDefinedConstantsListArrayIs, // cuserDefinedConstantsListArrayIs
//   [bas.cc + cuserDefinedConstantsListDoesNotContainComas]: cuserDefinedConstantsListDoesNotContainComas, // cuserDefinedConstantsListDoesNotContainComas
//   [bas.cc + ccommonPatternsArrayIs]: ccommonPatternsArrayIs, // ccommonPatternsArrayIs
//   [bas.cc + cbusinessRuleCounterIs]: cbusinessRuleCounterIs, // cbusinessRuleCounterIs
//   [bas.cc + cbusinessRulePerformanceSumIs]: cbusinessRulePerformanceSumIs, // cbusinessRulePerformanceSumIs
//   [bas.cc + cDoneBusinessRulePerformanceSumIs]: cDoneBusinessRulePerformanceSumIs, // cDoneBusinessRulePerformanceSumIs
//   [bas.cc + caverageIs]: caverageIs, // caverageIs
//   [bas.cc + cbusinessRulePerformanceStdSumIs]: cbusinessRulePerformanceStdSumIs, // cbusinessRulePerformanceStdSumIs
//   [bas.cc + cDoneBusinessRulePerformanceStdSumIs]: cDoneBusinessRulePerformanceStdSumIs, // cDoneBusinessRulePerformanceStdSumIs
//   [bas.cc + cstandardDevIs]: cstandardDevIs, // cstandardDevIs
//   [bas.cc + ccommandCounterIs]: ccommandCounterIs, // ccommandCounterIs
//   [bas.cc + ccommandPerformanceSumIs]: ccommandPerformanceSumIs, // ccommandPerformanceSumIs
//   [bas.cc + cDoneCommandPerformanceSumIs]: cDoneCommandPerformanceSumIs, // cDoneCommandPerformanceSumIs
//   [bas.cc + ccommandPerformanceStdSumIs]: ccommandPerformanceStdSumIs, // ccommandPerformanceStdSumIs
//   [bas.cc + cDoneCommandPerformanceStdSumIs]: cDoneCommandPerformanceStdSumIs, // cDoneCommandPerformanceStdSumIs
//   [bas.cc + ccolorKeysIs]: ccolorKeysIs, // ccolorKeysIs
//   [bas.cc + ccurrentColorNameIs]: ccurrentColorNameIs, // ccurrentColorNameIs
//   [bas.cc + ccurrentColorObjectIs]: ccurrentColorObjectIs, // ccurrentColorObjectIs
//   [bas.cc + ccurrentColorHexValueIs]: ccurrentColorHexValueIs, // ccurrentColorHexValueIs
//   [bas.cc + cruleOutputIs]: cruleOutputIs, // cruleOutputIs
//   [bas.cc + cBeginPhase1ConstantsValidation]: cBeginPhase1ConstantsValidation, // cBeginPhase1ConstantsValidation
//   [bas.cc + cEndPhase1ConstantsValidation]: cEndPhase1ConstantsValidation, // cEndPhase1ConstantsValidation
//   [bas.cc + cBeginPhase2ConstantsValidation]: cBeginPhase2ConstantsValidation, // cBeginPhase2ConstantsValidation
//   [bas.cc + cEndPhase2ConstantsValidation]: cEndPhase2ConstantsValidation, // cEndPhase2ConstantsValidation
//   [bas.cc + cconstantsPathIs]: cconstantsPathIs, // cconstantsPathIs
//   [bas.cc + cresolvedConstantsPath_BasicIs]: cresolvedConstantsPath_BasicIs, // cresolvedConstantsPath_BasicIs
//   [bas.cc + cresolvedConstantsPath_BusinessIs]: cresolvedConstantsPath_BusinessIs, // cresolvedConstantsPath_BusinessIs
//   [bas.cc + cresolvedConstantsPath_ColorIs]: cresolvedConstantsPath_ColorIs, // cresolvedConstantsPath_ColorIs
//   [bas.cc + cresolvedConstantsPath_CommandIs]: cresolvedConstantsPath_CommandIs, // cresolvedConstantsPath_CommandIs
//   [bas.cc + cresolvedConstantsPath_ConfigurationIs]: cresolvedConstantsPath_ConfigurationIs, // cresolvedConstantsPath_ConfigurationIs
//   [bas.cc + cresolvedConstantsPath_CountryIs]: cresolvedConstantsPath_CountryIs, // cresolvedConstantsPath_CountryIs
//   [bas.cc + cresolvedConstantsPath_ElementIs]: cresolvedConstantsPath_ElementIs, // cresolvedConstantsPath_ElementIs
//   [bas.cc + cresolvedConstantsPath_GenericIs]: cresolvedConstantsPath_GenericIs, // cresolvedConstantsPath_GenericIs
//   [bas.cc + cresolvedConstantsPath_IsotopeIs]: cresolvedConstantsPath_IsotopeIs, // cresolvedConstantsPath_IsotopeIs
//   [bas.cc + cresolvedConstantsPath_KnotIs]: cresolvedConstantsPath_KnotIs, // cresolvedConstantsPath_KnotIs
//   [bas.cc + cresolvedConstantsPath_LanguageIs]: cresolvedConstantsPath_LanguageIs, // cresolvedConstantsPath_LanguageIs
//   [bas.cc + cresolvedConstantsPath_MessageIs]: cresolvedConstantsPath_MessageIs, // cresolvedConstantsPath_MessageIs
//   [bas.cc + cresolvedConstantsPath_NumericIs]: cresolvedConstantsPath_NumericIs, // cresolvedConstantsPath_NumericIs
//   [bas.cc + cresolvedConstantsPath_PhonicIs]: cresolvedConstantsPath_PhonicIs, // cresolvedConstantsPath_PhonicIs
//   [bas.cc + cresolvedConstantsPath_ShapeIs]: cresolvedConstantsPath_ShapeIs, // cresolvedConstantsPath_ShapeIs
//   [bas.cc + cresolvedConstantsPath_SystemIs]: cresolvedConstantsPath_SystemIs, // cresolvedConstantsPath_SystemIs
//   [bas.cc + cresolvedConstantsPath_UnitIs]: cresolvedConstantsPath_UnitIs, // cresolvedConstantsPath_UnitIs
//   [bas.cc + cresolvedConstantsPath_WordIs]: cresolvedConstantsPath_WordIs, // cresolvedConstantsPath_WordIs
//   [bas.cc + cBasicConstantsPhase1Validation]: cBasicConstantsPhase1Validation, // cBasicConstantsPhase1Validation
//   [bas.cc + cBusinessConstantsPhase1Validation]: cBusinessConstantsPhase1Validation, // cBusinessConstantsPhase1Validation
//   [bas.cc + cColorConstantsPhase1Validation]: cColorConstantsPhase1Validation, // cColorConstantsPhase1Validation
//   [bas.cc + cCommandConstantsPhase1Validation]: cCommandConstantsPhase1Validation, // cCommandConstantsPhase1Validation
//   [bas.cc + cConfigurationConstantsPhase1Validation]: cConfigurationConstantsPhase1Validation, // cConfigurationConstantsPhase1Validation
//   [bas.cc + cCountryConstantsPhase1Validation]: cCountryConstantsPhase1Validation, // cCountryConstantsPhase1Validation
//   [bas.cc + cElementConstantsPhase1Validation]: cElementConstantsPhase1Validation, // cElementConstantsPhase1Validation
//   [bas.cc + cGenericConstantsPhase1Validation]: cGenericConstantsPhase1Validation, // cGenericConstantsPhase1Validation
//   [bas.cc + cIsotopeConstantsPhase1Validation]: cIsotopeConstantsPhase1Validation, // cIsotopeConstantsPhase1Validation
//   [bas.cc + cKnotConstantsPhase1Validation]: cKnotConstantsPhase1Validation, // cKnotConstantsPhase1Validation
//   [bas.cc + cLanguageConstantsPhase1Validation]: cLanguageConstantsPhase1Validation, // cLanguageConstantsPhase1Validation
//   [bas.cc + cMessageConstantsPhase1Validation]: cMessageConstantsPhase1Validation, // cMessageConstantsPhase1Validation
//   [bas.cc + cNumericalConstantsPhase1Validation]: cNumericalConstantsPhase1Validation, // cNumericalConstantsPhase1Validation
//   [bas.cc + cPhonicConstantsPhase1Validation]: cPhonicConstantsPhase1Validation, // cPhonicConstantsPhase1Validation
//   [bas.cc + cShapeConstantsPhase1Validation]: cShapeConstantsPhase1Validation, // cShapeConstantsPhase1Validation
//   [bas.cc + cSystemConstantsPhase1Validation]: cSystemConstantsPhase1Validation, // cSystemConstantsPhase1Validation
//   [bas.cc + cUnitConstantsPhase1Validation]: cUnitConstantsPhase1Validation, // cUnitConstantsPhase1Validation
//   [bas.cc + cWordConstantsPhase1Validation]: cWordConstantsPhase1Validation, // cWordConstantsPhase1Validation
//   [bas.cc + cBasicConstantsPhase2Validation]: cBasicConstantsPhase2Validation, // cBasicConstantsPhase2Validation
//   [bas.cc + cBusinessConstantsPhase2Validation]: cBusinessConstantsPhase2Validation, // cBusinessConstantsPhase2Validation
//   [bas.cc + cColorConstantsPhase2Validation]: cColorConstantsPhase2Validation, // cColorConstantsPhase2Validation
//   [bas.cc + cCommandConstantsPhase2Validation]: cCommandConstantsPhase2Validation, // cCommandConstantsPhase2Validation
//   [bas.cc + cConfigurationConstantsPhase2Validation]: cConfigurationConstantsPhase2Validation, // cConfigurationConstantsPhase2Validation
//   [bas.cc + cCountryConstantsPhase2Validation]: cCountryConstantsPhase2Validation, // cCountryConstantsPhase2Validation
//   [bas.cc + cElementConstantsPhase2Validation]: cElementConstantsPhase2Validation, // cElementConstantsPhase2Validation
//   [bas.cc + cGenericConstantsPhase2Validation]: cGenericConstantsPhase2Validation, // cGenericConstantsPhase2Validation
//   [bas.cc + cIsotopeConstantsPhase2Validation]: cIsotopeConstantsPhase2Validation, // cIsotopeConstantsPhase2Validation
//   [bas.cc + cKnotConstantsPhase2Validation]: cKnotConstantsPhase2Validation, // cKnotConstantsPhase2Validation
//   [bas.cc + cLanguageConstantsPhase2Validation]: cLanguageConstantsPhase2Validation, // cLanguageConstantsPhase2Validation
//   [bas.cc + cMessageConstantsPhase2Validation]: cMessageConstantsPhase2Validation, // cMessageConstantsPhase2Validation
//   [bas.cc + cNumericalConstantsPhase2Validation]: cNumericalConstantsPhase2Validation, // cNumericalConstantsPhase2Validation
//   [bas.cc + cPhonicConstantsPhase2Validation]: cPhonicConstantsPhase2Validation, // cPhonicConstantsPhase2Validation
//   [bas.cc + cShapeConstantsPhase2Validation]: cShapeConstantsPhase2Validation, // cShapeConstantsPhase2Validation
//   [bas.cc + cSystemConstantsPhase2Validation]: cSystemConstantsPhase2Validation, // cSystemConstantsPhase2Validation
//   [bas.cc + cUnitConstantsPhase2Validation]: cUnitConstantsPhase2Validation, // cUnitConstantsPhase2Validation
//   [bas.cc + cWordConstantsPhase2Validation]: cWordConstantsPhase2Validation, // cWordConstantsPhase2Validation
//   [bas.cc + ccommandStringIs]: ccommandStringIs, // ccommandStringIs
//   [bas.cc + ccommandDelimiterIs]: ccommandDelimiterIs, // ccommandDelimiterIs
//   [bas.cc + ccommandToExecuteBeforeTheAliasIs]: ccommandToExecuteBeforeTheAliasIs, // ccommandToExecuteBeforeTheAliasIs
//   [bas.cc + ccommandToExecuteAfterTheAliasIs]: ccommandToExecuteAfterTheAliasIs, // ccommandToExecuteAfterTheAliasIs
//   [bas.cc + cWarningTheSpecifiedCommand]: cWarningTheSpecifiedCommand, // cWarningTheSpecifiedCommand
//   [bas.cc + cdoesNotExistPleaseTryAgain]: cdoesNotExistPleaseTryAgain, // cdoesNotExistPleaseTryAgain
//   [bas.cc + ccommandStringContainsEitherSingleQuoteOrBackTickQuote]: ccommandStringContainsEitherSingleQuoteOrBackTickQuote, // ccommandStringContainsEitherSingleQuoteOrBackTickQuote
//   [bas.cc + ccommandStringContainsSingleQuote]: ccommandStringContainsSingleQuote, // ccommandStringContainsSingleQuote
//   [bas.cc + cnumberOfSingleQuotesIsEven]: cnumberOfSingleQuotesIsEven, // cnumberOfSingleQuotesIsEven
//   [bas.cc + cFirstIndexIs]: cFirstIndexIs, // cFirstIndexIs
//   [bas.cc + ccommandStringAfterTaggingTheFirstStringDelimiter]: ccommandStringAfterTaggingTheFirstStringDelimiter, // ccommandStringAfterTaggingTheFirstStringDelimiter
//   [bas.cc + cAdditionalIndexIs]: cAdditionalIndexIs, // cAdditionalIndexIs
//   [bas.cc + coddIndex]: coddIndex, // coddIndex
//   [bas.cc + cevenIndex]: cevenIndex, // cevenIndex
//   [bas.cc + ccommandStringAfterTaggingAnOddStringDelimiter]: ccommandStringAfterTaggingAnOddStringDelimiter, // ccommandStringAfterTaggingAnOddStringDelimiter
//   [bas.cc + ccommandStringAfterTaggingAnEvenStringDelimiter]: ccommandStringAfterTaggingAnEvenStringDelimiter, // ccommandStringAfterTaggingAnEvenStringDelimiter
//   [bas.cc + cpreSplitCommandStringIs]: cpreSplitCommandStringIs, // cpreSplitCommandStringIs
//   [bas.cc + cpostSplitCommandStringIs]: cpostSplitCommandStringIs, // cpostSplitCommandStringIs
//   [bas.cc + cpreSplitCommandStringElementIs]: cpreSplitCommandStringElementIs, // cpreSplitCommandStringElementIs
//   [bas.cc + cDoingStraightSplitCommandString]: cDoingStraightSplitCommandString, // cDoingStraightSplitCommandString
//   [bas.cc + cCommandStartTimeIs]: cCommandStartTimeIs, // cCommandStartTimeIs
//   [bas.cc + cCommandEndTimeIs]: cCommandEndTimeIs, // cCommandEndTimeIs
//   [bas.cc + cCommandRunTimeIs]: cCommandRunTimeIs, // cCommandRunTimeIs
//   [bas.cc + ccommandAliasesFilePathConfigurationNameIs]: ccommandAliasesFilePathConfigurationNameIs, // ccommandAliasesFilePathConfigurationNameIs
//   [bas.cc + ccommandIs]: ccommandIs, // ccommandIs
//   [bas.cc + ccommandToExecuteIs]: ccommandToExecuteIs, // ccommandToExecuteIs
//   [bas.cc + ccontextNameIs]: ccontextNameIs, // ccontextNameIs
//   [bas.cc + callSystemConfigurationsIs]: callSystemConfigurationsIs, // callSystemConfigurationsIs
//   [bas.cc + cdataPathConfigurationNameIs]: cdataPathConfigurationNameIs, // cdataPathConfigurationNameIs
//   [bas.cc + cdataPathIs]: cdataPathIs, // dataPathIs
//   [bas.cc + cfilesFoundIs]: cfilesFoundIs, // filesFoundIs
//   [bas.cc + cfileToLoadIs]: cfileToLoadIs, // fileToLoadIs
//   [bas.cc + cfilesToLoadIs]: cfilesToLoadIs, // filesToLoadIs
//   [bas.cc + ccontextNameIs]: ccontextNameIs, // contextNameIs
//   [bas.cc + cdataFileToMergeIs]: cdataFileToMergeIs, // dataFileToMergeIs
//   [bas.cc + cparsedDataFileIs]: cparsedDataFileIs, // parsedDataFileIs
//   [bas.cc + cexecuteBusinessRules]: cexecuteBusinessRules, // executeBusinessRules
//   [bas.cc + cdataFileIs]: cdataFileIs, // dataFileIs
//   [bas.cc + cmergedDataIs]: cmergedDataIs, // mergedDataIs
//   [bas.cc + cdebugConfigurationSettingValueIs]: cdebugConfigurationSettingValueIs, // debugConfigurationSettingValueIs
//   [bas.cc + cappConfigPathIs]: cappConfigPathIs, // appConfigPathIs
//   [bas.cc + cframeworkConfigPathIs]: cframeworkConfigPathIs, // frameworkConfigPathIs
//   [bas.cc + cALL_DATA_IS]: cALL_DATA_IS, // ALL_DATA_IS
//   [bas.cc + cAllLoadedDataIs]: cAllLoadedDataIs, // AllLoadedDataIs
//   [bas.cc + cconfigDataIs]: cconfigDataIs, // configDataIs
//   [bas.cc + cERROR]: cERROR, // ERROR:
//   [bas.cc + cErrorInvalidAccessTo]: cErrorInvalidAccessTo, // ErrorInvalidAccessTo
//   [bas.cc + crootPathIs]: crootPathIs, // rootPathIs
//   [bas.cc + caskIs]: caskIs, // askIs
//   [bas.cc + cINPUT]: cINPUT, // INPUT
//   [bas.cc + cinputIs]: cinputIs, // inputIs
//   [bas.cc + cstartTimeIs]: cstartTimeIs, // startTimeIs
//   [bas.cc + cendTimeIs]: cendTimeIs, // endTimeIs
//   [bas.cc + cdeltaTimeResultIs]: cdeltaTimeResultIs, // deltaTimeResultIs
//   [bas.cc + cclientConfigurationIs]: cclientConfigurationIs, // clientConfigurationIs
//   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   [bas.cc + cloadedAndMergedDataAllFilesIs]: cloadedAndMergedDataAllFilesIs, // loadedAndMergedDataAllFilesIs
//   [bas.cc + cloadedAndMergedDataAllFilesContentsAre]: cloadedAndMergedDataAllFilesContentsAre, // loadedAndMergedDataAllFilesContentsAre
//   [bas.cc + ccommandWorkflowFilePathConfigurationNameIs]: ccommandWorkflowFilePathConfigurationNameIs, // commandWorkflowFilePathConfigurationNameIs
//   [bas.cc + ccontentsOfDataStructreIs]: ccontentsOfDataStructreIs, // contentsOfDataStructreIs
//   [bas.cc + cclientBusinessRulesAre]: cclientBusinessRulesAre, // clientBusinessRulesAre
//   [bas.cc + cclientCommandsAre]: cclientCommandsAre, // clientCommandsAre
//   [bas.cc + csystemCommandsAliasesPathIs]: csystemCommandsAliasesPathIs, // systemCommandsAliasesPathIs
//   [bas.cc + cclientCommandsAliasesPathIs]: cclientCommandsAliasesPathIs, // clientCommandsAliasesPathIs
//   [bas.cc + cresolvedSystemCommandsAliasesPathIs]: cresolvedSystemCommandsAliasesPathIs, // resolvedSystemCommandsAliasesPathIs
//   [bas.cc + cresolvedClientCommandsAliasesPathIs]: cresolvedClientCommandsAliasesPathIs, // resolvedClientCommandsAliasesPathIs
//   [bas.cc + csystemWorkflowPathIs]: csystemWorkflowPathIs, // systemWorkflowPathIs
//   [bas.cc + cclientWorkflowPathIs]: cclientWorkflowPathIs, // clientWorkflowPathIs
//   [bas.cc + cresolvedSystemWorkflowsPathIs]: cresolvedSystemWorkflowsPathIs, // resolvedSystemWorkflowsPathIs
//   [bas.cc + cresolvedClientWorkflowsPathIs]: cresolvedClientWorkflowsPathIs, // resolvedClientWorkflowsPathIs
//   [bas.cc + cbusinessRuleIs]: cbusinessRuleIs, // businessRuleIs
//   [bas.cc + cruleInputIs]: cruleInputIs, // ruleInputIs
//   [bas.cc + cruleMetaDataIs]: cruleMetaDataIs, // ruleMetaDataIs
//   [bas.cc + cconfigurationNamespaceIs]: cconfigurationNamespaceIs, // configurationNamespaceIs
//   [bas.cc + cconfigurationNameIs]: cconfigurationNameIs, // configurationNameIs
//   [bas.cc + cconfigurationValueIs]: cconfigurationValueIs, // configurationValueIs
//   [bas.cc + creturnConfigurationValueIs]: creturnConfigurationValueIs, // returnConfigurationValueIs
//   [bas.cc + cattributeJsonStringIs]: cattributeJsonStringIs, // attributeJsonStringIs
//   [bas.cc + cappAttributeNameIs]: cappAttributeNameIs, // appAttributeNameIs
//   [bas.cc + cappAttributeValueIs]: cappAttributeValueIs, // appAttributeValueIs
//   [bas.cc + cexecuteBusinessRulesColon]: cexecuteBusinessRulesColon, // executeBusinessRulesColon
//   [bas.cc + cdataPathAfterBusinessRulesProcessingIs]: cdataPathAfterBusinessRulesProcessingIs, // dataPathAfterBusinessRulesProcessingIs
//   [bas.cc + cFileToLoadIs]: cFileToLoadIs, // FileToLoadIs
//   [bas.cc + cfileExtensionIs]: cfileExtensionIs, // fileExtensionIs
//   [bas.cc + cloadedFileDataIs]: cloadedFileDataIs, // loadedFileDataIs
//   [bas.cc + cBEGIN_PROCESSING_ADDITIONAL_DATA]: cBEGIN_PROCESSING_ADDITIONAL_DATA, // BEGIN_PROCESSING_ADDITIONAL_DATA
//   [bas.cc + cDONE_PROCESSING_ADDITIONAL_DATA]: cDONE_PROCESSING_ADDITIONAL_DATA, // DONE_PROCESSING_ADDITIONAL_DATA
//   [bas.cc + cMERGED_dataIs]: cMERGED_dataIs, // MERGED_dataIs
//   [bas.cc + cparsedDataFileContentsAre]: cparsedDataFileContentsAre, // parsedDataFileContentsAre
//   [bas.cc + cdataCatagoryIs]: cdataCatagoryIs, // dataCatagoryIs
//   [bas.cc + cfullyParsedDataIs]: cfullyParsedDataIs, // fullyParsedDataIs
//   [bas.cc + cD_finalMergeIs]: cD_finalMergeIs, // D_finalMergeIs
//   [bas.cc + cdataStorageContextNameIs]: cdataStorageContextNameIs, // dataStorageContextNameIs
//   [bas.cc + cdataToStoreIs]: cdataToStoreIs, // dataToStoreIs
//   [bas.cc + cdataCatagoryDetailsNameIs]: cdataCatagoryDetailsNameIs, // dataCatagoryDetailsNameIs
//   [bas.cc + ctempDataIs]: ctempDataIs, // tempDataIs
//   [bas.cc + ctargetDataIs]: ctargetDataIs, // targetDataIs
//   [bas.cc + cpageNameIs]: cpageNameIs, // pageNameIs
//   [bas.cc + cdataToMergeIs]: cdataToMergeIs, // dataToMergeIs
//   [bas.cc + cdataToMergeElementCountIs]: cdataToMergeElementCountIs, // dataToMergeElementCountIs
//   [bas.cc + cdataToMergeElementCountIs1]: cdataToMergeElementCountIs1, // dataToMergeElementCountIs1
//   [bas.cc + ccheckIfThePageNameIsNotAnEmptyString]: ccheckIfThePageNameIsNotAnEmptyString, // checkIfThePageNameIsNotAnEmptyString
//   [bas.cc + cpageNameIsNotAnEmptyString]: cpageNameIsNotAnEmptyString, // pageNameIsNotAnEmptyString
//   [bas.cc + cCheckIfTheDataCatagoryIsAnEmptyStringOrNot]: cCheckIfTheDataCatagoryIsAnEmptyStringOrNot, // CheckIfTheDataCatagoryIsAnEmptyStringOrNot
//   [bas.cc + cdataCatagoryIsNotAnEmptyString]: cdataCatagoryIsNotAnEmptyString, // dataCatagoryIsNotAnEmptyString
//   [bas.cc + cdataCatagoryIsAnEmptyString]: cdataCatagoryIsAnEmptyString, // dataCatagoryIsAnEmptyString
//   [bas.cc + ctargetDataContentIs]: ctargetDataContentIs, // targetDataContentIs
//   [bas.cc + cafterAttemptToMergeResultsAre]: cafterAttemptToMergeResultsAre, // afterAttemptToMergeResultsAre
//   [bas.cc + cMergedDataIs]: cMergedDataIs, // MergedDataIs
//   [bas.cc + cpageNameIsAnEmptyString]: cpageNameIsAnEmptyString, // pageNameIsAnEmptyString
//   [bas.cc + cCaughtTheSpecialCaseThatWeAreMergingFlatList]: cCaughtTheSpecialCaseThatWeAreMergingFlatList, // CaughtTheSpecialCaseThatWeAreMergingFlatList
//   [bas.cc + cinsideTheForLoop]: cinsideTheForLoop, // insideTheForLoop
//   [bas.cc + ckeyIs]: ckeyIs, // keyIs
//   [bas.cc + ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs]: ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs, // targetDataIsModifiedInTheInputPassByReferenceVariableContentIs
//   [bas.cc + cdataObjectValueIs]: cdataObjectValueIs, // dataObjectValueIs
//   [bas.cc + celementNameIs]: celementNameIs, // elementNameIs
//   [bas.cc + cdataObjectIs]: cdataObjectIs, // dataObjectIs
//   [bas.cc + celementNamePatternIs]: celementNamePatternIs, // elementNamePatternIs
//   [bas.cc + celementCountIs]: celementCountIs, // elementCountIs
//   [bas.cc + cERROR_Colon]: cERROR_Colon, // ERROR_Colon
//   [bas.cc + cfileAndPathToLoadFromIs]: cfileAndPathToLoadFromIs, // fileAndPathToLoadFromIs
//   [bas.cc + cDoneLoadingDataFrom]: cDoneLoadingDataFrom, // DoneLoadingDataFrom
//   [bas.cc + cfileAndPathToWriteDataToIs]: cfileAndPathToWriteDataToIs, // fileAndPathToWriteDataToIs
//   [bas.cc + cdataToWriteIs]: cdataToWriteIs, // dataToWriteIs
//   [bas.cc + cDataWasWrittenToTheFile]: cDataWasWrittenToTheFile, // DataWasWrittenToTheFile
//   [bas.cc + cPathThatShouldBeScannedIs]: cPathThatShouldBeScannedIs, // PathThatShouldBeScannedIs
//   [bas.cc + cfilesFoundAre]: cfilesFoundAre, // filesFoundAre
//   [bas.cc + cdirectorIs]: cdirectorIs, // directorIs
//   [bas.cc + cdirectoryPathIs]: cdirectoryPathIs, // directoryPathIs
//   [bas.cc + csourceFolderIs]: csourceFolderIs, // sourceFolderIs
//   [bas.cc + cdestinationFolderIs]: cdestinationFolderIs, // destinationFolderIs
//   [bas.cc + ccopySuccessIs]: ccopySuccessIs, // copySuccessIs
//   [bas.cc + ccurrentVersionIs]: ccurrentVersionIs, // currentVersionIs
//   [bas.cc + creleasedArchiveFilesListIs]: creleasedArchiveFilesListIs, // releasedArchiveFilesListIs
//   [bas.cc + cfileIs]: cfileIs, // fileIs
//   [bas.cc + cfileNameIs]: cfileNameIs, // fileNameIs
//   [bas.cc + creleaseFilesListIs]: creleaseFilesListIs, // releaseFilesListIs
//   [bas.cc + creleaseDateTimeStampIs]: creleaseDateTimeStampIs, // releaseDateTimeStampIs
//   [bas.cc + creleaseFileNameIs]: creleaseFileNameIs, // releaseFileNameIs
//   [bas.cc + cDoneWritingTheZipFile]: cDoneWritingTheZipFile, // DoneWritingTheZipFile
//   [bas.cc + cSetTheReturnPackageSuccessFlagToTrue]: cSetTheReturnPackageSuccessFlagToTrue, // SetTheReturnPackageSuccessFlagToTrue
//   [bas.cc + ccurrentVersionAlreadyReleased]: ccurrentVersionAlreadyReleased, // currentVersionAlreadyReleased
//   [bas.cc + cpackageSuccessIs]: cpackageSuccessIs, // packageSuccessIs
//   [bas.cc + cRootPathBeforeProcessingIs]: cRootPathBeforeProcessingIs, // RootPathBeforeProcessingIs
//   [bas.cc + cRootPathAfterProcessingIs]: cRootPathAfterProcessingIs, // RootPathAfterProcessingIs
//   [bas.cc + cSourceIs]: cSourceIs, // SourceIs
//   [bas.cc + ctargetIs]: ctargetIs, // targetIs
//   [bas.cc + cErrorCouldNotCopyFile]: cErrorCouldNotCopyFile, // ErrorCouldNotCopyFile
//   [bas.cc + cErrorCouldNotCreateFolder]: cErrorCouldNotCreateFolder, // ErrorCouldNotCreateFolder
//   [bas.cc + csuccessfullCopyIs]: csuccessfullCopyIs, // successfullCopyIs
//   [bas.cc + cErrorCouldNotCopyFolderContents]: cErrorCouldNotCopyFolderContents, // ErrorCouldNotCopyFolderContents
//   [bas.cc + cargumentValueIs]: cargumentValueIs, // argumentValueIs
//   [bas.cc + cconsolidatedArgumentModeIs]: cconsolidatedArgumentModeIs, // consolidatedArgumentModeIs
//   [bas.cc + cPushingArgumentValueToReturnDataAsArrayElement]: cPushingArgumentValueToReturnDataAsArrayElement, // PushingArgumentValueToReturnDataAsArrayElement
//   [bas.cc + cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse]: cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse, // CallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse
//   [bas.cc + cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue]: cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue, // CallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue
//   [bas.cc + cargumentValueLengthGreaterThanZero]: cargumentValueLengthGreaterThanZero, // argumentValueLengthGreaterThanZero
//   [bas.cc + cReturnArgumentValueSameAsItWasPassedIn]: cReturnArgumentValueSameAsItWasPassedIn, // ReturnArgumentValueSameAsItWasPassedIn
//   [bas.cc + cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse]: cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse, // CallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse
//   [bas.cc + cCheckIfThereAreBracketsOrNoBrackets]: cCheckIfThereAreBracketsOrNoBrackets, // CheckIfThereAreBracketsOrNoBrackets
//   [bas.cc + cBracketsWereFound]: cBracketsWereFound, // BracketsWereFound
//   [bas.cc + cCheckIfThereIsRegularExpressionOrNot]: cCheckIfThereIsRegularExpressionOrNot, // CheckIfThereIsRegularExpressionOrNot
//   [bas.cc + cRegularExpressionWasFound]: cRegularExpressionWasFound, // RegularExpressionWasFound
//   [bas.cc + cNoRegExpFound]: cNoRegExpFound, // NoRegExpFound
//   [bas.cc + cBracketsAreFound]: cBracketsAreFound, // BracketsAreFound
//   [bas.cc + cNoSecondaryCommandArgumentDelimiters]: cNoSecondaryCommandArgumentDelimiters, // NoSecondaryCommandArgumentDelimiters
//   [bas.cc + cregularExpressionIs]: cregularExpressionIs, // regularExpressionIs
//   [bas.cc + cregExValueIs]: cregExValueIs, // regExValueIs
//   [bas.cc + cregularExpressionFlagsAre]: cregularExpressionFlagsAre, // regularExpressionFlagsAre
//   [bas.cc + cregExFlagsIs]: cregExFlagsIs, // regExFlagsIs
//   [bas.cc + cargumentValueContainsTheDelimiterLetsSplitIt]: cargumentValueContainsTheDelimiterLetsSplitIt, // argumentValueContainsTheDelimiterLetsSplitIt
//   [bas.cc + cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs]: cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs, // argumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs
//   [bas.cc + cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs]: cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs, // argumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs
//   [bas.cc + csecondaryCommandArgsDelimiterIs]: csecondaryCommandArgsDelimiterIs, // secondaryCommandArgsDelimiterIs
//   [bas.cc + cargumentArrayIs]: cargumentArrayIs, // argumentArrayIs
//   [bas.cc + cformattingIs]: cformattingIs, // formattingIs
//   [bas.cc + cdeltaTimeIs]: cdeltaTimeIs, // deltaTimeIs
//   [bas.cc + cformatIs]: cformatIs, // formatIs
//   [bas.cc + creturnDeltaTimeIs]: creturnDeltaTimeIs, // returnDeltaTimeIs
//   [bas.cc + csleepTimeIs]: csleepTimeIs, // sleepTimeIs
//   [bas.cc + cworkflowNameIs]: cworkflowNameIs, // workflowNameIs
//   [bas.cc + ccurrentWorkflowIs]: ccurrentWorkflowIs, // currentWorkflowIs
//   [bas.cc + cworkflowValueIs]: cworkflowValueIs, // workflowValueIs
//   [bas.cc + cdataHivePathArrayIs]: cdataHivePathArrayIs, // dataHivePathArrayIs
//   [bas.cc + ccontentsOfLeafDataHiveElementIs]: ccontentsOfLeafDataHiveElementIs, // contentsOfLeafDataHiveElementIs
//   [bas.cc + centryIs]: centryIs, // entryIs
//   [bas.cc + cattributeValueIs]: cattributeValueIs, // attributeValueIs
//   [bas.cc + ckey2Is]: ckey2Is, // key2Is
//   [bas.cc + centityIs]: centityIs, // entityIs
//   [bas.cc + cqueueNameSpaceIs]: cqueueNameSpaceIs, // queueNameSpaceIs
//   [bas.cc + cstackNameSpaceIs]: cstackNameSpaceIs, // stackNameSpaceIs
//   [bas.cc + cWarningStackColon]: cWarningStackColon, // WarningStackColon
//   [bas.cc + cAlreadyExists]: cAlreadyExists, // AlreadyExists
//   [bas.cc + cdoesNotExist]: cdoesNotExist, // doesNotExist
//   [bas.cc + cisEmpty]: cisEmpty, // isEmpty
//   [bas.cc + cContentsOfTheStackNamespace]: cContentsOfTheStackNamespace, // ContentsOfTheStackNamespace
//   [bas.cc + cwordDelimiterIs]: cwordDelimiterIs, // wordDelimiterIs
//   [bas.cc + cstringContainsAcronymIs]: cstringContainsAcronymIs, // stringContainsAcronymIs
//   [bas.cc + cErrorZipPackageReleaseFailed]: cErrorZipPackageReleaseFailed, // ErrorZipPackageReleaseFailed
//   [bas.cc + cminimumColorRangeIs]: cminimumColorRangeIs, // minimumColorRangeIs
//   [bas.cc + cmaximumColorRangeIs]: cmaximumColorRangeIs, // maximumColorRangeIs
//   [bas.cc + callSystemConstantsValidationDataIs]: callSystemConstantsValidationDataIs, // allSystemConstantsValidationDataIs
//   [bas.cc + callClientConstantsValidationDataIs]: callClientConstantsValidationDataIs, // allClientConstantsValidationDataIs
//   [bas.cc + cconstantLibraryDataIs]: cconstantLibraryDataIs, // constantLibraryDataIs
//   [bas.cc + cclientValidationDataIs]: cclientValidationDataIs, // clientValidationDataIs
//   [bas.cc + carrayValidationDataIs]: carrayValidationDataIs, // arrayValidationDataIs
//   [bas.cc + cfilesListLimitIs]: cfilesListLimitIs, // filesListLimitIs
//   [bas.cc + cenableLimitIs]: cenableLimitIs, // enableLimitIs
//   [bas.cc + cfilesLimitIs]: cfilesLimitIs, // filesLimitIs
//   [bas.cc + cinputDataRightBeforeProcessingIs]: cinputDataRightBeforeProcessingIs, // inputDataRightBeforeProcessingIs
//   [bas.cc + cnumberIs]: cnumberIs, // numberIs
//
//   // WARNING: Mixed string. Cannot determine what delimiter should be used to break up the string into words.
//   [bas.cc + cDetermineWordDelimiterMessage1]: cDetermineWordDelimiterMessage1, // DetermineWordDelimiterMessage1
//   [bas.cc + cDetermineWordDelimiterMessage2]: cDetermineWordDelimiterMessage2, // DetermineWordDelimiterMessage2
//   [bas.cc + cDetermineWordDelimiterMessage3]: cDetermineWordDelimiterMessage3, // DetermineWordDelimiterMessage3
//   [bas.cc + cDetermineWordDelimiterMessage4]: cDetermineWordDelimiterMessage4, // DetermineWordDelimiterMessage4
//   // WARNING: Mixed string. Cannot determine how words are delimited in the string. Unable to count words.
//   [bas.cc + cGetWordCountInStringMessage1]: cGetWordCountInStringMessage1, // GetWordCountInStringMessage1
//   [bas.cc + cGetWordCountInStringMessage2]: cGetWordCountInStringMessage2, // GetWordCountInStringMessage2
//   [bas.cc + cGetWordCountInStringMessage3]: cGetWordCountInStringMessage3, // GetWordCountInStringMessage3
//   // WARNING: Mixed string. Cannot get words from the string. Unable to determine words.
//   [bas.cc + cGetWordsArrayFromStringMessage1]: cGetWordsArrayFromStringMessage1, // GetWordsArrayFromStringMessage1
//   [bas.cc + cGetWordsArrayFromStringMessage2]: cGetWordsArrayFromStringMessage2, // GetWordsArrayFromStringMessage2
//   [bas.cc + cGetWordsArrayFromStringMessage3]: cGetWordsArrayFromStringMessage3, // GetWordsArrayFromStringMessage3
//   // Please enter a named command where the first word starts with a lower case letter and all other words in the named command start with an upper case letter:
//   [bas.cc + cCommandNamePrompt2]: cCommandNamePrompt2, // CommandNamePrompt2
//   [bas.cc + cCommandNamePrompt3]: cCommandNamePrompt3, // CommandNamePrompt3
//   [bas.cc + cCommandNamePrompt4]: cCommandNamePrompt4, // CommandNamePrompt4
//   [bas.cc + cCommandNamePrompt5]: cCommandNamePrompt5, // CommandNamePrompt5
//   // Please enter a list of command word abreviations/acronyms/aliases for the command word:
//   [bas.cc + cCommandWordAliasPrompt1]: cCommandWordAliasPrompt1, // CommandWordAliasPrompt1
//   [bas.cc + cCommandWordAliasPrompt2]: cCommandWordAliasPrompt2, // CommandWordAliasPrompt2
//   [bas.cc + cCommandWordAliasPrompt3]: cCommandWordAliasPrompt3, // CommandWordAliasPrompt3
//   // Please enter a string you would like to define as a constant in the constants system:
//   [bas.cc + cConstantPrompt1]: cConstantPrompt1, // ConstantPrompt1
//   [bas.cc + cConstantPrompt2]: cConstantPrompt2, // ConstantPrompt2
//   [bas.cc + cConstantPrompt3]: cConstantPrompt3, // ConstantPrompt3
//   // Please enter a coma separated list of strings you would like to define in the constants system:
//   [bas.cc + cConstantsListPrompt1]: cConstantsListPrompt1, // ConstantsListPrompt1
//   [bas.cc + cConstantsListPrompt2]: cConstantsListPrompt2, // ConstantsListPrompt2
//   [bas.cc + cConstantsListPrompt3]: cConstantsListPrompt3, // ConstantsListPrompt3
//   // Please enter a coma separated list of strings you would like to search for common patterns:
//   [bas.cc + cConstantsListPatternSearchPrompt1]: cConstantsListPatternSearchPrompt1, // ConstantsListPatternSearchPrompt1
//   [bas.cc + cConstantsListPatternSearchPrompt2]: cConstantsListPatternSearchPrompt2, // ConstantsListPatternSearchPrompt2
//   [bas.cc + cConstantsListPatternSearchPrompt3]: cConstantsListPatternSearchPrompt3, // ConstantsListPatternSearchPrompt3
//   // ERROR: Attempted to generate a suggested line of code to validate the constant, ' +
//   // 'but the constant is not formatted correctly, it should begin with a lower case "c". ' +
//   // 'Please reformat the constant correctly so a line of code can be generated for you.
//   [bas.cc + cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1]: cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1, // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage1
//   [bas.cc + cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2]: cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2, // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage2
//   [bas.cc + cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3]: cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3, // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage3
//   [bas.cc + cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4]: cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4, // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage4
//   [bas.cc + cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5]: cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5, // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage5
//   [bas.cc + cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6]: cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6, // DetermineSuggestedConstantsValidationLineOfCodeErrorMessage6
//   [bas.cc + cSearchForPatternsInStringArrayMessage1]: cSearchForPatternsInStringArrayMessage1, // SearchForPatternsInStringArrayMessage1
//   // WARNING: The current string being searched contains a space character, we are going to skip comparison.
//   [bas.cc + cSearchForPatternsInStringArrayMessage2]: cSearchForPatternsInStringArrayMessage2, // SearchForPatternsInStringArrayMessage2
//   [bas.cc + cSearchForPatternsInStringArrayMessage3]: cSearchForPatternsInStringArrayMessage3, // SearchForPatternsInStringArrayMessage3
//   // WARNING: InputData was not an array or had an empty array.
//   [bas.cc + cSearchForPatternsInStringArrayMessage4]: cSearchForPatternsInStringArrayMessage4, // SearchForPatternsInStringArrayMessage4
//   // WARNING: No data to load, please specify a valid path & filename!
//   [bas.cc + cLoadDataFileMessage1]: cLoadDataFileMessage1, // LoadDataFileMessage1
//   [bas.cc + cloadDataFileMessage2]: cloadDataFileMessage2, // loadDataFileMessage2
//   [bas.cc + cloadDataFileMessage3]: cloadDataFileMessage3, // loadDataFileMessage3
//   // ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another release.
//   [bas.cc + cdeployApplicationMessage1a]: cdeployApplicationMessage1a, // deployApplicationMessage1a
//   [bas.cc + cdeployApplicationMessage2a]: cdeployApplicationMessage2a, // deployApplicationMessage2a
//   // ERROR: Release failed because of a failure in the commands alias validation system. Please fix ASAP before attempting another release.
//   [bas.cc + cdeployApplicationMessage1b]: cdeployApplicationMessage1b, // deployApplicationMessage1b
//   [bas.cc + ccommandSequencerMessage1]: ccommandSequencerMessage1, // commandSequencerMessage1
//   [bas.cc + ccommandSequencerMessage2]: ccommandSequencerMessage2, // commandSequencerMessage2
//   [bas.cc + cworkflowMessage1]: cworkflowMessage1, // workflowMessage1
//   [bas.cc + cworkflowMessage2]: cworkflowMessage2, // workflowMessage2
//   [bas.cc + cworkflowMessage3]: cworkflowMessage3, // workflowMessage3
//   // After attempting to replace the secondaryCommandArgsDelimiter with the primaryCommandDelimiter commandString is:
//   [bas.cc + ccommandGeneratorMessage1]: ccommandGeneratorMessage1, // commandGeneratorMessage1
//   // After attempting to replace the tertiaryCommandDelimiter with the secondaryCommandArgsDelimiter commandString is:
//   [bas.cc + ccommandGeneratorMessage2]: ccommandGeneratorMessage2, // commandGeneratorMessage2
//   // WARNING: nominal.commandGenerator: Must enter a number greater than 0, number entered:
//   [bas.cc + ccommandGeneratorMessage3]: ccommandGeneratorMessage3, // commandGeneratorMessage3
//   // WARNING: nominal.commandGenerator: Number entered for the number of commands to generate is not a number:
//   [bas.cc + ccommandGeneratorMessage4]: ccommandGeneratorMessage4, // commandGeneratorMessage4
//   // WARNING: nominal.commandGenerator: The specified command:
//   [bas.cc + ccommandGeneratorMessage5]: ccommandGeneratorMessage5, // commandGeneratorMessage5
//   // was not found, please enter a valid command and try again.
//   [bas.cc + ccommandGeneratorMessage6]: ccommandGeneratorMessage6, // commandGeneratorMessage6
//   // Command can be called by passing parameters and bypass the prompt system.
//   [bas.cc + ccommandAliasGeneratorMessage1]: ccommandAliasGeneratorMessage1, // commandAliasGeneratorMessage1
//   // EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
//   [bas.cc + ccommandAliasGeneratorMessage2]: ccommandAliasGeneratorMessage2, // commandAliasGeneratorMessage2
//   // INVALID INPUT: Please enter a valid camel-case command name.
//   [bas.cc + ccommandAliasGeneratorMessage3]: ccommandAliasGeneratorMessage3, // commandAliasGeneratorMessage3
//   // INVALID INPUT: Please enter a valid command word alias list.
//   [bas.cc + ccommandAliasGeneratorMessage4]: ccommandAliasGeneratorMessage4, // commandAliasGeneratorMessage4
//   // INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.
//   [bas.cc + ccommandAliasGeneratorMessage5]: ccommandAliasGeneratorMessage5, // commandAliasGeneratorMessage5
//   // INVALID INPUT: Please enter a valid constant value that contains more than 4 characters.
//   [bas.cc + cconstantsGeneratorMessage1]: cconstantsGeneratorMessage1, // constantsGeneratorMessage1
//   // WARNING: The constant has already been defined in the following library(ies):
//   [bas.cc + cconstantsGeneratorMessage2]: cconstantsGeneratorMessage2, // constantsGeneratorMessage2
//   // INVALID INPUT: Please enter a valid constant list.
//   [bas.cc + cconstantsGeneratorListMessage1]: cconstantsGeneratorListMessage1, // constantsGeneratorListMessage1
//   // PASSED: All duplicate command aliases validation tests!
//   [bas.cc + cvalidateCommandAliasesMessage1]: cvalidateCommandAliasesMessage1, // validateCommandAliasesMessage1
//   // About to call the rule broker to process on the number of single quotes
//   [bas.cc + cgetCommandArgsMessage1]: cgetCommandArgsMessage1, // getCommandArgsMessage1
//   // and determine if it-be even or odd
//   [bas.cc + cgetCommandArgsMessage2]: cgetCommandArgsMessage2, // getCommandArgsMessage2
//   // WARNING: Command does not exist, please enter a valid command and try again!
//   [bas.cc + cexecuteCommandMessage1]: cexecuteCommandMessage1, // executeCommandMessage1
//   // WARNING: lexical.parseBusinessRuleArgument: Invalid combination of inputs to the lexical.parseBusinessRuleArgument function!
//   [bas.cc + cparseBusinessRuleArgumentMessage1]: cparseBusinessRuleArgumentMessage1, // parseBusinessRuleArgumentMessage1
//   [bas.cc + cparseBusinessRuleArgumentMessage2]: cparseBusinessRuleArgumentMessage2, // parseBusinessRuleArgumentMessage2
//   // Caught the case that the user may have only specified a single data hive, such as the configuration data hive.
//   [bas.cc + cprintDataHiveAttributesMessage1]: cprintDataHiveAttributesMessage1, // printDataHiveAttributesMessage1
//   [bas.cc + cprintDataHiveAttributesMessage2]: cprintDataHiveAttributesMessage2, // printDataHiveAttributesMessage2
//   // ERROR: Please enter a valid name.space.attributeName for the system to print out attribute data from.
//   [bas.cc + cprintDataHiveAttributesMessage3]: cprintDataHiveAttributesMessage3, // printDataHiveAttributesMessage3
//   // Nothing to echo.
//   [bas.cc + cNothingToEcho]: cNothingToEcho, // NothingToEcho
//   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   [bas.cc + cprompt01]: cprompt01, // prompt01
//   [bas.cc + cprompt02]: cprompt02, // prompt02
//   [bas.cc + cprompt03]: cprompt03, // prompt03
//   [bas.cc + cprintMessageToFile01]: cprintMessageToFile01, // cprintMessageToFile01
//   [bas.cc + cprintMessageToFile02]: cprintMessageToFile02, // cprintMessageToFile02
//   [bas.cc + cprintMessageToFile03]: cprintMessageToFile03, // cprintMessageToFile03
//
//   // Coded System Messages constant constants
//   [bas.cc + cdebugSettingsEnabledLogic01]: cdebugSettingsEnabledLogic01, // debugSettingsEnabledLogic01
//   [bas.cc + cdebugSettingsEnabledLogic02]: cdebugSettingsEnabledLogic02, // debugSettingsEnabledLogic02
//   [bas.cc + cdebugSettingsEnabledLogic03]: cdebugSettingsEnabledLogic03, // debugSettingsEnabledLogic03
//   [bas.cc + cdebugSettingsEnabledLogic04]: cdebugSettingsEnabledLogic04, // debugSettingsEnabledLogic04
//   [bas.cc + cdebugSettingsEnabledLogic05]: cdebugSettingsEnabledLogic05, // debugSettingsEnabledLogic05
//   [bas.cc + cdebugSettingsEnabledLogic06]: cdebugSettingsEnabledLogic06, // debugSettingsEnabledLogic06
//   [bas.cc + cdebugSettingsEnabledLogic07]: cdebugSettingsEnabledLogic07, // debugSettingsEnabledLogic07
//   [bas.cc + cdebugSettingsEnabledLogic08]: cdebugSettingsEnabledLogic08, // debugSettingsEnabledLogic08
//   [bas.cc + cdebugSettingsEnabledLogic09]: cdebugSettingsEnabledLogic09, // debugSettingsEnabledLogic09
//   [bas.cc + cdebugSettingsEnabledLogic10]: cdebugSettingsEnabledLogic10, // debugSettingsEnabledLogic10
//   [bas.cc + cdebugSettingsEnabledLogic11]: cdebugSettingsEnabledLogic11, // debugSettingsEnabledLogic11
//   [bas.cc + cdebugSettingsEnabledLogic12]: cdebugSettingsEnabledLogic12 // debugSettingsEnabledLogic12
// };
