/**
 * @file generic.constants.js
 * @module generic-constants
 * @description Contains many generic constants.
 * Also included are other generic constants like string numbers like "one", "two", "three".
 * Also included are spellings of Greek letters, military codes/standards, units of measurement, units of time, etc...
 * @requires module:basic-constants
 * @requires module:phonic-constants
 * @requires module:numeric-constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

var bas = require('./basic.constants');
var phn = require('./phonic.constants');
var num = require('./numeric.constants');

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
let cctr = phn.cctr; // ctr
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
let cwrd = bas.cwr + bas.cd; // wrd
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

module.exports = {
  ['cDotDot']: cDotDot, // ..
  ['cDotDotForwardSlash']: cDotDotForwardSlash, // ../

  // Boolean strings
  ['cTrue']: cTrue, // True
  ['cFalse']: cFalse, // False
  ['ctrue']: ctrue, // true
  ['cfalse']: cfalse, // false
  ['cTRUE']: cTRUE, // TRUE
  ['cFALSE']: cFALSE, // FALSE
  ['cOff']: cOff, // Off
  ['coff']: coff, // off
  ['cOFF']: cOFF, // OFF
  ['cyes']: cyes, // yes
  ['cnot']: cnot, // not
  ['cYes']: cYes, // Yes
  ['cNot']: cNot, // Not
  ['cYES']: cYES, // YES
  ['cNOT']: cNOT, // bas.c_NO + bas.cT; // NOTE cNOT is some how a reserved word that is a variable.
  ['cnotok']: cnotok, // notok
  ['cnotOk']: cnotOk, // notOk
  ['cnotOK']: cnotOK, // notOK
  ['cNotok']: cNotok, // Notok
  ['cNotOk']: cNotOk, // NotOk
  ['cNotOK']: cNotOK, // NotOK
  ['cNOTok']: cNOTok, // c_NOT = bas.cok;
  ['cNOTOk']: cNOTOk, // c_NOT = bas.cOk;
  ['cNOTOK']: cNOTOK, // c_NOT + bas.cOK;
  ['cnotEql']: cnotEql, // notEql
  ['cnoteql']: cnoteql, // noteql
  ['cNotEql']: cNotEql, // NotEql
  ['cNoteql']: cNoteql, // Noteql
  ['cmax']: cmax, // max
  ['cMax']: cMax, // Max
  ['cmin']: cmin, // min
  ['cMin']: cMin, // Min

  // Test Status
  ['cPass']: cPass, // Pass
  ['cWarning']: cWarning, // Warning
  ['cFail']: cFail, // Fail

  // Directions
  ['cDown']: cDown, // Down
  ['cLeft']: cLeft, // Left
  ['cRight']: cRight, // Right

  // Alphabets
  ['cLowerCaseEnglishAlphabet']: cLowerCaseEnglishAlphabet, // abcdefghijklmnopqrstuvwxyz
  ['cUpperCaseEnglishAlphabet']: cUpperCaseEnglishAlphabet, // ABCDEFGHIJKLMNOPQRSTUVWXYZ
  ['cAllNumbers']: cAllNumbers, // 0123456789
  ['cMostSpecialCharacters']: cMostSpecialCharacters, // !@#$%^&*()_+{}|:"<>?.,~

  // File Extensions
  ['cexe']: cexe // exe
  ['cExe']: cExe // Exe
  ['cEXE']: cEXE // EXE
  ['cdoc']: cdoc // doc
  ['cDoc']: cDoc // Doc
  ['cDOC']: cDOC // DOC
  ['ccom']: ccom // com
  ['cCom']: cCom // Com
  ['cCOM']: cCOM // COM
  ['czip']: czip // zip
  ['cZip']: cZip // Zip
  ['cZIP']: cZIP // ZIP
  ['ctxt']: ctxt // txt
  ['cTxt']: cTxt // Txt
  ['cTXT']: cTXT // TXT
  ['ccsv']: ccsv // csv
  ['cCsv']: cCsv // Csv
  ['cCSV']: cCSV // CSV
  ['cxml']: cxml // xml
  ['cXml']: cXml // Xml
  ['cXML']: cXML // XML
  ['clog']: clog // log
  ['cLog']: cLog // Log
  ['cLOG']: cLOG // LOG
  ['cjson']: cjson // json
  ['cJson']: cJson // Json
  ['cJSON']: cJSON // JSON
  ['cenv']: cenv // env
  ['cEnv']: cEnv // Env
  ['cENV']: cENV // ENV

  ['cDotexe']: cDotexe, // .exe
  ['cDotExe']: cDotExe, // .Exe
  ['cDotEXE']: cDotEXE, // .EXE
  ['cDotcsv']: cDotcsv, // .csv
  ['cDotCsv']: cDotCsv, // .Csv
  ['cDotCSV']: cDotCSV, // .CSV
  ['cDotCom']: cDotCom, // .Com
  ['cDotzip']: cDotzip, // .zip
  ['cDotZip']: cDotZip, // .Zip
  ['cDotZIP']: cDotZIP, // .ZIP
  ['cDottxt']: cDottxt, // .txt
  ['cDotTxt']: cDotTxt, // .Txt
  ['cDotTXT']: cDotTXT, // .TXT
  ['cDotxml']: cDotxml, // .xml
  ['cDotXml']: cDotXml, // .Xml
  ['cDotXML']: cDotXML, // .XML
  ['cDotlog']: cDotlog, // .log
  ['cDotLog']: cDotLog, // .Log
  ['cDotLOG']: cDotLOG, // .LOG
  ['cDotjson']: cDotjson, // .json
  ['cDotJson']: cDotJson, // .Json
  ['cDotJSON']: cDotJSON, // .JSON
  ['cDotenv']: cDotenv, // .env
  ['cDotEnv']: cDotEnv, // .Env
  ['cDotENV']: cDotENV, // .ENV
  ['cascii']: cascii, // ascii

  // Time Formatting
  ['cYYYY']: cYYYY, // YYYY
  ['cSSS']: cSSS, // SSS
  ['cYYYYMMDD']: cYYYYMMDD, // YYYYMMDD
  ['cHHmmss']: cHHmmss, // HHmmss
  ['cHHmmss_SSS']: cHHmmss_SSS, // HHmmss_SSS
  ['cYYYYMMDD_HHmmss']: cYYYYMMDD_HHmmss, // YYYYMMDD_HHmmss
  ['cYYYYMMDD_HHmmss_SSS']: cYYYYMMDD_HHmmss_SSS, // YYYYMMDD_HHmmss_SSS
  ['cYYYY_MM_DD_HH_mm_ss_SSS']: cYYYY_MM_DD_HH_mm_ss_SSS, // YYYY_MM_DD_HH_mm_ss_SSS

  // Naval & Military Codes
  ['cAlfa']: cAlfa, //  Alfa
  ['cBravo']: cBravo, // Bravo
  ['cCharlie']: cCharlie, // Charlie
  ['cDelta']: cDelta, // Delta
  ['cEcho']: cEcho, // Echo
  ['cFoxtrot']: cFoxtrot, // Foxtrot
  ['cGolf']: cGolf, // Golf
  ['cHotel']: cHotel, // Hotel
  ['cIndia']: cIndia, // India
  ['cJuliett']: cJuliett, // Juliett
  ['cKilo']: cKilo, // Kilo
  ['cLima']: cLima, // Lima
  ['cMike']: cMike, // Mike
  ['cNovember']: cNovember,  // November
  ['cOscar']: cOscar, // Oscar
  ['cPapa']: cPapa, // Papa
  ['cQuebec']: cQuebec, // Quebec
  ['cRomeo']: cRomeo, // Romeo
  ['cSierra']: cSierra, // Sierra
  ['cTango']: cTango, // Tango
  ['cUniform']: cUniform, // Uniform
  ['cVictor']: cVictor, // Victor
  ['cWhiskey']: cWhiskey, // Whiskey
  ['cXray']: cXray, // Xray
  ['cYankee']: cYankee, // Yankee
  ['cZulu']: cZulu, // Zulu

  ['cAlpha']: cAlpha, // Alpha
  ['cBeta']: cBeta, // Beta
  ['cGamma']: cGamma, // Gamma
  ['cEpsilon']: cEpsilon, // Epsilon
  ['cDigamma']: cDigamma, // Digamma
  ['cZeta']: cZeta, // Zeta
  ['ceta']: ceta, // eta
  ['cEta']: cEta, // Eta
  ['cTheta']: cTheta, // Theta
  ['cIota']: cIota, // Iota
  ['cKappa']: cKappa, // Kappa
  ['cLambda']: cLambda, // Lambda
  ['cMu']: cMu, // Mu
  ['cNu']: cNu, // Nu
  ['cXi']: cXi, // Xi
  ['cOmicron']: cOmicron, // Omicron
  ['cPi']: cPi, // Pi
  ['cSan']: cSan, // San
  ['cKoppa']: cKoppa, // Koppa
  ['cRho']: cRho, // Rho
  ['cSigma']: cSigma, // Sigma
  ['cTau']: cTau, // Tau
  ['cUpsilon']: cUpsilon, // Upsilon
  ['cPhi']: cPhi, // Phi
  ['cChi']: cChi, // Chi
  ['cPsi']: cPsi, // Psi
  ['cOmega']: cOmega, // Omega

  // Months Of The Year
  ['cJanuary']: cJanuary, // January
  ['cFebuary']: cFebuary, // Febuary
  ['cMarch']: cMarch, // March
  ['cApril']: cApril, // April
  ['cMay']: cMay, // May
  ['cJune']: cJune, // June
  ['cJuly']: cJuly, // July
  ['cAugust']: cAugust, // August
  ['cSeptember']: cSeptember, // September
  ['cOctober']: cOctober, // October
  // ['cNovember']: cNovember, // November
  ['cDecember']: cDecember, // December

  // Constants Abreviations
  ['cbas']: cbas, // bas
  ['cbiz']: cbiz, // biz
  ['cclr']: cclr, // clr
  ['ccmd']: ccmd, // cmd
  ['ccfg']: ccfg, // cfg
  ['cctr']: cctr, // ctr
  ['celm']: celm, // elm
  ['cgen']: cgen, // gen
  ['ciso']: ciso, // iso
  ['ckts']: ckts, // kts
  ['clng']: clng, // lng
  ['cmsg']: cmsg, // msg
  ['cnum']: cnum, // num
  ['cphn']: cphn, // phn
  ['cshp']: cshp, // shp
  ['csys']: csys, // sys
  ['cunt']: cunt, // unt
  ['cwrd']: cwrd, // wrd
  ['capc']: capc, // apc

  // Miscelanious
  ['cUTF8']: cUTF8, // UTF8
  ['cconst']: cconst, // const
  ['cConst']: cConst, // Const
  ['cASAP']: cASAP, // ASAP
  ['capp']: capp, // app
  ['cApp']: cApp, // App
  ['cAPP']: cAPP, // APP
  ['carg']: carg, // arg
  ['cArg']: cArg, // Arg
  ['cargs']: cargs, // args
  ['cArgs']: cArgs, // Args
  ['chex']: chex, // hex
  ['cHex']: cHex, // Hex
  ['cregEx']: cregEx, // regEx
  ['cRegEx']: cRegEx, // RegEx
  ['cregExp']: cregExp, // regExp
  ['cRegExp']: cRegExp, // RegExp
  ['cbin']: cbin, // bin
  ['cBin']: cBin, // Bin
  ['cBIN']: cBIN // BIN
};
