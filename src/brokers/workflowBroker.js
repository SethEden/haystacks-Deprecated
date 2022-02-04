/**
 * @file workflowBroker.js
 * @module workflowBroker
 * @description Holds all fo the low level functions that manage the workflows,
 * system defined workflows, client defined workflows,
 * setting the workflow data and getting the workflow data.
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

let loggers = require('../executrix/loggers');
let bas = require('../constants/basic.constants');
let wr1 = require('../constants/word1.constants');
let sys = require('../constants/system.constants');
let msg = require('../constants/message.constants');
let D = require('../structures/data');
let path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
// executrix.workflowBroker.
var namespacePrefix = wr1.cexecutrix + bas.cDot + baseFileName + bas.cDot;

/**
 * @function getWorkflow
 * @description Given the name of the workflow that is being requested,
 * get that workflow from the D-data structure workflows data hive.
 * @param {string} workflowName The name of the workflow we should get workflow data for.
 * @return {string|boolean} The workflow value, which ideally would be a list of commands and command parameters.
 * False if no workflow by the specified name was found.
 * @author Seth Hollingsead
 * @date 2022/02/04
 */
function getWorkflow(workflowName) {
  let functionName = getWorkflow.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // workflowName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowNameIs + workflowName);
  let workflowValue = false;
  let arrayOfWorkflows = D[sys.cCommandWorkflows][wr1.cWorkflow];
  for (let i = 0; i < arrayOfWorkflows.length; i++) {
    let currentWorkflow = arrayOfWorkflows[i];
    // currentWorkflow is:
    loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentWorkflowIs + JSON.stringify(currentWorkflow));
    if (currentWorkflow[wr1.cName] === workflowName) {
      workflowValue = currentWorkflow[wr1.cValue];
      // workflowValue is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cwokflowValueIs + JSON.stringify(workflowValue));
      break;
    } // End-if (currentWorkflow[wr1.cName] === workflowName)
  } // End-for (let i = 0; i < arrayOfWorkflows.length; i++)
  // workflowValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowValueIs + workflowValue);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return workflowValue;
};

module.exports = {
  [fnc.cgetWorkflow]: (workflowName) => getWorkflow(workflowName)
};
