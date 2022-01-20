/**
 * @file application.constants.js
 * @module application.constants
 * @description Contains many re-usable application constants.
 * @requires module.application.constant.constants
 * @requires module:haystacks.basic.constants
 * @requires module:haystacks.word.constants
 * @author Seth Hollingsead
 * @date 2021/12/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

import haystacks from '../../src/main.js';
let apcon = require('./application.constant.constants');
let bas = haystacks.bas;
let wr1 = haystacks.wr1;

// "//test//resources//configuration//"
let cclientConfigurationPath = bas.cDoubleForwardSlash + wr1.ctest + bas.cDoubleForwardSlash + wr1.cresources + bas.cDoubleForwardSlash + wr1.cconfiguration + bas.cDoubleForwardSlash;

module.exports = {
  [bas.cc + apcon.cclientConfigurationPath]: cclientConfigurationPath // "//test//resources//configuration//"
};
