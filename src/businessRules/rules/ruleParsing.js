/**
 * @file ruleParsing.js
 * @module ruleParsing
 * @description Contains a function that can be used by the business rules to
 * call business rules internal to business rules.
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/05/03
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import loggers from '../../executrix/loggers.js';
import D from '../../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, fnc, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.ruleParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function doAllRulesExist
 * @description Deterines if al the rules in an array of rule names all
 * exist in the runtime rules data structure or not.
 * @param {array<string>} inputData The array of rule names that shuld be
 * validated for existence in the runtme rules data structure.
 * @param {string} inputMetaData Not used by this business rule.
 * @return {boolean} A True or False vaue to indicate if all the rules in the
 * input array exist or do not all exist.
 * @author Seth Hollingsead
 * @date 2022/05/03
 */
const doAllRulesExist = function(inputData, inputMetaData) {
  let functionName = doAllRulesExist.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${JSON.stringify(inputData)}`);
  let returnData = false;
  let tempValidationResult = true;
  if (inputData && inputData.length > 0) {
    for (let i = 0; i < inputData.length; i++) {
      if (doesRuleExist(inputData[i]) === false) {
        tempValidationResult = false;
      }
    } // End-for (let i = 0; i < inputData.length; i++)
    if (tempValidationResult === true) {
      returnData = true;
    }
  } // End-if (inputData && inputData.length > 0)
  // console.log(`returnData is: ${returnData}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function doesRuleExist
 * @description Determines if a specified named rule exists in the rules system or not.
 * @param {string} inputData The rule name that should be validated as existng in the runtime rules data structure.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A True or False value to indicate if the rule exists or does not exist.
 * @author Seth Hollingsead
 * @date 2022/05/03
 */
const doesRuleExist = function(inputData, inputMetaData) {
  let functionName = doesRuleExist.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${inputData}`);
  // console.log(`inputMetaData is: ${inputMetaData}`);
  let returnData = false;
  if (inputData) {
    if (D[sys.cbusinessRules][inputData]) {
      returnData = true;
    }
  } // End-if (ruleName)
  // console.log(`returnData is: ${returnData}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

/**
 * @function processRulesInternal
 * @descriptionParse the given input Object/String/Integer/Data/Function through a set of business rules,
 * (Some rules do not support chaining); where the rules are defined in the input rules array.
 * @param {string|integer|boolean|object|function} inputData The prmary input data that should be processed by the business rule.
 * @param {string|integer|boolean|object|function} inputMetaData Additional meta-data that should be used when processing the business rule.
 * @param {array<string>} rulesToExecute The name(s) of the rule(s) that should be executed for moding the input data.
 * @return {string|integer|boolean|object|function} A modified data Object/String/Integer/Boolean/Function
 * where the data has been modified based on the input data, input meta-data, and business rule that was executed.
 * @author Seth Hollingsead
 * @date 2022/05/03
 */
const processRulesInternal = function(inputData, inputMetaData, rulesToExecute) {
  let functionName = processRulesInternal.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  loggers.consoleLog(namespacePrefix + functionName, msg.crulesToExecuteIs + JSON.stringify(rulesToExecute));
  let returnData = inputData;
  if (rulesToExecute && doAllRulesExist(rulesToExecute)) {
    for (let rule in rulesToExecute) {
      if (rulesToExecute.hasOwnProperty(rule)) {
        let key = rule;
        // console.log(`key is ${key}`);
        let value = rulesToExecute[key];
        // console.log(`value is: ${value}`);
        returnData = D[sys.cbusinessRules][value](returnData, inputMetaData);
      } // End-if (rulesToExecute.hasOwnProperty(rule))
    } // End-for (let rule in rulesToExecute)
  } else {
    // WARNING: Some rules do not exist:
    console.log(msg.cProcessRulesWarnngSomeRulesDoNotExist + JSON.stringify(rulesToExeute));
  } // End-if (rulesToExecute && doAllRulesExist(rulesToExecute))
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

export default {
  doAllRulesExist,
  doesRuleExist,
  processRulesInternal
};
