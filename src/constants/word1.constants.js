/**
 * @file word1.constants.js
 * @module word1.constants
 * @description Contains many re-usable word constants.
 * @requires module:basic.constants
 * @requires module:phonic.constants
 * @requires module:numeric.constants
 * @requires module:generic.constants
 * @requires module:unit.constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 * @NOTE: We have a second word constants file, to avoid circular dependent constants definitions.
 */

import * as bas from './basic.constants.js';
import * as phn from './phonic.constants.js';
import * as num from './numeric.constants.js';
import * as gen from './generic.constants.js';
import * as unt from './unit.constants.js';

// Miscelaneious Words
export const c1a1d = 'a' + 'd'; // ad // 'ca' & 'cd' is some how a reserved word.
export const c3d = num.c3 + bas.cd; // 3d
export const c3D = num.c3 + bas.cD; // 3D
export const cout = bas.co + bas.cut; // out
export const cOut = bas.cO + bas.cut; // Out
export const cLog = bas.cL + bas.cog; // Log
export const clog = bas.cl + bas.cog; // log
export const cLogs = cLog + bas.cs; // Logs
export const clogs = clog + bas.cs; // logs
export const ckey = bas.ck + bas.cey; // key
export const cKey = bas.cK + bas.cey; // Key
export const ckeys = ckey + bas.cs; // keys
export const cKeys = cKey + bas.cs; // Keys
export const ckeyed = ckey + bas.ced; // keyed
export const cKeyed = cKey + bas.ced; // Keyed
export const ckeying = ckey + phn.cing; // keying
export const cKeying = cKey + phn.cing; // Keying
export const cnode = bas.cn + phn.code; // node
export const cNode = bas.cN + phn.code; // Node
export const curl = bas.cur + bas.cl; // url
export const cURL = bas.cUR + bas.cL; // URL
export const cnth = bas.cn + bas.cth; // nth
export const cNth = bas.cN + bas.cth; // Nth
export const cregEx = phn.creg + bas.cEx; // regEx
export const cRegEx = phn.cReg + bas.cEx; // RegEx
export const cflag = bas.cfl + bas.cag; // flag
export const cFlag = bas.cFl + bas.cag; // Flag
export const cflags = cflag + bas.cs; // flags
export const cFlags = cFlag + bas.cs; // Flags

// Data Types
export const cstring = bas.cs + phn.ctring; // string
export const cString = bas.cS + phn.ctring; // String
export const cstrings = cstring + bas.cs; // strings
export const cStrings = cString + bas.cs; // Strings
export const cinteger = bas.ci + phn.cnteger; // integer
export const cInteger = bas.cI + phn.cnteger; // Integer
export const cintegers = cinteger + bas.cs; // integers
export const cIntegers = cInteger + bas.cs; // Integers
export const cfloat = bas.cf + phn.cloat; // float
export const cFloat = bas.cF + phn.cloat; // Float
export const cfloats = cfloat + bas.cs; // floats
export const cFloats = cFloat + bas.cs; // Floats
export const clong = bas.cl + phn.cong; // long
export const cLong = bas.cL + phn.cong; // Long
export const clongs = clong + bas.cs; // longs
export const cLongs = cLong + bas.cs; // Longs
export const clonger = clong + bas.cer; // longer
export const cLonger = cLong + bas.cer; // Longer
export const clongest = clong + phn.cest; // longest
export const cLongest = cLong + phn.cest; // Longest
export const cshort = bas.cs + phn.chort; // short
export const cShort = bas.cS + phn.chort; // Short
export const cshorts = cshort + bas.cs; // shorts
export const cShorts = cShort + bas.cs; // Shorts
export const cshorter = cshort + bas.cer; // shorter
export const cShorter = cShort + bas.cer; // Shorter
export const cshortest = cshort + phn.cest; // shortest
export const cShortest = cShort + phn.cest; // Shortest
export const cdouble = bas.cd + phn.couble; // double
export const cDouble = bas.cD + phn.couble; // Double
export const cdoubles = cdouble + bas.cs; // doubles
export const cDoubles = cDouble + bas.cs; // Doubles
export const cchar = bas.cch + bas.car; // char
export const cChar = bas.cCh + bas.car; // Char
export const cchars = cchar + bas.cs; // chars
export const cChars = cChar + bas.cs; // Chars
export const cboolean = bas.cb + phn.coolean; // boolean
export const cBoolean = bas.cB + phn.coolean; // Boolean
export const cbooleans = cboolean + bas.cs; // booleans
export const cBooleans = cBoolean + bas.cs; // Booleans
export const cobject = bas.co + phn.cbject; // object
export const cObject = bas.cO + phn.cbject; // Object
export const cobjects = cobject + bas.cs; // objects
export const cObjects = cObject + bas.cs; // Objects

