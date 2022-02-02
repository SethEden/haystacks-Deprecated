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

let chiefData = require('../controllers/chiefData');
let commandBroker = require('../brokers/commandBroker');
let queue = require('../structures/queue');
let loggers = require('../executrix/loggers');
let bas = require('../constants/basic.constants');
let wr1 = require('../constants/word1.constants');
let sys = require('../constants/system.constants');
let msg = require('../constants/message.constants');
let D = require('../structures/data');
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
