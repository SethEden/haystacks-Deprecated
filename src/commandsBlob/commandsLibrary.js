/**
 * @file commandsLibrary.js
 * @module commandsLibrary
 * @description Contains all of the ssytem defined commands as a map between function names and function calls.
 * @requires module:nominal
 * @requires module:integrationTests
 * @requires module:basic.constants
 * @requires module:command.constants
 * @requires module:function.constants
 * @requires module:message.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import nominalCommands from './commands/nominal.js';
// import integrationTests from './commands/integrationTests.js';
import * as bas from '../constants/basic.constants.js';
import * as cmd from '../constants/command.constants.js';
import * as fnc from '../constants/function.constants.js';
import * as msg from '../constants/message.constants.js';
import * as sys from '../constants/system.constants.js';
import * as wr1 from '../constants/word1.constants.js';
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
// External imports
import path from 'path';

const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// commandsBlob.commandsLibrary.
const namespacePrefix = sys.ccommandsBlob + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initCommandsLibrary
 * @description Initializes the commands function data structure on D.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @NOTE Pelase be aware taht the Commands and BusinessRules data fields in the
 * D-data structure are going to display as empty when printing out the D data structure even when using JSON.stringify().
 * This is because the functions cannot really be serialized in any way. It actually kind of makes sense,
 * but could be really confusing if you are struggling trying to debug commands or business rules that do not appear to exist.
 */
function initCommandsLibrary() {
  let functionName = initCommandsLibrary.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  D[wr1.cCommands] = {};
  D[wr1.cCommands] = {
    // Commands
    // ***********************************************
    // Nominal commands in order
    // ***********************************************
    [cmd.cechoCommand]: (inputData, inputMetaData) => nominalCommands.echoCommand(inputData, inputMetaData),
    [wr1.cexit]: (inputData, inputMetData) => nominalCommands.exit(inputData, inputMetData),
    [wr1.cversion]: (inputData, inputMetaData) => nominalCommands.version(inputData, inputMetaData),
    [wr1.cabout]: (inputData, inputMetaData) => nominalCommands.about(inputData, inputMetaData),
    [wr1.cname]: (inputData, inputMetaData) => nominalCommands.name(inputData, inputMetaData),
    [cmd.cclearScreen]: (inputData, inputMetaData) => nominalCommands.clearScreen(inputData, inputMetaData),
    [wr1.chelp]: (inputData, inputMetaData) => nominalCommands.help(inputData, inputMetaData),
    [cmd.cworkflowHelp]: (inputData, inputMetaData) => nominalCommands.workflowHelp(inputData, inputMetaData),
    [cmd.ccommandSequencer]: (inputData, inputMetaData) => nominalCommands.commandSequencer(inputData, inputMetaData)

    // ***********************************************
    // Integration Test commands in order
    // ***********************************************

  };
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

export default {
  [fnc.cinitCommandsLibrary]: () => initCommandsLibrary()
};
