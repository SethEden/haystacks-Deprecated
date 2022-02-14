/**
 * @file function.constants.js
 * @module function.constants
 * @description Contains all re-usable function name constants, organized by file.
 * @requires module:phonic.constants
 * @requires module:generic.constants
 * @requires module:word1.constants
 * @author Seth Hollingsead
 * @date 2021/12/28
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

let bas = require('./basic.constants.js');
let phn = require('./phonic.constants.js');
let gen = require('./generic.constants.js');
let wr1 = require('./word1.constants.js');

// commandBroker
// let cbootStrapCommands = wr1.cboot + wr1.cStrap + wr1.cCommands; // bootStrapCommands // Duplicate definition in the chiefCommander
let caddClientCommands = wr1.cadd + wr1.cClient + wr1.cCommands; // addClientCommands
let cgetValidCommand = wr1.cget + wr1.cValid + wr1.cCommand; // getValidCommand
let cgetCommandArgs = wr1.cget + wr1.cCommand + gen.cArgs; // getCommandArgs
let cexecuteCommand = wr1.cexecute + wr1.cCommand; // executeCommand

// dataBroker
let cscanDataPath = wr1.cscan + wr1.cData + wr1.cPath; // scanDataPath
let cfindUniversalDebugConfigSetting = wr1.cfind + wr1.cUniversal + wr1.cDebug + wr1.cConfig + wr1.cSetting; // findUniversalDebugConfigSetting
let cloadAllCsvData = wr1.cload + phn.cAll + gen.cCsv + wr1.cData; // loadAllCsvData
let cloadAllXmlData = wr1.cload + phn.cAll + gen.cXml + wr1.cData; // LoadAllXmlData
let cloadAllJsonData = wr1.cload + phn.cAll + gen.cJson + wr1.cData; // loadAllJsonData
let cprocessCsvData = wr1.cprocess + gen.cCsv + wr1.cData; // processCsvData
let csetupDataStorage = wr1.csetup + wr1.cData + wr1.cStorage; // setupDataStorage
let cstoreData = wr1.cstore + wr1.cData; // storeData
let cgetData = wr1.cget + wr1.cData; // getData
let cclearData = wr1.cclear + wr1.cData; // clearData

// ruleBroker
let cbootStrapBusinessRules = wr1.cboot + wr1.cStrap + wr1.cBusiness + wr1.cRules; // bootStrapBusinessRules
let caddClientRules = wr1.cadd + wr1.cClient + wr1.cRules; // addClientRules
let cprocessRules = wr1.cprocess + wr1.cRules; // processRules

// workflowBroker
let cgetWorkflow = wr1.cget + wr1.cWorkflow; // getWorkflow

// rulesLibrary
let cinitRulesLibrary = gen.cinit + wr1.cRules + wr1.cLibrary; // initRulesLibrary

// commandsLibrary
let cinitCommandsLibrary = gen.cinit + wr1.cCommands + wr1.cLibrary; // initCommandsLibrary

// chiefCommander
let cbootStrapCommands = wr1.cboot + wr1.cStrap + wr1.cCommands; // bootStrapCommands
let cloadCommandAliasesFromPath = wr1.cload + wr1.cCommand + wr1.cAliases + wr1.cFrom + wr1.cPath; // loadCommandAliasesFromPath
let cenqueueCommand = wr1.cenqueue + wr1.cCommand; // enqueueCommand
let cisCommandQueueEmpty = wr1.cis + wr1.cCommand + wr1.cQueue + wr1.cEmpty; // isCommandQueueEmpty
let cprocessCommandQueue = wr1.cprocess + wr1.cCommand + wr1.cQueue; // processCommandQueue

// chiefConfiguration
let csetupConfiguration = wr1.csetup + wr1.cConfiguration; // setupConfiguration

// chiefData
let csearchForUniversalDebugConfigSetting = wr1.csearch + wr1.cFor + wr1.cUniversal + wr1.cDebug + wr1.cConfig + wr1.cSetting; // searchForUniversalDebugConfigSetting
let csetupAllJsonConfigData = wr1.csetup + phn.cAll + gen.cJson + wr1.cConfig + wr1.cData; // setupAllJsonConfigData

// chiefWorkflow
let cloadCommandWorkflowsFromPath = wr1.cload + wr1.cCommand + wr1.cWorkflows + wr1.cFrom + wr1.cPath; // loadCommandWorkflowsFromPath

// warden
let cprocessRootPath = wr1.cprocess + wr1.cRoot + wr1.cPath; // processRootPath
let cinitFrameworkSchema = gen.cinit + wr1.cFramework + wr1.cSchema; // initFrameworkSchema

// colorizer
let ccolorizeMessage = wr1.ccolorize + wr1.cMessage; // colorizeMessage
let caggregateStyleSetting = wr1.caggregate + wr1.cStyle + wr1.cSetting; // aggregateStyleSetting
let cgetFontStyleSettingsFromSetting = wr1.cget + wr1.cFont + wr1.cStyle + wr1.cSettings + wr1.cFrom + wr1.cSetting; // getFontStyleSettingsFromSetting
let cgetColorStyleSettingFromSetting = wr1.cget + wr1.cColor + wr1.cStyle + wr1.cSetting + wr1.cFrom + wr1.cSetting; // getColorStyleSettingFromSetting
let cgetNamedColorData = wr1.cget + wr1.cNamed + wr1.cColor + wr1.cData; // getNamedColorData
let csetUnderlineFontStyleOnMessageComponentAccordingToSetting = wr1.cset + wr1.cUnderline + wr1.cFont + wr1.cStyle + wr1.cOn + wr1.cMessage + wr1.cComponent + wr1.cAccording + wr1.cTo + wr1.cSetting; // setUnderlineFontStyleOnMessageComponentAccordingToSetting
let csetBoldFontStyleOnMessageComponentAccordingToSetting = wr1.cset + wr1.cBold + wr1.cFont + wr1.cFont + wr1.cStyle + wr1.cOn + wr1.cMessage + wr1.cComponent + wr1.cAccording + wr1.cTo + wr1.cSetting; // setBoldFontStyleOnMessageComponentAccordingToSetting
let csetFontForegroundColorOnMessageComponentAccordingToSetting = wr1.cset + wr1.cFont + wr1.cForeground + wr1.cColor + wr1.cOn + wr1.cMessage + wr1.cComponent + wr1.cAccording + wr1.cTo + wr1.cSetting; // setFontForegroundColorOnMessageComponentAccordingToSetting
let csetFontBackgroundColorOnMessageComponentAccordingToSetting = wr1.cset + wr1.cFont + wr1.cBackground + wr1.cColor + wr1.cOn + wr1.cMessage + wr1.cComponent + wr1.cAccording + wr1.cTo + wr1.cSetting; // setFontBackgroundColorOnMessageComponentAccordingToSetting
let cremoveFontStyles = wr1.cremoe + wr1.cFont + wr1.cStyles; // removeFontStyles

// configurator
let csetConfigurationSetting = wr1.cset + wr1.cConfiguration + wr1.cSetting; // setConfigurationSetting
let cgetConfigurationSetting = wr1.cget + wr1.cConfiguration + wr1.cSetting; // getConfigurationSetting
let cprocessConfigurationNameRules = wr1.cprocess + wr1.cConfiguration + wr1.cName + wr1.cRules; // processConfigurationNameRules
let cprocessConfigurationNamespaceRules = wr1.cprocess + wr1.cConfiguration + wr1.cName + wr1.cspace + wr1.cRules; // processConfigurationNamespaceRules
let cprocessConfigurationValueRules = wr1.cprocess + wr1.cConfiguration + wr1.cValue + wr1.cRules; // processConfigurationValueRules

// fileOperations
let cgetXmlData = wr1.cget + gen.cXml + wr1.cData; // getXmlData
let cgetCsvData = wr1.cget + gen.cCsv + wr1.cData; // getCsvData
let cgetJsonData = wr1.cget + gen.cJson + wr1.cData; // getJsonData
let cwriteJsonData = wr1.cwrite + gen.cJson + wr1.cData; // cwriteJsonData
let creadDirectoryContents = wr1.cread + wr1.cDirectory + wr1.cContents; // readDirectoryContents
let cscanDirectoryContents = wr1.cscan + wr1.cDirectory + wr1.cContents; // scanDirectoryContents
let creadDirectorySynchronously = wr1.cread + wr1.cDirectory + wr1.cSynchronously; // readDirectorySynchronously
let ccopyAllFilesAndFoldersFromFolderToFolder = wr1.ccopy + wr1.cAll + wr1.cFiles + wr1.cAnd + wr1.cFolders + wr1.cFrom + wr1.cFolder + wr1.cTo + wr1.cFolder; // copyAllFilesAndFoldersFromFolderToFolder
let cbuildReleasePackage = wr1.cbuild + wr1.cRelease + wr1.cPackage; // buildReleasePackage
let ccleanRootPath = wr1.cclean + wr1.cRoot + wr1.cPath; // cleanRootPath
let ccopyFileSync = wr1.ccopy + wr1.cFile + wr1.cSync; // copyFileSync
let ccopyFolderRecursiveSync = wr1.ccopy + wr1.cFolder + wr1.cRecursive + wr1.cSync; // copyFolderRecursiveSync
let cappendMessageToFile = wr1.cappend + wr1.cMessage + bas.cTo + wr1.cFile; // appendMessageToFile

// lexical
let cparseBusinessRuleArgument = wr1.cparse + wr1.cBusiness + wr1.cRule + wr1.cArgument; // parseBusinessRuleArgument
let canalyzeArgument = wr1.canalyze + wr1.cArgument; // analyzeArgument
let canalyzeForRegularExpression = wr1.canalyze + wr1.cFor + wr1.cRegular + wr1.cExpression; // analyzeForRegularExpression
let cparseArgumentAsRegularExpression = wr1.cparse + wr1.cArgument + wr1.cAs + wr1.cRegular + wr1.cExpression; // parseArgumentAsRegularExpression
let cparseArgumentAsArray = wr1.cparse + wr1.cArgument + wr1.cAs + wr1.cArray; // parseArgumentAsArray
let cremoveStringLiteralTagsFromArray = wr1.cremove + wr1.cString + wr1.cLiteral + wr1.cTags + wr1.cFrom + wr1.cArray; // removeStringLiteralTagsFromArray

// loggers
let cconsoleLog = wr1.cconsole + gen.cLog; // consoleLog

// prompt
let cprompt = wr1.cprompt; // prompt

// timers
let cgetNowMoment = wr1.cget + wr1.cNow + wr1.cMoment; // getNowMoment
let ccomputeDeltaTime = wr1.ccompute + gen.cDelta + wr1.cTime; // computeDeltaTime

// queue
let cinitQueue = phn.cinit + wr1.cQueue; // initQueue
let cdequeue = wr1.cdequeue; // dequeue
let cenqueue = wr1.cenqueue; // enqueue
let cisEmpty = wr1.cis + wr1.cEmpty; // isEmpty
let cqueueFront = wr1.cqueue + wr1.cFront; // queueFront
let cqueueSize = wr1.cqueue + wr1.cSize; // queueSize

// stack
let cinitStack = phn.cinit + wr1.cStack; // initStack
let cclearStack = wr1.cclear + wr1.cStack; // clearStack
let cpush = wr1.cpush; // push
let cpop = wr1.cpop; // pop
// let cisEmpty = wr1.cis + wr1.cEmpty; // isEmpty // Duplicate definition in the chiefCommander
let clength = wr1.clength; // length
let ccontains = wr1.ccontains; // contains
let cprint = wr1.cprint; // print

// main
let cinitFramework = gen.cinit + wr1.cFramework; // initFramework

module.exports = {
  // commandBroker
  // [bas.cc + cbootStrapCommands]: cbootStrapCommands, // bootStrapCommands // Duplicate definition in the chiefCommander
  [bas.cc + caddClientCommands]: caddClientCommands, // addClientCommands
  [bas.cc + cgetValidCommand]: cgetValidCommand, // getValidCommand
  [bas.cc + cgetCommandArgs]: cgetCommandArgs, // getCommandArgs
  [bas.cc + cexecuteCommand]: cexecuteCommand, // executeCommand

  // dataBroker
  [bas.cc + cscanDataPath]: cscanDataPath, // scanDataPath
  [bas.cc + cfindUniversalDebugConfigSetting]: cfindUniversalDebugConfigSetting, // findUniversalDebugConfigSetting
  [bas.cc + cloadAllCsvData]: cloadAllCsvData, // loadAllCsvData
  [bas.cc + cloadAllXmlData]: cloadAllXmlData, // LoadAllXmlData
  [bas.cc + cloadAllJsonData]: cloadAllJsonData, // loadAllJsonData
  [bas.cc + cprocessCsvData]: cprocessCsvData, // processCsvData
  [bas.cc + csetupDataStorage]: csetupDataStorage, // setupDataStorage
  [bas.cc + cstoreData]: cstoreData, // storeData
  [bas.cc + cgetData]: cgetData, // getData
  [bas.cc + cclearData]: cclearData, // clearData

  // ruleBroker
  [bas.cc + cbootStrapBusinessRules]: cbootStrapBusinessRules, // bootStrapBusinessRules
  [bas.cc + caddClientRules]: caddClientRules, // addClientRules
  [bas.cc + cprocessRules]: cprocessRules, // processRules

  // workflowBroker
  [bas.cc + cgetWorkflow]: cgetWorkflow, // getWorkflow

  // rulesLibrary
  [bas.cc + cinitRulesLibrary]: cinitRulesLibrary, // initRulesLibrary

  // commandsLibrary
  [bas.cc + cinitCommandsLibrary]: cinitCommandsLibrary, // initCommandsLibrary

  // chiefCommander
  [bas.cc + cbootStrapCommands]: cbootStrapCommands, // bootStrapCommands
  [bas.cc + cloadCommandAliasesFromPath]: cloadCommandAliasesFromPath, // loadCommandAliasesFromPath
  [bas.cc + cenqueueCommand]: cenqueueCommand, // enqueueCommand
  [bas.cc + cisCommandQueueEmpty]: cisCommandQueueEmpty, // isCommandQueueEmpty
  [bas.cc + cprocessCommandQueue]: cprocessCommandQueue, // processCommandQueue

  // chiefConfiguration
  [bas.cc + csetupConfiguration]: csetupConfiguration, // setupConfiguration

  // chiefData
  [bas.cc + csearchForUniversalDebugConfigSetting]: csearchForUniversalDebugConfigSetting, // searchForUniversalDebugConfigSetting
  [bas.cc + csetupAllJsonConfigData]: csetupAllJsonConfigData, // setupAllJsonConfigData

  // chiefWorkflow
  [bas.cc + cloadCommandWorkflowsFromPath]: cloadCommandWorkflowsFromPath, // loadCommandWorkflowsFromPath

  // warden
  [bas.cc + cprocessRootPath]: cprocessRootPath, // processRootPath
  [bas.cc + cinitFrameworkSchema]: cinitFrameworkSchema, // initFrameworkSchema

  // colorizer
  [bas.cc + ccolorizeMessage]: ccolorizeMessage, // colorizeMessage
  [bas.cc + caggregateStyleSetting]: caggregateStyleSetting, // aggregateStyleSetting
  [bas.cc + cgetFontStyleSettingsFromSetting]: cgetFontStyleSettingsFromSetting, // getFontStyleSettingsFromSetting
  [bas.cc + cgetColorStyleSettingFromSetting]: cgetColorStyleSettingFromSetting, // getColorStyleSettingFromSetting
  [bas.cc + cgetNamedColorData]: cgetNamedColorData, // getNamedColorData
  [bas.cc + csetUnderlineFontStyleOnMessageComponentAccordingToSetting]: csetUnderlineFontStyleOnMessageComponentAccordingToSetting, // setUnderlineFontStyleOnMessageComponentAccordingToSetting
  [bas.cc + csetBoldFontStyleOnMessageComponentAccordingToSetting]: csetBoldFontStyleOnMessageComponentAccordingToSetting, // setBoldFontStyleOnMessageComponentAccordingToSetting
  [bas.cc + csetFontForegroundColorOnMessageComponentAccordingToSetting]: csetFontForegroundColorOnMessageComponentAccordingToSetting, // setFontForegroundColorOnMessageComponentAccordingToSetting
  [bas.cc + csetFontBackgroundColorOnMessageComponentAccordingToSetting]: csetFontBackgroundColorOnMessageComponentAccordingToSetting, // setFontBackgroundColorOnMessageComponentAccordingToSetting
  [bas.cc + cremoveFontStyles]: cremoveFontStyles, // removeFontStyles

  // configurator
  [bas.cc + csetConfigurationSetting]: csetConfigurationSetting, // setConfigurationSetting
  [bas.cc + cgetConfigurationSetting]: cgetConfigurationSetting, // getConfigurationSetting
  [bas.cc + cprocessConfigurationNameRules]: cprocessConfigurationNameRules, // processConfigurationNameRules
  [bas.cc + cprocessConfigurationNamespaceRules]: cprocessConfigurationNamespaceRules, // processConfigurationNamespaceRules
  [bas.cc + cprocessConfigurationValueRules]: cprocessConfigurationValueRules, // processConfigurationValueRules

  // fileOperations
  [bas.cc + cgetXmlData]: cgetXmlData, // getXmlData
  [bas.cc + cgetCsvData]: cgetCsvData, // getCsvData
  [bas.cc + cgetJsonData]: cgetJsonData, // getJsonData
  [bas.cc + cwriteJsonData]: cwriteJsonData, // cwriteJsonData
  [bas.cc + creadDirectoryContents]: creadDirectoryContents, // readDirectoryContents
  [bas.cc + cscanDirectoryContents]: cscanDirectoryContents, // scanDirectoryContents
  [bas.cc + creadDirectorySynchronously]: creadDirectorySynchronously, // readDirectorySynchronously
  [bas.cc + ccopyAllFilesAndFoldersFromFolderToFolder]: ccopyAllFilesAndFoldersFromFolderToFolder, // copyAllFilesAndFoldersFromFolderToFolder
  [bas.cc + cbuildReleasePackage]: cbuildReleasePackage, // buildReleasePackage
  [bas.cc + ccleanRootPath]: ccleanRootPath, // cleanRootPath
  [bas.cc + ccopyFileSync]: ccopyFileSync, // copyFileSync
  [bas.cc + ccopyFolderRecursiveSync]: ccopyFolderRecursiveSync, // copyFolderRecursiveSync
  [bas.cc + cappendMessageToFile]: cappendMessageToFile, // appendMessageToFile

  // lexical
  [bas.cc + cparseBusinessRuleArgument]: cparseBusinessRuleArgument, // parseBusinessRuleArgument
  [bas.cc + canalyzeArgument]: canalyzeArgument, // analyzeArgument
  [bas.cc + canalyzeForRegularExpression]: canalyzeForRegularExpression, // analyzeForRegularExpression
  [bas.cc + cparseArgumentAsRegularExpression]: cparseArgumentAsRegularExpression, // parseArgumentAsRegularExpression
  [bas.cc + cparseArgumentAsArray]: cparseArgumentAsArray, // parseArgumentAsArray
  [bas.cc + cremoveStringLiteralTagsFromArray]: cremoveStringLiteralTagsFromArray, // removeStringLiteralTagsFromArray

  // loggers
  [bas.cc + cconsoleLog]: cconsoleLog, // consoleLog

  // prompt
  [bas.cc + cprompt]: cprompt, // prompt

  // timers
  [bas.cc + cgetNowMoment]: cgetNowMoment, // getNowMoment
  [bas.cc + ccomputeDeltaTime]: ccomputeDeltaTime, // computeDeltaTime

  // queue
  [bas.cc + cinitQueue]: cinitQueue, // initQueue
  [bas.cc + cdequeue]: cdequeue, // dequeue
  [bas.cc + cenqueue]: cenqueue, // enqueue
  [bas.cc + cisEmpty]: cisEmpty, // isEmpty
  [bas.cc + cqueueFront]: cqueueFront, // queueFront
  [bas.cc + cqueueSize]: cqueueSize, // queueSize

  // stack
  [bas.cc + cinitStack]: cinitStack, // initStack
  [bas.cc + cclearStack]: cclearStack, // clearStack
  [bas.cc + cpush]: cpush, // push
  [bas.cc + cpop]: cpop, // pop
  // [bas.cc + cisEmpty]: cisEmpty, // isEmpty // Duplicate definition in the chiefCommander
  [bas.cc + clength]: clength, // length
  [bas.cc + ccontains]: ccontains, // contains
  [bas.cc + cprint]: cprint, // print

  // main
  [bas.cc + cinitFramework]: cinitFramework // initFramework
};
