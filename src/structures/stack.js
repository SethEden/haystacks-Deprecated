/**
 * @file stack.js
 * @module stack
 * @description Implements the various functions of a stack data structure,
 * using the specified namespace on the D-data structure.
 * @requires module:ruleBroker
 * @requires module:loggers
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:message.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/01
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

import ruleBroker from '../brokers/ruleBroker.js';
import loggers from '../executrix/loggers.js';
import * as bas from '../constants/basic.constants.js';
import * as biz from '../constants/business.constants.js';
import * as msg from '../constants/message.constants.js';
import * as sys from '../constants/system.constants.js';
import * as wr1 from '../constants/word1.constants.js';
import D from './data.js';
import path from 'path';
let baseFileName = path.basename(module.filename, path.extname(module.filename));
// structures.stack.
let namespacePrefix = wrd.cstructures + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initStack
 * @description Initializes the stack with the provided namespace.
 * @param {string} stackNameSpace The namespace the Stack array should be created under.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/01
 */
function initStack(stackNameSpace) {
  let functionName = initStack.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cstackNameSpaceIs + stackNameSpace);
  if (D[stackNameSpace] === undefined) {
    D[stackNameSpace] = [];
  } else {
    // WARNING: Stack:
    // ALREADY exists!
    console.log(msg.cWarningStackColon + stackNameSpace + msg.cAlreadyExists);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function clearStack
 * @description Clears all contents of the stack so it can start fresh. It does not delete the stack completely!
 * @param {string} stackNameSpace The namespace for the stack that should be cleared.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/01
 */
function clearStack(stackNameSpace) {
  let functionName = clearStack.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cstackNameSpaceIs + stackNameSpace);
  if (D[stackNameSpace] !== undefined) {
    D[stackNameSpace] = [];
  } else {
    // WARNING: Stack:
    // does not exists!
    console.log(msg.cWarningStackColon + stackNameSpace + msg.cdoesNotExist);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function push
 * @description Pushes some data on the stack identified by the namespace input parameter.
 * @param {string} stackNameSpace The namespace of the stack that should be used to push the data onto.
 * @param {string|integer|booelan|object|array} value The data that should be pushed on the stack.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/01
 */
function push(stackNameSpace, value) {
  let functionName = push.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cstackNameSpaceIs + stackNameSpace);
  loggers.consoleLog(namespacePrefix + functionName, msg.cvalueIs + JSON.stringify(value));
  if (D[stackNameSpace] === undefined) {
    D[stackNameSpace].push(value);
  } else {
    // WARNING: Stack:
    // does not exists!
    console.log(msg.cWarningStackColon + stackNameSpace + msg.cdoesNotExist);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function pop
 * @description Pops some data off the stack identified by the namespace input parameter.
 * @param {string} stackNameSpace The namespace of the stack that should be used to pop the data and return it.
 * @return {string|integer|boolean|object|array} Whatever data was stored at the top of the stack.
 * @author Seth Hollingsead
 * @date 2022/02/01
 */
function pop(stackNameSpace) {
  let functionName = pop.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cstackNameSpaceIs + stackNameSpace);
  let returnData;
  if (D[stackNameSpace] !== undefined) {
    if (D[stackNameSpace].length === 0) {
      // WARNING: Stack:
      // is empty!
      returnData = msg.cWarningStackColon + stackNameSpace + bas.cisEmpty;
      console.log(returnData);
    } else {
      returnData = D[stackNamespace].pop();
    }
  } else {
    // WARNING: Stack:
    // does not exists!
    console.log(msg.cWarningStackColon + stackNameSpace + msg.cdoesNotExist);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isEmpty
 * @description Dtermines if the stack specified by the namespace parameter is empty or not empty.
 * @param {string} stackNamespace The namespace of the stack that should be checked if it is empty or not empty.
 * @return {boolean} True or False to indicate if the specified stack is empty or not empty.
 * @author Seth Hollingsead
 * @date 2022/02/01
 */
function isEmpty(stackNamespace) {
  let functionName = isEmpty.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cstackNameSpaceIs + stackNameSpace);
  let returnData = false;
  if (D[stackNamespace] !== undefined) {
    if (D[stackNamespace].length === 0) {
      returnData = true;
    }
  } else {
    // WARNING: Stack:
    // does not exists!
    console.log(msg.cWarningStackColon + stackNameSpace + msg.cdoesNotExist);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function length
 * @description Gets the length of the stack specified by the namespace parameter.
 * @param {string} stackNameSpace The namespace of the stack that should return a length property.
 * @return {integer} A value that represents a count of the number of entities on the specified stack.
 * @author Seth Hollingsead
 * @date 2022/02/01
 */
function length(stackNameSpace) {
  let functionName = length.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cstackNameSpaceIs + stackNameSpace);
  let returnData = -1;
  if (D[stackNameSpace] !== undefined) {
    returnData = D[stackNameSpace].length;
  } else {
    // WARNING: Stack:
    // does not exists!
    console.log(msg.cWarningStackColon + stackNameSpace + msg.cdoesNotExist);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function contains
 * @description Dtermines if the specified stack contains the specified value.
 * @param {string} stackNameSpace The namespace of the stack that should be searched for the specified value.
 * @param {string|integer|object|array} value The value/object that should be searched to see if it exists on the specified stack or does not exist.
 * @return {boolean} True or False to indicate if the value/object exists or does not exist.
 * @author Seth Hollingsead
 * @date 2022/02/01
 */
function contains(stackNameSpace, value) {
  let functionName = contains.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cstackNameSpaceIs + stackNameSpace);
  let returnData = false;
  let containsRule = [];
  containsRule[0] = biz.cdoesArrayContainCharacter;
  if (D[stackNameSpace] !== undefined) {
    returnData = ruleBroker.processRules(value, D[stackNameSpace], containsRule);
  } else {
    // WARNING: Stack:
    // does not exists!
    console.log(msg.cWarningStackColon + stackNameSpace + msg.cdoesNotExist);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function print
 * @description Prints out the stack as specified by the namespace input parameter.
 * @param {string} stackNameSpace The namespace that should be used to print out the contents of the stack on the D-data structure.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/01
 */
function print(stackNameSpace) {
  let functionName = contains.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cstackNameSpaceIs + stackNameSpace);
  if (D[stackNameSpace] !== undefined) {
    // Contents of the stack namespace:
    console.log(msg.cContentsOfTheStackNamespace + stackNameSpace + sys.cSpaceIsColonSpace + JSON.stringify(D[stackNameSpace]));
  } else {
    // WARNING: Stack:
    // does not exists!
    console.log(msg.cWarningStackColon + stackNameSpace + msg.cdoesNotExist);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

module.exports = {
[fnc.cinitStack]: (stackNameSpace) => initStack(stackNameSpace),
[fnc.cclearStack]: (stackNameSpace) => clearStack(stackNameSpace),
[fnc.cpush]: (stackNameSpace, value) => push(stackNameSpace, value),
[fnc.cpop]: (stackNameSpace) => pop(stackNameSpace),
[fnc.cisEmpty]: (stackNamespace) => isEmpty(stackNameSpace),
[fnc.clength]: (stackNameSpace) => length(stackNameSpace),
[fnc.ccontains]: (stackNameSpace, value) => contains(stackNameSpace, value),
[fnc.cprint]: (stackNameSpace) => print(stackNameSpace)
};
