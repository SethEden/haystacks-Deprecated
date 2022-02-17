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
export const cENV = bas.cEN + bas.cV; // ENV
export const cLOG = bas.cLO + bas.cG; // LOG
export const cENVIRONMENT = phn.cENV + bas.cIR + bas.cON + phn.cMENT; // ENVIRONMENT
export const cITERATION = bas.cIT + bas.cER + bas.cAT + bas.cIO + bas.cN; // ITERATION
export const cSTYLE = bas.cST + bas.cYL + bas.cE; // STYLE

// Compound System Words
export const cunderline = wr1.cunder + wr1.cline; // underline
export const cUnderline = wr1.cUnder + wr1.cline; // Underline
export const cwithText = wr1.cwith + wr1.cText; // withText
export const cWithText = wr1.cWith + wr1.cText; // WithText
export const cDebugTest = wr1.cDebug + wr1.cTest; // DebugTest
export const cDebugPage = wr1.cDebug + wr1.cPage; // DebugPage
export const cDebugTestExhaustive = cDebugTest + wr1.cExhaustive; // DebugTestExhaustive
export const cDebugForceMessageToLogFile = wr1.cDebug + wr1.cForce + wr1.cMessage + bas.cTo + wr1.cLog + wr1.cFile; // DebugForceMessageToLogFile
export const cDebugTestData = cDebugTest + wr1.cData; // DebugTestData
export const cDebugPageScripts = cDebugPage + wr1.cScripts; // DebugPageScripts
export const cDebugPageData = cDebugPage + wr1.cData; // DebugPageData
export const cDebugKeywords = wr1.cDebug + wr1.cKeywords; // DebugKeywords
export const cLogBrowserActions = wr1.cLog + wr1.cBrowser + wr1.cActions; // LogBrowserActions
export const cJournalBrowserActions = wr1.cJournal + wr1.cBrowser + wr1.cActions; // JournalBrowserActions
export const cDebugBrowserActions = wr1.cDebug + wr1.cBrowser + wr1.cActions; // DebugBrowserActions
export const cDebugSelectors = wr1.cDebug + wr1.cSelectors; // DebugSelectors
export const cTestAutomation = wr1.cTest + wr1.cAutomation; // TestAutomation
export const cNumberOfRows = wr1.cNumber + wr1.cOf + wr1.cRows; // NumberOfRows
export const cMasterRowNumber = wr1.cMaster + wr1.cRow + wr1.cNumber; // MasterRowNumber
export const cEnvironmentRow = wr1.cEnvironment + wr1.cRow; // EnvironmentRow
export const cEnvironmentRowNumber = cEnvironmentRow + wr1.cNumber; // EnvironmentRowNumber
export const cPageScript = wr1.cPage + wr1.cScript; // PageScript
export const cIntermediatePath = wr1.cIntermediate + wr1.cPath; // IntermediatePath
export const cTimeStamp = wr1.cTime + wr1.cStamp; // TimeStamp
export const cPageScriptTimeStamp = cPageScript + cTimeStamp; // PageScriptTimeStamp
export const cDateTimeStamp = wr1.cDate + cTimeStamp; // DateTimeStamp
export const cScriptDateStamp = wr1.cScript + wr1.cDate + wr1.cStamp; // ScriptDateStamp
export const cScriptTimeStamp = wr1.cScript + cTimeStamp; // ScriptTimeStamp
export const cKeywordTimeStamp = wr1.cKeyword + cTimeStamp; // KeywordTimeStamp
export const cTestTimeStamp = wr1.cTest + cTimeStamp; // TestTimeStamp
export const cScriptDateTimeStamp = wr1.cScript + cDateTimeStamp; // ScriptDateTimeStamp
export const cBeginScriptTimeStamp = wr1.cBegin + cScriptTimeStamp; // BeginScriptTimeStamp
export const cEndScriptTimeStamp = wr1.cEnd + cScriptTimeStamp; // EndScriptTimeStamp
export const cBeginTestTimeStamp = wr1.cBegin + cTestTimeStamp; // BeginTestTimeStamp
export const cEndTestTimeStamp = wr1.cEnd + cTestTimeStamp; // EndTestTimeStamp
export const cBeginPageScriptTimeStamp = wr1.cBegin + cPageScriptTimeStamp; // BeginPageScriptTimeStamp
export const cEndPageScriptTimeStamp = wr1.cEnd + cPageScriptTimeStamp; // EndPageScriptTimeStamp
export const cBeginKeywordTimeStamp = wr1.cBegin + cKeywordTimeStamp; // BeginKeywordTimeStamp
export const cEndKeywordTimeStamp = wr1.cEnd + cKeywordTimeStamp; // EndKeywordTimeStamp
export const cRuntime = wr1.cRun + wr1.ctime; // Runtime
export const cRunTime = wr1.cRun + wr1.cTime; // RunTime
export const cBrowserName = wr1.cBrowser + wr1.cName; // BrowserName
export const cHostName = wr1.cHost + wr1.cName; // HostName
export const cTestRunID = wr1.cTest + wr1.cRun + wr1.cID; // TestRunID
export const cfilesLists = wr1.cfiles + wr1.cLists; // filesLists
export const cFileTypes = wr1.cFile + wr1.cTypes; // FileTypes
export const cfilename = wr1.cfile + wr1.cname; // filename
export const cFilename = wr1.cFile + wr1.cname; // Filename
export const cFileName = wr1.cFile + wr1.cName; // FileName
export const cfilenames = cfilename + bas.cs; // filenames
export const cFilenames = cFilename + bas.cs; // Filenames
export const cFileNames = cFileName + bas.cs; // FileNames
export const cPreValidateFileName = phn.cPre + wr1.cValidate + cFileName; // PreValidateFileName
export const cAsynchSingular = wr1.cAsynch + wr1.cSingular; // AsynchSingular
export const cSynchSingular = wr1.cSynch + wr1.cSingular; // SynchSingular
export const cParallelMultiUnified = wr1.cParallel + wr1.cMulti + wr1.cUnified; // ParallelMultiUnified
export const cAllowableCharacters = wr1.cAllowable + wr1.cCharacters; // AllowableCharacters
export const cSpecialCharacters = wr1.cSpecial + wr1.cCharacters; // SpecialCharacters
export const cTimeoutOverride = wr1.cTimeout + wr1.cOverride; // TimeoutOverride
export const cDwellTime = wr1.cDwell + wr1.cTime; // DwellTime
export const cFileCounter = wr1.cFile + wr1.cCounter; // FileCounter
export const cDeltaT = gen.cDelta + bas.cT; // DeltaT
export const cvisibilityCheck = wr1.cvisibility + wr1.cCheck; // visibilityCheck
export const cVisibilityCheck = wr1.cVisibility + wr1.cCheck; // VisibilityCheck
export const cOperatingSystem = wr1.cOperating + wr1.cSystem; // OperatingSystem
export const cinnerText = wr1.cinner + wr1.cText; // innerText
export const cInnerText = wr1.cInner + wr1.cText; // InnerText
export const cinnerHTML = wr1.cinner + wr1.cHTML; // innerHTML
export const cInnerHTML = wr1.cInner + wr1.cHTML; // InnerHTML
export const cTestData = wr1.cTest + wr1.cData; // TestData
export const cProcessingTimeout = wr1.cProcessing + wr1.cTimeout; // ProcessingTimeout
export const cIngestionCompleteDwellTime = wr1.cIngestion + wr1.cComplete + cDwellTime; // IngestionCompleteDwellTime
export const cRowNumber = wr1.cRow + wr1.cNumber; // RowNumber
export const cUsername = wr1.cUser + wr1.cname; // Username
export const cPassword = wr1.cPass + wr1.cword; // Password
export const cProjectName = wr1.cProject + wr1.cName; // ProjectName
export const cProjectDescription = wr1.cProject + wr1.cDescription; // ProjectDescription
export const cTestDataFileName = wr1.cTest + wr1.cData + cFileName; // TestDataFileName
export const cShareEmail = wr1.cShare + wr1.cEmail; // ShareEmail
export const cAccessLevel = wr1.cAccess + wr1.cLevel; // AccessLevel
export const cFileNumber = wr1.cFile + wr1.cNumber; // FileNumber
export const cConfigurationName = wr1.cConfiguration + wr1.cName; // ConfigurationName
export const cConfigurationElement = wr1.cConfiguration + wr1.cElement; // ConfigurationElement
export const cConfigurationElements = cConfigurationElement + bas.cs; // ConfigurationElements
export const cVersionControl = wr1.cVersion + wr1.cControl; // VersionControl
export const cScriptRunTime = wr1.cScript + cRunTime; // ScriptRunTime
export const cTestRunTime = wr1.cTest + cRunTime; // TestRunTime
export const ctypeText = wr1.ctype + wr1.cText; // typeText
export const cTypeText = wr1.cType + wr1.cText; // TypeText
export const cAbreviatedSelectors = wr1.cAbreviated + wr1.cSelectors; // AbreviatedSelectors
export const cAbreviatedSelectorsInLogs = cAbreviatedSelectors + bas.cIn + wr1.cLogs; // AbreviatedSelectorsInLogs
export const cselectorTimeout = wr1.cselector + wr1.cTimeout; // selectorTimeout
export const cchildElementCount = wr1.cchild + wr1.cElement + wr1.cCount; // childElementCount
export const cUnderscore = wr1.cUnder + wr1.cscore; // Underscore
export const cTestBureau = wr1.cTest + wr1.cBureau; // TestBureau
export const caddWithText = wr1.c_add + wr1.cWith + wr1.cText; // addWithText
export const caddTimeout = wr1.c_add + wr1.cTimeout; // addTimeout
export const caddParent = wr1.c_add + wr1.cParent; // addParent
export const caddFindValue = wr1.c_add + wr1.cFind + wr1.cValue; // addFindValue
export const caddNth = wr1.c_add + wr1.cNth; // addNth
export const caddSibling = wr1.c_add + wr1.cSibling; // addSibling
export const caddFilter = wr1.c_add + wr1.cFilter; // addFilter
export const cgenerateRandom = wr1.cgenerate + wr1.cRandom; // generateRandom
export const crandomlyGenerate = wr1.crandomly + wr1.cGenerate; // randomlyGenerate
export const cMixedCase = wr1.cMixed + wr1.cCase; // MixedCase
export const cUpperCase = wr1.cUpper + wr1.cCase; // UpperCase
export const cLowerCase = wr1.cLower + wr1.cCase; // LowerCase
export const cByLength = wr1.cBy + wr1.cLength; // ByLength
export const cSpecialCharacter = wr1.cSpecial + wr1.cCharacter; // SpecialCharacter
export const cWithSpecialCharacters = wr1.cWith + cSpecialCharacters; // WithSpecialCharacters
export const cTextByLength = wr1.cText + cByLength; // TextByLength
export const cTextWithSpecialCharacters = wr1.cText + cWithSpecialCharacters; // TextWithSpecialCharacters
export const cTextWithSpecialCharactersByLength = cTextWithSpecialCharacters + cByLength; // TextWithSpecialCharactersByLength
export const cAlphaNumeric = wr1.cAlpha + wr1.cNumeric; // AlphaNumeric
export const cAlphaNumericCode = cAlphaNumeric + wr1.cCode; // AlphaNumericCode
export const cAlphaNumericCodeByLength = cAlphaNumericCode + cByLength; // AlphaNumericCodeByLength
export const cNumericCode = wr1.cNumeric + wr1.cCode; // NumericCode
export const cNumericCodeByLength = cNumericCode + cByLength; // NumericCodeByLength
export const cAlphaNumericCodeWithSpecialCharacters = cAlphaNumericCode + cWithSpecialCharacters; // AlphaNumericCodeWithSpecialCharacters
export const cAlphaNumericCodeWithSpecialCharactersByLength = cAlphaNumericCodeWithSpecialCharacters + cByLength; // AlphaNumericCodeWithSpecialCharactersByLength
export const cSpecialCharacterCodeByLength = cSpecialCharacter + wr1.cCode + cByLength; // SpecialCharacterCodeByLength
export const cvalidEmail = wr1.cvalid + wr1.cEmail; // validEmail
export const cValidEmail = wr1.cValid + wr1.cEmail; // ValidEmail
export const cInvalidEmail = bas.cIn + cvalidEmail; // InvalidEmail
export const cgenerateValidEmail = wr1.cgenerate + cValidEmail; // generateValidEmail
export const cgenerateInvalidEmail = wr1.cgenerate + cInvalidEmail; // generateInvalidEmail
export const cRandomValidEmail = wr1.cRandom + cValidEmail; // RandomValidEmail
export const cRandomInvalidEmail = wr1.cRandom + cInvalidEmail; // RandomInvalidEmail
export const cLetterOr = wr1.cLetter + bas.cOr; // LetterOr
export const cLetterOrSpecialCharacter = cLetterOr + cSpecialCharacter; // LetterOrSpecialCharacter
export const cLetterOrNumberOrSpecialCharacter = cLetterOr + wr1.cNumber + wr1.cOr + cSpecialCharacter; // LetterOrNumberOrSpecialCharacter
export const cAlphaNumericCharacter = cAlphaNumeric + wr1.cCharacter; // AlphaNumericCharacter
export const cSuffixAndDomain = wr1.cSuffix + wr1.cAnd + wr1.cDomain; // SuffixAndDomain
export const cWithSpecificSuffixAndDomainName = wr1.cWith + wr1.cSpecific + wr1.cSuffix + wr1.cAnd + wr1.cDomain + wr1.cName; // WithSpecificSuffixAndDomainName
export const cNumericCharacter = wr1.cNumeric + wr1.cCharacter; // NumericCharacter
export const cNumberInRange = wr1.cNumber + bas.cIn + wr1.cRange; // NumberInRange
export const cBooleanValue = wr1.cBoolean + wr1.cValue; // BooleanValue
export const cAlphabeticCharacter = wr1.cAlphabetic + wr1.cCharacter; // AlphabeticCharacter
export const cCarriageReturn = wr1.cCarriage + wr1.cReturn; // CarriageReturn
export const cDashboardLogs = wr1.cDashboard + wr1.cLogs; // DashboardLogs
export const cVideoLogs = wr1.cVideo + wr1.cLogs; // VideoLogs
export const cForwardSlash = wr1.cForward + wr1.cSlash; // ForwardSlash
export const cBackSlash = wr1.cBack + wr1.cSlash; // BackSlash
export const cPage_Keywords = wr1.cPage + bas.cUnderscore + wr1.cKeywords; // Page_Keywords
export const cnavigateTo = wr1.cnavigate + bas.cTo; // navigateTo
export const cNavigateTo = wr1.cNavigate + bas.cTo; // NavigateTo
export const cBrowserRefresh = wr1.cBrowser + wr1.cRefresh; // BrowserRefresh
export const cSpaceIsColonSpace = bas.cSpace + bas.cis + bas.cColon + bas.cSpace; // is:
export const cdeployApplication = wr1.cdeploy + wr1.cApplication; // deployApplication
export const cdeployMetaData = wr1.cdeploy + wr1.cMetaData // deployMetaData
export const creleaseApplication = wr1.crelease + wr1.cApplication; // releaseApplication
export const cbackground = wr1.cback + wr1.cground; // background
export const cBackground = wr1.cBack + wr1.cground; // Background
export const cConfiguration_Colors = wr1.cConfiguration + bas.cUnderscore + wr1.cColors; // Configuration_Colors
export const cColorData = wr1.cColor + wr1.cData; // ColorData
export const cColorName = wr1.cColor + wr1.cName; // ColorName
export const cbusinessRule = wr1.cbusiness + wr1.cRule; // businessRule
export const cBusinessRule = wr1.cBusiness + wr1.cRule; // BusinessRule
export const cbusinessRules = wr1.cbusiness + wr1.cRules; // businessRules
export const cBusinessRules = wr1.cBusiness + wr1.cRules; // BusinessRules
export const ccommandsBlob = wr1.ccommands + wr1.cBlob; // commandsBlob
export const cCommandsBlob = wr1.cCommands + wr1.cBlob; // CommandsBlob
export const crulesLibrary = wr1.crules + wr1.cLibrary; // rulesLibrary
export const cframework = wr1.cframe + wr1.cwork; // framework
export const cFramework = wr1.cFrame + wr1.cwork; // Framework
export const cCommandsAliases = wr1.cCommands + wr1.cAliases; // CommandsAliases
export const cCommandWorkflows = wr1.cCommand + wr1.cWorkflows; // CommandWorkflows
export const cStandardDeviation = wr1.cStandard + wr1.cDeviation; // StandardDeviation
export const cHexValue = phn.cHex + wr1.cValue; // HexValue
export const cexportconst = wr1.cexport + bas.cSpace + gen.cconst; // export-const // With a space not a dash, but the validation code is looking for that exact string.
export const cExportConst = wr1.cExport + bas.cSpace + gen.cConst; // smuggle something
export const cDataStorage = wr1.cData + wr1.cStorage; // DataStorage
export const cSource1 = wr1.cSource + num.c1; // Source1
export const cSource2 = wr1.cSource + num.c2; // Source2
export const cbigInteger = wr1.cbig + wr1.cInteger; // bigInteger
export const cnumberOfCharactersToGenerate = wr1.cnumber + bas.cOf + wr1.cCharacters + bas.cTo + wr1.cGenerate; // numberOfCharactersToGenerate
export const cgenerateSpecialCharacters = wr1.cgenerate + cSpecialCharacters; // generateSpecialCharacters
export const callowableSpecialCharacters = wr1.callowable + cSpecialCharacters; // allowableSpecialCharacters
export const cspecifiedSuffixAndDomain = wr1.cspecified + cSuffixAndDomain; // specifiedSuffixAndDomain
export const cfailureMode = wr1.cfailure + wr1.cMode; // failureMode
export const cWithoutThe = wr1.cWithout + bas.cSpace + wr1.cthe; // Without the
export const cwasCompleted = wr1.cwas + bas.cSpace + wr1.ccompleted; // was completed
export const cGenerateA = wr1.cGenerate + bas.cSpace + bas.ca; // Generate a
export const cprogramLoop = wr1.cprogram + bas.cSpace + wr1.cloop; // program loop
export const candPrefix = wr1.cand + bas.cSpace + wr1.cprefix; // and prefix
export const candSuffix = wr1.cand + bas.cSpace + wr1.csuffix; // and suffix
export const cdomainSpaceName = wr1.cdomain + bas.cSpace + wr1.cname // domain name
export const candSpaceDomainSpaceName = wr1.cand + bas.cSpace + cdomainSpaceName; // and domain name
export const ccurrentMasterStringArrayElement = wr1.ccurrent + wr1.cMaster + wr1.cString + wr1.cArray + wr1.cElement; // currentMasterStringArrayElement
export const cLehmerCodeArray = wr1.cLehmer + wr1.cCode + wr1.cArray; // LehmerCodeArray
export const creturnData = wr1.creturn + wr1.cData; // returnData
export const cCamelCase = wr1.cCamel + wr1.cCase; // CamelCase

