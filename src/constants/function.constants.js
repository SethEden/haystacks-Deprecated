/**
 * @file function.constants.js
 * @module function.constants
 * @description Contains all re-usable function name constants, organized by file.
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:phonic.constants
 * @requires module:word1.constants
 * @author Seth Hollingsead
 * @date 2021/12/28
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './basic.constants.js';
import * as gen from './generic.constants.js';
import * as phn from './phonic.constants.js';
import * as wr1 from './word1.constants.js';

// commandBroker
// let cbootStrapCommands = wr1.cboot + wr1.cStrap + wr1.cCommands; // bootStrapCommands // Duplicate definition in the chiefCommander
// export const caddClientCommands = wr1.c_add + wr1.cClient + wr1.cCommands; // addClientCommands
export const cgetValidCommand = wr1.cget + wr1.cValid + wr1.cCommand; // getValidCommand
export const cgetCommandArgs = wr1.cget + wr1.cCommand + gen.cArgs; // getCommandArgs
export const cexecuteCommand = wr1.cexecute + wr1.cCommand; // executeCommand

// dataBroker
export const cscanDataPath = wr1.cscan + wr1.cData + wr1.cPath; // scanDataPath
export const cfindUniversalDebugConfigSetting = wr1.cfind + wr1.cUniversal + wr1.cDebug + wr1.cConfig + wr1.cSetting; // findUniversalDebugConfigSetting
export const cloadAllCsvData = wr1.cload + phn.cAll + gen.cCsv + wr1.cData; // loadAllCsvData
export const cloadAllXmlData = wr1.cload + phn.cAll + gen.cXml + wr1.cData; // LoadAllXmlData
export const cloadAllJsonData = wr1.cload + phn.cAll + gen.cJson + wr1.cData; // loadAllJsonData
export const cprocessCsvData = wr1.cprocess + gen.cCsv + wr1.cData; // processCsvData
export const csetupDataStorage = wr1.csetup + wr1.cData + wr1.cStorage; // setupDataStorage
export const cstoreData = wr1.cstore + wr1.cData; // storeData
export const cgetData = wr1.cget + wr1.cData; // getData
export const cclearData = wr1.cclear + wr1.cData; // clearData

// ruleBroker
export const cbootStrapBusinessRules = wr1.cboot + wr1.cStrap + wr1.cBusiness + wr1.cRules; // bootStrapBusinessRules
export const caddClientRules = wr1.c_add + wr1.cClient + wr1.cRules; // addClientRules
export const cprocessRules = wr1.cprocess + wr1.cRules; // processRules

// workflowBroker
export const cgetWorkflow = wr1.cget + wr1.cWorkflow; // getWorkflow

// rulesLibrary
export const cinitRulesLibrary = gen.cinit + wr1.cRules + wr1.cLibrary; // initRulesLibrary

// commandsLibrary
export const cinitCommandsLibrary = gen.cinit + wr1.cCommands + wr1.cLibrary; // initCommandsLibrary

// chiefCommander
export const cbootStrapCommands = wr1.cboot + wr1.cStrap + wr1.cCommands; // bootStrapCommands
export const caddClientCommands = wr1.c_add + wr1.cClient + wr1.cCommands; // addClientCommands
export const cloadCommandAliasesFromPath = wr1.cload + wr1.cCommand + wr1.cAliases + wr1.cFrom + wr1.cPath; // loadCommandAliasesFromPath
export const cenqueueCommand = wr1.cenqueue + wr1.cCommand; // enqueueCommand
export const cisCommandQueueEmpty = wr1.cis + wr1.cCommand + wr1.cQueue + wr1.cEmpty; // isCommandQueueEmpty
export const cprocessCommandQueue = wr1.cprocess + wr1.cCommand + wr1.cQueue; // processCommandQueue

// chiefConfiguration
export const csetupConfiguration = wr1.csetup + wr1.cConfiguration; // setupConfiguration

// chiefData
export const csearchForUniversalDebugConfigSetting = wr1.csearch + wr1.cFor + wr1.cUniversal + wr1.cDebug + wr1.cConfig + wr1.cSetting; // searchForUniversalDebugConfigSetting
export const cgetAndProcessCsvData = wr1.cget + wr1.cAnd + wr1.cProcess + gen.cCsv + wr1.cData; // getAndProcessCsvData
export const cgetAndProcessXmlData = wr1.cget + wr1.cAnd + wr1.cProcess + gen.cXml + wr1.cData; // getAndProcessXmlData
export const csetupAllCsvData = wr1.csetup + wr1.cAll + gen.cCsv + wr1.cData; // setupAllCsvData
export const csetupAllXmlData = wr1.csetup + wr1.cAll + gen.cXml + wr1.cData; // setupAllXmlData
export const csetupAllJsonConfigData = wr1.csetup + phn.cAll + gen.cJson + wr1.cConfig + wr1.cData; // setupAllJsonConfigData

// chiefWorkflow
export const cloadCommandWorkflowsFromPath = wr1.cload + wr1.cCommand + wr1.cWorkflows + wr1.cFrom + wr1.cPath; // loadCommandWorkflowsFromPath

// warden
export const cprocessRootPath = wr1.cprocess + wr1.cRoot + wr1.cPath; // processRootPath
export const cinitFrameworkSchema = gen.cinit + wr1.cFramework + wr1.cSchema; // initFrameworkSchema
export const cmergeClientBusienssRules = wr1.cmerge + wr1.cClient + wr1.cBusiness + wr1.cRules; // mergeClientBusinessRules
export const cmergeClientCommands = wr1.cmerge + wr1.cClient + wr1.cCommands; // mergeClientCommands
export const cloadCommandAliases = wr1.cload + wr1.cCommand + wr1.cAliases; // loadCommandAliases
export const cexecuteBusinessRule = wr1.cexecute + wr1.cBusiness + wr1.cRule; // executeBusinessRule
// export const cenqueueCommand = wr1.cenqueue + wr1.cCommand; // enqueueCommand
// export const cisCommandQueueEmpty = wr1.cis + wr1.cCommand + wr1.cQueue + wr1.cEmpty; // isCommandQueueEmpty
// export const cprocessCommandQueue = wr1.cprocess + wr1.cCommand + wr1.cQueue; // processCommandQueue
// export const csetConfigurationSetting = wr1.cset + wr1.cConfiguration + wr1.cSetting; // setConfigurationSetting
// export const cgetConfigurationSetting = wr1.cget + wr1.cConfiguration + wr1.cSetting; // getConfigurationSetting
// export const cconsoleLog = wr1.cconsole + wr1.cLog; // consoleLog
// export const csleep = wr1.csleep; // sleep

// colorizer
export const ccolorizeMessage = wr1.ccolorize + wr1.cMessage; // colorizeMessage
export const caggregateStyleSetting = wr1.caggregate + wr1.cStyle + wr1.cSetting; // aggregateStyleSetting
export const cgetFontStyleSettingsFromSetting = wr1.cget + wr1.cFont + wr1.cStyle + wr1.cSettings + wr1.cFrom + wr1.cSetting; // getFontStyleSettingsFromSetting
export const cgetColorStyleSettingFromSetting = wr1.cget + wr1.cColor + wr1.cStyle + wr1.cSetting + wr1.cFrom + wr1.cSetting; // getColorStyleSettingFromSetting
export const cgetNamedColorData = wr1.cget + wr1.cNamed + wr1.cColor + wr1.cData; // getNamedColorData
export const csetUnderlineFontStyleOnMessageComponentAccordingToSetting = wr1.cset + wr1.cUnderline + wr1.cFont + wr1.cStyle + wr1.cOn + wr1.cMessage + wr1.cComponent + wr1.cAccording + wr1.cTo + wr1.cSetting; // setUnderlineFontStyleOnMessageComponentAccordingToSetting
export const csetBoldFontStyleOnMessageComponentAccordingToSetting = wr1.cset + wr1.cBold + wr1.cFont + wr1.cFont + wr1.cStyle + wr1.cOn + wr1.cMessage + wr1.cComponent + wr1.cAccording + wr1.cTo + wr1.cSetting; // setBoldFontStyleOnMessageComponentAccordingToSetting
export const csetFontForegroundColorOnMessageComponentAccordingToSetting = wr1.cset + wr1.cFont + wr1.cForeground + wr1.cColor + wr1.cOn + wr1.cMessage + wr1.cComponent + wr1.cAccording + wr1.cTo + wr1.cSetting; // setFontForegroundColorOnMessageComponentAccordingToSetting
export const csetFontBackgroundColorOnMessageComponentAccordingToSetting = wr1.cset + wr1.cFont + wr1.cBackground + wr1.cColor + wr1.cOn + wr1.cMessage + wr1.cComponent + wr1.cAccording + wr1.cTo + wr1.cSetting; // setFontBackgroundColorOnMessageComponentAccordingToSetting
export const cremoveFontStyles = wr1.cremoe + wr1.cFont + wr1.cStyles; // removeFontStyles

// configurator
export const csetConfigurationSetting = wr1.cset + wr1.cConfiguration + wr1.cSetting; // setConfigurationSetting
export const cgetConfigurationSetting = wr1.cget + wr1.cConfiguration + wr1.cSetting; // getConfigurationSetting
export const cprocessConfigurationNameRules = wr1.cprocess + wr1.cConfiguration + wr1.cName + wr1.cRules; // processConfigurationNameRules
export const cprocessConfigurationNamespaceRules = wr1.cprocess + wr1.cConfiguration + wr1.cName + wr1.cspace + wr1.cRules; // processConfigurationNamespaceRules
export const cprocessConfigurationValueRules = wr1.cprocess + wr1.cConfiguration + wr1.cValue + wr1.cRules; // processConfigurationValueRules

// fileOperations
export const cgetXmlData = wr1.cget + gen.cXml + wr1.cData; // getXmlData
export const cgetCsvData = wr1.cget + gen.cCsv + wr1.cData; // getCsvData
export const cgetJsonData = wr1.cget + gen.cJson + wr1.cData; // getJsonData
export const cwriteJsonData = wr1.cwrite + gen.cJson + wr1.cData; // cwriteJsonData
export const creadDirectoryContents = wr1.cread + wr1.cDirectory + wr1.cContents; // readDirectoryContents
export const cscanDirectoryContents = wr1.cscan + wr1.cDirectory + wr1.cContents; // scanDirectoryContents
export const creadDirectorySynchronously = wr1.cread + wr1.cDirectory + wr1.cSynchronously; // readDirectorySynchronously
export const ccopyAllFilesAndFoldersFromFolderToFolder = wr1.ccopy + wr1.cAll + wr1.cFiles + wr1.cAnd + wr1.cFolders + wr1.cFrom + wr1.cFolder + wr1.cTo + wr1.cFolder; // copyAllFilesAndFoldersFromFolderToFolder
export const cbuildReleasePackage = wr1.cbuild + wr1.cRelease + wr1.cPackage; // buildReleasePackage
export const ccleanRootPath = wr1.cclean + wr1.cRoot + wr1.cPath; // cleanRootPath
export const ccopyFileSync = wr1.ccopy + wr1.cFile + wr1.cSync; // copyFileSync
export const ccopyFolderRecursiveSync = wr1.ccopy + wr1.cFolder + wr1.cRecursive + wr1.cSync; // copyFolderRecursiveSync
export const cappendMessageToFile = wr1.cappend + wr1.cMessage + bas.cTo + wr1.cFile; // appendMessageToFile

// lexical
export const cparseBusinessRuleArgument = wr1.cparse + wr1.cBusiness + wr1.cRule + wr1.cArgument; // parseBusinessRuleArgument
export const canalyzeArgument = wr1.canalyze + wr1.cArgument; // analyzeArgument
export const canalyzeForRegularExpression = wr1.canalyze + wr1.cFor + wr1.cRegular + wr1.cExpression; // analyzeForRegularExpression
export const cparseArgumentAsRegularExpression = wr1.cparse + wr1.cArgument + wr1.cAs + wr1.cRegular + wr1.cExpression; // parseArgumentAsRegularExpression
export const cparseArgumentAsArray = wr1.cparse + wr1.cArgument + wr1.cAs + wr1.cArray; // parseArgumentAsArray
export const cremoveStringLiteralTagsFromArray = wr1.cremove + wr1.cString + wr1.cLiteral + wr1.cTags + wr1.cFrom + wr1.cArray; // removeStringLiteralTagsFromArray

// loggers
export const cconsoleLog = wr1.cconsole + gen.cLog; // consoleLog

// prompt
export const cprompt = wr1.cprompt; // prompt

// timers
export const cgetNowMoment = wr1.cget + wr1.cNow + wr1.cMoment; // getNowMoment
export const ccomputeDeltaTime = wr1.ccompute + gen.cDelta + wr1.cTime; // computeDeltaTime
export const creformatDeltaTime = wr1.creformat + gen.cDelta + wr1.cTime; // reformatDeltaTime
export const csleep = wr1.csleep; // sleep

// queue
export const cinitQueue = phn.cinit + wr1.cQueue; // initQueue
export const cdequeue = wr1.cdequeue; // dequeue
export const cenqueue = wr1.cenqueue; // enqueue
export const cisEmpty = wr1.cis + wr1.cEmpty; // isEmpty
export const cqueueFront = wr1.cqueue + wr1.cFront; // queueFront
export const cqueueSize = wr1.cqueue + wr1.cSize; // queueSize

// stack
export const cinitStack = phn.cinit + wr1.cStack; // initStack
export const cclearStack = wr1.cclear + wr1.cStack; // clearStack
export const cpush = wr1.cpush; // push
export const cpop = wr1.cpop; // pop
// let cisEmpty = wr1.cis + wr1.cEmpty; // isEmpty // Duplicate definition in the chiefCommander
export const clength = wr1.clength; // length
export const ccontains = wr1.ccontains; // contains
export const cprint = wr1.cprint; // print

// main
export const cinitFramework = gen.cinit + wr1.cFramework; // initFramework
// export const cconsoleLog = wr1.cconsole + wr1.cLog; // consoleLog
// export const cprompt = wr1.cprompt; // prompt
