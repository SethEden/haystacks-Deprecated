/**
 * @file basic.constants.validation.js
 * @module basic.constants.validation
 * @description Contains validation for constants for all of the most basic characters and basic 2-character combinations.
 * @requires module:basic.constants
 * @author Seth Hollingsead
 * @date 2022/03/18
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from '../../constants/basic.constants.js';

/**
 * @function basicConstantsValidation
 * @description Initializes the basic constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/18
 */
export const basicConstantsValidation = [
  {Name: 'cSpace', Actual: bas.cSpace, Expected: ' '},
  {Name: 'cUnderscore', Actual: bas.cUnderscore, Expected: '_'},
  {Name: 'cPipe', Actual: bas.cPipe, Expected: '|'},
  {Name: 'cExclamation', Actual: bas.cExclamation, Expected: '!'},
  {Name: 'cQuestion', Actual: bas.cQuestion, Expected: '?'},
  {Name: 'cSingleQuote', Actual: bas.cSingleQuote, Expected: '\''},
  {Name: 'cBackTickQuote', Actual: bas.cBackTickQuote, Expected: '`'},
  {Name: 'cDoubleQuote', Actual: bas.cDoubleQuote, Expected: '"'},
  {Name: 'cForwardSlash', Actual: bas.cForwardSlash, Expected: '/'},
  {Name: 'cDoubleForwardSlash', Actual: bas.cDoubleForwardSlash, Expected: '//'},
  {Name: 'cOpenParenthesis', Actual: bas.cOpenParenthesis, Expected: '('},
  {Name: 'cCloseParenthesis', Actual: bas.cCloseParenthesis, Expected: ')'},
  {Name: 'cOpenBracket', Actual: bas.cOpenBracket, Expected: '['},
  {Name: 'cCloseBracket', Actual: bas.cCloseBracket, Expected: ']'},
  {Name: 'cOpenCurlyBrace', Actual: bas.cOpenCurlyBrace, Expected: '{'},
  {Name: 'cCloseCurlyBrace', Actual: bas.cCloseCurlyBrace, Expected: '}'},
  {Name: 'cBackSlash', Actual: bas.cBackSlash, Expected: '\\'},
  {Name: 'cDoubleBackSlash', Actual: bas.cDoubleBackSlash, Expected: '\\\\'},
  {Name: 'cCarriageReturn', Actual: bas.cCarriageReturn, Expected: '\r'},
  {Name: 'cNewLine', Actual: bas.cNewLine, Expected: '\n'},
  {Name: 'cPlus', Actual: bas.cPlus, Expected: '+'},
  {Name: 'cStar', Actual: bas.cStar, Expected: '*'},
  {Name: 'cDash', Actual: bas.cDash, Expected: '-'},
  {Name: 'cDoubleDash', Actual: bas.cDoubleDash, Expected: '--'},
  {Name: 'cEqual', Actual: bas.cEqual, Expected: '='},
  {Name: 'cEqualEqual', Actual: bas.cEqualEqual, Expected: '=='},
  {Name: 'cEqualEqualEqual', Actual: bas.cEqualEqualEqual, Expected: '==='},
  {Name: 'cNotEqualEqual', Actual: bas.cNotEqualEqual, Expected: '!=='},
  {Name: 'cGreaterThan', Actual: bas.cGreaterThan, Expected: '>'},
  {Name: 'cLessThan', Actual: bas.cLessThan, Expected: '<'},
  {Name: 'cArrowFunction', Actual: bas.cArrowFunction, Expected: '=>'},
  {Name: 'cAt', Actual: bas.cAt, Expected: '@'},
  {Name: 'cHash', Actual: bas.cHash, Expected: '#'},
  {Name: 'cDollar', Actual: bas.cDollar, Expected: '$'},
  {Name: 'cPercent', Actual: bas.cPercent, Expected: '%'},
  {Name: 'cDoublePercent', Actual: bas.cDoublePercent, Expected: '%%'},
  {Name: 'cCarrot', Actual: bas.cCarrot, Expected: '^'},
  {Name: 'cAndPersand', Actual: bas.cAndPersand, Expected: '&'},
  {Name: 'cDot', Actual: bas.cDot, Expected: '.'},
  {Name: 'cDoubleDot', Actual: bas.cDoubleDot, Expected: '..'},
  {Name: 'cComa', Actual: bas.cComa, Expected: ','},
  {Name: 'cColon', Actual: bas.cColon, Expected: ':'},
  {Name: 'cSemiColon', Actual: bas.cSemiColon, Expected: ';'},
  {Name: 'cTilde', Actual: bas.cTilde, Expected: '~'},

  // Lower Case Letters
  {Name: 'ca', Actual: bas.ca, Expected: 'a'},
  {Name: 'cb', Actual: bas.cb, Expected: 'b'},
  {Name: 'cc', Actual: bas.cc, Expected: 'c'},
  {Name: 'cd', Actual: bas.cd, Expected: 'd'},
  {Name: 'ce', Actual: bas.ce, Expected: 'e'},
  {Name: 'cf', Actual: bas.cf, Expected: 'f'},
  {Name: 'cg', Actual: bas.cg, Expected: 'g'},
  {Name: 'ch', Actual: bas.ch, Expected: 'h'},
  {Name: 'ci', Actual: bas.ci, Expected: 'i'},
  {Name: 'cj', Actual: bas.cj, Expected: 'j'},
  {Name: 'ck', Actual: bas.ck, Expected: 'k'},
  {Name: 'cl', Actual: bas.cl, Expected: 'l'},
  {Name: 'cm', Actual: bas.cm, Expected: 'm'},
  {Name: 'cn', Actual: bas.cn, Expected: 'n'},
  {Name: 'co', Actual: bas.co, Expected: 'o'},
  {Name: 'cp', Actual: bas.cp, Expected: 'p'},
  {Name: 'cq', Actual: bas.cq, Expected: 'q'},
  {Name: 'cr', Actual: bas.cr, Expected: 'r'},
  {Name: 'cs', Actual: bas.cs, Expected: 's'},
  {Name: 'ct', Actual: bas.ct, Expected: 't'},
  {Name: 'cu', Actual: bas.cu, Expected: 'u'},
  {Name: 'cv', Actual: bas.cv, Expected: 'v'},
  {Name: 'cw', Actual: bas.cw, Expected: 'w'},
  {Name: 'cx', Actual: bas.cx, Expected: 'x'},
  {Name: 'cy', Actual: bas.cy, Expected: 'y'},
  {Name: 'cz', Actual: bas.cz, Expected: 'z'},

  // Upper Case Letters
  {Name: 'cA', Actual: bas.cA, Expected: 'A'},
  {Name: 'cB', Actual: bas.cB, Expected: 'B'},
  {Name: 'cC', Actual: bas.cC, Expected: 'C'},
  {Name: 'cD', Actual: bas.cD, Expected: 'D'},
  {Name: 'cE', Actual: bas.cE, Expected: 'E'},
  {Name: 'cF', Actual: bas.cF, Expected: 'F'},
  {Name: 'cG', Actual: bas.cG, Expected: 'G'},
  {Name: 'cH', Actual: bas.cH, Expected: 'H'},
  {Name: 'cI', Actual: bas.cI, Expected: 'I'},
  {Name: 'cJ', Actual: bas.cJ, Expected: 'J'},
  {Name: 'cK', Actual: bas.cK, Expected: 'K'},
  {Name: 'cL', Actual: bas.cL, Expected: 'L'},
  {Name: 'cM', Actual: bas.cM, Expected: 'M'},
  {Name: 'cN', Actual: bas.cN, Expected: 'N'},
  {Name: 'cO', Actual: bas.cO, Expected: 'O'},
  {Name: 'cP', Actual: bas.cP, Expected: 'P'},
  {Name: 'cQ', Actual: bas.cQ, Expected: 'Q'},
  {Name: 'cR', Actual: bas.cR, Expected: 'R'},
  {Name: 'cS', Actual: bas.cS, Expected: 'S'},
  {Name: 'cT', Actual: bas.cT, Expected: 'T'},
  {Name: 'cU', Actual: bas.cU, Expected: 'U'},
  {Name: 'cV', Actual: bas.cV, Expected: 'V'},
  {Name: 'cW', Actual: bas.cW, Expected: 'W'},
  {Name: 'cX', Actual: bas.cX, Expected: 'X'},
  {Name: 'cY', Actual: bas.cY, Expected: 'Y'},
  {Name: 'cZ', Actual: bas.cZ, Expected: 'Z'},

  // Alphabetic Codes
  // aa-AA
  {Name: 'caa', Actual: bas.caa, Expected: 'aa'},
  {Name: 'cab', Actual: bas.cab, Expected: 'ab'},
  {Name: 'cac', Actual: bas.cac, Expected: 'ac'},
  // NOTE: Have to watch out for the rest of these 'ca' constants, could have problems with them in the future.
  // clmn1rt3 = 'ad'; // 'ca' & 'cd' is some how a reserved word.
  {Name: 'cae', Actual: bas.cae, Expected: 'ae'},
  {Name: 'caf', Actual: bas.caf, Expected: 'af'},
  {Name: 'cag', Actual: bas.cag, Expected: 'ag'},
  {Name: 'cah', Actual: bas.cah, Expected: 'ah'},
  {Name: 'cai', Actual: bas.cai, Expected: 'ai'},
  {Name: 'caj', Actual: bas.caj, Expected: 'aj'},
  {Name: 'cak', Actual: bas.cak, Expected: 'ak'},
  {Name: 'cal', Actual: bas.cal, Expected: 'al'},
  {Name: 'cam', Actual: bas.cam, Expected: 'am'},
  {Name: 'can', Actual: bas.can, Expected: 'an'},
  {Name: 'cao', Actual: bas.cao, Expected: 'ao'},
  {Name: 'cap', Actual: bas.cap, Expected: 'ap'},
  {Name: 'caq', Actual: bas.caq, Expected: 'aq'},
  {Name: 'car', Actual: bas.car, Expected: 'ar'},
  {Name: 'cas', Actual: bas.cas, Expected: 'as'},
  {Name: 'cat', Actual: bas.cat, Expected: 'at'},
  {Name: 'cau', Actual: bas.cau, Expected: 'au'},
  {Name: 'cav', Actual: bas.cav, Expected: 'av'},
  {Name: 'caw', Actual: bas.caw, Expected: 'aw'},
  {Name: 'cax', Actual: bas.cax, Expected: 'ax'},
  {Name: 'cay', Actual: bas.cay, Expected: 'ay'},
  {Name: 'caz', Actual: bas.caz, Expected: 'az'},

  {Name: 'cAa', Actual: bas.cAa, Expected: 'Aa'},
  {Name: 'cAb', Actual: bas.cAb, Expected: 'Ab'},
  {Name: 'cAc', Actual: bas.cAc, Expected: 'Ac'},
  {Name: 'cAd', Actual: bas.cAd, Expected: 'Ad'},
  {Name: 'cAe', Actual: bas.cAe, Expected: 'Ae'},
  {Name: 'cAf', Actual: bas.cAf, Expected: 'Af'},
  {Name: 'cAg', Actual: bas.cAg, Expected: 'Ag'},
  {Name: 'cAh', Actual: bas.cAh, Expected: 'Ah'},
  {Name: 'cAi', Actual: bas.cAi, Expected: 'Ai'},
  {Name: 'cAj', Actual: bas.cAj, Expected: 'Aj'},
  {Name: 'cAk', Actual: bas.cAk, Expected: 'Ak'},
  {Name: 'cAl', Actual: bas.cAl, Expected: 'Al'},
  {Name: 'cAm', Actual: bas.cAm, Expected: 'Am'},
  {Name: 'cAn', Actual: bas.cAn, Expected: 'An'},
  {Name: 'cAo', Actual: bas.cAo, Expected: 'Ao'},
  {Name: 'cAp', Actual: bas.cAp, Expected: 'Ap'},
  {Name: 'cAq', Actual: bas.cAq, Expected: 'Aq'},
  {Name: 'cAr', Actual: bas.cAr, Expected: 'Ar'},
  {Name: 'cAs', Actual: bas.cAs, Expected: 'As'},
  // cAt = cA + ct; // We've already defined At = @
  {Name: 'cAu', Actual: bas.cAu, Expected: 'Au'},
  {Name: 'cAv', Actual: bas.cAv, Expected: 'Av'},
  {Name: 'cAw', Actual: bas.cAw, Expected: 'Aw'},
  {Name: 'cAx', Actual: bas.cAx, Expected: 'Ax'},
  {Name: 'cAy', Actual: bas.cAy, Expected: 'Ay'},
  {Name: 'cAz', Actual: bas.cAz, Expected: 'Az'},

  {Name: 'caA', Actual: bas.caA, Expected: 'aA'},
  {Name: 'caB', Actual: bas.caB, Expected: 'aB'},
  {Name: 'caC', Actual: bas.caC, Expected: 'aC'},
  {Name: 'caD', Actual: bas.caD, Expected: 'aD'},
  {Name: 'caE', Actual: bas.caE, Expected: 'aE'},
  {Name: 'caF', Actual: bas.caF, Expected: 'aF'},
  {Name: 'caG', Actual: bas.caG, Expected: 'aG'},
  {Name: 'caH', Actual: bas.caH, Expected: 'aH'},
  {Name: 'caI', Actual: bas.caI, Expected: 'aI'},
  {Name: 'caJ', Actual: bas.caJ, Expected: 'aJ'},
  {Name: 'caK', Actual: bas.caK, Expected: 'aK'},
  {Name: 'caL', Actual: bas.caL, Expected: 'aL'},
  {Name: 'caM', Actual: bas.caM, Expected: 'aM'},
  {Name: 'caN', Actual: bas.caN, Expected: 'aN'},
  {Name: 'caO', Actual: bas.caO, Expected: 'aO'},
  {Name: 'caP', Actual: bas.caP, Expected: 'aP'},
  {Name: 'caQ', Actual: bas.caQ, Expected: 'aQ'},
  {Name: 'caR', Actual: bas.caR, Expected: 'aR'},
  {Name: 'caS', Actual: bas.caS, Expected: 'aS'},
  {Name: 'caT', Actual: bas.caT, Expected: 'aT'},
  {Name: 'caU', Actual: bas.caU, Expected: 'aU'},
  {Name: 'caV', Actual: bas.caV, Expected: 'aV'},
  {Name: 'caW', Actual: bas.caW, Expected: 'aW'},
  {Name: 'caX', Actual: bas.caX, Expected: 'aX'},
  {Name: 'caY', Actual: bas.caY, Expected: 'aY'},
  {Name: 'caZ', Actual: bas.caZ, Expected: 'aZ'},

  {Name: 'cAA', Actual: bas.cAA, Expected: 'AA'},
  {Name: 'cAB', Actual: bas.cAB, Expected: 'AB'},
  {Name: 'cAC', Actual: bas.cAC, Expected: 'AC'},
  {Name: 'cAD', Actual: bas.cAD, Expected: 'AD'},
  {Name: 'cAE', Actual: bas.cAE, Expected: 'AE'},
  {Name: 'cAF', Actual: bas.cAF, Expected: 'AF'},
  {Name: 'cAG', Actual: bas.cAG, Expected: 'AG'},
  {Name: 'cAH', Actual: bas.cAH, Expected: 'AH'},
  {Name: 'cAI', Actual: bas.cAI, Expected: 'AI'},
  {Name: 'cAJ', Actual: bas.cAJ, Expected: 'AJ'},
  {Name: 'cAK', Actual: bas.cAK, Expected: 'AK'},
  {Name: 'cAL', Actual: bas.cAL, Expected: 'AL'},
  {Name: 'cAM', Actual: bas.cAM, Expected: 'AM'},
  {Name: 'cAN', Actual: bas.cAN, Expected: 'AN'},
  {Name: 'cAO', Actual: bas.cAO, Expected: 'AO'},
  {Name: 'cAP', Actual: bas.cAP, Expected: 'AP'},
  {Name: 'cAQ', Actual: bas.cAQ, Expected: 'AQ'},
  {Name: 'cAR', Actual: bas.cAR, Expected: 'AR'},
  {Name: 'cAS', Actual: bas.cAS, Expected: 'AS'},
  {Name: 'cAT', Actual: bas.cAT, Expected: 'AT'},
  {Name: 'cAU', Actual: bas.cAU, Expected: 'AU'},
  {Name: 'cAV', Actual: bas.cAV, Expected: 'AV'},
  {Name: 'cAW', Actual: bas.cAW, Expected: 'AW'},
  {Name: 'cAX', Actual: bas.cAX, Expected: 'AX'},
  {Name: 'cAY', Actual: bas.cAY, Expected: 'AY'},
  {Name: 'cAZ', Actual: bas.cAZ, Expected: 'AZ'},

  // ba-BA
  {Name: 'cba', Actual: bas.cba, Expected: 'ba'},
  {Name: 'cbb', Actual: bas.cbb, Expected: 'bb'},
  {Name: 'cbc', Actual: bas.cbc, Expected: 'bc'},
  {Name: 'cbd', Actual: bas.cbd, Expected: 'bd'},
  {Name: 'cbe', Actual: bas.cbe, Expected: 'be'},
  {Name: 'cbf', Actual: bas.cbf, Expected: 'bf'},
  {Name: 'cbg', Actual: bas.cbg, Expected: 'bg'},
  {Name: 'cbh', Actual: bas.cbh, Expected: 'bh'},
  {Name: 'cbi', Actual: bas.cbi, Expected: 'bi'},
  {Name: 'cbj', Actual: bas.cbj, Expected: 'bj'},
  {Name: 'cbk', Actual: bas.cbk, Expected: 'bk'},
  {Name: 'cbl', Actual: bas.cbl, Expected: 'bl'},
  {Name: 'cbm', Actual: bas.cbm, Expected: 'bm'},
  {Name: 'cbn', Actual: bas.cbn, Expected: 'bn'},
  {Name: 'cbo', Actual: bas.cbo, Expected: 'bo'},
  {Name: 'cbp', Actual: bas.cbp, Expected: 'bp'},
  {Name: 'cbq', Actual: bas.cbq, Expected: 'bq'},
  {Name: 'cbr', Actual: bas.cbr, Expected: 'br'},
  {Name: 'cbs', Actual: bas.cbs, Expected: 'bs'},
  {Name: 'cbt', Actual: bas.cbt, Expected: 'bt'},
  {Name: 'cbu', Actual: bas.cbu, Expected: 'bu'},
  {Name: 'cbv', Actual: bas.cbv, Expected: 'bv'},
  {Name: 'cbw', Actual: bas.cbw, Expected: 'bw'},
  {Name: 'cbx', Actual: bas.cbx, Expected: 'bx'},
  {Name: 'cby', Actual: bas.cby, Expected: 'by'},
  {Name: 'cbz', Actual: bas.cbz, Expected: 'bz'},

  {Name: 'cBa', Actual: bas.cBa, Expected: 'Ba'},
  {Name: 'cBb', Actual: bas.cBb, Expected: 'Bb'},
  {Name: 'cBc', Actual: bas.cBc, Expected: 'Bc'},
  {Name: 'cBd', Actual: bas.cBd, Expected: 'Bd'},
  {Name: 'cBe', Actual: bas.cBe, Expected: 'Be'},
  {Name: 'cBf', Actual: bas.cBf, Expected: 'Bf'},
  {Name: 'cBg', Actual: bas.cBg, Expected: 'Bg'},
  {Name: 'cBh', Actual: bas.cBh, Expected: 'Bh'},
  {Name: 'cBi', Actual: bas.cBi, Expected: 'Bi'},
  {Name: 'cBj', Actual: bas.cBj, Expected: 'Bj'},
  {Name: 'cBk', Actual: bas.cBk, Expected: 'Bk'},
  {Name: 'cBl', Actual: bas.cBl, Expected: 'Bl'},
  {Name: 'cBm', Actual: bas.cBm, Expected: 'Bm'},
  {Name: 'cBn', Actual: bas.cBn, Expected: 'Bn'},
  {Name: 'cBo', Actual: bas.cBo, Expected: 'Bo'},
  {Name: 'cBp', Actual: bas.cBp, Expected: 'Bp'},
  {Name: 'cBq', Actual: bas.cBq, Expected: 'Bq'},
  {Name: 'cBr', Actual: bas.cBr, Expected: 'Br'},
  {Name: 'cBs', Actual: bas.cBs, Expected: 'Bs'},
  {Name: 'cBt', Actual: bas.cBt, Expected: 'Bt'},
  {Name: 'cBu', Actual: bas.cBu, Expected: 'Bu'},
  {Name: 'cBv', Actual: bas.cBv, Expected: 'Bv'},
  {Name: 'cBw', Actual: bas.cBw, Expected: 'Bw'},
  {Name: 'cBx', Actual: bas.cBx, Expected: 'Bx'},
  {Name: 'cBy', Actual: bas.cBy, Expected: 'By'},
  {Name: 'cBz', Actual: bas.cBz, Expected: 'Bz'},

  {Name: 'cbA', Actual: bas.cbA, Expected: 'bA'},
  {Name: 'cbB', Actual: bas.cbB, Expected: 'bB'},
  {Name: 'cbC', Actual: bas.cbC, Expected: 'bC'},
  {Name: 'cbD', Actual: bas.cbD, Expected: 'bD'},
  {Name: 'cbE', Actual: bas.cbE, Expected: 'bE'},
  {Name: 'cbF', Actual: bas.cbF, Expected: 'bF'},
  {Name: 'cbG', Actual: bas.cbG, Expected: 'bG'},
  {Name: 'cbH', Actual: bas.cbH, Expected: 'bH'},
  {Name: 'cbI', Actual: bas.cbI, Expected: 'bI'},
  {Name: 'cbJ', Actual: bas.cbJ, Expected: 'bJ'},
  {Name: 'cbK', Actual: bas.cbK, Expected: 'bK'},
  {Name: 'cbL', Actual: bas.cbL, Expected: 'bL'},
  {Name: 'cbM', Actual: bas.cbM, Expected: 'bM'},
  {Name: 'cbN', Actual: bas.cbN, Expected: 'bN'},
  {Name: 'cbO', Actual: bas.cbO, Expected: 'bO'},
  {Name: 'cbP', Actual: bas.cbP, Expected: 'bP'},
  {Name: 'cbQ', Actual: bas.cbQ, Expected: 'bQ'},
  {Name: 'cbR', Actual: bas.cbR, Expected: 'bR'},
  {Name: 'cbS', Actual: bas.cbS, Expected: 'bS'},
  {Name: 'cbT', Actual: bas.cbT, Expected: 'bT'},
  {Name: 'cbU', Actual: bas.cbU, Expected: 'bU'},
  {Name: 'cbV', Actual: bas.cbV, Expected: 'bV'},
  {Name: 'cbW', Actual: bas.cbW, Expected: 'bW'},
  {Name: 'cbX', Actual: bas.cbX, Expected: 'bX'},
  {Name: 'cbY', Actual: bas.cbY, Expected: 'bY'},
  {Name: 'cbZ', Actual: bas.cbZ, Expected: 'bZ'},

  {Name: 'cBA', Actual: bas.cBA, Expected: 'BA'},
  {Name: 'cBB', Actual: bas.cBB, Expected: 'BB'},
  {Name: 'cBC', Actual: bas.cBC, Expected: 'BC'},
  {Name: 'cBD', Actual: bas.cBD, Expected: 'BD'},
  {Name: 'cBE', Actual: bas.cBE, Expected: 'BE'},
  {Name: 'cBF', Actual: bas.cBF, Expected: 'BF'},
  {Name: 'cBG', Actual: bas.cBG, Expected: 'BG'},
  {Name: 'cBH', Actual: bas.cBH, Expected: 'BH'},
  {Name: 'cBI', Actual: bas.cBI, Expected: 'BI'},
  {Name: 'cBJ', Actual: bas.cBJ, Expected: 'BJ'},
  {Name: 'cBK', Actual: bas.cBK, Expected: 'BK'},
  {Name: 'cBL', Actual: bas.cBL, Expected: 'BL'},
  {Name: 'cBM', Actual: bas.cBM, Expected: 'BM'},
  {Name: 'cBN', Actual: bas.cBN, Expected: 'BN'},
  {Name: 'cBO', Actual: bas.cBO, Expected: 'BO'},
  {Name: 'cBP', Actual: bas.cBP, Expected: 'BP'},
  {Name: 'cBQ', Actual: bas.cBQ, Expected: 'BQ'},
  {Name: 'cBR', Actual: bas.cBR, Expected: 'BR'},
  {Name: 'cBS', Actual: bas.cBS, Expected: 'BS'},
  {Name: 'cBT', Actual: bas.cBT, Expected: 'BT'},
  {Name: 'cBU', Actual: bas.cBU, Expected: 'BU'},
  {Name: 'cBV', Actual: bas.cBV, Expected: 'BV'},
  {Name: 'cBW', Actual: bas.cBW, Expected: 'BW'},
  {Name: 'cBX', Actual: bas.cBX, Expected: 'BX'},
  {Name: 'cBY', Actual: bas.cBY, Expected: 'BY'},
  {Name: 'cBZ', Actual: bas.cBZ, Expected: 'BZ'},

  // ca-CA
  {Name: 'cca', Actual: bas.cca, Expected: 'ca'},
  {Name: 'ccb', Actual: bas.ccb, Expected: 'cb'},
  {Name: 'ccc', Actual: bas.ccc, Expected: 'cc'},
  {Name: 'ccd', Actual: bas.ccd, Expected: 'cd'},
  {Name: 'cce', Actual: bas.cce, Expected: 'ce'},
  {Name: 'ccf', Actual: bas.ccf, Expected: 'cf'},
  {Name: 'ccg', Actual: bas.ccg, Expected: 'cg'},
  {Name: 'cch', Actual: bas.cch, Expected: 'ch'},
  {Name: 'cci', Actual: bas.cci, Expected: 'ci'},
  {Name: 'ccj', Actual: bas.ccj, Expected: 'cj'},
  {Name: 'cck', Actual: bas.cck, Expected: 'ck'},
  {Name: 'ccl', Actual: bas.ccl, Expected: 'cl'},
  {Name: 'ccm', Actual: bas.ccm, Expected: 'cm'},
  {Name: 'ccn', Actual: bas.ccn, Expected: 'cn'},
  {Name: 'cco', Actual: bas.cco, Expected: 'co'},
  {Name: 'ccp', Actual: bas.ccp, Expected: 'cp'},
  {Name: 'ccq', Actual: bas.ccq, Expected: 'cq'},
  {Name: 'ccr', Actual: bas.ccr, Expected: 'cr'},
  {Name: 'ccs', Actual: bas.ccs, Expected: 'cs'},
  {Name: 'cct', Actual: bas.cct, Expected: 'ct'},
  {Name: 'ccu', Actual: bas.ccu, Expected: 'cu'},
  {Name: 'ccv', Actual: bas.ccv, Expected: 'cv'},
  {Name: 'ccw', Actual: bas.ccw, Expected: 'cw'},
  {Name: 'ccx', Actual: bas.ccx, Expected: 'cx'},
  {Name: 'ccy', Actual: bas.ccy, Expected: 'cy'},
  {Name: 'ccz', Actual: bas.ccz, Expected: 'cz'},

  {Name: 'cCa', Actual: bas.cCa, Expected: 'Ca'},
  {Name: 'cCb', Actual: bas.cCb, Expected: 'Cb'},
  {Name: 'cCc', Actual: bas.cCc, Expected: 'Cc'},
  {Name: 'cCd', Actual: bas.cCd, Expected: 'Cd'},
  {Name: 'cCe', Actual: bas.cCe, Expected: 'Ce'},
  {Name: 'cCf', Actual: bas.cCf, Expected: 'Cf'},
  {Name: 'cCg', Actual: bas.cCg, Expected: 'Cg'},
  {Name: 'cCh', Actual: bas.cCh, Expected: 'Ch'},
  {Name: 'cCi', Actual: bas.cCi, Expected: 'Ci'},
  {Name: 'cCj', Actual: bas.cCj, Expected: 'Cj'},
  {Name: 'cCk', Actual: bas.cCk, Expected: 'Ck'},
  {Name: 'cCl', Actual: bas.cCl, Expected: 'Cl'},
  {Name: 'cCm', Actual: bas.cCm, Expected: 'Cm'},
  {Name: 'cCn', Actual: bas.cCn, Expected: 'Cn'},
  {Name: 'cCo', Actual: bas.cCo, Expected: 'Co'},
  {Name: 'cCp', Actual: bas.cCp, Expected: 'Cp'},
  {Name: 'cCq', Actual: bas.cCq, Expected: 'Cq'},
  {Name: 'cCr', Actual: bas.cCr, Expected: 'Cr'},
  {Name: 'cCs', Actual: bas.cCs, Expected: 'Cs'},
  {Name: 'cCt', Actual: bas.cCt, Expected: 'Ct'},
  {Name: 'cCu', Actual: bas.cCu, Expected: 'Cu'},
  {Name: 'cCv', Actual: bas.cCv, Expected: 'Cv'},
  {Name: 'cCw', Actual: bas.cCw, Expected: 'Cw'},
  {Name: 'cCx', Actual: bas.cCx, Expected: 'Cx'},
  {Name: 'cCy', Actual: bas.cCy, Expected: 'Cy'},
  {Name: 'cCz', Actual: bas.cCz, Expected: 'Cz'},

  {Name: 'ccA', Actual: bas.ccA, Expected: 'cA'},
  {Name: 'ccB', Actual: bas.ccB, Expected: 'cB'},
  {Name: 'ccC', Actual: bas.ccC, Expected: 'cC'},
  {Name: 'ccD', Actual: bas.ccD, Expected: 'cD'},
  {Name: 'ccE', Actual: bas.ccE, Expected: 'cE'},
  {Name: 'ccF', Actual: bas.ccF, Expected: 'cF'},
  {Name: 'ccG', Actual: bas.ccG, Expected: 'cG'},
  {Name: 'ccH', Actual: bas.ccH, Expected: 'cH'},
  {Name: 'ccI', Actual: bas.ccI, Expected: 'cI'},
  {Name: 'ccJ', Actual: bas.ccJ, Expected: 'cJ'},
  {Name: 'ccK', Actual: bas.ccK, Expected: 'cK'},
  {Name: 'ccL', Actual: bas.ccL, Expected: 'cL'},
  {Name: 'ccM', Actual: bas.ccM, Expected: 'cM'},
  {Name: 'ccN', Actual: bas.ccN, Expected: 'cN'},
  {Name: 'ccO', Actual: bas.ccO, Expected: 'cO'},
  {Name: 'ccP', Actual: bas.ccP, Expected: 'cP'},
  {Name: 'ccQ', Actual: bas.ccQ, Expected: 'cQ'},
  {Name: 'ccR', Actual: bas.ccR, Expected: 'cR'},
  {Name: 'ccS', Actual: bas.ccS, Expected: 'cS'},
  {Name: 'ccT', Actual: bas.ccT, Expected: 'cT'},
  {Name: 'ccU', Actual: bas.ccU, Expected: 'cU'},
  {Name: 'ccV', Actual: bas.ccV, Expected: 'cV'},
  {Name: 'ccW', Actual: bas.ccW, Expected: 'cW'},
  {Name: 'ccX', Actual: bas.ccX, Expected: 'cX'},
  {Name: 'ccY', Actual: bas.ccY, Expected: 'cY'},
  {Name: 'ccZ', Actual: bas.ccZ, Expected: 'cZ'},

  {Name: 'cCA', Actual: bas.cCA, Expected: 'CA'},
  {Name: 'cCB', Actual: bas.cCB, Expected: 'CB'},
  {Name: 'cCC', Actual: bas.cCC, Expected: 'CC'},
  {Name: 'cCD', Actual: bas.cCD, Expected: 'CD'},
  {Name: 'cCE', Actual: bas.cCE, Expected: 'CE'},
  {Name: 'cCF', Actual: bas.cCF, Expected: 'CF'},
  {Name: 'cCG', Actual: bas.cCG, Expected: 'CG'},
  {Name: 'cCH', Actual: bas.cCH, Expected: 'CH'},
  {Name: 'cCI', Actual: bas.cCI, Expected: 'CI'},
  {Name: 'cCJ', Actual: bas.cCJ, Expected: 'CJ'},
  {Name: 'cCK', Actual: bas.cCK, Expected: 'CK'},
  {Name: 'cCL', Actual: bas.cCL, Expected: 'CL'},
  {Name: 'cCM', Actual: bas.cCM, Expected: 'CM'},
  {Name: 'cCN', Actual: bas.cCN, Expected: 'CN'},
  {Name: 'cCO', Actual: bas.cCO, Expected: 'CO'},
  {Name: 'cCP', Actual: bas.cCP, Expected: 'CP'},
  {Name: 'cCQ', Actual: bas.cCQ, Expected: 'CQ'},
  {Name: 'cCR', Actual: bas.cCR, Expected: 'CR'},
  {Name: 'cCS', Actual: bas.cCS, Expected: 'CS'},
  {Name: 'cCT', Actual: bas.cCT, Expected: 'CT'},
  {Name: 'cCU', Actual: bas.cCU, Expected: 'CU'},
  {Name: 'cCV', Actual: bas.cCV, Expected: 'CV'},
  {Name: 'cCW', Actual: bas.cCW, Expected: 'CW'},
  {Name: 'cCX', Actual: bas.cCX, Expected: 'CX'},
  {Name: 'cCY', Actual: bas.cCY, Expected: 'CY'},
  {Name: 'cCZ', Actual: bas.cCZ, Expected: 'CZ'},

  // da-DA
  {Name: 'cda', Actual: bas.cda, Expected: 'da'},
  {Name: 'cdb', Actual: bas.cdb, Expected: 'db'},
  {Name: 'cdc', Actual: bas.cdc, Expected: 'dc'},
  {Name: 'cdd', Actual: bas.cdd, Expected: 'dd'},
  {Name: 'cde', Actual: bas.cde, Expected: 'de'},
  {Name: 'cdf', Actual: bas.cdf, Expected: 'df'},
  {Name: 'cdg', Actual: bas.cdg, Expected: 'dg'},
  {Name: 'cdh', Actual: bas.cdh, Expected: 'dh'},
  {Name: 'cdi', Actual: bas.cdi, Expected: 'di'},
  {Name: 'cdj', Actual: bas.cdj, Expected: 'dj'},
  {Name: 'cdk', Actual: bas.cdk, Expected: 'dk'},
  {Name: 'cdl', Actual: bas.cdl, Expected: 'dl'},
  {Name: 'cdm', Actual: bas.cdm, Expected: 'dm'},
  {Name: 'cdn', Actual: bas.cdn, Expected: 'dn'},
  {Name: 'cdo', Actual: bas.cdo, Expected: 'do'},
  {Name: 'cdp', Actual: bas.cdp, Expected: 'dp'},
  {Name: 'cdq', Actual: bas.cdq, Expected: 'dq'},
  {Name: 'cdr', Actual: bas.cdr, Expected: 'dr'},
  {Name: 'cds', Actual: bas.cds, Expected: 'ds'},
  {Name: 'cdt', Actual: bas.cdt, Expected: 'dt'},
  {Name: 'cdu', Actual: bas.cdu, Expected: 'du'},
  {Name: 'cdv', Actual: bas.cdv, Expected: 'dv'},
  {Name: 'cdw', Actual: bas.cdw, Expected: 'dw'},
  {Name: 'cdx', Actual: bas.cdx, Expected: 'dx'},
  {Name: 'cdy', Actual: bas.cdy, Expected: 'dy'},
  {Name: 'cdz', Actual: bas.cdz, Expected: 'dz'},

  {Name: 'cDa', Actual: bas.cDa, Expected: 'Da'},
  {Name: 'cDb', Actual: bas.cDb, Expected: 'Db'},
  {Name: 'cDc', Actual: bas.cDc, Expected: 'Dc'},
  {Name: 'cDd', Actual: bas.cDd, Expected: 'Dd'},
  {Name: 'cDe', Actual: bas.cDe, Expected: 'De'},
  {Name: 'cDf', Actual: bas.cDf, Expected: 'Df'},
  {Name: 'cDg', Actual: bas.cDg, Expected: 'Dg'},
  {Name: 'cDh', Actual: bas.cDh, Expected: 'Dh'},
  {Name: 'cDi', Actual: bas.cDi, Expected: 'Di'},
  {Name: 'cDj', Actual: bas.cDj, Expected: 'Dj'},
  {Name: 'cDk', Actual: bas.cDk, Expected: 'Dk'},
  {Name: 'cDl', Actual: bas.cDl, Expected: 'Dl'},
  {Name: 'cDm', Actual: bas.cDm, Expected: 'Dm'},
  {Name: 'cDn', Actual: bas.cDn, Expected: 'Dn'},
  {Name: 'cDo', Actual: bas.cDo, Expected: 'Do'},
  {Name: 'cDp', Actual: bas.cDp, Expected: 'Dp'},
  {Name: 'cDq', Actual: bas.cDq, Expected: 'Dq'},
  {Name: 'cDr', Actual: bas.cDr, Expected: 'Dr'},
  {Name: 'cDs', Actual: bas.cDs, Expected: 'Ds'},
  {Name: 'cDt', Actual: bas.cDt, Expected: 'Dt'},
  {Name: 'cDu', Actual: bas.cDu, Expected: 'Du'},
  {Name: 'cDv', Actual: bas.cDv, Expected: 'Dv'},
  {Name: 'cDw', Actual: bas.cDw, Expected: 'Dw'},
  {Name: 'cDx', Actual: bas.cDx, Expected: 'Dx'},
  {Name: 'cDy', Actual: bas.cDy, Expected: 'Dy'},
  {Name: 'cDz', Actual: bas.cDz, Expected: 'Dz'},

  {Name: 'cdA', Actual: bas.cdA, Expected: 'dA'},
  {Name: 'cdB', Actual: bas.cdB, Expected: 'dB'},
  {Name: 'cdC', Actual: bas.cdC, Expected: 'dC'},
  {Name: 'cdD', Actual: bas.cdD, Expected: 'dD'},
  {Name: 'cdE', Actual: bas.cdE, Expected: 'dE'},
  {Name: 'cdF', Actual: bas.cdF, Expected: 'dF'},
  {Name: 'cdG', Actual: bas.cdG, Expected: 'dG'},
  {Name: 'cdH', Actual: bas.cdH, Expected: 'dH'},
  {Name: 'cdI', Actual: bas.cdI, Expected: 'dI'},
  {Name: 'cdJ', Actual: bas.cdJ, Expected: 'dJ'},
  {Name: 'cdK', Actual: bas.cdK, Expected: 'dK'},
  {Name: 'cdL', Actual: bas.cdL, Expected: 'dL'},
  {Name: 'cdM', Actual: bas.cdM, Expected: 'dM'},
  {Name: 'cdN', Actual: bas.cdN, Expected: 'dN'},
  {Name: 'cdO', Actual: bas.cdO, Expected: 'dO'},
  {Name: 'cdP', Actual: bas.cdP, Expected: 'dP'},
  {Name: 'cdQ', Actual: bas.cdQ, Expected: 'dQ'},
  {Name: 'cdR', Actual: bas.cdR, Expected: 'dR'},
  {Name: 'cdS', Actual: bas.cdS, Expected: 'dS'},
  {Name: 'cdT', Actual: bas.cdT, Expected: 'dT'},
  {Name: 'cdU', Actual: bas.cdU, Expected: 'dU'},
  {Name: 'cdV', Actual: bas.cdV, Expected: 'dV'},
  {Name: 'cdW', Actual: bas.cdW, Expected: 'dW'},
  {Name: 'cdX', Actual: bas.cdX, Expected: 'dX'},
  {Name: 'cdY', Actual: bas.cdY, Expected: 'dY'},
  {Name: 'cdZ', Actual: bas.cdZ, Expected: 'dZ'},

  {Name: 'cDA', Actual: bas.cDA, Expected: 'DA'},
  {Name: 'cDB', Actual: bas.cDB, Expected: 'DB'},
  {Name: 'cDC', Actual: bas.cDC, Expected: 'DC'},
  {Name: 'cDD', Actual: bas.cDD, Expected: 'DD'},
  {Name: 'cDE', Actual: bas.cDE, Expected: 'DE'},
  {Name: 'cDF', Actual: bas.cDF, Expected: 'DF'},
  {Name: 'cDG', Actual: bas.cDG, Expected: 'DG'},
  {Name: 'cDH', Actual: bas.cDH, Expected: 'DH'},
  {Name: 'cDI', Actual: bas.cDI, Expected: 'DI'},
  {Name: 'cDJ', Actual: bas.cDJ, Expected: 'DJ'},
  {Name: 'cDK', Actual: bas.cDK, Expected: 'DK'},
  {Name: 'cDL', Actual: bas.cDL, Expected: 'DL'},
  {Name: 'cDM', Actual: bas.cDM, Expected: 'DM'},
  {Name: 'cDN', Actual: bas.cDN, Expected: 'DN'},
  {Name: 'cDO', Actual: bas.cDO, Expected: 'DO'},
  {Name: 'cDP', Actual: bas.cDP, Expected: 'DP'},
  {Name: 'cDQ', Actual: bas.cDQ, Expected: 'DQ'},
  {Name: 'cDR', Actual: bas.cDR, Expected: 'DR'},
  {Name: 'cDS', Actual: bas.cDS, Expected: 'DS'},
  {Name: 'cDT', Actual: bas.cDT, Expected: 'DT'},
  {Name: 'cDU', Actual: bas.cDU, Expected: 'DU'},
  {Name: 'cDV', Actual: bas.cDV, Expected: 'DV'},
  {Name: 'cDW', Actual: bas.cDW, Expected: 'DW'},
  {Name: 'cDX', Actual: bas.cDX, Expected: 'DX'},
  {Name: 'cDY', Actual: bas.cDY, Expected: 'DY'},
  {Name: 'cDZ', Actual: bas.cDZ, Expected: 'DZ'},

  // ea-EA
  {Name: 'cea', Actual: bas.cea, Expected: 'ea'},
  {Name: 'ceb', Actual: bas.ceb, Expected: 'eb'},
  {Name: 'cec', Actual: bas.cec, Expected: 'ec'},
  {Name: 'ced', Actual: bas.ced, Expected: 'ed'},
  {Name: 'cee', Actual: bas.cee, Expected: 'ee'},
  {Name: 'cef', Actual: bas.cef, Expected: 'ef'},
  {Name: 'ceg', Actual: bas.ceg, Expected: 'eg'},
  {Name: 'ceh', Actual: bas.ceh, Expected: 'eh'},
  {Name: 'cei', Actual: bas.cei, Expected: 'ei'},
  {Name: 'cej', Actual: bas.cej, Expected: 'ej'},
  {Name: 'cek', Actual: bas.cek, Expected: 'ek'},
  {Name: 'cel', Actual: bas.cel, Expected: 'el'},
  {Name: 'cem', Actual: bas.cem, Expected: 'em'},
  {Name: 'cen', Actual: bas.cen, Expected: 'en'},
  {Name: 'ceo', Actual: bas.ceo, Expected: 'eo'},
  {Name: 'cep', Actual: bas.cep, Expected: 'ep'},
  {Name: 'ceq', Actual: bas.ceq, Expected: 'eq'},
  {Name: 'cer', Actual: bas.cer, Expected: 'er'},
  {Name: 'ces', Actual: bas.ces, Expected: 'es'},
  {Name: 'cet', Actual: bas.cet, Expected: 'et'},
  {Name: 'ceu', Actual: bas.ceu, Expected: 'eu'},
  {Name: 'cev', Actual: bas.cev, Expected: 'ev'},
  {Name: 'cew', Actual: bas.cew, Expected: 'ew'},
  {Name: 'cex', Actual: bas.cex, Expected: 'ex'},
  {Name: 'cey', Actual: bas.cey, Expected: 'ey'},
  {Name: 'cez', Actual: bas.cez, Expected: 'ez'},

  {Name: 'cEa', Actual: bas.cEa, Expected: 'Ea'},
  {Name: 'cEb', Actual: bas.cEb, Expected: 'Eb'},
  {Name: 'cEc', Actual: bas.cEc, Expected: 'Ec'},
  {Name: 'cEd', Actual: bas.cEd, Expected: 'Ed'},
  {Name: 'cEe', Actual: bas.cEe, Expected: 'Ee'},
  {Name: 'cEf', Actual: bas.cEf, Expected: 'Ef'},
  {Name: 'cEg', Actual: bas.cEg, Expected: 'Eg'},
  {Name: 'cEh', Actual: bas.cEh, Expected: 'Eh'},
  {Name: 'cEi', Actual: bas.cEi, Expected: 'Ei'},
  {Name: 'cEj', Actual: bas.cEj, Expected: 'Ej'},
  {Name: 'cEk', Actual: bas.cEk, Expected: 'Ek'},
  {Name: 'cEl', Actual: bas.cEl, Expected: 'El'},
  {Name: 'cEm', Actual: bas.cEm, Expected: 'Em'},
  {Name: 'cEn', Actual: bas.cEn, Expected: 'En'},
  {Name: 'cEo', Actual: bas.cEo, Expected: 'Eo'},
  {Name: 'cEp', Actual: bas.cEp, Expected: 'Ep'},
  {Name: 'cEq', Actual: bas.cEq, Expected: 'Eq'},
  {Name: 'cEr', Actual: bas.cEr, Expected: 'Er'},
  {Name: 'cEs', Actual: bas.cEs, Expected: 'Es'},
  {Name: 'cEt', Actual: bas.cEt, Expected: 'Et'},
  {Name: 'cEu', Actual: bas.cEu, Expected: 'Eu'},
  {Name: 'cEv', Actual: bas.cEv, Expected: 'Ev'},
  {Name: 'cEw', Actual: bas.cEw, Expected: 'Ew'},
  {Name: 'cEx', Actual: bas.cEx, Expected: 'Ex'},
  {Name: 'cEy', Actual: bas.cEy, Expected: 'Ey'},
  {Name: 'cEz', Actual: bas.cEz, Expected: 'Ez'},

  {Name: 'ceA', Actual: bas.ceA, Expected: 'eA'},
  {Name: 'ceB', Actual: bas.ceB, Expected: 'eB'},
  {Name: 'ceC', Actual: bas.ceC, Expected: 'eC'},
  {Name: 'ceD', Actual: bas.ceD, Expected: 'eD'},
  {Name: 'ceE', Actual: bas.ceE, Expected: 'eE'},
  {Name: 'ceF', Actual: bas.ceF, Expected: 'eF'},
  {Name: 'ceG', Actual: bas.ceG, Expected: 'eG'},
  {Name: 'ceH', Actual: bas.ceH, Expected: 'eH'},
  {Name: 'ceI', Actual: bas.ceI, Expected: 'eI'},
  {Name: 'ceJ', Actual: bas.ceJ, Expected: 'eJ'},
  {Name: 'ceK', Actual: bas.ceK, Expected: 'eK'},
  {Name: 'ceL', Actual: bas.ceL, Expected: 'eL'},
  {Name: 'ceM', Actual: bas.ceM, Expected: 'eM'},
  {Name: 'ceN', Actual: bas.ceN, Expected: 'eN'},
  {Name: 'ceO', Actual: bas.ceO, Expected: 'eO'},
  {Name: 'ceP', Actual: bas.ceP, Expected: 'eP'},
  {Name: 'ceQ', Actual: bas.ceQ, Expected: 'eQ'},
  {Name: 'ceR', Actual: bas.ceR, Expected: 'eR'},
  {Name: 'ceS', Actual: bas.ceS, Expected: 'eS'},
  {Name: 'ceT', Actual: bas.ceT, Expected: 'eT'},
  {Name: 'ceU', Actual: bas.ceU, Expected: 'eU'},
  {Name: 'ceV', Actual: bas.ceV, Expected: 'eV'},
  {Name: 'ceW', Actual: bas.ceW, Expected: 'eW'},
  {Name: 'ceX', Actual: bas.ceX, Expected: 'eX'},
  {Name: 'ceY', Actual: bas.ceY, Expected: 'eY'},
  {Name: 'ceZ', Actual: bas.ceZ, Expected: 'eZ'},

  {Name: 'cEA', Actual: bas.cEA, Expected: 'EA'},
  {Name: 'cEB', Actual: bas.cEB, Expected: 'EB'},
  {Name: 'cEC', Actual: bas.cEC, Expected: 'EC'},
  {Name: 'cED', Actual: bas.cED, Expected: 'ED'},
  {Name: 'cEE', Actual: bas.cEE, Expected: 'EE'},
  {Name: 'cEF', Actual: bas.cEF, Expected: 'EF'},
  {Name: 'cEG', Actual: bas.cEG, Expected: 'EG'},
  {Name: 'cEH', Actual: bas.cEH, Expected: 'EH'},
  {Name: 'cEI', Actual: bas.cEI, Expected: 'EI'},
  {Name: 'cEJ', Actual: bas.cEJ, Expected: 'EJ'},
  {Name: 'cEK', Actual: bas.cEK, Expected: 'EK'},
  {Name: 'cEL', Actual: bas.cEL, Expected: 'EL'},
  {Name: 'cEM', Actual: bas.cEM, Expected: 'EM'},
  {Name: 'cEN', Actual: bas.cEN, Expected: 'EN'},
  {Name: 'cEO', Actual: bas.cEO, Expected: 'EO'},
  {Name: 'cEP', Actual: bas.cEP, Expected: 'EP'},
  {Name: 'cEQ', Actual: bas.cEQ, Expected: 'EQ'},
  {Name: 'cER', Actual: bas.cER, Expected: 'ER'},
  {Name: 'cES', Actual: bas.cES, Expected: 'ES'},
  {Name: 'cET', Actual: bas.cET, Expected: 'ET'},
  {Name: 'cEU', Actual: bas.cEU, Expected: 'EU'},
  {Name: 'cEV', Actual: bas.cEV, Expected: 'EV'},
  {Name: 'cEW', Actual: bas.cEW, Expected: 'EW'},
  {Name: 'cEX', Actual: bas.cEX, Expected: 'EX'},
  {Name: 'cEY', Actual: bas.cEY, Expected: 'EY'},
  {Name: 'cEZ', Actual: bas.cEZ, Expected: 'EZ'},

  // fa-FA
  {Name: 'cfa', Actual: bas.cfa, Expected: 'fa'},
  {Name: 'cfb', Actual: bas.cfb, Expected: 'fb'},
  {Name: 'cfc', Actual: bas.cfc, Expected: 'fc'},
  {Name: 'cfd', Actual: bas.cfd, Expected: 'fd'},
  {Name: 'cfe', Actual: bas.cfe, Expected: 'fe'},
  {Name: 'cff', Actual: bas.cff, Expected: 'ff'},
  {Name: 'cfg', Actual: bas.cfg, Expected: 'fg'},
  {Name: 'cfh', Actual: bas.cfh, Expected: 'fh'},
  {Name: 'cfi', Actual: bas.cfi, Expected: 'fi'},
  {Name: 'cfj', Actual: bas.cfj, Expected: 'fj'},
  {Name: 'cfk', Actual: bas.cfk, Expected: 'fk'},
  {Name: 'cfl', Actual: bas.cfl, Expected: 'fl'},
  {Name: 'cfm', Actual: bas.cfm, Expected: 'fm'},
  {Name: 'cfn', Actual: bas.cfn, Expected: 'fn'},
  {Name: 'cfo', Actual: bas.cfo, Expected: 'fo'},
  {Name: 'cfp', Actual: bas.cfp, Expected: 'fp'},
  {Name: 'cfq', Actual: bas.cfq, Expected: 'fq'},
  {Name: 'cfr', Actual: bas.cfr, Expected: 'fr'},
  {Name: 'cfs', Actual: bas.cfs, Expected: 'fs'},
  {Name: 'cft', Actual: bas.cft, Expected: 'ft'},
  {Name: 'cfu', Actual: bas.cfu, Expected: 'fu'},
  {Name: 'cfv', Actual: bas.cfv, Expected: 'fv'},
  {Name: 'cfw', Actual: bas.cfw, Expected: 'fw'},
  {Name: 'cfx', Actual: bas.cfx, Expected: 'fx'},
  {Name: 'cfy', Actual: bas.cfy, Expected: 'fy'},
  {Name: 'cfz', Actual: bas.cfz, Expected: 'fz'},

  {Name: 'cFa', Actual: bas.cFa, Expected: 'Fa'},
  {Name: 'cFb', Actual: bas.cFb, Expected: 'Fb'},
  {Name: 'cFc', Actual: bas.cFc, Expected: 'Fc'},
  {Name: 'cFd', Actual: bas.cFd, Expected: 'Fd'},
  {Name: 'cFe', Actual: bas.cFe, Expected: 'Fe'},
  {Name: 'cFf', Actual: bas.cFf, Expected: 'Ff'},
  {Name: 'cFg', Actual: bas.cFg, Expected: 'Fg'},
  {Name: 'cFh', Actual: bas.cFh, Expected: 'Fh'},
  {Name: 'cFi', Actual: bas.cFi, Expected: 'Fi'},
  {Name: 'cFj', Actual: bas.cFj, Expected: 'Fj'},
  {Name: 'cFk', Actual: bas.cFk, Expected: 'Fk'},
  {Name: 'cFl', Actual: bas.cFl, Expected: 'Fl'},
  {Name: 'cFm', Actual: bas.cFm, Expected: 'Fm'},
  {Name: 'cFn', Actual: bas.cFn, Expected: 'Fn'},
  {Name: 'cFo', Actual: bas.cFo, Expected: 'Fo'},
  {Name: 'cFp', Actual: bas.cFp, Expected: 'Fp'},
  {Name: 'cFq', Actual: bas.cFq, Expected: 'Fq'},
  {Name: 'cFr', Actual: bas.cFr, Expected: 'Fr'},
  {Name: 'cFs', Actual: bas.cFs, Expected: 'Fs'},
  {Name: 'cFt', Actual: bas.cFt, Expected: 'Ft'},
  {Name: 'cFu', Actual: bas.cFu, Expected: 'Fu'},
  {Name: 'cFv', Actual: bas.cFv, Expected: 'Fv'},
  {Name: 'cFw', Actual: bas.cFw, Expected: 'Fw'},
  {Name: 'cFx', Actual: bas.cFx, Expected: 'Fx'},
  {Name: 'cFy', Actual: bas.cFy, Expected: 'Fy'},
  {Name: 'cFz', Actual: bas.cFz, Expected: 'Fz'},

  {Name: 'cfA', Actual: bas.cfA, Expected: 'fA'},
  {Name: 'cfB', Actual: bas.cfB, Expected: 'fB'},
  {Name: 'cfC', Actual: bas.cfC, Expected: 'fC'},
  {Name: 'cfD', Actual: bas.cfD, Expected: 'fD'},
  {Name: 'cfE', Actual: bas.cfE, Expected: 'fE'},
  {Name: 'cfF', Actual: bas.cfF, Expected: 'fF'},
  {Name: 'cfG', Actual: bas.cfG, Expected: 'fG'},
  {Name: 'cfH', Actual: bas.cfH, Expected: 'fH'},
  {Name: 'cfI', Actual: bas.cfI, Expected: 'fI'},
  {Name: 'cfJ', Actual: bas.cfJ, Expected: 'fJ'},
  {Name: 'cfK', Actual: bas.cfK, Expected: 'fK'},
  {Name: 'cfL', Actual: bas.cfL, Expected: 'fL'},
  {Name: 'cfM', Actual: bas.cfM, Expected: 'fM'},
  {Name: 'cfN', Actual: bas.cfN, Expected: 'fN'},
  {Name: 'cfO', Actual: bas.cfO, Expected: 'fO'},
  {Name: 'cfP', Actual: bas.cfP, Expected: 'fP'},
  {Name: 'cfQ', Actual: bas.cfQ, Expected: 'fQ'},
  {Name: 'cfR', Actual: bas.cfR, Expected: 'fR'},
  {Name: 'cfS', Actual: bas.cfS, Expected: 'fS'},
  {Name: 'cfT', Actual: bas.cfT, Expected: 'fT'},
  {Name: 'cfU', Actual: bas.cfU, Expected: 'fU'},
  {Name: 'cfV', Actual: bas.cfV, Expected: 'fV'},
  {Name: 'cfW', Actual: bas.cfW, Expected: 'fW'},
  {Name: 'cfX', Actual: bas.cfX, Expected: 'fX'},
  {Name: 'cfY', Actual: bas.cfY, Expected: 'fY'},
  {Name: 'cfZ', Actual: bas.cfZ, Expected: 'fZ'},

  {Name: 'cFA', Actual: bas.cFA, Expected: 'FA'},
  {Name: 'cFB', Actual: bas.cFB, Expected: 'FB'},
  {Name: 'cFC', Actual: bas.cFC, Expected: 'FC'},
  {Name: 'cFD', Actual: bas.cFD, Expected: 'FD'},
  {Name: 'cFE', Actual: bas.cFE, Expected: 'FE'},
  {Name: 'cFF', Actual: bas.cFF, Expected: 'FF'},
  {Name: 'cFG', Actual: bas.cFG, Expected: 'FG'},
  {Name: 'cFH', Actual: bas.cFH, Expected: 'FH'},
  {Name: 'cFI', Actual: bas.cFI, Expected: 'FI'},
  {Name: 'cFJ', Actual: bas.cFJ, Expected: 'FJ'},
  {Name: 'cFK', Actual: bas.cFK, Expected: 'FK'},
  {Name: 'cFL', Actual: bas.cFL, Expected: 'FL'},
  {Name: 'cFM', Actual: bas.cFM, Expected: 'FM'},
  {Name: 'cFN', Actual: bas.cFN, Expected: 'FN'},
  {Name: 'cFO', Actual: bas.cFO, Expected: 'FO'},
  {Name: 'cFP', Actual: bas.cFP, Expected: 'FP'},
  {Name: 'cFQ', Actual: bas.cFQ, Expected: 'FQ'},
  {Name: 'cFR', Actual: bas.cFR, Expected: 'FR'},
  {Name: 'cFS', Actual: bas.cFS, Expected: 'FS'},
  {Name: 'cFT', Actual: bas.cFT, Expected: 'FT'},
  {Name: 'cFU', Actual: bas.cFU, Expected: 'FU'},
  {Name: 'cFV', Actual: bas.cFV, Expected: 'FV'},
  {Name: 'cFW', Actual: bas.cFW, Expected: 'FW'},
  {Name: 'cFX', Actual: bas.cFX, Expected: 'FX'},
  {Name: 'cFY', Actual: bas.cFY, Expected: 'FY'},
  {Name: 'cFZ', Actual: bas.cFZ, Expected: 'FZ'},

  // ga-GA
  {Name: 'cga', Actual: bas.cga, Expected: 'ga'},
  {Name: 'cgb', Actual: bas.cgb, Expected: 'gb'},
  {Name: 'cgc', Actual: bas.cgc, Expected: 'gc'},
  {Name: 'cgd', Actual: bas.cgd, Expected: 'gd'},
  {Name: 'cge', Actual: bas.cge, Expected: 'ge'},
  {Name: 'cgf', Actual: bas.cgf, Expected: 'gf'},
  {Name: 'cgg', Actual: bas.cgg, Expected: 'gg'},
  {Name: 'cgh', Actual: bas.cgh, Expected: 'gh'},
  {Name: 'cgi', Actual: bas.cgi, Expected: 'gi'},
  {Name: 'cgj', Actual: bas.cgj, Expected: 'gj'},
  {Name: 'cgk', Actual: bas.cgk, Expected: 'gk'},
  {Name: 'cgl', Actual: bas.cgl, Expected: 'gl'},
  {Name: 'cgm', Actual: bas.cgm, Expected: 'gm'},
  {Name: 'cgn', Actual: bas.cgn, Expected: 'gn'},
  {Name: 'cgo', Actual: bas.cgo, Expected: 'go'},
  {Name: 'cgp', Actual: bas.cgp, Expected: 'gp'},
  {Name: 'cgq', Actual: bas.cgq, Expected: 'gq'},
  {Name: 'cgr', Actual: bas.cgr, Expected: 'gr'},
  {Name: 'cgs', Actual: bas.cgs, Expected: 'gs'},
  {Name: 'cgt', Actual: bas.cgt, Expected: 'gt'},
  {Name: 'cgu', Actual: bas.cgu, Expected: 'gu'},
  {Name: 'cgv', Actual: bas.cgv, Expected: 'gv'},
  {Name: 'cgw', Actual: bas.cgw, Expected: 'gw'},
  {Name: 'cgx', Actual: bas.cgx, Expected: 'gx'},
  {Name: 'cgy', Actual: bas.cgy, Expected: 'gy'},
  {Name: 'cgz', Actual: bas.cgz, Expected: 'gz'},

  {Name: 'cGa', Actual: bas.cGa, Expected: 'Ga'},
  {Name: 'cGb', Actual: bas.cGb, Expected: 'Gb'},
  {Name: 'cGc', Actual: bas.cGc, Expected: 'Gc'},
  {Name: 'cGd', Actual: bas.cGd, Expected: 'Gd'},
  {Name: 'cGe', Actual: bas.cGe, Expected: 'Ge'},
  {Name: 'cGf', Actual: bas.cGf, Expected: 'Gf'},
  {Name: 'cGg', Actual: bas.cGg, Expected: 'Gg'},
  {Name: 'cGh', Actual: bas.cGh, Expected: 'Gh'},
  {Name: 'cGi', Actual: bas.cGi, Expected: 'Gi'},
  {Name: 'cGj', Actual: bas.cGj, Expected: 'Gj'},
  {Name: 'cGk', Actual: bas.cGk, Expected: 'Gk'},
  {Name: 'cGl', Actual: bas.cGl, Expected: 'Gl'},
  {Name: 'cGm', Actual: bas.cGm, Expected: 'Gm'},
  {Name: 'cGn', Actual: bas.cGn, Expected: 'Gn'},
  {Name: 'cGo', Actual: bas.cGo, Expected: 'Go'},
  {Name: 'cGp', Actual: bas.cGp, Expected: 'Gp'},
  {Name: 'cGq', Actual: bas.cGq, Expected: 'Gq'},
  {Name: 'cGr', Actual: bas.cGr, Expected: 'Gr'},
  {Name: 'cGs', Actual: bas.cGs, Expected: 'Gs'},
  {Name: 'cGt', Actual: bas.cGt, Expected: 'Gt'},
  {Name: 'cGu', Actual: bas.cGu, Expected: 'Gu'},
  {Name: 'cGv', Actual: bas.cGv, Expected: 'Gv'},
  {Name: 'cGw', Actual: bas.cGw, Expected: 'Gw'},
  {Name: 'cGx', Actual: bas.cGx, Expected: 'Gx'},
  {Name: 'cGy', Actual: bas.cGy, Expected: 'Gy'},
  {Name: 'cGz', Actual: bas.cGz, Expected: 'Gz'},

  {Name: 'cgA', Actual: bas.cgA, Expected: 'gA'},
  {Name: 'cgB', Actual: bas.cgB, Expected: 'gB'},
  {Name: 'cgC', Actual: bas.cgC, Expected: 'gC'},
  {Name: 'cgD', Actual: bas.cgD, Expected: 'gD'},
  {Name: 'cgE', Actual: bas.cgE, Expected: 'gE'},
  {Name: 'cgF', Actual: bas.cgF, Expected: 'gF'},
  {Name: 'cgG', Actual: bas.cgG, Expected: 'gG'},
  {Name: 'cgH', Actual: bas.cgH, Expected: 'gH'},
  {Name: 'cgI', Actual: bas.cgI, Expected: 'gI'},
  {Name: 'cgJ', Actual: bas.cgJ, Expected: 'gJ'},
  {Name: 'cgK', Actual: bas.cgK, Expected: 'gK'},
  {Name: 'cgL', Actual: bas.cgL, Expected: 'gL'},
  {Name: 'cgM', Actual: bas.cgM, Expected: 'gM'},
  {Name: 'cgN', Actual: bas.cgN, Expected: 'gN'},
  {Name: 'cgO', Actual: bas.cgO, Expected: 'gO'},
  {Name: 'cgP', Actual: bas.cgP, Expected: 'gP'},
  {Name: 'cgQ', Actual: bas.cgQ, Expected: 'gQ'},
  {Name: 'cgR', Actual: bas.cgR, Expected: 'gR'},
  {Name: 'cgS', Actual: bas.cgS, Expected: 'gS'},
  {Name: 'cgT', Actual: bas.cgT, Expected: 'gT'},
  {Name: 'cgU', Actual: bas.cgU, Expected: 'gU'},
  {Name: 'cgV', Actual: bas.cgV, Expected: 'gV'},
  {Name: 'cgW', Actual: bas.cgW, Expected: 'gW'},
  {Name: 'cgX', Actual: bas.cgX, Expected: 'gX'},
  {Name: 'cgY', Actual: bas.cgY, Expected: 'gY'},
  {Name: 'cgZ', Actual: bas.cgZ, Expected: 'gZ'},

  {Name: 'cGA', Actual: bas.cGA, Expected: 'GA'},
  {Name: 'cGB', Actual: bas.cGB, Expected: 'GB'},
  {Name: 'cGC', Actual: bas.cGC, Expected: 'GC'},
  {Name: 'cGD', Actual: bas.cGD, Expected: 'GD'},
  {Name: 'cGE', Actual: bas.cGE, Expected: 'GE'},
  {Name: 'cGF', Actual: bas.cGF, Expected: 'GF'},
  {Name: 'cGG', Actual: bas.cGG, Expected: 'GG'},
  {Name: 'cGH', Actual: bas.cGH, Expected: 'GH'},
  {Name: 'cGI', Actual: bas.cGI, Expected: 'GI'},
  {Name: 'cGJ', Actual: bas.cGJ, Expected: 'GJ'},
  {Name: 'cGK', Actual: bas.cGK, Expected: 'GK'},
  {Name: 'cGL', Actual: bas.cGL, Expected: 'GL'},
  {Name: 'cGM', Actual: bas.cGM, Expected: 'GM'},
  {Name: 'cGN', Actual: bas.cGN, Expected: 'GN'},
  {Name: 'cGO', Actual: bas.cGO, Expected: 'GO'},
  {Name: 'cGP', Actual: bas.cGP, Expected: 'GP'},
  {Name: 'cGQ', Actual: bas.cGQ, Expected: 'GQ'},
  {Name: 'cGR', Actual: bas.cGR, Expected: 'GR'},
  {Name: 'cGS', Actual: bas.cGS, Expected: 'GS'},
  {Name: 'cGT', Actual: bas.cGT, Expected: 'GT'},
  {Name: 'cGU', Actual: bas.cGU, Expected: 'GU'},
  {Name: 'cGV', Actual: bas.cGV, Expected: 'GV'},
  {Name: 'cGW', Actual: bas.cGW, Expected: 'GW'},
  {Name: 'cGX', Actual: bas.cGX, Expected: 'GX'},
  {Name: 'cGY', Actual: bas.cGY, Expected: 'GY'},
  {Name: 'cGZ', Actual: bas.cGZ, Expected: 'GZ'},

  // ha-HA
  {Name: 'cha', Actual: bas.cha, Expected: 'ha'},
  {Name: 'chb', Actual: bas.chb, Expected: 'hb'},
  {Name: 'chc', Actual: bas.chc, Expected: 'hc'},
  {Name: 'chd', Actual: bas.chd, Expected: 'hd'},
  {Name: 'che', Actual: bas.che, Expected: 'he'},
  {Name: 'chf', Actual: bas.chf, Expected: 'hf'},
  {Name: 'chg', Actual: bas.chg, Expected: 'hg'},
  {Name: 'chh', Actual: bas.chh, Expected: 'hh'},
  {Name: 'chi', Actual: bas.chi, Expected: 'hi'},
  {Name: 'chj', Actual: bas.chj, Expected: 'hj'},
  {Name: 'chk', Actual: bas.chk, Expected: 'hk'},
  {Name: 'chl', Actual: bas.chl, Expected: 'hl'},
  {Name: 'chm', Actual: bas.chm, Expected: 'hm'},
  {Name: 'chn', Actual: bas.chn, Expected: 'hn'},
  {Name: 'cho', Actual: bas.cho, Expected: 'ho'},
  {Name: 'chp', Actual: bas.chp, Expected: 'hp'},
  {Name: 'chq', Actual: bas.chq, Expected: 'hq'},
  {Name: 'chr', Actual: bas.chr, Expected: 'hr'},
  {Name: 'chs', Actual: bas.chs, Expected: 'hs'},
  {Name: 'cht', Actual: bas.cht, Expected: 'ht'},
  {Name: 'chu', Actual: bas.chu, Expected: 'hu'},
  {Name: 'chv', Actual: bas.chv, Expected: 'hv'},
  {Name: 'chw', Actual: bas.chw, Expected: 'hw'},
  {Name: 'chx', Actual: bas.chx, Expected: 'hx'},
  {Name: 'chy', Actual: bas.chy, Expected: 'hy'},
  {Name: 'chz', Actual: bas.chz, Expected: 'hz'},

  {Name: 'cHa', Actual: bas.cHa, Expected: 'Ha'},
  {Name: 'cHb', Actual: bas.cHb, Expected: 'Hb'},
  {Name: 'cHc', Actual: bas.cHc, Expected: 'Hc'},
  {Name: 'cHd', Actual: bas.cHd, Expected: 'Hd'},
  {Name: 'cHe', Actual: bas.cHe, Expected: 'He'},
  {Name: 'cHf', Actual: bas.cHf, Expected: 'Hf'},
  {Name: 'cHg', Actual: bas.cHg, Expected: 'Hg'},
  {Name: 'cHh', Actual: bas.cHh, Expected: 'Hh'},
  {Name: 'cHi', Actual: bas.cHi, Expected: 'Hi'},
  {Name: 'cHj', Actual: bas.cHj, Expected: 'Hj'},
  {Name: 'cHk', Actual: bas.cHk, Expected: 'Hk'},
  {Name: 'cHl', Actual: bas.cHl, Expected: 'Hl'},
  {Name: 'cHm', Actual: bas.cHm, Expected: 'Hm'},
  {Name: 'cHn', Actual: bas.cHn, Expected: 'Hn'},
  {Name: 'cHo', Actual: bas.cHo, Expected: 'Ho'},
  {Name: 'cHp', Actual: bas.cHp, Expected: 'Hp'},
  {Name: 'cHq', Actual: bas.cHq, Expected: 'Hq'},
  {Name: 'cHr', Actual: bas.cHr, Expected: 'Hr'},
  {Name: 'cHs', Actual: bas.cHs, Expected: 'Hs'},
  {Name: 'cHt', Actual: bas.cHt, Expected: 'Ht'},
  {Name: 'cHu', Actual: bas.cHu, Expected: 'Hu'},
  {Name: 'cHv', Actual: bas.cHv, Expected: 'Hv'},
  {Name: 'cHw', Actual: bas.cHw, Expected: 'Hw'},
  {Name: 'cHx', Actual: bas.cHx, Expected: 'Hx'},
  {Name: 'cHy', Actual: bas.cHy, Expected: 'Hy'},
  {Name: 'cHz', Actual: bas.cHz, Expected: 'Hz'},

  {Name: 'chA', Actual: bas.chA, Expected: 'hA'},
  {Name: 'chB', Actual: bas.chB, Expected: 'hB'},
  {Name: 'chC', Actual: bas.chC, Expected: 'hC'},
  {Name: 'chD', Actual: bas.chD, Expected: 'hD'},
  {Name: 'chE', Actual: bas.chE, Expected: 'hE'},
  {Name: 'chF', Actual: bas.chF, Expected: 'hF'},
  {Name: 'chG', Actual: bas.chG, Expected: 'hG'},
  {Name: 'chH', Actual: bas.chH, Expected: 'hH'},
  {Name: 'chI', Actual: bas.chI, Expected: 'hI'},
  {Name: 'chJ', Actual: bas.chJ, Expected: 'hJ'},
  {Name: 'chK', Actual: bas.chK, Expected: 'hK'},
  {Name: 'chL', Actual: bas.chL, Expected: 'hL'},
  {Name: 'chM', Actual: bas.chM, Expected: 'hM'},
  {Name: 'chN', Actual: bas.chN, Expected: 'hN'},
  {Name: 'chO', Actual: bas.chO, Expected: 'hO'},
  {Name: 'chP', Actual: bas.chP, Expected: 'hP'},
  {Name: 'chQ', Actual: bas.chQ, Expected: 'hQ'},
  {Name: 'chR', Actual: bas.chR, Expected: 'hR'},
  {Name: 'chS', Actual: bas.chS, Expected: 'hS'},
  {Name: 'chT', Actual: bas.chT, Expected: 'hT'},
  {Name: 'chU', Actual: bas.chU, Expected: 'hU'},
  {Name: 'chV', Actual: bas.chV, Expected: 'hV'},
  {Name: 'chW', Actual: bas.chW, Expected: 'hW'},
  {Name: 'chX', Actual: bas.chX, Expected: 'hX'},
  {Name: 'chY', Actual: bas.chY, Expected: 'hY'},
  {Name: 'chZ', Actual: bas.chZ, Expected: 'hZ'},

  {Name: 'cHA', Actual: bas.cHA, Expected: 'HA'},
  {Name: 'cHB', Actual: bas.cHB, Expected: 'HB'},
  {Name: 'cHC', Actual: bas.cHC, Expected: 'HC'},
  {Name: 'cHD', Actual: bas.cHD, Expected: 'HD'},
  {Name: 'cHE', Actual: bas.cHE, Expected: 'HE'},
  {Name: 'cHF', Actual: bas.cHF, Expected: 'HF'},
  {Name: 'cHG', Actual: bas.cHG, Expected: 'HG'},
  {Name: 'cHH', Actual: bas.cHH, Expected: 'HH'},
  {Name: 'cHI', Actual: bas.cHI, Expected: 'HI'},
  {Name: 'cHJ', Actual: bas.cHJ, Expected: 'HJ'},
  {Name: 'cHK', Actual: bas.cHK, Expected: 'HK'},
  {Name: 'cHL', Actual: bas.cHL, Expected: 'HL'},
  {Name: 'cHM', Actual: bas.cHM, Expected: 'HM'},
  {Name: 'cHN', Actual: bas.cHN, Expected: 'HN'},
  {Name: 'cHO', Actual: bas.cHO, Expected: 'HO'},
  {Name: 'cHP', Actual: bas.cHP, Expected: 'HP'},
  {Name: 'cHQ', Actual: bas.cHQ, Expected: 'HQ'},
  {Name: 'cHR', Actual: bas.cHR, Expected: 'HR'},
  {Name: 'cHS', Actual: bas.cHS, Expected: 'HS'},
  {Name: 'cHT', Actual: bas.cHT, Expected: 'HT'},
  {Name: 'cHU', Actual: bas.cHU, Expected: 'HU'},
  {Name: 'cHV', Actual: bas.cHV, Expected: 'HV'},
  {Name: 'cHW', Actual: bas.cHW, Expected: 'HW'},
  {Name: 'cHX', Actual: bas.cHX, Expected: 'HX'},
  {Name: 'cHY', Actual: bas.cHY, Expected: 'HY'},
  {Name: 'cHZ', Actual: bas.cHZ, Expected: 'HZ'},

  // ia-IA
  {Name: 'cia', Actual: bas.cia, Expected: 'ia'},
  {Name: 'cib', Actual: bas.cib, Expected: 'ib'},
  {Name: 'cic', Actual: bas.cic, Expected: 'ic'},
  {Name: 'cid', Actual: bas.cid, Expected: 'id'},
  {Name: 'cie', Actual: bas.cie, Expected: 'ie'},
  {Name: 'cif', Actual: bas.cif, Expected: 'if'},
  {Name: 'cig', Actual: bas.cig, Expected: 'ig'},
  {Name: 'cih', Actual: bas.cih, Expected: 'ih'},
  {Name: 'cii', Actual: bas.cii, Expected: 'ii'},
  {Name: 'cij', Actual: bas.cij, Expected: 'ij'},
  {Name: 'cik', Actual: bas.cik, Expected: 'ik'},
  {Name: 'cil', Actual: bas.cil, Expected: 'il'},
  {Name: 'cim', Actual: bas.cim, Expected: 'im'},
  {Name: 'cin', Actual: bas.cin, Expected: 'in'},
  {Name: 'cio', Actual: bas.cio, Expected: 'io'},
  {Name: 'cip', Actual: bas.cip, Expected: 'ip'},
  {Name: 'ciq', Actual: bas.ciq, Expected: 'iq'},
  {Name: 'cir', Actual: bas.cir, Expected: 'ir'},
  {Name: 'cis', Actual: bas.cis, Expected: 'is'},
  {Name: 'cit', Actual: bas.cit, Expected: 'it'},
  {Name: 'ciu', Actual: bas.ciu, Expected: 'iu'},
  {Name: 'civ', Actual: bas.civ, Expected: 'iv'},
  {Name: 'ciw', Actual: bas.ciw, Expected: 'iw'},
  {Name: 'cix', Actual: bas.cix, Expected: 'ix'},
  {Name: 'ciy', Actual: bas.ciy, Expected: 'iy'},
  {Name: 'ciz', Actual: bas.ciz, Expected: 'iz'},

  {Name: 'cIa', Actual: bas.cIa, Expected: 'Ia'},
  {Name: 'cIb', Actual: bas.cIb, Expected: 'Ib'},
  {Name: 'cIc', Actual: bas.cIc, Expected: 'Ic'},
  {Name: 'cId', Actual: bas.cId, Expected: 'Id'},
  {Name: 'cIe', Actual: bas.cIe, Expected: 'Ie'},
  {Name: 'cIf', Actual: bas.cIf, Expected: 'If'},
  {Name: 'cIg', Actual: bas.cIg, Expected: 'Ig'},
  {Name: 'cIh', Actual: bas.cIh, Expected: 'Ih'},
  {Name: 'cIi', Actual: bas.cIi, Expected: 'Ii'},
  {Name: 'cIj', Actual: bas.cIj, Expected: 'Ij'},
  {Name: 'cIk', Actual: bas.cIk, Expected: 'Ik'},
  {Name: 'cIl', Actual: bas.cIl, Expected: 'Il'},
  {Name: 'cIm', Actual: bas.cIm, Expected: 'Im'},
  {Name: 'cIn', Actual: bas.cIn, Expected: 'In'},
  {Name: 'cIo', Actual: bas.cIo, Expected: 'Io'},
  {Name: 'cIp', Actual: bas.cIp, Expected: 'Ip'},
  {Name: 'cIq', Actual: bas.cIq, Expected: 'Iq'},
  {Name: 'cIr', Actual: bas.cIr, Expected: 'Ir'},
  {Name: 'cIs', Actual: bas.cIs, Expected: 'Is'},
  {Name: 'cIt', Actual: bas.cIt, Expected: 'It'},
  {Name: 'cIu', Actual: bas.cIu, Expected: 'Iu'},
  {Name: 'cIv', Actual: bas.cIv, Expected: 'Iv'},
  {Name: 'cIw', Actual: bas.cIw, Expected: 'Iw'},
  {Name: 'cIx', Actual: bas.cIx, Expected: 'Ix'},
  {Name: 'cIy', Actual: bas.cIy, Expected: 'Iy'},
  {Name: 'cIz', Actual: bas.cIz, Expected: 'Iz'},

  {Name: 'ciA', Actual: bas.ciA, Expected: 'iA'},
  {Name: 'ciB', Actual: bas.ciB, Expected: 'iB'},
  {Name: 'ciC', Actual: bas.ciC, Expected: 'iC'},
  {Name: 'ciD', Actual: bas.ciD, Expected: 'iD'},
  {Name: 'ciE', Actual: bas.ciE, Expected: 'iE'},
  {Name: 'ciF', Actual: bas.ciF, Expected: 'iF'},
  {Name: 'ciG', Actual: bas.ciG, Expected: 'iG'},
  {Name: 'ciH', Actual: bas.ciH, Expected: 'iH'},
  {Name: 'ciI', Actual: bas.ciI, Expected: 'iI'},
  {Name: 'ciJ', Actual: bas.ciJ, Expected: 'iJ'},
  {Name: 'ciK', Actual: bas.ciK, Expected: 'iK'},
  {Name: 'ciL', Actual: bas.ciL, Expected: 'iL'},
  {Name: 'ciM', Actual: bas.ciM, Expected: 'iM'},
  {Name: 'ciN', Actual: bas.ciN, Expected: 'iN'},
  {Name: 'ciO', Actual: bas.ciO, Expected: 'iO'},
  {Name: 'ciP', Actual: bas.ciP, Expected: 'iP'},
  {Name: 'ciQ', Actual: bas.ciQ, Expected: 'iQ'},
  {Name: 'ciR', Actual: bas.ciR, Expected: 'iR'},
  {Name: 'ciS', Actual: bas.ciS, Expected: 'iS'},
  {Name: 'ciT', Actual: bas.ciT, Expected: 'iT'},
  {Name: 'ciU', Actual: bas.ciU, Expected: 'iU'},
  {Name: 'ciV', Actual: bas.ciV, Expected: 'iV'},
  {Name: 'ciW', Actual: bas.ciW, Expected: 'iW'},
  {Name: 'ciX', Actual: bas.ciX, Expected: 'iX'},
  {Name: 'ciY', Actual: bas.ciY, Expected: 'iY'},
  {Name: 'ciZ', Actual: bas.ciZ, Expected: 'iZ'},

  {Name: 'cIA', Actual: bas.cIA, Expected: 'IA'},
  {Name: 'cIB', Actual: bas.cIB, Expected: 'IB'},
  {Name: 'cIC', Actual: bas.cIC, Expected: 'IC'},
  {Name: 'cID', Actual: bas.cID, Expected: 'ID'},
  {Name: 'cIE', Actual: bas.cIE, Expected: 'IE'},
  {Name: 'cIF', Actual: bas.cIF, Expected: 'IF'},
  {Name: 'cIG', Actual: bas.cIG, Expected: 'IG'},
  {Name: 'cIH', Actual: bas.cIH, Expected: 'IH'},
  {Name: 'cII', Actual: bas.cII, Expected: 'II'},
  {Name: 'cIJ', Actual: bas.cIJ, Expected: 'IJ'},
  {Name: 'cIK', Actual: bas.cIK, Expected: 'IK'},
  {Name: 'cIL', Actual: bas.cIL, Expected: 'IL'},
  {Name: 'cIM', Actual: bas.cIM, Expected: 'IM'},
  {Name: 'cIN', Actual: bas.cIN, Expected: 'IN'},
  {Name: 'cIO', Actual: bas.cIO, Expected: 'IO'},
  {Name: 'cIP', Actual: bas.cIP, Expected: 'IP'},
  {Name: 'cIQ', Actual: bas.cIQ, Expected: 'IQ'},
  {Name: 'cIR', Actual: bas.cIR, Expected: 'IR'},
  {Name: 'cIS', Actual: bas.cIS, Expected: 'IS'},
  {Name: 'cIT', Actual: bas.cIT, Expected: 'IT'},
  {Name: 'cIU', Actual: bas.cIU, Expected: 'IU'},
  {Name: 'cIV', Actual: bas.cIV, Expected: 'IV'},
  {Name: 'cIW', Actual: bas.cIW, Expected: 'IW'},
  {Name: 'cIX', Actual: bas.cIX, Expected: 'IX'},
  {Name: 'cIY', Actual: bas.cIY, Expected: 'IY'},
  {Name: 'cIZ', Actual: bas.cIZ, Expected: 'IZ'},

  // ja-JA
  {Name: 'cja', Actual: bas.cja, Expected: 'ja'},
  {Name: 'cjb', Actual: bas.cjb, Expected: 'jb'},
  {Name: 'cjc', Actual: bas.cjc, Expected: 'jc'},
  {Name: 'cjd', Actual: bas.cjd, Expected: 'jd'},
  {Name: 'cje', Actual: bas.cje, Expected: 'je'},
  {Name: 'cjf', Actual: bas.cjf, Expected: 'jf'},
  {Name: 'cjg', Actual: bas.cjg, Expected: 'jg'},
  {Name: 'cjh', Actual: bas.cjh, Expected: 'jh'},
  {Name: 'cji', Actual: bas.cji, Expected: 'ji'},
  {Name: 'cjj', Actual: bas.cjj, Expected: 'jj'},
  {Name: 'cjk', Actual: bas.cjk, Expected: 'jk'},
  {Name: 'cjl', Actual: bas.cjl, Expected: 'jl'},
  {Name: 'cjm', Actual: bas.cjm, Expected: 'jm'},
  {Name: 'cjn', Actual: bas.cjn, Expected: 'jn'},
  {Name: 'cjo', Actual: bas.cjo, Expected: 'jo'},
  {Name: 'cjp', Actual: bas.cjp, Expected: 'jp'},
  {Name: 'cjq', Actual: bas.cjq, Expected: 'jq'},
  {Name: 'cjr', Actual: bas.cjr, Expected: 'jr'},
  {Name: 'cjs', Actual: bas.cjs, Expected: 'js'},
  {Name: 'cjt', Actual: bas.cjt, Expected: 'jt'},
  {Name: 'cju', Actual: bas.cju, Expected: 'ju'},
  {Name: 'cjv', Actual: bas.cjv, Expected: 'jv'},
  {Name: 'cjw', Actual: bas.cjw, Expected: 'jw'},
  {Name: 'cjx', Actual: bas.cjx, Expected: 'jx'},
  {Name: 'cjy', Actual: bas.cjy, Expected: 'jy'},
  {Name: 'cjz', Actual: bas.cjz, Expected: 'jz'},

  {Name: 'cJa', Actual: bas.cJa, Expected: 'Ja'},
  {Name: 'cJb', Actual: bas.cJb, Expected: 'Jb'},
  {Name: 'cJc', Actual: bas.cJc, Expected: 'Jc'},
  {Name: 'cJd', Actual: bas.cJd, Expected: 'Jd'},
  {Name: 'cJe', Actual: bas.cJe, Expected: 'Je'},
  {Name: 'cJf', Actual: bas.cJf, Expected: 'Jf'},
  {Name: 'cJg', Actual: bas.cJg, Expected: 'Jg'},
  {Name: 'cJh', Actual: bas.cJh, Expected: 'Jh'},
  {Name: 'cJi', Actual: bas.cJi, Expected: 'Ji'},
  {Name: 'cJj', Actual: bas.cJj, Expected: 'Jj'},
  {Name: 'cJk', Actual: bas.cJk, Expected: 'Jk'},
  {Name: 'cJl', Actual: bas.cJl, Expected: 'Jl'},
  {Name: 'cJm', Actual: bas.cJm, Expected: 'Jm'},
  {Name: 'cJn', Actual: bas.cJn, Expected: 'Jn'},
  {Name: 'cJo', Actual: bas.cJo, Expected: 'Jo'},
  {Name: 'cJp', Actual: bas.cJp, Expected: 'Jp'},
  {Name: 'cJq', Actual: bas.cJq, Expected: 'Jq'},
  {Name: 'cJr', Actual: bas.cJr, Expected: 'Jr'},
  {Name: 'cJs', Actual: bas.cJs, Expected: 'Js'},
  {Name: 'cJt', Actual: bas.cJt, Expected: 'Jt'},
  {Name: 'cJu', Actual: bas.cJu, Expected: 'Ju'},
  {Name: 'cJv', Actual: bas.cJv, Expected: 'Jv'},
  {Name: 'cJw', Actual: bas.cJw, Expected: 'Jw'},
  {Name: 'cJx', Actual: bas.cJx, Expected: 'Jx'},
  {Name: 'cJy', Actual: bas.cJy, Expected: 'Jy'},
  {Name: 'cJz', Actual: bas.cJz, Expected: 'Jz'},

  {Name: 'cjA', Actual: bas.cjA, Expected: 'jA'},
  {Name: 'cjB', Actual: bas.cjB, Expected: 'jB'},
  {Name: 'cjC', Actual: bas.cjC, Expected: 'jC'},
  {Name: 'cjD', Actual: bas.cjD, Expected: 'jD'},
  {Name: 'cjE', Actual: bas.cjE, Expected: 'jE'},
  {Name: 'cjF', Actual: bas.cjF, Expected: 'jF'},
  {Name: 'cjG', Actual: bas.cjG, Expected: 'jG'},
  {Name: 'cjH', Actual: bas.cjH, Expected: 'jH'},
  {Name: 'cjI', Actual: bas.cjI, Expected: 'jI'},
  {Name: 'cjJ', Actual: bas.cjJ, Expected: 'jJ'},
  {Name: 'cjK', Actual: bas.cjK, Expected: 'jK'},
  {Name: 'cjL', Actual: bas.cjL, Expected: 'jL'},
  {Name: 'cjM', Actual: bas.cjM, Expected: 'jM'},
  {Name: 'cjN', Actual: bas.cjN, Expected: 'jN'},
  {Name: 'cjO', Actual: bas.cjO, Expected: 'jO'},
  {Name: 'cjP', Actual: bas.cjP, Expected: 'jP'},
  {Name: 'cjQ', Actual: bas.cjQ, Expected: 'jQ'},
  {Name: 'cjR', Actual: bas.cjR, Expected: 'jR'},
  {Name: 'cjS', Actual: bas.cjS, Expected: 'jS'},
  {Name: 'cjT', Actual: bas.cjT, Expected: 'jT'},
  {Name: 'cjU', Actual: bas.cjU, Expected: 'jU'},
  {Name: 'cjV', Actual: bas.cjV, Expected: 'jV'},
  {Name: 'cjW', Actual: bas.cjW, Expected: 'jW'},
  {Name: 'cjX', Actual: bas.cjX, Expected: 'jX'},
  {Name: 'cjY', Actual: bas.cjY, Expected: 'jY'},
  {Name: 'cjZ', Actual: bas.cjZ, Expected: 'jZ'},

  {Name: 'cJA', Actual: bas.cJA, Expected: 'JA'},
  {Name: 'cJB', Actual: bas.cJB, Expected: 'JB'},
  {Name: 'cJC', Actual: bas.cJC, Expected: 'JC'},
  {Name: 'cJD', Actual: bas.cJD, Expected: 'JD'},
  {Name: 'cJE', Actual: bas.cJE, Expected: 'JE'},
  {Name: 'cJF', Actual: bas.cJF, Expected: 'JF'},
  {Name: 'cJG', Actual: bas.cJG, Expected: 'JG'},
  {Name: 'cJH', Actual: bas.cJH, Expected: 'JH'},
  {Name: 'cJI', Actual: bas.cJI, Expected: 'JI'},
  {Name: 'cJJ', Actual: bas.cJJ, Expected: 'JJ'},
  {Name: 'cJK', Actual: bas.cJK, Expected: 'JK'},
  {Name: 'cJL', Actual: bas.cJL, Expected: 'JL'},
  {Name: 'cJM', Actual: bas.cJM, Expected: 'JM'},
  {Name: 'cJN', Actual: bas.cJN, Expected: 'JN'},
  {Name: 'cJO', Actual: bas.cJO, Expected: 'JO'},
  {Name: 'cJP', Actual: bas.cJP, Expected: 'JP'},
  {Name: 'cJQ', Actual: bas.cJQ, Expected: 'JQ'},
  {Name: 'cJR', Actual: bas.cJR, Expected: 'JR'},
  {Name: 'cJS', Actual: bas.cJS, Expected: 'JS'},
  {Name: 'cJT', Actual: bas.cJT, Expected: 'JT'},
  {Name: 'cJU', Actual: bas.cJU, Expected: 'JU'},
  {Name: 'cJV', Actual: bas.cJV, Expected: 'JV'},
  {Name: 'cJW', Actual: bas.cJW, Expected: 'JW'},
  {Name: 'cJX', Actual: bas.cJX, Expected: 'JX'},
  {Name: 'cJY', Actual: bas.cJY, Expected: 'JY'},
  {Name: 'cJZ', Actual: bas.cJZ, Expected: 'JZ'},

  // ka-KA
  {Name: 'cka', Actual: bas.cka, Expected: 'ka'},
  {Name: 'ckb', Actual: bas.ckb, Expected: 'kb'},
  {Name: 'ckc', Actual: bas.ckc, Expected: 'kc'},
  {Name: 'ckd', Actual: bas.ckd, Expected: 'kd'},
  {Name: 'cke', Actual: bas.cke, Expected: 'ke'},
  {Name: 'ckf', Actual: bas.ckf, Expected: 'kf'},
  {Name: 'ckg', Actual: bas.ckg, Expected: 'kg'},
  {Name: 'ckh', Actual: bas.ckh, Expected: 'kh'},
  {Name: 'cki', Actual: bas.cki, Expected: 'ki'},
  {Name: 'ckj', Actual: bas.ckj, Expected: 'kj'},
  {Name: 'ckk', Actual: bas.ckk, Expected: 'kk'},
  {Name: 'ckl', Actual: bas.ckl, Expected: 'kl'},
  {Name: 'ckm', Actual: bas.ckm, Expected: 'km'},
  {Name: 'ckn', Actual: bas.ckn, Expected: 'kn'},
  {Name: 'cko', Actual: bas.cko, Expected: 'ko'},
  {Name: 'ckp', Actual: bas.ckp, Expected: 'kp'},
  {Name: 'ckq', Actual: bas.ckq, Expected: 'kq'},
  {Name: 'ckr', Actual: bas.ckr, Expected: 'kr'},
  {Name: 'cks', Actual: bas.cks, Expected: 'ks'},
  {Name: 'ckt', Actual: bas.ckt, Expected: 'kt'},
  {Name: 'cku', Actual: bas.cku, Expected: 'ku'},
  {Name: 'ckv', Actual: bas.ckv, Expected: 'kv'},
  {Name: 'ckw', Actual: bas.ckw, Expected: 'kw'},
  {Name: 'ckx', Actual: bas.ckx, Expected: 'kx'},
  {Name: 'cky', Actual: bas.cky, Expected: 'ky'},
  {Name: 'ckz', Actual: bas.ckz, Expected: 'kz'},

  {Name: 'cKa', Actual: bas.cKa, Expected: 'Ka'},
  {Name: 'cKb', Actual: bas.cKb, Expected: 'Kb'},
  {Name: 'cKc', Actual: bas.cKc, Expected: 'Kc'},
  {Name: 'cKd', Actual: bas.cKd, Expected: 'Kd'},
  {Name: 'cKe', Actual: bas.cKe, Expected: 'Ke'},
  {Name: 'cKf', Actual: bas.cKf, Expected: 'Kf'},
  {Name: 'cKg', Actual: bas.cKg, Expected: 'Kg'},
  {Name: 'cKh', Actual: bas.cKh, Expected: 'Kh'},
  {Name: 'cKi', Actual: bas.cKi, Expected: 'Ki'},
  {Name: 'cKj', Actual: bas.cKj, Expected: 'Kj'},
  {Name: 'cKk', Actual: bas.cKk, Expected: 'Kk'},
  {Name: 'cKl', Actual: bas.cKl, Expected: 'Kl'},
  {Name: 'cKm', Actual: bas.cKm, Expected: 'Km'},
  {Name: 'cKn', Actual: bas.cKn, Expected: 'Kn'},
  {Name: 'cKo', Actual: bas.cKo, Expected: 'Ko'},
  {Name: 'cKp', Actual: bas.cKp, Expected: 'Kp'},
  {Name: 'cKq', Actual: bas.cKq, Expected: 'Kq'},
  {Name: 'cKr', Actual: bas.cKr, Expected: 'Kr'},
  {Name: 'cKs', Actual: bas.cKs, Expected: 'Ks'},
  {Name: 'cKt', Actual: bas.cKt, Expected: 'Kt'},
  {Name: 'cKu', Actual: bas.cKu, Expected: 'Ku'},
  {Name: 'cKv', Actual: bas.cKv, Expected: 'Kv'},
  {Name: 'cKw', Actual: bas.cKw, Expected: 'Kw'},
  {Name: 'cKx', Actual: bas.cKx, Expected: 'Kx'},
  {Name: 'cKy', Actual: bas.cKy, Expected: 'Ky'},
  {Name: 'cKz', Actual: bas.cKz, Expected: 'Kz'},

  {Name: 'ckA', Actual: bas.ckA, Expected: 'kA'},
  {Name: 'ckB', Actual: bas.ckB, Expected: 'kB'},
  {Name: 'ckC', Actual: bas.ckC, Expected: 'kC'},
  {Name: 'ckD', Actual: bas.ckD, Expected: 'kD'},
  {Name: 'ckE', Actual: bas.ckE, Expected: 'kE'},
  {Name: 'ckF', Actual: bas.ckF, Expected: 'kF'},
  {Name: 'ckG', Actual: bas.ckG, Expected: 'kG'},
  {Name: 'ckH', Actual: bas.ckH, Expected: 'kH'},
  {Name: 'ckI', Actual: bas.ckI, Expected: 'kI'},
  {Name: 'ckJ', Actual: bas.ckJ, Expected: 'kJ'},
  {Name: 'ckK', Actual: bas.ckK, Expected: 'kK'},
  {Name: 'ckL', Actual: bas.ckL, Expected: 'kL'},
  {Name: 'ckM', Actual: bas.ckM, Expected: 'kM'},
  {Name: 'ckN', Actual: bas.ckN, Expected: 'kN'},
  {Name: 'ckO', Actual: bas.ckO, Expected: 'kO'},
  {Name: 'ckP', Actual: bas.ckP, Expected: 'kP'},
  {Name: 'ckQ', Actual: bas.ckQ, Expected: 'kQ'},
  {Name: 'ckR', Actual: bas.ckR, Expected: 'kR'},
  {Name: 'ckS', Actual: bas.ckS, Expected: 'kS'},
  {Name: 'ckT', Actual: bas.ckT, Expected: 'kT'},
  {Name: 'ckU', Actual: bas.ckU, Expected: 'kU'},
  {Name: 'ckV', Actual: bas.ckV, Expected: 'kV'},
  {Name: 'ckW', Actual: bas.ckW, Expected: 'kW'},
  {Name: 'ckX', Actual: bas.ckX, Expected: 'kX'},
  {Name: 'ckY', Actual: bas.ckY, Expected: 'kY'},
  {Name: 'ckZ', Actual: bas.ckZ, Expected: 'kZ'},

  {Name: 'cKA', Actual: bas.cKA, Expected: 'KA'},
  {Name: 'cKB', Actual: bas.cKB, Expected: 'KB'},
  {Name: 'cKC', Actual: bas.cKC, Expected: 'KC'},
  {Name: 'cKD', Actual: bas.cKD, Expected: 'KD'},
  {Name: 'cKE', Actual: bas.cKE, Expected: 'KE'},
  {Name: 'cKF', Actual: bas.cKF, Expected: 'KF'},
  {Name: 'cKG', Actual: bas.cKG, Expected: 'KG'},
  {Name: 'cKH', Actual: bas.cKH, Expected: 'KH'},
  {Name: 'cKI', Actual: bas.cKI, Expected: 'KI'},
  {Name: 'cKJ', Actual: bas.cKJ, Expected: 'KJ'},
  {Name: 'cKK', Actual: bas.cKK, Expected: 'KK'},
  {Name: 'cKL', Actual: bas.cKL, Expected: 'KL'},
  {Name: 'cKM', Actual: bas.cKM, Expected: 'KM'},
  {Name: 'cKN', Actual: bas.cKN, Expected: 'KN'},
  {Name: 'cKO', Actual: bas.cKO, Expected: 'KO'},
  {Name: 'cKP', Actual: bas.cKP, Expected: 'KP'},
  {Name: 'cKQ', Actual: bas.cKQ, Expected: 'KQ'},
  {Name: 'cKR', Actual: bas.cKR, Expected: 'KR'},
  {Name: 'cKS', Actual: bas.cKS, Expected: 'KS'},
  {Name: 'cKT', Actual: bas.cKT, Expected: 'KT'},
  {Name: 'cKU', Actual: bas.cKU, Expected: 'KU'},
  {Name: 'cKV', Actual: bas.cKV, Expected: 'KV'},
  {Name: 'cKW', Actual: bas.cKW, Expected: 'KW'},
  {Name: 'cKX', Actual: bas.cKX, Expected: 'KX'},
  {Name: 'cKY', Actual: bas.cKY, Expected: 'KY'},
  {Name: 'cKZ', Actual: bas.cKZ, Expected: 'KZ'},

  // la-LA
  {Name: 'cla', Actual: bas.cla, Expected: 'la'},
  {Name: 'clb', Actual: bas.clb, Expected: 'lb'},
  {Name: 'clc', Actual: bas.clc, Expected: 'lc'},
  {Name: 'cld', Actual: bas.cld, Expected: 'ld'},
  {Name: 'cle', Actual: bas.cle, Expected: 'le'},
  {Name: 'clf', Actual: bas.clf, Expected: 'lf'},
  {Name: 'clg', Actual: bas.clg, Expected: 'lg'},
  {Name: 'clh', Actual: bas.clh, Expected: 'lh'},
  {Name: 'cli', Actual: bas.cli, Expected: 'li'},
  {Name: 'clj', Actual: bas.clj, Expected: 'lj'},
  {Name: 'clk', Actual: bas.clk, Expected: 'lk'},
  {Name: 'cll', Actual: bas.cll, Expected: 'll'},
  {Name: 'clm', Actual: bas.clm, Expected: 'lm'},
  {Name: 'cln', Actual: bas.cln, Expected: 'ln'},
  {Name: 'clo', Actual: bas.clo, Expected: 'lo'},
  {Name: 'clp', Actual: bas.clp, Expected: 'lp'},
  {Name: 'clq', Actual: bas.clq, Expected: 'lq'},
  {Name: 'clr', Actual: bas.clr, Expected: 'lr'},
  {Name: 'cls', Actual: bas.cls, Expected: 'ls'},
  {Name: 'clt', Actual: bas.clt, Expected: 'lt'},
  {Name: 'clu', Actual: bas.clu, Expected: 'lu'},
  {Name: 'clv', Actual: bas.clv, Expected: 'lv'},
  {Name: 'clw', Actual: bas.clw, Expected: 'lw'},
  {Name: 'clx', Actual: bas.clx, Expected: 'lx'},
  {Name: 'cly', Actual: bas.cly, Expected: 'ly'},
  {Name: 'clz', Actual: bas.clz, Expected: 'lz'},

  {Name: 'cLa', Actual: bas.cLa, Expected: 'La'},
  {Name: 'cLb', Actual: bas.cLb, Expected: 'Lb'},
  {Name: 'cLc', Actual: bas.cLc, Expected: 'Lc'},
  {Name: 'cLd', Actual: bas.cLd, Expected: 'Ld'},
  {Name: 'cLe', Actual: bas.cLe, Expected: 'Le'},
  {Name: 'cLf', Actual: bas.cLf, Expected: 'Lf'},
  {Name: 'cLg', Actual: bas.cLg, Expected: 'Lg'},
  {Name: 'cLh', Actual: bas.cLh, Expected: 'Lh'},
  {Name: 'cLi', Actual: bas.cLi, Expected: 'Li'},
  {Name: 'cLj', Actual: bas.cLj, Expected: 'Lj'},
  {Name: 'cLk', Actual: bas.cLk, Expected: 'Lk'},
  {Name: 'cLl', Actual: bas.cLl, Expected: 'Ll'},
  {Name: 'cLm', Actual: bas.cLm, Expected: 'Lm'},
  {Name: 'cLn', Actual: bas.cLn, Expected: 'Ln'},
  {Name: 'cLo', Actual: bas.cLo, Expected: 'Lo'},
  {Name: 'cLp', Actual: bas.cLp, Expected: 'Lp'},
  {Name: 'cLq', Actual: bas.cLq, Expected: 'Lq'},
  {Name: 'cLr', Actual: bas.cLr, Expected: 'Lr'},
  {Name: 'cLs', Actual: bas.cLs, Expected: 'Ls'},
  {Name: 'cLt', Actual: bas.cLt, Expected: 'Lt'},
  {Name: 'cLu', Actual: bas.cLu, Expected: 'Lu'},
  {Name: 'cLv', Actual: bas.cLv, Expected: 'Lv'},
  {Name: 'cLw', Actual: bas.cLw, Expected: 'Lw'},
  {Name: 'cLx', Actual: bas.cLx, Expected: 'Lx'},
  {Name: 'cLy', Actual: bas.cLy, Expected: 'Ly'},
  {Name: 'cLz', Actual: bas.cLz, Expected: 'Lz'},

  {Name: 'clA', Actual: bas.clA, Expected: 'lA'},
  {Name: 'clB', Actual: bas.clB, Expected: 'lB'},
  {Name: 'clC', Actual: bas.clC, Expected: 'lC'},
  {Name: 'clD', Actual: bas.clD, Expected: 'lD'},
  {Name: 'clE', Actual: bas.clE, Expected: 'lE'},
  {Name: 'clF', Actual: bas.clF, Expected: 'lF'},
  {Name: 'clG', Actual: bas.clG, Expected: 'lG'},
  {Name: 'clH', Actual: bas.clH, Expected: 'lH'},
  {Name: 'clI', Actual: bas.clI, Expected: 'lI'},
  {Name: 'clJ', Actual: bas.clJ, Expected: 'lJ'},
  {Name: 'clK', Actual: bas.clK, Expected: 'lK'},
  {Name: 'clL', Actual: bas.clL, Expected: 'lL'},
  {Name: 'clM', Actual: bas.clM, Expected: 'lM'},
  {Name: 'clN', Actual: bas.clN, Expected: 'lN'},
  {Name: 'clO', Actual: bas.clO, Expected: 'lO'},
  {Name: 'clP', Actual: bas.clP, Expected: 'lP'},
  {Name: 'clQ', Actual: bas.clQ, Expected: 'lQ'},
  {Name: 'clR', Actual: bas.clR, Expected: 'lR'},
  {Name: 'clS', Actual: bas.clS, Expected: 'lS'},
  {Name: 'clT', Actual: bas.clT, Expected: 'lT'},
  {Name: 'clU', Actual: bas.clU, Expected: 'lU'},
  {Name: 'clV', Actual: bas.clV, Expected: 'lV'},
  {Name: 'clW', Actual: bas.clW, Expected: 'lW'},
  {Name: 'clX', Actual: bas.clX, Expected: 'lX'},
  {Name: 'clY', Actual: bas.clY, Expected: 'lY'},
  {Name: 'clZ', Actual: bas.clZ, Expected: 'lZ'},

  {Name: 'cLA', Actual: bas.cLA, Expected: 'LA'},
  {Name: 'cLB', Actual: bas.cLB, Expected: 'LB'},
  {Name: 'cLC', Actual: bas.cLC, Expected: 'LC'},
  {Name: 'cLD', Actual: bas.cLD, Expected: 'LD'},
  {Name: 'cLE', Actual: bas.cLE, Expected: 'LE'},
  {Name: 'cLF', Actual: bas.cLF, Expected: 'LF'},
  {Name: 'cLG', Actual: bas.cLG, Expected: 'LG'},
  {Name: 'cLH', Actual: bas.cLH, Expected: 'LH'},
  {Name: 'cLI', Actual: bas.cLI, Expected: 'LI'},
  {Name: 'cLJ', Actual: bas.cLJ, Expected: 'LJ'},
  {Name: 'cLK', Actual: bas.cLK, Expected: 'LK'},
  {Name: 'cLL', Actual: bas.cLL, Expected: 'LL'},
  {Name: 'cLM', Actual: bas.cLM, Expected: 'LM'},
  {Name: 'cLN', Actual: bas.cLN, Expected: 'LN'},
  {Name: 'cLO', Actual: bas.cLO, Expected: 'LO'},
  {Name: 'cLP', Actual: bas.cLP, Expected: 'LP'},
  {Name: 'cLQ', Actual: bas.cLQ, Expected: 'LQ'},
  {Name: 'cLR', Actual: bas.cLR, Expected: 'LR'},
  {Name: 'cLS', Actual: bas.cLS, Expected: 'LS'},
  {Name: 'cLT', Actual: bas.cLT, Expected: 'LT'},
  {Name: 'cLU', Actual: bas.cLU, Expected: 'LU'},
  {Name: 'cLV', Actual: bas.cLV, Expected: 'LV'},
  {Name: 'cLW', Actual: bas.cLW, Expected: 'LW'},
  {Name: 'cLX', Actual: bas.cLX, Expected: 'LX'},
  {Name: 'cLY', Actual: bas.cLY, Expected: 'LY'},
  {Name: 'cLZ', Actual: bas.cLZ, Expected: 'LZ'},

  // ma-MA
  {Name: 'cma', Actual: bas.cma, Expected: 'ma'},
  {Name: 'cmb', Actual: bas.cmb, Expected: 'mb'},
  {Name: 'cmc', Actual: bas.cmc, Expected: 'mc'},
  {Name: 'cmd', Actual: bas.cmd, Expected: 'md'},
  {Name: 'cme', Actual: bas.cme, Expected: 'me'},
  {Name: 'cmf', Actual: bas.cmf, Expected: 'mf'},
  {Name: 'cmg', Actual: bas.cmg, Expected: 'mg'},
  {Name: 'cmh', Actual: bas.cmh, Expected: 'mh'},
  {Name: 'camai', Actual: bas.camai, Expected: 'mi'},
  {Name: 'cmj', Actual: bas.cmj, Expected: 'mj'},
  {Name: 'cmk', Actual: bas.cmk, Expected: 'mk'},
  {Name: 'cml', Actual: bas.cml, Expected: 'ml'},
  {Name: 'cmm', Actual: bas.cmm, Expected: 'mm'},
  {Name: 'cmn', Actual: bas.cmn, Expected: 'mn'},
  {Name: 'cmo', Actual: bas.cmo, Expected: 'mo'},
  {Name: 'cmp', Actual: bas.cmp, Expected: 'mp'},
  {Name: 'cmq', Actual: bas.cmq, Expected: 'mq'},
  {Name: 'cmr', Actual: bas.cmr, Expected: 'mr'},
  {Name: 'cms', Actual: bas.cms, Expected: 'ms'},
  {Name: 'cmt', Actual: bas.cmt, Expected: 'mt'},
  {Name: 'cmu', Actual: bas.cmu, Expected: 'mu'},
  {Name: 'cmv', Actual: bas.cmv, Expected: 'mv'},
  {Name: 'cmw', Actual: bas.cmw, Expected: 'mw'},
  {Name: 'cmx', Actual: bas.cmx, Expected: 'mx'},
  {Name: 'cmy', Actual: bas.cmy, Expected: 'my'},
  {Name: 'cmz', Actual: bas.cmz, Expected: 'mz'},

  {Name: 'cMa', Actual: bas.cMa, Expected: 'Ma'},
  {Name: 'cMb', Actual: bas.cMb, Expected: 'Mb'},
  {Name: 'cMc', Actual: bas.cMc, Expected: 'Mc'},
  {Name: 'cMd', Actual: bas.cMd, Expected: 'Md'},
  {Name: 'cMe', Actual: bas.cMe, Expected: 'Me'},
  {Name: 'cMf', Actual: bas.cMf, Expected: 'Mf'},
  {Name: 'cMg', Actual: bas.cMg, Expected: 'Mg'},
  {Name: 'cMh', Actual: bas.cMh, Expected: 'Mh'},
  {Name: 'cMi', Actual: bas.cMi, Expected: 'Mi'},
  {Name: 'cMj', Actual: bas.cMj, Expected: 'Mj'},
  {Name: 'cMk', Actual: bas.cMk, Expected: 'Mk'},
  {Name: 'cMl', Actual: bas.cMl, Expected: 'Ml'},
  {Name: 'cMm', Actual: bas.cMm, Expected: 'Mm'},
  {Name: 'cMn', Actual: bas.cMn, Expected: 'Mn'},
  {Name: 'cMo', Actual: bas.cMo, Expected: 'Mo'},
  {Name: 'cMp', Actual: bas.cMp, Expected: 'Mp'},
  {Name: 'cMq', Actual: bas.cMq, Expected: 'Mq'},
  {Name: 'cMr', Actual: bas.cMr, Expected: 'Mr'},
  {Name: 'cMs', Actual: bas.cMs, Expected: 'Ms'},
  {Name: 'cMt', Actual: bas.cMt, Expected: 'Mt'},
  {Name: 'cMu', Actual: bas.cMu, Expected: 'Mu'},
  {Name: 'cMv', Actual: bas.cMv, Expected: 'Mv'},
  {Name: 'cMw', Actual: bas.cMw, Expected: 'Mw'},
  {Name: 'cMx', Actual: bas.cMx, Expected: 'Mx'},
  {Name: 'cMy', Actual: bas.cMy, Expected: 'My'},
  {Name: 'cMz', Actual: bas.cMz, Expected: 'Mz'},

  {Name: 'cmA', Actual: bas.cmA, Expected: 'mA'},
  {Name: 'cmB', Actual: bas.cmB, Expected: 'mB'},
  {Name: 'cmC', Actual: bas.cmC, Expected: 'mC'},
  {Name: 'cmD', Actual: bas.cmD, Expected: 'mD'},
  {Name: 'cmE', Actual: bas.cmE, Expected: 'mE'},
  {Name: 'cmF', Actual: bas.cmF, Expected: 'mF'},
  {Name: 'cmG', Actual: bas.cmG, Expected: 'mG'},
  {Name: 'cmH', Actual: bas.cmH, Expected: 'mH'},
  {Name: 'cmI', Actual: bas.cmI, Expected: 'mI'},
  {Name: 'cmJ', Actual: bas.cmJ, Expected: 'mJ'},
  {Name: 'cmK', Actual: bas.cmK, Expected: 'mK'},
  {Name: 'cmL', Actual: bas.cmL, Expected: 'mL'},
  {Name: 'cmM', Actual: bas.cmM, Expected: 'mM'},
  {Name: 'cmN', Actual: bas.cmN, Expected: 'mN'},
  {Name: 'cmO', Actual: bas.cmO, Expected: 'mO'},
  {Name: 'cmP', Actual: bas.cmP, Expected: 'mP'},
  {Name: 'cmQ', Actual: bas.cmQ, Expected: 'mQ'},
  {Name: 'cmR', Actual: bas.cmR, Expected: 'mR'},
  {Name: 'cmS', Actual: bas.cmS, Expected: 'mS'},
  {Name: 'cmT', Actual: bas.cmT, Expected: 'mT'},
  {Name: 'cmU', Actual: bas.cmU, Expected: 'mU'},
  {Name: 'cmV', Actual: bas.cmV, Expected: 'mV'},
  {Name: 'cmW', Actual: bas.cmW, Expected: 'mW'},
  {Name: 'cmX', Actual: bas.cmX, Expected: 'mX'},
  {Name: 'cmY', Actual: bas.cmY, Expected: 'mY'},
  {Name: 'cmZ', Actual: bas.cmZ, Expected: 'mZ'},

  {Name: 'cMA', Actual: bas.cMA, Expected: 'MA'},
  {Name: 'cMB', Actual: bas.cMB, Expected: 'MB'},
  {Name: 'cMC', Actual: bas.cMC, Expected: 'MC'},
  {Name: 'cMD', Actual: bas.cMD, Expected: 'MD'},
  {Name: 'cME', Actual: bas.cME, Expected: 'ME'},
  {Name: 'cMF', Actual: bas.cMF, Expected: 'MF'},
  {Name: 'cMG', Actual: bas.cMG, Expected: 'MG'},
  {Name: 'cMH', Actual: bas.cMH, Expected: 'MH'},
  {Name: 'cMI', Actual: bas.cMI, Expected: 'MI'},
  {Name: 'cMJ', Actual: bas.cMJ, Expected: 'MJ'},
  {Name: 'cMK', Actual: bas.cMK, Expected: 'MK'},
  {Name: 'cML', Actual: bas.cML, Expected: 'ML'},
  {Name: 'cMM', Actual: bas.cMM, Expected: 'MM'},
  {Name: 'cMN', Actual: bas.cMN, Expected: 'MN'},
  {Name: 'cMO', Actual: bas.cMO, Expected: 'MO'},
  {Name: 'cMP', Actual: bas.cMP, Expected: 'MP'},
  {Name: 'cMQ', Actual: bas.cMQ, Expected: 'MQ'},
  {Name: 'cMR', Actual: bas.cMR, Expected: 'MR'},
  {Name: 'cMS', Actual: bas.cMS, Expected: 'MS'},
  {Name: 'cMT', Actual: bas.cMT, Expected: 'MT'},
  {Name: 'cMU', Actual: bas.cMU, Expected: 'MU'},
  {Name: 'cMV', Actual: bas.cMV, Expected: 'MV'},
  {Name: 'cMW', Actual: bas.cMW, Expected: 'MW'},
  {Name: 'cMX', Actual: bas.cMX, Expected: 'MX'},
  {Name: 'cMY', Actual: bas.cMY, Expected: 'MY'},
  {Name: 'cMZ', Actual: bas.cMZ, Expected: 'MZ'},

  // na-NA
  {Name: 'cna', Actual: bas.cna, Expected: 'na'},
  {Name: 'cnb', Actual: bas.cnb, Expected: 'nb'},
  {Name: 'cnc', Actual: bas.cnc, Expected: 'nc'},
  {Name: 'cnd', Actual: bas.cnd, Expected: 'nd'},
  {Name: 'cne', Actual: bas.cne, Expected: 'ne'},
  {Name: 'cnf', Actual: bas.cnf, Expected: 'nf'},
  {Name: 'cng', Actual: bas.cng, Expected: 'ng'},
  {Name: 'cnh', Actual: bas.cnh, Expected: 'nh'},
  {Name: 'cni', Actual: bas.cni, Expected: 'ni'},
  {Name: 'cnj', Actual: bas.cnj, Expected: 'nj'},
  {Name: 'cnk', Actual: bas.cnk, Expected: 'nk'},
  {Name: 'cnl', Actual: bas.cnl, Expected: 'nl'},
  {Name: 'cnm', Actual: bas.cnm, Expected: 'nm'},
  {Name: 'cnn', Actual: bas.cnn, Expected: 'nn'},
  {Name: 'cno', Actual: bas.cno, Expected: 'no'},
  {Name: 'cnp', Actual: bas.cnp, Expected: 'np'},
  {Name: 'cnq', Actual: bas.cnq, Expected: 'nq'},
  {Name: 'cnr', Actual: bas.cnr, Expected: 'nr'},
  {Name: 'cns', Actual: bas.cns, Expected: 'ns'},
  {Name: 'cnt', Actual: bas.cnt, Expected: 'nt'},
  {Name: 'cnu', Actual: bas.cnu, Expected: 'nu'},
  {Name: 'cnv', Actual: bas.cnv, Expected: 'nv'},
  {Name: 'cnw', Actual: bas.cnw, Expected: 'nw'},
  {Name: 'cnx', Actual: bas.cnx, Expected: 'nx'},
  {Name: 'cny', Actual: bas.cny, Expected: 'ny'},
  {Name: 'cnz', Actual: bas.cnz, Expected: 'nz'},

  {Name: 'cNa', Actual: bas.cNa, Expected: 'Na'},
  {Name: 'cNb', Actual: bas.cNb, Expected: 'Nb'},
  {Name: 'cNc', Actual: bas.cNc, Expected: 'Nc'},
  {Name: 'cNd', Actual: bas.cNd, Expected: 'Nd'},
  {Name: 'cNe', Actual: bas.cNe, Expected: 'Ne'},
  {Name: 'cNf', Actual: bas.cNf, Expected: 'Nf'},
  {Name: 'cNg', Actual: bas.cNg, Expected: 'Ng'},
  {Name: 'cNh', Actual: bas.cNh, Expected: 'Nh'},
  {Name: 'cNi', Actual: bas.cNi, Expected: 'Ni'},
  {Name: 'cNj', Actual: bas.cNj, Expected: 'Nj'},
  {Name: 'cNk', Actual: bas.cNk, Expected: 'Nk'},
  {Name: 'cNl', Actual: bas.cNl, Expected: 'Nl'},
  {Name: 'cNm', Actual: bas.cNm, Expected: 'Nm'},
  {Name: 'cNn', Actual: bas.cNn, Expected: 'Nn'},
  {Name: 'cNo', Actual: bas.cNo, Expected: 'No'},
  {Name: 'cNp', Actual: bas.cNp, Expected: 'Np'},
  {Name: 'cNq', Actual: bas.cNq, Expected: 'Nq'},
  {Name: 'cNr', Actual: bas.cNr, Expected: 'Nr'},
  {Name: 'cNs', Actual: bas.cNs, Expected: 'Ns'},
  {Name: 'cNt', Actual: bas.cNt, Expected: 'Nt'},
  {Name: 'cNu', Actual: bas.cNu, Expected: 'Nu'},
  {Name: 'cNv', Actual: bas.cNv, Expected: 'Nv'},
  {Name: 'cNw', Actual: bas.cNw, Expected: 'Nw'},
  {Name: 'cNx', Actual: bas.cNx, Expected: 'Nx'},
  {Name: 'cNy', Actual: bas.cNy, Expected: 'Ny'},
  {Name: 'cNz', Actual: bas.cNz, Expected: 'Nz'},

  {Name: 'cnA', Actual: bas.cnA, Expected: 'nA'},
  {Name: 'cnB', Actual: bas.cnB, Expected: 'nB'},
  {Name: 'cnC', Actual: bas.cnC, Expected: 'nC'},
  {Name: 'cnD', Actual: bas.cnD, Expected: 'nD'},
  {Name: 'cnE', Actual: bas.cnE, Expected: 'nE'},
  {Name: 'cnF', Actual: bas.cnF, Expected: 'nF'},
  {Name: 'cnG', Actual: bas.cnG, Expected: 'nG'},
  {Name: 'cnH', Actual: bas.cnH, Expected: 'nH'},
  {Name: 'cnI', Actual: bas.cnI, Expected: 'nI'},
  {Name: 'cnJ', Actual: bas.cnJ, Expected: 'nJ'},
  {Name: 'cnK', Actual: bas.cnK, Expected: 'nK'},
  {Name: 'cnL', Actual: bas.cnL, Expected: 'nL'},
  {Name: 'cnM', Actual: bas.cnM, Expected: 'nM'},
  {Name: 'cnN', Actual: bas.cnN, Expected: 'nN'},
  {Name: 'cnO', Actual: bas.cnO, Expected: 'nO'},
  {Name: 'cnP', Actual: bas.cnP, Expected: 'nP'},
  {Name: 'cnQ', Actual: bas.cnQ, Expected: 'nQ'},
  {Name: 'cnR', Actual: bas.cnR, Expected: 'nR'},
  {Name: 'cnS', Actual: bas.cnS, Expected: 'nS'},
  {Name: 'cnT', Actual: bas.cnT, Expected: 'nT'},
  {Name: 'cnU', Actual: bas.cnU, Expected: 'nU'},
  {Name: 'cnV', Actual: bas.cnV, Expected: 'nV'},
  {Name: 'cnW', Actual: bas.cnW, Expected: 'nW'},
  {Name: 'cnX', Actual: bas.cnX, Expected: 'nX'},
  {Name: 'cnY', Actual: bas.cnY, Expected: 'nY'},
  {Name: 'cnZ', Actual: bas.cnZ, Expected: 'nZ'},

  {Name: 'cNA', Actual: bas.cNA, Expected: 'NA'},
  {Name: 'cNB', Actual: bas.cNB, Expected: 'NB'},
  {Name: 'cNC', Actual: bas.cNC, Expected: 'NC'},
  {Name: 'cND', Actual: bas.cND, Expected: 'ND'},
  {Name: 'cNE', Actual: bas.cNE, Expected: 'NE'},
  {Name: 'cNF', Actual: bas.cNF, Expected: 'NF'},
  {Name: 'cNG', Actual: bas.cNG, Expected: 'NG'},
  {Name: 'cNH', Actual: bas.cNH, Expected: 'NH'},
  {Name: 'cNI', Actual: bas.cNI, Expected: 'NI'},
  {Name: 'cNJ', Actual: bas.cNJ, Expected: 'NJ'},
  {Name: 'cNK', Actual: bas.cNK, Expected: 'NK'},
  {Name: 'cNL', Actual: bas.cNL, Expected: 'NL'},
  {Name: 'cNM', Actual: bas.cNM, Expected: 'NM'},
  {Name: 'cNN', Actual: bas.cNN, Expected: 'NN'},
  {Name: 'cNO', Actual: bas.cNO, Expected: 'NO'},
  {Name: 'cNP', Actual: bas.cNP, Expected: 'NP'},
  {Name: 'cNQ', Actual: bas.cNQ, Expected: 'NQ'},
  {Name: 'cNR', Actual: bas.cNR, Expected: 'NR'},
  {Name: 'cNS', Actual: bas.cNS, Expected: 'NS'},
  {Name: 'cNT', Actual: bas.cNT, Expected: 'NT'},
  {Name: 'cNU', Actual: bas.cNU, Expected: 'NU'},
  {Name: 'cNV', Actual: bas.cNV, Expected: 'NV'},
  {Name: 'cNW', Actual: bas.cNW, Expected: 'NW'},
  {Name: 'cNX', Actual: bas.cNX, Expected: 'NX'},
  {Name: 'cNY', Actual: bas.cNY, Expected: 'NY'},
  {Name: 'cNZ', Actual: bas.cNZ, Expected: 'NZ'},

  // oa-OA
  {Name: 'coa', Actual: bas.coa, Expected: 'oa'},
  {Name: 'cob', Actual: bas.cob, Expected: 'ob'},
  {Name: 'coc', Actual: bas.coc, Expected: 'oc'},
  {Name: 'cod', Actual: bas.cod, Expected: 'od'},
  {Name: 'coe', Actual: bas.coe, Expected: 'oe'},
  {Name: 'cof', Actual: bas.cof, Expected: 'of'},
  {Name: 'cog', Actual: bas.cog, Expected: 'og'},
  {Name: 'coh', Actual: bas.coh, Expected: 'oh'},
  {Name: 'coi', Actual: bas.coi, Expected: 'oi'},
  {Name: 'coj', Actual: bas.coj, Expected: 'oj'},
  {Name: 'cok', Actual: bas.cok, Expected: 'ok'},
  {Name: 'col', Actual: bas.col, Expected: 'ol'},
  {Name: 'com', Actual: bas.com, Expected: 'om'},
  {Name: 'con', Actual: bas.con, Expected: 'on'},
  {Name: 'coo', Actual: bas.coo, Expected: 'oo'},
  {Name: 'cop', Actual: bas.cop, Expected: 'op'},
  {Name: 'coq', Actual: bas.coq, Expected: 'oq'},
  {Name: 'cor', Actual: bas.cor, Expected: 'or'},
  {Name: 'cos', Actual: bas.cos, Expected: 'os'},
  {Name: 'cot', Actual: bas.cot, Expected: 'ot'},
  {Name: 'cou', Actual: bas.cou, Expected: 'ou'},
  {Name: 'cov', Actual: bas.cov, Expected: 'ov'},
  {Name: 'cow', Actual: bas.cow, Expected: 'ow'},
  {Name: 'cox', Actual: bas.cox, Expected: 'ox'},
  {Name: 'coy', Actual: bas.coy, Expected: 'oy'},
  {Name: 'coz', Actual: bas.coz, Expected: 'oz'},

  {Name: 'cOa', Actual: bas.cOa, Expected: 'Oa'},
  {Name: 'cOb', Actual: bas.cOb, Expected: 'Ob'},
  {Name: 'cOc', Actual: bas.cOc, Expected: 'Oc'},
  {Name: 'cOd', Actual: bas.cOd, Expected: 'Od'},
  {Name: 'cOe', Actual: bas.cOe, Expected: 'Oe'},
  {Name: 'cOf', Actual: bas.cOf, Expected: 'Of'},
  {Name: 'cOg', Actual: bas.cOg, Expected: 'Og'},
  {Name: 'cOh', Actual: bas.cOh, Expected: 'Oh'},
  {Name: 'cOi', Actual: bas.cOi, Expected: 'Oi'},
  {Name: 'cOj', Actual: bas.cOj, Expected: 'Oj'},
  {Name: 'cOk', Actual: bas.cOk, Expected: 'Ok'},
  {Name: 'cOl', Actual: bas.cOl, Expected: 'Ol'},
  {Name: 'cOm', Actual: bas.cOm, Expected: 'Om'},
  {Name: 'cOn', Actual: bas.cOn, Expected: 'On'},
  {Name: 'cOo', Actual: bas.cOo, Expected: 'Oo'},
  {Name: 'cOp', Actual: bas.cOp, Expected: 'Op'},
  {Name: 'cOq', Actual: bas.cOq, Expected: 'Oq'},
  {Name: 'cOr', Actual: bas.cOr, Expected: 'Or'},
  {Name: 'cOs', Actual: bas.cOs, Expected: 'Os'},
  {Name: 'cOt', Actual: bas.cOt, Expected: 'Ot'},
  {Name: 'cOu', Actual: bas.cOu, Expected: 'Ou'},
  {Name: 'cOv', Actual: bas.cOv, Expected: 'Ov'},
  {Name: 'cOw', Actual: bas.cOw, Expected: 'Ow'},
  {Name: 'cOx', Actual: bas.cOx, Expected: 'Ox'},
  {Name: 'cOy', Actual: bas.cOy, Expected: 'Oy'},
  {Name: 'cOz', Actual: bas.cOz, Expected: 'Oz'},

  {Name: 'coA', Actual: bas.coA, Expected: 'oA'},
  {Name: 'coB', Actual: bas.coB, Expected: 'oB'},
  {Name: 'coC', Actual: bas.coC, Expected: 'oC'},
  {Name: 'coD', Actual: bas.coD, Expected: 'oD'},
  {Name: 'coE', Actual: bas.coE, Expected: 'oE'},
  {Name: 'coF', Actual: bas.coF, Expected: 'oF'},
  {Name: 'coG', Actual: bas.coG, Expected: 'oG'},
  {Name: 'coH', Actual: bas.coH, Expected: 'oH'},
  {Name: 'coI', Actual: bas.coI, Expected: 'oI'},
  {Name: 'coJ', Actual: bas.coJ, Expected: 'oJ'},
  {Name: 'coK', Actual: bas.coK, Expected: 'oK'},
  {Name: 'coL', Actual: bas.coL, Expected: 'oL'},
  {Name: 'coM', Actual: bas.coM, Expected: 'oM'},
  {Name: 'coN', Actual: bas.coN, Expected: 'oN'},
  {Name: 'coO', Actual: bas.coO, Expected: 'oO'},
  {Name: 'coP', Actual: bas.coP, Expected: 'oP'},
  {Name: 'coQ', Actual: bas.coQ, Expected: 'oQ'},
  {Name: 'coR', Actual: bas.coR, Expected: 'oR'},
  {Name: 'coS', Actual: bas.coS, Expected: 'oS'},
  {Name: 'coT', Actual: bas.coT, Expected: 'oT'},
  {Name: 'coU', Actual: bas.coU, Expected: 'oU'},
  {Name: 'coV', Actual: bas.coV, Expected: 'oV'},
  {Name: 'coW', Actual: bas.coW, Expected: 'oW'},
  {Name: 'coX', Actual: bas.coX, Expected: 'oX'},
  {Name: 'coY', Actual: bas.coY, Expected: 'oY'},
  {Name: 'coZ', Actual: bas.coZ, Expected: 'oZ'},

  {Name: 'cOA', Actual: bas.cOA, Expected: 'OA'},
  {Name: 'cOB', Actual: bas.cOB, Expected: 'OB'},
  {Name: 'cOC', Actual: bas.cOC, Expected: 'OC'},
  {Name: 'cOD', Actual: bas.cOD, Expected: 'OD'},
  {Name: 'cOE', Actual: bas.cOE, Expected: 'OE'},
  {Name: 'cOF', Actual: bas.cOF, Expected: 'OF'},
  {Name: 'cOG', Actual: bas.cOG, Expected: 'OG'},
  {Name: 'cOH', Actual: bas.cOH, Expected: 'OH'},
  {Name: 'cOI', Actual: bas.cOI, Expected: 'OI'},
  {Name: 'cOJ', Actual: bas.cOJ, Expected: 'OJ'},
  {Name: 'cOK', Actual: bas.cOK, Expected: 'OK'},
  {Name: 'cOL', Actual: bas.cOL, Expected: 'OL'},
  {Name: 'cOM', Actual: bas.cOM, Expected: 'OM'},
  {Name: 'cON', Actual: bas.cON, Expected: 'ON'},
  {Name: 'cOO', Actual: bas.cOO, Expected: 'OO'},
  {Name: 'cOP', Actual: bas.cOP, Expected: 'OP'},
  {Name: 'cOQ', Actual: bas.cOQ, Expected: 'OQ'},
  {Name: 'cOR', Actual: bas.cOR, Expected: 'OR'},
  {Name: 'cOS', Actual: bas.cOS, Expected: 'OS'},
  {Name: 'cOT', Actual: bas.cOT, Expected: 'OT'},
  {Name: 'cOU', Actual: bas.cOU, Expected: 'OU'},
  {Name: 'cOV', Actual: bas.cOV, Expected: 'OV'},
  {Name: 'cOW', Actual: bas.cOW, Expected: 'OW'},
  {Name: 'cOX', Actual: bas.cOX, Expected: 'OX'},
  {Name: 'cOY', Actual: bas.cOY, Expected: 'OY'},
  {Name: 'cOZ', Actual: bas.cOZ, Expected: 'OZ'},

  // pa-PA
  {Name: 'cpa', Actual: bas.cpa, Expected: 'pa'},
  {Name: 'cpb', Actual: bas.cpb, Expected: 'pb'},
  {Name: 'cpc', Actual: bas.cpc, Expected: 'pc'},
  {Name: 'cpd', Actual: bas.cpd, Expected: 'pd'},
  {Name: 'cpe', Actual: bas.cpe, Expected: 'pe'},
  {Name: 'cpf', Actual: bas.cpf, Expected: 'pf'},
  {Name: 'cpg', Actual: bas.cpg, Expected: 'pg'},
  {Name: 'cph', Actual: bas.cph, Expected: 'ph'},
  {Name: 'cpi', Actual: bas.cpi, Expected: 'pi'},
  {Name: 'cpj', Actual: bas.cpj, Expected: 'pj'},
  {Name: 'cpk', Actual: bas.cpk, Expected: 'pk'},
  {Name: 'cpl', Actual: bas.cpl, Expected: 'pl'},
  {Name: 'cpm', Actual: bas.cpm, Expected: 'pm'},
  {Name: 'cpn', Actual: bas.cpn, Expected: 'pn'},
  {Name: 'cpo', Actual: bas.cpo, Expected: 'po'},
  {Name: 'cpp', Actual: bas.cpp, Expected: 'pp'},
  {Name: 'cpq', Actual: bas.cpq, Expected: 'pq'},
  {Name: 'cpr', Actual: bas.cpr, Expected: 'pr'},
  {Name: 'cps', Actual: bas.cps, Expected: 'ps'},
  {Name: 'cpt', Actual: bas.cpt, Expected: 'pt'},
  {Name: 'cpu', Actual: bas.cpu, Expected: 'pu'},
  {Name: 'cpv', Actual: bas.cpv, Expected: 'pv'},
  {Name: 'cpw', Actual: bas.cpw, Expected: 'pw'},
  {Name: 'cpx', Actual: bas.cpx, Expected: 'px'},
  {Name: 'cpy', Actual: bas.cpy, Expected: 'py'},
  {Name: 'cpz', Actual: bas.cpz, Expected: 'pz'},

  {Name: 'cPa', Actual: bas.cPa, Expected: 'Pa'},
  {Name: 'cPb', Actual: bas.cPb, Expected: 'Pb'},
  {Name: 'cPc', Actual: bas.cPc, Expected: 'Pc'},
  {Name: 'cPd', Actual: bas.cPd, Expected: 'Pd'},
  {Name: 'cPe', Actual: bas.cPe, Expected: 'Pe'},
  {Name: 'cPf', Actual: bas.cPf, Expected: 'Pf'},
  {Name: 'cPg', Actual: bas.cPg, Expected: 'Pg'},
  {Name: 'cPh', Actual: bas.cPh, Expected: 'Ph'},
  {Name: 'cPi', Actual: bas.cPi, Expected: 'Pi'},
  {Name: 'cPj', Actual: bas.cPj, Expected: 'Pj'},
  {Name: 'cPk', Actual: bas.cPk, Expected: 'Pk'},
  {Name: 'cPl', Actual: bas.cPl, Expected: 'Pl'},
  {Name: 'cPm', Actual: bas.cPm, Expected: 'Pm'},
  {Name: 'cPn', Actual: bas.cPn, Expected: 'Pn'},
  {Name: 'cPo', Actual: bas.cPo, Expected: 'Po'},
  {Name: 'cPp', Actual: bas.cPp, Expected: 'Pp'},
  {Name: 'cPq', Actual: bas.cPq, Expected: 'Pq'},
  {Name: 'cPr', Actual: bas.cPr, Expected: 'Pr'},
  {Name: 'cPs', Actual: bas.cPs, Expected: 'Ps'},
  {Name: 'cPt', Actual: bas.cPt, Expected: 'Pt'},
  {Name: 'cPu', Actual: bas.cPu, Expected: 'Pu'},
  {Name: 'cPv', Actual: bas.cPv, Expected: 'Pv'},
  {Name: 'cPw', Actual: bas.cPw, Expected: 'Pw'},
  {Name: 'cPx', Actual: bas.cPx, Expected: 'Px'},
  {Name: 'cPy', Actual: bas.cPy, Expected: 'Py'},
  {Name: 'cPz', Actual: bas.cPz, Expected: 'Pz'},

  {Name: 'cpA', Actual: bas.cpA, Expected: 'pA'},
  {Name: 'cpB', Actual: bas.cpB, Expected: 'pB'},
  {Name: 'cpC', Actual: bas.cpC, Expected: 'pC'},
  {Name: 'cpD', Actual: bas.cpD, Expected: 'pD'},
  {Name: 'cpE', Actual: bas.cpE, Expected: 'pE'},
  {Name: 'cpF', Actual: bas.cpF, Expected: 'pF'},
  {Name: 'cpG', Actual: bas.cpG, Expected: 'pG'},
  {Name: 'cpH', Actual: bas.cpH, Expected: 'pH'},
  {Name: 'cpI', Actual: bas.cpI, Expected: 'pI'},
  {Name: 'cpJ', Actual: bas.cpJ, Expected: 'pJ'},
  {Name: 'cpK', Actual: bas.cpK, Expected: 'pK'},
  {Name: 'cpL', Actual: bas.cpL, Expected: 'pL'},
  {Name: 'cpM', Actual: bas.cpM, Expected: 'pM'},
  {Name: 'cpN', Actual: bas.cpN, Expected: 'pN'},
  {Name: 'cpO', Actual: bas.cpO, Expected: 'pO'},
  {Name: 'cpP', Actual: bas.cpP, Expected: 'pP'},
  {Name: 'cpQ', Actual: bas.cpQ, Expected: 'pQ'},
  {Name: 'cpR', Actual: bas.cpR, Expected: 'pR'},
  {Name: 'cpS', Actual: bas.cpS, Expected: 'pS'},
  {Name: 'cpT', Actual: bas.cpT, Expected: 'pT'},
  {Name: 'cpU', Actual: bas.cpU, Expected: 'pU'},
  {Name: 'cpV', Actual: bas.cpV, Expected: 'pV'},
  {Name: 'cpW', Actual: bas.cpW, Expected: 'pW'},
  {Name: 'cpX', Actual: bas.cpX, Expected: 'pX'},
  {Name: 'cpY', Actual: bas.cpY, Expected: 'pY'},
  {Name: 'cpZ', Actual: bas.cpZ, Expected: 'pZ'},

  {Name: 'cPA', Actual: bas.cPA, Expected: 'PA'},
  {Name: 'cPB', Actual: bas.cPB, Expected: 'PB'},
  {Name: 'cPC', Actual: bas.cPC, Expected: 'PC'},
  {Name: 'cPD', Actual: bas.cPD, Expected: 'PD'},
  {Name: 'cPE', Actual: bas.cPE, Expected: 'PE'},
  {Name: 'cPF', Actual: bas.cPF, Expected: 'PF'},
  {Name: 'cPG', Actual: bas.cPG, Expected: 'PG'},
  {Name: 'cPH', Actual: bas.cPH, Expected: 'PH'},
  {Name: 'cPI', Actual: bas.cPI, Expected: 'PI'},
  {Name: 'cPJ', Actual: bas.cPJ, Expected: 'PJ'},
  {Name: 'cPK', Actual: bas.cPK, Expected: 'PK'},
  {Name: 'cPL', Actual: bas.cPL, Expected: 'PL'},
  {Name: 'cPM', Actual: bas.cPM, Expected: 'PM'},
  {Name: 'cPN', Actual: bas.cPN, Expected: 'PN'},
  {Name: 'cPO', Actual: bas.cPO, Expected: 'PO'},
  {Name: 'cPP', Actual: bas.cPP, Expected: 'PP'},
  {Name: 'cPQ', Actual: bas.cPQ, Expected: 'PQ'},
  {Name: 'cPR', Actual: bas.cPR, Expected: 'PR'},
  {Name: 'cPS', Actual: bas.cPS, Expected: 'PS'},
  {Name: 'cPT', Actual: bas.cPT, Expected: 'PT'},
  {Name: 'cPU', Actual: bas.cPU, Expected: 'PU'},
  {Name: 'cPV', Actual: bas.cPV, Expected: 'PV'},
  {Name: 'cPW', Actual: bas.cPW, Expected: 'PW'},
  {Name: 'cPX', Actual: bas.cPX, Expected: 'PX'},
  {Name: 'cPY', Actual: bas.cPY, Expected: 'PY'},
  {Name: 'cPZ', Actual: bas.cPZ, Expected: 'PZ'},

  // qa-QA
  export const cqa = cq + ca; // qa
  export const cqb = cq + cb; // qb
  export const cqc = cq + cc; // qc
  export const cqd = cq + cd; // qd
  export const cqe = cq + ce; // qe
  export const cqf = cq + cf; // qf
  export const cqg = cq + cg; // qg
  export const cqh = cq + ch; // qh
  export const cqi = cq + ci; // qi
  export const cqj = cq + cj; // qj
  export const cqk = cq + ck; // qk
  export const cql = cq + cl; // ql
  export const cqm = cq + cm; // qm
  export const cqn = cq + cn; // qn
  export const cqo = cq + co; // qo
  export const cqp = cq + cp; // qp
  export const cqq = cq + cq; // qq
  export const cqr = cq + cr; // qr
  export const cqs = cq + cs; // qs
  export const cqt = cq + ct; // qt
  export const cqu = cq + cu; // qu
  export const cqv = cq + cv; // qv
  export const cqw = cq + cw; // qw
  export const cqx = cq + cx; // qx
  export const cqy = cq + cy; // qy
  export const cqz = cq + cz; // qz

  export const cQa = cQ + ca; // Qa
  export const cQb = cQ + cb; // Qb
  export const cQc = cQ + cc; // Qc
  export const cQd = cQ + cd; // Qd
  export const cQe = cQ + ce; // Qe
  export const cQf = cQ + cf; // Qf
  export const cQg = cQ + cg; // Qg
  export const cQh = cQ + ch; // Qh
  export const cQi = cQ + ci; // Qi
  export const cQj = cQ + cj; // Qj
  export const cQk = cQ + ck; // Qk
  export const cQl = cQ + cl; // Ql
  export const cQm = cQ + cm; // Qm
  export const cQn = cQ + cn; // Qn
  export const cQo = cQ + co; // Qo
  export const cQp = cQ + cp; // Qp
  export const cQq = cQ + cq; // Qq
  export const cQr = cQ + cr; // Qr
  export const cQs = cQ + cs; // Qs
  export const cQt = cQ + ct; // Qt
  export const cQu = cQ + cu; // Qu
  export const cQv = cQ + cv; // Qv
  export const cQw = cQ + cw; // Qw
  export const cQx = cQ + cx; // Qx
  export const cQy = cQ + cy; // Qy
  export const cQz = cQ + cz; // Qz

  export const cqA = cq + cA; // qA
  export const cqB = cq + cB; // qB
  export const cqC = cq + cC; // qC
  export const cqD = cq + cD; // qD
  export const cqE = cq + cE; // qE
  export const cqF = cq + cF; // qF
  export const cqG = cq + cG; // qG
  export const cqH = cq + cH; // qH
  export const cqI = cq + cI; // qI
  export const cqJ = cq + cJ; // qJ
  export const cqK = cq + cK; // qK
  export const cqL = cq + cL; // qL
  export const cqM = cq + cM; // qM
  export const cqN = cq + cN; // qN
  export const cqO = cq + cO; // qO
  export const cqP = cq + cP; // qP
  export const cqQ = cq + cQ; // qQ
  export const cqR = cq + cR; // qR
  export const cqS = cq + cS; // qS
  export const cqT = cq + cT; // qT
  export const cqU = cq + cU; // qU
  export const cqV = cq + cV; // qV
  export const cqW = cq + cW; // qW
  export const cqX = cq + cX; // qX
  export const cqY = cq + cY; // qY
  export const cqZ = cq + cZ; // qZ

  export const cQA = cQ + cA; // QA
  export const cQB = cQ + cB; // QB
  export const cQC = cQ + cC; // QC
  export const cQD = cQ + cD; // QD
  export const cQE = cQ + cE; // QE
  export const cQF = cQ + cF; // QF
  export const cQG = cQ + cG; // QG
  export const cQH = cQ + cH; // QH
  export const cQI = cQ + cI; // QI
  export const cQJ = cQ + cJ; // QJ
  export const cQK = cQ + cK; // QK
  export const cQL = cQ + cL; // QL
  export const cQM = cQ + cM; // QM
  export const cQN = cQ + cN; // QN
  export const cQO = cQ + cO; // QO
  export const cQP = cQ + cP; // QP
  export const cQQ = cQ + cQ; // QQ
  export const cQR = cQ + cR; // QR
  export const cQS = cQ + cS; // QS
  export const cQT = cQ + cT; // QT
  export const cQU = cQ + cU; // QU
  export const cQV = cQ + cV; // QV
  export const cQW = cQ + cW; // QW
  export const cQX = cQ + cX; // QX
  export const cQY = cQ + cY; // QY
  export const cQZ = cQ + cZ; // QZ

  // ra-RA
  export const cra = cr + ca; // ra
  export const crb = cr + cb; // rb
  export const crc = cr + cc; // rc
  export const crd = cr + cd; // rd
  export const cre = cr + ce; // re
  export const crf = cr + cf; // rf
  export const crg = cr + cg; // rg
  export const crh = cr + ch; // rh
  export const cri = cr + ci; // ri
  export const crj = cr + cj; // rj
  export const crk = cr + ck; // rk
  export const crl = cr + cl; // rl
  export const crm = cr + cm; // rm
  export const crn = cr + cn; // rn
  export const cro = cr + co; // ro
  export const crp = cr + cp; // rp
  export const crq = cr + cq; // rq
  export const crr = cr + cr; // rr
  export const crs = cr + cs; // rs
  export const crt = cr + ct; // rt
  export const cru = cr + cu; // ru
  export const crv = cr + cv; // rv
  export const crw = cr + cw; // rw
  export const crx = cr + cx; // rx
  export const cry = cr + cy; // ry
  export const crz = cr + cz; // rz

  export const cRa = cR + ca; // Ra
  export const cRb = cR + cb; // Rb
  export const cRc = cR + cc; // Rc
  export const cRd = cR + cd; // Rd
  export const cRe = cR + ce; // Re
  export const cRf = cR + cf; // Rf
  export const cRg = cR + cg; // Rg
  export const cRh = cR + ch; // Rh
  export const cRi = cR + ci; // Ri
  export const cRj = cR + cj; // Rj
  export const cRk = cR + ck; // Rk
  export const cRl = cR + cl; // Rl
  export const cRm = cR + cm; // Rm
  export const cRn = cR + cn; // Rn
  export const cRo = cR + co; // Ro
  export const cRp = cR + cp; // Rp
  export const cRq = cR + cq; // Rq
  export const cRr = cR + cr; // Rr
  export const cRs = cR + cs; // Rs
  export const cRt = cR + ct; // Rt
  export const cRu = cR + cu; // Ru
  export const cRv = cR + cv; // Rv
  export const cRw = cR + cw; // Rw
  export const cRx = cR + cx; // Rx
  export const cRy = cR + cy; // Ry
  export const cRz = cR + cz; // Rz

  export const crA = cr + cA; // rA
  export const crB = cr + cB; // rB
  export const crC = cr + cC; // rC
  export const crD = cr + cD; // rD
  export const crE = cr + cE; // rE
  export const crF = cr + cF; // rF
  export const crG = cr + cG; // rG
  export const crH = cr + cH; // rH
  export const crI = cr + cI; // rI
  export const crJ = cr + cJ; // rJ
  export const crK = cr + cK; // rK
  export const crL = cr + cL; // rL
  export const crM = cr + cM; // rM
  export const crN = cr + cN; // rN
  export const crO = cr + cO; // rO
  export const crP = cr + cP; // rP
  export const crQ = cr + cQ; // rQ
  export const crR = cr + cR; // rR
  export const crS = cr + cS; // rS
  export const crT = cr + cT; // rT
  export const crU = cr + cU; // rU
  export const crV = cr + cV; // rV
  export const crW = cr + cW; // rW
  export const crX = cr + cX; // rX
  export const crY = cr + cY; // rY
  export const crZ = cr + cZ; // rZ

  export const cRA = cR + cA; // RA
  export const cRB = cR + cB; // RB
  export const cRC = cR + cC; // RC
  export const cRD = cR + cD; // RD
  export const cRE = cR + cE; // RE
  export const cRF = cR + cF; // RF
  export const cRG = cR + cG; // RG
  export const cRH = cR + cH; // RH
  export const cRI = cR + cI; // RI
  export const cRJ = cR + cJ; // RJ
  export const cRK = cR + cK; // RK
  export const cRL = cR + cL; // RL
  export const cRM = cR + cM; // RM
  export const cRN = cR + cN; // RN
  export const cRO = cR + cO; // RO
  export const cRP = cR + cP; // RP
  export const cRQ = cR + cQ; // RQ
  export const cRR = cR + cR; // RR
  export const cRS = cR + cS; // RS
  export const cRT = cR + cT; // RT
  export const cRU = cR + cU; // RU
  export const cRV = cR + cV; // RV
  export const cRW = cR + cW; // RW
  export const cRX = cR + cX; // RX
  export const cRY = cR + cY; // RY
  export const cRZ = cR + cZ; // RZ

  // sa-SA
  export const csa = cs + ca; // sa
  export const csb = cs + cb; // sb
  export const csc = cs + cc; // sc
  export const csd = cs + cd; // sd
  export const cse = cs + ce; // se
  export const csf = cs + cf; // sf
  export const csg = cs + cg; // sg
  export const csh = cs + ch; // sh
  export const csi = cs + ci; // si
  export const csj = cs + cj; // sj
  export const csk = cs + ck; // sk
  export const csl = cs + cl; // sl
  export const csm = cs + cm; // sm
  export const csn = cs + cn; // sn
  export const cso = cs + co; // so
  export const csp = cs + cp; // sp
  export const csq = cs + cq; // sq
  export const csr = cs + cr; // sr
  export const css = cs + cs; // ss
  export const cst = cs + ct; // st
  export const csu = cs + cu; // su
  export const csv = cs + cv; // sv
  export const csw = cs + cw; // sw
  export const csx = cs + cx; // sx
  export const csy = cs + cy; // sy
  export const csz = cs + cz; // sz

  export const cSa = cS + ca; // Sa
  export const cSb = cS + cb; // Sb
  export const cSc = cS + cc; // Sc
  export const cSd = cS + cd; // Sd
  export const cSe = cS + ce; // Se
  export const cSf = cS + cf; // Sf
  export const cSg = cS + cg; // Sg
  export const cSh = cS + ch; // Sh
  export const cSi = cS + ci; // Si
  export const cSj = cS + cj; // Sj
  export const cSk = cS + ck; // Sk
  export const cSl = cS + cl; // Sl
  export const cSm = cS + cm; // Sm
  export const cSn = cS + cn; // Sn
  export const cSo = cS + co; // So
  export const cSp = cS + cp; // Sp
  export const cSq = cS + cq; // Sq
  export const cSr = cS + cr; // Sr
  export const cSs = cS + cs; // Ss
  export const cSt = cS + ct; // St
  export const cSu = cS + cu; // Su
  export const cSv = cS + cv; // Sv
  export const cSw = cS + cw; // Sw
  export const cSx = cS + cx; // Sx
  export const cSy = cS + cy; // Sy
  export const cSz = cS + cz; // Sz

  export const csA = cs + cA; // sA
  export const csB = cs + cB; // sB
  export const csC = cs + cC; // sC
  export const csD = cs + cD; // sD
  export const csE = cs + cE; // sE
  export const csF = cs + cF; // sF
  export const csG = cs + cG; // sG
  export const csH = cs + cH; // sH
  export const csI = cs + cI; // sI
  export const csJ = cs + cJ; // sJ
  export const csK = cs + cK; // sK
  export const csL = cs + cL; // sL
  export const csM = cs + cM; // sM
  export const csN = cs + cN; // sN
  export const csO = cs + cO; // sO
  export const csP = cs + cP; // sP
  export const csQ = cs + cQ; // sQ
  export const csR = cs + cR; // sR
  export const csS = cs + cS; // sS
  export const csT = cs + cT; // sT
  export const csU = cs + cU; // sU
  export const csV = cs + cV; // sV
  export const csW = cs + cW; // sW
  export const csX = cs + cX; // sX
  export const csY = cs + cY; // sY
  export const csZ = cs + cZ; // sZ

  export const cSA = cS + cA; // SA
  export const cSB = cS + cB; // SB
  export const cSC = cS + cC; // SC
  export const cSD = cS + cD; // SD
  export const cSE = cS + cE; // SE
  export const cSF = cS + cF; // SF
  export const cSG = cS + cG; // SG
  export const cSH = cS + cH; // SH
  export const cSI = cS + cI; // SI
  export const cSJ = cS + cJ; // SJ
  export const cSK = cS + cK; // SK
  export const cSL = cS + cL; // SL
  export const cSM = cS + cM; // SM
  export const cSN = cS + cN; // SN
  export const cSO = cS + cO; // SO
  export const cSP = cS + cP; // SP
  export const cSQ = cS + cQ; // SQ
  export const cSR = cS + cR; // SR
  export const cSS = cS + cS; // SS
  export const cST = cS + cT; // ST
  export const cSU = cS + cU; // SU
  export const cSV = cS + cV; // SV
  export const cSW = cS + cW; // SW
  export const cSX = cS + cX; // SX
  export const cSY = cS + cY; // SY
  export const cSZ = cS + cZ; // SZ

  // ta-TA
  export const cta = ct + ca; // ta
  export const ctb = ct + cb; // tb
  export const ctc = ct + cc; // tc
  export const ctd = ct + cd; // td
  export const cte = ct + ce; // te
  export const ctf = ct + cf; // tf
  export const ctg = ct + cg; // tg
  export const cth = ct + ch; // th
  export const cti = ct + ci; // ti
  export const ctj = ct + cj; // tj
  export const ctk = ct + ck; // tk
  export const ctl = ct + cl; // tl
  export const ctm = ct + cm; // tm
  export const ctn = ct + cn; // tn
  export const cto = ct + co; // to
  export const ctp = ct + cp; // tp
  export const ctq = ct + cq; // tq
  export const ctr = ct + cr; // tr
  export const cts = ct + cs; // ts
  export const ctt = ct + ct; // tt
  export const ctu = ct + cu; // tu
  export const ctv = ct + cv; // tv
  export const ctw = ct + cw; // tw
  export const ctx = ct + cx; // tx
  export const cty = ct + cy; // ty
  export const ctz = ct + cz; // tz

  export const cTa = cT + ca; // Ta
  export const cTb = cT + cb; // Tb
  export const cTc = cT + cc; // Tc
  export const cTd = cT + cd; // Td
  export const cTe = cT + ce; // Te
  export const cTf = cT + cf; // Tf
  export const cTg = cT + cg; // Tg
  export const cTh = cT + ch; // Th
  export const cTi = cT + ci; // Ti
  export const cTj = cT + cj; // Tj
  export const cTk = cT + ck; // Tk
  export const cTl = cT + cl; // Tl
  export const cTm = cT + cm; // Tm
  export const cTn = cT + cn; // Tn
  export const cTo = cT + co; // To
  export const cTp = cT + cp; // Tp
  export const cTq = cT + cq; // Tq
  export const cTr = cT + cr; // Tr
  export const cTs = cT + cs; // Ts
  export const cTt = cT + ct; // Tt
  export const cTu = cT + cu; // Tu
  export const cTv = cT + cv; // Tv
  export const cTw = cT + cw; // Tw
  export const cTx = cT + cx; // Tx
  export const cTy = cT + cy; // Ty
  export const cTz = cT + cz; // Tz

  export const ctA = ct + cA; // tA
  export const ctB = ct + cB; // tB
  export const ctC = ct + cC; // tC
  export const ctD = ct + cD; // tD
  export const ctE = ct + cE; // tE
  export const ctF = ct + cF; // tF
  export const ctG = ct + cG; // tG
  export const ctH = ct + cH; // tH
  export const ctI = ct + cI; // tI
  export const ctJ = ct + cJ; // tJ
  export const ctK = ct + cK; // tK
  export const ctL = ct + cL; // tL
  export const ctM = ct + cM; // tM
  export const ctN = ct + cN; // tN
  export const ctO = ct + cO; // tO
  export const ctP = ct + cP; // tP
  export const ctQ = ct + cQ; // tQ
  export const ctR = ct + cR; // tR
  export const ctS = ct + cS; // tS
  export const ctT = ct + cT; // tT
  export const ctU = ct + cU; // tU
  export const ctV = ct + cV; // tV
  export const ctW = ct + cW; // tW
  export const ctX = ct + cX; // tX
  export const ctY = ct + cY; // tY
  export const ctZ = ct + cZ; // tZ

  export const cTA = cT + cA; // TA
  export const cTB = cT + cB; // TB
  export const cTC = cT + cC; // TC
  export const cTD = cT + cD; // TD
  export const cTE = cT + cE; // TE
  export const cTF = cT + cF; // TF
  export const cTG = cT + cG; // TG
  export const cTH = cT + cH; // TH
  export const cTI = cT + cI; // TI
  export const cTJ = cT + cJ; // TJ
  export const cTK = cT + cK; // TK
  export const cTL = cT + cL; // TL
  export const cTM = cT + cM; // TM
  export const cTN = cT + cN; // TN
  export const cTO = cT + cO; // TO
  export const cTP = cT + cP; // TP
  export const cTQ = cT + cQ; // TQ
  export const cTR = cT + cR; // TR
  export const cTS = cT + cS; // TS
  export const cTT = cT + cT; // TT
  export const cTU = cT + cU; // TU
  export const cTV = cT + cV; // TV
  export const cTW = cT + cW; // TW
  export const cTX = cT + cX; // TX
  export const cTY = cT + cY; // TY
  export const cTZ = cT + cZ; // TZ

  // ua-UA
  export const cua = cu + ca; // ua
  export const cub = cu + cb; // ub
  export const cuc = cu + cc; // uc
  export const cud = cu + cd; // ud
  export const cue = cu + ce; // ue
  export const cuf = cu + cf; // uf
  export const cug = cu + cg; // ug
  export const cuh = cu + ch; // uh
  export const cui = cu + ci; // ui
  export const cuj = cu + cj; // uj
  export const cuk = cu + ck; // uk
  export const cul = cu + cl; // ul
  export const cum = cu + cm; // um
  export const cun = cu + cn; // un
  export const cuo = cu + co; // uo
  export const cup = cu + cp; // up
  export const cuq = cu + cq; // uq
  export const cur = cu + cr; // ur
  export const cus = cu + cs; // us
  export const cut = cu + ct; // ut
  export const cuu = cu + cu; // uu
  export const cuv = cu + cv; // uv
  export const cuw = cu + cw; // uw
  export const cux = cu + cx; // ux
  export const cuy = cu + cy; // uy
  export const cuz = cu + cz; // uz

  export const cUa = cU + ca; // Ua
  export const cUb = cU + cb; // Ub
  export const cUc = cU + cc; // Uc
  export const cUd = cU + cd; // Ud
  export const cUe = cU + ce; // Ue
  export const cUf = cU + cf; // Uf
  export const cUg = cU + cg; // Ug
  export const cUh = cU + ch; // Uh
  export const cUi = cU + ci; // Ui
  export const cUj = cU + cj; // Uj
  export const cUk = cU + ck; // Uk
  export const cUl = cU + cl; // Ul
  export const cUm = cU + cm; // Um
  export const cUn = cU + cn; // Un
  export const cUo = cU + co; // Uo
  export const cUp = cU + cp; // Up
  export const cUq = cU + cq; // Uq
  export const cUr = cU + cr; // Ur
  export const cUs = cU + cs; // Us
  export const cUt = cU + ct; // Ut
  export const cUu = cU + cu; // Uu
  export const cUv = cU + cv; // Uv
  export const cUw = cU + cw; // Uw
  export const cUx = cU + cx; // Ux
  export const cUy = cU + cy; // Uy
  export const cUz = cU + cz; // Uz

  export const cuA = cu + cA; // uA
  export const cuB = cu + cB; // uB
  export const cuC = cu + cC; // uC
  export const cuD = cu + cD; // uD
  export const cuE = cu + cE; // uE
  export const cuF = cu + cF; // uF
  export const cuG = cu + cG; // uG
  export const cuH = cu + cH; // uH
  export const cuI = cu + cI; // uI
  export const cuJ = cu + cJ; // uJ
  export const cuK = cu + cK; // uK
  export const cuL = cu + cL; // uL
  export const cuM = cu + cM; // uM
  export const cuN = cu + cN; // uN
  export const cuO = cu + cO; // uO
  export const cuP = cu + cP; // uP
  export const cuQ = cu + cQ; // uQ
  export const cuR = cu + cR; // uR
  export const cuS = cu + cS; // uS
  export const cuT = cu + cT; // uT
  export const cuU = cu + cU; // uU
  export const cuV = cu + cV; // uV
  export const cuW = cu + cW; // uW
  export const cuX = cu + cX; // uX
  export const cuY = cu + cY; // uY
  export const cuZ = cu + cZ; // uZ

  export const cUA = cU + cA; // UA
  export const cUB = cU + cB; // UB
  export const cUC = cU + cC; // UC
  export const cUD = cU + cD; // UD
  export const cUE = cU + cE; // UE
  export const cUF = cU + cF; // UF
  export const cUG = cU + cG; // UG
  export const cUH = cU + cH; // UH
  export const cUI = cU + cI; // UI
  export const cUJ = cU + cJ; // UJ
  export const cUK = cU + cK; // UK
  export const cUL = cU + cL; // UL
  export const cUM = cU + cM; // UM
  export const cUN = cU + cN; // UN
  export const cUO = cU + cO; // UO
  export const cUP = cU + cP; // UP
  export const cUQ = cU + cQ; // UQ
  export const cUR = cU + cR; // UR
  export const cUS = cU + cS; // US
  export const cUT = cU + cT; // UT
  export const cUU = cU + cU; // UU
  export const cUV = cU + cV; // UV
  export const cUW = cU + cW; // UW
  export const cUX = cU + cX; // UX
  export const cUY = cU + cY; // UY
  export const cUZ = cU + cZ; // UZ

  // va-VA
  export const cva = cv + ca; // va
  export const cvb = cv + cb; // vb
  export const cvc = cv + cc; // vc
  export const cvd = cv + cd; // vd
  export const cve = cv + ce; // ve
  export const cvf = cv + cf; // vf
  export const cvg = cv + cg; // vg
  export const cvh = cv + ch; // vh
  export const cvi = cv + ci; // vi
  export const cvj = cv + cj; // vj
  export const cvk = cv + ck; // vk
  export const cvl = cv + cl; // vl
  export const cvm = cv + cm; // vm
  export const cvn = cv + cn; // vn
  export const cvo = cv + co; // vo
  export const cvp = cv + cp; // vp
  export const cvq = cv + cq; // vq
  export const cvr = cv + cr; // vr
  export const cvs = cv + cs; // vs
  export const cvt = cv + ct; // vt
  export const cvu = cv + cu; // vu
  export const cvv = cv + cv; // vv
  export const cvw = cv + cw; // vw
  export const cvx = cv + cx; // vx
  export const cvy = cv + cy; // vy
  export const cvz = cv + cz; // vz

  export const cVa = cV + ca; // Va
  export const cVb = cV + cb; // Vb
  export const cVc = cV + cc; // Vc
  export const cVd = cV + cd; // Vd
  export const cVe = cV + ce; // Ve
  export const cVf = cV + cf; // Vf
  export const cVg = cV + cg; // Vg
  export const cVh = cV + ch; // Vh
  export const cVi = cV + ci; // Vi
  export const cVj = cV + cj; // Vj
  export const cVk = cV + ck; // Vk
  export const cVl = cV + cl; // Vl
  export const cVm = cV + cm; // Vm
  export const cVn = cV + cn; // Vn
  export const cVo = cV + co; // Vo
  export const cVp = cV + cp; // Vp
  export const cVq = cV + cq; // Vq
  export const cVr = cV + cr; // Vr
  export const cVs = cV + cs; // Vs
  export const cVt = cV + ct; // Vt
  export const cVu = cV + cu; // Vu
  export const cVv = cV + cv; // Vv
  export const cVw = cV + cw; // Vw
  export const cVx = cV + cx; // Vx
  export const cVy = cV + cy; // Vy
  export const cVz = cV + cz; // Vz

  export const cvA = cv + cA; // vA
  export const cvB = cv + cB; // vB
  export const cvC = cv + cC; // vC
  export const cvD = cv + cD; // vD
  export const cvE = cv + cE; // vE
  export const cvF = cv + cF; // vF
  export const cvG = cv + cG; // vG
  export const cvH = cv + cH; // vH
  export const cvI = cv + cI; // vI
  export const cvJ = cv + cJ; // vJ
  export const cvK = cv + cK; // vK
  export const cvL = cv + cL; // vL
  export const cvM = cv + cM; // vM
  export const cvN = cv + cN; // vN
  export const cvO = cv + cO; // vO
  export const cvP = cv + cP; // vP
  export const cvQ = cv + cQ; // vQ
  export const cvR = cv + cR; // vR
  export const cvS = cv + cS; // vS
  export const cvT = cv + cT; // vT
  export const cvU = cv + cU; // vU
  export const cvV = cv + cV; // vV
  export const cvW = cv + cW; // vW
  export const cvX = cv + cX; // vX
  export const cvY = cv + cY; // vY
  export const cvZ = cv + cZ; // vZ

  export const cVA = cV + cA; // VA
  export const cVB = cV + cB; // VB
  export const cVC = cV + cC; // VC
  export const cVD = cV + cD; // VD
  export const cVE = cV + cE; // VE
  export const cVF = cV + cF; // VF
  export const cVG = cV + cG; // VG
  export const cVH = cV + cH; // VH
  export const cVI = cV + cI; // VI
  export const cVJ = cV + cJ; // VJ
  export const cVK = cV + cK; // VK
  export const cVL = cV + cL; // VL
  export const cVM = cV + cM; // VM
  export const cVN = cV + cN; // VN
  export const cVO = cV + cO; // VO
  export const cVP = cV + cP; // VP
  export const cVQ = cV + cQ; // VQ
  export const cVR = cV + cR; // VR
  export const cVS = cV + cS; // VS
  export const cVT = cV + cT; // VT
  export const cVU = cV + cU; // VU
  export const cVV = cV + cV; // VV
  export const cVW = cV + cW; // VW
  export const cVX = cV + cX; // VX
  export const cVY = cV + cY; // VY
  export const cVZ = cV + cZ; // VZ

  // wa-WA
  export const cwa = cw + ca; // wa
  export const cwb = cw + cb; // wb
  export const cwc = cw + cc; // wc
  export const cwd = cw + cd; // wd
  export const cwe = cw + ce; // we
  export const cwf = cw + cf; // wf
  export const cwg = cw + cg; // wg
  export const cwh = cw + ch; // wh
  export const cwi = cw + ci; // wi
  export const cwj = cw + cj; // wj
  export const cwk = cw + ck; // wk
  export const cwl = cw + cl; // wl
  export const cwm = cw + cm; // wm
  export const cwn = cw + cn; // wn
  export const cwo = cw + co; // wo
  export const cwp = cw + cp; // wp
  export const cwq = cw + cq; // wq
  export const cwr = cw + cr; // wr
  export const cws = cw + cs; // ws
  export const cwt = cw + ct; // wt
  export const cwu = cw + cu; // wu
  export const cwv = cw + cv; // wv
  export const cww = cw + cw; // ww
  export const cwx = cw + cx; // wx
  export const cwy = cw + cy; // wy
  export const cwz = cw + cz; // wz

  export const cWa = cW + ca; // Wa
  export const cWb = cW + cb; // Wb
  export const cWc = cW + cc; // Wc
  export const cWd = cW + cd; // Wd
  export const cWe = cW + ce; // We
  export const cWf = cW + cf; // Wf
  export const cWg = cW + cg; // Wg
  export const cWh = cW + ch; // Wh
  export const cWi = cW + ci; // Wi
  export const cWj = cW + cj; // Wj
  export const cWk = cW + ck; // Wk
  export const cWl = cW + cl; // Wl
  export const cWm = cW + cm; // Wm
  export const cWn = cW + cn; // Wn
  export const cWo = cW + co; // Wo
  export const cWp = cW + cp; // Wp
  export const cWq = cW + cq; // Wq
  export const cWr = cW + cr; // Wr
  export const cWs = cW + cs; // Ws
  export const cWt = cW + ct; // Wt
  export const cWu = cW + cu; // Wu
  export const cWv = cW + cv; // Wv
  export const cWw = cW + cw; // Ww
  export const cWx = cW + cx; // Wx
  export const cWy = cW + cy; // Wy
  export const cWz = cW + cz; // Wz

  export const cwA = cw + cA; // wA
  export const cwB = cw + cB; // wB
  export const cwC = cw + cC; // wC
  export const cwD = cw + cD; // wD
  export const cwE = cw + cE; // wE
  export const cwF = cw + cF; // wF
  export const cwG = cw + cG; // wG
  export const cwH = cw + cH; // wH
  export const cwI = cw + cI; // wI
  export const cwJ = cw + cJ; // wJ
  export const cwK = cw + cK; // wK
  export const cwL = cw + cL; // wL
  export const cwM = cw + cM; // wM
  export const cwN = cw + cN; // wN
  export const cwO = cw + cO; // wO
  export const cwP = cw + cP; // wP
  export const cwQ = cw + cQ; // wQ
  export const cwR = cw + cR; // wR
  export const cwS = cw + cS; // wS
  export const cwT = cw + cT; // wT
  export const cwU = cw + cU; // wU
  export const cwV = cw + cV; // wV
  export const cwW = cw + cW; // wW
  export const cwX = cw + cX; // wX
  export const cwY = cw + cY; // wY
  export const cwZ = cw + cZ; // wZ

  export const cWA = cW + cA; // WA
  export const cWB = cW + cB; // WB
  export const cWC = cW + cC; // WC
  export const cWD = cW + cD; // WD
  export const cWE = cW + cE; // WE
  export const cWF = cW + cF; // WF
  export const cWG = cW + cG; // WG
  export const cWH = cW + cH; // WH
  export const cWI = cW + cI; // WI
  export const cWJ = cW + cJ; // WJ
  export const cWK = cW + cK; // WK
  export const cWL = cW + cL; // WL
  export const cWM = cW + cM; // WM
  export const cWN = cW + cN; // WN
  export const cWO = cW + cO; // WO
  export const cWP = cW + cP; // WP
  export const cWQ = cW + cQ; // WQ
  export const cWR = cW + cR; // WR
  export const cWS = cW + cS; // WS
  export const cWT = cW + cT; // WT
  export const cWU = cW + cU; // WU
  export const cWV = cW + cV; // WV
  export const cWW = cW + cW; // WW
  export const cWX = cW + cX; // WX
  export const cWY = cW + cY; // WY
  export const cWZ = cW + cZ; // WZ

  // xa-XA
  export const cxa = cx + ca; // xa
  export const cxb = cx + cb; // xb
  export const cxc = cx + cc; // xc
  export const cxd = cx + cd; // xd
  export const cxe = cx + ce; // xe
  export const cxf = cx + cf; // xf
  export const cxg = cx + cg; // xg
  export const cxh = cx + ch; // xh
  export const cxi = cx + ci; // xi
  export const cxj = cx + cj; // xj
  export const cxk = cx + ck; // xk
  export const cxl = cx + cl; // xl
  export const cxm = cx + cm; // xm
  export const cxn = cx + cn; // xn
  export const cxo = cx + co; // xo
  export const cxp = cx + cp; // xp
  export const cxq = cx + cq; // xq
  export const cxr = cx + cr; // xr
  export const cxs = cx + cs; // xs
  export const cxt = cx + ct; // xt
  export const cxu = cx + cu; // xu
  export const cxv = cx + cv; // xv
  export const cxw = cx + cw; // xw
  export const cxx = cx + cx; // xx
  export const cxy = cx + cy; // xy
  export const cxz = cx + cz; // xz

  export const cXa = cX + ca; // Xa
  export const cXb = cX + cb; // Xb
  export const cXc = cX + cc; // Xc
  export const cXd = cX + cd; // Xd
  export const cXe = cX + ce; // Xe
  export const cXf = cX + cf; // Xf
  export const cXg = cX + cg; // Xg
  export const cXh = cX + ch; // Xh
  export const cXi = cX + ci; // Xi
  export const cXj = cX + cj; // Xj
  export const cXk = cX + ck; // Xk
  export const cXl = cX + cl; // Xl
  export const cXm = cX + cm; // Xm
  export const cXn = cX + cn; // Xn
  export const cXo = cX + co; // Xo
  export const cXp = cX + cp; // Xp
  export const cXq = cX + cq; // Xq
  export const cXr = cX + cr; // Xr
  export const cXs = cX + cs; // Xs
  export const cXt = cX + ct; // Xt
  export const cXu = cX + cu; // Xu
  export const cXv = cX + cv; // Xv
  export const cXw = cX + cw; // Xw
  export const cXx = cX + cx; // Xx
  export const cXy = cX + cy; // Xy
  export const cXz = cX + cz; // Xz

  export const cxA = cx + cA; // xA
  export const cxB = cx + cB; // xB
  export const cxC = cx + cC; // xC
  export const cxD = cx + cD; // xD
  export const cxE = cx + cE; // xE
  export const cxF = cx + cF; // xF
  export const cxG = cx + cG; // xG
  export const cxH = cx + cH; // xH
  export const cxI = cx + cI; // xI
  export const cxJ = cx + cJ; // xJ
  export const cxK = cx + cK; // xK
  export const cxL = cx + cL; // xL
  export const cxM = cx + cM; // xM
  export const cxN = cx + cN; // xN
  export const cxO = cx + cO; // xO
  export const cxP = cx + cP; // xP
  export const cxQ = cx + cQ; // xQ
  export const cxR = cx + cR; // xR
  export const cxS = cx + cS; // xS
  export const cxT = cx + cT; // xT
  export const cxU = cx + cU; // xU
  export const cxV = cx + cV; // xV
  export const cxW = cx + cW; // xW
  export const cxX = cx + cX; // xX
  export const cxY = cx + cY; // xY
  export const cxZ = cx + cZ; // xZ

  export const cXA = cX + cA; // XA
  export const cXB = cX + cB; // XB
  export const cXC = cX + cC; // XC
  export const cXD = cX + cD; // XD
  export const cXE = cX + cE; // XE
  export const cXF = cX + cF; // XF
  export const cXG = cX + cG; // XG
  export const cXH = cX + cH; // XH
  export const cXI = cX + cI; // XI
  export const cXJ = cX + cJ; // XJ
  export const cXK = cX + cK; // XK
  export const cXL = cX + cL; // XL
  export const cXM = cX + cM; // XM
  export const cXN = cX + cN; // XN
  export const cXO = cX + cO; // XO
  export const cXP = cX + cP; // XP
  export const cXQ = cX + cQ; // XQ
  export const cXR = cX + cR; // XR
  export const cXS = cX + cS; // XS
  export const cXT = cX + cT; // XT
  export const cXU = cX + cU; // XU
  export const cXV = cX + cV; // XV
  export const cXW = cX + cW; // XW
  export const cXX = cX + cX; // XX
  export const cXY = cX + cY; // XY
  export const cXZ = cX + cZ; // XZ

  // ya-YA
  export const cya = cy + ca; // ya
  export const cyb = cy + cb; // yb
  export const cyc = cy + cc; // yc
  export const cyd = cy + cd; // yd
  export const cye = cy + ce; // ye
  export const cyf = cy + cf; // yf
  export const cyg = cy + cg; // yg
  export const cyh = cy + ch; // yh
  export const cyi = cy + ci; // yi
  export const cyj = cy + cj; // yj
  export const cyk = cy + ck; // yk
  export const cyl = cy + cl; // yl
  export const cym = cy + cm; // ym
  export const cyn = cy + cn; // yn
  export const cyo = cy + co; // yo
  export const cyp = cy + cp; // yp
  export const cyq = cy + cq; // yq
  export const cyr = cy + cr; // yr
  export const cys = cy + cs; // ys
  export const cyt = cy + ct; // yt
  export const cyu = cy + cu; // yu
  export const cyv = cy + cv; // yv
  export const cyw = cy + cw; // yw
  export const cyx = cy + cx; // yx
  export const cyy = cy + cy; // yy
  export const cyz = cy + cz; // yz

  export const cYa = cY + ca; // Ya
  export const cYb = cY + cb; // Yb
  export const cYc = cY + cc; // Yc
  export const cYd = cY + cd; // Yd
  export const cYe = cY + ce; // Ye
  export const cYf = cY + cf; // Yf
  export const cYg = cY + cg; // Yg
  export const cYh = cY + ch; // Yh
  export const cYi = cY + ci; // Yi
  export const cYj = cY + cj; // Yj
  export const cYk = cY + ck; // Yk
  export const cYl = cY + cl; // Yl
  export const cYm = cY + cm; // Ym
  export const cYn = cY + cn; // Yn
  export const cYo = cY + co; // Yo
  export const cYp = cY + cp; // Yp
  export const cYq = cY + cq; // Yq
  export const cYr = cY + cr; // Yr
  export const cYs = cY + cs; // Ys
  export const cYt = cY + ct; // Yt
  export const cYu = cY + cu; // Yu
  export const cYv = cY + cv; // Yv
  export const cYw = cY + cw; // Yw
  export const cYx = cY + cx; // Yx
  export const cYy = cY + cy; // Yy
  export const cYz = cY + cz; // Yz

  export const cyA = cy + cA; // yA
  export const cyB = cy + cB; // yB
  export const cyC = cy + cC; // yC
  export const cyD = cy + cD; // yD
  export const cyE = cy + cE; // yE
  export const cyF = cy + cF; // yF
  export const cyG = cy + cG; // yG
  export const cyH = cy + cH; // yH
  export const cyI = cy + cI; // yI
  export const cyJ = cy + cJ; // yJ
  export const cyK = cy + cK; // yK
  export const cyL = cy + cL; // yL
  export const cyM = cy + cM; // yM
  export const cyN = cy + cN; // yN
  export const cyO = cy + cO; // yO
  export const cyP = cy + cP; // yP
  export const cyQ = cy + cQ; // yQ
  export const cyR = cy + cR; // yR
  export const cyS = cy + cS; // yS
  export const cyT = cy + cT; // yT
  export const cyU = cy + cU; // yU
  export const cyV = cy + cV; // yV
  export const cyW = cy + cW; // yW
  export const cyX = cy + cX; // yX
  export const cyY = cy + cY; // yY
  export const cyZ = cy + cZ; // yZ

  export const cYA = cY + cA; // YA
  export const cYB = cY + cB; // YB
  export const cYC = cY + cC; // YC
  export const cYD = cY + cD; // YD
  export const cYE = cY + cE; // YE
  export const cYF = cY + cF; // YF
  export const cYG = cY + cG; // YG
  export const cYH = cY + cH; // YH
  export const cYI = cY + cI; // YI
  export const cYJ = cY + cJ; // YJ
  export const cYK = cY + cK; // YK
  export const cYL = cY + cL; // YL
  export const cYM = cY + cM; // YM
  export const cYN = cY + cN; // YN
  export const cYO = cY + cO; // YO
  export const cYP = cY + cP; // YP
  export const cYQ = cY + cQ; // YQ
  export const cYR = cY + cR; // YR
  export const cYS = cY + cS; // YS
  export const cYT = cY + cT; // YT
  export const cYU = cY + cU; // YU
  export const cYV = cY + cV; // YV
  export const cYW = cY + cW; // YW
  export const cYX = cY + cX; // YX
  export const cYY = cY + cY; // YY
  export const cYZ = cY + cZ; // YZ

  // za-ZA
  export const cza = cz + ca; // za
  export const czb = cz + cb; // zb
  export const czc = cz + cc; // zc
  export const czd = cz + cd; // zd
  export const cze = cz + ce; // ze
  export const czf = cz + cf; // zf
  export const czg = cz + cg; // zg
  export const czh = cz + ch; // zh
  export const czi = cz + ci; // zi
  export const czj = cz + cj; // zj
  export const czk = cz + ck; // zk
  export const czl = cz + cl; // zl
  export const czm = cz + cm; // zm
  export const czn = cz + cn; // zn
  export const czo = cz + co; // zo
  export const czp = cz + cp; // zp
  export const czq = cz + cq; // zq
  export const czr = cz + cr; // zr
  export const czs = cz + cs; // zs
  export const czt = cz + ct; // zt
  export const czu = cz + cu; // zu
  export const czv = cz + cv; // zv
  export const czw = cz + cw; // zw
  export const czx = cz + cx; // zx
  export const czy = cz + cy; // zy
  export const czz = cz + cz; // zz

  export const cZa = cZ + ca; // Za
  export const cZb = cZ + cb; // Zb
  export const cZc = cZ + cc; // Zc
  export const cZd = cZ + cd; // Zd
  export const cZe = cZ + ce; // Ze
  export const cZf = cZ + cf; // Zf
  export const cZg = cZ + cg; // Zg
  export const cZh = cZ + ch; // Zh
  export const cZi = cZ + ci; // Zi
  export const cZj = cZ + cj; // Zj
  export const cZk = cZ + ck; // Zk
  export const cZl = cZ + cl; // Zl
  export const cZm = cZ + cm; // Zm
  export const cZn = cZ + cn; // Zn
  export const cZo = cZ + co; // Zo
  export const cZp = cZ + cp; // Zp
  export const cZq = cZ + cq; // Zq
  export const cZr = cZ + cr; // Zr
  export const cZs = cZ + cs; // Zs
  export const cZt = cZ + ct; // Zt
  export const cZu = cZ + cu; // Zu
  export const cZv = cZ + cv; // Zv
  export const cZw = cZ + cw; // Zw
  export const cZx = cZ + cx; // Zx
  export const cZy = cZ + cy; // Zy
  export const cZz = cZ + cz; // Zz

  export const czA = cz + cA; // zA
  export const czB = cz + cB; // zB
  export const czC = cz + cC; // zC
  export const czD = cz + cD; // zD
  export const czE = cz + cE; // zE
  export const czF = cz + cF; // zF
  export const czG = cz + cG; // zG
  export const czH = cz + cH; // zH
  export const czI = cz + cI; // zI
  export const czJ = cz + cJ; // zJ
  export const czK = cz + cK; // zK
  export const czL = cz + cL; // zL
  export const czM = cz + cM; // zM
  export const czN = cz + cN; // zN
  export const czO = cz + cO; // zO
  export const czP = cz + cP; // zP
  export const czQ = cz + cQ; // zQ
  export const czR = cz + cR; // zR
  export const czS = cz + cS; // zS
  export const czT = cz + cT; // zT
  export const czU = cz + cU; // zU
  export const czV = cz + cV; // zV
  export const czW = cz + cW; // zW
  export const czX = cz + cX; // zX
  export const czY = cz + cY; // zY
  export const czZ = cz + cZ; // zZ

  export const cZA = cZ + cA; // ZA
  export const cZB = cZ + cB; // ZB
  export const cZC = cZ + cC; // ZC
  export const cZD = cZ + cD; // ZD
  export const cZE = cZ + cE; // ZE
  export const cZF = cZ + cF; // ZF
  export const cZG = cZ + cG; // ZG
  export const cZH = cZ + cH; // ZH
  export const cZI = cZ + cI; // ZI
  export const cZJ = cZ + cJ; // ZJ
  export const cZK = cZ + cK; // ZK
  export const cZL = cZ + cL; // ZL
  export const cZM = cZ + cM; // ZM
  export const cZN = cZ + cN; // ZN
  export const cZO = cZ + cO; // ZO
  export const cZP = cZ + cP; // ZP
  export const cZQ = cZ + cQ; // ZQ
  export const cZR = cZ + cR; // ZR
  export const cZS = cZ + cS; // ZS
  export const cZT = cZ + cT; // ZT
  export const cZU = cZ + cU; // ZU
  export const cZV = cZ + cV; // ZV
  export const cZW = cZ + cW; // ZW
  export const cZX = cZ + cX; // ZX
  export const cZY = cZ + cY; // ZY
  export const cZZ = cZ + cZ; // ZZ

  // inducedConstantsFailure = 'inducedConstantsFailure';

];
