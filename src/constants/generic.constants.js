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

let cDotDot = bas.cDot + bas.cDot; // ..
let cDotDotForwardSlash = cDotDot + bas.cForwardSlash; // ../

// Boolean strings
let cTrue = bas.cT + phn.crue; // True
let cFalse = bas.cF + phn.calse; // False
let ctrue = bas.ct + phn.crue; // true
let cfalse = bas.cf + phn.calse; // false
let cTRUE = bas.cTR + bas.cUE; // TRUE
let cFALSE = bas.cFA + bas.cLS + bas.cE; // FALSE
let cOff = bas.cO + bas.cff; // Off
let coff = bas.co + bas.cff; // off
let cOFF = bas.cOF + bas.cF; // OFF
let cyes = bas.cy + bas.ces; // yes
let cnot = bas.cno + bas.ct; // not
let cYes = bas.cY + bas.ces; // Yes
let cNot = bas.cNo + bas.ct; // Not
let cYES = bas.cYE + bas.cS; // YES
let cNOT = 'NOT'; // bas.c_NO + bas.cT; // NOTE cNOT is some how a reserved word that is a variable.
let cnotok = cnot + bas.cok; // notok
let cnotOk = cnot + bas.cOk; // notOk
let cnotOK = cnot + bas.cOK; // notOK
let cNotok = cNot + bas.cok; // Notok
let cNotOk = cNot + bas.cOk; // NotOk
let cNotOK = cNot + bas.cOK; // NotOK
let cNOTok = 'NOTok'; // c_NOT = bas.cok;
let cNOTOk = 'NOTOk'; // c_NOT = bas.cOk;
let cNOTOK = 'NOTOK'; // c_NOT + bas.cOK;
let cnotEql = cnot + phn.cEql; // notEql
let cnoteql = cnot + phn.ceql; // noteql
let cNotEql = cNot + phn.cEql; // NotEql
let cNoteql = cNot + phn.ceql; // Noteql
let cmax = phn.cmax; // max
let cMax = phn.cMax; // Max
let cmin = phn.cmin; // min
let cMin = phn.cMin; // Min

// Test Status
let cPass = bas.cPa + bas.css; // Pass
let cWarning = bas.cWa + bas.crn + bas.cin + bas.cg; // Warning
let cFail = bas.cFa + bas.cil; // Fail

// Directions
let cDown = bas.cDo + bas.cwn; // Down
let cLeft = bas.cLe + bas.cft; // Left
let cRight = bas.cRi + bas.cgh + bas.ct; // Right

// Alphabets
let cLowerCaseEnglishAlphabet = bas.cab + bas.ccd + bas.cef + bas.cgh + bas.cij + bas.ckl + bas.cmn + bas.cop + bas.cqr + bas.cst + bas.cuv + bas.cwx + bas.cyz; // abcdefghijklmnopqrstuvwxyz
let cUpperCaseEnglishAlphabet = bas.cAB + bas.cCD + bas.cEF + bas.cGH + bas.cIJ + bas.cKL + bas.cMN + bas.cOP + bas.cQR + bas.cST + bas.cUV + bas.cWX + bas.cYZ; // ABCDEFGHIJKLMNOPQRSTUVWXYZ
let cAllNumbers = num.c0 + num.c1 + num.c2 + num.c3 + num.c4 + num.c5 + num.c6 + num.c7 + num.c8 + num.c9; // 0123456789
let cMostSpecialCharacters = bas.cExclamation + bas.cAt + bas.cHash + bas.cDollar + bas.cPercent + bas.cCarrot + bas.cAndPersand + bas.cStar + bas.cOpenParenthesis + bas.cCloseParenthesis + bas.cUnderscore + bas.cPlus +
bas.cOpenCurlyBrace + bas.cCloseCurlyBrace + bas.cPipe + bas.cColon + bas.cDoubleQuote + bas.cLessThan + bas.cGreaterThan + bas.cQuestion + bas.cDot + bas.cComa + bas.cTilde; // !@#$%^&*()_+{}|:"<>?.,~

