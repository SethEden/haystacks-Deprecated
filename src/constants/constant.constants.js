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
let cDemocraticRepublicOfTheCongo = wr2.cDemocratic + wr2.cRepublic + bas.cOf + wr2.cThe + cCongo; // DemocraticRepublicOfTheCongo
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
let cUnitedStatesOfAmerica = wr2.cUnited + wr2.cStates + bas.cOf + wr2.cAmerica; // UnitedStatesOfAmmerica

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
let cdataPathIs = wr2.cdata + wr2.cPath + wr2.cIs; // dataPathIs
let cfilesFoundIs = wr2.cfiles + wr2.cFound + wr2.cIs; // filesFoundIs
let cfileToLoadIs = wr2.cfile + wr2.cTo + wr2.cLoad + wr2.cIs; // fileToLoadIs
let cfilesToLoadIs = wr2.cfiles + wr2.cTo + wr2.cLoad + wr2.cIs; // filesToLoadIs
let ccontextNameIs = wr2.ccontext + wr2.cName + wr2.cIs; // contextNameIs
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
let cprompt01 = wr2.cprompt + wr2.c0 + wr2.c1; // prompt01
let cprompt02 = wr2.cprompt + wr2.c0 + wr2.c2; // prompt02
let cprompt03 = wr2.cprompt + wr2.c0 + wr2.c3; // prompt03

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
  [bas.cc + cprompt01]: cprompt01, // prompt01
  [bas.cc + cprompt02]: cprompt02, // prompt02
  [bas.cc + cprompt03]: cprompt03, // prompt03

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
