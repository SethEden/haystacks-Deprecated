/**
 * @file application.constants.js
 * @module application.constants
 * @description Contains many re-usable application constants.
 * @requires module.application.constant.constants
 * @requires module:haystacks.basic.constants
 * @requires module:haystacks.configuration.constants
 * @requires module:haystacks.word.constants
 * @author Seth Hollingsead
 * @date 2021/12/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

import haystacks from '../../../src/main.js';
let apcon = require('./application.constant.constants');
let bas = haystacks.bas;
let cfg = haystacks.cfg;
let wr1 = haystacks.wr1;

let cApplicationName = 'testHarness';

// // "//test//testHarness//resources//configuration//"
// let cclientConfigurationPath = bas.cDoubleForwardSlash + wr1.ctest + bas.cDoubleForwardSlash + cApplicationName + bas.cDoubleForwardSlash + wr1.cresources + bas.cDoubleForwardSlash + wr1.cconfiguration + bas.cDoubleForwardSlash;
// // /resources/metaData.json
// let cmetaDataPath = bas.cForwardSlash + wr1.cresources + bas.cForwardSlash + cfg.cmetaDatadotJson;

// "/test/testHarness/"
let cAppPath = bas.cForwardSlash + wr1.ctest + bas.cForwardSlash + cApplicationName + bas.cForwardSlash;

// testHarness/resources/
let cResourcesCommonPath = wr1.cresources + bas.cForwardSlash;

let cDevelopResourcesPath = bas.cForwardSlash + wr1.csrc + bas.cForwardSlash + cResourcesCommonPath; // '/src/test/resources';
let cProductionResourcesPath = bas.cForwardSlash + wr1.cbin + bas.cForwardSlash + cResourcesCommonPath; // '/bin/test/resources';

let cDevelopRootPath =

module.exports = {
  [bas.cc + apcon.cclientConfigurationPath]: cclientConfigurationPath, // "//test//resources//configuration//"
  [bas.cc + apcon.cmetaDataPath]: cmetaDataPath // /resources/metaData.json
};