// File Extensions
let cexe = bas.cex + bas.ce; // exe
let cExe = bas.cEx + bas.ce; // Exe
let cEXE = bas.cEX + bas.cE; // EXE
let cdoc = bas.cdo + bas.cc; // doc
let cDoc = bas.cDo + bas.cc; // Doc
let cDOC = bas.cDO + bas.cC; // DOC
let ccom = bas.cco + bas.cm; // com
let cCom = bas.cCo + bas.cm; // Com
let cCOM = bas.cCO + bas.cM; // COM
let czip = bas.cz + bas.cip; // zip
let cZip = bas.cZ + bas.cip; // Zip
let cZIP = bas.cZ + bas.cIP; // ZIP
let ctxt = bas.ct + bas.cxt; // txt
let cTxt = bas.cT + bas.cxt; // Txt
let cTXT = bas.cT + bas.cXT; // TXT
let ccsv = bas.ccs + bas.cv; // csv
let cCsv = bas.cCs + bas.cv; // Csv
let cCSV = bas.cCS + bas.cV; // CSV
let cxml = bas.cxm + bas.cl; // xml
let cXml = bas.cXm + bas.cl; // Xml
let cXML = bas.cXM + bas.cL; // XML
let clog = bas.clo + bas.cg; // log
let cLog = bas.cLo + bas.cg; // Log
let cLOG = bas.cLO + bas.cG; // LOG
let cjson = bas.cjs + bas.con; // json
let cJson = bas.cJs + bas.con; // Json
let cJSON = bas.cJS + bas.cON; // JSON
let cenv = bas.cen + bas.cv; // env
let cEnv = bas.cEn + bas.cv; // Env
let cENV = bas.cEN + bas.cV; // ENV

let cDotexe = bas.cDot + cexe; // .exe
let cDotExe = bas.cDot + cExe; // .Exe
let cDotEXE = bas.cDot + cEXE; // .EXE
let cDotcsv = bas.cDot + ccsv; // .csv
let cDotCsv = bas.cDot + cCsv; // .Csv
let cDotCSV = bas.cDot + cCSV; // .CSV
let cDotCom = bas.cDot + cCom; // .Com
let cDotzip = bas.cDot + czip; // .zip
let cDotZip = bas.cDot + cZip; // .Zip
let cDotZIP = bas.cDot + cZIP; // .ZIP
let cDottxt = bas.cDot + ctxt; // .txt
let cDotTxt = bas.cDot + cTxt; // .Txt
let cDotTXT = bas.cDot + cTXT; // .TXT
let cDotxml = bas.cDot + cxml; // .xml
let cDotXml = bas.cDot + cXml; // .Xml
let cDotXML = bas.cDot + cXML; // .XML
let cDotlog = bas.cDot + clog; // .log
let cDotLog = bas.cDot + cLog; // .Log
let cDotLOG = bas.cDot + cLOG; // .LOG
let cDotjson = bas.cDot + cjson; // .json
let cDotJson = bas.cDot + cJson; // .Json
let cDotJSON = bas.cDot + cJSON; // .JSON
let cDotenv = bas.cDot + cenv; // .env
let cDotEnv = bas.cDot + cEnv; // .Env
let cDotENV = bas.cDot + cENV; // .ENV
let cascii = bas.cas + bas.cci + bas.ci; // ascii

// Time Formatting
let cYYYY = bas.cYY + bas.cYY; // YYYY
let cSSS = bas.cSS + bas.cS; // SSS
let cYYYYMMDD = cYYYY + bas.cMM + bas.cDD; // YYYYMMDD
let cHHmmss = bas.cHH + bas.cmm + bas.css; // HHmmss
let cHHmmss_SSS = cHHmmss + bas.cDash + cSSS; // HHmmss_SSS
let cYYYYMMDD_HHmmss  = cYYYYMMDD + bas.cDash + cHHmmss; // YYYYMMDD_HHmmss
let cYYYYMMDD_HHmmss_SSS = cYYYYMMDD_HHmmss + cSSS; // YYYYMMDD_HHmmss_SSS
let cYYYY_MM_DD_HH_mm_ss_SSS = cYYYY + bas.cColon + bas.cMM + bas.cColon + bas.cDD + bas.cDash + bas.cHH + bas.cColon + bas.cmm + bas.cColon + bas.css + bas.cColon + cSSS; // YYYY_MM_DD_HH_mm_ss_SSS

// Operating Systems
let cwin32 = phn.cwin + num.c32;

