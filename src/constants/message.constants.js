/**
 * @file message.constants.js
 * @module message-constants
 * @description Contains many re-usable message constants.
 * @requires module:basic.constants
 * @requires module:phonic.constants
 * @requires module:numeric.constants
 * @requires module:generic.constants
 * @requires module:word.constants
 * @requires module:system.constants
 * @author Seth Hollingsead
 * @date 2021/12/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

import * as bas from './basic.constants';
import * as phn from './phonic.constants';
import * as num from './numeric.constants';
import * as gen from './generic.constants';
import * as wrd from './word.constants';
import * as sys from './system.constants';

// Logging Constants
let cBEGIN_Function = wrd.cBEGIN + bas.cSpace + bas.cPercent + bas.cPercent + bas.cSpace + wrd.cFunction; // BEGIN %% Function
let cEND_Function = wrd.cEND + bas.cSpace + bas.cPercent + bas.cPercent + bas.cSpace + wrd.cFunction; // END %% Function
let cinputData = wrd.cinput + wrd.cData; // inputData
let cInputData = wrd.cInput + wrd.cData; // InputData
let cinputMetaData = wrd.cinput + wrd.cMetaData; // inputMetaData
let cInputMetaData = wrd.cInput + wrd.cMetaData; // InputMetaData
let cinputDataIs = cinputData + sys.cSpaceIsColonSpace; // input Data is:
let cinputMetaDataIs = wrd.cinput + wrd.cMetaData + sys.cSpaceIsColonSpace; // input MetaData is:
let creturnDataIs = sys.creturnData + sys.cSpaceIsColonSpace; // return Data is:

// System Messages

module.exports = {
  // Logging Constants
  [bas.cc + cBEGIN_Function]: cBEGIN_Function, // BEGIN %% Function
  [bas.cc + cEND_Function]: cEND_Function, // END %% Function
  [bas.cc + cinputData]: cinputData, // inputData
  [bas.cc + cInputData]: cInputData, // InputData
  [bas.cc + cinputMetaData]: cinputMetaData, // inputMetaData
  [bas.cc + cInputMetaData]: cInputMetaData, // InputMetaData
  [bas.cc + cinputDataIs]: cinputDataIs, // input Data is:
  [bas.cc + cinputMetaDataIs]: cinputMetaDataIs, // input MetaData is:
  [bas.cc + creturnDataIs]: creturnDataIs // return Data is:

  // System Messages

};
