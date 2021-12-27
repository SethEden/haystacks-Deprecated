/**
 * @file message.constants.js
 * @module message-constants
 * @description Contains many re-usable message constants.
 * @requires module:basic.constants
 * @requires module:phonic.constants
 * @requires module:numeric.constants
 * @requires module:generic.constants
 * @requires module:word.constants
 * @requires module:system.constants
 * @author Seth Hollingsead
 * @date 2021/12/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

import * as bas from './basic.constants';
import * as phn from './phonic.constants';
import * as num from './numeric.constants';
import * as gen from './generic.constants';
import * as wrd from './word.constants';
import * as sys from './system.constants';

// Logging Constants
let cBEGIN_Function = wrd.cBEGIN + bas.cSpace + bas.cDoublePercent + bas.cSpace + wrd.cFunction; // BEGIN %% Function
let cEND_Function = wrd.cEND + bas.cSpace + bas.cDoublePercent + bas.cSpace + wrd.cFunction; // END %% Function
let cinputData = wrd.cinput + wrd.cData; // inputData
let cInputData = wrd.cInput + wrd.cData; // InputData
let cinputMetaData = wrd.cinput + wrd.cMetaData; // inputMetaData
let cInputMetaData = wrd.cInput + wrd.cMetaData; // InputMetaData
let cinputDataIs = cinputData + sys.cSpaceIsColonSpace; // input Data is:
let cinputMetaDataIs = wrd.cinput + wrd.cMetaData + sys.cSpaceIsColonSpace; // input MetaData is:
let creturnDataIs = sys.creturnData + sys.cSpaceIsColonSpace; // return Data is:

// System Messages
let cdataPathIs = wrd.cdata + wrd.cPath + sys.cSpaceIsColonSpace; // dataPath is:
let cfilesFoundIs = wrd.cfiles + wrd.cFound + sys.cSpaceIsColonSpace; // filesFound is:
let cfileToLoadIs = wrd.cfile + wrd.cTo + wrd.cLoad + sys.cSpaceIsColonSpace; // fileToLoad is:
let cfilesToLoadIs = wrd.cfiles + wrd.cTo + wrd.cLoad + sys.cSpaceIsColonSpace; // filesToLoad is:
let ccontextNameIs = wrd.ccontext + wrd.cName + sys.cSpaceIsColonSpace; // contextName is:
let cdataFileToMergeIs = wrd.cdata + wrd.cFile + bas.cSpace + bas.cTo + bas.cSpace + wrd.cmerge + sys.cSpaceIsColonSpace; // dataFile to merge is:
let cparsedDataFileIs = wrd.cparsed + wrd.cData + wrd.cFile + sys.cSpaceIsColonSpace; // parsedDataFile is:
let cexecuteBusinessRules = wrd.cexecute + bas.cSpace + wrd.cbusiness + bas.cSpace + wrd.crules + bas.cColon + bas.cSpace; // execute business rules:
let cdataFileIs = wrd.cdata + wrd.cFile + sys.cSpaceIsColonSpace; // dataFile is:
let cmergedDataIs = wrd.cmerged + wrd.cData + sys.cSpaceIsColonSpace; // mergedData is:
let cdebugConfigurationSettingValueIs = wrd.cdebug + wrd.cConfiguration + wrd.cSetting + wrd.cValue + sys.cSpaceIsColonSpace; // debugConfigurationSettingValue is:
let cappConfigPathIs = phn.capp + wrd.cConfig + wrd.cPath + sys.cSpaceIsColonSpace; // appConfigPath is:
let cframeworkConfigPathIs = wrd.cframework + wrd.cConfig + wrd.cPath + sys.cSpaceIsColonSpace; // frameworkConfigPath is:
let cALL_DATA_IS = wrd.cALL + wrd.cDATA + sys.cSpaceIsColonSpace; // ALL DATA is:
let cAllLoadedDataIs = wrd.cAll + wrd.cloaded + wrd.cdata + sys.cSpaceIsColonSpace; // All loaded data is:
let cconfigDataIs = wrd.cconfig + wrd.cData + sys.cSpaceIsColonSpace; // configData is:
let cERROR = wrd.cERROR + bas.cColon + bas.cSpace; // ERROR:
// ERROR: Invalid access to:
let cErrorInvalidAccessTo = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cInvalid + bas.cSpace + wrd.cAccess + bas.cSpace + wrd.cTo + bas.cColon + bas.cSpace;
let crootPathIs = wrd.croot + wrd.cPath + sys.cSpaceIsColonSpace; // rootPath is:
let caskIs = wrd.cask + sys.cSpaceIsColonSpace; // ask is:
let cINPUT = wrd.cINPUT + bas.cColon + bas.cSpace; // INPUT:
let cinputIs = wrd.cinput + sys.cSpaceIsColonSpace; // input is:
let cstartTimeIs = wrd.cstart + wrd.cTime + sys.cSpaceIsColonSpace; // startTime is:
let cendTimeIs = wrd.cend + wrd.cTime + sys.cSpaceIsColonSpace; // endTime is:
let cdeltaTimeResultIs = wrd.cdelta + wrd.cTime + wrd.cResult + sys.cSpaceIsColonSpace; // deltaTimeResult is:
let cclientConfigurationIs = wrd.cclient + wrd.cConfiguration + sys.cSpaceIsColonSpace; // clientConfiguration is:
// 'Caught the case that the input string contains the global carriage return term.'
let cprompt01 = '';
// 'index of the carriage return character: '
let cprompt02 = '';
// 'Caught the case that the string includes a carriage return and new line characters.'
let cprompt03 = '';

// Coded System Messages
// '!mergedData[wrd.csystem] && !D[wrd.csystem] === true'
let cdebugSettingsEnabledLogic01 = '';
// '!mergedData[wrd.csystem] && D[wrd.csystem] === true'
let cdebugSettingsEnabledLogic02 = '';
// 'D[wrd.csystem][systemDotDebugSettings] === true'
let cdebugSettingsEnabledLogic03 = '';
// 'D[wrd.csystem][systemDotDebugSettings] === false'
let cdebugSettingsEnabledLogic04 = '';
// 'mergedData[wrd.csystem] && !D[wrd.csystem] === true'
let cdebugSettingsEnabledLogic05 = '';
// 'mergedData[wrd.csystem][systemDotDebugSettings] === true'
let cdebugSettingsEnabledLogic06 = '';
// 'mergedData[wrd.csystem][systemDotDebugSettingss] === false'
let cdebugSettingsEnabledLogic07 = '';
// 'else mergedData[wrd.csystem] && D[wrd.csystem] === true'
let cdebugSettingsEnabledLogic08 = '';
// '!mergedData[wrd.csystem][systemDotDebugSettings] && !D[wrd.csystem][systemDotDebugSettings] === true'
let cdebugSettingsEnabledLogic09 = '';
// '!mergedData[wrd.csystem][systemDotDebugSettings] && D[wrd.csystem][systemDotDebugSettings] === true'
let cdebugSettingsEnabledLogic10 = '';
// 'mergedData[wrd.csystem][systemDotDebugSettings] && !D[wrd.csystem][systemDotDebugSettings] === true'
let cdebugSettingsEnabledLogic11 = '';
// 'mergedData[wrd.csystem][systemDotDebugSettings] && D[wrd.csystem][systemDotDebugSettings] === true'
let cdebugSettingsEnabledLogic12 = '';

module.exports = {
  // Logging Constants
  [bas.cc + cBEGIN_Function]: cBEGIN_Function, // BEGIN %% Function
  [bas.cc + cEND_Function]: cEND_Function, // END %% Function
  [bas.cc + cinputData]: cinputData, // inputData
  [bas.cc + cInputData]: cInputData, // InputData
  [bas.cc + cinputMetaData]: cinputMetaData, // inputMetaData
  [bas.cc + cInputMetaData]: cInputMetaData, // InputMetaData
  [bas.cc + cinputDataIs]: cinputDataIs, // input Data is:
  [bas.cc + cinputMetaDataIs]: cinputMetaDataIs, // input MetaData is:
  [bas.cc + creturnDataIs]: creturnDataIs, // return Data is:

  // System Messages
  [bas.cc + cdataPathIs]: cdataPathIs, // dataPath is:
  [bas.cc + cfilesFoundIs]: cfilesFoundIs, // filesFound is:
  [bas.cc + cfileToLoadIs]: cfileToLoadIs, // fileToLoad is:
  [bas.cc + cfilesToLoadIs]: cfilesToLoadIs, // filesToLoad is:
  [bas.cc + ccontextNameIs]: ccontextNameIs, // contextName is:
  [bas.cc + cdataFileToMergeIs]: cdataFileToMergeIs, // dataFile to merge is:
  [bas.cc + cparsedDataFileIs]: cparsedDataFileIs, // parsedDataFile is:
  [bas.cc + cexecuteBusinessRules]: cexecuteBusinessRules, // execute business rules:
  [bas.cc + cdataFileIs]: cdataFileIs, // dataFile is:
  [bas.cc + cmergedDataIs]: cmergedDataIs, // mergedData is:
  [bas.cc + cdebugConfigurationSettingValueIs]: cdebugConfigurationSettingValueIs, // debugConfigurationSettingValue is:
  [bas.cc + cappConfigPathIs]: cappConfigPathIs, // appConfigPath is:
  [bas.cc + cframeworkConfigPathIs]: cframeworkConfigPathIs, // frameworkConfigPath is:
  [bas.cc + cALL_DATA_IS]: cALL_DATA_IS, // ALL DATA is:
  [bas.cc + cAllLoadedDataIs]: cAllLoadedDataIs, // All loaded data is:
  [bas.cc + cconfigDataIs]: cconfigDataIs, // configData is:
  [bas.cc + cERROR]: cERROR, // ERROR:
  [bas.cc + cErrorInvalidAccessTo]: cErrorInvalidAccessTo, // ERROR: Invalid access to:
  [bas.cc + crootPathIs]: crootPathIs, // rootPath is:
  [bas.cc + caskIs]: caskIs, // ask is:
  [bas.cc + cINPUT]: cINPUT, // INPUT:
  [bas.cc + cinputIs]: cinputIs, // input is:
  [bas.cc + cstartTimeIs]: cstartTimeIs, // startTime is:
  [bas.cc + cendTimeIs]: cendTimeIs, // endTime is:
  [bas.cc + cdeltaTimeResultIs]: cdeltaTimeResultIs, // deltaTimeResult is:
  [bas.cc + cclientConfigurationIs]: cclientConfigurationIs, // clientConfiguration is:
  [bas.cc + cprompt01]: cprompt01, // 'Caught the case that the input string contains the global carriage return term.'
  [bas.cc + cprompt02]: cprompt02, // 'index of the carriage return character: '
  [bas.cc + cprompt03]: cprompt03, // 'Caught the case that the string includes a carriage return and new line characters.'

  // Coded System Messages
  [bas.cc + cdebugSettingsEnabledLogic01]: cdebugSettingsEnabledLogic01, // '!mergedData[wrd.csystem] && !D[wrd.csystem] === true'
  [bas.cc + cdebugSettingsEnabledLogic02]: cdebugSettingsEnabledLogic02, // '!mergedData[wrd.csystem] && D[wrd.csystem] === true'
  [bas.cc + cdebugSettingsEnabledLogic03]: cdebugSettingsEnabledLogic03, // 'D[wrd.csystem][systemDotDebugSettings] === true'
  [bas.cc + cdebugSettingsEnabledLogic04]: cdebugSettingsEnabledLogic04, // 'D[wrd.csystem][systemDotDebugSettings] === false'
  [bas.cc + cdebugSettingsEnabledLogic05]: cdebugSettingsEnabledLogic05, // 'mergedData[wrd.csystem] && !D[wrd.csystem] === true'
  [bas.cc + cdebugSettingsEnabledLogic06]: cdebugSettingsEnabledLogic06, // 'mergedData[wrd.csystem][systemDotDebugSettings] === true'
  [bas.cc + cdebugSettingsEnabledLogic07]: cdebugSettingsEnabledLogic07, // 'mergedData[wrd.csystem][systemDotDebugSettingss] === false'
  [bas.cc + cdebugSettingsEnabledLogic08]: cdebugSettingsEnabledLogic08, // 'else mergedData[wrd.csystem] && D[wrd.csystem] === true'
  [bas.cc + cdebugSettingsEnabledLogic09]: cdebugSettingsEnabledLogic09, // '!mergedData[wrd.csystem][systemDotDebugSettings] && !D[wrd.csystem][systemDotDebugSettings] === true'
  [bas.cc + cdebugSettingsEnabledLogic10]: cdebugSettingsEnabledLogic10, // '!mergedData[wrd.csystem][systemDotDebugSettings] && D[wrd.csystem][systemDotDebugSettings] === true'
  [bas.cc + cdebugSettingsEnabledLogic11]: cdebugSettingsEnabledLogic11, // 'mergedData[wrd.csystem][systemDotDebugSettings] && !D[wrd.csystem][systemDotDebugSettings] === true'
  [bas.cc + cdebugSettingsEnabledLogic12]: cdebugSettingsEnabledLogic12, // 'mergedData[wrd.csystem][systemDotDebugSettings] && D[wrd.csystem][systemDotDebugSettings] === true'
};
