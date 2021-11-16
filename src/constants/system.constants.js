/**
 * @file system.constants.js
 * @module system.constants
 * @description Contains system defined acronyms, many of them derived from the basic.constants.
 * The constants contained in this file are system words, phrases, codes and paths.
 * @requires module:basic.constants
 * @requires module:phonic.constants
 * @requires module:generic.constants
 * @requires module:numeric.constants
 * @requires module:word.constants
 * @author Seth Hollingsead
 * @date 2021/11/09
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var bas = require('./basic.constants');
var phn = require('./phonic.constants');
var gen = require('./generic.constants');
var num = require('./numeric.constants');
var wrd = require('./word.constants');

// Miscelaneious
let cENV = bas.cEN + bas.cV; // ENV
let cLOG = bas.cLO + bas.cG; // LOG
let cENVIRONMENT = phn.cENV + bas.cIR + bas.cON + phn.cMENT; // ENVIRONMENT
let cITERATION = bas.cIT + bas.cER + bas.cAT + bas.cIO + bas.cN; // ITERATION
let cSTYLE = bas.cST + bas.cYL + bas.cE; // STYLE

// Compound System Words
let cunderline = wrd.cunder + wrd.cline; // underline
let cUnderline = wrd.cUnder + wrd.cline; // Underline
let cwithText = wrd.cwith + wrd.cText; // withText
let cWithText = wrd.cWith + wrd.cText; // WithText
let cDebugTest = wrd.cDebug + wrd.cTest; // DebugTest
let cDebugPage = wrd.cDebug + wrd.cPage; // DebugPage
let cDebugTestExhaustive = cDebugTest + wrd.cExhaustive; // DebugTestExhaustive
let cDebugForceMessageToLogFile = wrd.cDebug + wrd.cForce + wrd.cMessage + bas.cTo + wrd.cLog + wrd.cFile; // DebugForceMessageToLogFile
let cDebugTestData = cDebugTest + wrd.cData; // DebugTestData
let cDebugPageScripts = cDebugPage + wrd.cScripts; // DebugPageScripts
let cDebugPageData = cDebugPage + wrd.cData; // DebugPageData
let cDebugKeywords = wrd.cDebug + wrd.cKeywords; // DebugKeywords
let cLogBrowserActions = wrd.cLog + wrd.cBrowser + wrd.cActions; // LogBrowserActions
let cJournalBrowserActions = wrd.cJournal + wrd.cBrowser + wrd.cActions; // JournalBrowserActions
let cDebugBrowserActions = wrd.cDebug + wrd.cBrowser + wrd.cActions; // DebugBrowserActions
let cDebugSelectors = wrd.cDebug + wrd.cSelectors; // DebugSelectors
let cDebugFunctions = wrd.cDebug + wrd.cFunctions; // DebugFunctions
let cDebugFiles = wrd.cDebug + wrd.cFiles; // DebugFiles
let cTestAutomation = wrd.cTest + wrd.cAutomation; // TestAutomation
let cNumberOfRows = wrd.cNumber + wrd.cOf + wrd.cRows; // NumberOfRows
let cMasterRowNumber = wrd.cMaster + wrd.cRow + wrd.cNumber; // MasterRowNumber
let cEnvironmentRow = wrd.cEnvironment + wrd.cRow; // EnvironmentRow
let cEnvironmentRowNumber = cEnvironmentRow + wrd.cNumber; // EnvironmentRowNumber
let cPageScript = wrd.cPage + wrd.cScript; // PageScript
let cIntermediatePath = wrd.cIntermediate + wrd.cPath; // IntermediatePath
let cTimeStamp = wrd.cTime + wrd.cStamp; // TimeStamp
let cPageScriptTimeStamp = cPageScript + cTimeStamp; // PageScriptTimeStamp
let cDateTimeStamp = wrd.cDate + cTimeStamp; // DateTimeStamp
let cScriptDateStamp = wrd.cScript + wrd.cDate + wrd.cStamp; // ScriptDateStamp
let cScriptTimeStamp = wrd.cScript + cTimeStamp; // ScriptTimeStamp
let cKeywordTimeStamp = wrd.cKeyword + cTimeStamp; // KeywordTimeStamp
let cTestTimeStamp = wrd.cTest + cTimeStamp; // TestTimeStamp
let cScriptDateTimeStamp = wrd.cScript + cDateTimeStamp; // ScriptDateTimeStamp
let cBeginScriptTimeStamp = wrd.cBegin + cScriptTimeStamp; // BeginScriptTimeStamp
let cEndScriptTimeStamp = wrd.cEnd + cScriptTimeStamp; // EndScriptTimeStamp
let cBeginTestTimeStamp = wrd.cBegin + cTestTimeStamp; // BeginTestTimeStamp
let cEndTestTimeStamp = wrd.cEnd + cTestTimeStamp; // EndTestTimeStamp
let cBeginPageScriptTimeStamp = wrd.cBegin + cPageScriptTimeStamp; // BeginPageScriptTimeStamp
let cEndPageScriptTimeStamp = wrd.cEnd + cPageScriptTimeStamp; // EndPageScriptTimeStamp
let cBeginKeywordTimeStamp = wrd.cBegin + cKeywordTimeStamp; // BeginKeywordTimeStamp
let cEndKeywordTimeStamp = wrd.cEnd + cKeywordTimeStamp; // EndKeywordTimeStamp
let cRuntime = wrd.cRun + wrd.ctime; // Runtime
let cRunTime = wrd.cRun + wrd.cTime; // RunTime
let cBrowserName = wrd.cBrowser + wrd.cName; // BrowserName
let cHostName = wrd.cHost + wrd.cName; // HostName
let cTestRunID = wrd.cTest + wrd.cRun + wrd.cID; // TestRunID
let cfilesLists = wrd.cfiles + wrd.cLists; // filesLists
let cFileTypes = wrd.cFile + wrd.cTypes; // FileTypes
let cfilename = wrd.cfile + wrd.cname; // filename
let cFilename = wrd.cFile + wrd.cname; // Filename
let cFileName = wrd.cFile + wrd.cName; // FileName
let cfilenames = cfilename + bas.cs; // filenames
let cFilenames = cFilename + bas.cs; // Filenames
let cFileNames = cFileName + bas.cs; // FileNames
let cPreValidateFileName = phn.cPre + wrd.cValidate + cFileName; // PreValidateFileName
let cAsynchSingular = wrd.cAsynch + wrd.cSingular; // AsynchSingular
let cSynchSingular = wrd.cSynch + wrd.cSingular; // SynchSingular
let cParallelMultiUnified = wrd.cParallel + wrd.cMulti + wrd.cUnified; // ParallelMultiUnified
let cAllowableCharacters = wrd.cAllowable + wrd.cCharacters; // AllowableCharacters
let cSpecialCharacters = wrd.cSpecial + wrd.cCharacters; // SpecialCharacters
let cTimeoutOverride = wrd.cTimeout + wrd.cOverride; // TimeoutOverride
let cDwellTime = wrd.cDwell + wrd.cTime; // DwellTime
let cFileCounter = wrd.cFile + wrd.cCounter; // FileCounter
let cDeltaT = gen.cDelta + bas.cT; // DeltaT
let cvisibilityCheck = wrd.cvisibility + wrd.cCheck; // visibilityCheck
let cVisibilityCheck = wrd.cVisibility + wrd.cCheck; // VisibilityCheck
let cOperatingSystem = wrd.cOperating + wrd.cSystem; // OperatingSystem
let cinnerText = wrd.cinner + wrd.cText; // innerText
let cInnerText = wrd.cInner + wrd.cText; // InnerText
let cinnerHTML = wrd.cinner + wrd.cHTML; // innerHTML
let cInnerHTML = wrd.cInner + wrd.cHTML; // InnerHTML
let cTestData = wrd.cTest + wrd.cData; // TestData
let cProcessingTimeout = wrd.cProcessing + wrd.cTimeout; // ProcessingTimeout
let cIngestionCompleteDwellTime = wrd.cIngestion + wrd.cComplete + cDwellTime; // IngestionCompleteDwellTime
let cRowNumber = wrd.cRow + wrd.cNumber; // RowNumber
let cUsername = wrd.cUser + wrd.cname; // Username
let cPassword = wrd.cPass + wrd.cword; // Password
let cProjectName = wrd.cProject + wrd.cName; // ProjectName
let cProjectDescription = wrd.cProject + wrd.cDescription; // ProjectDescription
let cTestDataFileName = wrd.cTest + wrd.cData + cFileName; // TestDataFileName
let cShareEmail = wrd.cShare + wrd.cEmail; // ShareEmail
let cAccessLevel = wrd.cAccess + wrd.cLevel; // AccessLevel
let cFileNumber = wrd.cFile + wrd.cNumber; // FileNumber
let cConfigurationName = wrd.cConfiguration + wrd.cName; // ConfigurationName
let cConfigurationElement = wrd.cConfiguration + wrd.cElement; // ConfigurationElement
let cConfigurationElements = cConfigurationElement + bas.cs; // ConfigurationElements
let cVersionControl = wrd.cVersion + wrd.cControl; // VersionControl
let cScriptRunTime = wrd.cScript + cRunTime; // ScriptRunTime
let cTestRunTime = wrd.cTest + cRunTime; // TestRunTime
let ctypeText = wrd.ctype + wrd.cText; // typeText
let cTypeText = wrd.cType + wrd.cText; // TypeText
let cAbreviatedSelectors = wrd.cAbreviated + wrd.cSelectors; // AbreviatedSelectors
let cAbreviatedSelectorsInLogs = cAbreviatedSelectors + bas.cIn + wrd.cLogs; // AbreviatedSelectorsInLogs
let cselectorTimeout = wrd.cselector + wrd.cTimeout; // selectorTimeout
let cchildElementCount = wrd.cchild + wrd.cElement + wrd.cCount; // childElementCount
let cUnderscore = wrd.cUnder + wrd.cscore; // Underscore
let cTestBureau = wrd.cTest + wrd.cBureau; // TestBureau
let caddWithText = wrd.c_add + wrd.cWith + wrd.cText; // addWithText
let caddTimeout = wrd.c_add + wrd.cTimeout; // addTimeout
let caddParent = wrd.c_add + wrd.cParent; // addParent
let caddFindValue = wrd.c_add + wrd.cFind + wrd.cValue; // addFindValue
let caddNth = wrd.c_add + wrd.cNth; // addNth
let caddSibling = wrd.c_add + wrd.cSibling; // addSibling
let caddFilter = wrd.c_add + wrd.cFilter; // addFilter
let cgenerateRandom = wrd.cgenerate + wrd.cRandom; // generateRandom
let crandomlyGenerate = wrd.crandomly + wrd.cGenerate; // randomlyGenerate
let cMixedCase = wrd.cMixed + wrd.cCase; // MixedCase
let cUpperCase = wrd.cUpper + wrd.cCase; // UpperCase
let cLowerCase = wrd.cLower + wrd.cCase; // LowerCase
let cByLength = wrd.cBy + wrd.cLength; // ByLength
let cSpecialCharacter = wrd.cSpecial + wrd.cCharacter; // SpecialCharacter
let cWithSpecialCharacters = wrd.cWith + cSpecialCharacters; // WithSpecialCharacters
let cTextByLength = wrd.cText + cByLength; // TextByLength
let cTextWithSpecialCharacters = wrd.cText + cWithSpecialCharacters; // TextWithSpecialCharacters
let cTextWithSpecialCharactersByLength = cTextWithSpecialCharacters + cByLength; // TextWithSpecialCharactersByLength
let cAlphaNumeric = wrd.cAlpha + wrd.cNumeric; // AlphaNumeric
let cAlphaNumericCode = cAlphaNumeric + wrd.cCode; // AlphaNumericCode
let cAlphaNumericCodeByLength = cAlphaNumericCode + cByLength; // AlphaNumericCodeByLength
let cNumericCode = wrd.cNumeric + wrd.cCode; // NumericCode
let cNumericCodeByLength = cNumericCode + cByLength; // NumericCodeByLength
let cAlphaNumericCodeWithSpecialCharacters = cAlphaNumericCode + cWithSpecialCharacters; // AlphaNumericCodeWithSpecialCharacters
let cAlphaNumericCodeWithSpecialCharactersByLength = cAlphaNumericCodeWithSpecialCharacters + cByLength; // AlphaNumericCodeWithSpecialCharactersByLength
let cSpecialCharacterCodeByLength = cSpecialCharacter + wrd.cCode + cByLength; // SpecialCharacterCodeByLength
let cvalidEmail = wrd.cvalid + wrd.cEmail; // validEmail
let cValidEmail = wrd.cValid + wrd.cEmail; // ValidEmail
let cInvalidEmail = bas.cIn + cvalidEmail; // InvalidEmail
let cgenerateValidEmail = wrd.cgenerate + cValidEmail; // generateValidEmail
let cgenerateInvalidEmail = wrd.cgenerate + cInvalidEmail; // generateInvalidEmail
let cRandomValidEmail = wrd.cRandom + cValidEmail; // RandomValidEmail
let cRandomInvalidEmail = wrd.cRandom + cInvalidEmail; // RandomInvalidEmail
let cLetterOr = wrd.cLetter + bas.cOr; // LetterOr
let cLetterOrSpecialCharacter = cLetterOr + cSpecialCharacter; // LetterOrSpecialCharacter
let cLetterOrNumberOrSpecialCharacter = cLetterOr + wrd.cNumber + wrd.cOr + cSpecialCharacter; // LetterOrNumberOrSpecialCharacter
let cAlphaNumericCharacter = cAlphaNumeric + wrd.cCharacter; // AlphaNumericCharacter
let cSuffixAndDomain = wrd.cSuffix + wrd.cAnd + wrd.cDomain; // SuffixAndDomain
let cWithSpecificSuffixAndDomainName = wrd.cWith + wrd.cSpecific + wrd.cSuffix + wrd.cAnd + wrd.cDomain + wrd.cName; // WithSpecificSuffixAndDomainName
let cNumericCharacter = wrd.cNumeric + wrd.cCharacter; // NumericCharacter
let cNumberInRange = wrd.cNumber + bas.cIn + wrd.cRange; // NumberInRange
let cBooleanValue = wrd.cBoolean + wrd.cValue; // BooleanValue
let cAlphabeticCharacter = wrd.cAlphabetic + wrd.cCharacter; // AlphabeticCharacter
let cCarriageReturn = wrd.cCarriage + wrd.cReturn; // CarriageReturn
let cDashboardLogs = wrd.cDashboard + wrd.cLogs; // DashboardLogs
let cVideoLogs = wrd.cVideo + wrd.cLogs; // VideoLogs
let cForwardSlash = wrd.cForward + wrd.cSlash; // ForwardSlash
let cBackSlash = wrd.cBack + wrd.cSlash; // BackSlash
let cPage_Keywords = wrd.cPage + bas.cUnderscore + wrd.cKeywords; // Page_Keywords
let cnavigateTo = wrd.cnavigate + bas.cTo; // navigateTo
let cNavigateTo = wrd.cNavigate + bas.cTo; // NavigateTo
let cBrowserRefresh = wrd.cBrowser + wrd.cRefresh; // BrowserRefresh
let cSpaceIsColonSpace = bas.cSpace + bas.cis + bas.cColon + bas.cSpace; // is:
let cdeployApplication = wrd.cdeploy + wrd.cApplication; // deployApplication
let cdeployMetaData = wrd.cdeploy + wrd.cMetaData // deployMetaData
let creleaseApplication = wrd.crelease + wrd.cApplication; // releaseApplication
let cbackground = wrd.cback + wrd.cground; // background
let cBackground = wrd.cBack + wrd.cground; // Background
let cConfiguration_Colors = wrd.cConfiguration + bas.cUnderscore + wrd.cColors; // Configuration_Colors
let cColorData = wrd.cColor + wrd.cData; // ColorData
let cColorName = wrd.cColor + wrd.cName; // ColorName
let cbusinessRule = wrd.cbusiness + wrd.cRule; // businessRule
let cBusinessRule = wrd.cBusiness + wrd.cRule; // BusinessRule
let cbusinessRules = wrd.cbusiness + wrd.cRules; // businessRules
let cBusinessRules = wrd.cBusiness + wrd.cRules; // BusinessRules
let crulesLibrary = wrd.crules + wrd.cLibrary; // rulesLibrary
let cframework = wrd.cframe + wrd.cwork; // framework
let cFramework = wrd.cFrame + wrd.cwork; // Framework
let cCommandsAliases = wrd.cCommands + wrd.cAliases; // CommandsAliases
let cCommandWorkflows = wrd.cCommand + wrd.cWorkflows; // CommandWorkflows
let cStandardDeviation = wrd.cStandard + wrd.cDeviation; // StandardDeviation
let cHexValue = phn.cHex + wrd.cValue; // HexValue
let cexportconst = wrd.cexport + bas.cSpace + gen.cconst; // export-const // With a space not a dash, but the validation code is looking for that exact string.
let cExportConst = wrd.cExport + bas.cSpace + gen.cConst; // smuggle something
let cDataStorage = wrd.cData + wrd.cStorage; // DataStorage
let cSource1 = wrd.cSource + num.c1; // Source1
let cSource2 = wrd.cSource + num.c2; // Source2
let cbigInteger = wrd.cbig + wrd.cInteger; // bigInteger
let cnumberOfCharactersToGenerate = wrd.cnumber + bas.cOf + wrd.cCharacters + bas.cTo + wrd.cGenerate; // numberOfCharactersToGenerate
let cgenerateSpecialCharacters = wrd.cgenerate + cSpecialCharacters; // generateSpecialCharacters
let callowableSpecialCharacters = wrd.callowable + cSpecialCharacters; // allowableSpecialCharacters
let cspecifiedSuffixAndDomain = wrd.cspecified + cSuffixAndDomain; // specifiedSuffixAndDomain
let cfailureMode = wrd.cfailure + wrd.cMode; // failureMode
let cWithoutThe = wrd.cWithout + bas.cSpace + wrd.cthe; // Without the
let cwasCompleted = wrd.cwas + bas.cSpace + wrd.ccompleted; // was completed
let cGenerateA = wrd.cGenerate + bas.cSpace + bas.ca; // Generate a
let cprogramLoop = wrd.cprogram + bas.cSpace + wrd.cloop; // program loop
let candPrefix = wrd.cand + bas.cSpace + wrd.cprefix; // and prefix
let candSuffix = wrd.cand + bas.cSpace + wrd.csuffix; // and suffix
let cdomainSpaceName = wrd.cdomain + bas.cSpace + wrd.cname // domain name
let candSpaceDomainSpaceName = wrd.cand + bas.cSpace + cdomainSpaceName; // and domain name
let ccurrentMasterStringArrayElement = wrd.ccurrent + wrd.cMaster + wrd.cString + wrd.cArray + wrd.cElement; // currentMasterStringArrayElement
let cLehmerCodeArray = wrd.cLehmer + wrd.cCode + wrd.cArray; // LehmerCodeArray
let creturnData = wrd.creturn + wrd.cData; // returnData
let cCamelCase = wrd.cCamel + wrd.cCase; // CamelCase

// Logging Styles Constants
let cModuleFontStyle = wrd.cModule + wrd.cFont + wrd.cStyle; // ModuleFontStyle
let cFunctionFontStyle = wrd.cFunction + wrd.cFont + wrd.cStyle; // FunctionFontStyle
let cMessageFontStyle = wrd.cMessage + wrd.cFont + wrd.cStyle; // MessageFontStyle
let cDataFontStyle = wrd.cData + wrd.cFont + wrd.cStyle; // DataFontStyle
let cModuleFontColor = wrd.cModule + wrd.cFont + wrd.cColor; // ModuleFontColor
let cFunctionFontColor = wrd.cFunction + wrd.cFont + wrd.cColor; // FunctionFontColor
let cMessageFontColor = wrd.cMessage + wrd.cFont + wrd.cColor; // MessageFontColor
let cDataFontColor = wrd.cData + wrd.cFont + wrd.cColor; // DataFontColor
let cModuleFontBackgroundColor = wrd.cModule + wrd.cFont + cBackground + wrd.cColor; // ModuleFontBackgroundColor
let cFunctionFontBackgroundColor = wrd.cFunction + wrd.cFont + cBackground + wrd.cColor; // FunctionFontBackgroundColor
let cMessageFontBackgroundColor = wrd.cMessage + wrd.cFont + cBackground + wrd.cColor; // MessageFontBackgroundColor
let cDataFontBackgroundColor = wrd.cData + wrd.cFont + cBackground + wrd.cColor; // DataFontBackgroundColor

// File Types
let cCatia = bas.cCa + bas.cti + bas.ca; // Catia
let cDocument = wrd.cDocument; // Document
let cDocuments = cDocument + bas.cs; // Documents
let cDraft = bas.cDr + phn.caft; // Draft
let cDWG = bas.cDW + bas.cG; // DWG
let cHoops = bas.cH + wrd.coops; // Hoops
let cHOOPS = bas.cH + wrd.cOOPS; // HOOPS
let cImage = bas.cIm + phn.cage; // Image
let cImages = cImage + bas.cs; // Images
let cInventor = phn.cInv + bas.cen + phn.ctor; // Inventor
let cNeutral = bas.cNe + bas.cut + phn.cral; // Neutral
let cNX = bas.cNX; // NX
let cParasolid = bas.cP + phn.cara + wrd.csolid; // Parasolid
let cProE = phn.cPro + bas.cE; // ProE
let cRhino = bas.cRh + phn.cino; // Rhino
let cSolidEdge = wrd.cSolid + wrd.cEdge; // SolidEdge
let cSolidWorks = wrd.cSolid + wrd.cWorks; // SolidWorks
let cvrml = bas.cvr + bas.cml; // vrml
let cVrml = bas.cVr + bas.cml; // Vrml
let cVRML = bas.cVR + bas.cML; // VRML

// UI Element Types
let cButton = bas.cBu + bas.ctt + bas.con; // Button

// Environment Variables
let cQA = bas.cQA; // QA
let cdev = bas.cde + bas.cv; // dev
let cDEV = bas.cDE + bas.cV; // DEV
let cProd = phn.cPro + bas.cd; // Prod
let cPROD = phn.cPRO + bas.cD; // PROD
let cPre = phn.cPre; // Pre
let cPRE = phn.cPRE; // PRE
let cPreProd = phn.cPre + cProd; // PreProd
let cPREPROD = phn.cPRE + cPROD; // PREPROD

// Key Combinations
let cctrl_a = phn.cctrl + bas.cPlus + bas.ca; // ctrl+a
let cctrl_b = phn.cctrl + bas.cPlus + bas.cb; // ctrl+b
let cctrl_c = phn.cctrl + bas.cPlus + bas.cc; // ctrl+c
let cctrl_d = phn.cctrl + bas.cPlus + bas.cd; // ctrl+d
let cctrl_e = phn.cctrl + bas.cPlus + bas.ce; // ctrl+e
let cctrl_f = phn.cctrl + bas.cPlus + bas.cf; // ctrl+f
let cctrl_g = phn.cctrl + bas.cPlus + bas.cg; // ctrl+g
let cctrl_h = phn.cctrl + bas.cPlus + bas.ch; // ctrl+h
let cctrl_i = phn.cctrl + bas.cPlus + bas.ci; // ctrl+i
let cctrl_j = phn.cctrl + bas.cPlus + bas.cj; // ctrl+j
let cctrl_k = phn.cctrl + bas.cPlus + bas.ck; // ctrl+k
let cctrl_l = phn.cctrl + bas.cPlus + bas.cl; // ctrl+l
let cctrl_m = phn.cctrl + bas.cPlus + bas.cm; // ctrl+m
let cctrl_n = phn.cctrl + bas.cPlus + bas.cn; // ctrl+n
let cctrl_o = phn.cctrl + bas.cPlus + bas.co; // ctrl+o
let cctrl_p = phn.cctrl + bas.cPlus + bas.cp; // ctrl+p
let cctrl_q = phn.cctrl + bas.cPlus + bas.cq; // ctrl+q
let cctrl_r = phn.cctrl + bas.cPlus + bas.cr; // ctrl+r
let cctrl_s = phn.cctrl + bas.cPlus + bas.cs; // ctrl+s
let cctrl_t = phn.cctrl + bas.cPlus + bas.ct; // ctrl+t
let cctrl_u = phn.cctrl + bas.cPlus + bas.cu; // ctrl+u
let cctrl_v = phn.cctrl + bas.cPlus + bas.cv; // ctrl+v
let cctrl_w = phn.cctrl + bas.cPlus + bas.cw; // ctrl+w
let cctrl_x = phn.cctrl + bas.cPlus + bas.cx; // ctrl+x
let cctrl_y = phn.cctrl + bas.cPlus + bas.cy; // ctrl+y
let cctrl_z = phn.cctrl + bas.cPlus + bas.cz; // ctrl+z

// System Terms
let cframeworkResourcesConfigurationPath = bas.cDoubleForwardSlash + wrd.cresources + bas.cDoubleForwardSlash + wrd.cconfiguration + bas.cDoubleForwardSlash; // //resources//configuration//
let csystemConfigFileName = wrd.cframework + bas.cDot + wrd.csystem + gen.cDotjson; // framework.system.json
let capplicationConfigFileName = wrd.capplication + bas.cDot + wrd.csystem + gen.cDotjson; // application.system.json
let cappConfigPath = gen.capp + wrd.cConfig + wrd.cPath; // appConfigPath
let cframeworkConfigPath = wrd.cframework + wrd.cConfig + wrd.cPath; // frameworkConfigPath
let cApplicationName = wrd.cApplication + wrd.cName; // ApplicationName
let cApplicationRootPath = wrd.cApplication + wrd.cRoot + wrd.cPath; // ApplicationRootPath
let cApplicationCleanedRootPath = wrd.cApplication + wrd.cCleaned + wrd.cRoot + wrd.cPath; // ApplicationCleanedRootPath
let cConfigurationPath = wrd.cConfiguration + wrd.cPath; // ConfigurationPath
let cApplicationVersionNumber = wrd.cApplication + wrd.cVersion + wrd.cNumber; // ApplicationVersionNumber
let cApplicationDescription = wrd.cApplication + wrd.cDescription; // ApplicationDescription
let cDataPath = wrd.cData + wrd.cPath; // DataPath
let cCtempPath = bas.cc + bas.cColon + bas.cForwardSlash + phn.ctemp + bas.cForwardSlash; // CtempPath
let cPageDataPath = wrd.cPage + cDataPath; // PageDataPath
let cWorkflowDataPath = wrd.cWorkflow + cDataPath; // WorkflowDataPath
let cKeywordsDataPath = wrd.cKeywords + cDataPath; // KeywordsDataPath
let cLocatorsDataPath = wrd.cLocators + cDataPath; // LocatorsDataPath
let cClientConstantsPath = wrd.cClient + wrd.cConstants + wrd.cPath; // ClientConstantsPath
let cSystemConstantsPath = wrd.cSystem + wrd.cConstants + wrd.cPath; // SystemConstantsPath
let cSystemConstantsPathActual = wrd.csrc + bas.cForwardSlash + cFramework + bas.cForwardSlash + wrd.cConstants + bas.cForwardSlash; // src/Framework/Constants/
let cclientRulesLibrary = wrd.cclient + wrd.cRules + wrd.cLibrary; // clientRulesLibrary
let cCommandQueue = wrd.cCommand + wrd.cQueue; // CommandQueue
let cConstantsValidationData = wrd.cConstants + wrd.cValidation + wrd.cData; // ConstantsValidationData
let cConstantsShortNames = wrd.cConstants + wrd.cShort + wrd.cNames; // ConstantsShortNames
let cConstantsFileNames = wrd.cConstants + wrd.cFile + wrd.cNames; // ConstantsFileNames
let cConstantsPrefix = wrd.cConstants + wrd.cPrefix; // ConstantsPrefix
let cConstantsFilePaths = wrd.cConstants + wrd.cFile + wrd.cPaths; // ConstantsFilePaths
let cConstantsPhase1ValidationMessages = wrd.cConstants + wrd.cPhase + num.c1 + wrd.cValidation + wrd.cMessages; // ConstantsPhase1ValidationMessages
let cConstantsPhase2ValidationMessages = wrd.cConstants + wrd.cPhase + num.c2 + wrd.cValidation + wrd.cMessages; // ConstantsPhase2ValidationMessages
let cBasicConstantsValidation = wrd.cBasic + wrd.cConstants + wrd.cValidation; // BasicConstantsValidation
let cBusinessConstantsValidation = wrd.cBusiness + wrd.cConstants + wrd.cValidation; // BusinessConstantsValidation
let cColorConstantsValidation = wrd.cColor + wrd.cConstants + wrd.cValidation; // ColorConstantsValidation
let cCommandConstantsValidation = wrd.cCommand + wrd.cConstants + wrd.cValidation; // CommandConstantsValidation
let cConfigurationConstantsValidation = wrd.cConfiguration + wrd.cConstants + wrd.cValidation; // ConfigurationConstantsValidation
let cCountryConstantsValidation = wrd.cCountry + wrd.cConstants + wrd.cValidation; // CountryConstantsValidation
let cElementConstantsValidation = wrd.cElement + wrd.cConstants + wrd.cValidation; // ElementConstantsValidation
let cGenericConstantsValidation = wrd.cGeneric + wrd.cConstants + wrd.cValidation; // GenericConstantsValidation
let cIsotopeConstantsValidation = wrd.cIsotope + wrd.cConstants + wrd.cValidation; // IsotopeConstantsValidation
let cKnotConstantsValidation = wrd.cKnot + wrd.cConstants + wrd.cValidation; // KnotConstantsValidation
let cLanguageConstantsValidation = wrd.cLanguage + wrd.cConstants + wrd.cValidation; // LanguageConstantsValidation
let cMessageConstantsValidation = wrd.cMessage + wrd.cConstants + wrd.cValidation; // MessageConstantsValidation
let cNumericConstantsValidation = wrd.cNumeric + wrd.cConstants + wrd.cValidation; // NumericConstantsValidation
let cPhonicConstantsValidation = wrd.cPhonic + wrd.cConstants + wrd.cValidation; // PhonicConstantsValidation
let cShapeConstantsValidation = wrd.cShape + wrd.cConstants + wrd.cValidation; // ShapeConstantsValidation
let cSystemConstantsValidation = wrd.cSystem + wrd.cConstants + wrd.cValidation; // SystemConstantsValidation
let cUnitConstantsValidation = wrd.cUnit + wrd.cConstants + wrd.cValidation; // UnitConstantsValidation
let cWordConstantsValidation = wrd.cWord + wrd.cConstants + wrd.cValidation; // WordConstantsValidation
let cSourceResourcesPath = wrd.cSource + wrd.cResources + wrd.cPath; // SourceResourcesPath
let cDestinationResourcesPath = wrd.cDestination + wrd.cResources + wrd.cPath; // BinaryResourcesPath
let cBinaryRootPath = wrd.cBinary + wrd.cRoot + wrd.cPath; // BinaryRootPath
let cBinaryReleasePath = wrd.cBinary + wrd.cRelease + wrd.cPath; // BinaryReleasePath
let cdevtty = bas.cForwardSlash + cdev + bas.cForwardSlash + phn.ctty; // /dev/tty

// Constants Filenames
let cbasic_constants_js = wrd.cbasic + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // basic.constants.js
let cbusiness_constants_js = wrd.cbusiness + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // business.constants.js
let ccolor_constants_js = wrd.ccolor + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // color.constants.js
let ccommand_constants_js = wrd.ccommand + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // command.constants.js
let cconfiguration_constants_js = wrd.cconfiguration + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // configuration.constants.js
let ccountry_constants_js = wrd.ccountry + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // country.constants
let celement_constants_js = wrd.celement + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // element.constants.js
let cgeneric_constants_js = wrd.cgeneric + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // generic.constants.js
let cisotope_constants_js = wrd.cisotope + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // isotope.constants.js
let cknot_constants_js = wrd.cknot + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // knot.constants.js
let clanguage_constants_js = wrd.clanguage + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // language.constants.js
let cmessage_constants_js = wrd.cmessage + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // message.constants.js
let cnumeric_constants_js = wrd.cnumeric + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // numeric.constants.js
let cphonic_constants_js = wrd.cphonic + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // phonic.constants.js
let cshape_constants_js = wrd.cshape + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // shape.constants.js
let csystem_constants_js = wrd.csystem + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // system.constants.js
let cunit_constants_js = wrd.cunit + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // unit.constants.js
let cword_constants_js = wrd.cword + bas.cDot + wrd.cconstants + bas.cDot + bas.cjs; // word.constants.js

module.exports = {
  // Miscelaneious
  [bas.cc + cENV]: cENV, // ENV
  [bas.cc + cLOG]: cLOG, // LOG
  [bas.cc + cENVIRONMENT]: cENVIRONMENT, // ENVIRONMENT
  [bas.cc + cITERATION]: cITERATION, // ITERATION
  [bas.cc + cSTYLE]: cSTYLE, // STYLE

  // Compound System Words
  [bas.cc + cunderline]: cunderline, // underline
  [bas.cc + cUnderline]: cUnderline, // Underline
  [bas.cc + cwithText]: cwithText, // withText
  [bas.cc + cWithText]: cWithText, // WithText
  [bas.cc + cDebugTest]: cDebugTest, // DebugTest
  [bas.cc + cDebugPage]: cDebugPage, // DebugPage
  [bas.cc + cDebugTestExhaustive]: cDebugTestExhaustive, // DebugTestExhaustive
  [bas.cc + cDebugForceMessageToLogFile]: cDebugForceMessageToLogFile, // DebugForceMessageToLogFile
  [bas.cc + cDebugTestData]: cDebugTestData, // DebugTestData
  [bas.cc + cDebugPageScripts]: cDebugPageScripts, // DebugPageScripts
  [bas.cc + cDebugPageData]: cDebugPageData, // DebugPageData
  [bas.cc + cDebugKeywords]: cDebugKeywords, // DebugKeywords
  [bas.cc + cLogBrowserActions]: cLogBrowserActions, // LogBrowserActions
  [bas.cc + cJournalBrowserActions]: cJournalBrowserActions, // JournalBrowserActions
  [bas.cc + cDebugBrowserActions]: cDebugBrowserActions, // DebugBrowserActions
  [bas.cc + cDebugSelectors]: cDebugSelectors, // DebugSelectors
  [bas.cc + cDebugFunctions]: cDebugFunctions, // DebugFunctions
  [bas.cc + cDebugFiles]: cDebugFiles, // DebugFiles
  [bas.cc + cTestAutomation]: cTestAutomation, // TestAutomation
  [bas.cc + cNumberOfRows]: cNumberOfRows, // NumberOfRows
  [bas.cc + cMasterRowNumber]: cMasterRowNumber, // MasterRowNumber
  [bas.cc + cEnvironmentRow]: cEnvironmentRow, // EnvironmentRow
  [bas.cc + cEnvironmentRowNumber]: cEnvironmentRowNumber, // EnvironmentRowNumber
  [bas.cc + cPageScript]: cPageScript, // PageScript
  [bas.cc + cIntermediatePath]: cIntermediatePath, // IntermediatePath
  [bas.cc + cTimeStamp]: cTimeStamp, // TimeStamp
  [bas.cc + cPageScriptTimeStamp]: cPageScriptTimeStamp, // PageScriptTimeStamp
  [bas.cc + cDateTimeStamp]: cDateTimeStamp, // DateTimeStamp
  [bas.cc + cScriptDateStamp]: cScriptDateStamp, // ScriptDateStamp
  [bas.cc + cScriptTimeStamp]: cScriptTimeStamp, // ScriptTimeStamp
  [bas.cc + cKeywordTimeStamp]: cKeywordTimeStamp, // KeywordTimeStamp
  [bas.cc + cTestTimeStamp]: cTestTimeStamp, // TestTimeStamp
  [bas.cc + cScriptDateTimeStamp]: cScriptDateTimeStamp, // ScriptDateTimeStamp
  [bas.cc + cBeginScriptTimeStamp]: cBeginScriptTimeStamp, // BeginScriptTimeStamp
  [bas.cc + cEndScriptTimeStamp]: cEndScriptTimeStamp, // EndScriptTimeStamp
  [bas.cc + cBeginTestTimeStamp]: cBeginTestTimeStamp, // BeginTestTimeStamp
  [bas.cc + cEndTestTimeStamp]: cEndTestTimeStamp, // EndTestTimeStamp
  [bas.cc + cBeginPageScriptTimeStamp]: cBeginPageScriptTimeStamp, // BeginPageScriptTimeStamp
  [bas.cc + cEndPageScriptTimeStamp]: cEndPageScriptTimeStamp, // EndPageScriptTimeStamp
  [bas.cc + cBeginKeywordTimeStamp]: cBeginKeywordTimeStamp, // BeginKeywordTimeStamp
  [bas.cc + cEndKeywordTimeStamp]: cEndKeywordTimeStamp, // EndKeywordTimeStamp
  [bas.cc + cRuntime]: cRuntime, // Runtime
  [bas.cc + cRunTime]: cRunTime, // RunTime
  [bas.cc + cBrowserName]: cBrowserName, // BrowserName
  [bas.cc + cHostName]: cHostName, // HostName
  [bas.cc + cTestRunID]: cTestRunID, // TestRunID
  [bas.cc + cfilesLists]: cfilesLists, // filesLists
  [bas.cc + cFileTypes]: cFileTypes, // FileTypes
  [bas.cc + cfilename]: cfilename, // filename
  [bas.cc + cFilename]: cFilename, // Filename
  [bas.cc + cFileName]: cFileName, // FileName
  [bas.cc + cfilenames]: cfilenames, // filenames
  [bas.cc + cFilenames]: cFilenames, // Filenames
  [bas.cc + cFileNames]: cFileNames, // FileNames
  [bas.cc + cPreValidateFileName]: cPreValidateFileName, // PreValidateFileName
  [bas.cc + cAsynchSingular]: cAsynchSingular, // AsynchSingular
  [bas.cc + cSynchSingular]: cSynchSingular, // SynchSingular
  [bas.cc + cParallelMultiUnified]: cParallelMultiUnified, // ParallelMultiUnified
  [bas.cc + cAllowableCharacters]: cAllowableCharacters, // AllowableCharacters
  [bas.cc + cSpecialCharacters]: cSpecialCharacters, // SpecialCharacters
  [bas.cc + cTimeoutOverride]: cTimeoutOverride, // TimeoutOverride
  [bas.cc + cDwellTime]: cDwellTime, // DwellTime
  [bas.cc + cFileCounter]: cFileCounter, // FileCounter
  [bas.cc + cDeltaT]: cDeltaT, // DeltaT
  [bas.cc + cvisibilityCheck]: cvisibilityCheck, // visibilityCheck
  [bas.cc + cVisibilityCheck]: cVisibilityCheck, // VisibilityCheck
  [bas.cc + cOperatingSystem]: cOperatingSystem, // OperatingSystem
  [bas.cc + cinnerText]: cinnerText, // innerText
  [bas.cc + cInnerText]: cInnerText, // InnerText
  [bas.cc + cinnerHTML]: cinnerHTML, // innerHTML
  [bas.cc + cInnerHTML]: cInnerHTML, // InnerHTML
  [bas.cc + cTestData]: cTestData, // TestData
  [bas.cc + cProcessingTimeout]: cProcessingTimeout, // ProcessingTimeout
  [bas.cc + cIngestionCompleteDwellTime]: cIngestionCompleteDwellTime, // IngestionCompleteDwellTime
  [bas.cc + cRowNumber]: cRowNumber, // RowNumber
  [bas.cc + cUsername]: cUsername, // Username
  [bas.cc + cPassword]: cPassword, // Password
  [bas.cc + cProjectName]: cProjectName, // ProjectName
  [bas.cc + cProjectDescription]: cProjectDescription, // ProjectDescription
  [bas.cc + cTestDataFileName]: cTestDataFileName, // TestDataFileName
  [bas.cc + cShareEmail]: cShareEmail, // ShareEmail
  [bas.cc + cAccessLevel]: cAccessLevel, // AccessLevel
  [bas.cc + cFileNumber]: cFileNumber, // FileNumber
  [bas.cc + cConfigurationName]: cConfigurationName, // ConfigurationName
  [bas.cc + cConfigurationElement]: cConfigurationElement, // ConfigurationElement
  [bas.cc + cConfigurationElements]: cConfigurationElements, // ConfigurationElements
  [bas.cc + cVersionControl]: cVersionControl, // VersionControl
  [bas.cc + cScriptRunTime]: cScriptRunTime, // ScriptRunTime
  [bas.cc + cTestRunTime]: cTestRunTime, // TestRunTime
  [bas.cc + ctypeText]: ctypeText, // typeText
  [bas.cc + cTypeText]: cTypeText, // TypeText
  [bas.cc + cAbreviatedSelectors]: cAbreviatedSelectors, // AbreviatedSelectors
  [bas.cc + cAbreviatedSelectorsInLogs]: cAbreviatedSelectorsInLogs, // AbreviatedSelectorsInLogs
  [bas.cc + cselectorTimeout]: cselectorTimeout, // selectorTimeout
  [bas.cc + cchildElementCount]: cchildElementCount, // childElementCount
  [bas.cc + cUnderscore]: cUnderscore, // Underscore
  [bas.cc + cTestBureau]: cTestBureau, // TestBureau
  [bas.cc + caddWithText]: caddWithText, // addWithText
  [bas.cc + caddTimeout]: caddTimeout, // addTimeout
  [bas.cc + caddParent]: caddParent, // addParent
  [bas.cc + caddFindValue]: caddFindValue, // addFindValue
  [bas.cc + caddNth]: caddNth, // addNth
  [bas.cc + caddSibling]: caddSibling, // addSibling
  [bas.cc + caddFilter]: caddFilter, // addFilter
  [bas.cc + cgenerateRandom]: cgenerateRandom, // generateRandom
  [bas.cc + crandomlyGenerate]: crandomlyGenerate, // randomlyGenerate
  [bas.cc + cMixedCase]: cMixedCase, // MixedCase
  [bas.cc + cUpperCase]: cUpperCase, // UpperCase
  [bas.cc + cLowerCase]: cLowerCase, // LowerCase
  [bas.cc + cByLength]: cByLength, // ByLength
  [bas.cc + cSpecialCharacter]: cSpecialCharacter, // SpecialCharacter
  [bas.cc + cWithSpecialCharacters]: cWithSpecialCharacters, // WithSpecialCharacters
  [bas.cc + cTextByLength]: cTextByLength, // TextByLength
  [bas.cc + cTextWithSpecialCharacters]: cTextWithSpecialCharacters, // TextWithSpecialCharacters
  [bas.cc + cTextWithSpecialCharactersByLength]: cTextWithSpecialCharactersByLength, // TextWithSpecialCharactersByLength
  [bas.cc + cAlphaNumeric]: cAlphaNumeric, // AlphaNumeric
  [bas.cc + cAlphaNumericCode]: cAlphaNumericCode, // AlphaNumericCode
  [bas.cc + cAlphaNumericCodeByLength]: cAlphaNumericCodeByLength, // AlphaNumericCodeByLength
  [bas.cc + cNumericCode]: cNumericCode, // NumericCode
  [bas.cc + cNumericCodeByLength]: cNumericCodeByLength, // NumericCodeByLength
  [bas.cc + cAlphaNumericCodeWithSpecialCharacters]: cAlphaNumericCodeWithSpecialCharacters, // AlphaNumericCodeWithSpecialCharacters
  [bas.cc + cAlphaNumericCodeWithSpecialCharactersByLength]: cAlphaNumericCodeWithSpecialCharactersByLength, // AlphaNumericCodeWithSpecialCharactersByLength
  [bas.cc + cSpecialCharacterCodeByLength]: cSpecialCharacterCodeByLength, // SpecialCharacterCodeByLength
  [bas.cc + cvalidEmail]: cvalidEmail, // validEmail
  [bas.cc + cValidEmail]: cValidEmail, // ValidEmail
  [bas.cc + cInvalidEmail]: cInvalidEmail, // InvalidEmail
  [bas.cc + cgenerateValidEmail]: cgenerateValidEmail, // generateValidEmail
  [bas.cc + cgenerateInvalidEmail]: cgenerateInvalidEmail, // generateInvalidEmail
  [bas.cc + cRandomValidEmail]: cRandomValidEmail, // RandomValidEmail
  [bas.cc + cRandomInvalidEmail]: cRandomInvalidEmail, // RandomInvalidEmail
  [bas.cc + cLetterOr]: cLetterOr, // LetterOr
  [bas.cc + cLetterOrSpecialCharacter]: cLetterOrSpecialCharacter, // LetterOrSpecialCharacter
  [bas.cc + cLetterOrNumberOrSpecialCharacter]: cLetterOrNumberOrSpecialCharacter, // LetterOrNumberOrSpecialCharacter
  [bas.cc + cAlphaNumericCharacter]: cAlphaNumericCharacter, // AlphaNumericCharacter
  [bas.cc + cSuffixAndDomain]: cSuffixAndDomain, // SuffixAndDomain
  [bas.cc + cWithSpecificSuffixAndDomainName]: cWithSpecificSuffixAndDomainName, // WithSpecificSuffixAndDomainName
  [bas.cc + cNumericCharacter]: cNumericCharacter, // NumericCharacter
  [bas.cc + cNumberInRange]: cNumberInRange, // NumberInRange
  [bas.cc + cBooleanValue]: cBooleanValue, // BooleanValue
  [bas.cc + cAlphabeticCharacter]: cAlphabeticCharacter, // AlphabeticCharacter
  [bas.cc + cCarriageReturn]: cCarriageReturn, // CarriageReturn
  [bas.cc + cDashboardLogs]: cDashboardLogs, // DashboardLogs
  [bas.cc + cVideoLogs]: cVideoLogs, // VideoLogs
  [bas.cc + cForwardSlash]: cForwardSlash, // ForwardSlash
  [bas.cc + cBackSlash]: cBackSlash, // BackSlash
  [bas.cc + cPage_Keywords]: cPage_Keywords, // Page_Keywords
  [bas.cc + cnavigateTo]: cnavigateTo, // navigateTo
  [bas.cc + cNavigateTo]: cNavigateTo, // NavigateTo
  [bas.cc + cBrowserRefresh]: cBrowserRefresh, // BrowserRefresh
  [bas.cc + cSpaceIsColonSpace]: cSpaceIsColonSpace, // is:
  [bas.cc + cdeployApplication]: cdeployApplication, // deployApplication
  [bas.cc + cdeployMetaData]: cdeployMetaData, // deployMetaData
  [bas.cc + creleaseApplication]: creleaseApplication, // releaseApplication
  [bas.cc + cbackground]: cbackground, // background
  [bas.cc + cBackground]: cBackground, // Background
  [bas.cc + cConfiguration_Colors]: cConfiguration_Colors, // Configuration_Colors
  [bas.cc + cColorData]: cColorData, // ColorData
  [bas.cc + cColorName]: cColorName, // ColorName
  [bas.cc + cbusinessRule]: cbusinessRule, // businessRule
  [bas.cc + cBusinessRule]: cBusinessRule, // BusinessRule
  [bas.cc + cbusinessRules]: cbusinessRules, // businessRules
  [bas.cc + cBusinessRules]: cBusinessRules, // BusinessRules
  [bas.cc + crulesLibrary]: crulesLibrary, // rulesLibrary
  [bas.cc + cframework]: cframework, // framework
  [bas.cc + cFramework]: cFramework, // Framework
  [bas.cc + cCommandsAliases]: cCommandsAliases, // CommandsAliases
  [bas.cc + cCommandWorkflows]: cCommandWorkflows, // CommandWorkflows
  [bas.cc + cStandardDeviation]: cStandardDeviation, // StandardDeviation
  [bas.cc + cHexValue]: cHexValue, // HexValue
  [bas.cc + cexportconst]: cexportconst, // export-const // With a space not a dash, but the validation code is looking for that exact string.
  [bas.cc + cExportConst]: cExportConst, // smuggle something
  [bas.cc + cDataStorage]: cDataStorage, // DataStorage
  [bas.cc + cSource1]: cSource1, // Source1
  [bas.cc + cSource2]: cSource2, // Source2
  [bas.cc + cbigInteger]: cbigInteger, // bigInteger
  [bas.cc + cnumberOfCharactersToGenerate]: cnumberOfCharactersToGenerate, // numberOfCharactersToGenerate
  [bas.cc + cgenerateSpecialCharacters]: cgenerateSpecialCharacters, // generateSpecialCharacters
  [bas.cc + callowableSpecialCharacters]: callowableSpecialCharacters, // allowableSpecialCharacters
  [bas.cc + cspecifiedSuffixAndDomain]: cspecifiedSuffixAndDomain, // specifiedSuffixAndDomain
  [bas.cc + cfailureMode]: cfailureMode, // failureMode
  [bas.cc + cWithoutThe]: cWithoutThe, // Without the
  [bas.cc + cwasCompleted]: cwasCompleted, // was completed
  [bas.cc + cGenerateA]: cGenerateA, // Generate a
  [bas.cc + cprogramLoop]: cprogramLoop, // program loop
  [bas.cc + candPrefix]: candPrefix, // and prefix
  [bas.cc + candSuffix]: candSuffix, // and suffix
  [bas.cc + cdomainSpaceName]: cdomainSpaceName, // domain name
  [bas.cc + candSpaceDomainSpaceName]: candSpaceDomainSpaceName, // and domain name
  [bas.cc + ccurrentMasterStringArrayElement]: ccurrentMasterStringArrayElement, // currentMasterStringArrayElement
  [bas.cc + cLehmerCodeArray]: cLehmerCodeArray, // LehmerCodeArray
  [bas.cc + creturnData]: creturnData, // returnData
  [bas.cc + cCamelCase]: cCamelCase, // CamelCase

  // Logging Styles Constants
  [bas.cc + cModuleFontStyle]: cModuleFontStyle, // ModuleFontStyle
  [bas.cc + cFunctionFontStyle]: cFunctionFontStyle, // FunctionFontStyle
  [bas.cc + cMessageFontStyle]: cMessageFontStyle, // MessageFontStyle
  [bas.cc + cDataFontStyle]: cDataFontStyle, // DataFontStyle
  [bas.cc + cModuleFontColor]: cModuleFontColor, // ModuleFontColor
  [bas.cc + cFunctionFontColor]: cFunctionFontColor, // FunctionFontColor
  [bas.cc + cMessageFontColor]: cMessageFontColor, // MessageFontColor
  [bas.cc + cDataFontColor]: cDataFontColor, // DataFontColor
  [bas.cc + cModuleFontBackgroundColor]: cModuleFontBackgroundColor, // ModuleFontBackgroundColor
  [bas.cc + cFunctionFontBackgroundColor]: cFunctionFontBackgroundColor, // FunctionFontBackgroundColor
  [bas.cc + cMessageFontBackgroundColor]: cMessageFontBackgroundColor, // MessageFontBackgroundColor
  [bas.cc + cDataFontBackgroundColor]: cDataFontBackgroundColor, // DataFontBackgroundColor

  // File Types
  [bas.cc + cCatia]: cCatia, // Catia
  [bas.cc + cDocument]: cDocument, // Document
  [bas.cc + cDocuments]: cDocuments, // Documents
  [bas.cc + cDraft]: cDraft, // Draft
  [bas.cc + cDWG]: cDWG, // DWG
  [bas.cc + cHoops]: cHoops, // Hoops
  [bas.cc + cHOOPS]: cHOOPS, // HOOPS
  [bas.cc + cImage]: cImage, // Image
  [bas.cc + cImages]: cImages, // Images
  [bas.cc + cInventor]: cInventor, // Inventor
  [bas.cc + cNeutral]: cNeutral, // Neutral
  [bas.cc + cNX]: cNX, // NX
  [bas.cc + cParasolid]: cParasolid, // Parasolid
  [bas.cc + cProE]: cProE, // ProE
  [bas.cc + cRhino]: cRhino, // Rhino
  [bas.cc + cSolidEdge]: cSolidEdge, // SolidEdge
  [bas.cc + cSolidWorks]: cSolidWorks, // SolidWorks
  [bas.cc + cvrml]: cvrml, // vrml
  [bas.cc + cVrml]: cVrml, // Vrml
  [bas.cc + cVRML]: cVRML, // VRML

  // UI Element Types
  [bas.cc + cButton]: cButton, // Button

  // Environment Variables
  [bas.cc + cQA]: cQA, // QA
  [bas.cc + cdev]: cdev, // dev
  [bas.cc + cDEV]: cDEV, // DEV
  [bas.cc + cProd]: cProd, // Prod
  [bas.cc + cPROD]: cPROD, // PROD
  [bas.cc + cPre]: cPre, // Pre
  [bas.cc + cPRE]: cPRE, // PRE
  [bas.cc + cPreProd]: cPreProd, // PreProd
  [bas.cc + cPREPROD]: cPREPROD, // PREPROD

  // Key Combinations
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.ca]: cctrl_a, // ctrl+a
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cb]: cctrl_b, // ctrl+b
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cc]: cctrl_c, // ctrl+c
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cd]: cctrl_d, // ctrl+d
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.ce]: cctrl_e, // ctrl+e
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cf]: cctrl_f, // ctrl+f
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cg]: cctrl_g, // ctrl+g
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.ch]: cctrl_h, // ctrl+h
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.ci]: cctrl_i, // ctrl+i
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cj]: cctrl_j, // ctrl+j
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.ck]: cctrl_k, // ctrl+k
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cl]: cctrl_l, // ctrl+l
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cm]: cctrl_m, // ctrl+m
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cn]: cctrl_n, // ctrl+n
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.co]: cctrl_o, // ctrl+o
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cp]: cctrl_p, // ctrl+p
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cq]: cctrl_q, // ctrl+q
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cr]: cctrl_r, // ctrl+r
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cs]: cctrl_s, // ctrl+s
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.ct]: cctrl_t, // ctrl+t
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cu]: cctrl_u, // ctrl+u
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cv]: cctrl_v, // ctrl+v
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cw]: cctrl_w, // ctrl+w
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cx]: cctrl_x, // ctrl+x
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cy]: cctrl_y, // ctrl+y
  [bas.ccc + phn.ctrl + bas.cUnderscore + bas.cz]: cctrl_z, // ctrl+z

  // System Terms
  [bas.cc + wrd.cframework + wrd.cResources + wrd.cConfiguration + wrd.cPath]: cframeworkResourcesConfigurationPath, // //resources//configuration//
  [bas.cc + wrd.csystem + wrd.cConfig + wrd.cFile + wrd.cName]: csystemConfigFileName, // framework.system.json
  [bas.cc + wrd.capplication + wrd.cConfig + wrd.cFile + wrd.cName]: capplicationConfigFileName, // application.system.json
  [bas.cc + cappConfigPath]: cappConfigPath, // appConfigPath
  [bas.cc + cframeworkConfigPath]: cframeworkConfigPath, // frameworkConfigPath
  [bas.cc + cApplicationName]: cApplicationName, // ApplicationName
  [bas.cc + cApplicationRootPath]: cApplicationRootPath, // ApplicationRootPath
  [bas.cc + cApplicationCleanedRootPath]: cApplicationCleanedRootPath, // ApplicationCleanedRootPath
  [bas.cc + cConfigurationPath]: cConfigurationPath, // ConfigurationPath
  [bas.cc + cApplicationVersionNumber]: cApplicationVersionNumber, // ApplicationVersionNumber
  [bas.cc + cApplicationDescription]: cApplicationDescription, // ApplicationDescription
  [bas.cc + cDataPath]: cDataPath, // DataPath
  [bas.cc + cCtempPath]: cCtempPath, // CtempPath
  [bas.cc + cPageDataPath]: cPageDataPath, // PageDataPath
  [bas.cc + cWorkflowDataPath]: cWorkflowDataPath, // WorkflowDataPath
  [bas.cc + cKeywordsDataPath]: cKeywordsDataPath, // KeywordsDataPath
  [bas.cc + cLocatorsDataPath]: cLocatorsDataPath, // LocatorsDataPath
  [bas.cc + cClientConstantsPath]: cClientConstantsPath, // ClientConstantsPath
  [bas.cc + cSystemConstantsPath]: cSystemConstantsPath, // SystemConstantsPath
  [bas.cc + cSystemConstantsPathActual]: cSystemConstantsPathActual, // src/Framework/Constants/
  [bas.cc + cclientRulesLibrary]: cclientRulesLibrary, // clientRulesLibrary
  [bas.cc + cCommandQueue]: cCommandQueue, // CommandQueue
  [bas.cc + cConstantsValidationData]: cConstantsValidationData, // ConstantsValidationData
  [bas.cc + cConstantsShortNames]: cConstantsShortNames, // ConstantsShortNames
  [bas.cc + cConstantsFileNames]: cConstantsFileNames, // ConstantsFileNames
  [bas.cc + cConstantsPrefix]: cConstantsPrefix, // ConstantsPrefix
  [bas.cc + cConstantsFilePaths]: cConstantsFilePaths, // ConstantsFilePaths
  [bas.cc + cConstantsPhase1ValidationMessages]: cConstantsPhase1ValidationMessages, // ConstantsPhase1ValidationMessages
  [bas.cc + cConstantsPhase2ValidationMessages]: cConstantsPhase2ValidationMessages, // ConstantsPhase2ValidationMessages
  [bas.cc + cBasicConstantsValidation]: cBasicConstantsValidation, // BasicConstantsValidation
  [bas.cc + cBusinessConstantsValidation]: cBusinessConstantsValidation, // BusinessConstantsValidation
  [bas.cc + cColorConstantsValidation]: cColorConstantsValidation, // ColorConstantsValidation
  [bas.cc + cCommandConstantsValidation]: cCommandConstantsValidation, // CommandConstantsValidation
  [bas.cc + cConfigurationConstantsValidation]: cConfigurationConstantsValidation, // ConfigurationConstantsValidation
  [bas.cc + cCountryConstantsValidation]: cCountryConstantsValidation, // CountryConstantsValidation
  [bas.cc + cElementConstantsValidation]: cElementConstantsValidation, // ElementConstantsValidation
  [bas.cc + cGenericConstantsValidation]: cGenericConstantsValidation, // GenericConstantsValidation
  [bas.cc + cIsotopeConstantsValidation]: cIsotopeConstantsValidation, // IsotopeConstantsValidation
  [bas.cc + cKnotConstantsValidation]: cKnotConstantsValidation, // KnotConstantsValidation
  [bas.cc + cLanguageConstantsValidation]: cLanguageConstantsValidation, // LanguageConstantsValidation
  [bas.cc + cMessageConstantsValidation]: cMessageConstantsValidation, // MessageConstantsValidation
  [bas.cc + cNumericConstantsValidation]: cNumericConstantsValidation, // NumericConstantsValidation
  [bas.cc + cPhonicConstantsValidation]: cPhonicConstantsValidation, // PhonicConstantsValidation
  [bas.cc + cShapeConstantsValidation]: cShapeConstantsValidation, // ShapeConstantsValidation
  [bas.cc + cSystemConstantsValidation]: cSystemConstantsValidation, // SystemConstantsValidation
  [bas.cc + cUnitConstantsValidation]: cUnitConstantsValidation, // UnitConstantsValidation
  [bas.cc + cWordConstantsValidation]: cWordConstantsValidation, // WordConstantsValidation
  [bas.cc + cSourceResourcesPath]: cSourceResourcesPath, // SourceResourcesPath
  [bas.cc + cDestinationResourcesPath]: cDestinationResourcesPath, // BinaryResourcesPath
  [bas.cc + cBinaryRootPath]: cBinaryRootPath, // BinaryRootPath
  [bas.cc + cBinaryReleasePath]: cBinaryReleasePath, // BinaryReleasePath

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
};
