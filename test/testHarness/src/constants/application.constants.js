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
export const cAppDevPath = bas.cForwardSlash + wr1.csrc + bas.cForwardSlash; // /src/
export const cAppProdPath = bas.cForwardSlash + wr1.cbin + bas.cForwardSlash; // /bin/
export const cResourcesCommonPath = wr1.cresources + bas.cForwardSlash; // resources/
export const cCommandsCommonPath = wr1.ccommands + bas.cForwardSlash; // commands/
export const cConfigurationCommonPath = wr1.cconfiguration + bas.cForwardSlash; // configuration/
export const cWorkflowsCommonPath = wr1.cworkflows + bas.cForwardSlash; // workflows/
export const cReleasePath = wr1.crelease + bas.cForwardSlash; // release/

// Full Dev paths
export const cFullDevResourcesPath = cAppDevPath + cResourcesCommonPath; // /test/testHarness/src/resources/
export const cFullDevCommandsPath = cFullDevResourcesPath + cCommandsCommonPath; // /test/testHarness/src/resources/commands/
export const cFullDevConfigurationPath = cFullDevResourcesPath + cConfigurationCommonPath; // /test/testHarness/src/resources/configuration/
export const cFullDevWorkflowsPath = cFullDevResourcesPath + cWorkflowsCommonPath; // /test/testHarness/src/resources/workflows/
export const cmetaDataDevPath = cFullDevResourcesPath + sys.cmetaDatadotJson; // test/testHarness/src/resources/metaData.json

// Full Prod paths
export const cFullProdResourcesPath = cAppProdPath + cResourcesCommonPath; // /test/testHarness/bin/resources/
export const cFullProdCommandsPath = cFullProdResourcesPath + cCommandsCommonPath; // /test/testHarness/bin/resources/commands/
export const cFullProdConfigurationPath = cFullProdResourcesPath + cConfigurationCommonPath; // /test/testHarness/bin/resources/configuration/
export const cFullProdWorkflowsPath = cFullProdResourcesPath + cWorkflowsCommonPath; // /test/testHarness/bin/resources/workflows/
export const cmetaDataProdPath = cFullProdResourcesPath + sys.cmetaDatadotJson; // test/testHarness/bin/resources/metaData.json
