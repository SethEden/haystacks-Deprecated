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

import * as bas from './basic.constants.js';
import * as ctr from './country.constants.js';
import * as phn from './phonic.constants.js';
import * as wr1 from './word1.constants.js';

// Languages
export const cChinese = phn.cChi + bas.cn + phn.cese; // Chinese
export const cChineseSimplified = cChinese + wr1.cSimplified; // ChineseSimplified
export const cChineseTraditional = cChinese + wr1.cTraditional; // ChineseTraditional
export const cCzech = bas.cCz + bas.ce + bas.cch; // Czech
export const cEnglish = bas.cEn + bas.cgl + phn.cish; // English
export const cFrench = bas.cFr + bas.cen + bas.cch; // French
// cGerman = bas.cGe + bas.cr + cman; // German // Defined above in the countries section
export const cHungarian = wr1.cHung + bas.car + phn.cian; // Hungarian
export const cItalian = bas.cIt + bas.cal + phn.cian; // Italian
export const cJapanese = ctr.cJapan + phn.cese; // Japanese
export const cKorean = bas.cKo + bas.cre + bas.can; // Korean
export const cMiscellaneous = phn.cMis + wr1.ccell + bas.can + phn.ceous; // Miscellaneous
export const cPolish = bas.cPo + bas.cl + phn.cish; // Polish
export const cPortuguese = wr1.cPort + bas.cug + bas.cu + phn.cese; // Portuguese
export const cRussian = bas.cRu + bas.css + phn.cian; // Russian
export const cSpanish = bas.cSp + bas.can + phn.cish; // Spanish

// export default {
//   // Languages
//   [bas.cc + cChinese]: cChinese, // Chinese
//   [bas.cc + cChineseSimplified]: cChineseSimplified, // ChineseSimplified
//   [bas.cc + cChineseTraditional]: cChineseTraditional, // ChineseTraditional
//   [bas.cc + cCzech]: cCzech, // Czech
//   [bas.cc + cEnglish]: cEnglish, // English
//   [bas.cc + cFrench]: cFrench, // French
//   // cGerman = bas.cGe + bas.cr + cman; // German // Defined above in the countries section
//   [bas.cc + cHungarian]: cHungarian, // Hungarian
//   [bas.cc + cItalian]: cItalian, // Italian
//   [bas.cc + cJapanese]: cJapanese, // Japanese
//   [bas.cc + cKorean]: cKorean, // Korean
//   [bas.cc + cMiscellaneous]: cMiscellaneous, // Miscellaneous
//   [bas.cc + cPolish]: cPolish, // Polish
//   [bas.cc + cPortuguese]: cPortuguese, // Portuguese
//   [bas.cc + cRussian]: cRussian, // Russian
//   [bas.cc + cSpanish]: cSpanish, // Spanish
// };
