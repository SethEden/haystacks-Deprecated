/**
 * @file commandsLibrary.js
 * @module commandsLibrary
 * @description Contains all of the ssytem defined commands as a map between function names and function calls.
 * @requires module:nominal
 * @requires module:integrationTests
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import integrationTestCommands from './commands/integrationTests.js';
import nominalCommands from './commands/nominal.js';
// import integrationTests from './commands/integrationTests.js';
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, cmd, fnc, msg, sys, wrd} = hayConst;
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
  D[wrd.cCommands] = {};
  D[wrd.cCommands] = {
    // Commands
    // ***********************************************
    // Nominal commands in order
    // ***********************************************
    [cmd.cechoCommand]: (inputData, inputMetaData) => nominalCommands.echoCommand(inputData, inputMetaData),
    [wrd.cexit]: (inputData, inputMetData) => nominalCommands.exit(inputData, inputMetData),
    [wrd.cversion]: (inputData, inputMetaData) => nominalCommands.version(inputData, inputMetaData),
    [wrd.cabout]: (inputData, inputMetaData) => nominalCommands.about(inputData, inputMetaData),
    [wrd.cname]: (inputData, inputMetaData) => nominalCommands.name(inputData, inputMetaData),
    [cmd.cclearScreen]: (inputData, inputMetaData) => nominalCommands.clearScreen(inputData, inputMetaData),
    [wrd.chelp]: (inputData, inputMetaData) => nominalCommands.help(inputData, inputMetaData),
    [cmd.cworkflowHelp]: (inputData, inputMetaData) => nominalCommands.workflowHelp(inputData, inputMetaData),
    [cmd.ccommandSequencer]: (inputData, inputMetaData) => nominalCommands.commandSequencer(inputData, inputMetaData),
    [wrd.cworkflow]: (inputData, inputMetaData) => nominalCommands.workflow(inputData, inputMetaData),
    [cmd.cprintDataHive]: (inputData, inputMetaData) => nominalCommands.printDataHive(inputData, inputMetaData),
    [cmd.cprintDataHiveAttributes]: (inputData, inputMetaData) => nominalCommands.printDataHiveAttributes(inputData,inputMetaData),
    [cmd.cclearDataStorage]: (inputData, inputMetaData) => nominalCommands.clearDataStorage(inputData, inputMetaData),
    [cmd.cbusinessRule]: (inputData, inputMetaData) => nominalCommands.businessRule(inputData, inputMetaData),
    [cmd.ccommandGenerator]: (inputData, inputMetaData) => nominalCommands.commandGenerator(inputData, inputMetaData),
    [cmd.ccommandAliasGenerator]: (inputData, inputMetaData) => nominalCommands.commandAliasGenerator(inputData, inputMetaData),
    [cmd.cconstantsGenerator]: (inputData, inputMetaData) => nominalCommands.constantsGenerator(inputData, inputMetaData),
    [cmd.cconstantsGeneratorList]: (inputData, inputMetaData) => nominalCommands.constantsGeneratorList(inputData, inputMetaData),
    [cmd.cconstantsPatternRecognizer]: (inputData, inputMetaData) => nominalCommands.constantsPatternRecognizer(inputData, inputMetaData),
    [cmd.cbusinessRulesMetrics]: (inputData, inputMetaData) => nominalCommands.businessRulesMetrics(inputData, inputMetaData),
    [cmd.ccommandMetrics]: (inputData, inputMetaData) => nominalCommands.commandMetrics(inputData, inputMetaData),
    [cmd.csaveConfiguration]: (inputData, inputMetaData) => nominalCommands.saveConfiguration(inputData, inputMetaData),
    [cmd.cconvertColors]: (inputData, inputMetaData) => nominalCommands.convertColors(inputData, inputMetaData),

    // ***********************************************
    // Integration Test commands in order
    // ***********************************************
    [cmd.cvalidateConstants]: (inputData, inputMetaData) => integrationTestCommands.validateConstants(inputData, inputMetaData),
    [cmd.cvalidateCommandAliases]: (inputData, inputMetaData) => integrationTestCommands.validateCommandAliases(inputData, inputMetaData)
  };
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

export default {
  [fnc.cinitCommandsLibrary]: () => initCommandsLibrary()
};