// Logging Styles Constants
export const cModuleFontStyle = wr1.cModule + wr1.cFont + wr1.cStyle; // ModuleFontStyle
export const cFunctionFontStyle = wr1.cFunction + wr1.cFont + wr1.cStyle; // FunctionFontStyle
export const cMessageFontStyle = wr1.cMessage + wr1.cFont + wr1.cStyle; // MessageFontStyle
export const cDataFontStyle = wr1.cData + wr1.cFont + wr1.cStyle; // DataFontStyle
export const cModuleFontColor = wr1.cModule + wr1.cFont + wr1.cColor; // ModuleFontColor
export const cFunctionFontColor = wr1.cFunction + wr1.cFont + wr1.cColor; // FunctionFontColor
export const cMessageFontColor = wr1.cMessage + wr1.cFont + wr1.cColor; // MessageFontColor
export const cDataFontColor = wr1.cData + wr1.cFont + wr1.cColor; // DataFontColor
export const cModuleFontBackgroundColor = wr1.cModule + wr1.cFont + cBackground + wr1.cColor; // ModuleFontBackgroundColor
export const cFunctionFontBackgroundColor = wr1.cFunction + wr1.cFont + cBackground + wr1.cColor; // FunctionFontBackgroundColor
export const cMessageFontBackgroundColor = wr1.cMessage + wr1.cFont + cBackground + wr1.cColor; // MessageFontBackgroundColor
export const cDataFontBackgroundColor = wr1.cData + wr1.cFont + cBackground + wr1.cColor; // DataFontBackgroundColor

