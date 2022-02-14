/**
 * @file ruleBroker.js
 * @module ruleBroker
 * @description Contains all the functions necessary to manage the business rules system.
 * @requires module:basic.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @requires module:rulesLibrary
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

let bas = require('../constants/basic.constants.js');
let fnc = require('../constants/function.constants.js');
let msg = require('../constants/message.constants.js');
let sys = require('../constants/system.constants.js');
let wr1 = require('../constants/word1.constants.js');
let rules = require('../businessRules/rulesLibrary.js');
let D = require('../structures/data.js');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = wr1.cbrokers + bas.cDot + baseFileName + bas.cDot;

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
 */
function addClientRules(clientRules) {
  let functionName = bootStrapBusinessRules.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  Object.assign(D[sys.cbusinessRules], clientRules);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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

module.exports = {
  [fnc.cbootStrapBusinessRules]: () => bootStrapBusinessRules(),
  [fnc.caddClientRules]: (clientRules) => addClientRules(clientRules),
  [fnc.cprocessRules]: (inputData, inputMetaData, rulesToExecute) => processRules(inputData, inputMetaData, rulesToExecute)
};