// General Use Words
export const csubstring = phn.csub + cstring; // substring
export const csubString = phn.csub + cString; // subString
export const cSubString = phn.cSub + cString; // SubString
export const cwind = bas.cw + phn.cind; // wind
export const cWind = bas.cW + phn.cind; // Wind
export const cwindow = cwind + bas.cow; // window
export const cWindow = cWind + bas.cow; // Window
export const cwindows = cwindow + bas.cs; // windows
export const cWindows = cWindow + bas.cs; // Windows
export const clinux = phn.clin + bas.cux; // linux
export const cLinux = phn.cLin + bas.cux; // Linux
export const cword = bas.cw + phn.cord; // word
export const cWord = bas.cW + phn.cord; // Word
export const cwords = cword + bas.cs; // words
export const cWords = cWord + bas.cs; // Words
export const coops = bas.co + phn.cops; // oops
export const cOops = bas.cO + phn.cops; // Oops
export const cOOPS = bas.cO + phn.cOPS; // OOPS
export const clet = bas.cle + bas.ct; // let
export const cLet = bas.cLe + bas.ct; // Let
export const clets = clet + bas.cs; // lets
export const cLets = cLet + bas.cs; // Lets
export const cfig = bas.cf + bas.cig; // fig
export const cFig = bas.cF + bas.cig; // Fig
export const cfiglet = cfig + clet; // figlet
export const cFiglet = cFig + clet; // Figlet
export const cconfig = phn.ccon + cfig; // config
export const cConfig = phn.cCon + cfig; // Config
export const cconfiguration = cconfig + bas.cur + phn.cation; // configuration
export const cConfiguration = cConfig + bas.cur + phn.cation; // Configuration
export const cconfigurations = cconfiguration + bas.cs; // configurations
export const cConfigurations = cConfiguration + bas.cs; // Configurations
export const cconfigured = cconfig + phn.cured; // configured
export const cConfigured = cConfig + phn.cured; // Configured
export const cconfiguring = cconfig + bas.cur + phn.cing; // configuring
export const cConfiguring = cConfig + bas.cur + phn.cing; // Configuring
export const cempty = bas.cem + bas.cpt + bas.cy; // empty
export const cEmpty = bas.cEm + bas.cpt + bas.cy; // Empty
export const cfull = bas.cf + phn.cull; // full
export const cFull = bas.cF + phn.cull; // Full
export const cfully = cfull + bas.cy; // fully
export const cFully = cFull + bas.cy; // Fully
export const ccreate = bas.cc + phn.create; // create
export const cCreate = bas.cC + phn.create; // Create
export const cSubmit = bas.cSu + bas.cbm + bas.cit; // Submit
export const c_add = c1a1d + bas.cd; // add
export const cAdd = bas.cAd + bas.cd; // Add
export const cADD = bas.cAD + bas.cD; // ADD
export const cadded = c_add + bas.ced; // added
export const cAdded = cAdd + bas.ced; // Added
export const cadding = c_add + phn.cing; // adding
export const cAdding = cAdd + phn.cing; // Adding
export const cadditional = c_add + phn.cition + bas.cal; // additional
export const cAdditional = cAdd + phn.cition + bas.cal; // Additional
export const cADDITIONAL = cADD + phn.cITION + bas.cAL; // ADDITIONAL
export const cadditionals = cadditional + bas.cs; // additionals
export const cAdditionals = cAdditional + bas.cs; // Additionals
export const cpen = bas.cpe + bas.cn; // pen
export const cPen = bas.cPe + bas.cn; // Pen
export const cpens = cpen + bas.cs; // pens
export const cPens = cPen + bas.cs; // Pens
export const cclose = bas.ccl + phn.cose; // close
export const cClose = bas.cCl + phn.cose; // Close
export const cclosed = cclose + bas.cd; // closed
export const cClosed = cClose + bas.cd; // Closed
export const cclosing = bas.ccl + bas.cos + phn.cing; // closing
export const cClosing = bas.cCl + bas.cos + phn.cing; // Closing
export const copen = bas.co + cpen; // open
export const cOpen = bas.cO + cpen; // Open
export const copens = copen + bas.cs; // opens
export const cOpens = cOpen + bas.cs; // Opens
export const copened = copen + bas.ced; // opened
export const cOpened = cOpen + bas.ced; // Opened
export const copening = copen + phn.cing; // opening
export const cOpening = cOpen + phn.cing; // Opening
export const cUpdate = bas.cUp + phn.cdate; // Update
export const cEdit = bas.cEd + bas.cit; // Edit
export const cdelete = bas.cd + phn.celete; // delete
export const cDelete = bas.cD + phn.celete; // Delete
export const cdeletion = phn.cdel + bas.ce + phn.ction; // deletion
export const cDeletion = phn.cDel + bas.ce + phn.ction; // Deletion
export const cinsert = bas.cin + phn.csert; // insert
export const cInsert = bas.cIn + phn.csert; // Insert
export const cinsertion = cinsert + phn.cion; // insertion
export const cInsertion = cInsert + phn.cion; // Insertion
export const csubstitute = phn.csub + bas.cs + phn.ctit + phn.cute; // substitute
export const cSubstitute = phn.cSub + bas.cs + phn.ctit + phn.cute; // Substitute
export const csubstitution = phn.csub + bas.cs + phn.ctit + bas.cu + phn.ction; // substitution
export const cSubstitution = phn.cSub + bas.cs + phn.ctit + bas.cu + phn.ction; // Substitution
export const call = phn.call; // all
export const cAll = phn.cAll; // All
export const cALL = phn.cALL; // ALL
export const cat = bas.ca + bas.ct; // at
export const cAt = bas.cA + bas.ct; // At // Not to be confused with the bas.cAt = '@'!!!
export const cselect = bas.cse + bas.cle + bas.cct; // select
export const cSelect = bas.cSe + bas.cle + bas.cct; // Select
export const ccan = bas.cca + bas.cn; // can
export const cCan = bas.cCa + bas.cn; // Can
export const ccancel = ccan + phn.ccel; // cancel
export const cCancel = cCan + phn.ccel; // Cancel
export const cconfirm = bas.cco + bas.cnf + bas.cir + bas.cm; // confirm
export const cConfirm = bas.cCo + bas.cnf + bas.cir + bas.cm; // Confirm
export const ccount = bas.cco + phn.cunt; // count
export const cCount = bas.cCo + phn.cunt; // Count
export const ccounter = ccount + bas.cer; // counter
export const cCounter = cCount + bas.cer; // Counter
export const cAccount = bas.cAc + ccount; // Account
export const cHamburger = bas.cHa + bas.cmb + bas.cur + bas.cge + bas.cr; // Hamburger
export const cMe = bas.cM + bas.ce; // Me
export const cMenu = cMe + bas.cnu; // Menu
export const cwith = bas.cw + phn.cith; // with
export const cWith = bas.cW + phn.cith; // With
export const cwithout = cwith + cout; // without
export const cWithout = cWith + cout; // Without
export const cdetail = bas.cde + bas.cta + bas.cil; // detail
export const cDetail = bas.cDe + bas.cta + bas.cil; // Detail
export const cdetails = cdetail + bas.cs; // details
export const cDetails = cDetail + bas.cs; // Details
export const cfront = bas.cfr + bas.con + bas.ct; // front
export const cFront = bas.cFr + bas.con + bas.ct; // Front
export const cback = bas.cba + bas.cck; // back
export const cBack = bas.cBa + bas.cck; // Back
export const cleft = bas.cle + bas.cft; // left
export const cLeft = bas.cLe + bas.cft; // Left
export const cright = bas.cri + bas.cgh + bas.ct; // right
export const cRight = bas.cRi + bas.cgh + bas.ct; // Right
export const cTo = bas.cTo; // To
export const ctop = bas.cto + bas.cp; // top
export const cTop = cTo + bas.cp; // Top
export const cbottom = bas.cbo + bas.ctt + bas.com; // bottom
export const cBottom = bas.cBo + bas.ctt + bas.com; // Bottom
export const cbegin = bas.cbe + bas.cgi + bas.cn; // begin
export const cBegin = bas.cBe + bas.cgi + bas.cn; // Begin
export const cBEGIN = bas.cBE + bas.cGI + bas.cN; // BEGIN
export const cbeginning = cbegin + bas.cn + phn.cing; // beginning
export const cBeginning = cBegin + bas.cn + phn.cing; // Beginning
export const cend = bas.cen + bas.cd; // end
export const cEnd = bas.cEn + bas.cd; // End
export const cEND = bas.cEN + bas.cD; // END
export const cending = cend + phn.cing; // ending
export const cEnding = cEnd + phn.cing; // Ending
export const cthe = bas.cth + bas.ce; // the
export const cThe = bas.cTh + bas.ce; // The
export const citem = bas.cit + bas.cem; // item
export const cItem = bas.cIt + bas.cem; // Item
export const citems = citem + bas.cs; // items
export const cItems = cItem + bas.cs; // Items
export const clist = bas.cli + bas.cst; // list
export const cList = bas.cLi + bas.cst; // List
export const clists = clist + bas.cs; // lists
export const cLists = cList + bas.cs; // Lists
export const clisted = clist + bas.ced; // listed
export const cListed = cList + bas.ced; // Listed
export const cshare = bas.cs + phn.chare; // share
export const cShare = bas.cS + phn.chare; // Share
export const cShares = cShare + bas.cs; // Shares
export const cshares = cshare + bas.cs; // shares
export const cshared = cshare + bas.cd; // shared
export const cShared = cShare + bas.cd; // Shared
export const cUnShared = bas.cUn + cShared; // UnShared
export const cUnshared = bas.cUn + cshared; // Unshared
export const cUnshare = bas.cUn + cshare; // Unshare
export const cUnShare = bas.cUn + cShare; // UnShare
export const cview = bas.cv + phn.ciew; // view
export const cView = bas.cV + phn.ciew; // View
export const cnew = bas.cne + bas.cw; // new
export const cNew = bas.cNe + bas.cw; // New
export const cload = bas.clo + 'ad'; // bas.cad; // load // NOTE: Apparently 'cad' is also a reserved word.
export const cLoad = bas.cLo + 'ad'; // bas.cad; // Load // NOTE: Apparently 'cad' is also a reserved word.
export const cloads = cload + bas.cs; // loads
export const cLoads = cLoad + bas.cs; // Loads
export const cloaded = cload + bas.ced; // loaded
export const cLoaded = cLoad + bas.ced; // Loaded
export const cloading = cload + phn.cing; // loading
export const cLoading = cLoad + phn.cing; // Loading
export const cclick = bas.cc + phn.click; // click
export const cClick = bas.cC + phn.click; // Click
export const cpress = bas.cp + phn.cress; // press
export const cPress = bas.cP + phn.cress; // Press
export const cpresses = cpress + bas.ces; // presses
export const cPresses = cPress + bas.ces; // Presses
export const cpressed = cpress + bas.ced; // pressed
export const cPressed = cPress + bas.ced; // Pressed
export const cpressing = cpress + phn.cing; // pressing
export const cPressing = cPress + phn.cing; // Pressing
export const cpressKey = cpress + cKey; // pressKey
export const cPressKey = cPress + cKey; // PressKey
export const cexpect = phn.cexp + phn.cect; // expect
export const cExpect = phn.cExp + phn.cect; // Expect
export const cexpects = cexpect + bas.cs; // expects
export const cExpects = cExpect + bas.cs; // Expects
export const cexpected = cexpect + bas.ced; // expected
export const cExpected = cExpect + bas.ced; // Expected
export const cexpecting = cexpect + phn.cing; // expecting
export const cExpecting = cExpect + phn.cing; // Expecting
export const cnavigate = bas.cn + phn.cavigate; // navigate
export const cNavigate = bas.cN + phn.cavigate; // Navigate
export const csave = bas.cs + phn.cave; // Save
export const cSave = bas.cS + phn.cave; // Save
export const cDownload = bas.cDo + bas.cwn + bas.clo + 'ad'; // Download
export const cNegative = bas.cNe + bas.cga + phn.ctive; // Negative
export const cPositive = bas.cPo + bas.csi + phn.ctive; // Positive
export const cEntire = bas.cEn + bas.cti + bas.cre; // Entire
export const cinfo = bas.cin + bas.cfo; // info
export const cInfo = bas.cIn + bas.cfo; // Info
export const cLink = bas.cLi + bas.cnk; // Link
export const cLabel = bas.cLa + bas.cbe + bas.cl; // Label
export const cField = bas.cFi + bas.cel + bas.cd; // Field
export const ctype = bas.ct + phn.cype; // type
export const cType = bas.cT + phn.cype; // Type
export const cTypes = cType + bas.cs; // Types
export const cvalid = bas.cv + phn.calid; // valid
export const cValid = bas.cV + phn.calid; // Valid
export const cVALID = bas.cV + phn.cALID; // VALID
export const cvalidation = cvalid + bas.ca + phn.ction; // validation
export const cValidation = cValid + bas.ca + phn.ction; // Validation
export const cvalidations = cvalidation + bas.cs; // validations
export const cValidations = cValidation + bas.cs; // Validations
export const cvalidate = bas.cva + bas.cli + phn.cdate; // validate
export const cValidate = bas.cVa + bas.cli + phn.cdate; // Validate
export const cinvalid = bas.cin + cvalid; // invalid
export const cInvalid = bas.cIn + cvalid; // Invalid
export const cINVALID = bas.cIN + cVALID; // INVALID
export const cbug = bas.cbu + bas.cg; // bug
export const cdebug = bas.cde + cbug; // debug
export const cDebug = bas.cDe + cbug; // Debug
export const cpage = bas.cp + phn.cage; // page
export const cPage = bas.cP + phn.cage; // Page
export const cpages = cpage + bas.cs; // pages
export const cPages = cPage + bas.cs; // Pages
export const cmessage = bas.cme + bas.css + phn.cage; // message
export const cMessage = cMe + bas.css + phn.cage; // Message
export const cmessages = cmessage + bas.cs; // messages
export const cMessages = cMessage + bas.cs; // Messages
export const cScript = bas.cSc + bas.cri + bas.cpt; // Script
export const cScripts = cScript + bas.cs; // Scripts
export const ckeyword = ckey + cword; // keyword
export const cKeyword = cKey + cword; // Keyword
export const ckeywords = ckeyword + bas.cs; // keywords
export const cKeywords = cKeyword + bas.cs; // Keywords
export const cdata = bas.cd + phn.cata; // data
export const cData = bas.cD + phn.cata; // Data
export const cDATA = bas.cD + phn.cATA; // DATA
export const cresult = phn.cres + phn.cult; // result
export const cResult = phn.cRes + phn.cult; // Result
export const cresults = cresult + bas.cs; // results
export const cResults = cResult + bas.cs; // Results
export const cresulted = cresult + bas.ced; // resulted
export const cResulted = cResult + bas.ced; // Resulted
export const cresulting = cresult + phn.cing; // resulting
export const cResulting = cResult + phn.cing; // Resulting
export const cwork = bas.cwo + bas.crk; // work
export const cWork = bas.cWo + bas.crk; // Work
export const cflow = bas.cfl + bas.cow; // flow
export const cFlow = bas.cFl + bas.cow; // Flow
export const cworkflow = cwork + cflow; // workflow
export const cWorkflow = cWork + cflow; // Workflow
export const cworkflows = cworkflow + bas.cs; // workflows
export const cWorkflows = cWorkflow + bas.cs; // Workflows
export const ctest = bas.ct + phn.cest; // test
export const cTest = bas.cT + phn.cest; // Test
export const cTEST = bas.cTE + bas.cST; // TEST
export const ctests = ctest + bas.cs; // tests
export const cTests = cTest + bas.cs; // Tests
export const cTESTS = cTEST + bas.cS; // TESTS
export const cStatus = bas.cSt + bas.cat + bas.cus; // Status
export const cTestStatus = cTest + cStatus; // TestStatus
export const cTestStatusMessage = cTest + cStatus + cMessage; // TestStatusMessage
export const cTestWorkflow = cTest + cWorkflow; // TestWorkflow
export const cBureau = bas.cBu + bas.cre + bas.cau; // Bureau
export const cExhaustive = bas.cEx + bas.cha + bas.cus + bas.cti + bas.cve; // Exhaustive
export const cBrowser = bas.cBr + bas.cow + bas.cse + bas.cr; // Browser
export const cact = bas.cac + bas.ct; // act
export const cAct = bas.cAc + bas.ct; // Act
export const caction = cact + phn.cion;// action
export const cAction = cAct + phn.cion; // Action
export const cactions = caction + bas.cs; // actions
export const cActions = cAction + bas.cs; // Actions
export const cactual = cact + phn.cual; // actual
export const cActual = cAct + phn.cual; // Actual
export const cauto = bas.ca + phn.cuto; // auto
export const cAuto = bas.cA + phn.cuto; // Auto
export const cautomation = cauto + phn.cmation; // automation
export const cAutomation = cAuto + phn.cmation; // Automation
export const cnumber = bas.cn + phn.cumber; // number
export const cNumber = bas.cN + phn.cumber; // Number
export const cnumbers = cnumber + bas.cs; // numbers
export const cNumbers = cNumber + bas.cs; // Numbers
export const cnumbered = cnumber + bas.ced; // numbered
export const cNumbered = cNumber + bas.ced; // Numbered
export const cnumbering = cnumber + phn.cing; // numbering
export const cNumbering = cNumber + phn.cing; // Numbering
export const cHost = bas.cHo + bas.cst; // Host
export const cOf = bas.cOf; // Of
export const crow = bas.cro + bas.cw; // row
export const cRow = bas.cRo + bas.cw; // Row
export const crows = crow + bas.cs; // rows
export const cRows = cRow + bas.cs; // Rows
export const crowed = crow + bas.ced; // rowed
export const cRowed = cRow + bas.ced; // Rowed
export const crowing = crow + phn.cing; // rowing
export const cRowing = cRow + phn.cing; // Rowing
export const crun = bas.cru + bas.cn; // run
export const cRun = bas.cRu + bas.cn; // Run
export const cruns = crun + bas.cs; // runs
export const cRuns = cRun + bas.cs; // Runs
export const crunning = crun + bas.cn + phn.cing; // running
export const cRunning = cRun + bas.cn + phn.cing; // Running
export const cmaster = phn.cmas + phn.cter; // master
export const cMaster = phn.cMas + phn.cter; // Master
export const cEnvironment = bas.cEn + bas.cvi + bas.cro + bas.cn + phn.cment; // Environment
export const cname = bas.cn + phn.came; // name
export const cName = bas.cN + phn.came; // Name
export const cnames = cname + bas.cs; // names
export const cNames = cName + bas.cs; // Names
export const cnamed = cname + bas.cd; // named
export const cNamed = cName + bas.cd; // Named
export const ckeywordName = ckeyword + cName; // keywordName
export const cKeywordName = cKeyword + cName; // KeywordName
export const cPageScriptName = cPage + cScript + cName; // PageScriptName
export const cid = bas.cid; // id
export const cId = bas.cId; // Id
export const cID = bas.cID; // ID
export const cmail = bas.cma + bas.cil; // mail
export const cEmail = bas.cE + cmail; // Email
export const cEmails = cEmail + bas.cs; // Emails
export const cReceive = bas.cRe + bas.cce + bas.civ + bas.ce; // Receive
export const cReceived = cReceive + bas.cd; // Received
export const cdate = phn.cdate; // date
export const cDate = bas.cD + phn.cate; // Date
export const ctime = bas.ct + phn.cime; // time
export const cTime = bas.cT + phn.cime; // Time
export const cruntime = crun + ctime; // runtime
export const cRuntime = cRun + ctime; // Runtime
export const cRunTime = cRun + cTime; // RunTime
export const cstamp = bas.cst + phn.camp; // stamp
export const cStamp = bas.cSt + phn.camp; // Stamp
export const cstamps = cstamp + bas.cs; // stamps
export const cStamps = cStamp + bas.cs; // Stamps
export const cstamped = cstamp + bas.ced; // stamped
export const cStamped = cStamp + bas.ced; // Stamped
export const cstamping = cstamp + phn.cing; // stamping
export const cStamping = cStamp + phn.cing; // Stamping
export const cmediate = phn.cmed + bas.ci + phn.cate; // mediate
export const cintermediate = phn.cinter + cmediate; // intermediate
export const cIntermediate = phn.cInter + cmediate; // Intermediate
export const cpath = bas.cp + phn.cath; // path
export const cPath = bas.cP + phn.cath; // Path
export const cpaths = cpath + bas.cs; // paths
export const cPaths = cPath + bas.cs; // Paths
export const cexit = bas.cex + bas.cit; // exit
export const cExit = bas.cEx + bas.cit; // Exit
export const cEXIT = bas.cEX + bas.cIT; // EXIT
export const cexiting = cexit + phn.cing; // exiting
export const cExiting = cExit + phn.cing; // Exiting
export const cViewer = bas.cVi + bas.cew + bas.cer; // Viewer
export const cPermission = bas.cPe + bas.crm + bas.cis + bas.csi + bas.con; // Permission
export const cBug = bas.cBu + bas.cg; // Bug
export const cset = bas.cse + bas.ct; // set
export const cSet = bas.cSe + bas.ct; // Set
export const csetting = cset + bas.ct + phn.cing; // setting
export const cSetting = cSet + bas.ct + phn.cing; // Setting
export const csettings = csetting + bas.cs; // settings
export const cSettings = cSetting + bas.cs; // Settings
export const cPreview = phn.cPre + cview; // Preview
export const climit = bas.cli + phn.cmit; // limit // NOTE: bas.cmi resolves as "s"
export const cLimit = bas.cLi + phn.cmit; // Limit // NOTE: bas.cmi resolves as "s"
export const cGate = bas.cGa + bas.cte; // Gate
export const cway = bas.cwa + bas.cy; // way
export const cWay = bas.cWa + bas.cy; // Way
export const cGateway = cGate + cway; // Gateway
export const cprocess = phn.cpro + phn.ccess; // process
export const cProcess = phn.cPro + phn.ccess; // Process
export const cPROCESS = phn.cPRO + phn.cCESS; // PROCESS
export const cprocessed = cprocess + bas.ced; // processed
export const cProcessed = cProcess + bas.ced; // Processed
export const cprocesses = cprocess + bas.ces; // processes
export const cProcesses = cProcess + bas.ces; // Processes
export const cprocessing = cprocess + phn.cing; // processing
export const cProcessing = cProcess + phn.cing; // Processing
export const cPROCESSING = cPROCESS + phn.cING; // PROCESSING
export const ccomplete = gen.ccom + bas.cp + phn.clete; // complete
export const cComplete = gen.cCom + bas.cp + phn.clete; // Complete
export const ccompleted = ccomplete + bas.cd; // completed
export const cCompleted = cComplete + bas.cd; // Completed
export const cand = bas.can + bas.cd; // and
export const cAnd = bas.cAn + bas.cd; // And
export const cuse = bas.cus + bas.ce; // use
export const cUse = bas.cUs + bas.ce; // Use
export const cuser = cuse + bas.cr; // user
export const cUser = cUse + bas.cr; // User
export const cAccess = bas.cAc + phn.ccess; // Access
export const clevel = bas.cle + phn.cvel; // level
export const cLevel = bas.cLe + phn.cvel; // Level
export const cget = bas.cge + bas.ct; // get
export const cGet = bas.cGe + bas.ct; // Get
export const cput = bas.cp + bas.cut; // put
export const cPut = bas.cP + bas.cut; // Put
export const cPUT = bas.cP + bas.cUT; // PUT
export const cfrom = bas.cfr + bas.com; // from
export const cFrom = bas.cFr + bas.com; // From
export const cplace = phn.cplac + bas.ce; // place
export const cPlace = bas.cPl + phn.cace; // Place
export const cplaces = cplace + bas.cs; // places
export const cPlaces = cPlace + bas.cs; // Places
export const cplaced = cplace + bas.cd; // placed
export const cPlaced = cPlace + bas.cd; // Placed
export const cplacing = phn.cplac + phn.cing; // placing
export const cPlacing = bas.cPl + bas.cac + phn.cing; // Placing
export const cplacement = cplace + phn.cment; // placement
export const cPlacement = cPlace + phn.cment; // Placement
export const creplace = bas.cre + cplace; // replace
export const cReplace = bas.cRe + cplace; // Replace
export const creplaces = creplace + bas.cs; // replaces
export const cReplaces = cReplace + bas.cs; // Replaces
export const creplaced = creplace + bas.cd; // replaced
export const cReplaced = cReplace + bas.cd; // Replaced
export const creplacing = bas.cre + cplacing; // replacing
export const cReplacing = bas.cRe + cplacing; // Replacing
export const creplacement = creplace + phn.cment; // replacement
export const cReplacement = cReplace + phn.cment; // Replacement
export const cspace = bas.csp + phn.cace; // space
export const cSpace = bas.cSp + phn.cace; // Space
export const cspaces = cspace + bas.cs; // spaces
export const cSpaces = cSpace + bas.cs; // Spaces
export const cspaced = cspace + bas.cd; // spaced
export const cSpaced = cSpace + bas.cd; // Spaced
export const cplus = bas.cp + phn.clus; // plus
export const cPlus = bas.cP + phn.clus; // Plus
export const ccolon = bas.cco + phn.clon; // colon
export const cColon = bas.cCo + phn.clon; // Colon
export const cunder = bas.cun + phn.cder; // under
export const cUnder = bas.cUn + phn.cder; // Under
export const cscore = bas.cs + phn.ccore; // score
export const cScore = bas.cS + phn.ccore; // Score
export const cunderscore = cunder + cscore; // underscore
export const cUnderscore = cUnder + cscore; // Underscore
export const cCatagory = bas.cCa + bas.cta + bas.cgo + bas.cry; // Catagory
export const cclean = bas.cc + phn.clean; // clean
export const cClean = bas.cC + phn.clean; // Clean
export const ccleaned = cclean + bas.ced; // cleaned
export const cCleaned = cClean + bas.ced; // Cleaned
export const cCarriage = bas.cCa + bas.crr + bas.ci + phn.cage; // Carriage
export const cturn = bas.ctu + bas.crn; // turn
export const creturn = bas.cre + cturn; // return
export const cReturn = bas.cRe + cturn; // Return
export const cconvert = bas.cc + phn.convert; // convert
export const cConvert = bas.cC + phn.convert; // Convert
export const clow = bas.clo + bas.cw; // low
export const cLow = bas.cLo + bas.cw; // Low
export const clower = clow + bas.cer; // lower
export const cLower = cLow + bas.cer; // Lower
export const ccase = bas.cc + phn.c_ase; // case
export const cCase = bas.cC + phn.c_ase; // Case
export const cmove = bas.cmo + bas.cve; // move
export const cremove = bas.cre + cmove; // remove
export const cRemove = bas.cRe + cmove; // Remove
export const cExtension = phn.cExt + bas.cen + bas.cs + phn.cion; // Extension
export const cdig = bas.cdi + bas.cg; // dig
export const cDig = bas.cDi + bas.cg; // Dig
export const cdigit = cdig + bas.cit; // digit
export const cDigit = cDig + bas.cit; // Digit
export const cletter = clet + bas.ct + bas.cer; // letter
export const cLetter = cLet + bas.ct + bas.cer; // Letter
export const cupper = bas.cup + bas.cp + bas.cer; // upper
export const cUpper = bas.cUp + bas.cp + bas.cer; // Upper
export const crandom = bas.cr + phn.candom; // random
export const cRandom = bas.cR + phn.candom; // Random
export const crandomly = crandom + bas.cly; // randomly
export const cRandomly = cRandom + bas.cly; // Randomly
export const cgenerate = bas.cg + phn.cenerate; // generate
export const cGenerate = bas.cG + phn.cenerate; // Generate
export const cgenerated = cgenerate + bas.cd; // generated
export const cGenerated = cGenerate + bas.cd; // Generated
export const cparent = bas.cp + phn.carent; // parent
export const cParent = bas.cP + phn.carent; // Parent
export const cvalue = bas.cva + bas.clu + bas.ce; // value
export const cValue = bas.cVa + bas.clu + bas.ce; // Value
export const cvalues = cvalue + bas.cs; // values
export const cValues = cValue + bas.cs; // Values
export const cfind = bas.cfi + bas.cnd; // find
export const cFind = bas.cFi + bas.cnd; // Find
export const cfindvalue = cfind + cvalue; // findvalue
export const cfindValue = cfind + cValue; // findValue
export const cFindValue = cFind + cValue; // FindValue
export const crange = bas.cra + bas.cng + bas.ce; // range
export const cRange = bas.cRa + bas.cng + bas.ce; // Range
export const cnumeric = bas.cnu + bas.cme + bas.cri + bas.cc; // numeric
export const cNumeric = bas.cNu + bas.cme + bas.cri + bas.cc; // Numeric
export const cNumerical = cNumeric + bas.cal; // Numerical
export const clength = bas.cle + bas.cng + bas.cth; // length
export const cLength = bas.cLe + bas.cng + bas.cth; // Length
export const ccode = bas.cco + bas.cde; // code
export const cCode = bas.cCo + bas.cde; // Code
export const ceither = bas.cei + phn.cther; // either
export const cEither = bas.cEi + phn.cther; // Either
export const cenable = bas.cen + phn.cable; // enable
export const cEnable = bas.cEn + phn.cable; // Enable
export const cenabled = cenable + bas.cd; // enabled
export const cEnabled = cEnable + bas.cd; // Enabled
export const cdetermine = bas.cd + phn.cetermine; // determine
export const cDetermine = bas.cD + phn.cetermine; // Determine
export const cties = bas.ct + phn.cies; // ties
export const cTies = bas.cT + phn.cies; // Ties
export const cability = bas.cab + phn.cility; // ability
export const cAbility = bas.cAb + phn.cility; // Ability
export const cabilities = bas.cab + phn.cili + cties; // abilities
export const cAbilities = bas.cAb + phn.cili + cties; // Abilities
export const cvariable = phn.cvar + bas.ci + phn.cable; // variable
export const cVariable = phn.cVar + bas.ci + phn.cable; // Variable
export const cvariables = cvariable + bas.cs; // variables
export const cVariables = cVariable + bas.cs; // Variables
export const cvariability = phn.cvar + bas.ci + cability; // variability
export const cVariability = phn.cVar + bas.ci + cability; // Variability
export const cvisibility = bas.cv + phn.cisibility; // visibility
export const cVisibility = bas.cV + phn.cisibility; // Visibility
export const cDialog = bas.cDi + bas.ca + clog; // Dialog
export const clibrary = bas.cli + bas.cbr + bas.car + bas.cy; // library
export const cLibrary = bas.cLi + bas.cbr + bas.car + bas.cy; // Library
export const ctable = bas.cta + bas.cbl + bas.ce; // table
export const cTable = bas.cTa + bas.cbl + bas.ce; // Table
export const cequal = phn.cequ + bas.cal; // equal
export const cEqual = phn.cEqu + bas.cal; // Equal
export const cequals = cequal + bas.cs; // equals
export const cEquals = cEqual + bas.cs; // Equals
export const cequivalence = phn.cequ + bas.ci + phn.cval + phn.cence; // equivalence
export const cEquivalence = phn.cEqu + bas.ci + phn.cval + phn.cence; // Equivalence
export const cRaw = bas.cRa + bas.cw; // Raw
export const cOperation = phn.cOperat + phn.cion; // Operation
export const cOperating = phn.cOperat + phn.cing; // Operating
export const csystem = bas.csy + bas.cst + bas.cem; // system
export const cSystem = bas.cSy + bas.cst + bas.cem; // System
export const csign = bas.csi + bas.cgn; // sign
export const cSign = bas.cSi + bas.cgn; // Sign
export const cassign = bas.cas + csign; // assign
export const cAssign = bas.cAs + csign; // Assign
export const cassignment = cassign + phn.cment; // assignment
export const cAssignment = cAssign + phn.cment; // Assignment
export const cAbreviated = bas.cAb + bas.cre + bas.cvi + bas.cat + bas.ced; // Abreviated
export const cwait = bas.cw + phn.cait; // wait
export const cWait = bas.cW + phn.cait; // Wait
export const cawait = bas.ca + cwait; // await
export const cHTML = bas.cHT + bas.cML; // HTML
export const chtml = bas.cht + bas.cml; // html
export const cinner = bas.ci + phn.cnner; // inner
export const cInner = bas.cI + phn.cnner; // Inner
export const cOver = bas.cOv + bas.cer; // Over
export const cride = bas.cr + phn.cide; // ride
export const cRide = bas.cR + phn.cide; // Ride
export const cOverride = cOver + cride; // Override
export const cActionOverride = cAction + cOverride; // ActionOverride
export const cLocator = bas.cLo + bas.cca + bas.cto + bas.cr; // Locator
export const cLocators = cLocator + bas.cs; // Locators
export const cLocatorLibrary = cLocator + cLibrary; // LocatorLibrary
export const cselector = bas.cs + phn.celector; // selector
export const cSelector = bas.cS + phn.celector; // Selector
export const cSelectors = cSelector + bas.cs; // Selectors
export const cIndividual = bas.cIn + bas.cdi + bas.cvi + bas.cdu + bas.cal; // Individual
export const cIndividually = cIndividual + bas.cly; // Individually
export const cexist = bas.cex + phn.cist; // exist
export const cExist = bas.cEx + phn.cist;; // Exist
export const cexists = cexist + bas.cs; // exists
export const cExists = cExist + bas.cs; // Exists
export const cexisted = cexist + bas.ced; // existed
export const cExisted = cExist + bas.ced; // Existed
export const cexisting = cexist + phn.cing; // existing
export const cExisting = cExist + phn.cing; // Existing
export const casync = bas.cas + phn.cync; // async
export const cAsync = bas.cAs + phn.cync; // Async
export const csync = bas.cs + phn.cync; // sync
export const cSync = bas.cS + phn.cync; // Sync
export const cSingular = bas.cSi + bas.cng + bas.cul + bas.car; // Singular
export const cParallel = bas.cPa + bas.cra + bas.cll + bas.cel; // Parallel
export const cMulti = bas.cMu + bas.clt + bas.ci; // Multi
export const cUnified = bas.cUn + bas.cif + bas.cie + bas.cd; // Unified
export const cfault = bas.cf + phn.cault; // fault
export const cFault = bas.cF + phn.cault; // Fault
export const cFAULT = bas.cF + phn.cAULT; // FAULT
export const cdefault = bas.cde + cfault; // default
export const cDefault = bas.cDe + cfault; // Default
export const cDEFAULT = bas.cDE + cFAULT; // DEFAULT
export const csingle = bas.cs + phn.cingle; // single
export const cSingle = bas.cS + phn.cingle; // Single
export const cquote = bas.cqu + phn.cote; // quote
export const cQuote = bas.cQu + phn.cote; // Quote
export const cquotes = cquote + bas.cs; // quotes
export const cQuotes = cQuote + bas.cs; // Quotes
export const cquoted = cquote + bas.cd; // quoted
export const cQuoted = cQuote + bas.cd; // Quoted
export const cswap = bas.cs + phn.cwap; // swap
export const cSwap = bas.cS + phn.cwap; // Swap
export const cbefore = bas.cbe + phn.cfore; // before
export const cBefore = bas.cBe + phn.cfore; // Before
export const cBEFORE = bas.cBE + phn.cFORE; // BEFORE
export const cafter = bas.caf + phn.cter; // after
export const cAfter = bas.cAf + phn.cter; // After
export const cAFTER = bas.cAF + phn.cTER; // AFTER
export const cOnce = bas.cOn + bas.cce; // Once
export const cUpload = bas.cUp + cload; // Upload
export const cStyle = bas.cSt + bas.cyl + bas.ce; // Style
export const cassert = bas.cas + bas.cse + bas.crt; // assert
export const cAssert = bas.cAs + bas.cse + bas.crt; // Assert
export const cless = bas.cl + phn.cess; // less
export const cLess = bas.cL + phn.cess; // Less
export const cgreat = bas.cgr + phn.ceat; // great
export const cGreat = bas.cGr + phn.ceat; // Great
export const cgreater = cgreat + bas.cer; // greater
export const cGreater = cGreat + bas.cer; // Greater
export const cthen = bas.ct + phn.chen; // then
export const cThen = bas.cT + phn.chen; // Then
export const cthan = bas.ct + phn.chan; // than
export const cThan = bas.cT + phn.chan; // Than
export const cAssertExists = cAssert + cExists; // AssertExists
export const cAssertNotExists = cAssert + gen.cNot + cExists; // AssertNotExists
export const cAssertValueEqual = cAssert + cValue + cEqual; // AssertValueEqual
export const cAssertValueNotEqual = cAssert + cValue + gen.cNot + cEqual; // AssertValueNotEqual
export const cAssertValueLessThan = cAssert + cValue + cLess + cThan; // AssertValueLessThan
export const cAssertValueGreaterThan = cAssert + cValue + cGreater + cThan; // AssertValueGreaterThan
export const cAssertion = cAssert + phn.cion; // Assertion
export const cAssertionType = cAssertion + cType; // AssertionType
export const cUploadStyle = cUpload + cStyle; // UploadStyle
export const cAssertionStyle = cAssertion + cStyle; // AssertionStyle
export const cby = bas.cby; // by
export const cBy = bas.cBy; // By
export const cBY = bas.cBY; // BY
export const cOr = bas.cOr; // Or
export const cor = bas.cor; // or
export const cOR = bas.cOR; // OR
export const cmix = bas.camai + bas.cx; // mix // For some reason JavaScript doesn't like cmi.
export const cMix = bas.cMi + bas.cx; // Mix
export const cmixed = cmix + bas.ced; // mixed
export const cMixed = cMix + bas.ced; // Mixed
export const calpha = bas.ca + phn.clpha; // alpha
export const cAlpha = bas.cA + phn.clpha; // Alpha
export const cbetic = bas.cbe + bas.cti + bas.cc; // betic
export const calphabet = calpha + phn.cbet; // alphabet
export const cAlphabet = cAlpha + phn.cbet; // Alphabet
export const calphabetic = calpha + cbetic; // alphabetic
export const cAlphabetic = cAlpha + cbetic; // Alphabetic
export const ctext = bas.ct + phn.cext; // text
export const cText = bas.cT + phn.cext; // Text
export const cTEXT = bas.cTE + bas.cXT; // TEXT
export const ccontext = phn.ccon + ctext; // context
export const cContext = phn.cCon + ctext; // Context
export const cinput = bas.cin + cput; // input
export const cInput = bas.cIn + cput; // Input
export const cINPUT = bas.cIN + cPUT; // INPUT
export const cinputs = cinput + bas.cs; // inputs
export const cInputs = cInput + bas.cs; // Inputs
export const cinputting = cinput + bas.ct + phn.cing; // inputting
export const cInputting = cInput + bas.ct + phn.cing; // Inputting
export const cdescription = bas.cde + bas.csc + bas.cri + bas.cp + phn.ction; // description
export const cDescription = bas.cDe + bas.csc + bas.cri + bas.cp + phn.ction; // Description
export const cconstant = phn.ccon + phn.cstant; //constant
export const cConstant = phn.cCon + bas.cst + bas.can + bas.ct; // Constant
export const cconstants = cconstant + bas.cs; // constants
export const cConstants = cConstant + bas.cs; // Constants
export const citeration = bas.cit + phn.cera + phn.ction; // iteration
export const cIteration = bas.cIt + phn.cera + phn.ction; // Iteration
export const cproject = bas.cp + phn.croject; // project
export const cProject = bas.cP + phn.croject; // Project
export const cProjects = cProject + bas.cs; // Projects
export const cAdvance = bas.cAd + bas.cva + bas.cnc + bas.ce; // Advance
export const cAdvanced = cAdvance + bas.cd; // Advanced
export const cCreation = bas.cCr + bas.cea + phn.ction; // Creation
export const ctestData = ctest + cData; // testData
export const cpageData = cpage + cData; // pageData
export const cPageData = cPage + cData; // PageData
export const cTestName = cTest + cName; // TestName
export const cPageName = cPage + cName; // PageName
export const cbed = bas.cbe + bas.cd; // bed
export const cBed = bas.cBe + bas.cd; // Bed
export const cbeds = cbed + bas.cs; // beds
export const cBeds = cBed + bas.cs; // Beds
export const cbedded = cbed + phn.cded; // bedded
export const cBedded = cBed + phn.cded; // Bedded
export const cbedding = cbed + bas.cd + phn.cing; // bedding
export const cBedding = cBed + bas.cd + phn.cing; // Bedding
export const cweb = bas.cwe + bas.cb; // web
export const cWeb = bas.cWe + bas.cb; // Web
export const cwebs = cweb + bas.cs; // webs
export const cWebs = cWeb + bas.cs; // Webs
export const cwebbed = cweb + cbed; // webbed
export const cWebbed = cWeb + cbed; // webbed
export const cwebbing = cweb + phn.cbing; // webbing
export const cWebbing = cWeb + phn.cbing; // Webbing
export const cWebkey = bas.cWe + bas.cb + ckey; // Webkey
export const cfile = bas.cf + phn.cile; // file
export const cFile = bas.cF + phn.cile; // File
export const cfiles = cfile + bas.cs; // files
export const cFiles = cFile + bas.cs; // Files
export const cfilename = cfile + cname; // filename
export const cFilename = cFile + cname; // Filename
export const cfileName = cfile + cName; // fileName
export const cFileName = cFile + cName; // FileName
export const cfilenames = cfilename + bas.cs; // filenames
export const cFilenames = cFilename + bas.cs; // Filenames
export const cfileNames = cfileName + bas.cs; // fileNames
export const cFileNames = cFileName + bas.cs; // FileNames
export const cfold = bas.cfo + bas.cld; // fold
export const cFold = bas.cFo + bas.cld; // Fold
export const cFolder = cFold + bas.cer; // Folder
export const cfolder = cfold + bas.cer; // folder
export const cfolders = cfolder + bas.cs; // folders
export const cFolders = cFolder + bas.cs; // Folders
export const ccafe = bas.cca + bas.cfe; // cafe
export const ccert = bas.cce + bas.crt; // cert
export const csrc = bas.csr + bas.cc; // src
export const cbin = bas.cbi + bas.cn; // bin
export const cnation = bas.cn + phn.cation; // nation
export const cNation = bas.cN + phn.cation; // Nation
export const csource = bas.cs + phn.cource; // source
export const cSource = bas.cS + phn.cource; // Source
export const cdestination = phn.cdest + bas.ci + cnation; // destination
export const cDestination = phn.cDest + bas.ci + cnation; // Destination
export const cresource = bas.cre + csource; // resource
export const cResource = bas.cRe + csource; // Resource
export const cresources = cresource + bas.cs; // resources
export const cResources = cResource + bas.cs; // Resources
export const cclass = bas.cc + phn.c_lass; // class
export const cClass = bas.cC + phn.c_lass; // Class
export const cIngestion = bas.cIn + bas.cge + bas.cs + phn.ction; // Ingestion
export const cis = bas.cis; // is
export const cIs = bas.cIs; // Is
export const cIS = bas.cIS; // IS
export const ccheck = bas.cc + phn.check; // check
export const cCheck = bas.cC + phn.check; // Check
export const cchecks = ccheck + bas.cs; // checks
export const cChecks = cCheck + bas.cs; // Checks
export const cchecked = ccheck + bas.ced; // checked
export const cChecked = cCheck + bas.ced; // Checked
export const celement = bas.cel + bas.ce + phn.cment; // element
export const cElement = bas.cEl + bas.ce + phn.cment; // Element
export const celements = celement + bas.cs; // elements
export const cElements = cElement + bas.cs; // Elements
export const cElementName = cElement + cName; // ElementName
export const callow = call + bas.cow; // allow
export const cAllow = cAll + bas.cow; // Allow
export const callowable = callow + phn.cable; // allowable
export const cAllowable = cAllow + phn.cable; // Allowable
export const chome = bas.cho + bas.cme; // home
export const cHome = bas.cHo + bas.cme; // Home
export const cpublic = bas.cpu + bas.cbl + bas.cic; // public
export const cPublic = bas.cPu + bas.cbl + bas.cic; // Public
export const cspecial = bas.csp + bas.cec + bas.cia + bas.cl; // special
export const cSpecial = bas.cSp + bas.cec + bas.cia + bas.cl; // Special
export const ccharacter = cchar + bas.cac + phn.cter; // character
export const cCharacter = cChar + bas.cac + phn.cter; // Character
export const ccharacters = ccharacter + bas.cs; // characters
export const cCharacters = cCharacter + bas.cs; // Characters
export const cedge = bas.ced + bas.cge; // edge
export const cEdge = bas.cEd + bas.cge; // Edge
export const cWorks = cWork + bas.cs; // Works
export const csolid = bas.cs + phn.colid; // solid
export const cSolid = bas.cS + phn.colid; // Solid
export const cBinary = bas.cBi + bas.cna + bas.cry; // Binary
export const cTimeout = cTime + cout; // Timeout
export const cTimeOut = cTime + cOut; // TimeOut
export const cDwell = bas.cDw + bas.cel + bas.cl; // Dwell
export const ccut = bas.ccu + bas.ct; // cut
export const cCut = bas.cCu + bas.ct; // Cut
export const ccuts = ccut + bas.cs; // cuts
export const cCuts = cCut + bas.cs; // Cuts
export const ccutting = ccut + bas.ct + phn.cing; // cutting
export const cCutting = cCut + bas.ct + phn.cing; // Cutting
export const ccute = bas.cc + phn.cute; // cute
export const cCute = bas.cC + phn.cute; // Cute
export const cexecute = gen.cexe + ccute; // execute
export const cExecute = gen.cExe + ccute; // Execute
export const cexecutes = cexecute + bas.cs; // executes
export const cExecutes = cExecute + bas.cs; // Executes
export const cexecuted = cexecute + bas.cd; // executed
export const cExecuted = cExecute + bas.cd; // Executed
export const cexecuting = gen.cexe + ccut + phn.cing; // executing
export const cExecuting = gen.cExe + ccut + phn.cing; // Executing
export const csibling = bas.cs + phn.cibling; // sibling
export const cSibling = bas.cS + phn.cibling; // Sibling
export const cchild = bas.cc + phn.child; // child
export const cChild = bas.cC + phn.child; // Child
export const cfilter = bas.cf + phn.cilter; // filter
export const cFilter = bas.cF + phn.cilter; // Filter
export const cattribute = bas.ca + phn.cttribute; // attribute
export const cAttribute = bas.cA + phn.cttribute; // Attribute
export const cattributes = bas.ca + phn.cttributes; // attributes
export const cAttributes = bas.cA + phn.cttributes; // Attributes
export const cdisabled = bas.cd + phn.cisabled; // disabled
export const cDisabled = bas.cD + phn.cisabled; // Disabled
export const cman = bas.cma + bas.cn; // man
export const cMan = bas.cMa + bas.cn; // Man
export const cwoman = bas.cwo + cman; // woman
export const cWoman = bas.cWo + cman; // Woman
export const ccell = bas.cc + phn.cell; // cell
export const cCell = bas.cC + phn.cell; // Cell
export const chung = bas.ch + phn.cung; // hung
export const cHung = bas.cH + phn.cung; // Hung
export const cport = bas.cpo + bas.crt; // port
export const cPort = bas.cPo + bas.crt; // Port
export const cConstructor = bas.cCo + bas.cns + bas.ctr + bas.cu + phn.cctor; // Constructor
export const cwarn = bas.cw + phn.carn; // warn
export const cWarn = bas.cW + phn.carn; // Warn
export const cWARN = bas.cW + bas.cAR + bas.cN; // WARN
export const cwarning = cwarn + phn.cing; // warning
export const cWarning = cWarn + phn.cing; // Warning
export const cWARNING = cWARN + phn.cING; // WARNING
export const cwarnings = cwarning + bas.cs; // warnings
export const cWarnings = cWarning + bas.cs; // Warnings
export const cerror = bas.ce + phn.crror; // error
export const cError = bas.cE + phn.crror; // Error
export const cERROR = bas.cE + phn.cRROR; // ERROR
export const cash = bas.cas + bas.ch; // ash
export const cAsh = bas.cAs + bas.ch; // Ash
export const cdash = bas.cd + cash; // dash
export const cDash = bas.cD + cash; // Dash
export const cboard = bas.cbo + phn.card; // board
export const cDashboard = cDash + cboard; // Dashboard
export const ccompose = bas.cco + bas.cmp + phn.cose; // compose
export const cdecompose = bas.cde + ccompose; // decompose
export const cDecompose = bas.cDe + ccompose; // Decompose
export const carray = bas.car + phn.cray; // array
export const cArray = bas.cAr + phn.cray; // Array
export const carrays = carray + bas.cs; // arrays
export const cArrays = cArray + bas.cs; // Arrays
export const ccamel = bas.cca + phn.cmel; // camel
export const cCamel = bas.cCa + phn.cmel; // Camel
export const cround = bas.cr + phn.cound; // round
export const cRound = bas.cR + phn.cound; // Round
export const crounded = cround + bas.ced; // rounded
export const cRounded = cRound + bas.ced; // Rounded
export const cquart = bas.cqu + phn.cart; // quart
export const cQuart = bas.cQu + phn.cart; // Quart
export const cquarter = cquart + bas.cer; // quarter
export const cQuarter = cQuart + bas.cer; // Quarter
export const cquaternion = bas.cqu + bas.cat + bas.cer + phn.cnion; // quaternion
export const cQuaternion = bas.cQu + bas.cat + bas.cer + phn.cnion; // Quaternion
export const cnormal = bas.cn + phn.cormal; // normal
export const cNormal = bas.cN + phn.cormal; // Normal
export const cnormalize = cnormal + phn.cize; // normalize
export const cNormalize = cNormal + phn.cize; // Normalize
export const cnominal = phn.cnom + phn.cinal; // nominal
export const cNominal = phn.cNom + phn.cinal; // Nominal
export const cdegree = bas.cd + phn.cegree; // degree
export const cDegree = bas.cD + phn.cegree; // Degree
export const cdegrees = cdegree + bas.cs; // degrees
export const cDegrees = cDegree + bas.cs; // Degrees
export const cangle = bas.can + phn.cgle; // angle
export const cAngle = bas.cAn + phn.cgle; // Angle
export const ctrap = bas.ct + phn.crap; // trap
export const cTrap = bas.cT + phn.crap; // Trap
export const cFraction = phn.cFra + phn.cction; // Fraction
export const cvector = bas.cve + phn.cctor; // vector
export const cVector = bas.cVe + phn.cctor; // Vector
export const cfor = bas.cfo + bas.cr; // for
export const cFor = bas.cFo + bas.cr; // For
export const cform = cfor + bas.cm; // form
export const cForm = cFor + bas.cm; // Form
export const ctransform = phn.ctrans + cform; // transform
export const cTransform = phn.cTrans + cform; // Transform
export const cpoint = bas.cpo + phn.cint; // point
export const cPoint = bas.cPo + phn.cint; // Point
export const clocation = phn.cloc + phn.cation; // location
export const cLocation = phn.cLoc + phn.cation; // Location
export const csort = bas.cs + phn.cort; // sort
export const cSort = bas.cS + phn.cort; // Sort
export const csimplify = phn.csim + phn.cplify; // simplify
export const cSimplify = phn.cSim + phn.cplify; // Simplify
export const cconsolidate = phn.ccon + phn.csol + bas.ci + cdate; // consolidate
export const cConsolidate = phn.cCon + phn.csol + bas.ci + cdate; // Consolidate
export const cconsolidated = cconsolidate + bas.cd; // consolidated
export const cConsolidated = cConsolidate + bas.cd; // Consolidated
export const cconsolidates = cconsolidate + bas.cs; // consolidates
export const cConsolidates = cConsolidate + bas.cs; // Consolidates
export const cconsolidating = phn.ccon + csolid + bas.cat + phn.cing; // consolidating
export const cConsolidating = phn.cCon + csolid + bas.cat + phn.cing; // Consolidating
export const care = phn.care; // are
export const cAre = bas.cAr + bas.ce; // Are
export const cARE = bas.cAR + bas.cE; // ARE
export const ccompare = phn.ccomp + phn.care; // compare
export const cCompare = phn.cComp + phn.care; // Compare
export const ccompares = ccompare + bas.cs; // compares
export const cCompares = cCompare + bas.cs; // Compares
export const ccompared = ccompare + bas.cd; // compared
export const cCompared = cCompare + bas.cd; // Compared
export const ccomparing = phn.ccomp + bas.car + phn.cing; // comparing
export const cComparing = phn.cComp + bas.car + phn.cing; // Comparing
export const ccomparison = phn.ccomp + bas.car + phn.cison; // comparison
export const cComparison = phn.cComp + bas.car + phn.cison; // Comparison
export const ccomparisons = ccomparison + bas.cs; // comparisons
export const cComparisons = cComparison + bas.cs; // Comparisons
export const ccontain = phn.ccon + phn.ctain; // contain
export const cContain = phn.cCon + phn.ctain; // Contain
export const ccontains = ccontain + bas.cs; // contains
export const cContains = cContain + bas.cs; // Contains
export const ccontained = ccontain + bas.ced; // contained
export const cContained = cContain + bas.ced; // Contained
export const ccontaining = ccontain + phn.cing; // containing
export const cContaining = cContain + phn.cing; // Containing
export const cvideo = bas.cv + phn.cideo; // video
export const cVideo = bas.cV + phn.cideo; // Video
export const cProduct = phn.cPro + phn.cduct; // Product
export const caggregate = bas.ca + phn.cggregate; // aggregate
export const cAggregate = bas.cA + phn.cggregate; // Aggregate
export const carguments = bas.ca + bas.crg + bas.cu + phn.cments; // arguments
export const cArguments = bas.cA + bas.crg + bas.cu + phn.cments; // Arguments
export const cDifference = phn.cDiff + bas.cer + phn.cence; // Difference
export const cbet = bas.cbe + bas.ct; // bet
export const cBet = bas.cBe + bas.ct; // Bet
export const cbetween = cbet + phn.cween; // between
export const cBetween = cBet + phn.cween; // Between
export const ccertain = bas.cce + bas.crt + phn.cain; // certain
export const cascertain = bas.cas + ccertain; // ascertain
export const cAscertain = bas.cAs + ccertain; // Ascertain
export const cmatch = bas.cma + phn.ctch; // match
export const cMatch = bas.cMa + phn.ctch; // Match
export const cmatching = cmatch + phn.cing; // matching
export const cMatching = cMatch + phn.cing; // Matching
export const cdoes = bas.cdo + bas.ces; // does
export const cDoes = bas.cDo + bas.ces; // Does
export const cDOES = bas.cDO + bas.cES; // DOES
export const capplication = phn.capp + phn.clica + phn.ction; // application
export const cApplication = phn.cApp + phn.clica + phn.ction; // Application
export const cAPPLICATION = phn.cAPP + phn.cLICA + phn.cTION; // APPLICATION
export const cbuild = bas.cbu + phn.cild; // build
export const cBuild = bas.cBu + phn.cild; // Build
export const cdeploy = bas.cd + bas.cep + phn.cloy; // deploy
export const cDeploy = bas.cD + bas.cep + phn.cloy; // Deploy
export const cDEPLOY = bas.cD + bas.cEP + phn.cLOY; // DEPLOY
export const cdeployment = cdeploy + phn.cment; // deployment
export const cDeployment = cDeploy + phn.cment; // Deployment
export const clease = bas.cle + phn.c_ase; // lease
export const cLEASE = bas.cLE + phn.c_ASE; // LEASE
export const crelease = bas.cre + clease; // release
export const cRelease = bas.cRe + clease; // Release
export const cRELEASE = bas.cRE + cLEASE; // RELEASE
export const creleases = crelease + bas.cs; // releases
export const cReleases = cRelease + bas.cs; // Releases
export const creleased = crelease + bas.cd; // released
export const cReleased = cRelease + bas.cd; // Released
export const creleasing = bas.cre + phn.cleas + phn.cing; // releasing
export const cReleasing = bas.cRe + phn.cleas + phn.cing; // Releasing
export const croot = bas.cr + phn.coot; // root
export const cRoot = bas.cR + phn.coot; // Root
export const cparse = bas.cp + phn.carse; // parse
export const cParse = bas.cP + phn.carse; // Parse
export const cPARSE = bas.cP + phn.cARSE; // PARSE
export const cparser = cparse + bas.cr; // parser
export const cParser = cParse + bas.cr; // Parser
export const cPARSER = cPARSE + bas.cR; // PARSER
export const cparsed = cparse + bas.cd; // parsed
export const cParsed = cParse + bas.cd; // Parsed
export const cparsing = bas.cp + phn.cars + phn.cing; // parsing
export const cParsing = bas.cP + phn.cars + phn.cing; // Parsing
export const cforward = cfor + phn.cward; // forward
export const cForward = cFor + phn.cward; // Forward
export const cslash = bas.cs + phn.clash; // slash
export const cSlash = bas.cS + phn.clash; // Slash
export const cmeta = bas.cm + phn.ceta; // meta
export const cMeta = bas.cM + phn.ceta; // Meta
export const cmetaData = cmeta + cData; // metaData
export const cMetaData = cMeta + cData; // MetaData
export const cbusiness = bas.cb + phn.cusiness; // business
export const cBusiness = bas.cB + phn.cusiness; // Business
export const crule = bas.cr + phn.cule; // rule
export const cRule = bas.cR + phn.cule; // Rule
export const cfresh = bas.cfr + phn.cesh; // fresh
export const crefresh = bas.cre + cfresh; // refresh
export const cRefresh = bas.cRe + cfresh; // Refresh
export const ceval = bas.ce + phn.cval; // eval
export const cEval = bas.cE + phn.cval; // Eval
export const creload = bas.cre + cload; // reload
export const cReload = bas.cRe + cload; // Reload
export const cdemo = bas.cd + phn.cemo; // demo
export const cDemo = bas.cD + phn.cemo; // Demo
export const ccommon = bas.cc + phn.common; // common
export const cCommon = bas.cC + phn.common; // Common
export const cfunction = bas.cf + bas.cun + phn.cction; // function
export const cFunction = bas.cF + bas.cun + phn.cction; // Function
export const cfunctions = cfunction + bas.cs; // functions
export const cFunctions = cFunction + bas.cs; // Functions
export const cmultiple = phn.cmulti + phn.cple; // multiple
export const cMultiple = phn.cMulti + phn.cple; // Multiple
export const cJournal = bas.cJo + bas.cur + phn.cnal; // Journal
export const cExecution = phn.cExe + bas.ccu + phn.ction; // Execution
export const cpercent = phn.cper + phn.ccent; // percent
export const cPercent = phn.cPer + phn.ccent; // Percent
export const cbasic = bas.cb + phn.casic; // basic
export const cBasic = bas.cB + phn.casic; // Basic
export const codd = bas.cod + bas.cd; // odd
export const cOdd = bas.cOd + bas.cd; // Odd
export const ceven = bas.ce + phn.cven; // even
export const cEven = bas.cE + phn.cven; // Even
export const cEVEN = bas.cE + phn.cVEN; // EVEN
export const cevent = bas.ce + phn.cvent; // event
export const cEvent = bas.cE + phn.cvent; // Event
export const cevents = cevent + bas.cs; // events
export const cEvents = cEvent + bas.cs; // Events
export const cface = bas.cfa + bas.cce; // face
export const cFace = bas.cFa + bas.cce; // Face
export const cargument = phn.carg + bas.cu + phn.cment; // argument
export const cArgument = phn.cArg + bas.cu + phn.cment; // Argument
export const cdrive = bas.cd + phn.crive; // drive
export const cDrive = bas.cD + phn.crive; // Drive
export const cdriven = cdrive + bas.cn; // driven
export const cDriven = cDrive + bas.cn; // Driven
export const cinterface = phn.cinter + cface; // interface
export const cInterface = phn.cInter + cface; // Interface
export const cfont = bas.cf + phn.cont; // font
export const cFont = bas.cF + phn.cont; // Font
export const cmodule = phn.cmod + phn.cule; // module
export const cModule = phn.cMod + phn.cule; // Module
export const ccolor = phn.ccol + bas.cor; // color
export const cColor = phn.cCol + bas.cor; // Color
export const ccolors = ccolor + bas.cs; // colors
export const cColors = cColor + bas.cs; // Colors
export const ccolored = ccolor + bas.ced; // colored
export const cColored = cColor + bas.ced; // Colored
export const ccolorize = ccolor + phn.cize; // colorize
export const cColorize = cColor + phn.cize; // Colorize
export const ccolorized = ccolorize + bas.cd; // colorized
export const cColorized = cColorize + bas.cd; // Colorized
export const cold = bas.col + bas.cd; // old
export const cOld = bas.cOl + bas.cd; // Old
export const cbold = bas.cb + cold; // bold
export const cBold = bas.cB + cold; // Bold
export const cmost = bas.cm + phn.cost; // most
export const cMost = bas.cM + phn.cost; // Most
export const cpop = bas.cpo + bas.cp; // pop
export const cPop = bas.cPo + bas.cp; // Pop
export const cPOP = bas.cPO + bas.cP; // POP
export const cpopular = cpop + phn.cular; // popular
export const cPopular = cPop + phn.cular; // Popular
export const calmost = bas.cal + cmost; // almost
export const cAlmost = bas.cAl + cmost; // Almost
export const cpal = bas.cpa + bas.cl; // pal
export const cPal = bas.cPa + bas.cl; // Pal
export const cpalindrome = cpal + bas.cin + phn.cdrome; // palindrome
export const cPalindrome = cPal + bas.cin + phn.cdrome; // Palindrome
export const caverage = phn.cave + phn.crage; // average
export const cAverage = phn.cAve + phn.crage; // Average
export const cclient = phn.ccli + phn.cent; // client
export const cClient = phn.cCli + phn.cent; // Client
export const crules = bas.cr + phn.cules; // rules
export const cRules = bas.cR + phn.cules; // Rules
export const ccustom = phn.ccust + bas.com; // custom
export const cCustom = phn.cCust + bas.com; // Custom
export const ccommand = phn.ccom + phn.cmand; // command
export const cCommand = phn.cCom + phn.cmand; // Command
export const cCOMMAND = phn.cCOM + phn.cMAND; // COMMAND
export const ccommands = ccommand + bas.cs; // commands
export const cCommands = cCommand + bas.cs; // Commands
export const cqueue = bas.cqu + bas.ceu + bas.ce; // queue
export const cQueue = bas.cQu + bas.ceu + bas.ce; // Queue
export const cenqueue = bas.cen + cqueue; // enqueue
export const cEnqueue = bas.cEn + cqueue; // Enqueue
export const cdequeue = bas.cde + cqueue; // dequeue
export const cDequeue = bas.cDe + cqueue; // Dequeue
export const cblob = bas.cb + phn.clob; // blob
export const cBlob = bas.cB + phn.clob; // Blob
export const cframe = bas.cf + phn.crame; // frame
export const cFrame = bas.cF + phn.crame; // Frame
export const calias = bas.cal + phn.cias; // alias
export const cAlias = bas.cAl + phn.cias; // Alias
export const caliases = calias + bas.ces; // aliases
export const cAliases = cAlias + bas.ces; // Aliases
export const csequencer = phn.cseq + bas.cue + phn.cncer; // sequencer
export const cSequencer = phn.cSeq + bas.cue + phn.cncer; // Sequencer
export const cprimary = phn.cpri + phn.cmary; // primary
export const cPrimary = phn.cPri + phn.cmary; // Primary
export const csecondary = unt.csecond + phn.cary; // secondary
export const cSecondary = unt.cSecond + phn.cary; // Secondary
export const ctertiary = phn.ctert + phn.ciary; // tertiary
export const cTertiary = phn.cTert + phn.ciary; // Tertiary
export const cdelimit = bas.cde + climit; // delimit
export const cDelimit = bas.cDe + climit; // Delimit
export const cdelimiter = cdelimit + bas.cer; // delimiter
export const cDelimiter = cDelimit + bas.cer; // Delimiter
export const cdelimiters = cdelimiter + bas.cs; // delimiters
export const cDelimiters = cDelimiter + bas.cs; // Delimiters
export const cdelimited = cdelimit + bas.ced; // delimited
export const cDelimited = cDelimit + bas.ced; // Delimited
export const cdelimiting = cdelimit + phn.cing; // delimiting
export const cDelimiting = cDelimit + phn.cing; // Delimiting
export const chelp = bas.che + bas.clp; // help
export const cHelp = bas.cHe + bas.clp; // Help
export const cprint = bas.cp + phn.crint; // print
export const cPrint = bas.cP + phn.crint; // Print
export const chive = bas.ch + phn.cive; // hive
export const cHive = bas.cH + phn.cive; // Hive
export const cgenerator = phn.cgen + bas.cer + phn.cator; // generator
export const cGenerator = phn.cGen + bas.cer + phn.cator; // Generator
export const cindex = bas.cin + phn.cdex; // index
export const cIndex = bas.cIn + phn.cdex; // Index
export const cabout = bas.ca + phn.cbout; // about
export const cAbout = bas.cA + phn.cbout; // About
export const cstart = bas.cs + phn.ctart; // start
export const cStart = bas.cS + phn.ctart; // Start
export const cstarts = cstart + bas.cs; // starts
export const cStarts = cStart + bas.cs; // Starts
export const cstarted = cstart + bas.ced; // started
export const cStarted = cStart + bas.ced; // Started
export const cstartup = cstart + bas.cup; // startup
export const cstarting = cstart + phn.cing; // starting
export const cStarting = cStart + phn.cing; // Starting
export const coutput = cout + cput; // output
export const cOutput = cOut + cput; // Output
export const cmetric = phn.cmet + phn.cric; // metric
export const cMetric = phn.cMet + phn.cric; // Metric
export const cmetrics = cmetric + bas.cs; // metrics
export const cMetrics = cMetric + bas.cs; // Metrics
export const crack = bas.cr + phn.cack; // rack
export const cRack = bas.cR + phn.cack; // Rack
export const ctrack = bas.ct + crack; // track
export const cTrack = bas.cT + crack; // Track
export const ctracking = ctrack + phn.cing; // tracking
export const cTracking = cTrack + phn.cing; // Tracking
export const cstack = bas.cst + phn.cack; // stack
export const cStack = bas.cSt + phn.cack; // Stack
export const cstandard = bas.cst + cand + phn.card; // standard
export const cStandard = bas.cSt + cand + phn.card; // Standard
export const cdeviation = phn.cdev + bas.cia + phn.ction; // deviation
export const cDeviation = phn.cDev + bas.cia + phn.ction; // Deviation
export const canalysis = phn.cana + bas.cly + phn.csis; // analysis
export const cAnalysis = phn.cAna + bas.cly + phn.csis; // Analysis
export const cclear = bas.ccl + phn.cear; // clear
export const cClear = bas.cCl + phn.cear; // Clear
export const cversion = phn.cver + phn.csion; // version
export const cVersion = phn.cVer + phn.csion; // Version
export const ccontrol = phn.ccon + phn.ctrol; // control
export const cControl = phn.cCon + phn.ctrol; // Control
export const ccontrols = ccontrol + bas.cs; // controls
export const cControls = cControl + bas.cs; // Controls
export const ccontrolled = ccontrol + phn.cled; // controlled
export const cControlled = cControl + phn.cled; // Controlled
export const ccontrolling = ccontrol + phn.cling; // controlling
export const cControlling = cControl + phn.cling; // Controlling
export const ccontroller = ccontrol + phn.cler; // controller
export const cController = cControl + phn.cler; // Controller
export const ccontrollers = ccontroller + bas.cs; // controllers
export const cControllers = cController + bas.cs; // Controllers
export const cperform = phn.cper + cform; // perform
export const cPerform = phn.cPer + cform; // Perform
export const cperformance = cperform + phn.cance; // performance
export const cPerformance = cPerform + phn.cance; // Performance
export const cconversion = phn.ccon + cversion; // conversion
export const cConversion = phn.cCon + cversion; // Conversion
export const cpass = bas.cp + phn.cass; // pass
export const cPass = bas.cP + phn.cass; // Pass
export const cPASS = bas.cP + phn.cASS; // PASS
export const cpassed = cpass + bas.ced; // passed
export const cPassed = cPass + bas.ced; // Passed
export const cPASSED = cPASS + bas.cED; // PASSED
export const cpassing = cpass + phn.cing; // passing
export const cPassing = cPass + phn.cing; // Passing
export const cbypass = bas.cby + cpass; // bypass
export const cBypass = bas.cBy + cpass; // Bypass
export const cbypasses = cbypass + bas.ces; // bypasses
export const cBypasses = cBypass + bas.ces; // Bypasses
export const cbypassed = cbypass + bas.ced; // bypassed
export const cBypassed = cBypass + bas.ced; // Bypassed
export const cbypassing = cbypass + phn.cing; // bypassing
export const cBypassing = cBypass + phn.cing; // Bypassing
export const cfail = bas.cf + phn.cail; // fail
export const cFail = bas.cF + phn.cail; // Fail
export const cFAIL = bas.cF + phn.cAIL; // FAIL
export const cfailed = cfail + bas.ced; // failed
export const cFailed = cFail + bas.ced; // Failed
export const cFAILED = cFAIL + bas.cED; // FAILED
export const cfailure = cfail + phn.cure; // failure
export const cFailure = cFail + phn.cure; // Failure
export const csimplified = phn.csim + bas.cpl + phn.cified; // simplified
export const cSimplified = phn.cSim + bas.cpl + phn.cified; // Simplified
export const ctraditional = phn.ctrad + bas.ci + phn.ctional; // traditional
export const cTraditional = phn.cTrad + bas.ci + phn.ctional; // Traditional
export const cground = bas.cgr + phn.cound; // ground
export const cGround = bas.cGr + phn.cound; // Ground
export const cyell = bas.cye + bas.cll; // yell
export const cYell = bas.cYe + bas.cll; // Yell
export const clack = bas.cla + bas.cck; // lack
export const cLack = bas.cLa + bas.cck; // Lack
export const clane = bas.cl + phn.cane; // lane
export const cLane = bas.cL + phn.cane; // Lane
export const csection = phn.csec + phn.ction; // section
export const cSection = phn.cSec + phn.ction; // Section
export const csections = csection + bas.cs; // sections
export const cSections = cSection + bas.cs; // Sections
export const cunit = phn.cuni + bas.ct; // unit
export const cUnit = phn.cUni + bas.ct; // Unit
export const cunits = cunit + bas.cs;
export const cUnits = cUnit + bas.cs;
export const cgeneric = phn.cgen + bas.ce + phn.cric; // generic
export const cGeneric = phn.cGen + bas.ce + phn.cric; // Generic
export const cisotope = phn.ciso + phn.ctope; // isotope
export const cIsotope = phn.cIso + phn.ctope; // Isotope
export const cphonic = phn.cphon + bas.cic; // phonic
export const cPhonic = phn.cPhon + bas.cic; // Phonic
export const cphonics = cphonic + bas.cs; // phonics
export const cPhonics = cPhonic + bas.cs; // Phonics
export const cshape = phn.csha + bas.cpe; // shape
export const cShape = phn.cSha + bas.cpe; // Shape
export const cexport = bas.cex + cport; // export
export const cExport = bas.cEx + cport; // Export
export const cplay = bas.cp + phn.clay; // play
export const cPlay = bas.cP + phn.clay; // Play
export const cdisplay = bas.cd + bas.cis + cplay; // display
export const cDisplay = bas.cD + bas.cis + cplay; // Display
export const csum = bas.csu + bas.cm; // sum
export const cSum = bas.cSu + bas.cm; // Sum
export const csummary = csum + phn.cmary; // summary
export const cSummary = cSum + phn.cmary; // Summary
export const csuggest = phn.csug + phn.cgest; // suggest
export const cSuggest = phn.cSug + phn.cgest; // Suggest
export const csuggested = csuggest + bas.ced; // suggested
export const cSuggested = cSuggest + bas.ced; // Suggested
export const cline = bas.cli + bas.cne; // line
export const cLine = bas.cLi + bas.cne; // Line
export const cdocument = gen.cdoc + bas.cu + phn.cment; // document
export const cDocument = gen.cDoc + bas.cu + phn.cment; // Document
export const cqualified = bas.cq + phn.cual + phn.cified; // qualified
export const cQualified = bas.cQ + phn.cual + phn.cified; // Qualified
export const cfix = bas.cf + bas.cix; // fix
export const cFix = bas.cF + bas.cix; // Fix
export const cprefix = phn.cpre + cfix; // prefix
export const cPrefix = phn.cPre + cfix; // Prefix
export const csuffix = phn.csuf + cfix; // suffix
export const cSuffix = phn.cSuf + cfix; // Suffix
export const cdevelop = phn.cdev + bas.ce + phn.clop; // develop
export const cDevelop = phn.cDev + bas.ce + phn.clop; // Develop
export const cDEVELOP = phn.cDEV + bas.cE + phn.cLOP; // DEVELOP
export const cdevelopment = cdevelop + phn.cment; // development
export const cDevelopment = cDevelop + phn.cment; // Development
export const cDEVELOPMENT = cDEVELOP + phn.cMENT; // DEVELOPMENT
export const cproduction = phn.cprod + bas.cuc + phn.ction; // production
export const cProduction = phn.cProd + bas.cuc + phn.ction; // Production
export const cPRODUCTION = phn.cPROD + bas.cUC + phn.cTION; // PRODUCTION
export const cstorage = phn.cstor + phn.cage; // storage
export const cStorage = phn.cStor + phn.cage; // Storage
export const cstore = phn.cstor + bas.ce; // store
export const cStore = phn.cStor + bas.ce; // Store
export const cstored = phn.cstor + bas.ced; // stored
export const cStored = phn.cStor + bas.ced; // Stored
export const cunique = phn.cuni + phn.cque; // unique
export const cUnique = phn.cUni + phn.cque; // Unique
export const cduplicate = phn.cdup + bas.cli + phn.ccate; // duplicate
export const cDuplicate = phn.cDup + bas.cli + phn.ccate; // Duplicate
export const cplease = bas.cpl + phn.cease; // please
export const cPlease = bas.cPl + phn.cease; // Please
export const center = bas.cen + phn.cter; // enter
export const cEnter = bas.cEn + phn.cter; // Enter
export const centers = center + bas.cs; // enters
export const cEnters = cEnter + bas.cs; // Enters
export const centered = center + bas.ced; // entered
export const cEntered = cEnter + bas.ced; // Entered
export const centering = center + phn.cing; // entering
export const cEntering = cEnter + phn.cing; // Entering
export const cwere = bas.cw + phn.cere; // were
export const cWere = bas.cW + phn.cere; // Were
export const cwhere = bas.cwh + phn.cere; // where
export const cWhere = bas.cWh + phn.cere; // Where
export const cher = bas.che + bas.cr; // her
export const cHer = bas.cHe + bas.cr; // Her
export const chim = bas.chi + bas.cm; // him
export const cHim = bas.cHi + bas.cm; // Him
export const chers = cher + bas.cs; // hers
export const cHers = cHer + bas.cs; // Hers
export const chis = bas.chi + bas.cs; // his
export const cHis = bas.cHi + bas.cs; // His
export const cthem = bas.cth + bas.cem; // them
export const cThem = bas.cTh + bas.cem; // Them
export const cthose = bas.cth + phn.cose; // those
export const cThose = bas.cTh + phn.cose; // Those
export const cthat = bas.cth + bas.cat; // that
export const cThat = bas.cTh + bas.cat; // That
export const cthis = bas.ct + chis; // this
export const cThis = bas.cT + chis; // This
export const cwhen = bas.cwh + bas.cen; // when
export const cWhen = bas.cWh + bas.cen; // When
export const cwhat = bas.cwh + bas.cat; // what
export const cWhat = bas.cWh + bas.cat; // What
export const chow = bas.cho + bas.cw; // how
export const cHow = bas.cHo + bas.cw; // How
export const cwhy = bas.cwh + bas.cy; // why
export const cWhy = bas.cWh + bas.cy; // Why
export const cother = bas.cot + cher; // other
export const cOther = bas.cOt + cher; // Other
export const cabreviation = bas.cab + phn.crev + bas.cia + phn.ction; // abreviation
export const cAbreviation = bas.cAb + phn.crev + bas.cia + phn.ction; // Abreviation
export const cabreviations = cabreviation + bas.cs; // abreviations
export const cAbreviations = cAbreviation + bas.cs; // Abreviations
export const cacronym = bas.cac + phn.cron + bas.cym; // acronym
export const cAcronym = bas.cAc + phn.cron + bas.cym; // Acronym
export const cacronyms = cacronym + bas.cs; // acronyms
export const cAcronyms = cAcronym + bas.cs; // Acronyms
export const csolve = bas.cs + phn.colve; // solve
export const cSolve = bas.cS + phn.colve; // Solve
export const cLehmer = bas.cLe + bas.chm + bas.cer; // Lehmer
export const cdeep = bas.cd + phn.ceep; // deep
export const cDeep = bas.cD + phn.ceep; // Deep
export const cclone = bas.ccl + num.cone; // clone
export const cClone = bas.cCl + num.cone; // Clone
export const ccursive = phn.ccur + phn.csive; // cursive
export const cCursive = phn.cCur + phn.csive; // Cursive
export const crecursive = bas.cre + ccursive; // recursive
export const cRecursive = bas.cRe + ccursive; // Recursive
export const cexpansion = phn.cexp + bas.can + phn.csion; // expansion
export const cExpansion = phn.cExp + bas.can + phn.csion; // Expansion
export const cscreen = bas.csc + phn.creen; // screen
export const cScreen = bas.cSc + phn.creen; // Screen
export const cyou = bas.cyo + bas.cu; // you
export const cYou = bas.cYo + bas.cu; // You
export const cwould = bas.cw + phn.could; // would
export const cWould = bas.cW + phn.could; // Would
export const cshould = bas.csh + phn.could; // should
export const cShould = bas.cSh + phn.could; // Should
export const ccould = bas.cc + phn.could; // could
export const cCould = bas.cC + phn.could; // Could
export const clike = bas.cl + phn.cike; // like
export const cLike = bas.cL + phn.cike; // Like
export const cfine = bas.cf + phn.cine; // fine
export const cFine = bas.cF + phn.cine; // Fine
export const cdefine = bas.cde + cfine; // define
export const cDefine = bas.cDe + cfine; // Define
export const cdefined = cdefine + bas.cd; // defined
export const cDefined = cDefine + bas.cd; // Defined
export const cdefines = cdefine + bas.cs; // defines
export const cDefines = cDefine + bas.cs; // Defines
export const cdefining = bas.cde + phn.cfin + phn.cing; // defining
export const cDefining = bas.cDe + phn.cfin + phn.cing; // Defining
export const cfill = bas.cf + phn.cill; // fill
export const cFill = bas.cF + phn.cill; // Fill
export const cfulfillment = phn.cful + cfill + phn.cment; // fulfillment
export const cFulfillment = phn.cFul + cfill + phn.cment; // Fulfillment
export const coptimized = phn.copt + bas.cim + phn.cized; // optimized
export const cOptimized = phn.cOpt + bas.cim + phn.cized; // Optimized
export const csome = bas.cs + phn.come; // some
export const cSome = bas.cS + phn.come; // Some
export const ccomb = bas.cc + phn.comb; // comb
export const cComb = bas.cC + phn.comb; // Comb
export const ccombine = ccomb + phn.cine; // combine
export const cCombine = cComb + phn.cine; // Combine
export const ccombines = ccombine + bas.cs; // combines
export const cCombines = cCombine + bas.cs; // Combines
export const ccombined = ccombine + bas.cd; // combined
export const cCombined = cCombine + bas.cd; // Combined
export const ccombining = ccomb + bas.cin + phn.cing; // combining
export const cCombining = cComb + bas.cin + phn.cing; // Combining
export const crecombine = bas.cre + ccombine; // recombine
export const cRecombine = bas.cRe + ccombine; // Recombine
export const ccombination = ccomb + bas.cin + phn.cation; // combination
export const cCombination = cComb + bas.cin + phn.cation; // Combination
export const ccombinations = ccombination + bas.cs; // combinations
export const cCombinations = cCombination + bas.cs; // Combinations
export const crecognizer = phn.crec + bas.cog + bas.cn + phn.cizer; // recognizer
export const cRecognizer = phn.cRec + bas.cog + bas.cn + phn.cizer; // Recognizer
export const cpat = bas.cpa + bas.ct; // pat
export const cPat = bas.cPa + bas.ct; // Pat
export const cpatt = cpat + bas.ct; // patt
export const cPatt = cPat + bas.ct; // Patt
export const cpattern = cpatt + phn.cern; // pattern
export const cPattern = cPatt + phn.cern; // Pattern
export const cpatterns = cpattern + bas.cs; // patterns
export const cPatterns = cPattern + bas.cs; // Patterns
export const ccoma = gen.ccom + bas.ca; // coma
export const cComa = gen.cCom + bas.ca; // Coma
export const ccomas = ccoma + bas.cs; // comas
export const cComas = cComa + bas.cs; // Comas
export const cseparate = bas.cse + bas.cpa + phn.crate; // separate
export const cSeparate = bas.cSe + bas.cpa + phn.crate; // Separate
export const cseparated = cseparate + bas.cd; // separated
export const cSeparated = cSeparate + bas.cd; // Separated
export const csea = bas.cse + bas.ca; // sea
export const cSea = bas.cSe + bas.ca; // Sea
export const csearch = csea + phn.crch; // search
export const cSearch = cSea + phn.crch; // Search
export const csearches = csearch + bas.ces; // searches
export const cSearches = cSearch + bas.ces; // Searches
export const csearched = csearch + bas.ced; // searched
export const cSearched = cSearch + bas.ced; // Searched
export const csearching = csearch + phn.cing; // searching
export const cSearching = cSearch + phn.cing; // Searching
export const cneed = bas.cn + phn.ceed; // need
export const cNeed = bas.cN + phn.ceed; // Need
export const cimplement = bas.cim + phn.cple + phn.cment; // implement
export const cImplement = bas.cIm + phn.cple + phn.cment; // Implement
export const cimplements = cimplement + bas.cs; // implements
export const cImplements = cImplement + bas.cs; // Implements
export const cimplementation = cimplement + phn.cation; // implementation
export const cImplementation = cImplement + phn.cation; // Implementation
export const cgoing = bas.cgo + phn.cing; // going
export const cGoing = bas.cGo + phn.cing; // Going
export const cmain = bas.cm + phn.cain; // main
export const cMain = bas.cM + phn.cain; // Main
export const cprogram = phn.cpro + bas.cg + phn.cram; // program
export const cProgram = phn.cPro + bas.cg + phn.cram; // Program
export const cloop = bas.cl + phn.coop; // loop
export const cLoop = bas.cL + phn.coop; // Loop
export const cgood = bas.cg + phn.cood; // good
export const cGood = bas.cG + phn.cood; // Good
export const cbye = bas.cby + bas.ce; // bye
export const cBye = bas.cBy + bas.ce; // Bye
export const chave = bas.ch + phn.cave; // have
export const cHave = bas.cH + phn.cave; // Have
export const cnice = bas.cn + phn.cice; // nice
export const cNice = bas.cN + phn.cice; // Nice
export const cday = bas.cda + bas.cy; // day
export const cDay = bas.cDa + bas.cy; // Day
export const cstay = bas.cs + phn.ctay; // stay
export const cStay = bas.cS + phn.ctay; // Stay
export const csafe = bas.cs + phn.cafe; // safe
export const cSafe = bas.cS + phn.cafe; // Safe
export const cwas = bas.cwa + bas.cs; // was
export const cWas = bas.cWa + bas.cs; // Was
export const cbig = bas.cbi + bas.cg; // big
export const cBig = bas.cBi + bas.cg; // Big
export const cbigger = cbig + phn.cger; // bigger
export const cBigger = cBig + phn.cger; // Bigger
export const cbiggest = cbig + phn.cgest; // biggest
export const cBiggest = cBig + phn.cgest; // Biggest
export const cspecific = phn.cspec + phn.cific; // specific
export const cSpecific = phn.cSpec + phn.cific; // Specific
export const cspecified = phn.cspec + phn.cified; // specified
export const cSpecified = phn.cSpec + phn.cified; // Specified
export const cdomain = bas.cdo + cmain; // domain
export const cDomain = bas.cDo + cmain; // Domain
export const cmode = bas.cm + phn.code; // mode
export const cMode = bas.cM + phn.code; // Mode
export const csymbol = phn.csym + phn.cbol; // symbol
export const cSymbol = phn.cSym + phn.cbol; // Symbol
export const csymbols = csymbol + bas.cs; // symbols
export const cSymbols = cSymbol + bas.cs; // Symbols
export const cresolve = phn.cres + phn.colv + bas.ce; // resolve
export const cResolve = phn.cRes + phn.colv + bas.ce; // Resolve
export const cresolved = cresolve + bas.cd; // resolved
export const cResolved = cResolve + bas.cd; // Resolved
export const cresolving = phn.cres + phn.colv + phn.cing; // resolving
export const cResolving = phn.cRes + phn.colv + phn.cing; // Resolving
export const cvariation = phn.cvar + bas.cia + phn.ction; // variation
export const cVariation = phn.cVar + bas.cia + phn.ction; // Variation
export const cterm = bas.ct + phn.cerm; // term
export const cTerm = bas.cT + phn.cerm; // Term
export const ccost = bas.cc + phn.cost; // cost
export const cCost = bas.cC + phn.cost; // Cost
export const cperiod = phn.cper + phn.ciod; // period
export const cPeriod = phn.cPer + phn.ciod; // Period
export const ccannot = ccan + gen.cnot; // cannot
export const cCannot = cCan + gen.cnot; // Cannot
export const cnothing = gen.cnot + phn.ching; // nothing
export const cNothing = gen.cNot + phn.ching; // Nothing
export const cnothingness = cnothing + phn.cness; // nothingness
export const cNothingness = cNothing + phn.cness; // Nothingness
export const cused = cuse + bas.cd; // used
export const cUsed = cUse + bas.cd; // Used
export const cusing = bas.cus + phn.cing; // using
export const cUsing = bas.cUs + phn.cing; // Using
export const cbreak = bas.cbr + phn.ceak; // break
export const cBreak = bas.cBr + phn.ceak; // Break
export const cinto = bas.ci + phn.cnto; // into
export const cInto = bas.cI + phn.cnto; // Into
export const cunable = bas.cun + phn.cable; // unable
export const cUnable = bas.cUn + phn.cable; // Unable
export const cnow = bas.cno + bas.cw; // now
export const cNow = bas.cNo + bas.cw; // Now
export const cknow = bas.ck + cnow; // know
export const cKnow = bas.cK + cnow; // Know
export const cknown = cknow + bas.cn; // known
export const cKnown = cKnow + bas.cn; // Known
export const cunknown = bas.cun + cknown; // unknown
export const cUnknown = bas.cUn + cknown; // Unknown
export const ctemp = bas.ct + phn.cemp; // temp
export const cTemp = bas.cT + phn.cemp; // Temp
export const ctempt = ctemp + bas.ct; // tempt
export const cTempt = cTemp + bas.ct; // Tempt
export const cattempt = bas.cat + ctempt; // attempt
export const cAttempt = bas.cA + bas.ct + ctempt; // Attempt
export const cattempts = cattempt + bas.cs; // attempts
export const cAttempts = cAttempt + bas.cs; // Attempts
export const cattempted = cattempt + bas.ced; // attempted
export const cAttempted = cAttempt + bas.ced; // Attempted
export const cattempting = cattempt + phn.cing; // attempting
export const cAttempting = cAttempt + phn.cing; // Attempting
export const cmat = bas.cma + bas.ct; // mat
export const cMat = bas.cMa + bas.ct; // Mat
export const cformat = cfor + cmat; // format
export const cFormat = cFor + cmat; // Format
export const cformats = cformat + bas.cs; // formats
export const cFormats = cFormat + bas.cs; // Formats
export const cformatted = cformat + phn.cted; // formatted
export const cFormatted = cFormat + phn.cted; // Formatted
export const cformatting = cformat + bas.ct + phn.cing; // formatting
export const cFormatting = cFormat + bas.ct + phn.cing; // Formatting
export const creformat = bas.cre + cformat; // reformat
export const cReformat = bas.cRe + cformat; // Reformat
export const creformats = creformat + bas.cs; // reformats
export const cReformats = cReformat + bas.cs; // Reformats
export const creformated = creformat + bas.ced; // reformatted
export const cReformated = cReformat + bas.ced; // Reformatted
export const creformating = creformat + phn.cing; // reformatting
export const cReformating = cReformat + phn.cing; // Reformatting
export const ccorrect = phn.ccor + phn.crect; // correct
export const cCorrect = phn.cCor + phn.crect; // Correct
export const ccorrects = ccorrect + bas.cs; // corrects
export const cCorrects = cCorrect + bas.cs; // Corrects
export const ccorrected = ccorrect + bas.ced; // corrected
export const cCorrected = cCorrect + bas.ced; // Corrected
export const ccorrectly = ccorrect + bas.cly; // correctly
export const cCorrectly = cCorrect + bas.cly; // Correctly
export const ccorrecting = ccorrect + phn.cing; // correcting
export const cCorrecting = cCorrect + phn.cing; // Correcting
export const cbut = bas.cbu + bas.ct; // but
export const cBut = bas.cBu + bas.ct; // But
export const crent = bas.cr + phn.cent; // rent
export const cRent = bas.cR + phn.cent; // Rent
export const ccurrent = phn.ccur + crent; // current
export const cCurrent = phn.cCur + crent; // Current
export const cdelta = bas.cde + phn.clta; // delta
export const cDelta = bas.cDe + phn.clta; // Delta
export const cbeing = bas.cbe + phn.cing; // being
export const cBeing = bas.cBe + phn.cing; // Being
export const cskip = bas.csk + bas.cip; // skip
export const cSkip = bas.cSk + bas.cip; // Skip
export const cskips = cskip + bas.cs; // skips
export const cSkips = cSkip + bas.cs; // Skips
export const cskiped = cskip + bas.ced; // skiped
export const cSkiped = cSkip + bas.ced; // Skiped
export const cskiping = cskip + phn.cing; // skiping
export const cSkiping = cSkip + phn.cing; // Skiping
export const chad = bas.cha + bas.cd; // had
export const cHad = bas.cHa + bas.cd; // Had
export const cchange = bas.cch + phn.cange; // change
export const cChange = bas.cCh + phn.cange; // Change
export const cCHANGE = bas.cCH + phn.cANGE; // CHANGE
export const cpush = bas.cp + phn.cush; // push
export const cPush = bas.cP + phn.cush; // Push
export const cPUSH = bas.cP + phn.cUSH; // PUSH
export const cpushes = cpush + bas.ces; // pushes
export const cPushes = cPush + bas.ces; // Pushes
export const cpushed = cpush + bas.ced; // pushed
export const cPushed = cPush + bas.ced; // Pushed
export const cpushing = cpush + phn.cing; // pushing
export const cPushing = cPush + phn.cing; // Pushing
export const cexpand = bas.cex + phn.cpand; // expand
export const cExpand = bas.cEx + phn.cpand; // Expand
export const cexpands = cexpand + bas.cs; // expands
export const cExpands = cExpand + bas.cs; // Expands
export const cexpanded = cexpand + bas.ced; // expanded
export const cExpanded = cExpand + bas.ced; // Expanded
export const cexpanding = cexpand + phn.cing; // expanding
export const cExpanding = cExpand + phn.cing; // Expanding
export const ccall = bas.cc + call; // call
export const cCall = bas.cC + call; // Call
export const ccalls = ccall + bas.cs; // calls
export const cCalls = cCall + bas.cs; // Calls
export const ccalled = ccall + bas.ced; // called
export const cCalled = cCall + bas.ced; // Called
export const ccalling = ccall + phn.cing; // calling
export const cCalling = cCall + phn.cing; // Calling
export const clook = bas.cl + phn.cook; // look
export const cLook = bas.cL + phn.cook; // Look
export const clooks = clook + bas.cs; // looks
export const cLooks = cLook + bas.cs; // Looks
export const clooked = clook + bas.ced; // looked
export const cLooked = cLook + bas.ced; // Looked
export const clooking = clook + phn.cing; // looking
export const cLooking = cLook + phn.cing; // Looking
export const clookup = clook + bas.cup; // lookup
export const cLookup = cLook + bas.cup; // Lookup
export const celse = bas.ce + phn.clse; // else
export const cElse = bas.cE + phn.clse; // Else
export const cfar = bas.cfa + bas.cr; // far
export const cFar = bas.cFa + bas.cr; // Far
export const cspecify = phn.cspec + phn.cify; // specify
export const cSpecify = phn.cSpec + phn.cify; // Specify
export const csupport = phn.csup + cport; // support
export const cSupport = phn.cSup + cport; // Support
export const csupports = csupport + bas.cs; // supports
export const cSupports = cSupport + bas.cs; // Supports
export const csupported = csupport + bas.ced; // supported
export const cSupported = cSupport + bas.ced; // Supported
export const csupporting = csupport + phn.cing; // supporting
export const cSupporting = cSupport + phn.cing; // Supporting
export const cfound = bas.cfo + phn.cund; // found
export const cFound = bas.cFo + phn.cund; // Found
export const cfounded = cfound + bas.ced; // founded
export const cFounded = cFound + bas.ced; // Founded
export const cunfounded = bas.cun + cfounded; // unfounded
export const cUnfounded = bas.cUn + cfounded; // Unfounded
export const coriginal = phn.cori + bas.cg + phn.cinal; // original
export const cOriginal = phn.cOri + bas.cg + phn.cinal; // Original
export const coriginals = coriginal + bas.cs; // originals
export const cOriginals = cOriginal + bas.cs; // Originals
export const ccause = bas.cca + cuse; // cause
export const cCause = bas.cCa + cuse; // Cause
export const cbecause = bas.cbe + ccause; // because
export const cBecause = bas.cBe + ccause; // Because
export const canother = bas.can + cother; // another
export const cAnother = bas.cAn + cother; // Another
export const cparameter = phn.cpara + phn.cmet + bas.cer; // parameter
export const cParameter = phn.cPara + phn.cmet + bas.cer; // Parameter
export const cparameters = cparameter + bas.cs; // parameters
export const cParameters = cParameter + bas.cs; // Parameters
export const ctry = bas.ctr + bas.cy; // try
export const cTry = bas.cTr + bas.cy; // Try
export const ctried = bas.ctr + phn.cied; // tried
export const cTried = bas.cTr + phn.cied; // Tried
export const ctrying = ctry + phn.cing; // trying
export const cTrying = cTry + phn.cing; // Trying
export const cgain = bas.cg + phn.cain; // gain
export const cGain = bas.cG + phn.cain; // Gain
export const cagain = bas.ca + cgain; // again
export const cAgain = bas.cA + cgain; // Again
export const ctent = bas.ct + phn.cent; // tent
export const cTent = bas.cT + phn.cent; // Tent
export const ctents = ctent + bas.cs; // tents
export const cTents = cTent + bas.cs; // Tents
export const ctenting = ctent + phn.cing; // tenting
export const cTenting = cTent + phn.cing; // Tenting
export const ccontent = phn.ccon + ctent; // content
export const cContent = phn.cCon + ctent; // Content
export const ccontents = ccontent + bas.cs; // contents
export const cContents = cContent + bas.cs; // Contents
export const cmust = bas.cm + phn.cust; // must
export const cMust = bas.cM + phn.cust; // Must
export const cprompt = phn.cpro + phn.cmpt; // prompt
export const cPrompt = phn.cPro + phn.cmpt; // Prompt
export const cexample = bas.cex + phn.cample; // example
export const cExample = bas.cEx + phn.cample; // Example
export const cEXAMPLE = bas.cEX + phn.cAMPLE; // EXAMPLE
export const cstructure = bas.cst + phn.cruc + phn.cture; // structure
export const cStructure = bas.cSt + phn.cruc + phn.cture; // Structure
export const cstructured = cstructure + bas.cd; // structured
export const cStructured = cStructure + bas.cd; // Structured
export const cstructures = cstructure + bas.cs; // structures
export const cStructures = cStructure + bas.cs; // Structures
export const cmore = bas.cm + phn.core; // more
export const cMore = bas.cM + phn.core; // More
export const chas = bas.cha + bas.cs; // has
export const cHas = bas.cHa + bas.cs; // Has
export const cread = phn.crea + bas.cd; // read
export const cRead = phn.cRea + bas.cd; // Read
export const creads = cread + bas.cs; // reads
export const cReads = cRead + bas.cs; // Reads
export const creading = cread + phn.cing; // reading
export const cReading = cRead + phn.cing; // Reading
export const cready = phn.crea + bas.cdy; // ready
export const cReady = phn.cRea + bas.cdy; // Ready
export const cREADY = phn.cREA + bas.cDY; // READY
export const calready = bas.cal + cready; // already
export const cAlready = bas.cAl + cready; // Already
export const cALREADY = bas.cAL + cREADY; // ALREADY
export const cbeen = bas.cb + phn.ceen; // been
export const cBeen = bas.cB + phn.ceen; // Been
export const cfollow = bas.cf + bas.col + clow; // follow
export const cFollow = bas.cF + bas.col + clow; // Follow
export const cfollowes = cfollow + bas.ces; // followes
export const cFollowes = cFollow + bas.ces; // Followes
export const cfollowed = cfollow + bas.ced; // followed
export const cFollowed = cFollow + bas.ced; // Followed
export const cfollowing = cfollow + phn.cing; // following
export const cFollowing = cFollow + phn.cing; // Following
export const cdefinition = bas.cde + phn.cfin + phn.cition; // definition
export const cDefinition = bas.cDe + phn.cfin + phn.cition; // Definition
export const cdefinitions = cdefinition + bas.cs; // definitions
export const cDefinitions = cDefinition + bas.cs; // Definitions
export const cdone = bas.cdo + bas.cne; // done
export const cDone = bas.cDo + bas.cne; // Done
export const cDONE = bas.cDO + bas.cNE; // DONE
export const cphase = bas.cph + phn.c_ase; // phase
export const cPhase = bas.cPh + phn.c_ase; // Phase
export const cphases = cphase + bas.cs; // phases
export const cPhases = cPhase + bas.cs; // Phases
export const cphased = cphase + bas.cd; // phased
export const cPhased = cPhase + bas.cd; // Phased
export const cphasing = bas.cph + bas.cas + phn.cing; // phasing
export const cPhasing = bas.cPh + bas.cas + phn.cing; // Phasing
export const ctick = bas.ct + phn.cick; // tick
export const cTick = bas.cT + phn.cick; // Tick
export const cyay = bas.cya + bas.cy; // yay
export const cYay = bas.cYa + bas.cy; // Yay
export const cYAY = bas.cYA + bas.cY; // YAY
export const ctag = bas.cta + bas.cg; // tag
export const cTag = bas.cTa + bas.cg; // Tag
export const ctags = ctag + bas.cs; // tags
export const cTags = cTag + bas.cs; // Tags
export const ctagged = ctag + bas.cg + bas.ced; // tagged
export const cTagged = cTag + bas.cg + bas.ced; // Tagged
export const ctagging = ctag + bas.cg + phn.cing; // tagging
export const cTagging = cTag + bas.cg + phn.cing; // Tagging
export const clit = bas.cli + bas.ct; // lit
export const cLit = bas.cLi + bas.ct; // Lit
export const csplit = bas.csp + clit; // split
export const cSplit = bas.cSp + clit; // Split
export const csplits = csplit + bas.cs; // splits
export const cSplits = cSplit + bas.cs; // Splits
export const csplitting = csplit + bas.ct + phn.cing; // splitting
export const cSplitting = cSplit + bas.ct + phn.cing; // Splitting
export const cdoing = bas.cdo + phn.cing; // doing
export const cDoing = bas.cDo + phn.cing; // Doing
export const cstraight = bas.cs + phn.ctra + phn.cight; // straight
export const cStraight = bas.cS + phn.ctra + phn.cight; // Straight
export const cbroker = bas.cbr + phn.coker; // broker
export const cBroker = bas.cBr + phn.coker; // Broker
export const cbrokers = cbroker + bas.cs; // brokers
export const cBrokers = cBroker + bas.cs; // Brokers
export const cpost = bas.cp + phn.cost; // post
export const cPost = bas.cP + phn.cost; // Post
export const cposts = cpost + bas.cs; // posts
export const cPosts = cPost + bas.cs; // Posts
export const cposted = cpost + bas.ced; // posted
export const cPosted = cPost + bas.ced; // Posted
export const cposting = cpost + phn.cing; // posting
export const cPosting = cPost + phn.cing; // Posting
export const cmerge = bas.cm + phn.cerge; // merge
export const cMerge = bas.cM + phn.cerge; // Merge
export const cMERGE = bas.cM + phn.cERGE; // MERGE
export const cmerges = cmerge + bas.cs; // merges
export const cMerges = cMerge + bas.cs; // Merges
export const cmerged = cmerge + bas.cd; // merged
export const cMerged = cMerge + bas.cd; // Merged
export const cMERGED = cMERGE + bas.cD; // MERGED
export const cmerging = bas.cm + phn.cerg + phn.cing; // merging
export const cMerging = bas.cM + phn.cerg + phn.cing; // Merging
export const cinclude = bas.cin + bas.cc + phn.clude; // include
export const cInclude = bas.cIn + bas.cc + phn.clude; // Include
export const cincludes = cinclude + bas.cs; // includes
export const cIncludes = cInclude + bas.cs; // Includes
export const cincluded = cinclude + bas.cd; // included
export const cIncluded = cInclude + bas.cd; // Included
export const cincluding = bas.cin + bas.cc + phn.clud + phn.cing; // including
export const cIncluding = bas.cIn + bas.cc + phn.clud + phn.cing; // Including
export const cfinal = phn.cfin + bas.cal; // final
export const cFinal = phn.cFin + bas.cal; // Final
export const cfinals = cfinal + bas.cs; // finals
export const cFinals = cFinal + bas.cs; // Finals
export const cfinally = cfinal + bas.cly; // finally
export const cFinally = cFinal + bas.cly; // Finally
export const ccaught = phn.ccau + phn.cght; // caught
export const cCaught = phn.cCau + phn.cght; // Caught
export const cflat = bas.cf + phn.clat; // flat
export const cFlat = bas.cF + phn.clat; // Flat
export const cflats = cflat + bas.cs; // flats
export const cFlats = cFlat + bas.cs; // Flats
export const cflatten = cflat + phn.cten; // flatten
export const cFlatten = cFlat + phn.cten; // Flatten
export const cflattened = cflat + bas.cte + phn.cned; // flattened
export const cFlattened = cFlat + bas.cte + phn.cned; // Flattened
export const cflattening = cflatten + phn.cing; // flattening
export const cFlattening = cFlatten + phn.cing; // Flattening
export const cside = bas.cs + phn.cide; // side
export const cSide = bas.cS + phn.cide; // Side
export const csides = cside + bas.cs; // sides
export const cSides = cSide + bas.cs; // Sides
export const csided = cside + bas.cd; // sided
export const cSided = cSide + bas.cd; // Sided
export const csiding = phn.csid + phn.cing; // siding
export const cSiding = phn.cSid + phn.cing; // Siding
export const cinside = bas.cin + cside; // inside
export const cInside = bas.cIn + cside; // Inside
export const ctarget = phn.ctar + cget; // target
export const cTarget = phn.cTar + cget; // Target
export const ctargets = ctarget + bas.cs; // targets
export const cTargets = cTarget + bas.cs; // Targets
export const ctargeted = ctarget + bas.ced; // targeted
export const cTargeted = cTarget + bas.ced; // Targeted
export const ctargeting = ctarget + phn.cing; // targeting
export const cTargeting = cTarget + phn.cing; // Targeting
export const cmodify = phn.cmod + phn.cify; // modify
export const cModify = phn.cMod + phn.cify; // Modify
export const cmodified = phn.cmod + phn.cified; // modified
export const cModified = phn.cMod + phn.cified; // Modified
export const cmodifies = phn.cmod + phn.cifies; // modifies
export const cModifies = phn.cMod + phn.cifies; // Modifies
export const cmodifying = cmodify + phn.cing; // modifying
export const cModifying = cModify + phn.cing; // Modifying
export const creference = phn.cref + bas.cer + phn.cence; // reference
export const cReference = phn.cRef + bas.cer + phn.cence; // Reference
export const creferences = creference + bas.cs; // references
export const cReferences = cReference + bas.cs; // References
export const creferenced = creference + bas.cd; // referenced
export const cReferenced = cReference + bas.cd; // Referenced
export const creferencing = phn.cref + bas.cer + phn.cenc + phn.cing; // referencing
export const cReferencing = phn.cRef + bas.cer + phn.cenc + phn.cing; // Referencing
export const cwrite = bas.cwr + phn.cite; // write
export const cWrite = bas.cWr + phn.cite; // Write
export const cwrites = cwrite + bas.cs; // writes
export const cWrites = cWrite + bas.cs; // Writes
export const cwritten = bas.cw + phn.crit + phn.cten; // written
export const cWritten = bas.cW + phn.crit + phn.cten; // Written
export const cwriting = bas.cw + phn.crit + phn.cing; // writing
export const cWriting = bas.cW + phn.crit + phn.cing; // Writing
export const cscan = bas.cs + ccan; // scan
export const cScan = bas.cS + ccan; // Scan
export const cscans = cscan + bas.cs; // scans
export const cScans = cScan + bas.cs; // Scans
export const cscanned = cscan + phn.cned; // scanned
export const cScanned = cScan + phn.cned; // Scanned
export const cscanning = cscan + bas.cn + phn.cing; // scanning
export const cScanning = cScan + bas.cn + phn.cing; // Scanning
export const cdirect = bas.cdi + phn.crect; // direct
export const cDirect = bas.cDi + phn.crect; // Direct
export const cdirects = cdirect + bas.cs; // directs
export const cDirects = cDirect + bas.cs; // Directs
export const cdirected = cdirect + bas.ced; // directed
export const cDirected = cDirect + bas.ced; // Directed
export const cdirector = cdirect + bas.cor; // director
export const cDirector = cDirect + bas.cor; // Director
export const cdirecting = cdirect + phn.cing; // directing
export const cDirecting = cDirect + phn.cing; // Directing
export const cdirectors = cdirector + bas.cs; // directors
export const cDirectors = cDirector + bas.cs; // Directors
export const cdirectory = cdirector + bas.cy; // directory
export const cDirectory = cDirector + bas.cy; // Directory
export const cdirectories = cdirector + phn.cies; // directories
export const cDirectories = cDirector + phn.cies; // Directories
export const cchive = bas.cc + chive; // chive
export const cChive = bas.cC + chive; // Chive
export const cchives = cchive + bas.cs; // chives
export const cChives = cChive + bas.cs; // Chives
export const carchive = bas.car + cchive; // archive
export const cArchive = bas.cAr + cchive; // Archive
export const carchived = carchive + bas.cd; // archived
export const cArchived = cArchive + bas.cd; // Archived
export const carchives = carchive + bas.cs; // archives
export const cArchives = cArchive + bas.cs; // Archives
export const carchiving = bas.car + phn.cchiv + phn.cing; // archiving
export const cArchiving = bas.cAr + phn.cchiv + phn.cing; // Archiving
export const ccop = bas.cco + bas.cp; // cop
export const cCop = bas.cCo + bas.cp; // Cop
export const ccops = ccop + bas.cs; // cops
export const cCops = cCop + bas.cs; // Cops
export const ccopy = bas.cc + phn.copy; // copy
export const cCopy = bas.cC + phn.copy; // Copy
export const ccopies = ccop + phn.cies; // copies
export const cCopies = cCop + phn.cies; // Copies
export const ccopied = ccop + phn.cied; // copied
export const cCopied = cCop + phn.cied; // Copied
export const ccopying = ccopy + phn.cing; // copying
export const cCopying = cCopy + phn.cing; // Copying
export const csuccess = bas.csu + phn.cccess; // success
export const cSuccess = bas.cSu + phn.cccess; // Success
export const csuccesses = csuccess + bas.ces; // successes
export const cSuccesses = cSuccess + bas.ces; // Successes
export const csuccessful = csuccess + phn.cful; // successful
export const cSuccessful = cSuccess + phn.cful; // Successful
export const cpack = bas.cp + phn.cack; // pack
export const cPack = bas.cP + phn.cack; // Pack
export const cpacks = cpack + bas.cs; // packs
export const cPacks = cPack + bas.cs; // Packs
export const cpacked = cpack + bas.ced; // packed
export const cPacked = cPack + bas.ced; // Packed
export const cpacking = cpack + phn.cing; // packing
export const cPacking = cPack + phn.cing; // Packing
export const cpackage = cpack + phn.cage; // package
export const cPackage = cPack + phn.cage; // Package
export const cpackages = cpackage + bas.cs; // packages
export const cPackages = cPackage + bas.cs; // Packages
export const cpackaged = cpackage + bas.cd; // packaged
export const cPackaged = cPackage + bas.cd; // Packaged
export const cpackaging = cpack + bas.cag + phn.cing; // packaging
export const cPackaging = cPack + bas.cag + phn.cing; // Packaging
export const canalyze = phn.cana + phn.clyze; // analyze
export const cAnalyze = phn.cAna + phn.clyze; // Analyze
export const canalyzes = canalyze + bas.cs; // analyzes
export const cAnalyzes = cAnalyze + bas.cs; // Analyzes
export const canalyzed = canalyze + bas.cd; // analyzed
export const cAnalyzed = cAnalyze + bas.cd; // Analyzed
export const canalyzing = phn.cana + phn.clyz + phn.cing; // analyzing
export const cAnalyzing = phn.cAna + phn.clyz + phn.cing; // Analyzing
export const csame = bas.cs + phn.came; // same
export const cSame = bas.cS + phn.came; // Same
export const cthere = cthe + bas.cre; // there
export const cThere = cThe + bas.cre; // There
export const cbracket = phn.cbra + bas.cc + phn.cket; // bracket
export const cBracket = phn.cBra + bas.cc + phn.cket; // Bracket
export const cbrackets = cbracket + bas.cs; // brackets
export const cBrackets = cBracket + bas.cs; // Brackets
export const cbracketed = cbracket + bas.ced; // bracketed
export const cBracketed = cBracket + bas.ced; // Bracketed
export const cbracketing = cbracket + phn.cing; // bracketing
export const cBracketing = cBracket + phn.cing; // Bracketing
export const cregular = phn.creg + phn.cular; // regular
export const cRegular = phn.cReg + phn.cular; // Regular
export const cexpression = bas.cex + cpress + phn.cion; // expression
export const cExpression = bas.cEx + cpress + phn.cion; // Expression
export const cexpressions = cexpression + bas.cs; // expressions
export const cExpressions = cExpression + bas.cs; // Expressions
export const clexical = phn.clex + phn.cical; // lexical
export const cLexical = phn.cLex + phn.cical; // Lexical
export const clexicon = phn.clex + phn.cicon; // lexicon
export const cLexicon = phn.cLex + phn.cicon; // Lexicon
export const clexicons = clexicon + bas.cs; // lexicons
export const cLexicons = cLexicon + bas.cs; // Lexicons
export const cjust = bas.cj + phn.cust; // just
export const cJust = bas.cJ + phn.cust; // Just
export const cjustice = cjust + phn.cice; // justice
export const cJustice = cJust + phn.cice; // Justice
export const cjustified = cjust + phn.cified; // justified
export const cJustified = cJust + phn.cified; // Justified
export const cadjust = bas.ca + bas.cd + cjust; // adjust
export const cAdjust = bas.cAd + cjust; // Adjust
export const cadjusts = cadjust + bas.cs; // adjusts
export const cAdjusts = cAdjust + bas.cs; // Adjusts
export const cadjusted = cadjust + bas.ced; // adjusted
export const cAdjusted = cAdjust + bas.ced; // Adjusted
export const cadjusting = cadjust + phn.cing; // adjusting
export const cAdjusting = cAdjust + phn.cing; // Adjusting
export const csleep = bas.csl + phn.ceep; // sleep
export const cSleep = bas.cSl + phn.ceep; // Sleep
export const csleeps = csleep + bas.cs; // sleeps
export const cSleeps = cSleep + bas.cs; // Sleeps
export const csleeped = csleep + bas.ced; // sleeped
export const cSleeped = cSleep + bas.ced; // Sleeped
export const csleeping = csleep + phn.cing; // sleeping
export const cSleeping = cSleep + phn.cing; // Sleeping
export const cleaf = bas.cl + phn.ceaf; // leaf
export const cLeaf = bas.cL + phn.ceaf; // Leaf
export const centry = bas.cen + ctry; // entry
export const cEntry = bas.cEn + ctry; // Entry
export const centries = bas.cen + bas.ctr + phn.cies; // entries
export const cEntries = bas.cEn + bas.ctr + phn.cies; // Entries
export const centity = bas.cen + phn.ctity; // entity
export const cEntity = bas.cEn + phn.ctity; // Entity
export const cmay = bas.cma + bas.cy; // may
export const cMay = bas.cMa + bas.cy; // May
export const conly = bas.co + phn.cnly; // only
export const cOnly = bas.cO + phn.cnly; // Only
export const csuch = bas.cs + phn.cuch; // such
export const cSuch = bas.cS + phn.cuch; // Such
export const cgeneration = phn.cgen + bas.cer + phn.cation; // generation
export const cGeneration = phn.cGen + bas.cer + phn.cation; // Generation
export const cDemocratic = cDemo + bas.ccr + phn.cati + bas.cc; // Democratic
export const cRepublic = bas.cRe + cpublic; // Republic
export const cCentral = unt.cCent + phn.cral; // Central
export const cAfrican = bas.cAf + phn.crica + bas.cn; // African
export const cPapua = bas.cPa + bas.cpu + bas.ca; // Papua
export const cTrinidad = phn.cTri + bas.cni + bas.cda + bas.cd; // Trinidad
export const cTabago = bas.cTa + bas.cba + bas.cgo; // Tabago
export const cUnited = cUnit + bas.ced; // United
export const cArab = bas.cAr + bas.cab; // Arab
export const cEmirates = bas.cEm + bas.cir + phn.cates; // Emirates
export const cStates = bas.cSt + phn.cates; // States
export const cAmerica = bas.cAm + bas.cer + phn.cica; // America
export const cliver = bas.cli + phn.cver; // liver
export const cLiver = bas.cLi + phn.cver; // Liver
export const ccountry = ccount + bas.cry; // country
export const cCountry = cCount + bas.cry; // Country
export const ccountries = ccount + phn.cries; // countries
export const cCountries = cCount + phn.cries; // Countries
export const cknot = bas.ck + gen.cnot; // knot
export const cKnot = bas.cK + gen.cnot; // Knot
export const cknots = cknot + bas.cs; // knots
export const cKnots = cKnot + bas.cs; // Knots
export const clanguage = phn.clang + phn.cuage; // language
export const cLanguage = phn.cLang + phn.cuage; // Language
export const clanguages = clanguage + bas.cs; // languages
export const cLanguages = cLanguage + bas.cs; // Languages
export const csole = bas.cs + phn.cole; // sole
export const cSole = bas.cS + phn.cole; // Sole
export const cconsole = phn.ccon + csole; // console
export const cConsole = phn.cCon + csole; // Console
export const cboss = bas.cb + phn.coss; // boss
export const cBoss = bas.cB + phn.coss; // Boss
export const cpanic = bas.cpa + phn.cnic; // panic
export const cPanic = bas.cPa + phn.cnic; // Panic
export const cslow = bas.cs + clow; // slow
export const cSlow = bas.cS + clow; // Slow
export const cgot = bas.cgo + bas.ct; // got
export const cGot = bas.cGo + bas.ct; // Got
export const cmiss = bas.cm + phn.ciss; // miss
export const cMiss = bas.cM + phn.ciss; // Miss
export const cecho = bas.cec + bas.cho; // echo
export const cEcho = bas.cEc + bas.cho; // Echo
export const cincrement = phn.cinc + bas.cre + phn.cment; // increment
export const cIncrement = phn.cInc + bas.cre + phn.cment; // Increment
export const cincrements = cincrement + bas.cs; // increments
export const cIncrements = cIncrement + bas.cs; // Increments
export const cincremented = cincrement + bas.ced; // incremented
export const cIncremented = cIncrement + bas.ced; // Incremented
export const cincrementing = cincrement + phn.cing; // incrementing
export const cIncrementing = cIncrement + phn.cing; // Incrementing
export const cforce = cfor + bas.cce; // force
export const cForce = cFor + bas.cce; // Force
export const cforced = cforce + bas.cd; // forced
export const cForced = cForce + bas.cd; // Forced
export const cforcing = cfor + bas.cc + phn.cing; // forcing
export const cForcing = cFor + bas.cc + phn.cing; // Forcing
export const cforces = cforce + bas.cs; // forces
export const cForces = cForce + bas.cs; // Forces
export const cexecutrix = phn.cexe + ccut + phn.crix; // executrix
export const cExecutrix = phn.cExe + ccut + phn.crix; // Executrix
export const cframework = cframe + cwork; // framework
export const cFramework = cFrame + cwork; // Framework
export const cboot = bas.cbo + bas.cot; // boot
export const cBoot = bas.cBo + bas.cot; // Boot
export const cstrap = bas.cst + phn.crap; // strap
export const cStrap = bas.cSt + phn.crap; // Strap
export const csetup = cset + bas.cup; // setup
export const cSetup = cSet + bas.cup; // Setup
export const csetups = csetup + bas.cs; // setups
export const cSetups = cSetup + bas.cs; // Setups
export const csynchronous = csync + phn.cron + phn.cous; // synchronous
export const cSynchronous = cSync + phn.cron + phn.cous; // Synchronous
export const csynchronously = csynchronous + bas.cly; // synchronously
export const cSynchronously = cSynchronous + bas.cly; // Synchronously
export const cappend = gen.capp + cend; // append
export const cAppend = gen.cApp + cend; // Append
export const cappends = cappend + bas.cs; // appends
export const cAppends = cAppend + bas.cs; // Appends
export const cappended = cappend + bas.ced; // appended
export const cAppended = cAppend + bas.ced; // Appended
export const cappending = cappend + phn.cing; // appending
export const cAppending = cAppend + phn.cing; // Appending
export const cmoment = bas.cmo + phn.cment; // moment
export const cMoment = bas.cMo + phn.cment; // Moment
export const cmoments = cmoment + bas.cs; // moments
export const cMoments = cMoment + bas.cs; // Moments
export const ccompute = phn.ccomp + phn.cute; // compute
export const cCompute = phn.cComp + phn.cute; // Compute
export const ccomputes = ccompute + bas.cs; // computes
export const cComputes = cCompute + bas.cs; // Computes
export const ccomputer = ccompute + bas.cr; // computer
export const cComputer = cCompute + bas.cr; // Computer
export const ccomputers = ccomputer + bas.cs; // computers
export const cComputers = cComputer + bas.cs; // Computers
export const ccomputing = phn.ccomp + bas.cut + phn.cing; // computing
export const cComputing = phn.cComp + bas.cut + phn.cing; // Computing
export const cschema = bas.csc + bas.che + bas.cma; // schema
export const cSchema = bas.cSc + bas.che + bas.cma; // Schema
export const cdot = bas.cdo + bas.ct; // dot
export const cDot = bas.cDo + bas.ct; // Dot
export const clogic = gen.clog + bas.cic; // logic
export const cLogic = gen.cLog + bas.cic; // Logic
export const clogical = clogic + bas.cal; // logical
export const cLogical = cLogic + bas.cal; // Logical
export const charness = phn.char + phn.cness; // harness
export const cHarness = phn.cHar + phn.cness; // Harness
export const cHARNESS = phn.cHAR + phn.cNESS; // HARNESS
export const cuniversal = phn.cuni + phn.cver + phn.csal; // universal
export const cUniversal = phn.cUni + phn.cver + phn.csal; // Universal
export const cmath = cmat + bas.ch; // math
export const cMath = cMat + bas.ch; // Math
export const cmathematics = cmath + bas.ce + cmat + phn.cics; // mathematics
export const cMathematics = cMath + bas.ce + cmat + phn.cics; // Mathematics
export const cmathematician = cmath + bas.ce + cmat + bas.cic + phn.cian; // mathematician
export const cMathematician = cMath + bas.ce + cmat + bas.cic + phn.cian; // Mathematician
export const cmathematicians = cmathematician + bas.cs; // mathematicians
export const cMathematicians = cMathematician + bas.cs; // Mathematicians
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
export const cAbsolute = bas.cAb + phn.csol + phn.cute; // Absolute
export const cAcid = bas.cAc + bas.cid; // Acid
export const cAir = bas.cAi + bas.cr; // Air
export const cSuperiority = phn.cSup + bas.cer + bas.cio + phn.crit + bas.cy; // Superiority
export const cAlabaster = bas.cAl + bas.cab + bas.cas + phn.cter; // Alabaster
export const cAlice = bas.cAl + phn.cice; // Alice
export const cAlloy = phn.cAll + bas.coy; // Alloy
export const cAmaranth = bas.cAm + phn.caranth; // Amaranth
export const cAndroid = cAnd + bas.cro + bas.cid; // Android
export const cAntique = bas.cAn + bas.cti + phn.cque; // Antique
export const cBrass = phn.cBra + bas.css; // Brass
export const cBronze = bas.cBr + phn.conze; // Bronze
export const cApple = gen.cApp + bas.cle; // Apple
export const cApricot = bas.cAp + phn.cricot; // Apricot
export const cArctic = bas.cAr + bas.cct + bas.cic; // Arctic
export const cArmy = bas.cAr + bas.cmy; // Army
export const cArylide = bas.cAr + bas.cyl + phn.cide; // Arylide
export const cAtomic = bas.cA + bas.ct + bas.com + bas.cic; // Atomic
export const cBaby = bas.cBa + bas.cby; // Baby
export const cEyes = bas.cEy + bas.ces; // Eyes
export const cPowder = bas.cPo + phn.cwder; // Powder
export const cBaker = bas.cBa + bas.cke + bas.cr; // Baker
export const cMiller = unt.cMill + bas.cer; // Miller
export const cBanana = bas.cBa + bas.cna + bas.cna; // Banana
export const cMania = cMan + bas.cia; // Mania
export const cBarbie = bas.cBa + bas.crb + bas.cie; // Barbie
export const cBarn = bas.cBa + bas.crn; // Barn
export const cBattleship = bas.cBa + bas.ctt + phn.cles + phn.chip; // Battleship
export const cBeau = bas.cBe + bas.cau; // Beau
export const cDazzled = bas.cDa + bas.czz + bas.cle + bas.cd; // Dazzled
export const cBitter = bas.cBi + phn.ctte + bas.cr; // Bitter
export const csweet = bas.cs + phn.cweet; // sweet
export const cSweet = bas.cS + phn.cweet; // Sweet
export const cBittersweet = bas.cBi + phn.ctte + bas.crs + phn.cweet; // Bittersweet
export const cShimmer = bas.cSh + phn.cimmer; // Shimmer
export const cBean = bas.cBe + bas.can; // Bean
export const cChocolate = bas.cCh + phn.cocolate; // Chocolate
export const cShadows = phn.cSha + phn.cdow + bas.cs; // Shadows
export const cBlanched = bas.cBl + bas.can + bas.cch + bas.ced; // Blanched
export const cBlast = bas.cBl + bas.cas + bas.ct; // Blast
export const cBlizzard = bas.cBl + bas.ciz + phn.czard; // Blizzard
export const cBlood = bas.cBl + phn.cood; // Blood
export const cCrayola = bas.cCr + phn.cayola; // Crayola
export const cMunsell = bas.cMu + phn.cnsell; // Munsell
export const cPantone = bas.cPa + phn.cntone; // Pantone
export const cPigment = bas.cPi + phn.cgment; // Pigment
export const cBell = bas.cBe + bas.cll; // Bell
export const cwheel = bas.cwh + phn.ceel; // wheel
export const cWheel = bas.cWh + phn.ceel; // Wheel
export const cwheels = cwheel + bas.cs; // wheels
export const cWheels = cWheel + bas.cs; // Wheels
export const cJeans = bas.cJe + phn.cans; // Jeans
export const cYonder = bas.cYo + phn.cnder; // Yonder
export const cBottle = bas.cBo + bas.ctt + bas.cle; // Bottle
export const cbrick = bas.cbr + phn.cick; // brick
export const cBrick = bas.cBr + phn.cick; // Brick
export const cbricks = cbrick + bas.cs; // bricks
export const cBricks = cBrick + bas.cs; // Bricks
export const cBright = bas.cBr + phn.cight; // Bright
export const cBrilliant = bas.cBr + phn.cill + phn.cian + bas.ct; // Brilliant
export const cRacing = bas.cRa + bas.cci + bas.cng; // Racing
export const cSugar = phn.cSug + bas.car; // Sugar
export const cBrunswick = bas.cBr + bas.cun + bas.csw + phn.cick; // Brunswick
export const cBud = bas.cBu + bas.cd; // Bud
export const cBurly = bas.cBu + bas.crl + bas.cy; // Burly
export const cBurnished = bas.cBu + bas.crn + phn.cish + bas.ced; // Burnished
export const cBurnt = bas.cBu + bas.crn + bas.ct; // Burnt
export const cCadet = bas.cCa + phn.cdet; // Cadet
export const cCafe = bas.cCa + bas.cfe; // Cafe
export const cCambridge = bas.cCa + bas.cmb + bas.cri + bas.cdg + bas.ce; // Cambridge
export const cCameo = bas.cCa + bas.cme + bas.co; // Cameo
export const cCaput = bas.cCa + cput; // Caput
export const cMortuum = bas.cMo + bas.crt + bas.cuu + bas.cm; // Mortuum
export const cCaribbean = bas.cCa + bas.cri + bas.cbb + phn.cean; // Caribbean
export const cCarnation = bas.cCa + bas.crn + phn.cation; // Carnation
export const cCarrot = bas.cCa + phn.crrot; // Carrot
export const cCastleton = bas.cCa + phn.cstle + phn.cton; // Castleton
export const cCedar = bas.cCe + bas.cda + bas.cr; // Cedar
export const cChest = bas.cC + phn.chest; // Chest
export const cCeladon = phn.cCel + phn.cadon; // Celadon
export const cCeltic = phn.cCel + phn.ctic; // Celtic
export const cCharleston = cChar + phn.cles + phn.cton; // Charleston
export const cCharm = cChar + bas.cm; // Charm
export const cChartreuse = cChar + phn.ctre + cuse; // Chartreuse
export const cCherry = bas.cCh + phn.cerry; // Cherry
export const cBlossom = bas.cBl + phn.coss + bas.com; // Blossom
export const cChestnut = cChest + bas.cnu + bas.ct; // Chestnut
export const cChrome = bas.cCh + bas.cro + bas.cme; // Chrome
export const cCinnamon = bas.cCi + phn.cnna + phn.cmon; // Cinnamon
export const cCocoa = bas.cCo + bas.cco + bas.ca; // Cocoa
export const cCoffee = bas.cCo + phn.cffee; // Coffee
export const cColumbia = phn.cCol + bas.cum + phn.cbia; // Columbia
export const cCool = bas.cCo + bas.col; // Cool
export const cflower = bas.cf + clower; // flower
export const cFlower = bas.cF + clower; // Flower
export const cflowers = cflower + bas.cs; // flowers
export const cFlowers = cFlower + bas.cs; // Flowers
export const csilk = bas.cs + phn.cilk; // silk
export const cSilk = bas.cS + phn.cilk; // Silk
export const cCosmic = bas.cCo + bas.csm + bas.cic; // Cosmic
export const cLatte = bas.cLa + phn.ctte; // Latte
export const cCoyote = bas.cCo + bas.cyo + bas.cte; // Coyote
export const cCotton = bas.cCo + bas.ctt + bas.con; // Cotton
export const cCyber = bas.cCy + phn.cber; // Cyber
export const cDark = bas.cDa + bas.crk; // Dark
export const cByzantium = bas.cBy + phn.czantium; // Byzantium
export const cElectric = bas.cEl + phn.cect + phn.cric; // Electric
export const cKhaki = bas.cKh + phn.caki; // Khaki
export const cHorse = bas.cHo + phn.crse; // Horse
export const cHorses = cHorse + bas.cs; // Horses
export const cMoss = bas.cMo + bas.css; // Moss
export const cPastel = bas.cPa + phn.cste + bas.cl; // Pastel
export const cSky = bas.cSk + bas.cy; // Sky
export const cSlate = bas.cSl + phn.cate; // Slate
export const cSpring = bas.cSp + phn.crin + bas.cg; // Spring
export const cDartmouth = bas.cDa + bas.crt + bas.cmo + phn.cuth; // Dartmouth
export const cDavys = bas.cDa + bas.cvy + bas.cs; // Davys
export const cCerise = bas.cCe + phn.crise; // Cerise
export const cSparkle = bas.cSp + phn.cark + bas.cle; // Sparkle
export const cDim = bas.cDi + bas.cm; // Dim
export const cDodger = bas.cDo + bas.cdg + bas.cer; // Dodger
export const cDogwood = bas.cDo + bas.cgw + phn.cood; // Dogwood
export const cDuke = bas.cDu + bas.cke; // Duke
export const cDutch = bas.cDu + phn.ctch; // Dutch
export const cEarth = bas.cEa + bas.crt + bas.ch; // Earth
export const cEerie = bas.cEe + bas.cri + bas.ce; // Eerie
export const cEton = bas.cEt + bas.con; // Eton
export const cFalu = bas.cFa + bas.clu; // Falu
export const cFashion = bas.cFa + bas.csh + phn.cion; // Fashion
export const cFern = bas.cFe + bas.crn; // Fern
export const cFiery = bas.cFi + bas.cer + bas.cy; // Fiery
export const cFire = bas.cFi + bas.cre; // Fire
export const cEngine = bas.cEn + bas.cgi + bas.cne; // Engine
export const cFloral = bas.cFl + phn.coral; // Floral
export const cFluorescent = bas.cFl + bas.cuo + phn.cres + phn.ccent; // Fluorescent
export const cForest = cFor + phn.cest; // Forest
export const cFrost = bas.cFr + phn.cost; // Frost
export const cbite = bas.cbi + bas.cte; // bite
export const cFuzzy = bas.cFu + bas.czz + bas.cy; // Fuzzy
export const cWuzzy = bas.cW + bas.cuz + bas.czy; // Wuzzy
export const cGhost = bas.cGh + phn.cost; // Ghost
export const cGlossy = bas.cGl + phn.coss + bas.cy; // Glossy
export const cMetal = cMeta + bas.cl; // Metal
export const cMetallic = cMeta + phn.cllic; // Metallic
export const cFusion = bas.cFu + phn.csion; // Fusion
export const cPoppy = cPop + bas.cpy; // Poppy
export const cGranite = bas.cGr + bas.can + phn.cite; // Granite
export const cGranny = bas.cGr + bas.can + bas.cny; // Granny
export const cSmith = bas.cSm + phn.cith; // Smith
export const cLizard = bas.cLi + phn.czard; // Lizard
export const cGun = bas.cGu + bas.cn; // Gun
export const cHarvest = bas.cHa + bas.crv + phn.cest; // Harvest
export const cHeat = bas.cHe + bas.cat; // Heat
export const cWave = bas.cWa + bas.cve; // Wave
export const cHollywood = bas.cHo + bas.cll + bas.cyw + phn.cood; // Hollywood
export const cHoney = bas.cHo + bas.cne + bas.cy; // Honey
export const cdew = bas.cd + bas.cew; // dew
export const cHonolulu = bas.cHo + bas.cno + bas.clu + bas.clu; // Honolulu
export const cHookers = bas.cHo + phn.coker + bas.cs; // Hookers
export const cHot = bas.cHo + bas.ct; // Hot
export const cHunter = bas.cHu + bas.cnt + bas.cer; // Hunter
export const cIce = bas.cIc + bas.ce; // Ice
export const cIlluminating = bas.cIl + phn.clum + phn.cina + phn.ctin + bas.cg; // Illuminating
export const cImperial = bas.cIm + phn.cper + bas.cia + bas.cl; // Imperial
export const cworm = bas.cwo + bas.crm; // worm
export const cIndependence = bas.cIn + bas.cde + cpen + phn.cden + bas.cce; // Independence
export const cIndian = gen.cIndia + bas.cn; // Indian
export const cDye = bas.cDy + bas.ce; // Dye
export const cnational = cnation + bas.cal; // national
export const cNational = cNation + bas.cal; // National
export const cnationals = cnational + bas.cs; // nationals
export const cNationals = cNational + bas.cs; // Nationals
export const cInternational = phn.cInter + cnation + bas.cal; // International
export const cAerospace = bas.cAe + bas.cro + cspace; // Aerospace
export const cEngineering = bas.cEn + bas.cgi + bas.cne + bas.cer + phn.cing; // Engineering
export const cBridge = bas.cBr + bas.cid + bas.cge; // Bridge
export const cCarmine = bas.cCa + phn.crmine; // Carmine
export const cjazz = bas.cja + bas.czz; // jazz
export const cJazz = bas.cJa + bas.czz; // Jazz
export const cberry = phn.cber + bas.cry; // berry
export const cBerry = phn.cBer + bas.cry; // Berry
export const cjam = bas.cja + bas.cm; // jam
export const cJam = bas.cJa + bas.cm; // Jam
export const cKelly = bas.cKe + bas.cll + bas.cy; // Kelly
export const cKombu = bas.cKo + bas.cmb + bas.cu; // Kombu
export const cLanguid = bas.cLa + bas.cng + bas.cui + bas.cd; // Languid
export const cLapis = bas.cLa + bas.cpi + bas.cs; // Lapis
export const cLazuli = bas.cL + bas.caz + phn.culi; // Lazuli
export const cLaser = bas.cLa + bas.cse + bas.cr; // Laser
export const cLaurel = bas.cLa + phn.cure + bas.cl; // Laurel
export const cLawn = bas.cLa + bas.cwn; // Lawn
export const cCurry = phn.cCur + bas.cry; // Curry
export const cGlacier = bas.cGl + bas.cac + phn.cier; // Glacier
export const cMeringue = bas.cMe + phn.crin + bas.cgu + bas.ce; // Meringue
export const cLight = bas.cLi + phn.cght; // Light
export const cCoral = phn.cCor + bas.cal; // Coral
export const cSteel = bas.cSt + phn.ceel; // Steel
export const cLuster = bas.cLu + phn.cster; // Luster
export const cLincoln = phn.cLin + phn.ccol + bas.cn; // Lincoln
export const cLiseran = bas.cLi + bas.cse + phn.cran; // Liseran
export const cLittle = cLit + phn.ctle; // Little
export const cBoy = bas.cBo + bas.cy; // Boy
export const cDogs = bas.cDo + bas.cgs; // Dogs
export const cOrgan =  bas.cOr + phn.cgan; // Organ
export const cMacaroni = phn.cMac + phn.caro + bas.cni; // Macaroni
export const cCheese = bas.cCh + bas.cee + bas.cse; // Cheese
export const cMadder = bas.cMa + phn.cdder; // Madder
export const cHaze = bas.cHa + bas.cze; // Haze
export const cMagic = bas.cMa + bas.cgi + bas.cc; // Magic
export const cMajorelle = bas.cMa + bas.cjo + bas.cre + bas.cll + bas.ce; // Majorelle
export const cminimum = gen.cmin + phn.cimum; // minimum
export const cMinimum = gen.cMin + phn.cimum; // Minimum
export const cminimums = cminimum + bas.cs; // minimums
export const cMinimums = cMinimum + bas.cs; // Minimums
export const cmaximum = gen.cmax + phn.cimum; // maximum
export const cMaximum = gen.cMax + phn.cimum; // Maximum
export const cmaximums = cmaximum + bas.cs; // maximums
export const cMaximums = cMaximum + bas.cs; // Maximums
export const cMaya = gen.cMay + bas.ca; // Maya
export const cMedium = bas.cMe + phn.cdium; // Medium
export const cMellow = bas.cMe + phn.cllow; // Mellow
export const cweed = bas.cwe + bas.ced; // weed
export const cWeed = bas.cWe + bas.ced; // Weed
export const cweeds = cweed + bas.cs; // weeds
export const cWeeds = cWeed + bas.cs; // Weeds
export const cweeded = cweed + bas.ced; // weeded
export const cWeeded = cWeed + bas.ced; // Weeded
export const cSeaweed = cSea + cweed; // Seaweed
export const csun = bas.csu + bas.cn; // sun
export const cSun = bas.cSu + bas.cn; // Sun
export const csuns = csun + bas.cs; // suns
export const cSuns = cSun + bas.cs; // Suns
export const cSunburst = bas.cSu + bas.cnb + bas.cur + bas.cst; // Sunburst
export const cMexican = bas.cMe + bas.cxi + phn.ccan; // Mexican
export const cMiddle = bas.cMi + bas.cdd + bas.cle; // Middle
export const cMikado = bas.cMi + bas.cka + bas.cdo; // Mikado
export const cMimi = bas.cMi + bas.cm + bas.ci; // Mimi
export const cMinion = gen.cMin + phn.cion; // Minion
export const cMisty = phn.cMis + bas.cty; // Misty
export const cMorning = bas.cMo + bas.crn + phn.cing; // Morning
export const cMeadow = bas.cMe + phn.cadow; // Meadow
export const cMount = bas.cMo + phn.cunt; // Mount
export const cbatten = bas.cba + phn.ctten; // batten
export const cMulberry = bas.cMu + bas.clb + phn.cerry; // Mulberry
export const cMyrtle = bas.cMy + bas.crt + bas.cle; // Myrtle
export const cNadeshiko = bas.cNa + bas.cde + bas.csh + bas.cik + bas.co; // Nadeshiko
export const cNaples = bas.cNa + phn.cple + bas.cs; // Naples
export const cNavajo = bas.cNa + bas.cva + bas.cjo; // Navajo
export const cNavy = bas.cNa + bas.cvy; // Navy
export const cNeon = bas.cNe + bas.con; // Neon
export const cYork = bas.cYo + bas.crk; // York
export const cPhoto = bas.cPh + bas.cot + bas.co; // Photo
export const cOcean = bas.cOc + phn.cean; // Ocean
export const cLace = bas.cLa + bas.cce; // Lace
export const cOpera = bas.cOp + phn.cera; // Opera
export const cPeel = bas.cPe + bas.cel; // Peel
export const cSoda = bas.cSo + bas.cda; // Soda
export const cOuter = cOut + bas.cer; // Outer
export const cOutrageous = cOut + phn.crage + phn.cous; // Outrageous
export const cOxford = bas.cOx + cfor + bas.cd; // Oxford
export const cPacific = bas.cPa + bas.cci + phn.cfic; // Pacific
export const cPalatinate = cPal + phn.catin + phn.cate; // Palatinate
export const cPale = cPal + bas.ce; // Pale
export const cPansy = bas.cPa + bas.cns + bas.cy; // Pansy
export const cPaolo = bas.cPa + bas.col + bas.co; // Paolo
export const cVeronese = phn.cVer + num.cone + bas.cse; // Veronese
export const cPapaya = gen.cPapa + bas.cya; // Papaya
export const cWhip = bas.cWh + bas.cip; // Whip
export const cParadise = phn.cPara + bas.cdi + bas.cse; // Paradise
export const cParis = bas.cPa + phn.cris; // Paris
export const cPaynes = bas.cPa + bas.cyn + bas.ces; // Paynes
export const cPuff = bas.cPu + bas.cff; // Puff
export const cPearly = bas.cPe + bas.car + bas.cly; // Pearly
export const cPermanent = phn.cPer + cman + phn.cent; // Permanent
export const cGeranium = bas.cGe + phn.cran + phn.cium; // Geranium
export const cLake = bas.cLa + bas.cke; // Lake
export const cPersian = phn.cPer + phn.csia + bas.cn; // Persian
export const cPewter = bas.cPe + bas.cwt + bas.cer; // Pewter
export const cPhthalo = bas.cPh + bas.cth + bas.cal + bas.co; // Phthalo
export const cPicotee = unt.cPico + phn.ctee; // Picotee
export const cPictorial = bas.cPi + phn.cctor + bas.cia + bas.cl; // Pictorial
export const cPiggy = bas.cPi + bas.cgg + bas.cy; // Piggy
export const cPine = bas.cPi + bas.cne; // Pine
export const cTree = bas.cTr + bas.cee; // Tree
export const cFlamingo = bas.cFl + bas.cam + phn.cing + bas.co; // Flamingo
export const cSherbet = bas.cSh + bas.cer + cbet; // Sherbet
export const cPlump = bas.cPl + bas.cum + bas.cp; // Plump
export const cpolish = bas.cpo + phn.clish; // polish
export const cPolish = bas.cPo + phn.clish; // Polish
export const cpolished = cpolish + bas.ced; // polished
export const cPolished = cPolish + bas.ced; // Polished
export const cPomp = bas.cPo + bas.cmp; // Pomp
export const cPower = bas.cPo + phn.cwer; // Power
export const cPortland = cPort + bas.cla + bas.cnd; // Portland
export const cPrinceton = phn.cPri + phn.cnce + phn.cton; // Princeton
export const cPrussian = bas.cPr + bas.cus + phn.csia + bas.cn; // Prussian
export const cPsychedelic = bas.cPs + bas.cyc + bas.che + phn.cdel + bas.cic; // Psychedelic
export const cPullman = bas.cPu + bas.cll + cman; // Pullman
export const cMountain = bas.cMo + phn.cunt + phn.cain; // Mountain
export const cMajesty = bas.cMa + bas.cje + phn.csty; // Majesty
export const cPizzazz = bas.cPi + bas.czz + phn.cazz; // Pizzazz
export const cQueen = phn.cQue + bas.cen; // Queen
export const cQuick = bas.cQu + phn.cick; // Quick
export const cQuinacridone = bas.cQu + phn.cina + bas.ccr + bas.cid + num.cone; // Quinacridone
export const cRadical = bas.cRa + bas.cdi + phn.ccal; // Radical
export const cRaisin = bas.cRa + bas.cis + bas.cin; // Raisin
export const cGlace = bas.cGl + phn.cace; // Glace
export const cRazzle = bas.cRa + bas.czz + bas.cle; // Razzle
export const cDazzle = bas.cDa + bas.czz + bas.cle; // Dazzle
export const cRazzmic = bas.cRa + bas.czz + bas.camai + bas.cc; // Razzmic
export const cRebecca = bas.cRe + bas.cbe + bas.ccc + bas.ca; // Rebecca
export const cSalsa = bas.cSa + bas.cls + bas.ca; // Salsa
export const cResolution = phn.cRes + bas.col + bas.cut + phn.cion; // Resolution
export const cRich = bas.cRi + bas.cch; // Rich
export const cRifle = bas.cRi + bas.cfl + bas.ce; // Rifle
export const cRobin = bas.cRo + gen.cbin; // Robin
export const cEgg = bas.cEg + bas.cg; // Egg
export const cRocket = bas.cRo + bas.cck + bas.cet; // Rocket
export const cRoman = bas.cRo + cman; // Roman
export const cBonbon = bas.cBo + bas.cnb + bas.con; // Bonbon
export const cDust = bas.cDu + bas.cst; // Dust
export const cEbony = bas.cEb + phn.cony; // Ebony
export const cQuartz = cQuart + bas.cz; // Quartz
export const cVale = bas.cVa + bas.cle; // Vale
export const cwood = bas.cwo + bas.cod; // wood
export const cRosso = bas.cRo + bas.css + bas.co; // Rosso
export const cCorsa = bas.cC + bas.cor + bas.csa; // Corsa
export const cRosy = bas.cRo + bas.csy; // Rosy
export const cRoyal = bas.cRo + bas.cya + bas.cl; // Royal
export const crub = bas.cru + bas.cb; // rub
export const cRub = bas.cRu + bas.cb; // Rub
export const crubs = crub + bas.cs; // rubs
export const cRubs = cRub + bas.cs; // Rubs
export const crubbed = crub + cbed; // rubbed
export const cRubbed = cRub + cbed; // Rubbed
export const crubbing = crub + phn.cbing; // rubbing
export const cRubbing = cRub + phn.cbing; // Rubbing
export const cRubine = cRub + phn.cine; // Rubine
export const cSacramento = bas.cSa + bas.ccr + phn.camen + bas.cto; // Sacramento
export const cState = bas.cSt + phn.cate; // State
export const cSaddle = bas.cSa + bas.cdd + bas.cle; // Saddle
export const cSafety = cSafe + bas.cty; // Safety
export const cBlaze = bas.cBl + phn.caze; // Blaze
export const cPatricks = cPat + phn.crick + bas.cs; // Patricks
export const cSandy = gen.cSan + bas.cdy; // Sandy
export const csap = bas.csa + bas.cp; // sap
export const cSap = bas.cSa + bas.cp; // Sap
export const cSatin = bas.cSa + phn.ctin; // Satin
export const cSheen = bas.cSh + phn.ceen; // Sheen
export const cSchauss = bas.cSc + bas.cha + bas.cus + bas.cs; // Schauss
export const cSchool = bas.cSc + bas.cho + bas.col; // School
export const cBus = bas.cBu + bas.cs; // Bus
export const cScreamin = bas.cSc + phn.cream + bas.cin; // Screamin
export const cSeal = cSea + bas.cl; // Seal
export const cshell = bas.csh + phn.cell; // shell
export const cSelective = cSelect + phn.cive; // Selective
export const cShamrock = phn.cSha + bas.cmr + phn.cock; // Shamrock
export const cShimmering = cShimmer + phn.cing; // Shimmering
export const cBlush = bas.cBl + phn.cush; // Blush
export const cShiny = bas.cSh + bas.cin + bas.cy; // Shiny
export const cShocking = bas.cSh + phn.cock + phn.cing; // Shocking
export const cChalice = bas.cCh + phn.cali + bas.cce; // Chalice
export const cSizzling = bas.cSi + bas.czz + phn.clin + bas.cg; // Sizzling
export const cSunrise = bas.cS + bas.cun + phn.crise; // Sunrise
export const cSlimy = bas.cSl + bas.cim + bas.cy; // Slimy
export const cSmoky = bas.cSm + bas.cok + bas.cy; // Smoky
export const cSonic = bas.cSo + phn.cnic; // Sonic
export const cBistre = bas.cBi + phn.cstre; // Bistre
export const cStar = bas.cSt + bas.car; // Star
export const cStil = bas.cSt + bas.cil; // Stil
export const cGrain = bas.cGr + phn.cain; // Grain
export const cglow = bas.cg + clow; // glow
export const cSuper = phn.cSup + bas.cer; // Super
export const cTango = gen.cTango; // Tango
export const cTart = phn.cTart; // Tart
export const cTea = bas.cTe + bas.ca; // Tea
export const cTerra = bas.cTe + phn.crra; // Terra
export const cCotta = bas.cCo + bas.ctt + bas.ca; // Cotta
export const cThulian = bas.cTh + phn.culi + bas.can; // Thulian
export const cTickle = cTick + bas.cle; // Tickle
export const cTiffany = bas.cTi + bas.cff + phn.cany; // Tiffany
export const cTimber = bas.cTi + phn.cmber; // Timber
export const cwolf = bas.cwo + bas.clf; // wolf
export const cTropical = bas.cTr + bas.cop + phn.cical; // Tropical
export const cRain = bas.cR + phn.cain; // Rain
export const cTrypan = cTry + bas.cpa + bas.cn; // Trypan
export const cTufts = bas.cTu + bas.cft + bas.cs; // Tufts
export const cTumble = bas.cTu + bas.cmb + bas.cle; // Tumble
export const cTwilight = bas.cTw + phn.cili + phn.cght; // Twilight
export const cTyrian = bas.cTy + phn.cria + bas.cn; // Tyrian
export const cUltra = bas.cUl + phn.ctra; // Ultra
export const cUnbleached = bas.cUn + phn.cble + phn.cach + bas.ced; // Unbleached
export const cNations = cNation + bas.cs; // Nations
export const cUpsdell = bas.cUp + bas.csd + phn.cell; // Upsdell
export const cUranian = bas.cUr + phn.cania + bas.cn; // Uranian
export const cvan = bas.cva + bas.cn; // van
export const cVan = bas.cVa + bas.cn; // Van
export const cDyke = bas.cDy + bas.cke; // Dyke
export const cVegas = bas.cVe + bas.cga + bas.cs; // Vegas
export const cVenetian = bas.cVe + bas.cne + bas.cti + bas.can; // Venetian
export const cVivid = bas.cVi + phn.cvid; // Vivid
export const cWarm = bas.cWa + bas.crm; // Warm
export const cWild = bas.cWi + bas.cld; // Wild
export const cWindsor = cWind + bas.cso + bas.cr; // Windsor
export const cDregs = bas.cDr + bas.ceg + bas.cs; // Dregs
export const cWinter = bas.cWi + bas.cnt + bas.cer; // Winter
export const cDream = bas.cDr + phn.ceam; // Dream
export const cYale = bas.cYa + bas.cle; // Yale

