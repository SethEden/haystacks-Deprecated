/**
 * @file application.constant.constants.js
 * @module application.constant.constants
 * @description Contains many re-usable application constant constants.
 * @requires module:haystacks.basic.constants
 * @requires module:haystacks.word.constants
 * @author Seth Hollingsead
 * @date 2021/12/30
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

import haystacks from 'haystacks';
let bas = haystacks.bas;
let wr2 = haystacks.wr2;

// Application Constants
let cApplicationName = wr2.cApplication + wr2.cName; // ApplicationName
let cAppPath = wr2.cApp + wr2.cPath; // AppPath
let cResourcesCommonPath = wr2.cResources + wr2.cCommon + wr2.cPath; // ResourcesCommonPath
let cCommandsCommonPath = wr2.cCommands + wr2.cCommon + wr2.cPath; // CommandsCommonPath
let cConfigurationCommonPath = wr2.cConfiguration + wr2.cCommon + wr2.cPath; // ConfigurationCommonPath
let cWorkflowsCommonPath = wr2.cWorkflows + wr2.cCommon + wr2.cPath; // WorkflowsCommonPath
let cReleasePath = wr2.cRelease + wr2.cPath; // ReleasePath
let cFullResourcesPath = wr2.cFull + wr2.cResources + wr2.cPath; // FullResourcesPath
let cFullCommandsPath = wr2.cFull + wr2.cCommands + wr2.cPath; // FullCommandsPath
let cFullConfigurationPath = wr2.cFull + wr2.cConfiguration + wr2.cPath; // FullConfigurationPath
let cFullWorkflowsPath = wr2.cFull + wr2.cWorkflows + wr2.cPath; // fullWorkflowsPath
let cmetaDataPath = wr2.cmetaData + wr2.cPath; // metaDataPath

// clientStringParsing
let cclientStringParsingDotCustomEcho = wr2.cclient + wr2.cString + wr2.cParsing + wr2.cDot + wr2.cCustom + wr2.cEcho; // clientStringParsingDotCustomEcho

// Application Message Constants
let capplicationMessage = wr2.capplication + wr2.cMessage; // applicationMessage
let capplicationMessage01 = capplicationMessage + wr2.c0 + wr2.c1; // applicationMessage01
let capplicationMessage02 = capplicationMessage + wr2.c0 + wr2.c2; // applicationMessage01
let capplicationMessage03 = capplicationMessage + wr2.c0 + wr2.c3; // applicationMessage01
let capplicationMessage04 = capplicationMessage + wr2.c0 + wr2.c4; // applicationMessage01
let capplicationMessage05 = capplicationMessage + wr2.c0 + wr2.c5; // applicationMessage01

module.exports = {
  // Application Constants
  [bas.cc + cApplicationName]: cApplicationName, // ApplicationName
  [bas.cc + cAppPath]: cAppPath, // AppPath
  [bas.cc + cResourcesCommonPath]: cResourcesCommonPath, // ResourcesCommonPath
  [bas.cc + cCommandsCommonPath]: cCommandsCommonPath, // CommandsCommonPath
  [bas.cc + cConfigurationCommonPath]: cConfigurationCommonPath, // ConfigurationCommonPath
  [bas.cc + cWorkflowsCommonPath]: cWorkflowsCommonPath, // WorkflowsCommonPath
  [bas.cc + cReleasePath]: cReleasePath, // ReleasePath
  [bas.cc + cFullResourcesPath]: cFullResourcesPath, // FullResourcesPath
  [bas.cc + cFullCommandsPath]: cFullCommandsPath, // FullCommandsPath
  [bas.cc + cFullConfigurationPath]: cFullConfigurationPath, // FullConfigurationPath
  [bas.cc + cFullWorkflowsPath]: cFullWorkflowsPath, // fullWorkflowsPath
  [bas.cc + cmetaDataPath]: cmetaDataPath, // metaDataPath

  // clientStringParsing
  [bas.cc + cclientStringParsingDotCustomEcho]: cclientStringParsingDotCustomEcho, // clientStringParsingDotCustomEcho

  // Application Message Constants
  [bas.cc + capplicationMessage01]: capplicationMessage01, // applicationMessage01
  [bas.cc + capplicationMessage02]: capplicationMessage02, // applicationMessage01
  [bas.cc + capplicationMessage03]: capplicationMessage03, // applicationMessage01
  [bas.cc + capplicationMessage04]: capplicationMessage04, // applicationMessage01
  [bas.cc + capplicationMessage05]: capplicationMessage05, // applicationMessage01
};
