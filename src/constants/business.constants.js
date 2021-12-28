/**
 * @file business.constants.js
 * @module business.constants
 * @description Contains many re-usable business rules constants.
 * @requires module:basic.constants
 * @requires module:phonic.constants
 * @requires module:numeric.constants
 * @requires module:word1.constants
 * @requires module:system.constants
 * @author Seth Hollingsead
 * @date 2021/10/29
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var bas = require('./basic.constants');
var phn = require('./phonic.constants');
var num = require('./numeric.constants');
var wr1 = require('./word1.constants');
var sys = require('./system.constants');

// Business Rules
let cecho = wr1.cecho; // echo
let cEcho = wr1.cEcho; // Echo

// ********************************
// StringParsing rules in order
// ********************************
let csingleQuoteSwapAfterEquals = wr1.csingle + wr1.cQuote + wr1.cSwap + wr1.cAfter + wr1.cEquals; // singleQuoteSwapAfterEquals
let cswapForwardSlashToBackSlash = wr1.cswap + sys.cForwardSlash + bas.cTo + sys.cBackSlash; // swapForwadSlashToBackSlash
let cswapBackSlashToForwardSlash = wr1.cswap + sys.cBackSlash + bas.cTo + sys.cForwardSlash; // swapBackSlashToForwardSlash
let cswapDoubleForwardSlashToSingleForwardSlash = wr1.cswap + wr1.cDouble + sys.cForwardSlash + bas.cTo + wr1.cSingle + sys.cForwardSlash; // swapDoubleForwardSlashToSingleForwardSlash
let cswapDoubleBackSlashToSingleBackSlash = wr1.cswap + wr1.cDouble + sys.cBackSlash + bas.cTo + wr1.cSingle + sys.cBackSlash; // swapDoubleBackSlashToSingleBackSlash

// ********************************
// StringParsing rules in order
// ********************************
let cparseSystemRootPath = wr1.cparse + wr1.cSystem + wr1.cRoot + wr1.cPath; // parseSystemRootPath
let cstringToDataType = wr1.cstring + wr1.cTo + wr1.cData + wr1.cType; // stringToDataType
let cstringToBoolean = wr1.cstring + wr1.cTo + wr1.cBoolean; // stringToBoolean
let cdetermineObjectDataType = wr1.cdetermine + wr1.cObject + wr1.cData + wr1.cType; // determineObjectDataType
let cisBoolean = wr1.cis + wr1.cBoolean; // isBoolean
let cisInteger = wr1.cis + wr1.cInteger; // isInteger
let cisFloat = wr1.cis + wr1.cFloat; // isFloat
let cisString = wr1.cis + wr1.cString; // isString
let creplaceDoublePercentWithMessage = wr1.creplace + wr1.cDouble + wr1.cPercent + wr1.cWith + wr1.cMessage; // replaceDoublePercentWithMessage
let cutilitiesReplaceCharacterWithCharacter = wr1.cutilities + wr1.cReplace + wr1.cCharacter + wr1.cWith + wr1.cCharacter; // utilitiesReplaceCharacterWithCharacter

// *********************************
// ArrayParsing rules in order
// *********************************
let creplaceCharacterWithCharacter = wr1.creplace + wr1.cCharacter + wr1.cWith + wr1.cCharacter; // replaceCharacterWithCharacter

module.exports = {
  // ********************************
  // StringParsing rules in order
  // ********************************
  [bas.cc + csingleQuoteSwapAfterEquals]: csingleQuoteSwapAfterEquals,
  [bas.cc + cswapForwardSlashToBackSlash]: cswapForwardSlashToBackSlash,
  [bas.cc + cswapBackSlashToForwardSlash]: cswapBackSlashToForwardSlash,
  [bas.cc + cswapDoubleForwardSlashToSingleForwardSlash]: cswapDoubleForwardSlashToSingleForwardSlash,
  [bas.cc + cswapDoubleBackSlashToSingleBackSlash]: cswapDoubleBackSlashToSingleBackSlash,

  // ********************************
  // StringParsingUtilities rules in order
  // ********************************
  [bas.cc + cparseSystemRootPath]: cparseSystemRootPath,
  [bas.cc + cstringToDataType]: cstringToDataType, // stringToDataType
  [bas.cc + cstringToBoolean]: cstringToBoolean, // stringToBoolean
  [bas.cc + cdetermineObjectDataType]: cdetermineObjectDataType, // determineObjectDataType
  [bas.cc + cisBoolean]: cisBoolean, // isBoolean
  [bas.cc + cisInteger]: cisInteger, // isInteger
  [bas.cc + cisFloat]: cisFloat, // isFloat
  [bas.cc + cisString]: cisString, // isString
  [bas.cc + creplaceDoublePercentWithMessage]: creplaceDoublePercentWithMessage,
  [bas.cc + cutilitiesReplaceCharacterWithCharacter]: cutilitiesReplaceCharacterWithCharacter,

  // *********************************
  // ArrayParsing rules in order
  // *********************************
  [bas.cc + creplaceCharacterWithCharacter]: creplaceCharacterWithCharacter,
};
