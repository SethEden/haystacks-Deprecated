/**
 * @file application.function.constants.js
 * @module application.function.constants
 * @description Contains a list of all the functions in the client application.
 * @requires module:haystacks
 * @requires module:haystacks.basic.constants
 * @requires module:haystacks.generic.constants
 * @requires module:haystacks.word.constants
 * @author Seth Hollingsead
 * @date 2022/02/11
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// External imports
import haystacks from 'haystacks';
const bas = haystacks.bas;
const gen = haystacks.gen;
const wrd = haystacks.wrd;

// rulesLibrary
export const cinitClientRulesLibrary = gen.cinit + wrd.cClient + wrd.cRules + wrd.cLibrary; // initClientRulesLibrary

// commandsLibrary
export const cinitClientCommandsLibrary = gen.cinit + wrd.cClient + wrd.cCommands + wrd.cLibrary; // initClientCommandsLibrary