// Naval & Military Codes
let cAlfa = bas.cAl + bas.cfa; //  Alfa
let cBravo = bas.cBr + bas.cav + bas.co; // Bravo
let cCharlie = bas.cCh + bas.car + bas.cli + bas.ce; // Charlie
let cDelta = bas.cDe + bas.clt + bas.ca; // Delta
let cEcho = bas.cEc + bas.cho; // Echo
let cFoxtrot = bas.cFo + bas.cxt + bas.cro + bas.ct; // Foxtrot
let cGolf = bas.cGo + bas.clf; // Golf
let cHotel = bas.cHo + bas.cte + bas.cl; // Hotel
let cIndia = bas.cIn + bas.cdi + bas.ca; // India
let cJuliett = bas.cJu + bas.cli + bas.cet + bas.ct; // Juliett
let cKilo = bas.cKi + bas.clo; // Kilo
let cLima = bas.cLi + bas.cma; // Lima
let cMike = bas.cMi + bas.cke; // Mike
let cNovember = bas.cNo + bas.cv + phn.cemb + bas.cer;  // November
let cOscar = bas.cOs + bas.cca + bas.cr; // Oscar
let cPapa = bas.cPa + bas.cpa; // Papa
let cQuebec = bas.cQu + bas.ceb + bas.cec; // Quebec
let cRomeo = bas.cRo + bas.cme + bas.co; // Romeo
let cSierra = bas.cSi + bas.cer + bas.cra; // Sierra
let cTango = bas.cTa + bas.cng + bas.co; // Tango
let cUniform = bas.cUn + bas.cif + bas.cor + bas.cm; // Uniform
let cVictor = bas.cVi + phn.cctor; // Victor
let cWhiskey = bas.cWh + bas.cis + bas.cke + bas.cy; // Whiskey
let cXray = bas.cXr + bas.cay; // Xray
let cYankee = bas.cYa + bas.cnk + bas.cee; // Yankee
let cZulu = bas.cZu + bas.clu; // Zulu

let cAlpha = bas.cAl + bas.cph + bas.ca; // Alpha
let cBeta = bas.cBe + bas.cta; // Beta
let cGamma = bas.cGa + bas.cmm + bas.ca; // Gamma
let cEpsilon = bas.cEp + bas.csi + bas.clo + bas.cn; // Epsilon
let cDigamma = bas.cDi + bas.cga + bas.cmm + bas.ca; // Digamma
let cZeta = bas.cZe + bas.cta; // Zeta
let ceta = bas.cet + bas.ca; // eta
let cEta = bas.cEt + bas.ca; // Eta
let cTheta = bas.cTh + bas.cet + bas.ca; // Theta
let cIota = bas.cIo + bas.cta; // Iota
let cKappa = bas.cKa + bas.cpp + bas.ca; // Kappa
let cLambda = bas.cLa + bas.cmb + bas.cda; // Lambda
let cMu = bas.cMu; // Mu
let cNu = bas.cNu; // Nu
let cXi = bas.cXi; // Xi
let cOmicron = bas.cOm + bas.cic + bas.cro + bas.cn; // Omicron
let cPi = bas.cPi; // Pi
let cSan = bas.cSa + bas.cn; // San
let cKoppa = bas.cKo + bas.cpp + bas.ca; // Koppa
let cRho = bas.cRh + bas.co; // Rho
let cSigma = bas.cSi + bas.cgm + bas.ca; // Sigma
let cTau = bas.cTa + bas.cu; // Tau
let cUpsilon = bas.cUp + bas.csi + bas.clo + bas.cn; // Upsilon
let cPhi = bas.cPh + bas.ci; // Phi
let cChi = bas.cCh + bas.ci; // Chi
let cPsi = bas.cPs + bas.ci; // Psi
let cOmega = bas.cOm + bas.ceg + bas.ca; // Omega

// Months Of The Year
let cJanuary = bas.cJa + bas.cn + phn.cuary; // January
let cFebuary = bas.cFe + bas.cb + phn.cuary; // Febuary
let cMarch = bas.cMa + bas.crc + bas.ch; // March
let cApril = bas.cAp + bas.cri + bas.cl; // April
let cMay = bas.cMa + bas.cy; // May
let cJune = bas.cJu + bas.cne; // June
let cJuly = bas.cJu + bas.cly; // July
let cAugust = bas.cAu + bas.cgu + bas.cst; // August
let cSeptember = bas.cSe + bas.cpt + phn.cemb + bas.cer; // September
let cOctober = bas.cOc + bas.cto + bas.cb + bas.cer; // October
// cNovember = bas.cNo + bas.cv + bas.cemb + bas.cer; // November
let cDecember = bas.cDe + bas.cc + phn.cemb + bas.cer; // December

