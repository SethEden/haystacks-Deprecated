/**
 * @file workflowBroker.js
 * @module workflowBroker
 * @description Holds all fo the low level functions that manage the workflows,
 * system defined workflows, client defined workflows,
 * setting the workflow data and getting the workflow data.
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, fnc, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// brokers.workflowBroker.
const namespacePrefix = wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

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
  let arrayOfWorkflows = D[sys.cCommandWorkflows][wrd.cWorkflows];
  // Code to print all the workflows for debugging.
  // console.log('arrayOfWorkflows is: ' + JSON.stringify(arrayOfWorkflows));
  // for (let i = 0; i < arrayOfWorkflows.length; i++) {
  //   let currentWorkflow = arrayOfWorkflows[i];
  //   // currentWorkflow is:
  //   loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentWorkflowIs + JSON.stringify(currentWorkflow));
  //   if (currentWorkflow[wrd.cName] === workflowName) {
  //     workflowValue = currentWorkflow[wrd.cValue];
  //     // workflowValue is:
  //     loggers.consoleLog(namespacePrefix + functionName, msg.cwokflowValueIs + JSON.stringify(workflowValue));
  //     break;
  //   } // End-if (currentWorkflow[wrd.cName] === workflowName)
  // } // End-for (let i = 0; i < arrayOfWorkflows.length; i++)
  if (arrayOfWorkflows[workflowName] !== undefined) {
    let currentWorkflow = arrayOfWorkflows[workflowName];
    loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentWorkflowIs + JSON.stringify(currentWorkflow));
    if (currentWorkflow[wrd.cName] === workflowName) {
      workflowValue = currentWorkflow[wrd.cValue];
      // workflowValue is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cwokflowValueIs + JSON.stringify(workflowValue));
    }
  }
  // workflowValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowValueIs + workflowValue);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return workflowValue;
};

export default {
  [fnc.cgetWorkflow]: (workflowName) => getWorkflow(workflowName)
};
