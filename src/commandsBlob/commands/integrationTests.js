/**
 * @file integrationTests.js
 * @module integrationTests
 * @description Contains all of the commands to test various components of the system.
 * @requires module:ruleBroker
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:message.constants
 * @requires module:system.constants
 * @requires module:word1.constants
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/03/25
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleBroker from '../../brokers/ruleBroker.js';
import * as bas from '../../constants/basic.constants.js';
import * as biz from '../../constants/business.constants.js';
import * as msg from '../../constants/message.constants.js';
import * as sys from '../../constants/system.constants.js';
import * as wr1 from '../../constants/word1.constants.js';
import loggers from '../../executrix/loggers.js';
import D from '../../structures/data.js';

// External imports
import path from 'path';

const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// commandsBlob.commands.integrationTests.
const namespacePrefix = sys.ccommandsBlob + bas.cDot + wr1.ccommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function validateConstants
 * @description Validates all constants with a 2-phase verification process.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/03/25
 */
const validateConstants = function(inputData, inputMetaData) {
  let functionName = validateConstants.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  // Get the array of keys and values for all the constants that need to be validated.
  let validationArray = D[sys.cConstantsValidationData][sys.cConstantsFilePaths]; // This will return an object with all of the key-value pair attributes we need.
  let phase1FinalResult = true;
  let phase2FinalResult = true;
  let phase1ResultsArray = [];
  let phase2ResultsArray = [];
  let rulesPhase1 = [];
  let rulesPhase2 = [];
  rulesPhase1[0] = biz.cvalidateConstantsDataValidation;
  rulesPhase2[0] = biz.cvalidateConstantsDataValues;

  // Phase1 Constants Validation
  // BEGIN Phase 1 Constants Validation
  loggers.consoleLog(namespacePrefix + functionName, msg.cBeginPhase1ConstantsValidation);
  // First scan through each file and vaidate that the constants defined in the constants code file are also contained in the validation file.
  for (let key1 in validationArray) {
    let path = validationArray[key1];
    phase1ResultsArray[key1] = ruleBroker.processRules(path, key1, rulesPhase1);
  }
  // END Phase 1 Constants Validation
  loggers.consoleLog(namespacePrefix + functionName, msg.cEndPhase1ConstantsValidation);

  // Phase 2 Constants Validation
  // BEGIN Phase 2 Constants Validation
  loggers.consoleLog(namespacePrefix + functionName, msg.cBeginPhase2ConstantsValidation);
  // Now verify that the values of the constants are what they are expected to be by using the constants validation data to validate.
  for (let key2 in validationArray) {
    phase2ResultsArray[key2] = ruleBroker.processRules(key2, '', rulesPhase2);
  }
  // END Phase 2 Constants Vaidation
  loggers.consoleLog(namespacePrefix + functionName, msg.cEndPhase2ConstantsValidation);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

export default {
  validateConstants
}
