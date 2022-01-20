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

let bas = require('./basic.constants');
let phn = require('./phonic.constants');
let gen = require('./generic.constants');
let wr1 = require('./word1.constants');

// dataBroker
let cscanDataPath = wr1.cscan + wr1.cData + wr1.cPath; // scanDataPath
let cfindUniversalDebugConfigSetting = wr1.cfind + wr1.cUniversal + wr1.cDebug + wr1.cConfig + wr1.cSetting; // findUniversalDebugConfigSetting
let cloadAllJsonData = wr1.cload + phn.cAll + gen.cJson + wr1.cData; // loadAllJsonData

// ruleBroker
let cbootStrapBusinessRules = wr1.cboot + wr1.cStrap + wr1.cBusiness + wr1.cRules; // bootStrapBusinessRules
let caddClientRules = wr1.cadd + wr1.cClient + wr1.cRules; // addClientRules
let cprocessRules = wr1.cprocess + wr1.cRules; // processRules

// rulesLibrary
let cinitRulesLibrary = gen.cinit + wr1.cRules + wr1.cLibrary; // initRulesLibrary

// chiefConfiguration
let csetupConfiguration = wr1.csetup + wr1.cConfiguration; // setupConfiguration

// chiefData
let csearchForUniversalDebugConfigSetting = wr1.csearch + wr1.cFor + wr1.cUniversal + wr1.cDebug + wr1.cConfig + wr1.cSetting; // searchForUniversalDebugConfigSetting
let csetupAllJsonConfigData = wr1.csetup + phn.cAll + gen.cJson + wr1.cConfig + wr1.cData; // setupAllJsonConfigData

// warden
let cprocessRootPath = wr1.cprocess + wr1.cRoot + wr1.cPath; // processRootPath
let cinitFrameworkSchema = gen.cinit + wr1.cFramework + wr1.cSchema; // initFrameworkSchema

// configurator
let csetConfigurationSetting = wr1.cset + wr1.cConfiguration + wr1.cSetting; // setConfigurationSetting
let cgetConfigurationSetting = wr1.cget + wr1.cConfiguration + wr1.cSetting; // getConfigurationSetting
let cprocessConfigurationNameRules = wr1.cprocess + wr1.cConfiguration + wr1.cName + wr1.cRules; // processConfigurationNameRules
let cprocessConfigurationNamespaceRules = wr1.cprocess + wr1.cConfiguration + wr1.cName + wr1.cspace + wr1.cRules; // processConfigurationNamespaceRules
let cprocessConfigurationValueRules = wr1.cprocess + wr1.cConfiguration + wr1.cValue + wr1.cRules; // processConfigurationValueRules

// fileOperations
let cgetJsonData = wr1.cget + gen.cJson + wr1.cData; // getJsonData
let creadDirectoryContents = wr1.cread + wr1.cDirectory + wr1.cContents; // readDirectoryContents
let creadDirectorySynchronously = wr1.cread + wr1.cDirectory + wr1.cSynchronously; // readDirectorySynchronously
let cappendMessageToFile = wr1.cappend + wr1.cMessage + bas.cTo + wr1.cFile; // appendMessageToFile

// loggers
let cconsoleLog = wr1.cconsole + gen.cLog; // consoleLog

// prompt
let cprompt = wr1.cprompt; // prompt

// timers
let cgetNowMoment = wr1.cget + wr1.cNow + wr1.cMoment; // getNowMoment
let ccomputeDeltaTime = wr1.ccompute + gen.cDelta + wr1.cTime; // computeDeltaTime

// main
let cinitFramework = gen.cinit + wr1.cFramework; // initFramework

module.exports = {
  // dataBroker
  [bas.cc + cscanDataPath]: cscanDataPath, // scanDataPath
  [bas.cc + cfindUniversalDebugConfigSetting]: cfindUniversalDebugConfigSetting, // findUniversalDebugConfigSetting
  [bas.cc + cloadAllJsonData]: cloadAllJsonData, // loadAllJsonData

  // ruleBroker
  [bas.cc + cbootStrapBusinessRules]: cbootStrapBusinessRules, // bootStrapBusinessRules
  [bas.cc + caddClientRules]: caddClientRules, // addClientRules
  [bas.cc + cprocessRules]: cprocessRules, // processRules

  // rulesLibrary
  [bas.cc + cinitRulesLibrary]: cinitRulesLibrary, // initRulesLibrary

  // chiefConfiguration
  [bas.cc + csetupConfiguration]: csetupConfiguration, // setupConfiguration

  // chiefData
  [bas.cc + csearchForUniversalDebugConfigSetting]: csearchForUniversalDebugConfigSetting, // searchForUniversalDebugConfigSetting
  [bas.cc + csetupAllJsonConfigData]: csetupAllJsonConfigData, // setupAllJsonConfigData

  // warden
  [bas.cc + cprocessRootPath]: cprocessRootPath, // processRootPath
  [bas.cc + cinitFrameworkSchema]: cinitFrameworkSchema, // initFrameworkSchema

  // configurator
  [bas.cc + csetConfigurationSetting]: csetConfigurationSetting, // setConfigurationSetting
  [bas.cc + cgetConfigurationSetting]: cgetConfigurationSetting, // getConfigurationSetting
  [bas.cc + cprocessConfigurationNameRules]: cprocessConfigurationNameRules, // processConfigurationNameRules
  [bas.cc + cprocessConfigurationNamespaceRules]: cprocessConfigurationNamespaceRules, // processConfigurationNamespaceRules
  [bas.cc + cprocessConfigurationValueRules]: cprocessConfigurationValueRules, // processConfigurationValueRules

  // fileOperations
  [bas.cc + cgetJsonData]: cgetJsonData, // getJsonData
  [bas.cc + creadDirectoryContents]: creadDirectoryContents, // readDirectoryContents
  [bas.cc + creadDirectorySynchronously]: creadDirectorySynchronously, // readDirectorySynchronously
  [bas.cc + cappendMessageToFile]: cappendMessageToFile, // appendMessageToFile

  // loggers
  [bas.cc + cconsoleLog]: cconsoleLog, // consoleLog

  // prompt
  [bas.cc + cprompt]: cprompt, // prompt

  // timers
  [bas.cc + cgetNowMoment]: cgetNowMoment, // getNowMoment
  [bas.cc + ccomputeDeltaTime]: ccomputeDeltaTime, // computeDeltaTime

  // main
  [bas.cc + cinitFramework]: cinitFramework // initFramework
};
