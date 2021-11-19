/**
 * @file constant.constants.js
 * @module constant.constants
 * @description Contains all the constants used to define the constants for export.
 * These remove the need for cirulcar dependencies even though some of them are re-definitions from other files.
 * @requires module:basic.constants
 * @requires module:phonic.constants
 * @author Seth Hollingsead
 * @date 2021/11/16
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

import * as bas from './basic.constants';
import * as phn from './phonic.constants';

// Redefined words, used below in this file, redefined so we don't have circular dependencies
let cCongo = bas.cC + phn.congo; // Congo
let cDemo = bas.cD + phn.cemo; // Demo
let cDemocratic = cDemo + bas.ccr + phn.cati + bas.cc; // Democratic
let cpublic = bas.cpu + bas.cbl + bas.cic; // public
let cRepublic = bas.cRe + cpublic; // Republic
let cCent = bas.cC + phn.cent; // Cent
let cCentral = cCent + phn.cral; // Central
let cAfrican = bas.cAf + phn.crica + bas.cn; // African
let cCost = bas.cC + phn.cost; // Cost
let cThe = bas.cTh + bas.ce; // The
let cNew = bas.cNe + bas.cw; // New
let cPapua = bas.cPa + bas.cpu + bas.ca; // Papua
let cGuinea = bas.cGu + phn.cinea; // Guinea
let cTrinidad = phn.cTri + bas.cni + bas.cda + bas.cd; // Trinidad
let cTabago = bas.cTa + bas.cba + bas.cgo; // Tabago
let cunit = phn.cuni + bas.ct; // unit
let cUnit = phn.cUni + bas.ct; // Unit
let cUnited = cUnit + bas.ced; // United
let cArab = bas.cAr + bas.cab; // Arab
let cEmirates = bas.cEm + bas.cir + phn.cates; // Emirates
let cStates = bas.cSt + phn.cates; // States
let cAmerica = bas.cAm + bas.cer + phn.cica; // America
let cone = bas.co + bas.cne; // one
let cAnd = bas.cAn + bas.cd; // And
let cLow = bas.cLo + bas.cw; // Low
let cLower = cLow + bas.cer; // Lower
let cCase = bas.cC + phn.c_ase; // Case
let cAlpha = bas.cA + phn.clpha; // Alpha
let cbetic = bas.cbe + bas.cti + bas.cc; // betic
let cAlphabetic = cAlpha + cbetic; // Alphabetic
let cAll = phn.cAll; // All
let cNumber = bas.cN + phn.cumber; // Number
let cNumbers = cNumber + bas.cs; // Numbers
let cMost = bas.cM + phn.cost; // Most
let cSpecial = bas.cSp + bas.cec + bas.cia + bas.cl; // Special
let cChar = bas.cCh + bas.car; // Char
let cCharacter = cChar + bas.cac + phn.cter; // Character
let cCharacters = cCharacter + bas.cs; // Characters
let cDot = bas.cDo + bas.ct; // Dot
let cframe = bas.cf + phn.crame; // frame
let cwork = bas.cwo + bas.crk; // work
let cframework = cframe + cwork; // framework
let csource = bas.cs + phn.cource; // source
let cResource = bas.cRe + csource; // Resource
let cResources = cResource + bas.cs; // Resources
let cfig = bas.cf + bas.cig; // fig
let cconfig = phn.ccon + cfig; // config
let cConfig = phn.cCon + cfig; // Config
let cconfiguration = cconfig + bas.cur + phn.cation; // configuration
let cConfiguration = cConfig + bas.cur + phn.cation; // Configuration
let cPath = bas.cP + phn.cath; // Path
let csystem = bas.csy + bas.cst + bas.cem; // system
let cFile = bas.cF + phn.cile; // File
let cName = bas.cN + phn.came; // Name
let capplication = phn.capp + phn.clica + phn.ction; // application
let cbasic = bas.cb + phn.casic; // basic
let cconstant = phn.ccon + phn.cstant; //constant
let cconstants = cconstant + bas.cs; // constants
let cbusiness = bas.cb + phn.cusiness; // business
let ccolor = phn.ccol + bas.cor; // color
let ccommand = phn.ccom + phn.cmand; // command
let ccount = bas.cco + phn.cunt; // count
let ccountry = ccount + bas.cry; // country
let celement = bas.cel + bas.ce + phn.cment; // element
let cgeneric = phn.cgen + bas.ce + phn.cric; // generic
let cisotope = phn.ciso + phn.ctope; // isotope
let cnot = bas.cno + bas.ct; // not
let cknot = bas.ck + cnot; // knot
let clanguage = phn.clang + phn.cuage; // language
let cmessage = bas.cme + bas.css + phn.cage; // message
let cnumeric = bas.cnu + bas.cme + bas.cri + bas.cc; // numeric
let cphonic = phn.cphon + bas.cic; // phonic
let cshape = phn.csha + bas.cpe; // shape
let cword = bas.cw + phn.cord; // word
let cSan = bas.cSa + bas.cn; // San
let cSierra = bas.cSi + bas.cer + bas.cra; // Sierra
let cEnglish = bas.cEn + bas.cgl + phn.cish; // English
let cAlphabet = cAlpha + phn.cbet; // Alphabet
let cUpper = bas.cUp + bas.cp + bas.cer; // Upper
let cFor = bas.cFo + bas.cr; // For
let cForward = cFor + phn.cward; // Forward
let cSlash = bas.cS + phn.clash; // Slash

let cCotedlvoire = bas.cCo + bas.cte + bas.cd + bas.clv + bas.coi + bas.cre; // Cotedlvoire
let cCaboVerde = bas.cCa + bas.cbo + phn.cVer + bas.cde; // CaboVerde
let cCentralAfricanRepublic = cCentral + cAfrican + cRepublic; // CentralAfricanRepublic
let cCostaRica = cCost + bas.ca + bas.cR + phn.cica; // CostaRica
let cDemocraticRepublicOfTheCongo = cDemocratic + cRepublic + bas.cOf + cThe + cCongo; // DemocraticRepublicOfTheCongo
let cDominicanRepublic = bas.cDo + phn.cminica + bas.cn + bas.cR + bas.cep + phn.cublic; // cDominicanRepublic
let cElSalvador = bas.cEl + bas.cSa + bas.clv + phn.cador; // ElSalvador
let cEquatorialGuinea = phn.cEqu + phn.cator + bas.cia + bas.cl + bas.cG + phn.cuinea; // EquatorialGuinea
let cGuineaBissau = bas.cGu + phn.cinea + bas.cBi + bas.css + bas.cau; // GuineaBissau
let cHolySee = bas.cHo + bas.cly + bas.cSe + bas.ce; // HolySee
let cMarshallIslands = bas.cMa + bas.crs + bas.cha + bas.cll + bas.cIs + bas.cla + phn.cnds; // MarshallIslands
let cNewZealand = cNew + bas.cZe + phn.cala + bas.cnd; // NewZealand
let cNorthKorea = bas.cNo + bas.crt + bas.ch + bas.cK + phn.corea; // NorthKorea
let cNorthMacedonia = bas.cNo + bas.crt + bas.ch + bas.cM + phn.cace + bas.cdo + phn.cnia; // NorthMacedonia
let cPapuaNewGuinea = cPapua + cNew + cGuinea; // PapuaNewGuinea
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
let cTrinidadAndTabago = cTrinidad + cAnd + cTabago; // TrinidadAndTabago
let cUnitedArabEmirates = cUnited + cArab + cEmirates; // UnitedArabEmirates
let cUnitedKingdom = cUnited + bas.cKi + bas.cng + phn.cdom; // UnitedKingdom
let cUnitedStatesOfAmerica = cUnited + cStates + bas.cOf + cAmerica; // UnitedStatesOfAmmerica

let cLowerCaseEnglishAlphabet = cLower + cCase + cEnglish + cAlphabet; // LowerCaseEnglishAlphabet
let cUpperCaseEnglishAlphabet = cUpper + cCase + cEnglish + cAlphabet; // UpperCaseEnglishAlphabet
let cAllNumbers = cAll + cNumbers; // AllNumbers
let cMostSpecialCharacters = cMost + cSpecial + cCharacters; // MostSpecialCharacters

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

let cframeworkResourcesConfigurationPath = cframework + cResources + cConfiguration + cPath; // cframeworkResourcesConfigurationPath
let csystemConfigFileName = csystem + cConfig + cFile + cName; // csystemConfigFileName
let capplicationConfigFileName = capplication + cConfig + cFile + cName; // capplicationConfigFileName

// Constants Filenames
let cbasic_constants_js = cbasic + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // basic_constants_js
let cbusiness_constants_js = cbusiness + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // business_constants_js
let ccolor_constants_js = ccolor + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // color_constants_js
let ccommand_constants_js = ccommand + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // command_constants_js
let cconfiguration_constants_js = cconfiguration + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // configuration_constants_js
let cconstant_constants_js = cconstant + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // constant_constant_js
let ccountry_constants_js = ccountry + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // country_constants_js
let celement_constants_js = celement + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // element_constants_js
let cgeneric_constants_js = cgeneric + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // generic_constants_js
let cisotope_constants_js = cisotope + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // isotope_constants_js
let cknot_constants_js = cknot + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // knot_constants_js
let clanguage_constants_js = clanguage + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // language_constants_js
let cmessage_constants_js = cmessage + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // message_constants_js
let cnumeric_constants_js = cnumeric + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // numeric_constants_js
let cphonic_constants_js = cphonic + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // phonic_constants_js
let cshape_constants_js = cshape + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // shape_constants_js
let csystem_constants_js = csystem + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // system_constants_js
let cunit_constants_js = cunit + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // unit_constants_js
let cword_constants_js = cword + bas.cUnderscore + cconstants + bas.cUnderscore + bas.cjs; // word_constants_js

module.exports = {
  [bas.cc + cDot]: cDot, // Dot
  [bas.cc + cForward + cSlash]: cForward + cSlash, // FowardSlash
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
};