// File Types
export const cCatia = bas.cCa + bas.cti + bas.ca; // Catia
export const cDocument = wr1.cDocument; // Document
export const cDocuments = cDocument + bas.cs; // Documents
export const cDraft = bas.cDr + phn.caft; // Draft
export const cDWG = bas.cDW + bas.cG; // DWG
export const cHoops = bas.cH + wr1.coops; // Hoops
export const cHOOPS = bas.cH + wr1.cOOPS; // HOOPS
export const cImage = bas.cIm + phn.cage; // Image
export const cImages = cImage + bas.cs; // Images
export const cInventor = phn.cInv + bas.cen + phn.ctor; // Inventor
export const cNeutral = bas.cNe + bas.cut + phn.cral; // Neutral
export const cNX = bas.cNX; // NX
export const cParasolid = bas.cP + phn.cara + wr1.csolid; // Parasolid
export const cProE = phn.cPro + bas.cE; // ProE
export const cRhino = bas.cRh + phn.cino; // Rhino
export const cSolidEdge = wr1.cSolid + wr1.cEdge; // SolidEdge
export const cSolidWorks = wr1.cSolid + wr1.cWorks; // SolidWorks
export const cvrml = bas.cvr + bas.cml; // vrml
export const cVrml = bas.cVr + bas.cml; // Vrml
export const cVRML = bas.cVR + bas.cML; // VRML

