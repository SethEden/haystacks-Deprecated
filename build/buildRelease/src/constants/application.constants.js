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
 * @date 2022/03/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// External imports
import haystacks from 'haystacks';
let bas = haystacks.bas;
let cfg = haystacks.cfg;
let sys = haystacks.sys;
let wr1 = haystacks.wr1;

export const cApplicationName = wr1.cbuild + wr1.cRelease; // buildRelease
export const cAppDevPath = bas.cForwardSlash + wr1.csrc + bas.cForwardSlash; // /src/
export const cAppProdPath = bas.cForwardSlash + wr1.cbin + bas.cForwardSlash; // /bin/
export const cResourcesCommonPath = wr1.cresources + bas.cForwardSlash; // resources/
export const cCommandsCommonPath = wr1.ccommands + bas.cForwardSlash; // commands/
export const cConstantsPath = wr1.cconstants + bas.cForwardSlash; // constants/
export const cConfigurationCommonPath = wr1.cconfiguration + bas.cForwardSlash; // configuration/
export const cWorkflowsCommonPath = wr1.cworkflows + bas.cForwardSlash; // workflows/
export const cReleasePath = bas.cForwardSlash + wr1.crelease + bas.cForwardSlash; // /release/
export const cForwardSlashPackageDotJson = bas.cForwardSlash + sys.cpackageDotJson; // /package.json

// Full Dev paths
export const cFullDevResourcesPath = cAppDevPath + cResourcesCommonPath; // /src/resources/
export const cFullDevCommandsPath = cFullDevResourcesPath + cCommandsCommonPath; // /src/resources/commands/
export const cFullDevConstantsPath = cAppDevPath + cConstantsPath; // /src/constants/
export const cFullDevConfigurationPath = cFullDevResourcesPath + cConfigurationCommonPath; // /src/resources/configuration/
export const cFullDevWorkflowsPath = cFullDevResourcesPath + cWorkflowsCommonPath; // /src/resources/workflows/
export const cmetaDataDevPath = cFullDevResourcesPath + sys.cmetaDatadotJson; // /src/resources/metaData.json

// Full Prod paths
export const cFullProdResourcesPath = cAppProdPath + cResourcesCommonPath; // /bin/resources/
export const cFullProdCommandsPath = cFullProdResourcesPath + cCommandsCommonPath; // /bin/resources/commands/
export const cFullProdConstantsPath = cAppProdPath + cConstantsPath; // /bin/constants/
export const cFullProdConfigurationPath = cFullProdResourcesPath + cConfigurationCommonPath; // /bin/resources/configuration/
export const cFullProdWorkflowsPath = cFullProdResourcesPath + cWorkflowsCommonPath; // /bin/resources/workflows/
export const cmetaDataProdPath = cFullProdResourcesPath + sys.cmetaDatadotJson; // /bin/resources/metaData.json
