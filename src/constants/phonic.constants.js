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

var bas = require('./basic.constants');

// Reusable Grammer
let chree = bas.chr + bas.cee;
let cour = bas.cou + bas.cr; // our
let cive = bas.civ + bas.ce; // ive
let ceven = bas.cev + bas.cen; // even
let cight = bas.cig + bas.cht; // ight
let cine = bas.cin + bas.ce; // ine
let cleven = bas.cl + bas.cev + bas.cen; // leven
let cwelve = bas.cwe + bas.clv + bas.ce; // welve
let cteen = bas.ct + bas.cee + bas.cn; // teen
let chir = bas.chi + bas.cr; // hir
let cigh = bas.cig + bas.ch; // igh
let cwenty = bas.cw + bas.cen + bas.cty; // wenty
let chirty = bas.chi + bas.cr + bas.cty; // hirty
let cifty = bas.cif + bas.cty; // ifty
let cred = bas.cre + bas.cd; // red
let cgreen = bas.cgr + bas.cee + bas.cn; // green
let cblue = bas.cbl + bas.cue; // blue
let cund = bas.cun + bas.cd; // und
let cundred = cund + cred; // undred
let cand = bas.can + bas.cd; // and
let csand = bas.cs + cand; // sand
let chousand = bas.cho + bas.cu + csand; // housand
let cion = bas.cio + bas.cn; // ion
let cION = bas.cIO + bas.cN; // ION
let csion = bas.cs + cion; // sion
let cill = bas.ci + bas.cll; // ill
let cillion = cill + cion; // illion
let crue = bas.cru + bas.ce; // rue
let calse = bas.cal + bas.cse; // alse
let ction = bas.ct + cion; // tion
let cTION = bas.cT + cION; // TION
let cction = bas.cc + ction; // ction
let cmation = bas.cma + ction; // mation
let cition = bas.ci + ction; // ition
let cITION = bas.cI + cTION; // ITION
let cage = bas.cag + bas.ce; // age
let cest = bas.ces + bas.ct; // est
let chare = bas.cha + bas.cre; // hare
let c_lass = bas.cla + bas.css; // lass
let ctemp = bas.cte + bas.cmp; // temp
let chref = bas.chr + bas.cef; // href
let cABC = bas.cAB + bas.cC; // ABC
let came = bas.cam + bas.ce; // ame
let cile = bas.cil + bas.ce; // ile
let cext = bas.cex + bas.ct; // ext
let cExt = bas.cEx + bas.ct; // Ext
let clpha = bas.clp + bas.cha; // lpha
let ccon = bas.cco + bas.cn; // con
let cCon = bas.cCo + bas.cn; // Con
let cable = bas.cab + bas.cle; // able
let calid = bas.cal + bas.cid; // alid
let cALID = bas.cAL + bas.cID; // ALID
let cing = bas.cin + bas.cg; // ing
let cING = bas.cIN + bas.cG; // ING
let ctring = bas.ctr + cing; // tring
let cbject = bas.cbj + bas.cec + bas.ct; // bject
let cata = bas.cat + bas.ca; // ata
let cATA = bas.cAT + bas.cA; // ATA
let cMac = bas.cMa + bas.cc; // Mac
let cpre = bas.cpr + bas.ce; // pre
let cPre = bas.cPr + bas.ce; // Pre
let cPRE = bas.cPR + bas.cE; // PRE
let colid = bas.col + bas.cid; // olid
let cynch = bas.cyn + bas.cch; // ynch
let celete = bas.cel + bas.cet + bas.ce; // elete
let cnner = bas.cnn + bas.cer; // nner
let click = bas.cli + bas.cck; // lick
let cctr = bas.cct + bas.cr; // ctr
let cctrl = cctr + bas.cl; // ctrl
let cype = bas.cyp + bas.ce; // ype
let ceql = bas.ce + bas.cql; // eql
let cEql = bas.cE + bas.cql; // Eql
let cemb = bas.cem + bas.cb; // emb
let cOperat = bas.cOp + bas.cer + bas.cat; // Operat
let cili = bas.cil + bas.ci; // ili
let cility = cili + bas.cty; // ility
let cibility = bas.cib + cility; // ibility
let cisibility = bas.cis + cibility; // isibility
let cith = bas.ci + bas.cth; // ith
let crent = bas.cre + bas.cnt; // rent
let carent = bas.ca + crent; // arent
let ctor = bas.cto + bas.cr; // tor
let cctor = bas.cc + ctor; // ctor
let celector = bas.cel + bas.cec + ctor; // elector
let coolean = bas.coo + bas.cle + bas.can; // oolean
let check = bas.che + bas.cck; // heck
let child = bas.chi + bas.cld; // hild
let cibling = bas.cib + bas.cl + cing; // ibling
let cttribute = bas.ctt + bas.cri + bas.cbu + bas.cte; //ttribute
let cttributes = cttribute + bas.cs; // ttributes
let cisabled = bas.cis + cable + bas.cd; // isabled
let cilter = bas.cil + bas.ct + bas.cer; // ilter
let code = bas.cod + bas.ce; // ode
let cide = bas.cid + bas.ce; // ide
let cuary = bas.cua + bas.cry; // uary
let cies = bas.cie + bas.cs; // ies
let ctive = bas.cti + bas.cve; // tive
let cate = bas.cat + bas.ce; // ate
let cdate = bas.cd + cate; // date
let cter = bas.cte + bas.cr; // ter
let cTER = bas.cTE + bas.cR; // TER
let cment = bas.cme + bas.cnt; // ment
let cMENT = bas.cME + bas.cNT; // MENT
let cime = bas.cim + bas.ce; // ime
let cinter = bas.cin + cter; // inter
let cInter = bas.cIn + cter; // Inter
let cmed = bas.cme + bas.cd; // med
let cath = bas.cat + bas.ch; // ath
let cvar = bas.cva + bas.cr; // var
let cVar = bas.cVa + bas.cr; // Var
let ciew = bas.cie + bas.cw; // iew
let cete = bas.cet + bas.ce; // ete
let cace = bas.cac + bas.ce; // ace
let cder = bas.cd + bas.cer; // der
let ccor = bas.cco + bas.cr; // cor
let cCor = bas.cCo + bas.cr; // Cor
let ccore = ccor + bas.ce; // core
let cert = bas.cer + bas.ct; // ert
let c_ase = bas.cas + bas.ce; // ase 'case' is a reserved word
let c_ASE = bas.cAS + bas.cE; // ASE
let cunt = bas.cun + bas.ct; // unt
let caft = bas.caf + bas.ct; // aft
let cops = bas.cop + bas.cs; // ops
let cOPS = bas.cOP + bas.cS; // OPS
let cinv = bas.cin + bas.cv; // inv
let cInv = bas.cIn + bas.cv; // Inv
let cral = bas.cra + bas.cl; // ral
let cara = bas.car + bas.ca; // ara
let cpro = bas.cpr + bas.co; // pro
let cPro = bas.cPr + bas.co; // Pro
let cPRO = bas.cPR + bas.cO; // PRO
let cino = bas.cin + bas.co; // ino
let cese = bas.ces + bas.ce; // ese
let cish = bas.cis + bas.ch; // ish
let ccel = bas.cce + bas.cl; // cel
let cCel = bas.cCe + bas.cl; // Cel
let cian = bas.cia + bas.cn; // ian
let cous = bas.cou + bas.cs; // ous
let ceous = bas.ce + cous; // eous
let cung = bas.cun + bas.cg; // ung
let cary = bas.car + bas.cy; // ary
let ciary = bas.ci + cary; // iary
let cMis = bas.cMi + bas.cs; // Mis
let cmis = bas.camai + bas.cs; // mis
let cource = bas.cou + bas.crc + bas.ce; // ource
let cmin = bas.camai + bas.cn; // min
let cMin = bas.cMi + bas.cn; // Min
let cmax = bas.cma + bas.cx; // max
let cMax = bas.cMa + bas.cx; // Max
let cmine = bas.camai + bas.cne; // mine
//b.cet + bas.cer + bas.cmi + bas.cne; //cmine;
let cetermine = bas.ce + bas.ct + bas.ce + bas.cr + bas.cm + bas.ci + bas.cn + bas.ce; // etermine
let cingle = bas.cin + bas.cgl + bas.ce; // ingle
let clace = bas.cla + bas.cce; // lace
let ceplace = bas.cep + clace; // eplace
let clean = bas.cle + bas.can; // lean
let cver = bas.cve + bas.cr; // ver
let cVer = bas.cVe + bas.cr; // Ver
let cvert = cver + bas.ct; // vert
let convert = bas.con + cvert; // onvert
let crate = bas.cra + bas.cte; // crate
let cenerate = bas.cen + bas.ce + crate; // enerate
let cdom = bas.cdo + bas.cm; // dom
let candom = bas.can + cdom; // andom
let create = bas.cre + cate; // reate
let carn = bas.car + bas.cn; // arn
let carning = carn + cing; // arning
let crror = bas.crr + bas.cor; // rror
let cRROR = bas.cRR + bas.cOR; // RROR
let card = bas.car + bas.cd; // ard
let cose = bas.cos + bas.ce; // ose
let cray = bas.cra + bas.cy; // ray
let cmel = bas.cme + bas.cl; // mel
let cound = bas.cou + bas.cnd; // ound
let cdot = bas.cd + bas.cot; // dot
let cDot = bas.cD + bas.cot; // Dot
let cart = bas.car + bas.ct; // art
let cize = bas.ciz + bas.ce; // ize
let cmal = bas.cma + bas.cl; // mal
let cormal = bas.cor + cmal; // ormal
let cegree = bas.ceg + bas.cre + bas.ce; // egree
let ccir = bas.cci + bas.cr; // cir
let cCir = bas.cCi + bas.cr; // Cir
let ccle = bas.ccl + bas.ce; // cle
let care = bas.car + bas.ce; // are
let cquare = bas.cqu + care; // quare
let cgle = bas.cgl + bas.ce; // gle
let ctri = bas.ctr + bas.ci; // tri
let cTri = bas.cTr + bas.ci; // Tri
let crec = bas.cre + bas.cc; // rec
let cRec = bas.cRe + bas.cc; // Rec
let crect = crec + bas.ct; // rect
let cRect = cRec + bas.ct; // Rect
let coct = bas.coc + bas.ct; // oct
let cOct = bas.cOc + bas.ct; // Oct
let cgon = bas.cgo + bas.cn; // gon
let chex = bas.che + bas.cx; // hex
let cHex = bas.cHe + bas.cx; // Hex
let chep = bas.che + bas.cp; // hep
let cHep = bas.cHe + bas.cp; // Hep
let cnon = bas.cno + bas.cn; // non
let cNon = bas.cNo + bas.cn; // Non
let crap = bas.cra + bas.cp; // rap
let czoid = bas.czo + bas.cid; // zoid
let cfra = bas.cfr + bas.ca; // fra
let cFra = bas.cFr + bas.ca; // Fra
let ctra = bas.ctr + bas.ca; // tra
let cTra = bas.cTr + bas.ca; // Tra
let ctrans = ctra + bas.cns; // trans
let cTrans = cTra + bas.cns; // Trans
let cint = bas.cin + bas.ct; // int
let cloc = bas.clo + bas.cc; // loc
let cLoc = bas.cLo + bas.cc; // Loc
let cation = bas.ca + ction; // ation
let cort = bas.cor + bas.ct; // ort
let csim = bas.csi + bas.cm; // sim
let cSim = bas.cSi + bas.cm; // Sim
let cplify = bas.cpl + bas.cif + bas.cy; // plify
let csol = bas.cso + bas.cl; // sol
let ccomp = bas.cco + bas.cmp; // comp
let cComp = bas.cCo + bas.cmp; // Comp
let cideo = bas.cid + bas.ceo; // ideo
let cnteger = bas.cnt + bas.ceg + bas.cer; // nteger
let cloat = bas.clo + bas.cat; // loat
let cong = bas.con + bas.cg; // ong
let chort = bas.ch + cort; // hort
let cble = bas.cbl + bas.ce; // ble
let couble = bas.cou + cble; // ouble
let cduct = bas.cdu + bas.cct; // duct
let cgate = bas.cga + bas.cte; // gate
let cggregate = bas.cgg + bas.cre + cgate; // ggregate
let cDiff = bas.cDi + bas.cff; // Diff
let cenc = bas.cen + bas.cc; // enc
let cence = cenc + bas.ce; // ence
let cain = bas.cai + bas.cn; // ain
let ctch = bas.ctc + bas.ch; // tch
let cween = bas.cwe + bas.cen; // ween
let cord = bas.cor + bas.cd; // ord
let cmap = bas.cma + bas.cp; // map
let cMap = bas.cMa + bas.cp; // Map
let cess = bas.ce + bas.css; // ess
let cres = bas.cre + bas.cs; // res
let cRes = bas.cRe + bas.cs; // Res
let cress = bas.cr + cess; // ress
let ceat = bas.ce + bas.cat; // eat
let chen = bas.ch + bas.cen; // hen
let chan = bas.ch + bas.can; // han
let clica = bas.cli + bas.cca; // lica
let cLICA = bas.cLI + bas.cCA; // LICA
let capp = bas.ca + bas.cpp; // app
let cApp = bas.cA + bas.cpp; // App
let cAPP = bas.cA + bas.cPP; // APP
let coot = bas.coo + bas.ct; // oot
let crse = bas.crs + bas.ce; // rse
let cRSE = bas.cRS + bas.cE; // RSE
let cars = bas.car + bas.cs; // ars
let carse = bas.ca + crse; // arse
let cARSE = bas.cA + cRSE; // ARSE
let cwap = bas.cwa + bas.cp; // wap
let cward = bas.cwa + bas.crd; // ward
let clash = bas.cla + bas.csh; // lash
let cENV = bas.cE + bas.cNV; // ENV
let cavigate = bas.cav + bas.cig + cate; // avigate
let cness = bas.cne + bas.css; // ness
let cusiness = bas.cus + bas.ci + cness; // usiness
let cule = bas.cul + bas.ce; // ule
let cait = bas.cai + bas.ct; // ait
let cesh = bas.ce + bas.csh; // esh
let cval = bas.cv + bas.cal; // val
let cemo = bas.ce + bas.cmo; // emo
let cmon = bas.cmo + bas.cn; // mon
let common = bas.com + cmon; // ommon
let clti = bas.clt + bas.ci; // lti
let cmulti = bas.cmu + clti; // multi
let cMulti = bas.cMu + clti; // Multi
let cple = bas.cpl + bas.ce; // ple
let cPLE = bas.cPL + bas.cE; // PLE
let cnal = bas.cna + bas.cl; // nal
let cexe = bas.cex + bas.ce; // exe
let cExe = bas.cEx + bas.ce; // Exe
let cper = bas.cpe + bas.cr; // per
let cPer = bas.cPe + bas.cr; // Per
let casic = bas.cas + bas.cic; // asic
let cven = bas.cve + bas.cn; // ven
let cVEN = bas.cVE + bas.cN; // VEN
let cvent = cven + bas.ct; // vent;
let carg = bas.car + bas.cg; // arg
let cArg = bas.cAr + bas.cg; // Arg
let crive = bas.cri + bas.cve; // rive
let cloy = bas.clo + bas.cy; // loy
let cLOY = bas.cLO + bas.cY; // LOY
let cumber = bas.cum + bas.cb + bas.cer; // umber
let ccond = bas.cco + bas.cnd; // cond
let cieth = bas.cie + bas.cth; // ieth
let ctieth = bas.ct + cieth; // tieth
let cont = bas.con + bas.ct; // ont
let cull = bas.cul + bas.cl; // ull
let cmod = bas.cmo + bas.cd; // mod
let cMod = bas.cMo + bas.cd; // Mod
let ccol = bas.cco + bas.cl; // col
let cCol = bas.cCo + bas.cl; // Col
let creen = bas.cre + bas.cen; // reen
let clue = bas.clu + bas.ce; // lue Referance to Tron here! :-P
let cyan = bas.cy + bas.can; // yan
let cite = bas.cit + bas.ce; // ite
let cang = bas.can + bas.cg; // ang
let cange = cang + bas.ce; // ange
let cANGE = bas.cAN + bas.cGE; // ANGE
let cost = bas.cos + bas.ct; // ost
let cular = bas.cul + bas.car; // ular
let cdrom = bas.cdr + bas.com; // drom
let cdrome = cdrom + bas.ce; // drome
let cave = bas.cav + bas.ce; // ave
let cAve = bas.cAv + bas.ce; // Ave
let ccli = bas.ccl + bas.ci; // cli
let cCli = bas.cCl + bas.ci; // Cli
let cules = bas.cul + bas.ces; // ules
let cent = bas.cen + bas.ct; // ent
let centa = cent + bas.ca; // enta
let cust = bas.cus + bas.ct; // ust
let ccust = bas.cc + cust; // cust
let cCust = bas.cC + cust; // Cust
let cmand = bas.cma + bas.cnd; // mand
let cMAND = bas.cMA + bas.cND; // MAND
let clob = bas.clo + bas.cb; // lob
let cram = bas.cra + bas.cm; // ram
let crame = cram + bas.ce; // rame
let cias = bas.cia + bas.cs; // ias
let cbout = bas.cbo + bas.cut; // bout Bout time we added this one! LOL
let cseq = bas.cse + bas.cq; // seq
let cSeq = bas.cSe + bas.cq; // Seq
let cncer = bas.cnc + bas.cer; // ncer
let cpri = bas.cpr + bas.ci; // pri
let cPri = bas.cPr + bas.ci; // Pri
let cmary = bas.cma + bas.cry; // mary
let cmit = bas.camai + bas.ct; // mit
let ctert = bas.cte + bas.crt; // tert
let cTert = bas.cTe + bas.crt; // Tert
let ctar = bas.cta + bas.cr; // tar
let cTar = bas.cTa + bas.cr; // Tar
let ctart = ctar + bas.ct; // tart
let cTart = cTar + bas.ct; // Tart poptart....LOL
let crint = bas.cri + bas.cnt; // rint
let cgen = bas.cge + bas.cn; // gen
let cGen = bas.cGe + bas.cn; // Gen
let cator = bas.cat + bas.cor; // ator
let cdex = bas.cde + bas.cx; // dex
let call = bas.cal + bas.cl; // all
let cAll = bas.cAl + bas.cl; // All
let creg = bas.cre + bas.cg; // reg
let cReg = bas.cRe + bas.cg; // Reg
let ctain = bas.cta + bas.cin; // tain
let cmet = bas.cme + bas.ct; // met
let cMet = bas.cMe + bas.ct; // Met
let cric = bas.cri + bas.cc; // ric
let cack = bas.cac + bas.ck; // ack
let cdev = bas.cde + bas.cv; // dev
let cDev = bas.cDe + bas.cv; // Dev
let cDEV = bas.cDE + bas.cV; // DEV
let cprod = bas.cpr + bas.cod; // prod
let cProd = bas.cPr + bas.cod; // Prod
let cPROD = bas.cPR + bas.cOD; // PROD
let cana = bas.can + bas.ca; // ana
let cAna = bas.cAn + bas.ca; // Ana
let csis = bas.csi + bas.cs; // sis
let crage = bas.cra + bas.cge; // rage
let cear = bas.cea + bas.cr; // ear
let crgb = bas.crg + bas.cb; // rgb
let cass = bas.ca + bas.css; // ass
let cASS = bas.cA + bas.cSS; // ASS
let cind = bas.cin + bas.cd; // ind
let clin = bas.cli + bas.cn; // lin
let cLin = bas.cLi + bas.cn; // Lin
let ccom = bas.cco + bas.cm; // com
let cCom = bas.cCo + bas.cm; // Com
let cCOM = bas.cCO + bas.cM; // COM
let cubic = bas.cub + bas.cic; // ubic
let cane = bas.can + bas.ce; // ane
let curve = bas.cur + bas.cve; // urve
let cqua = bas.cqu + bas.ca; // qua
let cQua = bas.cQu + bas.ca; // Qua
let crtic = bas.crt + bas.cic; // rtic
let csec = bas.cse + bas.cc; // sec
let cSec = bas.cSe + bas.cc; // Sec
let cuni = bas.cun + bas.ci; // uni
let cUni = bas.cUn + bas.ci; // Uni
let chyper = bas.chy + cper; // hyper
let cHyper = bas.cHy + cper; // Hyper
let cbol = bas.cbo + bas.cl; // bol
let cbola = cbol + bas.ca; // bola
let cstant = bas.cst + bas.can + bas.ct; //stant
let ciso = bas.cis + bas.co; // iso
let cIso = bas.cIs + bas.co; // Iso
let ctope = bas.cto + bas.cpe; // tope
let cphon = bas.cph + bas.con; // phon
let cPhon = bas.cPh + bas.con; // Phon
let cics = bas.cic + bas.cs; // ics
let csha = bas.csh + bas.ca; // sha
let cSha = bas.cSh + bas.ca; // Sha
let cail = bas.cai + bas.cl; // ail
let cAIL = bas.cAI + bas.cL; // AIL
let clay = bas.cla + bas.cy; // lay
let cLay = bas.cLa + bas.cy; // Lay
let csug = bas.csu + bas.cg; // sug
let cSug = bas.cSu + bas.cg; // Sug
let cgest = bas.cge + bas.cst; // gest
let cGest = bas.cGe + bas.cst; // Gest
let cect = bas.cec + bas.ct; // ect
let croject = bas.cro + bas.cj + cect; // roject
let cell = bas.cel + bas.cl; // ell
let cnion = bas.cni + bas.con; // nion
let ceta = bas.cet + bas.ca; // eta
let ccent = bas.cce + bas.cnt; // cent
let cChi = bas.cCh + bas.ci; // Chi
let cild = bas.cil + bas.cd; // ild
let ccolr = bas.cco + bas.clr; // colr
let cshp = bas.csh + bas.cp; // shp
let cual = bas.cua + bas.cl; // ual
let cied = bas.cie + bas.cd; // ied
let cfied = bas.cf + cied; // fied
let cified = bas.cif + cied; // ified
let cments = cment + bas.cs; // ments
let clop = bas.clo + bas.cp; // lop
let cLOP = bas.cLO + bas.cP; // LOP
let cdest = bas.cde + bas.cst; // dest
let cDest = bas.cDe + bas.cst; // Dest
let cstor = bas.cst + bas.cor; // stor
let cStor = bas.cSt + bas.cor; // Stor
let cequ = bas.ceq + bas.cu; // equ
let cEqu = bas.cEq + bas.cu; // Equ
let cque = bas.cqu + bas.ce; // que
let cQue = bas.cQu + bas.ce; // Que
let cdup = bas.cdu + bas.cp; // dup
let cDup = bas.cDu + bas.cp; // Dup
let ccate = bas.cca + bas.cte; // cate
let cere = bas.cer + bas.ce; // ere
let ceas = bas.cea + bas.cs; // eas
let cease = ceas + bas.ce; // ease
let crev = bas.cre + bas.cv; // rev
let cron = bas.cro + bas.cn; // ron
let colv = bas.col + bas.cv; // olv
let colve = colv + bas.ce; // olve
let ceep = bas.cee + bas.cp; // eep
let ccur = bas.ccu + bas.cr; // cur
let cCur = bas.cCu + bas.cr; // Cur
let csive = bas.csi + bas.cve; // sive
let cexp = bas.cex + bas.cp; // exp
let cExp = bas.cEx + bas.cp; // Exp
let could = bas.cou + bas.cld; // ould
let cike = bas.cik + bas.ce; // ike
let cful = bas.cfu + bas.cl; // ful
let cFul = bas.cFu + bas.cl; // Ful
let cuto = bas.cut + bas.co; // uto
let copt = bas.cop + bas.ct; // opt
let cOpt = bas.cOp + bas.ct; // Opt
let cized = bas.ciz + bas.ced; // ized
let come = bas.com + bas.ce; // ome
let clus = bas.clu + bas.cs; // lus
let clon = bas.clo + bas.cn; // lon
let cizer = bas.ciz + bas.cer; // izer
let cern = bas.cer + bas.cn; // ern
let cerm = bas.cer + bas.cm; // erm
let comb = bas.com + bas.cb; // omb
let ceed = bas.cee + bas.cd; // eed
let coop = bas.coo + bas.cp; // oop
let cood = bas.coo + bas.cd; // ood
let cice = bas.cic + bas.ce; // ice
let ctay = bas.cta + bas.cy; // tay
let cafe = bas.caf + bas.ce; // afe
let cult = bas.cul + bas.ct; // ult
let cULT = bas.cUL + bas.cT; // ULT
let cault = bas.ca + cult; // ault
let cAULT = bas.cA + cULT; // AULT
let clete = bas.cle + bas.cte; // lete
let cger = bas.cge + bas.cr; // ger
let cspec = bas.csp + bas.cec; // spec
let cSpec = bas.cSp + bas.cec; // Spec
let cfic = bas.cfi + bas.cc; // fic
let cific = bas.ci + cfic; // ific
let csuf = bas.csu + bas.cf; // suf
let cSuf = bas.cSu + bas.cf; // Suf
let cance = bas.can + bas.cce; // ance
let cional = bas.cio + cnal; // ional
let ctional = bas.ct + cional; // tional
let ctrad = ctra + bas.cd; // trad - ad is some how a special reserved word of some kind.
let cTrad = cTra + bas.cd; // Trad - ad is some how a special reserved word of some kind.
let ctrol = bas.ctr + bas.col; // trol
let cure = bas.cur + bas.ce; // ure
let csym = bas.csy + bas.cm; // sym
let cSym = bas.cSy + bas.cm; // Sym
let cdel = bas.cde + bas.cl; // del
let cDel = bas.cDe + bas.cl; // Del
let csert = bas.cs + cert; // sert
let csub = bas.csu + bas.cb; // sub
let cSub = bas.cSu + bas.cb; // Sub
let ctit = bas.cti + bas.ct; // tit
let cute = bas.cut + bas.ce; // ute
let ciod = bas.cio + bas.cd; // iod
let ceak = bas.cea + bas.ck; // eak
let cnto = bas.cnt + bas.co; // nto
let cmpt = bas.cmp + bas.ct; // mpt
let cted = bas.cte + bas.cd; // ted
let cist = bas.cis + bas.ct; // ist
let crch = bas.crc + bas.ch; // rch
let cson = bas.cso + bas.cn; // son
let cison = bas.ci + cson; // ison
let cera = bas.cer + bas.ca; // era
let cfore = bas.cfo + bas.cre; // fore
let cFORE = bas.cFO + bas.cRE; // FORE
let cush = bas.cus + bas.ch; // ush
let cUSH = bas.cUS + bas.cH; // USH
let cvel = bas.cve + bas.cl; // vel
let ccess = bas.cce + bas.css; // cess
let cCESS = bas.cCE + bas.cSS; // CESS
let cemp = bas.cem + bas.cp;// emp
let cmas = bas.cma + bas.cs; // mas
let cMas = bas.cMa + bas.cs; // Mas
let cpand = bas.cpa + bas.cnd; // pand
let cook = bas.coo + bas.ck; // ook
let clse = bas.cls + bas.ce; // lse
let cify = bas.cif + bas.cy; // ify
let csup = bas.csu + bas.cp; // sup
let cSup = bas.cSu + bas.cp; // Sup
let cplac = bas.cpl + bas.cac; // plac
let cori = bas.cor + bas.ci; // ori
let cOri = bas.cOr + bas.ci; // Ori
let cinal = bas.cin + bas.cal; // inal
let cpara = bas.cpa + bas.cra; // para
let cPara = bas.cPa + bas.cra; // Para
let cnom = bas.cno + bas.cm; // nom
let cNom = bas.cNo + bas.cm; // Nom
let cther = bas.cth + bas.cer; // ther
let cfin = bas.cfi + bas.cn; // fin
let cFin = bas.cFi + bas.cn; // Fin
let crgs = bas.crg + bas.cs; // rgs
let cample = bas.cam + cple; // ample
let cAMPLE = bas.cAM + cPLE; // AMPLE
let cruc = bas.cru + bas.cc; // ruc
let cture = bas.ct + cure; // ture
let crea = bas.cre + bas.ca; // rea
let cRea = bas.cRe + bas.ca; // Rea
let cREA = bas.cRE + bas.cA; // REA
let ceen = bas.cee + bas.cn; // een
let core = bas.cor + bas.ce; // ore
let cstd = bas.cst + bas.cd; // std
let cStd = bas.cSt + bas.cd; // Std
let cick = bas.cic + bas.ck; // ick
let cote = bas.cot + bas.ce; // ote
let coker = bas.cok + bas.cer; // oker
let crge = bas.crg + bas.ce; // rge
let cRGE = bas.cRG + bas.cE; // RGE
let cerge = bas.ce + crge; // erge
let cERGE = bas.cE + cRGE; // ERGE
let cerg = bas.cer + bas.cg; // erg
let cured = bas.cu + cred; // ured
let cude = bas.cud + bas.ce; // ude
let clude = bas.cl + cude; // lude
let clud = bas.clu + bas.cd; // lud
let ccau = bas.cca + bas.cu; // cau
let cCau = bas.cCa + bas.cu; // Cau
let cght = bas.cgh + bas.ct; // ght
let cned = bas.cne + bas.cd; // ned
let cten = bas.cte + bas.cn; // ten // This is also defined in the numeric constants
let csid = bas.csi + bas.cd; // sid
let cSid = bas.cSi + bas.cd; // Sid
let cifies = bas.cif + cies; // ifies
let cref = bas.cre + bas.cf; // ref
let cRef = bas.cRe + bas.cf; // Ref
let clat = bas.cla + bas.ct; // lat
let crit = bas.cri + bas.ct; // rit
let cleas = bas.cl + ceas; // leas
let cchiv = bas.cch + bas.civ; // chiv
let camp = bas.cam + bas.cp; // amp
let copy = bas.cop + bas.cy; // opy
let cccess = bas.ccc + cess; // ccess
let clyz = bas.cly + bas.cz; // lyz
let clyze = clyz + bas.ce; // lyze
let cbra = bas.cbr + bas.ca; // bra
let cBra = bas.cBr + bas.ca; // Bra
let cket = bas.cke + bas.ct; // ket
let clex = bas.cle + bas.cx; // lex
let cLex = bas.cLe + bas.cx; // Lex
let ccal = bas.cca + bas.cl; // cal
let cical = bas.ci + ccal; // ical
let cicon = bas.ci + ccon; // icon
let clta = bas.clt + bas.ca; // lta
let ceaf = bas.cea + bas.cf; // eaf
let ctity = ctit + bas.cy; // tity
let cnly = bas.cnl + bas.cy; // nly
let cuch = bas.cuc + bas.ch; // uch
let ctan = bas.cta + bas.cn; // tan
let cstan = bas.cs + ctan; // stan
let cistan = cist + bas.can; // istan
let cnistan = bas.cn + cistan; // nistan
let cnia = bas.cni + bas.ca; // nia
let cania = bas.ca + cnia; // ania
let cria = bas.cri + bas.ca; // ria
let ceria = bas.ce + cria; // eria
let cgeria = cger + bas.cia; // geria
let crra = bas.crr + bas.ca; // rra
let cola = bas.col + bas.ca; // ola
let cgua = bas.cgu + bas.ca; // gua
let cina = bas.cin + bas.ca; // ina
let cenia = bas.cen + bas.cia; // enia
let clia = bas.cli + bas.ca; // lia
let calia = bas.ca + clia; // alia
let crain = bas.cra + bas.cin; // rain
let cuda = bas.cud + bas.ca; // uda
let crus = bas.cru + bas.cs; // rus
let cvia = bas.cvi + bas.ca; // via
let cndi = bas.cnd + bas.ci; // ndi
let cdia = bas.cdi + bas.ca; // dia
let cada = bas.ca + bas.cd + bas.ca; // ada
let cnada = bas.cn + cada; // nada
let clic = bas.cli + bas.cc; // lic
let cblic = bas.cb + clic; // blic
let cublic = bas.cu + cblic; // ublic
let cbia = bas.cbi + bas.ca; // bia
let cmbia = bas.cm + cbia; // mbia
let cngo = bas.cng + bas.co; // ngo
let congo = bas.co + cngo; // ongo
let cica = bas.cic + bas.ca; // ica
let cnica = bas.cn + cica; // nica
let cinica = bas.cin + cica; // inica
let cminica = bas.cm + bas.ci + cnica; // minica
let cominica = bas.co + cminica; // ominica
let cdor = bas.cdo + bas.cr; // dor
let cador = bas.ca + cdor; // ador
let cnea = bas.cne + bas.ca; // nea
let cinea = cine + bas.ca; // inea
let cuinea = bas.cu + cinea; // uinea
let conia = bas.con + bas.cia; // onia
let cini = bas.cin + bas.ci; // ini
let cnce = bas.cnc + bas.ce; // nce
let cambia = bas.cam + bas.cbi + bas.ca; // ambia
let cerman = cerm + bas.can; // erman
let crman = bas.crm + bas.can; // rman
let cala = bas.cal + bas.ca; // ala
let citi = bas.cit + bas.ci; // iti
let celand = bas.cel + cand; // eland
let csia = bas.csi + bas.ca; // sia
let cesia = bas.ce + csia; // esia
let cnesia = bas.cn + cesia; // nesia
let conesia = bas.co + cnesia; // onesia
let cran = bas.cra + bas.cn; // ran
let cdan = bas.cda + bas.cn; // dan
let cati = bas.cat + bas.ci; // eti
let ccar = bas.cca + bas.cr; // car
let cali = bas.cal + bas.ci; // ali
let cslands = bas.csl + cand + bas.cs; // slands
let cands = cand + bas.cs; // ands
let cnds = bas.cnd + bas.cs; // nds
let cova = bas.cov + bas.ca; // ova
let cnmar = bas.cnm + bas.car; // nmar
let cmar = bas.cma + bas.cr; // mar
let curu = bas.cur + bas.cu; // uru
let cagua = bas.cag + bas.cua; // agua
let cragua = bas.cr + cagua; // ragua
let caragua = cara + bas.cgu + bas.ca; // aragua
let ciger = bas.cig + bas.cer; // iger
let corea = core + bas.ca; // orea
let ckistan = bas.cki + bas.cst + bas.can; // kistan
let cama = bas.cam + bas.ca; // ama
let cguay = bas.cgu + bas.cay; // guay
let cuay = bas.cua + bas.cy; // uay
let cnes = bas.cne + bas.cs; // nes
let cgal = bas.cga + bas.cl; // gal
let cnda = bas.cnd + bas.ca; // nda
let canda = cand + bas.ca; // anda
let cles = bas.cle + bas.cs; // les
let crica = cric + bas.ca; // rica
let cfrica = bas.cf + crica; // frica
let cudan = bas.cud + bas.can; // udan
let crland = bas.crl + cand; // rland
let cerland = bas.ce + crland; // erland
let cste = bas.cst + bas.ce; // ste
let cnga = bas.cng + bas.ca; // nga
let cates = cate + bas.cs; // ates
let ctes = bas.cte + bas.cs; // tex
let cela = bas.cel + bas.ca; // ela
let cnam = bas.cna + bas.cm; // nam
let cmen = bas.cme + bas.cn; // men
let cogen = bas.cog + bas.cen; // ogen
let crogen = bas.cr + cogen; // rogen
let cium = bas.ciu + bas.cm; // ium
let clium = bas.cl + cium; // lium
let celium = bas.ce + clium; // elium
let chium = bas.chi + bas.cum; // hium
let cthium = bas.ct + chium; // thium
let cllium = bas.cll + bas.ciu + bas.cm; // llium
let clorine = bas.clo + bas.cri + bas.cne; // lorine
let crine = bas.cri + bas.cne; // rine
let corine = cori + bas.cne; // orine
let cdium = bas.cdi + bas.cum; // dium
let codium = bas.co + cdium; // odium
let csium = bas.csi + bas.cum; // sium
let cesium = bas.ce + csium; // esium
let cnum = bas.cnu + bas.cm; // num
let cinum = bas.ci + cnum; // inum
let cssium = bas.css + bas.ciu + bas.cm; // ssium
let cassium = cass + bas.ciu + bas.cm; // assium
let ccium = bas.cc + cium; // cium
let cndium = cndi + bas.cum; // ndium
let canium = bas.can + cium; // anium
let cnium = bas.cni + bas.cum; // nium
let cadium = bas.ca + bas.cd + bas.ciu + bas.cm; // adium
let cmium = bas.camai + bas.cum; // mium
let ckel = bas.cke + bas.cl; // kel
let callium = call + cium; // allium
let cnic = bas.cni + bas.cc; // nic
let cenium = bas.cen + cium; // enium
let cton = bas.cto + bas.cn; // ton
let cidium = bas.cid + cium; // idium
let ctium = bas.ct + cium; // tium
let crium = bas.cr + cium; // rium
let conium = bas.con + cium; // onium
let cbium = bas.cb + cium; // bium
let cetium = bas.cet + cium; // etium
let chenium = chen + cium; // henium
let curium = bas.cur + cium; // urium
let carium = bas.car + cium; // arium
let cerium = bas.cer + cium; // erium
let cymium = bas.cym + cium; // ymium
let cdymium = bas.cd + cymium; // dymium
let codymium = bas.co + cdymium; // odymium
let ceodymium = bas.ceo + cdymium; // eodymium
let cinium = cini + bas.cum; // inium
let crbium = bas.crb + cium; // rbium
let cerbium = bas.ce + crbium; // erbium
let clum = bas.clu + bas.cm; // clum
let cuth = bas.cut + bas.ch; // uth
let cncium = bas.cnc + cium; // ncium
let ctinium = bas.cti + bas.cni + bas.cum; // tiniium
let cctinium = bas.cc + ctinium; // ctinium
let corium = cori + bas.cum; // orium
let cicium = bas.cic + cium; // icium
let cvium = bas.cv + cium; // vium
let covium = bas.co + cvium; // ovium
let cero = bas.cer + bas.co; // ero
let colet = bas.col + bas.cet; // olet
let ciolet = bas.ci + colet; // iolet
let cster = cste + bas.cr; // ster
let cnge = bas.cng + bas.ce; // nge
let cond = bas.con + bas.cd; // ond
let cmond = bas.cm + cond; // mond
let clmond = bas.cl + cmond; // lmond
let canth = bas.can + bas.cth; // anth
let cranth = bas.cr + canth; // ranth
let caranth = bas.ca + cranth; // aranth
let cmaranth = bas.cm + caranth; // maranth
let cink = bas.cin + bas.ck; // ink
let crple = bas.crp + bas.cle; // rple
let curple = bas.cu + crple; // urple
let cmber = bas.cmb + bas.cer; // mber
let cber = bas.cbe + bas.cr; // ber
let cBer = bas.cBe + bas.cr; // Ber
let cyst = bas.cys + bas.ct; // yst
let cnze = bas.cnz + bas.ce; // nze
let conze = bas.co + cnze; // onze
let cronze = bas.cr + conze; // ronze
let chsia = bas.chs + bas.cia; // hsia
let cchsia = bas.cc + chsia; // chsia
let cuchsia = bas.cu + cchsia; // uchsia
let cuby = bas.cub + bas.cy; // uby
let chite = bas.chi + bas.cte; // hite
let clish = bas.cli + bas.csh; // lish
let cglish = bas.cg + clish; // glish
let cnglish = bas.cn + cglish; // nglish
let ccot = bas.cco + bas.ct; // cot
let cicot = bas.ci + ccot; // icot
let cricot = bas.cr + cicot; // ricot
let cpricot = bas.cp + cricot; // pricot
let carine = bas.car + cine; // arine
let coke = bas.cok + bas.ce; // oke
let cllow = bas.cll + bas.cow; // llow
let cellow = bas.ce + cllow; // ellow
let cerine = bas.cer + cine; // erine
let cgerine = bas.cg + cerine; // gerine
let cngerine = bas.cn + cgerine; // ngerine
let cangerine = cange + crine; // angerine
let curn = bas.cur + bas.cn; // urn
let colin = bas.col + bas.cin; // olin
let cado = bas.ca + bas.cdo; // ado
let czure = bas.czu + bas.cre; // zure
let cwder = bas.cw + cder; // wder
let cowder = bas.co + cwder; // owder
let crey = bas.cre + bas.cy; // rey
let cige = bas.cig + bas.ce; // ige
let ceige = bas.ce + cige; // eige
let ctre = bas.ctr + bas.ce; // tre
let cstre = bas.cs + ctre; // stre
let cistre = bas.ci + cstre; // istre
let cown = bas.cow + bas.cn; // own
let crown = bas.cr + cown; // rown
let cemon = cemo + bas.cn; // emon
let ceet = bas.cee + bas.ct; // eet
let cweet = bas.cw + ceet; // weet
let cmer = bas.cme + bas.cr; // mer
let cmmer = bas.cm + cmer; // mmer
let cimmer = bas.ci + cmmer; // immer
let chimmer = bas.ch + cimmer; // himmer
let cean = bas.cea + bas.cn; // ean
let clate = clat + bas.ce; // late
let colate = bas.co + clate; // olate
let ccolate = bas.cc + colate; // colate
let cocolate = bas.co + ccolate; // ocolate
let chocolate = bas.ch + cocolate; // hocolate
let cfee = bas.cfe + bas.ce; // fee
let cffee = bas.cf + cfee; // ffee
let coffee = bas.co + cffee; // offee
let coral = bas.cor + bas.cal; // oral
let clive = bas.cli + bas.cve; // live
let cyola = bas.cyo + bas.cla; // yola
let cayola = bas.ca + cyola; // ayola
let crayola = bas.cr + cayola; // rayola
let csell = bas.cse + bas.cll; // sell
let cnsell = bas.cn + csell; // nsell
let cunsell = bas.cu + cnsell; // unsell
let cNCS = bas.cNC + bas.cS; // NCS
let ctone = cton + bas.ce; // tone
let cntone = bas.cn + ctone; // ntone
let cantone = bas.ca + cntone; // antone
let cgment = bas.cgm + cent; // gment
let cigment = bas.ci + cgment; // igment
let cRYB = bas.cRY + bas.cB; // RYB
let cheel = bas.che + bas.cel; // heel
let ceel = bas.cee + bas.cl; // eel
let cans = bas.can + bas.cs; // ans
let cire = bas.cir + bas.ce; // ire
let chire = bas.ch + cire; // hire
let cphire = bas.cp + chire; // phire
let cpphire = bas.cp + cphire; // pphire
let capphire = bas.ca + cpphire; // apphire
let cnder = bas.cnd + bas.cer; // nder
let conder = bas.co + cnder; // onder
let cole = bas.col + bas.ce; // ole
let cndy = bas.cnd + bas.cy; // ndy
let candy = bas.ca + cndy; // andy
let clac = bas.cla + bas.cc; // lac
let cilac = bas.ci + clac; // ilac
let coon = bas.coo + bas.cn; // oon
let croon = bas.cr + coon; // roon
let caroon = bas.ca + croon; // aroon
let cgar = bas.cga + bas.cr; // gar
let cugar = bas.cu + cgar; // ugar
let cuff = bas.cuf + bas.cf; // uff
let cundy = cund + bas.cy; // undy
let cgundy = bas.cg + cundy; // gundy
let crgundy = bas.cr + cgundy; // rgundy
let curgundy = bas.cu + crgundy; // urgundy
let cnna = bas.cnn + bas.ca; // nna
let cenna = bas.ce + cnna; // enna
let cienna = bas.ci + cenna; // ienna
let cntium = bas.cnt + cium; // ntium
let cantium = bas.ca + cntium; // antium
let czantium = bas.cz + cantium; // zantium
let cyzantium = bas.cy + czantium; // yzantium
let cdet = bas.cde + bas.ct; // det
let cadet = bas.ca + cdet; // adet
let cnary = bas.cna + bas.cry; // nary
let canary = bas.ca + cnary; // anary
let crmine = bas.cr + cmine; // rmine
let carmine = bas.ca + crmine; // armine
let chest = bas.che + bas.cst; // hest
let cdon = bas.cdo + bas.cn; // don
let cadon = bas.ca + cdon; // adon
let cladon = bas.cl + cadon; // ladon
let celadon = bas.ce + cladon; // eladon
let cise = bas.cis + bas.ce; // ise
let crise = bas.cr + cise; // rise
let cerise = bas.ce + crise; // erise
let culean = cule + bas.can; // ulean
let crulean = bas.cr + culean; // rulean
let cerulean = bas.ce + crulean; // erulean
let crost = bas.cro + bas.cst; // rost
let cgne = bas.cgn + bas.ce; // gne
let cagne = bas.ca + cgne; // agne
let cpagne = bas.cp + cagne; // pagne
let cmpagne = bas.cm + cpagne; // mpagne
let campagne = bas.ca + cmpagne; // ampagne
let champagne = bas.ch + campagne; // hampagne
let conal = bas.con + bas.cal; // onal
let citional = citi + conal; // itional
let cditional = bas.cd + citional; // ditional
let caditional = bas.ca + cditional; // aditional
let craditional = bas.cr + caditional; // raditional
let ctin = bas.cti + bas.cn; // tin
let catin = bas.ca + ctin; // atin
let cpper = bas.cpp + bas.cer; // pper
let copper = bas.co + cpper; // opper
let cnny = bas.cnn + bas.cy; // nny
let corn = bas.cor + bas.cn; // orn
let cilk = bas.cil + bas.ck; // ilk
let calt = bas.cal + bas.ct; // alt
let cbalt = bas.cb + calt; // balt
let cobalt = bas.co + cbalt; // obalt
let ctte = bas.ctt + bas.ce; // tte
let catte = bas.ca + ctte; // atte
let ceam = bas.cea + bas.cm; // eam
let cream = bas.cr + ceam; // ream
let cmson = bas.cms + bas.con; // mson
let cimson = bas.ci + cmson; // imson
let crimson = bas.cr + cimson; // rimson
let cocess = bas.coc + cess; // ocess
let crocess = bas.cr + cocess; // rocess
let cape = bas.cap + bas.ce; // ape
let camen = came + bas.cn; // amen
let caki = bas.cak + bas.ci; // aki
let chaki = bas.ch + caki; // haki
let cava = bas.cav + bas.ca; // ava
let civer = cive + bas.cr; // iver
let cnta = bas.cnt + bas.ca; // nta
let cgenta = bas.cge + cnta; // genta
let cagenta = bas.ca + cgenta; // agenta
let chid = bas.chi + bas.cd; // hid
let cchid = bas.cc + chid; // chid
let crchid = bas.cr + cchid; // rchid
let clmon = bas.clm + bas.con; // lmon
let calmon = bas.ca + clmon; // almon
let coise = bas.coi + bas.cse; // oise
let cuoise = bas.cu + coise; // uoise
let cquoise = bas.cq + cuoise; // quoise
let crquoise = bas.cr + cquoise; // rquoise
let curquoise = bas.cu + crquoise; // urquoise
let cfron = bas.cf + cron; // fron
let cffron = bas.cf + cfron; // ffron
let caffron = bas.ca + cffron; // affron
let ckle = bas.ckl + bas.ce; // kle
let cupe = bas.cup + bas.ce; // upe
let caupe = bas.ca + cupe; // aupe
let cnim = bas.cni + bas.cm; // nim
let cenim = bas.ce + cnim; // enim
let cesert = cese + bas.crt; // esert
let crab = bas.cra + bas.cb; // rab
let cbony = bas.cbo + bas.cny; // bony
let cony = bas.con + bas.cy; // ony
let cant = bas.can + bas.ct; // ant
let chell = bas.che + bas.cll; // hell
let cigo = bas.cig + bas.co; // igo
let cdigo = bas.cd + cigo; // digo
let cndigo = bas.cn + cdigo; // ndigo
let cald = bas.cal + bas.cd; // ald
let crald = bas.cr + cald; // rald
let cerald = bas.ce + crald; // erald
let cmerald = bas.cm + cerald; // merald
let cender = bas.cen + cder; // ender
let cvender = bas.cv + cender; // vender
let cavender = bas.ca + cvender; // avender
let crin = bas.cri + bas.cn; // rin
let cango = bas.can + bas.cgo; // ango
let cdango = bas.cd + cango; // dango
let cndango = bas.cn + cdango; // ndango
let candango = bas.ca + cndango; // andango
let cawn = bas.caw + bas.cn; // awn
let crick = cric + bas.ck; // rick
let clame = bas.cla + bas.cme; // lame
let cuve = bas.cuv + bas.ce; // uve
let cauve = bas.ca + cuve; // auve
let crry = bas.crr + bas.cy; // rry
let cerry = bas.ce + crry; // erry
let cdian = cdia + bas.cn; // dian
let cidian = bas.ci + cdian; // idian
let cridian = bas.cr + cidian; // ridian
let ciridian = bas.ci + cridian; // iridian
let cllic = bas.cll + bas.cic; // llic
let callic = bas.ca + cllic; // allic
let ctallic = bas.ct + callic; // tallic
let cetallic = bas.ce + ctallic; // etallic
let cden = bas.cde + bas.cn; // den
let clden = bas.cl + cden; // lden
let colden = bas.co + clden; // olden
let cpple = bas.cpp + bas.cle; // pple
let czard = bas.cza + bas.crd; // zard
let cheen = bas.che + bas.cen; // heen
let cllo = bas.cll + bas.co; // llo
let cetal = bas.cet + bas.cal; // etal
let ctal = bas.cta + bas.cl; // tal
let cuin = bas.cui + bas.cn; // uin
let cope = bas.cop + bas.ce; // ope
let cpace = bas.cpa + bas.cce; // pace
let cris = bas.cri + bas.cs; // ris
let cade = bas.ca + bas.cde; // ade
let cobe = bas.cob + bas.ce; // obe
let cobi = bas.cob + bas.ci; // obi
let ccha = bas.cch + bas.ca; // cha
let culi = bas.cul + bas.ci; // uli
let cloral = bas.clo + cral; // loral
let cier = bas.cie + bas.cr; // ier
let cnkle = bas.cnk + bas.cle; // nkle
let cinkle = bas.ci + cnkle; // inkle
let cnen = bas.cne + bas.cn; // nen
let cinen = bas.ci + cnen; // inen
let cgan = bas.cga + bas.cn; // gan
let cvid = bas.cvi + bas.cd; // vid
let civid = bas.ci + cvid; // ivid
let cake = bas.cak + bas.ce; // ake
let caze = bas.caz + bas.ce; // aze
let cany = bas.can + bas.cy; // any
let caize = bas.cai + bas.cze; // aize
let ctee = bas.cte + bas.ce; // tee
let carin = bas.car + bas.cin; // arin
let ctis = bas.cti + bas.cs; // tis
let cras = bas.cra + bas.cs; // ras
let celon = bas.cel + bas.con; // elon
let caro = bas.car + bas.co; // aro
let coss = bas.cos + bas.cs; // oss
let cdow = bas.cdo + bas.cw; // dow
let cadow = bas.ca + cdow; // adow
let ctic = bas.cti + bas.cc; // tic
let cstic = bas.cs + ctic; // stic
let cystic = bas.cy + cstic; // ystic
let crot = bas.cro + bas.ct; // rot
let crrot = bas.cr + crot; // rrot
let carrot = bas.ca + crrot; // arrot
let clver = bas.clv + bas.cer; // lver
let cilver = bas.ci + clver; // ilver
let clood = bas.clo + bas.cod; // lood
let chip = bas.chi + bas.cp; // hip
let cach = bas.cac + bas.ch; // ach
let ceach = bas.ce + cach; // each
let cree = bas.cre + bas.ce; // ree
let chio = bas.chi + bas.co; // hio
let cower = bas.cow + bas.cer; // ower
let cwer = bas.cwe + bas.cr; // wer
let cstar = bas.cst + bas.car; // star
let cune = bas.cun + bas.ce; // une
let ckin = bas.cki + bas.cn; // kin
let csty = bas.cst + bas.cy; // sty
let cavy = bas.cav + bas.cy; // avy
let cazz = bas.caz + bas.cz; // azz
let creus = bas.cre + bas.cus; // reus
let ceus = bas.ceu + bas.cs; // eus
let cbon = bas.cbo + bas.cn; // bon
let cdder = bas.cdd + bas.cer; // dder
let cadder = bas.ca + cdder; // adder
let cale = bas.cal + bas.ce; // ale
let cark = bas.car + bas.ck; // ark
let cpia = bas.cpi + bas.ca; // pia
let chadow = bas.cha + cdow; // hadow
let cock = bas.coc + bas.ck; // ock
let ctten = bas.ctt + bas.cen; // tten
let ceal = bas.cea + bas.cl; // eal
let ctraw = ctra + bas.cw; // traw
let craw = bas.cra + bas.cw; // raw
let ctle = bas.ctl + bas.ce; // tle
let cstle = bas.cs + ctle; // stle
let crest = cres + bas.ct; // rest
let corest = bas.co + crest; // orest
let ccan = bas.cca + bas.cn; // can
let cuscan = bas.cus + ccan; // uscan
let clla = bas.cll + bas.ca; // lla
let cilla = bas.ci + clla; // illa
let cnilla = bas.cn + cilla; // nilla
let canilla = bas.ca + cnilla; // anilla
let cilion = cili + bas.con; // ilion
let cmilion = bas.cm + cilion; // milion
let crmilion = bas.cr + cmilion; // rmilion
let cermilion = bas.ce + crmilion; // ermilion
let chine = bas.chi + bas.cne; // hine
let comp = bas.com + bas.cp; // omp
let cclr = bas.ccl + bas.cr; // clr
let cded = bas.cde + bas.cd; // ded
let cbing = bas.cb + cing; // bing
let ceth = bas.cet + bas.ch; // eth
let clang = bas.cl + cang; // lang
let cLang = bas.cL + cang; // Lang
let cuage = bas.cu + cage; // uage
let cries = bas.cr + cies; // ries
let ciss = bas.cis + bas.cs; // iss
let cinc = bas.cin + bas.cc; // inc
let cInc = bas.cIn + bas.cc; // Inc
let cmum = bas.cmu + bas.cm; // mum
let cimum = bas.ci + cmum; // imum
let crix = bas.cri + bas.cx; // rix
let cled = bas.cle + bas.cd; // led
let cLed = bas.cLe + bas.cd; // Led
let cLED = bas.cLE + bas.cD; // LED
let cling = clin + bas.cg; // ling
let cler = bas.cle + bas.cr; // ler
let ching = bas.ch + cing; // hing

