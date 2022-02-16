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
export const cApplicationName = wr2.cApplication + wr2.cName; // ApplicationName
export const cAppPath = wr2.cApp + wr2.cPath; // AppPath
export const cResourcesCommonPath = wr2.cResources + wr2.cCommon + wr2.cPath; // ResourcesCommonPath
export const cCommandsCommonPath = wr2.cCommands + wr2.cCommon + wr2.cPath; // CommandsCommonPath
export const cConfigurationCommonPath = wr2.cConfiguration + wr2.cCommon + wr2.cPath; // ConfigurationCommonPath
export const cWorkflowsCommonPath = wr2.cWorkflows + wr2.cCommon + wr2.cPath; // WorkflowsCommonPath
export const cReleasePath = wr2.cRelease + wr2.cPath; // ReleasePath
export const cFullResourcesPath = wr2.cFull + wr2.cResources + wr2.cPath; // FullResourcesPath
export const cFullCommandsPath = wr2.cFull + wr2.cCommands + wr2.cPath; // FullCommandsPath
export const cFullConfigurationPath = wr2.cFull + wr2.cConfiguration + wr2.cPath; // FullConfigurationPath
export const cFullWorkflowsPath = wr2.cFull + wr2.cWorkflows + wr2.cPath; // fullWorkflowsPath
export const cmetaDataPath = wr2.cmetaData + wr2.cPath; // metaDataPath

// clientStringParsing
export const cclientStringParsingDotCustomEcho = wr2.cclient + wr2.cString + wr2.cParsing + wr2.cDot + wr2.cCustom + wr2.cEcho; // clientStringParsingDotCustomEcho

// Application Message Constants
export const capplicationMessage = wr2.capplication + wr2.cMessage; // applicationMessage
export const capplicationMessage01 = capplicationMessage + wr2.c0 + wr2.c1; // applicationMessage01
export const capplicationMessage02 = capplicationMessage + wr2.c0 + wr2.c2; // applicationMessage01
export const capplicationMessage03 = capplicationMessage + wr2.c0 + wr2.c3; // applicationMessage01
export const capplicationMessage04 = capplicationMessage + wr2.c0 + wr2.c4; // applicationMessage01
export const capplicationMessage05 = capplicationMessage + wr2.c0 + wr2.c5; // applicationMessage01
