/**
 * @file clientCommands.js
 * @module clientCommands
 * @description Contains all client defined commands for execution client actions with various operations.
 * @requires module:haystacks
 * @requires module:haystacks.basic.constants
 * @requires module:haystacks.generic.constants
 * @requires module:haystacks.numeric.constants
 * @requires module:haystacks.word1.constants
 * @requires module:haystacks.system.constants
 * @requires module:haystacks.business.constants
 * @requires module:haystacks.message.constants
 * @requires module:application.command.constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @author Seth Hollingsead
 * @date 2022/02/07
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

import haystacks from 'haystacks';
let bas = haystacks.bas;
let gen = haystacks.gen;
let num = haystacks.num;
let wr1 = haystacks.wr1;
let sys = haystacks.sys;
let biz = haystacks.biz;
let msg = haystacks.msg;
import * as apc from '../../constants/application.constants.js';
import path from 'path';
import chalk from 'chalk';
const baseFileName = path.basename(module.filename, path.extname(module.filename));
// testHarness.commands.clientCommands.clientCommands.
const namespacePrefix = apc.ctestHarness + bas.cDot + wr1.ccommands + bas.cDot + wr1.cclient + wr1.cCommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function customEchoCommand
 * @description A quick command to validate that the new dynamic data storage technique for client commands is working.
 * @param {string} inputData The string input data.
 * @param {string} inputMetaData The string of input meta-data.
 * @return {string} An echo of the inputData with some hard-coded modifier.
 * @author Seth Hollingsead
 * @date 2022/02/08
 */
export const customEchoCommand = function(inputData, inputMetaData) {
  let functionName = customEchoCommand.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log('inputData is: ' + inputData);
  console.log('inputMetaData is: ' + inputMetaData);
  let returnData;
  returnData = inputData + ' clientStringParsing.customEchoCommand';
  console.log('returnData is: ' + returnData);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};
