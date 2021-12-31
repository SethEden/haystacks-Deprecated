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

import haystacks from '../../src/main.js';
var bas = haystacks.bas;
var wr2 = haystacks.wr2;

let capplicationMessage = wr2.capplication + wr2.cMessage; // applicationMessage

let cclientConfigurationPath = wr2.cclient + wr2.cConfiguration + wr2.cPath;
let capplicationMessage01 = capplicationMessage + wr2.c0 + wr2.c1; // applicationMessage01
let capplicationMessage02 = capplicationMessage + wr2.c0 + wr2.c2; // applicationMessage01
let capplicationMessage03 = capplicationMessage + wr2.c0 + wr2.c3; // applicationMessage01
let capplicationMessage04 = capplicationMessage + wr2.c0 + wr2.c4; // applicationMessage01
let capplicationMessage05 = capplicationMessage + wr2.c0 + wr2.c5; // applicationMessage01

module.exports = {
  [bas.cc + cclientConfigurationPath]: cclientConfigurationPath, // clientConfigurationPath
  [bas.cc + capplicationMessage01]: capplicationMessage01, // applicationMessage01
  [bas.cc + capplicationMessage02]: capplicationMessage02, // applicationMessage01
  [bas.cc + capplicationMessage03]: capplicationMessage03, // applicationMessage01
  [bas.cc + capplicationMessage04]: capplicationMessage04, // applicationMessage01
  [bas.cc + capplicationMessage05]: capplicationMessage05, // applicationMessage01
};