// UI Element Types
export const cButton = bas.cBu + bas.ctt + bas.con; // Button

// Environment Variables
export const cQA = bas.cQA; // QA
export const cdev = bas.cde + bas.cv; // dev
export const cDEV = bas.cDE + bas.cV; // DEV
export const cProd = phn.cPro + bas.cd; // Prod
export const cPROD = phn.cPRO + bas.cD; // PROD
export const cPre = phn.cPre; // Pre
export const cPRE = phn.cPRE; // PRE
export const cPreProd = phn.cPre + cProd; // PreProd
export const cPREPROD = phn.cPRE + cPROD; // PREPROD

// Key Combinations
export const cctrl_a = phn.cctrl + bas.cPlus + bas.ca; // ctrl+a
export const cctrl_b = phn.cctrl + bas.cPlus + bas.cb; // ctrl+b
export const cctrl_c = phn.cctrl + bas.cPlus + bas.cc; // ctrl+c
export const cctrl_d = phn.cctrl + bas.cPlus + bas.cd; // ctrl+d
export const cctrl_e = phn.cctrl + bas.cPlus + bas.ce; // ctrl+e
export const cctrl_f = phn.cctrl + bas.cPlus + bas.cf; // ctrl+f
export const cctrl_g = phn.cctrl + bas.cPlus + bas.cg; // ctrl+g
export const cctrl_h = phn.cctrl + bas.cPlus + bas.ch; // ctrl+h
export const cctrl_i = phn.cctrl + bas.cPlus + bas.ci; // ctrl+i
export const cctrl_j = phn.cctrl + bas.cPlus + bas.cj; // ctrl+j
export const cctrl_k = phn.cctrl + bas.cPlus + bas.ck; // ctrl+k
export const cctrl_l = phn.cctrl + bas.cPlus + bas.cl; // ctrl+l
export const cctrl_m = phn.cctrl + bas.cPlus + bas.cm; // ctrl+m
export const cctrl_n = phn.cctrl + bas.cPlus + bas.cn; // ctrl+n
export const cctrl_o = phn.cctrl + bas.cPlus + bas.co; // ctrl+o
export const cctrl_p = phn.cctrl + bas.cPlus + bas.cp; // ctrl+p
export const cctrl_q = phn.cctrl + bas.cPlus + bas.cq; // ctrl+q
export const cctrl_r = phn.cctrl + bas.cPlus + bas.cr; // ctrl+r
export const cctrl_s = phn.cctrl + bas.cPlus + bas.cs; // ctrl+s
export const cctrl_t = phn.cctrl + bas.cPlus + bas.ct; // ctrl+t
export const cctrl_u = phn.cctrl + bas.cPlus + bas.cu; // ctrl+u
export const cctrl_v = phn.cctrl + bas.cPlus + bas.cv; // ctrl+v
export const cctrl_w = phn.cctrl + bas.cPlus + bas.cw; // ctrl+w
export const cctrl_x = phn.cctrl + bas.cPlus + bas.cx; // ctrl+x
export const cctrl_y = phn.cctrl + bas.cPlus + bas.cy; // ctrl+y
export const cctrl_z = phn.cctrl + bas.cPlus + bas.cz; // ctrl+z

