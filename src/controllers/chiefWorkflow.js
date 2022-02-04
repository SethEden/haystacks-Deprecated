/**
 * @file chiefWorkflow.js
 * @module chiefWorkflow
 * @description Holds all of the functions that manage the workflows,
 * system defined workflows, cient defined workflows,
 * setting the workflow data and getting the workflow data.
 * @requires module:chiefData
 * @requires module:loggers
 * @requires module:basic.constants
 * @requires module:word1.constants
 * @requires module:system.constants
 * @requires module:message.constants
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

let chiefData = require('./chiefData');
let loggers = require('../executrix/loggers');
let bas = require('../constants/basic.constants');
let wr1 = require('../constants/word1.constants');
let sys = require('../constants/system.constants');
let msg = require('../constants/message.constants');
let D = require('../structures/data');
let path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
// controllers.chiefWorkflow.
var namespacePrefix = wr1.ccontrollers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function loadCommandWorkflowsFromPath
 * @description Loads the command workflows XML file that is specified by the input.
 * @param {string} commandWorkflowFilePathConfigurationName The path and file name to the XML that contains the command workflows definitions.
 * (Could be system defined command workflows or client command defined command workflows)
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
function loadCommandWorkflowsFromPath(commandWorkflowFilePathConfigurationName) {
  let functionName = loadCommandWorkflowsFromPath.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // commandWorkflowFilePathConfigurationName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandWorkflowFilePathConfigurationNameIs + commandWorkflowFilePathConfigurationName);
  let allCommandWorkflowsData = {};
  allCommandWorkflowsData = chiefData.setupAllXmlData(commandWorkflowFilePathConfigurationName, sys.cCommandWorkflows);
  if (D[sys.cCommandWorkflows] === undefined) { // Make sure we only do this if it's undefined, otherwise we ight wipe out previously loaded data.
    D[sys.cCommandWorkflows] = {};
    D[sys.cCommandWorkflows] = allCommandWorkflowsData[sys.cCommandWorkflows];
  } else {
    for (let i = 0; i < allCommandWorkflowsData[sys.cCommandWorkflows][wr1.cWorkflow].length; i++) {
      D[sys.cCommandWorkflows][wr1.cWorkflow].push(allCommandWorkflowsData[sys.cCommandWorkflows][wr1.cWorkflow][i]);
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

module.exports = {
  [fnc.cloadCommandWorkflowsFromPath]: (commandWorkflowFilePathConfigurationName) => loadCommandWorkflowsFromPath(commandWorkflowFilePathConfigurationName)
};
