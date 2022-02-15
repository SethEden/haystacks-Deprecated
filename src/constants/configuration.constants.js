/**
 * @file configuration.constants.js
 * @module configuration.constants
 * @description Contains all re-usable configuration constants.
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:word1.constants
 * @requires module:system.constants
 * @author Seth Hollingsead
 * @date 2021/11/09
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

import * as bas from './basic.constants.js';
import * as gen from './generic.constants.js';
import * as wr1 from './word1.constants.js';
import * as sys from './system.constants.js';

// Configuration Settings
export const crootPath = wr1.croot + wr1.cPath; // rootPath
export const cRootPath = wr1.cRoot + wr1.cPath; // RootPath
export const cappRootPath = gen.capp + wr1.cRoot + wr1.cPath; // appRootPath
export const cclientRootPath = wr1.cclient + wr1.cRoot + wr1.cPath; // clientRootPath
export const cframeworkRootPath = wr1.cframework + wr1.cRoot + wr1.cPath; // frameworkRootPath
export const cappConfigPath = gen.capp + wr1.cConfig + wr1.cPath; // appConfigPath
export const cframeworkConfigPath = wr1.cframework + wr1.cConfig + wr1.cPath; // frameworkConfigPath
export const cappConfigFiles = gen.capp + wr1.cConfig + wr1.cFiles; // appConfigFiles
export const cframeworkConfigFiles = wr1.cframework + wr1.cConfig + wr1.cFiles; // frameworkConfigFiles
export const cappConfigReferencePath = gen.capp + wr1.cConfig + wr1.cReference + wr1.cPath; // appConfigReferencePath
export const cdebugSetting = wr1.cdebug + wr1.cSetting; // debugSetting
export const cdebugSettings = wr1.cdebug + wr1.cSettings; // debugSettings
export const cdebugFiles = wr1.cdebug + wr1.cFiles; // debugFiles
export const cdebugFunctions = wr1.cdebug + wr1.cFunctions; // debugFunctions
export const cincludeDateTimeStampInLogFiles = wr1.cinclude + wr1.cDate + wr1.cTime + wr1.cStamp + bas.cIn + gen.cLog + wr1.cFiles; // includeDateTimeStampInLogFiles
export const cLogFilePathAndName = wr1.cLog + wr1.cFile + wr1.cPath + wr1.cAnd + wr1.cName; // LogFilePathAndName
export const cDataLogFilePathAndName = wr1.cData + wr1.cLog + wr1.cFile + wr1.cPath + wr1.cAnd + wr1.cName; // DataLogFilePathAndName
export const cExecutionJournalFilePathAndName = wr1.cExecution + wr1.cJournal + wr1.cFile + wr1.cPath + wr1.cAnd + wr1.cName; // ExecutionJournalFilePathAndName
export const cResultsLogFilePathAndName = wr1.cResults + wr1.cLog + wr1.cFile + wr1.cPath + wr1.cAnd + wr1.cName; // ResultsLogFilePathAndName
export const cTestDataPath = wr1.cTest + wr1.cData + wr1.cPath; // TestDataPath
export const cconsoleLogEnabled = wr1.cconsole + wr1.cLog + wr1.cEnabled; // consoleLogEnabled
export const cLogFileEnabled = wr1.cLog + wr1.cFile + wr1.cEnabled; // LogFileEnabled
export const cIncludeDateTimeStampInLogFiles = wr1.cInclude + wr1.cDate + wr1.cTime + wr1.cStamp + bas.cIn + gen.cLog + wr1.cFiles; // IncludeDateTimeStampInLogFiles
export const cEnableColorizedConsoleLogs = wr1.cEnable + wr1.cColorized + wr1.cConsole + wr1.cLogs; // EnableColorizedConsoleLogs