// System Terms
export const csystemConfigFileName = wr1.cframework + bas.cDot + wr1.csystem + gen.cDotjson; // framework.system.json
export const capplicationConfigFileName = wr1.capplication + bas.cDot + wr1.csystem + gen.cDotjson; // application.system.json
export const cappConfigPath = gen.capp + wr1.cConfig + wr1.cPath; // appConfigPath
export const cframeworkConfigPath = wr1.cframework + wr1.cConfig + wr1.cPath; // frameworkConfigPath
export const cApplicationName = wr1.cApplication + wr1.cName; // ApplicationName
export const cApplicationRootPath = wr1.cApplication + wr1.cRoot + wr1.cPath; // ApplicationRootPath
export const cApplicationCleanedRootPath = wr1.cApplication + wr1.cCleaned + wr1.cRoot + wr1.cPath; // ApplicationCleanedRootPath
export const cConfigurationPath = wr1.cConfiguration + wr1.cPath; // ConfigurationPath
export const cApplicationVersionNumber = wr1.cApplication + wr1.cVersion + wr1.cNumber; // ApplicationVersionNumber
export const cApplicationDescription = wr1.cApplication + wr1.cDescription; // ApplicationDescription
export const cDataPath = wr1.cData + wr1.cPath; // DataPath
export const cCtempPath = bas.cc + bas.cColon + bas.cForwardSlash + phn.ctemp + bas.cForwardSlash; // CtempPath
export const cPageDataPath = wr1.cPage + cDataPath; // PageDataPath
export const cWorkflowDataPath = wr1.cWorkflow + cDataPath; // WorkflowDataPath
export const cKeywordsDataPath = wr1.cKeywords + cDataPath; // KeywordsDataPath
export const cLocatorsDataPath = wr1.cLocators + cDataPath; // LocatorsDataPath
export const cClientConstantsPath = wr1.cClient + wr1.cConstants + wr1.cPath; // ClientConstantsPath
export const cSystemConstantsPath = wr1.cSystem + wr1.cConstants + wr1.cPath; // SystemConstantsPath
export const cSystemConstantsPathActual = wr1.csrc + bas.cForwardSlash + cFramework + bas.cForwardSlash + wr1.cConstants + bas.cForwardSlash; // src/Framework/Constants/
export const cclientBusinessRules = wr1.cclient + wr1.cBusiness + wr1.cRules; // clientBusinessRules
export const cclientCommands = wr1.cclient + wr1.cCommands; // clientCommands
export const cclientRulesLibrary = wr1.cclient + wr1.cRules + wr1.cLibrary; // clientRulesLibrary
export const cCommandQueue = wr1.cCommand + wr1.cQueue; // CommandQueue
export const cConstantsValidationData = wr1.cConstants + wr1.cValidation + wr1.cData; // ConstantsValidationData
export const cConstantsShortNames = wr1.cConstants + wr1.cShort + wr1.cNames; // ConstantsShortNames
export const cConstantsFileNames = wr1.cConstants + wr1.cFile + wr1.cNames; // ConstantsFileNames
export const cConstantsPrefix = wr1.cConstants + wr1.cPrefix; // ConstantsPrefix
export const cConstantsFilePaths = wr1.cConstants + wr1.cFile + wr1.cPaths; // ConstantsFilePaths
export const cConstantsPhase1ValidationMessages = wr1.cConstants + wr1.cPhase + num.c1 + wr1.cValidation + wr1.cMessages; // ConstantsPhase1ValidationMessages
export const cConstantsPhase2ValidationMessages = wr1.cConstants + wr1.cPhase + num.c2 + wr1.cValidation + wr1.cMessages; // ConstantsPhase2ValidationMessages
export const cBasicConstantsValidation = wr1.cBasic + wr1.cConstants + wr1.cValidation; // BasicConstantsValidation
export const cBusinessConstantsValidation = wr1.cBusiness + wr1.cConstants + wr1.cValidation; // BusinessConstantsValidation
export const cColorConstantsValidation = wr1.cColor + wr1.cConstants + wr1.cValidation; // ColorConstantsValidation
export const cCommandConstantsValidation = wr1.cCommand + wr1.cConstants + wr1.cValidation; // CommandConstantsValidation
export const cConfigurationConstantsValidation = wr1.cConfiguration + wr1.cConstants + wr1.cValidation; // ConfigurationConstantsValidation
export const cCountryConstantsValidation = wr1.cCountry + wr1.cConstants + wr1.cValidation; // CountryConstantsValidation
export const cElementConstantsValidation = wr1.cElement + wr1.cConstants + wr1.cValidation; // ElementConstantsValidation
export const cGenericConstantsValidation = wr1.cGeneric + wr1.cConstants + wr1.cValidation; // GenericConstantsValidation
export const cIsotopeConstantsValidation = wr1.cIsotope + wr1.cConstants + wr1.cValidation; // IsotopeConstantsValidation
export const cKnotConstantsValidation = wr1.cKnot + wr1.cConstants + wr1.cValidation; // KnotConstantsValidation
export const cLanguageConstantsValidation = wr1.cLanguage + wr1.cConstants + wr1.cValidation; // LanguageConstantsValidation
export const cMessageConstantsValidation = wr1.cMessage + wr1.cConstants + wr1.cValidation; // MessageConstantsValidation
export const cNumericConstantsValidation = wr1.cNumeric + wr1.cConstants + wr1.cValidation; // NumericConstantsValidation
export const cPhonicConstantsValidation = wr1.cPhonic + wr1.cConstants + wr1.cValidation; // PhonicConstantsValidation
export const cShapeConstantsValidation = wr1.cShape + wr1.cConstants + wr1.cValidation; // ShapeConstantsValidation
export const cSystemConstantsValidation = wr1.cSystem + wr1.cConstants + wr1.cValidation; // SystemConstantsValidation
export const cUnitConstantsValidation = wr1.cUnit + wr1.cConstants + wr1.cValidation; // UnitConstantsValidation
export const cWordConstantsValidation = wr1.cWord + wr1.cConstants + wr1.cValidation; // WordConstantsValidation
export const cSourceResourcesPath = wr1.cSource + wr1.cResources + wr1.cPath; // SourceResourcesPath
export const cDestinationResourcesPath = wr1.cDestination + wr1.cResources + wr1.cPath; // BinaryResourcesPath
export const cBinaryRootPath = wr1.cBinary + wr1.cRoot + wr1.cPath; // BinaryRootPath
export const cBinaryReleasePath = wr1.cBinary + wr1.cRelease + wr1.cPath; // BinaryReleasePath
export const cdevtty = bas.cForwardSlash + cdev + bas.cForwardSlash + phn.ctty; // /dev/tty

