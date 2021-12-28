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

var bas = require('./basic.constants');
var gen = require('./generic.constants');
var wr1 = require('./word1.constants');
var sys = require('./system.constants');

let crootPath = wr1.croot + wr1.cPath; // rootPath
let cappRootPath = gen.capp + wr1.cRoot + wr1.cPath; // appRootPath
let cappConfigPath = gen.capp + wr1.cConfig + wr1.cPath; // appConfigPath
let cframeworkConfigPath = wr1.cframework + wr1.cConfig + wr1.cPath; // frameworkConfigPath
let cappConfigReferencePath = gen.capp + wr1.cConfig + wr1.cReference + wr1.cPath; // appConfigReferencePath
let cdebugSetting = wr1.cdebug + wr1.cSetting; // debugSetting
let cdebugSettings = wr1.cdebug + wr1.cSettings; // debugSettings
let cdebugFiles = wr1.cdebug + wr1.cFiles; // debugFiles
let cdebugFunctions = wr1.cdebug + wr1.cFunctions; // debugFunctions
let cincludeDateTimeStampInLogFiles = wr1.cinclude + wr1.cDate + wr1.cTime + wr1.cStamp + bas.cIn + gen.cLog + wr1.cFiles; // includeDateTimeStampInLogFiles
let cLogFilePathAndName = wr1.cLog + wr1.cFile + wr1.cPath + wr1.cAnd + wr1.cName; // LogFilePathAndName
let cDataLogFilePathAndName = wr1.cData + wr1.cLog + wr1.cFile + wr1.cPath + wr1.cAnd + wr1.cName; // DataLogFilePathAndName
let cExecutionJournalFilePathAndName = wr1.cExecution + wr1.cJournal + wr1.cFile + wr1.cPath + wr1.cAnd + wr1.cName; // ExecutionJournalFilePathAndName
let cResultsLogFilePathAndName = wr1.cResults + wr1.cLog + wr1.cFile + wr1.cPath + wr1.cAnd + wr1.cName; // ResultsLogFilePathAndName
let cTestDataPath = wr1.cTest + wr1.cData + wr1.cPath; // TestDataPath
let cconsoleLogEnabled = wr1.cconsole + wr1.cLog + wr1.cEnabled; // consoleLogEnabled
let cLogFileEnabled = wr1.cLog + wr1.cFile + wr1.cEnabled; // LogFileEnabled
let cIncludeDateTimeStampInLogFiles = wr1.cInclude + wr1.cDate + wr1.cTime + wr1.cStamp + bas.cIn + gen.cLog + wr1.cFiles; // IncludeDateTimeStampInLogFiles

module.exports = {
  [bas.cc + crootPath]: crootPath, // rootPath
  [bas.cc + cappRootPath]: cappRootPath, // appRootPath
  [bas.cc + cappConfigPath]: cappConfigPath, // appConfigPath
  [bas.cc + cframeworkConfigPath]: cframeworkConfigPath, // frameworkConfigPath
  [bas.cc + cappConfigReferencePath]: cappConfigReferencePath, // appConfigReferencePath
  [bas.cc + cdebugSetting]: cdebugSetting, // debugSetting
  [bas.cc + cdebugSettings]: cdebugSettings, // debugSettings
  [bas.cc + cdebugFunctions]: cdebugFunctions, // debugFunctions
  [bas.cc + cdebugFiles]: cdebugFiles, // debugFiles
  [bas.cc + cincludeDateTimeStampInLogFiles]: cincludeDateTimeStampInLogFiles,
  [bas.cc + cLogFilePathAndName]: cLogFilePathAndName, // LogFilePathAndName
  [bas.cc + cDataLogFilePathAndName]: cDataLogFilePathAndName, // DataLogFilePathAndName
  [bas.cc + cExecutionJournalFilePathAndName]: cExecutionJournalFilePathAndName, // ExecutionJournalFilePathAndName
  [bas.cc + cResultsLogFilePathAndName]: cResultsLogFilePathAndName, // ResultsLogFilePathAndName
  [bas.cc + cTestDataPath]: cTestDataPath, // TestDataPath
  [bas.cc + cconsoleLogEnabled]: cconsoleLogEnabled, // consoleLogEnabled
  [bas.cc + cLogFileEnabled]: cLogFileEnabled, // LogFileEnabled
  [bas.cc + cIncludeDateTimeStampInLogFiles]: cIncludeDateTimeStampInLogFiles // IncludeDateTimeStampInLogFiles
};
