/**
 * @file command.constants.js
 * @module command.constants
 * @description Contains many re-usable command constants
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './basic.constants.js';
import * as biz from './business.constants.js';
import * as sys from './system.constants.js';
import * as wr1 from './word1.constants.js';

// Generic Commands constants

// ***********************************************
// Nominal commands in order
// ***********************************************
export const cechoCommand = biz.cecho + wr1.cCommand; // echoCommand
export const cEchoCommand = biz.cEcho + wr1.cCommand; // EchoCommand
export const cclearScreen = wr1.cclear + wr1.cScreen; // clearScreen
export const cworkflowHelp = wr1.cworkflow + wr1.cHelp; // workflowHelp
export const ccommandSequencer = wr1.ccommand + wr1.cSequencer; // commandSequencer
export const cprintDataHive = wr1.cprint + wr1.cData + wr1.cHive; // printDataHive
export const cprintDataHiveAttributes = cprintDataHive + wr1.cAttributes; // printDataHiveAttributes
export const cclearDataStorage = wr1.cclear + wr1.cData + wr1.cStorage; // clearDataStorage
export const cbusinessRule = wr1.cbusiness + wr1.cRule; // businessRule
export const ccommandGenerator = wr1.ccommand + wr1.cGenerator; // commandGenerator

// ********************************
// System defined workflows
// ********************************
export const cStartupWorkflow = wr1.cWorkflow + bas.cSpace + wr1.cstartup; // Workflow startup
