/**
 * @file phonic.constants.js
 * @module phonic-constants
 * @description Contains many re-usable phonetic constants and partial phrases and/or
 * partial words for re-usability, many of them derived from the basic-constants.
 * @requires module:basic.constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

import * as bas from './basic.constants.js';

// Reusable Grammer
export const chree = bas.chr + bas.cee;
export const cour = bas.cou + bas.cr; // our
export const cive = bas.civ + bas.ce; // ive
export const ceven = bas.cev + bas.cen; // even
export const cight = bas.cig + bas.cht; // ight
export const cine = bas.cin + bas.ce; // ine
export const cleven = bas.cl + bas.cev + bas.cen; // leven
export const cwelve = bas.cwe + bas.clv + bas.ce; // welve
export const cteen = bas.ct + bas.cee + bas.cn; // teen
export const chir = bas.chi + bas.cr; // hir
export const cigh = bas.cig + bas.ch; // igh
export const cwenty = bas.cw + bas.cen + bas.cty; // wenty
export const chirty = bas.chi + bas.cr + bas.cty; // hirty
export const cifty = bas.cif + bas.cty; // ifty
export const cred = bas.cre + bas.cd; // red
export const cgreen = bas.cgr + bas.cee + bas.cn; // green
export const cblue = bas.cbl + bas.cue; // blue
export const cund = bas.cun + bas.cd; // und
export const cundred = cund + cred; // undred
export const cand = bas.can + bas.cd; // and
export const csand = bas.cs + cand; // sand
export const chousand = bas.cho + bas.cu + csand; // housand
export const cion = bas.cio + bas.cn; // ion
export const cION = bas.cIO + bas.cN; // ION
export const csion = bas.cs + cion; // sion
export const cill = bas.ci + bas.cll; // ill
export const cillion = cill + cion; // illion
export const crue = bas.cru + bas.ce; // rue
export const calse = bas.cal + bas.cse; // alse
export const ction = bas.ct + cion; // tion
export const cTION = bas.cT + cION; // TION
export const cction = bas.cc + ction; // ction
export const cmation = bas.cma + ction; // mation
export const cition = bas.ci + ction; // ition
export const cITION = bas.cI + cTION; // ITION
export const cage = bas.cag + bas.ce; // age
export const cest = bas.ces + bas.ct; // est
export const char = bas.cha + bas.cr; // har
export const cHar = bas.cHa + bas.cr; // Har
export const cHAR = bas.cHA + bas.cR; // HAR
export const chare = char + bas.ce; // hare
export const c_lass = bas.cla + bas.css; // lass
export const ctemp = bas.cte + bas.cmp; // temp
export const chref = bas.chr + bas.cef; // href
export const cABC = bas.cAB + bas.cC; // ABC
export const came = bas.cam + bas.ce; // ame
export const cile = bas.cil + bas.ce; // ile
export const cext = bas.cex + bas.ct; // ext
export const cExt = bas.cEx + bas.ct; // Ext
export const clpha = bas.clp + bas.cha; // lpha
export const ccon = bas.cco + bas.cn; // con
export const cCon = bas.cCo + bas.cn; // Con
export const cable = bas.cab + bas.cle; // able
export const calid = bas.cal + bas.cid; // alid
export const cALID = bas.cAL + bas.cID; // ALID
export const cing = bas.cin + bas.cg; // ing
export const cING = bas.cIN + bas.cG; // ING
export const ctring = bas.ctr + cing; // tring
export const cbject = bas.cbj + bas.cec + bas.ct; // bject
export const cata = bas.cat + bas.ca; // ata
export const cATA = bas.cAT + bas.cA; // ATA
export const cMac = bas.cMa + bas.cc; // Mac
export const cpre = bas.cpr + bas.ce; // pre
export const cPre = bas.cPr + bas.ce; // Pre
export const cPRE = bas.cPR + bas.cE; // PRE
export const colid = bas.col + bas.cid; // olid
export const cync = bas.cyn + bas.cc; // ync
export const cynch = bas.cyn + bas.cch; // ynch
export const celete = bas.cel + bas.cet + bas.ce; // elete
export const cnner = bas.cnn + bas.cer; // nner
export const click = bas.cli + bas.cck; // lick
export const cctr = bas.cct + bas.cr; // ctr
export const cctrl = cctr + bas.cl; // ctrl
export const cype = bas.cyp + bas.ce; // ype
export const ceql = bas.ce + bas.cql; // eql
export const cEql = bas.cE + bas.cql; // Eql
export const cemb = bas.cem + bas.cb; // emb
export const cOperat = bas.cOp + bas.cer + bas.cat; // Operat
export const cili = bas.cil + bas.ci; // ili
export const cility = cili + bas.cty; // ility
export const cibility = bas.cib + cility; // ibility
export const cisibility = bas.cis + cibility; // isibility
export const cith = bas.ci + bas.cth; // ith
export const cjth = bas.cj + bas.cth; // jth
export const ckth = bas.ck + bas.cth; // kth
export const crent = bas.cre + bas.cnt; // rent
export const carent = bas.ca + crent; // arent
export const ctor = bas.cto + bas.cr; // tor
export const cctor = bas.cc + ctor; // ctor
export const celector = bas.cel + bas.cec + ctor; // elector
export const coolean = bas.coo + bas.cle + bas.can; // oolean
export const check = bas.che + bas.cck; // heck
export const child = bas.chi + bas.cld; // hild
export const cibling = bas.cib + bas.cl + cing; // ibling
export const cttribute = bas.ctt + bas.cri + bas.cbu + bas.cte; //ttribute
export const cttributes = cttribute + bas.cs; // ttributes
export const cisabled = bas.cis + cable + bas.cd; // isabled
export const cilter = bas.cil + bas.ct + bas.cer; // ilter
export const code = bas.cod + bas.ce; // ode
export const cide = bas.cid + bas.ce; // ide
export const cuary = bas.cua + bas.cry; // uary
export const cies = bas.cie + bas.cs; // ies
export const ctive = bas.cti + bas.cve; // tive
export const cate = bas.cat + bas.ce; // ate
export const cdate = bas.cd + cate; // date
export const cter = bas.cte + bas.cr; // ter
export const cTER = bas.cTE + bas.cR; // TER
export const cment = bas.cme + bas.cnt; // ment
export const cMENT = bas.cME + bas.cNT; // MENT
export const cime = bas.cim + bas.ce; // ime
export const cinter = bas.cin + cter; // inter
export const cInter = bas.cIn + cter; // Inter
export const cmed = bas.cme + bas.cd; // med
export const cath = bas.cat + bas.ch; // ath
export const cvar = bas.cva + bas.cr; // var
export const cVar = bas.cVa + bas.cr; // Var
export const ciew = bas.cie + bas.cw; // iew
export const cete = bas.cet + bas.ce; // ete
export const cace = bas.cac + bas.ce; // ace
export const cder = bas.cd + bas.cer; // der
export const ccor = bas.cco + bas.cr; // cor
export const cCor = bas.cCo + bas.cr; // Cor
export const ccore = ccor + bas.ce; // core
export const cert = bas.cer + bas.ct; // ert
export const c_ase = bas.cas + bas.ce; // ase 'case' is a reserved word
export const c_ASE = bas.cAS + bas.cE; // ASE
export const cunt = bas.cun + bas.ct; // unt
export const caft = bas.caf + bas.ct; // aft
export const cops = bas.cop + bas.cs; // ops
export const cOPS = bas.cOP + bas.cS; // OPS
export const cinv = bas.cin + bas.cv; // inv
export const cInv = bas.cIn + bas.cv; // Inv
export const cral = bas.cra + bas.cl; // ral
export const cara = bas.car + bas.ca; // ara
export const cpro = bas.cpr + bas.co; // pro
export const cPro = bas.cPr + bas.co; // Pro
export const cPRO = bas.cPR + bas.cO; // PRO
export const cino = bas.cin + bas.co; // ino
export const cese = bas.ces + bas.ce; // ese
export const cish = bas.cis + bas.ch; // ish
export const ccel = bas.cce + bas.cl; // cel
export const cCel = bas.cCe + bas.cl; // Cel
export const cian = bas.cia + bas.cn; // ian
export const cous = bas.cou + bas.cs; // ous
export const ceous = bas.ce + cous; // eous
export const cung = bas.cun + bas.cg; // ung
export const cary = bas.car + bas.cy; // ary
export const ciary = bas.ci + cary; // iary
export const cMis = bas.cMi + bas.cs; // Mis
export const cmis = bas.camai + bas.cs; // mis
export const cource = bas.cou + bas.crc + bas.ce; // ource
export const cmin = bas.camai + bas.cn; // min
export const cMin = bas.cMi + bas.cn; // Min
export const cmax = bas.cma + bas.cx; // max
export const cMax = bas.cMa + bas.cx; // Max
export const cmine = bas.camai + bas.cne; // mine
//b.cet + bas.cer + bas.cmi + bas.cne; //cmine;
export const cetermine = bas.ce + bas.ct + bas.ce + bas.cr + bas.cm + bas.ci + bas.cn + bas.ce; // etermine
export const cingle = bas.cin + bas.cgl + bas.ce; // ingle
export const clace = bas.cla + bas.cce; // lace
export const ceplace = bas.cep + clace; // eplace
export const clean = bas.cle + bas.can; // lean
export const cver = bas.cve + bas.cr; // ver
export const cVer = bas.cVe + bas.cr; // Ver
export const cvert = cver + bas.ct; // vert
export const convert = bas.con + cvert; // onvert
export const crate = bas.cra + bas.cte; // crate
export const cenerate = bas.cen + bas.ce + crate; // enerate
export const cdom = bas.cdo + bas.cm; // dom
export const candom = bas.can + cdom; // andom
export const create = bas.cre + cate; // reate
export const carn = bas.car + bas.cn; // arn
export const carning = carn + cing; // arning
export const crror = bas.crr + bas.cor; // rror
export const cRROR = bas.cRR + bas.cOR; // RROR
export const card = bas.car + bas.cd; // ard
export const cose = bas.cos + bas.ce; // ose
export const cray = bas.cra + bas.cy; // ray
export const cmel = bas.cme + bas.cl; // mel
export const cound = bas.cou + bas.cnd; // ound
export const cdot = bas.cd + bas.cot; // dot
export const cDot = bas.cD + bas.cot; // Dot
export const cart = bas.car + bas.ct; // art
export const cize = bas.ciz + bas.ce; // ize
export const cmal = bas.cma + bas.cl; // mal
export const cormal = bas.cor + cmal; // ormal
export const cegree = bas.ceg + bas.cre + bas.ce; // egree
export const ccir = bas.cci + bas.cr; // cir
export const cCir = bas.cCi + bas.cr; // Cir
export const ccle = bas.ccl + bas.ce; // cle
export const care = bas.car + bas.ce; // are
export const cquare = bas.cqu + care; // quare
export const cgle = bas.cgl + bas.ce; // gle
export const ctri = bas.ctr + bas.ci; // tri
export const cTri = bas.cTr + bas.ci; // Tri
export const crec = bas.cre + bas.cc; // rec
export const cRec = bas.cRe + bas.cc; // Rec
export const crect = crec + bas.ct; // rect
export const cRect = cRec + bas.ct; // Rect
export const coct = bas.coc + bas.ct; // oct
export const cOct = bas.cOc + bas.ct; // Oct
export const cgon = bas.cgo + bas.cn; // gon
export const chex = bas.che + bas.cx; // hex
export const cHex = bas.cHe + bas.cx; // Hex
export const chep = bas.che + bas.cp; // hep
export const cHep = bas.cHe + bas.cp; // Hep
export const cnon = bas.cno + bas.cn; // non
export const cNon = bas.cNo + bas.cn; // Non
export const crap = bas.cra + bas.cp; // rap
export const czoid = bas.czo + bas.cid; // zoid
export const cfra = bas.cfr + bas.ca; // fra
export const cFra = bas.cFr + bas.ca; // Fra
export const ctra = bas.ctr + bas.ca; // tra
export const cTra = bas.cTr + bas.ca; // Tra
export const ctrans = ctra + bas.cns; // trans
export const cTrans = cTra + bas.cns; // Trans
export const cint = bas.cin + bas.ct; // int
export const cloc = bas.clo + bas.cc; // loc
export const cLoc = bas.cLo + bas.cc; // Loc
export const cation = bas.ca + ction; // ation
export const cort = bas.cor + bas.ct; // ort
export const csim = bas.csi + bas.cm; // sim
export const cSim = bas.cSi + bas.cm; // Sim
export const cplify = bas.cpl + bas.cif + bas.cy; // plify
export const csol = bas.cso + bas.cl; // sol
export const ccomp = bas.cco + bas.cmp; // comp
export const cComp = bas.cCo + bas.cmp; // Comp
export const cideo = bas.cid + bas.ceo; // ideo
export const cnteger = bas.cnt + bas.ceg + bas.cer; // nteger
export const cloat = bas.clo + bas.cat; // loat
export const cong = bas.con + bas.cg; // ong
export const chort = bas.ch + cort; // hort
export const cble = bas.cbl + bas.ce; // ble
export const couble = bas.cou + cble; // ouble
export const cduct = bas.cdu + bas.cct; // duct
export const cgate = bas.cga + bas.cte; // gate
export const cggregate = bas.cgg + bas.cre + cgate; // ggregate
export const cDiff = bas.cDi + bas.cff; // Diff
export const cenc = bas.cen + bas.cc; // enc
export const cence = cenc + bas.ce; // ence
export const cain = bas.cai + bas.cn; // ain
export const ctch = bas.ctc + bas.ch; // tch
export const cween = bas.cwe + bas.cen; // ween
export const cord = bas.cor + bas.cd; // ord
export const cmap = bas.cma + bas.cp; // map
export const cMap = bas.cMa + bas.cp; // Map
export const cess = bas.ce + bas.css; // ess
export const cres = bas.cre + bas.cs; // res
export const cRes = bas.cRe + bas.cs; // Res
export const cress = bas.cr + cess; // ress
export const ceat = bas.ce + bas.cat; // eat
export const chen = bas.ch + bas.cen; // hen
export const chan = bas.ch + bas.can; // han
export const clica = bas.cli + bas.cca; // lica
export const cLICA = bas.cLI + bas.cCA; // LICA
export const capp = bas.ca + bas.cpp; // app
export const cApp = bas.cA + bas.cpp; // App
export const cAPP = bas.cA + bas.cPP; // APP
export const coot = bas.coo + bas.ct; // oot
export const crse = bas.crs + bas.ce; // rse
export const cRSE = bas.cRS + bas.cE; // RSE
export const cars = bas.car + bas.cs; // ars
export const carse = bas.ca + crse; // arse
export const cARSE = bas.cA + cRSE; // ARSE
export const cwap = bas.cwa + bas.cp; // wap
export const cward = bas.cwa + bas.crd; // ward
export const clash = bas.cla + bas.csh; // lash
export const cENV = bas.cE + bas.cNV; // ENV
export const cavigate = bas.cav + bas.cig + cate; // avigate
export const cness = bas.cne + bas.css; // ness
export const cNESS = bas.cNE + bas.cSS; // NESS
export const cusiness = bas.cus + bas.ci + cness; // usiness
export const cule = bas.cul + bas.ce; // ule
export const cait = bas.cai + bas.ct; // ait
export const cesh = bas.ce + bas.csh; // esh
export const cval = bas.cv + bas.cal; // val
export const cemo = bas.ce + bas.cmo; // emo
export const cmon = bas.cmo + bas.cn; // mon
export const common = bas.com + cmon; // ommon
export const clti = bas.clt + bas.ci; // lti
export const cmulti = bas.cmu + clti; // multi
export const cMulti = bas.cMu + clti; // Multi
export const cple = bas.cpl + bas.ce; // ple
export const cPLE = bas.cPL + bas.cE; // PLE
export const cnal = bas.cna + bas.cl; // nal
export const cexe = bas.cex + bas.ce; // exe
export const cExe = bas.cEx + bas.ce; // Exe
export const cper = bas.cpe + bas.cr; // per
export const cPer = bas.cPe + bas.cr; // Per
export const casic = bas.cas + bas.cic; // asic
export const cven = bas.cve + bas.cn; // ven
export const cVEN = bas.cVE + bas.cN; // VEN
export const cvent = cven + bas.ct; // vent;
export const carg = bas.car + bas.cg; // arg
export const cArg = bas.cAr + bas.cg; // Arg
export const crive = bas.cri + bas.cve; // rive
export const cloy = bas.clo + bas.cy; // loy
export const cLOY = bas.cLO + bas.cY; // LOY
export const cumber = bas.cum + bas.cb + bas.cer; // umber
export const ccond = bas.cco + bas.cnd; // cond
export const cieth = bas.cie + bas.cth; // ieth
export const ctieth = bas.ct + cieth; // tieth
export const cont = bas.con + bas.ct; // ont
export const cull = bas.cul + bas.cl; // ull
export const cmod = bas.cmo + bas.cd; // mod
export const cMod = bas.cMo + bas.cd; // Mod
export const ccol = bas.cco + bas.cl; // col
export const cCol = bas.cCo + bas.cl; // Col
export const creen = bas.cre + bas.cen; // reen
export const clue = bas.clu + bas.ce; // lue Referance to Tron here! :-P
export const cyan = bas.cy + bas.can; // yan
export const cite = bas.cit + bas.ce; // ite
export const cang = bas.can + bas.cg; // ang
export const cange = cang + bas.ce; // ange
export const cANGE = bas.cAN + bas.cGE; // ANGE
export const cost = bas.cos + bas.ct; // ost
export const cular = bas.cul + bas.car; // ular
export const cdrom = bas.cdr + bas.com; // drom
export const cdrome = cdrom + bas.ce; // drome
export const cave = bas.cav + bas.ce; // ave
export const cAve = bas.cAv + bas.ce; // Ave
export const ccli = bas.ccl + bas.ci; // cli
export const cCli = bas.cCl + bas.ci; // Cli
export const cules = bas.cul + bas.ces; // ules
export const cent = bas.cen + bas.ct; // ent
export const centa = cent + bas.ca; // enta
export const cust = bas.cus + bas.ct; // ust
export const ccust = bas.cc + cust; // cust
export const cCust = bas.cC + cust; // Cust
export const cmand = bas.cma + bas.cnd; // mand
export const cMAND = bas.cMA + bas.cND; // MAND
export const clob = bas.clo + bas.cb; // lob
export const cram = bas.cra + bas.cm; // ram
export const crame = cram + bas.ce; // rame
export const cias = bas.cia + bas.cs; // ias
export const cbout = bas.cbo + bas.cut; // bout Bout time we added this one! LOL
export const cseq = bas.cse + bas.cq; // seq
export const cSeq = bas.cSe + bas.cq; // Seq
export const cncer = bas.cnc + bas.cer; // ncer
export const cpri = bas.cpr + bas.ci; // pri
export const cPri = bas.cPr + bas.ci; // Pri
export const cmary = bas.cma + bas.cry; // mary
export const cmit = bas.camai + bas.ct; // mit
export const ctert = bas.cte + bas.crt; // tert
export const cTert = bas.cTe + bas.crt; // Tert
export const ctar = bas.cta + bas.cr; // tar
export const cTar = bas.cTa + bas.cr; // Tar
export const ctart = ctar + bas.ct; // tart
export const cTart = cTar + bas.ct; // Tart poptart....LOL
export const crint = bas.cri + bas.cnt; // rint
export const cgen = bas.cge + bas.cn; // gen
export const cGen = bas.cGe + bas.cn; // Gen
export const cator = bas.cat + bas.cor; // ator
export const cdex = bas.cde + bas.cx; // dex
export const call = bas.cal + bas.cl; // all
export const cAll = bas.cAl + bas.cl; // All
export const cALL = bas.cAL + bas.cL; // ALL
export const creg = bas.cre + bas.cg; // reg
export const cReg = bas.cRe + bas.cg; // Reg
export const ctain = bas.cta + bas.cin; // tain
export const cmet = bas.cme + bas.ct; // met
export const cMet = bas.cMe + bas.ct; // Met
export const cric = bas.cri + bas.cc; // ric
export const cack = bas.cac + bas.ck; // ack
export const cdev = bas.cde + bas.cv; // dev
export const cDev = bas.cDe + bas.cv; // Dev
export const cDEV = bas.cDE + bas.cV; // DEV
export const cprod = bas.cpr + bas.cod; // prod
export const cProd = bas.cPr + bas.cod; // Prod
export const cPROD = bas.cPR + bas.cOD; // PROD
export const cana = bas.can + bas.ca; // ana
export const cAna = bas.cAn + bas.ca; // Ana
export const csis = bas.csi + bas.cs; // sis
export const crage = bas.cra + bas.cge; // rage
export const cear = bas.cea + bas.cr; // ear
export const crgb = bas.crg + bas.cb; // rgb
export const cass = bas.ca + bas.css; // ass
export const cASS = bas.cA + bas.cSS; // ASS
export const cind = bas.cin + bas.cd; // ind
export const clin = bas.cli + bas.cn; // lin
export const cLin = bas.cLi + bas.cn; // Lin
export const ccom = bas.cco + bas.cm; // com
export const cCom = bas.cCo + bas.cm; // Com
export const cCOM = bas.cCO + bas.cM; // COM
export const cubic = bas.cub + bas.cic; // ubic
export const cane = bas.can + bas.ce; // ane
export const curve = bas.cur + bas.cve; // urve
export const cqua = bas.cqu + bas.ca; // qua
export const cQua = bas.cQu + bas.ca; // Qua
export const crtic = bas.crt + bas.cic; // rtic
export const csec = bas.cse + bas.cc; // sec
export const cSec = bas.cSe + bas.cc; // Sec
export const cuni = bas.cun + bas.ci; // uni
export const cUni = bas.cUn + bas.ci; // Uni
export const chyper = bas.chy + cper; // hyper
export const cHyper = bas.cHy + cper; // Hyper
export const cbol = bas.cbo + bas.cl; // bol
export const cbola = cbol + bas.ca; // bola
export const cstant = bas.cst + bas.can + bas.ct; //stant
export const ciso = bas.cis + bas.co; // iso
export const cIso = bas.cIs + bas.co; // Iso
export const ctope = bas.cto + bas.cpe; // tope
export const cphon = bas.cph + bas.con; // phon
export const cPhon = bas.cPh + bas.con; // Phon
export const cics = bas.cic + bas.cs; // ics
export const csha = bas.csh + bas.ca; // sha
export const cSha = bas.cSh + bas.ca; // Sha
export const cail = bas.cai + bas.cl; // ail
export const cAIL = bas.cAI + bas.cL; // AIL
export const clay = bas.cla + bas.cy; // lay
export const cLay = bas.cLa + bas.cy; // Lay
export const csug = bas.csu + bas.cg; // sug
export const cSug = bas.cSu + bas.cg; // Sug
export const cgest = bas.cge + bas.cst; // gest
export const cGest = bas.cGe + bas.cst; // Gest
export const cect = bas.cec + bas.ct; // ect
export const croject = bas.cro + bas.cj + cect; // roject
export const cell = bas.cel + bas.cl; // ell
export const cnion = bas.cni + bas.con; // nion
export const ceta = bas.cet + bas.ca; // eta
export const ccent = bas.cce + bas.cnt; // cent
export const cChi = bas.cCh + bas.ci; // Chi
export const cild = bas.cil + bas.cd; // ild
export const ccolr = bas.cco + bas.clr; // colr
export const cshp = bas.csh + bas.cp; // shp
export const cual = bas.cua + bas.cl; // ual
export const cied = bas.cie + bas.cd; // ied
export const cfied = bas.cf + cied; // fied
export const cified = bas.cif + cied; // ified
export const cments = cment + bas.cs; // ments
export const clop = bas.clo + bas.cp; // lop
export const cLOP = bas.cLO + bas.cP; // LOP
export const cdest = bas.cde + bas.cst; // dest
export const cDest = bas.cDe + bas.cst; // Dest
export const cstor = bas.cst + bas.cor; // stor
export const cStor = bas.cSt + bas.cor; // Stor
export const cequ = bas.ceq + bas.cu; // equ
export const cEqu = bas.cEq + bas.cu; // Equ
export const cque = bas.cqu + bas.ce; // que
export const cQue = bas.cQu + bas.ce; // Que
export const cdup = bas.cdu + bas.cp; // dup
export const cDup = bas.cDu + bas.cp; // Dup
export const ccate = bas.cca + bas.cte; // cate
export const cere = bas.cer + bas.ce; // ere
export const ceas = bas.cea + bas.cs; // eas
export const cease = ceas + bas.ce; // ease
export const crev = bas.cre + bas.cv; // rev
export const cron = bas.cro + bas.cn; // ron
export const colv = bas.col + bas.cv; // olv
export const colve = colv + bas.ce; // olve
export const ceep = bas.cee + bas.cp; // eep
export const ccur = bas.ccu + bas.cr; // cur
export const cCur = bas.cCu + bas.cr; // Cur
export const csive = bas.csi + bas.cve; // sive
export const cexp = bas.cex + bas.cp; // exp
export const cExp = bas.cEx + bas.cp; // Exp
export const could = bas.cou + bas.cld; // ould
export const cike = bas.cik + bas.ce; // ike
export const cful = bas.cfu + bas.cl; // ful
export const cFul = bas.cFu + bas.cl; // Ful
export const cuto = bas.cut + bas.co; // uto
export const copt = bas.cop + bas.ct; // opt
export const cOpt = bas.cOp + bas.ct; // Opt
export const cized = bas.ciz + bas.ced; // ized
export const come = bas.com + bas.ce; // ome
export const clus = bas.clu + bas.cs; // lus
export const clon = bas.clo + bas.cn; // lon
export const cizer = bas.ciz + bas.cer; // izer
export const cern = bas.cer + bas.cn; // ern
export const cerm = bas.cer + bas.cm; // erm
export const comb = bas.com + bas.cb; // omb
export const ceed = bas.cee + bas.cd; // eed
export const coop = bas.coo + bas.cp; // oop
export const cood = bas.coo + bas.cd; // ood
export const cice = bas.cic + bas.ce; // ice
export const ctay = bas.cta + bas.cy; // tay
export const cafe = bas.caf + bas.ce; // afe
export const cult = bas.cul + bas.ct; // ult
export const cULT = bas.cUL + bas.cT; // ULT
export const cault = bas.ca + cult; // ault
export const cAULT = bas.cA + cULT; // AULT
export const clete = bas.cle + bas.cte; // lete
export const cger = bas.cge + bas.cr; // ger
export const cspec = bas.csp + bas.cec; // spec
export const cSpec = bas.cSp + bas.cec; // Spec
export const cfic = bas.cfi + bas.cc; // fic
export const cific = bas.ci + cfic; // ific
export const csuf = bas.csu + bas.cf; // suf
export const cSuf = bas.cSu + bas.cf; // Suf
export const cance = bas.can + bas.cce; // ance
export const cional = bas.cio + cnal; // ional
export const ctional = bas.ct + cional; // tional
export const ctrad = ctra + bas.cd; // trad - ad is some how a special reserved word of some kind.
export const cTrad = cTra + bas.cd; // Trad - ad is some how a special reserved word of some kind.
export const ctrol = bas.ctr + bas.col; // trol
export const cure = bas.cur + bas.ce; // ure
export const csym = bas.csy + bas.cm; // sym
export const cSym = bas.cSy + bas.cm; // Sym
export const cdel = bas.cde + bas.cl; // del
export const cDel = bas.cDe + bas.cl; // Del
export const csert = bas.cs + cert; // sert
export const csub = bas.csu + bas.cb; // sub
export const cSub = bas.cSu + bas.cb; // Sub
export const ctit = bas.cti + bas.ct; // tit
export const cute = bas.cut + bas.ce; // ute
export const ciod = bas.cio + bas.cd; // iod
export const ceak = bas.cea + bas.ck; // eak
export const cnto = bas.cnt + bas.co; // nto
export const cmpt = bas.cmp + bas.ct; // mpt
export const cted = bas.cte + bas.cd; // ted
export const cist = bas.cis + bas.ct; // ist
export const crch = bas.crc + bas.ch; // rch
export const cson = bas.cso + bas.cn; // son
export const cison = bas.ci + cson; // ison
export const cera = bas.cer + bas.ca; // era
export const cfore = bas.cfo + bas.cre; // fore
export const cFORE = bas.cFO + bas.cRE; // FORE
export const cush = bas.cus + bas.ch; // ush
export const cUSH = bas.cUS + bas.cH; // USH
export const cvel = bas.cve + bas.cl; // vel
export const ccess = bas.cce + bas.css; // cess
export const cCESS = bas.cCE + bas.cSS; // CESS
export const cemp = bas.cem + bas.cp;// emp
export const cmas = bas.cma + bas.cs; // mas
export const cMas = bas.cMa + bas.cs; // Mas
export const cpand = bas.cpa + bas.cnd; // pand
export const cook = bas.coo + bas.ck; // ook
export const clse = bas.cls + bas.ce; // lse
export const cify = bas.cif + bas.cy; // ify
export const csup = bas.csu + bas.cp; // sup
export const cSup = bas.cSu + bas.cp; // Sup
export const cplac = bas.cpl + bas.cac; // plac
export const cori = bas.cor + bas.ci; // ori
export const cOri = bas.cOr + bas.ci; // Ori
export const cinal = bas.cin + bas.cal; // inal
export const cpara = bas.cpa + bas.cra; // para
export const cPara = bas.cPa + bas.cra; // Para
export const cnom = bas.cno + bas.cm; // nom
export const cNom = bas.cNo + bas.cm; // Nom
export const cther = bas.cth + bas.cer; // ther
export const cfin = bas.cfi + bas.cn; // fin
export const cFin = bas.cFi + bas.cn; // Fin
export const crgs = bas.crg + bas.cs; // rgs
export const cample = bas.cam + cple; // ample
export const cAMPLE = bas.cAM + cPLE; // AMPLE
export const cruc = bas.cru + bas.cc; // ruc
export const cture = bas.ct + cure; // ture
export const crea = bas.cre + bas.ca; // rea
export const cRea = bas.cRe + bas.ca; // Rea
export const cREA = bas.cRE + bas.cA; // REA
export const ceen = bas.cee + bas.cn; // een
export const core = bas.cor + bas.ce; // ore
export const cstd = bas.cst + bas.cd; // std
export const cStd = bas.cSt + bas.cd; // Std
export const cick = bas.cic + bas.ck; // ick
export const cote = bas.cot + bas.ce; // ote
export const coker = bas.cok + bas.cer; // oker
export const crge = bas.crg + bas.ce; // rge
export const cRGE = bas.cRG + bas.cE; // RGE
export const cerge = bas.ce + crge; // erge
export const cERGE = bas.cE + cRGE; // ERGE
export const cerg = bas.cer + bas.cg; // erg
export const cured = bas.cu + cred; // ured
export const cude = bas.cud + bas.ce; // ude
export const clude = bas.cl + cude; // lude
export const clud = bas.clu + bas.cd; // lud
export const ccau = bas.cca + bas.cu; // cau
export const cCau = bas.cCa + bas.cu; // Cau
export const cght = bas.cgh + bas.ct; // ght
export const cned = bas.cne + bas.cd; // ned
export const cten = bas.cte + bas.cn; // ten // This is also defined in the numeric constants
export const csid = bas.csi + bas.cd; // sid
export const cSid = bas.cSi + bas.cd; // Sid
export const cifies = bas.cif + cies; // ifies
export const cref = bas.cre + bas.cf; // ref
export const cRef = bas.cRe + bas.cf; // Ref
export const clat = bas.cla + bas.ct; // lat
export const crit = bas.cri + bas.ct; // rit
export const cleas = bas.cl + ceas; // leas
export const cchiv = bas.cch + bas.civ; // chiv
export const camp = bas.cam + bas.cp; // amp
export const copy = bas.cop + bas.cy; // opy
export const cccess = bas.ccc + cess; // ccess
export const clyz = bas.cly + bas.cz; // lyz
export const clyze = clyz + bas.ce; // lyze
export const cbra = bas.cbr + bas.ca; // bra
export const cBra = bas.cBr + bas.ca; // Bra
export const cket = bas.cke + bas.ct; // ket
export const clex = bas.cle + bas.cx; // lex
export const cLex = bas.cLe + bas.cx; // Lex
export const ccal = bas.cca + bas.cl; // cal
export const cical = bas.ci + ccal; // ical
export const cicon = bas.ci + ccon; // icon
export const clta = bas.clt + bas.ca; // lta
export const ceaf = bas.cea + bas.cf; // eaf
export const ctity = ctit + bas.cy; // tity
export const cnly = bas.cnl + bas.cy; // nly
export const cuch = bas.cuc + bas.ch; // uch
export const ctan = bas.cta + bas.cn; // tan
export const cstan = bas.cs + ctan; // stan
export const cistan = cist + bas.can; // istan
export const cnistan = bas.cn + cistan; // nistan
export const cnia = bas.cni + bas.ca; // nia
export const cania = bas.ca + cnia; // ania
export const cria = bas.cri + bas.ca; // ria
export const ceria = bas.ce + cria; // eria
export const cgeria = cger + bas.cia; // geria
export const crra = bas.crr + bas.ca; // rra
export const cola = bas.col + bas.ca; // ola
export const cgua = bas.cgu + bas.ca; // gua
export const cina = bas.cin + bas.ca; // ina
export const cenia = bas.cen + bas.cia; // enia
export const clia = bas.cli + bas.ca; // lia
export const calia = bas.ca + clia; // alia
export const crain = bas.cra + bas.cin; // rain
export const cuda = bas.cud + bas.ca; // uda
export const crus = bas.cru + bas.cs; // rus
export const cvia = bas.cvi + bas.ca; // via
export const cndi = bas.cnd + bas.ci; // ndi
export const cdia = bas.cdi + bas.ca; // dia
export const cada = bas.ca + bas.cd + bas.ca; // ada
export const cnada = bas.cn + cada; // nada
export const clic = bas.cli + bas.cc; // lic
export const cblic = bas.cb + clic; // blic
export const cublic = bas.cu + cblic; // ublic
export const cbia = bas.cbi + bas.ca; // bia
export const cmbia = bas.cm + cbia; // mbia
export const cngo = bas.cng + bas.co; // ngo
export const congo = bas.co + cngo; // ongo
export const cica = bas.cic + bas.ca; // ica
export const cnica = bas.cn + cica; // nica
export const cinica = bas.cin + cica; // inica
export const cminica = bas.cm + bas.ci + cnica; // minica
export const cominica = bas.co + cminica; // ominica
export const cdor = bas.cdo + bas.cr; // dor
export const cador = bas.ca + cdor; // ador
export const cnea = bas.cne + bas.ca; // nea
export const cinea = cine + bas.ca; // inea
export const cuinea = bas.cu + cinea; // uinea
export const conia = bas.con + bas.cia; // onia
export const cini = bas.cin + bas.ci; // ini
export const cnce = bas.cnc + bas.ce; // nce
export const cambia = bas.cam + bas.cbi + bas.ca; // ambia
export const cerman = cerm + bas.can; // erman
export const crman = bas.crm + bas.can; // rman
export const cala = bas.cal + bas.ca; // ala
export const citi = bas.cit + bas.ci; // iti
export const celand = bas.cel + cand; // eland
export const csia = bas.csi + bas.ca; // sia
export const cesia = bas.ce + csia; // esia
export const cnesia = bas.cn + cesia; // nesia
export const conesia = bas.co + cnesia; // onesia
export const cran = bas.cra + bas.cn; // ran
export const cdan = bas.cda + bas.cn; // dan
export const cati = bas.cat + bas.ci; // eti
export const ccar = bas.cca + bas.cr; // car
export const cali = bas.cal + bas.ci; // ali
export const cslands = bas.csl + cand + bas.cs; // slands
export const cands = cand + bas.cs; // ands
export const cnds = bas.cnd + bas.cs; // nds
export const cova = bas.cov + bas.ca; // ova
export const cnmar = bas.cnm + bas.car; // nmar
export const cmar = bas.cma + bas.cr; // mar
export const curu = bas.cur + bas.cu; // uru
export const cagua = bas.cag + bas.cua; // agua
export const cragua = bas.cr + cagua; // ragua
export const caragua = cara + bas.cgu + bas.ca; // aragua
export const ciger = bas.cig + bas.cer; // iger
export const corea = core + bas.ca; // orea
export const ckistan = bas.cki + bas.cst + bas.can; // kistan
export const cama = bas.cam + bas.ca; // ama
export const cguay = bas.cgu + bas.cay; // guay
export const cuay = bas.cua + bas.cy; // uay
export const cnes = bas.cne + bas.cs; // nes
export const cgal = bas.cga + bas.cl; // gal
export const cnda = bas.cnd + bas.ca; // nda
export const canda = cand + bas.ca; // anda
export const cles = bas.cle + bas.cs; // les
export const crica = cric + bas.ca; // rica
export const cfrica = bas.cf + crica; // frica
export const cudan = bas.cud + bas.can; // udan
export const crland = bas.crl + cand; // rland
export const cerland = bas.ce + crland; // erland
export const cste = bas.cst + bas.ce; // ste
export const cnga = bas.cng + bas.ca; // nga
export const cates = cate + bas.cs; // ates
export const ctes = bas.cte + bas.cs; // tex
export const cela = bas.cel + bas.ca; // ela
export const cnam = bas.cna + bas.cm; // nam
export const cmen = bas.cme + bas.cn; // men
export const cogen = bas.cog + bas.cen; // ogen
export const crogen = bas.cr + cogen; // rogen
export const cium = bas.ciu + bas.cm; // ium
export const clium = bas.cl + cium; // lium
export const celium = bas.ce + clium; // elium
export const chium = bas.chi + bas.cum; // hium
export const cthium = bas.ct + chium; // thium
export const cllium = bas.cll + bas.ciu + bas.cm; // llium
export const clorine = bas.clo + bas.cri + bas.cne; // lorine
export const crine = bas.cri + bas.cne; // rine
export const corine = cori + bas.cne; // orine
export const cdium = bas.cdi + bas.cum; // dium
export const codium = bas.co + cdium; // odium
export const csium = bas.csi + bas.cum; // sium
export const cesium = bas.ce + csium; // esium
export const cnum = bas.cnu + bas.cm; // num
export const cinum = bas.ci + cnum; // inum
export const cssium = bas.css + bas.ciu + bas.cm; // ssium
export const cassium = cass + bas.ciu + bas.cm; // assium
export const ccium = bas.cc + cium; // cium
export const cndium = cndi + bas.cum; // ndium
export const canium = bas.can + cium; // anium
export const cnium = bas.cni + bas.cum; // nium
export const cadium = bas.ca + bas.cd + bas.ciu + bas.cm; // adium
export const cmium = bas.camai + bas.cum; // mium
export const ckel = bas.cke + bas.cl; // kel
export const callium = call + cium; // allium
export const cnic = bas.cni + bas.cc; // nic
export const cenium = bas.cen + cium; // enium
export const cton = bas.cto + bas.cn; // ton
export const cidium = bas.cid + cium; // idium
export const ctium = bas.ct + cium; // tium
export const crium = bas.cr + cium; // rium
export const conium = bas.con + cium; // onium
export const cbium = bas.cb + cium; // bium
export const cetium = bas.cet + cium; // etium
export const chenium = chen + cium; // henium
export const curium = bas.cur + cium; // urium
export const carium = bas.car + cium; // arium
export const cerium = bas.cer + cium; // erium
export const cymium = bas.cym + cium; // ymium
export const cdymium = bas.cd + cymium; // dymium
export const codymium = bas.co + cdymium; // odymium
export const ceodymium = bas.ceo + cdymium; // eodymium
export const cinium = cini + bas.cum; // inium
export const crbium = bas.crb + cium; // rbium
export const cerbium = bas.ce + crbium; // erbium
export const clum = bas.clu + bas.cm; // clum
export const cuth = bas.cut + bas.ch; // uth
export const cncium = bas.cnc + cium; // ncium
export const ctinium = bas.cti + bas.cni + bas.cum; // tiniium
export const cctinium = bas.cc + ctinium; // ctinium
export const corium = cori + bas.cum; // orium
export const cicium = bas.cic + cium; // icium
export const cvium = bas.cv + cium; // vium
export const covium = bas.co + cvium; // ovium
export const cero = bas.cer + bas.co; // ero
export const colet = bas.col + bas.cet; // olet
export const ciolet = bas.ci + colet; // iolet
export const cster = cste + bas.cr; // ster
export const cnge = bas.cng + bas.ce; // nge
export const cond = bas.con + bas.cd; // ond
export const cmond = bas.cm + cond; // mond
export const clmond = bas.cl + cmond; // lmond
export const canth = bas.can + bas.cth; // anth
export const cranth = bas.cr + canth; // ranth
export const caranth = bas.ca + cranth; // aranth
export const cmaranth = bas.cm + caranth; // maranth
export const cink = bas.cin + bas.ck; // ink
export const crple = bas.crp + bas.cle; // rple
export const curple = bas.cu + crple; // urple
export const cmber = bas.cmb + bas.cer; // mber
export const cber = bas.cbe + bas.cr; // ber
export const cBer = bas.cBe + bas.cr; // Ber
export const cyst = bas.cys + bas.ct; // yst
export const cnze = bas.cnz + bas.ce; // nze
export const conze = bas.co + cnze; // onze
export const cronze = bas.cr + conze; // ronze
export const chsia = bas.chs + bas.cia; // hsia
export const cchsia = bas.cc + chsia; // chsia
export const cuchsia = bas.cu + cchsia; // uchsia
export const cuby = bas.cub + bas.cy; // uby
export const chite = bas.chi + bas.cte; // hite
export const clish = bas.cli + bas.csh; // lish
export const cglish = bas.cg + clish; // glish
export const cnglish = bas.cn + cglish; // nglish
export const ccot = bas.cco + bas.ct; // cot
export const cicot = bas.ci + ccot; // icot
export const cricot = bas.cr + cicot; // ricot
export const cpricot = bas.cp + cricot; // pricot
export const carine = bas.car + cine; // arine
export const coke = bas.cok + bas.ce; // oke
export const cllow = bas.cll + bas.cow; // llow
export const cellow = bas.ce + cllow; // ellow
export const cerine = bas.cer + cine; // erine
export const cgerine = bas.cg + cerine; // gerine
export const cngerine = bas.cn + cgerine; // ngerine
export const cangerine = cange + crine; // angerine
export const curn = bas.cur + bas.cn; // urn
export const colin = bas.col + bas.cin; // olin
export const cado = bas.ca + bas.cdo; // ado
export const czure = bas.czu + bas.cre; // zure
export const cwder = bas.cw + cder; // wder
export const cowder = bas.co + cwder; // owder
export const crey = bas.cre + bas.cy; // rey
export const cige = bas.cig + bas.ce; // ige
export const ceige = bas.ce + cige; // eige
export const ctre = bas.ctr + bas.ce; // tre
export const cstre = bas.cs + ctre; // stre
export const cistre = bas.ci + cstre; // istre
export const cown = bas.cow + bas.cn; // own
export const crown = bas.cr + cown; // rown
export const cemon = cemo + bas.cn; // emon
export const ceet = bas.cee + bas.ct; // eet
export const cweet = bas.cw + ceet; // weet
export const cmer = bas.cme + bas.cr; // mer
export const cmmer = bas.cm + cmer; // mmer
export const cimmer = bas.ci + cmmer; // immer
export const chimmer = bas.ch + cimmer; // himmer
export const cean = bas.cea + bas.cn; // ean
export const clate = clat + bas.ce; // late
export const colate = bas.co + clate; // olate
export const ccolate = bas.cc + colate; // colate
export const cocolate = bas.co + ccolate; // ocolate
export const chocolate = bas.ch + cocolate; // hocolate
export const cfee = bas.cfe + bas.ce; // fee
export const cffee = bas.cf + cfee; // ffee
export const coffee = bas.co + cffee; // offee
export const coral = bas.cor + bas.cal; // oral
export const clive = bas.cli + bas.cve; // live
export const cyola = bas.cyo + bas.cla; // yola
export const cayola = bas.ca + cyola; // ayola
export const crayola = bas.cr + cayola; // rayola
export const csell = bas.cse + bas.cll; // sell
export const cnsell = bas.cn + csell; // nsell
export const cunsell = bas.cu + cnsell; // unsell
export const cNCS = bas.cNC + bas.cS; // NCS
export const ctone = cton + bas.ce; // tone
export const cntone = bas.cn + ctone; // ntone
export const cantone = bas.ca + cntone; // antone
export const cgment = bas.cgm + cent; // gment
export const cigment = bas.ci + cgment; // igment
export const cRYB = bas.cRY + bas.cB; // RYB
export const cheel = bas.che + bas.cel; // heel
export const ceel = bas.cee + bas.cl; // eel
export const cans = bas.can + bas.cs; // ans
export const cire = bas.cir + bas.ce; // ire
export const chire = bas.ch + cire; // hire
export const cphire = bas.cp + chire; // phire
export const cpphire = bas.cp + cphire; // pphire
export const capphire = bas.ca + cpphire; // apphire
export const cnder = bas.cnd + bas.cer; // nder
export const conder = bas.co + cnder; // onder
export const cole = bas.col + bas.ce; // ole
export const cndy = bas.cnd + bas.cy; // ndy
export const candy = bas.ca + cndy; // andy
export const clac = bas.cla + bas.cc; // lac
export const cilac = bas.ci + clac; // ilac
export const coon = bas.coo + bas.cn; // oon
export const croon = bas.cr + coon; // roon
export const caroon = bas.ca + croon; // aroon
export const cgar = bas.cga + bas.cr; // gar
export const cugar = bas.cu + cgar; // ugar
export const cuff = bas.cuf + bas.cf; // uff
export const cundy = cund + bas.cy; // undy
export const cgundy = bas.cg + cundy; // gundy
export const crgundy = bas.cr + cgundy; // rgundy
export const curgundy = bas.cu + crgundy; // urgundy
export const cnna = bas.cnn + bas.ca; // nna
export const cenna = bas.ce + cnna; // enna
export const cienna = bas.ci + cenna; // ienna
export const cntium = bas.cnt + cium; // ntium
export const cantium = bas.ca + cntium; // antium
export const czantium = bas.cz + cantium; // zantium
export const cyzantium = bas.cy + czantium; // yzantium
export const cdet = bas.cde + bas.ct; // det
export const cadet = bas.ca + cdet; // adet
export const cnary = bas.cna + bas.cry; // nary
export const canary = bas.ca + cnary; // anary
export const crmine = bas.cr + cmine; // rmine
export const carmine = bas.ca + crmine; // armine
export const chest = bas.che + bas.cst; // hest
export const cdon = bas.cdo + bas.cn; // don
export const cadon = bas.ca + cdon; // adon
export const cladon = bas.cl + cadon; // ladon
export const celadon = bas.ce + cladon; // eladon
export const cise = bas.cis + bas.ce; // ise
export const crise = bas.cr + cise; // rise
export const cerise = bas.ce + crise; // erise
export const culean = cule + bas.can; // ulean
export const crulean = bas.cr + culean; // rulean
export const cerulean = bas.ce + crulean; // erulean
export const crost = bas.cro + bas.cst; // rost
export const cgne = bas.cgn + bas.ce; // gne
export const cagne = bas.ca + cgne; // agne
export const cpagne = bas.cp + cagne; // pagne
export const cmpagne = bas.cm + cpagne; // mpagne
export const campagne = bas.ca + cmpagne; // ampagne
export const champagne = bas.ch + campagne; // hampagne
export const conal = bas.con + bas.cal; // onal
export const citional = citi + conal; // itional
export const cditional = bas.cd + citional; // ditional
export const caditional = bas.ca + cditional; // aditional
export const craditional = bas.cr + caditional; // raditional
export const ctin = bas.cti + bas.cn; // tin
export const catin = bas.ca + ctin; // atin
export const cpper = bas.cpp + bas.cer; // pper
export const copper = bas.co + cpper; // opper
export const cnny = bas.cnn + bas.cy; // nny
export const corn = bas.cor + bas.cn; // orn
export const cilk = bas.cil + bas.ck; // ilk
export const calt = bas.cal + bas.ct; // alt
export const cbalt = bas.cb + calt; // balt
export const cobalt = bas.co + cbalt; // obalt
export const ctte = bas.ctt + bas.ce; // tte
export const catte = bas.ca + ctte; // atte
export const ceam = bas.cea + bas.cm; // eam
export const cream = bas.cr + ceam; // ream
export const cmson = bas.cms + bas.con; // mson
export const cimson = bas.ci + cmson; // imson
export const crimson = bas.cr + cimson; // rimson
export const cocess = bas.coc + cess; // ocess
export const crocess = bas.cr + cocess; // rocess
export const cape = bas.cap + bas.ce; // ape
export const camen = came + bas.cn; // amen
export const caki = bas.cak + bas.ci; // aki
export const chaki = bas.ch + caki; // haki
export const cava = bas.cav + bas.ca; // ava
export const civer = cive + bas.cr; // iver
export const cnta = bas.cnt + bas.ca; // nta
export const cgenta = bas.cge + cnta; // genta
export const cagenta = bas.ca + cgenta; // agenta
export const chid = bas.chi + bas.cd; // hid
export const cchid = bas.cc + chid; // chid
export const crchid = bas.cr + cchid; // rchid
export const clmon = bas.clm + bas.con; // lmon
export const calmon = bas.ca + clmon; // almon
export const coise = bas.coi + bas.cse; // oise
export const cuoise = bas.cu + coise; // uoise
export const cquoise = bas.cq + cuoise; // quoise
export const crquoise = bas.cr + cquoise; // rquoise
export const curquoise = bas.cu + crquoise; // urquoise
export const cfron = bas.cf + cron; // fron
export const cffron = bas.cf + cfron; // ffron
export const caffron = bas.ca + cffron; // affron
export const ckle = bas.ckl + bas.ce; // kle
export const cupe = bas.cup + bas.ce; // upe
export const caupe = bas.ca + cupe; // aupe
export const cnim = bas.cni + bas.cm; // nim
export const cenim = bas.ce + cnim; // enim
export const cesert = cese + bas.crt; // esert
export const crab = bas.cra + bas.cb; // rab
export const cbony = bas.cbo + bas.cny; // bony
export const cony = bas.con + bas.cy; // ony
export const cant = bas.can + bas.ct; // ant
export const chell = bas.che + bas.cll; // hell
export const cigo = bas.cig + bas.co; // igo
export const cdigo = bas.cd + cigo; // digo
export const cndigo = bas.cn + cdigo; // ndigo
export const cald = bas.cal + bas.cd; // ald
export const crald = bas.cr + cald; // rald
export const cerald = bas.ce + crald; // erald
export const cmerald = bas.cm + cerald; // merald
export const cender = bas.cen + cder; // ender
export const cvender = bas.cv + cender; // vender
export const cavender = bas.ca + cvender; // avender
export const crin = bas.cri + bas.cn; // rin
export const cango = bas.can + bas.cgo; // ango
export const cdango = bas.cd + cango; // dango
export const cndango = bas.cn + cdango; // ndango
export const candango = bas.ca + cndango; // andango
export const cawn = bas.caw + bas.cn; // awn
export const crick = cric + bas.ck; // rick
export const clame = bas.cla + bas.cme; // lame
export const cuve = bas.cuv + bas.ce; // uve
export const cauve = bas.ca + cuve; // auve
export const crry = bas.crr + bas.cy; // rry
export const cerry = bas.ce + crry; // erry
export const cdian = cdia + bas.cn; // dian
export const cidian = bas.ci + cdian; // idian
export const cridian = bas.cr + cidian; // ridian
export const ciridian = bas.ci + cridian; // iridian
export const cllic = bas.cll + bas.cic; // llic
export const callic = bas.ca + cllic; // allic
export const ctallic = bas.ct + callic; // tallic
export const cetallic = bas.ce + ctallic; // etallic
export const cden = bas.cde + bas.cn; // den
export const clden = bas.cl + cden; // lden
export const colden = bas.co + clden; // olden
export const cpple = bas.cpp + bas.cle; // pple
export const czard = bas.cza + bas.crd; // zard
export const cheen = bas.che + bas.cen; // heen
export const cllo = bas.cll + bas.co; // llo
export const cetal = bas.cet + bas.cal; // etal
export const ctal = bas.cta + bas.cl; // tal
export const cuin = bas.cui + bas.cn; // uin
export const cope = bas.cop + bas.ce; // ope
export const cpace = bas.cpa + bas.cce; // pace
export const cris = bas.cri + bas.cs; // ris
export const cade = bas.ca + bas.cde; // ade
export const cobe = bas.cob + bas.ce; // obe
export const cobi = bas.cob + bas.ci; // obi
export const ccha = bas.cch + bas.ca; // cha
export const culi = bas.cul + bas.ci; // uli
export const cloral = bas.clo + cral; // loral
export const cier = bas.cie + bas.cr; // ier
export const cnkle = bas.cnk + bas.cle; // nkle
export const cinkle = bas.ci + cnkle; // inkle
export const cnen = bas.cne + bas.cn; // nen
export const cinen = bas.ci + cnen; // inen
export const cgan = bas.cga + bas.cn; // gan
export const cvid = bas.cvi + bas.cd; // vid
export const civid = bas.ci + cvid; // ivid
export const cake = bas.cak + bas.ce; // ake
export const caze = bas.caz + bas.ce; // aze
export const cany = bas.can + bas.cy; // any
export const caize = bas.cai + bas.cze; // aize
export const ctee = bas.cte + bas.ce; // tee
export const carin = bas.car + bas.cin; // arin
export const ctis = bas.cti + bas.cs; // tis
export const cras = bas.cra + bas.cs; // ras
export const celon = bas.cel + bas.con; // elon
export const caro = bas.car + bas.co; // aro
export const coss = bas.cos + bas.cs; // oss
export const cdow = bas.cdo + bas.cw; // dow
export const cadow = bas.ca + cdow; // adow
export const ctic = bas.cti + bas.cc; // tic
export const cstic = bas.cs + ctic; // stic
export const cystic = bas.cy + cstic; // ystic
export const crot = bas.cro + bas.ct; // rot
export const crrot = bas.cr + crot; // rrot
export const carrot = bas.ca + crrot; // arrot
export const clver = bas.clv + bas.cer; // lver
export const cilver = bas.ci + clver; // ilver
export const clood = bas.clo + bas.cod; // lood
export const chip = bas.chi + bas.cp; // hip
export const cach = bas.cac + bas.ch; // ach
export const ceach = bas.ce + cach; // each
export const cree = bas.cre + bas.ce; // ree
export const chio = bas.chi + bas.co; // hio
export const cower = bas.cow + bas.cer; // ower
export const cwer = bas.cwe + bas.cr; // wer
export const cstar = bas.cst + bas.car; // star
export const cune = bas.cun + bas.ce; // une
export const ckin = bas.cki + bas.cn; // kin
export const csty = bas.cst + bas.cy; // sty
export const cavy = bas.cav + bas.cy; // avy
export const cazz = bas.caz + bas.cz; // azz
export const creus = bas.cre + bas.cus; // reus
export const ceus = bas.ceu + bas.cs; // eus
export const cbon = bas.cbo + bas.cn; // bon
export const cdder = bas.cdd + bas.cer; // dder
export const cadder = bas.ca + cdder; // adder
export const cale = bas.cal + bas.ce; // ale
export const cark = bas.car + bas.ck; // ark
export const cpia = bas.cpi + bas.ca; // pia
export const chadow = bas.cha + cdow; // hadow
export const cock = bas.coc + bas.ck; // ock
export const ctten = bas.ctt + bas.cen; // tten
export const ceal = bas.cea + bas.cl; // eal
export const ctraw = ctra + bas.cw; // traw
export const craw = bas.cra + bas.cw; // raw
export const ctle = bas.ctl + bas.ce; // tle
export const cstle = bas.cs + ctle; // stle
export const crest = cres + bas.ct; // rest
export const corest = bas.co + crest; // orest
export const ccan = bas.cca + bas.cn; // can
export const cuscan = bas.cus + ccan; // uscan
export const clla = bas.cll + bas.ca; // lla
export const cilla = bas.ci + clla; // illa
export const cnilla = bas.cn + cilla; // nilla
export const canilla = bas.ca + cnilla; // anilla
export const cilion = cili + bas.con; // ilion
export const cmilion = bas.cm + cilion; // milion
export const crmilion = bas.cr + cmilion; // rmilion
export const cermilion = bas.ce + crmilion; // ermilion
export const chine = bas.chi + bas.cne; // hine
export const comp = bas.com + bas.cp; // omp
export const cclr = bas.ccl + bas.cr; // clr
export const cded = bas.cde + bas.cd; // ded
export const cbing = bas.cb + cing; // bing
export const ceth = bas.cet + bas.ch; // eth
export const clang = bas.cl + cang; // lang
export const cLang = bas.cL + cang; // Lang
export const cuage = bas.cu + cage; // uage
export const cries = bas.cr + cies; // ries
export const ciss = bas.cis + bas.cs; // iss
export const cinc = bas.cin + bas.cc; // inc
export const cInc = bas.cIn + bas.cc; // Inc
export const cmum = bas.cmu + bas.cm; // mum
export const cimum = bas.ci + cmum; // imum
export const crix = bas.cri + bas.cx; // rix
export const cled = bas.cle + bas.cd; // led
export const cLed = bas.cLe + bas.cd; // Led
export const cLED = bas.cLE + bas.cD; // LED
export const cling = clin + bas.cg; // ling
export const cler = bas.cle + bas.cr; // ler
export const ching = bas.ch + cing; // hing
export const cwin = bas.cwi + bas.cn; // win
export const ctty = bas.ctt + bas.cy; // tty
export const cbet = bas.cbe + bas.ct; // bet
export const csal = bas.csa + bas.cl; // sal
export const cSal = bas.cSa + bas.cl; // Sal

// export default {
//   // Reusable Grammer
//   [bas.cc + chree]: chree, // hree
//   [bas.cc + cour]: cour, // our
//   [bas.cc + cive]: cive, // ive
//   [bas.cc + ceven]: ceven, // even
//   [bas.cc + cight]: cight, // ight
//   [bas.cc + cine]: cine, // ine
//   [bas.cc + cleven]: cleven, // leven
//   [bas.cc + cwelve]: cwelve, // welve
//   [bas.cc + cteen]: cteen, // teen
//   [bas.cc + chir]: chir, // hir
//   [bas.cc + cigh]: cigh, // igh
//   [bas.cc + cwenty]: cwenty, // wenty
//   [bas.cc + chirty]: chirty, // hirty
//   [bas.cc + cifty]: cifty, // ifty
//   [bas.cc + cred]: cred, // red
//   [bas.cc + cgreen]: cgreen, // green
//   [bas.cc + cblue]: cblue, // blue
//   [bas.cc + cund]: cund, // und
//   [bas.cc + cundred]: cundred, // undred
//   [bas.cc + cand]: cand, // and
//   [bas.cc + csand]: csand, // sand
//   [bas.cc + chousand]: chousand, // housand
//   [bas.cc + cion]: cion, // ion
//   [bas.cc + cION]: cION, // ION
//   [bas.cc + csion]: csion, // sion
//   [bas.cc + cill]: cill, // ill
//   [bas.cc + cillion]: cillion, // illion
//   [bas.cc + crue]: crue, // rue
//   [bas.cc + calse]: calse, // alse
//   [bas.cc + ction]: ction, // tion
//   [bas.cc + cTION]: cTION, // TION
//   [bas.cc + cction]: cction, // ction
//   [bas.cc + cmation]: cmation, // mation
//   [bas.cc + cition]: cition, // ition
//   [bas.cc + cITION]: cITION, // ITION
//   [bas.cc + cage]: cage, // age
//   [bas.cc + cest]: cest, // est
//   [bas.cc + char]: char, // har
//   [bas.cc + cHar]: cHar, // Har
//   [bas.cc + cHAR]: cHAR, // HAR
//   [bas.cc + chare]: chare, // hare
//   [bas.cc + c_lass]: c_lass, // lass
//   [bas.cc + ctemp]: ctemp, // temp
//   [bas.cc + chref]: chref, // href
//   [bas.cc + cABC]: cABC, // ABC
//   [bas.cc + came]: came, // ame
//   [bas.cc + cile]: cile, // ile
//   [bas.cc + cext]: cext, // ext
//   [bas.cc + cExt]: cExt, // Ext
//   [bas.cc + clpha]: clpha, // lpha
//   [bas.cc + ccon]: ccon, // con
//   [bas.cc + cCon]: cCon, // Con
//   [bas.cc + cable]: cable, // able
//   [bas.cc + calid]: calid, // alid
//   [bas.cc + cALID]: cALID, // ALID
//   [bas.cc + cing]: cing, // ing
//   [bas.cc + cING]: cING, // ING
//   [bas.cc + ctring]: ctring, // tring
//   [bas.cc + cbject]: cbject, // bject
//   [bas.cc + cata]: cata, // ata
//   [bas.cc + cATA]: cATA, // ATA
//   [bas.cc + cMac]: cMac, // Mac
//   [bas.cc + cpre]: cpre, // pre
//   [bas.cc + cPre]: cPre, // Pre
//   [bas.cc + cPRE]: cPRE, // PRE
//   [bas.cc + colid]: colid, // olid
//   [bas.cc + cync]: cync, // ync
//   [bas.cc + cynch]: cynch, // ynch
//   [bas.cc + celete]: celete, // elete
//   [bas.cc + cnner]: cnner, // nner
//   [bas.cc + click]: click, // lick
//   [bas.cc + cctr]: cctr, // ctr
//   [bas.cc + cctrl]: cctrl, // ctrl
//   [bas.cc + cype]: cype, // ype
//   [bas.cc + ceql]: ceql, // eql
//   [bas.cc + cEql]: cEql, // Eql
//   [bas.cc + cemb]: cemb, // emb
//   [bas.cc + cOperat]: cOperat, // Operat
//   [bas.cc + cili]: cili, // ili
//   [bas.cc + cility]: cility, // ility
//   [bas.cc + cibility]: cibility, // ibility
//   [bas.cc + cisibility]: cisibility, // isibility
//   [bas.cc + cith]: cith, // ith
//   [bas.cc + cjth]: cjth, // jth
//   [bas.cc + ckth]: ckth, // kth
//   [bas.cc + crent]: crent, // rent
//   [bas.cc + carent]: carent, // arent
//   [bas.cc + ctor]: ctor, // tor
//   [bas.cc + cctor]: cctor, // ctor
//   [bas.cc + celector]: celector, // elector
//   [bas.cc + coolean]: coolean, // oolean
//   [bas.cc + check]: check, // heck
//   [bas.cc + child]: child, // hild
//   [bas.cc + cibling]: cibling, // ibling
//   [bas.cc + cttribute]: cttribute, //ttribute
//   [bas.cc + cttributes]: cttributes, // ttributes
//   [bas.cc + cisabled]: cisabled, // isabled
//   [bas.cc + cilter]: cilter, // ilter
//   [bas.cc + code]: code, // ode
//   [bas.cc + cide]: cide, // ide
//   [bas.cc + cuary]: cuary, // uary
//   [bas.cc + cies]: cies, // ies
//   [bas.cc + ctive]: ctive, // tive
//   [bas.cc + cate]: cate, // ate
//   [bas.cc + cdate]: cdate, // date
//   [bas.cc + cter]: cter, // ter
//   [bas.cc + cTER]: cTER, // TER
//   [bas.cc + cment]: cment, // ment
//   [bas.cc + cMENT]: cMENT, // MENT
//   [bas.cc + cime]: cime, // ime
//   [bas.cc + cinter]: cinter, // inter
//   [bas.cc + cInter]: cInter, // Inter
//   [bas.cc + cmed]: cmed, // med
//   [bas.cc + cath]: cath, // ath
//   [bas.cc + cvar]: cvar, // var
//   [bas.cc + cVar]: cVar, // Var
//   [bas.cc + ciew]: ciew, // iew
//   [bas.cc + cete]: cete, // ete
//   [bas.cc + cace]: cace, // ace
//   [bas.cc + cder]: cder, // der
//   [bas.cc + ccor]: ccor, // cor
//   [bas.cc + cCor]: cCor, // Cor
//   [bas.cc + ccore]: ccore, // core
//   [bas.cc + cert]: cert, // ert
//   ['c_ase']: c_ase, // ase 'case' is a reserved word
//   ['c_ASE']: c_ASE, // ASE
//   [bas.cc + cunt]: cunt, // unt
//   [bas.cc + caft]: caft, // aft
//   [bas.cc + cops]: cops, // ops
//   [bas.cc + cOPS]: cOPS, // OPS
//   [bas.cc + cinv]: cinv, // inv
//   [bas.cc + cInv]: cInv, // Inv
//   [bas.cc + cral]: cral, // ral
//   [bas.cc + cara]: cara, // ara
//   [bas.cc + cpro]: cpro, // pro
//   [bas.cc + cPro]: cPro, // Pro
//   [bas.cc + cPRO]: cPRO, // PRO
//   [bas.cc + cino]: cino, // ino
//   [bas.cc + cese]: cese, // ese
//   [bas.cc + cish]: cish, // ish
//   [bas.cc + ccel]: ccel, // cel
//   [bas.cc + cCel]: cCel, // Cel
//   [bas.cc + cian]: cian, // ian
//   [bas.cc + cous]: cous, // ous
//   [bas.cc + ceous]: ceous, // eous
//   [bas.cc + cung]: cung, // ung
//   [bas.cc + cary]: cary, // ary
//   [bas.cc + ciary]: ciary, // iary
//   [bas.cc + cMis]: cMis, // Mis
//   [bas.cc + cmis]: cmis, // mis
//   [bas.cc + cource]: cource, // ource
//   [bas.cc + cmin]: cmin, // min
//   [bas.cc + cMin]: cMin, // Min
//   [bas.cc + cmax]: cmax, // max
//   [bas.cc + cMax]: cMax, // Max
//   [bas.cc + cmine]: cmine, // mine
//   //b.cet + bas.cer + bas.cmi + bas.cne; //cmine;
//   [bas.cc + cetermine]: cetermine, // etermine
//   [bas.cc + cingle]: cingle, // ingle
//   [bas.cc + clace]: clace, // lace
//   [bas.cc + ceplace]: ceplace, // eplace
//   [bas.cc + clean]: clean, // lean
//   [bas.cc + cver]: cver, // ver
//   [bas.cc + cVer]: cVer, // Ver
//   [bas.cc + cvert]: cvert, // vert
//   [bas.cc + convert]: convert, // onvert
//   [bas.cc + crate]: crate, // crate
//   [bas.cc + cenerate]: cenerate, // enerate
//   [bas.cc + cdom]: cdom, // dom
//   [bas.cc + candom]: candom, // andom
//   [bas.cc + create]: create, // reate
//   [bas.cc + carn]: carn, // arn
//   [bas.cc + carning]: carning, // arning
//   [bas.cc + crror]: crror, // rror
//   [bas.cc + cRROR]: cRROR, // RROR
//   [bas.cc + card]: card, // ard
//   [bas.cc + cose]: cose, // ose
//   [bas.cc + cray]: cray, // ray
//   [bas.cc + cmel]: cmel, // mel
//   [bas.cc + cound]: cound, // ound
//   [bas.cc + cdot]: cdot, // dot
//   [bas.cc + cDot]: cDot, // Dot
//   [bas.cc + cart]: cart, // art
//   [bas.cc + cize]: cize, // ize
//   [bas.cc + cmal]: cmal, // mal
//   [bas.cc + cormal]: cormal, // ormal
//   [bas.cc + cegree]: cegree, // egree
//   [bas.cc + ccir]: ccir, // cir
//   [bas.cc + cCir]: cCir, // Cir
//   [bas.cc + ccle]: ccle, // cle
//   [bas.cc + care]: care, // are
//   [bas.cc + cquare]: cquare, // quare
//   [bas.cc + cgle]: cgle, // gle
//   [bas.cc + ctri]: ctri, // tri
//   [bas.cc + cTri]: cTri, // Tri
//   [bas.cc + crec]: crec, // rec
//   [bas.cc + cRec]: cRec, // Rec
//   [bas.cc + crect]: crect, // rect
//   [bas.cc + cRect]: cRect, // Rect
//   [bas.cc + coct]: coct, // oct
//   [bas.cc + cOct]: cOct, // Oct
//   [bas.cc + cgon]: cgon, // gon
//   [bas.cc + chex]: chex, // hex
//   [bas.cc + cHex]: cHex, // Hex
//   [bas.cc + chep]: chep, // hep
//   [bas.cc + cHep]: cHep, // Hep
//   [bas.cc + cnon]: cnon, // non
//   [bas.cc + cNon]: cNon, // Non
//   [bas.cc + crap]: crap, // rap
//   [bas.cc + czoid]: czoid, // zoid
//   [bas.cc + cfra]: cfra, // fra
//   [bas.cc + cFra]: cFra, // Fra
//   [bas.cc + ctra]: ctra, // tra
//   [bas.cc + cTra]: cTra, // Tra
//   [bas.cc + ctrans]: ctrans, // trans
//   [bas.cc + cTrans]: cTrans, // Trans
//   [bas.cc + cint]: cint, // int
//   [bas.cc + cloc]: cloc, // loc
//   [bas.cc + cLoc]: cLoc, // Loc
//   [bas.cc + cation]: cation, // ation
//   [bas.cc + cort]: cort, // ort
//   [bas.cc + csim]: csim, // sim
//   [bas.cc + cSim]: cSim, // Sim
//   [bas.cc + cplify]: cplify, // plify
//   [bas.cc + csol]: csol, // sol
//   [bas.cc + ccomp]: ccomp, // comp
//   [bas.cc + cComp]: cComp, // Comp
//   [bas.cc + cideo]: cideo, // ideo
//   [bas.cc + cnteger]: cnteger, // nteger
//   [bas.cc + cloat]: cloat, // loat
//   [bas.cc + cong]: cong, // ong
//   [bas.cc + chort]: chort, // hort
//   [bas.cc + cble]: cble, // ble
//   [bas.cc + couble]: couble, // ouble
//   [bas.cc + cduct]: cduct, // duct
//   [bas.cc + cgate]: cgate, // gate
//   [bas.cc + cggregate]: cggregate, // ggregate
//   [bas.cc + cDiff]: cDiff, // Diff
//   [bas.cc + cenc]: cenc, // enc
//   [bas.cc + cence]: cence, // ence
//   [bas.cc + cain]: cain, // ain
//   [bas.cc + ctch]: ctch, // tch
//   [bas.cc + cween]: cween, // ween
//   [bas.cc + cord]: cord, // ord
//   [bas.cc + cmap]: cmap, // map
//   [bas.cc + cMap]: cMap, // Map
//   [bas.cc + cess]: cess, // ess
//   [bas.cc + cres]: cres, // res
//   [bas.cc + cRes]: cRes, // Res
//   [bas.cc + cress]: cress, // ress
//   [bas.cc + ceat]: ceat, // eat
//   [bas.cc + chen]: chen, // hen
//   [bas.cc + chan]: chan, // han
//   [bas.cc + clica]: clica, // lica
//   [bas.cc + cLICA]: cLICA, // LICA
//   [bas.cc + capp]: capp, // app
//   [bas.cc + cApp]: cApp, // App
//   [bas.cc + cAPP]: cAPP, // APP
//   [bas.cc + coot]: coot, // oot
//   [bas.cc + crse]: crse, // rse
//   [bas.cc + cRSE]: cRSE, // RSE
//   [bas.cc + cars]: cars, // ars
//   [bas.cc + carse]: carse, // arse
//   [bas.cc + cARSE]: cARSE, // ARSE
//   [bas.cc + cwap]: cwap, // wap
//   [bas.cc + cward]: cward, // ward
//   [bas.cc + clash]: clash, // lash
//   [bas.cc + cENV]: cENV, // ENV
//   [bas.cc + cavigate]: cavigate, // avigate
//   [bas.cc + cness]: cness, // ness
//   [bas.cc + cNESS]: cNESS, // NESS
//   [bas.cc + cusiness]: cusiness, // usiness
//   [bas.cc + cule]: cule, // ule
//   [bas.cc + cait]: cait, // ait
//   [bas.cc + cesh]: cesh, // esh
//   [bas.cc + cval]: cval, // val
//   [bas.cc + cemo]: cemo, // emo
//   [bas.cc + cmon]: cmon, // mon
//   [bas.cc + common]: common, // ommon
//   [bas.cc + clti]: clti, // lti
//   [bas.cc + cmulti]: cmulti, // multi
//   [bas.cc + cMulti]: cMulti, // Multi
//   [bas.cc + cple]: cple, // ple
//   [bas.cc + cPLE]: cPLE, // PLE
//   [bas.cc + cnal]: cnal, // nal
//   [bas.cc + cexe]: cexe, // exe
//   [bas.cc + cExe]: cExe, // Exe
//   [bas.cc + cper]: cper, // per
//   [bas.cc + cPer]: cPer, // Per
//   [bas.cc + casic]: casic, // asic
//   [bas.cc + cven]: cven, // ven
//   [bas.cc + cVEN]: cVEN, // VEN
//   [bas.cc + cvent]: cvent, // vent,
//   [bas.cc + carg]: carg, // arg
//   [bas.cc + cArg]: cArg, // Arg
//   [bas.cc + crive]: crive, // rive
//   [bas.cc + cloy]: cloy, // loy
//   [bas.cc + cLOY]: cLOY, // LOY
//   [bas.cc + cumber]: cumber, // umber
//   [bas.cc + ccond]: ccond, // cond
//   [bas.cc + cieth]: cieth, // ieth
//   [bas.cc + ctieth]: ctieth, // tieth
//   [bas.cc + cont]: cont, // ont
//   [bas.cc + cull]: cull, // ull
//   [bas.cc + cmod]: cmod, // mod
//   [bas.cc + cMod]: cMod, // Mod
//   [bas.cc + ccol]: ccol, // col
//   [bas.cc + cCol]: cCol, // Col
//   [bas.cc + creen]: creen, // reen
//   [bas.cc + clue]: clue, // lue Referance to Tron here! :-P
//   [bas.cc + cyan]: cyan, // yan
//   [bas.cc + cite]: cite, // ite
//   [bas.cc + cang]: cang, // ang
//   [bas.cc + cange]: cange, // ange
//   [bas.cc + cANGE]: cANGE, // ANGE
//   [bas.cc + cost]: cost, // ost
//   [bas.cc + cular]: cular, // ular
//   [bas.cc + cdrom]: cdrom, // drom
//   [bas.cc + cdrome]: cdrome, // drome
//   [bas.cc + cave]: cave, // ave
//   [bas.cc + cAve]: cAve, // Ave
//   [bas.cc + ccli]: ccli, // cli
//   [bas.cc + cCli]: cCli, // Cli
//   [bas.cc + cules]: cules, // ules
//   [bas.cc + cent]: cent, // ent
//   [bas.cc + centa]: centa, // enta
//   [bas.cc + cust]: cust, // ust
//   [bas.cc + ccust]: ccust, // cust
//   [bas.cc + cCust]: cCust, // Cust
//   [bas.cc + cmand]: cmand, // mand
//   [bas.cc + cMAND]: cMAND, // MAND
//   [bas.cc + clob]: clob, // lob
//   [bas.cc + cram]: cram, // ram
//   [bas.cc + crame]: crame, // rame
//   [bas.cc + cias]: cias, // ias
//   [bas.cc + cbout]: cbout, // bout Bout time we added this one! LOL
//   [bas.cc + cseq]: cseq, // seq
//   [bas.cc + cSeq]: cSeq, // Seq
//   [bas.cc + cncer]: cncer, // ncer
//   [bas.cc + cpri]: cpri, // pri
//   [bas.cc + cPri]: cPri, // Pri
//   [bas.cc + cmary]: cmary, // mary
//   [bas.cc + cmit]: cmit, // mit
//   [bas.cc + ctert]: ctert, // tert
//   [bas.cc + cTert]: cTert, // Tert
//   [bas.cc + ctar]: ctar, // tar
//   [bas.cc + cTar]: cTar, // Tar
//   [bas.cc + ctart]: ctart, // tart
//   [bas.cc + cTart]: cTart, // Tart poptart....LOL
//   [bas.cc + crint]: crint, // rint
//   [bas.cc + cgen]: cgen, // gen
//   [bas.cc + cGen]: cGen, // Gen
//   [bas.cc + cator]: cator, // ator
//   [bas.cc + cdex]: cdex, // dex
//   [bas.cc + call]: call, // all
//   [bas.cc + cAll]: cAll, // All
//   [bas.cc + cALL]: cALL, // ALL
//   [bas.cc + creg]: creg, // reg
//   [bas.cc + cReg]: cReg, // Reg
//   [bas.cc + ctain]: ctain, // tain
//   [bas.cc + cmet]: cmet, // met
//   [bas.cc + cMet]: cMet, // Met
//   [bas.cc + cric]: cric, // ric
//   [bas.cc + cack]: cack, // ack
//   [bas.cc + cdev]: cdev, // dev
//   [bas.cc + cDev]: cDev, // Dev
//   [bas.cc + cDEV]: cDEV, // DEV
//   [bas.cc + cprod]: cprod, // prod
//   [bas.cc + cProd]: cProd, // Prod
//   [bas.cc + cPROD]: cPROD, // PROD
//   [bas.cc + cana]: cana, // ana
//   [bas.cc + cAna]: cAna, // Ana
//   [bas.cc + csis]: csis, // sis
//   [bas.cc + crage]: crage, // rage
//   [bas.cc + cear]: cear, // ear
//   [bas.cc + crgb]: crgb, // rgb
//   [bas.cc + cass]: cass, // ass
//   [bas.cc + cASS]: cASS, // ASS
//   [bas.cc + cind]: cind, // ind
//   [bas.cc + clin]: clin, // lin
//   [bas.cc + cLin]: cLin, // Lin
//   [bas.cc + ccom]: ccom, // com
//   [bas.cc + cCom]: cCom, // Com
//   [bas.cc + cCOM]: cCOM, // COM
//   [bas.cc + cubic]: cubic, // ubic
//   [bas.cc + cane]: cane, // ane
//   [bas.cc + curve]: curve, // urve
//   [bas.cc + cqua]: cqua, // qua
//   [bas.cc + cQua]: cQua, // Qua
//   [bas.cc + crtic]: crtic, // rtic
//   [bas.cc + csec]: csec, // sec
//   [bas.cc + cSec]: cSec, // Sec
//   [bas.cc + cuni]: cuni, // uni
//   [bas.cc + cUni]: cUni, // Uni
//   [bas.cc + chyper]: chyper, // hyper
//   [bas.cc + cHyper]: cHyper, // Hyper
//   [bas.cc + cbol]: cbol, // bol
//   [bas.cc + cbola]: cbola, // bola
//   [bas.cc + cstant]: cstant, //stant
//   [bas.cc + ciso]: ciso, // iso
//   [bas.cc + cIso]: cIso, // Iso
//   [bas.cc + ctope]: ctope, // tope
//   [bas.cc + cphon]: cphon, // phon
//   [bas.cc + cPhon]: cPhon, // Phon
//   [bas.cc + cics]: cics, // ics
//   [bas.cc + csha]: csha, // sha
//   [bas.cc + cSha]: cSha, // Sha
//   [bas.cc + cail]: cail, // ail
//   [bas.cc + cAIL]: cAIL, // AIL
//   [bas.cc + clay]: clay, // lay
//   [bas.cc + cLay]: cLay, // Lay
//   [bas.cc + csug]: csug, // sug
//   [bas.cc + cSug]: cSug, // Sug
//   [bas.cc + cgest]: cgest, // gest
//   [bas.cc + cGest]: cGest, // Gest
//   [bas.cc + cect]: cect, // ect
//   [bas.cc + croject]: croject, // roject
//   [bas.cc + cell]: cell, // ell
//   [bas.cc + cnion]: cnion, // nion
//   [bas.cc + ceta]: ceta, // eta
//   [bas.cc + ccent]: ccent, // cent
//   [bas.cc + cChi]: cChi, // Chi
//   [bas.cc + cild]: cild, // ild
//   [bas.cc + ccolr]: ccolr, // colr
//   [bas.cc + cshp]: cshp, // shp
//   [bas.cc + cual]: cual, // ual
//   [bas.cc + cied]: cied, // ied
//   [bas.cc + cfied]: cfied, // fied
//   [bas.cc + cified]: cified, // ified
//   [bas.cc + cments]: cments, // ments
//   [bas.cc + clop]: clop, // lop
//   [bas.cc + cLOP]: cLOP, // LOP
//   [bas.cc + cdest]: cdest, // dest
//   [bas.cc + cDest]: cDest, // Dest
//   [bas.cc + cstor]: cstor, // stor
//   [bas.cc + cStor]: cStor, // Stor
//   [bas.cc + cequ]: cequ, // equ
//   [bas.cc + cEqu]: cEqu, // Equ
//   [bas.cc + cque]: cque, // que
//   [bas.cc + cQue]: cQue, // Que
//   [bas.cc + cdup]: cdup, // dup
//   [bas.cc + cDup]: cDup, // Dup
//   [bas.cc + ccate]: ccate, // cate
//   [bas.cc + cere]: cere, // ere
//   [bas.cc + ceas]: ceas, // eas
//   [bas.cc + cease]: cease, // ease
//   [bas.cc + crev]: crev, // rev
//   [bas.cc + cron]: cron, // ron
//   [bas.cc + colv]: colv, // olv
//   [bas.cc + colve]: colve, // olve
//   [bas.cc + ceep]: ceep, // eep
//   [bas.cc + ccur]: ccur, // cur
//   [bas.cc + cCur]: cCur, // Cur
//   [bas.cc + csive]: csive, // sive
//   [bas.cc + cexp]: cexp, // exp
//   [bas.cc + cExp]: cExp, // Exp
//   [bas.cc + could]: could, // ould
//   [bas.cc + cike]: cike, // ike
//   [bas.cc + cful]: cful, // ful
//   [bas.cc + cFul]: cFul, // Ful
//   [bas.cc + cuto]: cuto, // uto
//   [bas.cc + copt]: copt, // opt
//   [bas.cc + cOpt]: cOpt, // Opt
//   [bas.cc + cized]: cized, // ized
//   [bas.cc + come]: come, // ome
//   [bas.cc + clus]: clus, // lus
//   [bas.cc + clon]: clon, // lon
//   [bas.cc + cizer]: cizer, // izer
//   [bas.cc + cern]: cern, // ern
//   [bas.cc + cerm]: cerm, // erm
//   [bas.cc + comb]: comb, // omb
//   [bas.cc + ceed]: ceed, // eed
//   [bas.cc + coop]: coop, // oop
//   [bas.cc + cood]: cood, // ood
//   [bas.cc + cice]: cice, // ice
//   [bas.cc + ctay]: ctay, // tay
//   [bas.cc + cafe]: cafe, // afe
//   [bas.cc + cult]: cult, // ult
//   [bas.cc + cULT]: cULT, // ULT
//   [bas.cc + cault]: cault, // ault
//   [bas.cc + cAULT]: cAULT, // AULT
//   [bas.cc + clete]: clete, // lete
//   [bas.cc + cger]: cger, // ger
//   [bas.cc + cspec]: cspec, // spec
//   [bas.cc + cSpec]: cSpec, // Spec
//   [bas.cc + cfic]: cfic, // fic
//   [bas.cc + cific]: cific, // ific
//   [bas.cc + csuf]: csuf, // suf
//   [bas.cc + cSuf]: cSuf, // Suf
//   [bas.cc + cance]: cance, // ance
//   [bas.cc + cional]: cional, // ional
//   [bas.cc + ctional]: ctional, // tional
//   [bas.cc + ctrad]: ctrad, // trad - ad is some how a special reserved word of some kind.
//   [bas.cc + cTrad]: cTrad, // Trad - ad is some how a special reserved word of some kind.
//   [bas.cc + ctrol]: ctrol, // trol
//   [bas.cc + cure]: cure, // ure
//   [bas.cc + csym]: csym, // sym
//   [bas.cc + cSym]: cSym, // Sym
//   [bas.cc + cdel]: cdel, // del
//   [bas.cc + cDel]: cDel, // Del
//   [bas.cc + csert]: csert, // sert
//   [bas.cc + csub]: csub, // sub
//   [bas.cc + cSub]: cSub, // Sub
//   [bas.cc + ctit]: ctit, // tit
//   [bas.cc + cute]: cute, // ute
//   [bas.cc + ciod]: ciod, // iod
//   [bas.cc + ceak]: ceak, // eak
//   [bas.cc + cnto]: cnto, // nto
//   [bas.cc + cmpt]: cmpt, // mpt
//   [bas.cc + cted]: cted, // ted
//   [bas.cc + cist]: cist, // ist
//   [bas.cc + crch]: crch, // rch
//   [bas.cc + cson]: cson, // son
//   [bas.cc + cison]: cison, // ison
//   [bas.cc + cera]: cera, // era
//   [bas.cc + cfore]: cfore, // fore
//   [bas.cc + cFORE]: cFORE, // FORE
//   [bas.cc + cush]: cush, // ush
//   [bas.cc + cUSH]: cUSH, // USH
//   [bas.cc + cvel]: cvel, // vel
//   [bas.cc + ccess]: ccess, // cess
//   [bas.cc + cCESS]: cCESS, // CESS
//   [bas.cc + cemp]: cemp, // emp
//   [bas.cc + cmas]: cmas, // mas
//   [bas.cc + cMas]: cMas, // Mas
//   [bas.cc + cpand]: cpand, // pand
//   [bas.cc + cook]: cook, // ook
//   [bas.cc + clse]: clse, // lse
//   [bas.cc + cify]: cify, // ify
//   [bas.cc + csup]: csup, // sup
//   [bas.cc + cSup]: cSup, // Sup
//   [bas.cc + cplac]: cplac, // plac
//   [bas.cc + cori]: cori, // ori
//   [bas.cc + cOri]: cOri, // Ori
//   [bas.cc + cinal]: cinal, // inal
//   [bas.cc + cpara]: cpara, // para
//   [bas.cc + cPara]: cPara, // Para
//   [bas.cc + cnom]: cnom, // nom
//   [bas.cc + cNom]: cNom, // Nom
//   [bas.cc + cther]: cther, // ther
//   [bas.cc + cfin]: cfin, // fin
//   [bas.cc + cFin]: cFin, // Fin
//   [bas.cc + crgs]: crgs, // rgs
//   [bas.cc + cample]: cample, // ample
//   [bas.cc + cAMPLE]: cAMPLE, // AMPLE
//   [bas.cc + cruc]: cruc, // ruc
//   [bas.cc + cture]: cture, // ture
//   [bas.cc + crea]: crea, // rea
//   [bas.cc + cRea]: cRea, // Rea
//   [bas.cc + cREA]: cREA, // REA
//   [bas.cc + ceen]: ceen, // een
//   [bas.cc + core]: core, // ore
//   [bas.cc + cstd]: cstd, // std
//   [bas.cc + cStd]: cStd, // Std
//   [bas.cc + cick]: cick, // ick
//   [bas.cc + cote]: cote, // ote
//   [bas.cc + coker]: coker, // oker
//   [bas.cc + crge]: crge, // rge
//   [bas.cc + cRGE]: cRGE, // RGE
//   [bas.cc + cerge]: cerge, // erge
//   [bas.cc + cERGE]: cERGE, // ERGE
//   [bas.cc + cerg]: cerg, // erg
//   [bas.cc + cured]: cured, // ured
//   [bas.cc + cude]: cude, // ude
//   [bas.cc + clude]: clude, // lude
//   [bas.cc + clud]: clud, // lud
//   [bas.cc + ccau]: ccau, // cau
//   [bas.cc + cCau]: cCau, // Cau
//   [bas.cc + cght]: cght, // ght
//   [bas.cc + cned]: cned, // ned
//   [bas.cc + cten]: cten, // ten // This is also defined in the numeric constants
//   [bas.cc + csid]: csid, // sid
//   [bas.cc + cSid]: cSid, // Sid
//   [bas.cc + cifies]: cifies, // ifies
//   [bas.cc + cref]: cref, // ref
//   [bas.cc + cRef]: cRef, // Ref
//   [bas.cc + clat]: clat, // lat
//   [bas.cc + crit]: crit, // rit
//   [bas.cc + cleas]: cleas, // leas
//   [bas.cc + cchiv]: cchiv, // chiv
//   [bas.cc + camp]: camp, // amp
//   [bas.cc + copy]: copy, // opy
//   [bas.cc + cccess]: cccess, // ccess
//   [bas.cc + clyz]: clyz, // lyz
//   [bas.cc + clyze]: clyze, // lyze
//   [bas.cc + cbra]: cbra, // bra
//   [bas.cc + cBra]: cBra, // Bra
//   [bas.cc + cket]: cket, // ket
//   [bas.cc + clex]: clex, // lex
//   [bas.cc + cLex]: cLex, // Lex
//   [bas.cc + ccal]: ccal, // cal
//   [bas.cc + cical]: cical, // ical
//   [bas.cc + cicon]: cicon, // icon
//   [bas.cc + clta]: clta, // lta
//   [bas.cc + ceaf]: ceaf, // eaf
//   [bas.cc + ctity]: ctity, // tity
//   [bas.cc + cnly]: cnly, // nly
//   [bas.cc + cuch]: cuch, // uch
//   [bas.cc + ctan]: ctan, // tan
//   [bas.cc + cstan]: cstan, // stan
//   [bas.cc + cistan]: cistan, // istan
//   [bas.cc + cnistan]: cnistan, // nistan
//   [bas.cc + cnia]: cnia, // nia
//   [bas.cc + cania]: cania, // ania
//   [bas.cc + cria]: cria, // ria
//   [bas.cc + ceria]: ceria, // eria
//   [bas.cc + cgeria]: cgeria, // geria
//   [bas.cc + crra]: crra, // rra
//   [bas.cc + cola]: cola, // ola
//   [bas.cc + cgua]: cgua, // gua
//   [bas.cc + cina]: cina, // ina
//   [bas.cc + cenia]: cenia, // enia
//   [bas.cc + clia]: clia, // lia
//   [bas.cc + calia]: calia, // alia
//   [bas.cc + crain]: crain, // rain
//   [bas.cc + cuda]: cuda, // uda
//   [bas.cc + crus]: crus, // rus
//   [bas.cc + cvia]: cvia, // via
//   [bas.cc + cndi]: cndi, // ndi
//   [bas.cc + cdia]: cdia, // dia
//   [bas.cc + cada]: cada, // ada
//   [bas.cc + cnada]: cnada, // nada
//   [bas.cc + clic]: clic, // lic
//   [bas.cc + cblic]: cblic, // blic
//   [bas.cc + cublic]: cublic, // ublic
//   [bas.cc + cbia]: cbia, // bia
//   [bas.cc + cmbia]: cmbia, // mbia
//   [bas.cc + cngo]: cngo, // ngo
//   [bas.cc + congo]: congo, // ongo
//   [bas.cc + cica]: cica, // ica
//   [bas.cc + cnica]: cnica, // nica
//   [bas.cc + cinica]: cinica, // inica
//   [bas.cc + cminica]: cminica, // minica
//   [bas.cc + cominica]: cominica, // ominica
//   [bas.cc + cdor]: cdor, // dor
//   [bas.cc + cador]: cador, // ador
//   [bas.cc + cnea]: cnea, // nea
//   [bas.cc + cinea]: cinea, // inea
//   [bas.cc + cuinea]: cuinea, // uinea
//   [bas.cc + conia]: conia, // onia
//   [bas.cc + cini]: cini, // ini
//   [bas.cc + cnce]: cnce, // nce
//   [bas.cc + cambia]: cambia, // ambia
//   [bas.cc + cerman]: cerman, // erman
//   [bas.cc + crman]: crman, // rman
//   [bas.cc + cala]: cala, // ala
//   [bas.cc + citi]: citi, // iti
//   [bas.cc + celand]: celand, // eland
//   [bas.cc + csia]: csia, // sia
//   [bas.cc + cesia]: cesia, // esia
//   [bas.cc + cnesia]: cnesia, // nesia
//   [bas.cc + conesia]: conesia, // onesia
//   [bas.cc + cran]: cran, // ran
//   [bas.cc + cdan]: cdan, // dan
//   [bas.cc + cati]: cati, // eti
//   [bas.cc + ccar]: ccar, // car
//   [bas.cc + cali]: cali, // ali
//   [bas.cc + cslands]: cslands, // slands
//   [bas.cc + cands]: cands, // ands
//   [bas.cc + cnds]: cnds, // nds
//   [bas.cc + cova]: cova, // ova
//   [bas.cc + cnmar]: cnmar, // nmar
//   [bas.cc + cmar]: cmar, // mar
//   [bas.cc + curu]: curu, // uru
//   [bas.cc + cagua]: cagua, // agua
//   [bas.cc + cragua]: cragua, // ragua
//   [bas.cc + caragua]: caragua, // aragua
//   [bas.cc + ciger]: ciger, // iger
//   [bas.cc + corea]: corea, // orea
//   [bas.cc + ckistan]: ckistan, // kistan
//   [bas.cc + cama]: cama, // ama
//   [bas.cc + cguay]: cguay, // guay
//   [bas.cc + cuay]: cuay, // uay
//   [bas.cc + cnes]: cnes, // nes
//   [bas.cc + cgal]: cgal, // gal
//   [bas.cc + cnda]: cnda, // nda
//   [bas.cc + canda]: canda, // anda
//   [bas.cc + cles]: cles, // les
//   [bas.cc + crica]: crica, // rica
//   [bas.cc + cfrica]: cfrica, // frica
//   [bas.cc + cudan]: cudan, // udan
//   [bas.cc + crland]: crland, // rland
//   [bas.cc + cerland]: cerland, // erland
//   [bas.cc + cste]: cste, // ste
//   [bas.cc + cnga]: cnga, // nga
//   [bas.cc + cates]: cates, // ates
//   [bas.cc + ctes]: ctes, // tex
//   [bas.cc + cela]: cela, // ela
//   [bas.cc + cnam]: cnam, // nam
//   [bas.cc + cmen]: cmen, // men
//   [bas.cc + cogen]: cogen, // ogen
//   [bas.cc + crogen]: crogen, // rogen
//   [bas.cc + cium]: cium, // ium
//   [bas.cc + clium]: clium, // lium
//   [bas.cc + celium]: celium, // elium
//   [bas.cc + chium]: chium, // hium
//   [bas.cc + cthium]: cthium, // thium
//   [bas.cc + cllium]: cllium, // llium
//   [bas.cc + clorine]: clorine, // lorine
//   [bas.cc + crine]: crine, // rine
//   [bas.cc + corine]: corine, // orine
//   [bas.cc + cdium]: cdium, // dium
//   [bas.cc + codium]: codium, // odium
//   [bas.cc + csium]: csium, // sium
//   [bas.cc + cesium]: cesium, // esium
//   [bas.cc + cnum]: cnum, // num
//   [bas.cc + cinum]: cinum, // inum
//   [bas.cc + cssium]: cssium, // ssium
//   [bas.cc + cassium]: cassium, // assium
//   [bas.cc + ccium]: ccium, // cium
//   [bas.cc + cndium]: cndium, // ndium
//   [bas.cc + canium]: canium, // anium
//   [bas.cc + cnium]: cnium, // nium
//   [bas.cc + cadium]: cadium, // adium
//   [bas.cc + cmium]: cmium, // mium
//   [bas.cc + ckel]: ckel, // kel
//   [bas.cc + callium]: callium, // allium
//   [bas.cc + cnic]: cnic, // nic
//   [bas.cc + cenium]: cenium, // enium
//   [bas.cc + cton]: cton, // ton
//   [bas.cc + cidium]: cidium, // idium
//   [bas.cc + ctium]: ctium, // tium
//   [bas.cc + crium]: crium, // rium
//   [bas.cc + conium]: conium, // onium
//   [bas.cc + cbium]: cbium, // bium
//   [bas.cc + cetium]: cetium, // etium
//   [bas.cc + chenium]: chenium, // henium
//   [bas.cc + curium]: curium, // urium
//   [bas.cc + carium]: carium, // arium
//   [bas.cc + cerium]: cerium, // erium
//   [bas.cc + cymium]: cymium, // ymium
//   [bas.cc + cdymium]: cdymium, // dymium
//   [bas.cc + codymium]: codymium, // odymium
//   [bas.cc + ceodymium]: ceodymium, // eodymium
//   [bas.cc + cinium]: cinium, // inium
//   [bas.cc + crbium]: crbium, // rbium
//   [bas.cc + cerbium]: cerbium, // erbium
//   [bas.cc + clum]: clum, // clum
//   [bas.cc + cuth]: cuth, // uth
//   [bas.cc + cncium]: cncium, // ncium
//   [bas.cc + ctinium]: ctinium, // tiniium
//   [bas.cc + cctinium]: cctinium, // ctinium
//   [bas.cc + corium]: corium, // orium
//   [bas.cc + cicium]: cicium, // icium
//   [bas.cc + cvium]: cvium, // vium
//   [bas.cc + covium]: covium, // ovium
//   [bas.cc + cero]: cero, // ero
//   [bas.cc + colet]: colet, // olet
//   [bas.cc + ciolet]: ciolet, // iolet
//   [bas.cc + cster]: cster, // ster
//   [bas.cc + cnge]: cnge, // nge
//   [bas.cc + cond]: cond, // ond
//   [bas.cc + cmond]: cmond, // mond
//   [bas.cc + clmond]: clmond, // lmond
//   [bas.cc + canth]: canth, // anth
//   [bas.cc + cranth]: cranth, // ranth
//   [bas.cc + caranth]: caranth, // aranth
//   [bas.cc + cmaranth]: cmaranth, // maranth
//   [bas.cc + cink]: cink, // ink
//   [bas.cc + crple]: crple, // rple
//   [bas.cc + curple]: curple, // urple
//   [bas.cc + cmber]: cmber, // mber
//   [bas.cc + cber]: cber, // ber
//   [bas.cc + cBer]: cBer, // Ber
//   [bas.cc + cyst]: cyst, // yst
//   [bas.cc + cnze]: cnze, // nze
//   [bas.cc + conze]: conze, // onze
//   [bas.cc + cronze]: cronze, // ronze
//   [bas.cc + chsia]: chsia, // hsia
//   [bas.cc + cchsia]: cchsia, // chsia
//   [bas.cc + cuchsia]: cuchsia, // uchsia
//   [bas.cc + cuby]: cuby, // uby
//   [bas.cc + chite]: chite, // hite
//   [bas.cc + clish]: clish, // lish
//   [bas.cc + cglish]: cglish, // glish
//   [bas.cc + cnglish]: cnglish, // nglish
//   [bas.cc + ccot]: ccot, // cot
//   [bas.cc + cicot]: cicot, // icot
//   [bas.cc + cricot]: cricot, // ricot
//   [bas.cc + cpricot]: cpricot, // pricot
//   [bas.cc + carine]: carine, // arine
//   [bas.cc + coke]: coke, // oke
//   [bas.cc + cllow]: cllow, // llow
//   [bas.cc + cellow]: cellow, // ellow
//   [bas.cc + cerine]: cerine, // erine
//   [bas.cc + cgerine]: cgerine, // gerine
//   [bas.cc + cngerine]: cngerine, // ngerine
//   [bas.cc + cangerine]: cangerine, // angerine
//   [bas.cc + curn]: curn, // urn
//   [bas.cc + colin]: colin, // olin
//   [bas.cc + cado]: cado, // ado
//   [bas.cc + czure]: czure, // zure
//   [bas.cc + cwder]: cwder, // wder
//   [bas.cc + cowder]: cowder, // owder
//   [bas.cc + crey]: crey, // rey
//   [bas.cc + cige]: cige, // ige
//   [bas.cc + ceige]: ceige, // eige
//   [bas.cc + ctre]: ctre, // tre
//   [bas.cc + cstre]: cstre, // stre
//   [bas.cc + cistre]: cistre, // istre
//   [bas.cc + cown]: cown, // own
//   [bas.cc + crown]: crown, // rown
//   [bas.cc + cemon]: cemon, // emon
//   [bas.cc + ceet]: ceet, // eet
//   [bas.cc + cweet]: cweet, // weet
//   [bas.cc + cmer]: cmer, // mer
//   [bas.cc + cmmer]: cmmer, // mmer
//   [bas.cc + cimmer]: cimmer, // immer
//   [bas.cc + chimmer]: chimmer, // himmer
//   [bas.cc + cean]: cean, // ean
//   [bas.cc + clate]: clate, // late
//   [bas.cc + colate]: colate, // olate
//   [bas.cc + ccolate]: ccolate, // colate
//   [bas.cc + cocolate]: cocolate, // ocolate
//   [bas.cc + chocolate]: chocolate, // hocolate
//   [bas.cc + cfee]: cfee, // fee
//   [bas.cc + cffee]: cffee, // ffee
//   [bas.cc + coffee]: coffee, // offee
//   [bas.cc + coral]: coral, // oral
//   [bas.cc + clive]: clive, // live
//   [bas.cc + cyola]: cyola, // yola
//   [bas.cc + cayola]: cayola, // ayola
//   [bas.cc + crayola]: crayola, // rayola
//   [bas.cc + csell]: csell, // sell
//   [bas.cc + cnsell]: cnsell, // nsell
//   [bas.cc + cunsell]: cunsell, // unsell
//   [bas.cc + cNCS]: cNCS, // NCS
//   [bas.cc + ctone]: ctone, // tone
//   [bas.cc + cntone]: cntone, // ntone
//   [bas.cc + cantone]: cantone, // antone
//   [bas.cc + cgment]: cgment, // gment
//   [bas.cc + cigment]: cigment, // igment
//   [bas.cc + cRYB]: cRYB, // RYB
//   [bas.cc + cheel]: cheel, // heel
//   [bas.cc + ceel]: ceel, // eel
//   [bas.cc + cans]: cans, // ans
//   [bas.cc + cire]: cire, // ire
//   [bas.cc + chire]: chire, // hire
//   [bas.cc + cphire]: cphire, // phire
//   [bas.cc + cpphire]: cpphire, // pphire
//   [bas.cc + capphire]: capphire, // apphire
//   [bas.cc + cnder]: cnder, // nder
//   [bas.cc + conder]: conder, // onder
//   [bas.cc + cole]: cole, // ole
//   [bas.cc + cndy]: cndy, // ndy
//   [bas.cc + candy]: candy, // andy
//   [bas.cc + clac]: clac, // lac
//   [bas.cc + cilac]: cilac, // ilac
//   [bas.cc + coon]: coon, // oon
//   [bas.cc + croon]: croon, // roon
//   [bas.cc + caroon]: caroon, // aroon
//   [bas.cc + cgar]: cgar, // gar
//   [bas.cc + cugar]: cugar, // ugar
//   [bas.cc + cuff]: cuff, // uff
//   [bas.cc + cundy]: cundy, // undy
//   [bas.cc + cgundy]: cgundy, // gundy
//   [bas.cc + crgundy]: crgundy, // rgundy
//   [bas.cc + curgundy]: curgundy, // urgundy
//   [bas.cc + cnna]: cnna, // nna
//   [bas.cc + cenna]: cenna, // enna
//   [bas.cc + cienna]: cienna, // ienna
//   [bas.cc + cntium]: cntium, // ntium
//   [bas.cc + cantium]: cantium, // antium
//   [bas.cc + czantium]: czantium, // zantium
//   [bas.cc + cyzantium]: cyzantium, // yzantium
//   [bas.cc + cdet]: cdet, // det
//   [bas.cc + cadet]: cadet, // adet
//   [bas.cc + cnary]: cnary, // nary
//   [bas.cc + canary]: canary, // anary
//   [bas.cc + crmine]: crmine, // rmine
//   [bas.cc + carmine]: carmine, // armine
//   [bas.cc + chest]: chest, // hest
//   [bas.cc + cdon]: cdon, // don
//   [bas.cc + cadon]: cadon, // adon
//   [bas.cc + cladon]: cladon, // ladon
//   [bas.cc + celadon]: celadon, // eladon
//   [bas.cc + cise]: cise, // ise
//   [bas.cc + crise]: crise, // rise
//   [bas.cc + cerise]: cerise, // erise
//   [bas.cc + culean]: culean, // ulean
//   [bas.cc + crulean]: crulean, // rulean
//   [bas.cc + cerulean]: cerulean, // erulean
//   [bas.cc + crost]: crost, // rost
//   [bas.cc + cgne]: cgne, // gne
//   [bas.cc + cagne]: cagne, // agne
//   [bas.cc + cpagne]: cpagne, // pagne
//   [bas.cc + cmpagne]: cmpagne, // mpagne
//   [bas.cc + campagne]: campagne, // ampagne
//   [bas.cc + champagne]: champagne, // hampagne
//   [bas.cc + conal]: conal, // onal
//   [bas.cc + citional]: citional, // itional
//   [bas.cc + cditional]: cditional, // ditional
//   [bas.cc + caditional]: caditional, // aditional
//   [bas.cc + craditional]: craditional, // raditional
//   [bas.cc + ctin]: ctin, // tin
//   [bas.cc + catin]: catin, // atin
//   [bas.cc + cpper]: cpper, // pper
//   [bas.cc + copper]: copper, // opper
//   [bas.cc + cnny]: cnny, // nny
//   [bas.cc + corn]: corn, // orn
//   [bas.cc + cilk]: cilk, // ilk
//   [bas.cc + calt]: calt, // alt
//   [bas.cc + cbalt]: cbalt, // balt
//   [bas.cc + cobalt]: cobalt, // obalt
//   [bas.cc + ctte]: ctte, // tte
//   [bas.cc + catte]: catte, // atte
//   [bas.cc + ceam]: ceam, // eam
//   [bas.cc + cream]: cream, // ream
//   [bas.cc + cmson]: cmson, // mson
//   [bas.cc + cimson]: cimson, // imson
//   [bas.cc + crimson]: crimson, // rimson
//   [bas.cc + cocess]: cocess, // ocess
//   [bas.cc + crocess]: crocess, // rocess
//   [bas.cc + cape]: cape, // ape
//   [bas.cc + camen]: camen, // amen
//   [bas.cc + caki]: caki, // aki
//   [bas.cc + chaki]: chaki, // haki
//   [bas.cc + cava]: cava, // ava
//   [bas.cc + civer]: civer, // iver
//   [bas.cc + cnta]: cnta, // nta
//   [bas.cc + cgenta]: cgenta, // genta
//   [bas.cc + cagenta]: cagenta, // agenta
//   [bas.cc + chid]: chid, // hid
//   [bas.cc + cchid]: cchid, // chid
//   [bas.cc + crchid]: crchid, // rchid
//   [bas.cc + clmon]: clmon, // lmon
//   [bas.cc + calmon]: calmon, // almon
//   [bas.cc + coise]: coise, // oise
//   [bas.cc + cuoise]: cuoise, // uoise
//   [bas.cc + cquoise]: cquoise, // quoise
//   [bas.cc + crquoise]: crquoise, // rquoise
//   [bas.cc + curquoise]: curquoise, // urquoise
//   [bas.cc + cfron]: cfron, // fron
//   [bas.cc + cffron]: cffron, // ffron
//   [bas.cc + caffron]: caffron, // affron
//   [bas.cc + ckle]: ckle, // kle
//   [bas.cc + cupe]: cupe, // upe
//   [bas.cc + caupe]: caupe, // aupe
//   [bas.cc + cnim]: cnim, // nim
//   [bas.cc + cenim]: cenim, // enim
//   [bas.cc + cesert]: cesert, // esert
//   [bas.cc + crab]: crab, // rab
//   [bas.cc + cbony]: cbony, // bony
//   [bas.cc + cony]: cony, // ony
//   [bas.cc + cant]: cant, // ant
//   [bas.cc + chell]: chell, // hell
//   [bas.cc + cigo]: cigo, // igo
//   [bas.cc + cdigo]: cdigo, // digo
//   [bas.cc + cndigo]: cndigo, // ndigo
//   [bas.cc + cald]: cald, // ald
//   [bas.cc + crald]: crald, // rald
//   [bas.cc + cerald]: cerald, // erald
//   [bas.cc + cmerald]: cmerald, // merald
//   [bas.cc + cender]: cender, // ender
//   [bas.cc + cvender]: cvender, // vender
//   [bas.cc + cavender]: cavender, // avender
//   [bas.cc + crin]: crin, // rin
//   [bas.cc + cango]: cango, // ango
//   [bas.cc + cdango]: cdango, // dango
//   [bas.cc + cndango]: cndango, // ndango
//   [bas.cc + candango]: candango, // andango
//   [bas.cc + cawn]: cawn, // awn
//   [bas.cc + crick]: crick, // rick
//   [bas.cc + clame]: clame, // lame
//   [bas.cc + cuve]: cuve, // uve
//   [bas.cc + cauve]: cauve, // auve
//   [bas.cc + crry]: crry, // rry
//   [bas.cc + cerry]: cerry, // erry
//   [bas.cc + cdian]: cdian, // dian
//   [bas.cc + cidian]: cidian, // idian
//   [bas.cc + cridian]: cridian, // ridian
//   [bas.cc + ciridian]: ciridian, // iridian
//   [bas.cc + cllic]: cllic, // llic
//   [bas.cc + callic]: callic, // allic
//   [bas.cc + ctallic]: ctallic, // tallic
//   [bas.cc + cetallic]: cetallic, // etallic
//   [bas.cc + cden]: cden, // den
//   [bas.cc + clden]: clden, // lden
//   [bas.cc + colden]: colden, // olden
//   [bas.cc + cpple]: cpple, // pple
//   [bas.cc + czard]: czard, // zard
//   [bas.cc + cheen]: cheen, // heen
//   [bas.cc + cllo]: cllo, // llo
//   [bas.cc + cetal]: cetal, // etal
//   [bas.cc + ctal]: ctal, // tal
//   [bas.cc + cuin]: cuin, // uin
//   [bas.cc + cope]: cope, // ope
//   [bas.cc + cpace]: cpace, // pace
//   [bas.cc + cris]: cris, // ris
//   [bas.cc + cade]: cade, // ade
//   [bas.cc + cobe]: cobe, // obe
//   [bas.cc + cobi]: cobi, // obi
//   [bas.cc + ccha]: ccha, // cha
//   [bas.cc + culi]: culi, // uli
//   [bas.cc + cloral]: cloral, // loral
//   [bas.cc + cier]: cier, // ier
//   [bas.cc + cnkle]: cnkle, // nkle
//   [bas.cc + cinkle]: cinkle, // inkle
//   [bas.cc + cnen]: cnen, // nen
//   [bas.cc + cinen]: cinen, // inen
//   [bas.cc + cgan]: cgan, // gan
//   [bas.cc + cvid]: cvid, // vid
//   [bas.cc + civid]: civid, // ivid
//   [bas.cc + cake]: cake, // ake
//   [bas.cc + caze]: caze, // aze
//   [bas.cc + cany]: cany, // any
//   [bas.cc + caize]: caize, // aize
//   [bas.cc + ctee]: ctee, // tee
//   [bas.cc + carin]: carin, // arin
//   [bas.cc + ctis]: ctis, // tis
//   [bas.cc + cras]: cras, // ras
//   [bas.cc + celon]: celon, // elon
//   [bas.cc + caro]: caro, // aro
//   [bas.cc + coss]: coss, // oss
//   [bas.cc + cdow]: cdow, // dow
//   [bas.cc + cadow]: cadow, // adow
//   [bas.cc + ctic]: ctic, // tic
//   [bas.cc + cstic]: cstic, // stic
//   [bas.cc + cystic]: cystic, // ystic
//   [bas.cc + crot]: crot, // rot
//   [bas.cc + crrot]: crrot, // rrot
//   [bas.cc + carrot]: carrot, // arrot
//   [bas.cc + clver]: clver, // lver
//   [bas.cc + cilver]: cilver, // ilver
//   [bas.cc + clood]: clood, // lood
//   [bas.cc + chip]: chip, // hip
//   [bas.cc + cach]: cach, // ach
//   [bas.cc + ceach]: ceach, // each
//   [bas.cc + cree]: cree, // ree
//   [bas.cc + chio]: chio, // hio
//   [bas.cc + cower]: cower, // ower
//   [bas.cc + cwer]: cwer, // wer
//   [bas.cc + cstar]: cstar, // star
//   [bas.cc + cune]: cune, // une
//   [bas.cc + ckin]: ckin, // kin
//   [bas.cc + csty]: csty, // sty
//   [bas.cc + cavy]: cavy, // avy
//   [bas.cc + cazz]: cazz, // azz
//   [bas.cc + creus]: creus, // reus
//   [bas.cc + ceus]: ceus, // eus
//   [bas.cc + cbon]: cbon, // bon
//   [bas.cc + cdder]: cdder, // dder
//   [bas.cc + cadder]: cadder, // adder
//   [bas.cc + cale]: cale, // ale
//   [bas.cc + cark]: cark, // ark
//   [bas.cc + cpia]: cpia, // pia
//   [bas.cc + chadow]: chadow, // hadow
//   [bas.cc + cock]: cock, // ock
//   [bas.cc + ctten]: ctten, // tten
//   [bas.cc + ceal]: ceal, // eal
//   [bas.cc + ctraw]: ctraw, // traw
//   [bas.cc + craw]: craw, // raw
//   [bas.cc + ctle]: ctle, // tle
//   [bas.cc + cstle]: cstle, // stle
//   [bas.cc + crest]: crest, // rest
//   [bas.cc + corest]: corest, // orest
//   [bas.cc + ccan]: ccan, // can
//   [bas.cc + cuscan]: cuscan, // uscan
//   [bas.cc + clla]: clla, // lla
//   [bas.cc + cilla]: cilla, // illa
//   [bas.cc + cnilla]: cnilla, // nilla
//   [bas.cc + canilla]: canilla, // anilla
//   [bas.cc + cilion]: cilion, // ilion
//   [bas.cc + cmilion]: cmilion, // milion
//   [bas.cc + crmilion]: crmilion, // rmilion
//   [bas.cc + cermilion]: cermilion, // ermilion
//   [bas.cc + chine]: chine, // hine
//   [bas.cc + comp]: comp, // omp
//   [bas.cc + cclr]: cclr, // clr
//   [bas.cc + cded]: cded, // ded
//   [bas.cc + cbing]: cbing, // bing
//   [bas.cc + ceth]: ceth, // eth
//   [bas.cc + clang]: clang, // lang
//   [bas.cc + cLang]: cLang, // Lang
//   [bas.cc + cuage]: cuage, // uage
//   [bas.cc + cries]: cries, // ries
//   [bas.cc + ciss]: ciss, // iss
//   [bas.cc + cinc]: cinc, // inc
//   [bas.cc + cInc]: cInc, // Inc
//   [bas.cc + cmum]: cmum, // mum
//   [bas.cc + cimum]: cimum, // imum
//   [bas.cc + crix]: crix, // rix
//   [bas.cc + cled]: cled, // led
//   [bas.cc + cLed]: cLed, // Led
//   [bas.cc + cLED]: cLED, // LED
//   [bas.cc + cling]: cling, // ling
//   [bas.cc + cler]: cler, // ler
//   [bas.cc + ching]: ching, // hing
//   [bas.cc + cwin]: cwin, // win
//   [bas.cc + ctty]: ctty, // tty
//   [bas.cc + cbet]: cbet, // bet
//   [bas.cc + csal]: csal, // sal
//   [bas.cc + cSal]: cSal // Sal
// };

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// NOTE: Additional Optimizations needed for the following
// These terms should support a future refactoring effort of the Shapes constants.
// The shapes constants is a really massive refactoring effort and not as functionally useful
// for current application needs. So this will be deferred for later and may be taken on
// in small chunks rather than all at once.
//////////////////////////////////////////////////////////////////
// smuggle something circle = bas.cir + p.ccle; // ircle
// smuggle something crcle = bas.crc + bas.cle; // rcle
// smuggle something cCircle = p.cCir + p.ccle; // Circle
// smuggle something cOval = bas.cOv + bas.cal; // Oval
// smuggle something cuare = bas.cua + bas.cre; // uare
// smuggle something criangle = p.cria + bas.cng + bas.cle; // riangle
// smuggle something ciangle = p.cian + p.cgle; // iangle
// smuggle something cngle = bas.cng + bas.cle; // ngle
// smuggle something cectangle = p.cect + w.cangle; // ectangle
// smuggle something cctangle = bas.cct + w.cangle; // ctangle
// smuggle something ctangle = clr.ctan + p.cgle; // tangle
// smuggle something cctagon = bas.cct + bas.cag + bas.con; // ctagon
// smuggle something ctagon = w.ctag + bas.con; // tagon
// smuggle something cagon = bas.cag + bas.con; // agon
// smuggle something cexagon = bas.cex + bas.cag + bas.con; // exagon
// smuggle something cxagon = bas.cxa + p.cgon; // xagon
// smuggle something ceptagon = bas.cep + w.ctag + bas.con; // eptagon
// smuggle something cptagon = bas.cpt + bas.cag + bas.con; // ptagon
// smuggle something conagon = bas.con + bas.cag + bas.con; // onagon
// smuggle something cnagon = bas.cna + p.cgon; // nagon
// smuggle something crapezoid = p.crap + bas.cez + bas.coi + bas.cd; // rapezoid
// smuggle something capezoid = p.cape + p.czoid; // apezoid
// smuggle something cpezoid = bas.cpe + p.czoid; // pezoid
// smuggle something cezoid = bas.cez + bas.coi + bas.cd; // ezoid
// smuggle something coid = bas.coi + bas.cd; // oid
// smuggle something cube = bas.cub + bas.ce; // ube
// smuggle something ccubic = bas.ccu + bas.cbi + bas.cc; // cubic
// smuggle something cbic = bas.cbi + bas.cc; // bic
// smuggle something cCubic = bas.cCu + bas.cbi + bas.cc; // Cubic
// smuggle something cPlane = bas.cPl + p.cane; // Plane
// smuggle something crve = bas.crv + bas.ce; // rve
// smuggle something cCurve = p.cCur + bas.cve; // Curve
// smuggle something cquartic = w.cquart + bas.cic; // quartic
// smuggle something cuartic = bas.cua + p.crtic; // uartic
// smuggle something cartic = p.cart + bas.cic; // artic
// smuggle something cQuartic = w.cQuart + bas.cic; // Quartic
// smuggle something cconic = p.ccon + bas.cic; // conic
// smuggle something conic = bas.con + bas.cic; // onic
// smuggle something cConic = p.cCon + bas.cic; // Conic
// Optimized constant definition for word: cubic = p.cubic
// Optimized constant definition for word: cPlane = bas.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// Optimized constant definition for word: cbic = bas.cbi + bas.cc
// Optimized constant definition for word: cPlane = bas.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// Optimized constant definition for word: cic = bas.cic
// Optimized constant definition for word: cPlane = bas.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// Optimized constant definition for word: cc = bas.cc
// Optimized constant definition for word: cPlane = bas.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// smuggle something cPlaneCurve = bas.cPl + p.cane + p.cCur + bas.cve; // PlaneCurve
// smuggle something claneCurve = w.clane + p.cCur + bas.cve; // laneCurve
// smuggle something caneCurve = p.cane + p.cCur + bas.cve; // aneCurve
// smuggle something cneCurve = bas.cne + p.cCur + bas.cve; // neCurve
// smuggle something ceCurve = bas.ceC + p.curve; // eCurve
// Optimized constant definition for word: cuartic = bas.cua + p.crtic
// Optimized constant definition for word: cPlane = bas.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// Optimized constant definition for word: cartic = p.cart + bas.cic
// Optimized constant definition for word: cPlane = bas.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// Optimized constant definition for word: crtic = p.crtic
// Optimized constant definition for word: cPlane = bas.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// Optimized constant definition for word: ctic = p.ctic
// Optimized constant definition for word: cPlane = bas.cPl + p.cane
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// smuggle something conicSection = bas.con + bas.cic + w.cSection; // onicSection
// smuggle something cnicSection = p.cnic + w.cSection; // nicSection
// smuggle something cicSection = bas.cic + w.cSection; // icSection
// smuggle something ccSection = bas.ccS + p.cect + p.cion; // cSection
// smuggle something cection = p.cect + p.cion; // ection
// smuggle something cnitCircle = bas.cni + bas.ctC + bas.cir + p.ccle; // nitCircle
// smuggle something citCircle = bas.cit + p.cCir + p.ccle; // itCircle
// smuggle something ctCircle = bas.ctC + bas.cir + p.ccle; // tCircle
// smuggle something cnitHyperbola = bas.cni + bas.ctH + p.cype + bas.crb + p.cola; // nitHyperbola
// smuggle something citHyperbola = bas.cit + p.cHyper + p.cbola; // itHyperbola
// smuggle something ctHyperbola = bas.ctH + p.cype + bas.crb + p.cola; // tHyperbola
// smuggle something cHyperbola = p.cHyper + p.cbola; // Hyperbola
// smuggle something cyperbola = p.cype + bas.crb + p.cola; // yperbola
// smuggle something cperbola = p.cper + p.cbola; // perbola
// smuggle something cerbola = bas.cer + p.cbola; // erbola
// smuggle something crbola = bas.crb + p.cola; // rbola
// smuggle something choid = bas.cho + bas.cid; // hoid
// smuggle something cdCurve = bas.cdC + p.curve; // dCurve
// smuggle something coseCurve = p.cose + p.cCur + bas.cve; // oseCurve
// smuggle something cseCurve = bas.cse + p.cCur + bas.cve; // seCurve
// smuggle something cmCurve = bas.cmC + p.curve; // mCurve
// smuggle something cidCurve = bas.cid + p.cCur + bas.cve; // idCurve
// smuggle something csCurve = bas.csC + p.curve; // sCurve
// smuggle something cLimacon = g.cLima + p.ccon; // Limacon
// smuggle something cimacon = bas.cim + bas.cac + bas.con; // imacon
// smuggle something cmacon = bas.cma + p.ccon; // macon
// smuggle something cacon = bas.cac + bas.con; // acon
// smuggle something cTrisectrix = p.cTri + p.csec + p.ctri + bas.cx; // Trisectrix
// smuggle something crisectrix = p.crise + bas.cct + bas.cri + bas.cx; // risectrix
// smuggle something cisectrix = p.cise + bas.cct + bas.cri + bas.cx; // isectrix
// smuggle something csectrix = p.csec + p.ctri + bas.cx; // sectrix
// smuggle something cectrix = p.cect + bas.cri + bas.cx; // ectrix
// smuggle something cctrix = bas.cct + bas.cri + bas.cx; // ctrix
// smuggle something ctrix = p.ctri + bas.cx; // trix
// smuggle something croid = bas.cro + bas.cid; // roid
// smuggle something cloid = bas.clo + bas.cid; // loid
// smuggle something crifolium = bas.cri + bas.cfo + p.clium; // rifolium
// smuggle something cifolium = bas.cif + bas.col + p.cium; // ifolium
// smuggle something cfolium = bas.cfo + p.clium; // folium
// smuggle something colium = bas.col + p.cium; // olium
// smuggle something ccycloid = bas.ccy + bas.ccl + bas.coi + bas.cd; // cycloid
// smuggle something cycloid = bas.cyc + bas.clo + bas.cid; // ycloid
// smuggle something ccloid = bas.ccl + bas.coi + bas.cd; // cloid
// smuggle something cpiral = bas.cpi + p.cral; // piral
// smuggle something ciral = bas.cir + bas.cal; // iral
// smuggle something cchoid = bas.cch + bas.coi + bas.cd; // choid
// smuggle something calCurve = bas.cal + p.cCur + bas.cve; // alCurve
// smuggle something clCurve = bas.clC + p.curve; // lCurve
// smuggle something cicCurve = bas.cic + p.cCur + bas.cve; // icCurve
// smuggle something ccCurve = bas.ccC + p.curve; // cCurve
// smuggle something cllipticCurve = bas.cll + bas.cip + p.ctic + p.cCur + bas.cve; // llipticCurve
// smuggle something clipticCurve = bas.cli + bas.cpt + bas.cic + p.cCur + bas.cve; // lipticCurve
// smuggle something cipticCurve = bas.cip + p.ctic + p.cCur + bas.cve; // ipticCurve
// smuggle something cpticCurve = bas.cpt + bas.cic + p.cCur + bas.cve; // pticCurve
// smuggle something cticCurve = p.ctic + p.cCur + bas.cve; // ticCurve
//
// smuggle something crCurve = bas.crC + p.curve; // rCurve
// smuggle something cCurve = p.cCur + bas.cve; // Curve
// smuggle something crve = bas.crv + bas.ce; // rve
// smuggle something cSurface = bas.cSu + bas.crf + p.cace; // Surface
// smuggle something curface = bas.cur + w.cface; // urface
// smuggle something crface = bas.crf + p.cace; // rface
// smuggle something ctCurve = bas.ctC + p.curve; // tCurve
// smuggle something cSpiral = bas.cSp + bas.cir + bas.cal; // Spiral
// smuggle something cpiral = bas.cpi + p.cral; // piral
// smuggle something ciral = bas.cir + bas.cal; // iral
// smuggle something ctochrone = bas.cto + bas.cch + p.cron + bas.ce; // tochrone
// smuggle something cochrone = bas.coc + bas.chr + n.cone; // ochrone
// smuggle something cchrone = bas.cch + p.cron + bas.ce; // chrone
// smuggle something chrone = bas.chr + n.cone; // hrone
// smuggle something crone = p.cron + bas.ce; // rone
// smuggle something coid = bas.coi + bas.cd; // oid
// smuggle something cloid = bas.clo + bas.cid; // loid
// smuggle something cIsochrone = p.cIso + bas.cch + p.cron + bas.ce; // Isochrone
// smuggle something csochrone = bas.cso + bas.cch + p.cron + bas.ce; // sochrone
// smuggle something ceCurve = bas.ceC + p.curve; // eCurve
// smuggle something csSpiral = bas.csS + bas.cpi + p.cral; // sSpiral
// smuggle something ctsSpiral = bas.cts + bas.cSp + bas.cir + bas.cal; // tsSpiral
// smuggle something cicSpiral = bas.cic + bas.cSp + bas.cir + bas.cal; // icSpiral
// smuggle something ccSpiral = bas.ccS + bas.cpi + p.cral; // cSpiral
// smuggle something cractrix = bas.cra + bas.cct + bas.cri + bas.cx; // ractrix
// smuggle something cactrix = w.cact + bas.cri + bas.cx; // actrix
// smuggle something cctrix = bas.cct + bas.cri + bas.cx; // ctrix
// smuggle something ctrix = p.ctri + bas.cx; // trix
// smuggle something cchoid = bas.cch + bas.coi + bas.cd; // choid
// smuggle something choid = bas.cho + bas.cid; // hoid
// smuggle something cBSpline = bas.cBS + bas.cpl + p.cine; // BSpline
// smuggle something cSpline = bas.cSp + w.cline; // Spline
// smuggle something cpline = bas.cpl + p.cine; // pline
// smuggle something csCurve = bas.csC + p.curve; // sCurve
// smuggle something calCurve = bas.cal + p.cCur + bas.cve; // alCurve
// smuggle something clCurve = bas.clC + p.curve; // lCurve
// smuggle something cTriangle = p.cTri + w.cangle; // Triangle
// smuggle something criangle = p.cria + bas.cng + bas.cle; // riangle
// smuggle something ciangle = p.cian + p.cgle; // iangle
// smuggle something cngle = bas.cng + bas.cle; // ngle
// smuggle something caustic = bas.cau + p.cstic; // austic
// smuggle something custic = p.cust + bas.cic; // ustic
// smuggle something cacaustic = bas.cac + bas.cau + p.cstic; // acaustic
// smuggle something ccaustic = p.ccau + p.cstic; // caustic
// smuggle something csoid = bas.cso + bas.cid; // soid
// smuggle something cvolute = bas.cvo + bas.clu + bas.cte; // volute
// smuggle something colute = bas.col + p.cute; // olute
// smuggle something clute = bas.clu + bas.cte; // lute
// smuggle something cette = bas.cet + bas.cte; // ette
// smuggle something coptic = p.copt + bas.cic; // optic
// smuggle something cptic = bas.cpt + bas.cic; // ptic
// smuggle something cmic = bas.camai + bas.cc; // mic
// smuggle something cPedalCurve = bas.cPe + bas.cda + bas.clC + p.curve; // PedalCurve
// smuggle something cedalCurve = bas.ced + bas.cal + p.cCur + bas.cve; // edalCurve
// smuggle something cdalCurve = bas.cda + bas.clC + p.curve; // dalCurve
// smuggle something celix = bas.cel + bas.cix; // elix
// smuggle something clix = bas.cli + bas.cx; // lix
// smuggle something cboloid = p.cbol + bas.coi + bas.cd; // boloid
// smuggle something coloid = bas.col + bas.coi + bas.cd; // oloid
//
// Optimized constant definition for word: cns = bas.cns
// Optimized constant definition for word: cMinimal = g.cMin + bas.cim + bas.cal
// Optimized constant definition for word: cSurface = bas.cSu + bas.crf + p.cace
// Optimized constant definition for word: cs = bas.cs
// Optimized constant definition for word: cMinimal = g.cMin + bas.cim + bas.cal
// Optimized constant definition for word: cSurface = bas.cSu + bas.crf + p.cace
// smuggle something cMinimalSurface = g.cMin + bas.cim + bas.cal + bas.cSu + bas.crf + p.cace; // MinimalSurface
// smuggle something cinimalSurface = p.cini + p.cmal + bas.cSu + bas.crf + p.cace; // inimalSurface
// smuggle something cnimalSurface = p.cnim + bas.cal + bas.cSu + bas.crf + p.cace; // nimalSurface
// smuggle something cimalSurface = bas.cim + bas.cal + bas.cSu + bas.crf + p.cace; // imalSurface
// smuggle something cmalSurface = p.cmal + bas.cSu + bas.crf + p.cace; // malSurface
// smuggle something calSurface = bas.cal + bas.cSu + bas.crf + p.cace; // alSurface
// smuggle something clSurface = bas.clS + bas.cur + w.cface; // lSurface
// smuggle something cSurface = bas.cSu + bas.crf + p.cace; // Surface
// smuggle something curface = bas.cur + w.cface; // urface
// smuggle something crface = bas.crf + p.cace; // rface
// smuggle something cnoid = bas.cno + bas.cid; // noid
// smuggle something coid = bas.coi + bas.cd; // oid
// smuggle something croid = bas.cro + bas.cid; // roid
// smuggle something csSurface = bas.csS + bas.cur + w.cface; // sSurface
// smuggle something cSheet = bas.cSh + p.ceet; // Sheet
// smuggle something cheet = bas.che + bas.cet; // heet
// smuggle something cboloid = p.cbol + bas.coi + bas.cd; // boloid
// smuggle something coloid = bas.col + bas.coi + bas.cd; // oloid
// smuggle something cloid = bas.clo + bas.cid; // loid
// smuggle something cphere = bas.cph + p.cere; // phere
// smuggle something chere = w.cher + bas.ce; // here
// smuggle something cCubic = bas.cCu + bas.cbi + bas.cc; // Cubic
// smuggle something cbic = bas.cbi + bas.cc; // bic
// smuggle something caddle = w.c_add + bas.cle; // addle
// smuggle something cddle = bas.cdd + bas.cle; // ddle
// smuggle something cdle = bas.cdl + bas.ce; // dle
// smuggle something ceCurve = bas.ceC + p.curve; // eCurve
// smuggle something cCurve = p.cCur + bas.cve; // Curve
// smuggle something crve = bas.crv + bas.ce; // rve
// smuggle something cract = bas.cra + bas.cct; // ract
// smuggle something cFractal = p.cFra + bas.cct + bas.cal; // Fractal
// smuggle something cractal = bas.cra + bas.cct + bas.cal; // ractal
// smuggle something cactal = w.cact + bas.cal; // actal
// smuggle something cctal = bas.cct + bas.cal; // ctal
// smuggle something cflake = bas.cfl + p.cake; // flake
// smuggle something clake = bas.cla + bas.cke; // lake
// smuggle something cAttractor = e.cAt + p.ctra + p.cctor; // Attractor
// smuggle something cttractor = bas.ctt + bas.cra + p.cctor; // ttractor
// smuggle something ctractor = p.ctra + p.cctor; // tractor
// smuggle something cractor = bas.cra + p.cctor; // ractor
// smuggle something cactor = w.cact + bas.cor; // actor
// smuggle something cystem = p.cyst + bas.cem; // ystem
// smuggle something cstem = p.cste + bas.cm; // stem
// smuggle something ctem = bas.cte + bas.cm; // tem
//
// smuggle something calTriangle = bas.cal + p.cTri + w.cangle; // alTriangle
// smuggle something clTriangle = bas.clT + p.cria + bas.cng + bas.cle; // lTriangle
// smuggle something cTriangle = p.cTri + w.cangle; // Triangle
// smuggle something criangle = p.cria + bas.cng + bas.cle; // riangle
// smuggle something ciangle = p.cian + p.cgle; // iangle
// smuggle something cngle = bas.cng + bas.cle; // ngle
// smuggle something cCurve = p.cCur + bas.cve; // Curve
// smuggle something crve = bas.crv + bas.ce; // rve
// smuggle something cTiling = bas.cTi + p.clin + bas.cg; // Tiling
// smuggle something ciling = p.cili + bas.cng; // iling
// smuggle something cFractal = p.cFra + bas.cct + bas.cal; // Fractal
// smuggle something cractal = bas.cra + bas.cct + bas.cal; // ractal
// smuggle something cactal = w.cact + bas.cal; // actal
// smuggle something cctal = bas.cct + bas.cal; // ctal
// smuggle something ciCurve = bas.ciC + p.curve; // iCurve
// Optimized constant definition for word: cVon = bas.cVo + bas.cn
// Optimized constant definition for word: cKoch = bas.cKo + bas.cch
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// Optimized constant definition for word: con = bas.con
// Optimized constant definition for word: cKoch = bas.cKo + bas.cch
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// Optimized constant definition for word: cn = bas.cn
// Optimized constant definition for word: cKoch = bas.cKo + bas.cch
// Optimized constant definition for word: cCurve = p.cCur + bas.cve
// smuggle something cKochCurve = bas.cKo + bas.cch + p.cCur + bas.cve; // KochCurve
// smuggle something cochCurve = bas.coc + bas.chC + p.curve; // ochCurve
// smuggle something cchCurve = bas.cch + p.cCur + bas.cve; // chCurve
// smuggle something chCurve = bas.chC + p.curve; // hCurve
// smuggle something cBrownianMotion = clr.cBrown + p.cian + bas.cMo + p.ction; // BrownianMotion
// smuggle something crownianMotion = p.crown + p.cian + bas.cMo + p.ction; // rownianMotion
// smuggle something cownianMotion = p.cown + p.cian + bas.cMo + p.ction; // ownianMotion
// smuggle something cwnianMotion = bas.cwn + p.cian + bas.cMo + p.ction; // wnianMotion
// smuggle something cnianMotion = p.cnia + bas.cnM + bas.cot + p.cion; // nianMotion
// smuggle something cianMotion = p.cian + bas.cMo + p.ction; // ianMotion
// smuggle something canMotion = bas.can + bas.cMo + p.ction; // anMotion
// smuggle something cnMotion = bas.cnM + bas.cot + p.cion; // nMotion
// smuggle something cMotion = bas.cMo + p.ction; // Motion
// smuggle something cotion = bas.cot + p.cion; // otion
// smuggle something cDPolymer = bas.cDP + bas.col + bas.cym + bas.cer; // DPolymer
// smuggle something cPolymer = bas.cPo + bas.cly + p.cmer; // Polymer
// smuggle something colymer = bas.col + bas.cym + bas.cer; // olymer
// smuggle something clymer = bas.cly + p.cmer; // lymer
// smuggle something cymer = bas.cym + bas.cer; // ymer
// Optimized constant definition for word: cion = p.cion
// Optimized constant definition for word: cFront = w.cFront
// Optimized constant definition for word: cIn2 = bas.cIn + n.c2
// Optimized constant definition for word: cD = bas.cD
// Optimized constant definition for word: con = bas.con
// Optimized constant definition for word: cFront = w.cFront
// Optimized constant definition for word: cIn2 = bas.cIn + n.c2
// Optimized constant definition for word: cD = bas.cD
// Optimized constant definition for word: cn = bas.cn
// Optimized constant definition for word: cFront = w.cFront
// Optimized constant definition for word: cIn2 = bas.cIn + n.c2
// Optimized constant definition for word: cD = bas.cD
// Optimized constant definition for word: cFront = w.cFront
// Optimized constant definition for word: cIn2 = bas.cIn + n.c2
// Optimized constant definition for word: cD = bas.cD
// Optimized constant definition for word: cront = p.cron + bas.ct
// Optimized constant definition for word: cIn2 = bas.cIn + n.c2
// Optimized constant definition for word: cD = bas.cD
// Optimized constant definition for word: cont = p.cont
// Optimized constant definition for word: cIn2 = bas.cIn + n.c2
// Optimized constant definition for word: cD = bas.cD
// Optimized constant definition for word: cnt = bas.cnt
// Optimized constant definition for word: cIn2 = bas.cIn + n.c2
// Optimized constant definition for word: cD = bas.cD
// Optimized constant definition for word: ct = bas.ct
// Optimized constant definition for word: cIn2 = bas.cIn + n.c2
// Optimized constant definition for word: cD = bas.cD
// smuggle something cIn2D = bas.cIn + n.c2 + bas.cD; // In2D
// smuggle something cn2D = bas.cn + n.c2 + bas.cD; // n2D
// smuggle something c2DPercolationCluster = n.c2 + bas.cDP + bas.cer + p.ccol + p.cation + bas.cCl + p.cust + bas.cer; // 2DPercolationCluster
// Optimized constant definition for word: cD = bas.cD
// Optimized constant definition for word: cPercolation = p.cPer + p.ccol + p.cation
// Optimized constant definition for word: cCluster = bas.cCl + p.cust + bas.cer
// smuggle something cPercolationCluster = p.cPer + p.ccol + p.cation + bas.cCl + p.cust + bas.cer; // PercolationCluster
// smuggle something cercolationCluster = bas.cer + p.ccol + p.cation + bas.cCl + p.cust + bas.cer; // ercolationCluster
// smuggle something crcolationCluster = bas.crc + p.cola + p.ction + bas.cCl + p.cust + bas.cer; // rcolationCluster
// smuggle something ccolationCluster = p.ccol + p.cation + bas.cCl + p.cust + bas.cer; // colationCluster
// smuggle something colationCluster = p.cola + p.ction + bas.cCl + p.cust + bas.cer; // olationCluster
// smuggle something clationCluster = p.clat + p.cion + bas.cCl + p.cust + bas.cer; // lationCluster
// smuggle something cationCluster = p.cation + bas.cCl + p.cust + bas.cer; // ationCluster
// smuggle something ctionCluster = p.ction + bas.cCl + p.cust + bas.cer; // tionCluster
// smuggle something cionCluster = p.cion + bas.cCl + p.cust + bas.cer; // ionCluster
// smuggle something conCluster = bas.con + bas.cCl + p.cust + bas.cer; // onCluster
// smuggle something cnCluster = bas.cnC + p.clus + p.cter; // nCluster
// smuggle something cCluster = bas.cCl + p.cust + bas.cer; // Cluster
// smuggle something cluster = p.clus + p.cter; // luster
// smuggle something custer = p.cust + bas.cer; // uster
// smuggle something cPolygon = bas.cPo + bas.cly + p.cgon; // Polygon
// smuggle something colygon = bas.col + bas.cyg + bas.con; // olygon
// smuggle something clygon = bas.cly + p.cgon; // lygon
// smuggle something cygon = bas.cyg + bas.con; // ygon
// smuggle something cEquilateral = p.cEqu + bas.cil + p.cate + p.cral; // Equilateral
// smuggle something cquilateral = bas.cqu + bas.cil + p.cate + p.cral; // quilateral
// smuggle something cuilateral = bas.cui + p.clate + p.cral; // uilateral
// smuggle something cilateral = bas.cil + p.cate + p.cral; // ilateral
// smuggle something clateral = p.clate + p.cral; // lateral
// smuggle something cateral = p.cate + p.cral; // ateral
// smuggle something cteral = p.cter + bas.cal; // teral
// smuggle something ceral = p.cera + bas.cl; // eral
// smuggle something carPolygon = bas.car + bas.cPo + bas.cly + p.cgon; // arPolygon
// smuggle something crPolygon = bas.crP + bas.col + bas.cyg + bas.con; // rPolygon
// smuggle something ctagram = w.ctag + p.cram; // tagram
// smuggle something cagram = bas.cag + p.cram; // agram
// smuggle something cgram = bas.cgr + bas.cam; // gram
// smuggle something cagon = bas.cag + bas.con; // agon
// smuggle something cecagon = bas.cec + bas.cag + bas.con; // ecagon
// smuggle something ccagon = bas.cca + p.cgon; // cagon
// smuggle something cdecagon = bas.cde + bas.cca + p.cgon; // decagon
// smuggle something cadecagon = p.cade + bas.cca + p.cgon; // adecagon
// smuggle something ctadecagon = bas.cta + bas.cde + bas.cca + p.cgon; // tadecagon
// smuggle something cogon = bas.cog + bas.con; // ogon
//
// smuggle something cahedron = bas.cah + bas.ced + p.cron; // ahedron
// smuggle something chedron = bas.che + bas.cdr + bas.con; // hedron
// smuggle something cedron = bas.ced + p.cron; // edron
// smuggle something cdron = bas.cdr + bas.con; // dron
// smuggle something cDodecahedron = bas.cDo + bas.cde + bas.cca + bas.che + bas.cdr + bas.con; // Dodecahedron
// smuggle something codecahedron = p.code + bas.cca + bas.che + bas.cdr + bas.con; // odecahedron
// smuggle something cdecahedron = bas.cde + bas.cca + bas.che + bas.cdr + bas.con; // decahedron
// smuggle something cecahedron = bas.cec + bas.cah + bas.ced + p.cron; // ecahedron
// smuggle something ccahedron = bas.cca + bas.che + bas.cdr + bas.con; // cahedron
// smuggle something cIcosahedron = bas.cIc + bas.cos + bas.cah + bas.ced + p.cron; // Icosahedron
// smuggle something ccosahedron = bas.cco + bas.csa + bas.che + bas.cdr + bas.con; // cosahedron
// smuggle something cosahedron = bas.cos + bas.cah + bas.ced + p.cron; // osahedron
// smuggle something csahedron = bas.csa + bas.che + bas.cdr + bas.con; // sahedron
// smuggle something cHosohedron = bas.cHo + bas.cso + bas.che + bas.cdr + bas.con; // Hosohedron
// smuggle something cosohedron = bas.cos + bas.coh + bas.ced + p.cron; // osohedron
// smuggle something csohedron = bas.cso + bas.che + bas.cdr + bas.con; // sohedron
// smuggle something cohedron = bas.coh + bas.ced + p.cron; // ohedron
// smuggle something cagon = bas.cag + bas.con; // agon
// smuggle something chedra = bas.che + bas.cdr + bas.ca; // hedra
// smuggle something cedra = bas.ced + bas.cra; // edra
// smuggle something cdra = bas.cdr + bas.ca; // dra
// smuggle something cStellatedDodecahedron = bas.cSt + p.cell + p.cate + bas.cdD + p.code + bas.cca + bas.che + bas.cdr + bas.con; // StellatedDodecahedron
// smuggle something ctellatedDodecahedron = bas.cte + p.clla + p.cted + bas.cDo + bas.cde + bas.cca + bas.che + bas.cdr + bas.con; // tellatedDodecahedron
// smuggle something cellatedDodecahedron = p.cell + p.cate + bas.cdD + p.code + bas.cca + bas.che + bas.cdr + bas.con; // ellatedDodecahedron
// smuggle something cllatedDodecahedron = p.clla + p.cted + bas.cDo + bas.cde + bas.cca + bas.che + bas.cdr + bas.con; // llatedDodecahedron
// smuggle something clatedDodecahedron = p.clate + bas.cdD + p.code + bas.cca + bas.che + bas.cdr + bas.con; // latedDodecahedron
// smuggle something catedDodecahedron = p.cate + bas.cdD + p.code + bas.cca + bas.che + bas.cdr + bas.con; // atedDodecahedron
// smuggle something ctedDodecahedron = p.cted + bas.cDo + bas.cde + bas.cca + bas.che + bas.cdr + bas.con; // tedDodecahedron
// smuggle something cedDodecahedron = bas.ced + bas.cDo + bas.cde + bas.cca + bas.che + bas.cdr + bas.con; // edDodecahedron
// smuggle something cdDodecahedron = bas.cdD + p.code + bas.cca + bas.che + bas.cdr + bas.con; // dDodecahedron
// smuggle something cSquareTiling = bas.cSq + bas.cua + bas.cre + bas.cTi + p.clin + bas.cg; // SquareTiling
// smuggle something cquareTiling = p.cquare + bas.cTi + p.clin + bas.cg; // quareTiling
// smuggle something cuareTiling = bas.cua + bas.cre + bas.cTi + p.clin + bas.cg; // uareTiling
// smuggle something careTiling = p.care + bas.cTi + p.clin + bas.cg; // areTiling
// smuggle something creTiling = bas.cre + bas.cTi + p.clin + bas.cg; // reTiling
// smuggle something ceTiling = bas.ceT + p.cili + bas.cng; // eTiling
// smuggle something cTiling = bas.cTi + p.clin + bas.cg; // Tiling
// smuggle something ciling = p.cili + bas.cng; // iling
// smuggle something cTriangularTiling = p.cTri + bas.can + bas.cgu + bas.cla + bas.crT + p.cili + bas.cng; // TriangularTiling
// smuggle something criangularTiling = p.cria + bas.cng + p.cular + bas.cTi + p.clin + bas.cg; // riangularTiling
// smuggle something ciangularTiling = p.cian + bas.cgu + bas.cla + bas.crT + p.cili + bas.cng; // iangularTiling
// smuggle something cangularTiling = bas.can + bas.cgu + bas.cla + bas.crT + p.cili + bas.cng; // angularTiling
// smuggle something cngularTiling = bas.cng + p.cular + bas.cTi + p.clin + bas.cg; // ngularTiling
// smuggle something cgularTiling = bas.cgu + bas.cla + bas.crT + p.cili + bas.cng; // gularTiling
// smuggle something cularTiling = p.cular + bas.cTi + p.clin + bas.cg; // ularTiling
// smuggle something clarTiling = bas.cla + bas.crT + p.cili + bas.cng; // larTiling
// smuggle something carTiling = bas.car + bas.cTi + p.clin + bas.cg; // arTiling
// smuggle something crTiling = bas.crT + p.cili + bas.cng; // rTiling
// smuggle something cHexagonalTiling = g.cHex + bas.cag + p.conal + bas.cTi + p.clin + bas.cg; // HexagonalTiling
// smuggle something cexagonalTiling = bas.cex + bas.cag + p.conal + bas.cTi + p.clin + bas.cg; // exagonalTiling
// smuggle something cxagonalTiling = bas.cxa + p.cgon + bas.cal + bas.cTi + p.clin + bas.cg; // xagonalTiling
// smuggle something cagonalTiling = bas.cag + p.conal + bas.cTi + p.clin + bas.cg; // agonalTiling
// smuggle something cgonalTiling = p.cgon + bas.cal + bas.cTi + p.clin + bas.cg; // gonalTiling
// smuggle something conalTiling = p.conal + bas.cTi + p.clin + bas.cg; // onalTiling
// smuggle something cnalTiling = p.cnal + bas.cTi + p.clin + bas.cg; // nalTiling
// smuggle something calTiling = bas.cal + bas.cTi + p.clin + bas.cg; // alTiling
// smuggle something clTiling = bas.clT + p.cili + bas.cng; // lTiling
// smuggle something cicTiling = bas.cic + bas.cTi + p.clin + bas.cg; // icTiling
// smuggle something ccTiling = bas.ccT + p.cili + bas.cng; // cTiling
// smuggle something cagrammicTiling = bas.cag + p.cram + bas.camai + bas.ccT + p.cili + bas.cng; // agrammicTiling
// smuggle something cgrammicTiling = bas.cgr + bas.cam + bas.camai + bas.ccT + p.cili + bas.cng; // grammicTiling
// smuggle something crammicTiling = p.cram + bas.camai + bas.ccT + p.cili + bas.cng; // rammicTiling
// smuggle something cammicTiling = bas.cam + bas.camai + bas.ccT + p.cili + bas.cng; // ammicTiling
// smuggle something cmmicTiling = bas.cmm + bas.cic + bas.cTi + p.clin + bas.cg; // mmicTiling
// smuggle something cmicTiling = bas.camai + bas.ccT + p.cili + bas.cng; // micTiling
// smuggle something c120Cell = n.c120 + w.cCell; // 120Cell
// smuggle something c20Cell = n.c20 + w.cCell; // 20Cell
// smuggle something c0Cell = n.c0 + w.cCell; // 0Cell
// smuggle something c600Cell = n.c600 + w.cCell; // 600Cell
// smuggle something c00Cell = n.c00 + w.cCell; // 00Cell
// smuggle something cSphere = bas.cSp + w.cher + bas.ce; // Sphere
// smuggle something cphere = bas.cph + p.cere; // phere
// smuggle something chere = w.cher + bas.ce; // here
// smuggle something cIcosahedral120Cell = bas.cIc + bas.cos + bas.cah + bas.ced + p.cral + n.c120 + w.cCell; // Icosahedral120Cell
// smuggle something ccosahedral120Cell = bas.cco + bas.csa + bas.che + bas.cdr + bas.cal + n.c120 + w.cCell; // cosahedral120Cell
// smuggle something cosahedral120Cell = bas.cos + bas.cah + bas.ced + p.cral + n.c120 + w.cCell; // osahedral120Cell
// smuggle something csahedral120Cell = bas.csa + bas.che + bas.cdr + bas.cal + n.c120 + w.cCell; // sahedral120Cell
// smuggle something cahedral120Cell = bas.cah + bas.ced + p.cral + n.c120 + w.cCell; // ahedral120Cell
// smuggle something chedral120Cell = bas.che + bas.cdr + bas.cal + n.c120 + w.cCell; // hedral120Cell
// smuggle something cedral120Cell = bas.ced + p.cral + n.c120 + w.cCell; // edral120Cell
// smuggle something cdral120Cell = bas.cdr + bas.cal + n.c120 + w.cCell; // dral120Cell
// smuggle something cral120Cell = p.cral + n.c120 + w.cCell; // ral120Cell
// smuggle something cal120Cell = bas.cal + n.c120 + w.cCell; // al120Cell
// smuggle something cl120Cell = bas.cl + n.c120 + w.cCell; // l120Cell
// smuggle something cStellated120Cell = bas.cSt + p.cell + p.cate + bas.cd + n.c120 + w.cCell; // Stellated120Cell
// smuggle something ctellated120Cell = bas.cte + p.clla + p.cted + n.c120 + w.cCell; // tellated120Cell
// smuggle something cellated120Cell = p.cell + p.cate + bas.cd + n.c120 + w.cCell; // ellated120Cell
// smuggle something cllated120Cell = p.clla + p.cted + n.c120 + w.cCell; // llated120Cell
// smuggle something clated120Cell = p.clate + bas.cd + n.c120 + w.cCell; // lated120Cell
// smuggle something cated120Cell = p.cate + bas.cd + n.c120 + w.cCell; // ated120Cell
// smuggle something cted120Cell = p.cted + n.c120 + w.cCell; // ted120Cell
// smuggle something ced120Cell = bas.ced + n.c120 + w.cCell; // ed120Cell
// smuggle something cd120Cell = bas.cd + n.c120 + w.cCell; // d120Cell
// smuggle something cGrand120Cell = bas.cGr + p.cand + n.c120 + w.cCell; // Grand120Cell
// smuggle something crand120Cell = p.cran + bas.cd + n.c120 + w.cCell; // rand120Cell
// smuggle something cand120Cell = p.cand + n.c120 + w.cCell; // and120Cell
// smuggle something cnd120Cell = bas.cnd + n.c120 + w.cCell; // nd120Cell
// Optimized constant definition for word: cGrand = bas.cGr + p.cand
// Optimized constant definition for word: cStellated120 = bas.cSt + p.cell + p.cate + bas.cd + n.c120
// Optimized constant definition for word: cCell = w.cCell
// Optimized constant definition for word: crand = p.cran + bas.cd
// Optimized constant definition for word: cStellated120 = bas.cSt + p.cell + p.cate + bas.cd + n.c120
// Optimized constant definition for word: cCell = w.cCell
// Optimized constant definition for word: cand = p.cand
// Optimized constant definition for word: cStellated120 = bas.cSt + p.cell + p.cate + bas.cd + n.c120
// Optimized constant definition for word: cCell = w.cCell
// Optimized constant definition for word: cnd = bas.cnd
// Optimized constant definition for word: cStellated120 = bas.cSt + p.cell + p.cate + bas.cd + n.c120
// Optimized constant definition for word: cCell = w.cCell
// Optimized constant definition for word: cd = bas.cd
// Optimized constant definition for word: cStellated120 = bas.cSt + p.cell + p.cate + bas.cd + n.c120
// Optimized constant definition for word: cCell = w.cCell
// smuggle something cHoneycomb = w.cHoney + w.ccomb; // Honeycomb
// smuggle something coneycomb = n.cone + bas.cyc + p.comb; // oneycomb
// smuggle something cneycomb = bas.cne + bas.cyc + p.comb; // neycomb
// smuggle something ceycomb = bas.cey + w.ccomb; // eycomb
// smuggle something cycomb = bas.cyc + p.comb; // ycomb
// smuggle something cHosohedralHoneycomb = bas.cHo + bas.cso + bas.che + bas.cdr + bas.cal + w.cHoney + w.ccomb; // HosohedralHoneycomb
// smuggle something cosohedralHoneycomb = bas.cos + bas.coh + bas.ced + p.cral + w.cHoney + w.ccomb; // osohedralHoneycomb
// smuggle something csohedralHoneycomb = bas.cso + bas.che + bas.cdr + bas.cal + w.cHoney + w.ccomb; // sohedralHoneycomb
// smuggle something cohedralHoneycomb = bas.coh + bas.ced + p.cral + w.cHoney + w.ccomb; // ohedralHoneycomb
// smuggle something chedralHoneycomb = bas.che + bas.cdr + bas.cal + w.cHoney + w.ccomb; // hedralHoneycomb
// smuggle something cedralHoneycomb = bas.ced + p.cral + w.cHoney + w.ccomb; // edralHoneycomb
// smuggle something cdralHoneycomb = bas.cdr + bas.cal + w.cHoney + w.ccomb; // dralHoneycomb
// smuggle something cralHoneycomb = p.cral + w.cHoney + w.ccomb; // ralHoneycomb
// smuggle something calHoneycomb = bas.cal + w.cHoney + w.ccomb; // alHoneycomb
// smuggle something clHoneycomb = bas.clH + n.cone + bas.cyc + p.comb; // lHoneycomb
// smuggle something cTilingHoneycomb = bas.cTi + p.clin + bas.cgH + n.cone + bas.cyc + p.comb; // TilingHoneycomb
// smuggle something cilingHoneycomb = p.cili + bas.cng + w.cHoney + w.ccomb; // ilingHoneycomb
// smuggle something clingHoneycomb = p.clin + bas.cgH + n.cone + bas.cyc + p.comb; // lingHoneycomb
// smuggle something cingHoneycomb = p.cing + w.cHoney + w.ccomb; // ingHoneycomb
// smuggle something cngHoneycomb = bas.cng + w.cHoney + w.ccomb; // ngHoneycomb
// smuggle something cgHoneycomb = bas.cgH + n.cone + bas.cyc + p.comb; // gHoneycomb
// smuggle something cDodecahedralHoneycomb = bas.cDo + bas.cde + bas.cca + bas.che + bas.cdr + bas.cal + w.cHoney + w.ccomb; // DodecahedralHoneycomb
// smuggle something codecahedralHoneycomb = p.code + bas.cca + bas.che + bas.cdr + bas.cal + w.cHoney + w.ccomb; // odecahedralHoneycomb
// smuggle something cdecahedralHoneycomb = bas.cde + bas.cca + bas.che + bas.cdr + bas.cal + w.cHoney + w.ccomb; // decahedralHoneycomb
// smuggle something cecahedralHoneycomb = bas.cec + bas.cah + bas.ced + p.cral + w.cHoney + w.ccomb; // ecahedralHoneycomb
// smuggle something ccahedralHoneycomb = bas.cca + bas.che + bas.cdr + bas.cal + w.cHoney + w.ccomb; // cahedralHoneycomb
// smuggle something cahedralHoneycomb = bas.cah + bas.ced + p.cral + w.cHoney + w.ccomb; // ahedralHoneycomb
//
