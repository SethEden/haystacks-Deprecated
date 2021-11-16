/**
 * @file function.constants.js
 * @module function.constants
 * @description Contains all re-usable function name constants, organized by file.
 * @requires module:phonic.constants
 * @requires module:generic.constants
 * @requires module:word.constants
 */

var bas = require('./basic.constants');
var phn = require('./phonic.constants');
var gen = require('./generic.constants');
var wrd = require('./word.constants');

// dataBroker
let cscanDataPath = wrd.cscan + wrd.cData + wrd.cPath; // scanDataPath
let cloadAllJsonData = wrd.cload + phn.cAll + gen.cJson + wrd.cData; // loadAllJsonData

// ruleBroker
let cbootStrapBusinessRules = wrd.cboot + wrd.cStrap + wrd.cBusiness + wrd.cRules; // bootStrapBusinessRules
let caddClientRules = wrd.c_add + wrd.cClient + wrd.cRules; // addClientRules
let cprocessRules = wrd.cprocess + wrd.cRules; // processRules

// rulesLibrary
let cinitRulesLibrary = gen.cinit + wrd.cRules + wrd.cLibrary; // initRulesLibrary

// chiefConfiguration
let csetupConfiguration = wrd.csetup + wrd.cConfiguration; // setupConfiguration

// chiefData
let csetupAllJsonConfigData = wrd.csetup + phn.cAll + gen.cJson + wrd.cConfig + wrd.cData; // setupAllJsonConfigData

// warden
let cprocessRootPath = wrd.cprocess + wrd.cRoot + wrd.cPath; // processRootPath
let cinitFrameworkSchema = gen.cinit + wrd.cFramework + wrd.cSchema; // initFrameworkSchema

// configurator
let csetConfigurationSetting = wrd.cset + wrd.cConfiguration + wrd.cSetting; // setConfigurationSetting
let cgetConfigurationSetting = wrd.cget + wrd.cConfiguration + wrd.cSetting; // getConfigurationSetting
let cprocessConfigurationNameRules = wrd.cprocess + wrd.cConfiguration + wrd.cName + wrd.cRules; // processConfigurationNameRules
let cprocessConfigurationNamespaceRules = wrd.cprocess + wrd.cConfiguration + wrd.cName + wrd.cspace + wrd.cRules; // processConfigurationNamespaceRules
let cprocessConfigurationValueRules = wrd.cprocess + wrd.cConfiguration + wrd.cValue + wrd.cRules; // processConfigurationValueRules

// fileOperations
let cgetJsonData = wrd.cget + gen.cJson + wrd.cData; // getJsonData
let creadDirectoryContents = wrd.cread + wrd.cDirectory + wrd.cContents; // readDirectoryContents
let creadDirectorySynchronously = wrd.cread + wrd.cDirectory + wrd.cSynchronously; // readDirectorySynchronously
let cappendMessageToFile = wrd.cappend + wrd.cMessage + bas.cTo + wrd.cFile; // appendMessageToFile

// loggers
let cconsoleLog = wrd.cconsole + gen.cLog; // consoleLog

// prompt
let cprompt = wrd.cprompt; // prompt

// timers
let cgetNowMoment = wrd.cget + wrd.cNow + wrd.cMoment; // getNowMoment
let ccomputeDeltaTime = wrd.ccompute + gen.cDelta + wrd.cTime; // computeDeltaTime

// main
let cinitFramework = gen.cinit + wrd.cFramework; // initFramework

module.exports = {
  // dataBroker
  [bas.cc + cscanDataPath]: cscanDataPath, // scanDataPath
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
