/**
 * @file application.business.constants.js
 * @module application.business.constants
 * @description A file to hold all of the client application business rules constants.
 * So none of the constants in thsi file should be generic/system/framework constants.
 * @requires module:haystacks.generic.constants
 * @requires module:haystacks.numeric.constants
 * @requires module:haystacks.word1.constants
 * @author Seth Hollingsead
 * @date 2022/02/08
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

import haystacks from 'haystacks';
let gen = haystacks.gen;
let num = haystacks.num;
let wr1 = haystacks.wr1;

// Client Busienss Rules
export const cclientEcho = wr1.cclient + wr1.cEcho; // clientEcho

// ********************************
// ClientStringParsing rules in order
// ********************************
export const ccustomEcho = wr1.ccustom + wr1.cEcho; // customEcho
