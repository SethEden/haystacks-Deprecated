/**
 * @file ruleBroker.js
 * @module ruleBroker
 * @description Contains all the functions necessary to manage the business rules system.
 * @requires module:rulesLibrary
 * @requires module:basic.constants
 * @requires module:function.constants
 * @requires module:message.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import rules from '../businessRules/rulesLibrary.js';
import * as bas from '../constants/basic.constants.js';
import * as fnc from '../constants/function.constants.js';
import * as msg from '../constants/message.constants.js';
import * as sys from '../constants/system.constants.js';
import * as wr1 from '../constants/word1.constants.js';
import D from '../structures/data.js';
// External imports
import path from 'path';

const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// brokers.ruleBroker.
const namespacePrefix = wr1.cbrokers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function bootStrapBusinessRules
 * @description Captures all of the business rule string-to-function call map data in
 * the rulesLibrary and migrates that data to the D-data structure.
 * This is important now because we are going to allow the client to define their own
 * business rules seperate from the system defined business rules.
 * So we need a way to merge all client defined and system defined business rules into one location.
 * Then the rule broker will execute business rules from the D-data structure and not the rules library per-say.
 * This will allow the system to expand much more dynamically and even be user-defined & flexible to client needs.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Cannot use the loggers here, because dependency data will have never been loaded.
 */
function bootStrapBusinessRules() {
  let functionName = bootStrapBusinessRules.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  rules.initRulesLibrary();
  // console.log(`END ${namespacePrefix}${functionName} function`);
};

/**
 * @function addClientRules
 * @description Merges client defined business rules with the system defined business rules.
 * @param {array<object>} clientRules The cient rules that should be merged with the system rules.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function addClientRules(clientRules) {
  let functionName = bootStrapBusinessRules.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  Object.assign(D[sys.cbusinessRules], clientRules);
  // console.log(`END ${namespacePrefix}${functionName} function`);
};

/**
 * @function processRules
 * @description Parse the given input Object/String/Integer/Data/Function through a set of business rules,
 * (Some rules do not support chaining); where the rules are defined in the input rules array.
 * @param {string|integer|boolean|object|function} inputData The primary input data that should be processed by the business rule.
 * @param {string|integer|boolean|object|function} inputMetaData Additional meta-data that should be used when processing the business rule.
 * @param {array<string>} rulesToExecute The name(s) of the rule(s) that should be executed for modding the input data.
 * @return {string|integer|boolean|object|function} A modified data Object/String/Integer/Boolean/Function
 * where the data has been modified based on the input data, input meta-data, and business rule that was executed.
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function processRules(inputData, inputMetaData, rulesToExecute) {
  let functionName = processRules.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  // console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
  // console.log(`rulesToExecute is: ${JSON.stringify(rulesToExecute)}`);
  let returnData = inputData;
  if (rulesToExecute) {
    for (let rule in rulesToExecute) {
      if (rulesToExecute.hasOwnProperty(rule)) {
        let key = rule;
        // console.log(`key is: ${key}`);
        let value = rulesToExecute[key];
        // console.log(`value is: ${value}`);
        returnData = D[sys.cbusinessRules][value](returnData, inputMetaData);
      }
    }
  }
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

export default {
  [fnc.cbootStrapBusinessRules]: () => bootStrapBusinessRules(),
  [fnc.caddClientRules]: (clientRules) => addClientRules(clientRules),
  [fnc.cprocessRules]: (inputData, inputMetaData, rulesToExecute) => processRules(inputData, inputMetaData, rulesToExecute)
};
