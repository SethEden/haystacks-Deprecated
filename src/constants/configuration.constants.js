/**
 * @file configuration.constants.js
 * @module configuration.constants
 * @description Contains all re-usable configuration constants.
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @author Seth Hollingsead
 * @date 2021/11/09
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './basic.constants.js';
import * as gen from './generic.constants.js';
import * as sys from './system.constants.js';
import * as wr1 from './word1.constants.js';

// Configuration Settings
export const crootPath = wr1.croot + wr1.cPath; // rootPath
export const cRootPath = wr1.cRoot + wr1.cPath; // RootPath
export const cappRootPath = gen.capp + wr1.cRoot + wr1.cPath; // appRootPath
export const cclientRootPath = wr1.cclient + wr1.cRoot + wr1.cPath; // clientRootPath
export const cframeworkRootPath = wr1.cframework + wr1.cRoot + wr1.cPath; // frameworkRootPath
export const cappConfigResourcesPath = gen.capp + wr1.cConfig + wr1.cResources + wr1.cPath; // appConfigResourcesPath
export const cframeworkResourcesPath = wr1.cframework + wr1.cResources + wr1.cPath; // frameworkResourcesPath
export const cclientMetaDataPath = wr1.cclient + wr1.cMetaData + wr1.cPath; // clientMetaDataPath
export const cclientCommandAliasesPath = wr1.cclient + wr1.cCommand + wr1.cAliases + wr1.cPath; // clientCommandAliasesPath
export const cclientWorkflowsPath = wr1.cclient + wr1.cWorkflows + wr1.cPath; // clientWorkflowsPath
export const cframeworkFullMetaDataPath = wr1.cframework + wr1.cFull + wr1.cMetaData + wr1.cPath; // frameworkFullMetaDataPath
export const cappConfigPath = gen.capp + wr1.cConfig + wr1.cPath; // appConfigPath
export const cframeworkConfigPath = wr1.cframework + wr1.cConfig + wr1.cPath; // frameworkConfigPath
export const cappConfigFiles = gen.capp + wr1.cConfig + wr1.cFiles; // appConfigFiles
export const cframeworkConfigFiles = wr1.cframework + wr1.cConfig + wr1.cFiles; // frameworkConfigFiles
export const cappConfigReferencePath = gen.capp + wr1.cConfig + wr1.cReference + wr1.cPath; // appConfigReferencePath
export const cframeworkCommandAliasesPath = wr1.cframework + wr1.cCommand + wr1.cAliases + wr1.cPath; // frameworkCommandAliasesPath
export const cframeworkWorkflowsPath = wr1.cframework + wr1.cWorkflows + wr1.cPath; // frameworkWorkflowsPath
export const cdebugSetting = wr1.cdebug + wr1.cSetting; // debugSetting
export const cdebugSettings = wr1.cdebug + wr1.cSettings; // debugSettings
export const cdebugFiles = wr1.cdebug + wr1.cFiles; // debugFiles
export const cdebugFunctions = wr1.cdebug + wr1.cFunctions; // debugFunctions
export const cfigletFont = wr1.cfiglet + wr1.cFont; // figletFont
export const cincludeDateTimeStampInLogFiles = wr1.cinclude + wr1.cDate + wr1.cTime + wr1.cStamp + bas.cIn + gen.cLog + wr1.cFiles; // includeDateTimeStampInLogFiles
export const cLogFilePathAndName = wr1.cLog + wr1.cFile + wr1.cPath + wr1.cAnd + wr1.cName; // LogFilePathAndName
export const cDataLogFilePathAndName = wr1.cData + wr1.cLog + wr1.cFile + wr1.cPath + wr1.cAnd + wr1.cName; // DataLogFilePathAndName
export const cExecutionJournalFilePathAndName = wr1.cExecution + wr1.cJournal + wr1.cFile + wr1.cPath + wr1.cAnd + wr1.cName; // ExecutionJournalFilePathAndName
export const cResultsLogFilePathAndName = wr1.cResults + wr1.cLog + wr1.cFile + wr1.cPath + wr1.cAnd + wr1.cName; // ResultsLogFilePathAndName
export const cTestDataPath = wr1.cTest + wr1.cData + wr1.cPath; // TestDataPath
export const cconsoleLogEnabled = wr1.cconsole + wr1.cLog + wr1.cEnabled; // consoleLogEnabled
export const clogFileEnabled = wr1.clog + wr1.cFile + wr1.cEnabled; // logFileEnabled
export const cdateTimeStamp = wr1.cdate + wr1.cTime + wr1.cStamp; // dateTimeStamp
export const cdateStamp = wr1.cdate + wr1.cStamp; // dateStamp
export const ctimeStamp = wr1.ctime + wr1.cStamp; // timeStamp
export const clogFileName = gen.clog + wr1.cFileName; // logFileName
export const cIncludeDateTimeStampInLogFiles = wr1.cInclude + wr1.cDate + wr1.cTime + wr1.cStamp + bas.cIn + gen.cLog + wr1.cFiles; // IncludeDateTimeStampInLogFiles
export const cenableColorizedConsoleLogs = wr1.cenable + wr1.cColorized + wr1.cConsole + wr1.cLogs; // EnableColorizedConsoleLogs
export const cprimaryCommandDelimiter = wr1.cprimary + wr1.cCommand + wr1.cDelimiter; // primaryCommandDelimiter
export const csecondaryCommandDelimiter = wr1.csecondary + wr1.cCommand + wr1.cDelimiter; // secondaryCommandDelimiter
export const ctertiaryCommandDelimiter = wr1.ctertiary + wr1.cCommand + wr1.cDelimiter; // tertiaryCommandDelimiter
export const cenableBusinessRuleOutput = wr1.cenable + wr1.cBusiness + wr1.cRule + wr1.cOutput; // enableBusinessRuleOutput
export const cenableBusinessRulePerformanceMetrics = wr1.cenable + wr1.cBusiness + wr1.cRule + wr1.cPerformance + wr1.cMetrics; // cenableBusinessRulePerformanceMetrics
export const cbusinessRulesNamesPerformanceTrackingStack = wr1.cbusiness + wr1.cRules + wr1.cNames + wr1.cPerformance + wr1.cTracking + wr1.cStack; // businessRulesNamesPerformanceTrackingStack
export const cbusinessRulesPerformanceTrackingStack = wr1.cbusiness + wr1.cRules + wr1.cPerformance + wr1.cTracking + wr1.cStack; // businessRulesPerformanceTrackingStack
export const cbusinessRulesPerformanceAnalysisStack = wr1.cbusiness + wr1.cRules + wr1.cPerformance + wr1.cAnalysis + wr1.cStack; // businessRulesPerformanceAnalysisStack
export const cenableCommandPerformanceMetrics = wr1.cenable + wr1.cCommand + wr1.cPerformance + wr1.cMetrics; // enableCommandPerformanceMetrics
export const ccommandNamesPerformanceTrackingStack = wr1.ccommand + wr1.cNames + wr1.cPerformance + wr1.cTracking + wr1.cStack; // commandNamesPerformanceTrackingStack
export const ccommandsPerformanceTrackingStack = wr1.ccommands + wr1.cPerformance + wr1.cTracking + wr1.cStack; // commandsPerformanceTrackingStack
export const ccommandsPerformanceAnalysisStack = wr1.ccommands + wr1.cPerformance + wr1.cAnalysis + wr1.cStack; // commandsPerformanceAnalysisStack
export const cclearBusinessRulesPerformanceDataAfterAnalysis = wr1.cclear + wr1.cBusiness + wr1.cRules + wr1.cPerformance + wr1.cData + wr1.cAfter + wr1.cAnalysis; // clearBusinessRulesPerformanceDataAfterAnalysis
export const cclearCommandPerformanceDataAfterAnalysis = wr1.cclear + wr1.cCommand + wr1.cPerformance + wr1.cData + wr1.cAfter + wr1.cAnalysis; // clearCommandPerformanceDataAfterAnalysis
export const cprintDataHiveToLogFile = wr1.cprint + wr1.cData + wr1.cHive + wr1.cTo + gen.cLog + wr1.cFile; // printDataHiveToLogFile

// Test Time Tracking
export const cBeginDateTimeStamp = wr1.cBegin + sys.cDateTimeStamp; // BeginDateTimeStamp
export const cEndDateTimeStamp = wr1.cEnd + sys.cDateTimeStamp; // EndDateTimeStamp

export const cBusinessRulePerformanceTrackingStack = wr1.cBusiness + wr1.cRule + wr1.cPerformance + wr1.cTracking + wr1.cStack; // BusinessRulePerformanceTrackingStack
export const cBusinessRuleNamesPerformanceTrackingStack = wr1.cBusiness + wr1.cRule + wr1.cNames + wr1.cPerformance + wr1.cTracking + wr1.cStack; // BusinessRuleNamesPerformanceTrackingStack
