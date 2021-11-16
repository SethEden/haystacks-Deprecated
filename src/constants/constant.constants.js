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
let cDemocratic = cDemo + bas.ccr + phn.cati + bas.cc; // Democratic
let cRepublic = bas.cRe + cpublic; // Republic
let cCentral = unt.cCent + phn.cral; // Central
let cAfrican = bas.cAf + phn.crica + bas.cn; // African
let cCost = bas.cC + phn.cost; // Cost
let cThe = bas.cTh + bas.ce; // The
let cNew = bas.cNe + bas.cw; // New
let cPapua = bas.cPa + bas.cpu + bas.ca; // Papua
let cGuinea = bas.cGu + phn.cinea; // Guinea
let cTrinidad = phn.cTri + bas.cni + bas.cda + bas.cd; // Trinidad
let cTabago = bas.cTa + bas.cba + bas.cgo; // Tabago
let cUnited = cUnit + bas.ced; // United
let cArab = bas.cAr + bas.cab; // Arab
let cEmirates = bas.cEm + bas.cir + phn.cates; // Emirates
let cStates = bas.cSt + phn.cates; // States
let cAmerica = bas.cAm + bas.cer + phn.cica; // America
let cone = bas.co + bas.cne; // one
let cAnd = bas.cAn + bas.cd; // And
let cLower = cLow + bas.cer; // Lower
let cCase = bas.cC + phn.c_ase; // Case
let cAlphabetic = cAlpha + cbetic; // Alphabetic
let cAll = phn.cAll; // All
let cNumber = bas.cN + phn.cumber; // Number
let cNumbers = cNumber + bas.cs; // Numbers
let cMost = bas.cM + phn.cost; // Most
let cSpecial = bas.cSp + bas.cec + bas.cia + bas.cl; // Special
let cCharacters = cCharacter + bas.cs; // Characters
let cDot = bas.cDo + bas.ct; // Dot

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
let cSanMarino = gen.cSan + bas.cMa + bas.cri + bas.cno; // SanMarino
let cSaoTome = bas.cSa + bas.co + bas.cT + phn.come; // SaoTome
let cSaudiArabia = bas.cSa + bas.cud + bas.ci + bas.cA + bas.cra + phn.cbia; // SaudiArabia
let cSierraLeone = gen.cSierra + bas.cLe + cone; // SierraLeone
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

let cctrl_a = cctrl_a, // ctrl+a
let cctrl_b = cctrl_b, // ctrl+b
let cctrl_c = cctrl_c, // ctrl+c
let cctrl_d = cctrl_d, // ctrl+d
let cctrl_e = cctrl_e, // ctrl+e
let cctrl_f = cctrl_f, // ctrl+f
let cctrl_g = cctrl_g, // ctrl+g
let cctrl_h = cctrl_h, // ctrl+h
let cctrl_i = cctrl_i, // ctrl+i
let cctrl_j = cctrl_j, // ctrl+j
let cctrl_k = cctrl_k, // ctrl+k
let cctrl_l = cctrl_l, // ctrl+l
let cctrl_m = cctrl_m, // ctrl+m
let cctrl_n = cctrl_n, // ctrl+n
let cctrl_o = cctrl_o, // ctrl+o
let cctrl_p = cctrl_p, // ctrl+p
let cctrl_q = cctrl_q, // ctrl+q
let cctrl_r = cctrl_r, // ctrl+r
let cctrl_s = cctrl_s, // ctrl+s
let cctrl_t = cctrl_t, // ctrl+t
let cctrl_u = cctrl_u, // ctrl+u
let cctrl_v = cctrl_v, // ctrl+v
let cctrl_w = cctrl_w, // ctrl+w
let cctrl_x = cctrl_x, // ctrl+x
let cctrl_y = cctrl_y, // ctrl+y
let cctrl_z = cctrl_z, // ctrl+z

[bas.cc + wrd.cframework + wrd.cResources + wrd.cConfiguration + wrd.cPath]: cframeworkResourcesConfigurationPath, // //resources//configuration//
[bas.cc + wrd.csystem + wrd.cConfig + wrd.cFile + wrd.cName]: csystemConfigFileName, // framework.system.json
[bas.cc + wrd.capplication + wrd.cConfig + wrd.cFile + wrd.cName]: capplicationConfigFileName, // application.system.json

// Constants Filenames
[bas.cc + wrd.cbasic + bas.cUnderscore + wrd.cconstants + bas.cUnderscore + bas.cjs]: cbasic_constants_js, // basic.constants.js
[bas.cc + wrd.cbusiness + bas.cUnderscore + wrd.cconstants + bas.cUnderscore + bas.cjs]: cbusiness_constants_js, // business.constants.js
[bas.cc + wrd.ccolor + bas.cUnderscore + wrd.cconstants + bas.cUnderscore + bas.cjs]: ccolor_constants_js, // color.constants.js
[bas.cc + wrd.ccommand + bas.cUnderscore + wrd.cconstants + bas.cUnderscore + bas.cjs]: ccommand_constants_js, // command.constants.js
[bas.cc + wrd.cconfiguration + bas.cUnderscore + wrd.cconstants + bas.cUnderscore + bas.cjs]: cconfiguration_constants_js, // configuration.constants.js
[bas.cc + wrd.ccountry + bas.cUnderscore + wrd.cconstants + bas.cUnderscore + bas.cjs]: ccountry_constants_js, // country.constants
[bas.cc + wrd.celement + bas.cUnderscore + wrd.cconstants + bas.cUnderscore + bas.cjs]: celement_constants_js, // element.constants.js
[bas.cc + wrd.cgeneric + bas.cUnderscore + wrd.cconstants + bas.cUnderscore + bas.cjs]: cgeneric_constants_js, // generic.constants.js
[bas.cc + wrd.cisotope + bas.cUnderscore + wrd.cconstants + bas.cUnderscore + bas.cjs]: cisotope_constants_js, // isotope.constants.js
[bas.cc + wrd.cknot + bas.cUnderscore + wrd.cconstants + bas.cUnderscore + bas.cjs]: cknot_constants_js, // knot.constants.js
[bas.cc + wrd.clanguage + bas.cUnderscore + wrd.cconstants + bas.cUnderscore + bas.cjs]: clanguage_constants_js, // language.constants.js
[bas.cc + wrd.cmessage + bas.cUnderscore + wrd.cconstants + bas.cUnderscore + bas.cjs]: cmessage_constants_js, // message.constants.js
[bas.cc + wrd.cnumeric + bas.cUnderscore + wrd.cconstants + bas.cUnderscore + bas.cjs]: cnumeric_constants_js, // numeric.constants.js
[bas.cc + wrd.cphonic + bas.cUnderscore + wrd.cconstants + bas.cUnderscore + bas.cjs]: cphonic_constants_js, // phonic.constants.js
[bas.cc + wrd.cshape + bas.cUnderscore + wrd.cconstants + bas.cUnderscore + bas.cjs]: cshape_constants_js, // shape.constants.js
[bas.cc + wrd.csystem + bas.cUnderscore + wrd.cconstants + bas.cUnderscore + bas.cjs]: csystem_constants_js, // system.constants.js
[bas.cc + wrd.cunit + bas.cUnderscore + wrd.cconstants + bas.cUnderscore + bas.cjs]: cunit_constants_js, // unit.constants.js
[bas.cc + wrd.cword + bas.cUnderscore + wrd.cconstants + bas.cUnderscore + bas.cjs]: cword_constants_js, // word.constants.js