// export default {
//   // Miscelaneious Words
//   [bas.cc + num.c1 + bas.ca + num.c1 + bas.cd]: c1a1d, // ad // 'ca' & 'cd' is some how a reserved word.
//   [bas.cc + c3d]: c3d, // 3d
//   [bas.cc + c3D]: c3D, // 3D
//   [bas.cc + cout]: cout, // out
//   [bas.cc + cOut]: cOut, // Out
//   [bas.cc + cLog]: cLog, // Log
//   [bas.cc + clog]: clog, // log
//   [bas.cc + cLogs]: cLogs, // Logs
//   [bas.cc + clogs]: clogs, // logs
//   [bas.cc + ckey]: ckey, // key
//   [bas.cc + cKey]: cKey, // Key
//   [bas.cc + ckeys]: ckeys, // keys
//   [bas.cc + cKeys]: cKeys, // Keys
//   [bas.cc + ckeyed]: ckeyed, // keyed
//   [bas.cc + cKeyed]: cKeyed, // Keyed
//   [bas.cc + ckeying]: ckeying, // keying
//   [bas.cc + cKeying]: cKeying, // Keying
//   [bas.cc + cnode]: cnode, // node
//   [bas.cc + cNode]: cNode, // Node
//   [bas.cc + curl]: curl, // url
//   [bas.cc + cURL]: cURL, // URL
//   [bas.cc + cnth]: cnth, // nth
//   [bas.cc + cNth]: cNth, // Nth
//   [bas.cc + cregEx]: cregEx, // regEx
//   [bas.cc + cRegEx]: cRegEx, // RegEx
//   [bas.cc + cflag]: cflag, // flag
//   [bas.cc + cFlag]: cFlag, // Flag
//   [bas.cc + cflags]: cflags, // flags
//   [bas.cc + cFlags]: cFlags, // Flags
//
//   // Data Types
//   [bas.cc + cstring]: cstring, // string
//   [bas.cc + cString]: cString, // String
//   [bas.cc + cstrings]: cstrings, // strings
//   [bas.cc + cStrings]: cStrings, // Strings
//   [bas.cc + cinteger]: cinteger, // integer
//   [bas.cc + cInteger]: cInteger, // Integer
//   [bas.cc + cintegers]: cintegers, // integers
//   [bas.cc + cIntegers]: cIntegers, // Integers
//   [bas.cc + cfloat]: cfloat, // float
//   [bas.cc + cFloat]: cFloat, // Float
//   [bas.cc + cfloats]: cfloats, // floats
//   [bas.cc + cFloats]: cFloats, // Floats
//   [bas.cc + clong]: clong, // long
//   [bas.cc + cLong]: cLong, // Long
//   [bas.cc + clongs]: clongs, // longs
//   [bas.cc + cLongs]: cLongs, // Longs
//   [bas.cc + clonger]: clonger, // longer
//   [bas.cc + cLonger]: cLonger, // Longer
//   [bas.cc + clongest]: clongest, // longest
//   [bas.cc + cLongest]: cLongest, // Longest
//   [bas.cc + cshort]: cshort, // short
//   [bas.cc + cShort]: cShort, // Short
//   [bas.cc + cshorts]: cshorts, // shorts
//   [bas.cc + cShorts]: cShorts, // Shorts
//   [bas.cc + cshorter]: cshorter, // shorter
//   [bas.cc + cShorter]: cShorter, // Shorter
//   [bas.cc + cshortest]: cshortest, // shortest
//   [bas.cc + cShortest]: cShortest, // Shortest
//   [bas.cc + cdouble]: cdouble, // double
//   [bas.cc + cDouble]: cDouble, // Double
//   [bas.cc + cdoubles]: cdoubles, // doubles
//   [bas.cc + cDoubles]: cDoubles, // Doubles
//   [bas.cc + cchar]: cchar, // char
//   [bas.cc + cChar]: cChar, // Char
//   [bas.cc + cchars]: cchars, // chars
//   [bas.cc + cChars]: cChars, // Chars
//   [bas.cc + cboolean]: cboolean, // boolean
//   [bas.cc + cBoolean]: cBoolean, // Boolean
//   [bas.cc + cbooleans]: cbooleans, // booleans
//   [bas.cc + cBooleans]: cBooleans, // Booleans
//   [bas.cc + cobject]: cobject, // object
//   [bas.cc + cObject]: cObject, // Object
//   [bas.cc + cobjects]: cobjects, // objects
//   [bas.cc + cObjects]: cObjects, // Objects
//
//   // General Use Words
//   [bas.cc + csubstring]: csubstring, // substring
//   [bas.cc + csubString]: csubString, // subString
//   [bas.cc + cSubString]: cSubString, // SubString
//   [bas.cc + cwind]: cwind, // wind
//   [bas.cc + cWind]: cWind, // Wind
//   [bas.cc + cwindow]: cwindow, // window
//   [bas.cc + cWindow]: cWindow, // Window
//   [bas.cc + cwindows]: cwindows, // windows
//   [bas.cc + cWindows]: cWindows, // Windows
//   [bas.cc + clinux]: clinux, // linux
//   [bas.cc + cLinux]: cLinux, // Linux
//   [bas.cc + cword]: cword, // word
//   [bas.cc + cWord]: cWord, // Word
//   [bas.cc + cwords]: cwords, // words
//   [bas.cc + cWords]: cWords, // Words
//   [bas.cc + coops]: coops, // oops
//   [bas.cc + cOops]: cOops, // Oops
//   [bas.cc + cOOPS]: cOOPS, // OOPS
//   [bas.cc + clet]: clet, // let
//   [bas.cc + cLet]: cLet, // Let
//   [bas.cc + clets]: clets, // lets
//   [bas.cc + cLets]: cLets, // Lets
//   [bas.cc + cfig]: cfig, // fig
//   [bas.cc + cFig]: cFig, // Fig
//   [bas.cc + cfiglet]: cfiglet,
//   [bas.cc + cFiglet]: cFiglet,
//   [bas.cc + cconfig]: cconfig, // config
//   [bas.cc + cConfig]: cConfig, // Config
//   [bas.cc + cconfiguration]: cconfiguration, // configuration
//   [bas.cc + cConfiguration]: cConfiguration, // Configuration
//   [bas.cc + cconfigurations]: cconfigurations, // configurations
//   [bas.cc + cConfigurations]: cConfigurations, // Configurations
//   [bas.cc + cconfigured]: cconfigured, // configured
//   [bas.cc + cConfigured]: cConfigured, // Configured
//   [bas.cc + cconfiguring]: cconfiguring, // configuring
//   [bas.cc + cConfiguring]: cConfiguring, // Configuring
//   [bas.cc + cempty]: cempty, // empty
//   [bas.cc + cEmpty]: cEmpty, // Empty
//   [bas.cc + cfull]: cfull, // full
//   [bas.cc + cFull]: cFull, // Full
//   [bas.cc + cfully]: cfully, // fully
//   [bas.cc + cFully]: cFully, // Fully
//   [bas.cc + ccreate]: ccreate, // create
//   [bas.cc + cCreate]: cCreate, // Create
//   [bas.cc + cSubmit]: cSubmit, // Submit
//   [bas.cc + c_add]: c_add, // add
//   [bas.cc + cAdd]: cAdd, // Add
//   [bas.cc + cADD]: cADD, // ADD
//   [bas.cc + cadded]: cadded, // added
//   [bas.cc + cAdded]: cAdded, // Added
//   [bas.cc + cadding]: cadding, // adding
//   [bas.cc + cAdding]: cAdding, // Adding
//   [bas.cc + cadditional]: cadditional, // additional
//   [bas.cc + cAdditional]: cAdditional, // Additional
//   [bas.cc + cADDITIONAL]: cADDITIONAL, // ADDITIONAL
//   [bas.cc + cadditionals]: cadditionals, // additionals
//   [bas.cc + cAdditionals]: cAdditionals, // Additionals
//   [bas.cc + cpen]: cpen, // pen
//   [bas.cc + cPen]: cPen, // Pen
//   [bas.cc + cpens]: cpens, // pens
//   [bas.cc + cPens]: cPens, // Pens
//   [bas.cc + cclose]: cclose, // close
//   [bas.cc + cClose]: cClose, // Close
//   [bas.cc + cclosed]: cclosed, // closed
//   [bas.cc + cClosed]: cClosed, // Closed
//   [bas.cc + cclosing]: cclosing, // closing
//   [bas.cc + cClosing]: cClosing, // Closing
//   [bas.cc + copen]: copen, // open
//   [bas.cc + cOpen]: cOpen, // Open
//   [bas.cc + copens]: copens, // opens
//   [bas.cc + cOpens]: cOpens, // Opens
//   [bas.cc + copened]: copened, // opened
//   [bas.cc + cOpened]: cOpened, // Opened
//   [bas.cc + copening]: copening, // opening
//   [bas.cc + cOpening]: cOpening, // Opening
//   [bas.cc + cUpdate]: cUpdate, // Update
//   [bas.cc + cEdit]: cEdit, // Edit
//   [bas.cc + cdelete]: cdelete, // delete
//   [bas.cc + cDelete]: cDelete, // Delete
//   [bas.cc + cdeletion]: cdeletion, // deletion
//   [bas.cc + cDeletion]: cDeletion, // Deletion
//   [bas.cc + cinsert]: cinsert, // insert
//   [bas.cc + cInsert]: cInsert, // Insert
//   [bas.cc + cinsertion]: cinsertion, // insertion
//   [bas.cc + cInsertion]: cInsertion, // Insertion
//   [bas.cc + csubstitute]: csubstitute, // substitute
//   [bas.cc + cSubstitute]: cSubstitute, // Substitute
//   [bas.cc + csubstitution]: csubstitution, // substitution
//   [bas.cc + cSubstitution]: cSubstitution, // Substitution
//   [bas.cc + call]: call, // all
//   [bas.cc + cAll]: cAll, // All
//   [bas.cc + cALL]: cALL, // ALL
//   [bas.cc + cat]: cat, // at
//   [bas.cc + cAt]: cAt, // At // Not to be confused with the bas.cAt = '@'!!!
//   [bas.cc + cselect]: cselect, // select
//   [bas.cc + cSelect]: cSelect, // Select
//   [bas.cc + ccan]: ccan, // can
//   [bas.cc + cCan]: cCan, // Can
//   [bas.cc + ccancel]: ccancel, // cancel
//   [bas.cc + cCancel]: cCancel, // Cancel
//   [bas.cc + cconfirm]: cconfirm, // confirm
//   [bas.cc + cConfirm]: cConfirm, // Confirm
//   [bas.cc + ccount]: ccount, // count
//   [bas.cc + cCount]: cCount, // Count
//   [bas.cc + ccounter]: ccounter, // counter
//   [bas.cc + cCounter]: cCounter, // Counter
//   [bas.cc + cAccount]: cAccount, // Account
//   [bas.cc + cHamburger]: cHamburger, // Hamburger
//   [bas.cc + cMe]: cMe, // Me
//   [bas.cc + cMenu]: cMenu, // Menu
//   [bas.cc + cwith]: cwith, // with
//   [bas.cc + cWith]: cWith, // With
//   [bas.cc + cwithout]: cwithout, // without
//   [bas.cc + cWithout]: cWithout, // Without
//   [bas.cc + cdetail]: cdetail, // detail
//   [bas.cc + cDetail]: cDetail, // Detail
//   [bas.cc + cdetails]: cdetails, // details
//   [bas.cc + cDetails]: cDetails, // Details
//   [bas.cc + cfront]: cfront, // front
//   [bas.cc + cFront]: cFront, // Front
//   [bas.cc + cback]: cback, // back
//   [bas.cc + cBack]: cBack, // Back
//   [bas.cc + cleft]: cleft, // left
//   [bas.cc + cLeft]: cLeft, // Left
//   [bas.cc + cright]: cright, // right
//   [bas.cc + cRight]: cRight, // Right
//   [bas.cc + cTo]: cTo, // To
//   [bas.cc + ctop]: ctop, // top
//   [bas.cc + cTop]: cTop, // Top
//   [bas.cc + cbottom]: cbottom, // bottom
//   [bas.cc + cBottom]: cBottom, // Bottom
//   [bas.cc + cbegin]: cbegin, // begin
//   [bas.cc + cBegin]: cBegin, // Begin
//   [bas.cc + cBEGIN]: cBEGIN, // BEGIN
//   [bas.cc + cbeginning]: cbeginning, // beginning
//   [bas.cc + cBeginning]: cBeginning, // Beginning
//   [bas.cc + cend]: cend, // end
//   [bas.cc + cEnd]: cEnd, // End
//   [bas.cc + cEND]: cEND, // END
//   [bas.cc + cending]: cending, // ending
//   [bas.cc + cEnding]: cEnding, // Ending
//   [bas.cc + cthe]: cthe, // the
//   [bas.cc + cThe]: cThe, // The
//   [bas.cc + citem]: citem, // item
//   [bas.cc + cItem]: cItem, // Item
//   [bas.cc + citems]: citems, // items
//   [bas.cc + cItems]: cItems, // Items
//   [bas.cc + clist]: clist, // list
//   [bas.cc + cList]: cList, // List
//   [bas.cc + clists]: clists, // lists
//   [bas.cc + cLists]: cLists, // Lists
//   [bas.cc + clisted]: clisted, // listed
//   [bas.cc + cListed]: cListed, // Listed
//   [bas.cc + cshare]: cshare, // share
//   [bas.cc + cShare]: cShare, // Share
//   [bas.cc + cShares]: cShares, // Shares
//   [bas.cc + cshares]: cshares, // shares
//   [bas.cc + cshared]: cshared, // shared
//   [bas.cc + cShared]: cShared, // Shared
//   [bas.cc + cUnShared]: cUnShared, // UnShared
//   [bas.cc + cUnshared]: cUnshared, // Unshared
//   [bas.cc + cUnshare]: cUnshare, // Unshare
//   [bas.cc + cUnShare]: cUnShare, // UnShare
//   [bas.cc + cview]: cview, // view
//   [bas.cc + cView]: cView, // View
//   [bas.cc + cnew]: cnew, // new
//   [bas.cc + cNew]: cNew, // New
//   [bas.cc + cload]: cload, // bas.cad; // load // NOTE: Apparently 'cad' is also a reserved word.
//   [bas.cc + cLoad]: cLoad, // bas.cad; // Load // NOTE: Apparently 'cad' is also a reserved word.
//   [bas.cc + cloads]: cloads, // loads
//   [bas.cc + cLoads]: cLoads, // Loads
//   [bas.cc + cloaded]: cloaded, // loaded
//   [bas.cc + cLoaded]: cLoaded, // Loaded
//   [bas.cc + cloading]: cloading, // loading
//   [bas.cc + cLoading]: cLoading, // Loading
//   [bas.cc + cclick]: cclick, // click
//   [bas.cc + cClick]: cClick, // Click
//   [bas.cc + cpress]: cpress, // press
//   [bas.cc + cPress]: cPress, // Press
//   [bas.cc + cpresses]: cpresses, // presses
//   [bas.cc + cPresses]: cPresses, // Presses
//   [bas.cc + cpressed]: cpressed, // pressed
//   [bas.cc + cPressed]: cPressed, // Pressed
//   [bas.cc + cpressing]: cpressing, // pressing
//   [bas.cc + cPressing]: cPressing, // Pressing
//   [bas.cc + cpressKey]: cpressKey, // pressKey
//   [bas.cc + cPressKey]: cPressKey, // PressKey
//   [bas.cc + cexpect]: cexpect, // expect
//   [bas.cc + cExpect]: cExpect, // Expect
//   [bas.cc + cexpects]: cexpects, // expects
//   [bas.cc + cExpects]: cExpects, // Expects
//   [bas.cc + cexpected]: cexpected, // expected
//   [bas.cc + cExpected]: cExpected, // Expected
//   [bas.cc + cexpecting]: cexpecting, // expecting
//   [bas.cc + cExpecting]: cExpecting, // Expecting
//   [bas.cc + cnavigate]: cnavigate, // navigate
//   [bas.cc + cNavigate]: cNavigate, // Navigate
//   [bas.cc + csave]: csave, // Save
//   [bas.cc + cSave]: cSave, // Save
//   [bas.cc + cDownload]: cDownload, // Download
//   [bas.cc + cNegative]: cNegative, // Negative
//   [bas.cc + cPositive]: cPositive, // Positive
//   [bas.cc + cEntire]: cEntire, // Entire
//   [bas.cc + cinfo]: cinfo, // info
//   [bas.cc + cInfo]: cInfo, // Info
//   [bas.cc + cLink]: cLink, // Link
//   [bas.cc + cLabel]: cLabel, // Label
//   [bas.cc + cField]: cField, // Field
//   [bas.cc + ctype]: ctype, // type
//   [bas.cc + cType]: cType, // Type
//   [bas.cc + cTypes]: cTypes, // Types
//   [bas.cc + cvalid]: cvalid, // valid
//   [bas.cc + cValid]: cValid, // Valid
//   [bas.cc + cVALID]: cVALID, // VALID
//   [bas.cc + cvalidation]: cvalidation, // validation
//   [bas.cc + cValidation]: cValidation, // Validation
//   [bas.cc + cvalidations]: cvalidations, // validations
//   [bas.cc + cValidations]: cValidations, // Validations
//   [bas.cc + cvalidate]: cvalidate, // validate
//   [bas.cc + cValidate]: cValidate, // Validate
//   [bas.cc + cinvalid]: cinvalid, // invalid
//   [bas.cc + cInvalid]: cInvalid, // Invalid
//   [bas.cc + cINVALID]: cINVALID, // INVALID
//   [bas.cc + cbug]: cbug, // bug
//   [bas.cc + cdebug]: cdebug, // debug
//   [bas.cc + cDebug]: cDebug, // Debug
//   [bas.cc + cpage]: cpage, // page
//   [bas.cc + cPage]: cPage, // Page
//   [bas.cc + cpages]: cpages, // pages
//   [bas.cc + cPages]: cPages, // Pages
//   [bas.cc + cmessage]: cmessage, // message
//   [bas.cc + cMessage]: cMessage, // Message
//   [bas.cc + cmessages]: cmessages, // messages
//   [bas.cc + cMessages]: cMessages, // Messages
//   [bas.cc + cScript]: cScript, // Script
//   [bas.cc + cScripts]: cScripts, // Scripts
//   [bas.cc + ckeyword]: ckeyword, // keyword
//   [bas.cc + cKeyword]: cKeyword, // Keyword
//   [bas.cc + ckeywords]: ckeywords, // keywords
//   [bas.cc + cKeywords]: cKeywords, // Keywords
//   [bas.cc + cdata]: cdata, // data
//   [bas.cc + cData]: cData, // Data
//   [bas.cc + cDATA]: cDATA, // DATA
//   [bas.cc + cresult]: cresult, // result
//   [bas.cc + cResult]: cResult, // Result
//   [bas.cc + cresults]: cresults, // results
//   [bas.cc + cResults]: cResults, // Results
//   [bas.cc + cresulted]: cresulted, // resulted
//   [bas.cc + cResulted]: cResulted, // Resulted
//   [bas.cc + cresulting]: cresulting, // resulting
//   [bas.cc + cResulting]: cResulting, // Resulting
//   [bas.cc + cwork]: cwork, // work
//   [bas.cc + cWork]: cWork, // Work
//   [bas.cc + cflow]: cflow, // flow
//   [bas.cc + cFlow]: cFlow, // Flow
//   [bas.cc + cworkflow]: cworkflow, // workflow
//   [bas.cc + cWorkflow]: cWorkflow, // Workflow
//   [bas.cc + cworkflows]: cworkflows, // workflows
//   [bas.cc + cWorkflows]: cWorkflows, // Workflows
//   [bas.cc + ctest]: ctest, // test
//   [bas.cc + cTest]: cTest, // Test
//   [bas.cc + cTEST]: cTEST, // TEST
//   [bas.cc + ctests]: ctests, // tests
//   [bas.cc + cTests]: cTests, // Tests
//   [bas.cc + cTESTS]: cTESTS, // TESTS
//   [bas.cc + cStatus]: cStatus, // Status
//   [bas.cc + cTestStatus]: cTestStatus, // TestStatus
//   [bas.cc + cTestStatusMessage]: cTestStatusMessage, // TestStatusMessage
//   [bas.cc + cTestWorkflow]: cTestWorkflow, // TestWorkflow
//   [bas.cc + cBureau]: cBureau, // Bureau
//   [bas.cc + cExhaustive]: cExhaustive, // Exhaustive
//   [bas.cc + cBrowser]: cBrowser, // Browser
//   [bas.cc + cact]: cact, // act
//   [bas.cc + cAct]: cAct, // Act
//   [bas.cc + caction]: caction, // action
//   [bas.cc + cAction]: cAction, // Action
//   [bas.cc + cactions]: cactions, // actions
//   [bas.cc + cActions]: cActions, // Actions
//   [bas.cc + cactual]: cactual, // actual
//   [bas.cc + cActual]: cActual, // Actual
//   [bas.cc + cauto]: cauto, // auto
//   [bas.cc + cAuto]: cAuto, // Auto
//   [bas.cc + cautomation]: cautomation, // automation
//   [bas.cc + cAutomation]: cAutomation, // Automation
//   [bas.cc + cnumber]: cnumber, // number
//   [bas.cc + cNumber]: cNumber, // Number
//   [bas.cc + cnumbers]: cnumbers, // numbers
//   [bas.cc + cNumbers]: cNumbers, // Numbers
//   [bas.cc + cnumbered]: cnumbered, // numbered
//   [bas.cc + cNumbered]: cNumbered, // Numbered
//   [bas.cc + cnumbering]: cnumbering, // numbering
//   [bas.cc + cNumbering]: cNumbering, // Numbering
//   [bas.cc + cHost]: cHost, // Host
//   [bas.cc + cOf]: cOf, // Of
//   [bas.cc + crow]: crow, // row
//   [bas.cc + cRow]: cRow, // Row
//   [bas.cc + crows]: crows, // rows
//   [bas.cc + cRows]: cRows, // Rows
//   [bas.cc + crowed]: crowed, // rowed
//   [bas.cc + cRowed]: cRowed, // Rowed
//   [bas.cc + crowing]: crowing, // rowing
//   [bas.cc + cRowing]: cRowing, // Rowing
//   [bas.cc + crun]: crun, // run
//   [bas.cc + cRun]: cRun, // Run
//   [bas.cc + cruns]: cruns, // runs
//   [bas.cc + cRuns]: cRuns, // Runs
//   [bas.cc + crunning]: crunning, // running
//   [bas.cc + cRunning]: cRunning, // Running
//   [bas.cc + cmaster]: cmaster, // master
//   [bas.cc + cMaster]: cMaster, // Master
//   [bas.cc + cEnvironment]: cEnvironment, // Environment
//   [bas.cc + cname]: cname, // name
//   [bas.cc + cName]: cName, // Name
//   [bas.cc + cnames]: cnames, // names
//   [bas.cc + cNames]: cNames, // Names
//   [bas.cc + cnamed]: cnamed, // named
//   [bas.cc + cNamed]: cNamed, // Named
//   [bas.cc + ckeywordName]: ckeywordName, // keywordName
//   [bas.cc + cKeywordName]: cKeywordName, // KeywordName
//   [bas.cc + cPageScriptName]: cPageScriptName, // PageScriptName
//   [bas.cc + cid]: cid, // id
//   [bas.cc + cId]: cId, // Id
//   [bas.cc + cID]: cID, // ID
//   [bas.cc + cmail]: cmail, // mail
//   [bas.cc + cEmail]: cEmail, // Email
//   [bas.cc + cEmails]: cEmails, // Emails
//   [bas.cc + cReceive]: cReceive, // Receive
//   [bas.cc + cReceived]: cReceived, // Received
//   [bas.cc + cdate]: cdate, // date
//   [bas.cc + cDate]: cDate, // Date
//   [bas.cc + ctime]: ctime, // time
//   [bas.cc + cTime]: cTime, // Time
//   [bas.cc + cruntime]: cruntime, // runtime
//   [bas.cc + cRuntime]: cRuntime, // Runtime
//   [bas.cc + cRunTime]: cRunTime, // RunTime
//   [bas.cc + cstamp]: cstamp, // stamp
//   [bas.cc + cStamp]: cStamp, // Stamp
//   [bas.cc + cstamps]: cstamps, // stamps
//   [bas.cc + cStamps]: cStamps, // Stamps
//   [bas.cc + cstamped]: cstamped, // stamped
//   [bas.cc + cStamped]: cStamped, // Stamped
//   [bas.cc + cstamping]: cstamping, // stamping
//   [bas.cc + cStamping]: cStamping, // Stamping
//   [bas.cc + cmediate]: cmediate, // mediate
//   [bas.cc + cintermediate]: cintermediate, // intermediate
//   [bas.cc + cIntermediate]: cIntermediate, // Intermediate
//   [bas.cc + cpath]: cpath, // path
//   [bas.cc + cPath]: cPath, // Path
//   [bas.cc + cpaths]: cpaths, // paths
//   [bas.cc + cPaths]: cPaths, // Paths
//   [bas.cc + cexit]: cexit, // exit
//   [bas.cc + cExit]: cExit, // Exit
//   [bas.cc + cEXIT]: cEXIT, // EXIT
//   [bas.cc + cexiting]: cexiting, // exiting
//   [bas.cc + cExiting]: cExiting, // Exiting
//   [bas.cc + cViewer]: cViewer, // Viewer
//   [bas.cc + cPermission]: cPermission, // Permission
//   [bas.cc + cBug]: cBug, // Bug
//   [bas.cc + cset]: cset, // set
//   [bas.cc + cSet]: cSet, // Set
//   [bas.cc + csetting]: csetting, // setting
//   [bas.cc + cSetting]: cSetting, // Setting
//   [bas.cc + csettings]: csettings, // settings
//   [bas.cc + cSettings]: cSettings, // Settings
//   [bas.cc + cPreview]: cPreview, // Preview
//   [bas.cc + climit]: climit, // limit // NOTE: bas.cmi resolves as "s"
//   [bas.cc + cLimit]: cLimit, // Limit // NOTE: bas.cmi resolves as "s"
//   [bas.cc + cGate]: cGate, // Gate
//   [bas.cc + cway]: cway, // way
//   [bas.cc + cWay]: cWay, // Way
//   [bas.cc + cGateway]: cGateway, // Gateway
//   [bas.cc + cprocess]: cprocess, // process
//   [bas.cc + cProcess]: cProcess, // Process
//   [bas.cc + cPROCESS]: cPROCESS, // PROCESS
//   [bas.cc + cprocessed]: cprocessed, // processed
//   [bas.cc + cProcessed]: cProcessed, // Processed
//   [bas.cc + cprocesses]: cprocesses, // processes
//   [bas.cc + cProcesses]: cProcesses, // Processes
//   [bas.cc + cprocessing]: cprocessing, // processing
//   [bas.cc + cProcessing]: cProcessing, // Processing
//   [bas.cc + cPROCESSING]: cPROCESSING, // PROCESSING
//   [bas.cc + ccomplete]: ccomplete, // complete
//   [bas.cc + cComplete]: cComplete, // Complete
//   [bas.cc + ccompleted]: ccompleted, // completed
//   [bas.cc + cCompleted]: cCompleted, // Completed
//   [bas.cc + cand]: cand, // and
//   [bas.cc + cAnd]: cAnd, // And
//   [bas.cc + cuse]: cuse, // use
//   [bas.cc + cUse]: cUse, // Use
//   [bas.cc + cuser]: cuser, // user
//   [bas.cc + cUser]: cUser, // User
//   [bas.cc + cAccess]: cAccess, // Access
//   [bas.cc + clevel]: clevel, // level
//   [bas.cc + cLevel]: cLevel, // Level
//   [bas.cc + cget]: cget, // get
//   [bas.cc + cGet]: cGet, // Get
//   [bas.cc + cput]: cput, // put
//   [bas.cc + cPut]: cPut, // Put
//   [bas.cc + cPUT]: cPUT, // PUT
//   [bas.cc + cfrom]: cfrom, // from
//   [bas.cc + cFrom]: cFrom, // From
//   [bas.cc + cplace]: cplace, // place
//   [bas.cc + cPlace]: cPlace, // Place
//   [bas.cc + cplaces]: cplaces, // places
//   [bas.cc + cPlaces]: cPlaces, // Places
//   [bas.cc + cplaced]: cplaced, // placed
//   [bas.cc + cPlaced]: cPlaced, // Placed
//   [bas.cc + cplacing]: cplacing, // placing
//   [bas.cc + cPlacing]: cPlacing, // Placing
//   [bas.cc + cplacement]: cplacement, // placement
//   [bas.cc + cPlacement]: cPlacement, // Placement
//   [bas.cc + creplace]: creplace, // replace
//   [bas.cc + cReplace]: cReplace, // Replace
//   [bas.cc + creplaces]: creplaces, // replaces
//   [bas.cc + cReplaces]: cReplaces, // Replaces
//   [bas.cc + creplaced]: creplaced, // replaced
//   [bas.cc + cReplaced]: cReplaced, // Replaced
//   [bas.cc + creplacing]: creplacing, // replacing
//   [bas.cc + cReplacing]: cReplacing, // Replacing
//   [bas.cc + creplacement]: creplacement, // replacement
//   [bas.cc + cReplacement]: cReplacement, // Replacement
//   [bas.cc + cspace]: cspace, // space
//   [bas.cc + cSpace]: cSpace, // Space
//   [bas.cc + cspaces]: cspaces, // spaces
//   [bas.cc + cSpaces]: cSpaces, // Spaces
//   [bas.cc + cspaced]: cspaced, // spaced
//   [bas.cc + cSpaced]: cSpaced, // Spaced
//   [bas.cc + cplus]: cplus, // plus
//   [bas.cc + cPlus]: cPlus, // Plus
//   [bas.cc + ccolon]: ccolon, // colon
//   [bas.cc + cColon]: cColon, // Colon
//   [bas.cc + cunder]: cunder, // under
//   [bas.cc + cUnder]: cUnder, // Under
//   [bas.cc + cscore]: cscore, // score
//   [bas.cc + cScore]: cScore, // Score
//   [bas.cc + cunderscore]: cunderscore, // underscore
//   [bas.cc + cUnderscore]: cUnderscore, // Underscore
//   [bas.cc + cCatagory]: cCatagory, // Catagory
//   [bas.cc + cclean]: cclean, // clean
//   [bas.cc + cClean]: cClean, // Clean
//   [bas.cc + ccleaned]: ccleaned, // cleaned
//   [bas.cc + cCleaned]: cCleaned, // Cleaned
//   [bas.cc + cCarriage]: cCarriage, // Carriage
//   [bas.cc + cturn]: cturn, // turn
//   [bas.cc + creturn]: creturn, // return
//   [bas.cc + cReturn]: cReturn, // Return
//   [bas.cc + cconvert]: cconvert, // convert
//   [bas.cc + cConvert]: cConvert, // Convert
//   [bas.cc + clow]: clow, // low
//   [bas.cc + cLow]: cLow, // Low
//   [bas.cc + clower]: clower, // lower
//   [bas.cc + cLower]: cLower, // Lower
//   [bas.cc + ccase]: ccase, // case
//   [bas.cc + cCase]: cCase, // Case
//   [bas.cc + cmove]: cmove, // move
//   [bas.cc + cremove]: cremove, // remove
//   [bas.cc + cRemove]: cRemove, // Remove
//   [bas.cc + cExtension]: cExtension, // Extension
//   [bas.cc + cdig]: cdig, // dig
//   [bas.cc + cDig]: cDig, // Dig
//   [bas.cc + cdigit]: cdigit, // digit
//   [bas.cc + cDigit]: cDigit, // Digit
//   [bas.cc + cletter]: cletter, // letter
//   [bas.cc + cLetter]: cLetter, // Letter
//   [bas.cc + cupper]: cupper, // upper
//   [bas.cc + cUpper]: cUpper, // Upper
//   [bas.cc + crandom]: crandom, // random
//   [bas.cc + cRandom]: cRandom, // Random
//   [bas.cc + crandomly]: crandomly, // randomly
//   [bas.cc + cRandomly]: cRandomly, // Randomly
//   [bas.cc + cgenerate]: cgenerate, // generate
//   [bas.cc + cGenerate]: cGenerate, // Generate
//   [bas.cc + cgenerated]: cgenerated, // generated
//   [bas.cc + cGenerated]: cGenerated, // Generated
//   [bas.cc + cparent]: cparent, // parent
//   [bas.cc + cParent]: cParent, // Parent
//   [bas.cc + cvalue]: cvalue, // value
//   [bas.cc + cValue]: cValue, // Value
//   [bas.cc + cvalues]: cvalues, // values
//   [bas.cc + cValues]: cValues, // Values
//   [bas.cc + cfind]: cfind, // find
//   [bas.cc + cFind]: cFind, // Find
//   [bas.cc + cfindvalue]: cfindvalue, // findvalue
//   [bas.cc + cfindValue]: cfindValue, // findValue
//   [bas.cc + cFindValue]: cFindValue, // FindValue
//   [bas.cc + crange]: crange, // range
//   [bas.cc + cRange]: cRange, // Range
//   [bas.cc + cnumeric]: cnumeric, // numeric
//   [bas.cc + cNumeric]: cNumeric, // Numeric
//   [bas.cc + cNumerical]: cNumerical, // Numerical
//   [bas.cc + clength]: clength, // length
//   [bas.cc + cLength]: cLength, // Length
//   [bas.cc + ccode]: ccode, // code
//   [bas.cc + cCode]: cCode, // Code
//   [bas.cc + ceither]: ceither, // either
//   [bas.cc + cEither]: cEither, // Either
//   [bas.cc + cenable]: cenable, // enable
//   [bas.cc + cEnable]: cEnable, // Enable
//   [bas.cc + cenabled]: cenabled, // enabled
//   [bas.cc + cEnabled]: cEnabled, // Enabled
//   [bas.cc + cdetermine]: cdetermine, // determine
//   [bas.cc + cDetermine]: cDetermine, // Determine
//   [bas.cc + cties]: cties, // ties
//   [bas.cc + cTies]: cTies, // Ties
//   [bas.cc + cability]: cability, // ability
//   [bas.cc + cAbility]: cAbility, // Ability
//   [bas.cc + cabilities]: cabilities, // abilities
//   [bas.cc + cAbilities]: cAbilities, // Abilities
//   [bas.cc + cvariable]: cvariable, // variable
//   [bas.cc + cVariable]: cVariable, // Variable
//   [bas.cc + cvariables]: cvariables, // variables
//   [bas.cc + cVariables]: cVariables, // Variables
//   [bas.cc + cvariability]: cvariability, // variability
//   [bas.cc + cVariability]: cVariability, // Variability
//   [bas.cc + cvisibility]: cvisibility, // visibility
//   [bas.cc + cVisibility]: cVisibility, // Visibility
//   [bas.cc + cDialog]: cDialog, // Dialog
//   [bas.cc + clibrary]: clibrary, // library
//   [bas.cc + cLibrary]: cLibrary, // Library
//   [bas.cc + ctable]: ctable, // table
//   [bas.cc + cTable]: cTable, // Table
//   [bas.cc + cequal]: cequal, // equal
//   [bas.cc + cEqual]: cEqual, // Equal
//   [bas.cc + cequals]: cequals, // equals
//   [bas.cc + cEquals]: cEquals, // Equals
//   [bas.cc + cequivalence]: cequivalence, // equivalence
//   [bas.cc + cEquivalence]: cEquivalence, // Equivalence
//   [bas.cc + cRaw]: cRaw, // Raw
//   [bas.cc + cOperation]: cOperation, // Operation
//   [bas.cc + cOperating]: cOperating, // Operating
//   [bas.cc + csystem]: csystem, // system
//   [bas.cc + cSystem]: cSystem, // System
//   [bas.cc + csign]: csign, // sign
//   [bas.cc + cSign]: cSign, // Sign
//   [bas.cc + cassign]: cassign, // assign
//   [bas.cc + cAssign]: cAssign, // Assign
//   [bas.cc + cassignment]: cassignment, // assignment
//   [bas.cc + cAssignment]: cAssignment, // Assignment
//   [bas.cc + cAbreviated]: cAbreviated, // Abreviated
//   [bas.cc + cwait]: cwait, // wait
//   [bas.cc + cWait]: cWait, // Wait
//   [bas.cc + cawait]: cawait, // await
//   [bas.cc + cHTML]: cHTML, // HTML
//   [bas.cc + chtml]: chtml, // html
//   [bas.cc + cinner]: cinner, // inner
//   [bas.cc + cInner]: cInner, // Inner
//   [bas.cc + cOver]: cOver, // Over
//   [bas.cc + cride]: cride, // ride
//   [bas.cc + cRide]: cRide, // Ride
//   [bas.cc + cOverride]: cOverride, // Override
//   [bas.cc + cActionOverride]: cActionOverride, // ActionOverride
//   [bas.cc + cLocator]: cLocator, // Locator
//   [bas.cc + cLocators]: cLocators, // Locators
//   [bas.cc + cLocatorLibrary]: cLocatorLibrary, // LocatorLibrary
//   [bas.cc + cselector]: cselector, // selector
//   [bas.cc + cSelector]: cSelector, // Selector
//   [bas.cc + cSelectors]: cSelectors, // Selectors
//   [bas.cc + cIndividual]: cIndividual, // Individual
//   [bas.cc + cIndividually]: cIndividually, // Individually
//   [bas.cc + cexist]: cexist, // exist
//   [bas.cc + cExist]: cExist, // Exist
//   [bas.cc + cexists]: cexists, // exists
//   [bas.cc + cExists]: cExists, // Exists
//   [bas.cc + cexisted]: cexisted, // existed
//   [bas.cc + cExisted]: cExisted, // Existed
//   [bas.cc + cexisting]: cexisting, // existing
//   [bas.cc + cExisting]: cExisting, // Existing
//   [bas.cc + casync]: casync, // async
//   [bas.cc + cAsync]: cAsync, // Async
//   [bas.cc + csync]: csync, // sync
//   [bas.cc + cSync]: cSync, // Sync
//   [bas.cc + cSingular]: cSingular, // Singular
//   [bas.cc + cParallel]: cParallel, // Parallel
//   [bas.cc + cMulti]: cMulti, // Multi
//   [bas.cc + cUnified]: cUnified, // Unified
//   [bas.cc + cfault]: cfault, // fault
//   [bas.cc + cFault]: cFault, // Fault
//   [bas.cc + cFAULT]: cFAULT, // FAULT
//   [bas.cc + cdefault]: cdefault, // default
//   [bas.cc + cDefault]: cDefault, // Default
//   [bas.cc + cDEFAULT]: cDEFAULT, // DEFAULT
//   [bas.cc + csingle]: csingle, // single
//   [bas.cc + cSingle]: cSingle, // Single
//   [bas.cc + cquote]: cquote, // quote
//   [bas.cc + cQuote]: cQuote, // Quote
//   [bas.cc + cquotes]: cquotes, // quotes
//   [bas.cc + cQuotes]: cQuotes, // Quotes
//   [bas.cc + cquoted]: cquoted, // quoted
//   [bas.cc + cQuoted]: cQuoted, // Quoted
//   [bas.cc + cswap]: cswap, // swap
//   [bas.cc + cSwap]: cSwap, // Swap
//   [bas.cc + cbefore]: cbefore, // before
//   [bas.cc + cBefore]: cBefore, // Before
//   [bas.cc + cBEFORE]: cBEFORE, // BEFORE
//   [bas.cc + cafter]: cafter, // after
//   [bas.cc + cAfter]: cAfter, // After
//   [bas.cc + cAFTER]: cAFTER, // AFTER
//   [bas.cc + cOnce]: cOnce, // Once
//   [bas.cc + cUpload]: cUpload, // Upload
//   [bas.cc + cStyle]: cStyle, // Style
//   [bas.cc + cassert]: cassert, // assert
//   [bas.cc + cAssert]: cAssert, // Assert
//   [bas.cc + cless]: cless, // less
//   [bas.cc + cLess]: cLess, // Less
//   [bas.cc + cgreat]: cgreat, // great
//   [bas.cc + cGreat]: cGreat, // Great
//   [bas.cc + cgreater]: cgreater, // greater
//   [bas.cc + cGreater]: cGreater, // Greater
//   [bas.cc + cthen]: cthen, // then
//   [bas.cc + cThen]: cThen, // Then
//   [bas.cc + cthan]: cthan, // than
//   [bas.cc + cThan]: cThan, // Than
//   [bas.cc + cAssertExists]: cAssertExists, // AssertExists
//   [bas.cc + cAssertNotExists]: cAssertNotExists, // AssertNotExists
//   [bas.cc + cAssertValueEqual]: cAssertValueEqual, // AssertValueEqual
//   [bas.cc + cAssertValueNotEqual]: cAssertValueNotEqual, // AssertValueNotEqual
//   [bas.cc + cAssertValueLessThan]: cAssertValueLessThan, // AssertValueLessThan
//   [bas.cc + cAssertValueGreaterThan]: cAssertValueGreaterThan, // AssertValueGreaterThan
//   [bas.cc + cAssertion]: cAssertion, // Assertion
//   [bas.cc + cAssertionType]: cAssertionType, // AssertionType
//   [bas.cc + cUploadStyle]: cUploadStyle, // UploadStyle
//   [bas.cc + cAssertionStyle]: cAssertionStyle, // AssertionStyle
//   [bas.cc + cby]: cby, // by
//   [bas.cc + cBy]: cBy, // By
//   [bas.cc + cBY]: cBY, // BY
//   [bas.cc + cOr]: cOr, // Or
//   [bas.cc + cor]: cor, // or
//   [bas.cc + cOR]: cOR, // OR
//   [bas.cc + cmix]: cmix, // mix // For some reason JavaScript doesn't like cmi.
//   [bas.cc + cMix]: cMix, // Mix
//   [bas.cc + cmixed]: cmixed, // mixed
//   [bas.cc + cMixed]: cMixed, // Mixed
//   [bas.cc + calpha]: calpha, // alpha
//   [bas.cc + cAlpha]: cAlpha, // Alpha
//   [bas.cc + cbetic]: cbetic, // betic
//   [bas.cc + calphabetic]: calphabetic, // alphabetic
//   [bas.cc + cAlphabetic]: cAlphabetic, // Alphabetic
//   [bas.cc + ctext]: ctext, // text
//   [bas.cc + cText]: cText, // Text
//   [bas.cc + cTEXT]: cTEXT, // TEXT
//   [bas.cc + ccontext]: ccontext, // context
//   [bas.cc + cContext]: cContext, // Context
//   [bas.cc + cinput]: cinput, // input
//   [bas.cc + cInput]: cInput, // Input
//   [bas.cc + cINPUT]: cINPUT, // INPUT
//   [bas.cc + cinputs]: cinputs, // inputs
//   [bas.cc + cInputs]: cInputs, // Inputs
//   [bas.cc + cinputting]: cinputting, // inputting
//   [bas.cc + cInputting]: cInputting, // Inputting
//   [bas.cc + cdescription]: cdescription, // description
//   [bas.cc + cDescription]: cDescription, // Description
//   [bas.cc + cconstant]: cconstant, //constant
//   [bas.cc + cConstant]: cConstant, // Constant
//   [bas.cc + cconstants]: cconstants, // constants
//   [bas.cc + cConstants]: cConstants, // Constants
//   [bas.cc + citeration]: citeration, // iteration
//   [bas.cc + cIteration]: cIteration, // Iteration
//   [bas.cc + cproject]: cproject, // project
//   [bas.cc + cProject]: cProject, // Project
//   [bas.cc + cProjects]: cProjects, // Projects
//   [bas.cc + cAdvance]: cAdvance, // Advance
//   [bas.cc + cAdvanced]: cAdvanced, // Advanced
//   [bas.cc + cCreation]: cCreation, // Creation
//   [bas.cc + ctestData]: ctestData, // testData
//   [bas.cc + cpageData]: cpageData, // pageData
//   [bas.cc + cPageData]: cPageData, // PageData
//   [bas.cc + cTestName]: cTestName, // TestName
//   [bas.cc + cPageName]: cPageName, // PageName
//   [bas.cc + cbed]: cbed, // bed
//   [bas.cc + cBed]: cBed, // Bed
//   [bas.cc + cbeds]: cbeds, // beds
//   [bas.cc + cBeds]: cBeds, // Beds
//   [bas.cc + cbedded]: cbedded, // bedded
//   [bas.cc + cBedded]: cBedded, // Bedded
//   [bas.cc + cbedding]: cbedding, // bedding
//   [bas.cc + cBedding]: cBedding, // Bedding
//   [bas.cc + cweb]: cweb, // web
//   [bas.cc + cWeb]: cWeb, // Web
//   [bas.cc + cwebs]: cwebs, // webs
//   [bas.cc + cWebs]: cWebs, // Webs
//   [bas.cc + cwebbed]: cwebbed, // webbed
//   [bas.cc + cWebbed]: cWebbed, // webbed
//   [bas.cc + cwebbing]: cwebbing, // webbing
//   [bas.cc + cWebbing]: cWebbing, // Webbing
//   [bas.cc + cWebkey]: cWebkey, // Webkey
//   [bas.cc + cfile]: cfile, // file
//   [bas.cc + cFile]: cFile, // File
//   [bas.cc + cfiles]: cfiles, // files
//   [bas.cc + cFiles]: cFiles, // Files
//   [bas.cc + cfilename]: cfilename, // filename
//   [bas.cc + cFilename]: cFilename, // Filename
//   [bas.cc + cfileName]: cfileName, // fileName
//   [bas.cc + cFileName]: cFileName, // FileName
//   [bas.cc + cfilenames]: cfilenames, // filenames
//   [bas.cc + cFilenames]: cFilenames, // Filenames
//   [bas.cc + cfileNames]: cfileNames, // fileNames
//   [bas.cc + cFileNames]: cFileNames, // FileNames
//   [bas.cc + cfold]: cfold, // fold
//   [bas.cc + cFold]: cFold, // Fold
//   [bas.cc + cFolder]: cFolder, // Folder
//   [bas.cc + cfolder]: cfolder, // folder
//   [bas.cc + cfolders]: cfolders, // folders
//   [bas.cc + cFolders]: cFolders, // Folders
//   [bas.cc + ccafe]: ccafe, // cafe
//   [bas.cc + ccert]: ccert, // cert
//   [bas.cc + csrc]: csrc, // src
//   [bas.cc + cbin]: cbin, // bin
//   [bas.cc + cnation]: cnation, // nation
//   [bas.cc + cNation]: cNation, // Nation
//   [bas.cc + csource]: csource, // source
//   [bas.cc + cSource]: cSource, // Source
//   [bas.cc + cdestination]: cdestination, // destination
//   [bas.cc + cDestination]: cDestination, // Destination
//   [bas.cc + cresource]: cresource, // resource
//   [bas.cc + cResource]: cResource, // Resource
//   [bas.cc + cresources]: cresources, // resources
//   [bas.cc + cResources]: cResources, // Resources
//   [bas.cc + cclass]: cclass, // class
//   [bas.cc + cClass]: cClass, // Class
//   [bas.cc + cIngestion]: cIngestion, // Ingestion
//   [bas.cc + cis]: cis, // is
//   [bas.cc + cIs]: cIs, // Is
//   [bas.cc + cIS]: cIS, // IS
//   [bas.cc + ccheck]: ccheck, // check
//   [bas.cc + cCheck]: cCheck, // Check
//   [bas.cc + cchecks]: cchecks, // checks
//   [bas.cc + cChecks]: cChecks, // Checks
//   [bas.cc + cchecked]: cchecked, // checked
//   [bas.cc + cChecked]: cChecked, // Checked
//   [bas.cc + celement]: celement, // element
//   [bas.cc + cElement]: cElement, // Element
//   [bas.cc + celements]: celements, // elements
//   [bas.cc + cElements]: cElements, // Elements
//   [bas.cc + cElementName]: cElementName, // ElementName
//   [bas.cc + callow]: callow, // allow
//   [bas.cc + cAllow]: cAllow, // Allow
//   [bas.cc + callowable]: callowable, // allowable
//   [bas.cc + cAllowable]: cAllowable, // Allowable
//   [bas.cc + chome]: chome, // home
//   [bas.cc + cHome]: cHome, // Home
//   [bas.cc + cpublic]: cpublic, // public
//   [bas.cc + cPublic]: cPublic, // Public
//   [bas.cc + cspecial]: cspecial, // special
//   [bas.cc + cSpecial]: cSpecial, // Special
//   [bas.cc + ccharacter]: ccharacter, // character
//   [bas.cc + cCharacter]: cCharacter, // Character
//   [bas.cc + ccharacters]: ccharacters, // characters
//   [bas.cc + cCharacters]: cCharacters, // Characters
//   [bas.cc + cedge]: cedge, // edge
//   [bas.cc + cEdge]: cEdge, // Edge
//   [bas.cc + cWorks]: cWorks, // Works
//   [bas.cc + csolid]: csolid, // solid
//   [bas.cc + cSolid]: cSolid, // Solid
//   [bas.cc + cBinary]: cBinary, // Binary
//   [bas.cc + cTimeout]: cTimeout, // Timeout
//   [bas.cc + cTimeOut]: cTimeOut, // TimeOut
//   [bas.cc + cDwell]: cDwell, // Dwell
//   [bas.cc + ccut]: ccut, // cut
//   [bas.cc + cCut]: cCut, // Cut
//   [bas.cc + ccuts]: ccuts, // cuts
//   [bas.cc + cCuts]: cCuts, // Cuts
//   [bas.cc + ccutting]: ccutting, // cutting
//   [bas.cc + cCutting]: cCutting, // Cutting
//   [bas.cc + ccute]: ccute, // cute
//   [bas.cc + cCute]: cCute, // Cute
//   [bas.cc + cexecute]: cexecute, // execute
//   [bas.cc + cExecute]: cExecute, // Execute
//   [bas.cc + cexecutes]: cexecutes, // executes
//   [bas.cc + cExecutes]: cExecutes, // Executes
//   [bas.cc + cexecuted]: cexecuted, // executed
//   [bas.cc + cExecuted]: cExecuted, // Executed
//   [bas.cc + cexecuting]: cexecuting, // executing
//   [bas.cc + cExecuting]: cExecuting, // Executing
//   [bas.cc + csibling]: csibling, // sibling
//   [bas.cc + cSibling]: cSibling, // Sibling
//   [bas.cc + cchild]: cchild, // child
//   [bas.cc + cChild]: cChild, // Child
//   [bas.cc + cfilter]: cfilter, // filter
//   [bas.cc + cFilter]: cFilter, // Filter
//   [bas.cc + cattribute]: cattribute, // attribute
//   [bas.cc + cAttribute]: cAttribute, // Attribute
//   [bas.cc + cattributes]: cattributes, // attributes
//   [bas.cc + cAttributes]: cAttributes, // Attributes
//   [bas.cc + cdisabled]: cdisabled, // disabled
//   [bas.cc + cDisabled]: cDisabled, // Disabled
//   [bas.cc + cman]: cman, // man
//   [bas.cc + cMan]: cMan, // Man
//   [bas.cc + cwoman]: cwoman, // woman
//   [bas.cc + cWoman]: cWoman, // Woman
//   [bas.cc + ccell]: ccell, // cell
//   [bas.cc + cCell]: cCell, // Cell
//   [bas.cc + chung]: chung, // hung
//   [bas.cc + cHung]: cHung, // Hung
//   [bas.cc + cport]: cport, // port
//   [bas.cc + cPort]: cPort, // Port
//   [bas.cc + cConstructor]: cConstructor, // Constructor
//   [bas.cc + cwarn]: cwarn, // warn
//   [bas.cc + cWarn]: cWarn, // Warn
//   [bas.cc + cWARN]: cWARN, // WARN
//   [bas.cc + cwarning]: cwarning, // warning
//   [bas.cc + cWarning]: cWarning, // Warning
//   [bas.cc + cWARNING]: cWARNING, // WARNING
//   [bas.cc + cwarnings]: cwarnings, // warnings
//   [bas.cc + cWarnings]: cWarnings, // Warnings
//   [bas.cc + cerror]: cerror, // error
//   [bas.cc + cError]: cError, // Error
//   [bas.cc + cERROR]: cERROR, // ERROR
//   [bas.cc + cash]: cash, // ash
//   [bas.cc + cAsh]: cAsh, // Ash
//   [bas.cc + cdash]: cdash, // dash
//   [bas.cc + cDash]: cDash, // Dash
//   [bas.cc + cboard]: cboard, // board
//   [bas.cc + cDashboard]: cDashboard, // Dashboard
//   [bas.cc + ccompose]: ccompose, // compose
//   [bas.cc + cdecompose]: cdecompose, // decompose
//   [bas.cc + cDecompose]: cDecompose, // Decompose
//   [bas.cc + carray]: carray, // array
//   [bas.cc + cArray]: cArray, // Array
//   [bas.cc + carrays]: carrays, // arrays
//   [bas.cc + cArrays]: cArrays, // Arrays
//   [bas.cc + ccamel]: ccamel, // camel
//   [bas.cc + cCamel]: cCamel, // Camel
//   [bas.cc + cround]: cround, // round
//   [bas.cc + cRound]: cRound, // Round
//   [bas.cc + crounded]: crounded, // rounded
//   [bas.cc + cRounded]: cRounded, // Rounded
//   [bas.cc + cquart]: cquart, // quart
//   [bas.cc + cQuart]: cQuart, // Quart
//   [bas.cc + cquarter]: cquarter, // quarter
//   [bas.cc + cQuarter]: cQuarter, // Quarter
//   [bas.cc + cquaternion]: cquaternion, // quaternion
//   [bas.cc + cQuaternion]: cQuaternion, // Quaternion
//   [bas.cc + cnormal]: cnormal, // normal
//   [bas.cc + cNormal]: cNormal, // Normal
//   [bas.cc + cnormalize]: cnormalize, // normalize
//   [bas.cc + cNormalize]: cNormalize, // Normalize
//   [bas.cc + cnominal]: cnominal, // nominal
//   [bas.cc + cNominal]: cNominal, // Nominal
//   [bas.cc + cdegree]: cdegree, // degree
//   [bas.cc + cDegree]: cDegree, // Degree
//   [bas.cc + cdegrees]: cdegrees, // degrees
//   [bas.cc + cDegrees]: cDegrees, // Degrees
//   [bas.cc + cangle]: cangle, // angle
//   [bas.cc + cAngle]: cAngle, // Angle
//   [bas.cc + ctrap]: ctrap, // trap
//   [bas.cc + cTrap]: cTrap, // Trap
//   [bas.cc + cFraction]: cFraction, // Fraction
//   [bas.cc + cvector]: cvector, // vector
//   [bas.cc + cVector]: cVector, // Vector
//   [bas.cc + cfor]: cfor, // for
//   [bas.cc + cFor]: cFor, // For
//   [bas.cc + cform]: cform, // form
//   [bas.cc + cForm]: cForm, // Form
//   [bas.cc + ctransform]: ctransform, // transform
//   [bas.cc + cTransform]: cTransform, // Transform
//   [bas.cc + cpoint]: cpoint, // point
//   [bas.cc + cPoint]: cPoint, // Point
//   [bas.cc + clocation]: clocation, // location
//   [bas.cc + cLocation]: cLocation, // Location
//   [bas.cc + csort]: csort, // sort
//   [bas.cc + cSort]: cSort, // Sort
//   [bas.cc + csimplify]: csimplify, // simplify
//   [bas.cc + cSimplify]: cSimplify, // Simplify
//   [bas.cc + cconsolidate]: cconsolidate, // consolidate
//   [bas.cc + cConsolidate]: cConsolidate, // Consolidate
//   [bas.cc + cconsolidated]: cconsolidated, // consolidated
//   [bas.cc + cConsolidated]: cConsolidated, // Consolidated
//   [bas.cc + cconsolidates]: cconsolidates, // consolidates
//   [bas.cc + cConsolidates]: cConsolidates, // Consolidates
//   [bas.cc + cconsolidating]: cconsolidating, // consolidating
//   [bas.cc + cConsolidating]: cConsolidating, // Consolidating
//   [bas.cc + care]: care, // are
//   [bas.cc + cAre]: cAre, // Are
//   [bas.cc + cARE]: cARE, // ARE
//   [bas.cc + ccompare]: ccompare, // compare
//   [bas.cc + cCompare]: cCompare, // Compare
//   [bas.cc + ccompares]: ccompares, // compares
//   [bas.cc + cCompares]: cCompares, // Compares
//   [bas.cc + ccompared]: ccompared, // compared
//   [bas.cc + cCompared]: cCompared, // Compared
//   [bas.cc + ccomparing]: ccomparing, // comparing
//   [bas.cc + cComparing]: cComparing, // Comparing
//   [bas.cc + ccomparison]: ccomparison, // comparison
//   [bas.cc + cComparison]: cComparison, // Comparison
//   [bas.cc + ccomparisons]: ccomparisons, // comparisons
//   [bas.cc + cComparisons]: cComparisons, // Comparisons
//   [bas.cc + ccontain]: ccontain, // contain
//   [bas.cc + cContain]: cContain, // Contain
//   [bas.cc + ccontains]: ccontains, // contains
//   [bas.cc + cContains]: cContains, // Contains
//   [bas.cc + ccontained]: ccontained, // contained
//   [bas.cc + cContained]: cContained, // Contained
//   [bas.cc + ccontaining]: ccontaining, // containing
//   [bas.cc + cContaining]: cContaining, // Containing
//   [bas.cc + cvideo]: cvideo, // video
//   [bas.cc + cVideo]: cVideo, // Video
//   [bas.cc + cProduct]: cProduct, // Product
//   [bas.cc + caggregate]: caggregate, // aggregate
//   [bas.cc + cAggregate]: cAggregate, // Aggregate
//   [bas.cc + carguments]: carguments, // arguments
//   [bas.cc + cArguments]: cArguments, // Arguments
//   [bas.cc + cDifference]: cDifference, // Difference
//   [bas.cc + cbet]: cbet, // bet
//   [bas.cc + cBet]: cBet, // Bet
//   [bas.cc + cbetween]: cbetween, // between
//   [bas.cc + cBetween]: cBetween, // Between
//   [bas.cc + ccertain]: ccertain, // certain
//   [bas.cc + cascertain]: cascertain, // ascertain
//   [bas.cc + cAscertain]: cAscertain, // Ascertain
//   [bas.cc + cmatch]: cmatch, // match
//   [bas.cc + cMatch]: cMatch, // Match
//   [bas.cc + cmatching]: cmatching, // matching
//   [bas.cc + cMatching]: cMatching, // Matching
//   [bas.cc + cdoes]: cdoes, // does
//   [bas.cc + cDoes]: cDoes, // Does
//   [bas.cc + cDOES]: cDOES, // DOES
//   [bas.cc + capplication]: capplication, // application
//   [bas.cc + cApplication]: cApplication, // Application
//   [bas.cc + cAPPLICATION]: cAPPLICATION, // APPLICATION
//   [bas.cc + cbuild]: cbuild, // build
//   [bas.cc + cBuild]: cBuild, // Build
//   [bas.cc + cdeploy]: cdeploy, // deploy
//   [bas.cc + cDeploy]: cDeploy, // Deploy
//   [bas.cc + cDEPLOY]: cDEPLOY, // DEPLOY
//   [bas.cc + cdeployment]: cdeployment, // deployment
//   [bas.cc + cDeployment]: cDeployment, // Deployment
//   [bas.cc + clease]: clease, // lease
//   [bas.cc + cLEASE]: cLEASE, // LEASE
//   [bas.cc + crelease]: crelease, // release
//   [bas.cc + cRelease]: cRelease, // Release
//   [bas.cc + cRELEASE]: cRELEASE, // RELEASE
//   [bas.cc + creleases]: creleases, // releases
//   [bas.cc + cReleases]: cReleases, // Releases
//   [bas.cc + creleased]: creleased, // released
//   [bas.cc + cReleased]: cReleased, // Released
//   [bas.cc + creleasing]: creleasing, // releasing
//   [bas.cc + cReleasing]: cReleasing, // Releasing
//   [bas.cc + croot]: croot, // root
//   [bas.cc + cRoot]: cRoot, // Root
//   [bas.cc + cparse]: cparse, // parse
//   [bas.cc + cParse]: cParse, // Parse
//   [bas.cc + cPARSE]: cPARSE, // PARSE
//   [bas.cc + cparser]: cparser, // parser
//   [bas.cc + cParser]: cParser, // Parser
//   [bas.cc + cPARSER]: cPARSER, // PARSER
//   [bas.cc + cparsed]: cparsed, // parsed
//   [bas.cc + cParsed]: cParsed, // Parsed
//   [bas.cc + cparsing]: cparsing, // parsing
//   [bas.cc + cParsing]: cParsing, // Parsing
//   [bas.cc + cforward]: cforward, // forward
//   [bas.cc + cForward]: cForward, // Forward
//   [bas.cc + cslash]: cslash, // slash
//   [bas.cc + cSlash]: cSlash, // Slash
//   [bas.cc + cmeta]: cmeta, // meta
//   [bas.cc + cMeta]: cMeta, // Meta
//   [bas.cc + cmetaData]: cmetaData, // metaData
//   [bas.cc + cMetaData]: cMetaData, // MetaData
//   [bas.cc + cbusiness]: cbusiness, // business
//   [bas.cc + cBusiness]: cBusiness, // Business
//   [bas.cc + crule]: crule, // rule
//   [bas.cc + cRule]: cRule, // Rule
//   [bas.cc + cfresh]: cfresh, // fresh
//   [bas.cc + crefresh]: crefresh, // refresh
//   [bas.cc + cRefresh]: cRefresh, // Refresh
//   [bas.cc + ceval]: ceval, // eval
//   [bas.cc + cEval]: cEval, // Eval
//   [bas.cc + creload]: creload, // reload
//   [bas.cc + cReload]: cReload, // Reload
//   [bas.cc + cdemo]: cdemo, // demo
//   [bas.cc + cDemo]: cDemo, // Demo
//   [bas.cc + ccommon]: ccommon, // common
//   [bas.cc + cCommon]: cCommon, // Common
//   [bas.cc + cfunction]: cfunction, // function
//   [bas.cc + cFunction]: cFunction, // Function
//   [bas.cc + cfunctions]: cfunctions, // functions
//   [bas.cc + cFunctions]: cFunctions, // Functions
//   [bas.cc + cmultiple]: cmultiple, // multiple
//   [bas.cc + cMultiple]: cMultiple, // Multiple
//   [bas.cc + cJournal]: cJournal, // Journal
//   [bas.cc + cExecution]: cExecution, // Execution
//   [bas.cc + cpercent]: cpercent, // percent
//   [bas.cc + cPercent]: cPercent, // Percent
//   [bas.cc + cbasic]: cbasic, // basic
//   [bas.cc + cBasic]: cBasic, // Basic
//   [bas.cc + codd]: codd, // odd
//   [bas.cc + cOdd]: cOdd, // Odd
//   [bas.cc + ceven]: ceven, // even
//   [bas.cc + cEven]: cEven, // Even
//   [bas.cc + cEVEN]: cEVEN, // EVEN
//   [bas.cc + cevent]: cevent, // event
//   [bas.cc + cEvent]: cEvent, // Event
//   [bas.cc + cevents]: cevents, // events
//   [bas.cc + cEvents]: cEvents, // Events
//   [bas.cc + cface]: cface, // face
//   [bas.cc + cFace]: cFace, // Face
//   [bas.cc + cargument]: cargument, // argument
//   [bas.cc + cArgument]: cArgument, // Argument
//   [bas.cc + cdrive]: cdrive, // drive
//   [bas.cc + cDrive]: cDrive, // Drive
//   [bas.cc + cdriven]: cdriven, // driven
//   [bas.cc + cDriven]: cDriven, // Driven
//   [bas.cc + cinterface]: cinterface, // interface
//   [bas.cc + cInterface]: cInterface, // Interface
//   [bas.cc + cfont]: cfont, // font
//   [bas.cc + cFont]: cFont, // Font
//   [bas.cc + cmodule]: cmodule, // module
//   [bas.cc + cModule]: cModule, // Module
//   [bas.cc + ccolor]: ccolor, // color
//   [bas.cc + cColor]: cColor, // Color
//   [bas.cc + ccolors]: ccolors, // colors
//   [bas.cc + cColors]: cColors, // Colors
//   [bas.cc + ccolored]: ccolored, // colored
//   [bas.cc + cColored]: cColored, // Colored
//   [bas.cc + ccolorize]: ccolorize, // colorize
//   [bas.cc + cColorize]: cColorize, // Colorize
//   [bas.cc + ccolorized]: ccolorized, // colorized
//   [bas.cc + cColorized]: cColorized, // Colorized
//   [bas.cc + cold]: cold, // old
//   [bas.cc + cOld]: cOld, // Old
//   [bas.cc + cbold]: cbold, // bold
//   [bas.cc + cBold]: cBold, // Bold
//   [bas.cc + cmost]: cmost, // most
//   [bas.cc + cMost]: cMost, // Most
//   [bas.cc + cpop]: cpop, // pop
//   [bas.cc + cPop]: cPop, // Pop
//   [bas.cc + cPOP]: cPOP, // POP
//   [bas.cc + cpopular]: cpopular, // popular
//   [bas.cc + cPopular]: cPopular, // Popular
//   [bas.cc + calmost]: calmost, // almost
//   [bas.cc + cAlmost]: cAlmost, // Almost
//   [bas.cc + cpal]: cpal, // pal
//   [bas.cc + cPal]: cPal, // Pal
//   [bas.cc + cpalindrome]: cpalindrome, // palindrome
//   [bas.cc + cPalindrome]: cPalindrome, // Palindrome
//   [bas.cc + caverage]: caverage, // average
//   [bas.cc + cAverage]: cAverage, // Average
//   [bas.cc + cclient]: cclient, // client
//   [bas.cc + cClient]: cClient, // Client
//   [bas.cc + crules]: crules, // rules
//   [bas.cc + cRules]: cRules, // Rules
//   [bas.cc + ccustom]: ccustom, // custom
//   [bas.cc + cCustom]: cCustom, // Custom
//   [bas.cc + ccommand]: ccommand, // command
//   [bas.cc + cCommand]: cCommand, // Command
//   [bas.cc + cCOMMAND]: cCOMMAND, // COMMAND
//   [bas.cc + ccommands]: ccommands, // commands
//   [bas.cc + cCommands]: cCommands, // Commands
//   [bas.cc + cqueue]: cqueue, // queue
//   [bas.cc + cQueue]: cQueue, // Queue
//   [bas.cc + cenqueue]: cenqueue, // enqueue
//   [bas.cc + cEnqueue]: cEnqueue, // Enqueue
//   [bas.cc + cdequeue]: cdequeue, // dequeue
//   [bas.cc + cDequeue]: cDequeue, // Dequeue
//   [bas.cc + cblob]: cblob, // blob
//   [bas.cc + cBlob]: cBlob, // Blob
//   [bas.cc + cframe]: cframe, // frame
//   [bas.cc + cFrame]: cFrame, // Frame
//   [bas.cc + calias]: calias, // alias
//   [bas.cc + cAlias]: cAlias, // Alias
//   [bas.cc + caliases]: caliases, // aliases
//   [bas.cc + cAliases]: cAliases, // Aliases
//   [bas.cc + csequencer]: csequencer, // sequencer
//   [bas.cc + cSequencer]: cSequencer, // Sequencer
//   [bas.cc + cprimary]: cprimary, // primary
//   [bas.cc + cPrimary]: cPrimary, // Primary
//   [bas.cc + csecondary]: csecondary, // secondary
//   [bas.cc + cSecondary]: cSecondary, // Secondary
//   [bas.cc + ctertiary]: ctertiary, // tertiary
//   [bas.cc + cTertiary]: cTertiary, // Tertiary
//   [bas.cc + cdelimit]: cdelimit, // delimit
//   [bas.cc + cDelimit]: cDelimit, // Delimit
//   [bas.cc + cdelimiter]: cdelimiter, // delimiter
//   [bas.cc + cDelimiter]: cDelimiter, // Delimiter
//   [bas.cc + cdelimiters]: cdelimiters, // delimiters
//   [bas.cc + cDelimiters]: cDelimiters, // Delimiters
//   [bas.cc + cdelimited]: cdelimited, // delimited
//   [bas.cc + cDelimited]: cDelimited, // Delimited
//   [bas.cc + cdelimiting]: cdelimiting, // delimiting
//   [bas.cc + cDelimiting]: cDelimiting, // Delimiting
//   [bas.cc + chelp]: chelp, // help
//   [bas.cc + cHelp]: cHelp, // Help
//   [bas.cc + cprint]: cprint, // print
//   [bas.cc + cPrint]: cPrint, // Print
//   [bas.cc + chive]: chive, // hive
//   [bas.cc + cHive]: cHive, // Hive
//   [bas.cc + cgenerator]: cgenerator, // generator
//   [bas.cc + cGenerator]: cGenerator, // Generator
//   [bas.cc + cindex]: cindex, // index
//   [bas.cc + cIndex]: cIndex, // Index
//   [bas.cc + cabout]: cabout, // about
//   [bas.cc + cAbout]: cAbout, // About
//   [bas.cc + cstart]: cstart, // start
//   [bas.cc + cStart]: cStart, // Start
//   [bas.cc + cstarts]: cstarts, // starts
//   [bas.cc + cStarts]: cStarts, // Starts
//   [bas.cc + cstarted]: cstarted, // started
//   [bas.cc + cStarted]: cStarted, // Started
//   [bas.cc + cstartup]: cstartup, // startup
//   [bas.cc + cstarting]: cstarting, // starting
//   [bas.cc + cStarting]: cStarting, // Starting
//   [bas.cc + coutput]: coutput, // output
//   [bas.cc + cOutput]: cOutput, // Output
//   [bas.cc + cmetric]: cmetric, // metric
//   [bas.cc + cMetric]: cMetric, // Metric
//   [bas.cc + cmetrics]: cmetrics, // metrics
//   [bas.cc + cMetrics]: cMetrics, // Metrics
//   [bas.cc + crack]: crack, // rack
//   [bas.cc + cRack]: cRack, // Rack
//   [bas.cc + ctrack]: ctrack, // track
//   [bas.cc + cTrack]: cTrack, // Track
//   [bas.cc + ctracking]: ctracking, // tracking
//   [bas.cc + cTracking]: cTracking, // Tracking
//   [bas.cc + cstack]: cstack, // stack
//   [bas.cc + cStack]: cStack, // Stack
//   [bas.cc + cstandard]: cstandard, // standard
//   [bas.cc + cStandard]: cStandard, // Standard
//   [bas.cc + cdeviation]: cdeviation, // deviation
//   [bas.cc + cDeviation]: cDeviation, // Deviation
//   [bas.cc + canalysis]: canalysis, // analysis
//   [bas.cc + cAnalysis]: cAnalysis, // Analysis
//   [bas.cc + cclear]: cclear, // clear
//   [bas.cc + cClear]: cClear, // Clear
//   [bas.cc + cversion]: cversion, // version
//   [bas.cc + cVersion]: cVersion, // Version
//   [bas.cc + ccontrol]: ccontrol, // control
//   [bas.cc + cControl]: cControl, // Control
//   [bas.cc + ccontrols]: ccontrols, // controls
//   [bas.cc + cControls]: cControls, // Controls
//   [bas.cc + ccontrolled]: ccontrolled, // controlled
//   [bas.cc + cControlled]: cControlled, // Controlled
//   [bas.cc + ccontrolling]: ccontrolling, // controlling
//   [bas.cc + cControlling]: cControlling, // Controlling
//   [bas.cc + ccontroller]: ccontroller, // controller
//   [bas.cc + cController]: cController, // Controller
//   [bas.cc + ccontrollers]: ccontrollers, // controllers
//   [bas.cc + cControllers]: cControllers, // Controllers
//   [bas.cc + cperform]: cperform, // perform
//   [bas.cc + cPerform]: cPerform, // Perform
//   [bas.cc + cperformance]: cperformance, // performance
//   [bas.cc + cPerformance]: cPerformance, // Performance
//   [bas.cc + cconversion]: cconversion, // conversion
//   [bas.cc + cConversion]: cConversion, // Conversion
//   [bas.cc + cpass]: cpass, // pass
//   [bas.cc + cPass]: cPass, // Pass
//   [bas.cc + cPASS]: cPASS, // PASS
//   [bas.cc + cpassed]: cpassed, // passed
//   [bas.cc + cPassed]: cPassed, // Passed
//   [bas.cc + cPASSED]: cPASSED, // PASSED
//   [bas.cc + cpassing]: cpassing, // passing
//   [bas.cc + cPassing]: cPassing, // Passing
//   [bas.cc + cbypass]: cbypass, // bypass
//   [bas.cc + cBypass]: cBypass, // Bypass
//   [bas.cc + cbypasses]: cbypasses, // bypasses
//   [bas.cc + cBypasses]: cBypasses, // Bypasses
//   [bas.cc + cbypassed]: cbypassed, // bypassed
//   [bas.cc + cBypassed]: cBypassed, // Bypassed
//   [bas.cc + cbypassing]: cbypassing, // bypassing
//   [bas.cc + cBypassing]: cBypassing, // Bypassing
//   [bas.cc + cfail]: cfail, // fail
//   [bas.cc + cFail]: cFail, // Fail
//   [bas.cc + cFAIL]: cFAIL, // FAIL
//   [bas.cc + cfailed]: cfailed, // failed
//   [bas.cc + cFailed]: cFailed, // Failed
//   [bas.cc + cFAILED]: cFAILED, // FAILED
//   [bas.cc + cfailure]: cfailure, // failure
//   [bas.cc + cFailure]: cFailure, // Failure
//   [bas.cc + csimplified]: csimplified, // simplified
//   [bas.cc + cSimplified]: cSimplified, // Simplified
//   [bas.cc + ctraditional]: ctraditional, // traditional
//   [bas.cc + cTraditional]: cTraditional, // Traditional
//   [bas.cc + cground]: cground, // ground
//   [bas.cc + cGround]: cGround, // Ground
//   [bas.cc + cyell]: cyell, // yell
//   [bas.cc + cYell]: cYell, // Yell
//   [bas.cc + clack]: clack, // lack
//   [bas.cc + cLack]: cLack, // Lack
//   [bas.cc + clane]: clane, // lane
//   [bas.cc + cLane]: cLane, // Lane
//   [bas.cc + csection]: csection, // section
//   [bas.cc + cSection]: cSection, // Section
//   [bas.cc + csections]: csections, // sections
//   [bas.cc + cSections]: cSections, // Sections
//   [bas.cc + cunit]: cunit, // unit
//   [bas.cc + cUnit]: cUnit, // Unit
//   [bas.cc + cunits]: cunits, // units
//   [bas.cc + cUnits]: cUnits, // Units
//   [bas.cc + cgeneric]: cgeneric, // generic
//   [bas.cc + cGeneric]: cGeneric, // Generic
//   [bas.cc + cisotope]: cisotope, // isotope
//   [bas.cc + cIsotope]: cIsotope, // Isotope
//   [bas.cc + cphonic]: cphonic, // phonic
//   [bas.cc + cPhonic]: cPhonic, // Phonic
//   [bas.cc + cphonics]: cphonics, // phonics
//   [bas.cc + cPhonics]: cPhonics, // Phonics
//   [bas.cc + cshape]: cshape, // shape
//   [bas.cc + cShape]: cShape, // Shape
//   [bas.cc + cexport]: cexport, // export
//   [bas.cc + cExport]: cExport, // Export
//   [bas.cc + cplay]: cplay, // play
//   [bas.cc + cPlay]: cPlay, // Play
//   [bas.cc + cdisplay]: cdisplay, // display
//   [bas.cc + cDisplay]: cDisplay, // Display
//   [bas.cc + csum]: csum, // sum
//   [bas.cc + cSum]: cSum, // Sum
//   [bas.cc + csummary]: csummary, // summary
//   [bas.cc + cSummary]: cSummary, // Summary
//   [bas.cc + csuggest]: csuggest, // suggest
//   [bas.cc + cSuggest]: cSuggest, // Suggest
//   [bas.cc + csuggested]: csuggested, // suggested
//   [bas.cc + cSuggested]: cSuggested, // Suggested
//   [bas.cc + cline]: cline, // line
//   [bas.cc + cLine]: cLine, // Line
//   [bas.cc + cdocument]: cdocument, // document
//   [bas.cc + cDocument]: cDocument, // Document
//   [bas.cc + cqualified]: cqualified, // qualified
//   [bas.cc + cQualified]: cQualified, // Qualified
//   [bas.cc + cfix]: cfix, // fix
//   [bas.cc + cFix]: cFix, // Fix
//   [bas.cc + cprefix]: cprefix, // prefix
//   [bas.cc + cPrefix]: cPrefix, // Prefix
//   [bas.cc + csuffix]: csuffix, // suffix
//   [bas.cc + cSuffix]: cSuffix, // Suffix
//   [bas.cc + cdevelop]: cdevelop, // develop
//   [bas.cc + cDevelop]: cDevelop, // Develop
//   [bas.cc + cDEVELOP]: cDEVELOP, // DEVELOP
//   [bas.cc + cdevelopment]: cdevelopment, // development
//   [bas.cc + cDevelopment]: cDevelopment, // Development
//   [bas.cc + cDEVELOPMENT]: cDEVELOPMENT, // DEVELOPMENT
//   [bas.cc + cproduction]: cproduction, // production
//   [bas.cc + cProduction]: cProduction, // Production
//   [bas.cc + cPRODUCTION]: cPRODUCTION, // PRODUCTION
//   [bas.cc + cstorage]: cstorage, // storage
//   [bas.cc + cStorage]: cStorage, // Storage
//   [bas.cc + cstore]: cstore, // store
//   [bas.cc + cStore]: cStore, // Store
//   [bas.cc + cstored]: cstored, // stored
//   [bas.cc + cStored]: cStored, // Stored
//   [bas.cc + cunique]: cunique, // unique
//   [bas.cc + cUnique]: cUnique, // Unique
//   [bas.cc + cduplicate]: cduplicate, // duplicate
//   [bas.cc + cDuplicate]: cDuplicate, // Duplicate
//   [bas.cc + cplease]: cplease, // please
//   [bas.cc + cPlease]: cPlease, // Please
//   [bas.cc + center]: center, // enter
//   [bas.cc + cEnter]: cEnter, // Enter
//   [bas.cc + centers]: centers, // enters
//   [bas.cc + cEnters]: cEnters, // Enters
//   [bas.cc + centered]: centered, // entered
//   [bas.cc + cEntered]: cEntered, // Entered
//   [bas.cc + centering]: centering, // entering
//   [bas.cc + cEntering]: cEntering, // Entering
//   [bas.cc + cwere]: cwere, // were
//   [bas.cc + cWere]: cWere, // Were
//   [bas.cc + cwhere]: cwhere, // where
//   [bas.cc + cWhere]: cWhere, // Where
//   [bas.cc + cher]: cher, // her
//   [bas.cc + cHer]: cHer, // Her
//   [bas.cc + chim]: chim, // him
//   [bas.cc + cHim]: cHim, // Him
//   [bas.cc + chers]: chers, // hers
//   [bas.cc + cHers]: cHers, // Hers
//   [bas.cc + chis]: chis, // his
//   [bas.cc + cHis]: cHis, // His
//   [bas.cc + cthem]: cthem, // them
//   [bas.cc + cThem]: cThem, // Them
//   [bas.cc + cthose]: cthose, // those
//   [bas.cc + cThose]: cThose, // Those
//   [bas.cc + cthat]: cthat, // that
//   [bas.cc + cThat]: cThat, // That
//   [bas.cc + cthis]: cthis, // this
//   [bas.cc + cThis]: cThis, // This
//   [bas.cc + cwhen]: cwhen, // when
//   [bas.cc + cWhen]: cWhen, // When
//   [bas.cc + cwhat]: cwhat, // what
//   [bas.cc + cWhat]: cWhat, // What
//   [bas.cc + chow]: chow, // how
//   [bas.cc + cHow]: cHow, // How
//   [bas.cc + cwhy]: cwhy, // why
//   [bas.cc + cWhy]: cWhy, // Why
//   [bas.cc + cother]: cother, // other
//   [bas.cc + cOther]: cOther, // Other
//   [bas.cc + cabreviation]: cabreviation, // abreviation
//   [bas.cc + cAbreviation]: cAbreviation, // Abreviation
//   [bas.cc + cabreviations]: cabreviations, // abreviations
//   [bas.cc + cAbreviations]: cAbreviations, // Abreviations
//   [bas.cc + cacronym]: cacronym, // acronym
//   [bas.cc + cAcronym]: cAcronym, // Acronym
//   [bas.cc + cacronyms]: cacronyms, // acronyms
//   [bas.cc + cAcronyms]: cAcronyms, // Acronyms
//   [bas.cc + csolve]: csolve, // solve
//   [bas.cc + cSolve]: cSolve, // Solve
//   [bas.cc + cLehmer]: cLehmer, // Lehmer
//   [bas.cc + cdeep]: cdeep, // deep
//   [bas.cc + cDeep]: cDeep, // Deep
//   [bas.cc + cclone]: cclone, // clone
//   [bas.cc + cClone]: cClone, // Clone
//   [bas.cc + ccursive]: ccursive, // cursive
//   [bas.cc + cCursive]: cCursive, // Cursive
//   [bas.cc + crecursive]: crecursive, // recursive
//   [bas.cc + cRecursive]: cRecursive, // Recursive
//   [bas.cc + cexpansion]: cexpansion, // expansion
//   [bas.cc + cExpansion]: cExpansion, // Expansion
//   [bas.cc + cscreen]: cscreen, // screen
//   [bas.cc + cScreen]: cScreen, // Screen
//   [bas.cc + cyou]: cyou, // you
//   [bas.cc + cYou]: cYou, // You
//   [bas.cc + cwould]: cwould, // would
//   [bas.cc + cWould]: cWould, // Would
//   [bas.cc + cshould]: cshould, // should
//   [bas.cc + cShould]: cShould, // Should
//   [bas.cc + ccould]: ccould, // could
//   [bas.cc + cCould]: cCould, // Could
//   [bas.cc + clike]: clike, // like
//   [bas.cc + cLike]: cLike, // Like
//   [bas.cc + cfine]: cfine, // fine
//   [bas.cc + cFine]: cFine, // Fine
//   [bas.cc + cdefine]: cdefine, // define
//   [bas.cc + cDefine]: cDefine, // Define
//   [bas.cc + cdefined]: cdefined, // defined
//   [bas.cc + cDefined]: cDefined, // Defined
//   [bas.cc + cdefines]: cdefines, // defines
//   [bas.cc + cDefines]: cDefines, // Defines
//   [bas.cc + cdefining]: cdefining, // defining
//   [bas.cc + cDefining]: cDefining, // Defining
//   [bas.cc + cfill]: cfill, // fill
//   [bas.cc + cFill]: cFill, // Fill
//   [bas.cc + cfulfillment]: cfulfillment, // fulfillment
//   [bas.cc + cFulfillment]: cFulfillment, // Fulfillment
//   [bas.cc + coptimized]: coptimized, // optimized
//   [bas.cc + cOptimized]: cOptimized, // Optimized
//   [bas.cc + csome]: csome, // some
//   [bas.cc + cSome]: cSome, // Some
//   [bas.cc + ccomb]: ccomb, // comb
//   [bas.cc + cComb]: cComb, // Comb
//   [bas.cc + ccombine]: ccombine, // combine
//   [bas.cc + cCombine]: cCombine, // Combine
//   [bas.cc + ccombines]: ccombines, // combines
//   [bas.cc + cCombines]: cCombines, // Combines
//   [bas.cc + ccombined]: ccombined, // combined
//   [bas.cc + cCombined]: cCombined, // Combined
//   [bas.cc + ccombining]: ccombining, // combining
//   [bas.cc + cCombining]: cCombining, // Combining
//   [bas.cc + crecombine]: crecombine, // recombine
//   [bas.cc + cRecombine]: cRecombine, // Recombine
//   [bas.cc + ccombination]: ccombination, // combination
//   [bas.cc + cCombination]: cCombination, // Combination
//   [bas.cc + ccombinations]: ccombinations, // combinations
//   [bas.cc + cCombinations]: cCombinations, // Combinations
//   [bas.cc + crecognizer]: crecognizer, // recognizer
//   [bas.cc + cRecognizer]: cRecognizer, // Recognizer
//   [bas.cc + cpat]: cpat, // pat
//   [bas.cc + cPat]: cPat, // Pat
//   [bas.cc + cpatt]: cpatt, // patt
//   [bas.cc + cPatt]: cPatt, // Patt
//   [bas.cc + cpattern]: cpattern, // pattern
//   [bas.cc + cPattern]: cPattern, // Pattern
//   [bas.cc + cpatterns]: cpatterns, // patterns
//   [bas.cc + cPatterns]: cPatterns, // Patterns
//   [bas.cc + ccoma]: ccoma, // coma
//   [bas.cc + cComa]: cComa, // Coma
//   [bas.cc + ccomas]: ccomas, // comas
//   [bas.cc + cComas]: cComas, // Comas
//   [bas.cc + cseparate]: cseparate, // separate
//   [bas.cc + cSeparate]: cSeparate, // Separate
//   [bas.cc + cseparated]: cseparated, // separated
//   [bas.cc + cSeparated]: cSeparated, // Separated
//   [bas.cc + csea]: csea, // sea
//   [bas.cc + cSea]: cSea, // Sea
//   [bas.cc + csearch]: csearch, // search
//   [bas.cc + cSearch]: cSearch, // Search
//   [bas.cc + csearches]: csearches, // searches
//   [bas.cc + cSearches]: cSearches, // Searches
//   [bas.cc + csearched]: csearched, // searched
//   [bas.cc + cSearched]: cSearched, // Searched
//   [bas.cc + csearching]: csearching, // searching
//   [bas.cc + cSearching]: cSearching, // Searching
//   [bas.cc + cneed]: cneed, // need
//   [bas.cc + cNeed]: cNeed, // Need
//   [bas.cc + cimplement]: cimplement, // implement
//   [bas.cc + cImplement]: cImplement, // Implement
//   [bas.cc + cimplements]: cimplements, // implements
//   [bas.cc + cImplements]: cImplements, // Implements
//   [bas.cc + cimplementation]: cimplementation, // implementation
//   [bas.cc + cImplementation]: cImplementation, // Implementation
//   [bas.cc + cgoing]: cgoing, // going
//   [bas.cc + cGoing]: cGoing, // Going
//   [bas.cc + cmain]: cmain, // main
//   [bas.cc + cMain]: cMain, // Main
//   [bas.cc + cprogram]: cprogram, // program
//   [bas.cc + cProgram]: cProgram, // Program
//   [bas.cc + cloop]: cloop, // loop
//   [bas.cc + cLoop]: cLoop, // Loop
//   [bas.cc + cgood]: cgood, // good
//   [bas.cc + cGood]: cGood, // Good
//   [bas.cc + cbye]: cbye, // bye
//   [bas.cc + cBye]: cBye, // Bye
//   [bas.cc + chave]: chave, // have
//   [bas.cc + cHave]: cHave, // Have
//   [bas.cc + cnice]: cnice, // nice
//   [bas.cc + cNice]: cNice, // Nice
//   [bas.cc + cday]: cday, // day
//   [bas.cc + cDay]: cDay, // Day
//   [bas.cc + cstay]: cstay, // stay
//   [bas.cc + cStay]: cStay, // Stay
//   [bas.cc + csafe]: csafe, // safe
//   [bas.cc + cSafe]: cSafe, // Safe
//   [bas.cc + cwas]: cwas, // was
//   [bas.cc + cWas]: cWas, // Was
//   [bas.cc + cbig]: cbig, // big
//   [bas.cc + cBig]: cBig, // Big
//   [bas.cc + cbigger]: cbigger, // bigger
//   [bas.cc + cBigger]: cBigger, // Bigger
//   [bas.cc + cbiggest]: cbiggest, // biggest
//   [bas.cc + cBiggest]: cBiggest, // Biggest
//   [bas.cc + cspecific]: cspecific, // specific
//   [bas.cc + cSpecific]: cSpecific, // Specific
//   [bas.cc + cspecified]: cspecified, // specified
//   [bas.cc + cSpecified]: cSpecified, // Specified
//   [bas.cc + cdomain]: cdomain, // domain
//   [bas.cc + cDomain]: cDomain, // Domain
//   [bas.cc + cmode]: cmode, // mode
//   [bas.cc + cMode]: cMode, // Mode
//   [bas.cc + csymbol]: csymbol, // symbol
//   [bas.cc + cSymbol]: cSymbol, // Symbol
//   [bas.cc + csymbols]: csymbols, // symbols
//   [bas.cc + cSymbols]: cSymbols, // Symbols
//   [bas.cc + cresolve]: cresolve, // resolve
//   [bas.cc + cResolve]: cResolve, // Resolve
//   [bas.cc + cresolved]: cresolved, // resolved
//   [bas.cc + cResolved]: cResolved, // Resolved
//   [bas.cc + cresolving]: cresolving, // resolving
//   [bas.cc + cResolving]: cResolving, // Resolving
//   [bas.cc + cvariation]: cvariation, // variation
//   [bas.cc + cVariation]: cVariation, // Variation
//   [bas.cc + cterm]: cterm, // term
//   [bas.cc + cTerm]: cTerm, // Term
//   [bas.cc + ccost]: ccost, // cost
//   [bas.cc + cCost]: cCost, // Cost
//   [bas.cc + cperiod]: cperiod, // period
//   [bas.cc + cPeriod]: cPeriod, // Period
//   [bas.cc + ccannot]: ccannot, // cannot
//   [bas.cc + cCannot]: cCannot, // Cannot
//   [bas.cc + cnothing]: cnothing, // nothing
//   [bas.cc + cNothing]: cNothing, // Nothing
//   [bas.cc + cnothingness]: cnothingness, // nothingness
//   [bas.cc + cNothingness]: cNothingness, // Nothingness
//   [bas.cc + cused]: cused, // used
//   [bas.cc + cUsed]: cUsed, // Used
//   [bas.cc + cusing]: cusing, // using
//   [bas.cc + cUsing]: cUsing, // Using
//   [bas.cc + cbreak]: cbreak, // break
//   [bas.cc + cBreak]: cBreak, // Break
//   [bas.cc + cinto]: cinto, // into
//   [bas.cc + cInto]: cInto, // Into
//   [bas.cc + cunable]: cunable, // unable
//   [bas.cc + cUnable]: cUnable, // Unable
//   [bas.cc + cnow]: cnow, // now
//   [bas.cc + cNow]: cNow, // Now
//   [bas.cc + cknow]: cknow, // know
//   [bas.cc + cKnow]: cKnow, // Know
//   [bas.cc + cknown]: cknown, // known
//   [bas.cc + cKnown]: cKnown, // Known
//   [bas.cc + cunknown]: cunknown, // unknown
//   [bas.cc + cUnknown]: cUnknown, // Unknown
//   [bas.cc + ctemp]: ctemp, // temp
//   [bas.cc + cTemp]: cTemp, // Temp
//   [bas.cc + ctempt]: ctempt, // tempt
//   [bas.cc + cTempt]: cTempt, // Tempt
//   [bas.cc + cattempt]: cattempt, // attempt
//   [bas.cc + cAttempt]: cAttempt, // Attempt
//   [bas.cc + cattempts]: cattempts, // attempts
//   [bas.cc + cAttempts]: cAttempts, // Attempts
//   [bas.cc + cattempted]: cattempted, // attempted
//   [bas.cc + cAttempted]: cAttempted, // Attempted
//   [bas.cc + cattempting]: cattempting, // attempting
//   [bas.cc + cAttempting]: cAttempting, // Attempting
//   [bas.cc + cmat]: cmat, // mat
//   [bas.cc + cMat]: cMat, // Mat
//   [bas.cc + cformat]: cformat, // format
//   [bas.cc + cFormat]: cFormat, // Format
//   [bas.cc + cformats]: cformats, // formats
//   [bas.cc + cFormats]: cFormats, // Formats
//   [bas.cc + cformatted]: cformatted, // formatted
//   [bas.cc + cFormatted]: cFormatted, // Formatted
//   [bas.cc + cformatting]: cformatting, // formatting
//   [bas.cc + cFormatting]: cFormatting, // Formatting
//   [bas.cc + creformat]: creformat, // reformat
//   [bas.cc + cReformat]: cReformat, // Reformat
//   [bas.cc + creformats]: creformats, // reformats
//   [bas.cc + cReformats]: cReformats, // Reformats
//   [bas.cc + creformated]: creformated, // reformatted
//   [bas.cc + cReformated]: cReformated, // Reformatted
//   [bas.cc + creformating]: creformating, // reformatting
//   [bas.cc + cReformating]: cReformating, // Reformatting
//   [bas.cc + ccorrect]: ccorrect, // correct
//   [bas.cc + cCorrect]: cCorrect, // Correct
//   [bas.cc + ccorrects]: ccorrects, // corrects
//   [bas.cc + cCorrects]: cCorrects, // Corrects
//   [bas.cc + ccorrected]: ccorrected, // corrected
//   [bas.cc + cCorrected]: cCorrected, // Corrected
//   [bas.cc + ccorrectly]: ccorrectly, // correctly
//   [bas.cc + cCorrectly]: cCorrectly, // Correctly
//   [bas.cc + ccorrecting]: ccorrecting, // correcting
//   [bas.cc + cCorrecting]: cCorrecting, // Correcting
//   [bas.cc + cbut]: cbut, // but
//   [bas.cc + cBut]: cBut, // But
//   [bas.cc + crent]: crent, // rent
//   [bas.cc + cRent]: cRent, // Rent
//   [bas.cc + ccurrent]: ccurrent, // current
//   [bas.cc + cCurrent]: cCurrent, // Current
//   [bas.cc + cdelta]: cdelta, // delta
//   [bas.cc + cDelta]: cDelta, // Delta
//   [bas.cc + cbeing]: cbeing, // being
//   [bas.cc + cBeing]: cBeing, // Being
//   [bas.cc + cskip]: cskip, // skip
//   [bas.cc + cSkip]: cSkip, // Skip
//   [bas.cc + cskips]: cskips, // skips
//   [bas.cc + cSkips]: cSkips, // Skips
//   [bas.cc + cskiped]: cskiped, // skiped
//   [bas.cc + cSkiped]: cSkiped, // Skiped
//   [bas.cc + cskiping]: cskiping, // skiping
//   [bas.cc + cSkiping]: cSkiping, // Skiping
//   [bas.cc + chad]: chad, // had
//   [bas.cc + cHad]: cHad, // Had
//   [bas.cc + cchange]: cchange, // change
//   [bas.cc + cChange]: cChange, // Change
//   [bas.cc + cCHANGE]: cCHANGE, // CHANGE
//   [bas.cc + cpush]: cpush, // push
//   [bas.cc + cPush]: cPush, // Push
//   [bas.cc + cPUSH]: cPUSH, // PUSH
//   [bas.cc + cpushes]: cpushes, // pushes
//   [bas.cc + cPushes]: cPushes, // Pushes
//   [bas.cc + cpushed]: cpushed, // pushed
//   [bas.cc + cPushed]: cPushed, // Pushed
//   [bas.cc + cpushing]: cpushing, // pushing
//   [bas.cc + cPushing]: cPushing, // Pushing
//   [bas.cc + cexpand]: cexpand, // expand
//   [bas.cc + cExpand]: cExpand, // Expand
//   [bas.cc + cexpands]: cexpands, // expands
//   [bas.cc + cExpands]: cExpands, // Expands
//   [bas.cc + cexpanded]: cexpanded, // expanded
//   [bas.cc + cExpanded]: cExpanded, // Expanded
//   [bas.cc + cexpanding]: cexpanding, // expanding
//   [bas.cc + cExpanding]: cExpanding, // Expanding
//   [bas.cc + ccall]: ccall, // call
//   [bas.cc + cCall]: cCall, // Call
//   [bas.cc + ccalls]: ccalls, // calls
//   [bas.cc + cCalls]: cCalls, // Calls
//   [bas.cc + ccalled]: ccalled, // called
//   [bas.cc + cCalled]: cCalled, // Called
//   [bas.cc + ccalling]: ccalling, // calling
//   [bas.cc + cCalling]: cCalling, // Calling
//   [bas.cc + clook]: clook, // look
//   [bas.cc + cLook]: cLook, // Look
//   [bas.cc + clooks]: clooks, // looks
//   [bas.cc + cLooks]: cLooks, // Looks
//   [bas.cc + clooked]: clooked, // looked
//   [bas.cc + cLooked]: cLooked, // Looked
//   [bas.cc + clooking]: clooking, // looking
//   [bas.cc + cLooking]: cLooking, // Looking
//   [bas.cc + clookup]: clookup, // lookup
//   [bas.cc + cLookup]: cLookup, // Lookup
//   [bas.cc + celse]: celse, // else
//   [bas.cc + cElse]: cElse, // Else
//   [bas.cc + cfar]: cfar, // far
//   [bas.cc + cFar]: cFar, // Far
//   [bas.cc + cspecify]: cspecify, // specify
//   [bas.cc + cSpecify]: cSpecify, // Specify
//   [bas.cc + csupport]: csupport, // support
//   [bas.cc + cSupport]: cSupport, // Support
//   [bas.cc + csupports]: csupports, // supports
//   [bas.cc + cSupports]: cSupports, // Supports
//   [bas.cc + csupported]: csupported, // supported
//   [bas.cc + cSupported]: cSupported, // Supported
//   [bas.cc + csupporting]: csupporting, // supporting
//   [bas.cc + cSupporting]: cSupporting, // Supporting
//   [bas.cc + cfound]: cfound, // found
//   [bas.cc + cFound]: cFound, // Found
//   [bas.cc + cfounded]: cfounded, // founded
//   [bas.cc + cFounded]: cFounded, // Founded
//   [bas.cc + cunfounded]: cunfounded, // unfounded
//   [bas.cc + cUnfounded]: cUnfounded, // Unfounded
//   [bas.cc + coriginal]: coriginal, // original
//   [bas.cc + cOriginal]: cOriginal, // Original
//   [bas.cc + coriginals]: coriginals, // originals
//   [bas.cc + cOriginals]: cOriginals, // Originals
//   [bas.cc + ccause]: ccause, // cause
//   [bas.cc + cCause]: cCause, // Cause
//   [bas.cc + cbecause]: cbecause, // because
//   [bas.cc + cBecause]: cBecause, // Because
//   [bas.cc + canother]: canother, // another
//   [bas.cc + cAnother]: cAnother, // Another
//   [bas.cc + cparameter]: cparameter, // parameter
//   [bas.cc + cParameter]: cParameter, // Parameter
//   [bas.cc + cparameters]: cparameters, // parameters
//   [bas.cc + cParameters]: cParameters, // Parameters
//   [bas.cc + ctry]: ctry, // try
//   [bas.cc + cTry]: cTry, // Try
//   [bas.cc + ctried]: ctried, // tried
//   [bas.cc + cTried]: cTried, // Tried
//   [bas.cc + ctrying]: ctrying, // trying
//   [bas.cc + cTrying]: cTrying, // Trying
//   [bas.cc + cgain]: cgain, // gain
//   [bas.cc + cGain]: cGain, // Gain
//   [bas.cc + cagain]: cagain, // again
//   [bas.cc + cAgain]: cAgain, // Again
//   [bas.cc + ctent]: ctent, // tent
//   [bas.cc + cTent]: cTent, // Tent
//   [bas.cc + ctents]: ctents, // tents
//   [bas.cc + cTents]: cTents, // Tents
//   [bas.cc + ctenting]: ctenting, // tenting
//   [bas.cc + cTenting]: cTenting, // Tenting
//   [bas.cc + ccontent]: ccontent, // content
//   [bas.cc + cContent]: cContent, // Content
//   [bas.cc + ccontents]: ccontents, // contents
//   [bas.cc + cContents]: cContents, // Contents
//   [bas.cc + cmust]: cmust, // must
//   [bas.cc + cMust]: cMust, // Must
//   [bas.cc + cprompt]: cprompt, // prompt
//   [bas.cc + cPrompt]: cPrompt, // Prompt
//   [bas.cc + cexample]: cexample, // example
//   [bas.cc + cExample]: cExample, // Example
//   [bas.cc + cEXAMPLE]: cEXAMPLE, // EXAMPLE
//   [bas.cc + cstructure]: cstructure, // structure
//   [bas.cc + cStructure]: cStructure, // Structure
//   [bas.cc + cstructured]: cstructured, // structured
//   [bas.cc + cStructured]: cStructured, // Structured
//   [bas.cc + cstructures]: cstructures, // structures
//   [bas.cc + cStructures]: cStructures, // Structures
//   [bas.cc + cmore]: cmore, // more
//   [bas.cc + cMore]: cMore, // More
//   [bas.cc + chas]: chas, // has
//   [bas.cc + cHas]: cHas, // Has
//   [bas.cc + cread]: cread, // read
//   [bas.cc + cRead]: cRead, // Read
//   [bas.cc + creads]: creads, // reads
//   [bas.cc + cReads]: cReads, // Reads
//   [bas.cc + creading]: creading, // reading
//   [bas.cc + cReading]: cReading, // Reading
//   [bas.cc + cready]: cready, // ready
//   [bas.cc + cReady]: cReady, // Ready
//   [bas.cc + cREADY]: cREADY, // READY
//   [bas.cc + calready]: calready, // already
//   [bas.cc + cAlready]: cAlready, // Already
//   [bas.cc + cALREADY]: cALREADY, // ALREADY
//   [bas.cc + cbeen]: cbeen, // been
//   [bas.cc + cBeen]: cBeen, // Been
//   [bas.cc + cfollow]: cfollow, // follow
//   [bas.cc + cFollow]: cFollow, // Follow
//   [bas.cc + cfollowes]: cfollowes, // followes
//   [bas.cc + cFollowes]: cFollowes, // Followes
//   [bas.cc + cfollowed]: cfollowed, // followed
//   [bas.cc + cFollowed]: cFollowed, // Followed
//   [bas.cc + cfollowing]: cfollowing, // following
//   [bas.cc + cFollowing]: cFollowing, // Following
//   [bas.cc + cdefinition]: cdefinition, // definition
//   [bas.cc + cDefinition]: cDefinition, // Definition
//   [bas.cc + cdefinitions]: cdefinitions, // definitions
//   [bas.cc + cDefinitions]: cDefinitions, // Definitions
//   [bas.cc + cdone]: cdone, // done
//   [bas.cc + cDone]: cDone, // Done
//   [bas.cc + cDONE]: cDONE, // DONE
//   [bas.cc + cphase]: cphase, // phase
//   [bas.cc + cPhase]: cPhase, // Phase
//   [bas.cc + cphases]: cphases, // phases
//   [bas.cc + cPhases]: cPhases, // Phases
//   [bas.cc + cphased]: cphased, // phased
//   [bas.cc + cPhased]: cPhased, // Phased
//   [bas.cc + cphasing]: cphasing, // phasing
//   [bas.cc + cPhasing]: cPhasing, // Phasing
//   [bas.cc + ctick]: ctick, // tick
//   [bas.cc + cTick]: cTick, // Tick
//   [bas.cc + cyay]: cyay, // yay
//   [bas.cc + cYay]: cYay, // Yay
//   [bas.cc + cYAY]: cYAY, // YAY
//   [bas.cc + ctag]: ctag, // tag
//   [bas.cc + cTag]: cTag, // Tag
//   [bas.cc + ctags]: ctags, // tags
//   [bas.cc + cTags]: cTags, // Tags
//   [bas.cc + ctagged]: ctagged, // tagged
//   [bas.cc + cTagged]: cTagged, // Tagged
//   [bas.cc + ctagging]: ctagging, // tagging
//   [bas.cc + cTagging]: cTagging, // Tagging
//   [bas.cc + clit]: clit, // lit
//   [bas.cc + cLit]: cLit, // Lit
//   [bas.cc + csplit]: csplit, // split
//   [bas.cc + cSplit]: cSplit, // Split
//   [bas.cc + csplits]: csplits, // splits
//   [bas.cc + cSplits]: cSplits, // Splits
//   [bas.cc + csplitting]: csplitting, // splitting
//   [bas.cc + cSplitting]: cSplitting, // Splitting
//   [bas.cc + cdoing]: cdoing, // doing
//   [bas.cc + cDoing]: cDoing, // Doing
//   [bas.cc + cstraight]: cstraight, // straight
//   [bas.cc + cStraight]: cStraight, // Straight
//   [bas.cc + cbroker]: cbroker, // broker
//   [bas.cc + cBroker]: cBroker, // Broker
//   [bas.cc + cbrokers]: cbrokers, // brokers
//   [bas.cc + cBrokers]: cBrokers, // Brokers
//   [bas.cc + cpost]: cpost, // post
//   [bas.cc + cPost]: cPost, // Post
//   [bas.cc + cposts]: cposts, // posts
//   [bas.cc + cPosts]: cPosts, // Posts
//   [bas.cc + cposted]: cposted, // posted
//   [bas.cc + cPosted]: cPosted, // Posted
//   [bas.cc + cposting]: cposting, // posting
//   [bas.cc + cPosting]: cPosting, // Posting
//   [bas.cc + cmerge]: cmerge, // merge
//   [bas.cc + cMerge]: cMerge, // Merge
//   [bas.cc + cMERGE]: cMERGE, // MERGE
//   [bas.cc + cmerges]: cmerges, // merges
//   [bas.cc + cMerges]: cMerges, // Merges
//   [bas.cc + cmerged]: cmerged, // merged
//   [bas.cc + cMerged]: cMerged, // Merged
//   [bas.cc + cMERGED]: cMERGED, // MERGED
//   [bas.cc + cmerging]: cmerging, // merging
//   [bas.cc + cMerging]: cMerging, // Merging
//   [bas.cc + cinclude]: cinclude, // include
//   [bas.cc + cInclude]: cInclude, // Include
//   [bas.cc + cincludes]: cincludes, // includes
//   [bas.cc + cIncludes]: cIncludes, // Includes
//   [bas.cc + cincluded]: cincluded, // included
//   [bas.cc + cIncluded]: cIncluded, // Included
//   [bas.cc + cincluding]: cincluding, // including
//   [bas.cc + cIncluding]: cIncluding, // Including
//   [bas.cc + cfinal]: cfinal, // final
//   [bas.cc + cFinal]: cFinal, // Final
//   [bas.cc + cfinals]: cfinals, // finals
//   [bas.cc + cFinals]: cFinals, // Finals
//   [bas.cc + cfinally]: cfinally, // finally
//   [bas.cc + cFinally]: cFinally, // Finally
//   [bas.cc + ccaught]: ccaught, // caught
//   [bas.cc + cCaught]: cCaught, // Caught
//   [bas.cc + cflat]: cflat, // flat
//   [bas.cc + cFlat]: cFlat, // Flat
//   [bas.cc + cflats]: cflats, // flats
//   [bas.cc + cFlats]: cFlats, // Flats
//   [bas.cc + cflatten]: cflatten, // flatten
//   [bas.cc + cFlatten]: cFlatten, // Flatten
//   [bas.cc + cflattened]: cflattened, // flattened
//   [bas.cc + cFlattened]: cFlattened, // Flattened
//   [bas.cc + cflattening]: cflattening, // flattening
//   [bas.cc + cFlattening]: cFlattening, // Flattening
//   [bas.cc + cside]: cside, // side
//   [bas.cc + cSide]: cSide, // Side
//   [bas.cc + csides]: csides, // sides
//   [bas.cc + cSides]: cSides, // Sides
//   [bas.cc + csided]: csided, // sided
//   [bas.cc + cSided]: cSided, // Sided
//   [bas.cc + csiding]: csiding, // siding
//   [bas.cc + cSiding]: cSiding, // Siding
//   [bas.cc + cinside]: cinside, // inside
//   [bas.cc + cInside]: cInside, // Inside
//   [bas.cc + ctarget]: ctarget, // target
//   [bas.cc + cTarget]: cTarget, // Target
//   [bas.cc + ctargets]: ctargets, // targets
//   [bas.cc + cTargets]: cTargets, // Targets
//   [bas.cc + ctargeted]: ctargeted, // targeted
//   [bas.cc + cTargeted]: cTargeted, // Targeted
//   [bas.cc + ctargeting]: ctargeting, // targeting
//   [bas.cc + cTargeting]: cTargeting, // Targeting
//   [bas.cc + cmodify]: cmodify, // modify
//   [bas.cc + cModify]: cModify, // Modify
//   [bas.cc + cmodified]: cmodified, // modified
//   [bas.cc + cModified]: cModified, // Modified
//   [bas.cc + cmodifies]: cmodifies, // modifies
//   [bas.cc + cModifies]: cModifies, // Modifies
//   [bas.cc + cmodifying]: cmodifying, // modifying
//   [bas.cc + cModifying]: cModifying, // Modifying
//   [bas.cc + creference]: creference, // reference
//   [bas.cc + cReference]: cReference, // Reference
//   [bas.cc + creferences]: creferences, // references
//   [bas.cc + cReferences]: cReferences, // References
//   [bas.cc + creferenced]: creferenced, // referenced
//   [bas.cc + cReferenced]: cReferenced, // Referenced
//   [bas.cc + creferencing]: creferencing, // referencing
//   [bas.cc + cReferencing]: cReferencing, // Referencing
//   [bas.cc + cwrite]: cwrite, // write
//   [bas.cc + cWrite]: cWrite, // Write
//   [bas.cc + cwrites]: cwrites, // writes
//   [bas.cc + cWrites]: cWrites, // Writes
//   [bas.cc + cwritten]: cwritten, // written
//   [bas.cc + cWritten]: cWritten, // Written
//   [bas.cc + cwriting]: cwriting, // writing
//   [bas.cc + cWriting]: cWriting, // Writing
//   [bas.cc + cscan]: cscan, // scan
//   [bas.cc + cScan]: cScan, // Scan
//   [bas.cc + cscans]: cscans, // scans
//   [bas.cc + cScans]: cScans, // Scans
//   [bas.cc + cscanned]: cscanned, // scanned
//   [bas.cc + cScanned]: cScanned, // Scanned
//   [bas.cc + cscanning]: cscanning, // scanning
//   [bas.cc + cScanning]: cScanning, // Scanning
//   [bas.cc + cdirect]: cdirect, // direct
//   [bas.cc + cDirect]: cDirect, // Direct
//   [bas.cc + cdirects]: cdirects, // directs
//   [bas.cc + cDirects]: cDirects, // Directs
//   [bas.cc + cdirected]: cdirected, // directed
//   [bas.cc + cDirected]: cDirected, // Directed
//   [bas.cc + cdirector]: cdirector, // director
//   [bas.cc + cDirector]: cDirector, // Director
//   [bas.cc + cdirecting]: cdirecting, // directing
//   [bas.cc + cDirecting]: cDirecting, // Directing
//   [bas.cc + cdirectors]: cdirectors, // directors
//   [bas.cc + cDirectors]: cDirectors, // Directors
//   [bas.cc + cdirectory]: cdirectory, // directory
//   [bas.cc + cDirectory]: cDirectory, // Directory
//   [bas.cc + cdirectories]: cdirectories, // directories
//   [bas.cc + cDirectories]: cDirectories, // Directories
//   [bas.cc + cchive]: cchive, // chive
//   [bas.cc + cChive]: cChive, // Chive
//   [bas.cc + cchives]: cchives, // chives
//   [bas.cc + cChives]: cChives, // Chives
//   [bas.cc + carchive]: carchive, // archive
//   [bas.cc + cArchive]: cArchive, // Archive
//   [bas.cc + carchived]: carchived, // archived
//   [bas.cc + cArchived]: cArchived, // Archived
//   [bas.cc + carchives]: carchives, // archives
//   [bas.cc + cArchives]: cArchives, // Archives
//   [bas.cc + carchiving]: carchiving, // archiving
//   [bas.cc + cArchiving]: cArchiving, // Archiving
//   [bas.cc + ccop]: ccop, // cop
//   [bas.cc + cCop]: cCop, // Cop
//   [bas.cc + ccops]: ccops, // cops
//   [bas.cc + cCops]: cCops, // Cops
//   [bas.cc + ccopy]: ccopy, // copy
//   [bas.cc + cCopy]: cCopy, // Copy
//   [bas.cc + ccopies]: ccopies, // copies
//   [bas.cc + cCopies]: cCopies, // Copies
//   [bas.cc + ccopied]: ccopied, // copied
//   [bas.cc + cCopied]: cCopied, // Copied
//   [bas.cc + ccopying]: ccopying, // copying
//   [bas.cc + cCopying]: cCopying, // Copying
//   [bas.cc + csuccess]: csuccess, // success
//   [bas.cc + cSuccess]: cSuccess, // Success
//   [bas.cc + csuccesses]: csuccesses, // successes
//   [bas.cc + cSuccesses]: cSuccesses, // Successes
//   [bas.cc + csuccessful]: csuccessful, // successful
//   [bas.cc + cSuccessful]: cSuccessful, // Successful
//   [bas.cc + cpack]: cpack, // pack
//   [bas.cc + cPack]: cPack, // Pack
//   [bas.cc + cpacks]: cpacks, // packs
//   [bas.cc + cPacks]: cPacks, // Packs
//   [bas.cc + cpacked]: cpacked, // packed
//   [bas.cc + cPacked]: cPacked, // Packed
//   [bas.cc + cpacking]: cpacking, // packing
//   [bas.cc + cPacking]: cPacking, // Packing
//   [bas.cc + cpackage]: cpackage, // package
//   [bas.cc + cPackage]: cPackage, // Package
//   [bas.cc + cpackages]: cpackages, // packages
//   [bas.cc + cPackages]: cPackages, // Packages
//   [bas.cc + cpackaged]: cpackaged, // packaged
//   [bas.cc + cPackaged]: cPackaged, // Packaged
//   [bas.cc + cpackaging]: cpackaging, // packaging
//   [bas.cc + cPackaging]: cPackaging, // Packaging
//   [bas.cc + canalyze]: canalyze, // analyze
//   [bas.cc + cAnalyze]: cAnalyze, // Analyze
//   [bas.cc + canalyzes]: canalyzes, // analyzes
//   [bas.cc + cAnalyzes]: cAnalyzes, // Analyzes
//   [bas.cc + canalyzed]: canalyzed, // analyzed
//   [bas.cc + cAnalyzed]: cAnalyzed, // Analyzed
//   [bas.cc + canalyzing]: canalyzing, // analyzing
//   [bas.cc + cAnalyzing]: cAnalyzing, // Analyzing
//   [bas.cc + csame]: csame, // same
//   [bas.cc + cSame]: cSame, // Same
//   [bas.cc + cthere]: cthere, // there
//   [bas.cc + cThere]: cThere, // There
//   [bas.cc + cbracket]: cbracket, // bracket
//   [bas.cc + cBracket]: cBracket, // Bracket
//   [bas.cc + cbrackets]: cbrackets, // brackets
//   [bas.cc + cBrackets]: cBrackets, // Brackets
//   [bas.cc + cbracketed]: cbracketed, // bracketed
//   [bas.cc + cBracketed]: cBracketed, // Bracketed
//   [bas.cc + cbracketing]: cbracketing, // bracketing
//   [bas.cc + cBracketing]: cBracketing, // Bracketing
//   [bas.cc + cregular]: cregular, // regular
//   [bas.cc + cRegular]: cRegular, // Regular
//   [bas.cc + cexpression]: cexpression, // expression
//   [bas.cc + cExpression]: cExpression, // Expression
//   [bas.cc + cexpressions]: cexpressions, // expressions
//   [bas.cc + cExpressions]: cExpressions, // Expressions
//   [bas.cc + clexical]: clexical, // lexical
//   [bas.cc + cLexical]: cLexical, // Lexical
//   [bas.cc + clexicon]: clexicon, // lexicon
//   [bas.cc + cLexicon]: cLexicon, // Lexicon
//   [bas.cc + clexicons]: clexicons, // lexicons
//   [bas.cc + cLexicons]: cLexicons, // Lexicons
//   [bas.cc + cjust]: cjust, // just
//   [bas.cc + cJust]: cJust, // Just
//   [bas.cc + cjustice]: cjustice, // justice
//   [bas.cc + cJustice]: cJustice, // Justice
//   [bas.cc + cjustified]: cjustified, // justified
//   [bas.cc + cJustified]: cJustified, // Justified
//   [bas.cc + cadjust]: cadjust, // adjust
//   [bas.cc + cAdjust]: cAdjust, // Adjust
//   [bas.cc + cadjusts]: cadjusts, // adjusts
//   [bas.cc + cAdjusts]: cAdjusts, // Adjusts
//   [bas.cc + cadjusted]: cadjusted, // adjusted
//   [bas.cc + cAdjusted]: cAdjusted, // Adjusted
//   [bas.cc + cadjusting]: cadjusting, // adjusting
//   [bas.cc + cAdjusting]: cAdjusting, // Adjusting
//   [bas.cc + csleep]: csleep, // sleep
//   [bas.cc + cSleep]: cSleep, // Sleep
//   [bas.cc + csleeps]: csleeps, // sleeps
//   [bas.cc + cSleeps]: cSleeps, // Sleeps
//   [bas.cc + csleeped]: csleeped, // sleeped
//   [bas.cc + cSleeped]: cSleeped, // Sleeped
//   [bas.cc + csleeping]: csleeping, // sleeping
//   [bas.cc + cSleeping]: cSleeping, // Sleeping
//   [bas.cc + cleaf]: cleaf, // leaf
//   [bas.cc + cLeaf]: cLeaf, // Leaf
//   [bas.cc + centry]: centry, // entry
//   [bas.cc + cEntry]: cEntry, // Entry
//   [bas.cc + centries]: centries, // entries
//   [bas.cc + cEntries]: cEntries, // Entries
//   [bas.cc + centity]: centity, // entity
//   [bas.cc + cEntity]: cEntity, // Entity
//   [bas.cc + cmay]: cmay, // may
//   [bas.cc + cMay]: cMay, // May
//   [bas.cc + conly]: conly, // only
//   [bas.cc + cOnly]: cOnly, // Only
//   [bas.cc + csuch]: csuch, // such
//   [bas.cc + cSuch]: cSuch, // Such
//   [bas.cc + cgeneration]: cgeneration, // generation
//   [bas.cc + cGeneration]: cGeneration, // Generation
//   [bas.cc + cDemocratic]: cDemocratic, // Democratic
//   [bas.cc + cRepublic]: cRepublic, // Republic
//   [bas.cc + cCentral]: cCentral, // Central
//   [bas.cc + cAfrican]: cAfrican, // African
//   [bas.cc + cPapua]: cPapua, // Papua
//   [bas.cc + cTrinidad]: cTrinidad, // Trinidad
//   [bas.cc + cTabago]: cTabago, // Tabago
//   [bas.cc + cUnited]: cUnited, // United
//   [bas.cc + cArab]: cArab, // Arab
//   [bas.cc + cEmirates]: cEmirates, // Emirates
//   [bas.cc + cStates]: cStates, // States
//   [bas.cc + cAmerica]: cAmerica, // America
//   [bas.cc + cliver]: cliver, // liver
//   [bas.cc + cLiver]: cLiver, // Liver
//   [bas.cc + ccountry]: ccountry, // country
//   [bas.cc + cCountry]: cCountry, // Country
//   [bas.cc + ccountries]: ccountries, // countries
//   [bas.cc + cCountries]: cCountries, // Countries
//   [bas.cc + cknot]: cknot, // knot
//   [bas.cc + cKnot]: cKnot, // Knot
//   [bas.cc + cknots]: cknots, // knots
//   [bas.cc + cKnots]: cKnots, // Knots
//   [bas.cc + clanguage]: clanguage, // language
//   [bas.cc + cLanguage]: cLanguage, // Language
//   [bas.cc + clanguages]: clanguages, // languages
//   [bas.cc + cLanguages]: cLanguages, // Languages
//   [bas.cc + csole]: csole, // sole
//   [bas.cc + cSole]: cSole, // Sole
//   [bas.cc + cconsole]: cconsole, // console
//   [bas.cc + cConsole]: cConsole, // Console
//   [bas.cc + cboss]: cboss, // boss
//   [bas.cc + cBoss]: cBoss, // Boss
//   [bas.cc + cpanic]: cpanic, // panic
//   [bas.cc + cPanic]: cPanic, // Panic
//   [bas.cc + cslow]: cslow, // slow
//   [bas.cc + cSlow]: cSlow, // Slow
//   [bas.cc + cgot]: cgot, // got
//   [bas.cc + cGot]: cGot, // Got
//   [bas.cc + cmiss]: cmiss, // miss
//   [bas.cc + cMiss]: cMiss, // Miss
//   [bas.cc + cecho]: cecho, // echo
//   [bas.cc + cEcho]: cEcho, // Echo
//   [bas.cc + cincrement]: cincrement, // increment
//   [bas.cc + cIncrement]: cIncrement, // Increment
//   [bas.cc + cincrements]: cincrements, // increments
//   [bas.cc + cIncrements]: cIncrements, // Increments
//   [bas.cc + cincremented]: cincremented, // incremented
//   [bas.cc + cIncremented]: cIncremented, // Incremented
//   [bas.cc + cincrementing]: cincrementing, // incrementing
//   [bas.cc + cIncrementing]: cIncrementing, // Incrementing
//   [bas.cc + cforce]: cforce, // force
//   [bas.cc + cForce]: cForce, // Force
//   [bas.cc + cforced]: cforced, // forced
//   [bas.cc + cForced]: cForced, // Forced
//   [bas.cc + cforcing]: cforcing, // forcing
//   [bas.cc + cForcing]: cForcing, // Forcing
//   [bas.cc + cforces]: cforces, // forces
//   [bas.cc + cForces]: cForces, // Forces
//   [bas.cc + cexecutrix]: cexecutrix, // executrix
//   [bas.cc + cExecutrix]: cExecutrix, // Executrix
//   [bas.cc + cframework]: cframework, // framework
//   [bas.cc + cFramework]: cFramework, // Framework
//   [bas.cc + cboot]: cboot, // boot
//   [bas.cc + cBoot]: cBoot, // Boot
//   [bas.cc + cstrap]: cstrap, // strap
//   [bas.cc + cStrap]: cStrap, // Strap
//   [bas.cc + csetup]: csetup, // setup
//   [bas.cc + cSetup]: cSetup, // Setup
//   [bas.cc + csetups]: csetups, // setups
//   [bas.cc + cSetups]: cSetups, // Setups
//   [bas.cc + csynchronous]: csynchronous, // synchronous
//   [bas.cc + cSynchronous]: cSynchronous, // Synchronous
//   [bas.cc + csynchronously]: csynchronously, // synchronously
//   [bas.cc + cSynchronously]: cSynchronously, // Synchronously
//   [bas.cc + cappend]: cappend, // append
//   [bas.cc + cAppend]: cAppend, // Append
//   [bas.cc + cappends]: cappends, // appends
//   [bas.cc + cAppends]: cAppends, // Appends
//   [bas.cc + cappended]: cappended, // appended
//   [bas.cc + cAppended]: cAppended, // Appended
//   [bas.cc + cappending]: cappending, // appending
//   [bas.cc + cAppending]: cAppending, // Appending
//   [bas.cc + cmoment]: cmoment, // moment
//   [bas.cc + cMoment]: cMoment, // Moment
//   [bas.cc + cmoments]: cmoments, // moments
//   [bas.cc + cMoments]: cMoments, // Moments
//   [bas.cc + ccompute]: ccompute, // compute
//   [bas.cc + cCompute]: cCompute, // Compute
//   [bas.cc + ccomputes]: ccomputes, // computes
//   [bas.cc + cComputes]: cComputes, // Computes
//   [bas.cc + ccomputer]: ccomputer, // computer
//   [bas.cc + cComputer]: cComputer, // Computer
//   [bas.cc + ccomputers]: ccomputers, // computers
//   [bas.cc + cComputers]: cComputers, // Computers
//   [bas.cc + ccomputing]: ccomputing, // computing
//   [bas.cc + cComputing]: cComputing, // Computing
//   [bas.cc + cschema]: cschema, // schema
//   [bas.cc + cSchema]: cSchema, // Schema
//   [bas.cc + cdot]: cdot, // dot
//   [bas.cc + cDot]: cDot, // Dot
//   [bas.cc + clogic]: clogic, // logic
//   [bas.cc + cLogic]: cLogic, // Logic
//   [bas.cc + clogical]: clogical, // logical
//   [bas.cc + cLogical]: cLogical, // Logical
//   [bas.cc + charness]: charness, // harness
//   [bas.cc + cHarness]: cHarness, // Harness
//   [bas.cc + cHARNESS]: cHARNESS, // HARNESS
//   [bas.cc + cuniversal]: cuniversal, // universal
//   [bas.cc + cUniversal]: cUniversal, // Universal
//   [bas.cc + cmath]: cmath, // math
//   [bas.cc + cMath]: cMath, // Math
//   [bas.cc + cmathematics]: cmathematics, // mathematics
//   [bas.cc + cMathematics]: cMathematics, // Mathematics
//   [bas.cc + cmathematician]: cmathematician, // mathematician
//   [bas.cc + cMathematician]: cMathematician, // Mathematician
//   [bas.cc + cmathematicians]: cmathematicians, // mathematicians
//   [bas.cc + cMathematicians]: cMathematicians, // Mathematicians
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   [bas.cc + cAbsolute]: cAbsolute, // Absolute
//   [bas.cc + cAcid]: cAcid, // Acid
//   [bas.cc + cAir]: cAir, // Air
//   [bas.cc + cSuperiority]: cSuperiority, // Superiority
//   [bas.cc + cAlabaster]: cAlabaster, // Alabaster
//   [bas.cc + cAlice]: cAlice, // Alice
//   [bas.cc + cAlloy]: cAlloy, // Alloy
//   [bas.cc + cAmaranth]: cAmaranth, // Amaranth
//   [bas.cc + cAndroid]: cAndroid, // Android
//   [bas.cc + cAntique]: cAntique, // Antique
//   [bas.cc + cBrass]: cBrass, // Brass
//   [bas.cc + cBronze]: cBronze, // Bronze
//   [bas.cc + cApple]: cApple, // Apple
//   [bas.cc + cApricot]: cApricot, // Apricot
//   [bas.cc + cArctic]: cArctic, // Arctic
//   [bas.cc + cArmy]: cArmy, // Army
//   [bas.cc + cArylide]: cArylide, // Arylide
//   [bas.cc + cAtomic]: cAtomic, // Atomic
//   [bas.cc + cBaby]: cBaby, // Baby
//   [bas.cc + cEyes]: cEyes, // Eyes
//   [bas.cc + cPowder]: cPowder, // Powder
//   [bas.cc + cBaker]: cBaker, // Baker
//   [bas.cc + cMiller]: cMiller, // Miller
//   [bas.cc + cBanana]: cBanana, // Banana
//   [bas.cc + cMania]: cMania, // Mania
//   [bas.cc + cBarbie]: cBarbie, // Barbie
//   [bas.cc + cBarn]: cBarn, // Barn
//   [bas.cc + cBattleship]: cBattleship, // Battleship
//   [bas.cc + cBeau]: cBeau, // Beau
//   [bas.cc + cDazzled]: cDazzled, // Dazzled
//   [bas.cc + cBitter]: cBitter, // Bitter
//   [bas.cc + csweet]: csweet, // sweet
//   [bas.cc + cSweet]: cSweet, // Sweet
//   [bas.cc + cBittersweet]: cBittersweet, // Bittersweet
//   [bas.cc + cShimmer]: cShimmer, // Shimmer
//   [bas.cc + cBean]: cBean, // Bean
//   [bas.cc + cChocolate]: cChocolate, // Chocolate
//   [bas.cc + cShadows]: cShadows, // Shadows
//   [bas.cc + cBlanched]: cBlanched, // Blanched
//   [bas.cc + cBlast]: cBlast, // Blast
//   [bas.cc + cBlizzard]: cBlizzard, // Blizzard
//   [bas.cc + cBlood]: cBlood, // Blood
//   [bas.cc + cCrayola]: cCrayola, // Crayola
//   [bas.cc + cMunsell]: cMunsell, // Munsell
//   [bas.cc + cPantone]: cPantone, // Pantone
//   [bas.cc + cPigment]: cPigment, // Pigment
//   [bas.cc + cBell]: cBell, // Bell
//   [bas.cc + cwheel]: cwheel, // wheel
//   [bas.cc + cWheel]: cWheel, // Wheel
//   [bas.cc + cwheels]: cwheels, // wheels
//   [bas.cc + cWheels]: cWheels, // Wheels
//   [bas.cc + cJeans]: cJeans, // Jeans
//   [bas.cc + cYonder]: cYonder, // Yonder
//   [bas.cc + cBottle]: cBottle, // Bottle
//   [bas.cc + cbrick]: cbrick, // brick
//   [bas.cc + cBrick]: cBrick, // Brick
//   [bas.cc + cbricks]: cbricks, // bricks
//   [bas.cc + cBricks]: cBricks, // Bricks
//   [bas.cc + cBright]: cBright, // Bright
//   [bas.cc + cBrilliant]: cBrilliant, // Brilliant
//   [bas.cc + cRacing]: cRacing, // Racing
//   [bas.cc + cSugar]: cSugar, // Sugar
//   [bas.cc + cBrunswick]: cBrunswick, // Brunswick
//   [bas.cc + cBud]: cBud, // Bud
//   [bas.cc + cBurly]: cBurly, // Burly
//   [bas.cc + cBurnished]: cBurnished, // Burnished
//   [bas.cc + cBurnt]: cBurnt, // Burnt
//   [bas.cc + cCadet]: cCadet, // Cadet
//   [bas.cc + cCafe]: cCafe, // Cafe
//   [bas.cc + cCambridge]: cCambridge, // Cambridge
//   [bas.cc + cCameo]: cCameo, // Cameo
//   [bas.cc + cCaput]: cCaput, // Caput
//   [bas.cc + cMortuum]: cMortuum, // Mortuum
//   [bas.cc + cCaribbean]: cCaribbean, // Caribbean
//   [bas.cc + cCarnation]: cCarnation, // Carnation
//   [bas.cc + cCarrot]: cCarrot, // Carrot
//   [bas.cc + cCastleton]: cCastleton, // Castleton
//   [bas.cc + cCedar]: cCedar, // Cedar
//   [bas.cc + cChest]: cChest, // Chest
//   [bas.cc + cCeladon]: cCeladon, // Celadon
//   [bas.cc + cCeltic]: cCeltic, // Celtic
//   [bas.cc + cCharleston]: cCharleston, // Charleston
//   [bas.cc + cCharm]: cCharm, // Charm
//   [bas.cc + cChartreuse]: cChartreuse, // Chartreuse
//   [bas.cc + cCherry]: cCherry, // Cherry
//   [bas.cc + cBlossom]: cBlossom, // Blossom
//   [bas.cc + cChestnut]: cChestnut, // Chestnut
//   [bas.cc + cChrome]: cChrome, // Chrome
//   [bas.cc + cCinnamon]: cCinnamon, // Cinnamon
//   [bas.cc + cCocoa]: cCocoa, // Cocoa
//   [bas.cc + cCoffee]: cCoffee, // Coffee
//   [bas.cc + cColumbia]: cColumbia, // Columbia
//   [bas.cc + cCool]: cCool, // Cool
//   [bas.cc + cflower]: cflower, // flower
//   [bas.cc + cFlower]: cFlower, // Flower
//   [bas.cc + cflowers]: cflowers, // flowers
//   [bas.cc + cFlowers]: cFlowers, // Flowers
//   [bas.cc + csilk]: csilk, // silk
//   [bas.cc + cSilk]: cSilk, // Silk
//   [bas.cc + cCosmic]: cCosmic, // Cosmic
//   [bas.cc + cLatte]: cLatte, // Latte
//   [bas.cc + cCoyote]: cCoyote, // Coyote
//   [bas.cc + cCotton]: cCotton, // Cotton
//   [bas.cc + cCyber]: cCyber, // Cyber
//   [bas.cc + cDark]: cDark, // Dark
//   [bas.cc + cByzantium]: cByzantium, // Byzantium
//   [bas.cc + cElectric]: cElectric, // Electric
//   [bas.cc + cKhaki]: cKhaki, // Khaki
//   [bas.cc + cHorse]: cHorse, // Horse
//   [bas.cc + cHorses]: cHorses, // Horses
//   [bas.cc + cMoss]: cMoss, // Moss
//   [bas.cc + cPastel]: cPastel, // Pastel
//   [bas.cc + cSky]: cSky, // Sky
//   [bas.cc + cSlate]: cSlate, // Slate
//   [bas.cc + cSpring]: cSpring, // Spring
//   [bas.cc + cDartmouth]: cDartmouth, // Dartmouth
//   [bas.cc + cDavys]: cDavys, // Davys
//   [bas.cc + cCerise]: cCerise, // Cerise
//   [bas.cc + cSparkle]: cSparkle, // Sparkle
//   [bas.cc + cDim]: cDim, // Dim
//   [bas.cc + cDodger]: cDodger, // Dodger
//   [bas.cc + cDogwood]: cDogwood, // Dogwood
//   [bas.cc + cDuke]: cDuke, // Duke
//   [bas.cc + cDutch]: cDutch, // Dutch
//   [bas.cc + cEarth]: cEarth, // Earth
//   [bas.cc + cEerie]: cEerie, // Eerie
//   [bas.cc + cEton]: cEton, // Eton
//   [bas.cc + cFalu]: cFalu, // Falu
//   [bas.cc + cFashion]: cFashion, // Fashion
//   [bas.cc + cFern]: cFern, // Fern
//   [bas.cc + cFiery]: cFiery, // Fiery
//   [bas.cc + cFire]: cFire, // Fire
//   [bas.cc + cEngine]: cEngine, // Engine
//   [bas.cc + cFloral]: cFloral, // Floral
//   [bas.cc + cFluorescent]: cFluorescent, // Fluorescent
//   [bas.cc + cForest]: cForest, // Forest
//   [bas.cc + cFrost]: cFrost, // Frost
//   [bas.cc + cbite]: cbite, // bite
//   [bas.cc + cFuzzy]: cFuzzy, // Fuzzy
//   [bas.cc + cWuzzy]: cWuzzy, // Wuzzy
//   [bas.cc + cGhost]: cGhost, // Ghost
//   [bas.cc + cGlossy]: cGlossy, // Glossy
//   [bas.cc + cMetal]: cMetal, // Metal
//   [bas.cc + cMetallic]: cMetallic, // Metallic
//   [bas.cc + cFusion]: cFusion, // Fusion
//   [bas.cc + cPoppy]: cPoppy, // Poppy
//   [bas.cc + cGranite]: cGranite, // Granite
//   [bas.cc + cGranny]: cGranny, // Granny
//   [bas.cc + cSmith]: cSmith, // Smith
//   [bas.cc + cLizard]: cLizard, // Lizard
//   [bas.cc + cGun]: cGun, // Gun
//   [bas.cc + cHarvest]: cHarvest, // Harvest
//   [bas.cc + cHeat]: cHeat, // Heat
//   [bas.cc + cWave]: cWave, // Wave
//   [bas.cc + cHollywood]: cHollywood, // Hollywood
//   [bas.cc + cHoney]: cHoney, // Honey
//   [bas.cc + cdew]: cdew, // dew
//   [bas.cc + cHonolulu]: cHonolulu, // Honolulu
//   [bas.cc + cHookers]: cHookers, // Hookers
//   [bas.cc + cHot]: cHot, // Hot
//   [bas.cc + cHunter]: cHunter, // Hunter
//   [bas.cc + cIce]: cIce, // Ice
//   [bas.cc + cIlluminating]: cIlluminating, // Illuminating
//   [bas.cc + cImperial]: cImperial, // Imperial
//   [bas.cc + cworm]: cworm, // worm
//   [bas.cc + cIndependence]: cIndependence, // Independence
//   [bas.cc + cIndian]: cIndian, // Indian
//   [bas.cc + cDye]: cDye, // Dye
//   [bas.cc + cnational]: cnational, // national
//   [bas.cc + cNational]: cNational, // National
//   [bas.cc + cnationals]: cnationals, // nationals
//   [bas.cc + cNationals]: cNationals, // Nationals
//   [bas.cc + cInternational]: cInternational, // International
//   [bas.cc + cAerospace]: cAerospace, // Aerospace
//   [bas.cc + cEngineering]: cEngineering, // Engineering
//   [bas.cc + cBridge]: cBridge, // Bridge
//   [bas.cc + cCarmine]: cCarmine, // Carmine
//   [bas.cc + cjazz]: cjazz, // jazz
//   [bas.cc + cJazz]: cJazz, // Jazz
//   [bas.cc + cberry]: cberry, // berry
//   [bas.cc + cBerry]: cBerry, // Berry
//   [bas.cc + cjam]: cjam, // jam
//   [bas.cc + cJam]: cJam, // Jam
//   [bas.cc + cKelly]: cKelly, // Kelly
//   [bas.cc + cKombu]: cKombu, // Kombu
//   [bas.cc + cLanguid]: cLanguid, // Languid
//   [bas.cc + cLapis]: cLapis, // Lapis
//   [bas.cc + cLazuli]: cLazuli, // Lazuli
//   [bas.cc + cLaser]: cLaser, // Laser
//   [bas.cc + cLaurel]: cLaurel, // Laurel
//   [bas.cc + cLawn]: cLawn, // Lawn
//   [bas.cc + cCurry]: cCurry, // Curry
//   [bas.cc + cGlacier]: cGlacier, // Glacier
//   [bas.cc + cMeringue]: cMeringue, // Meringue
//   [bas.cc + cLight]: cLight, // Light
//   [bas.cc + cCoral]: cCoral, // Coral
//   [bas.cc + cSteel]: cSteel, // Steel
//   [bas.cc + cLuster]: cLuster, // Luster
//   [bas.cc + cLincoln]: cLincoln, // Lincoln
//   [bas.cc + cLiseran]: cLiseran, // Liseran
//   [bas.cc + cLittle]: cLittle, // Little
//   [bas.cc + cBoy]: cBoy, // Boy
//   [bas.cc + cDogs]: cDogs, // Dogs
//   [bas.cc + cOrgan]: cOrgan, // Organ
//   [bas.cc + cMacaroni]: cMacaroni, // Macaroni
//   [bas.cc + cCheese]: cCheese, // Cheese
//   [bas.cc + cMadder]: cMadder, // Madder
//   [bas.cc + cHaze]: cHaze, // Haze
//   [bas.cc + cMagic]: cMagic, // Magic
//   [bas.cc + cMajorelle]: cMajorelle, // Majorelle
//   [bas.cc + cminimum]: cminimum, // minimum
//   [bas.cc + cMinimum]: cMinimum, // Minimum
//   [bas.cc + cminimums]: cminimums, // minimums
//   [bas.cc + cMinimums]: cMinimums, // Minimums
//   [bas.cc + cmaximum]: cmaximum, // maximum
//   [bas.cc + cMaximum]: cMaximum, // Maximum
//   [bas.cc + cmaximums]: cmaximums, // maximums
//   [bas.cc + cMaximums]: cMaximums, // Maximums
//   [bas.cc + cMaya]: cMaya, // Maya
//   [bas.cc + cMedium]: cMedium, // Medium
//   [bas.cc + cMellow]: cMellow, // Mellow
//   [bas.cc + cweed]: cweed, // weed
//   [bas.cc + cWeed]: cWeed, // Weed
//   [bas.cc + cweeds]: cweeds, // weeds
//   [bas.cc + cWeeds]: cWeeds, // Weeds
//   [bas.cc + cweeded]: cweeded, // weeded
//   [bas.cc + cWeeded]: cWeeded, // Weeded
//   [bas.cc + cSeaweed]: cSeaweed, // Seaweed
//   [bas.cc + csun]: csun, // sun
//   [bas.cc + cSun]: cSun, // Sun
//   [bas.cc + csuns]: csuns, // suns
//   [bas.cc + cSuns]: cSuns, // Suns
//   [bas.cc + cSunburst]: cSunburst, // Sunburst
//   [bas.cc + cMexican]: cMexican, // Mexican
//   [bas.cc + cMiddle]: cMiddle, // Middle
//   [bas.cc + cMikado]: cMikado, // Mikado
//   [bas.cc + cMimi]: cMimi, // Mimi
//   [bas.cc + cMinion]: cMinion, // Minion
//   [bas.cc + cMisty]: cMisty, // Misty
//   [bas.cc + cMorning]: cMorning, // Morning
//   [bas.cc + cMeadow]: cMeadow, // Meadow
//   [bas.cc + cMount]: cMount, // Mount
//   [bas.cc + cbatten]: cbatten, // batten
//   [bas.cc + cMulberry]: cMulberry, // Mulberry
//   [bas.cc + cMyrtle]: cMyrtle, // Myrtle
//   [bas.cc + cNadeshiko]: cNadeshiko, // Nadeshiko
//   [bas.cc + cNaples]: cNaples, // Naples
//   [bas.cc + cNavajo]: cNavajo, // Navajo
//   [bas.cc + cNavy]: cNavy, // Navy
//   [bas.cc + cNeon]: cNeon, // Neon
//   [bas.cc + cYork]: cYork, // York
//   [bas.cc + cPhoto]: cPhoto, // Photo
//   [bas.cc + cOcean]: cOcean, // Ocean
//   [bas.cc + cLace]: cLace, // Lace
//   [bas.cc + cOpera]: cOpera, // Opera
//   [bas.cc + cPeel]: cPeel, // Peel
//   [bas.cc + cSoda]: cSoda, // Soda
//   [bas.cc + cOuter]: cOuter, // Outer
//   [bas.cc + cOutrageous]: cOutrageous, // Outrageous
//   [bas.cc + cOxford]: cOxford, // Oxford
//   [bas.cc + cPacific]: cPacific, // Pacific
//   [bas.cc + cPalatinate]: cPalatinate, // Palatinate
//   [bas.cc + cPale]: cPale, // Pale
//   [bas.cc + cPansy]: cPansy, // Pansy
//   [bas.cc + cPaolo]: cPaolo, // Paolo
//   [bas.cc + cVeronese]: cVeronese, // Veronese
//   [bas.cc + cPapaya]: cPapaya, // Papaya
//   [bas.cc + cWhip]: cWhip, // Whip
//   [bas.cc + cParadise]: cParadise, // Paradise
//   [bas.cc + cParis]: cParis, // Paris
//   [bas.cc + cPaynes]: cPaynes, // Paynes
//   [bas.cc + cPuff]: cPuff, // Puff
//   [bas.cc + cPearly]: cPearly, // Pearly
//   [bas.cc + cPermanent]: cPermanent, // Permanent
//   [bas.cc + cGeranium]: cGeranium, // Geranium
//   [bas.cc + cLake]: cLake, // Lake
//   [bas.cc + cPersian]: cPersian, // Persian
//   [bas.cc + cPewter]: cPewter, // Pewter
//   [bas.cc + cPhthalo]: cPhthalo, // Phthalo
//   [bas.cc + cPicotee]: cPicotee, // Picotee
//   [bas.cc + cPictorial]: cPictorial, // Pictorial
//   [bas.cc + cPiggy]: cPiggy, // Piggy
//   [bas.cc + cPine]: cPine, // Pine
//   [bas.cc + cTree]: cTree, // Tree
//   [bas.cc + cFlamingo]: cFlamingo, // Flamingo
//   [bas.cc + cSherbet]: cSherbet, // Sherbet
//   [bas.cc + cPlump]: cPlump, // Plump
//   [bas.cc + cpolish]: cpolish, // polish
//   [bas.cc + cPolish]: cPolish, // Polish
//   [bas.cc + cpolished]: cpolished, // polished
//   [bas.cc + cPolished]: cPolished, // Polished
//   [bas.cc + cPomp]: cPomp, // Pomp
//   [bas.cc + cPower]: cPower, // Power
//   [bas.cc + cPortland]: cPortland, // Portland
//   [bas.cc + cPrinceton]: cPrinceton, // Princeton
//   [bas.cc + cPrussian]: cPrussian, // Prussian
//   [bas.cc + cPsychedelic]: cPsychedelic, // Psychedelic
//   [bas.cc + cPullman]: cPullman, // Pullman
//   [bas.cc + cMountain]: cMountain, // Mountain
//   [bas.cc + cMajesty]: cMajesty, // Majesty
//   [bas.cc + cPizzazz]: cPizzazz, // Pizzazz
//   [bas.cc + cQueen]: cQueen, // Queen
//   [bas.cc + cQuick]: cQuick, // Quick
//   [bas.cc + cQuinacridone]: cQuinacridone, // Quinacridone
//   [bas.cc + cRadical]: cRadical, // Radical
//   [bas.cc + cRaisin]: cRaisin, // Raisin
//   [bas.cc + cGlace]: cGlace, // Glace
//   [bas.cc + cRazzle]: cRazzle, // Razzle
//   [bas.cc + cDazzle]: cDazzle, // Dazzle
//   [bas.cc + cRazzmic]: cRazzmic, // Razzmic
//   [bas.cc + cRebecca]: cRebecca, // Rebecca
//   [bas.cc + cSalsa]: cSalsa, // Salsa
//   [bas.cc + cResolution]: cResolution, // Resolution
//   [bas.cc + cRich]: cRich, // Rich
//   [bas.cc + cRifle]: cRifle, // Rifle
//   [bas.cc + cRobin]: cRobin, // Robin
//   [bas.cc + cEgg]: cEgg, // Egg
//   [bas.cc + cRocket]: cRocket, // Rocket
//   [bas.cc + cRoman]: cRoman, // Roman
//   [bas.cc + cBonbon]: cBonbon, // Bonbon
//   [bas.cc + cDust]: cDust, // Dust
//   [bas.cc + cEbony]: cEbony, // Ebony
//   [bas.cc + cQuartz]: cQuartz, // Quartz
//   [bas.cc + cVale]: cVale, // Vale
//   [bas.cc + cwood]: cwood, // wood
//   [bas.cc + cRosso]: cRosso, // Rosso
//   [bas.cc + cCorsa]: cCorsa, // Corsa
//   [bas.cc + cRosy]: cRosy, // Rosy
//   [bas.cc + cRoyal]: cRoyal, // Royal
//   [bas.cc + crub]: crub, // rub
//   [bas.cc + cRub]: cRub, // Rub
//   [bas.cc + crubs]: crubs, // rubs
//   [bas.cc + cRubs]: cRubs, // Rubs
//   [bas.cc + crubbed]: crubbed, // rubbed
//   [bas.cc + cRubbed]: cRubbed, // Rubbed
//   [bas.cc + crubbing]: crubbing, // rubbing
//   [bas.cc + cRubbing]: cRubbing, // Rubbing
//   [bas.cc + cRubine]: cRubine, // Rubine
//   [bas.cc + cSacramento]: cSacramento, // Sacramento
//   [bas.cc + cState]: cState, // State
//   [bas.cc + cSaddle]: cSaddle, // Saddle
//   [bas.cc + cSafety]: cSafety, // Safety
//   [bas.cc + cBlaze]: cBlaze, // Blaze
//   [bas.cc + cPatricks]: cPatricks, // Patricks
//   [bas.cc + cSandy]: cSandy, // Sandy
//   [bas.cc + csap]: csap, // sap
//   [bas.cc + cSap]: cSap, // Sap
//   [bas.cc + cSatin]: cSatin, // Satin
//   [bas.cc + cSheen]: cSheen, // Sheen
//   [bas.cc + cSchauss]: cSchauss, // Schauss
//   [bas.cc + cSchool]: cSchool, // School
//   [bas.cc + cBus]: cBus, // Bus
//   [bas.cc + cScreamin]: cScreamin, // Screamin
//   [bas.cc + cSeal]: cSeal, // Seal
//   [bas.cc + cshell]: cshell, // shell
//   [bas.cc + cSelective]: cSelective, // Selective
//   [bas.cc + cShamrock]: cShamrock, // Shamrock
//   [bas.cc + cShimmering]: cShimmering, // Shimmering
//   [bas.cc + cBlush]: cBlush, // Blush
//   [bas.cc + cShiny]: cShiny, // Shiny
//   [bas.cc + cShocking]: cShocking, // Shocking
//   [bas.cc + cChalice]: cChalice, // Chalice
//   [bas.cc + cSizzling]: cSizzling, // Sizzling
//   [bas.cc + cSunrise]: cSunrise, // Sunrise
//   [bas.cc + cSlimy]: cSlimy, // Slimy
//   [bas.cc + cSmoky]: cSmoky, // Smoky
//   [bas.cc + cSonic]: cSonic, // Sonic
//   [bas.cc + cBistre]: cBistre, // Bistre
//   [bas.cc + cStar]: cStar, // Star
//   [bas.cc + cStil]: cStil, // Stil
//   [bas.cc + cGrain]: cGrain, // Grain
//   [bas.cc + cglow]: cglow, // glow
//   [bas.cc + cSuper]: cSuper, // Super
//   [bas.cc + cTango]: cTango, // Tango
//   [bas.cc + cTart]: cTart, // Tart
//   [bas.cc + cTea]: cTea, // Tea
//   [bas.cc + cTerra]: cTerra, // Terra
//   [bas.cc + cCotta]: cCotta, // Cotta
//   [bas.cc + cThulian]: cThulian, // Thulian
//   [bas.cc + cTickle]: cTickle, // Tickle
//   [bas.cc + cTiffany]: cTiffany, // Tiffany
//   [bas.cc + cTimber]: cTimber, // Timber
//   [bas.cc + cwolf]: cwolf, // wolf
//   [bas.cc + cTropical]: cTropical, // Tropical
//   [bas.cc + cRain]: cRain, // Rain
//   [bas.cc + cTrypan]: cTrypan, // Trypan
//   [bas.cc + cTufts]: cTufts, // Tufts
//   [bas.cc + cTumble]: cTumble, // Tumble
//   [bas.cc + cTwilight]: cTwilight, // Twilight
//   [bas.cc + cTyrian]: cTyrian, // Tyrian
//   [bas.cc + cUltra]: cUltra, // Ultra
//   [bas.cc + cUnbleached]: cUnbleached, // Unbleached
//   [bas.cc + cNations]: cNations, // Nations
//   [bas.cc + cUpsdell]: cUpsdell, // Upsdell
//   [bas.cc + cUranian]: cUranian, // Uranian
//   [bas.cc + cvan]: cvan, // van
//   [bas.cc + cVan]: cVan, // Van
//   [bas.cc + cDyke]: cDyke, // Dyke
//   [bas.cc + cVegas]: cVegas, // Vegas
//   [bas.cc + cVenetian]: cVenetian, // Venetian
//   [bas.cc + cVivid]: cVivid, // Vivid
//   [bas.cc + cWarm]: cWarm, // Warm
//   [bas.cc + cWild]: cWild, // Wild
//   [bas.cc + cWindsor]: cWindsor, // Windsor
//   [bas.cc + cDregs]: cDregs, // Dregs
//   [bas.cc + cWinter]: cWinter, // Winter
//   [bas.cc + cDream]: cDream, // Dream
//   [bas.cc + cYale]: cYale // Yale
// };
