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
let cLogFilePathAndName = wrd.cLog + wrd.cFile + wrd.cPath + wrd.cAnd + wrd.cName; // LogFilePathAndName
let cDataLogFilePathAndName = wrd.cData + wrd.cLog + wrd.cFile + wrd.cPath + wrd.cAnd + wrd.cName; // DataLogFilePathAndName
let cExecutionJournalFilePathAndName = wrd.cExecution + wrd.cJournal + wrd.cFile + wrd.cPath + wrd.cAnd + wrd.cName; // ExecutionJournalFilePathAndName
let cResultsLogFilePathAndName = wrd.cResults + wrd.cLog + wrd.cFile + wrd.cPath + wrd.cAnd + wrd.cName; // ResultsLogFilePathAndName
let cTestDataPath = wrd.cTest + wrd.cData + wrd.cPath; // TestDataPath
let cConsoleLogEnabled = wrd.cConsole + wrd.cLog + wrd.cEnabled; // ConsoleLogEnabled
let cLogFileEnabled = wrd.cLog + wrd.cFile + wrd.cEnabled; // LogFileEnabled
let cIncludeDateTimeStampInLogFiles = wrd.cInclude + wrd.cDate + wrd.cTime + wrd.cStamp + bas.cIn + gen.cLog + wrd.cFiles; // IncludeDateTimeStampInLogFiles
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
  ['cENV']: cENV, // ENV
  ['cLOG']: cLOG, // LOG
  ['cENVIRONMENT']: cENVIRONMENT, // ENVIRONMENT
  ['cITERATION']: cITERATION, // ITERATION
  ['cSTYLE']: cSTYLE, // STYLE

  // Compound System Words
  ['cunderline']: cunderline, // underline
  ['cUnderline']: cUnderline, // Underline
  ['cwithText']: cwithText, // withText
  ['cWithText']: cWithText, // WithText
  ['cDebugTest']: cDebugTest, // DebugTest
  ['cDebugPage']: cDebugPage, // DebugPage
  ['cDebugTestExhaustive']: cDebugTestExhaustive, // DebugTestExhaustive
  ['cDebugForceMessageToLogFile']: cDebugForceMessageToLogFile, // DebugForceMessageToLogFile
  ['cDebugTestData']: cDebugTestData, // DebugTestData
  ['cDebugPageScripts']: cDebugPageScripts, // DebugPageScripts
  ['cDebugPageData']: cDebugPageData, // DebugPageData
  ['cDebugKeywords']: cDebugKeywords, // DebugKeywords
  ['cLogBrowserActions']: cLogBrowserActions, // LogBrowserActions
  ['cJournalBrowserActions']: cJournalBrowserActions, // JournalBrowserActions
  ['cDebugBrowserActions']: cDebugBrowserActions, // DebugBrowserActions
  ['cDebugSelectors']: cDebugSelectors, // DebugSelectors
  ['cDebugFunctions']: cDebugFunctions, // DebugFunctions
  ['cDebugFiles']: cDebugFiles, // DebugFiles
  ['cTestAutomation']: cTestAutomation, // TestAutomation
  ['cNumberOfRows']: cNumberOfRows, // NumberOfRows
  ['cMasterRowNumber']: cMasterRowNumber, // MasterRowNumber
  ['cEnvironmentRow']: cEnvironmentRow, // EnvironmentRow
  ['cEnvironmentRowNumber']: cEnvironmentRowNumber, // EnvironmentRowNumber
  ['cPageScript']: cPageScript, // PageScript
  ['cIntermediatePath']: cIntermediatePath, // IntermediatePath
  ['cTimeStamp']: cTimeStamp, // TimeStamp
  ['cPageScriptTimeStamp']: cPageScriptTimeStamp, // PageScriptTimeStamp
  ['cDateTimeStamp']: cDateTimeStamp, // DateTimeStamp
  ['cScriptDateStamp']: cScriptDateStamp, // ScriptDateStamp
  ['cScriptTimeStamp']: cScriptTimeStamp, // ScriptTimeStamp
  ['cKeywordTimeStamp']: cKeywordTimeStamp, // KeywordTimeStamp
  ['cTestTimeStamp']: cTestTimeStamp, // TestTimeStamp
  ['cScriptDateTimeStamp']: cScriptDateTimeStamp, // ScriptDateTimeStamp
  ['cBeginScriptTimeStamp']: cBeginScriptTimeStamp, // BeginScriptTimeStamp
  ['cEndScriptTimeStamp']: cEndScriptTimeStamp, // EndScriptTimeStamp
  ['cBeginTestTimeStamp']: cBeginTestTimeStamp, // BeginTestTimeStamp
  ['cEndTestTimeStamp']: cEndTestTimeStamp, // EndTestTimeStamp
  ['cBeginPageScriptTimeStamp']: cBeginPageScriptTimeStamp, // BeginPageScriptTimeStamp
  ['cEndPageScriptTimeStamp']: cEndPageScriptTimeStamp, // EndPageScriptTimeStamp
  ['cBeginKeywordTimeStamp']: cBeginKeywordTimeStamp, // BeginKeywordTimeStamp
  ['cEndKeywordTimeStamp']: cEndKeywordTimeStamp, // EndKeywordTimeStamp
  ['cRuntime']: cRuntime, // Runtime
  ['cRunTime']: cRunTime, // RunTime
  ['cBrowserName']: cBrowserName, // BrowserName
  ['cHostName']: cHostName, // HostName
  ['cTestRunID']: cTestRunID, // TestRunID
  ['cfilesLists']: cfilesLists, // filesLists
  ['cFileTypes']: cFileTypes, // FileTypes
  ['cfilename']: cfilename, // filename
  ['cFilename']: cFilename, // Filename
  ['cFileName']: cFileName, // FileName
  ['cfilenames']: cfilenames, // filenames
  ['cFilenames']: cFilenames, // Filenames
  ['cFileNames']: cFileNames, // FileNames
  ['cPreValidateFileName']: cPreValidateFileName, // PreValidateFileName
  ['cAsynchSingular']: cAsynchSingular, // AsynchSingular
  ['cSynchSingular']: cSynchSingular, // SynchSingular
  ['cParallelMultiUnified']: cParallelMultiUnified, // ParallelMultiUnified
  ['cAllowableCharacters']: cAllowableCharacters, // AllowableCharacters
  ['cSpecialCharacters']: cSpecialCharacters, // SpecialCharacters
  ['cTimeoutOverride']: cTimeoutOverride, // TimeoutOverride
  ['cDwellTime']: cDwellTime, // DwellTime
  ['cLogFilePathAndName']: cLogFilePathAndName, // LogFilePathAndName
  ['cDataLogFilePathAndName']: cDataLogFilePathAndName, // DataLogFilePathAndName
  ['cExecutionJournalFilePathAndName']: cExecutionJournalFilePathAndName, // ExecutionJournalFilePathAndName
  ['cResultsLogFilePathAndName']: cResultsLogFilePathAndName, // ResultsLogFilePathAndName
  ['cTestDataPath']: cTestDataPath, // TestDataPath
  ['cConsoleLogEnabled']: cConsoleLogEnabled, // ConsoleLogEnabled
  ['cLogFileEnabled']: cLogFileEnabled, // LogFileEnabled
  ['cIncludeDateTimeStampInLogFiles']: cIncludeDateTimeStampInLogFiles, // IncludeDateTimeStampInLogFiles
  ['cFileCounter']: cFileCounter, // FileCounter
  ['cDeltaT']: cDeltaT, // DeltaT
  ['cvisibilityCheck']: cvisibilityCheck, // visibilityCheck
  ['cVisibilityCheck']: cVisibilityCheck, // VisibilityCheck
  ['cOperatingSystem']: cOperatingSystem, // OperatingSystem
  ['cinnerText']: cinnerText, // innerText
  ['cInnerText']: cInnerText, // InnerText
  ['cinnerHTML']: cinnerHTML, // innerHTML
  ['cInnerHTML']: cInnerHTML, // InnerHTML
  ['cTestData']: cTestData, // TestData
  ['cProcessingTimeout']: cProcessingTimeout, // ProcessingTimeout
  ['cIngestionCompleteDwellTime']: cIngestionCompleteDwellTime, // IngestionCompleteDwellTime
  ['cRowNumber']: cRowNumber, // RowNumber
  ['cUsername']: cUsername, // Username
  ['cPassword']: cPassword, // Password
  ['cProjectName']: cProjectName, // ProjectName
  ['cProjectDescription']: cProjectDescription, // ProjectDescription
  ['cTestDataFileName']: cTestDataFileName, // TestDataFileName
  ['cShareEmail']: cShareEmail, // ShareEmail
  ['cAccessLevel']: cAccessLevel, // AccessLevel
  ['cFileNumber']: cFileNumber, // FileNumber
  ['cConfigurationName']: cConfigurationName, // ConfigurationName
  ['cConfigurationElement']: cConfigurationElement, // ConfigurationElement
  ['cConfigurationElements']: cConfigurationElements, // ConfigurationElements
  ['cVersionControl']: cVersionControl, // VersionControl
  ['cScriptRunTime']: cScriptRunTime, // ScriptRunTime
  ['cTestRunTime']: cTestRunTime, // TestRunTime
  ['ctypeText']: ctypeText, // typeText
  ['cTypeText']: cTypeText, // TypeText
  ['cAbreviatedSelectors']: cAbreviatedSelectors, // AbreviatedSelectors
  ['cAbreviatedSelectorsInLogs']: cAbreviatedSelectorsInLogs, // AbreviatedSelectorsInLogs
  ['cselectorTimeout']: cselectorTimeout, // selectorTimeout
  ['cchildElementCount']: cchildElementCount, // childElementCount
  ['cUnderscore']: cUnderscore, // Underscore
  ['cTestBureau']: cTestBureau, // TestBureau
  ['caddWithText']: caddWithText, // addWithText
  ['caddTimeout']: caddTimeout, // addTimeout
  ['caddParent']: caddParent, // addParent
  ['caddFindValue']: caddFindValue, // addFindValue
  ['caddNth']: caddNth, // addNth
  ['caddSibling']: caddSibling, // addSibling
  ['caddFilter']: caddFilter, // addFilter
  ['cgenerateRandom']: cgenerateRandom, // generateRandom
  ['crandomlyGenerate']: crandomlyGenerate, // randomlyGenerate
  ['cMixedCase']: cMixedCase, // MixedCase
  ['cUpperCase']: cUpperCase, // UpperCase
  ['cLowerCase']: cLowerCase, // LowerCase
  ['cByLength']: cByLength, // ByLength
  ['cSpecialCharacter']: cSpecialCharacter, // SpecialCharacter
  ['cWithSpecialCharacters']: cWithSpecialCharacters, // WithSpecialCharacters
  ['cTextByLength']: cTextByLength, // TextByLength
  ['cTextWithSpecialCharacters']: cTextWithSpecialCharacters, // TextWithSpecialCharacters
  ['cTextWithSpecialCharactersByLength']: cTextWithSpecialCharactersByLength, // TextWithSpecialCharactersByLength
  ['cAlphaNumeric']: cAlphaNumeric, // AlphaNumeric
  ['cAlphaNumericCode']: cAlphaNumericCode, // AlphaNumericCode
  ['cAlphaNumericCodeByLength']: cAlphaNumericCodeByLength, // AlphaNumericCodeByLength
  ['cNumericCode']: cNumericCode, // NumericCode
  ['cNumericCodeByLength']: cNumericCodeByLength, // NumericCodeByLength
  ['cAlphaNumericCodeWithSpecialCharacters']: cAlphaNumericCodeWithSpecialCharacters, // AlphaNumericCodeWithSpecialCharacters
  ['cAlphaNumericCodeWithSpecialCharactersByLength']: cAlphaNumericCodeWithSpecialCharactersByLength, // AlphaNumericCodeWithSpecialCharactersByLength
  ['cSpecialCharacterCodeByLength']: cSpecialCharacterCodeByLength, // SpecialCharacterCodeByLength
  ['cvalidEmail']: cvalidEmail, // validEmail
  ['cValidEmail']: cValidEmail, // ValidEmail
  ['cInvalidEmail']: cInvalidEmail, // InvalidEmail
  ['cgenerateValidEmail']: cgenerateValidEmail, // generateValidEmail
  ['cgenerateInvalidEmail']: cgenerateInvalidEmail, // generateInvalidEmail
  ['cRandomValidEmail']: cRandomValidEmail, // RandomValidEmail
  ['cRandomInvalidEmail']: cRandomInvalidEmail, // RandomInvalidEmail
  ['cLetterOr']: cLetterOr, // LetterOr
  ['cLetterOrSpecialCharacter']: cLetterOrSpecialCharacter, // LetterOrSpecialCharacter
  ['cLetterOrNumberOrSpecialCharacter']: cLetterOrNumberOrSpecialCharacter, // LetterOrNumberOrSpecialCharacter
  ['cAlphaNumericCharacter']: cAlphaNumericCharacter, // AlphaNumericCharacter
  ['cSuffixAndDomain']: cSuffixAndDomain, // SuffixAndDomain
  ['cWithSpecificSuffixAndDomainName']: cWithSpecificSuffixAndDomainName, // WithSpecificSuffixAndDomainName
  ['cNumericCharacter']: cNumericCharacter, // NumericCharacter
  ['cNumberInRange']: cNumberInRange, // NumberInRange
  ['cBooleanValue']: cBooleanValue, // BooleanValue
  ['cAlphabeticCharacter']: cAlphabeticCharacter, // AlphabeticCharacter
  ['cCarriageReturn']: cCarriageReturn, // CarriageReturn
  ['cDashboardLogs']: cDashboardLogs, // DashboardLogs
  ['cVideoLogs']: cVideoLogs, // VideoLogs
  ['cForwardSlash']: cForwardSlash, // ForwardSlash
  ['cBackSlash']: cBackSlash, // BackSlash
  ['cPage_Keywords']: cPage_Keywords, // Page_Keywords
  ['cnavigateTo']: cnavigateTo, // navigateTo
  ['cNavigateTo']: cNavigateTo, // NavigateTo
  ['cBrowserRefresh']: cBrowserRefresh, // BrowserRefresh
  ['cSpaceIsColonSpace']: cSpaceIsColonSpace, // is:
  ['cdeployApplication']: cdeployApplication, // deployApplication
  ['cdeployMetaData']: cdeployMetaData, // deployMetaData
  ['creleaseApplication']: creleaseApplication, // releaseApplication
  ['cbackground']: cbackground, // background
  ['cBackground']: cBackground, // Background
  ['cConfiguration_Colors']: cConfiguration_Colors, // Configuration_Colors
  ['cColorData']: cColorData, // ColorData
  ['cColorName']: cColorName, // ColorName
  ['cbusinessRule']: cbusinessRule, // businessRule
  ['cBusinessRule']: cBusinessRule, // BusinessRule
  ['cbusinessRules']: cbusinessRules, // businessRules
  ['cBusinessRules']: cBusinessRules, // BusinessRules
  ['crulesLibrary']: crulesLibrary, // rulesLibrary
  ['cframework']: cframework, // framework
  ['cFramework']: cFramework, // Framework
  ['cCommandsAliases']: cCommandsAliases, // CommandsAliases
  ['cCommandWorkflows']: cCommandWorkflows, // CommandWorkflows
  ['cStandardDeviation']: cStandardDeviation, // StandardDeviation
  ['cHexValue']: cHexValue, // HexValue
  ['cexportconst']: cexportconst, // export-const // With a space not a dash, but the validation code is looking for that exact string.
  ['cExportConst']: cExportConst, // smuggle something
  ['cDataStorage']: cDataStorage, // DataStorage
  ['cSource1']: cSource1, // Source1
  ['cSource2']: cSource2, // Source2
  ['cbigInteger']: cbigInteger, // bigInteger
  ['cnumberOfCharactersToGenerate']: cnumberOfCharactersToGenerate, // numberOfCharactersToGenerate
  ['cgenerateSpecialCharacters']: cgenerateSpecialCharacters, // generateSpecialCharacters
  ['callowableSpecialCharacters']: callowableSpecialCharacters, // allowableSpecialCharacters
  ['cspecifiedSuffixAndDomain']: cspecifiedSuffixAndDomain, // specifiedSuffixAndDomain
  ['cfailureMode']: cfailureMode, // failureMode
  ['cWithoutThe']: cWithoutThe, // Without the
  ['cwasCompleted']: cwasCompleted, // was completed
  ['cGenerateA']: cGenerateA, // Generate a
  ['cprogramLoop']: cprogramLoop, // program loop
  ['candPrefix']: candPrefix, // and prefix
  ['candSuffix']: candSuffix, // and suffix
  ['cdomainSpaceName']: cdomainSpaceName, // domain name
  ['candSpaceDomainSpaceName']: candSpaceDomainSpaceName, // and domain name
  ['ccurrentMasterStringArrayElement']: ccurrentMasterStringArrayElement, // currentMasterStringArrayElement
  ['cLehmerCodeArray']: cLehmerCodeArray, // LehmerCodeArray
  ['creturnData']: creturnData, // returnData
  ['cCamelCase']: cCamelCase, // CamelCase

  // Logging Styles Constants
  ['cModuleFontStyle']: cModuleFontStyle, // ModuleFontStyle
  ['cFunctionFontStyle']: cFunctionFontStyle, // FunctionFontStyle
  ['cMessageFontStyle']: cMessageFontStyle, // MessageFontStyle
  ['cDataFontStyle']: cDataFontStyle, // DataFontStyle
  ['cModuleFontColor']: cModuleFontColor, // ModuleFontColor
  ['cFunctionFontColor']: cFunctionFontColor, // FunctionFontColor
  ['cMessageFontColor']: cMessageFontColor, // MessageFontColor
  ['cDataFontColor']: cDataFontColor, // DataFontColor
  ['cModuleFontBackgroundColor']: cModuleFontBackgroundColor, // ModuleFontBackgroundColor
  ['cFunctionFontBackgroundColor']: cFunctionFontBackgroundColor, // FunctionFontBackgroundColor
  ['cMessageFontBackgroundColor']: cMessageFontBackgroundColor, // MessageFontBackgroundColor
  ['cDataFontBackgroundColor']: cDataFontBackgroundColor, // DataFontBackgroundColor

  // File Types
  ['cCatia']: cCatia, // Catia
  ['cDocument']: cDocument, // Document
  ['cDocuments']: cDocuments, // Documents
  ['cDraft']: cDraft, // Draft
  ['cDWG']: cDWG, // DWG
  ['cHoops']: cHoops, // Hoops
  ['cHOOPS']: cHOOPS, // HOOPS
  ['cImage']: cImage, // Image
  ['cImages']: cImages, // Images
  ['cInventor']: cInventor, // Inventor
  ['cNeutral']: cNeutral, // Neutral
  ['cNX']: cNX, // NX
  ['cParasolid']: cParasolid, // Parasolid
  ['cProE']: cProE, // ProE
  ['cRhino']: cRhino, // Rhino
  ['cSolidEdge']: cSolidEdge, // SolidEdge
  ['cSolidWorks']: cSolidWorks, // SolidWorks
  ['cvrml']: cvrml, // vrml
  ['cVrml']: cVrml, // Vrml
  ['cVRML']: cVRML, // VRML

  // UI Element Types
  ['cButton']: cButton, // Button

  // Environment Variables
  ['cQA']: cQA, // QA
  ['cDEV']: cDEV, // DEV
  ['cProd']: cProd, // Prod
  ['cPROD']: cPROD, // PROD
  ['cPre']: cPre, // Pre
  ['cPRE']: cPRE, // PRE
  ['cPreProd']: cPreProd, // PreProd
  ['cPREPROD']: cPREPROD, // PREPROD

  // Key Combinations
  ['cctrl_a']: cctrl_a, // ctrl+a
  ['cctrl_b']: cctrl_b, // ctrl+b
  ['cctrl_c']: cctrl_c, // ctrl+c
  ['cctrl_d']: cctrl_d, // ctrl+d
  ['cctrl_e']: cctrl_e, // ctrl+e
  ['cctrl_f']: cctrl_f, // ctrl+f
  ['cctrl_g']: cctrl_g, // ctrl+g
  ['cctrl_h']: cctrl_h, // ctrl+h
  ['cctrl_i']: cctrl_i, // ctrl+i
  ['cctrl_j']: cctrl_j, // ctrl+j
  ['cctrl_k']: cctrl_k, // ctrl+k
  ['cctrl_l']: cctrl_l, // ctrl+l
  ['cctrl_m']: cctrl_m, // ctrl+m
  ['cctrl_n']: cctrl_n, // ctrl+n
  ['cctrl_o']: cctrl_o, // ctrl+o
  ['cctrl_p']: cctrl_p, // ctrl+p
  ['cctrl_q']: cctrl_q, // ctrl+q
  ['cctrl_r']: cctrl_r, // ctrl+r
  ['cctrl_s']: cctrl_s, // ctrl+s
  ['cctrl_t']: cctrl_t, // ctrl+t
  ['cctrl_u']: cctrl_u, // ctrl+u
  ['cctrl_v']: cctrl_v, // ctrl+v
  ['cctrl_w']: cctrl_w, // ctrl+w
  ['cctrl_x']: cctrl_x, // ctrl+x
  ['cctrl_y']: cctrl_y, // ctrl+y
  ['cctrl_z']: cctrl_z, // ctrl+z

  // System Terms
  ['cframeworkResourcesConfigurationPath']: cframeworkResourcesConfigurationPath, // //resources//configuration//
  ['csystemConfigFileName']: csystemConfigFileName, // framework.system.json
  ['capplicationConfigFileName']: capplicationConfigFileName, // application.system.json
  ['cappConfigPath']: cappConfigPath, // appConfigPath
  ['cframeworkConfigPath']: cframeworkConfigPath, // frameworkConfigPath
  ['cApplicationName']: cApplicationName, // ApplicationName
  ['cApplicationRootPath']: cApplicationRootPath, // ApplicationRootPath
  ['cApplicationCleanedRootPath']: cApplicationCleanedRootPath, // ApplicationCleanedRootPath
  ['cConfigurationPath']: cConfigurationPath, // ConfigurationPath
  ['cApplicationVersionNumber']: cApplicationVersionNumber, // ApplicationVersionNumber
  ['cApplicationDescription']: cApplicationDescription, // ApplicationDescription
  ['cDataPath']: cDataPath, // DataPath
  ['cCtempPath']: cCtempPath, // CtempPath
  ['cPageDataPath']: cPageDataPath, // PageDataPath
  ['cWorkflowDataPath']: cWorkflowDataPath, // WorkflowDataPath
  ['cKeywordsDataPath']: cKeywordsDataPath, // KeywordsDataPath
  ['cLocatorsDataPath']: cLocatorsDataPath, // LocatorsDataPath
  ['cClientConstantsPath']: cClientConstantsPath, // ClientConstantsPath
  ['cSystemConstantsPath']: cSystemConstantsPath, // SystemConstantsPath
  ['cSystemConstantsPathActual']: cSystemConstantsPathActual, // src/Framework/Constants/
  ['cclientRulesLibrary']: cclientRulesLibrary, // clientRulesLibrary
  ['cCommandQueue']: cCommandQueue, // CommandQueue
  ['cConstantsValidationData']: cConstantsValidationData, // ConstantsValidationData
  ['cConstantsShortNames']: cConstantsShortNames, // ConstantsShortNames
  ['cConstantsFileNames']: cConstantsFileNames, // ConstantsFileNames
  ['cConstantsPrefix']: cConstantsPrefix, // ConstantsPrefix
  ['cConstantsFilePaths']: cConstantsFilePaths, // ConstantsFilePaths
  ['cConstantsPhase1ValidationMessages']: cConstantsPhase1ValidationMessages, // ConstantsPhase1ValidationMessages
  ['cConstantsPhase2ValidationMessages']: cConstantsPhase2ValidationMessages, // ConstantsPhase2ValidationMessages
  ['cBasicConstantsValidation']: cBasicConstantsValidation, // BasicConstantsValidation
  ['cBusinessConstantsValidation']: cBusinessConstantsValidation, // BusinessConstantsValidation
  ['cColorConstantsValidation']: cColorConstantsValidation, // ColorConstantsValidation
  ['cCommandConstantsValidation']: cCommandConstantsValidation, // CommandConstantsValidation
  ['cConfigurationConstantsValidation']: cConfigurationConstantsValidation, // ConfigurationConstantsValidation
  ['cCountryConstantsValidation']: cCountryConstantsValidation, // CountryConstantsValidation
  ['cElementConstantsValidation']: cElementConstantsValidation, // ElementConstantsValidation
  ['cGenericConstantsValidation']: cGenericConstantsValidation, // GenericConstantsValidation
  ['cIsotopeConstantsValidation']: cIsotopeConstantsValidation, // IsotopeConstantsValidation
  ['cKnotConstantsValidation']: cKnotConstantsValidation, // KnotConstantsValidation
  ['cLanguageConstantsValidation']: cLanguageConstantsValidation, // LanguageConstantsValidation
  ['cMessageConstantsValidation']: cMessageConstantsValidation, // MessageConstantsValidation
  ['cNumericConstantsValidation']: cNumericConstantsValidation, // NumericConstantsValidation
  ['cPhonicConstantsValidation']: cPhonicConstantsValidation, // PhonicConstantsValidation
  ['cShapeConstantsValidation']: cShapeConstantsValidation, // ShapeConstantsValidation
  ['cSystemConstantsValidation']: cSystemConstantsValidation, // SystemConstantsValidation
  ['cUnitConstantsValidation']: cUnitConstantsValidation, // UnitConstantsValidation
  ['cWordConstantsValidation']: cWordConstantsValidation, // WordConstantsValidation
  ['cSourceResourcesPath']: cSourceResourcesPath, // SourceResourcesPath
  ['cDestinationResourcesPath']: cDestinationResourcesPath, // BinaryResourcesPath
  ['cBinaryRootPath']: cBinaryRootPath, // BinaryRootPath
  ['cBinaryReleasePath']: cBinaryReleasePath, // BinaryReleasePath

  // Constants Filenames
  ['cbasic_constants_js']: cbasic_constants_js, // basic.constants.js
  ['cbusiness_constants_js']: cbusiness_constants_js, // business.constants.js
  ['ccolor_constants_js']: ccolor_constants_js, // color.constants.js
  ['ccommand_constants_js']: ccommand_constants_js, // command.constants.js
  ['cconfiguration_constants_js']: cconfiguration_constants_js, // configuration.constants.js
  ['ccountry_constants_js']: ccountry_constants_js, // country.constants
  ['celement_constants_js']: celement_constants_js, // element.constants.js
  ['cgeneric_constants_js']: cgeneric_constants_js, // generic.constants.js
  ['cisotope_constants_js']: cisotope_constants_js, // isotope.constants.js
  ['cknot_constants_js']: cknot_constants_js, // knot.constants.js
  ['clanguage_constants_js']: clanguage_constants_js, // language.constants.js
  ['cmessage_constants_js']: cmessage_constants_js, // message.constants.js
  ['cnumeric_constants_js']: cnumeric_constants_js, // numeric.constants.js
  ['cphonic_constants_js']: cphonic_constants_js, // phonic.constants.js
  ['cshape_constants_js']: cshape_constants_js, // shape.constants.js
  ['csystem_constants_js']: csystem_constants_js, // system.constants.js
  ['cunit_constants_js']: cunit_constants_js, // unit.constants.js
  ['cword_constants_js']: cword_constants_js, // word.constants.js
};
