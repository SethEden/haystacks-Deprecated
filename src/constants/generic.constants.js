/**
 * @file generic.constants.js
 * @module generic-constants
 * @description Contains many generic constants.
 * Also included are other generic constants like string numbers like "one", "two", "three".
 * Also included are spellings of Greek letters, military codes/standards, units of measurement, units of time, etc...
 * @requires module:basic.constants
 * @requires module:phonic.constants
 * @requires module:numeric.constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

import * as bas from './basic.constants.js';
import * as con from './constant.constants.js';
import * as phn from './phonic.constants.js';
import * as num from './numeric.constants.js';

export const cDotDot = bas.cDot + bas.cDot; // ..
export const cDotDotForwardSlash = cDotDot + bas.cForwardSlash; // ../

// Boolean strings
export const cTrue = bas.cT + phn.crue; // True
export const cFalse = bas.cF + phn.calse; // False
export const ctrue = bas.ct + phn.crue; // true
export const cfalse = bas.cf + phn.calse; // false
export const cTRUE = bas.cTR + bas.cUE; // TRUE
export const cFALSE = bas.cFA + bas.cLS + bas.cE; // FALSE
export const cOff = bas.cO + bas.cff; // Off
export const coff = bas.co + bas.cff; // off
export const cOFF = bas.cOF + bas.cF; // OFF
export const cyes = bas.cy + bas.ces; // yes
export const cnot = bas.cno + bas.ct; // not
export const cYes = bas.cY + bas.ces; // Yes
export const cNot = bas.cNo + bas.ct; // Not
export const cYES = bas.cYE + bas.cS; // YES
export const cNOT = 'NOT'; // bas.c_NO + bas.cT; // NOTE cNOT is some how a reserved word that is a variable.
export const cnotok = cnot + bas.cok; // notok
export const cnotOk = cnot + bas.cOk; // notOk
export const cnotOK = cnot + bas.cOK; // notOK
export const cNotok = cNot + bas.cok; // Notok
export const cNotOk = cNot + bas.cOk; // NotOk
export const cNotOK = cNot + bas.cOK; // NotOK
export const cNOTok = 'NOTok'; // c_NOT = bas.cok;
export const cNOTOk = 'NOTOk'; // c_NOT = bas.cOk;
export const cNOTOK = 'NOTOK'; // c_NOT + bas.cOK;
export const cnotEql = cnot + phn.cEql; // notEql
export const cnoteql = cnot + phn.ceql; // noteql
export const cNotEql = cNot + phn.cEql; // NotEql
export const cNoteql = cNot + phn.ceql; // Noteql
export const cmax = phn.cmax; // max
export const cMax = phn.cMax; // Max
export const cmin = phn.cmin; // min
export const cMin = phn.cMin; // Min

// Test Status
export const cPass = bas.cPa + bas.css; // Pass
export const cWarning = bas.cWa + bas.crn + bas.cin + bas.cg; // Warning
export const cFail = bas.cFa + bas.cil; // Fail

// Directions
export const cDown = bas.cDo + bas.cwn; // Down
export const cLeft = bas.cLe + bas.cft; // Left
export const cRight = bas.cRi + bas.cgh + bas.ct; // Right

// Alphabets
export const cLowerCaseEnglishAlphabet = bas.cab + bas.ccd + bas.cef + bas.cgh + bas.cij + bas.ckl + bas.cmn + bas.cop + bas.cqr + bas.cst + bas.cuv + bas.cwx + bas.cyz; // abcdefghijklmnopqrstuvwxyz
export const cUpperCaseEnglishAlphabet = bas.cAB + bas.cCD + bas.cEF + bas.cGH + bas.cIJ + bas.cKL + bas.cMN + bas.cOP + bas.cQR + bas.cST + bas.cUV + bas.cWX + bas.cYZ; // ABCDEFGHIJKLMNOPQRSTUVWXYZ
export const cAllNumbers = num.c0 + num.c1 + num.c2 + num.c3 + num.c4 + num.c5 + num.c6 + num.c7 + num.c8 + num.c9; // 0123456789
export const cMostSpecialCharacters = bas.cExclamation + bas.cAt + bas.cHash + bas.cDollar + bas.cPercent + bas.cCarrot + bas.cAndPersand + bas.cStar + bas.cOpenParenthesis + bas.cCloseParenthesis + bas.cUnderscore + bas.cPlus +
bas.cOpenCurlyBrace + bas.cCloseCurlyBrace + bas.cPipe + bas.cColon + bas.cDoubleQuote + bas.cLessThan + bas.cGreaterThan + bas.cQuestion + bas.cDot + bas.cComa + bas.cTilde; // !@#$%^&*()_+{}|:"<>?.,~

// File Extensions
export const cexe = bas.cex + bas.ce; // exe
export const cExe = bas.cEx + bas.ce; // Exe
export const cEXE = bas.cEX + bas.cE; // EXE
export const cdoc = bas.cdo + bas.cc; // doc
export const cDoc = bas.cDo + bas.cc; // Doc
export const cDOC = bas.cDO + bas.cC; // DOC
export const ccom = bas.cco + bas.cm; // com
export const cCom = bas.cCo + bas.cm; // Com
export const cCOM = bas.cCO + bas.cM; // COM
export const czip = bas.cz + bas.cip; // zip
export const cZip = bas.cZ + bas.cip; // Zip
export const cZIP = bas.cZ + bas.cIP; // ZIP
export const ctxt = bas.ct + bas.cxt; // txt
export const cTxt = bas.cT + bas.cxt; // Txt
export const cTXT = bas.cT + bas.cXT; // TXT
export const ccsv = bas.ccs + bas.cv; // csv
export const cCsv = bas.cCs + bas.cv; // Csv
export const cCSV = bas.cCS + bas.cV; // CSV
export const cxml = bas.cxm + bas.cl; // xml
export const cXml = bas.cXm + bas.cl; // Xml
export const cXML = bas.cXM + bas.cL; // XML
export const clog = bas.clo + bas.cg; // log
export const cLog = bas.cLo + bas.cg; // Log
export const cLOG = bas.cLO + bas.cG; // LOG
export const cjson = bas.cjs + bas.con; // json
export const cJson = bas.cJs + bas.con; // Json
export const cJSON = bas.cJS + bas.cON; // JSON
export const cenv = bas.cen + bas.cv; // env
export const cEnv = bas.cEn + bas.cv; // Env
export const cENV = bas.cEN + bas.cV; // ENV

export const cDotexe = bas.cDot + cexe; // .exe
export const cDotExe = bas.cDot + cExe; // .Exe
export const cDotEXE = bas.cDot + cEXE; // .EXE
export const cDotcsv = bas.cDot + ccsv; // .csv
export const cDotCsv = bas.cDot + cCsv; // .Csv
export const cDotCSV = bas.cDot + cCSV; // .CSV
export const cDotCom = bas.cDot + cCom; // .Com
export const cDotzip = bas.cDot + czip; // .zip
export const cDotZip = bas.cDot + cZip; // .Zip
export const cDotZIP = bas.cDot + cZIP; // .ZIP
export const cDottxt = bas.cDot + ctxt; // .txt
export const cDotTxt = bas.cDot + cTxt; // .Txt
export const cDotTXT = bas.cDot + cTXT; // .TXT
export const cDotxml = bas.cDot + cxml; // .xml
export const cDotXml = bas.cDot + cXml; // .Xml
export const cDotXML = bas.cDot + cXML; // .XML
export const cDotlog = bas.cDot + clog; // .log
export const cDotLog = bas.cDot + cLog; // .Log
export const cDotLOG = bas.cDot + cLOG; // .LOG
export const cDotjson = bas.cDot + cjson; // .json
export const cDotJson = bas.cDot + cJson; // .Json
export const cDotJSON = bas.cDot + cJSON; // .JSON
export const cDotenv = bas.cDot + cenv; // .env
export const cDotEnv = bas.cDot + cEnv; // .Env
export const cDotENV = bas.cDot + cENV; // .ENV
export const cascii = bas.cas + bas.cci + bas.ci; // ascii

// Time Formatting
export const cYYYY = bas.cYY + bas.cYY; // YYYY
export const cSSS = bas.cSS + bas.cS; // SSS
export const cYYYYMMDD = cYYYY + bas.cMM + bas.cDD; // YYYYMMDD
export const cHHmmss = bas.cHH + bas.cmm + bas.css; // HHmmss
export const cHHmmss_SSS = cHHmmss + bas.cDash + cSSS; // HHmmss_SSS
export const cYYYYMMDD_HHmmss  = cYYYYMMDD + bas.cDash + cHHmmss; // YYYYMMDD_HHmmss
export const cYYYYMMDD_HHmmss_SSS = cYYYYMMDD_HHmmss + cSSS; // YYYYMMDD_HHmmss_SSS
export const cYYYY_MM_DD_HH_mm_ss_SSS = cYYYY + bas.cColon + bas.cMM + bas.cColon + bas.cDD + bas.cDash + bas.cHH + bas.cColon + bas.cmm + bas.cColon + bas.css + bas.cColon + cSSS; // YYYY_MM_DD_HH_mm_ss_SSS

// Operating Systems
export const cwin32 = phn.cwin + num.c32;

// Naval & Military Codes
export const cAlfa = bas.cAl + bas.cfa; //  Alfa
export const cBravo = bas.cBr + bas.cav + bas.co; // Bravo
export const cCharlie = bas.cCh + bas.car + bas.cli + bas.ce; // Charlie
export const cDelta = bas.cDe + bas.clt + bas.ca; // Delta
export const cEcho = bas.cEc + bas.cho; // Echo
export const cFoxtrot = bas.cFo + bas.cxt + bas.cro + bas.ct; // Foxtrot
export const cGolf = bas.cGo + bas.clf; // Golf
export const cHotel = bas.cHo + bas.cte + bas.cl; // Hotel
export const cIndia = bas.cIn + bas.cdi + bas.ca; // India
export const cJuliett = bas.cJu + bas.cli + bas.cet + bas.ct; // Juliett
export const cKilo = bas.cKi + bas.clo; // Kilo
export const cLima = bas.cLi + bas.cma; // Lima
export const cMike = bas.cMi + bas.cke; // Mike
export const cNovember = bas.cNo + bas.cv + phn.cemb + bas.cer;  // November
export const cOscar = bas.cOs + bas.cca + bas.cr; // Oscar
export const cPapa = bas.cPa + bas.cpa; // Papa
export const cQuebec = bas.cQu + bas.ceb + bas.cec; // Quebec
export const cRomeo = bas.cRo + bas.cme + bas.co; // Romeo
export const cSierra = bas.cSi + bas.cer + bas.cra; // Sierra
export const cTango = bas.cTa + bas.cng + bas.co; // Tango
export const cUniform = bas.cUn + bas.cif + bas.cor + bas.cm; // Uniform
export const cVictor = bas.cVi + phn.cctor; // Victor
export const cWhiskey = bas.cWh + bas.cis + bas.cke + bas.cy; // Whiskey
export const cXray = bas.cXr + bas.cay; // Xray
export const cYankee = bas.cYa + bas.cnk + bas.cee; // Yankee
export const cZulu = bas.cZu + bas.clu; // Zulu

export const cAlpha = bas.cAl + bas.cph + bas.ca; // Alpha
export const cBeta = bas.cBe + bas.cta; // Beta
export const cGamma = bas.cGa + bas.cmm + bas.ca; // Gamma
export const cEpsilon = bas.cEp + bas.csi + bas.clo + bas.cn; // Epsilon
export const cDigamma = bas.cDi + bas.cga + bas.cmm + bas.ca; // Digamma
export const cZeta = bas.cZe + bas.cta; // Zeta
export const ceta = bas.cet + bas.ca; // eta
export const cEta = bas.cEt + bas.ca; // Eta
export const cTheta = bas.cTh + bas.cet + bas.ca; // Theta
export const cIota = bas.cIo + bas.cta; // Iota
export const cKappa = bas.cKa + bas.cpp + bas.ca; // Kappa
export const cLambda = bas.cLa + bas.cmb + bas.cda; // Lambda
export const cMu = bas.cMu; // Mu
export const cNu = bas.cNu; // Nu
export const cXi = bas.cXi; // Xi
export const cOmicron = bas.cOm + bas.cic + bas.cro + bas.cn; // Omicron
export const cPi = bas.cPi; // Pi
export const cSan = bas.cSa + bas.cn; // San
export const cKoppa = bas.cKo + bas.cpp + bas.ca; // Koppa
export const cRho = bas.cRh + bas.co; // Rho
export const cSigma = bas.cSi + bas.cgm + bas.ca; // Sigma
export const cTau = bas.cTa + bas.cu; // Tau
export const cUpsilon = bas.cUp + bas.csi + bas.clo + bas.cn; // Upsilon
export const cPhi = bas.cPh + bas.ci; // Phi
export const cChi = bas.cCh + bas.ci; // Chi
export const cPsi = bas.cPs + bas.ci; // Psi
export const cOmega = bas.cOm + bas.ceg + bas.ca; // Omega

// Months Of The Year
export const cJanuary = bas.cJa + bas.cn + phn.cuary; // January
export const cFebuary = bas.cFe + bas.cb + phn.cuary; // Febuary
export const cMarch = bas.cMa + bas.crc + bas.ch; // March
export const cApril = bas.cAp + bas.cri + bas.cl; // April
export const cMay = bas.cMa + bas.cy; // May
export const cJune = bas.cJu + bas.cne; // June
export const cJuly = bas.cJu + bas.cly; // July
export const cAugust = bas.cAu + bas.cgu + bas.cst; // August
export const cSeptember = bas.cSe + bas.cpt + phn.cemb + bas.cer; // September
export const cOctober = bas.cOc + bas.cto + bas.cb + bas.cer; // October
// cNovember = bas.cNo + bas.cv + bas.cemb + bas.cer; // November
export const cDecember = bas.cDe + bas.cc + phn.cemb + bas.cer; // December

// Constants Abreviations
export const cbas = bas.cba + bas.cs; // bas
export const cbiz = bas.cbi + bas.cz; // biz
export const cclr = phn.cclr; // clr
export const ccmd = bas.ccm + bas.cd; // cmd
export const ccfg = bas.ccf + bas.cg; // cfg
export const ccon = bas.co + bas.cn; // con
export const cctr = phn.cctr; // ctr
export const cfnc = bas.cfn + bas.c; // fnc
export const celm = bas.cel + bas.cm; // elm
export const cgen = phn.cgen; // gen
export const ciso = phn.ciso; // iso
export const ckts = bas.ckt + bas.cs; // kts
export const clng = bas.cln + bas.cg; // lng
export const cmsg = bas.cms + bas.cg; // msg
export const cnum = phn.cnum; // num
export const cphn = bas.cph + bas.cn; // phn
export const cshp = phn.cshp; // shp
export const csys = bas.csy + bas.cs; // sys
export const cunt = phn.cunt; // unt
export const cwr1 = bas.cwr + num.c1; // wr1
export const cwr2 = bas.cwr + num.c2; // wr2
export const capc = bas.cap + bas.cc; // apc

// Miscelanious
export const cUTF8 = bas.cUT + bas.cF + num.c8; // UTF8
export const cconst = phn.ccon + bas.cst; // const
export const cConst = phn.cCon + bas.cst; // Const
export const cASAP = bas.cAS + bas.cAP; // ASAP
export const capp = bas.cap + bas.cp; // app
export const cApp = bas.cAp + bas.cp; // App
export const cAPP = bas.cAP + bas.cP; // APP
export const carg = bas.car + bas.cg; // arg
export const cArg = bas.cAr + bas.cg; // Arg
export const cargs = bas.ca + phn.crgs; // args
export const cArgs = bas.cA + phn.crgs; // Args
export const chex = bas.che + bas.cx; // hex
export const cHex = bas.cHe + bas.cx; // Hex
export const cregEx = phn.creg + bas.cEx; // regEx
export const cRegEx = phn.cReg + bas.cEx; // RegEx
export const cregExp = cregEx + bas.cp; // regExp
export const cRegExp = cRegEx + bas.cp; // RegExp
export const cbin = bas.cbi + bas.cn; // bin
export const cBin = bas.cBi + bas.cn; // Bin
export const cBIN = bas.cBI + bas.cN; // BIN
export const cinit = phn.cini + bas.ct; // init
export const cInit = phn.cIni + bas.ct; // Init

// export default {
//   [bas.cc + con.cDot + con.cDot]: cDotDot, // ..
//   [bas.cc + con.cDot + con.cDot + con.cForwardSlash]: cDotDotForwardSlash, // ../
//
//   // Boolean strings
//   [bas.cc + cTrue]: cTrue, // True
//   [bas.cc + cFalse]: cFalse, // False
//   [bas.cc + ctrue]: ctrue, // true
//   [bas.cc + cfalse]: cfalse, // false
//   [bas.cc + cTRUE]: cTRUE, // TRUE
//   [bas.cc + cFALSE]: cFALSE, // FALSE
//   [bas.cc + cOff]: cOff, // Off
//   [bas.cc + coff]: coff, // off
//   [bas.cc + cOFF]: cOFF, // OFF
//   [bas.cc + cyes]: cyes, // yes
//   [bas.cc + cnot]: cnot, // not
//   [bas.cc + cYes]: cYes, // Yes
//   [bas.cc + cNot]: cNot, // Not
//   [bas.cc + cYES]: cYES, // YES
//   [bas.cc + cNOT]: cNOT, // bas.c_NO + bas.cT; // NOTE cNOT is some how a reserved word that is a variable.
//   [bas.cc + cnotok]: cnotok, // notok
//   [bas.cc + cnotOk]: cnotOk, // notOk
//   [bas.cc + cnotOK]: cnotOK, // notOK
//   [bas.cc + cNotok]: cNotok, // Notok
//   [bas.cc + cNotOk]: cNotOk, // NotOk
//   [bas.cc + cNotOK]: cNotOK, // NotOK
//   [bas.cc + cNOTok]: cNOTok, // c_NOT = bas.cok;
//   [bas.cc + cNOTOk]: cNOTOk, // c_NOT = bas.cOk;
//   [bas.cc + cNOTOK]: cNOTOK, // c_NOT + bas.cOK;
//   [bas.cc + cnotEql]: cnotEql, // notEql
//   [bas.cc + cnoteql]: cnoteql, // noteql
//   [bas.cc + cNotEql]: cNotEql, // NotEql
//   [bas.cc + cNoteql]: cNoteql, // Noteql
//   [bas.cc + cmax]: cmax, // max
//   [bas.cc + cMax]: cMax, // Max
//   [bas.cc + cmin]: cmin, // min
//   [bas.cc + cMin]: cMin, // Min
//
//   // Test Status
//   [bas.cc + cPass]: cPass, // Pass
//   [bas.cc + cWarning]: cWarning, // Warning
//   [bas.cc + cFail]: cFail, // Fail
//
//   // Directions
//   [bas.cc + cDown]: cDown, // Down
//   [bas.cc + cLeft]: cLeft, // Left
//   [bas.cc + cRight]: cRight, // Right
//
//   // Alphabets
//   [bas.cc + con.cLowerCaseEnglishAlphabet]: cLowerCaseEnglishAlphabet, // abcdefghijklmnopqrstuvwxyz
//   [bas.cc + con.cUpperCaseEnglishAlphabet]: cUpperCaseEnglishAlphabet, // ABCDEFGHIJKLMNOPQRSTUVWXYZ
//   [bas.cc + con.cAllNumbers]: cAllNumbers, // 0123456789
//   [bas.cc + con.cMostSpecialCharacters]: cMostSpecialCharacters, // !@#$%^&*()_+{}|:"<>?.,~
//
//   // File Extensions
//   [bas.cc + cexe]: cexe, // exe
//   [bas.cc + cExe]: cExe, // Exe
//   [bas.cc + cEXE]: cEXE, // EXE
//   [bas.cc + cdoc]: cdoc, // doc
//   [bas.cc + cDoc]: cDoc, // Doc
//   [bas.cc + cDOC]: cDOC, // DOC
//   [bas.cc + ccom]: ccom, // com
//   [bas.cc + cCom]: cCom, // Com
//   [bas.cc + cCOM]: cCOM, // COM
//   [bas.cc + czip]: czip, // zip
//   [bas.cc + cZip]: cZip, // Zip
//   [bas.cc + cZIP]: cZIP, // ZIP
//   [bas.cc + ctxt]: ctxt, // txt
//   [bas.cc + cTxt]: cTxt, // Txt
//   [bas.cc + cTXT]: cTXT, // TXT
//   [bas.cc + ccsv]: ccsv, // csv
//   [bas.cc + cCsv]: cCsv, // Csv
//   [bas.cc + cCSV]: cCSV, // CSV
//   [bas.cc + cxml]: cxml, // xml
//   [bas.cc + cXml]: cXml, // Xml
//   [bas.cc + cXML]: cXML, // XML
//   [bas.cc + clog]: clog, // log
//   [bas.cc + cLog]: cLog, // Log
//   [bas.cc + cLOG]: cLOG, // LOG
//   [bas.cc + cjson]: cjson, // json
//   [bas.cc + cJson]: cJson, // Json
//   [bas.cc + cJSON]: cJSON, // JSON
//   [bas.cc + cenv]: cenv, // env
//   [bas.cc + cEnv]: cEnv, // Env
//   [bas.cc + cENV]: cENV, // ENV
//
//   [bas.cc + con.cDot + cexe]: cDotexe, // .exe
//   [bas.cc + con.cDot + cExe]: cDotExe, // .Exe
//   [bas.cc + con.cDot + cEXE]: cDotEXE, // .EXE
//   [bas.cc + con.cDot + ccsv]: cDotcsv, // .csv
//   [bas.cc + con.cDot + cCsv]: cDotCsv, // .Csv
//   [bas.cc + con.cDot + cCSV]: cDotCSV, // .CSV
//   [bas.cc + con.cDot + cCom]: cDotCom, // .Com
//   [bas.cc + con.cDot + czip]: cDotzip, // .zip
//   [bas.cc + con.cDot + cZip]: cDotZip, // .Zip
//   [bas.cc + con.cDot + cZIP]: cDotZIP, // .ZIP
//   [bas.cc + con.cDot + ctxt]: cDottxt, // .txt
//   [bas.cc + con.cDot + cTxt]: cDotTxt, // .Txt
//   [bas.cc + con.cDot + cTXT]: cDotTXT, // .TXT
//   [bas.cc + con.cDot + cxml]: cDotxml, // .xml
//   [bas.cc + con.cDot + cXml]: cDotXml, // .Xml
//   [bas.cc + con.cDot + cXML]: cDotXML, // .XML
//   [bas.cc + con.cDot + clog]: cDotlog, // .log
//   [bas.cc + con.cDot + cLog]: cDotLog, // .Log
//   [bas.cc + con.cDot + cLOG]: cDotLOG, // .LOG
//   [bas.cc + con.cDot + cjson]: cDotjson, // .json
//   [bas.cc + con.cDot + cJson]: cDotJson, // .Json
//   [bas.cc + con.cDot + cJSON]: cDotJSON, // .JSON
//   [bas.cc + con.cDot + cenv]: cDotenv, // .env
//   [bas.cc + con.cDot + cEnv]: cDotEnv, // .Env
//   [bas.cc + con.cDot + cENV]: cDotENV, // .ENV
//   [bas.cc + cascii]: cascii, // ascii
//
//   // Time Formatting
//   [bas.cc + cYYYY]: cYYYY, // YYYY
//   [bas.cc + cSSS]: cSSS, // SSS
//   [bas.cc + cYYYYMMDD]: cYYYYMMDD, // YYYYMMDD
//   [bas.cc + cHHmmss]: cHHmmss, // HHmmss
//   [bas.cc + cHHmmss_SSS]: cHHmmss_SSS, // HHmmss_SSS
//   [bas.cc + cYYYYMMDD_HHmmss]: cYYYYMMDD_HHmmss, // YYYYMMDD_HHmmss
//   [bas.cc + cYYYYMMDD_HHmmss_SSS]: cYYYYMMDD_HHmmss_SSS, // YYYYMMDD_HHmmss_SSS
//   [bas.cc + cYYYY_MM_DD_HH_mm_ss_SSS]: cYYYY_MM_DD_HH_mm_ss_SSS, // YYYY_MM_DD_HH_mm_ss_SSS
//
//   // Operating Systems
//   [bas.cc + cwin32]: cwin32, // win32
//
//   // Naval & Military Codes
//   [bas.cc + cAlfa]: cAlfa, //  Alfa
//   [bas.cc + cBravo]: cBravo, // Bravo
//   [bas.cc + cCharlie]: cCharlie, // Charlie
//   [bas.cc + cDelta]: cDelta, // Delta
//   [bas.cc + cEcho]: cEcho, // Echo
//   [bas.cc + cFoxtrot]: cFoxtrot, // Foxtrot
//   [bas.cc + cGolf]: cGolf, // Golf
//   [bas.cc + cHotel]: cHotel, // Hotel
//   [bas.cc + cIndia]: cIndia, // India
//   [bas.cc + cJuliett]: cJuliett, // Juliett
//   [bas.cc + cKilo]: cKilo, // Kilo
//   [bas.cc + cLima]: cLima, // Lima
//   [bas.cc + cMike]: cMike, // Mike
//   [bas.cc + cNovember]: cNovember,  // November
//   [bas.cc + cOscar]: cOscar, // Oscar
//   [bas.cc + cPapa]: cPapa, // Papa
//   [bas.cc + cQuebec]: cQuebec, // Quebec
//   [bas.cc + cRomeo]: cRomeo, // Romeo
//   [bas.cc + cSierra]: cSierra, // Sierra
//   [bas.cc + cTango]: cTango, // Tango
//   [bas.cc + cUniform]: cUniform, // Uniform
//   [bas.cc + cVictor]: cVictor, // Victor
//   [bas.cc + cWhiskey]: cWhiskey, // Whiskey
//   [bas.cc + cXray]: cXray, // Xray
//   [bas.cc + cYankee]: cYankee, // Yankee
//   [bas.cc + cZulu]: cZulu, // Zulu
//
//   [bas.cc + cAlpha]: cAlpha, // Alpha
//   [bas.cc + cBeta]: cBeta, // Beta
//   [bas.cc + cGamma]: cGamma, // Gamma
//   [bas.cc + cEpsilon]: cEpsilon, // Epsilon
//   [bas.cc + cDigamma]: cDigamma, // Digamma
//   [bas.cc + cZeta]: cZeta, // Zeta
//   [bas.cc + ceta]: ceta, // eta
//   [bas.cc + cEta]: cEta, // Eta
//   [bas.cc + cTheta]: cTheta, // Theta
//   [bas.cc + cIota]: cIota, // Iota
//   [bas.cc + cKappa]: cKappa, // Kappa
//   [bas.cc + cLambda]: cLambda, // Lambda
//   [bas.cc + cMu]: cMu, // Mu
//   [bas.cc + cNu]: cNu, // Nu
//   [bas.cc + cXi]: cXi, // Xi
//   [bas.cc + cOmicron]: cOmicron, // Omicron
//   [bas.cc + cPi]: cPi, // Pi
//   [bas.cc + cSan]: cSan, // San
//   [bas.cc + cKoppa]: cKoppa, // Koppa
//   [bas.cc + cRho]: cRho, // Rho
//   [bas.cc + cSigma]: cSigma, // Sigma
//   [bas.cc + cTau]: cTau, // Tau
//   [bas.cc + cUpsilon]: cUpsilon, // Upsilon
//   [bas.cc + cPhi]: cPhi, // Phi
//   [bas.cc + cChi]: cChi, // Chi
//   [bas.cc + cPsi]: cPsi, // Psi
//   [bas.cc + cOmega]: cOmega, // Omega
//
//   // Months Of The Year
//   [bas.cc + cJanuary]: cJanuary, // January
//   [bas.cc + cFebuary]: cFebuary, // Febuary
//   [bas.cc + cMarch]: cMarch, // March
//   [bas.cc + cApril]: cApril, // April
//   [bas.cc + cMay]: cMay, // May
//   [bas.cc + cJune]: cJune, // June
//   [bas.cc + cJuly]: cJuly, // July
//   [bas.cc + cAugust]: cAugust, // August
//   [bas.cc + cSeptember]: cSeptember, // September
//   [bas.cc + cOctober]: cOctober, // October
//   // ['cNovember']: cNovember, // November
//   [bas.cc + cDecember]: cDecember, // December
//
//   // Constants Abreviations
//   [bas.cc + cbas]: cbas, // bas
//   [bas.cc + cbiz]: cbiz, // biz
//   [bas.cc + cclr]: cclr, // clr
//   [bas.cc + ccmd]: ccmd, // cmd
//   [bas.cc + ccfg]: ccfg, // cfg
//   [bas.cc + cctr]: cctr, // ctr
//   [bas.cc + celm]: celm, // elm
//   [bas.cc + cgen]: cgen, // gen
//   [bas.cc + ciso]: ciso, // iso
//   [bas.cc + ckts]: ckts, // kts
//   [bas.cc + clng]: clng, // lng
//   [bas.cc + cmsg]: cmsg, // msg
//   [bas.cc + cnum]: cnum, // num
//   [bas.cc + cphn]: cphn, // phn
//   [bas.cc + cshp]: cshp, // shp
//   [bas.cc + csys]: csys, // sys
//   [bas.cc + cunt]: cunt, // unt
//   [bas.cc + cwr1]: cwr1, // cwr1
//   [bas.cc + cwr2]: cwr2, // cwr2
//   [bas.cc + capc]: capc, // apc
//
//   // Miscelanious
//   [bas.cc + cUTF8]: cUTF8, // UTF8
//   [bas.cc + cconst]: cconst, // const
//   [bas.cc + cConst]: cConst, // Const
//   [bas.cc + cASAP]: cASAP, // ASAP
//   [bas.cc + capp]: capp, // app
//   [bas.cc + cApp]: cApp, // App
//   [bas.cc + cAPP]: cAPP, // APP
//   [bas.cc + carg]: carg, // arg
//   [bas.cc + cArg]: cArg, // Arg
//   [bas.cc + cargs]: cargs, // args
//   [bas.cc + cArgs]: cArgs, // Args
//   [bas.cc + chex]: chex, // hex
//   [bas.cc + cHex]: cHex, // Hex
//   [bas.cc + cregEx]: cregEx, // regEx
//   [bas.cc + cRegEx]: cRegEx, // RegEx
//   [bas.cc + cregExp]: cregExp, // regExp
//   [bas.cc + cRegExp]: cRegExp, // RegExp
//   [bas.cc + cbin]: cbin, // bin
//   [bas.cc + cBin]: cBin, // Bin
//   [bas.cc + cBIN]: cBIN, // BIN
//   [bas.cc + cinit]: cinit, // init
//   [bas.cc + cInit]: cInit // Init
// };
