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
let csystemEnableDebugConfigurationSettings = wrd.csystem + bas.cDot + wrd.cenable + wrd.cDebug + wrd.cConfiguration + wrd.cSettings; // system.enableDebugConfigurationSettings
let cdebugSettings = wrd.cdebug + wrd.cSettings; // debugSettings

module.exports = {
  ['crootPath']: crootPath, // rootPath
  ['cappRootPath']: cappRootPath, // appRootPath
  ['cappConfigPath']: cappConfigPath, // appConfigPath
  ['cframeworkConfigPath']: cframeworkConfigPath, // frameworkConfigPath
  ['cappConfigReferencePath']: cappConfigReferencePath, // appConfigReferencePath
  ['csystemEnableDebugConfigurationSettings']: csystemEnableDebugConfigurationSettings, // system.enableDebugConfigurationSettings
  ['cdebugSettings']: cdebugSettings
};
