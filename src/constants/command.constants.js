/**
 * @file command.constants.js
 * @module command.constants
 * @description Contains many re-usable command constants
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:word1.constants
 * @requires module:system.constants
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

let bas = require('../../constants/basic.constants');
let biz = require('../../constants/business.constants');
let wr1 = require('../../constants/word1.constants');
let sys = require('../../constants/system.constants');

// Generic Commands constants

// ***********************************************
// Nominal commands in order
// ***********************************************
let cechoCommand = biz.cecho + wr1.cCommand; // echoCommand
let cEchoCommand = biz.cEcho + wr1.cCommand; // EchoCommand
let cclearScreen = wr1.cclear + wr1.cScreen; // clearScreen

module.exports = {
  // Generic Commands constants

  // ***********************************************
  // Nominal commands in order
  // ***********************************************
  [bas.cc + cechoCommand]: cechoCommand, // echoCommand
  [bas.cc + cEchoCommand]: cEchoCommand, // EchoCommand
  [bas.cc + cclearScreen]: cclearScreen, // clearScreen
};
