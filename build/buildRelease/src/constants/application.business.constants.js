/**
 * @file application.business.constants.js
 * @module application.business.constants
 * @description A file to hold all of the client application business rules constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires module:haystacks
 * @requires module:haystacks.generic.constants
 * @requires module:haystacks.numeric.constants
 * @requires module:haystacks.word1.constants
 * @author Seth Hollingsead
 * @date 2022/03/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// External imports
import haystacks from 'haystacks';
let gen = haystacks.gen;
let num = haystacks.num;
let wr1 = haystacks.wr1;

// Client Business Rules
export const cclientEcho = wr1.cclient + wr1.cEcho; // clientEcho

// ********************************
// ClientStringParsing rules in order
// ********************************
export const ccustomEcho = wr1.ccustom + wr1.cEcho; // customEcho
export const cbuildReleasePackage = wr1.cbuild + wr1.cRelease + wr1.cPackage; // buildReleasePackage
