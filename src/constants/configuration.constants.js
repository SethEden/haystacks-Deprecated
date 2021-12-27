/**
 * @file configuration.constants.js
 * @module configuration.constants
 * @description Contains all re-usable configuration constants.
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:word.constants
 * @requires module:system.constants
 * @author Seth Hollingsead
 * @date 2021/11/09
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var bas = require('./basic.constants');
var gen = require('./generic.constants');
var wrd = require('./word.constants');
var sys = require('./system.constants');

let crootPath = wrd.croot + wrd.cPath; // rootPath
let cappRootPath = gen.capp + wrd.cRoot + wrd.cPath; // appRootPath
let cappConfigPath = gen.capp + wrd.cConfig + wrd.cPath; // appConfigPath
let cframeworkConfigPath = wrd.cframework + wrd.cConfig + wrd.cPath; // frameworkConfigPath
let cappConfigReferencePath = gen.capp + wrd.cConfig + wrd.cReference + wrd.cPath; // appConfigReferencePath
let cdebugSetting = wrd.cdebug + wrd.cSetting; // debugSetting
let cdebugSettings = wrd.cdebug + wrd.cSettings; // debugSettings
let cdebugFiles = wrd.cdebug + wrd.cFiles; // debugFiles
let cdebugFunctions = wrd.cdebug + wrd.cFunctions; // debugFunctions
let cincludeDateTimeStampInLogFiles = wrd.cinclude + wrd.cDate + wrd.cTime + wrd.cStamp + bas.cIn + gen.cLog + wrd.cFiles; // includeDateTimeStampInLogFiles
let cLogFilePathAndName = wrd.cLog + wrd.cFile + wrd.cPath + wrd.cAnd + wrd.cName; // LogFilePathAndName
let cDataLogFilePathAndName = wrd.cData + wrd.cLog + wrd.cFile + wrd.cPath + wrd.cAnd + wrd.cName; // DataLogFilePathAndName
let cExecutionJournalFilePathAndName = wrd.cExecution + wrd.cJournal + wrd.cFile + wrd.cPath + wrd.cAnd + wrd.cName; // ExecutionJournalFilePathAndName
let cResultsLogFilePathAndName = wrd.cResults + wrd.cLog + wrd.cFile + wrd.cPath + wrd.cAnd + wrd.cName; // ResultsLogFilePathAndName
let cTestDataPath = wrd.cTest + wrd.cData + wrd.cPath; // TestDataPath
let cconsoleLogEnabled = wrd.cconsole + wrd.cLog + wrd.cEnabled; // consoleLogEnabled
let cLogFileEnabled = wrd.cLog + wrd.cFile + wrd.cEnabled; // LogFileEnabled
let cIncludeDateTimeStampInLogFiles = wrd.cInclude + wrd.cDate + wrd.cTime + wrd.cStamp + bas.cIn + gen.cLog + wrd.cFiles; // IncludeDateTimeStampInLogFiles

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
