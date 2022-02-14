/**
 * @file application.message.constants.js
 * @module application.message.constants
 * @description Contains many re-usable application message constants.
 * @requires module:haystacks
 * @requires module:haystacks.basic.constants
 * @requires module:haystacks.word.constants
 * @author Seth Hollingsead
 * @date 2021/12/30
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

import haystacks from 'haystacks';
import * as app_con from './application.constant.constants.js';
let bas = haystacks.bas;
let wr1 = haystacks.wr1;

// Client String Parsing
let cclientStringParsingDotCustomEcho = wr1.cclient + wr1.cString + wr1.cParsing + bas.cDot + wr1.cCustom + wr1.cEcho; // clientStringParsing.customEcho

// Application Test Harness
let capplicationMessage01 = wr1.cBEGIN + bas.cSpace + wr1.cmain + bas.cSpace + wr1.cprogram + bas.cSpace + wr1.cloop; // BEGIN main program loop
let capplicationMessage02 = wr1.cBEGIN + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cparser; // BEGIN command parser
let capplicationMessage03 = wr1.cEND + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cparser; // END command parser
let capplicationMessage04 = wr1.cEND + bas.cSpace + wr1.cmain + bas.cSpace + wr1.cprogram + bas.cSpace + wr1.cloop; // END main program loop
let capplicationMessage05 = wr1.cExiting + bas.cSpace + wr1.cTEST + bas.cSpace + wr1.cHARNESS + bas.cSpace + wr1.cAPPLICATION; // Exiting TEST HARNESS APPLICATION

export default {
  // Client String Parsing
  [bas.cc + app_con.cclientStringParsingDotCustomEcho]: cclientStringParsingDotCustomEcho, // clientStringParsing.customEcho

  // Application Test Harness
  [bas.cc + app_con.capplicationMessage01]: capplicationMessage01, // BEGIN main program loop
  [bas.cc + app_con.capplicationMessage02]: capplicationMessage02, // BEGIN command parser
  [bas.cc + app_con.capplicationMessage03]: capplicationMessage03, // END command parser
  [bas.cc + app_con.capplicationMessage04]: capplicationMessage04, // END main program loop
  [bas.cc + app_con.capplicationMessage05]: capplicationMessage05 // Exiting TEST HARNESS APPLICATION
};
