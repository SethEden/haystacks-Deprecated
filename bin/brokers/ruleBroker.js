/**
 * @file ruleBroker.js
 * @module ruleBroker
 * @description Contains all the functions necessary to manage the business rules system.
 * @requires module:rulesLibrary
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import rules from '../businessRules/rulesLibrary.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, fnc, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// brokers.ruleBroker.
const namespacePrefix = wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

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
 * @function doesRuleExist
 * @description Determines if a specified named rule exists in the rules system or not.
 * @param {string} ruleName The rule name that should be validated as existing in the runtime rules data structure.
 * @return {boolean} A True or False value to indicate if the rule exists or does not exist.
 * @author Seth Hollingsead
 * @date 2022/02/24
 */
function doesRuleExist(ruleName) {
  let functionName = doesRuleExist.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`ruleName is: ${ruleName}`);
  let returnData = false;
  if (ruleName) {
    if (D[sys.cbusinessRules][ruleName]) {
      returnData = true;
    }
  } // End-if (ruleName)
  // console.log(`returnData is: ${returnData}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function doAllRulesExist
 * @description Determines if all the rules in an array of rule names all
 * exist in the runtime rules data structure or not.
 * @param {array<string>} ruleArray The array of rule names that should be
 * validated for existence in the runtime rules data structure.
 * @return {boolean} A True or False value to indicate if all the rules in the
 * input array exist or do not all exist.
 * @author Seth Hollingsead
 * @date 2022/02/24
 */
function doAllRulesExist(ruleArray) {
  let functionName = doAllRulesExist.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`ruleArray is: ${JSON.stringify(ruleArray)}`);
  let returnData = false;
  let tempValidationResult = true;
  if (ruleArray && ruleArray.length > 0) {
    for (let i = 0; i < ruleArray.length; i++) {
      if (doesRuleExist(ruleArray[i]) === false) {
        tempValidationResult = false;
      }
    } // End-for (let i = 0; i < ruleArray.length; i++)
    if (tempValidationResult === true) {
      returnData = true;
    }
  } // End-if (ruleArray && ruleArray.length > 0)
  // console.log(`returnData is: ${returnData}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
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
  if (rulesToExecute && doAllRulesExist(rulesToExecute)) {
    for (let rule in rulesToExecute) {
      if (rulesToExecute.hasOwnProperty(rule)) {
        let key = rule;
        // console.log(`key is: ${key}`);
        let value = rulesToExecute[key];
        // console.log(`value is: ${value}`);
        returnData = D[sys.cbusinessRules][value](returnData, inputMetaData);
      } // End-if (rulesToExecute.hasOwnProperty(rule))
    } // End-for (let rule in rulesToExecute)
  } else {
    // WARNING: Some rules do not exist:
    console.log(msg.cProcessRulesWarningSomeRulesDoNotExist + JSON.stringify(rulesToExecute));
  } // End-if (rulesToExecute && doAllRulesExist(rulesToExecute))
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

export default {
  [fnc.cbootStrapBusinessRules]: () => bootStrapBusinessRules(),
  [fnc.caddClientRules]: (clientRules) => addClientRules(clientRules),
  [fnc.cdoesRuleExist]: (ruleName) => doesRuleExist(ruleName),
  [fnc.cdoAllRulesExist]: (ruleArray) => doAllRulesExist(ruleArray),
  [fnc.cprocessRules]: (inputData, inputMetaData, rulesToExecute) => processRules(inputData, inputMetaData, rulesToExecute)
};
