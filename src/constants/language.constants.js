/**
 * @file language.constants.js
 * @module language.constants
 * @description Contains many re-usable language constants.
 * @requires module:basic.constants
 * @requires module:country-constants
 * @requires module:phonic.constants
 * @requires module:word1.constants
 * @author Seth Hollingsead
 * @date 2021/11/15
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

let bas = require('./basic.constants.js');
let ctr = require('./country.constants.js');
let phn = require('./phonic.constants.js');
let wr1 = require('./word1.constants.js');

// Languages
let cChinese = phn.cChi + bas.cn + phn.cese; // Chinese
let cChineseSimplified = cChinese + wr1.cSimplified; // ChineseSimplified
let cChineseTraditional = cChinese + wr1.cTraditional; // ChineseTraditional
let cCzech = bas.cCz + bas.ce + bas.cch; // Czech
let cEnglish = bas.cEn + bas.cgl + phn.cish; // English
let cFrench = bas.cFr + bas.cen + bas.cch; // French
// cGerman = bas.cGe + bas.cr + cman; // German // Defined above in the countries section
let cHungarian = wr1.cHung + bas.car + phn.cian; // Hungarian
let cItalian = bas.cIt + bas.cal + phn.cian; // Italian
let cJapanese = ctr.cJapan + phn.cese; // Japanese
let cKorean = bas.cKo + bas.cre + bas.can; // Korean
let cMiscellaneous = phn.cMis + wr1.ccell + bas.can + phn.ceous; // Miscellaneous
let cPolish = bas.cPo + bas.cl + phn.cish; // Polish
let cPortuguese = wr1.cPort + bas.cug + bas.cu + phn.cese; // Portuguese
let cRussian = bas.cRu + bas.css + phn.cian; // Russian
let cSpanish = bas.cSp + bas.can + phn.cish; // Spanish

module.exports = {
  // Languages
  [bas.cc + cChinese]: cChinese, // Chinese
  [bas.cc + cChineseSimplified]: cChineseSimplified, // ChineseSimplified
  [bas.cc + cChineseTraditional]: cChineseTraditional, // ChineseTraditional
  [bas.cc + cCzech]: cCzech, // Czech
  [bas.cc + cEnglish]: cEnglish, // English
  [bas.cc + cFrench]: cFrench, // French
  // cGerman = bas.cGe + bas.cr + cman; // German // Defined above in the countries section
  [bas.cc + cHungarian]: cHungarian, // Hungarian
  [bas.cc + cItalian]: cItalian, // Italian
  [bas.cc + cJapanese]: cJapanese, // Japanese
  [bas.cc + cKorean]: cKorean, // Korean
  [bas.cc + cMiscellaneous]: cMiscellaneous, // Miscellaneous
  [bas.cc + cPolish]: cPolish, // Polish
  [bas.cc + cPortuguese]: cPortuguese, // Portuguese
  [bas.cc + cRussian]: cRussian, // Russian
  [bas.cc + cSpanish]: cSpanish, // Spanish
};
