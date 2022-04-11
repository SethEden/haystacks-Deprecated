/**
 * @file application.business.constants.js
 * @module application.business.constants
 * @description A file to hold all of the client application business rules constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires module:haystacks
 * @requires module:haystacks.generic.constants
 * @requires module:haystacks.numeric.constants
 * @requires module:haystacks.word.constants
 * @author Seth Hollingsead
 * @date 2022/02/08
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// External imports
import haystacks from 'haystacks';
let gen = haystacks.gen;
let num = haystacks.num;
let wrd = haystacks.wrd;

// Client Business Rules
export const cclientEcho = wrd.cclient + wrd.cEcho; // clientEcho

// ********************************
// ClientStringParsing rules in order
// ********************************
export const ccustomEcho = wrd.ccustom + wrd.cEcho; // customEcho
export const cmostPopularNumber = wrd.cmost + wrd.cPopular + wrd.cNumber; // mostPopularNumber
export const cisAlmostPalindrome = wrd.cis + wrd.cAlmost + wrd.cPalindrome; // isAlmostPalindrome
export const cthreePointAverage = num.cthree + wrd.cPoint + wrd.cAverage; // threePointAverage
export const carrayCounter = wrd.carray + wrd.cCounter; // arrayCounter