// Constants Abreviations
let cbas = bas.cba + bas.cs; // bas
let cbiz = bas.cbi + bas.cz; // biz
let cclr = phn.cclr; // clr
let ccmd = bas.ccm + bas.cd; // cmd
let ccfg = bas.ccf + bas.cg; // cfg
let ccon = bas.co + bas.cn; // con
let cctr = phn.cctr; // ctr
let cfnc = bas.cfn + bas.c; // fnc
let celm = bas.cel + bas.cm; // elm
let cgen = phn.cgen; // gen
let ciso = phn.ciso; // iso
let ckts = bas.ckt + bas.cs; // kts
let clng = bas.cln + bas.cg; // lng
let cmsg = bas.cms + bas.cg; // msg
let cnum = phn.cnum; // num
let cphn = bas.cph + bas.cn; // phn
let cshp = phn.cshp; // shp
let csys = bas.csy + bas.cs; // sys
let cunt = phn.cunt; // unt
let cwr1 = bas.cwr + num.c1; // wr1
let cwr2 = bas.cwr + num.c2; // wr2
let capc = bas.cap + bas.cc; // apc

// Miscelanious
let cUTF8 = bas.cUT + bas.cF + num.c8; // UTF8
let cconst = phn.ccon + bas.cst; // const
let cConst = phn.cCon + bas.cst; // Const
let cASAP = bas.cAS + bas.cAP; // ASAP
let capp = bas.cap + bas.cp; // app
let cApp = bas.cAp + bas.cp; // App
let cAPP = bas.cAP + bas.cP; // APP
let carg = bas.car + bas.cg; // arg
let cArg = bas.cAr + bas.cg; // Arg
let cargs = bas.ca + phn.crgs; // args
let cArgs = bas.cA + phn.crgs; // Args
let chex = bas.che + bas.cx; // hex
let cHex = bas.cHe + bas.cx; // Hex
let cregEx = phn.creg + bas.cEx; // regEx
let cRegEx = phn.cReg + bas.cEx; // RegEx
let cregExp = cregEx + bas.cp; // regExp
let cRegExp = cRegEx + bas.cp; // RegExp
let cbin = bas.cbi + bas.cn; // bin
let cBin = bas.cBi + bas.cn; // Bin
let cBIN = bas.cBI + bas.cN; // BIN
let cinit = phn.cini + bas.ct; // init
let cInit = phn.cIni + bas.ct; // Init

