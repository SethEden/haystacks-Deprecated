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
  let currentWorkflow = searchWorkflow(D[sys.cCommandWorkflows], workflowName);
  loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentWorkflowIs + JSON.stringify(currentWorkflow));
  // if (currentWorkflow[wrd.cName] === workflowName) {
  //   workflowValue = currentWorkflow[wrd.cValue];
  //   // workflowValue is:
  //   loggers.consoleLog(namespacePrefix + functionName, msg.cwokflowValueIs + JSON.stringify(workflowValue));
  // }
  workflowValue = currentWorkflow;
  // workflowValue is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowValueIs + workflowValue);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return workflowValue;
};

/**
 * @function doesWorkflowExist
 * @description Uses the recursive searchWorkflow function to determine if the workflow can be found in the workflow data structure.
 * @param {string} workflowName The name of the workflow that should be searched for.
 * @return {boolean} True or False to indicate if the workflow already exists or not.
 * @author Seth Hollingsead
 * @date 2022/05/24
 */
function doesWorkflowExist(workflowName) {
  let functionName = doesWorkflowExist.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // workflowName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowNameIs + workflowName);
  let workflowFound = false;
  let workflowSearchResult = searchWorkflow(D[sys.cCommandWorkflows], workflowName);
  if (workflowSearchResult != false) {
    workflowFound = true;
  }
  // workflowFound is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowFoundIs + workflowFound);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return workflowFound;
};

/**
 * @function doesWorkflowExistInWorkflowData
 * @description Searches through a data structure to determine if the specified workflow exists within it.
 * @param {object} workflowData The workflow data structure that should be searched for the specified workflow.
 * @param {string} workflowName The name of the workflow that should be searched for in the workflow data structure.
 * @return {boolean} True or False to indicate if the workflow was found or not.
 */
function doesWorkflowExistInWorkflowData(workflowData, workflowName) {
  let functionName = doesWorkflowExist.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // workflowName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowNameIs + workflowName);
  let workflowFound = false;
  let workflowSearchResult = searchWorkflow(workflowData, workflowName);
  if (workflowSearchResult != false) {
    workflowFound = true;
  }
  // workflowFound is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowFoundIs + workflowFound);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return workflowFound;
};

/**
 * @function searchWorkflow
 * @description This is a recursive function that searches through all the workflow
 * data structures and returns the one workflow data object that matches the input name.
 * @param {object} allWorkflows The workflow data that should be searched recursively for the specified workflow.
 * @param {string} workflowName The name of the workflow that should be found.
 * @return {object} The workflow object that corrosponds to the input workflow name.
 * @author Seth Hollingsead
 * @date 2022/05/24
 */
function searchWorkflow(workflowData, workflowName) {
  let functionName = searchWorkflow.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // workflowData is:
  loggers.consoleLog(namespacePrefix + functionName, 'workflowData is: ' + JSON.stringify(workflowData));
  // workflowName is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowNameIs + workflowName);
  let workflowObject = false;
  if (typeof workflowData === wrd.cobject) {
    for (let workflowEntity in workflowData) {
      // console.log('workflowEntity is: ' + JSON.stringify(workflowEntity));
      // console.log('workflow is: ' + JSON.stringify(workflowData[workflowEntity]));
      if (workflowEntity != workflowName) {
        workflowObject = searchWorkflow(workflowData[workflowEntity], workflowName);
        if (workflowObject != false) {
          break;
        }
      } else {
        workflowObject = workflowData[workflowEntity];
        break;
      }
    } // End-for (workflowEntity in workflowData)
  } // End-if (typeof workflowData === wrd.cobject)
  // workflowObject is:
  loggers.consoleLog(namespacePrefix + functionName, 'workflowObject is: ' + workflowObject);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return workflowObject;
};

/**
 * @function
 * @return {[type]} [description]
 */
function getAllWorkflows() {

};

export default {
  [fnc.cgetWorkflow]: (workflowName) => getWorkflow(workflowName),
  doesWorkflowExist,
  doesWorkflowExistInWorkflowData,
  searchWorkflow
};
