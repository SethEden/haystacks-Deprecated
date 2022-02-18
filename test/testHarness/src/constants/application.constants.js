/**
 * @file application.constants.js
 * @module application.constants
 * @description Contains many re-usable application constants.
 * @requires module:haystacks
 * @requires module:haystacks.basic.constants
 * @requires module:haystacks.configuration.constants
 * @requires module:haystacks.system.constants
 * @requires module:haystacks.word1.constants
 * @author Seth Hollingsead
 * @date 2021/12/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// External imports
import haystacks from 'haystacks';
let bas = haystacks.bas;
let cfg = haystacks.cfg;
let sys = haystacks.sys;
let wr1 = haystacks.wr1;

export const cApplicationName = wr1.ctest + wr1.cHarness; // testHarness
export const cAppPath = bas.cForwardSlash + wr1.ctest + bas.cForwardSlash + cApplicationName + bas.cForwardSlash + wr1.csrc + bas.cForwardSlash; // "/test/testHarness/src/"
export const cResourcesCommonPath = wr1.cresources + bas.cForwardSlash; // resources/
export const cCommandsCommonPath = wr1.ccommands + bas.cForwardSlash; // commands/
export const cConfigurationCommonPath = wr1.cconfiguration + bas.cForwardSlash; // configuration/
export const cWorkflowsCommonPath = wr1.cworkflows + bas.cForwardSlash; // workflows/
export const cReleasePath = wr1.crelease + bas.cForwardSlash; // release/
export const cFullResourcesPath = cAppPath + cResourcesCommonPath; // /test/testHarness/src/resources/
export const cFullCommandsPath = cFullResourcesPath + cCommandsCommonPath; // /test/testHarness/src/resources/commands/
export const cFullConfigurationPath = cFullResourcesPath + cConfigurationCommonPath; // /test/testHarness/src/resources/configuration/
export const cFullWorkflowsPath = cFullResourcesPath + cWorkflowsCommonPath; // /test/testHarness/src/resources/workflows/
export const cmetaDataPath = cFullResourcesPath + sys.cmetaDatadotJson; // /resources/metaData.json