// Constants Filenames
export const cbasic_constants_js = wr1.cbasic + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // basic.constants.js
export const cbusiness_constants_js = wr1.cbusiness + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // business.constants.js
export const ccolor_constants_js = wr1.ccolor + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // color.constants.js
export const ccommand_constants_js = wr1.ccommand + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // command.constants.js
export const cconfiguration_constants_js = wr1.cconfiguration + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // configuration.constants.js
export const cconstant_constants_js = wr1.cconstant + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // constant.constants.js
export const ccountry_constants_js = wr1.ccountry + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // country.constants
export const celement_constants_js = wr1.celement + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // element.constants.js
export const cgeneric_constants_js = wr1.cgeneric + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // generic.constants.js
export const cisotope_constants_js = wr1.cisotope + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // isotope.constants.js
export const cknot_constants_js = wr1.cknot + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // knot.constants.js
export const clanguage_constants_js = wr1.clanguage + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // language.constants.js
export const cmessage_constants_js = wr1.cmessage + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // message.constants.js
export const cnumeric_constants_js = wr1.cnumeric + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // numeric.constants.js
export const cphonic_constants_js = wr1.cphonic + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // phonic.constants.js
export const cshape_constants_js = wr1.cshape + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // shape.constants.js
export const csystem_constants_js = wr1.csystem + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // system.constants.js
export const cunit_constants_js = wr1.cunit + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // unit.constants.js
export const cword_constants_js = wr1.cword + bas.cDot + wr1.cconstants + bas.cDot + bas.cjs; // word.constants.js

// System Paths
export const cframeworkName = wr1.chay + wr1.cstacks; // haystacks
export const cmetaDatadotJson = wr1.cmeta + wr1.cData + bas.cDot + gen.cjson; // metaData.json
export const cFrameworkDevelopRootPath = wr1.csrc + bas.cDoubleForwardSlash; // src//
export const cFrameworkProductionRootPath = wr1.cbin + bas.cDoubleForwardSlash; // bin//
export const cframeworkResourcesPath = wr1.cresources + bas.cDoubleForwardSlash; // resources//
export const cframeworkResourcesConfigurationPath = cframeworkResourcesPath + wr1.cconfiguration + bas.cDoubleForwardSlash; // resources//configuration//
export const cframeworkResourcesCommandAliasesPath = cframeworkResourcesPath + wr1.ccommands + bas.cDoubleForwardSlash; // resources//commands//
export const cframeworkResourcesWorkflowsPath = cframeworkResourcesPath + wr1.cworkflows + bas.cDoubleForwardSlash; // resources//workflows//
