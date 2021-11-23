/**
 * @file word.constants.js
 * @module word-constants
 * @description Contains many re-usable word constants.
 * @requires module:basic.constants
 * @requires module:phonic.constants
 * @requires module:numeric.constants
 * @requires module:generic.constants
 * @requires module:unit.constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

var bas = require('./basic.constants');
var phn = require('./phonic.constants');
var num = require('./numeric.constants');
var gen = require('./generic.constants');
var unt = require('./unit.constants');

// Miscelaneious Words
let c1a1d = 'a' + 'd'; // ad // 'ca' & 'cd' is some how a reserved word.
let c3d = num.c3 + bas.cd; // 3d
let c3D = num.c3 + bas.cD; // 3D
let cout = bas.co + bas.cut; // out
let cOut = bas.cO + bas.cut; // Out
let cLog = bas.cL + bas.cog; // Log
let clog = bas.cl + bas.cog; // log
let cLogs = cLog + bas.cs; // Logs
let clogs = clog + bas.cs; // logs
let ckey = bas.ck + bas.cey; // key
let cKey = bas.cK + bas.cey; // Key
let ckeys = ckey + bas.cs; // keys
let cKeys = cKey + bas.cs; // Keys
let ckeyed = ckey + bas.ced; // keyed
let cKeyed = cKey + bas.ced; // Keyed
let ckeying = ckey + phn.cing; // keying
let cKeying = cKey + phn.cing; // Keying
let cnode = bas.cn + phn.code; // node
let cNode = bas.cN + phn.code; // Node
let curl = bas.cur + bas.cl; // url
let cURL = bas.cUR + bas.cL; // URL
let cnth = bas.cn + bas.cth; // nth
let cNth = bas.cN + bas.cth; // Nth
let cregEx = phn.creg + bas.cEx; // regEx
let cRegEx = phn.cReg + bas.cEx; // RegEx
let cflag = bas.cfl + bas.cag; // flag
let cFlag = bas.cFl + bas.cag; // Flag
let cflags = cflag + bas.cs; // flags
let cFlags = cFlag + bas.cs; // Flags

// Data Types
let cstring = bas.cs + phn.ctring; // string
let cString = bas.cS + phn.ctring; // String
let cstrings = cstring + bas.cs; // strings
let cStrings = cString + bas.cs; // Strings
let cinteger = bas.ci + phn.cnteger; // integer
let cInteger = bas.cI + phn.cnteger; // Integer
let cintegers = cinteger + bas.cs; // integers
let cIntegers = cInteger + bas.cs; // Integers
let cfloat = bas.cf + phn.cloat; // float
let cFloat = bas.cF + phn.cloat; // Float
let cfloats = cfloat + bas.cs; // floats
let cFloats = cFloat + bas.cs; // Floats
let clong = bas.cl + phn.cong; // long
let cLong = bas.cL + phn.cong; // Long
let clongs = clong + bas.cs; // longs
let cLongs = cLong + bas.cs; // Longs
let clonger = clong + bas.cer; // longer
let cLonger = cLong + bas.cer; // Longer
let clongest = clong + phn.cest; // longest
let cLongest = cLong + phn.cest; // Longest
let cshort = bas.cs + phn.chort; // short
let cShort = bas.cS + phn.chort; // Short
let cshorts = cshort + bas.cs; // shorts
let cShorts = cShort + bas.cs; // Shorts
let cshorter = cshort + bas.cer; // shorter
let cShorter = cShort + bas.cer; // Shorter
let cshortest = cshort + phn.cest; // shortest
let cShortest = cShort + phn.cest; // Shortest
let cdouble = bas.cd + phn.couble; // double
let cDouble = bas.cD + phn.couble; // Double
let cdoubles = cdouble + bas.cs; // doubles
let cDoubles = cDouble + bas.cs; // Doubles
let cchar = bas.cch + bas.car; // char
let cChar = bas.cCh + bas.car; // Char
let cchars = cchar + bas.cs; // chars
let cChars = cChar + bas.cs; // Chars
let cboolean = bas.cb + phn.coolean; // boolean
let cBoolean = bas.cB + phn.coolean; // Boolean
let cbooleans = cboolean + bas.cs; // booleans
let cBooleans = cBoolean + bas.cs; // Booleans
let cobject = bas.co + phn.cbject; // object
let cObject = bas.cO + phn.cbject; // Object
let cobjects = cobject + bas.cs; // objects
let cObjects = cObject + bas.cs; // Objects

// General Use Words
let csubstring = phn.csub + cstring; // substring
let csubString = phn.csub + cString; // subString
let cSubString = phn.cSub + cString; // SubString
let cwind = bas.cw + phn.cind; // wind
let cWind = bas.cW + phn.cind; // Wind
let cwindow = cwind + bas.cow; // window
let cWindow = cWind + bas.cow; // Window
let cwindows = cwindow + bas.cs; // windows
let cWindows = cWindow + bas.cs; // Windows
let clinux = phn.clin + bas.cux; // linux
let cLinux = phn.cLin + bas.cux; // Linux
let cword = bas.cw + phn.cord; // word
let cWord = bas.cW + phn.cord; // Word
let cwords = cword + bas.cs; // words
let cWords = cWord + bas.cs; // Words
let coops = bas.co + phn.cops; // oops
let cOops = bas.cO + phn.cops; // Oops
let cOOPS = bas.cO + phn.cOPS; // OOPS
let clet = bas.cle + bas.ct; // let
let cLet = bas.cLe + bas.ct; // Let
let clets = clet + bas.cs; // lets
let cLets = cLet + bas.cs; // Lets
let cfig = bas.cf + bas.cig; // fig
let cFig = bas.cF + bas.cig; // Fig
let cfiglet = cfig + clet; // figlet
let cFiglet = cFig + clet; // Figlet
let cconfig = phn.ccon + cfig; // config
let cConfig = phn.cCon + cfig; // Config
let cconfiguration = cconfig + bas.cur + phn.cation; // configuration
let cConfiguration = cConfig + bas.cur + phn.cation; // Configuration
let cconfigurations = cconfiguration + bas.cs; // configurations
let cConfigurations = cConfiguration + bas.cs; // Configurations
let cconfigured = cconfig + phn.cured; // configured
let cConfigured = cConfig + phn.cured; // Configured
let cconfiguring = cconfig + bas.cur + phn.cing; // configuring
let cConfiguring = cConfig + bas.cur + phn.cing; // Configuring
let cempty = bas.cem + bas.cpt + bas.cy; // empty
let cEmpty = bas.cEm + bas.cpt + bas.cy; // Empty
let cfull = bas.cf + phn.cull; // full
let cFull = bas.cF + phn.cull; // Full
let cfully = cfull + bas.cy; // fully
let cFully = cFull + bas.cy; // Fully
let ccreate = bas.cc + phn.create; // create
let cCreate = bas.cC + phn.create; // Create
let cSubmit = bas.cSu + bas.cbm + bas.cit; // Submit
let c_add = c1a1d + bas.cd; // add
let cAdd = bas.cAd + bas.cd; // Add
let cADD = bas.cAD + bas.cD; // ADD
let cadded = c_add + bas.ced; // added
let cAdded = cAdd + bas.ced; // Added
let cadding = c_add + phn.cing; // adding
let cAdding = cAdd + phn.cing; // Adding
let cadditional = c_add + phn.cition + bas.cal; // additional
let cAdditional = cAdd + phn.cition + bas.cal; // Additional
let cADDITIONAL = cADD + phn.cITION + bas.cAL; // ADDITIONAL
let cadditionals = cadditional + bas.cs; // additionals
let cAdditionals = cAdditional + bas.cs; // Additionals
let cpen = bas.cpe + bas.cn; // pen
let cPen = bas.cPe + bas.cn; // Pen
let cpens = cpen + bas.cs; // pens
let cPens = cPen + bas.cs; // Pens
let cclose = bas.ccl + phn.cose; // close
let cClose = bas.cCl + phn.cose; // Close
let cclosed = cclose + bas.cd; // closed
let cClosed = cClose + bas.cd; // Closed
let cclosing = bas.ccl + bas.cos + phn.cing; // closing
let cClosing = bas.cCl + bas.cos + phn.cing; // Closing
let copen = bas.co + cpen; // open
let cOpen = bas.cO + cpen; // Open
let copens = copen + bas.cs; // opens
let cOpens = cOpen + bas.cs; // Opens
let copened = copen + bas.ced; // opened
let cOpened = cOpen + bas.ced; // Opened
let copening = copen + phn.cing; // opening
let cOpening = cOpen + phn.cing; // Opening
let cUpdate = bas.cUp + phn.cdate; // Update
let cEdit = bas.cEd + bas.cit; // Edit
let cdelete = bas.cd + phn.celete; // delete
let cDelete = bas.cD + phn.celete; // Delete
let cdeletion = phn.cdel + bas.ce + phn.ction; // deletion
let cDeletion = phn.cDel + bas.ce + phn.ction; // Deletion
let cinsert = bas.cin + phn.csert; // insert
let cInsert = bas.cIn + phn.csert; // Insert
let cinsertion = cinsert + phn.cion; // insertion
let cInsertion = cInsert + phn.cion; // Insertion
let csubstitute = phn.csub + bas.cs + phn.ctit + phn.cute; // substitute
let cSubstitute = phn.cSub + bas.cs + phn.ctit + phn.cute; // Substitute
let csubstitution = phn.csub + bas.cs + phn.ctit + bas.cu + phn.ction; // substitution
let cSubstitution = phn.cSub + bas.cs + phn.ctit + bas.cu + phn.ction; // Substitution
let call = phn.call; // all
let cAll = phn.cAll; // All
let cat = bas.ca + bas.ct; // at
let cAt = bas.cA + bas.ct; // At // Not to be confused with the bas.cAt = '@'!!!
let cselect = bas.cse + bas.cle + bas.cct; // select
let cSelect = bas.cSe + bas.cle + bas.cct; // Select
let ccan = bas.cca + bas.cn; // can
let cCan = bas.cCa + bas.cn; // Can
let ccancel = ccan + phn.ccel; // cancel
let cCancel = cCan + phn.ccel; // Cancel
let cconfirm = bas.cco + bas.cnf + bas.cir + bas.cm; // confirm
let cConfirm = bas.cCo + bas.cnf + bas.cir + bas.cm; // Confirm
let ccount = bas.cco + phn.cunt; // count
let cCount = bas.cCo + phn.cunt; // Count
let ccounter = ccount + bas.cer; // counter
let cCounter = cCount + bas.cer; // Counter
let cAccount = bas.cAc + ccount; // Account
let cHamburger = bas.cHa + bas.cmb + bas.cur + bas.cge + bas.cr; // Hamburger
let cMe = bas.cM + bas.ce; // Me
let cMenu = cMe + bas.cnu; // Menu
let cwith = bas.cw + phn.cith; // with
let cWith = bas.cW + phn.cith; // With
let cwithout = cwith + cout; // without
let cWithout = cWith + cout; // Without
let cdetail = bas.cde + bas.cta + bas.cil; // detail
let cDetail = bas.cDe + bas.cta + bas.cil; // Detail
let cdetails = cdetail + bas.cs; // details
let cDetails = cDetail + bas.cs; // Details
let cfront = bas.cfr + bas.con + bas.ct; // front
let cFront = bas.cFr + bas.con + bas.ct; // Front
let cback = bas.cba + bas.cck; // back
let cBack = bas.cBa + bas.cck; // Back
let cleft = bas.cle + bas.cft; // left
let cLeft = bas.cLe + bas.cft; // Left
let cright = bas.cri + bas.cgh + bas.ct; // right
let cRight = bas.cRi + bas.cgh + bas.ct; // Right
let cTo = bas.cTo; // To
let ctop = bas.cto + bas.cp; // top
let cTop = cTo + bas.cp; // Top
let cbottom = bas.cbo + bas.ctt + bas.com; // bottom
let cBottom = bas.cBo + bas.ctt + bas.com; // Bottom
let cbegin = bas.cbe + bas.cgi + bas.cn; // begin
let cBegin = bas.cBe + bas.cgi + bas.cn; // Begin
let cBEGIN = bas.cBE + bas.cGI + bas.cN; // BEGIN
let cbeginning = cbegin + bas.cn + phn.cing; // beginning
let cBeginning = cBegin + bas.cn + phn.cing; // Beginning
let cend = bas.cen + bas.cd; // end
let cEnd = bas.cEn + bas.cd; // End
let cEND = bas.cEN + bas.cD; // END
let cending = cend + phn.cing; // ending
let cEnding = cEnd + phn.cing; // Ending
let cthe = bas.cth + bas.ce; // the
let cThe = bas.cTh + bas.ce; // The
let citem = bas.cit + bas.cem; // item
let cItem = bas.cIt + bas.cem; // Item
let citems = citem + bas.cs; // items
let cItems = cItem + bas.cs; // Items
let clist = bas.cli + bas.cst; // list
let cList = bas.cLi + bas.cst; // List
let clists = clist + bas.cs; // lists
let cLists = cList + bas.cs; // Lists
let clisted = clist + bas.ced; // listed
let cListed = cList + bas.ced; // Listed
let cshare = bas.cs + phn.chare; // share
let cShare = bas.cS + phn.chare; // Share
let cShares = cShare + bas.cs; // Shares
let cshares = cshare + bas.cs; // shares
let cshared = cshare + bas.cd; // shared
let cShared = cShare + bas.cd; // Shared
let cUnShared = bas.cUn + cShared; // UnShared
let cUnshared = bas.cUn + cshared; // Unshared
let cUnshare = bas.cUn + cshare; // Unshare
let cUnShare = bas.cUn + cShare; // UnShare
let cview = bas.cv + phn.ciew; // view
let cView = bas.cV + phn.ciew; // View
let cnew = bas.cne + bas.cw; // new
let cNew = bas.cNe + bas.cw; // New
let cload = bas.clo + 'ad'; // bas.cad; // load // NOTE: Apparently 'cad' is also a reserved word.
let cLoad = bas.cLo + 'ad'; // bas.cad; // Load // NOTE: Apparently 'cad' is also a reserved word.
let cloads = cload + bas.cs; // loads
let cLoads = cLoad + bas.cs; // Loads
let cloaded = cload + bas.ced; // loaded
let cLoaded = cLoad + bas.ced; // Loaded
let cloading = cload + phn.cing; // loading
let cLoading = cLoad + phn.cing; // Loading
let cclick = bas.cc + phn.click; // click
let cClick = bas.cC + phn.click; // Click
let cpress = bas.cp + phn.cress; // press
let cPress = bas.cP + phn.cress; // Press
let cpresses = cpress + bas.ces; // presses
let cPresses = cPress + bas.ces; // Presses
let cpressed = cpress + bas.ced; // pressed
let cPressed = cPress + bas.ced; // Pressed
let cpressing = cpress + phn.cing; // pressing
let cPressing = cPress + phn.cing; // Pressing
let cpressKey = cpress + cKey; // pressKey
let cPressKey = cPress + cKey; // PressKey
let cexpect = phn.cexp + phn.cect; // expect
let cExpect = phn.cExp + phn.cect; // Expect
let cexpects = cexpect + bas.cs; // expects
let cExpects = cExpect + bas.cs; // Expects
let cexpected = cexpect + bas.ced; // expected
let cExpected = cExpect + bas.ced; // Expected
let cexpecting = cexpect + phn.cing; // expecting
let cExpecting = cExpect + phn.cing; // Expecting
let cnavigate = bas.cn + phn.cavigate; // navigate
let cNavigate = bas.cN + phn.cavigate; // Navigate
let csave = bas.cs + phn.cave; // Save
let cSave = bas.cS + phn.cave; // Save
let cDownload = bas.cDo + bas.cwn + bas.clo + 'ad'; // Download
let cNegative = bas.cNe + bas.cga + phn.ctive; // Negative
let cPositive = bas.cPo + bas.csi + phn.ctive; // Positive
let cEntire = bas.cEn + bas.cti + bas.cre; // Entire
let cinfo = bas.cin + bas.cfo; // info
let cInfo = bas.cIn + bas.cfo; // Info
let cLink = bas.cLi + bas.cnk; // Link
let cLabel = bas.cLa + bas.cbe + bas.cl; // Label
let cField = bas.cFi + bas.cel + bas.cd; // Field
let ctype = bas.ct + phn.cype; // type
let cType = bas.cT + phn.cype; // Type
let cTypes = cType + bas.cs; // Types
let cvalid = bas.cv + phn.calid; // valid
let cValid = bas.cV + phn.calid; // Valid
let cVALID = bas.cV + phn.cALID; // VALID
let cvalidation = cvalid + bas.ca + phn.ction; // validation
let cValidation = cValid + bas.ca + phn.ction; // Validation
let cvalidations = cvalidation + bas.cs; // validations
let cValidations = cValidation + bas.cs; // Validations
let cvalidate = bas.cva + bas.cli + phn.cdate; // validate
let cValidate = bas.cVa + bas.cli + phn.cdate; // Validate
let cinvalid = bas.cin + cvalid; // invalid
let cInvalid = bas.cIn + cvalid; // Invalid
let cINVALID = bas.cIN + cVALID; // INVALID
let cbug = bas.cbu + bas.cg; // bug
let cdebug = bas.cde + cbug; // debug
let cDebug = bas.cDe + cbug; // Debug
let cpage = bas.cp + phn.cage; // page
let cPage = bas.cP + phn.cage; // Page
let cpages = cpage + bas.cs; // pages
let cPages = cPage + bas.cs; // Pages
let cmessage = bas.cme + bas.css + phn.cage; // message
let cMessage = cMe + bas.css + phn.cage; // Message
let cmessages = cmessage + bas.cs; // messages
let cMessages = cMessage + bas.cs; // Messages
let cScript = bas.cSc + bas.cri + bas.cpt; // Script
let cScripts = cScript + bas.cs; // Scripts
let ckeyword = ckey + cword; // keyword
let cKeyword = cKey + cword; // Keyword
let ckeywords = ckeyword + bas.cs; // keywords
let cKeywords = cKeyword + bas.cs; // Keywords
let cdata = bas.cd + phn.cata; // data
let cData = bas.cD + phn.cata; // Data
let cDATA = bas.cD + phn.cATA; // DATA
let cresult = phn.cres + phn.cult; // result
let cResult = phn.cRes + phn.cult; // Result
let cresults = cresult + bas.cs; // results
let cResults = cResult + bas.cs; // Results
let cresulted = cresult + bas.ced; // resulted
let cResulted = cResult + bas.ced; // Resulted
let cresulting = cresult + phn.cing; // resulting
let cResulting = cResult + phn.cing; // Resulting
let cwork = bas.cwo + bas.crk; // work
let cWork = bas.cWo + bas.crk; // Work
let cflow = bas.cfl + bas.cow; // flow
let cFlow = bas.cFl + bas.cow; // Flow
let cworkflow = cwork + cflow; // workflow
let cWorkflow = cWork + cflow; // Workflow
let cworkflows = cworkflow + bas.cs; // workflows
let cWorkflows = cWorkflow + bas.cs; // Workflows
let ctest = bas.ct + phn.cest; // test
let cTest = bas.cT + phn.cest; // Test
let cTEST = bas.cTE + bas.cST; // TEST
let ctests = ctest + bas.cs; // tests
let cTests = cTest + bas.cs; // Tests
let cTESTS = cTEST + bas.cS; // TESTS
let cStatus = bas.cSt + bas.cat + bas.cus; // Status
let cTestStatus = cTest + cStatus; // TestStatus
let cTestStatusMessage = cTest + cStatus + cMessage; // TestStatusMessage
let cTestWorkflow = cTest + cWorkflow; // TestWorkflow
let cBureau = bas.cBu + bas.cre + bas.cau; // Bureau
let cExhaustive = bas.cEx + bas.cha + bas.cus + bas.cti + bas.cve; // Exhaustive
let cBrowser = bas.cBr + bas.cow + bas.cse + bas.cr; // Browser
let cact = bas.cac + bas.ct; // act
let cAct = bas.cAc + bas.ct; // Act
let caction = cact + phn.cion;// action
let cAction = cAct + phn.cion; // Action
let cactions = caction + bas.cs; // actions
let cActions = cAction + bas.cs; // Actions
let cactual = cact + phn.cual; // actual
let cActual = cAct + phn.cual; // Actual
let cauto = bas.ca + phn.cuto; // auto
let cAuto = bas.cA + phn.cuto; // Auto
let cautomation = cauto + phn.cmation; // automation
let cAutomation = cAuto + phn.cmation; // Automation
let cnumber = bas.cn + phn.cumber; // number
let cNumber = bas.cN + phn.cumber; // Number
let cnumbers = cnumber + bas.cs; // numbers
let cNumbers = cNumber + bas.cs; // Numbers
let cnumbered = cnumber + bas.ced; // numbered
let cNumbered = cNumber + bas.ced; // Numbered
let cnumbering = cnumber + phn.cing; // numbering
let cNumbering = cNumber + phn.cing; // Numbering
let cHost = bas.cHo + bas.cst; // Host
let cOf = bas.cOf; // Of
let crow = bas.cro + bas.cw; // row
let cRow = bas.cRo + bas.cw; // Row
let crows = crow + bas.cs; // rows
let cRows = cRow + bas.cs; // Rows
let crowed = crow + bas.ced; // rowed
let cRowed = cRow + bas.ced; // Rowed
let crowing = crow + phn.cing; // rowing
let cRowing = cRow + phn.cing; // Rowing
let crun = bas.cru + bas.cn; // run
let cRun = bas.cRu + bas.cn; // Run
let cruns = crun + bas.cs; // runs
let cRuns = cRun + bas.cs; // Runs
let crunning = crun + bas.cn + phn.cing; // running
let cRunning = cRun + bas.cn + phn.cing; // Running
let cmaster = phn.cmas + phn.cter; // master
let cMaster = phn.cMas + phn.cter; // Master
let cEnvironment = bas.cEn + bas.cvi + bas.cro + bas.cn + phn.cment; // Environment
let cname = bas.cn + phn.came; // name
let cName = bas.cN + phn.came; // Name
let cnames = cname + bas.cs; // names
let cNames = cName + bas.cs; // Names
let cnamed = cname + bas.cd; // named
let cNamed = cName + bas.cd; // Named
let ckeywordName = ckeyword + cName; // keywordName
let cKeywordName = cKeyword + cName; // KeywordName
let cPageScriptName = cPage + cScript + cName; // PageScriptName
let cid = bas.cid; // id
let cId = bas.cId; // Id
let cID = bas.cID; // ID
let cmail = bas.cma + bas.cil; // mail
let cEmail = bas.cE + cmail; // Email
let cEmails = cEmail + bas.cs; // Emails
let cReceive = bas.cRe + bas.cce + bas.civ + bas.ce; // Receive
let cReceived = cReceive + bas.cd; // Received
let cdate = phn.cdate; // date
let cDate = bas.cD + phn.cate; // Date
let ctime = bas.ct + phn.cime; // time
let cTime = bas.cT + phn.cime; // Time
let cruntime = crun + ctime; // runtime
let cRuntime = cRun + ctime; // Runtime
let cRunTime = cRun + cTime; // RunTime
let cstamp = bas.cst + phn.camp; // stamp
let cStamp = bas.cSt + phn.camp; // Stamp
let cstamps = cstamp + bas.cs; // stamps
let cStamps = cStamp + bas.cs; // Stamps
let cstamped = cstamp + bas.ced; // stamped
let cStamped = cStamp + bas.ced; // Stamped
let cstamping = cstamp + phn.cing; // stamping
let cStamping = cStamp + phn.cing; // Stamping
let cmediate = phn.cmed + bas.ci + phn.cate; // mediate
let cintermediate = phn.cinter + cmediate; // intermediate
let cIntermediate = phn.cInter + cmediate; // Intermediate
let cpath = bas.cp + phn.cath; // path
let cPath = bas.cP + phn.cath; // Path
let cpaths = cpath + bas.cs; // paths
let cPaths = cPath + bas.cs; // Paths
let cexit = bas.cex + bas.cit; // exit
let cExit = bas.cEx + bas.cit; // Exit
let cexiting = cexit + phn.cing; // exiting
let cExiting = cExit + phn.cing; // Exiting
let cViewer = bas.cVi + bas.cew + bas.cer; // Viewer
let cPermission = bas.cPe + bas.crm + bas.cis + bas.csi + bas.con; // Permission
let cBug = bas.cBu + bas.cg; // Bug
let cset = bas.cse + bas.ct; // set
let cSet = bas.cSe + bas.ct; // Set
let csetting = cset + bas.ct + phn.cing; // setting
let cSetting = cSet + bas.ct + phn.cing; // Setting
let csettings = csetting + bas.cs; // settings
let cSettings = cSetting + bas.cs; // Settings
let cPreview = phn.cPre + cview; // Preview
let climit = bas.cli + phn.cmit; // limit // NOTE: bas.cmi resolves as "s"
let cLimit = bas.cLi + phn.cmit; // Limit // NOTE: bas.cmi resolves as "s"
let cGate = bas.cGa + bas.cte; // Gate
let cway = bas.cwa + bas.cy; // way
let cWay = bas.cWa + bas.cy; // Way
let cGateway = cGate + cway; // Gateway
let cprocess = phn.cpro + phn.ccess; // process
let cProcess = phn.cPro + phn.ccess; // Process
let cPROCESS = phn.cPRO + phn.cCESS; // PROCESS
let cprocessed = cprocess + bas.ced; // processed
let cProcessed = cProcess + bas.ced; // Processed
let cprocesses = cprocess + bas.ces; // processes
let cProcesses = cProcess + bas.ces; // Processes
let cprocessing = cprocess + phn.cing; // processing
let cProcessing = cProcess + phn.cing; // Processing
let cPROCESSING = cPROCESS + phn.cING; // PROCESSING
let ccomplete = gen.ccom + bas.cp + phn.clete; // complete
let cComplete = gen.cCom + bas.cp + phn.clete; // Complete
let ccompleted = ccomplete + bas.cd; // completed
let cCompleted = cComplete + bas.cd; // Completed
let cand = bas.can + bas.cd; // and
let cAnd = bas.cAn + bas.cd; // And
let cuse = bas.cus + bas.ce; // use
let cUse = bas.cUs + bas.ce; // Use
let cuser = cuse + bas.cr; // user
let cUser = cUse + bas.cr; // User
let cAccess = bas.cAc + phn.ccess; // Access
let clevel = bas.cle + phn.cvel; // level
let cLevel = bas.cLe + phn.cvel; // Level
let cget = bas.cge + bas.ct; // get
let cGet = bas.cGe + bas.ct; // Get
let cput = bas.cp + bas.cut; // put
let cPut = bas.cP + bas.cut; // Put
let cPUT = bas.cP + bas.cUT; // PUT
let cfrom = bas.cfr + bas.com; // from
let cFrom = bas.cFr + bas.com; // From
let cplace = phn.cplac + bas.ce; // place
let cPlace = bas.cPl + phn.cace; // Place
let cplaces = cplace + bas.cs; // places
let cPlaces = cPlace + bas.cs; // Places
let cplaced = cplace + bas.cd; // placed
let cPlaced = cPlace + bas.cd; // Placed
let cplacing = phn.cplac + phn.cing; // placing
let cPlacing = bas.cPl + bas.cac + phn.cing; // Placing
let cplacement = cplace + phn.cment; // placement
let cPlacement = cPlace + phn.cment; // Placement
let creplace = bas.cre + cplace; // replace
let cReplace = bas.cRe + cplace; // Replace
let creplaces = creplace + bas.cs; // replaces
let cReplaces = cReplace + bas.cs; // Replaces
let creplaced = creplace + bas.cd; // replaced
let cReplaced = cReplace + bas.cd; // Replaced
let creplacing = bas.cre + cplacing; // replacing
let cReplacing = bas.cRe + cplacing; // Replacing
let creplacement = creplace + phn.cment; // replacement
let cReplacement = cReplace + phn.cment; // Replacement
let cspace = bas.csp + phn.cace; // space
let cSpace = bas.cSp + phn.cace; // Space
let cspaces = cspace + bas.cs; // spaces
let cSpaces = cSpace + bas.cs; // Spaces
let cspaced = cspace + bas.cd; // spaced
let cSpaced = cSpace + bas.cd; // Spaced
let cplus = bas.cp + phn.clus; // plus
let cPlus = bas.cP + phn.clus; // Plus
let ccolon = bas.cco + phn.clon; // colon
let cColon = bas.cCo + phn.clon; // Colon
let cunder = bas.cun + phn.cder; // under
let cUnder = bas.cUn + phn.cder; // Under
let cscore = bas.cs + phn.ccore; // score
let cScore = bas.cS + phn.ccore; // Score
let cunderscore = cunder + cscore; // underscore
let cUnderscore = cUnder + cscore; // Underscore
let cCatagory = bas.cCa + bas.cta + bas.cgo + bas.cry; // Catagory
let cclean = bas.cc + phn.clean; // clean
let cClean = bas.cC + phn.clean; // Clean
let ccleaned = cclean + bas.ced; // cleaned
let cCleaned = cClean + bas.ced; // Cleaned
let cCarriage = bas.cCa + bas.crr + bas.ci + phn.cage; // Carriage
let cturn = bas.ctu + bas.crn; // turn
let creturn = bas.cre + cturn; // return
let cReturn = bas.cRe + cturn; // Return
let cconvert = bas.cc + phn.convert; // convert
let cConvert = bas.cC + phn.convert; // Convert
let clow = bas.clo + bas.cw; // low
let cLow = bas.cLo + bas.cw; // Low
let clower = clow + bas.cer; // lower
let cLower = cLow + bas.cer; // Lower
let ccase = bas.cc + phn.c_ase; // case
let cCase = bas.cC + phn.c_ase; // Case
let cmove = bas.cmo + bas.cve; // move
let cremove = bas.cre + cmove; // remove
let cRemove = bas.cRe + cmove; // Remove
let cExtension = phn.cExt + bas.cen + bas.cs + phn.cion; // Extension
let cdig = bas.cdi + bas.cg; // dig
let cDig = bas.cDi + bas.cg; // Dig
let cdigit = cdig + bas.cit; // digit
let cDigit = cDig + bas.cit; // Digit
let cletter = clet + bas.ct + bas.cer; // letter
let cLetter = cLet + bas.ct + bas.cer; // Letter
let cupper = bas.cup + bas.cp + bas.cer; // upper
let cUpper = bas.cUp + bas.cp + bas.cer; // Upper
let crandom = bas.cr + phn.candom; // random
let cRandom = bas.cR + phn.candom; // Random
let crandomly = crandom + bas.cly; // randomly
let cRandomly = cRandom + bas.cly; // Randomly
let cgenerate = bas.cg + phn.cenerate; // generate
let cGenerate = bas.cG + phn.cenerate; // Generate
let cgenerated = cgenerate + bas.cd; // generated
let cGenerated = cGenerate + bas.cd; // Generated
let cparent = bas.cp + phn.carent; // parent
let cParent = bas.cP + phn.carent; // Parent
let cvalue = bas.cva + bas.clu + bas.ce; // value
let cValue = bas.cVa + bas.clu + bas.ce; // Value
let cvalues = cvalue + bas.cs; // values
let cValues = cValue + bas.cs; // Values
let cfind = bas.cfi + bas.cnd; // find
let cFind = bas.cFi + bas.cnd; // Find
let cfindvalue = cfind + cvalue; // findvalue
let cfindValue = cfind + cValue; // findValue
let cFindValue = cFind + cValue; // FindValue
let crange = bas.cra + bas.cng + bas.ce; // range
let cRange = bas.cRa + bas.cng + bas.ce; // Range
let cnumeric = bas.cnu + bas.cme + bas.cri + bas.cc; // numeric
let cNumeric = bas.cNu + bas.cme + bas.cri + bas.cc; // Numeric
let cNumerical = cNumeric + bas.cal; // Numerical
let clength = bas.cle + bas.cng + bas.cth; // length
let cLength = bas.cLe + bas.cng + bas.cth; // Length
let ccode = bas.cco + bas.cde; // code
let cCode = bas.cCo + bas.cde; // Code
let ceither = bas.cei + phn.cther; // either
let cEither = bas.cEi + phn.cther; // Either
let cenable = bas.cen + phn.cable; // enable
let cEnable = bas.cEn + phn.cable; // Enable
let cenabled = cenable + bas.cd; // enabled
let cEnabled = cEnable + bas.cd; // Enabled
let cdetermine = bas.cd + phn.cetermine; // determine
let cDetermine = bas.cD + phn.cetermine; // Determine
let cties = bas.ct + phn.cies; // ties
let cTies = bas.cT + phn.cies; // Ties
let cability = bas.cab + phn.cility; // ability
let cAbility = bas.cAb + phn.cility; // Ability
let cabilities = bas.cab + phn.cili + cties; // abilities
let cAbilities = bas.cAb + phn.cili + cties; // Abilities
let cvariable = phn.cvar + bas.ci + phn.cable; // variable
let cVariable = phn.cVar + bas.ci + phn.cable; // Variable
let cvariables = cvariable + bas.cs; // variables
let cVariables = cVariable + bas.cs; // Variables
let cvariability = phn.cvar + bas.ci + cability; // variability
let cVariability = phn.cVar + bas.ci + cability; // Variability
let cvisibility = bas.cv + phn.cisibility; // visibility
let cVisibility = bas.cV + phn.cisibility; // Visibility
let cDialog = bas.cDi + bas.ca + clog; // Dialog
let clibrary = bas.cli + bas.cbr + bas.car + bas.cy; // library
let cLibrary = bas.cLi + bas.cbr + bas.car + bas.cy; // Library
let ctable = bas.cta + bas.cbl + bas.ce; // table
let cTable = bas.cTa + bas.cbl + bas.ce; // Table
let cequal = phn.cequ + bas.cal; // equal
let cEqual = phn.cEqu + bas.cal; // Equal
let cequals = cequal + bas.cs; // equals
let cEquals = cEqual + bas.cs; // Equals
let cequivalence = phn.cequ + bas.ci + phn.cval + phn.cence; // equivalence
let cEquivalence = phn.cEqu + bas.ci + phn.cval + phn.cence; // Equivalence
let cRaw = bas.cRa + bas.cw; // Raw
let cOperation = phn.cOperat + phn.cion; // Operation
let cOperating = phn.cOperat + phn.cing; // Operating
let csystem = bas.csy + bas.cst + bas.cem; // system
let cSystem = bas.cSy + bas.cst + bas.cem; // System
let csign = bas.csi + bas.cgn; // sign
let cSign = bas.cSi + bas.cgn; // Sign
let cassign = bas.cas + csign; // assign
let cAssign = bas.cAs + csign; // Assign
let cassignment = cassign + phn.cment; // assignment
let cAssignment = cAssign + phn.cment; // Assignment
let cAbreviated = bas.cAb + bas.cre + bas.cvi + bas.cat + bas.ced; // Abreviated
let cwait = bas.cw + phn.cait; // wait
let cWait = bas.cW + phn.cait; // Wait
let cawait = bas.ca + cwait; // await
let cHTML = bas.cHT + bas.cML; // HTML
let chtml = bas.cht + bas.cml; // html
let cinner = bas.ci + phn.cnner; // inner
let cInner = bas.cI + phn.cnner; // Inner
let cOver = bas.cOv + bas.cer; // Over
let cride = bas.cr + phn.cide; // ride
let cRide = bas.cR + phn.cide; // Ride
let cOverride = cOver + cride; // Override
let cActionOverride = cAction + cOverride; // ActionOverride
let cLocator = bas.cLo + bas.cca + bas.cto + bas.cr; // Locator
let cLocators = cLocator + bas.cs; // Locators
let cLocatorLibrary = cLocator + cLibrary; // LocatorLibrary
let cselector = bas.cs + phn.celector; // selector
let cSelector = bas.cS + phn.celector; // Selector
let cSelectors = cSelector + bas.cs; // Selectors
let cIndividual = bas.cIn + bas.cdi + bas.cvi + bas.cdu + bas.cal; // Individual
let cIndividually = cIndividual + bas.cly; // Individually
let cexist = bas.cex + phn.cist; // exist
let cExist = bas.cEx + phn.cist;; // Exist
let cexists = cexist + bas.cs; // exists
let cExists = cExist + bas.cs; // Exists
let cexisted = cexist + bas.ced; // existed
let cExisted = cExist + bas.ced; // Existed
let cexisting = cexist + phn.cing; // existing
let cExisting = cExist + phn.cing; // Existing
let casync = bas.cas + phn.cync; // async
let cAsync = bas.cAs + phn.cync; // Async
let csync = bas.cs + phn.cync; // sync
let cSync = bas.cS + phn.cync; // Sync
let cSingular = bas.cSi + bas.cng + bas.cul + bas.car; // Singular
let cParallel = bas.cPa + bas.cra + bas.cll + bas.cel; // Parallel
let cMulti = bas.cMu + bas.clt + bas.ci; // Multi
let cUnified = bas.cUn + bas.cif + bas.cie + bas.cd; // Unified
let cfault = bas.cf + phn.cault; // fault
let cFault = bas.cF + phn.cault; // Fault
let cFAULT = bas.cF + phn.cAULT; // FAULT
let cdefault = bas.cde + cfault; // default
let cDefault = bas.cDe + cfault; // Default
let cDEFAULT = bas.cDE + cFAULT; // DEFAULT
let csingle = bas.cs + phn.cingle; // single
let cSingle = bas.cS + phn.cingle; // Single
let cquote = bas.cqu + phn.cote; // quote
let cQuote = bas.cQu + phn.cote; // Quote
let cquotes = cquote + bas.cs; // quotes
let cQuotes = cQuote + bas.cs; // Quotes
let cquoted = cquote + bas.cd; // quoted
let cQuoted = cQuote + bas.cd; // Quoted
let cswap = bas.cs + phn.cwap; // swap
let cSwap = bas.cS + phn.cwap; // Swap
let cbefore = bas.cbe + phn.cfore; // before
let cBefore = bas.cBe + phn.cfore; // Before
let cBEFORE = bas.cBE + phn.cFORE; // BEFORE
let cafter = bas.caf + phn.cter; // after
let cAfter = bas.cAf + phn.cter; // After
let cAFTER = bas.cAF + phn.cTER; // AFTER
let cOnce = bas.cOn + bas.cce; // Once
let cUpload = bas.cUp + cload; // Upload
let cStyle = bas.cSt + bas.cyl + bas.ce; // Style
let cassert = bas.cas + bas.cse + bas.crt; // assert
let cAssert = bas.cAs + bas.cse + bas.crt; // Assert
let cless = bas.cl + phn.cess; // less
let cLess = bas.cL + phn.cess; // Less
let cgreat = bas.cgr + phn.ceat; // great
let cGreat = bas.cGr + phn.ceat; // Great
let cgreater = cgreat + bas.cer; // greater
let cGreater = cGreat + bas.cer; // Greater
let cthen = bas.ct + phn.chen; // then
let cThen = bas.cT + phn.chen; // Then
let cthan = bas.ct + phn.chan; // than
let cThan = bas.cT + phn.chan; // Than
let cAssertExists = cAssert + cExists; // AssertExists
let cAssertNotExists = cAssert + gen.cNot + cExists; // AssertNotExists
let cAssertValueEqual = cAssert + cValue + cEqual; // AssertValueEqual
let cAssertValueNotEqual = cAssert + cValue + gen.cNot + cEqual; // AssertValueNotEqual
let cAssertValueLessThan = cAssert + cValue + cLess + cThan; // AssertValueLessThan
let cAssertValueGreaterThan = cAssert + cValue + cGreater + cThan; // AssertValueGreaterThan
let cAssertion = cAssert + phn.cion; // Assertion
let cAssertionType = cAssertion + cType; // AssertionType
let cUploadStyle = cUpload + cStyle; // UploadStyle
let cAssertionStyle = cAssertion + cStyle; // AssertionStyle
let cby = bas.cby; // by
let cBy = bas.cBy; // By
let cBY = bas.cBY; // BY
let cOr = bas.cOr; // Or
let cor = bas.cor; // or
let cOR = bas.cOR; // OR
let cmix = bas.camai + bas.cx; // mix // For some reason JavaScript doesn't like cmi.
let cMix = bas.cMi + bas.cx; // Mix
let cmixed = cmix + bas.ced; // mixed
let cMixed = cMix + bas.ced; // Mixed
let calpha = bas.ca + phn.clpha; // alpha
let cAlpha = bas.cA + phn.clpha; // Alpha
let cbetic = bas.cbe + bas.cti + bas.cc; // betic
let calphabet = calpha + phn.cbet; // alphabet
let cAlphabet = cAlpha + phn.cbet; // Alphabet
let calphabetic = calpha + cbetic; // alphabetic
let cAlphabetic = cAlpha + cbetic; // Alphabetic
let ctext = bas.ct + phn.cext; // text
let cText = bas.cT + phn.cext; // Text
let cTEXT = bas.cTE + bas.cXT; // TEXT
let ccontext = phn.ccon + ctext; // context
let cContext = phn.cCon + ctext; // Context
let cinput = bas.cin + cput; // input
let cInput = bas.cIn + cput; // Input
let cINPUT = bas.cIN + cPUT; // INPUT
let cinputs = cinput + bas.cs; // inputs
let cInputs = cInput + bas.cs; // Inputs
let cinputting = cinput + bas.ct + phn.cing; // inputting
let cInputting = cInput + bas.ct + phn.cing; // Inputting
let cdescription = bas.cde + bas.csc + bas.cri + bas.cp + phn.ction; // description
let cDescription = bas.cDe + bas.csc + bas.cri + bas.cp + phn.ction; // Description
let cconstant = phn.ccon + phn.cstant; //constant
let cConstant = phn.cCon + bas.cst + bas.can + bas.ct; // Constant
let cconstants = cconstant + bas.cs; // constants
let cConstants = cConstant + bas.cs; // Constants
let citeration = bas.cit + phn.cera + phn.ction; // iteration
let cIteration = bas.cIt + phn.cera + phn.ction; // Iteration
let cproject = bas.cp + phn.croject; // project
let cProject = bas.cP + phn.croject; // Project
let cProjects = cProject + bas.cs; // Projects
let cAdvance = bas.cAd + bas.cva + bas.cnc + bas.ce; // Advance
let cAdvanced = cAdvance + bas.cd; // Advanced
let cCreation = bas.cCr + bas.cea + phn.ction; // Creation
let ctestData = ctest + cData; // testData
let cpageData = cpage + cData; // pageData
let cPageData = cPage + cData; // PageData
let cTestName = cTest + cName; // TestName
let cPageName = cPage + cName; // PageName
let cbed = bas.cbe + bas.cd; // bed
let cBed = bas.cBe + bas.cd; // Bed
let cbeds = cbed + bas.cs; // beds
let cBeds = cBed + bas.cs; // Beds
let cbedded = cbed + phn.cded; // bedded
let cBedded = cBed + phn.cded; // Bedded
let cbedding = cbed + bas.cd + phn.cing; // bedding
let cBedding = cBed + bas.cd + phn.cing; // Bedding
let cweb = bas.cwe + bas.cb; // web
let cWeb = bas.cWe + bas.cb; // Web
let cwebs = cweb + bas.cs; // webs
let cWebs = cWeb + bas.cs; // Webs
let cwebbed = cweb + cbed; // webbed
let cWebbed = cWeb + cbed; // webbed
let cwebbing = cweb + phn.cbing; // webbing
let cWebbing = cWeb + phn.cbing; // Webbing
let cWebkey = bas.cWe + bas.cb + ckey; // Webkey
let cfile = bas.cf + phn.cile; // file
let cFile = bas.cF + phn.cile; // File
let cfiles = cfile + bas.cs; // files
let cFiles = cFile + bas.cs; // Files
let cfilename = cfile + cname; // filename
let cFilename = cFile + cname; // Filename
let cfilenames = cfilename + bas.cs; // filenames
let cFilenames = cFilename + bas.cs; // Filenames
let cfold = bas.cfo + bas.cld; // fold
let cFold = bas.cFo + bas.cld; // Fold
let cFolder = cFold + bas.cer; // Folder
let cfolder = cfold + bas.cer; // folder
let cfolders = cfolder + bas.cs; // folders
let cFolders = cFolder + bas.cs; // Folders
let ccafe = bas.cca + bas.cfe; // cafe
let ccert = bas.cce + bas.crt; // cert
let csrc = bas.csr + bas.cc; // src
let cbin = bas.cbi + bas.cn; // bin
let cnation = bas.cn + phn.cation; // nation
let cNation = bas.cN + phn.cation; // Nation
let csource = bas.cs + phn.cource; // source
let cSource = bas.cS + phn.cource; // Source
let cdestination = phn.cdest + bas.ci + cnation; // destination
let cDestination = phn.cDest + bas.ci + cnation; // Destination
let cresource = bas.cre + csource; // resource
let cResource = bas.cRe + csource; // Resource
let cresources = cresource + bas.cs; // resources
let cResources = cResource + bas.cs; // Resources
let cclass = bas.cc + phn.c_lass; // class
let cClass = bas.cC + phn.c_lass; // Class
let cIngestion = bas.cIn + bas.cge + bas.cs + phn.ction; // Ingestion
let cis = bas.cis; // is
let cIs = bas.cIs; // Is
let cIS = bas.cIS; // IS
let ccheck = bas.cc + phn.check; // check
let cCheck = bas.cC + phn.check; // Check
let cchecks = ccheck + bas.cs; // checks
let cChecks = cCheck + bas.cs; // Checks
let cchecked = ccheck + bas.ced; // checked
let cChecked = cCheck + bas.ced; // Checked
let celement = bas.cel + bas.ce + phn.cment; // element
let cElement = bas.cEl + bas.ce + phn.cment; // Element
let celements = celement + bas.cs; // elements
let cElements = cElement + bas.cs; // Elements
let cElementName = cElement + cName; // ElementName
let callow = call + bas.cow; // allow
let cAllow = cAll + bas.cow; // Allow
let callowable = callow + phn.cable; // allowable
let cAllowable = cAllow + phn.cable; // Allowable
let chome = bas.cho + bas.cme; // home
let cHome = bas.cHo + bas.cme; // Home
let cpublic = bas.cpu + bas.cbl + bas.cic; // public
let cPublic = bas.cPu + bas.cbl + bas.cic; // Public
let cspecial = bas.csp + bas.cec + bas.cia + bas.cl; // special
let cSpecial = bas.cSp + bas.cec + bas.cia + bas.cl; // Special
let ccharacter = cchar + bas.cac + phn.cter; // character
let cCharacter = cChar + bas.cac + phn.cter; // Character
let ccharacters = ccharacter + bas.cs; // characters
let cCharacters = cCharacter + bas.cs; // Characters
let cedge = bas.ced + bas.cge; // edge
let cEdge = bas.cEd + bas.cge; // Edge
let cWorks = cWork + bas.cs; // Works
let csolid = bas.cs + phn.colid; // solid
let cSolid = bas.cS + phn.colid; // Solid
let cBinary = bas.cBi + bas.cna + bas.cry; // Binary
let cTimeout = cTime + cout; // Timeout
let cTimeOut = cTime + cOut; // TimeOut
let cDwell = bas.cDw + bas.cel + bas.cl; // Dwell
let ccut = bas.ccu + bas.ct; // cut
let cCut = bas.cCu + bas.ct; // Cut
let ccuts = ccut + bas.cs; // cuts
let cCuts = cCut + bas.cs; // Cuts
let ccutting = ccut + bas.ct + phn.cing; // cutting
let cCutting = cCut + bas.ct + phn.cing; // Cutting
let ccute = bas.cc + phn.cute; // cute
let cCute = bas.cC + phn.cute; // Cute
let cexecute = gen.cexe + ccute; // execute
let cExecute = gen.cExe + ccute; // Execute
let cexecutes = cexecute + bas.cs; // executes
let cExecutes = cExecute + bas.cs; // Executes
let cexecuted = cexecute + bas.cd; // executed
let cExecuted = cExecute + bas.cd; // Executed
let cexecuting = gen.cexe + ccut + phn.cing; // executing
let cExecuting = gen.cExe + ccut + phn.cing; // Executing
let csibling = bas.cs + phn.cibling; // sibling
let cSibling = bas.cS + phn.cibling; // Sibling
let cchild = bas.cc + phn.child; // child
let cChild = bas.cC + phn.child; // Child
let cfilter = bas.cf + phn.cilter; // filter
let cFilter = bas.cF + phn.cilter; // Filter
let cattribute = bas.ca + phn.cttribute; // attribute
let cAttribute = bas.cA + phn.cttribute; // Attribute
let cattributes = bas.ca + phn.cttributes; // attributes
let cAttributes = bas.cA + phn.cttributes; // Attributes
let cdisabled = bas.cd + phn.cisabled; // disabled
let cDisabled = bas.cD + phn.cisabled; // Disabled
let cman = bas.cma + bas.cn; // man
let cMan = bas.cMa + bas.cn; // Man
let cwoman = bas.cwo + cman; // woman
let cWoman = bas.cWo + cman; // Woman
let ccell = bas.cc + phn.cell; // cell
let cCell = bas.cC + phn.cell; // Cell
let chung = bas.ch + phn.cung; // hung
let cHung = bas.cH + phn.cung; // Hung
let cport = bas.cpo + bas.crt; // port
let cPort = bas.cPo + bas.crt; // Port
let cConstructor = bas.cCo + bas.cns + bas.ctr + bas.cu + phn.cctor; // Constructor
let cwarn = bas.cw + phn.carn; // warn
let cWarn = bas.cW + phn.carn; // Warn
let cWARN = bas.cW + bas.cAR + bas.cN; // WARN
let cwarning = cwarn + phn.cing; // warning
let cWarning = cWarn + phn.cing; // Warning
let cWARNING = cWARN + phn.cING; // WARNING
let cwarnings = cwarning + bas.cs; // warnings
let cWarnings = cWarning + bas.cs; // Warnings
let cerror = bas.ce + phn.crror; // error
let cError = bas.cE + phn.crror; // Error
let cERROR = bas.cE + phn.cRROR; // ERROR
let cash = bas.cas + bas.ch; // ash
let cAsh = bas.cAs + bas.ch; // Ash
let cdash = bas.cd + cash; // dash
let cDash = bas.cD + cash; // Dash
let cboard = bas.cbo + phn.card; // board
let cDashboard = cDash + cboard; // Dashboard
let ccompose = bas.cco + bas.cmp + phn.cose; // compose
let cdecompose = bas.cde + ccompose; // decompose
let cDecompose = bas.cDe + ccompose; // Decompose
let carray = bas.car + phn.cray; // array
let cArray = bas.cAr + phn.cray; // Array
let carrays = carray + bas.cs; // arrays
let cArrays = cArray + bas.cs; // Arrays
let ccamel = bas.cca + phn.cmel; // camel
let cCamel = bas.cCa + phn.cmel; // Camel
let cround = bas.cr + phn.cound; // round
let cRound = bas.cR + phn.cound; // Round
let crounded = cround + bas.ced; // rounded
let cRounded = cRound + bas.ced; // Rounded
let cquart = bas.cqu + phn.cart; // quart
let cQuart = bas.cQu + phn.cart; // Quart
let cquarter = cquart + bas.cer; // quarter
let cQuarter = cQuart + bas.cer; // Quarter
let cquaternion = bas.cqu + bas.cat + bas.cer + phn.cnion; // quaternion
let cQuaternion = bas.cQu + bas.cat + bas.cer + phn.cnion; // Quaternion
let cnormal = bas.cn + phn.cormal; // normal
let cNormal = bas.cN + phn.cormal; // Normal
let cnormalize = cnormal + phn.cize; // normalize
let cNormalize = cNormal + phn.cize; // Normalize
let cnominal = phn.cnom + phn.cinal; // nominal
let cNominal = phn.cNom + phn.cinal; // Nominal
let cdegree = bas.cd + phn.cegree; // degree
let cDegree = bas.cD + phn.cegree; // Degree
let cdegrees = cdegree + bas.cs; // degrees
let cDegrees = cDegree + bas.cs; // Degrees
let cangle = bas.can + phn.cgle; // angle
let cAngle = bas.cAn + phn.cgle; // Angle
let ctrap = bas.ct + phn.crap; // trap
let cTrap = bas.cT + phn.crap; // Trap
let cFraction = phn.cFra + phn.cction; // Fraction
let cvector = bas.cve + phn.cctor; // vector
let cVector = bas.cVe + phn.cctor; // Vector
let cfor = bas.cfo + bas.cr; // for
let cFor = bas.cFo + bas.cr; // For
let cform = cfor + bas.cm; // form
let cForm = cFor + bas.cm; // Form
let ctransform = phn.ctrans + cform; // transform
let cTransform = phn.cTrans + cform; // Transform
let cpoint = bas.cpo + phn.cint; // point
let cPoint = bas.cPo + phn.cint; // Point
let clocation = phn.cloc + phn.cation; // location
let cLocation = phn.cLoc + phn.cation; // Location
let csort = bas.cs + phn.cort; // sort
let cSort = bas.cS + phn.cort; // Sort
let csimplify = phn.csim + phn.cplify; // simplify
let cSimplify = phn.cSim + phn.cplify; // Simplify
let cconsolidate = phn.ccon + phn.csol + bas.ci + cdate; // consolidate
let cConsolidate = phn.cCon + phn.csol + bas.ci + cdate; // Consolidate
let cconsolidated = cconsolidate + bas.cd; // consolidated
let cConsolidated = cConsolidate + bas.cd; // Consolidated
let cconsolidates = cconsolidate + bas.cs; // consolidates
let cConsolidates = cConsolidate + bas.cs; // Consolidates
let cconsolidating = phn.ccon + csolid + bas.cat + phn.cing; // consolidating
let cConsolidating = phn.cCon + csolid + bas.cat + phn.cing; // Consolidating
let care = phn.care; // are
let cAre = bas.cAr + bas.ce; // Are
let cARE = bas.cAR + bas.cE; // ARE
let ccompare = phn.ccomp + phn.care; // compare
let cCompare = phn.cComp + phn.care; // Compare
let ccompares = ccompare + bas.cs; // compares
let cCompares = cCompare + bas.cs; // Compares
let ccompared = ccompare + bas.cd; // compared
let cCompared = cCompare + bas.cd; // Compared
let ccomparing = phn.ccomp + bas.car + phn.cing; // comparing
let cComparing = phn.cComp + bas.car + phn.cing; // Comparing
let ccomparison = phn.ccomp + bas.car + phn.cison; // comparison
let cComparison = phn.cComp + bas.car + phn.cison; // Comparison
let ccomparisons = ccomparison + bas.cs; // comparisons
let cComparisons = cComparison + bas.cs; // Comparisons
let ccontain = phn.ccon + phn.ctain; // contain
let cContain = phn.cCon + phn.ctain; // Contain
let ccontains = ccontain + bas.cs; // contains
let cContains = cContain + bas.cs; // Contains
let ccontained = ccontain + bas.ced; // contained
let cContained = cContain + bas.ced; // Contained
let ccontaining = ccontain + phn.cing; // containing
let cContaining = cContain + phn.cing; // Containing
let cvideo = bas.cv + phn.cideo; // video
let cVideo = bas.cV + phn.cideo; // Video
let cProduct = phn.cPro + phn.cduct; // Product
let caggregate = bas.ca + phn.cggregate; // aggregate
let cAggregate = bas.cA + phn.cggregate; // Aggregate
let carguments = bas.ca + bas.crg + bas.cu + phn.cments; // arguments
let cArguments = bas.cA + bas.crg + bas.cu + phn.cments; // Arguments
let cDifference = phn.cDiff + bas.cer + phn.cence; // Difference
let cbet = bas.cbe + bas.ct; // bet
let cBet = bas.cBe + bas.ct; // Bet
let cbetween = cbet + phn.cween; // between
let cBetween = cBet + phn.cween; // Between
let ccertain = bas.cce + bas.crt + phn.cain; // certain
let cascertain = bas.cas + ccertain; // ascertain
let cAscertain = bas.cAs + ccertain; // Ascertain
let cmatch = bas.cma + phn.ctch; // match
let cMatch = bas.cMa + phn.ctch; // Match
let cmatching = cmatch + phn.cing; // matching
let cMatching = cMatch + phn.cing; // Matching
let cdoes = bas.cdo + bas.ces; // does
let cDoes = bas.cDo + bas.ces; // Does
let cDOES = bas.cDO + bas.cES; // DOES
let capplication = phn.capp + phn.clica + phn.ction; // application
let cApplication = phn.cApp + phn.clica + phn.ction; // Application
let cAPPLICATION = phn.cAPP + phn.cLICA + phn.cTION; // APPLICATION
let cbuild = bas.cbu + phn.cild; // build
let cBuild = bas.cBu + phn.cild; // Build
let cdeploy = bas.cd + bas.cep + phn.cloy; // deploy
let cDeploy = bas.cD + bas.cep + phn.cloy; // Deploy
let cDEPLOY = bas.cD + bas.cEP + phn.cLOY; // DEPLOY
let cdeployment = cdeploy + phn.cment; // deployment
let cDeployment = cDeploy + phn.cment; // Deployment
let clease = bas.cle + phn.c_ase; // lease
let cLEASE = bas.cLE + phn.c_ASE; // LEASE
let crelease = bas.cre + clease; // release
let cRelease = bas.cRe + clease; // Release
let cRELEASE = bas.cRE + cLEASE; // RELEASE
let creleases = crelease + bas.cs; // releases
let cReleases = cRelease + bas.cs; // Releases
let creleased = crelease + bas.cd; // released
let cReleased = cRelease + bas.cd; // Released
let creleasing = bas.cre + phn.cleas + phn.cing; // releasing
let cReleasing = bas.cRe + phn.cleas + phn.cing; // Releasing
let croot = bas.cr + phn.coot; // root
let cRoot = bas.cR + phn.coot; // Root
let cparse = bas.cp + phn.carse; // parse
let cParse = bas.cP + phn.carse; // Parse
let cPARSE = bas.cP + phn.cARSE; // PARSE
let cparser = cparse + bas.cr; // parser
let cParser = cParse + bas.cr; // Parser
let cPARSER = cPARSE + bas.cR; // PARSER
let cparsed = cparse + bas.cd; // parsed
let cParsed = cParse + bas.cd; // Parsed
let cparsing = bas.cp + phn.cars + phn.cing; // parsing
let cParsing = bas.cP + phn.cars + phn.cing; // Parsing
let cforward = cfor + phn.cward; // forward
let cForward = cFor + phn.cward; // Forward
let cslash = bas.cs + phn.clash; // slash
let cSlash = bas.cS + phn.clash; // Slash
let cmeta = bas.cm + phn.ceta; // meta
let cMeta = bas.cM + phn.ceta; // Meta
let cmetaData = cmeta + cData; // metaData
let cMetaData = cMeta + cData; // MetaData
let cbusiness = bas.cb + phn.cusiness; // business
let cBusiness = bas.cB + phn.cusiness; // Business
let crule = bas.cr + phn.cule; // rule
let cRule = bas.cR + phn.cule; // Rule
let cfresh = bas.cfr + phn.cesh; // fresh
let crefresh = bas.cre + cfresh; // refresh
let cRefresh = bas.cRe + cfresh; // Refresh
let ceval = bas.ce + phn.cval; // eval
let cEval = bas.cE + phn.cval; // Eval
let creload = bas.cre + cload; // reload
let cReload = bas.cRe + cload; // Reload
let cdemo = bas.cd + phn.cemo; // demo
let cDemo = bas.cD + phn.cemo; // Demo
let ccommon = bas.cc + phn.common; // common
let cCommon = bas.cC + phn.common; // Common
let cfunction = bas.cf + bas.cun + phn.cction; // function
let cFunction = bas.cF + bas.cun + phn.cction; // Function
let cfunctions = cfunction + bas.cs; // functions
let cFunctions = cFunction + bas.cs; // Functions
let cmultiple = phn.cmulti + phn.cple; // multiple
let cMultiple = phn.cMulti + phn.cple; // Multiple
let cJournal = bas.cJo + bas.cur + phn.cnal; // Journal
let cExecution = phn.cExe + bas.ccu + phn.ction; // Execution
let cpercent = phn.cper + phn.ccent; // percent
let cPercent = phn.cPer + phn.ccent; // Percent
let cbasic = bas.cb + phn.casic; // basic
let cBasic = bas.cB + phn.casic; // Basic
let codd = bas.cod + bas.cd; // odd
let cOdd = bas.cOd + bas.cd; // Odd
let ceven = bas.ce + phn.cven; // even
let cEven = bas.cE + phn.cven; // Even
let cEVEN = bas.cE + phn.cVEN; // EVEN
let cevent = bas.ce + phn.cvent; // event
let cEvent = bas.cE + phn.cvent; // Event
let cevents = cevent + bas.cs; // events
let cEvents = cEvent + bas.cs; // Events
let cface = bas.cfa + bas.cce; // face
let cFace = bas.cFa + bas.cce; // Face
let cargument = phn.carg + bas.cu + phn.cment; // argument
let cArgument = phn.cArg + bas.cu + phn.cment; // Argument
let cdrive = bas.cd + phn.crive; // drive
let cDrive = bas.cD + phn.crive; // Drive
let cdriven = cdrive + bas.cn; // driven
let cDriven = cDrive + bas.cn; // Driven
let cinterface = phn.cinter + cface; // interface
let cInterface = phn.cInter + cface; // Interface
let cfont = bas.cf + phn.cont; // font
let cFont = bas.cF + phn.cont; // Font
let cmodule = phn.cmod + phn.cule; // module
let cModule = phn.cMod + phn.cule; // Module
let ccolor = phn.ccol + bas.cor; // color
let cColor = phn.cCol + bas.cor; // Color
let ccolors = ccolor + bas.cs; // colors
let cColors = cColor + bas.cs; // Colors
let ccolored = ccolor + bas.ced; // colored
let cColored = cColor + bas.ced; // Colored
let ccolorize = ccolor + phn.cize; // colorize
let cColorize = cColor + phn.cize; // Colorize
let ccolorized = ccolorize + bas.cd; // colorized
let cColorized = cColorize + bas.cd; // Colorized
let cold = bas.col + bas.cd; // old
let cOld = bas.cOl + bas.cd; // Old
let cbold = bas.cb + cold; // bold
let cBold = bas.cB + cold; // Bold
let cmost = bas.cm + phn.cost; // most
let cMost = bas.cM + phn.cost; // Most
let cpop = bas.cpo + bas.cp; // pop
let cPop = bas.cPo + bas.cp; // Pop
let cPOP = bas.cPO + bas.cP; // POP
let cpopular = cpop + phn.cular; // popular
let cPopular = cPop + phn.cular; // Popular
let calmost = bas.cal + cmost; // almost
let cAlmost = bas.cAl + cmost; // Almost
let cpal = bas.cpa + bas.cl; // pal
let cPal = bas.cPa + bas.cl; // Pal
let cpalindrome = cpal + bas.cin + phn.cdrome; // palindrome
let cPalindrome = cPal + bas.cin + phn.cdrome; // Palindrome
let caverage = phn.cave + phn.crage; // average
let cAverage = phn.cAve + phn.crage; // Average
let cclient = phn.ccli + phn.cent; // client
let cClient = phn.cCli + phn.cent; // Client
let crules = bas.cr + phn.cules; // rules
let cRules = bas.cR + phn.cules; // Rules
let ccustom = phn.ccust + bas.com; // custom
let cCustom = phn.cCust + bas.com; // Custom
let ccommand = phn.ccom + phn.cmand; // command
let cCommand = phn.cCom + phn.cmand; // Command
let cCOMMAND = phn.cCOM + phn.cMAND; // COMMAND
let ccommands = ccommand + bas.cs; // commands
let cCommands = cCommand + bas.cs; // Commands
let cqueue = bas.cqu + bas.ceu + bas.ce; // queue
let cQueue = bas.cQu + bas.ceu + bas.ce; // Queue
let cblob = bas.cb + phn.clob; // blob
let cBlob = bas.cB + phn.clob; // Blob
let cframe = bas.cf + phn.crame; // frame
let cFrame = bas.cF + phn.crame; // Frame
let calias = bas.cal + phn.cias; // alias
let cAlias = bas.cAl + phn.cias; // Alias
let caliases = calias + bas.ces; // aliases
let cAliases = cAlias + bas.ces; // Aliases
let csequencer = phn.cseq + bas.cue + phn.cncer; // sequencer
let cSequencer = phn.cSeq + bas.cue + phn.cncer; // Sequencer
let cprimary = phn.cpri + phn.cmary; // primary
let cPrimary = phn.cPri + phn.cmary; // Primary
let csecondary = unt.csecond + phn.cary; // secondary
let cSecondary = unt.cSecond + phn.cary; // Secondary
let ctertiary = phn.ctert + phn.ciary; // tertiary
let cTertiary = phn.cTert + phn.ciary; // Tertiary
let cdelimit = bas.cde + climit; // delimit
let cDelimit = bas.cDe + climit; // Delimit
let cdelimiter = cdelimit + bas.cer; // delimiter
let cDelimiter = cDelimit + bas.cer; // Delimiter
let cdelimiters = cdelimiter + bas.cs; // delimiters
let cDelimiters = cDelimiter + bas.cs; // Delimiters
let cdelimited = cdelimit + bas.ced; // delimited
let cDelimited = cDelimit + bas.ced; // Delimited
let cdelimiting = cdelimit + phn.cing; // delimiting
let cDelimiting = cDelimit + phn.cing; // Delimiting
let chelp = bas.che + bas.clp; // help
let cHelp = bas.cHe + bas.clp; // Help
let cprint = bas.cp + phn.crint; // print
let cPrint = bas.cP + phn.crint; // Print
let chive = bas.ch + phn.cive; // hive
let cHive = bas.cH + phn.cive; // Hive
let cgenerator = phn.cgen + bas.cer + phn.cator; // generator
let cGenerator = phn.cGen + bas.cer + phn.cator; // Generator
let cindex = bas.cin + phn.cdex; // index
let cIndex = bas.cIn + phn.cdex; // Index
let cabout = bas.ca + phn.cbout; // about
let cAbout = bas.cA + phn.cbout; // About
let cstart = bas.cs + phn.ctart; // start
let cStart = bas.cS + phn.ctart; // Start
let cstarts = cstart + bas.cs; // starts
let cStarts = cStart + bas.cs; // Starts
let cstarted = cstart + bas.ced; // started
let cStarted = cStart + bas.ced; // Started
let cstartup = cstart + bas.cup; // startup
let cstarting = cstart + phn.cing; // starting
let cStarting = cStart + phn.cing; // Starting
let coutput = cout + cput; // output
let cOutput = cOut + cput; // Output
let cmetric = phn.cmet + phn.cric; // metric
let cMetric = phn.cMet + phn.cric; // Metric
let cmetrics = cmetric + bas.cs; // metrics
let cMetrics = cMetric + bas.cs; // Metrics
let crack = bas.cr + phn.cack; // rack
let cRack = bas.cR + phn.cack; // Rack
let ctrack = bas.ct + crack; // track
let cTrack = bas.cT + crack; // Track
let ctracking = ctrack + phn.cing; // tracking
let cTracking = cTrack + phn.cing; // Tracking
let cstack = bas.cst + phn.cack; // stack
let cStack = bas.cSt + phn.cack; // Stack
let cstandard = bas.cst + cand + phn.card; // standard
let cStandard = bas.cSt + cand + phn.card; // Standard
let cdeviation = phn.cdev + bas.cia + phn.ction; // deviation
let cDeviation = phn.cDev + bas.cia + phn.ction; // Deviation
let canalysis = phn.cana + bas.cly + phn.csis; // analysis
let cAnalysis = phn.cAna + bas.cly + phn.csis; // Analysis
let cclear = bas.ccl + phn.cear; // clear
let cClear = bas.cCl + phn.cear; // Clear
let cversion = phn.cver + phn.csion; // version
let cVersion = phn.cVer + phn.csion; // Version
let ccontrol = phn.ccon + phn.ctrol; // control
let cControl = phn.cCon + phn.ctrol; // Control
let ccontrols = ccontrol + bas.cs; // controls
let cControls = cControl + bas.cs; // Controls
let ccontrolled = ccontrol + phn.cled; // controlled
let cControlled = cControl + phn.cled; // Controlled
let ccontrolling = ccontrol + phn.cling; // controlling
let cControlling = cControl + phn.cling; // Controlling
let ccontroller = ccontrol + phn.cler; // controller
let cController = cControl + phn.cler; // Controller
let ccontrollers = ccontroller + bas.cs; // controllers
let cControllers = cController + bas.cs; // Controllers
let cperform = phn.cper + cform; // perform
let cPerform = phn.cPer + cform; // Perform
let cperformance = cperform + phn.cance; // performance
let cPerformance = cPerform + phn.cance; // Performance
let cconversion = phn.ccon + cversion; // conversion
let cConversion = phn.cCon + cversion; // Conversion
let cpass = bas.cp + phn.cass; // pass
let cPass = bas.cP + phn.cass; // Pass
let cPASS = bas.cP + phn.cASS; // PASS
let cpassed = cpass + bas.ced; // passed
let cPassed = cPass + bas.ced; // Passed
let cPASSED = cPASS + bas.cED; // PASSED
let cpassing = cpass + phn.cing; // passing
let cPassing = cPass + phn.cing; // Passing
let cbypass = bas.cby + cpass; // bypass
let cBypass = bas.cBy + cpass; // Bypass
let cbypasses = cbypass + bas.ces; // bypasses
let cBypasses = cBypass + bas.ces; // Bypasses
let cbypassed = cbypass + bas.ced; // bypassed
let cBypassed = cBypass + bas.ced; // Bypassed
let cbypassing = cbypass + phn.cing; // bypassing
let cBypassing = cBypass + phn.cing; // Bypassing
let cfail = bas.cf + phn.cail; // fail
let cFail = bas.cF + phn.cail; // Fail
let cFAIL = bas.cF + phn.cAIL; // FAIL
let cfailed = cfail + bas.ced; // failed
let cFailed = cFail + bas.ced; // Failed
let cFAILED = cFAIL + bas.cED; // FAILED
let cfailure = cfail + phn.cure; // failure
let cFailure = cFail + phn.cure; // Failure
let csimplified = phn.csim + bas.cpl + phn.cified; // simplified
let cSimplified = phn.cSim + bas.cpl + phn.cified; // Simplified
let ctraditional = phn.ctrad + bas.ci + phn.ctional; // traditional
let cTraditional = phn.cTrad + bas.ci + phn.ctional; // Traditional
let cground = bas.cgr + phn.cound; // ground
let cGround = bas.cGr + phn.cound; // Ground
let cyell = bas.cye + bas.cll; // yell
let cYell = bas.cYe + bas.cll; // Yell
let clack = bas.cla + bas.cck; // lack
let cLack = bas.cLa + bas.cck; // Lack
let clane = bas.cl + phn.cane; // lane
let cLane = bas.cL + phn.cane; // Lane
let csection = phn.csec + phn.ction; // section
let cSection = phn.cSec + phn.ction; // Section
let csections = csection + bas.cs; // sections
let cSections = cSection + bas.cs; // Sections
let cunit = phn.cuni + bas.ct; // unit
let cUnit = phn.cUni + bas.ct; // Unit
let cunits = cunit + bas.cs;
let cUnits = cUnit + bas.cs;
let cgeneric = phn.cgen + bas.ce + phn.cric; // generic
let cGeneric = phn.cGen + bas.ce + phn.cric; // Generic
let cisotope = phn.ciso + phn.ctope; // isotope
let cIsotope = phn.cIso + phn.ctope; // Isotope
let cphonic = phn.cphon + bas.cic; // phonic
let cPhonic = phn.cPhon + bas.cic; // Phonic
let cphonics = cphonic + bas.cs; // phonics
let cPhonics = cPhonic + bas.cs; // Phonics
let cshape = phn.csha + bas.cpe; // shape
let cShape = phn.cSha + bas.cpe; // Shape
let cexport = bas.cex + cport; // export
let cExport = bas.cEx + cport; // Export
let cplay = bas.cp + phn.clay; // play
let cPlay = bas.cP + phn.clay; // Play
let cdisplay = bas.cd + bas.cis + cplay; // display
let cDisplay = bas.cD + bas.cis + cplay; // Display
let csum = bas.csu + bas.cm; // sum
let cSum = bas.cSu + bas.cm; // Sum
let csummary = csum + phn.cmary; // summary
let cSummary = cSum + phn.cmary; // Summary
let csuggest = phn.csug + phn.cgest; // suggest
let cSuggest = phn.cSug + phn.cgest; // Suggest
let csuggested = csuggest + bas.ced; // suggested
let cSuggested = cSuggest + bas.ced; // Suggested
let cline = bas.cli + bas.cne; // line
let cLine = bas.cLi + bas.cne; // Line
let cdocument = gen.cdoc + bas.cu + phn.cment; // document
let cDocument = gen.cDoc + bas.cu + phn.cment; // Document
let cqualified = bas.cq + phn.cual + phn.cified; // qualified
let cQualified = bas.cQ + phn.cual + phn.cified; // Qualified
let cfix = bas.cf + bas.cix; // fix
let cFix = bas.cF + bas.cix; // Fix
let cprefix = phn.cpre + cfix; // prefix
let cPrefix = phn.cPre + cfix; // Prefix
let csuffix = phn.csuf + cfix; // suffix
let cSuffix = phn.cSuf + cfix; // Suffix
let cdevelop = phn.cdev + bas.ce + phn.clop; // develop
let cDevelop = phn.cDev + bas.ce + phn.clop; // Develop
let cDEVELOP = phn.cDEV + bas.cE + phn.cLOP; // DEVELOP
let cdevelopment = cdevelop + phn.cment; // development
let cDevelopment = cDevelop + phn.cment; // Development
let cDEVELOPMENT = cDEVELOP + phn.cMENT; // DEVELOPMENT
let cproduction = phn.cprod + bas.cuc + phn.ction; // production
let cProduction = phn.cProd + bas.cuc + phn.ction; // Production
let cPRODUCTION = phn.cPROD + bas.cUC + phn.cTION; // PRODUCTION
let cstorage = phn.cstor + phn.cage; // storage
let cStorage = phn.cStor + phn.cage; // Storage
let cstore = phn.cstor + bas.ce; // store
let cStore = phn.cStor + bas.ce; // Store
let cstored = phn.cstor + bas.ced; // stored
let cStored = phn.cStor + bas.ced; // Stored
let cunique = phn.cuni + phn.cque; // unique
let cUnique = phn.cUni + phn.cque; // Unique
let cduplicate = phn.cdup + bas.cli + phn.ccate; // duplicate
let cDuplicate = phn.cDup + bas.cli + phn.ccate; // Duplicate
let cplease = bas.cpl + phn.cease; // please
let cPlease = bas.cPl + phn.cease; // Please
let center = bas.cen + phn.cter; // enter
let cEnter = bas.cEn + phn.cter; // Enter
let centers = center + bas.cs; // enters
let cEnters = cEnter + bas.cs; // Enters
let centered = center + bas.ced; // entered
let cEntered = cEnter + bas.ced; // Entered
let centering = center + phn.cing; // entering
let cEntering = cEnter + phn.cing; // Entering
let cwere = bas.cw + phn.cere; // were
let cWere = bas.cW + phn.cere; // Were
let cwhere = bas.cwh + phn.cere; // where
let cWhere = bas.cWh + phn.cere; // Where
let cher = bas.che + bas.cr; // her
let cHer = bas.cHe + bas.cr; // Her
let chim = bas.chi + bas.cm; // him
let cHim = bas.cHi + bas.cm; // Him
let chers = cher + bas.cs; // hers
let cHers = cHer + bas.cs; // Hers
let chis = bas.chi + bas.cs; // his
let cHis = bas.cHi + bas.cs; // His
let cthem = bas.cth + bas.cem; // them
let cThem = bas.cTh + bas.cem; // Them
let cthose = bas.cth + phn.cose; // those
let cThose = bas.cTh + phn.cose; // Those
let cthat = bas.cth + bas.cat; // that
let cThat = bas.cTh + bas.cat; // That
let cthis = bas.ct + chis; // this
let cThis = bas.cT + chis; // This
let cwhen = bas.cwh + bas.cen; // when
let cWhen = bas.cWh + bas.cen; // When
let cwhat = bas.cwh + bas.cat; // what
let cWhat = bas.cWh + bas.cat; // What
let chow = bas.cho + bas.cw; // how
let cHow = bas.cHo + bas.cw; // How
let cwhy = bas.cwh + bas.cy; // why
let cWhy = bas.cWh + bas.cy; // Why
let cother = bas.cot + cher; // other
let cOther = bas.cOt + cher; // Other
let cabreviation = bas.cab + phn.crev + bas.cia + phn.ction; // abreviation
let cAbreviation = bas.cAb + phn.crev + bas.cia + phn.ction; // Abreviation
let cabreviations = cabreviation + bas.cs; // abreviations
let cAbreviations = cAbreviation + bas.cs; // Abreviations
let cacronym = bas.cac + phn.cron + bas.cym; // acronym
let cAcronym = bas.cAc + phn.cron + bas.cym; // Acronym
let cacronyms = cacronym + bas.cs; // acronyms
let cAcronyms = cAcronym + bas.cs; // Acronyms
let csolve = bas.cs + phn.colve; // solve
let cSolve = bas.cS + phn.colve; // Solve
let cLehmer = bas.cLe + bas.chm + bas.cer; // Lehmer
let cdeep = bas.cd + phn.ceep; // deep
let cDeep = bas.cD + phn.ceep; // Deep
let cclone = bas.ccl + num.cone; // clone
let cClone = bas.cCl + num.cone; // Clone
let ccursive = phn.ccur + phn.csive; // cursive
let cCursive = phn.cCur + phn.csive; // Cursive
let crecursive = bas.cre + ccursive; // recursive
let cRecursive = bas.cRe + ccursive; // Recursive
let cexpansion = phn.cexp + bas.can + phn.csion; // expansion
let cExpansion = phn.cExp + bas.can + phn.csion; // Expansion
let cscreen = bas.csc + phn.creen; // screen
let cScreen = bas.cSc + phn.creen; // Screen
let cyou = bas.cyo + bas.cu; // you
let cYou = bas.cYo + bas.cu; // You
let cwould = bas.cw + phn.could; // would
let cWould = bas.cW + phn.could; // Would
let cshould = bas.csh + phn.could; // should
let cShould = bas.cSh + phn.could; // Should
let ccould = bas.cc + phn.could; // could
let cCould = bas.cC + phn.could; // Could
let clike = bas.cl + phn.cike; // like
let cLike = bas.cL + phn.cike; // Like
let cfine = bas.cf + phn.cine; // fine
let cFine = bas.cF + phn.cine; // Fine
let cdefine = bas.cde + cfine; // define
let cDefine = bas.cDe + cfine; // Define
let cdefined = cdefine + bas.cd; // defined
let cDefined = cDefine + bas.cd; // Defined
let cdefines = cdefine + bas.cs; // defines
let cDefines = cDefine + bas.cs; // Defines
let cdefining = bas.cde + phn.cfin + phn.cing; // defining
let cDefining = bas.cDe + phn.cfin + phn.cing; // Defining
let cfill = bas.cf + phn.cill; // fill
let cFill = bas.cF + phn.cill; // Fill
let cfulfillment = phn.cful + cfill + phn.cment; // fulfillment
let cFulfillment = phn.cFul + cfill + phn.cment; // Fulfillment
let coptimized = phn.copt + bas.cim + phn.cized; // optimized
let cOptimized = phn.cOpt + bas.cim + phn.cized; // Optimized
let csome = bas.cs + phn.come; // some
let cSome = bas.cS + phn.come; // Some
let ccomb = bas.cc + phn.comb; // comb
let cComb = bas.cC + phn.comb; // Comb
let ccombine = ccomb + phn.cine; // combine
let cCombine = cComb + phn.cine; // Combine
let ccombines = ccombine + bas.cs; // combines
let cCombines = cCombine + bas.cs; // Combines
let ccombined = ccombine + bas.cd; // combined
let cCombined = cCombine + bas.cd; // Combined
let ccombining = ccomb + bas.cin + phn.cing; // combining
let cCombining = cComb + bas.cin + phn.cing; // Combining
let crecombine = bas.cre + ccombine; // recombine
let cRecombine = bas.cRe + ccombine; // Recombine
let ccombination = ccomb + bas.cin + phn.cation; // combination
let cCombination = cComb + bas.cin + phn.cation; // Combination
let ccombinations = ccombination + bas.cs; // combinations
let cCombinations = cCombination + bas.cs; // Combinations
let crecognizer = phn.crec + bas.cog + bas.cn + phn.cizer; // recognizer
let cRecognizer = phn.cRec + bas.cog + bas.cn + phn.cizer; // Recognizer
let cpat = bas.cpa + bas.ct; // pat
let cPat = bas.cPa + bas.ct; // Pat
let cpatt = cpat + bas.ct; // patt
let cPatt = cPat + bas.ct; // Patt
let cpattern = cpatt + phn.cern; // pattern
let cPattern = cPatt + phn.cern; // Pattern
let cpatterns = cpattern + bas.cs; // patterns
let cPatterns = cPattern + bas.cs; // Patterns
let ccoma = gen.ccom + bas.ca; // coma
let cComa = gen.cCom + bas.ca; // Coma
let ccomas = ccoma + bas.cs; // comas
let cComas = cComa + bas.cs; // Comas
let cseparate = bas.cse + bas.cpa + phn.crate; // separate
let cSeparate = bas.cSe + bas.cpa + phn.crate; // Separate
let cseparated = cseparate + bas.cd; // separated
let cSeparated = cSeparate + bas.cd; // Separated
let csea = bas.cse + bas.ca; // sea
let cSea = bas.cSe + bas.ca; // Sea
let csearch = csea + phn.crch; // search
let cSearch = cSea + phn.crch; // Search
let csearches = csearch + bas.ces; // searches
let cSearches = cSearch + bas.ces; // Searches
let csearched = csearch + bas.ced; // searched
let cSearched = cSearch + bas.ced; // Searched
let csearching = csearch + phn.cing; // searching
let cSearching = cSearch + phn.cing; // Searching
let cneed = bas.cn + phn.ceed; // need
let cNeed = bas.cN + phn.ceed; // Need
let cimplement = bas.cim + phn.cple + phn.cment; // implement
let cImplement = bas.cIm + phn.cple + phn.cment; // Implement
let cimplements = cimplement + bas.cs; // implements
let cImplements = cImplement + bas.cs; // Implements
let cimplementation = cimplement + phn.cation; // implementation
let cImplementation = cImplement + phn.cation; // Implementation
let cgoing = bas.cgo + phn.cing; // going
let cGoing = bas.cGo + phn.cing; // Going
let cmain = bas.cm + phn.cain; // main
let cMain = bas.cM + phn.cain; // Main
let cprogram = phn.cpro + bas.cg + phn.cram; // program
let cProgram = phn.cPro + bas.cg + phn.cram; // Program
let cloop = bas.cl + phn.coop; // loop
let cLoop = bas.cL + phn.coop; // Loop
let cgood = bas.cg + phn.cood; // good
let cGood = bas.cG + phn.cood; // Good
let cbye = bas.cby + bas.ce; // bye
let cBye = bas.cBy + bas.ce; // Bye
let chave = bas.ch + phn.cave; // have
let cHave = bas.cH + phn.cave; // Have
let cnice = bas.cn + phn.cice; // nice
let cNice = bas.cN + phn.cice; // Nice
let cday = bas.cda + bas.cy; // day
let cDay = bas.cDa + bas.cy; // Day
let cstay = bas.cs + phn.ctay; // stay
let cStay = bas.cS + phn.ctay; // Stay
let csafe = bas.cs + phn.cafe; // safe
let cSafe = bas.cS + phn.cafe; // Safe
let cwas = bas.cwa + bas.cs; // was
let cWas = bas.cWa + bas.cs; // Was
let cbig = bas.cbi + bas.cg; // big
let cBig = bas.cBi + bas.cg; // Big
let cbigger = cbig + phn.cger; // bigger
let cBigger = cBig + phn.cger; // Bigger
let cbiggest = cbig + phn.cgest; // biggest
let cBiggest = cBig + phn.cgest; // Biggest
let cspecific = phn.cspec + phn.cific; // specific
let cSpecific = phn.cSpec + phn.cific; // Specific
let cspecified = phn.cspec + phn.cified; // specified
let cSpecified = phn.cSpec + phn.cified; // Specified
let cdomain = bas.cdo + cmain; // domain
let cDomain = bas.cDo + cmain; // Domain
let cmode = bas.cm + phn.code; // mode
let cMode = bas.cM + phn.code; // Mode
let csymbol = phn.csym + phn.cbol; // symbol
let cSymbol = phn.cSym + phn.cbol; // Symbol
let csymbols = csymbol + bas.cs; // symbols
let cSymbols = cSymbol + bas.cs; // Symbols
let cresolve = phn.cres + phn.colv + bas.ce; // resolve
let cResolve = phn.cRes + phn.colv + bas.ce; // Resolve
let cresolved = cresolve + bas.cd; // resolved
let cResolved = cResolve + bas.cd; // Resolved
let cresolving = phn.cres + phn.colv + phn.cing; // resolving
let cResolving = phn.cRes + phn.colv + phn.cing; // Resolving
let cvariation = phn.cvar + bas.cia + phn.ction; // variation
let cVariation = phn.cVar + bas.cia + phn.ction; // Variation
let cterm = bas.ct + phn.cerm; // term
let cTerm = bas.cT + phn.cerm; // Term
let ccost = bas.cc + phn.cost; // cost
let cCost = bas.cC + phn.cost; // Cost
let cperiod = phn.cper + phn.ciod; // period
let cPeriod = phn.cPer + phn.ciod; // Period
let ccannot = ccan + gen.cnot; // cannot
let cCannot = cCan + gen.cnot; // Cannot
let cnothing = gen.cnot + phn.ching; // nothing
let cNothing = gen.cNot + phn.ching; // Nothing
let cnothingness = cnothing + phn.cness; // nothingness
let cNothingness = cNothing + phn.cness; // Nothingness
let cused = cuse + bas.cd; // used
let cUsed = cUse + bas.cd; // Used
let cusing = bas.cus + phn.cing; // using
let cUsing = bas.cUs + phn.cing; // Using
let cbreak = bas.cbr + phn.ceak; // break
let cBreak = bas.cBr + phn.ceak; // Break
let cinto = bas.ci + phn.cnto; // into
let cInto = bas.cI + phn.cnto; // Into
let cunable = bas.cun + phn.cable; // unable
let cUnable = bas.cUn + phn.cable; // Unable
let cnow = bas.cno + bas.cw; // now
let cNow = bas.cNo + bas.cw; // Now
let cknow = bas.ck + cnow; // know
let cKnow = bas.cK + cnow; // Know
let cknown = cknow + bas.cn; // known
let cKnown = cKnow + bas.cn; // Known
let cunknown = bas.cun + cknown; // unknown
let cUnknown = bas.cUn + cknown; // Unknown
let ctemp = bas.ct + phn.cemp; // temp
let cTemp = bas.cT + phn.cemp; // Temp
let ctempt = ctemp + bas.ct; // tempt
let cTempt = cTemp + bas.ct; // Tempt
let cattempt = bas.cat + ctempt; // attempt
let cAttempt = bas.cA + bas.ct + ctempt; // Attempt
let cattempts = cattempt + bas.cs; // attempts
let cAttempts = cAttempt + bas.cs; // Attempts
let cattempted = cattempt + bas.ced; // attempted
let cAttempted = cAttempt + bas.ced; // Attempted
let cattempting = cattempt + phn.cing; // attempting
let cAttempting = cAttempt + phn.cing; // Attempting
let cmat = bas.cma + bas.ct; // mat
let cMat = bas.cMa + bas.ct; // Mat
let cformat = cfor + cmat; // format
let cFormat = cFor + cmat; // Format
let cformats = cformat + bas.cs; // formats
let cFormats = cFormat + bas.cs; // Formats
let cformatted = cformat + phn.cted; // formatted
let cFormatted = cFormat + phn.cted; // Formatted
let cformatting = cformat + bas.ct + phn.cing; // formatting
let cFormatting = cFormat + bas.ct + phn.cing; // Formatting
let creformat = bas.cre + cformat; // reformat
let cReformat = bas.cRe + cformat; // Reformat
let creformats = creformat + bas.cs; // reformats
let cReformats = cReformat + bas.cs; // Reformats
let creformated = creformat + bas.ced; // reformatted
let cReformated = cReformat + bas.ced; // Reformatted
let creformating = creformat + phn.cing; // reformatting
let cReformating = cReformat + phn.cing; // Reformatting
let ccorrect = phn.ccor + phn.crect; // correct
let cCorrect = phn.cCor + phn.crect; // Correct
let ccorrects = ccorrect + bas.cs; // corrects
let cCorrects = cCorrect + bas.cs; // Corrects
let ccorrected = ccorrect + bas.ced; // corrected
let cCorrected = cCorrect + bas.ced; // Corrected
let ccorrectly = ccorrect + bas.cly; // correctly
let cCorrectly = cCorrect + bas.cly; // Correctly
let ccorrecting = ccorrect + phn.cing; // correcting
let cCorrecting = cCorrect + phn.cing; // Correcting
let cbut = bas.cbu + bas.ct; // but
let cBut = bas.cBu + bas.ct; // But
let crent = bas.cr + phn.cent; // rent
let cRent = bas.cR + phn.cent; // Rent
let ccurrent = phn.ccur + crent; // current
let cCurrent = phn.cCur + crent; // Current
let cdelta = bas.cde + phn.clta; // delta
let cDelta = bas.cDe + phn.clta; // Delta
let cbeing = bas.cbe + phn.cing; // being
let cBeing = bas.cBe + phn.cing; // Being
let cskip = bas.csk + bas.cip; // skip
let cSkip = bas.cSk + bas.cip; // Skip
let cskips = cskip + bas.cs; // skips
let cSkips = cSkip + bas.cs; // Skips
let cskiped = cskip + bas.ced; // skiped
let cSkiped = cSkip + bas.ced; // Skiped
let cskiping = cskip + phn.cing; // skiping
let cSkiping = cSkip + phn.cing; // Skiping
let chad = bas.cha + bas.cd; // had
let cHad = bas.cHa + bas.cd; // Had
let cchange = bas.cch + phn.cange; // change
let cChange = bas.cCh + phn.cange; // Change
let cCHANGE = bas.cCH + phn.cANGE; // CHANGE
let cpush = bas.cp + phn.cush; // push
let cPush = bas.cP + phn.cush; // Push
let cPUSH = bas.cP + phn.cUSH; // PUSH
let cpushes = cpush + bas.ces; // pushes
let cPushes = cPush + bas.ces; // Pushes
let cpushed = cpush + bas.ced; // pushed
let cPushed = cPush + bas.ced; // Pushed
let cpushing = cpush + phn.cing; // pushing
let cPushing = cPush + phn.cing; // Pushing
let cexpand = bas.cex + phn.cpand; // expand
let cExpand = bas.cEx + phn.cpand; // Expand
let cexpands = cexpand + bas.cs; // expands
let cExpands = cExpand + bas.cs; // Expands
let cexpanded = cexpand + bas.ced; // expanded
let cExpanded = cExpand + bas.ced; // Expanded
let cexpanding = cexpand + phn.cing; // expanding
let cExpanding = cExpand + phn.cing; // Expanding
let ccall = bas.cc + call; // call
let cCall = bas.cC + call; // Call
let ccalls = ccall + bas.cs; // calls
let cCalls = cCall + bas.cs; // Calls
let ccalled = ccall + bas.ced; // called
let cCalled = cCall + bas.ced; // Called
let ccalling = ccall + phn.cing; // calling
let cCalling = cCall + phn.cing; // Calling
let clook = bas.cl + phn.cook; // look
let cLook = bas.cL + phn.cook; // Look
let clooks = clook + bas.cs; // looks
let cLooks = cLook + bas.cs; // Looks
let clooked = clook + bas.ced; // looked
let cLooked = cLook + bas.ced; // Looked
let clooking = clook + phn.cing; // looking
let cLooking = cLook + phn.cing; // Looking
let clookup = clook + bas.cup; // lookup
let cLookup = cLook + bas.cup; // Lookup
let celse = bas.ce + phn.clse; // else
let cElse = bas.cE + phn.clse; // Else
let cfar = bas.cfa + bas.cr; // far
let cFar = bas.cFa + bas.cr; // Far
let cspecify = phn.cspec + phn.cify; // specify
let cSpecify = phn.cSpec + phn.cify; // Specify
let csupport = phn.csup + cport; // support
let cSupport = phn.cSup + cport; // Support
let csupports = csupport + bas.cs; // supports
let cSupports = cSupport + bas.cs; // Supports
let csupported = csupport + bas.ced; // supported
let cSupported = cSupport + bas.ced; // Supported
let csupporting = csupport + phn.cing; // supporting
let cSupporting = cSupport + phn.cing; // Supporting
let cfound = bas.cfo + phn.cund; // found
let cFound = bas.cFo + phn.cund; // Found
let cfounded = cfound + bas.ced; // founded
let cFounded = cFound + bas.ced; // Founded
let cunfounded = bas.cun + cfounded; // unfounded
let cUnfounded = bas.cUn + cfounded; // Unfounded
let coriginal = phn.cori + bas.cg + phn.cinal; // original
let cOriginal = phn.cOri + bas.cg + phn.cinal; // Original
let coriginals = coriginal + bas.cs; // originals
let cOriginals = cOriginal + bas.cs; // Originals
let ccause = bas.cca + cuse; // cause
let cCause = bas.cCa + cuse; // Cause
let cbecause = bas.cbe + ccause; // because
let cBecause = bas.cBe + ccause; // Because
let canother = bas.can + cother; // another
let cAnother = bas.cAn + cother; // Another
let cparameter = phn.cpara + phn.cmet + bas.cer; // parameter
let cParameter = phn.cPara + phn.cmet + bas.cer; // Parameter
let cparameters = cparameter + bas.cs; // parameters
let cParameters = cParameter + bas.cs; // Parameters
let ctry = bas.ctr + bas.cy; // try
let cTry = bas.cTr + bas.cy; // Try
let ctried = bas.ctr + phn.cied; // tried
let cTried = bas.cTr + phn.cied; // Tried
let ctrying = ctry + phn.cing; // trying
let cTrying = cTry + phn.cing; // Trying
let cgain = bas.cg + phn.cain; // gain
let cGain = bas.cG + phn.cain; // Gain
let cagain = bas.ca + cgain; // again
let cAgain = bas.cA + cgain; // Again
let ctent = bas.ct + phn.cent; // tent
let cTent = bas.cT + phn.cent; // Tent
let ctents = ctent + bas.cs; // tents
let cTents = cTent + bas.cs; // Tents
let ctenting = ctent + phn.cing; // tenting
let cTenting = cTent + phn.cing; // Tenting
let ccontent = phn.ccon + ctent; // content
let cContent = phn.cCon + ctent; // Content
let ccontents = ccontent + bas.cs; // contents
let cContents = cContent + bas.cs; // Contents
let cmust = bas.cm + phn.cust; // must
let cMust = bas.cM + phn.cust; // Must
let cprompt = phn.cpro + phn.cmpt; // prompt
let cPrompt = phn.cPro + phn.cmpt; // Prompt
let cexample = bas.cex + phn.cample; // example
let cExample = bas.cEx + phn.cample; // Example
let cEXAMPLE = bas.cEX + phn.cAMPLE; // EXAMPLE
let cstructure = bas.cst + phn.cruc + phn.cture; // structure
let cStructure = bas.cSt + phn.cruc + phn.cture; // Structure
let cstructured = cstructure + bas.cd; // structured
let cStructured = cStructure + bas.cd; // Structured
let cstructures = cstructure + bas.cs; // structures
let cStructures = cStructure + bas.cs; // Structures
let cmore = bas.cm + phn.core; // more
let cMore = bas.cM + phn.core; // More
let chas = bas.cha + bas.cs; // has
let cHas = bas.cHa + bas.cs; // Has
let cread = phn.crea + bas.cd; // read
let cRead = phn.cRea + bas.cd; // Read
let creads = cread + bas.cs; // reads
let cReads = cReads + bas.cs; // Reads
let creading = cread + phn.cing; // reading
let cReading = cRead + phn.cing; // Reading
let cready = phn.crea + bas.cdy; // ready
let cReady = phn.cRea + bas.cdy; // Ready
let cREADY = phn.cREA + bas.cDY; // READY
let calready = bas.cal + cready; // already
let cAlready = bas.cAl + cready; // Already
let cALREADY = bas.cAL + cREADY; // ALREADY
let cbeen = bas.cb + phn.ceen; // been
let cBeen = bas.cB + phn.ceen; // Been
let cfollow = bas.cf + bas.col + clow; // follow
let cFollow = bas.cF + bas.col + clow; // Follow
let cfollowes = cfollow + bas.ces; // followes
let cFollowes = cFollow + bas.ces; // Followes
let cfollowed = cfollow + bas.ced; // followed
let cFollowed = cFollow + bas.ced; // Followed
let cfollowing = cfollow + phn.cing; // following
let cFollowing = cFollow + phn.cing; // Following
let cdefinition = bas.cde + phn.cfin + phn.cition; // definition
let cDefinition = bas.cDe + phn.cfin + phn.cition; // Definition
let cdefinitions = cdefinition + bas.cs; // definitions
let cDefinitions = cDefinition + bas.cs; // Definitions
let cdone = bas.cdo + bas.cne; // done
let cDone = bas.cDo + bas.cne; // Done
let cDONE = bas.cDO + bas.cNE; // DONE
let cphase = bas.cph + phn.c_ase; // phase
let cPhase = bas.cPh + phn.c_ase; // Phase
let cphases = cphase + bas.cs; // phases
let cPhases = cPhase + bas.cs; // Phases
let cphased = cphase + bas.cd; // phased
let cPhased = cPhase + bas.cd; // Phased
let cphasing = bas.cph + bas.cas + phn.cing; // phasing
let cPhasing = bas.cPh + bas.cas + phn.cing; // Phasing
let ctick = bas.ct + phn.cick; // tick
let cTick = bas.cT + phn.cick; // Tick
let cyay = bas.cya + bas.cy; // yay
let cYay = bas.cYa + bas.cy; // Yay
let cYAY = bas.cYA + bas.cY; // YAY
let ctag = bas.cta + bas.cg; // tag
let cTag = bas.cTa + bas.cg; // Tag
let ctags = ctag + bas.cs; // tags
let cTags = cTag + bas.cs; // Tags
let ctagged = ctag + bas.cg + bas.ced; // tagged
let cTagged = cTag + bas.cg + bas.ced; // Tagged
let ctagging = ctag + bas.cg + phn.cing; // tagging
let cTagging = cTag + bas.cg + phn.cing; // Tagging
let clit = bas.cli + bas.ct; // lit
let cLit = bas.cLi + bas.ct; // Lit
let csplit = bas.csp + clit; // split
let cSplit = bas.cSp + clit; // Split
let csplits = csplit + bas.cs; // splits
let cSplits = cSplit + bas.cs; // Splits
let csplitting = csplit + bas.ct + phn.cing; // splitting
let cSplitting = cSplit + bas.ct + phn.cing; // Splitting
let cdoing = bas.cdo + phn.cing; // doing
let cDoing = bas.cDo + phn.cing; // Doing
let cstraight = bas.cs + phn.ctra + phn.cight; // straight
let cStraight = bas.cS + phn.ctra + phn.cight; // Straight
let cbroker = bas.cbr + phn.coker; // broker
let cBroker = bas.cBr + phn.coker; // Broker
let cbrokers = cbroker + bas.cs; // brokers
let cBrokers = cBroker + bas.cs; // Brokers
let cpost = bas.cp + phn.cost; // post
let cPost = bas.cP + phn.cost; // Post
let cposts = cpost + bas.cs; // posts
let cPosts = cPost + bas.cs; // Posts
let cposted = cpost + bas.ced; // posted
let cPosted = cPost + bas.ced; // Posted
let cposting = cpost + phn.cing; // posting
let cPosting = cPost + phn.cing; // Posting
let cmerge = bas.cm + phn.cerge; // merge
let cMerge = bas.cM + phn.cerge; // Merge
let cMERGE = bas.cM + phn.cERGE; // MERGE
let cmerges = cmerge + bas.cs; // merges
let cMerges = cMerge + bas.cs; // Merges
let cmerged = cmerge + bas.cd; // merged
let cMerged = cMerge + bas.cd; // Merged
let cMERGED = cMERGE + bas.cD; // MERGED
let cmerging = bas.cm + phn.cerg + phn.cing; // merging
let cMerging = bas.cM + phn.cerg + phn.cing; // Merging
let cinclude = bas.cin + bas.cc + phn.clude; // include
let cInclude = bas.cIn + bas.cc + phn.clude; // Include
let cincludes = cinclude + bas.cs; // includes
let cIncludes = cInclude + bas.cs; // Includes
let cincluded = cinclude + bas.cd; // included
let cIncluded = cInclude + bas.cd; // Included
let cincluding = bas.cin + bas.cc + phn.clud + phn.cing; // including
let cIncluding = bas.cIn + bas.cc + phn.clud + phn.cing; // Including
let cfinal = phn.cfin + bas.cal; // final
let cFinal = phn.cFin + bas.cal; // Final
let cfinals = cfinal + bas.cs; // finals
let cFinals = cFinal + bas.cs; // Finals
let cfinally = cfinal + bas.cly; // finally
let cFinally = cFinal + bas.cly; // Finally
let ccaught = phn.ccau + phn.cght; // caught
let cCaught = phn.cCau + phn.cght; // Caught
let cflat = bas.cf + phn.clat; // flat
let cFlat = bas.cF + phn.clat; // Flat
let cflats = cflat + bas.cs; // flats
let cFlats = cFlat + bas.cs; // Flats
let cflatten = cflat + phn.cten; // flatten
let cFlatten = cFlat + phn.cten; // Flatten
let cflattened = cflat + bas.cte + phn.cned; // flattened
let cFlattened = cFlat + bas.cte + phn.cned; // Flattened
let cflattening = cflatten + phn.cing; // flattening
let cFlattening = cFlatten + phn.cing; // Flattening
let cside = bas.cs + phn.cide; // side
let cSide = bas.cS + phn.cide; // Side
let csides = cside + bas.cs; // sides
let cSides = cSide + bas.cs; // Sides
let csided = cside + bas.cd; // sided
let cSided = cSide + bas.cd; // Sided
let csiding = phn.csid + phn.cing; // siding
let cSiding = phn.cSid + phn.cing; // Siding
let cinside = bas.cin + cside; // inside
let cInside = bas.cIn + cside; // Inside
let ctarget = phn.ctar + cget; // target
let cTarget = phn.cTar + cget; // Target
let ctargets = ctarget + bas.cs; // targets
let cTargets = cTarget + bas.cs; // Targets
let ctargeted = ctarget + bas.ced; // targeted
let cTargeted = cTarget + bas.ced; // Targeted
let ctargeting = ctarget + phn.cing; // targeting
let cTargeting = cTarget + phn.cing; // Targeting
let cmodify = phn.cmod + phn.cify; // modify
let cModify = phn.cMod + phn.cify; // Modify
let cmodified = phn.cmod + phn.cified; // modified
let cModified = phn.cMod + phn.cified; // Modified
let cmodifies = phn.cmod + phn.cifies; // modifies
let cModifies = phn.cMod + phn.cifies; // Modifies
let cmodifying = cmodify + phn.cing; // modifying
let cModifying = cModify + phn.cing; // Modifying
let creference = phn.cref + bas.cer + phn.cence; // reference
let cReference = phn.cRef + bas.cer + phn.cence; // Reference
let creferences = creference + bas.cs; // references
let cReferences = cReference + bas.cs; // References
let creferenced = creference + bas.cd; // referenced
let cReferenced = cReference + bas.cd; // Referenced
let creferencing = phn.cref + bas.cer + phn.cenc + phn.cing; // referencing
let cReferencing = phn.cRef + bas.cer + phn.cenc + phn.cing; // Referencing
let cwrite = bas.cwr + phn.cite; // write
let cWrite = bas.cWr + phn.cite; // Write
let cwrites = cwrite + bas.cs; // writes
let cWrites = cWrite + bas.cs; // Writes
let cwritten = bas.cw + phn.crit + phn.cten; // written
let cWritten = bas.cW + phn.crit + phn.cten; // Written
let cwriting = bas.cw + phn.crit + phn.cing; // writing
let cWriting = bas.cW + phn.crit + phn.cing; // Writing
let cscan = bas.cs + ccan; // scan
let cScan = bas.cS + ccan; // Scan
let cscans = cscan + bas.cs; // scans
let cScans = cScan + bas.cs; // Scans
let cscanned = cscan + phn.cned; // scanned
let cScanned = cScan + phn.cned; // Scanned
let cscanning = cscan + bas.cn + phn.cing; // scanning
let cScanning = cScan + bas.cn + phn.cing; // Scanning
let cdirect = bas.cdi + phn.crect; // direct
let cDirect = bas.cDi + phn.crect; // Direct
let cdirects = cdirect + bas.cs; // directs
let cDirects = cDirect + bas.cs; // Directs
let cdirected = cdirect + bas.ced; // directed
let cDirected = cDirect + bas.ced; // Directed
let cdirector = cdirect + bas.cor; // director
let cDirector = cDirect + bas.cor; // Director
let cdirecting = cdirect + phn.cing; // directing
let cDirecting = cDirect + phn.cing; // Directing
let cdirectors = cdirector + bas.cs; // directors
let cDirectors = cDirector + bas.cs; // Directors
let cdirectory = cdirector + bas.cy; // directory
let cDirectory = cDirector + bas.cy; // Directory
let cdirectories = cdirector + phn.cies; // directories
let cDirectories = cDirector + phn.cies; // Directories
let cchive = bas.cc + chive; // chive
let cChive = bas.cC + chive; // Chive
let cchives = cchive + bas.cs; // chives
let cChives = cChive + bas.cs; // Chives
let carchive = bas.car + cchive; // archive
let cArchive = bas.cAr + cchive; // Archive
let carchived = carchive + bas.cd; // archived
let cArchived = cArchive + bas.cd; // Archived
let carchives = carchive + bas.cs; // archives
let cArchives = cArchive + bas.cs; // Archives
let carchiving = bas.car + phn.cchiv + phn.cing; // archiving
let cArchiving = bas.cAr + phn.cchiv + phn.cing; // Archiving
let ccop = bas.cco + bas.cp; // cop
let cCop = bas.cCo + bas.cp; // Cop
let ccops = ccop + bas.cs; // cops
let cCops = cCop + bas.cs; // Cops
let ccopy = bas.cc + phn.copy; // copy
let cCopy = bas.cC + phn.copy; // Copy
let ccopies = ccop + phn.cies; // copies
let cCopies = cCop + phn.cies; // Copies
let ccopied = ccop + phn.cied; // copied
let cCopied = cCop + phn.cied; // Copied
let ccopying = ccopy + phn.cing; // copying
let cCopying = cCopy + phn.cing; // Copying
let csuccess = bas.csu + phn.cccess; // success
let cSuccess = bas.cSu + phn.cccess; // Success
let csuccesses = csuccess + bas.ces; // successes
let cSuccesses = cSuccess + bas.ces; // Successes
let csuccessful = csuccess + phn.cful; // successful
let cSuccessful = cSuccess + phn.cful; // Successful
let cpack = bas.cp + phn.cack; // pack
let cPack = bas.cP + phn.cack; // Pack
let cpacks = cpack + bas.cs; // packs
let cPacks = cPack + bas.cs; // Packs
let cpacked = cpack + bas.ced; // packed
let cPacked = cPack + bas.ced; // Packed
let cpacking = cpack + phn.cing; // packing
let cPacking = cPack + phn.cing; // Packing
let cpackage = cpack + phn.cage; // package
let cPackage = cPack + phn.cage; // Package
let cpackages = cpackage + bas.cs; // packages
let cPackages = cPackage + bas.cs; // Packages
let cpackaged = cpackage + bas.cd; // packaged
let cPackaged = cPackage + bas.cd; // Packaged
let cpackaging = cpack + bas.cag + phn.cing; // packaging
let cPackaging = cPack + bas.cag + phn.cing; // Packaging
let canalyze = phn.cana + phn.clyze; // analyze
let cAnalyze = phn.cAna + phn.clyze; // Analyze
let canalyzes = canalyze + bas.cs; // analyzes
let cAnalyzes = cAnalyze + bas.cs; // Analyzes
let canalyzed = canalyze + bas.cd; // analyzed
let cAnalyzed = cAnalyze + bas.cd; // Analyzed
let canalyzing = phn.cana + phn.clyz + phn.cing; // analyzing
let cAnalyzing = phn.cAna + phn.clyz + phn.cing; // Analyzing
let csame = bas.cs + phn.came; // same
let cSame = bas.cS + phn.came; // Same
let cthere = cthe + bas.cre; // there
let cThere = cThe + bas.cre; // There
let cbracket = phn.cbra + bas.cc + phn.cket; // bracket
let cBracket = phn.cBra + bas.cc + phn.cket; // Bracket
let cbrackets = cbracket + bas.cs; // brackets
let cBrackets = cBracket + bas.cs; // Brackets
let cbracketed = cbracket + bas.ced; // bracketed
let cBracketed = cBracket + bas.ced; // Bracketed
let cbracketing = cbracket + phn.cing; // bracketing
let cBracketing = cBracket + phn.cing; // Bracketing
let cregular = phn.creg + phn.cular; // regular
let cRegular = phn.cReg + phn.cular; // Regular
let cexpression = bas.cex + cpress + phn.cion; // expression
let cExpression = bas.cEx + cpress + phn.cion; // Expression
let cexpressions = cexpression + bas.cs; // expressions
let cExpressions = cExpression + bas.cs; // Expressions
let clexical = phn.clex + phn.cical; // lexical
let cLexical = phn.cLex + phn.cical; // Lexical
let clexicon = phn.clex + phn.cicon; // lexicon
let cLexicon = phn.cLex + phn.cicon; // Lexicon
let clexicons = clexicon + bas.cs; // lexicons
let cLexicons = cLexicon + bas.cs; // Lexicons
let cjust = bas.cj + phn.cust; // just
let cJust = bas.cJ + phn.cust; // Just
let cjustice = cjust + phn.cice; // justice
let cJustice = cJust + phn.cice; // Justice
let cjustified = cjust + phn.cified; // justified
let cJustified = cJust + phn.cified; // Justified
let cadjust = bas.ca + bas.cd + cjust; // adjust
let cAdjust = bas.cAd + cjust; // Adjust
let cadjusts = cadjust + bas.cs; // adjusts
let cAdjusts = cAdjust + bas.cs; // Adjusts
let cadjusted = cadjust + bas.ced; // adjusted
let cAdjusted = cAdjust + bas.ced; // Adjusted
let cadjusting = cadjust + phn.cing; // adjusting
let cAdjusting = cAdjust + phn.cing; // Adjusting
let csleep = bas.csl + phn.ceep; // sleep
let cSleep = bas.cSl + phn.ceep; // Sleep
let csleeps = csleep + bas.cs; // sleeps
let cSleeps = cSleep + bas.cs; // Sleeps
let csleeped = csleep + bas.ced; // sleeped
let cSleeped = cSleep + bas.ced; // Sleeped
let csleeping = csleep + phn.cing; // sleeping
let cSleeping = cSleep + phn.cing; // Sleeping
let cleaf = bas.cl + phn.ceaf; // leaf
let cLeaf = bas.cL + phn.ceaf; // Leaf
let centry = bas.cen + ctry; // entry
let cEntry = bas.cEn + ctry; // Entry
let centries = bas.cen + bas.ctr + phn.cies; // entries
let cEntries = bas.cEn + bas.ctr + phn.cies; // Entries
let centity = bas.cen + phn.ctity; // entity
let cEntity = bas.cEn + phn.ctity; // Entity
let cmay = bas.cma + bas.cy; // may
let cMay = bas.cMa + bas.cy; // May
let conly = bas.co + phn.cnly; // only
let cOnly = bas.cO + phn.cnly; // Only
let csuch = bas.cs + phn.cuch; // such
let cSuch = bas.cS + phn.cuch; // Such
let cgeneration = phn.cgen + bas.cer + phn.cation; // generation
let cGeneration = phn.cGen + bas.cer + phn.cation; // Generation
let cDemocratic = cDemo + bas.ccr + phn.cati + bas.cc; // Democratic
let cRepublic = bas.cRe + cpublic; // Republic
let cCentral = unt.cCent + phn.cral; // Central
let cAfrican = bas.cAf + phn.crica + bas.cn; // African
let cPapua = bas.cPa + bas.cpu + bas.ca; // Papua
let cTrinidad = phn.cTri + bas.cni + bas.cda + bas.cd; // Trinidad
let cTabago = bas.cTa + bas.cba + bas.cgo; // Tabago
let cUnited = cUnit + bas.ced; // United
let cArab = bas.cAr + bas.cab; // Arab
let cEmirates = bas.cEm + bas.cir + phn.cates; // Emirates
let cStates = bas.cSt + phn.cates; // States
let cAmerica = bas.cAm + bas.cer + phn.cica; // America
let cliver = bas.cli + phn.cver; // liver
let cLiver = bas.cLi + phn.cver; // Liver
let ccountry = ccount + bas.cry; // country
let cCountry = cCount + bas.cry; // Country
let ccountries = ccount + phn.cries; // countries
let cCountries = cCount + phn.cries; // Countries
let cknot = bas.ck + gen.cnot; // knot
let cKnot = bas.cK + gen.cnot; // Knot
let cknots = cknot + bas.cs; // knots
let cKnots = cKnot + bas.cs; // Knots
let clanguage = phn.clang + phn.cuage; // language
let cLanguage = phn.cLang + phn.cuage; // Language
let clanguages = clanguage + bas.cs; // languages
let cLanguages = cLanguage + bas.cs; // Languages
let csole = bas.cs + phn.cole; // sole
let cSole = bas.cS + phn.cole; // Sole
let cconsole = phn.ccon + csole; // console
let cConsole = phn.cCon + csole; // Console
let cboss = bas.cb + phn.coss; // boss
let cBoss = bas.cB + phn.coss; // Boss
let cpanic = bas.cpa + phn.cnic; // panic
let cPanic = bas.cPa + phn.cnic; // Panic
let cslow = bas.cs + clow; // slow
let cSlow = bas.cS + clow; // Slow
let cgot = bas.cgo + bas.ct; // got
let cGot = bas.cGo + bas.ct; // Got
let cmiss = bas.cm + phn.ciss; // miss
let cMiss = bas.cM + phn.ciss; // Miss
let cecho = bas.cec + bas.cho; // echo
let cEcho = bas.cEc + bas.cho; // Echo
let cincrement = phn.cinc + bas.cre + phn.cment; // increment
let cIncrement = phn.cInc + bas.cre + phn.cment; // Increment
let cincrements = cincrement + bas.cs; // increments
let cIncrements = cIncrement + bas.cs; // Increments
let cincremented = cincrement + bas.ced; // incremented
let cIncremented = cIncrement + bas.ced; // Incremented
let cincrementing = cincrement + phn.cing; // incrementing
let cIncrementing = cIncrement + phn.cing; // Incrementing
let cforce = cfor + bas.cce; // force
let cForce = cFor + bas.cce; // Force
let cforced = cforce + bas.cd; // forced
let cForced = cForce + bas.cd; // Forced
let cforcing = cfor + bas.cc + phn.cing; // forcing
let cForcing = cFor + bas.cc + phn.cing; // Forcing
let cforces = cforce + bas.cs; // forces
let cForces = cForce + bas.cs; // Forces
let cexecutrix = phn.cexe + ccut + phn.crix; // executrix
let cExecutrix = phn.cExe + ccut + phn.crix; // Executrix
let cframework = cframe + cwork; // framework
let cFramework = cFrame + cwork; // Framework
let cboot = bas.cbo + bas.cot; // boot
let cBoot = bas.cBo + bas.cot; // Boot
let cstrap = bas.cst + phn.crap; // strap
let cStrap = bas.cSt + phn.crap; // Strap
let csetup = cset + bas.cup; // setup
let cSetup = cSet + bas.cup; // Setup
let csetups = csetup + bas.cs; // setups
let cSetups = cSetup + bas.cs; // Setups
let csynchronous = csync + phn.cron + phn.cous; // synchronous
let cSynchronous = cSync + phn.cron + phn.cous; // Synchronous
let csynchronously = csynchronous + bas.cly; // synchronously
let cSynchronously = cSynchronous + bas.cly; // Synchronously
let cappend = gen.capp + cend; // append
let cAppend = gen.cApp + cend; // Append
let cappends = cappend + bas.cs; // appends
let cAppends = cAppend + bas.cs; // Appends
let cappended = cappend + bas.ced; // appended
let cAppended = cAppend + bas.ced; // Appended
let cappending = cappend + phn.cing; // appending
let cAppending = cAppend + phn.cing; // Appending
let cmoment = bas.cmo + phn.cment; // moment
let cMoment = bas.cMo + phn.cment; // Moment
let cmoments = cmoment + bas.cs; // moments
let cMoments = cMoment + bas.cs; // Moments
let ccompute = phn.ccomp + phn.ccute; // compute
let cCompute = phn.cComp + phn.ccute; // Compute
let ccomputes = ccompute + bas.cs; // computes
let cComputes = cCompute + bas.cs; // Computes
let ccomputer = ccompute + bas.cr; // computer
let cComputer = cCompute + bas.cr; // Computer
let ccomputers = ccomputer + bas.cs; // computers
let cComputers = cComputer + bas.cs; // Computers
let ccomputing = phn.ccomp + bas.cut + phn.cing; // computing
let cComputing = phn.cComp + bas.cut + phn.cing; // Computing
let cschema = bas.csc + bas.che + bas.cma; // schema
let cSchema = bas.cSc + bas.che + bas.cma; // Schema
let cdot = bas.cdo + bas.ct; // dot
let cDot = bas.cDo + bas.ct; // Dot
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
let cAbsolute = bas.cAb + phn.csol + phn.cute; // Absolute
let cAcid = bas.cAc + bas.cid; // Acid
let cAir = bas.cAi + bas.cr; // Air
let cSuperiority = phn.cSup + bas.cer + bas.cio + phn.crit + bas.cy; // Superiority
let cAlabaster = bas.cAl + bas.cab + bas.cas + phn.cter; // Alabaster
let cAlice = bas.cAl + phn.cice; // Alice
let cAlloy = phn.cAll + bas.coy; // Alloy
let cAmaranth = bas.cAm + phn.caranth; // Amaranth
let cAndroid = cAnd + bas.cro + bas.cid; // Android
let cAntique = bas.cAn + bas.cti + phn.cque; // Antique
let cBrass = phn.cBra + bas.css; // Brass
let cBronze = bas.cBr + phn.conze; // Bronze
let cApple = gen.cApp + bas.cle; // Apple
let cApricot = bas.cAp + phn.cricot; // Apricot
let cArctic = bas.cAr + bas.cct + bas.cic; // Arctic
let cArmy = bas.cAr + bas.cmy; // Army
let cArylide = bas.cAr + bas.cyl + phn.cide; // Arylide
let cAtomic = bas.cA + bas.ct + bas.com + bas.cic; // Atomic
let cBaby = bas.cBa + bas.cby; // Baby
let cEyes = bas.cEy + bas.ces; // Eyes
let cPowder = bas.cPo + phn.cwder; // Powder
let cBaker = bas.cBa + bas.cke + bas.cr; // Baker
let cMiller = unt.cMill + bas.cer; // Miller
let cBanana = bas.cBa + bas.cna + bas.cna; // Banana
let cMania = cMan + bas.cia; // Mania
let cBarbie = bas.cBa + bas.crb + bas.cie; // Barbie
let cBarn = bas.cBa + bas.crn; // Barn
let cBattleship = bas.cBa + bas.ctt + phn.cles + phn.chip; // Battleship
let cBeau = bas.cBe + bas.cau; // Beau
let cDazzled = bas.cDa + bas.czz + bas.cle + bas.cd; // Dazzled
let cBitter = bas.cBi + phn.ctte + bas.cr; // Bitter
let csweet = bas.cs + phn.cweet; // sweet
let cSweet = bas.cS + phn.cweet; // Sweet
let cBittersweet = bas.cBi + phn.ctte + bas.crs + phn.cweet; // Bittersweet
let cShimmer = bas.cSh + phn.cimmer; // Shimmer
let cBean = bas.cBe + bas.can; // Bean
let cChocolate = bas.cCh + phn.cocolate; // Chocolate
let cShadows = phn.cSha + phn.cdow + bas.cs; // Shadows
let cBlanched = bas.cBl + bas.can + bas.cch + bas.ced; // Blanched
let cBlast = bas.cBl + bas.cas + bas.ct; // Blast
let cBlizzard = bas.cBl + bas.ciz + phn.czard; // Blizzard
let cBlood = bas.cBl + phn.cood; // Blood
let cCrayola = bas.cCr + phn.cayola; // Crayola
let cMunsell = bas.cMu + phn.cnsell; // Munsell
let cPantone = bas.cPa + phn.cntone; // Pantone
let cPigment = bas.cPi + phn.cgment; // Pigment
let cBell = bas.cBe + bas.cll; // Bell
let cwheel = bas.cwh + phn.ceel; // wheel
let cWheel = bas.cWh + phn.ceel; // Wheel
let cwheels = cwheel + bas.cs; // wheels
let cWheels = cWheel + bas.cs; // Wheels
let cJeans = bas.cJe + phn.cans; // Jeans
let cYonder = bas.cYo + phn.cnder; // Yonder
let cBottle = bas.cBo + bas.ctt + bas.cle; // Bottle
let cbrick = bas.cbr + phn.cick; // brick
let cBrick = bas.cBr + phn.cick; // Brick
let cbricks = cbrick + bas.cs; // bricks
let cBricks = cBrick + bas.cs; // Bricks
let cBright = bas.cBr + phn.cight; // Bright
let cBrilliant = bas.cBr + phn.cill + phn.cian + bas.ct; // Brilliant
let cRacing = bas.cRa + bas.cci + bas.cng; // Racing
let cSugar = phn.cSug + bas.car; // Sugar
let cBrunswick = bas.cBr + bas.cun + bas.csw + phn.cick; // Brunswick
let cBud = bas.cBu + bas.cd; // Bud
let cBurly = bas.cBu + bas.crl + bas.cy; // Burly
let cBurnished = bas.cBu + bas.crn + phn.cish + bas.ced; // Burnished
let cBurnt = bas.cBu + bas.crn + bas.ct; // Burnt
let cCadet = bas.cCa + phn.cdet; // Cadet
let cCafe = bas.cCa + bas.cfe; // Cafe
let cCambridge = bas.cCa + bas.cmb + bas.cri + bas.cdg + bas.ce; // Cambridge
let cCameo = bas.cCa + bas.cme + bas.co; // Cameo
let cCaput = bas.cCa + cput; // Caput
let cMortuum = bas.cMo + bas.crt + bas.cuu + bas.cm; // Mortuum
let cCaribbean = bas.cCa + bas.cri + bas.cbb + phn.cean; // Caribbean
let cCarnation = bas.cCa + bas.crn + phn.cation; // Carnation
let cCarrot = bas.cCa + phn.crrot; // Carrot
let cCastleton = bas.cCa + phn.cstle + phn.cton; // Castleton
let cCedar = bas.cCe + bas.cda + bas.cr; // Cedar
let cChest = bas.cC + phn.chest; // Chest
let cCeladon = phn.cCel + phn.cadon; // Celadon
let cCeltic = phn.cCel + phn.ctic; // Celtic
let cCharleston = cChar + phn.cles + phn.cton; // Charleston
let cCharm = cChar + bas.cm; // Charm
let cChartreuse = cChar + phn.ctre + cuse; // Chartreuse
let cCherry = bas.cCh + phn.cerry; // Cherry
let cBlossom = bas.cBl + phn.coss + bas.com; // Blossom
let cChestnut = cChest + bas.cnu + bas.ct; // Chestnut
let cChrome = bas.cCh + bas.cro + bas.cme; // Chrome
let cCinnamon = bas.cCi + phn.cnna + phn.cmon; // Cinnamon
let cCocoa = bas.cCo + bas.cco + bas.ca; // Cocoa
let cCoffee = bas.cCo + phn.cffee; // Coffee
let cColumbia = phn.cCol + bas.cum + phn.cbia; // Columbia
let cCool = bas.cCo + bas.col; // Cool
let cflower = bas.cf + clower; // flower
let cFlower = bas.cF + clower; // Flower
let cflowers = cflower + bas.cs; // flowers
let cFlowers = cFlower + bas.cs; // Flowers
let csilk = bas.cs + phn.cilk; // silk
let cSilk = bas.cS + phn.cilk; // Silk
let cCosmic = bas.cCo + bas.csm + bas.cic; // Cosmic
let cLatte = bas.cLa + phn.ctte; // Latte
let cCoyote = bas.cCo + bas.cyo + bas.cte; // Coyote
let cCotton = bas.cCo + bas.ctt + bas.con; // Cotton
let cCyber = bas.cCy + phn.cber; // Cyber
let cDark = bas.cDa + bas.crk; // Dark
let cByzantium = bas.cBy + phn.czantium; // Byzantium
let cElectric = bas.cEl + phn.cect + phn.cric; // Electric
let cKhaki = bas.cKh + phn.caki; // Khaki
let cHorse = bas.cHo + phn.crse; // Horse
let cHorses = cHorse + bas.cs; // Horses
let cMoss = bas.cMo + bas.css; // Moss
let cPastel = bas.cPa + phn.cste + bas.cl; // Pastel
let cSky = bas.cSk + bas.cy; // Sky
let cSlate = bas.cSl + phn.cate; // Slate
let cSpring = bas.cSp + phn.crin + bas.cg; // Spring
let cDartmouth = bas.cDa + bas.crt + bas.cmo + phn.cuth; // Dartmouth
let cDavys = bas.cDa + bas.cvy + bas.cs; // Davys
let cCerise = bas.cCe + phn.crise; // Cerise
let cSparkle = bas.cSp + phn.cark + bas.cle; // Sparkle
let cDim = bas.cDi + bas.cm; // Dim
let cDodger = bas.cDo + bas.cdg + bas.cer; // Dodger
let cDogwood = bas.cDo + bas.cgw + phn.cood; // Dogwood
let cDuke = bas.cDu + bas.cke; // Duke
let cDutch = bas.cDu + phn.ctch; // Dutch
let cEarth = bas.cEa + bas.crt + bas.ch; // Earth
let cEerie = bas.cEe + bas.cri + bas.ce; // Eerie
let cEton = bas.cEt + bas.con; // Eton
let cFalu = bas.cFa + bas.clu; // Falu
let cFashion = bas.cFa + bas.csh + phn.cion; // Fashion
let cFern = bas.cFe + bas.crn; // Fern
let cFiery = bas.cFi + bas.cer + bas.cy; // Fiery
let cFire = bas.cFi + bas.cre; // Fire
let cEngine = bas.cEn + bas.cgi + bas.cne; // Engine
let cFloral = bas.cFl + phn.coral; // Floral
let cFluorescent = bas.cFl + bas.cuo + phn.cres + phn.ccent; // Fluorescent
let cForest = cFor + phn.cest; // Forest
let cFrost = bas.cFr + phn.cost; // Frost
let cbite = bas.cbi + bas.cte; // bite
let cFuzzy = bas.cFu + bas.czz + bas.cy; // Fuzzy
let cWuzzy = bas.cW + bas.cuz + bas.czy; // Wuzzy
let cGhost = bas.cGh + phn.cost; // Ghost
let cGlossy = bas.cGl + phn.coss + bas.cy; // Glossy
let cMetal = cMeta + bas.cl; // Metal
let cMetallic = cMeta + phn.cllic; // Metallic
let cFusion = bas.cFu + phn.csion; // Fusion
let cPoppy = cPop + bas.cpy; // Poppy
let cGranite = bas.cGr + bas.can + phn.cite; // Granite
let cGranny = bas.cGr + bas.can + bas.cny; // Granny
let cSmith = bas.cSm + phn.cith; // Smith
let cLizard = bas.cLi + phn.czard; // Lizard
let cGun = bas.cGu + bas.cn; // Gun
let cHarvest = bas.cHa + bas.crv + phn.cest; // Harvest
let cHeat = bas.cHe + bas.cat; // Heat
let cWave = bas.cWa + bas.cve; // Wave
let cHollywood = bas.cHo + bas.cll + bas.cyw + phn.cood; // Hollywood
let cHoney = bas.cHo + bas.cne + bas.cy; // Honey
let cdew = bas.cd + bas.cew; // dew
let cHonolulu = bas.cHo + bas.cno + bas.clu + bas.clu; // Honolulu
let cHookers = bas.cHo + phn.coker + bas.cs; // Hookers
let cHot = bas.cHo + bas.ct; // Hot
let cHunter = bas.cHu + bas.cnt + bas.cer; // Hunter
let cIce = bas.cIc + bas.ce; // Ice
let cIlluminating = bas.cIl + phn.clum + phn.cina + phn.ctin + bas.cg; // Illuminating
let cImperial = bas.cIm + phn.cper + bas.cia + bas.cl; // Imperial
let cworm = bas.cwo + bas.crm; // worm
let cIndependence = bas.cIn + bas.cde + cpen + phn.cden + bas.cce; // Independence
let cIndian = gen.cIndia + bas.cn; // Indian
let cDye = bas.cDy + bas.ce; // Dye
let cnational = cnation + bas.cal; // national
let cNational = cNation + bas.cal; // National
let cnationals = cnational + bas.cs; // nationals
let cNationals = cNational + bas.cs; // Nationals
let cInternational = phn.cInter + cnation + bas.cal; // International
let cAerospace = bas.cAe + bas.cro + cspace; // Aerospace
let cEngineering = bas.cEn + bas.cgi + bas.cne + bas.cer + phn.cing; // Engineering
let cBridge = bas.cBr + bas.cid + bas.cge; // Bridge
let cCarmine = bas.cCa + phn.crmine; // Carmine
let cjazz = bas.cja + bas.czz; // jazz
let cJazz = bas.cJa + bas.czz; // Jazz
let cberry = phn.cber + bas.cry; // berry
let cBerry = phn.cBer + bas.cry; // Berry
let cjam = bas.cja + bas.cm; // jam
let cJam = bas.cJa + bas.cm; // Jam
let cKelly = bas.cKe + bas.cll + bas.cy; // Kelly
let cKombu = bas.cKo + bas.cmb + bas.cu; // Kombu
let cLanguid = bas.cLa + bas.cng + bas.cui + bas.cd; // Languid
let cLapis = bas.cLa + bas.cpi + bas.cs; // Lapis
let cLazuli = bas.cL + bas.caz + phn.culi; // Lazuli
let cLaser = bas.cLa + bas.cse + bas.cr; // Laser
let cLaurel = bas.cLa + phn.cure + bas.cl; // Laurel
let cLawn = bas.cLa + bas.cwn; // Lawn
let cCurry = phn.cCur + bas.cry; // Curry
let cGlacier = bas.cGl + bas.cac + phn.cier; // Glacier
let cMeringue = bas.cMe + phn.crin + bas.cgu + bas.ce; // Meringue
let cLight = bas.cLi + phn.cght; // Light
let cCoral = phn.cCor + bas.cal; // Coral
let cSteel = bas.cSt + phn.ceel; // Steel
let cLuster = bas.cLu + phn.cster; // Luster
let cLincoln = phn.cLin + phn.ccol + bas.cn; // Lincoln
let cLiseran = bas.cLi + bas.cse + phn.cran; // Liseran
let cLittle = cLit + phn.ctle; // Little
let cBoy = bas.cBo + bas.cy; // Boy
let cDogs = bas.cDo + bas.cgs; // Dogs
let cOrgan =  bas.cOr + phn.cgan; // Organ
let cMacaroni = phn.cMac + phn.caro + bas.cni; // Macaroni
let cCheese = bas.cCh + bas.cee + bas.cse; // Cheese
let cMadder = bas.cMa + phn.cdder; // Madder
let cHaze = bas.cHa + bas.cze; // Haze
let cMagic = bas.cMa + bas.cgi + bas.cc; // Magic
let cMajorelle = bas.cMa + bas.cjo + bas.cre + bas.cll + bas.ce; // Majorelle
let cminimum = gen.cmin + phn.cimum; // minimum
let cMinimum = gen.cMin + phn.cimum; // Minimum
let cminimums = cminimum + bas.cs; // minimums
let cMinimums = cMinimum + bas.cs; // Minimums
let cmaximum = gen.cmax + phn.cimum; // maximum
let cMaximum = gen.cMax + phn.cimum; // Maximum
let cmaximums = cmaximum + bas.cs; // maximums
let cMaximums = cMaximum + bas.cs; // Maximums
let cMaya = gen.cMay + bas.ca; // Maya
let cMedium = bas.cMe + phn.cdium; // Medium
let cMellow = bas.cMe + phn.cllow; // Mellow
let cweed = bas.cwe + bas.ced; // weed
let cWeed = bas.cWe + bas.ced; // Weed
let cweeds = cweed + bas.cs; // weeds
let cWeeds = cWeed + bas.cs; // Weeds
let cweeded = cweed + bas.ced; // weeded
let cWeeded = cWeed + bas.ced; // Weeded
let cSeaweed = cSea + cweed; // Seaweed
let csun = bas.csu + bas.cn; // sun
let cSun = bas.cSu + bas.cn; // Sun
let csuns = csun + bas.cs; // suns
let cSuns = cSun + bas.cs; // Suns
let cSunburst = bas.cSu + bas.cnb + bas.cur + bas.cst; // Sunburst
let cMexican = bas.cMe + bas.cxi + phn.ccan; // Mexican
let cMiddle = bas.cMi + bas.cdd + bas.cle; // Middle
let cMikado = bas.cMi + bas.cka + bas.cdo; // Mikado
let cMimi = bas.cMi + bas.cm + bas.ci; // Mimi
let cMinion = gen.cMin + phn.cion; // Minion
let cMisty = phn.cMis + bas.cty; // Misty
let cMorning = bas.cMo + bas.crn + phn.cing; // Morning
let cMeadow = bas.cMe + phn.cadow; // Meadow
let cMount = bas.cMo + phn.cunt; // Mount
let cbatten = bas.cba + phn.ctten; // batten
let cMulberry = bas.cMu + bas.clb + phn.cerry; // Mulberry
let cMyrtle = bas.cMy + bas.crt + bas.cle; // Myrtle
let cNadeshiko = bas.cNa + bas.cde + bas.csh + bas.cik + bas.co; // Nadeshiko
let cNaples = bas.cNa + phn.cple + bas.cs; // Naples
let cNavajo = bas.cNa + bas.cva + bas.cjo; // Navajo
let cNavy = bas.cNa + bas.cvy; // Navy
let cNeon = bas.cNe + bas.con; // Neon
let cYork = bas.cYo + bas.crk; // York
let cPhoto = bas.cPh + bas.cot + bas.co; // Photo
let cOcean = bas.cOc + phn.cean; // Ocean
let cLace = bas.cLa + bas.cce; // Lace
let cOpera = bas.cOp + phn.cera; // Opera
let cPeel = bas.cPe + bas.cel; // Peel
let cSoda = bas.cSo + bas.cda; // Soda
let cOuter = cOut + bas.cer; // Outer
let cOutrageous = cOut + phn.crage + phn.cous; // Outrageous
let cOxford = bas.cOx + cfor + bas.cd; // Oxford
let cPacific = bas.cPa + bas.cci + phn.cfic; // Pacific
let cPalatinate = cPal + phn.catin + phn.cate; // Palatinate
let cPale = cPal + bas.ce; // Pale
let cPansy = bas.cPa + bas.cns + bas.cy; // Pansy
let cPaolo = bas.cPa + bas.col + bas.co; // Paolo
let cVeronese = phn.cVer + num.cone + bas.cse; // Veronese
let cPapaya = gen.cPapa + bas.cya; // Papaya
let cWhip = bas.cWh + bas.cip; // Whip
let cParadise = phn.cPara + bas.cdi + bas.cse; // Paradise
let cParis = bas.cPa + phn.cris; // Paris
let cPaynes = bas.cPa + bas.cyn + bas.ces; // Paynes
let cPuff = bas.cPu + bas.cff; // Puff
let cPearly = bas.cPe + bas.car + bas.cly; // Pearly
let cPermanent = phn.cPer + cman + phn.cent; // Permanent
let cGeranium = bas.cGe + phn.cran + phn.cium; // Geranium
let cLake = bas.cLa + bas.cke; // Lake
let cPersian = phn.cPer + phn.csia + bas.cn; // Persian
let cPewter = bas.cPe + bas.cwt + bas.cer; // Pewter
let cPhthalo = bas.cPh + bas.cth + bas.cal + bas.co; // Phthalo
let cPicotee = unt.cPico + phn.ctee; // Picotee
let cPictorial = bas.cPi + phn.cctor + bas.cia + bas.cl; // Pictorial
let cPiggy = bas.cPi + bas.cgg + bas.cy; // Piggy
let cPine = bas.cPi + bas.cne; // Pine
let cTree = bas.cTr + bas.cee; // Tree
let cFlamingo = bas.cFl + bas.cam + phn.cing + bas.co; // Flamingo
let cSherbet = bas.cSh + bas.cer + cbet; // Sherbet
let cPlump = bas.cPl + bas.cum + bas.cp; // Plump
let cpolish = bas.cpo + phn.clish; // polish
let cPolish = bas.cPo + phn.clish; // Polish
let cpolished = cpolish + bas.ced; // polished
let cPolished = cPolish + bas.ced; // Polished
let cPomp = bas.cPo + bas.cmp; // Pomp
let cPower = bas.cPo + phn.cwer; // Power
let cPortland = cPort + bas.cla + bas.cnd; // Portland
let cPrinceton = phn.cPri + phn.cnce + phn.cton; // Princeton
let cPrussian = bas.cPr + bas.cus + phn.csia + bas.cn; // Prussian
let cPsychedelic = bas.cPs + bas.cyc + bas.che + phn.cdel + bas.cic; // Psychedelic
let cPullman = bas.cPu + bas.cll + cman; // Pullman
let cMountain = bas.cMo + phn.cunt + phn.cain; // Mountain
let cMajesty = bas.cMa + bas.cje + phn.csty; // Majesty
let cPizzazz = bas.cPi + bas.czz + phn.cazz; // Pizzazz
let cQueen = phn.cQue + bas.cen; // Queen
let cQuick = bas.cQu + phn.cick; // Quick
let cQuinacridone = bas.cQu + phn.cina + bas.ccr + bas.cid + num.cone; // Quinacridone
let cRadical = bas.cRa + bas.cdi + phn.ccal; // Radical
let cRaisin = bas.cRa + bas.cis + bas.cin; // Raisin
let cGlace = bas.cGl + phn.cace; // Glace
let cRazzle = bas.cRa + bas.czz + bas.cle; // Razzle
let cDazzle = bas.cDa + bas.czz + bas.cle; // Dazzle
let cRazzmic = bas.cRa + bas.czz + bas.camai + bas.cc; // Razzmic
let cRebecca = bas.cRe + bas.cbe + bas.ccc + bas.ca; // Rebecca
let cSalsa = bas.cSa + bas.cls + bas.ca; // Salsa
let cResolution = phn.cRes + bas.col + bas.cut + phn.cion; // Resolution
let cRich = bas.cRi + bas.cch; // Rich
let cRifle = bas.cRi + bas.cfl + bas.ce; // Rifle
let cRobin = bas.cRo + gen.cbin; // Robin
let cEgg = bas.cEg + bas.cg; // Egg
let cRocket = bas.cRo + bas.cck + bas.cet; // Rocket
let cRoman = bas.cRo + cman; // Roman
let cBonbon = bas.cBo + bas.cnb + bas.con; // Bonbon
let cDust = bas.cDu + bas.cst; // Dust
let cEbony = bas.cEb + phn.cony; // Ebony
let cQuartz = cQuart + bas.cz; // Quartz
let cVale = bas.cVa + bas.cle; // Vale
let cwood = bas.cwo + bas.cod; // wood
let cRosso = bas.cRo + bas.css + bas.co; // Rosso
let cCorsa = bas.cC + bas.cor + bas.csa; // Corsa
let cRosy = bas.cRo + bas.csy; // Rosy
let cRoyal = bas.cRo + bas.cya + bas.cl; // Royal
let crub = bas.cru + bas.cb; // rub
let cRub = bas.cRu + bas.cb; // Rub
let crubs = crub + bas.cs; // rubs
let cRubs = cRub + bas.cs; // Rubs
let crubbed = crub + cbed; // rubbed
let cRubbed = cRub + cbed; // Rubbed
let crubbing = crub + phn.cbing; // rubbing
let cRubbing = cRub + phn.cbing; // Rubbing
let cRubine = cRub + phn.cine; // Rubine
let cSacramento = bas.cSa + bas.ccr + phn.camen + bas.cto; // Sacramento
let cState = bas.cSt + phn.cate; // State
let cSaddle = bas.cSa + bas.cdd + bas.cle; // Saddle
let cSafety = cSafe + bas.cty; // Safety
let cBlaze = bas.cBl + phn.caze; // Blaze
let cPatricks = cPat + phn.crick + bas.cs; // Patricks
let cSandy = gen.cSan + bas.cdy; // Sandy
let csap = bas.csa + bas.cp; // sap
let cSap = bas.cSa + bas.cp; // Sap
let cSatin = bas.cSa + phn.ctin; // Satin
let cSheen = bas.cSh + phn.ceen; // Sheen
let cSchauss = bas.cSc + bas.cha + bas.cus + bas.cs; // Schauss
let cSchool = bas.cSc + bas.cho + bas.col; // School
let cBus = bas.cBu + bas.cs; // Bus
let cScreamin = bas.cSc + phn.cream + bas.cin; // Screamin
let cSeal = cSea + bas.cl; // Seal
let cshell = bas.csh + phn.cell; // shell
let cSelective = cSelect + phn.cive; // Selective
let cShamrock = phn.cSha + bas.cmr + phn.cock; // Shamrock
let cShimmering = cShimmer + phn.cing; // Shimmering
let cBlush = bas.cBl + phn.cush; // Blush
let cShiny = bas.cSh + bas.cin + bas.cy; // Shiny
let cShocking = bas.cSh + phn.cock + phn.cing; // Shocking
let cChalice = bas.cCh + phn.cali + bas.cce; // Chalice
let cSizzling = bas.cSi + bas.czz + phn.clin + bas.cg; // Sizzling
let cSunrise = bas.cS + bas.cun + phn.crise; // Sunrise
let cSlimy = bas.cSl + bas.cim + bas.cy; // Slimy
let cSmoky = bas.cSm + bas.cok + bas.cy; // Smoky
let cSonic = bas.cSo + phn.cnic; // Sonic
let cBistre = bas.cBi + phn.cstre; // Bistre
let cStar = bas.cSt + bas.car; // Star
let cStil = bas.cSt + bas.cil; // Stil
let cGrain = bas.cGr + phn.cain; // Grain
let cglow = bas.cg + clow; // glow
let cSuper = phn.cSup + bas.cer; // Super
let cTango = gen.cTango; // Tango
let cTart = phn.cTart; // Tart
let cTea = bas.cTe + bas.ca; // Tea
let cTerra = bas.cTe + phn.crra; // Terra
let cCotta = bas.cCo + bas.ctt + bas.ca; // Cotta
let cThulian = bas.cTh + phn.culi + bas.can; // Thulian
let cTickle = cTick + bas.cle; // Tickle
let cTiffany = bas.cTi + bas.cff + phn.cany; // Tiffany
let cTimber = bas.cTi + phn.cmber; // Timber
let cwolf = bas.cwo + bas.clf; // wolf
let cTropical = bas.cTr + bas.cop + phn.cical; // Tropical
let cRain = bas.cR + phn.cain; // Rain
let cTrypan = cTry + bas.cpa + bas.cn; // Trypan
let cTufts = bas.cTu + bas.cft + bas.cs; // Tufts
let cTumble = bas.cTu + bas.cmb + bas.cle; // Tumble
let cTwilight = bas.cTw + phn.cili + phn.cght; // Twilight
let cTyrian = bas.cTy + phn.cria + bas.cn; // Tyrian
let cUltra = bas.cUl + phn.ctra; // Ultra
let cUnbleached = bas.cUn + phn.cble + phn.cach + bas.ced; // Unbleached
let cNations = cNation + bas.cs; // Nations
let cUpsdell = bas.cUp + bas.csd + phn.cell; // Upsdell
let cUranian = bas.cUr + phn.cania + bas.cn; // Uranian
let cvan = bas.cva + bas.cn; // van
let cVan = bas.cVa + bas.cn; // Van
let cDyke = bas.cDy + bas.cke; // Dyke
let cVegas = bas.cVe + bas.cga + bas.cs; // Vegas
let cVenetian = bas.cVe + bas.cne + bas.cti + bas.can; // Venetian
let cVivid = bas.cVi + phn.cvid; // Vivid
let cWarm = bas.cWa + bas.crm; // Warm
let cWild = bas.cWi + bas.cld; // Wild
let cWindsor = cWind + bas.cso + bas.cr; // Windsor
let cDregs = bas.cDr + bas.ceg + bas.cs; // Dregs
let cWinter = bas.cWi + bas.cnt + bas.cer; // Winter
let cDream = bas.cDr + phn.ceam; // Dream
let cYale = bas.cYa + bas.cle; // Yale

module.exports = {
  // Miscelaneious Words
  [bas.cc + num.c1 + bas.ca + num.c1 + bas.cd]: c1a1d, // ad // 'ca' & 'cd' is some how a reserved word.
  [bas.cc + c3d]: c3d, // 3d
  [bas.cc + c3D]: c3D, // 3D
  [bas.cc + cout]: cout, // out
  [bas.cc + cOut]: cOut, // Out
  [bas.cc + cLog]: cLog, // Log
  [bas.cc + clog]: clog, // log
  [bas.cc + cLogs]: cLogs, // Logs
  [bas.cc + clogs]: clogs, // logs
  [bas.cc + ckey]: ckey, // key
  [bas.cc + cKey]: cKey, // Key
  [bas.cc + ckeys]: ckeys, // keys
  [bas.cc + cKeys]: cKeys, // Keys
  [bas.cc + ckeyed]: ckeyed, // keyed
  [bas.cc + cKeyed]: cKeyed, // Keyed
  [bas.cc + ckeying]: ckeying, // keying
  [bas.cc + cKeying]: cKeying, // Keying
  [bas.cc + cnode]: cnode, // node
  [bas.cc + cNode]: cNode, // Node
  [bas.cc + curl]: curl, // url
  [bas.cc + cURL]: cURL, // URL
  [bas.cc + cnth]: cnth, // nth
  [bas.cc + cNth]: cNth, // Nth
  [bas.cc + cregEx]: cregEx, // regEx
  [bas.cc + cRegEx]: cRegEx, // RegEx
  [bas.cc + cflag]: cflag, // flag
  [bas.cc + cFlag]: cFlag, // Flag
  [bas.cc + cflags]: cflags, // flags
  [bas.cc + cFlags]: cFlags, // Flags

  // Data Types
  [bas.cc + cstring]: cstring, // string
  [bas.cc + cString]: cString, // String
  [bas.cc + cstrings]: cstrings, // strings
  [bas.cc + cStrings]: cStrings, // Strings
  [bas.cc + cinteger]: cinteger, // integer
  [bas.cc + cInteger]: cInteger, // Integer
  [bas.cc + cintegers]: cintegers, // integers
  [bas.cc + cIntegers]: cIntegers, // Integers
  [bas.cc + cfloat]: cfloat, // float
  [bas.cc + cFloat]: cFloat, // Float
  [bas.cc + cfloats]: cfloats, // floats
  [bas.cc + cFloats]: cFloats, // Floats
  [bas.cc + clong]: clong, // long
  [bas.cc + cLong]: cLong, // Long
  [bas.cc + clongs]: clongs, // longs
  [bas.cc + cLongs]: cLongs, // Longs
  [bas.cc + clonger]: clonger, // longer
  [bas.cc + cLonger]: cLonger, // Longer
  [bas.cc + clongest]: clongest, // longest
  [bas.cc + cLongest]: cLongest, // Longest
  [bas.cc + cshort]: cshort, // short
  [bas.cc + cShort]: cShort, // Short
  [bas.cc + cshorts]: cshorts, // shorts
  [bas.cc + cShorts]: cShorts, // Shorts
  [bas.cc + cshorter]: cshorter, // shorter
  [bas.cc + cShorter]: cShorter, // Shorter
  [bas.cc + cshortest]: cshortest, // shortest
  [bas.cc + cShortest]: cShortest, // Shortest
  [bas.cc + cdouble]: cdouble, // double
  [bas.cc + cDouble]: cDouble, // Double
  [bas.cc + cdoubles]: cdoubles, // doubles
  [bas.cc + cDoubles]: cDoubles, // Doubles
  [bas.cc + cchar]: cchar, // char
  [bas.cc + cChar]: cChar, // Char
  [bas.cc + cchars]: cchars, // chars
  [bas.cc + cChars]: cChars, // Chars
  [bas.cc + cboolean]: cboolean, // boolean
  [bas.cc + cBoolean]: cBoolean, // Boolean
  [bas.cc + cbooleans]: cbooleans, // booleans
  [bas.cc + cBooleans]: cBooleans, // Booleans
  [bas.cc + cobject]: cobject, // object
  [bas.cc + cObject]: cObject, // Object
  [bas.cc + cobjects]: cobjects, // objects
  [bas.cc + cObjects]: cObjects, // Objects

  // General Use Words
  [bas.cc + csubstring]: csubstring, // substring
  [bas.cc + csubString]: csubString, // subString
  [bas.cc + cSubString]: cSubString, // SubString
  [bas.cc + cwind]: cwind, // wind
  [bas.cc + cWind]: cWind, // Wind
  [bas.cc + cwindow]: cwindow, // window
  [bas.cc + cWindow]: cWindow, // Window
  [bas.cc + cwindows]: cwindows, // windows
  [bas.cc + cWindows]: cWindows, // Windows
  [bas.cc + clinux]: clinux, // linux
  [bas.cc + cLinux]: cLinux, // Linux
  [bas.cc + cword]: cword, // word
  [bas.cc + cWord]: cWord, // Word
  [bas.cc + cwords]: cwords, // words
  [bas.cc + cWords]: cWords, // Words
  [bas.cc + coops]: coops, // oops
  [bas.cc + cOops]: cOops, // Oops
  [bas.cc + cOOPS]: cOOPS, // OOPS
  [bas.cc + clet]: clet, // let
  [bas.cc + cLet]: cLet, // Let
  [bas.cc + clets]: clets, // lets
  [bas.cc + cLets]: cLets, // Lets
  [bas.cc + cfig]: cfig, // fig
  [bas.cc + cFig]: cFig, // Fig
  [bas.cc + cfiglet]: cfiglet,
  [bas.cc + cFiglet]: cFiglet,
  [bas.cc + cconfig]: cconfig, // config
  [bas.cc + cConfig]: cConfig, // Config
  [bas.cc + cconfiguration]: cconfiguration, // configuration
  [bas.cc + cConfiguration]: cConfiguration, // Configuration
  [bas.cc + cconfigurations]: cconfigurations, // configurations
  [bas.cc + cConfigurations]: cConfigurations, // Configurations
  [bas.cc + cconfigured]: cconfigured, // configured
  [bas.cc + cConfigured]: cConfigured, // Configured
  [bas.cc + cconfiguring]: cconfiguring, // configuring
  [bas.cc + cConfiguring]: cConfiguring, // Configuring
  [bas.cc + cempty]: cempty, // empty
  [bas.cc + cEmpty]: cEmpty, // Empty
  [bas.cc + cfull]: cfull, // full
  [bas.cc + cFull]: cFull, // Full
  [bas.cc + cfully]: cfully, // fully
  [bas.cc + cFully]: cFully, // Fully
  [bas.cc + ccreate]: ccreate, // create
  [bas.cc + cCreate]: cCreate, // Create
  [bas.cc + cSubmit]: cSubmit, // Submit
  [bas.cc + c_add]: c_add, // add
  [bas.cc + cAdd]: cAdd, // Add
  [bas.cc + cADD]: cADD, // ADD
  [bas.cc + cadded]: cadded, // added
  [bas.cc + cAdded]: cAdded, // Added
  [bas.cc + cadding]: cadding, // adding
  [bas.cc + cAdding]: cAdding, // Adding
  [bas.cc + cadditional]: cadditional, // additional
  [bas.cc + cAdditional]: cAdditional, // Additional
  [bas.cc + cADDITIONAL]: cADDITIONAL, // ADDITIONAL
  [bas.cc + cadditionals]: cadditionals, // additionals
  [bas.cc + cAdditionals]: cAdditionals, // Additionals
  [bas.cc + cpen]: cpen, // pen
  [bas.cc + cPen]: cPen, // Pen
  [bas.cc + cpens]: cpens, // pens
  [bas.cc + cPens]: cPens, // Pens
  [bas.cc + cclose]: cclose, // close
  [bas.cc + cClose]: cClose, // Close
  [bas.cc + cclosed]: cclosed, // closed
  [bas.cc + cClosed]: cClosed, // Closed
  [bas.cc + cclosing]: cclosing, // closing
  [bas.cc + cClosing]: cClosing, // Closing
  [bas.cc + copen]: copen, // open
  [bas.cc + cOpen]: cOpen, // Open
  [bas.cc + copens]: copens, // opens
  [bas.cc + cOpens]: cOpens, // Opens
  [bas.cc + copened]: copened, // opened
  [bas.cc + cOpened]: cOpened, // Opened
  [bas.cc + copening]: copening, // opening
  [bas.cc + cOpening]: cOpening, // Opening
  [bas.cc + cUpdate]: cUpdate, // Update
  [bas.cc + cEdit]: cEdit, // Edit
  [bas.cc + cdelete]: cdelete, // delete
  [bas.cc + cDelete]: cDelete, // Delete
  [bas.cc + cdeletion]: cdeletion, // deletion
  [bas.cc + cDeletion]: cDeletion, // Deletion
  [bas.cc + cinsert]: cinsert, // insert
  [bas.cc + cInsert]: cInsert, // Insert
  [bas.cc + cinsertion]: cinsertion, // insertion
  [bas.cc + cInsertion]: cInsertion, // Insertion
  [bas.cc + csubstitute]: csubstitute, // substitute
  [bas.cc + cSubstitute]: cSubstitute, // Substitute
  [bas.cc + csubstitution]: csubstitution, // substitution
  [bas.cc + cSubstitution]: cSubstitution, // Substitution
  [bas.cc + call]: call, // all
  [bas.cc + cAll]: cAll, // All
  [bas.cc + cat]: cat, // at
  [bas.cc + cAt]: cAt, // At // Not to be confused with the bas.cAt = '@'!!!
  [bas.cc + cselect]: cselect, // select
  [bas.cc + cSelect]: cSelect, // Select
  [bas.cc + ccan]: ccan, // can
  [bas.cc + cCan]: cCan, // Can
  [bas.cc + ccancel]: ccancel, // cancel
  [bas.cc + cCancel]: cCancel, // Cancel
  [bas.cc + cconfirm]: cconfirm, // confirm
  [bas.cc + cConfirm]: cConfirm, // Confirm
  [bas.cc + ccount]: ccount, // count
  [bas.cc + cCount]: cCount, // Count
  [bas.cc + ccounter]: ccounter, // counter
  [bas.cc + cCounter]: cCounter, // Counter
  [bas.cc + cAccount]: cAccount, // Account
  [bas.cc + cHamburger]: cHamburger, // Hamburger
  [bas.cc + cMe]: cMe, // Me
  [bas.cc + cMenu]: cMenu, // Menu
  [bas.cc + cwith]: cwith, // with
  [bas.cc + cWith]: cWith, // With
  [bas.cc + cwithout]: cwithout, // without
  [bas.cc + cWithout]: cWithout, // Without
  [bas.cc + cdetail]: cdetail, // detail
  [bas.cc + cDetail]: cDetail, // Detail
  [bas.cc + cdetails]: cdetails, // details
  [bas.cc + cDetails]: cDetails, // Details
  [bas.cc + cfront]: cfront, // front
  [bas.cc + cFront]: cFront, // Front
  [bas.cc + cback]: cback, // back
  [bas.cc + cBack]: cBack, // Back
  [bas.cc + cleft]: cleft, // left
  [bas.cc + cLeft]: cLeft, // Left
  [bas.cc + cright]: cright, // right
  [bas.cc + cRight]: cRight, // Right
  [bas.cc + cTo]: cTo, // To
  [bas.cc + ctop]: ctop, // top
  [bas.cc + cTop]: cTop, // Top
  [bas.cc + cbottom]: cbottom, // bottom
  [bas.cc + cBottom]: cBottom, // Bottom
  [bas.cc + cbegin]: cbegin, // begin
  [bas.cc + cBegin]: cBegin, // Begin
  [bas.cc + cBEGIN]: cBEGIN, // BEGIN
  [bas.cc + cbeginning]: cbeginning, // beginning
  [bas.cc + cBeginning]: cBeginning, // Beginning
  [bas.cc + cend]: cend, // end
  [bas.cc + cEnd]: cEnd, // End
  [bas.cc + cEND]: cEND, // END
  [bas.cc + cending]: cending, // ending
  [bas.cc + cEnding]: cEnding, // Ending
  [bas.cc + cthe]: cthe, // the
  [bas.cc + cThe]: cThe, // The
  [bas.cc + citem]: citem, // item
  [bas.cc + cItem]: cItem, // Item
  [bas.cc + citems]: citems, // items
  [bas.cc + cItems]: cItems, // Items
  [bas.cc + clist]: clist, // list
  [bas.cc + cList]: cList, // List
  [bas.cc + clists]: clists, // lists
  [bas.cc + cLists]: cLists, // Lists
  [bas.cc + clisted]: clisted, // listed
  [bas.cc + cListed]: cListed, // Listed
  [bas.cc + cshare]: cshare, // share
  [bas.cc + cShare]: cShare, // Share
  [bas.cc + cShares]: cShares, // Shares
  [bas.cc + cshares]: cshares, // shares
  [bas.cc + cshared]: cshared, // shared
  [bas.cc + cShared]: cShared, // Shared
  [bas.cc + cUnShared]: cUnShared, // UnShared
  [bas.cc + cUnshared]: cUnshared, // Unshared
  [bas.cc + cUnshare]: cUnshare, // Unshare
  [bas.cc + cUnShare]: cUnShare, // UnShare
  [bas.cc + cview]: cview, // view
  [bas.cc + cView]: cView, // View
  [bas.cc + cnew]: cnew, // new
  [bas.cc + cNew]: cNew, // New
  [bas.cc + cload]: cload, // bas.cad; // load // NOTE: Apparently 'cad' is also a reserved word.
  [bas.cc + cLoad]: cLoad, // bas.cad; // Load // NOTE: Apparently 'cad' is also a reserved word.
  [bas.cc + cloads]: cloads, // loads
  [bas.cc + cLoads]: cLoads, // Loads
  [bas.cc + cloaded]: cloaded, // loaded
  [bas.cc + cLoaded]: cLoaded, // Loaded
  [bas.cc + cloading]: cloading, // loading
  [bas.cc + cLoading]: cLoading, // Loading
  [bas.cc + cclick]: cclick, // click
  [bas.cc + cClick]: cClick, // Click
  [bas.cc + cpress]: cpress, // press
  [bas.cc + cPress]: cPress, // Press
  [bas.cc + cpresses]: cpresses, // presses
  [bas.cc + cPresses]: cPresses, // Presses
  [bas.cc + cpressed]: cpressed, // pressed
  [bas.cc + cPressed]: cPressed, // Pressed
  [bas.cc + cpressing]: cpressing, // pressing
  [bas.cc + cPressing]: cPressing, // Pressing
  [bas.cc + cpressKey]: cpressKey, // pressKey
  [bas.cc + cPressKey]: cPressKey, // PressKey
  [bas.cc + cexpect]: cexpect, // expect
  [bas.cc + cExpect]: cExpect, // Expect
  [bas.cc + cexpects]: cexpects, // expects
  [bas.cc + cExpects]: cExpects, // Expects
  [bas.cc + cexpected]: cexpected, // expected
  [bas.cc + cExpected]: cExpected, // Expected
  [bas.cc + cexpecting]: cexpecting, // expecting
  [bas.cc + cExpecting]: cExpecting, // Expecting
  [bas.cc + cnavigate]: cnavigate, // navigate
  [bas.cc + cNavigate]: cNavigate, // Navigate
  [bas.cc + csave]: csave, // Save
  [bas.cc + cSave]: cSave, // Save
  [bas.cc + cDownload]: cDownload, // Download
  [bas.cc + cNegative]: cNegative, // Negative
  [bas.cc + cPositive]: cPositive, // Positive
  [bas.cc + cEntire]: cEntire, // Entire
  [bas.cc + cinfo]: cinfo, // info
  [bas.cc + cInfo]: cInfo, // Info
  [bas.cc + cLink]: cLink, // Link
  [bas.cc + cLabel]: cLabel, // Label
  [bas.cc + cField]: cField, // Field
  [bas.cc + ctype]: ctype, // type
  [bas.cc + cType]: cType, // Type
  [bas.cc + cTypes]: cTypes, // Types
  [bas.cc + cvalid]: cvalid, // valid
  [bas.cc + cValid]: cValid, // Valid
  [bas.cc + cVALID]: cVALID, // VALID
  [bas.cc + cvalidation]: cvalidation, // validation
  [bas.cc + cValidation]: cValidation, // Validation
  [bas.cc + cvalidations]: cvalidations, // validations
  [bas.cc + cValidations]: cValidations, // Validations
  [bas.cc + cvalidate]: cvalidate, // validate
  [bas.cc + cValidate]: cValidate, // Validate
  [bas.cc + cinvalid]: cinvalid, // invalid
  [bas.cc + cInvalid]: cInvalid, // Invalid
  [bas.cc + cINVALID]: cINVALID, // INVALID
  [bas.cc + cbug]: cbug, // bug
  [bas.cc + cdebug]: cdebug, // debug
  [bas.cc + cDebug]: cDebug, // Debug
  [bas.cc + cpage]: cpage, // page
  [bas.cc + cPage]: cPage, // Page
  [bas.cc + cpages]: cpages, // pages
  [bas.cc + cPages]: cPages, // Pages
  [bas.cc + cmessage]: cmessage, // message
  [bas.cc + cMessage]: cMessage, // Message
  [bas.cc + cmessages]: cmessages, // messages
  [bas.cc + cMessages]: cMessages, // Messages
  [bas.cc + cScript]: cScript, // Script
  [bas.cc + cScripts]: cScripts, // Scripts
  [bas.cc + ckeyword]: ckeyword, // keyword
  [bas.cc + cKeyword]: cKeyword, // Keyword
  [bas.cc + ckeywords]: ckeywords, // keywords
  [bas.cc + cKeywords]: cKeywords, // Keywords
  [bas.cc + cdata]: cdata, // data
  [bas.cc + cData]: cData, // Data
  [bas.cc + cDATA]: cDATA, // DATA
  [bas.cc + cresult]: cresult, // result
  [bas.cc + cResult]: cResult, // Result
  [bas.cc + cresults]: cresults, // results
  [bas.cc + cResults]: cResults, // Results
  [bas.cc + cresulted]: cresulted, // resulted
  [bas.cc + cResulted]: cResulted, // Resulted
  [bas.cc + cresulting]: cresulting, // resulting
  [bas.cc + cResulting]: cResulting, // Resulting
  [bas.cc + cwork]: cwork, // work
  [bas.cc + cWork]: cWork, // Work
  [bas.cc + cflow]: cflow, // flow
  [bas.cc + cFlow]: cFlow, // Flow
  [bas.cc + cworkflow]: cworkflow, // workflow
  [bas.cc + cWorkflow]: cWorkflow, // Workflow
  [bas.cc + cworkflows]: cworkflows, // workflows
  [bas.cc + cWorkflows]: cWorkflows, // Workflows
  [bas.cc + ctest]: ctest, // test
  [bas.cc + cTest]: cTest, // Test
  [bas.cc + cTEST]: cTEST, // TEST
  [bas.cc + ctests]: ctests, // tests
  [bas.cc + cTests]: cTests, // Tests
  [bas.cc + cTESTS]: cTESTS, // TESTS
  [bas.cc + cStatus]: cStatus, // Status
  [bas.cc + cTestStatus]: cTestStatus, // TestStatus
  [bas.cc + cTestStatusMessage]: cTestStatusMessage, // TestStatusMessage
  [bas.cc + cTestWorkflow]: cTestWorkflow, // TestWorkflow
  [bas.cc + cBureau]: cBureau, // Bureau
  [bas.cc + cExhaustive]: cExhaustive, // Exhaustive
  [bas.cc + cBrowser]: cBrowser, // Browser
  [bas.cc + cact]: cact, // act
  [bas.cc + cAct]: cAct, // Act
  [bas.cc + caction]: caction, // action
  [bas.cc + cAction]: cAction, // Action
  [bas.cc + cactions]: cactions, // actions
  [bas.cc + cActions]: cActions, // Actions
  [bas.cc + cactual]: cactual, // actual
  [bas.cc + cActual]: cActual, // Actual
  [bas.cc + cauto]: cauto, // auto
  [bas.cc + cAuto]: cAuto, // Auto
  [bas.cc + cautomation]: cautomation, // automation
  [bas.cc + cAutomation]: cAutomation, // Automation
  [bas.cc + cnumber]: cnumber, // number
  [bas.cc + cNumber]: cNumber, // Number
  [bas.cc + cnumbers]: cnumbers, // numbers
  [bas.cc + cNumbers]: cNumbers, // Numbers
  [bas.cc + cnumbered]: cnumbered, // numbered
  [bas.cc + cNumbered]: cNumbered, // Numbered
  [bas.cc + cnumbering]: cnumbering, // numbering
  [bas.cc + cNumbering]: cNumbering, // Numbering
  [bas.cc + cHost]: cHost, // Host
  [bas.cc + cOf]: cOf, // Of
  [bas.cc + crow]: crow, // row
  [bas.cc + cRow]: cRow, // Row
  [bas.cc + crows]: crows, // rows
  [bas.cc + cRows]: cRows, // Rows
  [bas.cc + crowed]: crowed, // rowed
  [bas.cc + cRowed]: cRowed, // Rowed
  [bas.cc + crowing]: crowing, // rowing
  [bas.cc + cRowing]: cRowing, // Rowing
  [bas.cc + crun]: crun, // run
  [bas.cc + cRun]: cRun, // Run
  [bas.cc + cruns]: cruns, // runs
  [bas.cc + cRuns]: cRuns, // Runs
  [bas.cc + crunning]: crunning, // running
  [bas.cc + cRunning]: cRunning, // Running
  [bas.cc + cmaster]: cmaster, // master
  [bas.cc + cMaster]: cMaster, // Master
  [bas.cc + cEnvironment]: cEnvironment, // Environment
  [bas.cc + cname]: cname, // name
  [bas.cc + cName]: cName, // Name
  [bas.cc + cnames]: cnames, // names
  [bas.cc + cNames]: cNames, // Names
  [bas.cc + cnamed]: cnamed, // named
  [bas.cc + cNamed]: cNamed, // Named
  [bas.cc + ckeywordName]: ckeywordName, // keywordName
  [bas.cc + cKeywordName]: cKeywordName, // KeywordName
  [bas.cc + cPageScriptName]: cPageScriptName, // PageScriptName
  [bas.cc + cid]: cid, // id
  [bas.cc + cId]: cId, // Id
  [bas.cc + cID]: cID, // ID
  [bas.cc + cmail]: cmail, // mail
  [bas.cc + cEmail]: cEmail, // Email
  [bas.cc + cEmails]: cEmails, // Emails
  [bas.cc + cReceive]: cReceive, // Receive
  [bas.cc + cReceived]: cReceived, // Received
  [bas.cc + cdate]: cdate, // date
  [bas.cc + cDate]: cDate, // Date
  [bas.cc + ctime]: ctime, // time
  [bas.cc + cTime]: cTime, // Time
  [bas.cc + cruntime]: cruntime, // runtime
  [bas.cc + cRuntime]: cRuntime, // Runtime
  [bas.cc + cRunTime]: cRunTime, // RunTime
  [bas.cc + cstamp]: cstamp, // stamp
  [bas.cc + cStamp]: cStamp, // Stamp
  [bas.cc + cstamps]: cstamps, // stamps
  [bas.cc + cStamps]: cStamps, // Stamps
  [bas.cc + cstamped]: cstamped, // stamped
  [bas.cc + cStamped]: cStamped, // Stamped
  [bas.cc + cstamping]: cstamping, // stamping
  [bas.cc + cStamping]: cStamping, // Stamping
  [bas.cc + cmediate]: cmediate, // mediate
  [bas.cc + cintermediate]: cintermediate, // intermediate
  [bas.cc + cIntermediate]: cIntermediate, // Intermediate
  [bas.cc + cpath]: cpath, // path
  [bas.cc + cPath]: cPath, // Path
  [bas.cc + cpaths]: cpaths, // paths
  [bas.cc + cPaths]: cPaths, // Paths
  [bas.cc + cexit]: cexit, // exit
  [bas.cc + cExit]: cExit, // Exit
  [bas.cc + cexiting]: cexiting, // exiting
  [bas.cc + cExiting]: cExiting, // Exiting
  [bas.cc + cViewer]: cViewer, // Viewer
  [bas.cc + cPermission]: cPermission, // Permission
  [bas.cc + cBug]: cBug, // Bug
  [bas.cc + cset]: cset, // set
  [bas.cc + cSet]: cSet, // Set
  [bas.cc + csetting]: csetting, // setting
  [bas.cc + cSetting]: cSetting, // Setting
  [bas.cc + csettings]: csettings, // settings
  [bas.cc + cSettings]: cSettings, // Settings
  [bas.cc + cPreview]: cPreview, // Preview
  [bas.cc + climit]: climit, // limit // NOTE: bas.cmi resolves as "s"
  [bas.cc + cLimit]: cLimit, // Limit // NOTE: bas.cmi resolves as "s"
  [bas.cc + cGate]: cGate, // Gate
  [bas.cc + cway]: cway, // way
  [bas.cc + cWay]: cWay, // Way
  [bas.cc + cGateway]: cGateway, // Gateway
  [bas.cc + cprocess]: cprocess, // process
  [bas.cc + cProcess]: cProcess, // Process
  [bas.cc + cPROCESS]: cPROCESS, // PROCESS
  [bas.cc + cprocessed]: cprocessed, // processed
  [bas.cc + cProcessed]: cProcessed, // Processed
  [bas.cc + cprocesses]: cprocesses, // processes
  [bas.cc + cProcesses]: cProcesses, // Processes
  [bas.cc + cprocessing]: cprocessing, // processing
  [bas.cc + cProcessing]: cProcessing, // Processing
  [bas.cc + cPROCESSING]: cPROCESSING, // PROCESSING
  [bas.cc + ccomplete]: ccomplete, // complete
  [bas.cc + cComplete]: cComplete, // Complete
  [bas.cc + ccompleted]: ccompleted, // completed
  [bas.cc + cCompleted]: cCompleted, // Completed
  [bas.cc + cand]: cand, // and
  [bas.cc + cAnd]: cAnd, // And
  [bas.cc + cuse]: cuse, // use
  [bas.cc + cUse]: cUse, // Use
  [bas.cc + cuser]: cuser, // user
  [bas.cc + cUser]: cUser, // User
  [bas.cc + cAccess]: cAccess, // Access
  [bas.cc + clevel]: clevel, // level
  [bas.cc + cLevel]: cLevel, // Level
  [bas.cc + cget]: cget, // get
  [bas.cc + cGet]: cGet, // Get
  [bas.cc + cput]: cput, // put
  [bas.cc + cPut]: cPut, // Put
  [bas.cc + cPUT]: cPUT, // PUT
  [bas.cc + cfrom]: cfrom, // from
  [bas.cc + cFrom]: cFrom, // From
  [bas.cc + cplace]: cplace, // place
  [bas.cc + cPlace]: cPlace, // Place
  [bas.cc + cplaces]: cplaces, // places
  [bas.cc + cPlaces]: cPlaces, // Places
  [bas.cc + cplaced]: cplaced, // placed
  [bas.cc + cPlaced]: cPlaced, // Placed
  [bas.cc + cplacing]: cplacing, // placing
  [bas.cc + cPlacing]: cPlacing, // Placing
  [bas.cc + cplacement]: cplacement, // placement
  [bas.cc + cPlacement]: cPlacement, // Placement
  [bas.cc + creplace]: creplace, // replace
  [bas.cc + cReplace]: cReplace, // Replace
  [bas.cc + creplaces]: creplaces, // replaces
  [bas.cc + cReplaces]: cReplaces, // Replaces
  [bas.cc + creplaced]: creplaced, // replaced
  [bas.cc + cReplaced]: cReplaced, // Replaced
  [bas.cc + creplacing]: creplacing, // replacing
  [bas.cc + cReplacing]: cReplacing, // Replacing
  [bas.cc + creplacement]: creplacement, // replacement
  [bas.cc + cReplacement]: cReplacement, // Replacement
  [bas.cc + cspace]: cspace, // space
  [bas.cc + cSpace]: cSpace, // Space
  [bas.cc + cspaces]: cspaces, // spaces
  [bas.cc + cSpaces]: cSpaces, // Spaces
  [bas.cc + cspaced]: cspaced, // spaced
  [bas.cc + cSpaced]: cSpaced, // Spaced
  [bas.cc + cplus]: cplus, // plus
  [bas.cc + cPlus]: cPlus, // Plus
  [bas.cc + ccolon]: ccolon, // colon
  [bas.cc + cColon]: cColon, // Colon
  [bas.cc + cunder]: cunder, // under
  [bas.cc + cUnder]: cUnder, // Under
  [bas.cc + cscore]: cscore, // score
  [bas.cc + cScore]: cScore, // Score
  [bas.cc + cunderscore]: cunderscore, // underscore
  [bas.cc + cUnderscore]: cUnderscore, // Underscore
  [bas.cc + cCatagory]: cCatagory, // Catagory
  [bas.cc + cclean]: cclean, // clean
  [bas.cc + cClean]: cClean, // Clean
  [bas.cc + ccleaned]: ccleaned, // cleaned
  [bas.cc + cCleaned]: cCleaned, // Cleaned
  [bas.cc + cCarriage]: cCarriage, // Carriage
  [bas.cc + cturn]: cturn, // turn
  [bas.cc + creturn]: creturn, // return
  [bas.cc + cReturn]: cReturn, // Return
  [bas.cc + cconvert]: cconvert, // convert
  [bas.cc + cConvert]: cConvert, // Convert
  [bas.cc + clow]: clow, // low
  [bas.cc + cLow]: cLow, // Low
  [bas.cc + clower]: clower, // lower
  [bas.cc + cLower]: cLower, // Lower
  [bas.cc + ccase]: ccase, // case
  [bas.cc + cCase]: cCase, // Case
  [bas.cc + cmove]: cmove, // move
  [bas.cc + cremove]: cremove, // remove
  [bas.cc + cRemove]: cRemove, // Remove
  [bas.cc + cExtension]: cExtension, // Extension
  [bas.cc + cdig]: cdig, // dig
  [bas.cc + cDig]: cDig, // Dig
  [bas.cc + cdigit]: cdigit, // digit
  [bas.cc + cDigit]: cDigit, // Digit
  [bas.cc + cletter]: cletter, // letter
  [bas.cc + cLetter]: cLetter, // Letter
  [bas.cc + cupper]: cupper, // upper
  [bas.cc + cUpper]: cUpper, // Upper
  [bas.cc + crandom]: crandom, // random
  [bas.cc + cRandom]: cRandom, // Random
  [bas.cc + crandomly]: crandomly, // randomly
  [bas.cc + cRandomly]: cRandomly, // Randomly
  [bas.cc + cgenerate]: cgenerate, // generate
  [bas.cc + cGenerate]: cGenerate, // Generate
  [bas.cc + cgenerated]: cgenerated, // generated
  [bas.cc + cGenerated]: cGenerated, // Generated
  [bas.cc + cparent]: cparent, // parent
  [bas.cc + cParent]: cParent, // Parent
  [bas.cc + cvalue]: cvalue, // value
  [bas.cc + cValue]: cValue, // Value
  [bas.cc + cvalues]: cvalues, // values
  [bas.cc + cValues]: cValues, // Values
  [bas.cc + cfind]: cfind, // find
  [bas.cc + cFind]: cFind, // Find
  [bas.cc + cfindvalue]: cfindvalue, // findvalue
  [bas.cc + cfindValue]: cfindValue, // findValue
  [bas.cc + cFindValue]: cFindValue, // FindValue
  [bas.cc + crange]: crange, // range
  [bas.cc + cRange]: cRange, // Range
  [bas.cc + cnumeric]: cnumeric, // numeric
  [bas.cc + cNumeric]: cNumeric, // Numeric
  [bas.cc + cNumerical]: cNumerical, // Numerical
  [bas.cc + clength]: clength, // length
  [bas.cc + cLength]: cLength, // Length
  [bas.cc + ccode]: ccode, // code
  [bas.cc + cCode]: cCode, // Code
  [bas.cc + ceither]: ceither, // either
  [bas.cc + cEither]: cEither, // Either
  [bas.cc + cenable]: cenable, // enable
  [bas.cc + cEnable]: cEnable, // Enable
  [bas.cc + cenabled]: cenabled, // enabled
  [bas.cc + cEnabled]: cEnabled, // Enabled
  [bas.cc + cdetermine]: cdetermine, // determine
  [bas.cc + cDetermine]: cDetermine, // Determine
  [bas.cc + cties]: cties, // ties
  [bas.cc + cTies]: cTies, // Ties
  [bas.cc + cability]: cability, // ability
  [bas.cc + cAbility]: cAbility, // Ability
  [bas.cc + cabilities]: cabilities, // abilities
  [bas.cc + cAbilities]: cAbilities, // Abilities
  [bas.cc + cvariable]: cvariable, // variable
  [bas.cc + cVariable]: cVariable, // Variable
  [bas.cc + cvariables]: cvariables, // variables
  [bas.cc + cVariables]: cVariables, // Variables
  [bas.cc + cvariability]: cvariability, // variability
  [bas.cc + cVariability]: cVariability, // Variability
  [bas.cc + cvisibility]: cvisibility, // visibility
  [bas.cc + cVisibility]: cVisibility, // Visibility
  [bas.cc + cDialog]: cDialog, // Dialog
  [bas.cc + clibrary]: clibrary, // library
  [bas.cc + cLibrary]: cLibrary, // Library
  [bas.cc + ctable]: ctable, // table
  [bas.cc + cTable]: cTable, // Table
  [bas.cc + cequal]: cequal, // equal
  [bas.cc + cEqual]: cEqual, // Equal
  [bas.cc + cequals]: cequals, // equals
  [bas.cc + cEquals]: cEquals, // Equals
  [bas.cc + cequivalence]: cequivalence, // equivalence
  [bas.cc + cEquivalence]: cEquivalence, // Equivalence
  [bas.cc + cRaw]: cRaw, // Raw
  [bas.cc + cOperation]: cOperation, // Operation
  [bas.cc + cOperating]: cOperating, // Operating
  [bas.cc + csystem]: csystem, // system
  [bas.cc + cSystem]: cSystem, // System
  [bas.cc + csign]: csign, // sign
  [bas.cc + cSign]: cSign, // Sign
  [bas.cc + cassign]: cassign, // assign
  [bas.cc + cAssign]: cAssign, // Assign
  [bas.cc + cassignment]: cassignment, // assignment
  [bas.cc + cAssignment]: cAssignment, // Assignment
  [bas.cc + cAbreviated]: cAbreviated, // Abreviated
  [bas.cc + cwait]: cwait, // wait
  [bas.cc + cWait]: cWait, // Wait
  [bas.cc + cawait]: cawait, // await
  [bas.cc + cHTML]: cHTML, // HTML
  [bas.cc + chtml]: chtml, // html
  [bas.cc + cinner]: cinner, // inner
  [bas.cc + cInner]: cInner, // Inner
  [bas.cc + cOver]: cOver, // Over
  [bas.cc + cride]: cride, // ride
  [bas.cc + cRide]: cRide, // Ride
  [bas.cc + cOverride]: cOverride, // Override
  [bas.cc + cActionOverride]: cActionOverride, // ActionOverride
  [bas.cc + cLocator]: cLocator, // Locator
  [bas.cc + cLocators]: cLocators, // Locators
  [bas.cc + cLocatorLibrary]: cLocatorLibrary, // LocatorLibrary
  [bas.cc + cselector]: cselector, // selector
  [bas.cc + cSelector]: cSelector, // Selector
  [bas.cc + cSelectors]: cSelectors, // Selectors
  [bas.cc + cIndividual]: cIndividual, // Individual
  [bas.cc + cIndividually]: cIndividually, // Individually
  [bas.cc + cexist]: cexist, // exist
  [bas.cc + cExist]: cExist, // Exist
  [bas.cc + cexists]: cexists, // exists
  [bas.cc + cExists]: cExists, // Exists
  [bas.cc + cexisted]: cexisted, // existed
  [bas.cc + cExisted]: cExisted, // Existed
  [bas.cc + cexisting]: cexisting, // existing
  [bas.cc + cExisting]: cExisting, // Existing
  [bas.cc + casync]: casync, // async
  [bas.cc + cAsync]: cAsync, // Async
  [bas.cc + csync]: csync, // sync
  [bas.cc + cSync]: cSync, // Sync
  [bas.cc + cSingular]: cSingular, // Singular
  [bas.cc + cParallel]: cParallel, // Parallel
  [bas.cc + cMulti]: cMulti, // Multi
  [bas.cc + cUnified]: cUnified, // Unified
  [bas.cc + cfault]: cfault, // fault
  [bas.cc + cFault]: cFault, // Fault
  [bas.cc + cFAULT]: cFAULT, // FAULT
  [bas.cc + cdefault]: cdefault, // default
  [bas.cc + cDefault]: cDefault, // Default
  [bas.cc + cDEFAULT]: cDEFAULT, // DEFAULT
  [bas.cc + csingle]: csingle, // single
  [bas.cc + cSingle]: cSingle, // Single
  [bas.cc + cquote]: cquote, // quote
  [bas.cc + cQuote]: cQuote, // Quote
  [bas.cc + cquotes]: cquotes, // quotes
  [bas.cc + cQuotes]: cQuotes, // Quotes
  [bas.cc + cquoted]: cquoted, // quoted
  [bas.cc + cQuoted]: cQuoted, // Quoted
  [bas.cc + cswap]: cswap, // swap
  [bas.cc + cSwap]: cSwap, // Swap
  [bas.cc + cbefore]: cbefore, // before
  [bas.cc + cBefore]: cBefore, // Before
  [bas.cc + cBEFORE]: cBEFORE, // BEFORE
  [bas.cc + cafter]: cafter, // after
  [bas.cc + cAfter]: cAfter, // After
  [bas.cc + cAFTER]: cAFTER, // AFTER
  [bas.cc + cOnce]: cOnce, // Once
  [bas.cc + cUpload]: cUpload, // Upload
  [bas.cc + cStyle]: cStyle, // Style
  [bas.cc + cassert]: cassert, // assert
  [bas.cc + cAssert]: cAssert, // Assert
  [bas.cc + cless]: cless, // less
  [bas.cc + cLess]: cLess, // Less
  [bas.cc + cgreat]: cgreat, // great
  [bas.cc + cGreat]: cGreat, // Great
  [bas.cc + cgreater]: cgreater, // greater
  [bas.cc + cGreater]: cGreater, // Greater
  [bas.cc + cthen]: cthen, // then
  [bas.cc + cThen]: cThen, // Then
  [bas.cc + cthan]: cthan, // than
  [bas.cc + cThan]: cThan, // Than
  [bas.cc + cAssertExists]: cAssertExists, // AssertExists
  [bas.cc + cAssertNotExists]: cAssertNotExists, // AssertNotExists
  [bas.cc + cAssertValueEqual]: cAssertValueEqual, // AssertValueEqual
  [bas.cc + cAssertValueNotEqual]: cAssertValueNotEqual, // AssertValueNotEqual
  [bas.cc + cAssertValueLessThan]: cAssertValueLessThan, // AssertValueLessThan
  [bas.cc + cAssertValueGreaterThan]: cAssertValueGreaterThan, // AssertValueGreaterThan
  [bas.cc + cAssertion]: cAssertion, // Assertion
  [bas.cc + cAssertionType]: cAssertionType, // AssertionType
  [bas.cc + cUploadStyle]: cUploadStyle, // UploadStyle
  [bas.cc + cAssertionStyle]: cAssertionStyle, // AssertionStyle
  [bas.cc + cby]: cby, // by
  [bas.cc + cBy]: cBy, // By
  [bas.cc + cBY]: cBY, // BY
  [bas.cc + cOr]: cOr, // Or
  [bas.cc + cor]: cor, // or
  [bas.cc + cOR]: cOR, // OR
  [bas.cc + cmix]: cmix, // mix // For some reason JavaScript doesn't like cmi.
  [bas.cc + cMix]: cMix, // Mix
  [bas.cc + cmixed]: cmixed, // mixed
  [bas.cc + cMixed]: cMixed, // Mixed
  [bas.cc + calpha]: calpha, // alpha
  [bas.cc + cAlpha]: cAlpha, // Alpha
  [bas.cc + cbetic]: cbetic, // betic
  [bas.cc + calphabetic]: calphabetic, // alphabetic
  [bas.cc + cAlphabetic]: cAlphabetic, // Alphabetic
  [bas.cc + ctext]: ctext, // text
  [bas.cc + cText]: cText, // Text
  [bas.cc + cTEXT]: cTEXT, // TEXT
  [bas.cc + ccontext]: ccontext, // context
  [bas.cc + cContext]: cContext, // Context
  [bas.cc + cinput]: cinput, // input
  [bas.cc + cInput]: cInput, // Input
  [bas.cc + cINPUT]: cINPUT, // INPUT
  [bas.cc + cinputs]: cinputs, // inputs
  [bas.cc + cInputs]: cInputs, // Inputs
  [bas.cc + cinputting]: cinputting, // inputting
  [bas.cc + cInputting]: cInputting, // Inputting
  [bas.cc + cdescription]: cdescription, // description
  [bas.cc + cDescription]: cDescription, // Description
  [bas.cc + cconstant]: cconstant, //constant
  [bas.cc + cConstant]: cConstant, // Constant
  [bas.cc + cconstants]: cconstants, // constants
  [bas.cc + cConstants]: cConstants, // Constants
  [bas.cc + citeration]: citeration, // iteration
  [bas.cc + cIteration]: cIteration, // Iteration
  [bas.cc + cproject]: cproject, // project
  [bas.cc + cProject]: cProject, // Project
  [bas.cc + cProjects]: cProjects, // Projects
  [bas.cc + cAdvance]: cAdvance, // Advance
  [bas.cc + cAdvanced]: cAdvanced, // Advanced
  [bas.cc + cCreation]: cCreation, // Creation
  [bas.cc + ctestData]: ctestData, // testData
  [bas.cc + cpageData]: cpageData, // pageData
  [bas.cc + cPageData]: cPageData, // PageData
  [bas.cc + cTestName]: cTestName, // TestName
  [bas.cc + cPageName]: cPageName, // PageName
  [bas.cc + cbed]: cbed, // bed
  [bas.cc + cBed]: cBed, // Bed
  [bas.cc + cbeds]: cbeds, // beds
  [bas.cc + cBeds]: cBeds, // Beds
  [bas.cc + cbedded]: cbedded, // bedded
  [bas.cc + cBedded]: cBedded, // Bedded
  [bas.cc + cbedding]: cbedding, // bedding
  [bas.cc + cBedding]: cBedding, // Bedding
  [bas.cc + cweb]: cweb, // web
  [bas.cc + cWeb]: cWeb, // Web
  [bas.cc + cwebs]: cwebs, // webs
  [bas.cc + cWebs]: cWebs, // Webs
  [bas.cc + cwebbed]: cwebbed, // webbed
  [bas.cc + cWebbed]: cWebbed, // webbed
  [bas.cc + cwebbing]: cwebbing, // webbing
  [bas.cc + cWebbing]: cWebbing, // Webbing
  [bas.cc + cWebkey]: cWebkey, // Webkey
  [bas.cc + cfile]: cfile, // file
  [bas.cc + cFile]: cFile, // File
  [bas.cc + cfiles]: cfiles, // files
  [bas.cc + cFiles]: cFiles, // Files
  [bas.cc + cfilename]: cfilename, // filename
  [bas.cc + cFilename]: cFilename, // Filename
  [bas.cc + cfilenames]: cfilenames, // filenames
  [bas.cc + cFilenames]: cFilenames, // Filenames
  [bas.cc + cfold]: cfold, // fold
  [bas.cc + cFold]: cFold, // Fold
  [bas.cc + cFolder]: cFolder, // Folder
  [bas.cc + cfolder]: cfolder, // folder
  [bas.cc + cfolders]: cfolders, // folders
  [bas.cc + cFolders]: cFolders, // Folders
  [bas.cc + ccafe]: ccafe, // cafe
  [bas.cc + ccert]: ccert, // cert
  [bas.cc + csrc]: csrc, // src
  [bas.cc + cbin]: cbin, // bin
  [bas.cc + cnation]: cnation, // nation
  [bas.cc + cNation]: cNation, // Nation
  [bas.cc + csource]: csource, // source
  [bas.cc + cSource]: cSource, // Source
  [bas.cc + cdestination]: cdestination, // destination
  [bas.cc + cDestination]: cDestination, // Destination
  [bas.cc + cresource]: cresource, // resource
  [bas.cc + cResource]: cResource, // Resource
  [bas.cc + cresources]: cresources, // resources
  [bas.cc + cResources]: cResources, // Resources
  [bas.cc + cclass]: cclass, // class
  [bas.cc + cClass]: cClass, // Class
  [bas.cc + cIngestion]: cIngestion, // Ingestion
  [bas.cc + cis]: cis, // is
  [bas.cc + cIs]: cIs, // Is
  [bas.cc + cIS]: cIS, // IS
  [bas.cc + ccheck]: ccheck, // check
  [bas.cc + cCheck]: cCheck, // Check
  [bas.cc + cchecks]: cchecks, // checks
  [bas.cc + cChecks]: cChecks, // Checks
  [bas.cc + cchecked]: cchecked, // checked
  [bas.cc + cChecked]: cChecked, // Checked
  [bas.cc + celement]: celement, // element
  [bas.cc + cElement]: cElement, // Element
  [bas.cc + celements]: celements, // elements
  [bas.cc + cElements]: cElements, // Elements
  [bas.cc + cElementName]: cElementName, // ElementName
  [bas.cc + callow]: callow, // allow
  [bas.cc + cAllow]: cAllow, // Allow
  [bas.cc + callowable]: callowable, // allowable
  [bas.cc + cAllowable]: cAllowable, // Allowable
  [bas.cc + chome]: chome, // home
  [bas.cc + cHome]: cHome, // Home
  [bas.cc + cpublic]: cpublic, // public
  [bas.cc + cPublic]: cPublic, // Public
  [bas.cc + cspecial]: cspecial, // special
  [bas.cc + cSpecial]: cSpecial, // Special
  [bas.cc + ccharacter]: ccharacter, // character
  [bas.cc + cCharacter]: cCharacter, // Character
  [bas.cc + ccharacters]: ccharacters, // characters
  [bas.cc + cCharacters]: cCharacters, // Characters
  [bas.cc + cedge]: cedge, // edge
  [bas.cc + cEdge]: cEdge, // Edge
  [bas.cc + cWorks]: cWorks, // Works
  [bas.cc + csolid]: csolid, // solid
  [bas.cc + cSolid]: cSolid, // Solid
  [bas.cc + cBinary]: cBinary, // Binary
  [bas.cc + cTimeout]: cTimeout, // Timeout
  [bas.cc + cTimeOut]: cTimeOut, // TimeOut
  [bas.cc + cDwell]: cDwell, // Dwell
  [bas.cc + ccut]: ccut, // cut
  [bas.cc + cCut]: cCut, // Cut
  [bas.cc + ccuts]: ccuts, // cuts
  [bas.cc + cCuts]: cCuts, // Cuts
  [bas.cc + ccutting]: ccutting, // cutting
  [bas.cc + cCutting]: cCutting, // Cutting
  [bas.cc + ccute]: ccute, // cute
  [bas.cc + cCute]: cCute, // Cute
  [bas.cc + cexecute]: cexecute, // execute
  [bas.cc + cExecute]: cExecute, // Execute
  [bas.cc + cexecutes]: cexecutes, // executes
  [bas.cc + cExecutes]: cExecutes, // Executes
  [bas.cc + cexecuted]: cexecuted, // executed
  [bas.cc + cExecuted]: cExecuted, // Executed
  [bas.cc + cexecuting]: cexecuting, // executing
  [bas.cc + cExecuting]: cExecuting, // Executing
  [bas.cc + csibling]: csibling, // sibling
  [bas.cc + cSibling]: cSibling, // Sibling
  [bas.cc + cchild]: cchild, // child
  [bas.cc + cChild]: cChild, // Child
  [bas.cc + cfilter]: cfilter, // filter
  [bas.cc + cFilter]: cFilter, // Filter
  [bas.cc + cattribute]: cattribute, // attribute
  [bas.cc + cAttribute]: cAttribute, // Attribute
  [bas.cc + cattributes]: cattributes, // attributes
  [bas.cc + cAttributes]: cAttributes, // Attributes
  [bas.cc + cdisabled]: cdisabled, // disabled
  [bas.cc + cDisabled]: cDisabled, // Disabled
  [bas.cc + cman]: cman, // man
  [bas.cc + cMan]: cMan, // Man
  [bas.cc + cwoman]: cwoman, // woman
  [bas.cc + cWoman]: cWoman, // Woman
  [bas.cc + ccell]: ccell, // cell
  [bas.cc + cCell]: cCell, // Cell
  [bas.cc + chung]: chung, // hung
  [bas.cc + cHung]: cHung, // Hung
  [bas.cc + cport]: cport, // port
  [bas.cc + cPort]: cPort, // Port
  [bas.cc + cConstructor]: cConstructor, // Constructor
  [bas.cc + cwarn]: cwarn, // warn
  [bas.cc + cWarn]: cWarn, // Warn
  [bas.cc + cWARN]: cWARN, // WARN
  [bas.cc + cwarning]: cwarning, // warning
  [bas.cc + cWarning]: cWarning, // Warning
  [bas.cc + cWARNING]: cWARNING, // WARNING
  [bas.cc + cwarnings]: cwarnings, // warnings
  [bas.cc + cWarnings]: cWarnings, // Warnings
  [bas.cc + cerror]: cerror, // error
  [bas.cc + cError]: cError, // Error
  [bas.cc + cERROR]: cERROR, // ERROR
  [bas.cc + cash]: cash, // ash
  [bas.cc + cAsh]: cAsh, // Ash
  [bas.cc + cdash]: cdash, // dash
  [bas.cc + cDash]: cDash, // Dash
  [bas.cc + cboard]: cboard, // board
  [bas.cc + cDashboard]: cDashboard, // Dashboard
  [bas.cc + ccompose]: ccompose, // compose
  [bas.cc + cdecompose]: cdecompose, // decompose
  [bas.cc + cDecompose]: cDecompose, // Decompose
  [bas.cc + carray]: carray, // array
  [bas.cc + cArray]: cArray, // Array
  [bas.cc + carrays]: carrays, // arrays
  [bas.cc + cArrays]: cArrays, // Arrays
  [bas.cc + ccamel]: ccamel, // camel
  [bas.cc + cCamel]: cCamel, // Camel
  [bas.cc + cround]: cround, // round
  [bas.cc + cRound]: cRound, // Round
  [bas.cc + crounded]: crounded, // rounded
  [bas.cc + cRounded]: cRounded, // Rounded
  [bas.cc + cquart]: cquart, // quart
  [bas.cc + cQuart]: cQuart, // Quart
  [bas.cc + cquarter]: cquarter, // quarter
  [bas.cc + cQuarter]: cQuarter, // Quarter
  [bas.cc + cquaternion]: cquaternion, // quaternion
  [bas.cc + cQuaternion]: cQuaternion, // Quaternion
  [bas.cc + cnormal]: cnormal, // normal
  [bas.cc + cNormal]: cNormal, // Normal
  [bas.cc + cnormalize]: cnormalize, // normalize
  [bas.cc + cNormalize]: cNormalize, // Normalize
  [bas.cc + cnominal]: cnominal, // nominal
  [bas.cc + cNominal]: cNominal, // Nominal
  [bas.cc + cdegree]: cdegree, // degree
  [bas.cc + cDegree]: cDegree, // Degree
  [bas.cc + cdegrees]: cdegrees, // degrees
  [bas.cc + cDegrees]: cDegrees, // Degrees
  [bas.cc + cangle]: cangle, // angle
  [bas.cc + cAngle]: cAngle, // Angle
  [bas.cc + ctrap]: ctrap, // trap
  [bas.cc + cTrap]: cTrap, // Trap
  [bas.cc + cFraction]: cFraction, // Fraction
  [bas.cc + cvector]: cvector, // vector
  [bas.cc + cVector]: cVector, // Vector
  [bas.cc + cfor]: cfor, // for
  [bas.cc + cFor]: cFor, // For
  [bas.cc + cform]: cform, // form
  [bas.cc + cForm]: cForm, // Form
  [bas.cc + ctransform]: ctransform, // transform
  [bas.cc + cTransform]: cTransform, // Transform
  [bas.cc + cpoint]: cpoint, // point
  [bas.cc + cPoint]: cPoint, // Point
  [bas.cc + clocation]: clocation, // location
  [bas.cc + cLocation]: cLocation, // Location
  [bas.cc + csort]: csort, // sort
  [bas.cc + cSort]: cSort, // Sort
  [bas.cc + csimplify]: csimplify, // simplify
  [bas.cc + cSimplify]: cSimplify, // Simplify
  [bas.cc + cconsolidate]: cconsolidate, // consolidate
  [bas.cc + cConsolidate]: cConsolidate, // Consolidate
  [bas.cc + cconsolidated]: cconsolidated, // consolidated
  [bas.cc + cConsolidated]: cConsolidated, // Consolidated
  [bas.cc + cconsolidates]: cconsolidates, // consolidates
  [bas.cc + cConsolidates]: cConsolidates, // Consolidates
  [bas.cc + cconsolidating]: cconsolidating, // consolidating
  [bas.cc + cConsolidating]: cConsolidating, // Consolidating
  [bas.cc + care]: care, // are
  [bas.cc + cAre]: cAre, // Are
  [bas.cc + cARE]: cARE, // ARE
  [bas.cc + ccompare]: ccompare, // compare
  [bas.cc + cCompare]: cCompare, // Compare
  [bas.cc + ccompares]: ccompares, // compares
  [bas.cc + cCompares]: cCompares, // Compares
  [bas.cc + ccompared]: ccompared, // compared
  [bas.cc + cCompared]: cCompared, // Compared
  [bas.cc + ccomparing]: ccomparing, // comparing
  [bas.cc + cComparing]: cComparing, // Comparing
  [bas.cc + ccomparison]: ccomparison, // comparison
  [bas.cc + cComparison]: cComparison, // Comparison
  [bas.cc + ccomparisons]: ccomparisons, // comparisons
  [bas.cc + cComparisons]: cComparisons, // Comparisons
  [bas.cc + ccontain]: ccontain, // contain
  [bas.cc + cContain]: cContain, // Contain
  [bas.cc + ccontains]: ccontains, // contains
  [bas.cc + cContains]: cContains, // Contains
  [bas.cc + ccontained]: ccontained, // contained
  [bas.cc + cContained]: cContained, // Contained
  [bas.cc + ccontaining]: ccontaining, // containing
  [bas.cc + cContaining]: cContaining, // Containing
  [bas.cc + cvideo]: cvideo, // video
  [bas.cc + cVideo]: cVideo, // Video
  [bas.cc + cProduct]: cProduct, // Product
  [bas.cc + caggregate]: caggregate, // aggregate
  [bas.cc + cAggregate]: cAggregate, // Aggregate
  [bas.cc + carguments]: carguments, // arguments
  [bas.cc + cArguments]: cArguments, // Arguments
  [bas.cc + cDifference]: cDifference, // Difference
  [bas.cc + cbet]: cbet, // bet
  [bas.cc + cBet]: cBet, // Bet
  [bas.cc + cbetween]: cbetween, // between
  [bas.cc + cBetween]: cBetween, // Between
  [bas.cc + ccertain]: ccertain, // certain
  [bas.cc + cascertain]: cascertain, // ascertain
  [bas.cc + cAscertain]: cAscertain, // Ascertain
  [bas.cc + cmatch]: cmatch, // match
  [bas.cc + cMatch]: cMatch, // Match
  [bas.cc + cmatching]: cmatching, // matching
  [bas.cc + cMatching]: cMatching, // Matching
  [bas.cc + cdoes]: cdoes, // does
  [bas.cc + cDoes]: cDoes, // Does
  [bas.cc + cDOES]: cDOES, // DOES
  [bas.cc + capplication]: capplication, // application
  [bas.cc + cApplication]: cApplication, // Application
  [bas.cc + cAPPLICATION]: cAPPLICATION, // APPLICATION
  [bas.cc + cbuild]: cbuild, // build
  [bas.cc + cBuild]: cBuild, // Build
  [bas.cc + cdeploy]: cdeploy, // deploy
  [bas.cc + cDeploy]: cDeploy, // Deploy
  [bas.cc + cDEPLOY]: cDEPLOY, // DEPLOY
  [bas.cc + cdeployment]: cdeployment, // deployment
  [bas.cc + cDeployment]: cDeployment, // Deployment
  [bas.cc + clease]: clease, // lease
  [bas.cc + cLEASE]: cLEASE, // LEASE
  [bas.cc + crelease]: crelease, // release
  [bas.cc + cRelease]: cRelease, // Release
  [bas.cc + cRELEASE]: cRELEASE, // RELEASE
  [bas.cc + creleases]: creleases, // releases
  [bas.cc + cReleases]: cReleases, // Releases
  [bas.cc + creleased]: creleased, // released
  [bas.cc + cReleased]: cReleased, // Released
  [bas.cc + creleasing]: creleasing, // releasing
  [bas.cc + cReleasing]: cReleasing, // Releasing
  [bas.cc + croot]: croot, // root
  [bas.cc + cRoot]: cRoot, // Root
  [bas.cc + cparse]: cparse, // parse
  [bas.cc + cParse]: cParse, // Parse
  [bas.cc + cPARSE]: cPARSE, // PARSE
  [bas.cc + cparser]: cparser, // parser
  [bas.cc + cParser]: cParser, // Parser
  [bas.cc + cPARSER]: cPARSER, // PARSER
  [bas.cc + cparsed]: cparsed, // parsed
  [bas.cc + cParsed]: cParsed, // Parsed
  [bas.cc + cparsing]: cparsing, // parsing
  [bas.cc + cParsing]: cParsing, // Parsing
  [bas.cc + cforward]: cforward, // forward
  [bas.cc + cForward]: cForward, // Forward
  [bas.cc + cslash]: cslash, // slash
  [bas.cc + cSlash]: cSlash, // Slash
  [bas.cc + cmeta]: cmeta, // meta
  [bas.cc + cMeta]: cMeta, // Meta
  [bas.cc + cmetaData]: cmetaData, // metaData
  [bas.cc + cMetaData]: cMetaData, // MetaData
  [bas.cc + cbusiness]: cbusiness, // business
  [bas.cc + cBusiness]: cBusiness, // Business
  [bas.cc + crule]: crule, // rule
  [bas.cc + cRule]: cRule, // Rule
  [bas.cc + cfresh]: cfresh, // fresh
  [bas.cc + crefresh]: crefresh, // refresh
  [bas.cc + cRefresh]: cRefresh, // Refresh
  [bas.cc + ceval]: ceval, // eval
  [bas.cc + cEval]: cEval, // Eval
  [bas.cc + creload]: creload, // reload
  [bas.cc + cReload]: cReload, // Reload
  [bas.cc + cdemo]: cdemo, // demo
  [bas.cc + cDemo]: cDemo, // Demo
  [bas.cc + ccommon]: ccommon, // common
  [bas.cc + cCommon]: cCommon, // Common
  [bas.cc + cfunction]: cfunction, // function
  [bas.cc + cFunction]: cFunction, // Function
  [bas.cc + cfunctions]: cfunctions, // functions
  [bas.cc + cFunctions]: cFunctions, // Functions
  [bas.cc + cmultiple]: cmultiple, // multiple
  [bas.cc + cMultiple]: cMultiple, // Multiple
  [bas.cc + cJournal]: cJournal, // Journal
  [bas.cc + cExecution]: cExecution, // Execution
  [bas.cc + cpercent]: cpercent, // percent
  [bas.cc + cPercent]: cPercent, // Percent
  [bas.cc + cbasic]: cbasic, // basic
  [bas.cc + cBasic]: cBasic, // Basic
  [bas.cc + codd]: codd, // odd
  [bas.cc + cOdd]: cOdd, // Odd
  [bas.cc + ceven]: ceven, // even
  [bas.cc + cEven]: cEven, // Even
  [bas.cc + cEVEN]: cEVEN, // EVEN
  [bas.cc + cevent]: cevent, // event
  [bas.cc + cEvent]: cEvent, // Event
  [bas.cc + cevents]: cevents, // events
  [bas.cc + cEvents]: cEvents, // Events
  [bas.cc + cface]: cface, // face
  [bas.cc + cFace]: cFace, // Face
  [bas.cc + cargument]: cargument, // argument
  [bas.cc + cArgument]: cArgument, // Argument
  [bas.cc + cdrive]: cdrive, // drive
  [bas.cc + cDrive]: cDrive, // Drive
  [bas.cc + cdriven]: cdriven, // driven
  [bas.cc + cDriven]: cDriven, // Driven
  [bas.cc + cinterface]: cinterface, // interface
  [bas.cc + cInterface]: cInterface, // Interface
  [bas.cc + cfont]: cfont, // font
  [bas.cc + cFont]: cFont, // Font
  [bas.cc + cmodule]: cmodule, // module
  [bas.cc + cModule]: cModule, // Module
  [bas.cc + ccolor]: ccolor, // color
  [bas.cc + cColor]: cColor, // Color
  [bas.cc + ccolors]: ccolors, // colors
  [bas.cc + cColors]: cColors, // Colors
  [bas.cc + ccolored]: ccolored, // colored
  [bas.cc + cColored]: cColored, // Colored
  [bas.cc + ccolorize]: ccolorize, // colorize
  [bas.cc + cColorize]: cColorize, // Colorize
  [bas.cc + ccolorized]: ccolorized, // colorized
  [bas.cc + cColorized]: cColorized, // Colorized
  [bas.cc + cold]: cold, // old
  [bas.cc + cOld]: cOld, // Old
  [bas.cc + cbold]: cbold, // bold
  [bas.cc + cBold]: cBold, // Bold
  [bas.cc + cmost]: cmost, // most
  [bas.cc + cMost]: cMost, // Most
  [bas.cc + cpop]: cpop, // pop
  [bas.cc + cPop]: cPop, // Pop
  [bas.cc + cPOP]: cPOP, // POP
  [bas.cc + cpopular]: cpopular, // popular
  [bas.cc + cPopular]: cPopular, // Popular
  [bas.cc + calmost]: calmost, // almost
  [bas.cc + cAlmost]: cAlmost, // Almost
  [bas.cc + cpal]: cpal, // pal
  [bas.cc + cPal]: cPal, // Pal
  [bas.cc + cpalindrome]: cpalindrome, // palindrome
  [bas.cc + cPalindrome]: cPalindrome, // Palindrome
  [bas.cc + caverage]: caverage, // average
  [bas.cc + cAverage]: cAverage, // Average
  [bas.cc + cclient]: cclient, // client
  [bas.cc + cClient]: cClient, // Client
  [bas.cc + crules]: crules, // rules
  [bas.cc + cRules]: cRules, // Rules
  [bas.cc + ccustom]: ccustom, // custom
  [bas.cc + cCustom]: cCustom, // Custom
  [bas.cc + ccommand]: ccommand, // command
  [bas.cc + cCommand]: cCommand, // Command
  [bas.cc + cCOMMAND]: cCOMMAND, // COMMAND
  [bas.cc + ccommands]: ccommands, // commands
  [bas.cc + cCommands]: cCommands, // Commands
  [bas.cc + cqueue]: cqueue, // queue
  [bas.cc + cQueue]: cQueue, // Queue
  [bas.cc + cblob]: cblob, // blob
  [bas.cc + cBlob]: cBlob, // Blob
  [bas.cc + cframe]: cframe, // frame
  [bas.cc + cFrame]: cFrame, // Frame
  [bas.cc + calias]: calias, // alias
  [bas.cc + cAlias]: cAlias, // Alias
  [bas.cc + caliases]: caliases, // aliases
  [bas.cc + cAliases]: cAliases, // Aliases
  [bas.cc + csequencer]: csequencer, // sequencer
  [bas.cc + cSequencer]: cSequencer, // Sequencer
  [bas.cc + cprimary]: cprimary, // primary
  [bas.cc + cPrimary]: cPrimary, // Primary
  [bas.cc + csecondary]: csecondary, // secondary
  [bas.cc + cSecondary]: cSecondary, // Secondary
  [bas.cc + ctertiary]: ctertiary, // tertiary
  [bas.cc + cTertiary]: cTertiary, // Tertiary
  [bas.cc + cdelimit]: cdelimit, // delimit
  [bas.cc + cDelimit]: cDelimit, // Delimit
  [bas.cc + cdelimiter]: cdelimiter, // delimiter
  [bas.cc + cDelimiter]: cDelimiter, // Delimiter
  [bas.cc + cdelimiters]: cdelimiters, // delimiters
  [bas.cc + cDelimiters]: cDelimiters, // Delimiters
  [bas.cc + cdelimited]: cdelimited, // delimited
  [bas.cc + cDelimited]: cDelimited, // Delimited
  [bas.cc + cdelimiting]: cdelimiting, // delimiting
  [bas.cc + cDelimiting]: cDelimiting, // Delimiting
  [bas.cc + chelp]: chelp, // help
  [bas.cc + cHelp]: cHelp, // Help
  [bas.cc + cprint]: cprint, // print
  [bas.cc + cPrint]: cPrint, // Print
  [bas.cc + chive]: chive, // hive
  [bas.cc + cHive]: cHive, // Hive
  [bas.cc + cgenerator]: cgenerator, // generator
  [bas.cc + cGenerator]: cGenerator, // Generator
  [bas.cc + cindex]: cindex, // index
  [bas.cc + cIndex]: cIndex, // Index
  [bas.cc + cabout]: cabout, // about
  [bas.cc + cAbout]: cAbout, // About
  [bas.cc + cstart]: cstart, // start
  [bas.cc + cStart]: cStart, // Start
  [bas.cc + cstarts]: cstarts, // starts
  [bas.cc + cStarts]: cStarts, // Starts
  [bas.cc + cstarted]: cstarted, // started
  [bas.cc + cStarted]: cStarted, // Started
  [bas.cc + cstartup]: cstartup, // startup
  [bas.cc + cstarting]: cstarting, // starting
  [bas.cc + cStarting]: cStarting, // Starting
  [bas.cc + coutput]: coutput, // output
  [bas.cc + cOutput]: cOutput, // Output
  [bas.cc + cmetric]: cmetric, // metric
  [bas.cc + cMetric]: cMetric, // Metric
  [bas.cc + cmetrics]: cmetrics, // metrics
  [bas.cc + cMetrics]: cMetrics, // Metrics
  [bas.cc + crack]: crack, // rack
  [bas.cc + cRack]: cRack, // Rack
  [bas.cc + ctrack]: ctrack, // track
  [bas.cc + cTrack]: cTrack, // Track
  [bas.cc + ctracking]: ctracking, // tracking
  [bas.cc + cTracking]: cTracking, // Tracking
  [bas.cc + cstack]: cstack, // stack
  [bas.cc + cStack]: cStack, // Stack
  [bas.cc + cstandard]: cstandard, // standard
  [bas.cc + cStandard]: cStandard, // Standard
  [bas.cc + cdeviation]: cdeviation, // deviation
  [bas.cc + cDeviation]: cDeviation, // Deviation
  [bas.cc + canalysis]: canalysis, // analysis
  [bas.cc + cAnalysis]: cAnalysis, // Analysis
  [bas.cc + cclear]: cclear, // clear
  [bas.cc + cClear]: cClear, // Clear
  [bas.cc + cversion]: cversion, // version
  [bas.cc + cVersion]: cVersion, // Version
  [bas.cc + ccontrol]: ccontrol, // control
  [bas.cc + cControl]: cControl, // Control
  [bas.cc + ccontrols]: ccontrols, // controls
  [bas.cc + cControls]: cControls, // Controls
  [bas.cc + ccontrolled]: ccontrolled, // controlled
  [bas.cc + cControlled]: cControlled, // Controlled
  [bas.cc + ccontrolling]: ccontrolling, // controlling
  [bas.cc + cControlling]: cControlling, // Controlling
  [bas.cc + ccontroller]: ccontroller, // controller
  [bas.cc + cController]: cController, // Controller
  [bas.cc + ccontrollers]: ccontrollers, // controllers
  [bas.cc + cControllers]: cControllers, // Controllers
  [bas.cc + cperform]: cperform, // perform
  [bas.cc + cPerform]: cPerform, // Perform
  [bas.cc + cperformance]: cperformance, // performance
  [bas.cc + cPerformance]: cPerformance, // Performance
  [bas.cc + cconversion]: cconversion, // conversion
  [bas.cc + cConversion]: cConversion, // Conversion
  [bas.cc + cpass]: cpass, // pass
  [bas.cc + cPass]: cPass, // Pass
  [bas.cc + cPASS]: cPASS, // PASS
  [bas.cc + cpassed]: cpassed, // passed
  [bas.cc + cPassed]: cPassed, // Passed
  [bas.cc + cPASSED]: cPASSED, // PASSED
  [bas.cc + cpassing]: cpassing, // passing
  [bas.cc + cPassing]: cPassing, // Passing
  [bas.cc + cbypass]: cbypass, // bypass
  [bas.cc + cBypass]: cBypass, // Bypass
  [bas.cc + cbypasses]: cbypasses, // bypasses
  [bas.cc + cBypasses]: cBypasses, // Bypasses
  [bas.cc + cbypassed]: cbypassed, // bypassed
  [bas.cc + cBypassed]: cBypassed, // Bypassed
  [bas.cc + cbypassing]: cbypassing, // bypassing
  [bas.cc + cBypassing]: cBypassing, // Bypassing
  [bas.cc + cfail]: cfail, // fail
  [bas.cc + cFail]: cFail, // Fail
  [bas.cc + cFAIL]: cFAIL, // FAIL
  [bas.cc + cfailed]: cfailed, // failed
  [bas.cc + cFailed]: cFailed, // Failed
  [bas.cc + cFAILED]: cFAILED, // FAILED
  [bas.cc + cfailure]: cfailure, // failure
  [bas.cc + cFailure]: cFailure, // Failure
  [bas.cc + csimplified]: csimplified, // simplified
  [bas.cc + cSimplified]: cSimplified, // Simplified
  [bas.cc + ctraditional]: ctraditional, // traditional
  [bas.cc + cTraditional]: cTraditional, // Traditional
  [bas.cc + cground]: cground, // ground
  [bas.cc + cGround]: cGround, // Ground
  [bas.cc + cyell]: cyell, // yell
  [bas.cc + cYell]: cYell, // Yell
  [bas.cc + clack]: clack, // lack
  [bas.cc + cLack]: cLack, // Lack
  [bas.cc + clane]: clane, // lane
  [bas.cc + cLane]: cLane, // Lane
  [bas.cc + csection]: csection, // section
  [bas.cc + cSection]: cSection, // Section
  [bas.cc + csections]: csections, // sections
  [bas.cc + cSections]: cSections, // Sections
  [bas.cc + cunit]: cunit, // unit
  [bas.cc + cUnit]: cUnit, // Unit
  [bas.cc + cunits]: cunits, // units
  [bas.cc + cUnits]: cUnits, // Units
  [bas.cc + cgeneric]: cgeneric, // generic
  [bas.cc + cGeneric]: cGeneric, // Generic
  [bas.cc + cisotope]: cisotope, // isotope
  [bas.cc + cIsotope]: cIsotope, // Isotope
  [bas.cc + cphonic]: cphonic, // phonic
  [bas.cc + cPhonic]: cPhonic, // Phonic
  [bas.cc + cphonics]: cphonics, // phonics
  [bas.cc + cPhonics]: cPhonics, // Phonics
  [bas.cc + cshape]: cshape, // shape
  [bas.cc + cShape]: cShape, // Shape
  [bas.cc + cexport]: cexport, // export
  [bas.cc + cExport]: cExport, // Export
  [bas.cc + cplay]: cplay, // play
  [bas.cc + cPlay]: cPlay, // Play
  [bas.cc + cdisplay]: cdisplay, // display
  [bas.cc + cDisplay]: cDisplay, // Display
  [bas.cc + csum]: csum, // sum
  [bas.cc + cSum]: cSum, // Sum
  [bas.cc + csummary]: csummary, // summary
  [bas.cc + cSummary]: cSummary, // Summary
  [bas.cc + csuggest]: csuggest, // suggest
  [bas.cc + cSuggest]: cSuggest, // Suggest
  [bas.cc + csuggested]: csuggested, // suggested
  [bas.cc + cSuggested]: cSuggested, // Suggested
  [bas.cc + cline]: cline, // line
  [bas.cc + cLine]: cLine, // Line
  [bas.cc + cdocument]: cdocument, // document
  [bas.cc + cDocument]: cDocument, // Document
  [bas.cc + cqualified]: cqualified, // qualified
  [bas.cc + cQualified]: cQualified, // Qualified
  [bas.cc + cfix]: cfix, // fix
  [bas.cc + cFix]: cFix, // Fix
  [bas.cc + cprefix]: cprefix, // prefix
  [bas.cc + cPrefix]: cPrefix, // Prefix
  [bas.cc + csuffix]: csuffix, // suffix
  [bas.cc + cSuffix]: cSuffix, // Suffix
  [bas.cc + cdevelop]: cdevelop, // develop
  [bas.cc + cDevelop]: cDevelop, // Develop
  [bas.cc + cDEVELOP]: cDEVELOP, // DEVELOP
  [bas.cc + cdevelopment]: cdevelopment, // development
  [bas.cc + cDevelopment]: cDevelopment, // Development
  [bas.cc + cDEVELOPMENT]: cDEVELOPMENT, // DEVELOPMENT
  [bas.cc + cproduction]: cproduction, // production
  [bas.cc + cProduction]: cProduction, // Production
  [bas.cc + cPRODUCTION]: cPRODUCTION, // PRODUCTION
  [bas.cc + cstorage]: cstorage, // storage
  [bas.cc + cStorage]: cStorage, // Storage
  [bas.cc + cstore]: cstore, // store
  [bas.cc + cStore]: cStore, // Store
  [bas.cc + cstored]: cstored, // stored
  [bas.cc + cStored]: cStored, // Stored
  [bas.cc + cunique]: cunique, // unique
  [bas.cc + cUnique]: cUnique, // Unique
  [bas.cc + cduplicate]: cduplicate, // duplicate
  [bas.cc + cDuplicate]: cDuplicate, // Duplicate
  [bas.cc + cplease]: cplease, // please
  [bas.cc + cPlease]: cPlease, // Please
  [bas.cc + center]: center, // enter
  [bas.cc + cEnter]: cEnter, // Enter
  [bas.cc + centers]: centers, // enters
  [bas.cc + cEnters]: cEnters, // Enters
  [bas.cc + centered]: centered, // entered
  [bas.cc + cEntered]: cEntered, // Entered
  [bas.cc + centering]: centering, // entering
  [bas.cc + cEntering]: cEntering, // Entering
  [bas.cc + cwere]: cwere, // were
  [bas.cc + cWere]: cWere, // Were
  [bas.cc + cwhere]: cwhere, // where
  [bas.cc + cWhere]: cWhere, // Where
  [bas.cc + cher]: cher, // her
  [bas.cc + cHer]: cHer, // Her
  [bas.cc + chim]: chim, // him
  [bas.cc + cHim]: cHim, // Him
  [bas.cc + chers]: chers, // hers
  [bas.cc + cHers]: cHers, // Hers
  [bas.cc + chis]: chis, // his
  [bas.cc + cHis]: cHis, // His
  [bas.cc + cthem]: cthem, // them
  [bas.cc + cThem]: cThem, // Them
  [bas.cc + cthose]: cthose, // those
  [bas.cc + cThose]: cThose, // Those
  [bas.cc + cthat]: cthat, // that
  [bas.cc + cThat]: cThat, // That
  [bas.cc + cthis]: cthis, // this
  [bas.cc + cThis]: cThis, // This
  [bas.cc + cwhen]: cwhen, // when
  [bas.cc + cWhen]: cWhen, // When
  [bas.cc + cwhat]: cwhat, // what
  [bas.cc + cWhat]: cWhat, // What
  [bas.cc + chow]: chow, // how
  [bas.cc + cHow]: cHow, // How
  [bas.cc + cwhy]: cwhy, // why
  [bas.cc + cWhy]: cWhy, // Why
  [bas.cc + cother]: cother, // other
  [bas.cc + cOther]: cOther, // Other
  [bas.cc + cabreviation]: cabreviation, // abreviation
  [bas.cc + cAbreviation]: cAbreviation, // Abreviation
  [bas.cc + cabreviations]: cabreviations, // abreviations
  [bas.cc + cAbreviations]: cAbreviations, // Abreviations
  [bas.cc + cacronym]: cacronym, // acronym
  [bas.cc + cAcronym]: cAcronym, // Acronym
  [bas.cc + cacronyms]: cacronyms, // acronyms
  [bas.cc + cAcronyms]: cAcronyms, // Acronyms
  [bas.cc + csolve]: csolve, // solve
  [bas.cc + cSolve]: cSolve, // Solve
  [bas.cc + cLehmer]: cLehmer, // Lehmer
  [bas.cc + cdeep]: cdeep, // deep
  [bas.cc + cDeep]: cDeep, // Deep
  [bas.cc + cclone]: cclone, // clone
  [bas.cc + cClone]: cClone, // Clone
  [bas.cc + ccursive]: ccursive, // cursive
  [bas.cc + cCursive]: cCursive, // Cursive
  [bas.cc + crecursive]: crecursive, // recursive
  [bas.cc + cRecursive]: cRecursive, // Recursive
  [bas.cc + cexpansion]: cexpansion, // expansion
  [bas.cc + cExpansion]: cExpansion, // Expansion
  [bas.cc + cscreen]: cscreen, // screen
  [bas.cc + cScreen]: cScreen, // Screen
  [bas.cc + cyou]: cyou, // you
  [bas.cc + cYou]: cYou, // You
  [bas.cc + cwould]: cwould, // would
  [bas.cc + cWould]: cWould, // Would
  [bas.cc + cshould]: cshould, // should
  [bas.cc + cShould]: cShould, // Should
  [bas.cc + ccould]: ccould, // could
  [bas.cc + cCould]: cCould, // Could
  [bas.cc + clike]: clike, // like
  [bas.cc + cLike]: cLike, // Like
  [bas.cc + cfine]: cfine, // fine
  [bas.cc + cFine]: cFine, // Fine
  [bas.cc + cdefine]: cdefine, // define
  [bas.cc + cDefine]: cDefine, // Define
  [bas.cc + cdefined]: cdefined, // defined
  [bas.cc + cDefined]: cDefined, // Defined
  [bas.cc + cdefines]: cdefines, // defines
  [bas.cc + cDefines]: cDefines, // Defines
  [bas.cc + cdefining]: cdefining, // defining
  [bas.cc + cDefining]: cDefining, // Defining
  [bas.cc + cfill]: cfill, // fill
  [bas.cc + cFill]: cFill, // Fill
  [bas.cc + cfulfillment]: cfulfillment, // fulfillment
  [bas.cc + cFulfillment]: cFulfillment, // Fulfillment
  [bas.cc + coptimized]: coptimized, // optimized
  [bas.cc + cOptimized]: cOptimized, // Optimized
  [bas.cc + csome]: csome, // some
  [bas.cc + cSome]: cSome, // Some
  [bas.cc + ccomb]: ccomb, // comb
  [bas.cc + cComb]: cComb, // Comb
  [bas.cc + ccombine]: ccombine, // combine
  [bas.cc + cCombine]: cCombine, // Combine
  [bas.cc + ccombines]: ccombines, // combines
  [bas.cc + cCombines]: cCombines, // Combines
  [bas.cc + ccombined]: ccombined, // combined
  [bas.cc + cCombined]: cCombined, // Combined
  [bas.cc + ccombining]: ccombining, // combining
  [bas.cc + cCombining]: cCombining, // Combining
  [bas.cc + crecombine]: crecombine, // recombine
  [bas.cc + cRecombine]: cRecombine, // Recombine
  [bas.cc + ccombination]: ccombination, // combination
  [bas.cc + cCombination]: cCombination, // Combination
  [bas.cc + ccombinations]: ccombinations, // combinations
  [bas.cc + cCombinations]: cCombinations, // Combinations
  [bas.cc + crecognizer]: crecognizer, // recognizer
  [bas.cc + cRecognizer]: cRecognizer, // Recognizer
  [bas.cc + cpat]: cpat, // pat
  [bas.cc + cPat]: cPat, // Pat
  [bas.cc + cpatt]: cpatt, // patt
  [bas.cc + cPatt]: cPatt, // Patt
  [bas.cc + cpattern]: cpattern, // pattern
  [bas.cc + cPattern]: cPattern, // Pattern
  [bas.cc + cpatterns]: cpatterns, // patterns
  [bas.cc + cPatterns]: cPatterns, // Patterns
  [bas.cc + ccoma]: ccoma, // coma
  [bas.cc + cComa]: cComa, // Coma
  [bas.cc + ccomas]: ccomas, // comas
  [bas.cc + cComas]: cComas, // Comas
  [bas.cc + cseparate]: cseparate, // separate
  [bas.cc + cSeparate]: cSeparate, // Separate
  [bas.cc + cseparated]: cseparated, // separated
  [bas.cc + cSeparated]: cSeparated, // Separated
  [bas.cc + csea]: csea, // sea
  [bas.cc + cSea]: cSea, // Sea
  [bas.cc + csearch]: csearch, // search
  [bas.cc + cSearch]: cSearch, // Search
  [bas.cc + csearches]: csearches, // searches
  [bas.cc + cSearches]: cSearches, // Searches
  [bas.cc + csearched]: csearched, // searched
  [bas.cc + cSearched]: cSearched, // Searched
  [bas.cc + csearching]: csearching, // searching
  [bas.cc + cSearching]: cSearching, // Searching
  [bas.cc + cneed]: cneed, // need
  [bas.cc + cNeed]: cNeed, // Need
  [bas.cc + cimplement]: cimplement, // implement
  [bas.cc + cImplement]: cImplement, // Implement
  [bas.cc + cimplements]: cimplements, // implements
  [bas.cc + cImplements]: cImplements, // Implements
  [bas.cc + cimplementation]: cimplementation, // implementation
  [bas.cc + cImplementation]: cImplementation, // Implementation
  [bas.cc + cgoing]: cgoing, // going
  [bas.cc + cGoing]: cGoing, // Going
  [bas.cc + cmain]: cmain, // main
  [bas.cc + cMain]: cMain, // Main
  [bas.cc + cprogram]: cprogram, // program
  [bas.cc + cProgram]: cProgram, // Program
  [bas.cc + cloop]: cloop, // loop
  [bas.cc + cLoop]: cLoop, // Loop
  [bas.cc + cgood]: cgood, // good
  [bas.cc + cGood]: cGood, // Good
  [bas.cc + cbye]: cbye, // bye
  [bas.cc + cBye]: cBye, // Bye
  [bas.cc + chave]: chave, // have
  [bas.cc + cHave]: cHave, // Have
  [bas.cc + cnice]: cnice, // nice
  [bas.cc + cNice]: cNice, // Nice
  [bas.cc + cday]: cday, // day
  [bas.cc + cDay]: cDay, // Day
  [bas.cc + cstay]: cstay, // stay
  [bas.cc + cStay]: cStay, // Stay
  [bas.cc + csafe]: csafe, // safe
  [bas.cc + cSafe]: cSafe, // Safe
  [bas.cc + cwas]: cwas, // was
  [bas.cc + cWas]: cWas, // Was
  [bas.cc + cbig]: cbig, // big
  [bas.cc + cBig]: cBig, // Big
  [bas.cc + cbigger]: cbigger, // bigger
  [bas.cc + cBigger]: cBigger, // Bigger
  [bas.cc + cbiggest]: cbiggest, // biggest
  [bas.cc + cBiggest]: cBiggest, // Biggest
  [bas.cc + cspecific]: cspecific, // specific
  [bas.cc + cSpecific]: cSpecific, // Specific
  [bas.cc + cspecified]: cspecified, // specified
  [bas.cc + cSpecified]: cSpecified, // Specified
  [bas.cc + cdomain]: cdomain, // domain
  [bas.cc + cDomain]: cDomain, // Domain
  [bas.cc + cmode]: cmode, // mode
  [bas.cc + cMode]: cMode, // Mode
  [bas.cc + csymbol]: csymbol, // symbol
  [bas.cc + cSymbol]: cSymbol, // Symbol
  [bas.cc + csymbols]: csymbols, // symbols
  [bas.cc + cSymbols]: cSymbols, // Symbols
  [bas.cc + cresolve]: cresolve, // resolve
  [bas.cc + cResolve]: cResolve, // Resolve
  [bas.cc + cresolved]: cresolved, // resolved
  [bas.cc + cResolved]: cResolved, // Resolved
  [bas.cc + cresolving]: cresolving, // resolving
  [bas.cc + cResolving]: cResolving, // Resolving
  [bas.cc + cvariation]: cvariation, // variation
  [bas.cc + cVariation]: cVariation, // Variation
  [bas.cc + cterm]: cterm, // term
  [bas.cc + cTerm]: cTerm, // Term
  [bas.cc + ccost]: ccost, // cost
  [bas.cc + cCost]: cCost, // Cost
  [bas.cc + cperiod]: cperiod, // period
  [bas.cc + cPeriod]: cPeriod, // Period
  [bas.cc + ccannot]: ccannot, // cannot
  [bas.cc + cCannot]: cCannot, // Cannot
  [bas.cc + cnothing]: cnothing, // nothing
  [bas.cc + cNothing]: cNothing, // Nothing
  [bas.cc + cnothingness]: cnothingness, // nothingness
  [bas.cc + cNothingness]: cNothingness, // Nothingness
  [bas.cc + cused]: cused, // used
  [bas.cc + cUsed]: cUsed, // Used
  [bas.cc + cusing]: cusing, // using
  [bas.cc + cUsing]: cUsing, // Using
  [bas.cc + cbreak]: cbreak, // break
  [bas.cc + cBreak]: cBreak, // Break
  [bas.cc + cinto]: cinto, // into
  [bas.cc + cInto]: cInto, // Into
  [bas.cc + cunable]: cunable, // unable
  [bas.cc + cUnable]: cUnable, // Unable
  [bas.cc + cnow]: cnow, // now
  [bas.cc + cNow]: cNow, // Now
  [bas.cc + cknow]: cknow, // know
  [bas.cc + cKnow]: cKnow, // Know
  [bas.cc + cknown]: cknown, // known
  [bas.cc + cKnown]: cKnown, // Known
  [bas.cc + cunknown]: cunknown, // unknown
  [bas.cc + cUnknown]: cUnknown, // Unknown
  [bas.cc + ctemp]: ctemp, // temp
  [bas.cc + cTemp]: cTemp, // Temp
  [bas.cc + ctempt]: ctempt, // tempt
  [bas.cc + cTempt]: cTempt, // Tempt
  [bas.cc + cattempt]: cattempt, // attempt
  [bas.cc + cAttempt]: cAttempt, // Attempt
  [bas.cc + cattempts]: cattempts, // attempts
  [bas.cc + cAttempts]: cAttempts, // Attempts
  [bas.cc + cattempted]: cattempted, // attempted
  [bas.cc + cAttempted]: cAttempted, // Attempted
  [bas.cc + cattempting]: cattempting, // attempting
  [bas.cc + cAttempting]: cAttempting, // Attempting
  [bas.cc + cmat]: cmat, // mat
  [bas.cc + cMat]: cMat, // Mat
  [bas.cc + cformat]: cformat, // format
  [bas.cc + cFormat]: cFormat, // Format
  [bas.cc + cformats]: cformats, // formats
  [bas.cc + cFormats]: cFormats, // Formats
  [bas.cc + cformatted]: cformatted, // formatted
  [bas.cc + cFormatted]: cFormatted, // Formatted
  [bas.cc + cformatting]: cformatting, // formatting
  [bas.cc + cFormatting]: cFormatting, // Formatting
  [bas.cc + creformat]: creformat, // reformat
  [bas.cc + cReformat]: cReformat, // Reformat
  [bas.cc + creformats]: creformats, // reformats
  [bas.cc + cReformats]: cReformats, // Reformats
  [bas.cc + creformated]: creformated, // reformatted
  [bas.cc + cReformated]: cReformated, // Reformatted
  [bas.cc + creformating]: creformating, // reformatting
  [bas.cc + cReformating]: cReformating, // Reformatting
  [bas.cc + ccorrect]: ccorrect, // correct
  [bas.cc + cCorrect]: cCorrect, // Correct
  [bas.cc + ccorrects]: ccorrects, // corrects
  [bas.cc + cCorrects]: cCorrects, // Corrects
  [bas.cc + ccorrected]: ccorrected, // corrected
  [bas.cc + cCorrected]: cCorrected, // Corrected
  [bas.cc + ccorrectly]: ccorrectly, // correctly
  [bas.cc + cCorrectly]: cCorrectly, // Correctly
  [bas.cc + ccorrecting]: ccorrecting, // correcting
  [bas.cc + cCorrecting]: cCorrecting, // Correcting
  [bas.cc + cbut]: cbut, // but
  [bas.cc + cBut]: cBut, // But
  [bas.cc + crent]: crent, // rent
  [bas.cc + cRent]: cRent, // Rent
  [bas.cc + ccurrent]: ccurrent, // current
  [bas.cc + cCurrent]: cCurrent, // Current
  [bas.cc + cdelta]: cdelta, // delta
  [bas.cc + cDelta]: cDelta, // Delta
  [bas.cc + cbeing]: cbeing, // being
  [bas.cc + cBeing]: cBeing, // Being
  [bas.cc + cskip]: cskip, // skip
  [bas.cc + cSkip]: cSkip, // Skip
  [bas.cc + cskips]: cskips, // skips
  [bas.cc + cSkips]: cSkips, // Skips
  [bas.cc + cskiped]: cskiped, // skiped
  [bas.cc + cSkiped]: cSkiped, // Skiped
  [bas.cc + cskiping]: cskiping, // skiping
  [bas.cc + cSkiping]: cSkiping, // Skiping
  [bas.cc + chad]: chad, // had
  [bas.cc + cHad]: cHad, // Had
  [bas.cc + cchange]: cchange, // change
  [bas.cc + cChange]: cChange, // Change
  [bas.cc + cCHANGE]: cCHANGE, // CHANGE
  [bas.cc + cpush]: cpush, // push
  [bas.cc + cPush]: cPush, // Push
  [bas.cc + cPUSH]: cPUSH, // PUSH
  [bas.cc + cpushes]: cpushes, // pushes
  [bas.cc + cPushes]: cPushes, // Pushes
  [bas.cc + cpushed]: cpushed, // pushed
  [bas.cc + cPushed]: cPushed, // Pushed
  [bas.cc + cpushing]: cpushing, // pushing
  [bas.cc + cPushing]: cPushing, // Pushing
  [bas.cc + cexpand]: cexpand, // expand
  [bas.cc + cExpand]: cExpand, // Expand
  [bas.cc + cexpands]: cexpands, // expands
  [bas.cc + cExpands]: cExpands, // Expands
  [bas.cc + cexpanded]: cexpanded, // expanded
  [bas.cc + cExpanded]: cExpanded, // Expanded
  [bas.cc + cexpanding]: cexpanding, // expanding
  [bas.cc + cExpanding]: cExpanding, // Expanding
  [bas.cc + ccall]: ccall, // call
  [bas.cc + cCall]: cCall, // Call
  [bas.cc + ccalls]: ccalls, // calls
  [bas.cc + cCalls]: cCalls, // Calls
  [bas.cc + ccalled]: ccalled, // called
  [bas.cc + cCalled]: cCalled, // Called
  [bas.cc + ccalling]: ccalling, // calling
  [bas.cc + cCalling]: cCalling, // Calling
  [bas.cc + clook]: clook, // look
  [bas.cc + cLook]: cLook, // Look
  [bas.cc + clooks]: clooks, // looks
  [bas.cc + cLooks]: cLooks, // Looks
  [bas.cc + clooked]: clooked, // looked
  [bas.cc + cLooked]: cLooked, // Looked
  [bas.cc + clooking]: clooking, // looking
  [bas.cc + cLooking]: cLooking, // Looking
  [bas.cc + clookup]: clookup, // lookup
  [bas.cc + cLookup]: cLookup, // Lookup
  [bas.cc + celse]: celse, // else
  [bas.cc + cElse]: cElse, // Else
  [bas.cc + cfar]: cfar, // far
  [bas.cc + cFar]: cFar, // Far
  [bas.cc + cspecify]: cspecify, // specify
  [bas.cc + cSpecify]: cSpecify, // Specify
  [bas.cc + csupport]: csupport, // support
  [bas.cc + cSupport]: cSupport, // Support
  [bas.cc + csupports]: csupports, // supports
  [bas.cc + cSupports]: cSupports, // Supports
  [bas.cc + csupported]: csupported, // supported
  [bas.cc + cSupported]: cSupported, // Supported
  [bas.cc + csupporting]: csupporting, // supporting
  [bas.cc + cSupporting]: cSupporting, // Supporting
  [bas.cc + cfound]: cfound, // found
  [bas.cc + cFound]: cFound, // Found
  [bas.cc + cfounded]: cfounded, // founded
  [bas.cc + cFounded]: cFounded, // Founded
  [bas.cc + cunfounded]: cunfounded, // unfounded
  [bas.cc + cUnfounded]: cUnfounded, // Unfounded
  [bas.cc + coriginal]: coriginal, // original
  [bas.cc + cOriginal]: cOriginal, // Original
  [bas.cc + coriginals]: coriginals, // originals
  [bas.cc + cOriginals]: cOriginals, // Originals
  [bas.cc + ccause]: ccause, // cause
  [bas.cc + cCause]: cCause, // Cause
  [bas.cc + cbecause]: cbecause, // because
  [bas.cc + cBecause]: cBecause, // Because
  [bas.cc + canother]: canother, // another
  [bas.cc + cAnother]: cAnother, // Another
  [bas.cc + cparameter]: cparameter, // parameter
  [bas.cc + cParameter]: cParameter, // Parameter
  [bas.cc + cparameters]: cparameters, // parameters
  [bas.cc + cParameters]: cParameters, // Parameters
  [bas.cc + ctry]: ctry, // try
  [bas.cc + cTry]: cTry, // Try
  [bas.cc + ctried]: ctried, // tried
  [bas.cc + cTried]: cTried, // Tried
  [bas.cc + ctrying]: ctrying, // trying
  [bas.cc + cTrying]: cTrying, // Trying
  [bas.cc + cgain]: cgain, // gain
  [bas.cc + cGain]: cGain, // Gain
  [bas.cc + cagain]: cagain, // again
  [bas.cc + cAgain]: cAgain, // Again
  [bas.cc + ctent]: ctent, // tent
  [bas.cc + cTent]: cTent, // Tent
  [bas.cc + ctents]: ctents, // tents
  [bas.cc + cTents]: cTents, // Tents
  [bas.cc + ctenting]: ctenting, // tenting
  [bas.cc + cTenting]: cTenting, // Tenting
  [bas.cc + ccontent]: ccontent, // content
  [bas.cc + cContent]: cContent, // Content
  [bas.cc + ccontents]: ccontents, // contents
  [bas.cc + cContents]: cContents, // Contents
  [bas.cc + cmust]: cmust, // must
  [bas.cc + cMust]: cMust, // Must
  [bas.cc + cprompt]: cprompt, // prompt
  [bas.cc + cPrompt]: cPrompt, // Prompt
  [bas.cc + cexample]: cexample, // example
  [bas.cc + cExample]: cExample, // Example
  [bas.cc + cEXAMPLE]: cEXAMPLE, // EXAMPLE
  [bas.cc + cstructure]: cstructure, // structure
  [bas.cc + cStructure]: cStructure, // Structure
  [bas.cc + cstructured]: cstructured, // structured
  [bas.cc + cStructured]: cStructured, // Structured
  [bas.cc + cstructures]: cstructures, // structures
  [bas.cc + cStructures]: cStructures, // Structures
  [bas.cc + cmore]: cmore, // more
  [bas.cc + cMore]: cMore, // More
  [bas.cc + chas]: chas, // has
  [bas.cc + cHas]: cHas, // Has
  [bas.cc + cread]: cread, // read
  [bas.cc + cRead]: cRead, // Read
  [bas.cc + creads]: creads, // reads
  [bas.cc + cReads]: cReads, // Reads
  [bas.cc + creading]: creading, // reading
  [bas.cc + cReading]: cReading, // Reading
  [bas.cc + cready]: cready, // ready
  [bas.cc + cReady]: cReady, // Ready
  [bas.cc + cREADY]: cREADY, // READY
  [bas.cc + calready]: calready, // already
  [bas.cc + cAlready]: cAlready, // Already
  [bas.cc + cALREADY]: cALREADY, // ALREADY
  [bas.cc + cbeen]: cbeen, // been
  [bas.cc + cBeen]: cBeen, // Been
  [bas.cc + cfollow]: cfollow, // follow
  [bas.cc + cFollow]: cFollow, // Follow
  [bas.cc + cfollowes]: cfollowes, // followes
  [bas.cc + cFollowes]: cFollowes, // Followes
  [bas.cc + cfollowed]: cfollowed, // followed
  [bas.cc + cFollowed]: cFollowed, // Followed
  [bas.cc + cfollowing]: cfollowing, // following
  [bas.cc + cFollowing]: cFollowing, // Following
  [bas.cc + cdefinition]: cdefinition, // definition
  [bas.cc + cDefinition]: cDefinition, // Definition
  [bas.cc + cdefinitions]: cdefinitions, // definitions
  [bas.cc + cDefinitions]: cDefinitions, // Definitions
  [bas.cc + cdone]: cdone, // done
  [bas.cc + cDone]: cDone, // Done
  [bas.cc + cDONE]: cDONE, // DONE
  [bas.cc + cphase]: cphase, // phase
  [bas.cc + cPhase]: cPhase, // Phase
  [bas.cc + cphases]: cphases, // phases
  [bas.cc + cPhases]: cPhases, // Phases
  [bas.cc + cphased]: cphased, // phased
  [bas.cc + cPhased]: cPhased, // Phased
  [bas.cc + cphasing]: cphasing, // phasing
  [bas.cc + cPhasing]: cPhasing, // Phasing
  [bas.cc + ctick]: ctick, // tick
  [bas.cc + cTick]: cTick, // Tick
  [bas.cc + cyay]: cyay, // yay
  [bas.cc + cYay]: cYay, // Yay
  [bas.cc + cYAY]: cYAY, // YAY
  [bas.cc + ctag]: ctag, // tag
  [bas.cc + cTag]: cTag, // Tag
  [bas.cc + ctags]: ctags, // tags
  [bas.cc + cTags]: cTags, // Tags
  [bas.cc + ctagged]: ctagged, // tagged
  [bas.cc + cTagged]: cTagged, // Tagged
  [bas.cc + ctagging]: ctagging, // tagging
  [bas.cc + cTagging]: cTagging, // Tagging
  [bas.cc + clit]: clit, // lit
  [bas.cc + cLit]: cLit, // Lit
  [bas.cc + csplit]: csplit, // split
  [bas.cc + cSplit]: cSplit, // Split
  [bas.cc + csplits]: csplits, // splits
  [bas.cc + cSplits]: cSplits, // Splits
  [bas.cc + csplitting]: csplitting, // splitting
  [bas.cc + cSplitting]: cSplitting, // Splitting
  [bas.cc + cdoing]: cdoing, // doing
  [bas.cc + cDoing]: cDoing, // Doing
  [bas.cc + cstraight]: cstraight, // straight
  [bas.cc + cStraight]: cStraight, // Straight
  [bas.cc + cbroker]: cbroker, // broker
  [bas.cc + cBroker]: cBroker, // Broker
  [bas.cc + cbrokers]: cbrokers, // brokers
  [bas.cc + cBrokers]: cBrokers, // Brokers
  [bas.cc + cpost]: cpost, // post
  [bas.cc + cPost]: cPost, // Post
  [bas.cc + cposts]: cposts, // posts
  [bas.cc + cPosts]: cPosts, // Posts
  [bas.cc + cposted]: cposted, // posted
  [bas.cc + cPosted]: cPosted, // Posted
  [bas.cc + cposting]: cposting, // posting
  [bas.cc + cPosting]: cPosting, // Posting
  [bas.cc + cmerge]: cmerge, // merge
  [bas.cc + cMerge]: cMerge, // Merge
  [bas.cc + cMERGE]: cMERGE, // MERGE
  [bas.cc + cmerges]: cmerges, // merges
  [bas.cc + cMerges]: cMerges, // Merges
  [bas.cc + cmerged]: cmerged, // merged
  [bas.cc + cMerged]: cMerged, // Merged
  [bas.cc + cMERGED]: cMERGED, // MERGED
  [bas.cc + cmerging]: cmerging, // merging
  [bas.cc + cMerging]: cMerging, // Merging
  [bas.cc + cinclude]: cinclude, // include
  [bas.cc + cInclude]: cInclude, // Include
  [bas.cc + cincludes]: cincludes, // includes
  [bas.cc + cIncludes]: cIncludes, // Includes
  [bas.cc + cincluded]: cincluded, // included
  [bas.cc + cIncluded]: cIncluded, // Included
  [bas.cc + cincluding]: cincluding, // including
  [bas.cc + cIncluding]: cIncluding, // Including
  [bas.cc + cfinal]: cfinal, // final
  [bas.cc + cFinal]: cFinal, // Final
  [bas.cc + cfinals]: cfinals, // finals
  [bas.cc + cFinals]: cFinals, // Finals
  [bas.cc + cfinally]: cfinally, // finally
  [bas.cc + cFinally]: cFinally, // Finally
  [bas.cc + ccaught]: ccaught, // caught
  [bas.cc + cCaught]: cCaught, // Caught
  [bas.cc + cflat]: cflat, // flat
  [bas.cc + cFlat]: cFlat, // Flat
  [bas.cc + cflats]: cflats, // flats
  [bas.cc + cFlats]: cFlats, // Flats
  [bas.cc + cflatten]: cflatten, // flatten
  [bas.cc + cFlatten]: cFlatten, // Flatten
  [bas.cc + cflattened]: cflattened, // flattened
  [bas.cc + cFlattened]: cFlattened, // Flattened
  [bas.cc + cflattening]: cflattening, // flattening
  [bas.cc + cFlattening]: cFlattening, // Flattening
  [bas.cc + cside]: cside, // side
  [bas.cc + cSide]: cSide, // Side
  [bas.cc + csides]: csides, // sides
  [bas.cc + cSides]: cSides, // Sides
  [bas.cc + csided]: csided, // sided
  [bas.cc + cSided]: cSided, // Sided
  [bas.cc + csiding]: csiding, // siding
  [bas.cc + cSiding]: cSiding, // Siding
  [bas.cc + cinside]: cinside, // inside
  [bas.cc + cInside]: cInside, // Inside
  [bas.cc + ctarget]: ctarget, // target
  [bas.cc + cTarget]: cTarget, // Target
  [bas.cc + ctargets]: ctargets, // targets
  [bas.cc + cTargets]: cTargets, // Targets
  [bas.cc + ctargeted]: ctargeted, // targeted
  [bas.cc + cTargeted]: cTargeted, // Targeted
  [bas.cc + ctargeting]: ctargeting, // targeting
  [bas.cc + cTargeting]: cTargeting, // Targeting
  [bas.cc + cmodify]: cmodify, // modify
  [bas.cc + cModify]: cModify, // Modify
  [bas.cc + cmodified]: cmodified, // modified
  [bas.cc + cModified]: cModified, // Modified
  [bas.cc + cmodifies]: cmodifies, // modifies
  [bas.cc + cModifies]: cModifies, // Modifies
  [bas.cc + cmodifying]: cmodifying, // modifying
  [bas.cc + cModifying]: cModifying, // Modifying
  [bas.cc + creference]: creference, // reference
  [bas.cc + cReference]: cReference, // Reference
  [bas.cc + creferences]: creferences, // references
  [bas.cc + cReferences]: cReferences, // References
  [bas.cc + creferenced]: creferenced, // referenced
  [bas.cc + cReferenced]: cReferenced, // Referenced
  [bas.cc + creferencing]: creferencing, // referencing
  [bas.cc + cReferencing]: cReferencing, // Referencing
  [bas.cc + cwrite]: cwrite, // write
  [bas.cc + cWrite]: cWrite, // Write
  [bas.cc + cwrites]: cwrites, // writes
  [bas.cc + cWrites]: cWrites, // Writes
  [bas.cc + cwritten]: cwritten, // written
  [bas.cc + cWritten]: cWritten, // Written
  [bas.cc + cwriting]: cwriting, // writing
  [bas.cc + cWriting]: cWriting, // Writing
  [bas.cc + cscan]: cscan, // scan
  [bas.cc + cScan]: cScan, // Scan
  [bas.cc + cscans]: cscans, // scans
  [bas.cc + cScans]: cScans, // Scans
  [bas.cc + cscanned]: cscanned, // scanned
  [bas.cc + cScanned]: cScanned, // Scanned
  [bas.cc + cscanning]: cscanning, // scanning
  [bas.cc + cScanning]: cScanning, // Scanning
  [bas.cc + cdirect]: cdirect, // direct
  [bas.cc + cDirect]: cDirect, // Direct
  [bas.cc + cdirects]: cdirects, // directs
  [bas.cc + cDirects]: cDirects, // Directs
  [bas.cc + cdirected]: cdirected, // directed
  [bas.cc + cDirected]: cDirected, // Directed
  [bas.cc + cdirector]: cdirector, // director
  [bas.cc + cDirector]: cDirector, // Director
  [bas.cc + cdirecting]: cdirecting, // directing
  [bas.cc + cDirecting]: cDirecting, // Directing
  [bas.cc + cdirectors]: cdirectors, // directors
  [bas.cc + cDirectors]: cDirectors, // Directors
  [bas.cc + cdirectory]: cdirectory, // directory
  [bas.cc + cDirectory]: cDirectory, // Directory
  [bas.cc + cdirectories]: cdirectories, // directories
  [bas.cc + cDirectories]: cDirectories, // Directories
  [bas.cc + cchive]: cchive, // chive
  [bas.cc + cChive]: cChive, // Chive
  [bas.cc + cchives]: cchives, // chives
  [bas.cc + cChives]: cChives, // Chives
  [bas.cc + carchive]: carchive, // archive
  [bas.cc + cArchive]: cArchive, // Archive
  [bas.cc + carchived]: carchived, // archived
  [bas.cc + cArchived]: cArchived, // Archived
  [bas.cc + carchives]: carchives, // archives
  [bas.cc + cArchives]: cArchives, // Archives
  [bas.cc + carchiving]: carchiving, // archiving
  [bas.cc + cArchiving]: cArchiving, // Archiving
  [bas.cc + ccop]: ccop, // cop
  [bas.cc + cCop]: cCop, // Cop
  [bas.cc + ccops]: ccops, // cops
  [bas.cc + cCops]: cCops, // Cops
  [bas.cc + ccopy]: ccopy, // copy
  [bas.cc + cCopy]: cCopy, // Copy
  [bas.cc + ccopies]: ccopies, // copies
  [bas.cc + cCopies]: cCopies, // Copies
  [bas.cc + ccopied]: ccopied, // copied
  [bas.cc + cCopied]: cCopied, // Copied
  [bas.cc + ccopying]: ccopying, // copying
  [bas.cc + cCopying]: cCopying, // Copying
  [bas.cc + csuccess]: csuccess, // success
  [bas.cc + cSuccess]: cSuccess, // Success
  [bas.cc + csuccesses]: csuccesses, // successes
  [bas.cc + cSuccesses]: cSuccesses, // Successes
  [bas.cc + csuccessful]: csuccessful, // successful
  [bas.cc + cSuccessful]: cSuccessful, // Successful
  [bas.cc + cpack]: cpack, // pack
  [bas.cc + cPack]: cPack, // Pack
  [bas.cc + cpacks]: cpacks, // packs
  [bas.cc + cPacks]: cPacks, // Packs
  [bas.cc + cpacked]: cpacked, // packed
  [bas.cc + cPacked]: cPacked, // Packed
  [bas.cc + cpacking]: cpacking, // packing
  [bas.cc + cPacking]: cPacking, // Packing
  [bas.cc + cpackage]: cpackage, // package
  [bas.cc + cPackage]: cPackage, // Package
  [bas.cc + cpackages]: cpackages, // packages
  [bas.cc + cPackages]: cPackages, // Packages
  [bas.cc + cpackaged]: cpackaged, // packaged
  [bas.cc + cPackaged]: cPackaged, // Packaged
  [bas.cc + cpackaging]: cpackaging, // packaging
  [bas.cc + cPackaging]: cPackaging, // Packaging
  [bas.cc + canalyze]: canalyze, // analyze
  [bas.cc + cAnalyze]: cAnalyze, // Analyze
  [bas.cc + canalyzes]: canalyzes, // analyzes
  [bas.cc + cAnalyzes]: cAnalyzes, // Analyzes
  [bas.cc + canalyzed]: canalyzed, // analyzed
  [bas.cc + cAnalyzed]: cAnalyzed, // Analyzed
  [bas.cc + canalyzing]: canalyzing, // analyzing
  [bas.cc + cAnalyzing]: cAnalyzing, // Analyzing
  [bas.cc + csame]: csame, // same
  [bas.cc + cSame]: cSame, // Same
  [bas.cc + cthere]: cthere, // there
  [bas.cc + cThere]: cThere, // There
  [bas.cc + cbracket]: cbracket, // bracket
  [bas.cc + cBracket]: cBracket, // Bracket
  [bas.cc + cbrackets]: cbrackets, // brackets
  [bas.cc + cBrackets]: cBrackets, // Brackets
  [bas.cc + cbracketed]: cbracketed, // bracketed
  [bas.cc + cBracketed]: cBracketed, // Bracketed
  [bas.cc + cbracketing]: cbracketing, // bracketing
  [bas.cc + cBracketing]: cBracketing, // Bracketing
  [bas.cc + cregular]: cregular, // regular
  [bas.cc + cRegular]: cRegular, // Regular
  [bas.cc + cexpression]: cexpression, // expression
  [bas.cc + cExpression]: cExpression, // Expression
  [bas.cc + cexpressions]: cexpressions, // expressions
  [bas.cc + cExpressions]: cExpressions, // Expressions
  [bas.cc + clexical]: clexical, // lexical
  [bas.cc + cLexical]: cLexical, // Lexical
  [bas.cc + clexicon]: clexicon, // lexicon
  [bas.cc + cLexicon]: cLexicon, // Lexicon
  [bas.cc + clexicons]: clexicons, // lexicons
  [bas.cc + cLexicons]: cLexicons, // Lexicons
  [bas.cc + cjust]: cjust, // just
  [bas.cc + cJust]: cJust, // Just
  [bas.cc + cjustice]: cjustice, // justice
  [bas.cc + cJustice]: cJustice, // Justice
  [bas.cc + cjustified]: cjustified, // justified
  [bas.cc + cJustified]: cJustified, // Justified
  [bas.cc + cadjust]: cadjust, // adjust
  [bas.cc + cAdjust]: cAdjust, // Adjust
  [bas.cc + cadjusts]: cadjusts, // adjusts
  [bas.cc + cAdjusts]: cAdjusts, // Adjusts
  [bas.cc + cadjusted]: cadjusted, // adjusted
  [bas.cc + cAdjusted]: cAdjusted, // Adjusted
  [bas.cc + cadjusting]: cadjusting, // adjusting
  [bas.cc + cAdjusting]: cAdjusting, // Adjusting
  [bas.cc + csleep]: csleep, // sleep
  [bas.cc + cSleep]: cSleep, // Sleep
  [bas.cc + csleeps]: csleeps, // sleeps
  [bas.cc + cSleeps]: cSleeps, // Sleeps
  [bas.cc + csleeped]: csleeped, // sleeped
  [bas.cc + cSleeped]: cSleeped, // Sleeped
  [bas.cc + csleeping]: csleeping, // sleeping
  [bas.cc + cSleeping]: cSleeping, // Sleeping
  [bas.cc + cleaf]: cleaf, // leaf
  [bas.cc + cLeaf]: cLeaf, // Leaf
  [bas.cc + centry]: centry, // entry
  [bas.cc + cEntry]: cEntry, // Entry
  [bas.cc + centries]: centries, // entries
  [bas.cc + cEntries]: cEntries, // Entries
  [bas.cc + centity]: centity, // entity
  [bas.cc + cEntity]: cEntity, // Entity
  [bas.cc + cmay]: cmay, // may
  [bas.cc + cMay]: cMay, // May
  [bas.cc + conly]: conly, // only
  [bas.cc + cOnly]: cOnly, // Only
  [bas.cc + csuch]: csuch, // such
  [bas.cc + cSuch]: cSuch, // Such
  [bas.cc + cgeneration]: cgeneration, // generation
  [bas.cc + cGeneration]: cGeneration, // Generation
  [bas.cc + cDemocratic]: cDemocratic, // Democratic
  [bas.cc + cRepublic]: cRepublic, // Republic
  [bas.cc + cCentral]: cCentral, // Central
  [bas.cc + cAfrican]: cAfrican, // African
  [bas.cc + cPapua]: cPapua, // Papua
  [bas.cc + cTrinidad]: cTrinidad, // Trinidad
  [bas.cc + cTabago]: cTabago, // Tabago
  [bas.cc + cUnited]: cUnited, // United
  [bas.cc + cArab]: cArab, // Arab
  [bas.cc + cEmirates]: cEmirates, // Emirates
  [bas.cc + cStates]: cStates, // States
  [bas.cc + cAmerica]: cAmerica, // America
  [bas.cc + cliver]: cliver, // liver
  [bas.cc + cLiver]: cLiver, // Liver
  [bas.cc + ccountry]: ccountry, // country
  [bas.cc + cCountry]: cCountry, // Country
  [bas.cc + ccountries]: ccountries, // countries
  [bas.cc + cCountries]: cCountries, // Countries
  [bas.cc + cknot]: cknot, // knot
  [bas.cc + cKnot]: cKnot, // Knot
  [bas.cc + cknots]: cknots, // knots
  [bas.cc + cKnots]: cKnots, // Knots
  [bas.cc + clanguage]: clanguage, // language
  [bas.cc + cLanguage]: cLanguage, // Language
  [bas.cc + clanguages]: clanguages, // languages
  [bas.cc + cLanguages]: cLanguages, // Languages
  [bas.cc + csole]: csole, // sole
  [bas.cc + cSole]: cSole, // Sole
  [bas.cc + cconsole]: cconsole, // console
  [bas.cc + cConsole]: cConsole, // Console
  [bas.cc + cboss]: cboss, // boss
  [bas.cc + cBoss]: cBoss, // Boss
  [bas.cc + cpanic]: cpanic, // panic
  [bas.cc + cPanic]: cPanic, // Panic
  [bas.cc + cslow]: cslow, // slow
  [bas.cc + cSlow]: cSlow, // Slow
  [bas.cc + cgot]: cgot, // got
  [bas.cc + cGot]: cGot, // Got
  [bas.cc + cmiss]: cmiss, // miss
  [bas.cc + cMiss]: cMiss, // Miss
  [bas.cc + cecho]: cecho, // echo
  [bas.cc + cEcho]: cEcho, // Echo
  [bas.cc + cincrement]: cincrement, // increment
  [bas.cc + cIncrement]: cIncrement, // Increment
  [bas.cc + cincrements]: cincrements, // increments
  [bas.cc + cIncrements]: cIncrements, // Increments
  [bas.cc + cincremented]: cincremented, // incremented
  [bas.cc + cIncremented]: cIncremented, // Incremented
  [bas.cc + cincrementing]: cincrementing, // incrementing
  [bas.cc + cIncrementing]: cIncrementing, // Incrementing
  [bas.cc + cforce]: cforce, // force
  [bas.cc + cForce]: cForce, // Force
  [bas.cc + cforced]: cforced, // forced
  [bas.cc + cForced]: cForced, // Forced
  [bas.cc + cforcing]: cforcing, // forcing
  [bas.cc + cForcing]: cForcing, // Forcing
  [bas.cc + cforces]: cforces, // forces
  [bas.cc + cForces]: cForces, // Forces
  [bas.cc + cexecutrix]: cexecutrix, // executrix
  [bas.cc + cExecutrix]: cExecutrix, // Executrix
  [bas.cc + cframework]: cframework, // framework
  [bas.cc + cFramework]: cFramework, // Framework
  [bas.cc + cboot]: cboot, // boot
  [bas.cc + cBoot]: cBoot, // Boot
  [bas.cc + cstrap]: cstrap, // strap
  [bas.cc + cStrap]: cStrap, // Strap
  [bas.cc + csetup]: csetup, // setup
  [bas.cc + cSetup]: cSetup, // Setup
  [bas.cc + csetups]: csetups, // setups
  [bas.cc + cSetups]: cSetups, // Setups
  [bas.cc + csynchronous]: csynchronous, // synchronous
  [bas.cc + cSynchronous]: cSynchronous, // Synchronous
  [bas.cc + csynchronously]: csynchronously, // synchronously
  [bas.cc + cSynchronously]: cSynchronously, // Synchronously
  [bas.cc + cappend]: cappend, // append
  [bas.cc + cAppend]: cAppend, // Append
  [bas.cc + cappends]: cappends, // appends
  [bas.cc + cAppends]: cAppends, // Appends
  [bas.cc + cappended]: cappended, // appended
  [bas.cc + cAppended]: cAppended, // Appended
  [bas.cc + cappending]: cappending, // appending
  [bas.cc + cAppending]: cAppending, // Appending
  [bas.cc + cmoment]: cmoment, // moment
  [bas.cc + cMoment]: cMoment, // Moment
  [bas.cc + cmoments]: cmoments, // moments
  [bas.cc + cMoments]: cMoments, // Moments
  [bas.cc + ccompute]: ccompute, // compute
  [bas.cc + cCompute]: cCompute, // Compute
  [bas.cc + ccomputes]: ccomputes, // computes
  [bas.cc + cComputes]: cComputes, // Computes
  [bas.cc + ccomputer]: ccomputer, // computer
  [bas.cc + cComputer]: cComputer, // Computer
  [bas.cc + ccomputers]: ccomputers, // computers
  [bas.cc + cComputers]: cComputers, // Computers
  [bas.cc + ccomputing]: ccomputing, // computing
  [bas.cc + cComputing]: cComputing, // Computing
  [bas.cc + cschema]: cschema, // schema
  [bas.cc + cSchema]: cSchema, // Schema
  [bas.cc + cdot]: cdot, // dot
  [bas.cc + cDot]: cDot, // Dot
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  [bas.cc + cAbsolute]: cAbsolute, // Absolute
  [bas.cc + cAcid]: cAcid, // Acid
  [bas.cc + cAir]: cAir, // Air
  [bas.cc + cSuperiority]: cSuperiority, // Superiority
  [bas.cc + cAlabaster]: cAlabaster, // Alabaster
  [bas.cc + cAlice]: cAlice, // Alice
  [bas.cc + cAlloy]: cAlloy, // Alloy
  [bas.cc + cAmaranth]: cAmaranth, // Amaranth
  [bas.cc + cAndroid]: cAndroid, // Android
  [bas.cc + cAntique]: cAntique, // Antique
  [bas.cc + cBrass]: cBrass, // Brass
  [bas.cc + cBronze]: cBronze, // Bronze
  [bas.cc + cApple]: cApple, // Apple
  [bas.cc + cApricot]: cApricot, // Apricot
  [bas.cc + cArctic]: cArctic, // Arctic
  [bas.cc + cArmy]: cArmy, // Army
  [bas.cc + cArylide]: cArylide, // Arylide
  [bas.cc + cAtomic]: cAtomic, // Atomic
  [bas.cc + cBaby]: cBaby, // Baby
  [bas.cc + cEyes]: cEyes, // Eyes
  [bas.cc + cPowder]: cPowder, // Powder
  [bas.cc + cBaker]: cBaker, // Baker
  [bas.cc + cMiller]: cMiller, // Miller
  [bas.cc + cBanana]: cBanana, // Banana
  [bas.cc + cMania]: cMania, // Mania
  [bas.cc + cBarbie]: cBarbie, // Barbie
  [bas.cc + cBarn]: cBarn, // Barn
  [bas.cc + cBattleship]: cBattleship, // Battleship
  [bas.cc + cBeau]: cBeau, // Beau
  [bas.cc + cDazzled]: cDazzled, // Dazzled
  [bas.cc + cBitter]: cBitter, // Bitter
  [bas.cc + csweet]: csweet, // sweet
  [bas.cc + cSweet]: cSweet, // Sweet
  [bas.cc + cBittersweet]: cBittersweet, // Bittersweet
  [bas.cc + cShimmer]: cShimmer, // Shimmer
  [bas.cc + cBean]: cBean, // Bean
  [bas.cc + cChocolate]: cChocolate, // Chocolate
  [bas.cc + cShadows]: cShadows, // Shadows
  [bas.cc + cBlanched]: cBlanched, // Blanched
  [bas.cc + cBlast]: cBlast, // Blast
  [bas.cc + cBlizzard]: cBlizzard, // Blizzard
  [bas.cc + cBlood]: cBlood, // Blood
  [bas.cc + cCrayola]: cCrayola, // Crayola
  [bas.cc + cMunsell]: cMunsell, // Munsell
  [bas.cc + cPantone]: cPantone, // Pantone
  [bas.cc + cPigment]: cPigment, // Pigment
  [bas.cc + cBell]: cBell, // Bell
  [bas.cc + cwheel]: cwheel, // wheel
  [bas.cc + cWheel]: cWheel, // Wheel
  [bas.cc + cwheels]: cwheels, // wheels
  [bas.cc + cWheels]: cWheels, // Wheels
  [bas.cc + cJeans]: cJeans, // Jeans
  [bas.cc + cYonder]: cYonder, // Yonder
  [bas.cc + cBottle]: cBottle, // Bottle
  [bas.cc + cbrick]: cbrick, // brick
  [bas.cc + cBrick]: cBrick, // Brick
  [bas.cc + cbricks]: cbricks, // bricks
  [bas.cc + cBricks]: cBricks, // Bricks
  [bas.cc + cBright]: cBright, // Bright
  [bas.cc + cBrilliant]: cBrilliant, // Brilliant
  [bas.cc + cRacing]: cRacing, // Racing
  [bas.cc + cSugar]: cSugar, // Sugar
  [bas.cc + cBrunswick]: cBrunswick, // Brunswick
  [bas.cc + cBud]: cBud, // Bud
  [bas.cc + cBurly]: cBurly, // Burly
  [bas.cc + cBurnished]: cBurnished, // Burnished
  [bas.cc + cBurnt]: cBurnt, // Burnt
  [bas.cc + cCadet]: cCadet, // Cadet
  [bas.cc + cCafe]: cCafe, // Cafe
  [bas.cc + cCambridge]: cCambridge, // Cambridge
  [bas.cc + cCameo]: cCameo, // Cameo
  [bas.cc + cCaput]: cCaput, // Caput
  [bas.cc + cMortuum]: cMortuum, // Mortuum
  [bas.cc + cCaribbean]: cCaribbean, // Caribbean
  [bas.cc + cCarnation]: cCarnation, // Carnation
  [bas.cc + cCarrot]: cCarrot, // Carrot
  [bas.cc + cCastleton]: cCastleton, // Castleton
  [bas.cc + cCedar]: cCedar, // Cedar
  [bas.cc + cChest]: cChest, // Chest
  [bas.cc + cCeladon]: cCeladon, // Celadon
  [bas.cc + cCeltic]: cCeltic, // Celtic
  [bas.cc + cCharleston]: cCharleston, // Charleston
  [bas.cc + cCharm]: cCharm, // Charm
  [bas.cc + cChartreuse]: cChartreuse, // Chartreuse
  [bas.cc + cCherry]: cCherry, // Cherry
  [bas.cc + cBlossom]: cBlossom, // Blossom
  [bas.cc + cChestnut]: cChestnut, // Chestnut
  [bas.cc + cChrome]: cChrome, // Chrome
  [bas.cc + cCinnamon]: cCinnamon, // Cinnamon
  [bas.cc + cCocoa]: cCocoa, // Cocoa
  [bas.cc + cCoffee]: cCoffee, // Coffee
  [bas.cc + cColumbia]: cColumbia, // Columbia
  [bas.cc + cCool]: cCool, // Cool
  [bas.cc + cflower]: cflower, // flower
  [bas.cc + cFlower]: cFlower, // Flower
  [bas.cc + cflowers]: cflowers, // flowers
  [bas.cc + cFlowers]: cFlowers, // Flowers
  [bas.cc + csilk]: csilk, // silk
  [bas.cc + cSilk]: cSilk, // Silk
  [bas.cc + cCosmic]: cCosmic, // Cosmic
  [bas.cc + cLatte]: cLatte, // Latte
  [bas.cc + cCoyote]: cCoyote, // Coyote
  [bas.cc + cCotton]: cCotton, // Cotton
  [bas.cc + cCyber]: cCyber, // Cyber
  [bas.cc + cDark]: cDark, // Dark
  [bas.cc + cByzantium]: cByzantium, // Byzantium
  [bas.cc + cElectric]: cElectric, // Electric
  [bas.cc + cKhaki]: cKhaki, // Khaki
  [bas.cc + cHorse]: cHorse, // Horse
  [bas.cc + cHorses]: cHorses, // Horses
  [bas.cc + cMoss]: cMoss, // Moss
  [bas.cc + cPastel]: cPastel, // Pastel
  [bas.cc + cSky]: cSky, // Sky
  [bas.cc + cSlate]: cSlate, // Slate
  [bas.cc + cSpring]: cSpring, // Spring
  [bas.cc + cDartmouth]: cDartmouth, // Dartmouth
  [bas.cc + cDavys]: cDavys, // Davys
  [bas.cc + cCerise]: cCerise, // Cerise
  [bas.cc + cSparkle]: cSparkle, // Sparkle
  [bas.cc + cDim]: cDim, // Dim
  [bas.cc + cDodger]: cDodger, // Dodger
  [bas.cc + cDogwood]: cDogwood, // Dogwood
  [bas.cc + cDuke]: cDuke, // Duke
  [bas.cc + cDutch]: cDutch, // Dutch
  [bas.cc + cEarth]: cEarth, // Earth
  [bas.cc + cEerie]: cEerie, // Eerie
  [bas.cc + cEton]: cEton, // Eton
  [bas.cc + cFalu]: cFalu, // Falu
  [bas.cc + cFashion]: cFashion, // Fashion
  [bas.cc + cFern]: cFern, // Fern
  [bas.cc + cFiery]: cFiery, // Fiery
  [bas.cc + cFire]: cFire, // Fire
  [bas.cc + cEngine]: cEngine, // Engine
  [bas.cc + cFloral]: cFloral, // Floral
  [bas.cc + cFluorescent]: cFluorescent, // Fluorescent
  [bas.cc + cForest]: cForest, // Forest
  [bas.cc + cFrost]: cFrost, // Frost
  [bas.cc + cbite]: cbite, // bite
  [bas.cc + cFuzzy]: cFuzzy, // Fuzzy
  [bas.cc + cWuzzy]: cWuzzy, // Wuzzy
  [bas.cc + cGhost]: cGhost, // Ghost
  [bas.cc + cGlossy]: cGlossy, // Glossy
  [bas.cc + cMetal]: cMetal, // Metal
  [bas.cc + cMetallic]: cMetallic, // Metallic
  [bas.cc + cFusion]: cFusion, // Fusion
  [bas.cc + cPoppy]: cPoppy, // Poppy
  [bas.cc + cGranite]: cGranite, // Granite
  [bas.cc + cGranny]: cGranny, // Granny
  [bas.cc + cSmith]: cSmith, // Smith
  [bas.cc + cLizard]: cLizard, // Lizard
  [bas.cc + cGun]: cGun, // Gun
  [bas.cc + cHarvest]: cHarvest, // Harvest
  [bas.cc + cHeat]: cHeat, // Heat
  [bas.cc + cWave]: cWave, // Wave
  [bas.cc + cHollywood]: cHollywood, // Hollywood
  [bas.cc + cHoney]: cHoney, // Honey
  [bas.cc + cdew]: cdew, // dew
  [bas.cc + cHonolulu]: cHonolulu, // Honolulu
  [bas.cc + cHookers]: cHookers, // Hookers
  [bas.cc + cHot]: cHot, // Hot
  [bas.cc + cHunter]: cHunter, // Hunter
  [bas.cc + cIce]: cIce, // Ice
  [bas.cc + cIlluminating]: cIlluminating, // Illuminating
  [bas.cc + cImperial]: cImperial, // Imperial
  [bas.cc + cworm]: cworm, // worm
  [bas.cc + cIndependence]: cIndependence, // Independence
  [bas.cc + cIndian]: cIndian, // Indian
  [bas.cc + cDye]: cDye, // Dye
  [bas.cc + cnational]: cnational, // national
  [bas.cc + cNational]: cNational, // National
  [bas.cc + cnationals]: cnationals, // nationals
  [bas.cc + cNationals]: cNationals, // Nationals
  [bas.cc + cInternational]: cInternational, // International
  [bas.cc + cAerospace]: cAerospace, // Aerospace
  [bas.cc + cEngineering]: cEngineering, // Engineering
  [bas.cc + cBridge]: cBridge, // Bridge
  [bas.cc + cCarmine]: cCarmine, // Carmine
  [bas.cc + cjazz]: cjazz, // jazz
  [bas.cc + cJazz]: cJazz, // Jazz
  [bas.cc + cberry]: cberry, // berry
  [bas.cc + cBerry]: cBerry, // Berry
  [bas.cc + cjam]: cjam, // jam
  [bas.cc + cJam]: cJam, // Jam
  [bas.cc + cKelly]: cKelly, // Kelly
  [bas.cc + cKombu]: cKombu, // Kombu
  [bas.cc + cLanguid]: cLanguid, // Languid
  [bas.cc + cLapis]: cLapis, // Lapis
  [bas.cc + cLazuli]: cLazuli, // Lazuli
  [bas.cc + cLaser]: cLaser, // Laser
  [bas.cc + cLaurel]: cLaurel, // Laurel
  [bas.cc + cLawn]: cLawn, // Lawn
  [bas.cc + cCurry]: cCurry, // Curry
  [bas.cc + cGlacier]: cGlacier, // Glacier
  [bas.cc + cMeringue]: cMeringue, // Meringue
  [bas.cc + cLight]: cLight, // Light
  [bas.cc + cCoral]: cCoral, // Coral
  [bas.cc + cSteel]: cSteel, // Steel
  [bas.cc + cLuster]: cLuster, // Luster
  [bas.cc + cLincoln]: cLincoln, // Lincoln
  [bas.cc + cLiseran]: cLiseran, // Liseran
  [bas.cc + cLittle]: cLittle, // Little
  [bas.cc + cBoy]: cBoy, // Boy
  [bas.cc + cDogs]: cDogs, // Dogs
  [bas.cc + cOrgan]: cOrgan, // Organ
  [bas.cc + cMacaroni]: cMacaroni, // Macaroni
  [bas.cc + cCheese]: cCheese, // Cheese
  [bas.cc + cMadder]: cMadder, // Madder
  [bas.cc + cHaze]: cHaze, // Haze
  [bas.cc + cMagic]: cMagic, // Magic
  [bas.cc + cMajorelle]: cMajorelle, // Majorelle
  [bas.cc + cminimum]: cminimum, // minimum
  [bas.cc + cMinimum]: cMinimum, // Minimum
  [bas.cc + cminimums]: cminimums, // minimums
  [bas.cc + cMinimums]: cMinimums, // Minimums
  [bas.cc + cmaximum]: cmaximum, // maximum
  [bas.cc + cMaximum]: cMaximum, // Maximum
  [bas.cc + cmaximums]: cmaximums, // maximums
  [bas.cc + cMaximums]: cMaximums, // Maximums
  [bas.cc + cMaya]: cMaya, // Maya
  [bas.cc + cMedium]: cMedium, // Medium
  [bas.cc + cMellow]: cMellow, // Mellow
  [bas.cc + cweed]: cweed, // weed
  [bas.cc + cWeed]: cWeed, // Weed
  [bas.cc + cweeds]: cweeds, // weeds
  [bas.cc + cWeeds]: cWeeds, // Weeds
  [bas.cc + cweeded]: cweeded, // weeded
  [bas.cc + cWeeded]: cWeeded, // Weeded
  [bas.cc + cSeaweed]: cSeaweed, // Seaweed
  [bas.cc + csun]: csun, // sun
  [bas.cc + cSun]: cSun, // Sun
  [bas.cc + csuns]: csuns, // suns
  [bas.cc + cSuns]: cSuns, // Suns
  [bas.cc + cSunburst]: cSunburst, // Sunburst
  [bas.cc + cMexican]: cMexican, // Mexican
  [bas.cc + cMiddle]: cMiddle, // Middle
  [bas.cc + cMikado]: cMikado, // Mikado
  [bas.cc + cMimi]: cMimi, // Mimi
  [bas.cc + cMinion]: cMinion, // Minion
  [bas.cc + cMisty]: cMisty, // Misty
  [bas.cc + cMorning]: cMorning, // Morning
  [bas.cc + cMeadow]: cMeadow, // Meadow
  [bas.cc + cMount]: cMount, // Mount
  [bas.cc + cbatten]: cbatten, // batten
  [bas.cc + cMulberry]: cMulberry, // Mulberry
  [bas.cc + cMyrtle]: cMyrtle, // Myrtle
  [bas.cc + cNadeshiko]: cNadeshiko, // Nadeshiko
  [bas.cc + cNaples]: cNaples, // Naples
  [bas.cc + cNavajo]: cNavajo, // Navajo
  [bas.cc + cNavy]: cNavy, // Navy
  [bas.cc + cNeon]: cNeon, // Neon
  [bas.cc + cYork]: cYork, // York
  [bas.cc + cPhoto]: cPhoto, // Photo
  [bas.cc + cOcean]: cOcean, // Ocean
  [bas.cc + cLace]: cLace, // Lace
  [bas.cc + cOpera]: cOpera, // Opera
  [bas.cc + cPeel]: cPeel, // Peel
  [bas.cc + cSoda]: cSoda, // Soda
  [bas.cc + cOuter]: cOuter, // Outer
  [bas.cc + cOutrageous]: cOutrageous, // Outrageous
  [bas.cc + cOxford]: cOxford, // Oxford
  [bas.cc + cPacific]: cPacific, // Pacific
  [bas.cc + cPalatinate]: cPalatinate, // Palatinate
  [bas.cc + cPale]: cPale, // Pale
  [bas.cc + cPansy]: cPansy, // Pansy
  [bas.cc + cPaolo]: cPaolo, // Paolo
  [bas.cc + cVeronese]: cVeronese, // Veronese
  [bas.cc + cPapaya]: cPapaya, // Papaya
  [bas.cc + cWhip]: cWhip, // Whip
  [bas.cc + cParadise]: cParadise, // Paradise
  [bas.cc + cParis]: cParis, // Paris
  [bas.cc + cPaynes]: cPaynes, // Paynes
  [bas.cc + cPuff]: cPuff, // Puff
  [bas.cc + cPearly]: cPearly, // Pearly
  [bas.cc + cPermanent]: cPermanent, // Permanent
  [bas.cc + cGeranium]: cGeranium, // Geranium
  [bas.cc + cLake]: cLake, // Lake
  [bas.cc + cPersian]: cPersian, // Persian
  [bas.cc + cPewter]: cPewter, // Pewter
  [bas.cc + cPhthalo]: cPhthalo, // Phthalo
  [bas.cc + cPicotee]: cPicotee, // Picotee
  [bas.cc + cPictorial]: cPictorial, // Pictorial
  [bas.cc + cPiggy]: cPiggy, // Piggy
  [bas.cc + cPine]: cPine, // Pine
  [bas.cc + cTree]: cTree, // Tree
  [bas.cc + cFlamingo]: cFlamingo, // Flamingo
  [bas.cc + cSherbet]: cSherbet, // Sherbet
  [bas.cc + cPlump]: cPlump, // Plump
  [bas.cc + cpolish]: cpolish, // polish
  [bas.cc + cPolish]: cPolish, // Polish
  [bas.cc + cpolished]: cpolished, // polished
  [bas.cc + cPolished]: cPolished, // Polished
  [bas.cc + cPomp]: cPomp, // Pomp
  [bas.cc + cPower]: cPower, // Power
  [bas.cc + cPortland]: cPortland, // Portland
  [bas.cc + cPrinceton]: cPrinceton, // Princeton
  [bas.cc + cPrussian]: cPrussian, // Prussian
  [bas.cc + cPsychedelic]: cPsychedelic, // Psychedelic
  [bas.cc + cPullman]: cPullman, // Pullman
  [bas.cc + cMountain]: cMountain, // Mountain
  [bas.cc + cMajesty]: cMajesty, // Majesty
  [bas.cc + cPizzazz]: cPizzazz, // Pizzazz
  [bas.cc + cQueen]: cQueen, // Queen
  [bas.cc + cQuick]: cQuick, // Quick
  [bas.cc + cQuinacridone]: cQuinacridone, // Quinacridone
  [bas.cc + cRadical]: cRadical, // Radical
  [bas.cc + cRaisin]: cRaisin, // Raisin
  [bas.cc + cGlace]: cGlace, // Glace
  [bas.cc + cRazzle]: cRazzle, // Razzle
  [bas.cc + cDazzle]: cDazzle, // Dazzle
  [bas.cc + cRazzmic]: cRazzmic, // Razzmic
  [bas.cc + cRebecca]: cRebecca, // Rebecca
  [bas.cc + cSalsa]: cSalsa, // Salsa
  [bas.cc + cResolution]: cResolution, // Resolution
  [bas.cc + cRich]: cRich, // Rich
  [bas.cc + cRifle]: cRifle, // Rifle
  [bas.cc + cRobin]: cRobin, // Robin
  [bas.cc + cEgg]: cEgg, // Egg
  [bas.cc + cRocket]: cRocket, // Rocket
  [bas.cc + cRoman]: cRoman, // Roman
  [bas.cc + cBonbon]: cBonbon, // Bonbon
  [bas.cc + cDust]: cDust, // Dust
  [bas.cc + cEbony]: cEbony, // Ebony
  [bas.cc + cQuartz]: cQuartz, // Quartz
  [bas.cc + cVale]: cVale, // Vale
  [bas.cc + cwood]: cwood, // wood
  [bas.cc + cRosso]: cRosso, // Rosso
  [bas.cc + cCorsa]: cCorsa, // Corsa
  [bas.cc + cRosy]: cRosy, // Rosy
  [bas.cc + cRoyal]: cRoyal, // Royal
  [bas.cc + crub]: crub, // rub
  [bas.cc + cRub]: cRub, // Rub
  [bas.cc + crubs]: crubs, // rubs
  [bas.cc + cRubs]: cRubs, // Rubs
  [bas.cc + crubbed]: crubbed, // rubbed
  [bas.cc + cRubbed]: cRubbed, // Rubbed
  [bas.cc + crubbing]: crubbing, // rubbing
  [bas.cc + cRubbing]: cRubbing, // Rubbing
  [bas.cc + cRubine]: cRubine, // Rubine
  [bas.cc + cSacramento]: cSacramento, // Sacramento
  [bas.cc + cState]: cState, // State
  [bas.cc + cSaddle]: cSaddle, // Saddle
  [bas.cc + cSafety]: cSafety, // Safety
  [bas.cc + cBlaze]: cBlaze, // Blaze
  [bas.cc + cPatricks]: cPatricks, // Patricks
  [bas.cc + cSandy]: cSandy, // Sandy
  [bas.cc + csap]: csap, // sap
  [bas.cc + cSap]: cSap, // Sap
  [bas.cc + cSatin]: cSatin, // Satin
  [bas.cc + cSheen]: cSheen, // Sheen
  [bas.cc + cSchauss]: cSchauss, // Schauss
  [bas.cc + cSchool]: cSchool, // School
  [bas.cc + cBus]: cBus, // Bus
  [bas.cc + cScreamin]: cScreamin, // Screamin
  [bas.cc + cSeal]: cSeal, // Seal
  [bas.cc + cshell]: cshell, // shell
  [bas.cc + cSelective]: cSelective, // Selective
  [bas.cc + cShamrock]: cShamrock, // Shamrock
  [bas.cc + cShimmering]: cShimmering, // Shimmering
  [bas.cc + cBlush]: cBlush, // Blush
  [bas.cc + cShiny]: cShiny, // Shiny
  [bas.cc + cShocking]: cShocking, // Shocking
  [bas.cc + cChalice]: cChalice, // Chalice
  [bas.cc + cSizzling]: cSizzling, // Sizzling
  [bas.cc + cSunrise]: cSunrise, // Sunrise
  [bas.cc + cSlimy]: cSlimy, // Slimy
  [bas.cc + cSmoky]: cSmoky, // Smoky
  [bas.cc + cSonic]: cSonic, // Sonic
  [bas.cc + cBistre]: cBistre, // Bistre
  [bas.cc + cStar]: cStar, // Star
  [bas.cc + cStil]: cStil, // Stil
  [bas.cc + cGrain]: cGrain, // Grain
  [bas.cc + cglow]: cglow, // glow
  [bas.cc + cSuper]: cSuper, // Super
  [bas.cc + cTango]: cTango, // Tango
  [bas.cc + cTart]: cTart, // Tart
  [bas.cc + cTea]: cTea, // Tea
  [bas.cc + cTerra]: cTerra, // Terra
  [bas.cc + cCotta]: cCotta, // Cotta
  [bas.cc + cThulian]: cThulian, // Thulian
  [bas.cc + cTickle]: cTickle, // Tickle
  [bas.cc + cTiffany]: cTiffany, // Tiffany
  [bas.cc + cTimber]: cTimber, // Timber
  [bas.cc + cwolf]: cwolf, // wolf
  [bas.cc + cTropical]: cTropical, // Tropical
  [bas.cc + cRain]: cRain, // Rain
  [bas.cc + cTrypan]: cTrypan, // Trypan
  [bas.cc + cTufts]: cTufts, // Tufts
  [bas.cc + cTumble]: cTumble, // Tumble
  [bas.cc + cTwilight]: cTwilight, // Twilight
  [bas.cc + cTyrian]: cTyrian, // Tyrian
  [bas.cc + cUltra]: cUltra, // Ultra
  [bas.cc + cUnbleached]: cUnbleached, // Unbleached
  [bas.cc + cNations]: cNations, // Nations
  [bas.cc + cUpsdell]: cUpsdell, // Upsdell
  [bas.cc + cUranian]: cUranian, // Uranian
  [bas.cc + cvan]: cvan, // van
  [bas.cc + cVan]: cVan, // Van
  [bas.cc + cDyke]: cDyke, // Dyke
  [bas.cc + cVegas]: cVegas, // Vegas
  [bas.cc + cVenetian]: cVenetian, // Venetian
  [bas.cc + cVivid]: cVivid, // Vivid
  [bas.cc + cWarm]: cWarm, // Warm
  [bas.cc + cWild]: cWild, // Wild
  [bas.cc + cWindsor]: cWindsor, // Windsor
  [bas.cc + cDregs]: cDregs, // Dregs
  [bas.cc + cWinter]: cWinter, // Winter
  [bas.cc + cDream]: cDream, // Dream
  [bas.cc + cYale]: cYale // Yale
};