module.exports = {
  [bas.cc + con.cDot + con.cDot]: cDotDot, // ..
  [bas.cc + con.cDot + con.cDot + con.cForwardSlash]: cDotDotForwardSlash, // ../

  // Boolean strings
  [bas.cc + cTrue]: cTrue, // True
  [bas.cc + cFalse]: cFalse, // False
  [bas.cc + ctrue]: ctrue, // true
  [bas.cc + cfalse]: cfalse, // false
  [bas.cc + cTRUE]: cTRUE, // TRUE
  [bas.cc + cFALSE]: cFALSE, // FALSE
  [bas.cc + cOff]: cOff, // Off
  [bas.cc + coff]: coff, // off
  [bas.cc + cOFF]: cOFF, // OFF
  [bas.cc + cyes]: cyes, // yes
  [bas.cc + cnot]: cnot, // not
  [bas.cc + cYes]: cYes, // Yes
  [bas.cc + cNot]: cNot, // Not
  [bas.cc + cYES]: cYES, // YES
  [bas.cc + cNOT]: cNOT, // bas.c_NO + bas.cT; // NOTE cNOT is some how a reserved word that is a variable.
  [bas.cc + cnotok]: cnotok, // notok
  [bas.cc + cnotOk]: cnotOk, // notOk
  [bas.cc + cnotOK]: cnotOK, // notOK
  [bas.cc + cNotok]: cNotok, // Notok
  [bas.cc + cNotOk]: cNotOk, // NotOk
  [bas.cc + cNotOK]: cNotOK, // NotOK
  [bas.cc + cNOTok]: cNOTok, // c_NOT = bas.cok;
  [bas.cc + cNOTOk]: cNOTOk, // c_NOT = bas.cOk;
  [bas.cc + cNOTOK]: cNOTOK, // c_NOT + bas.cOK;
  [bas.cc + cnotEql]: cnotEql, // notEql
  [bas.cc + cnoteql]: cnoteql, // noteql
  [bas.cc + cNotEql]: cNotEql, // NotEql
  [bas.cc + cNoteql]: cNoteql, // Noteql
  [bas.cc + cmax]: cmax, // max
  [bas.cc + cMax]: cMax, // Max
  [bas.cc + cmin]: cmin, // min
  [bas.cc + cMin]: cMin, // Min

  // Test Status
  [bas.cc + cPass]: cPass, // Pass
  [bas.cc + cWarning]: cWarning, // Warning
  [bas.cc + cFail]: cFail, // Fail

  // Directions
  [bas.cc + cDown]: cDown, // Down
  [bas.cc + cLeft]: cLeft, // Left
  [bas.cc + cRight]: cRight, // Right

  // Alphabets
  [bas.cc + con.cLowerCaseEnglishAlphabet]: cLowerCaseEnglishAlphabet, // abcdefghijklmnopqrstuvwxyz
  [bas.cc + con.cUpperCaseEnglishAlphabet]: cUpperCaseEnglishAlphabet, // ABCDEFGHIJKLMNOPQRSTUVWXYZ
  [bas.cc + con.cAllNumbers]: cAllNumbers, // 0123456789
  [bas.cc + con.cMostSpecialCharacters]: cMostSpecialCharacters, // !@#$%^&*()_+{}|:"<>?.,~

  // File Extensions
  [bas.cc + cexe]: cexe, // exe
  [bas.cc + cExe]: cExe, // Exe
  [bas.cc + cEXE]: cEXE, // EXE
  [bas.cc + cdoc]: cdoc, // doc
  [bas.cc + cDoc]: cDoc, // Doc
  [bas.cc + cDOC]: cDOC, // DOC
  [bas.cc + ccom]: ccom, // com
  [bas.cc + cCom]: cCom, // Com
  [bas.cc + cCOM]: cCOM, // COM
  [bas.cc + czip]: czip, // zip
  [bas.cc + cZip]: cZip, // Zip
  [bas.cc + cZIP]: cZIP, // ZIP
  [bas.cc + ctxt]: ctxt, // txt
  [bas.cc + cTxt]: cTxt, // Txt
  [bas.cc + cTXT]: cTXT, // TXT
  [bas.cc + ccsv]: ccsv, // csv
  [bas.cc + cCsv]: cCsv, // Csv
  [bas.cc + cCSV]: cCSV, // CSV
  [bas.cc + cxml]: cxml, // xml
  [bas.cc + cXml]: cXml, // Xml
  [bas.cc + cXML]: cXML, // XML
  [bas.cc + clog]: clog, // log
  [bas.cc + cLog]: cLog, // Log
  [bas.cc + cLOG]: cLOG, // LOG
  [bas.cc + cjson]: cjson, // json
  [bas.cc + cJson]: cJson, // Json
  [bas.cc + cJSON]: cJSON, // JSON
  [bas.cc + cenv]: cenv, // env
  [bas.cc + cEnv]: cEnv, // Env
  [bas.cc + cENV]: cENV, // ENV

  [bas.cc + con.cDot + cexe]: cDotexe, // .exe
  [bas.cc + con.cDot + cExe]: cDotExe, // .Exe
  [bas.cc + con.cDot + cEXE]: cDotEXE, // .EXE
  [bas.cc + con.cDot + ccsv]: cDotcsv, // .csv
  [bas.cc + con.cDot + cCsv]: cDotCsv, // .Csv
  [bas.cc + con.cDot + cCSV]: cDotCSV, // .CSV
  [bas.cc + con.cDot + cCom]: cDotCom, // .Com
  [bas.cc + con.cDot + czip]: cDotzip, // .zip
  [bas.cc + con.cDot + cZip]: cDotZip, // .Zip
  [bas.cc + con.cDot + cZIP]: cDotZIP, // .ZIP
  [bas.cc + con.cDot + ctxt]: cDottxt, // .txt
  [bas.cc + con.cDot + cTxt]: cDotTxt, // .Txt
  [bas.cc + con.cDot + cTXT]: cDotTXT, // .TXT
  [bas.cc + con.cDot + cxml]: cDotxml, // .xml
  [bas.cc + con.cDot + cXml]: cDotXml, // .Xml
  [bas.cc + con.cDot + cXML]: cDotXML, // .XML
  [bas.cc + con.cDot + clog]: cDotlog, // .log
  [bas.cc + con.cDot + cLog]: cDotLog, // .Log
  [bas.cc + con.cDot + cLOG]: cDotLOG, // .LOG
  [bas.cc + con.cDot + cjson]: cDotjson, // .json
  [bas.cc + con.cDot + cJson]: cDotJson, // .Json
  [bas.cc + con.cDot + cJSON]: cDotJSON, // .JSON
  [bas.cc + con.cDot + cenv]: cDotenv, // .env
  [bas.cc + con.cDot + cEnv]: cDotEnv, // .Env
  [bas.cc + con.cDot + cENV]: cDotENV, // .ENV
  [bas.cc + cascii]: cascii, // ascii

  // Time Formatting
  [bas.cc + cYYYY]: cYYYY, // YYYY
  [bas.cc + cSSS]: cSSS, // SSS
  [bas.cc + cYYYYMMDD]: cYYYYMMDD, // YYYYMMDD
  [bas.cc + cHHmmss]: cHHmmss, // HHmmss
  [bas.cc + cHHmmss_SSS]: cHHmmss_SSS, // HHmmss_SSS
  [bas.cc + cYYYYMMDD_HHmmss]: cYYYYMMDD_HHmmss, // YYYYMMDD_HHmmss
  [bas.cc + cYYYYMMDD_HHmmss_SSS]: cYYYYMMDD_HHmmss_SSS, // YYYYMMDD_HHmmss_SSS
  [bas.cc + cYYYY_MM_DD_HH_mm_ss_SSS]: cYYYY_MM_DD_HH_mm_ss_SSS, // YYYY_MM_DD_HH_mm_ss_SSS

  // Operating Systems
  [bas.cc + cwin32]: cwin32, // win32

  // Naval & Military Codes
  [bas.cc + cAlfa]: cAlfa, //  Alfa
  [bas.cc + cBravo]: cBravo, // Bravo
  [bas.cc + cCharlie]: cCharlie, // Charlie
  [bas.cc + cDelta]: cDelta, // Delta
  [bas.cc + cEcho]: cEcho, // Echo
  [bas.cc + cFoxtrot]: cFoxtrot, // Foxtrot
  [bas.cc + cGolf]: cGolf, // Golf
  [bas.cc + cHotel]: cHotel, // Hotel
  [bas.cc + cIndia]: cIndia, // India
  [bas.cc + cJuliett]: cJuliett, // Juliett
  [bas.cc + cKilo]: cKilo, // Kilo
  [bas.cc + cLima]: cLima, // Lima
  [bas.cc + cMike]: cMike, // Mike
  [bas.cc + cNovember]: cNovember,  // November
  [bas.cc + cOscar]: cOscar, // Oscar
  [bas.cc + cPapa]: cPapa, // Papa
  [bas.cc + cQuebec]: cQuebec, // Quebec
  [bas.cc + cRomeo]: cRomeo, // Romeo
  [bas.cc + cSierra]: cSierra, // Sierra
  [bas.cc + cTango]: cTango, // Tango
  [bas.cc + cUniform]: cUniform, // Uniform
  [bas.cc + cVictor]: cVictor, // Victor
  [bas.cc + cWhiskey]: cWhiskey, // Whiskey
  [bas.cc + cXray]: cXray, // Xray
  [bas.cc + cYankee]: cYankee, // Yankee
  [bas.cc + cZulu]: cZulu, // Zulu

  [bas.cc + cAlpha]: cAlpha, // Alpha
  [bas.cc + cBeta]: cBeta, // Beta
  [bas.cc + cGamma]: cGamma, // Gamma
  [bas.cc + cEpsilon]: cEpsilon, // Epsilon
  [bas.cc + cDigamma]: cDigamma, // Digamma
  [bas.cc + cZeta]: cZeta, // Zeta
  [bas.cc + ceta]: ceta, // eta
  [bas.cc + cEta]: cEta, // Eta
  [bas.cc + cTheta]: cTheta, // Theta
  [bas.cc + cIota]: cIota, // Iota
  [bas.cc + cKappa]: cKappa, // Kappa
  [bas.cc + cLambda]: cLambda, // Lambda
  [bas.cc + cMu]: cMu, // Mu
  [bas.cc + cNu]: cNu, // Nu
  [bas.cc + cXi]: cXi, // Xi
  [bas.cc + cOmicron]: cOmicron, // Omicron
  [bas.cc + cPi]: cPi, // Pi
  [bas.cc + cSan]: cSan, // San
  [bas.cc + cKoppa]: cKoppa, // Koppa
  [bas.cc + cRho]: cRho, // Rho
  [bas.cc + cSigma]: cSigma, // Sigma
  [bas.cc + cTau]: cTau, // Tau
  [bas.cc + cUpsilon]: cUpsilon, // Upsilon
  [bas.cc + cPhi]: cPhi, // Phi
  [bas.cc + cChi]: cChi, // Chi
  [bas.cc + cPsi]: cPsi, // Psi
  [bas.cc + cOmega]: cOmega, // Omega

  // Months Of The Year
  [bas.cc + cJanuary]: cJanuary, // January
  [bas.cc + cFebuary]: cFebuary, // Febuary
  [bas.cc + cMarch]: cMarch, // March
  [bas.cc + cApril]: cApril, // April
  [bas.cc + cMay]: cMay, // May
  [bas.cc + cJune]: cJune, // June
  [bas.cc + cJuly]: cJuly, // July
  [bas.cc + cAugust]: cAugust, // August
  [bas.cc + cSeptember]: cSeptember, // September
  [bas.cc + cOctober]: cOctober, // October
  // ['cNovember']: cNovember, // November
  [bas.cc + cDecember]: cDecember, // December

  // Constants Abreviations
  [bas.cc + cbas]: cbas, // bas
  [bas.cc + cbiz]: cbiz, // biz
  [bas.cc + cclr]: cclr, // clr
  [bas.cc + ccmd]: ccmd, // cmd
  [bas.cc + ccfg]: ccfg, // cfg
  [bas.cc + cctr]: cctr, // ctr
  [bas.cc + celm]: celm, // elm
  [bas.cc + cgen]: cgen, // gen
  [bas.cc + ciso]: ciso, // iso
  [bas.cc + ckts]: ckts, // kts
  [bas.cc + clng]: clng, // lng
  [bas.cc + cmsg]: cmsg, // msg
  [bas.cc + cnum]: cnum, // num
  [bas.cc + cphn]: cphn, // phn
  [bas.cc + cshp]: cshp, // shp
  [bas.cc + csys]: csys, // sys
  [bas.cc + cunt]: cunt, // unt
  [bas.cc + cwr1]: cwr1, // cwr1
  [bas.cc + cwr2]: cwr2, // cwr2
  [bas.cc + capc]: capc, // apc

  // Miscelanious
  [bas.cc + cUTF8]: cUTF8, // UTF8
  [bas.cc + cconst]: cconst, // const
  [bas.cc + cConst]: cConst, // Const
  [bas.cc + cASAP]: cASAP, // ASAP
  [bas.cc + capp]: capp, // app
  [bas.cc + cApp]: cApp, // App
  [bas.cc + cAPP]: cAPP, // APP
  [bas.cc + carg]: carg, // arg
  [bas.cc + cArg]: cArg, // Arg
  [bas.cc + cargs]: cargs, // args
  [bas.cc + cArgs]: cArgs, // Args
  [bas.cc + chex]: chex, // hex
  [bas.cc + cHex]: cHex, // Hex
  [bas.cc + cregEx]: cregEx, // regEx
  [bas.cc + cRegEx]: cRegEx, // RegEx
  [bas.cc + cregExp]: cregExp, // regExp
  [bas.cc + cRegExp]: cRegExp, // RegExp
  [bas.cc + cbin]: cbin, // bin
  [bas.cc + cBin]: cBin, // Bin
  [bas.cc + cBIN]: cBIN, // BIN
  [bas.cc + cinit]: cinit, // init
  [bas.cc + cInit]: cInit // Init
};