module.exports = {
  // Reusable Grammer
  ['chree']: bas.chr + bas.cee, // hree
  ['cour']: bas.cou + bas.cr, // our
  ['cive']: bas.civ + bas.ce, // ive
  ['ceven']: bas.cev + bas.cen, // even
  ['cight']: bas.cig + bas.cht, // ight
  ['cine']: bas.cin + bas.ce, // ine
  ['cleven']: bas.cl + bas.cev + bas.cen, // leven
  ['cwelve']: bas.cwe + bas.clv + bas.ce, // welve
  ['cteen']: bas.ct + bas.cee + bas.cn, // teen
  ['chir']: bas.chi + bas.cr, // hir
  ['cigh']: bas.cig + bas.ch, // igh
  ['cwenty']: bas.cw + bas.cen + bas.cty, // wenty
  ['chirty']: bas.chi + bas.cr + bas.cty, // hirty
  ['cifty']: bas.cif + bas.cty, // ifty
  ['cred']: bas.cre + bas.cd, // red
  ['cgreen']: bas.cgr + bas.cee + bas.cn, // green
  ['cblue']: bas.cbl + bas.cue, // blue
  ['cund']: bas.cun + bas.cd, // und
  ['cundred']: cund + cred, // undred
  ['cand']: bas.can + bas.cd, // and
  ['csand']: bas.cs + cand, // sand
  ['chousand']: bas.cho + bas.cu + csand, // housand
  ['cion']: bas.cio + bas.cn, // ion
  ['cION']: bas.cIO + bas.cN, // ION
  ['csion']: bas.cs + cion, // sion
  ['cill']: bas.ci + bas.cll, // ill
  ['cillion']: cill + cion, // illion
  ['crue']: bas.cru + bas.ce, // rue
  ['calse']: bas.cal + bas.cse, // alse
  ['ction']: bas.ct + cion, // tion
  ['cTION']: bas.cT + cION, // TION
  ['cction']: bas.cc + ction, // ction
  ['cmation']: bas.cma + ction, // mation
  ['cition']: bas.ci + ction, // ition
  ['cITION']: bas.cI + cTION, // ITION
  ['cage']: bas.cag + bas.ce, // age
  ['cest']: bas.ces + bas.ct, // est
  ['chare']: bas.cha + bas.cre, // hare
  ['c_lass']: bas.cla + bas.css, // lass
  ['ctemp']: bas.cte + bas.cmp, // temp
  ['chref']: bas.chr + bas.cef, // href
  ['cABC']: bas.cAB + bas.cC, // ABC
  ['came']: bas.cam + bas.ce, // ame
  ['cile']: bas.cil + bas.ce, // ile
  ['cext']: bas.cex + bas.ct, // ext
  ['cExt']: bas.cEx + bas.ct, // Ext
  ['clpha']: bas.clp + bas.cha, // lpha
  ['ccon']: bas.cco + bas.cn, // con
  ['cCon']: bas.cCo + bas.cn, // Con
  ['cable']: bas.cab + bas.cle, // able
  ['calid']: bas.cal + bas.cid, // alid
  ['cALID']: bas.cAL + bas.cID, // ALID
  ['cing']: bas.cin + bas.cg, // ing
  ['cING']: bas.cIN + bas.cG, // ING
  ['ctring']: bas.ctr + cing, // tring
  ['cbject']: bas.cbj + bas.cec + bas.ct, // bject
  ['cata']: bas.cat + bas.ca, // ata
  ['cATA']: bas.cAT + bas.cA, // ATA
  ['cMac']: bas.cMa + bas.cc, // Mac
  ['cpre']: bas.cpr + bas.ce, // pre
  ['cPre']: bas.cPr + bas.ce, // Pre
  ['cPRE']: bas.cPR + bas.cE, // PRE
  ['colid']: bas.col + bas.cid, // olid
  ['cynch']: bas.cyn + bas.cch, // ynch
  ['celete']: bas.cel + bas.cet + bas.ce, // elete
  ['cnner']: bas.cnn + bas.cer, // nner
  ['click']: bas.cli + bas.cck, // lick
  ['cctr']: bas.cct + bas.cr, // ctr
  ['cctrl']: cctr + bas.cl, // ctrl
  ['cype']: bas.cyp + bas.ce, // ype
  ['ceql']: bas.ce + bas.cql, // eql
  ['cEql']: bas.cE + bas.cql, // Eql
  ['cemb']: bas.cem + bas.cb, // emb
  ['cOperat']: bas.cOp + bas.cer + bas.cat, // Operat
  ['cili']: bas.cil + bas.ci, // ili
  ['cility']: cili + bas.cty, // ility
  ['cibility']: bas.cib + cility, // ibility
  ['cisibility']: bas.cis + cibility, // isibility
  ['cith']: bas.ci + bas.cth, // ith
  ['crent']: bas.cre + bas.cnt, // rent
  ['carent']: bas.ca + crent, // arent
  ['ctor']: bas.cto + bas.cr, // tor
  ['cctor']: bas.cc + ctor, // ctor
  ['celector']: bas.cel + bas.cec + ctor, // elector
  ['coolean']: bas.coo + bas.cle + bas.can, // oolean
  ['check']: bas.che + bas.cck, // heck
  ['child']: bas.chi + bas.cld, // hild
  ['cibling']: bas.cib + bas.cl + cing, // ibling
  ['cttribute']: bas.ctt + bas.cri + bas.cbu + bas.cte, //ttribute
  ['cttributes']: cttribute + bas.cs, // ttributes
  ['cisabled']: bas.cis + cable + bas.cd, // isabled
  ['cilter']: bas.cil + bas.ct + bas.cer, // ilter
  ['code']: bas.cod + bas.ce, // ode
  ['cide']: bas.cid + bas.ce, // ide
  ['cuary']: bas.cua + bas.cry, // uary
  ['cies']: bas.cie + bas.cs, // ies
  ['ctive']: bas.cti + bas.cve, // tive
  ['cate']: bas.cat + bas.ce, // ate
  ['cdate']: bas.cd + cate, // date
  ['cter']: bas.cte + bas.cr, // ter
  ['cTER']: bas.cTE + bas.cR, // TER
  ['cment']: bas.cme + bas.cnt, // ment
  ['cMENT']: bas.cME + bas.cNT, // MENT
  ['cime']: bas.cim + bas.ce, // ime
  ['cinter']: bas.cin + cter, // inter
  ['cInter']: bas.cIn + cter, // Inter
  ['cmed']: bas.cme + bas.cd, // med
  ['cath']: bas.cat + bas.ch, // ath
  ['cvar']: bas.cva + bas.cr, // var
  ['cVar']: bas.cVa + bas.cr, // Var
  ['ciew']: bas.cie + bas.cw, // iew
  ['cete']: bas.cet + bas.ce, // ete
  ['cace']: bas.cac + bas.ce, // ace
  ['cder']: bas.cd + bas.cer, // der
  ['ccor']: bas.cco + bas.cr, // cor
  ['cCor']: bas.cCo + bas.cr, // Cor
  ['ccore']: ccor + bas.ce, // core
  ['cert']: bas.cer + bas.ct, // ert
  ['c_ase']: bas.cas + bas.ce, // ase 'case' is a reserved word
  ['c_ASE']: bas.cAS + bas.cE, // ASE
  ['cunt']: bas.cun + bas.ct, // unt
  ['caft']: bas.caf + bas.ct, // aft
  ['cops']: bas.cop + bas.cs, // ops
  ['cOPS']: bas.cOP + bas.cS, // OPS
  ['cinv']: bas.cin + bas.cv, // inv
  ['cInv']: bas.cIn + bas.cv, // Inv
  ['cral']: bas.cra + bas.cl, // ral
  ['cara']: bas.car + bas.ca, // ara
  ['cpro']: bas.cpr + bas.co, // pro
  ['cPro']: bas.cPr + bas.co, // Pro
  ['cPRO']: bas.cPR + bas.cO, // PRO
  ['cino']: bas.cin + bas.co, // ino
  ['cese']: bas.ces + bas.ce, // ese
  ['cish']: bas.cis + bas.ch, // ish
  ['ccel']: bas.cce + bas.cl, // cel
  ['cCel']: bas.cCe + bas.cl, // Cel
  ['cian']: bas.cia + bas.cn, // ian
  ['cous']: bas.cou + bas.cs, // ous
  ['ceous']: bas.ce + cous, // eous
  ['cung']: bas.cun + bas.cg, // ung
  ['cary']: bas.car + bas.cy, // ary
  ['ciary']: bas.ci + cary, // iary
  ['cMis']: bas.cMi + bas.cs, // Mis
  ['cmis']: bas.camai + bas.cs, // mis
  ['cource']: bas.cou + bas.crc + bas.ce, // ource
  ['cmin']: bas.camai + bas.cn, // min
  ['cMin']: bas.cMi + bas.cn, // Min
  ['cmax']: bas.cma + bas.cx, // max
  ['cMax']: bas.cMa + bas.cx, // Max
  ['cmine']: bas.camai + bas.cne, // mine
  //b.cet + bas.cer + bas.cmi + bas.cne; //cmine;
  ['cetermine']: bas.ce + bas.ct + bas.ce + bas.cr + bas.cm + bas.ci + bas.cn + bas.ce, // etermine
  ['cingle']: bas.cin + bas.cgl + bas.ce, // ingle
  ['clace']: bas.cla + bas.cce, // lace
  ['ceplace']: bas.cep + clace, // eplace
  ['clean']: bas.cle + bas.can, // lean
  ['cver']: bas.cve + bas.cr, // ver
  ['cVer']: bas.cVe + bas.cr, // Ver
  ['cvert']: cver + bas.ct, // vert
  ['convert']: bas.con + cvert, // onvert
  ['crate']: bas.cra + bas.cte, // crate
  ['cenerate']: bas.cen + bas.ce + crate, // enerate
  ['cdom']: bas.cdo + bas.cm, // dom
  ['candom']: bas.can + cdom, // andom
  ['create']: bas.cre + cate, // reate
  ['carn']: bas.car + bas.cn, // arn
  ['carning']: carn + cing, // arning
  ['crror']: bas.crr + bas.cor, // rror
  ['cRROR']: bas.cRR + bas.cOR, // RROR
  ['card']: bas.car + bas.cd, // ard
  ['cose']: bas.cos + bas.ce, // ose
  ['cray']: bas.cra + bas.cy, // ray
  ['cmel']: bas.cme + bas.cl, // mel
  ['cound']: bas.cou + bas.cnd, // ound
  ['cdot']: bas.cd + bas.cot, // dot
  ['cDot']: bas.cD + bas.cot, // Dot
  ['cart']: bas.car + bas.ct, // art
  ['cize']: bas.ciz + bas.ce, // ize
  ['cmal']: bas.cma + bas.cl, // mal
  ['cormal']: bas.cor + cmal, // ormal
  ['cegree']: bas.ceg + bas.cre + bas.ce, // egree
  ['ccir']: bas.cci + bas.cr, // cir
  ['cCir']: bas.cCi + bas.cr, // Cir
  ['ccle']: bas.ccl + bas.ce, // cle
  ['care']: bas.car + bas.ce, // are
  ['cquare']: bas.cqu + care, // quare
  ['cgle']: bas.cgl + bas.ce, // gle
  ['ctri']: bas.ctr + bas.ci, // tri
  ['cTri']: bas.cTr + bas.ci, // Tri
  ['crec']: bas.cre + bas.cc, // rec
  ['cRec']: bas.cRe + bas.cc, // Rec
  ['crect']: crec + bas.ct, // rect
  ['cRect']: cRec + bas.ct, // Rect
  ['coct']: bas.coc + bas.ct, // oct
  ['cOct']: bas.cOc + bas.ct, // Oct
  ['cgon']: bas.cgo + bas.cn, // gon
  ['chex']: bas.che + bas.cx, // hex
  ['cHex']: bas.cHe + bas.cx, // Hex
  ['chep']: bas.che + bas.cp, // hep
  ['cHep']: bas.cHe + bas.cp, // Hep
  ['cnon']: bas.cno + bas.cn, // non
  ['cNon']: bas.cNo + bas.cn, // Non
  ['crap']: bas.cra + bas.cp, // rap
  ['czoid']: bas.czo + bas.cid, // zoid
  ['cfra']: bas.cfr + bas.ca, // fra
  ['cFra']: bas.cFr + bas.ca, // Fra
  ['ctra']: bas.ctr + bas.ca, // tra
  ['cTra']: bas.cTr + bas.ca, // Tra
  ['ctrans']: ctra + bas.cns, // trans
  ['cTrans']: cTra + bas.cns, // Trans
  ['cint']: bas.cin + bas.ct, // int
  ['cloc']: bas.clo + bas.cc, // loc
  ['cLoc']: bas.cLo + bas.cc, // Loc
  ['cation']: bas.ca + ction, // ation
  ['cort']: bas.cor + bas.ct, // ort
  ['csim']: bas.csi + bas.cm, // sim
  ['cSim']: bas.cSi + bas.cm, // Sim
  ['cplify']: bas.cpl + bas.cif + bas.cy, // plify
  ['csol']: bas.cso + bas.cl, // sol
  ['ccomp']: bas.cco + bas.cmp, // comp
  ['cComp']: bas.cCo + bas.cmp, // Comp
  ['cideo']: bas.cid + bas.ceo, // ideo
  ['cnteger']: bas.cnt + bas.ceg + bas.cer, // nteger
  ['cloat']: bas.clo + bas.cat, // loat
  ['cong']: bas.con + bas.cg, // ong
  ['chort']: bas.ch + cort, // hort
  ['cble']: bas.cbl + bas.ce, // ble
  ['couble']: bas.cou + cble, // ouble
  ['cduct']: bas.cdu + bas.cct, // duct
  ['cgate']: bas.cga + bas.cte, // gate
  ['cggregate']: bas.cgg + bas.cre + cgate, // ggregate
  ['cDiff']: bas.cDi + bas.cff, // Diff
  ['cenc']: bas.cen + bas.cc, // enc
  ['cence']: cenc + bas.ce, // ence
  ['cain']: bas.cai + bas.cn, // ain
  ['ctch']: bas.ctc + bas.ch, // tch
  ['cween']: bas.cwe + bas.cen, // ween
  ['cord']: bas.cor + bas.cd, // ord
  ['cmap']: bas.cma + bas.cp, // map
  ['cMap']: bas.cMa + bas.cp, // Map
  ['cess']: bas.ce + bas.css, // ess
  ['cres']: bas.cre + bas.cs, // res
  ['cRes']: bas.cRe + bas.cs, // Res
  ['cress']: bas.cr + cess, // ress
  ['ceat']: bas.ce + bas.cat, // eat
  ['chen']: bas.ch + bas.cen, // hen
  ['chan']: bas.ch + bas.can, // han
  ['clica']: bas.cli + bas.cca, // lica
  ['cLICA']: bas.cLI + bas.cCA, // LICA
  ['capp']: bas.ca + bas.cpp, // app
  ['cApp']: bas.cA + bas.cpp, // App
  ['cAPP']: bas.cA + bas.cPP, // APP
  ['coot']: bas.coo + bas.ct, // oot
  ['crse']: bas.crs + bas.ce, // rse
  ['cRSE']: bas.cRS + bas.cE, // RSE
  ['cars']: bas.car + bas.cs, // ars
  ['carse']: bas.ca + crse, // arse
  ['cARSE']: bas.cA + cRSE, // ARSE
  ['cwap']: bas.cwa + bas.cp, // wap
  ['cward']: bas.cwa + bas.crd, // ward
  ['clash']: bas.cla + bas.csh, // lash
  ['cENV']: bas.cE + bas.cNV, // ENV
  ['cavigate']: bas.cav + bas.cig + cate, // avigate
  ['cness']: bas.cne + bas.css, // ness
  ['cusiness']: bas.cus + bas.ci + cness, // usiness
  ['cule']: bas.cul + bas.ce, // ule
  ['cait']: bas.cai + bas.ct, // ait
  ['cesh']: bas.ce + bas.csh, // esh
  ['cval']: bas.cv + bas.cal, // val
  ['cemo']: bas.ce + bas.cmo, // emo
  ['cmon']: bas.cmo + bas.cn, // mon
  ['common']: bas.com + cmon, // ommon
  ['clti']: bas.clt + bas.ci, // lti
  ['cmulti']: bas.cmu + clti, // multi
  ['cMulti']: bas.cMu + clti, // Multi
  ['cple']: bas.cpl + bas.ce, // ple
  ['cPLE']: bas.cPL + bas.cE, // PLE
  ['cnal']: bas.cna + bas.cl, // nal
  ['cexe']: bas.cex + bas.ce, // exe
  ['cExe']: bas.cEx + bas.ce, // Exe
  ['cper']: bas.cpe + bas.cr, // per
  ['cPer']: bas.cPe + bas.cr, // Per
  ['casic']: bas.cas + bas.cic, // asic
  ['cven']: bas.cve + bas.cn, // ven
  ['cVEN']: bas.cVE + bas.cN, // VEN
  ['cvent']: cven + bas.ct, // vent,
  ['carg']: bas.car + bas.cg, // arg
  ['cArg']: bas.cAr + bas.cg, // Arg
  ['crive']: bas.cri + bas.cve, // rive
  ['cloy']: bas.clo + bas.cy, // loy
  ['cLOY']: bas.cLO + bas.cY, // LOY
  ['cumber']: bas.cum + bas.cb + bas.cer, // umber
  ['ccond']: bas.cco + bas.cnd, // cond
  ['cieth']: bas.cie + bas.cth, // ieth
  ['ctieth']: bas.ct + cieth, // tieth
  ['cont']: bas.con + bas.ct, // ont
  ['cull']: bas.cul + bas.cl, // ull
  ['cmod']: bas.cmo + bas.cd, // mod
  ['cMod']: bas.cMo + bas.cd, // Mod
  ['ccol']: bas.cco + bas.cl, // col
  ['cCol']: bas.cCo + bas.cl, // Col
  ['creen']: bas.cre + bas.cen, // reen
  ['clue']: bas.clu + bas.ce, // lue Referance to Tron here! :-P
  ['cyan']: bas.cy + bas.can, // yan
  ['cite']: bas.cit + bas.ce, // ite
  ['cang']: bas.can + bas.cg, // ang
  ['cange']: cang + bas.ce, // ange
  ['cANGE']: bas.cAN + bas.cGE, // ANGE
  ['cost']: bas.cos + bas.ct, // ost
  ['cular']: bas.cul + bas.car, // ular
  ['cdrom']: bas.cdr + bas.com, // drom
  ['cdrome']: cdrom + bas.ce, // drome
  ['cave']: bas.cav + bas.ce, // ave
  ['cAve']: bas.cAv + bas.ce, // Ave
  ['ccli']: bas.ccl + bas.ci, // cli
  ['cCli']: bas.cCl + bas.ci, // Cli
  ['cules']: bas.cul + bas.ces, // ules
  ['cent']: bas.cen + bas.ct, // ent
  ['centa']: cent + bas.ca, // enta
  ['cust']: bas.cus + bas.ct, // ust
  ['ccust']: bas.cc + cust, // cust
  ['cCust']: bas.cC + cust, // Cust
  ['cmand']: bas.cma + bas.cnd, // mand
  ['cMAND']: bas.cMA + bas.cND, // MAND
  ['clob']: bas.clo + bas.cb, // lob
  ['cram']: bas.cra + bas.cm, // ram
  ['crame']: cram + bas.ce, // rame
  ['cias']: bas.cia + bas.cs, // ias
  ['cbout']: bas.cbo + bas.cut, // bout Bout time we added this one! LOL
  ['cseq']: bas.cse + bas.cq, // seq
  ['cSeq']: bas.cSe + bas.cq, // Seq
  ['cncer']: bas.cnc + bas.cer, // ncer
  ['cpri']: bas.cpr + bas.ci, // pri
  ['cPri']: bas.cPr + bas.ci, // Pri
  ['cmary']: bas.cma + bas.cry, // mary
  ['cmit']: bas.camai + bas.ct, // mit
  ['ctert']: bas.cte + bas.crt, // tert
  ['cTert']: bas.cTe + bas.crt, // Tert
  ['ctar']: bas.cta + bas.cr, // tar
  ['cTar']: bas.cTa + bas.cr, // Tar
  ['ctart']: ctar + bas.ct, // tart
  ['cTart']: cTar + bas.ct, // Tart poptart....LOL
  ['crint']: bas.cri + bas.cnt, // rint
  ['cgen']: bas.cge + bas.cn, // gen
  ['cGen']: bas.cGe + bas.cn, // Gen
  ['cator']: bas.cat + bas.cor, // ator
  ['cdex']: bas.cde + bas.cx, // dex
  ['call']: bas.cal + bas.cl, // all
  ['cAll']: bas.cAl + bas.cl, // All
  ['creg']: bas.cre + bas.cg, // reg
  ['cReg']: bas.cRe + bas.cg, // Reg
  ['ctain']: bas.cta + bas.cin, // tain
  ['cmet']: bas.cme + bas.ct, // met
  ['cMet']: bas.cMe + bas.ct, // Met
  ['cric']: bas.cri + bas.cc, // ric
  ['cack']: bas.cac + bas.ck, // ack
  ['cdev']: bas.cde + bas.cv, // dev
  ['cDev']: bas.cDe + bas.cv, // Dev
  ['cDEV']: bas.cDE + bas.cV, // DEV
  ['cprod']: bas.cpr + bas.cod, // prod
  ['cProd']: bas.cPr + bas.cod, // Prod
  ['cPROD']: bas.cPR + bas.cOD, // PROD
  ['cana']: bas.can + bas.ca, // ana
  ['cAna']: bas.cAn + bas.ca, // Ana
  ['csis']: bas.csi + bas.cs, // sis
  ['crage']: bas.cra + bas.cge, // rage
  ['cear']: bas.cea + bas.cr, // ear
  ['crgb']: bas.crg + bas.cb, // rgb
  ['cass']: bas.ca + bas.css, // ass
  ['cASS']: bas.cA + bas.cSS, // ASS
  ['cind']: bas.cin + bas.cd, // ind
  ['clin']: bas.cli + bas.cn, // lin
  ['cLin']: bas.cLi + bas.cn, // Lin
  ['ccom']: bas.cco + bas.cm, // com
  ['cCom']: bas.cCo + bas.cm, // Com
  ['cCOM']: bas.cCO + bas.cM, // COM
  ['cubic']: bas.cub + bas.cic, // ubic
  ['cane']: bas.can + bas.ce, // ane
  ['curve']: bas.cur + bas.cve, // urve
  ['cqua']: bas.cqu + bas.ca, // qua
  ['cQua']: bas.cQu + bas.ca, // Qua
  ['crtic']: bas.crt + bas.cic, // rtic
  ['csec']: bas.cse + bas.cc, // sec
  ['cSec']: bas.cSe + bas.cc, // Sec
  ['cuni']: bas.cun + bas.ci, // uni
  ['cUni']: bas.cUn + bas.ci, // Uni
  ['chyper']: bas.chy + cper, // hyper
  ['cHyper']: bas.cHy + cper, // Hyper
  ['cbol']: bas.cbo + bas.cl, // bol
  ['cbola']: cbol + bas.ca, // bola
  ['cstant']: bas.cst + bas.can + bas.ct, //stant
  ['ciso']: bas.cis + bas.co, // iso
  ['cIso']: bas.cIs + bas.co, // Iso
  ['ctope']: bas.cto + bas.cpe, // tope
  ['cphon']: bas.cph + bas.con, // phon
  ['cPhon']: bas.cPh + bas.con, // Phon
  ['cics']: bas.cic + bas.cs, // ics
  ['csha']: bas.csh + bas.ca, // sha
  ['cSha']: bas.cSh + bas.ca, // Sha
  ['cail']: bas.cai + bas.cl, // ail
  ['cAIL']: bas.cAI + bas.cL, // AIL
  ['clay']: bas.cla + bas.cy, // lay
  ['cLay']: bas.cLa + bas.cy, // Lay
  ['csug']: bas.csu + bas.cg, // sug
  ['cSug']: bas.cSu + bas.cg, // Sug
  ['cgest']: bas.cge + bas.cst, // gest
  ['cGest']: bas.cGe + bas.cst, // Gest
  ['cect']: bas.cec + bas.ct, // ect
  ['croject']: bas.cro + bas.cj + cect, // roject
  ['cell']: bas.cel + bas.cl, // ell
  ['cnion']: bas.cni + bas.con, // nion
  ['ceta']: bas.cet + bas.ca, // eta
  ['ccent']: bas.cce + bas.cnt, // cent
  ['cChi']: bas.cCh + bas.ci, // Chi
  ['cild']: bas.cil + bas.cd, // ild
  ['ccolr']: bas.cco + bas.clr, // colr
  ['cshp']: bas.csh + bas.cp, // shp
  ['cual']: bas.cua + bas.cl, // ual
  ['cied']: bas.cie + bas.cd, // ied
  ['cfied']: bas.cf + cied, // fied
  ['cified']: bas.cif + cied, // ified
  ['cments']: cment + bas.cs, // ments
  ['clop']: bas.clo + bas.cp, // lop
  ['cLOP']: bas.cLO + bas.cP, // LOP
  ['cdest']: bas.cde + bas.cst, // dest
  ['cDest']: bas.cDe + bas.cst, // Dest
  ['cstor']: bas.cst + bas.cor, // stor
  ['cStor']: bas.cSt + bas.cor, // Stor
  ['cequ']: bas.ceq + bas.cu, // equ
  ['cEqu']: bas.cEq + bas.cu, // Equ
  ['cque']: bas.cqu + bas.ce, // que
  ['cQue']: bas.cQu + bas.ce, // Que
  ['cdup']: bas.cdu + bas.cp, // dup
  ['cDup']: bas.cDu + bas.cp, // Dup
  ['ccate']: bas.cca + bas.cte, // cate
  ['cere']: bas.cer + bas.ce, // ere
  ['ceas']: bas.cea + bas.cs, // eas
  ['cease']: ceas + bas.ce, // ease
  ['crev']: bas.cre + bas.cv, // rev
  ['cron']: bas.cro + bas.cn, // ron
  ['colv']: bas.col + bas.cv, // olv
  ['colve']: colv + bas.ce, // olve
  ['ceep']: bas.cee + bas.cp, // eep
  ['ccur']: bas.ccu + bas.cr, // cur
  ['cCur']: bas.cCu + bas.cr, // Cur
  ['csive']: bas.csi + bas.cve, // sive
  ['cexp']: bas.cex + bas.cp, // exp
  ['cExp']: bas.cEx + bas.cp, // Exp
  ['could']: bas.cou + bas.cld, // ould
  ['cike']: bas.cik + bas.ce, // ike
  ['cful']: bas.cfu + bas.cl, // ful
  ['cFul']: bas.cFu + bas.cl, // Ful
  ['cuto']: bas.cut + bas.co, // uto
  ['copt']: bas.cop + bas.ct, // opt
  ['cOpt']: bas.cOp + bas.ct, // Opt
  ['cized']: bas.ciz + bas.ced, // ized
  ['come']: bas.com + bas.ce, // ome
  ['clus']: bas.clu + bas.cs, // lus
  ['clon']: bas.clo + bas.cn, // lon
  ['cizer']: bas.ciz + bas.cer, // izer
  ['cern']: bas.cer + bas.cn, // ern
  ['cerm']: bas.cer + bas.cm, // erm
  ['comb']: bas.com + bas.cb, // omb
  ['ceed']: bas.cee + bas.cd, // eed
  ['coop']: bas.coo + bas.cp, // oop
  ['cood']: bas.coo + bas.cd, // ood
  ['cice']: bas.cic + bas.ce, // ice
  ['ctay']: bas.cta + bas.cy, // tay
  ['cafe']: bas.caf + bas.ce, // afe
  ['cult']: bas.cul + bas.ct, // ult
  ['cULT']: bas.cUL + bas.cT, // ULT
  ['cault']: bas.ca + cult, // ault
  ['cAULT']: bas.cA + cULT, // AULT
  ['clete']: bas.cle + bas.cte, // lete
  ['cger']: bas.cge + bas.cr, // ger
  ['cspec']: bas.csp + bas.cec, // spec
  ['cSpec']: bas.cSp + bas.cec, // Spec
  ['cfic']: bas.cfi + bas.cc, // fic
  ['cific']: bas.ci + cfic, // ific
  ['csuf']: bas.csu + bas.cf, // suf
  ['cSuf']: bas.cSu + bas.cf, // Suf
  ['cance']: bas.can + bas.cce, // ance
  ['cional']: bas.cio + cnal, // ional
  ['ctional']: bas.ct + cional, // tional
  ['ctrad']: ctra + bas.cd, // trad - ad is some how a special reserved word of some kind.
  ['cTrad']: cTra + bas.cd, // Trad - ad is some how a special reserved word of some kind.
  ['ctrol']: bas.ctr + bas.col, // trol
  ['cure']: bas.cur + bas.ce, // ure
  ['csym']: bas.csy + bas.cm, // sym
  ['cSym']: bas.cSy + bas.cm, // Sym
  ['cdel']: bas.cde + bas.cl, // del
  ['cDel']: bas.cDe + bas.cl, // Del
  ['csert']: bas.cs + cert, // sert
  ['csub']: bas.csu + bas.cb, // sub
  ['cSub']: bas.cSu + bas.cb, // Sub
  ['ctit']: bas.cti + bas.ct, // tit
  ['cute']: bas.cut + bas.ce, // ute
  ['ciod']: bas.cio + bas.cd, // iod
  ['ceak']: bas.cea + bas.ck, // eak
  ['cnto']: bas.cnt + bas.co, // nto
  ['cmpt']: bas.cmp + bas.ct, // mpt
  ['cted']: bas.cte + bas.cd, // ted
  ['cist']: bas.cis + bas.ct, // ist
  ['crch']: bas.crc + bas.ch, // rch
  ['cson']: bas.cso + bas.cn, // son
  ['cison']: bas.ci + cson, // ison
  ['cera']: bas.cer + bas.ca, // era
  ['cfore']: bas.cfo + bas.cre, // fore
  ['cFORE']: bas.cFO + bas.cRE, // FORE
  ['cush']: bas.cus + bas.ch, // ush
  ['cUSH']: bas.cUS + bas.cH, // USH
  ['cvel']: bas.cve + bas.cl, // vel
  ['ccess']: bas.cce + bas.css, // cess
  ['cCESS']: bas.cCE + bas.cSS, // CESS
  ['cemp']: bas.cem + bas.cp,// emp
  ['cmas']: bas.cma + bas.cs, // mas
  ['cMas']: bas.cMa + bas.cs, // Mas
  ['cpand']: bas.cpa + bas.cnd, // pand
  ['cook']: bas.coo + bas.ck, // ook
  ['clse']: bas.cls + bas.ce, // lse
  ['cify']: bas.cif + bas.cy, // ify
  ['csup']: bas.csu + bas.cp, // sup
  ['cSup']: bas.cSu + bas.cp, // Sup
  ['cplac']: bas.cpl + bas.cac, // plac
  ['cori']: bas.cor + bas.ci, // ori
  ['cOri']: bas.cOr + bas.ci, // Ori
  ['cinal']: bas.cin + bas.cal, // inal
  ['cpara']: bas.cpa + bas.cra, // para
  ['cPara']: bas.cPa + bas.cra, // Para
  ['cnom']: bas.cno + bas.cm, // nom
  ['cNom']: bas.cNo + bas.cm, // Nom
  ['cther']: bas.cth + bas.cer, // ther
  ['cfin']: bas.cfi + bas.cn, // fin
  ['cFin']: bas.cFi + bas.cn, // Fin
  ['crgs']: bas.crg + bas.cs, // rgs
  ['cample']: bas.cam + cple, // ample
  ['cAMPLE']: bas.cAM + cPLE, // AMPLE
  ['cruc']: bas.cru + bas.cc, // ruc
  ['cture']: bas.ct + cure, // ture
  ['crea']: bas.cre + bas.ca, // rea
  ['cRea']: bas.cRe + bas.ca, // Rea
  ['cREA']: bas.cRE + bas.cA, // REA
  ['ceen']: bas.cee + bas.cn, // een
  ['core']: bas.cor + bas.ce, // ore
  ['cstd']: bas.cst + bas.cd, // std
  ['cStd']: bas.cSt + bas.cd, // Std
  ['cick']: bas.cic + bas.ck, // ick
  ['cote']: bas.cot + bas.ce, // ote
  ['coker']: bas.cok + bas.cer, // oker
  ['crge']: bas.crg + bas.ce, // rge
  ['cRGE']: bas.cRG + bas.cE, // RGE
  ['cerge']: bas.ce + crge, // erge
  ['cERGE']: bas.cE + cRGE, // ERGE
  ['cerg']: bas.cer + bas.cg, // erg
  ['cured']: bas.cu + cred, // ured
  ['cude']: bas.cud + bas.ce, // ude
  ['clude']: bas.cl + cude, // lude
  ['clud']: bas.clu + bas.cd, // lud
  ['ccau']: bas.cca + bas.cu, // cau
  ['cCau']: bas.cCa + bas.cu, // Cau
  ['cght']: bas.cgh + bas.ct, // ght
  ['cned']: bas.cne + bas.cd, // ned
  ['cten']: bas.cte + bas.cn, // ten // This is also defined in the numeric constants
  ['csid']: bas.csi + bas.cd, // sid
  ['cSid']: bas.cSi + bas.cd, // Sid
  ['cifies']: bas.cif + cies, // ifies
  ['cref']: bas.cre + bas.cf, // ref
  ['cRef']: bas.cRe + bas.cf, // Ref
  ['clat']: bas.cla + bas.ct, // lat
  ['crit']: bas.cri + bas.ct, // rit
  ['cleas']: bas.cl + ceas, // leas
  ['cchiv']: bas.cch + bas.civ, // chiv
  ['camp']: bas.cam + bas.cp, // amp
  ['copy']: bas.cop + bas.cy, // opy
  ['cccess']: bas.ccc + cess, // ccess
  ['clyz']: bas.cly + bas.cz, // lyz
  ['clyze']: clyz + bas.ce, // lyze
  ['cbra']: bas.cbr + bas.ca, // bra
  ['cBra']: bas.cBr + bas.ca, // Bra
  ['cket']: bas.cke + bas.ct, // ket
  ['clex']: bas.cle + bas.cx, // lex
  ['cLex']: bas.cLe + bas.cx, // Lex
  ['ccal']: bas.cca + bas.cl, // cal
  ['cical']: bas.ci + ccal, // ical
  ['cicon']: bas.ci + ccon, // icon
  ['clta']: bas.clt + bas.ca, // lta
  ['ceaf']: bas.cea + bas.cf, // eaf
  ['ctity']: ctit + bas.cy, // tity
  ['cnly']: bas.cnl + bas.cy, // nly
  ['cuch']: bas.cuc + bas.ch, // uch
  ['ctan']: bas.cta + bas.cn, // tan
  ['cstan']: bas.cs + ctan, // stan
  ['cistan']: cist + bas.can, // istan
  ['cnistan']: bas.cn + cistan, // nistan
  ['cnia']: bas.cni + bas.ca, // nia
  ['cania']: bas.ca + cnia, // ania
  ['cria']: bas.cri + bas.ca, // ria
  ['ceria']: bas.ce + cria, // eria
  ['cgeria']: cger + bas.cia, // geria
  ['crra']: bas.crr + bas.ca, // rra
  ['cola']: bas.col + bas.ca, // ola
  ['cgua']: bas.cgu + bas.ca, // gua
  ['cina']: bas.cin + bas.ca, // ina
  ['cenia']: bas.cen + bas.cia, // enia
  ['clia']: bas.cli + bas.ca, // lia
  ['calia']: bas.ca + clia, // alia
  ['crain']: bas.cra + bas.cin, // rain
  ['cuda']: bas.cud + bas.ca, // uda
  ['crus']: bas.cru + bas.cs, // rus
  ['cvia']: bas.cvi + bas.ca, // via
  ['cndi']: bas.cnd + bas.ci, // ndi
  ['cdia']: bas.cdi + bas.ca, // dia
  ['cada']: bas.ca + bas.cd + bas.ca, // ada
  ['cnada']: bas.cn + cada, // nada
  ['clic']: bas.cli + bas.cc, // lic
  ['cblic']: bas.cb + clic, // blic
  ['cublic']: bas.cu + cblic, // ublic
  ['cbia']: bas.cbi + bas.ca, // bia
  ['cmbia']: bas.cm + cbia, // mbia
  ['cngo']: bas.cng + bas.co, // ngo
  ['congo']: bas.co + cngo, // ongo
  ['cica']: bas.cic + bas.ca, // ica
  ['cnica']: bas.cn + cica, // nica
  ['cinica']: bas.cin + cica, // inica
  ['cminica']: bas.cm + bas.ci + cnica, // minica
  ['cominica']: bas.co + cminica, // ominica
  ['cdor']: bas.cdo + bas.cr, // dor
  ['cador']: bas.ca + cdor, // ador
  ['cnea']: bas.cne + bas.ca, // nea
  ['cinea']: cine + bas.ca, // inea
  ['cuinea']: bas.cu + cinea, // uinea
  ['conia']: bas.con + bas.cia, // onia
  ['cini']: bas.cin + bas.ci, // ini
  ['cnce']: bas.cnc + bas.ce, // nce
  ['cambia']: bas.cam + bas.cbi + bas.ca, // ambia
  ['cerman']: cerm + bas.can, // erman
  ['crman']: bas.crm + bas.can, // rman
  ['cala']: bas.cal + bas.ca, // ala
  ['citi']: bas.cit + bas.ci, // iti
  ['celand']: bas.cel + cand, // eland
  ['csia']: bas.csi + bas.ca, // sia
  ['cesia']: bas.ce + csia, // esia
  ['cnesia']: bas.cn + cesia, // nesia
  ['conesia']: bas.co + cnesia, // onesia
  ['cran']: bas.cra + bas.cn, // ran
  ['cdan']: bas.cda + bas.cn, // dan
  ['cati']: bas.cat + bas.ci, // eti
  ['ccar']: bas.cca + bas.cr, // car
  ['cali']: bas.cal + bas.ci, // ali
  ['cslands']: bas.csl + cand + bas.cs, // slands
  ['cands']: cand + bas.cs, // ands
  ['cnds']: bas.cnd + bas.cs, // nds
  ['cova']: bas.cov + bas.ca, // ova
  ['cnmar']: bas.cnm + bas.car, // nmar
  ['cmar']: bas.cma + bas.cr, // mar
  ['curu']: bas.cur + bas.cu, // uru
  ['cagua']: bas.cag + bas.cua, // agua
  ['cragua']: bas.cr + cagua, // ragua
  ['caragua']: cara + bas.cgu + bas.ca, // aragua
  ['ciger']: bas.cig + bas.cer, // iger
  ['corea']: core + bas.ca, // orea
  ['ckistan']: bas.cki + bas.cst + bas.can, // kistan
  ['cama']: bas.cam + bas.ca, // ama
  ['cguay']: bas.cgu + bas.cay, // guay
  ['cuay']: bas.cua + bas.cy, // uay
  ['cnes']: bas.cne + bas.cs, // nes
  ['cgal']: bas.cga + bas.cl, // gal
  ['cnda']: bas.cnd + bas.ca, // nda
  ['canda']: cand + bas.ca, // anda
  ['cles']: bas.cle + bas.cs, // les
  ['crica']: cric + bas.ca, // rica
  ['cfrica']: bas.cf + crica, // frica
  ['cudan']: bas.cud + bas.can, // udan
  ['crland']: bas.crl + cand, // rland
  ['cerland']: bas.ce + crland, // erland
  ['cste']: bas.cst + bas.ce, // ste
  ['cnga']: bas.cng + bas.ca, // nga
  ['cates']: cate + bas.cs, // ates
  ['ctes']: bas.cte + bas.cs, // tex
  ['cela']: bas.cel + bas.ca, // ela
  ['cnam']: bas.cna + bas.cm, // nam
  ['cmen']: bas.cme + bas.cn, // men
  ['cogen']: bas.cog + bas.cen, // ogen
  ['crogen']: bas.cr + cogen, // rogen
  ['cium']: bas.ciu + bas.cm, // ium
  ['clium']: bas.cl + cium, // lium
  ['celium']: bas.ce + clium, // elium
  ['chium']: bas.chi + bas.cum, // hium
  ['cthium']: bas.ct + chium, // thium
  ['cllium']: bas.cll + bas.ciu + bas.cm, // llium
  ['clorine']: bas.clo + bas.cri + bas.cne, // lorine
  ['crine']: bas.cri + bas.cne, // rine
  ['corine']: cori + bas.cne, // orine
  ['cdium']: bas.cdi + bas.cum, // dium
  ['codium']: bas.co + cdium, // odium
  ['csium']: bas.csi + bas.cum, // sium
  ['cesium']: bas.ce + csium, // esium
  ['cnum']: bas.cnu + bas.cm, // num
  ['cinum']: bas.ci + cnum, // inum
  ['cssium']: bas.css + bas.ciu + bas.cm, // ssium
  ['cassium']: cass + bas.ciu + bas.cm, // assium
  ['ccium']: bas.cc + cium, // cium
  ['cndium']: cndi + bas.cum, // ndium
  ['canium']: bas.can + cium, // anium
  ['cnium']: bas.cni + bas.cum, // nium
  ['cadium']: bas.ca + bas.cd + bas.ciu + bas.cm, // adium
  ['cmium']: bas.camai + bas.cum, // mium
  ['ckel']: bas.cke + bas.cl, // kel
  ['callium']: call + cium, // allium
  ['cnic']: bas.cni + bas.cc, // nic
  ['cenium']: bas.cen + cium, // enium
  ['cton']: bas.cto + bas.cn, // ton
  ['cidium']: bas.cid + cium, // idium
  ['ctium']: bas.ct + cium, // tium
  ['crium']: bas.cr + cium, // rium
  ['conium']: bas.con + cium, // onium
  ['cbium']: bas.cb + cium, // bium
  ['cetium']: bas.cet + cium, // etium
  ['chenium']: chen + cium, // henium
  ['curium']: bas.cur + cium, // urium
  ['carium']: bas.car + cium, // arium
  ['cerium']: bas.cer + cium, // erium
  ['cymium']: bas.cym + cium, // ymium
  ['cdymium']: bas.cd + cymium, // dymium
  ['codymium']: bas.co + cdymium, // odymium
  ['ceodymium']: bas.ceo + cdymium, // eodymium
  ['cinium']: cini + bas.cum, // inium
  ['crbium']: bas.crb + cium, // rbium
  ['cerbium']: bas.ce + crbium, // erbium
  ['clum']: bas.clu + bas.cm, // clum
  ['cuth']: bas.cut + bas.ch, // uth
  ['cncium']: bas.cnc + cium, // ncium
  ['ctinium']: bas.cti + bas.cni + bas.cum, // tiniium
  ['cctinium']: bas.cc + ctinium, // ctinium
  ['corium']: cori + bas.cum, // orium
  ['cicium']: bas.cic + cium, // icium
  ['cvium']: bas.cv + cium, // vium
  ['covium']: bas.co + cvium, // ovium
  ['cero']: bas.cer + bas.co, // ero
  ['colet']: bas.col + bas.cet, // olet
  ['ciolet']: bas.ci + colet, // iolet
  ['cster']: cste + bas.cr, // ster
  ['cnge']: bas.cng + bas.ce, // nge
  ['cond']: bas.con + bas.cd, // ond
  ['cmond']: bas.cm + cond, // mond
  ['clmond']: bas.cl + cmond, // lmond
  ['canth']: bas.can + bas.cth, // anth
  ['cranth']: bas.cr + canth, // ranth
  ['caranth']: bas.ca + cranth, // aranth
  ['cmaranth']: bas.cm + caranth, // maranth
  ['cink']: bas.cin + bas.ck, // ink
  ['crple']: bas.crp + bas.cle, // rple
  ['curple']: bas.cu + crple, // urple
  ['cmber']: bas.cmb + bas.cer, // mber
  ['cber']: bas.cbe + bas.cr, // ber
  ['cBer']: bas.cBe + bas.cr, // Ber
  ['cyst']: bas.cys + bas.ct, // yst
  ['cnze']: bas.cnz + bas.ce, // nze
  ['conze']: bas.co + cnze, // onze
  ['cronze']: bas.cr + conze, // ronze
  ['chsia']: bas.chs + bas.cia, // hsia
  ['cchsia']: bas.cc + chsia, // chsia
  ['cuchsia']: bas.cu + cchsia, // uchsia
  ['cuby']: bas.cub + bas.cy, // uby
  ['chite']: bas.chi + bas.cte, // hite
  ['clish']: bas.cli + bas.csh, // lish
  ['cglish']: bas.cg + clish, // glish
  ['cnglish']: bas.cn + cglish, // nglish
  ['ccot']: bas.cco + bas.ct, // cot
  ['cicot']: bas.ci + ccot, // icot
  ['cricot']: bas.cr + cicot, // ricot
  ['cpricot']: bas.cp + cricot, // pricot
  ['carine']: bas.car + cine, // arine
  ['coke']: bas.cok + bas.ce, // oke
  ['cllow']: bas.cll + bas.cow, // llow
  ['cellow']: bas.ce + cllow, // ellow
  ['cerine']: bas.cer + cine, // erine
  ['cgerine']: bas.cg + cerine, // gerine
  ['cngerine']: bas.cn + cgerine, // ngerine
  ['cangerine']: cange + crine, // angerine
  ['curn']: bas.cur + bas.cn, // urn
  ['colin']: bas.col + bas.cin, // olin
  ['cado']: bas.ca + bas.cdo, // ado
  ['czure']: bas.czu + bas.cre, // zure
  ['cwder']: bas.cw + cder, // wder
  ['cowder']: bas.co + cwder, // owder
  ['crey']: bas.cre + bas.cy, // rey
  ['cige']: bas.cig + bas.ce, // ige
  ['ceige']: bas.ce + cige, // eige
  ['ctre']: bas.ctr + bas.ce, // tre
  ['cstre']: bas.cs + ctre, // stre
  ['cistre']: bas.ci + cstre, // istre
  ['cown']: bas.cow + bas.cn, // own
  ['crown']: bas.cr + cown, // rown
  ['cemon']: cemo + bas.cn, // emon
  ['ceet']: bas.cee + bas.ct, // eet
  ['cweet']: bas.cw + ceet, // weet
  ['cmer']: bas.cme + bas.cr, // mer
  ['cmmer']: bas.cm + cmer, // mmer
  ['cimmer']: bas.ci + cmmer, // immer
  ['chimmer']: bas.ch + cimmer, // himmer
  ['cean']: bas.cea + bas.cn, // ean
  ['clate']: clat + bas.ce, // late
  ['colate']: bas.co + clate, // olate
  ['ccolate']: bas.cc + colate, // colate
  ['cocolate']: bas.co + ccolate, // ocolate
  ['chocolate']: bas.ch + cocolate, // hocolate
  ['cfee']: bas.cfe + bas.ce, // fee
  ['cffee']: bas.cf + cfee, // ffee
  ['coffee']: bas.co + cffee, // offee
  ['coral']: bas.cor + bas.cal, // oral
  ['clive']: bas.cli + bas.cve, // live
  ['cyola']: bas.cyo + bas.cla, // yola
  ['cayola']: bas.ca + cyola, // ayola
  ['crayola']: bas.cr + cayola, // rayola
  ['csell']: bas.cse + bas.cll, // sell
  ['cnsell']: bas.cn + csell, // nsell
  ['cunsell']: bas.cu + cnsell, // unsell
  ['cNCS']: bas.cNC + bas.cS, // NCS
  ['ctone']: cton + bas.ce, // tone
  ['cntone']: bas.cn + ctone, // ntone
  ['cantone']: bas.ca + cntone, // antone
  ['cgment']: bas.cgm + cent, // gment
  ['cigment']: bas.ci + cgment, // igment
  ['cRYB']: bas.cRY + bas.cB, // RYB
  ['cheel']: bas.che + bas.cel, // heel
  ['ceel']: bas.cee + bas.cl, // eel
  ['cans']: bas.can + bas.cs, // ans
  ['cire']: bas.cir + bas.ce, // ire
  ['chire']: bas.ch + cire, // hire
  ['cphire']: bas.cp + chire, // phire
  ['cpphire']: bas.cp + cphire, // pphire
  ['capphire']: bas.ca + cpphire, // apphire
  ['cnder']: bas.cnd + bas.cer, // nder
  ['conder']: bas.co + cnder, // onder
  ['cole']: bas.col + bas.ce, // ole
  ['cndy']: bas.cnd + bas.cy, // ndy
  ['candy']: bas.ca + cndy, // andy
  ['clac']: bas.cla + bas.cc, // lac
  ['cilac']: bas.ci + clac, // ilac
  ['coon']: bas.coo + bas.cn, // oon
  ['croon']: bas.cr + coon, // roon
  ['caroon']: bas.ca + croon, // aroon
  ['cgar']: bas.cga + bas.cr, // gar
  ['cugar']: bas.cu + cgar, // ugar
  ['cuff']: bas.cuf + bas.cf, // uff
  ['cundy']: cund + bas.cy, // undy
  ['cgundy']: bas.cg + cundy, // gundy
  ['crgundy']: bas.cr + cgundy, // rgundy
  ['curgundy']: bas.cu + crgundy, // urgundy
  ['cnna']: bas.cnn + bas.ca, // nna
  ['cenna']: bas.ce + cnna, // enna
  ['cienna']: bas.ci + cenna, // ienna
  ['cntium']: bas.cnt + cium, // ntium
  ['cantium']: bas.ca + cntium, // antium
  ['czantium']: bas.cz + cantium, // zantium
  ['cyzantium']: bas.cy + czantium, // yzantium
  ['cdet']: bas.cde + bas.ct, // det
  ['cadet']: bas.ca + cdet, // adet
  ['cnary']: bas.cna + bas.cry, // nary
  ['canary']: bas.ca + cnary, // anary
  ['crmine']: bas.cr + cmine, // rmine
  ['carmine']: bas.ca + crmine, // armine
  ['chest']: bas.che + bas.cst, // hest
  ['cdon']: bas.cdo + bas.cn, // don
  ['cadon']: bas.ca + cdon, // adon
  ['cladon']: bas.cl + cadon, // ladon
  ['celadon']: bas.ce + cladon, // eladon
  ['cise']: bas.cis + bas.ce, // ise
  ['crise']: bas.cr + cise, // rise
  ['cerise']: bas.ce + crise, // erise
  ['culean']: cule + bas.can, // ulean
  ['crulean']: bas.cr + culean, // rulean
  ['cerulean']: bas.ce + crulean, // erulean
  ['crost']: bas.cro + bas.cst, // rost
  ['cgne']: bas.cgn + bas.ce, // gne
  ['cagne']: bas.ca + cgne, // agne
  ['cpagne']: bas.cp + cagne, // pagne
  ['cmpagne']: bas.cm + cpagne, // mpagne
  ['campagne']: bas.ca + cmpagne, // ampagne
  ['champagne']: bas.ch + campagne, // hampagne
  ['conal']: bas.con + bas.cal, // onal
  ['citional']: citi + conal, // itional
  ['cditional']: bas.cd + citional, // ditional
  ['caditional']: bas.ca + cditional, // aditional
  ['craditional']: bas.cr + caditional, // raditional
  ['ctin']: bas.cti + bas.cn, // tin
  ['catin']: bas.ca + ctin, // atin
  ['cpper']: bas.cpp + bas.cer, // pper
  ['copper']: bas.co + cpper, // opper
  ['cnny']: bas.cnn + bas.cy, // nny
  ['corn']: bas.cor + bas.cn, // orn
  ['cilk']: bas.cil + bas.ck, // ilk
  ['calt']: bas.cal + bas.ct, // alt
  ['cbalt']: bas.cb + calt, // balt
  ['cobalt']: bas.co + cbalt, // obalt
  ['ctte']: bas.ctt + bas.ce, // tte
  ['catte']: bas.ca + ctte, // atte
  ['ceam']: bas.cea + bas.cm, // eam
  ['cream']: bas.cr + ceam, // ream
  ['cmson']: bas.cms + bas.con, // mson
  ['cimson']: bas.ci + cmson, // imson
  ['crimson']: bas.cr + cimson, // rimson
  ['cocess']: bas.coc + cess, // ocess
  ['crocess']: bas.cr + cocess, // rocess
  ['cape']: bas.cap + bas.ce, // ape
  ['camen']: came + bas.cn, // amen
  ['caki']: bas.cak + bas.ci, // aki
  ['chaki']: bas.ch + caki, // haki
  ['cava']: bas.cav + bas.ca, // ava
  ['civer']: cive + bas.cr, // iver
  ['cnta']: bas.cnt + bas.ca, // nta
  ['cgenta']: bas.cge + cnta, // genta
  ['cagenta']: bas.ca + cgenta, // agenta
  ['chid']: bas.chi + bas.cd, // hid
  ['cchid']: bas.cc + chid, // chid
  ['crchid']: bas.cr + cchid, // rchid
  ['clmon']: bas.clm + bas.con, // lmon
  ['calmon']: bas.ca + clmon, // almon
  ['coise']: bas.coi + bas.cse, // oise
  ['cuoise']: bas.cu + coise, // uoise
  ['cquoise']: bas.cq + cuoise, // quoise
  ['crquoise']: bas.cr + cquoise, // rquoise
  ['curquoise']: bas.cu + crquoise, // urquoise
  ['cfron']: bas.cf + cron, // fron
  ['cffron']: bas.cf + cfron, // ffron
  ['caffron']: bas.ca + cffron, // affron
  ['ckle']: bas.ckl + bas.ce, // kle
  ['cupe']: bas.cup + bas.ce, // upe
  ['caupe']: bas.ca + cupe, // aupe
  ['cnim']: bas.cni + bas.cm, // nim
  ['cenim']: bas.ce + cnim, // enim
  ['cesert']: cese + bas.crt, // esert
  ['crab']: bas.cra + bas.cb, // rab
  ['cbony']: bas.cbo + bas.cny, // bony
  ['cony']: bas.con + bas.cy, // ony
  ['cant']: bas.can + bas.ct, // ant
  ['chell']: bas.che + bas.cll, // hell
  ['cigo']: bas.cig + bas.co, // igo
  ['cdigo']: bas.cd + cigo, // digo
  ['cndigo']: bas.cn + cdigo, // ndigo
  ['cald']: bas.cal + bas.cd, // ald
  ['crald']: bas.cr + cald, // rald
  ['cerald']: bas.ce + crald, // erald
  ['cmerald']: bas.cm + cerald, // merald
  ['cender']: bas.cen + cder, // ender
  ['cvender']: bas.cv + cender, // vender
  ['cavender']: bas.ca + cvender, // avender
  ['crin']: bas.cri + bas.cn, // rin
  ['cango']: bas.can + bas.cgo, // ango
  ['cdango']: bas.cd + cango, // dango
  ['cndango']: bas.cn + cdango, // ndango
  ['candango']: bas.ca + cndango, // andango
  ['cawn']: bas.caw + bas.cn, // awn
  ['crick']: cric + bas.ck, // rick
  ['clame']: bas.cla + bas.cme, // lame
  ['cuve']: bas.cuv + bas.ce, // uve
  ['cauve']: bas.ca + cuve, // auve
  ['crry']: bas.crr + bas.cy, // rry
  ['cerry']: bas.ce + crry, // erry
  ['cdian']: cdia + bas.cn, // dian
  ['cidian']: bas.ci + cdian, // idian
  ['cridian']: bas.cr + cidian, // ridian
  ['ciridian']: bas.ci + cridian, // iridian
  ['cllic']: bas.cll + bas.cic, // llic
  ['callic']: bas.ca + cllic, // allic
  ['ctallic']: bas.ct + callic, // tallic
  ['cetallic']: bas.ce + ctallic, // etallic
  ['cden']: bas.cde + bas.cn, // den
  ['clden']: bas.cl + cden, // lden
  ['colden']: bas.co + clden, // olden
  ['cpple']: bas.cpp + bas.cle, // pple
  ['czard']: bas.cza + bas.crd, // zard
  ['cheen']: bas.che + bas.cen, // heen
  ['cllo']: bas.cll + bas.co, // llo
  ['cetal']: bas.cet + bas.cal, // etal
  ['ctal']: bas.cta + bas.cl, // tal
  ['cuin']: bas.cui + bas.cn, // uin
  ['cope']: bas.cop + bas.ce, // ope
  ['cpace']: bas.cpa + bas.cce, // pace
  ['cris']: bas.cri + bas.cs, // ris
  ['cade']: bas.ca + bas.cde, // ade
  ['cobe']: bas.cob + bas.ce, // obe
  ['cobi']: bas.cob + bas.ci, // obi
  ['ccha']: bas.cch + bas.ca, // cha
  ['culi']: bas.cul + bas.ci, // uli
  ['cloral']: bas.clo + cral, // loral
  ['cier']: bas.cie + bas.cr, // ier
  ['cnkle']: bas.cnk + bas.cle, // nkle
  ['cinkle']: bas.ci + cnkle, // inkle
  ['cnen']: bas.cne + bas.cn, // nen
  ['cinen']: bas.ci + cnen, // inen
  ['cgan']: bas.cga + bas.cn, // gan
  ['cvid']: bas.cvi + bas.cd, // vid
  ['civid']: bas.ci + cvid, // ivid
  ['cake']: bas.cak + bas.ce, // ake
  ['caze']: bas.caz + bas.ce, // aze
  ['cany']: bas.can + bas.cy, // any
  ['caize']: bas.cai + bas.cze, // aize
  ['ctee']: bas.cte + bas.ce, // tee
  ['carin']: bas.car + bas.cin, // arin
  ['ctis']: bas.cti + bas.cs, // tis
  ['cras']: bas.cra + bas.cs, // ras
  ['celon']: bas.cel + bas.con, // elon
  ['caro']: bas.car + bas.co, // aro
  ['coss']: bas.cos + bas.cs, // oss
  ['cdow']: bas.cdo + bas.cw, // dow
  ['cadow']: bas.ca + cdow, // adow
  ['ctic']: bas.cti + bas.cc, // tic
  ['cstic']: bas.cs + ctic, // stic
  ['cystic']: bas.cy + cstic, // ystic
  ['crot']: bas.cro + bas.ct, // rot
  ['crrot']: bas.cr + crot, // rrot
  ['carrot']: bas.ca + crrot, // arrot
  ['clver']: bas.clv + bas.cer, // lver
  ['cilver']: bas.ci + clver, // ilver
  ['clood']: bas.clo + bas.cod, // lood
  ['chip']: bas.chi + bas.cp, // hip
  ['cach']: bas.cac + bas.ch, // ach
  ['ceach']: bas.ce + cach, // each
  ['cree']: bas.cre + bas.ce, // ree
  ['chio']: bas.chi + bas.co, // hio
  ['cower']: bas.cow + bas.cer, // ower
  ['cwer']: bas.cwe + bas.cr, // wer
  ['cstar']: bas.cst + bas.car, // star
  ['cune']: bas.cun + bas.ce, // une
  ['ckin']: bas.cki + bas.cn, // kin
  ['csty']: bas.cst + bas.cy, // sty
  ['cavy']: bas.cav + bas.cy, // avy
  ['cazz']: bas.caz + bas.cz, // azz
  ['creus']: bas.cre + bas.cus, // reus
  ['ceus']: bas.ceu + bas.cs, // eus
  ['cbon']: bas.cbo + bas.cn, // bon
  ['cdder']: bas.cdd + bas.cer, // dder
  ['cadder']: bas.ca + cdder, // adder
  ['cale']: bas.cal + bas.ce, // ale
  ['cark']: bas.car + bas.ck, // ark
  ['cpia']: bas.cpi + bas.ca, // pia
  ['chadow']: bas.cha + cdow, // hadow
  ['cock']: bas.coc + bas.ck, // ock
  ['ctten']: bas.ctt + bas.cen, // tten
  ['ceal']: bas.cea + bas.cl, // eal
  ['ctraw']: ctra + bas.cw, // traw
  ['craw']: bas.cra + bas.cw, // raw
  ['ctle']: bas.ctl + bas.ce, // tle
  ['cstle']: bas.cs + ctle, // stle
  ['crest']: cres + bas.ct, // rest
  ['corest']: bas.co + crest, // orest
  ['ccan']: bas.cca + bas.cn, // can
  ['cuscan']: bas.cus + ccan, // uscan
  ['clla']: bas.cll + bas.ca, // lla
  ['cilla']: bas.ci + clla, // illa
  ['cnilla']: bas.cn + cilla, // nilla
  ['canilla']: bas.ca + cnilla, // anilla
  ['cilion']: cili + bas.con, // ilion
  ['cmilion']: bas.cm + cilion, // milion
  ['crmilion']: bas.cr + cmilion, // rmilion
  ['cermilion']: bas.ce + crmilion, // ermilion
  ['chine']: bas.chi + bas.cne, // hine
  ['comp']: bas.com + bas.cp, // omp
  ['cclr']: bas.ccl + bas.cr, // clr
  ['cded']: bas.cde + bas.cd, // ded
  ['cbing']: bas.cb + cing, // bing
  ['ceth']: bas.cet + bas.ch, // eth
  ['clang']: bas.cl + cang, // lang
  ['cLang']: bas.cL + cang, // Lang
  ['cuage']: bas.cu + cage, // uage
  ['cries']: bas.cr + cies, // ries
  ['ciss']: bas.cis + bas.cs, // iss
  ['cinc']: bas.cin + bas.cc, // inc
  ['cInc']: bas.cIn + bas.cc, // Inc
  ['cmum']: bas.cmu + bas.cm, // mum
  ['cimum']: bas.ci + cmum, // imum
  ['crix']: bas.cri + bas.cx, // rix
  ['cled']: bas.cle + bas.cd, // led
  ['cLed']: bas.cLe + bas.cd, // Led
  ['cLED']: bas.cLE + bas.cD, // LED
  ['cling']: clin + bas.cg, // ling
  ['cler']: bas.cle + bas.cr, // ler
  ['ching']: bas.ch + cing // hing
};

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
