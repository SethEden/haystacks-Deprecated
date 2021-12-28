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
let cync = bas.cyn + bas.cc; // ync
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
let cALL = bas.cAL + bas.cL; // ALL
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
let cwin = bas.cwi + bas.cn; // win
let ctty = bas.ctt + bas.cy; // tty
let cbet = bas.cbe + bas.ct; // bet

module.exports = {
  // Reusable Grammer
  [bas.cc + chree]: chree, // hree
  [bas.cc + cour]: cour, // our
  [bas.cc + cive]: cive, // ive
  [bas.cc + ceven]: ceven, // even
  [bas.cc + cight]: cight, // ight
  [bas.cc + cine]: cine, // ine
  [bas.cc + cleven]: cleven, // leven
  [bas.cc + cwelve]: cwelve, // welve
  [bas.cc + cteen]: cteen, // teen
  [bas.cc + chir]: chir, // hir
  [bas.cc + cigh]: cigh, // igh
  [bas.cc + cwenty]: cwenty, // wenty
  [bas.cc + chirty]: chirty, // hirty
  [bas.cc + cifty]: cifty, // ifty
  [bas.cc + cred]: cred, // red
  [bas.cc + cgreen]: cgreen, // green
  [bas.cc + cblue]: cblue, // blue
  [bas.cc + cund]: cund, // und
  [bas.cc + cundred]: cundred, // undred
  [bas.cc + cand]: cand, // and
  [bas.cc + csand]: csand, // sand
  [bas.cc + chousand]: chousand, // housand
  [bas.cc + cion]: cion, // ion
  [bas.cc + cION]: cION, // ION
  [bas.cc + csion]: csion, // sion
  [bas.cc + cill]: cill, // ill
  [bas.cc + cillion]: cillion, // illion
  [bas.cc + crue]: crue, // rue
  [bas.cc + calse]: calse, // alse
  [bas.cc + ction]: ction, // tion
  [bas.cc + cTION]: cTION, // TION
  [bas.cc + cction]: cction, // ction
  [bas.cc + cmation]: cmation, // mation
  [bas.cc + cition]: cition, // ition
  [bas.cc + cITION]: cITION, // ITION
  [bas.cc + cage]: cage, // age
  [bas.cc + cest]: cest, // est
  [bas.cc + chare]: chare, // hare
  [bas.cc + c_lass]: c_lass, // lass
  [bas.cc + ctemp]: ctemp, // temp
  [bas.cc + chref]: chref, // href
  [bas.cc + cABC]: cABC, // ABC
  [bas.cc + came]: came, // ame
  [bas.cc + cile]: cile, // ile
  [bas.cc + cext]: cext, // ext
  [bas.cc + cExt]: cExt, // Ext
  [bas.cc + clpha]: clpha, // lpha
  [bas.cc + ccon]: ccon, // con
  [bas.cc + cCon]: cCon, // Con
  [bas.cc + cable]: cable, // able
  [bas.cc + calid]: calid, // alid
  [bas.cc + cALID]: cALID, // ALID
  [bas.cc + cing]: cing, // ing
  [bas.cc + cING]: cING, // ING
  [bas.cc + ctring]: ctring, // tring
  [bas.cc + cbject]: cbject, // bject
  [bas.cc + cata]: cata, // ata
  [bas.cc + cATA]: cATA, // ATA
  [bas.cc + cMac]: cMac, // Mac
  [bas.cc + cpre]: cpre, // pre
  [bas.cc + cPre]: cPre, // Pre
  [bas.cc + cPRE]: cPRE, // PRE
  [bas.cc + colid]: colid, // olid
  [bas.cc + cync]: cync, // ync
  [bas.cc + cynch]: cynch, // ynch
  [bas.cc + celete]: celete, // elete
  [bas.cc + cnner]: cnner, // nner
  [bas.cc + click]: click, // lick
  [bas.cc + cctr]: cctr, // ctr
  [bas.cc + cctrl]: cctrl, // ctrl
  [bas.cc + cype]: cype, // ype
  [bas.cc + ceql]: ceql, // eql
  [bas.cc + cEql]: cEql, // Eql
  [bas.cc + cemb]: cemb, // emb
  [bas.cc + cOperat]: cOperat, // Operat
  [bas.cc + cili]: cili, // ili
  [bas.cc + cility]: cility, // ility
  [bas.cc + cibility]: cibility, // ibility
  [bas.cc + cisibility]: cisibility, // isibility
  [bas.cc + cith]: cith, // ith
  [bas.cc + crent]: crent, // rent
  [bas.cc + carent]: carent, // arent
  [bas.cc + ctor]: ctor, // tor
  [bas.cc + cctor]: cctor, // ctor
  [bas.cc + celector]: celector, // elector
  [bas.cc + coolean]: coolean, // oolean
  [bas.cc + check]: check, // heck
  [bas.cc + child]: child, // hild
  [bas.cc + cibling]: cibling, // ibling
  [bas.cc + cttribute]: cttribute, //ttribute
  [bas.cc + cttributes]: cttributes, // ttributes
  [bas.cc + cisabled]: cisabled, // isabled
  [bas.cc + cilter]: cilter, // ilter
  [bas.cc + code]: code, // ode
  [bas.cc + cide]: cide, // ide
  [bas.cc + cuary]: cuary, // uary
  [bas.cc + cies]: cies, // ies
  [bas.cc + ctive]: ctive, // tive
  [bas.cc + cate]: cate, // ate
  [bas.cc + cdate]: cdate, // date
  [bas.cc + cter]: cter, // ter
  [bas.cc + cTER]: cTER, // TER
  [bas.cc + cment]: cment, // ment
  [bas.cc + cMENT]: cMENT, // MENT
  [bas.cc + cime]: cime, // ime
  [bas.cc + cinter]: cinter, // inter
  [bas.cc + cInter]: cInter, // Inter
  [bas.cc + cmed]: cmed, // med
  [bas.cc + cath]: cath, // ath
  [bas.cc + cvar]: cvar, // var
  [bas.cc + cVar]: cVar, // Var
  [bas.cc + ciew]: ciew, // iew
  [bas.cc + cete]: cete, // ete
  [bas.cc + cace]: cace, // ace
  [bas.cc + cder]: cder, // der
  [bas.cc + ccor]: ccor, // cor
  [bas.cc + cCor]: cCor, // Cor
  [bas.cc + ccore]: ccore, // core
  [bas.cc + cert]: cert, // ert
  ['c_ase']: c_ase, // ase 'case' is a reserved word
  ['c_ASE']: c_ASE, // ASE
  [bas.cc + cunt]: cunt, // unt
  [bas.cc + caft]: caft, // aft
  [bas.cc + cops]: cops, // ops
  [bas.cc + cOPS]: cOPS, // OPS
  [bas.cc + cinv]: cinv, // inv
  [bas.cc + cInv]: cInv, // Inv
  [bas.cc + cral]: cral, // ral
  [bas.cc + cara]: cara, // ara
  [bas.cc + cpro]: cpro, // pro
  [bas.cc + cPro]: cPro, // Pro
  [bas.cc + cPRO]: cPRO, // PRO
  [bas.cc + cino]: cino, // ino
  [bas.cc + cese]: cese, // ese
  [bas.cc + cish]: cish, // ish
  [bas.cc + ccel]: ccel, // cel
  [bas.cc + cCel]: cCel, // Cel
  [bas.cc + cian]: cian, // ian
  [bas.cc + cous]: cous, // ous
  [bas.cc + ceous]: ceous, // eous
  [bas.cc + cung]: cung, // ung
  [bas.cc + cary]: cary, // ary
  [bas.cc + ciary]: ciary, // iary
  [bas.cc + cMis]: cMis, // Mis
  [bas.cc + cmis]: cmis, // mis
  [bas.cc + cource]: cource, // ource
  [bas.cc + cmin]: cmin, // min
  [bas.cc + cMin]: cMin, // Min
  [bas.cc + cmax]: cmax, // max
  [bas.cc + cMax]: cMax, // Max
  [bas.cc + cmine]: cmine, // mine
  //b.cet + bas.cer + bas.cmi + bas.cne; //cmine;
  [bas.cc + cetermine]: cetermine, // etermine
  [bas.cc + cingle]: cingle, // ingle
  [bas.cc + clace]: clace, // lace
  [bas.cc + ceplace]: ceplace, // eplace
  [bas.cc + clean]: clean, // lean
  [bas.cc + cver]: cver, // ver
  [bas.cc + cVer]: cVer, // Ver
  [bas.cc + cvert]: cvert, // vert
  [bas.cc + convert]: convert, // onvert
  [bas.cc + crate]: crate, // crate
  [bas.cc + cenerate]: cenerate, // enerate
  [bas.cc + cdom]: cdom, // dom
  [bas.cc + candom]: candom, // andom
  [bas.cc + create]: create, // reate
  [bas.cc + carn]: carn, // arn
  [bas.cc + carning]: carning, // arning
  [bas.cc + crror]: crror, // rror
  [bas.cc + cRROR]: cRROR, // RROR
  [bas.cc + card]: card, // ard
  [bas.cc + cose]: cose, // ose
  [bas.cc + cray]: cray, // ray
  [bas.cc + cmel]: cmel, // mel
  [bas.cc + cound]: cound, // ound
  [bas.cc + cdot]: cdot, // dot
  [bas.cc + cDot]: cDot, // Dot
  [bas.cc + cart]: cart, // art
  [bas.cc + cize]: cize, // ize
  [bas.cc + cmal]: cmal, // mal
  [bas.cc + cormal]: cormal, // ormal
  [bas.cc + cegree]: cegree, // egree
  [bas.cc + ccir]: ccir, // cir
  [bas.cc + cCir]: cCir, // Cir
  [bas.cc + ccle]: ccle, // cle
  [bas.cc + care]: care, // are
  [bas.cc + cquare]: cquare, // quare
  [bas.cc + cgle]: cgle, // gle
  [bas.cc + ctri]: ctri, // tri
  [bas.cc + cTri]: cTri, // Tri
  [bas.cc + crec]: crec, // rec
  [bas.cc + cRec]: cRec, // Rec
  [bas.cc + crect]: crect, // rect
  [bas.cc + cRect]: cRect, // Rect
  [bas.cc + coct]: coct, // oct
  [bas.cc + cOct]: cOct, // Oct
  [bas.cc + cgon]: cgon, // gon
  [bas.cc + chex]: chex, // hex
  [bas.cc + cHex]: cHex, // Hex
  [bas.cc + chep]: chep, // hep
  [bas.cc + cHep]: cHep, // Hep
  [bas.cc + cnon]: cnon, // non
  [bas.cc + cNon]: cNon, // Non
  [bas.cc + crap]: crap, // rap
  [bas.cc + czoid]: czoid, // zoid
  [bas.cc + cfra]: cfra, // fra
  [bas.cc + cFra]: cFra, // Fra
  [bas.cc + ctra]: ctra, // tra
  [bas.cc + cTra]: cTra, // Tra
  [bas.cc + ctrans]: ctrans, // trans
  [bas.cc + cTrans]: cTrans, // Trans
  [bas.cc + cint]: cint, // int
  [bas.cc + cloc]: cloc, // loc
  [bas.cc + cLoc]: cLoc, // Loc
  [bas.cc + cation]: cation, // ation
  [bas.cc + cort]: cort, // ort
  [bas.cc + csim]: csim, // sim
  [bas.cc + cSim]: cSim, // Sim
  [bas.cc + cplify]: cplify, // plify
  [bas.cc + csol]: csol, // sol
  [bas.cc + ccomp]: ccomp, // comp
  [bas.cc + cComp]: cComp, // Comp
  [bas.cc + cideo]: cideo, // ideo
  [bas.cc + cnteger]: cnteger, // nteger
  [bas.cc + cloat]: cloat, // loat
  [bas.cc + cong]: cong, // ong
  [bas.cc + chort]: chort, // hort
  [bas.cc + cble]: cble, // ble
  [bas.cc + couble]: couble, // ouble
  [bas.cc + cduct]: cduct, // duct
  [bas.cc + cgate]: cgate, // gate
  [bas.cc + cggregate]: cggregate, // ggregate
  [bas.cc + cDiff]: cDiff, // Diff
  [bas.cc + cenc]: cenc, // enc
  [bas.cc + cence]: cence, // ence
  [bas.cc + cain]: cain, // ain
  [bas.cc + ctch]: ctch, // tch
  [bas.cc + cween]: cween, // ween
  [bas.cc + cord]: cord, // ord
  [bas.cc + cmap]: cmap, // map
  [bas.cc + cMap]: cMap, // Map
  [bas.cc + cess]: cess, // ess
  [bas.cc + cres]: cres, // res
  [bas.cc + cRes]: cRes, // Res
  [bas.cc + cress]: cress, // ress
  [bas.cc + ceat]: ceat, // eat
  [bas.cc + chen]: chen, // hen
  [bas.cc + chan]: chan, // han
  [bas.cc + clica]: clica, // lica
  [bas.cc + cLICA]: cLICA, // LICA
  [bas.cc + capp]: capp, // app
  [bas.cc + cApp]: cApp, // App
  [bas.cc + cAPP]: cAPP, // APP
  [bas.cc + coot]: coot, // oot
  [bas.cc + crse]: crse, // rse
  [bas.cc + cRSE]: cRSE, // RSE
  [bas.cc + cars]: cars, // ars
  [bas.cc + carse]: carse, // arse
  [bas.cc + cARSE]: cARSE, // ARSE
  [bas.cc + cwap]: cwap, // wap
  [bas.cc + cward]: cward, // ward
  [bas.cc + clash]: clash, // lash
  [bas.cc + cENV]: cENV, // ENV
  [bas.cc + cavigate]: cavigate, // avigate
  [bas.cc + cness]: cness, // ness
  [bas.cc + cusiness]: cusiness, // usiness
  [bas.cc + cule]: cule, // ule
  [bas.cc + cait]: cait, // ait
  [bas.cc + cesh]: cesh, // esh
  [bas.cc + cval]: cval, // val
  [bas.cc + cemo]: cemo, // emo
  [bas.cc + cmon]: cmon, // mon
  [bas.cc + common]: common, // ommon
  [bas.cc + clti]: clti, // lti
  [bas.cc + cmulti]: cmulti, // multi
  [bas.cc + cMulti]: cMulti, // Multi
  [bas.cc + cple]: cple, // ple
  [bas.cc + cPLE]: cPLE, // PLE
  [bas.cc + cnal]: cnal, // nal
  [bas.cc + cexe]: cexe, // exe
  [bas.cc + cExe]: cExe, // Exe
  [bas.cc + cper]: cper, // per
  [bas.cc + cPer]: cPer, // Per
  [bas.cc + casic]: casic, // asic
  [bas.cc + cven]: cven, // ven
  [bas.cc + cVEN]: cVEN, // VEN
  [bas.cc + cvent]: cvent, // vent,
  [bas.cc + carg]: carg, // arg
  [bas.cc + cArg]: cArg, // Arg
  [bas.cc + crive]: crive, // rive
  [bas.cc + cloy]: cloy, // loy
  [bas.cc + cLOY]: cLOY, // LOY
  [bas.cc + cumber]: cumber, // umber
  [bas.cc + ccond]: ccond, // cond
  [bas.cc + cieth]: cieth, // ieth
  [bas.cc + ctieth]: ctieth, // tieth
  [bas.cc + cont]: cont, // ont
  [bas.cc + cull]: cull, // ull
  [bas.cc + cmod]: cmod, // mod
  [bas.cc + cMod]: cMod, // Mod
  [bas.cc + ccol]: ccol, // col
  [bas.cc + cCol]: cCol, // Col
  [bas.cc + creen]: creen, // reen
  [bas.cc + clue]: clue, // lue Referance to Tron here! :-P
  [bas.cc + cyan]: cyan, // yan
  [bas.cc + cite]: cite, // ite
  [bas.cc + cang]: cang, // ang
  [bas.cc + cange]: cange, // ange
  [bas.cc + cANGE]: cANGE, // ANGE
  [bas.cc + cost]: cost, // ost
  [bas.cc + cular]: cular, // ular
  [bas.cc + cdrom]: cdrom, // drom
  [bas.cc + cdrome]: cdrome, // drome
  [bas.cc + cave]: cave, // ave
  [bas.cc + cAve]: cAve, // Ave
  [bas.cc + ccli]: ccli, // cli
  [bas.cc + cCli]: cCli, // Cli
  [bas.cc + cules]: cules, // ules
  [bas.cc + cent]: cent, // ent
  [bas.cc + centa]: centa, // enta
  [bas.cc + cust]: cust, // ust
  [bas.cc + ccust]: ccust, // cust
  [bas.cc + cCust]: cCust, // Cust
  [bas.cc + cmand]: cmand, // mand
  [bas.cc + cMAND]: cMAND, // MAND
  [bas.cc + clob]: clob, // lob
  [bas.cc + cram]: cram, // ram
  [bas.cc + crame]: crame, // rame
  [bas.cc + cias]: cias, // ias
  [bas.cc + cbout]: cbout, // bout Bout time we added this one! LOL
  [bas.cc + cseq]: cseq, // seq
  [bas.cc + cSeq]: cSeq, // Seq
  [bas.cc + cncer]: cncer, // ncer
  [bas.cc + cpri]: cpri, // pri
  [bas.cc + cPri]: cPri, // Pri
  [bas.cc + cmary]: cmary, // mary
  [bas.cc + cmit]: cmit, // mit
  [bas.cc + ctert]: ctert, // tert
  [bas.cc + cTert]: cTert, // Tert
  [bas.cc + ctar]: ctar, // tar
  [bas.cc + cTar]: cTar, // Tar
  [bas.cc + ctart]: ctart, // tart
  [bas.cc + cTart]: cTart, // Tart poptart....LOL
  [bas.cc + crint]: crint, // rint
  [bas.cc + cgen]: cgen, // gen
  [bas.cc + cGen]: cGen, // Gen
  [bas.cc + cator]: cator, // ator
  [bas.cc + cdex]: cdex, // dex
  [bas.cc + call]: call, // all
  [bas.cc + cAll]: cAll, // All
  [bas.cc + cALL]: cALL, // ALL
  [bas.cc + creg]: creg, // reg
  [bas.cc + cReg]: cReg, // Reg
  [bas.cc + ctain]: ctain, // tain
  [bas.cc + cmet]: cmet, // met
  [bas.cc + cMet]: cMet, // Met
  [bas.cc + cric]: cric, // ric
  [bas.cc + cack]: cack, // ack
  [bas.cc + cdev]: cdev, // dev
  [bas.cc + cDev]: cDev, // Dev
  [bas.cc + cDEV]: cDEV, // DEV
  [bas.cc + cprod]: cprod, // prod
  [bas.cc + cProd]: cProd, // Prod
  [bas.cc + cPROD]: cPROD, // PROD
  [bas.cc + cana]: cana, // ana
  [bas.cc + cAna]: cAna, // Ana
  [bas.cc + csis]: csis, // sis
  [bas.cc + crage]: crage, // rage
  [bas.cc + cear]: cear, // ear
  [bas.cc + crgb]: crgb, // rgb
  [bas.cc + cass]: cass, // ass
  [bas.cc + cASS]: cASS, // ASS
  [bas.cc + cind]: cind, // ind
  [bas.cc + clin]: clin, // lin
  [bas.cc + cLin]: cLin, // Lin
  [bas.cc + ccom]: ccom, // com
  [bas.cc + cCom]: cCom, // Com
  [bas.cc + cCOM]: cCOM, // COM
  [bas.cc + cubic]: cubic, // ubic
  [bas.cc + cane]: cane, // ane
  [bas.cc + curve]: curve, // urve
  [bas.cc + cqua]: cqua, // qua
  [bas.cc + cQua]: cQua, // Qua
  [bas.cc + crtic]: crtic, // rtic
  [bas.cc + csec]: csec, // sec
  [bas.cc + cSec]: cSec, // Sec
  [bas.cc + cuni]: cuni, // uni
  [bas.cc + cUni]: cUni, // Uni
  [bas.cc + chyper]: chyper, // hyper
  [bas.cc + cHyper]: cHyper, // Hyper
  [bas.cc + cbol]: cbol, // bol
  [bas.cc + cbola]: cbola, // bola
  [bas.cc + cstant]: cstant, //stant
  [bas.cc + ciso]: ciso, // iso
  [bas.cc + cIso]: cIso, // Iso
  [bas.cc + ctope]: ctope, // tope
  [bas.cc + cphon]: cphon, // phon
  [bas.cc + cPhon]: cPhon, // Phon
  [bas.cc + cics]: cics, // ics
  [bas.cc + csha]: csha, // sha
  [bas.cc + cSha]: cSha, // Sha
  [bas.cc + cail]: cail, // ail
  [bas.cc + cAIL]: cAIL, // AIL
  [bas.cc + clay]: clay, // lay
  [bas.cc + cLay]: cLay, // Lay
  [bas.cc + csug]: csug, // sug
  [bas.cc + cSug]: cSug, // Sug
  [bas.cc + cgest]: cgest, // gest
  [bas.cc + cGest]: cGest, // Gest
  [bas.cc + cect]: cect, // ect
  [bas.cc + croject]: croject, // roject
  [bas.cc + cell]: cell, // ell
  [bas.cc + cnion]: cnion, // nion
  [bas.cc + ceta]: ceta, // eta
  [bas.cc + ccent]: ccent, // cent
  [bas.cc + cChi]: cChi, // Chi
  [bas.cc + cild]: cild, // ild
  [bas.cc + ccolr]: ccolr, // colr
  [bas.cc + cshp]: cshp, // shp
  [bas.cc + cual]: cual, // ual
  [bas.cc + cied]: cied, // ied
  [bas.cc + cfied]: cfied, // fied
  [bas.cc + cified]: cified, // ified
  [bas.cc + cments]: cments, // ments
  [bas.cc + clop]: clop, // lop
  [bas.cc + cLOP]: cLOP, // LOP
  [bas.cc + cdest]: cdest, // dest
  [bas.cc + cDest]: cDest, // Dest
  [bas.cc + cstor]: cstor, // stor
  [bas.cc + cStor]: cStor, // Stor
  [bas.cc + cequ]: cequ, // equ
  [bas.cc + cEqu]: cEqu, // Equ
  [bas.cc + cque]: cque, // que
  [bas.cc + cQue]: cQue, // Que
  [bas.cc + cdup]: cdup, // dup
  [bas.cc + cDup]: cDup, // Dup
  [bas.cc + ccate]: ccate, // cate
  [bas.cc + cere]: cere, // ere
  [bas.cc + ceas]: ceas, // eas
  [bas.cc + cease]: cease, // ease
  [bas.cc + crev]: crev, // rev
  [bas.cc + cron]: cron, // ron
  [bas.cc + colv]: colv, // olv
  [bas.cc + colve]: colve, // olve
  [bas.cc + ceep]: ceep, // eep
  [bas.cc + ccur]: ccur, // cur
  [bas.cc + cCur]: cCur, // Cur
  [bas.cc + csive]: csive, // sive
  [bas.cc + cexp]: cexp, // exp
  [bas.cc + cExp]: cExp, // Exp
  [bas.cc + could]: could, // ould
  [bas.cc + cike]: cike, // ike
  [bas.cc + cful]: cful, // ful
  [bas.cc + cFul]: cFul, // Ful
  [bas.cc + cuto]: cuto, // uto
  [bas.cc + copt]: copt, // opt
  [bas.cc + cOpt]: cOpt, // Opt
  [bas.cc + cized]: cized, // ized
  [bas.cc + come]: come, // ome
  [bas.cc + clus]: clus, // lus
  [bas.cc + clon]: clon, // lon
  [bas.cc + cizer]: cizer, // izer
  [bas.cc + cern]: cern, // ern
  [bas.cc + cerm]: cerm, // erm
  [bas.cc + comb]: comb, // omb
  [bas.cc + ceed]: ceed, // eed
  [bas.cc + coop]: coop, // oop
  [bas.cc + cood]: cood, // ood
  [bas.cc + cice]: cice, // ice
  [bas.cc + ctay]: ctay, // tay
  [bas.cc + cafe]: cafe, // afe
  [bas.cc + cult]: cult, // ult
  [bas.cc + cULT]: cULT, // ULT
  [bas.cc + cault]: cault, // ault
  [bas.cc + cAULT]: cAULT, // AULT
  [bas.cc + clete]: clete, // lete
  [bas.cc + cger]: cger, // ger
  [bas.cc + cspec]: cspec, // spec
  [bas.cc + cSpec]: cSpec, // Spec
  [bas.cc + cfic]: cfic, // fic
  [bas.cc + cific]: cific, // ific
  [bas.cc + csuf]: csuf, // suf
  [bas.cc + cSuf]: cSuf, // Suf
  [bas.cc + cance]: cance, // ance
  [bas.cc + cional]: cional, // ional
  [bas.cc + ctional]: ctional, // tional
  [bas.cc + ctrad]: ctrad, // trad - ad is some how a special reserved word of some kind.
  [bas.cc + cTrad]: cTrad, // Trad - ad is some how a special reserved word of some kind.
  [bas.cc + ctrol]: ctrol, // trol
  [bas.cc + cure]: cure, // ure
  [bas.cc + csym]: csym, // sym
  [bas.cc + cSym]: cSym, // Sym
  [bas.cc + cdel]: cdel, // del
  [bas.cc + cDel]: cDel, // Del
  [bas.cc + csert]: csert, // sert
  [bas.cc + csub]: csub, // sub
  [bas.cc + cSub]: cSub, // Sub
  [bas.cc + ctit]: ctit, // tit
  [bas.cc + cute]: cute, // ute
  [bas.cc + ciod]: ciod, // iod
  [bas.cc + ceak]: ceak, // eak
  [bas.cc + cnto]: cnto, // nto
  [bas.cc + cmpt]: cmpt, // mpt
  [bas.cc + cted]: cted, // ted
  [bas.cc + cist]: cist, // ist
  [bas.cc + crch]: crch, // rch
  [bas.cc + cson]: cson, // son
  [bas.cc + cison]: cison, // ison
  [bas.cc + cera]: cera, // era
  [bas.cc + cfore]: cfore, // fore
  [bas.cc + cFORE]: cFORE, // FORE
  [bas.cc + cush]: cush, // ush
  [bas.cc + cUSH]: cUSH, // USH
  [bas.cc + cvel]: cvel, // vel
  [bas.cc + ccess]: ccess, // cess
  [bas.cc + cCESS]: cCESS, // CESS
  [bas.cc + cemp]: cemp, // emp
  [bas.cc + cmas]: cmas, // mas
  [bas.cc + cMas]: cMas, // Mas
  [bas.cc + cpand]: cpand, // pand
  [bas.cc + cook]: cook, // ook
  [bas.cc + clse]: clse, // lse
  [bas.cc + cify]: cify, // ify
  [bas.cc + csup]: csup, // sup
  [bas.cc + cSup]: cSup, // Sup
  [bas.cc + cplac]: cplac, // plac
  [bas.cc + cori]: cori, // ori
  [bas.cc + cOri]: cOri, // Ori
  [bas.cc + cinal]: cinal, // inal
  [bas.cc + cpara]: cpara, // para
  [bas.cc + cPara]: cPara, // Para
  [bas.cc + cnom]: cnom, // nom
  [bas.cc + cNom]: cNom, // Nom
  [bas.cc + cther]: cther, // ther
  [bas.cc + cfin]: cfin, // fin
  [bas.cc + cFin]: cFin, // Fin
  [bas.cc + crgs]: crgs, // rgs
  [bas.cc + cample]: cample, // ample
  [bas.cc + cAMPLE]: cAMPLE, // AMPLE
  [bas.cc + cruc]: cruc, // ruc
  [bas.cc + cture]: cture, // ture
  [bas.cc + crea]: crea, // rea
  [bas.cc + cRea]: cRea, // Rea
  [bas.cc + cREA]: cREA, // REA
  [bas.cc + ceen]: ceen, // een
  [bas.cc + core]: core, // ore
  [bas.cc + cstd]: cstd, // std
  [bas.cc + cStd]: cStd, // Std
  [bas.cc + cick]: cick, // ick
  [bas.cc + cote]: cote, // ote
  [bas.cc + coker]: coker, // oker
  [bas.cc + crge]: crge, // rge
  [bas.cc + cRGE]: cRGE, // RGE
  [bas.cc + cerge]: cerge, // erge
  [bas.cc + cERGE]: cERGE, // ERGE
  [bas.cc + cerg]: cerg, // erg
  [bas.cc + cured]: cured, // ured
  [bas.cc + cude]: cude, // ude
  [bas.cc + clude]: clude, // lude
  [bas.cc + clud]: clud, // lud
  [bas.cc + ccau]: ccau, // cau
  [bas.cc + cCau]: cCau, // Cau
  [bas.cc + cght]: cght, // ght
  [bas.cc + cned]: cned, // ned
  [bas.cc + cten]: cten, // ten // This is also defined in the numeric constants
  [bas.cc + csid]: csid, // sid
  [bas.cc + cSid]: cSid, // Sid
  [bas.cc + cifies]: cifies, // ifies
  [bas.cc + cref]: cref, // ref
  [bas.cc + cRef]: cRef, // Ref
  [bas.cc + clat]: clat, // lat
  [bas.cc + crit]: crit, // rit
  [bas.cc + cleas]: cleas, // leas
  [bas.cc + cchiv]: cchiv, // chiv
  [bas.cc + camp]: camp, // amp
  [bas.cc + copy]: copy, // opy
  [bas.cc + cccess]: cccess, // ccess
  [bas.cc + clyz]: clyz, // lyz
  [bas.cc + clyze]: clyze, // lyze
  [bas.cc + cbra]: cbra, // bra
  [bas.cc + cBra]: cBra, // Bra
  [bas.cc + cket]: cket, // ket
  [bas.cc + clex]: clex, // lex
  [bas.cc + cLex]: cLex, // Lex
  [bas.cc + ccal]: ccal, // cal
  [bas.cc + cical]: cical, // ical
  [bas.cc + cicon]: cicon, // icon
  [bas.cc + clta]: clta, // lta
  [bas.cc + ceaf]: ceaf, // eaf
  [bas.cc + ctity]: ctity, // tity
  [bas.cc + cnly]: cnly, // nly
  [bas.cc + cuch]: cuch, // uch
  [bas.cc + ctan]: ctan, // tan
  [bas.cc + cstan]: cstan, // stan
  [bas.cc + cistan]: cistan, // istan
  [bas.cc + cnistan]: cnistan, // nistan
  [bas.cc + cnia]: cnia, // nia
  [bas.cc + cania]: cania, // ania
  [bas.cc + cria]: cria, // ria
  [bas.cc + ceria]: ceria, // eria
  [bas.cc + cgeria]: cgeria, // geria
  [bas.cc + crra]: crra, // rra
  [bas.cc + cola]: cola, // ola
  [bas.cc + cgua]: cgua, // gua
  [bas.cc + cina]: cina, // ina
  [bas.cc + cenia]: cenia, // enia
  [bas.cc + clia]: clia, // lia
  [bas.cc + calia]: calia, // alia
  [bas.cc + crain]: crain, // rain
  [bas.cc + cuda]: cuda, // uda
  [bas.cc + crus]: crus, // rus
  [bas.cc + cvia]: cvia, // via
  [bas.cc + cndi]: cndi, // ndi
  [bas.cc + cdia]: cdia, // dia
  [bas.cc + cada]: cada, // ada
  [bas.cc + cnada]: cnada, // nada
  [bas.cc + clic]: clic, // lic
  [bas.cc + cblic]: cblic, // blic
  [bas.cc + cublic]: cublic, // ublic
  [bas.cc + cbia]: cbia, // bia
  [bas.cc + cmbia]: cmbia, // mbia
  [bas.cc + cngo]: cngo, // ngo
  [bas.cc + congo]: congo, // ongo
  [bas.cc + cica]: cica, // ica
  [bas.cc + cnica]: cnica, // nica
  [bas.cc + cinica]: cinica, // inica
  [bas.cc + cminica]: cminica, // minica
  [bas.cc + cominica]: cominica, // ominica
  [bas.cc + cdor]: cdor, // dor
  [bas.cc + cador]: cador, // ador
  [bas.cc + cnea]: cnea, // nea
  [bas.cc + cinea]: cinea, // inea
  [bas.cc + cuinea]: cuinea, // uinea
  [bas.cc + conia]: conia, // onia
  [bas.cc + cini]: cini, // ini
  [bas.cc + cnce]: cnce, // nce
  [bas.cc + cambia]: cambia, // ambia
  [bas.cc + cerman]: cerman, // erman
  [bas.cc + crman]: crman, // rman
  [bas.cc + cala]: cala, // ala
  [bas.cc + citi]: citi, // iti
  [bas.cc + celand]: celand, // eland
  [bas.cc + csia]: csia, // sia
  [bas.cc + cesia]: cesia, // esia
  [bas.cc + cnesia]: cnesia, // nesia
  [bas.cc + conesia]: conesia, // onesia
  [bas.cc + cran]: cran, // ran
  [bas.cc + cdan]: cdan, // dan
  [bas.cc + cati]: cati, // eti
  [bas.cc + ccar]: ccar, // car
  [bas.cc + cali]: cali, // ali
  [bas.cc + cslands]: cslands, // slands
  [bas.cc + cands]: cands, // ands
  [bas.cc + cnds]: cnds, // nds
  [bas.cc + cova]: cova, // ova
  [bas.cc + cnmar]: cnmar, // nmar
  [bas.cc + cmar]: cmar, // mar
  [bas.cc + curu]: curu, // uru
  [bas.cc + cagua]: cagua, // agua
  [bas.cc + cragua]: cragua, // ragua
  [bas.cc + caragua]: caragua, // aragua
  [bas.cc + ciger]: ciger, // iger
  [bas.cc + corea]: corea, // orea
  [bas.cc + ckistan]: ckistan, // kistan
  [bas.cc + cama]: cama, // ama
  [bas.cc + cguay]: cguay, // guay
  [bas.cc + cuay]: cuay, // uay
  [bas.cc + cnes]: cnes, // nes
  [bas.cc + cgal]: cgal, // gal
  [bas.cc + cnda]: cnda, // nda
  [bas.cc + canda]: canda, // anda
  [bas.cc + cles]: cles, // les
  [bas.cc + crica]: crica, // rica
  [bas.cc + cfrica]: cfrica, // frica
  [bas.cc + cudan]: cudan, // udan
  [bas.cc + crland]: crland, // rland
  [bas.cc + cerland]: cerland, // erland
  [bas.cc + cste]: cste, // ste
  [bas.cc + cnga]: cnga, // nga
  [bas.cc + cates]: cates, // ates
  [bas.cc + ctes]: ctes, // tex
  [bas.cc + cela]: cela, // ela
  [bas.cc + cnam]: cnam, // nam
  [bas.cc + cmen]: cmen, // men
  [bas.cc + cogen]: cogen, // ogen
  [bas.cc + crogen]: crogen, // rogen
  [bas.cc + cium]: cium, // ium
  [bas.cc + clium]: clium, // lium
  [bas.cc + celium]: celium, // elium
  [bas.cc + chium]: chium, // hium
  [bas.cc + cthium]: cthium, // thium
  [bas.cc + cllium]: cllium, // llium
  [bas.cc + clorine]: clorine, // lorine
  [bas.cc + crine]: crine, // rine
  [bas.cc + corine]: corine, // orine
  [bas.cc + cdium]: cdium, // dium
  [bas.cc + codium]: codium, // odium
  [bas.cc + csium]: csium, // sium
  [bas.cc + cesium]: cesium, // esium
  [bas.cc + cnum]: cnum, // num
  [bas.cc + cinum]: cinum, // inum
  [bas.cc + cssium]: cssium, // ssium
  [bas.cc + cassium]: cassium, // assium
  [bas.cc + ccium]: ccium, // cium
  [bas.cc + cndium]: cndium, // ndium
  [bas.cc + canium]: canium, // anium
  [bas.cc + cnium]: cnium, // nium
  [bas.cc + cadium]: cadium, // adium
  [bas.cc + cmium]: cmium, // mium
  [bas.cc + ckel]: ckel, // kel
  [bas.cc + callium]: callium, // allium
  [bas.cc + cnic]: cnic, // nic
  [bas.cc + cenium]: cenium, // enium
  [bas.cc + cton]: cton, // ton
  [bas.cc + cidium]: cidium, // idium
  [bas.cc + ctium]: ctium, // tium
  [bas.cc + crium]: crium, // rium
  [bas.cc + conium]: conium, // onium
  [bas.cc + cbium]: cbium, // bium
  [bas.cc + cetium]: cetium, // etium
  [bas.cc + chenium]: chenium, // henium
  [bas.cc + curium]: curium, // urium
  [bas.cc + carium]: carium, // arium
  [bas.cc + cerium]: cerium, // erium
  [bas.cc + cymium]: cymium, // ymium
  [bas.cc + cdymium]: cdymium, // dymium
  [bas.cc + codymium]: codymium, // odymium
  [bas.cc + ceodymium]: ceodymium, // eodymium
  [bas.cc + cinium]: cinium, // inium
  [bas.cc + crbium]: crbium, // rbium
  [bas.cc + cerbium]: cerbium, // erbium
  [bas.cc + clum]: clum, // clum
  [bas.cc + cuth]: cuth, // uth
  [bas.cc + cncium]: cncium, // ncium
  [bas.cc + ctinium]: ctinium, // tiniium
  [bas.cc + cctinium]: cctinium, // ctinium
  [bas.cc + corium]: corium, // orium
  [bas.cc + cicium]: cicium, // icium
  [bas.cc + cvium]: cvium, // vium
  [bas.cc + covium]: covium, // ovium
  [bas.cc + cero]: cero, // ero
  [bas.cc + colet]: colet, // olet
  [bas.cc + ciolet]: ciolet, // iolet
  [bas.cc + cster]: cster, // ster
  [bas.cc + cnge]: cnge, // nge
  [bas.cc + cond]: cond, // ond
  [bas.cc + cmond]: cmond, // mond
  [bas.cc + clmond]: clmond, // lmond
  [bas.cc + canth]: canth, // anth
  [bas.cc + cranth]: cranth, // ranth
  [bas.cc + caranth]: caranth, // aranth
  [bas.cc + cmaranth]: cmaranth, // maranth
  [bas.cc + cink]: cink, // ink
  [bas.cc + crple]: crple, // rple
  [bas.cc + curple]: curple, // urple
  [bas.cc + cmber]: cmber, // mber
  [bas.cc + cber]: cber, // ber
  [bas.cc + cBer]: cBer, // Ber
  [bas.cc + cyst]: cyst, // yst
  [bas.cc + cnze]: cnze, // nze
  [bas.cc + conze]: conze, // onze
  [bas.cc + cronze]: cronze, // ronze
  [bas.cc + chsia]: chsia, // hsia
  [bas.cc + cchsia]: cchsia, // chsia
  [bas.cc + cuchsia]: cuchsia, // uchsia
  [bas.cc + cuby]: cuby, // uby
  [bas.cc + chite]: chite, // hite
  [bas.cc + clish]: clish, // lish
  [bas.cc + cglish]: cglish, // glish
  [bas.cc + cnglish]: cnglish, // nglish
  [bas.cc + ccot]: ccot, // cot
  [bas.cc + cicot]: cicot, // icot
  [bas.cc + cricot]: cricot, // ricot
  [bas.cc + cpricot]: cpricot, // pricot
  [bas.cc + carine]: carine, // arine
  [bas.cc + coke]: coke, // oke
  [bas.cc + cllow]: cllow, // llow
  [bas.cc + cellow]: cellow, // ellow
  [bas.cc + cerine]: cerine, // erine
  [bas.cc + cgerine]: cgerine, // gerine
  [bas.cc + cngerine]: cngerine, // ngerine
  [bas.cc + cangerine]: cangerine, // angerine
  [bas.cc + curn]: curn, // urn
  [bas.cc + colin]: colin, // olin
  [bas.cc + cado]: cado, // ado
  [bas.cc + czure]: czure, // zure
  [bas.cc + cwder]: cwder, // wder
  [bas.cc + cowder]: cowder, // owder
  [bas.cc + crey]: crey, // rey
  [bas.cc + cige]: cige, // ige
  [bas.cc + ceige]: ceige, // eige
  [bas.cc + ctre]: ctre, // tre
  [bas.cc + cstre]: cstre, // stre
  [bas.cc + cistre]: cistre, // istre
  [bas.cc + cown]: cown, // own
  [bas.cc + crown]: crown, // rown
  [bas.cc + cemon]: cemon, // emon
  [bas.cc + ceet]: ceet, // eet
  [bas.cc + cweet]: cweet, // weet
  [bas.cc + cmer]: cmer, // mer
  [bas.cc + cmmer]: cmmer, // mmer
  [bas.cc + cimmer]: cimmer, // immer
  [bas.cc + chimmer]: chimmer, // himmer
  [bas.cc + cean]: cean, // ean
  [bas.cc + clate]: clate, // late
  [bas.cc + colate]: colate, // olate
  [bas.cc + ccolate]: ccolate, // colate
  [bas.cc + cocolate]: cocolate, // ocolate
  [bas.cc + chocolate]: chocolate, // hocolate
  [bas.cc + cfee]: cfee, // fee
  [bas.cc + cffee]: cffee, // ffee
  [bas.cc + coffee]: coffee, // offee
  [bas.cc + coral]: coral, // oral
  [bas.cc + clive]: clive, // live
  [bas.cc + cyola]: cyola, // yola
  [bas.cc + cayola]: cayola, // ayola
  [bas.cc + crayola]: crayola, // rayola
  [bas.cc + csell]: csell, // sell
  [bas.cc + cnsell]: cnsell, // nsell
  [bas.cc + cunsell]: cunsell, // unsell
  [bas.cc + cNCS]: cNCS, // NCS
  [bas.cc + ctone]: ctone, // tone
  [bas.cc + cntone]: cntone, // ntone
  [bas.cc + cantone]: cantone, // antone
  [bas.cc + cgment]: cgment, // gment
  [bas.cc + cigment]: cigment, // igment
  [bas.cc + cRYB]: cRYB, // RYB
  [bas.cc + cheel]: cheel, // heel
  [bas.cc + ceel]: ceel, // eel
  [bas.cc + cans]: cans, // ans
  [bas.cc + cire]: cire, // ire
  [bas.cc + chire]: chire, // hire
  [bas.cc + cphire]: cphire, // phire
  [bas.cc + cpphire]: cpphire, // pphire
  [bas.cc + capphire]: capphire, // apphire
  [bas.cc + cnder]: cnder, // nder
  [bas.cc + conder]: conder, // onder
  [bas.cc + cole]: cole, // ole
  [bas.cc + cndy]: cndy, // ndy
  [bas.cc + candy]: candy, // andy
  [bas.cc + clac]: clac, // lac
  [bas.cc + cilac]: cilac, // ilac
  [bas.cc + coon]: coon, // oon
  [bas.cc + croon]: croon, // roon
  [bas.cc + caroon]: caroon, // aroon
  [bas.cc + cgar]: cgar, // gar
  [bas.cc + cugar]: cugar, // ugar
  [bas.cc + cuff]: cuff, // uff
  [bas.cc + cundy]: cundy, // undy
  [bas.cc + cgundy]: cgundy, // gundy
  [bas.cc + crgundy]: crgundy, // rgundy
  [bas.cc + curgundy]: curgundy, // urgundy
  [bas.cc + cnna]: cnna, // nna
  [bas.cc + cenna]: cenna, // enna
  [bas.cc + cienna]: cienna, // ienna
  [bas.cc + cntium]: cntium, // ntium
  [bas.cc + cantium]: cantium, // antium
  [bas.cc + czantium]: czantium, // zantium
  [bas.cc + cyzantium]: cyzantium, // yzantium
  [bas.cc + cdet]: cdet, // det
  [bas.cc + cadet]: cadet, // adet
  [bas.cc + cnary]: cnary, // nary
  [bas.cc + canary]: canary, // anary
  [bas.cc + crmine]: crmine, // rmine
  [bas.cc + carmine]: carmine, // armine
  [bas.cc + chest]: chest, // hest
  [bas.cc + cdon]: cdon, // don
  [bas.cc + cadon]: cadon, // adon
  [bas.cc + cladon]: cladon, // ladon
  [bas.cc + celadon]: celadon, // eladon
  [bas.cc + cise]: cise, // ise
  [bas.cc + crise]: crise, // rise
  [bas.cc + cerise]: cerise, // erise
  [bas.cc + culean]: culean, // ulean
  [bas.cc + crulean]: crulean, // rulean
  [bas.cc + cerulean]: cerulean, // erulean
  [bas.cc + crost]: crost, // rost
  [bas.cc + cgne]: cgne, // gne
  [bas.cc + cagne]: cagne, // agne
  [bas.cc + cpagne]: cpagne, // pagne
  [bas.cc + cmpagne]: cmpagne, // mpagne
  [bas.cc + campagne]: campagne, // ampagne
  [bas.cc + champagne]: champagne, // hampagne
  [bas.cc + conal]: conal, // onal
  [bas.cc + citional]: citional, // itional
  [bas.cc + cditional]: cditional, // ditional
  [bas.cc + caditional]: caditional, // aditional
  [bas.cc + craditional]: craditional, // raditional
  [bas.cc + ctin]: ctin, // tin
  [bas.cc + catin]: catin, // atin
  [bas.cc + cpper]: cpper, // pper
  [bas.cc + copper]: copper, // opper
  [bas.cc + cnny]: cnny, // nny
  [bas.cc + corn]: corn, // orn
  [bas.cc + cilk]: cilk, // ilk
  [bas.cc + calt]: calt, // alt
  [bas.cc + cbalt]: cbalt, // balt
  [bas.cc + cobalt]: cobalt, // obalt
  [bas.cc + ctte]: ctte, // tte
  [bas.cc + catte]: catte, // atte
  [bas.cc + ceam]: ceam, // eam
  [bas.cc + cream]: cream, // ream
  [bas.cc + cmson]: cmson, // mson
  [bas.cc + cimson]: cimson, // imson
  [bas.cc + crimson]: crimson, // rimson
  [bas.cc + cocess]: cocess, // ocess
  [bas.cc + crocess]: crocess, // rocess
  [bas.cc + cape]: cape, // ape
  [bas.cc + camen]: camen, // amen
  [bas.cc + caki]: caki, // aki
  [bas.cc + chaki]: chaki, // haki
  [bas.cc + cava]: cava, // ava
  [bas.cc + civer]: civer, // iver
  [bas.cc + cnta]: cnta, // nta
  [bas.cc + cgenta]: cgenta, // genta
  [bas.cc + cagenta]: cagenta, // agenta
  [bas.cc + chid]: chid, // hid
  [bas.cc + cchid]: cchid, // chid
  [bas.cc + crchid]: crchid, // rchid
  [bas.cc + clmon]: clmon, // lmon
  [bas.cc + calmon]: calmon, // almon
  [bas.cc + coise]: coise, // oise
  [bas.cc + cuoise]: cuoise, // uoise
  [bas.cc + cquoise]: cquoise, // quoise
  [bas.cc + crquoise]: crquoise, // rquoise
  [bas.cc + curquoise]: curquoise, // urquoise
  [bas.cc + cfron]: cfron, // fron
  [bas.cc + cffron]: cffron, // ffron
  [bas.cc + caffron]: caffron, // affron
  [bas.cc + ckle]: ckle, // kle
  [bas.cc + cupe]: cupe, // upe
  [bas.cc + caupe]: caupe, // aupe
  [bas.cc + cnim]: cnim, // nim
  [bas.cc + cenim]: cenim, // enim
  [bas.cc + cesert]: cesert, // esert
  [bas.cc + crab]: crab, // rab
  [bas.cc + cbony]: cbony, // bony
  [bas.cc + cony]: cony, // ony
  [bas.cc + cant]: cant, // ant
  [bas.cc + chell]: chell, // hell
  [bas.cc + cigo]: cigo, // igo
  [bas.cc + cdigo]: cdigo, // digo
  [bas.cc + cndigo]: cndigo, // ndigo
  [bas.cc + cald]: cald, // ald
  [bas.cc + crald]: crald, // rald
  [bas.cc + cerald]: cerald, // erald
  [bas.cc + cmerald]: cmerald, // merald
  [bas.cc + cender]: cender, // ender
  [bas.cc + cvender]: cvender, // vender
  [bas.cc + cavender]: cavender, // avender
  [bas.cc + crin]: crin, // rin
  [bas.cc + cango]: cango, // ango
  [bas.cc + cdango]: cdango, // dango
  [bas.cc + cndango]: cndango, // ndango
  [bas.cc + candango]: candango, // andango
  [bas.cc + cawn]: cawn, // awn
  [bas.cc + crick]: crick, // rick
  [bas.cc + clame]: clame, // lame
  [bas.cc + cuve]: cuve, // uve
  [bas.cc + cauve]: cauve, // auve
  [bas.cc + crry]: crry, // rry
  [bas.cc + cerry]: cerry, // erry
  [bas.cc + cdian]: cdian, // dian
  [bas.cc + cidian]: cidian, // idian
  [bas.cc + cridian]: cridian, // ridian
  [bas.cc + ciridian]: ciridian, // iridian
  [bas.cc + cllic]: cllic, // llic
  [bas.cc + callic]: callic, // allic
  [bas.cc + ctallic]: ctallic, // tallic
  [bas.cc + cetallic]: cetallic, // etallic
  [bas.cc + cden]: cden, // den
  [bas.cc + clden]: clden, // lden
  [bas.cc + colden]: colden, // olden
  [bas.cc + cpple]: cpple, // pple
  [bas.cc + czard]: czard, // zard
  [bas.cc + cheen]: cheen, // heen
  [bas.cc + cllo]: cllo, // llo
  [bas.cc + cetal]: cetal, // etal
  [bas.cc + ctal]: ctal, // tal
  [bas.cc + cuin]: cuin, // uin
  [bas.cc + cope]: cope, // ope
  [bas.cc + cpace]: cpace, // pace
  [bas.cc + cris]: cris, // ris
  [bas.cc + cade]: cade, // ade
  [bas.cc + cobe]: cobe, // obe
  [bas.cc + cobi]: cobi, // obi
  [bas.cc + ccha]: ccha, // cha
  [bas.cc + culi]: culi, // uli
  [bas.cc + cloral]: cloral, // loral
  [bas.cc + cier]: cier, // ier
  [bas.cc + cnkle]: cnkle, // nkle
  [bas.cc + cinkle]: cinkle, // inkle
  [bas.cc + cnen]: cnen, // nen
  [bas.cc + cinen]: cinen, // inen
  [bas.cc + cgan]: cgan, // gan
  [bas.cc + cvid]: cvid, // vid
  [bas.cc + civid]: civid, // ivid
  [bas.cc + cake]: cake, // ake
  [bas.cc + caze]: caze, // aze
  [bas.cc + cany]: cany, // any
  [bas.cc + caize]: caize, // aize
  [bas.cc + ctee]: ctee, // tee
  [bas.cc + carin]: carin, // arin
  [bas.cc + ctis]: ctis, // tis
  [bas.cc + cras]: cras, // ras
  [bas.cc + celon]: celon, // elon
  [bas.cc + caro]: caro, // aro
  [bas.cc + coss]: coss, // oss
  [bas.cc + cdow]: cdow, // dow
  [bas.cc + cadow]: cadow, // adow
  [bas.cc + ctic]: ctic, // tic
  [bas.cc + cstic]: cstic, // stic
  [bas.cc + cystic]: cystic, // ystic
  [bas.cc + crot]: crot, // rot
  [bas.cc + crrot]: crrot, // rrot
  [bas.cc + carrot]: carrot, // arrot
  [bas.cc + clver]: clver, // lver
  [bas.cc + cilver]: cilver, // ilver
  [bas.cc + clood]: clood, // lood
  [bas.cc + chip]: chip, // hip
  [bas.cc + cach]: cach, // ach
  [bas.cc + ceach]: ceach, // each
  [bas.cc + cree]: cree, // ree
  [bas.cc + chio]: chio, // hio
  [bas.cc + cower]: cower, // ower
  [bas.cc + cwer]: cwer, // wer
  [bas.cc + cstar]: cstar, // star
  [bas.cc + cune]: cune, // une
  [bas.cc + ckin]: ckin, // kin
  [bas.cc + csty]: csty, // sty
  [bas.cc + cavy]: cavy, // avy
  [bas.cc + cazz]: cazz, // azz
  [bas.cc + creus]: creus, // reus
  [bas.cc + ceus]: ceus, // eus
  [bas.cc + cbon]: cbon, // bon
  [bas.cc + cdder]: cdder, // dder
  [bas.cc + cadder]: cadder, // adder
  [bas.cc + cale]: cale, // ale
  [bas.cc + cark]: cark, // ark
  [bas.cc + cpia]: cpia, // pia
  [bas.cc + chadow]: chadow, // hadow
  [bas.cc + cock]: cock, // ock
  [bas.cc + ctten]: ctten, // tten
  [bas.cc + ceal]: ceal, // eal
  [bas.cc + ctraw]: ctraw, // traw
  [bas.cc + craw]: craw, // raw
  [bas.cc + ctle]: ctle, // tle
  [bas.cc + cstle]: cstle, // stle
  [bas.cc + crest]: crest, // rest
  [bas.cc + corest]: corest, // orest
  [bas.cc + ccan]: ccan, // can
  [bas.cc + cuscan]: cuscan, // uscan
  [bas.cc + clla]: clla, // lla
  [bas.cc + cilla]: cilla, // illa
  [bas.cc + cnilla]: cnilla, // nilla
  [bas.cc + canilla]: canilla, // anilla
  [bas.cc + cilion]: cilion, // ilion
  [bas.cc + cmilion]: cmilion, // milion
  [bas.cc + crmilion]: crmilion, // rmilion
  [bas.cc + cermilion]: cermilion, // ermilion
  [bas.cc + chine]: chine, // hine
  [bas.cc + comp]: comp, // omp
  [bas.cc + cclr]: cclr, // clr
  [bas.cc + cded]: cded, // ded
  [bas.cc + cbing]: cbing, // bing
  [bas.cc + ceth]: ceth, // eth
  [bas.cc + clang]: clang, // lang
  [bas.cc + cLang]: cLang, // Lang
  [bas.cc + cuage]: cuage, // uage
  [bas.cc + cries]: cries, // ries
  [bas.cc + ciss]: ciss, // iss
  [bas.cc + cinc]: cinc, // inc
  [bas.cc + cInc]: cInc, // Inc
  [bas.cc + cmum]: cmum, // mum
  [bas.cc + cimum]: cimum, // imum
  [bas.cc + crix]: crix, // rix
  [bas.cc + cled]: cled, // led
  [bas.cc + cLed]: cLed, // Led
  [bas.cc + cLED]: cLED, // LED
  [bas.cc + cling]: cling, // ling
  [bas.cc + cler]: cler, // ler
  [bas.cc + ching]: ching, // hing
  [bas.cc + cwin]: cwin, // win
  [bas.cc + ctty]: ctty, // tty
  [bas.cc + cbet]: cbet // bet]
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
