/**
 * @file chiefWorkflow.js
 * @module chiefWorkflow
 * @description Holds all of the functions that manage the workflows,
 * system defined workflows, cient defined workflows,
 * setting the workflow data and getting the workflow data.
 * @requires module:chiefData
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import chiefData from './chiefData.js';
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, fnc, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// controllers.chiefWorkflow.
const namespacePrefix = wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

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
  loggers.consoleLog(namespacePrefix + functionName, msg.callCommandWorkflowsDataIs + JSON.stringify(allCommandWorkflowsData));
  if (D[sys.cCommandWorkflows] === undefined) { // Make sure we only do this if it's undefined, otherwise we ight wipe out previously loaded data.
    D[sys.cCommandWorkflows] = {};
    D[sys.cCommandWorkflows] = allCommandWorkflowsData[sys.cCommandWorkflows];
  } else {
    // for (let i = 0; i < allCommandWorkflowsData[sys.cCommandWorkflows][wrd.cWorkflows].length; i++) {
      // D[sys.cCommandWorkflows][wrd.cWorkflows].push(allCommandWorkflowsData[sys.cCommandWorkflows][wrd.cWorkflows][i]);
      Object.assign(D[sys.cCommandWorkflows][wrd.cWorkflows], allCommandWorkflowsData[sys.cCommandWorkflows][wrd.cWorkflows]);
    // }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

export default {
  [fnc.cloadCommandWorkflowsFromPath]: (commandWorkflowFilePathConfigurationName) => loadCommandWorkflowsFromPath(commandWorkflowFilePathConfigurationName)
};
