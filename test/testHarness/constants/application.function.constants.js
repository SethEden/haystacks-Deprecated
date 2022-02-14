/**
 * @file application.function.constants.js
 * @module application.function.constants
 * @description Contains a list of all the functions in the client application.
 * @requires mdoule:haystacks
 * @author Seth Hollingsead
 * @date 2022/02/11
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

import haystacks from 'haystacks';
let bas = haystacks.bas;
let gen = haystacks.gen;
let wr1 = haystacks.wr1;

// rulesLibrary
let cinitClientRulesLibrary = gen.cinit + wr1.cClinet + wr1.cRules + wr1.cLibrary; // initClientRulesLibrary

// commandsLibrary
let cinitClientCommandsLibrary = gen.cinit + wr1.cClient + wr1.cCommands + wr1.cLibrary; // initClientCommandsLibrary

export default {
  // rulesLibrary
  [bas.cc + cinitClientRulesLibrary]: cinitClientRulesLibrary, // initClientRulesLibrary

  // commandsLibrary
  [bas.cc + cinitClientCommandsLibrary]: cinitClientCommandsLibrary // initClientCommandsLibrary
};
