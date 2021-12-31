/**
 * @file message.constants.js
 * @module message-constants
 * @description Contains many re-usable message constants.
 * @requires module:basic.constants
 * @requires module:constant.constants
 * @requires module:phonic.constants
 * @requires module:numeric.constants
 * @requires module:generic.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @author Seth Hollingsead
 * @date 2021/12/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var bas = require('./basic.constants');
var con = require('./constant.constants');
var phn = require('./phonic.constants');
var num = require('./numeric.constants');
var gen = require('./generic.constants');
var sys = require('./system.constants');
var wr1 = require('./word1.constants');

// Logging Constants
let cBEGIN_Function = wr1.cBEGIN + bas.cSpace + bas.cDoublePercent + bas.cSpace + wr1.cFunction; // BEGIN %% Function
let cEND_Function = wr1.cEND + bas.cSpace + bas.cDoublePercent + bas.cSpace + wr1.cFunction; // END %% Function
let cinputData = wr1.cinput + wr1.cData; // inputData
let cInputData = wr1.cInput + wr1.cData; // InputData
let cinputMetaData = wr1.cinput + wr1.cMetaData; // inputMetaData
let cInputMetaData = wr1.cInput + wr1.cMetaData; // InputMetaData
let cinputDataIs = cinputData + sys.cSpaceIsColonSpace; // input Data is:
let cinputMetaDataIs = wr1.cinput + wr1.cMetaData + sys.cSpaceIsColonSpace; // input MetaData is:
let creturnDataIs = wr1.creturn + wr1.cData + sys.cSpaceIsColonSpace; // return Data is:

// System Messages
let cdataPathIs = wr1.cdata + wr1.cPath + sys.cSpaceIsColonSpace; // dataPath is:
let cfilesFoundIs = wr1.cfiles + wr1.cFound + sys.cSpaceIsColonSpace; // filesFound is:
let cfileToLoadIs = wr1.cfile + wr1.cTo + wr1.cLoad + sys.cSpaceIsColonSpace; // fileToLoad is:
let cfilesToLoadIs = wr1.cfiles + wr1.cTo + wr1.cLoad + sys.cSpaceIsColonSpace; // filesToLoad is:
let ccontextNameIs = wr1.ccontext + wr1.cName + sys.cSpaceIsColonSpace; // contextName is:
let cdataFileToMergeIs = wr1.cdata + wr1.cFile + bas.cSpace + bas.cTo + bas.cSpace + wr1.cmerge + sys.cSpaceIsColonSpace; // dataFile to merge is:
let cparsedDataFileIs = wr1.cparsed + wr1.cData + wr1.cFile + sys.cSpaceIsColonSpace; // parsedDataFile is:
let cexecuteBusinessRules = wr1.cexecute + bas.cSpace + wr1.cbusiness + bas.cSpace + wr1.crules + bas.cColon + bas.cSpace; // execute business rules:
let cdataFileIs = wr1.cdata + wr1.cFile + sys.cSpaceIsColonSpace; // dataFile is:
let cmergedDataIs = wr1.cmerged + wr1.cData + sys.cSpaceIsColonSpace; // mergedData is:
let cdebugConfigurationSettingValueIs = wr1.cdebug + wr1.cConfiguration + wr1.cSetting + wr1.cValue + sys.cSpaceIsColonSpace; // debugConfigurationSettingValue is:
let cappConfigPathIs = phn.capp + wr1.cConfig + wr1.cPath + sys.cSpaceIsColonSpace; // appConfigPath is:
let cframeworkConfigPathIs = wr1.cframework + wr1.cConfig + wr1.cPath + sys.cSpaceIsColonSpace; // frameworkConfigPath is:
let cALL_DATA_IS = wr1.cALL + bas.cSpace + wr1.cDATA + bas.cSpace + wr1.cIS + bas.cColon + bas.cSpace; // ALL DATA is:
let cAllLoadedDataIs = wr1.cAll + bas.cSpace + wr1.cloaded + bas.cSpace + wr1.cdata + sys.cSpaceIsColonSpace; // All loaded data is:
let cconfigDataIs = wr1.cconfig + wr1.cData + sys.cSpaceIsColonSpace; // configData is:
let cERROR = wr1.cERROR + bas.cColon + bas.cSpace; // ERROR:
// ERROR: Invalid access to:
let cErrorInvalidAccessTo = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cInvalid + bas.cSpace + wr1.cAccess + bas.cSpace + wr1.cTo + bas.cColon + bas.cSpace;
let crootPathIs = wr1.croot + wr1.cPath + sys.cSpaceIsColonSpace; // rootPath is:
let caskIs = wr1.cask + sys.cSpaceIsColonSpace; // ask is:
let cINPUT = wr1.cINPUT + bas.cColon + bas.cSpace; // INPUT:
let cinputIs = wr1.cinput + sys.cSpaceIsColonSpace; // input is:
let cstartTimeIs = wr1.cstart + wr1.cTime + sys.cSpaceIsColonSpace; // startTime is:
let cendTimeIs = wr1.cend + wr1.cTime + sys.cSpaceIsColonSpace; // endTime is:
let cdeltaTimeResultIs = wr1.cdelta + wr1.cTime + wr1.cResult + sys.cSpaceIsColonSpace; // deltaTimeResult is:
let cclientConfigurationIs = wr1.cclient + wr1.cConfiguration + sys.cSpaceIsColonSpace; // clientConfiguration is:
// 'Caught the case that the input string contains the global carriage return term.'
let cprompt01 = 'cprompt01';
// 'index of the carriage return character: '
let cprompt02 = 'cprompt02';
// 'Caught the case that the string includes a carriage return and new line characters.'
let cprompt03 = 'cprompt03';
// '!file.includes(undefined)'
let cprintMessageToFile01 = 'cprintMessageToFile01';
// 'ERROR: Failure to log to file: '
let cprintMessageToFile02 = 'cprintMessageToFile02';
// 'ERROR: Log File includes undefined.'
let cprintMessageToFile03 = 'cprintMessageToFile03';

// Coded System Messages
// '!mergedData[wr1.csystem] && !D[wr1.csystem] === true'
let cdebugSettingsEnabledLogic01 = 'cdebugSettingsEnabledLogic01';
// '!mergedData[wr1.csystem] && D[wr1.csystem] === true'
let cdebugSettingsEnabledLogic02 = 'cdebugSettingsEnabledLogic02';
// 'D[wr1.csystem][systemDotDebugSettings] === true'
let cdebugSettingsEnabledLogic03 = 'cdebugSettingsEnabledLogic03';
// 'D[wr1.csystem][systemDotDebugSettings] === false'
let cdebugSettingsEnabledLogic04 = 'cdebugSettingsEnabledLogic04';
// 'mergedData[wr1.csystem] && !D[wr1.csystem] === true'
let cdebugSettingsEnabledLogic05 = 'cdebugSettingsEnabledLogic05';
// 'mergedData[wr1.csystem][systemDotDebugSettings] === true'
let cdebugSettingsEnabledLogic06 = 'cdebugSettingsEnabledLogic06';
// 'mergedData[wr1.csystem][systemDotDebugSettingss] === false'
let cdebugSettingsEnabledLogic07 = 'cdebugSettingsEnabledLogic07';
// 'else mergedData[wr1.csystem] && D[wr1.csystem] === true'
let cdebugSettingsEnabledLogic08 = 'cdebugSettingsEnabledLogic08';
// '!mergedData[wr1.csystem][systemDotDebugSettings] && !D[wr1.csystem][systemDotDebugSettings] === true'
let cdebugSettingsEnabledLogic09 = 'cdebugSettingsEnabledLogic09';
// '!mergedData[wr1.csystem][systemDotDebugSettings] && D[wr1.csystem][systemDotDebugSettings] === true'
let cdebugSettingsEnabledLogic10 = 'cdebugSettingsEnabledLogic10';
// 'mergedData[wr1.csystem][systemDotDebugSettings] && !D[wr1.csystem][systemDotDebugSettings] === true'
let cdebugSettingsEnabledLogic11 = 'cdebugSettingsEnabledLogic11';
// 'mergedData[wr1.csystem][systemDotDebugSettings] && D[wr1.csystem][systemDotDebugSettings] === true'
let cdebugSettingsEnabledLogic12 = 'cdebugSettingsEnabledLogic12';

module.exports = {
  // Logging Constants
  [bas.cc + con.cBEGIN_Function]: cBEGIN_Function, // BEGIN %% Function
  [bas.cc + con.cEND_Function]: cEND_Function, // END %% Function
  [bas.cc + con.cinputData]: cinputData, // inputData
  [bas.cc + con.cInputData]: cInputData, // InputData
  [bas.cc + con.cinputMetaData]: cinputMetaData, // inputMetaData
  [bas.cc + con.cInputMetaData]: cInputMetaData, // InputMetaData
  [bas.cc + con.cinputDataIs]: cinputDataIs, // input Data is:
  [bas.cc + con.cinputMetaDataIs]: cinputMetaDataIs, // input MetaData is:
  [bas.cc + con.creturnDataIs]: creturnDataIs, // return Data is:

  // System Messages
  [bas.cc + con.cdataPathIs]: cdataPathIs, // dataPath is:
  [bas.cc + con.cfilesFoundIs]: cfilesFoundIs, // filesFound is:
  [bas.cc + con.cfileToLoadIs]: cfileToLoadIs, // fileToLoad is:
  [bas.cc + con.cfilesToLoadIs]: cfilesToLoadIs, // filesToLoad is:
  [bas.cc + con.ccontextNameIs]: ccontextNameIs, // contextName is:
  [bas.cc + con.cdataFileToMergeIs]: cdataFileToMergeIs, // dataFile to merge is:
  [bas.cc + con.cparsedDataFileIs]: cparsedDataFileIs, // parsedDataFile is:
  [bas.cc + con.cexecuteBusinessRules]: cexecuteBusinessRules, // execute business rules:
  [bas.cc + con.cdataFileIs]: cdataFileIs, // dataFile is:
  [bas.cc + con.cmergedDataIs]: cmergedDataIs, // mergedData is:
  [bas.cc + con.cdebugConfigurationSettingValueIs]: cdebugConfigurationSettingValueIs, // debugConfigurationSettingValue is:
  [bas.cc + con.cappConfigPathIs]: cappConfigPathIs, // appConfigPath is:
  [bas.cc + con.cframeworkConfigPathIs]: cframeworkConfigPathIs, // frameworkConfigPath is:
  [bas.cc + con.cALL_DATA_IS]: cALL_DATA_IS, // ALL DATA is:
  [bas.cc + con.cAllLoadedDataIs]: cAllLoadedDataIs, // All loaded data is:
  [bas.cc + con.cconfigDataIs]: cconfigDataIs, // configData is:
  [bas.cc + con.cERROR]: cERROR, // ERROR:
  [bas.cc + con.cErrorInvalidAccessTo]: cErrorInvalidAccessTo, // ERROR: Invalid access to:
  [bas.cc + con.crootPathIs]: crootPathIs, // rootPath is:
  [bas.cc + con.caskIs]: caskIs, // ask is:
  [bas.cc + con.cINPUT]: cINPUT, // INPUT:
  [bas.cc + con.cinputIs]: cinputIs, // input is:
  [bas.cc + con.cstartTimeIs]: cstartTimeIs, // startTime is:
  [bas.cc + con.cendTimeIs]: cendTimeIs, // endTime is:
  [bas.cc + con.cdeltaTimeResultIs]: cdeltaTimeResultIs, // deltaTimeResult is:
  [bas.cc + con.cclientConfigurationIs]: cclientConfigurationIs, // clientConfiguration is:
  [bas.cc + con.cprompt01]: cprompt01, // 'Caught the case that the input string contains the global carriage return term.'
  [bas.cc + con.cprompt02]: cprompt02, // 'index of the carriage return character: '
  [bas.cc + con.cprompt03]: cprompt03, // 'Caught the case that the string includes a carriage return and new line characters.'
  [bas.cc + con.cprintMessageToFile01]: cprintMessageToFile01, // '!file.includes(undefined)'
  [bas.cc + con.cprintMessageToFile02]: cprintMessageToFile02, // 'ERROR: Failure to log to file: '
  [bas.cc + con.cprintMessageToFile03]: cprintMessageToFile03, // 'ERROR: Log File includes undefined.'

  // Coded System Messages
  [bas.cc + con.cdebugSettingsEnabledLogic01]: cdebugSettingsEnabledLogic01, // '!mergedData[wr1.csystem] && !D[wr1.csystem] === true'
  [bas.cc + con.cdebugSettingsEnabledLogic02]: cdebugSettingsEnabledLogic02, // '!mergedData[wr1.csystem] && D[wr1.csystem] === true'
  [bas.cc + con.cdebugSettingsEnabledLogic03]: cdebugSettingsEnabledLogic03, // 'D[wr1.csystem][systemDotDebugSettings] === true'
  [bas.cc + con.cdebugSettingsEnabledLogic04]: cdebugSettingsEnabledLogic04, // 'D[wr1.csystem][systemDotDebugSettings] === false'
  [bas.cc + con.cdebugSettingsEnabledLogic05]: cdebugSettingsEnabledLogic05, // 'mergedData[wr1.csystem] && !D[wr1.csystem] === true'
  [bas.cc + con.cdebugSettingsEnabledLogic06]: cdebugSettingsEnabledLogic06, // 'mergedData[wr1.csystem][systemDotDebugSettings] === true'
  [bas.cc + con.cdebugSettingsEnabledLogic07]: cdebugSettingsEnabledLogic07, // 'mergedData[wr1.csystem][systemDotDebugSettingss] === false'
  [bas.cc + con.cdebugSettingsEnabledLogic08]: cdebugSettingsEnabledLogic08, // 'else mergedData[wr1.csystem] && D[wr1.csystem] === true'
  [bas.cc + con.cdebugSettingsEnabledLogic09]: cdebugSettingsEnabledLogic09, // '!mergedData[wr1.csystem][systemDotDebugSettings] && !D[wr1.csystem][systemDotDebugSettings] === true'
  [bas.cc + con.cdebugSettingsEnabledLogic10]: cdebugSettingsEnabledLogic10, // '!mergedData[wr1.csystem][systemDotDebugSettings] && D[wr1.csystem][systemDotDebugSettings] === true'
  [bas.cc + con.cdebugSettingsEnabledLogic11]: cdebugSettingsEnabledLogic11, // 'mergedData[wr1.csystem][systemDotDebugSettings] && !D[wr1.csystem][systemDotDebugSettings] === true'
  [bas.cc + con.cdebugSettingsEnabledLogic12]: cdebugSettingsEnabledLogic12 // 'mergedData[wr1.csystem][systemDotDebugSettings] && D[wr1.csystem][systemDotDebugSettings] === true'
};
