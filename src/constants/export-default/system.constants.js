/**
 * @file system.constants.js
 * @module system.constants
 * @description Contains system defined acronyms, many of them derived from the basic.constants.
 * The constants contained in this file are system words, phrases, codes and paths.
 * @requires module:basic.constants
 * @requires module:constant.constants
 * @requires module:generic.constants
 * @requires module:numeric.constants
 * @requires module:phonic.constants
 * @requires module:word1.constants
 * @author Seth Hollingsead
 * @date 2021/11/09
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

import * as bas from './basic.constants.js';
import * as con from './constant.constants.js';
import * as gen from './generic.constants.js';
import * as num from './numeric.constants.js';
import * as phn from './phonic.constants.js';
import * as wr1 from './word1.constants.js';

// Miscelaneious
let cENV = bas.cEN + bas.cV; // ENV
let cLOG = bas.cLO + bas.cG; // LOG
let cENVIRONMENT = phn.cENV + bas.cIR + bas.cON + phn.cMENT; // ENVIRONMENT
let cITERATION = bas.cIT + bas.cER + bas.cAT + bas.cIO + bas.cN; // ITERATION
let cSTYLE = bas.cST + bas.cYL + bas.cE; // STYLE

// Compound System Words
let cunderline = wr1.cunder + wr1.cline; // underline
let cUnderline = wr1.cUnder + wr1.cline; // Underline
let cwithText = wr1.cwith + wr1.cText; // withText
let cWithText = wr1.cWith + wr1.cText; // WithText
let cDebugTest = wr1.cDebug + wr1.cTest; // DebugTest
let cDebugPage = wr1.cDebug + wr1.cPage; // DebugPage
let cDebugTestExhaustive = cDebugTest + wr1.cExhaustive; // DebugTestExhaustive
let cDebugForceMessageToLogFile = wr1.cDebug + wr1.cForce + wr1.cMessage + bas.cTo + wr1.cLog + wr1.cFile; // DebugForceMessageToLogFile
let cDebugTestData = cDebugTest + wr1.cData; // DebugTestData
let cDebugPageScripts = cDebugPage + wr1.cScripts; // DebugPageScripts
let cDebugPageData = cDebugPage + wr1.cData; // DebugPageData
let cDebugKeywords = wr1.cDebug + wr1.cKeywords; // DebugKeywords
let cLogBrowserActions = wr1.cLog + wr1.cBrowser + wr1.cActions; // LogBrowserActions
let cJournalBrowserActions = wr1.cJournal + wr1.cBrowser + wr1.cActions; // JournalBrowserActions
let cDebugBrowserActions = wr1.cDebug + wr1.cBrowser + wr1.cActions; // DebugBrowserActions
let cDebugSelectors = wr1.cDebug + wr1.cSelectors; // DebugSelectors
let cTestAutomation = wr1.cTest + wr1.cAutomation; // TestAutomation
let cNumberOfRows = wr1.cNumber + wr1.cOf + wr1.cRows; // NumberOfRows
let cMasterRowNumber = wr1.cMaster + wr1.cRow + wr1.cNumber; // MasterRowNumber
let cEnvironmentRow = wr1.cEnvironment + wr1.cRow; // EnvironmentRow
let cEnvironmentRowNumber = cEnvironmentRow + wr1.cNumber; // EnvironmentRowNumber
let cPageScript = wr1.cPage + wr1.cScript; // PageScript
let cIntermediatePath = wr1.cIntermediate + wr1.cPath; // IntermediatePath
let cTimeStamp = wr1.cTime + wr1.cStamp; // TimeStamp
let cPageScriptTimeStamp = cPageScript + cTimeStamp; // PageScriptTimeStamp
let cDateTimeStamp = wr1.cDate + cTimeStamp; // DateTimeStamp
let cScriptDateStamp = wr1.cScript + wr1.cDate + wr1.cStamp; // ScriptDateStamp
let cScriptTimeStamp = wr1.cScript + cTimeStamp; // ScriptTimeStamp
let cKeywordTimeStamp = wr1.cKeyword + cTimeStamp; // KeywordTimeStamp
let cTestTimeStamp = wr1.cTest + cTimeStamp; // TestTimeStamp
let cScriptDateTimeStamp = wr1.cScript + cDateTimeStamp; // ScriptDateTimeStamp
let cBeginScriptTimeStamp = wr1.cBegin + cScriptTimeStamp; // BeginScriptTimeStamp
let cEndScriptTimeStamp = wr1.cEnd + cScriptTimeStamp; // EndScriptTimeStamp
let cBeginTestTimeStamp = wr1.cBegin + cTestTimeStamp; // BeginTestTimeStamp
let cEndTestTimeStamp = wr1.cEnd + cTestTimeStamp; // EndTestTimeStamp
let cBeginPageScriptTimeStamp = wr1.cBegin + cPageScriptTimeStamp; // BeginPageScriptTimeStamp
let cEndPageScriptTimeStamp = wr1.cEnd + cPageScriptTimeStamp; // EndPageScriptTimeStamp
let cBeginKeywordTimeStamp = wr1.cBegin + cKeywordTimeStamp; // BeginKeywordTimeStamp
let cEndKeywordTimeStamp = wr1.cEnd + cKeywordTimeStamp; // EndKeywordTimeStamp
let cRuntime = wr1.cRun + wr1.ctime; // Runtime
let cRunTime = wr1.cRun + wr1.cTime; // RunTime
let cBrowserName = wr1.cBrowser + wr1.cName; // BrowserName
let cHostName = wr1.cHost + wr1.cName; // HostName
let cTestRunID = wr1.cTest + wr1.cRun + wr1.cID; // TestRunID
let cfilesLists = wr1.cfiles + wr1.cLists; // filesLists
let cFileTypes = wr1.cFile + wr1.cTypes; // FileTypes
let cfilename = wr1.cfile + wr1.cname; // filename
let cFilename = wr1.cFile + wr1.cname; // Filename
let cFileName = wr1.cFile + wr1.cName; // FileName
let cfilenames = cfilename + bas.cs; // filenames
let cFilenames = cFilename + bas.cs; // Filenames
let cFileNames = cFileName + bas.cs; // FileNames
let cPreValidateFileName = phn.cPre + wr1.cValidate + cFileName; // PreValidateFileName
let cAsynchSingular = wr1.cAsynch + wr1.cSingular; // AsynchSingular
let cSynchSingular = wr1.cSynch + wr1.cSingular; // SynchSingular
let cParallelMultiUnified = wr1.cParallel + wr1.cMulti + wr1.cUnified; // ParallelMultiUnified
let cAllowableCharacters = wr1.cAllowable + wr1.cCharacters; // AllowableCharacters
let cSpecialCharacters = wr1.cSpecial + wr1.cCharacters; // SpecialCharacters
let cTimeoutOverride = wr1.cTimeout + wr1.cOverride; // TimeoutOverride
let cDwellTime = wr1.cDwell + wr1.cTime; // DwellTime
let cFileCounter = wr1.cFile + wr1.cCounter; // FileCounter
let cDeltaT = gen.cDelta + bas.cT; // DeltaT
let cvisibilityCheck = wr1.cvisibility + wr1.cCheck; // visibilityCheck
let cVisibilityCheck = wr1.cVisibility + wr1.cCheck; // VisibilityCheck
let cOperatingSystem = wr1.cOperating + wr1.cSystem; // OperatingSystem
let cinnerText = wr1.cinner + wr1.cText; // innerText
let cInnerText = wr1.cInner + wr1.cText; // InnerText
let cinnerHTML = wr1.cinner + wr1.cHTML; // innerHTML
let cInnerHTML = wr1.cInner + wr1.cHTML; // InnerHTML
let cTestData = wr1.cTest + wr1.cData; // TestData
let cProcessingTimeout = wr1.cProcessing + wr1.cTimeout; // ProcessingTimeout
let cIngestionCompleteDwellTime = wr1.cIngestion + wr1.cComplete + cDwellTime; // IngestionCompleteDwellTime
let cRowNumber = wr1.cRow + wr1.cNumber; // RowNumber
let cUsername = wr1.cUser + wr1.cname; // Username
let cPassword = wr1.cPass + wr1.cword; // Password
let cProjectName = wr1.cProject + wr1.cName; // ProjectName
let cProjectDescription = wr1.cProject + wr1.cDescription; // ProjectDescription
let cTestDataFileName = wr1.cTest + wr1.cData + cFileName; // TestDataFileName
let cShareEmail = wr1.cShare + wr1.cEmail; // ShareEmail
let cAccessLevel = wr1.cAccess + wr1.cLevel; // AccessLevel
let cFileNumber = wr1.cFile + wr1.cNumber; // FileNumber
let cConfigurationName = wr1.cConfiguration + wr1.cName; // ConfigurationName
let cConfigurationElement = wr1.cConfiguration + wr1.cElement; // ConfigurationElement
let cConfigurationElements = cConfigurationElement + bas.cs; // ConfigurationElements
let cVersionControl = wr1.cVersion + wr1.cControl; // VersionControl
let cScriptRunTime = wr1.cScript + cRunTime; // ScriptRunTime
let cTestRunTime = wr1.cTest + cRunTime; // TestRunTime
let ctypeText = wr1.ctype + wr1.cText; // typeText
let cTypeText = wr1.cType + wr1.cText; // TypeText
let cAbreviatedSelectors = wr1.cAbreviated + wr1.cSelectors; // AbreviatedSelectors
let cAbreviatedSelectorsInLogs = cAbreviatedSelectors + bas.cIn + wr1.cLogs; // AbreviatedSelectorsInLogs
let cselectorTimeout = wr1.cselector + wr1.cTimeout; // selectorTimeout
let cchildElementCount = wr1.cchild + wr1.cElement + wr1.cCount; // childElementCount
let cUnderscore = wr1.cUnder + wr1.cscore; // Underscore
let cTestBureau = wr1.cTest + wr1.cBureau; // TestBureau
let caddWithText = wr1.c_add + wr1.cWith + wr1.cText; // addWithText
let caddTimeout = wr1.c_add + wr1.cTimeout; // addTimeout
let caddParent = wr1.c_add + wr1.cParent; // addParent
let caddFindValue = wr1.c_add + wr1.cFind + wr1.cValue; // addFindValue
let caddNth = wr1.c_add + wr1.cNth; // addNth
let caddSibling = wr1.c_add + wr1.cSibling; // addSibling
let caddFilter = wr1.c_add + wr1.cFilter; // addFilter
let cgenerateRandom = wr1.cgenerate + wr1.cRandom; // generateRandom
let crandomlyGenerate = wr1.crandomly + wr1.cGenerate; // randomlyGenerate
let cMixedCase = wr1.cMixed + wr1.cCase; // MixedCase
let cUpperCase = wr1.cUpper + wr1.cCase; // UpperCase
let cLowerCase = wr1.cLower + wr1.cCase; // LowerCase
let cByLength = wr1.cBy + wr1.cLength; // ByLength
let cSpecialCharacter = wr1.cSpecial + wr1.cCharacter; // SpecialCharacter
let cWithSpecialCharacters = wr1.cWith + cSpecialCharacters; // WithSpecialCharacters
let cTextByLength = wr1.cText + cByLength; // TextByLength
let cTextWithSpecialCharacters = wr1.cText + cWithSpecialCharacters; // TextWithSpecialCharacters
let cTextWithSpecialCharactersByLength = cTextWithSpecialCharacters + cByLength; // TextWithSpecialCharactersByLength
let cAlphaNumeric = wr1.cAlpha + wr1.cNumeric; // AlphaNumeric
let cAlphaNumericCode = cAlphaNumeric + wr1.cCode; // AlphaNumericCode
let cAlphaNumericCodeByLength = cAlphaNumericCode + cByLength; // AlphaNumericCodeByLength
let cNumericCode = wr1.cNumeric + wr1.cCode; // NumericCode
let cNumericCodeByLength = cNumericCode + cByLength; // NumericCodeByLength
let cAlphaNumericCodeWithSpecialCharacters = cAlphaNumericCode + cWithSpecialCharacters; // AlphaNumericCodeWithSpecialCharacters
let cAlphaNumericCodeWithSpecialCharactersByLength = cAlphaNumericCodeWithSpecialCharacters + cByLength; // AlphaNumericCodeWithSpecialCharactersByLength
let cSpecialCharacterCodeByLength = cSpecialCharacter + wr1.cCode + cByLength; // SpecialCharacterCodeByLength
let cvalidEmail = wr1.cvalid + wr1.cEmail; // validEmail
let cValidEmail = wr1.cValid + wr1.cEmail; // ValidEmail
let cInvalidEmail = bas.cIn + cvalidEmail; // InvalidEmail
let cgenerateValidEmail = wr1.cgenerate + cValidEmail; // generateValidEmail
let cgenerateInvalidEmail = wr1.cgenerate + cInvalidEmail; // generateInvalidEmail
let cRandomValidEmail = wr1.cRandom + cValidEmail; // RandomValidEmail
let cRandomInvalidEmail = wr1.cRandom + cInvalidEmail; // RandomInvalidEmail
let cLetterOr = wr1.cLetter + bas.cOr; // LetterOr
let cLetterOrSpecialCharacter = cLetterOr + cSpecialCharacter; // LetterOrSpecialCharacter
let cLetterOrNumberOrSpecialCharacter = cLetterOr + wr1.cNumber + wr1.cOr + cSpecialCharacter; // LetterOrNumberOrSpecialCharacter
let cAlphaNumericCharacter = cAlphaNumeric + wr1.cCharacter; // AlphaNumericCharacter
let cSuffixAndDomain = wr1.cSuffix + wr1.cAnd + wr1.cDomain; // SuffixAndDomain
let cWithSpecificSuffixAndDomainName = wr1.cWith + wr1.cSpecific + wr1.cSuffix + wr1.cAnd + wr1.cDomain + wr1.cName; // WithSpecificSuffixAndDomainName
let cNumericCharacter = wr1.cNumeric + wr1.cCharacter; // NumericCharacter
let cNumberInRange = wr1.cNumber + bas.cIn + wr1.cRange; // NumberInRange
let cBooleanValue = wr1.cBoolean + wr1.cValue; // BooleanValue
let cAlphabeticCharacter = wr1.cAlphabetic + wr1.cCharacter; // AlphabeticCharacter
let cCarriageReturn = wr1.cCarriage + wr1.cReturn; // CarriageReturn
let cDashboardLogs = wr1.cDashboard + wr1.cLogs; // DashboardLogs
let cVideoLogs = wr1.cVideo + wr1.cLogs; // VideoLogs
let cForwardSlash = wr1.cForward + wr1.cSlash; // ForwardSlash
let cBackSlash = wr1.cBack + wr1.cSlash; // BackSlash
let cPage_Keywords = wr1.cPage + bas.cUnderscore + wr1.cKeywords; // Page_Keywords
let cnavigateTo = wr1.cnavigate + bas.cTo; // navigateTo
let cNavigateTo = wr1.cNavigate + bas.cTo; // NavigateTo
let cBrowserRefresh = wr1.cBrowser + wr1.cRefresh; // BrowserRefresh
let cSpaceIsColonSpace = bas.cSpace + bas.cis + bas.cColon + bas.cSpace; // is:
let cdeployApplication = wr1.cdeploy + wr1.cApplication; // deployApplication
let cdeployMetaData = wr1.cdeploy + wr1.cMetaData // deployMetaData
let creleaseApplication = wr1.crelease + wr1.cApplication; // releaseApplication
let cbackground = wr1.cback + wr1.cground; // background
let cBackground = wr1.cBack + wr1.cground; // Background
let cConfiguration_Colors = wr1.cConfiguration + bas.cUnderscore + wr1.cColors; // Configuration_Colors
let cColorData = wr1.cColor + wr1.cData; // ColorData
let cColorName = wr1.cColor + wr1.cName; // ColorName
let cbusinessRule = wr1.cbusiness + wr1.cRule; // businessRule
let cBusinessRule = wr1.cBusiness + wr1.cRule; // BusinessRule
let cbusinessRules = wr1.cbusiness + wr1.cRules; // businessRules
let cBusinessRules = wr1.cBusiness + wr1.cRules; // BusinessRules
let crulesLibrary = wr1.crules + wr1.cLibrary; // rulesLibrary
let cframework = wr1.cframe + wr1.cwork; // framework
let cFramework = wr1.cFrame + wr1.cwork; // Framework
let cCommandsAliases = wr1.cCommands + wr1.cAliases; // CommandsAliases
let cCommandWorkflows = wr1.cCommand + wr1.cWorkflows; // CommandWorkflows
let cStandardDeviation = wr1.cStandard + wr1.cDeviation; // StandardDeviation
let cHexValue = phn.cHex + wr1.cValue; // HexValue
let cexportconst = wr1.cexport + bas.cSpace + gen.cconst; // export-const // With a space not a dash, but the validation code is looking for that exact string.
let cExportConst = wr1.cExport + bas.cSpace + gen.cConst; // smuggle something
let cDataStorage = wr1.cData + wr1.cStorage; // DataStorage
let cSource1 = wr1.cSource + num.c1; // Source1
let cSource2 = wr1.cSource + num.c2; // Source2
let cbigInteger = wr1.cbig + wr1.cInteger; // bigInteger
let cnumberOfCharactersToGenerate = wr1.cnumber + bas.cOf + wr1.cCharacters + bas.cTo + wr1.cGenerate; // numberOfCharactersToGenerate
let cgenerateSpecialCharacters = wr1.cgenerate + cSpecialCharacters; // generateSpecialCharacters
let callowableSpecialCharacters = wr1.callowable + cSpecialCharacters; // allowableSpecialCharacters
let cspecifiedSuffixAndDomain = wr1.cspecified + cSuffixAndDomain; // specifiedSuffixAndDomain
let cfailureMode = wr1.cfailure + wr1.cMode; // failureMode
let cWithoutThe = wr1.cWithout + bas.cSpace + wr1.cthe; // Without the
let cwasCompleted = wr1.cwas + bas.cSpace + wr1.ccompleted; // was completed
let cGenerateA = wr1.cGenerate + bas.cSpace + bas.ca; // Generate a
let cprogramLoop = wr1.cprogram + bas.cSpace + wr1.cloop; // program loop
let candPrefix = wr1.cand + bas.cSpace + wr1.cprefix; // and prefix
let candSuffix = wr1.cand + bas.cSpace + wr1.csuffix; // and suffix
let cdomainSpaceName = wr1.cdomain + bas.cSpace + wr1.cname // domain name
let candSpaceDomainSpaceName = wr1.cand + bas.cSpace + cdomainSpaceName; // and domain name
let ccurrentMasterStringArrayElement = wr1.ccurrent + wr1.cMaster + wr1.cString + wr1.cArray + wr1.cElement; // currentMasterStringArrayElement
let cLehmerCodeArray = wr1.cLehmer + wr1.cCode + wr1.cArray; // LehmerCodeArray
let creturnData = wr1.creturn + wr1.cData; // returnData
let cCamelCase = wr1.cCamel + wr1.cCase; // CamelCase

// Logging Styles Constants
let cModuleFontStyle = wr1.cModule + wr1.cFont + wr1.cStyle; // ModuleFontStyle
let cFunctionFontStyle = wr1.cFunction + wr1.cFont + wr1.cStyle; // FunctionFontStyle
let cMessageFontStyle = wr1.cMessage + wr1.cFont + wr1.cStyle; // MessageFontStyle
let cDataFontStyle = wr1.cData + wr1.cFont + wr1.cStyle; // DataFontStyle
let cModuleFontColor = wr1.cModule + wr1.cFont + wr1.cColor; // ModuleFontColor
let cFunctionFontColor = wr1.cFunction + wr1.cFont + wr1.cColor; // FunctionFontColor
let cMessageFontColor = wr1.cMessage + wr1.cFont + wr1.cColor; // MessageFontColor
let cDataFontColor = wr1.cData + wr1.cFont + wr1.cColor; // DataFontColor
let cModuleFontBackgroundColor = wr1.cModule + wr1.cFont + cBackground + wr1.cColor; // ModuleFontBackgroundColor
let cFunctionFontBackgroundColor = wr1.cFunction + wr1.cFont + cBackground + wr1.cColor; // FunctionFontBackgroundColor
let cMessageFontBackgroundColor = wr1.cMessage + wr1.cFont + cBackground + wr1.cColor; // MessageFontBackgroundColor
let cDataFontBackgroundColor = wr1.cData + wr1.cFont + cBackground + wr1.cColor; // DataFontBackgroundColor

// File Types
let cCatia = bas.cCa + bas.cti + bas.ca; // Catia
let cDocument = wr1.cDocument; // Document
let cDocuments = cDocument + bas.cs; // Documents
let cDraft = bas.cDr + phn.caft; // Draft
let cDWG = bas.cDW + bas.cG; // DWG
let cHoops = bas.cH + wr1.coops; // Hoops
let cHOOPS = bas.cH + wr1.cOOPS; // HOOPS
let cImage = bas.cIm + phn.cage; // Image
let cImages = cImage + bas.cs; // Images
let cInventor = phn.cInv + bas.cen + phn.ctor; // Inventor
let cNeutral = bas.cNe + bas.cut + phn.cral; // Neutral
let cNX = bas.cNX; // NX
let cParasolid = bas.cP + phn.cara + wr1.csolid; // Parasolid
let cProE = phn.cPro + bas.cE; // ProE
let cRhino = bas.cRh + phn.cino; // Rhino
let cSolidEdge = wr1.cSolid + wr1.cEdge; // SolidEdge
let cSolidWorks = wr1.cSolid + wr1.cWorks; // SolidWorks
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
let csystemConfigFileName = wr1.cframework + bas.cDot + wr1.csystem + gen.cDotjson; // framework.system.json
let capplicationConfigFileName = wr1.capplication + bas.cDot + wr1.csystem + gen.cDotjson; // application.system.json
let cappConfigPath = gen.capp + wr1.cConfig + wr1.cPath; // appConfigPath
let cframeworkConfigPath = wr1.cframework + wr1.cConfig + wr1.cPath; // frameworkConfigPath
let cApplicationName = wr1.cApplication + wr1.cName; // ApplicationName
let cApplicationRootPath = wr1.cApplication + wr1.cRoot + wr1.cPath; // ApplicationRootPath
let cApplicationCleanedRootPath = wr1.cApplication + wr1.cCleaned + wr1.cRoot + wr1.cPath; // ApplicationCleanedRootPath
let cConfigurationPath = wr1.cConfiguration + wr1.cPath; // ConfigurationPath
let cApplicationVersionNumber = wr1.cApplication + wr1.cVersion + wr1.cNumber; // ApplicationVersionNumber
let cApplicationDescription = wr1.cApplication + wr1.cDescription; // ApplicationDescription
let cDataPath = wr1.cData + wr1.cPath; // DataPath
let cCtempPath = bas.cc + bas.cColon + bas.cForwardSlash + phn.ctemp + bas.cForwardSlash; // CtempPath
let cPageDataPath = wr1.cPage + cDataPath; // PageDataPath
let cWorkflowDataPath = wr1.cWorkflow + cDataPath; // WorkflowDataPath
let cKeywordsDataPath = wr1.cKeywords + cDataPath; // KeywordsDataPath
let cLocatorsDataPath = wr1.cLocators + cDataPath; // LocatorsDataPath
let cClientConstantsPath = wr1.cClient + wr1.cConstants + wr1.cPath; // ClientConstantsPath
let cSystemConstantsPath = wr1.cSystem + wr1.cConstants + wr1.cPath; // SystemConstantsPath
let cSystemConstantsPathActual = wr1.csrc + bas.cForwardSlash + cFramework + bas.cForwardSlash + wr1.cConstants + bas.cForwardSlash; // src/Framework/Constants/
let cclientRulesLibrary = wr1.cclient + wr1.cRules + wr1.cLibrary; // clientRulesLibrary
let cCommandQueue = wr1.cCommand + wr1.cQueue; // CommandQueue
let cConstantsValidationData = wr1.cConstants + wr1.cValidation + wr1.cData; // ConstantsValidationData
let cConstantsShortNames = wr1.cConstants + wr1.cShort + wr1.cNames; // ConstantsShortNames
let cConstantsFileNames = wr1.cConstants + wr1.cFile + wr1.cNames; // ConstantsFileNames
let cConstantsPrefix = wr1.cConstants + wr1.cPrefix; // ConstantsPrefix
let cConstantsFilePaths = wr1.cConstants + wr1.cFile + wr1.cPaths; // ConstantsFilePaths
let cConstantsPhase1ValidationMessages = wr1.cConstants + wr1.cPhase + num.c1 + wr1.cValidation + wr1.cMessages; // ConstantsPhase1ValidationMessages
let cConstantsPhase2ValidationMessages = wr1.cConstants + wr1.cPhase + num.c2 + wr1.cValidation + wr1.cMessages; // ConstantsPhase2ValidationMessages
let cBasicConstantsValidation = wr1.cBasic + wr1.cConstants + wr1.cValidation; // BasicConstantsValidation
let cBusinessConstantsValidation = wr1.cBusiness + wr1.cConstants + wr1.cValidation; // BusinessConstantsValidation
let cColorConstantsValidation = wr1.cColor + wr1.cConstants + wr1.cValidation; // ColorConstantsValidation
let cCommandConstantsValidation = wr1.cCommand + wr1.cConstants + wr1.cValidation; // CommandConstantsValidation
let cConfigurationConstantsValidation = wr1.cConfiguration + wr1.cConstants + wr1.cValidation; // ConfigurationConstantsValidation
let cCountryConstantsValidation = wr1.cCountry + wr1.cConstants + wr1.cValidation; // CountryConstantsValidation
let cElementConstantsValidation = wr1.cElement + wr1.cConstants + wr1.cValidation; // ElementConstantsValidation
let cGenericConstantsValidation = wr1.cGeneric + wr1.cConstants + wr1.cValidation; // GenericConstantsValidation
let cIsotopeConstantsValidation = wr1.cIsotope + wr1.cConstants + wr1.cValidation; // IsotopeConstantsValidation
let cKnotConstantsValidation = wr1.cKnot + wr1.cConstants + wr1.cValidation; // KnotConstantsValidation
let cLanguageConstantsValidation = wr1.cLanguage + wr1.cConstants + wr1.cValidation; // LanguageConstantsValidation
let cMessageConstantsValidation = wr1.cMessage + wr1.cConstants + wr1.cValidation; // MessageConstantsValidation
let cNumericConstantsValidation = wr1.cNumeric + wr1.cConstants + wr1.cValidation; // NumericConstantsValidation
let cPhonicConstantsValidation = wr1.cPhonic + wr1.cConstants + wr1.cValidation; // PhonicConstantsValidation
let cShapeConstantsValidation = wr1.cShape + wr1.cConstants + wr1.cValidation; // ShapeConstantsValidation
let cSystemConstantsValidation = wr1.cSystem + wr1.cConstants + wr1.cValidation; // SystemConstantsValidation
let cUnitConstantsValidation = wr1.cUnit + wr1.cConstants + wr1.cValidation; // UnitConstantsValidation
let cWordConstantsValidation = wr1.cWord + wr1.cConstants + wr1.cValidation; // WordConstantsValidation
let cSourceResourcesPath = wr1.cSource + wr1.cResources + wr1.cPath; // SourceResourcesPath
let cDestinationResourcesPath = wr1.cDestination + wr1.cResources + wr1.cPath; // BinaryResourcesPath
let cBinaryRootPath = wr1.cBinary + wr1.cRoot + wr1.cPath; // BinaryRootPath
let cBinaryReleasePath = wr1.cBinary + wr1.cRelease + wr1.cPath; // BinaryReleasePath
let cdevtty = bas.cForwardSlash + cdev + bas.cForwardSlash + phn.ctty; // /dev/tty

// Constants Filenames
let cbasic_constants_js = wr1.cbasic + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // basic.constants.js
let cbusiness_constants_js = wr1.cbusiness + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // business.constants.js
let ccolor_constants_js = wr1.ccolor + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // color.constants.js
let ccommand_constants_js = wr1.ccommand + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // command.constants.js
let cconfiguration_constants_js = wr1.cconfiguration + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // configuration.constants.js
let cconstant_constants_js = wr1.cconstant + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // constant.constants.js
let ccountry_constants_js = wr1.ccountry + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // country.constants
let celement_constants_js = wr1.celement + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // element.constants.js
let cgeneric_constants_js = wr1.cgeneric + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // generic.constants.js
let cisotope_constants_js = wr1.cisotope + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // isotope.constants.js
let cknot_constants_js = wr1.cknot + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // knot.constants.js
let clanguage_constants_js = wr1.clanguage + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // language.constants.js
let cmessage_constants_js = wr1.cmessage + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // message.constants.js
let cnumeric_constants_js = wr1.cnumeric + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // numeric.constants.js
let cphonic_constants_js = wr1.cphonic + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // phonic.constants.js
let cshape_constants_js = wr1.cshape + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // shape.constants.js
let csystem_constants_js = wr1.csystem + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // system.constants.js
let cunit_constants_js = wr1.cunit + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // unit.constants.js
let cword_constants_js = wr1.cword + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // word.constants.js

// System Paths
let cframeworkResourcesConfigurationPath = bas.cDoubleForwardSlash + wr1.cresources + bas.cDoubleForwardSlash + wr1.cconfiguration + bas.cDoubleForwardSlash; // //resources//configuration//

export default {
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
  [bas.cc + con.cSpaceIsColonSpace]: cSpaceIsColonSpace, // is:
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
  [bas.cc + con.cctrl_a]: cctrl_a, // ctrl+a
  [bas.cc + con.cctrl_b]: cctrl_b, // ctrl+b
  [bas.cc + con.cctrl_c]: cctrl_c, // ctrl+c
  [bas.cc + con.cctrl_d]: cctrl_d, // ctrl+d
  [bas.cc + con.cctrl_e]: cctrl_e, // ctrl+e
  [bas.cc + con.cctrl_f]: cctrl_f, // ctrl+f
  [bas.cc + con.cctrl_g]: cctrl_g, // ctrl+g
  [bas.cc + con.cctrl_h]: cctrl_h, // ctrl+h
  [bas.cc + con.cctrl_i]: cctrl_i, // ctrl+i
  [bas.cc + con.cctrl_j]: cctrl_j, // ctrl+j
  [bas.cc + con.cctrl_k]: cctrl_k, // ctrl+k
  [bas.cc + con.cctrl_l]: cctrl_l, // ctrl+l
  [bas.cc + con.cctrl_m]: cctrl_m, // ctrl+m
  [bas.cc + con.cctrl_n]: cctrl_n, // ctrl+n
  [bas.cc + con.cctrl_o]: cctrl_o, // ctrl+o
  [bas.cc + con.cctrl_p]: cctrl_p, // ctrl+p
  [bas.cc + con.cctrl_q]: cctrl_q, // ctrl+q
  [bas.cc + con.cctrl_r]: cctrl_r, // ctrl+r
  [bas.cc + con.cctrl_s]: cctrl_s, // ctrl+s
  [bas.cc + con.cctrl_t]: cctrl_t, // ctrl+t
  [bas.cc + con.cctrl_u]: cctrl_u, // ctrl+u
  [bas.cc + con.cctrl_v]: cctrl_v, // ctrl+v
  [bas.cc + con.cctrl_w]: cctrl_w, // ctrl+w
  [bas.cc + con.cctrl_x]: cctrl_x, // ctrl+x
  [bas.cc + con.cctrl_y]: cctrl_y, // ctrl+y
  [bas.cc + con.cctrl_z]: cctrl_z, // ctrl+z

  // System Terms
  [bas.cc + con.csystemConfigFileName]: csystemConfigFileName, // framework.system.json
  [bas.cc + con.capplicationConfigFileName]: capplicationConfigFileName, // application.system.json
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
  [bas.cc + con.cbasic_constants_js]: cbasic_constants_js, // basic.constants.js
  [bas.cc + con.cbusiness_constants_js]: cbusiness_constants_js, // business.constants.js
  [bas.cc + con.ccolor_constants_js]: ccolor_constants_js, // color.constants.js
  [bas.cc + con.ccommand_constants_js]: ccommand_constants_js, // command.constants.js
  [bas.cc + con.cconfiguration_constants_js]: cconfiguration_constants_js, // configuration.constants.js
  [bas.cc + con.cconstant_constants_js]: cconstant_constants_js, // constant.constants.js
  [bas.cc + con.ccountry_constants_js]: ccountry_constants_js, // country.constants
  [bas.cc + con.celement_constants_js]: celement_constants_js, // element.constants.js
  [bas.cc + con.cgeneric_constants_js]: cgeneric_constants_js, // generic.constants.js
  [bas.cc + con.cisotope_constants_js]: cisotope_constants_js, // isotope.constants.js
  [bas.cc + con.cknot_constants_js]: cknot_constants_js, // knot.constants.js
  [bas.cc + con.clanguage_constants_js]: clanguage_constants_js, // language.constants.js
  [bas.cc + con.cmessage_constants_js]: cmessage_constants_js, // message.constants.js
  [bas.cc + con.cnumeric_constants_js]: cnumeric_constants_js, // numeric.constants.js
  [bas.cc + con.cphonic_constants_js]: cphonic_constants_js, // phonic.constants.js
  [bas.cc + con.cshape_constants_js]: cshape_constants_js, // shape.constants.js
  [bas.cc + con.csystem_constants_js]: csystem_constants_js, // system.constants.js
  [bas.cc + con.cunit_constants_js]: cunit_constants_js, // unit.constants.js
  [bas.cc + con.cword_constants_js]: cword_constants_js, // word.constants.js

  // System Paths
  [bas.cc + con.cframeworkResourcesConfigurationPath]: cframeworkResourcesConfigurationPath, // //resources//configuration//
};
