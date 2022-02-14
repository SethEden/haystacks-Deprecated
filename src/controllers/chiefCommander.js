/**
 * @file chiefCommander.js
 * @module chiefCommander
 * @description Holds all of the functions that manage the command queue, and allows commands to be enqueued and dequeued from the command queue.
 * Also executes the command queue ultimately by making calls to the commandBroker to execute individual commands.
 * @requires module:chiefData
 * @requires module:commandBroker
 * @requires module:queue
 * @requires module:loggers
 * @requires module:basic.constants
 * @requires module:word1.constants
 * @requires module:system.constants
 * @requires module:message.constants
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/01
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

let chiefData = require('../controllers/chiefData.js');
let commandBroker = require('../brokers/commandBroker.js');
let queue = require('../structures/queue.js');
let loggers = require('../executrix/loggers.js');
let bas = require('../constants/basic.constants.js');
let wr1 = require('../constants/word1.constants.js');
let sys = require('../constants/system.constants.js');
let msg = require('../constants/message.constants.js');
let D = require('../structures/data.js');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
// controllers.chiefCommander.
let namespacePrefix = wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

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
  commandBroker.bootSrapCommands();
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
  if (D[sys.cCommandsAliases] === undefined) { // Make sure we only do this if it's undefined, otherwise we might wipe out previously loaded data.
    D[sys.cCommandsAliases] = {};
    D[sys.cCommandsAliases] = allCommandAliasesData[sys.cCommandsAliases];
  } else {
    for (let i = 0; i < allCommandAliasesData[sys.cCommandsAliases][wr1.cCommand].length; i++) {
      D[sys.cCommandsAliases][wr1.cCommand].push(allCommandAliasesData[sys.cCommandsAliases][wr1.cCommand][i]);
    } // End-for (let i = 0; i < allCommandAliasesData[sys.cCommandsAliases][wr1.cCommand].length; i++)
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
  loggers.consoleLog(namespacePrefix + functionName, msg.returnDataIs + returnData);
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
  loggers.consoleLog(namespacePrefix + functionName, msg.returnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

module.exports = {
  [fnc.cbootStrapCommands]: () => bootStrapCommands(),
  [fnc.cloadCommandAliasesFromPath]: (commandAliasesFilePathConfigurationName) => loadCommandAliasesFromPath(commandAliasesFilePathConfigurationName),
  [fnc.cenqueueCommand]: (command) => enqueueCommand(command),
  [fnc.cisCommandQueueEmpty]: () => isCommandQueueEmpty(),
  [fnc.cprocessCommandQueue]: () => processCommandQueue(),
};
