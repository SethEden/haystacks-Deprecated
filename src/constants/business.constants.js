/**
 * @file business.constants.js
 * @module business.constants
 * @description Contains many re-usable business rules constants.
 * @requires module:basic.constants
 * @requires module:phonic.constants
 * @requires module:numeric.constants
 * @requires module:word.constants
 * @requires module:system.constants
 * @author Seth Hollingsead
 * @date 2021/10/29
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var bas = require('./basic.constants');
var phn = require('./phonic.constants');
var num = require('./numeric.constants');
var wrd = require('./word.constants');
var sys = require('./system.constants');

// Business Rules
let cecho = wrd.cecho; // echo
let cEcho = wrd.cEcho; // Echo

// *********************************
// ArrayParsing rules in order
// *********************************
let creplaceCharacterWithCharacter = wrd.creplace + wrd.cCharacter + wrd.cWith + wrd.cCharacter; // replaceCharacterWithCharacter

// ********************************
// StringParsing rules in order
// ********************************
let cparseSystemRootPath = wrd.cparse + wrd.cSystem + wrd.cRoot + wrd.cPath; // parseSystemRootPath
let cstringToDataType = wrd.cstring + wrd.cTo + wrd.cData + wrd.cType; // stringToDataType
let cstringToBoolean = wrd.cstring + wrd.cTo + wrd.cBoolean; // stringToBoolean
let cdetermineObjectDataType = wrd.cdetermine + wrd.cObject + wrd.cData + wrd.cType; // determineObjectDataType
let cisBoolean = wrd.cis + wrd.cBoolean; // isBoolean
let cisInteger = wrd.cis + wrd.cInteger; // isInteger
let cisFloat = wrd.cis + wrd.cFloat; // isFloat
let cisString = wrd.cis + wrd.cString; // isString
let csingleQuoteSwapAfterEquals = wrd.csingle + wrd.cQuote + wrd.cSwap + wrd.cAfter + wrd.cEquals; // singleQuoteSwapAfterEquals
let cswapForwardSlashToBackSlash = wrd.cswap + sys.cForwardSlash + bas.cTo + sys.cBackSlash; // swapForwadSlashToBackSlash
let cswapBackSlashToForwardSlash = wrd.cswap + sys.cBackSlash + bas.cTo + sys.cForwardSlash; // swapBackSlashToForwardSlash
let cswapDoubleForwardSlashToSingleForwardSlash = wrd.cswap + wrd.cDouble + sys.cForwardSlash + bas.cTo + wrd.cSingle + sys.cForwardSlash; // swapDoubleForwardSlashToSingleForwardSlash
let cswapDoubleBackSlashToSingleBackSlash = wrd.cswap + wrd.cDouble + sys.cBackSlash + bas.cTo + wrd.cSingle + sys.cBackSlash; // swapDoubleBackSlashToSingleBackSlash
let creplaceDoublePercentWithMessage = wrd.creplace + wrd.cDouble + wrd.cPercent + wrd.cWith + wrd.cMessage; // replaceDoublePercentWithMessage

module.exports = {
  // *********************************
  // ArrayParsing rules in order
  // *********************************
  [bas.cc + creplaceCharacterWithCharacter]: creplaceCharacterWithCharacter,

  // ********************************
  // StringParsing rules in order
  // ********************************
  [bas.cc + cparseSystemRootPath]: cparseSystemRootPath,
  [bas.cc + cstringToDataType]: cstringToDataType, // stringToDataType
  [bas.cc + cstringToBoolean]: cstringToBoolean, // stringToBoolean
  [bas.cc + cdetermineObjectDataType]: cdetermineObjectDataType, // determineObjectDataType
  [bas.cc + cisBoolean]: cisBoolean, // isBoolean
  [bas.cc + cisInteger]: cisInteger, // isInteger
  [bas.cc + cisFloat]: cisFloat, // isFloat
  [bas.cc + cisString]: cisString, // isString
  [bas.cc + csingleQuoteSwapAfterEquals]: csingleQuoteSwapAfterEquals,
  [bas.cc + cswapForwardSlashToBackSlash]: cswapForwardSlashToBackSlash,
  [bas.cc + cswapBackSlashToForwardSlash]: cswapBackSlashToForwardSlash,
  [bas.cc + cswapDoubleForwardSlashToSingleForwardSlash]: cswapDoubleForwardSlashToSingleForwardSlash,
  [bas.cc + cswapDoubleBackSlashToSingleBackSlash]: cswapDoubleBackSlashToSingleBackSlash,
  [bas.cc + creplaceDoublePercentWithMessage]: creplaceDoublePercentWithMessage
};
