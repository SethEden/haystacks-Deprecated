/**
 * @file chiefCommander.js
 * @module chiefCommander
 * @description Holds all of the functions that manage the command queue, and allows commands to be enqueued and dequeued from the command queue.
 * Also executes the command queue ultimately by making calls to the commandBroker to execute individual commands.
 * @requires module:commandBroker
 * @requires module:chiefData
 * @requires module:loggers
 * @requires module:data
 * @requires module:queue
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/01
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import commandBroker from '../brokers/commandBroker.js';
import chiefData from '../controllers/chiefData.js';
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
import queue from '../structures/queue.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, fnc, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// controllers.chiefCommander.
const namespacePrefix = wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function bootStrapCommands
 * @description Initializes all of the commands and gets them added to the D-data structure.
 * @return {void}
 * @author Seth Holingsead
 * @date 2022/02/01
 */
function bootStrapCommands() {
  let functionName = bootStrapCommands.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  commandBroker.bootStrapCommands();
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function addClientCommands
 * @description This is a wrapper function for calling the commandBroker.addClientCommands.
 * @param {object} clientCommands A map of client defined command names and client defined command function calls.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/17
 */
function addClientCommands(clientCommands) {
  let functionName = addClientCommands.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  commandBroker.addClientCommands(clientCommands);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function loadCommandAliasesFromPath
 * @description Loads the command aliases XML file that is specified by the input.
 * The data is automatically saved on the D-data structure.
 * @param {string} commandAliasesFilePathConfigurationName The path and file name to the XML file that contains the command aliases definitions.
 * (Could be system command aliases or client command aliases)
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/02
 */
function loadCommandAliasesFromPath(commandAliasesFilePathConfigurationName) {
  let functionName = loadCommandAliasesFromPath.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // commandAliasesFilePathConfigurationName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandAliasesFilePathConfigurationNameIs + commandAliasesFilePathConfigurationName);
  let allCommandAliasesData = {};
  allCommandAliasesData = chiefData.setupAllXmlData(commandAliasesFilePathConfigurationName, sys.cCommandsAliases);
  // allCommandAliasesData is:
  loggers.consoleLog(namespacePrefix + functionName, msg.callCommandAliasesDataIs + JSON.stringify(allCommandAliasesData));
  if (D[sys.cCommandsAliases] === undefined) { // Make sure we only do this if it's undefined, otherwise we might wipe out previously loaded data.
    D[sys.cCommandsAliases] = {};
    D[sys.cCommandsAliases] = allCommandAliasesData[sys.cCommandsAliases];
  } else {
    let commandKeys = Object.keys(allCommandAliasesData[sys.cCommandsAliases][wrd.cCommands]);
    for (let i = 0; i < commandKeys.length; i++) {
      D[sys.cCommandsAliases][wrd.cCommands][commandKeys[i]] = allCommandAliasesData[sys.cCommandsAliases][wrd.cCommands][commandKeys[i]];
    } // End-for (let i = 0; i < allCommandAliasesData[sys.cCommandsAliases][wrd.cCommand].length; i++)
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function enqueueCommand
 * @description Determines if the command queue has been setup or not,
 * if not then it is initialized, and the command is added to the command queue.
 * @param {string} command The command that should be added  to the command queue.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/02
 */
function enqueueCommand(command) {
  let functionName = enqueueCommand.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // command is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandIs + command);
  if (D[sys.cCommandQueue] === undefined) {
    queue.initQueue(sys.cCommandQueue);
  }
  queue.enqueue(sys.cCommandQueue, command);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function isCommandQueueEmpty
 * @description Deterines if the command queue is empty or not empty.
 * @return {boolean} A True or False value to indicate if the command queue is empty or not empty.
 * @author Seth Hollingsead
 * @date 2022/02/02
 */
function isCommandQueueEmpty() {
  let functionName = isCommandQueueEmpty.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = queue.isEmpty(sys.cCommandQueue);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function processCommandQueue
 * @description Pulls the command from the front of the command queue and executes it using the commnad broker.
 * @return {boolean} A True or False value to indicate if the applicatino should exit or not exit.
 * @author Seth Hollingsead
 * @date 2022/02/02
 */
function processCommandQueue() {
  let functionName = processCommandQueue.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let commandToExecute;
  let returnData;
  commandToExecute = queue.dequeue(sys.cCommandQueue);
  // commandToExecute is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandToExecuteIs + commandToExecute);
  returnData = commandBroker.executeCommand(commandToExecute);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

export default {
  [fnc.cbootStrapCommands]: () => bootStrapCommands(),
  [fnc.caddClientCommands]: (clientCommands) => addClientCommands(clientCommands),
  [fnc.cloadCommandAliasesFromPath]: (commandAliasesFilePathConfigurationName) => loadCommandAliasesFromPath(commandAliasesFilePathConfigurationName),
  [fnc.cenqueueCommand]: (command) => enqueueCommand(command),
  [fnc.cisCommandQueueEmpty]: () => isCommandQueueEmpty(),
  [fnc.cprocessCommandQueue]: () => processCommandQueue()
};