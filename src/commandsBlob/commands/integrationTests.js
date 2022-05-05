/**
 * @file integrationTests.js
 * @module integrationTests
 * @description Contains all of the commands to test various components of the system.
 * @requires module:ruleBroker
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/03/25
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleBroker from '../../brokers/ruleBroker.js';
import configurator from '../../executrix/configurator.js';
import loggers from '../../executrix/loggers.js';
import D from '../../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// commandsBlob.commands.integrationTests.
const namespacePrefix = sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + baseFileName + bas.cDot;

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
  if (configurator.getConfigurationSetting(wrd.csystem, cfg.cenableConstantsValidation) === true) {
    // Get the array of keys and values for all the constants that need to be validated.
    let validationArray = D[sys.cConstantsValidationData][sys.cConstantsFilePaths]; // This will return an object with all of the key-value pair attributes we need.
    let phase1FinalResult = true;
    let phase2FinalResult = true;
    let phase1Results = {};
    let phase2Results = {};
    let phase1ResultsKeysArray = [];
    let phase2ResultsKeysArray = [];
    let rulesPhase1 = [biz.cvalidateConstantsDataValidation];
    let rulesPhase2 = [biz.cvalidateConstantsDataValues];

    // Phase1 Constants Validation
    // BEGIN Phase 1 Constants Validation
    loggers.consoleLog(namespacePrefix + functionName, msg.cBeginPhase1ConstantsValidation);
    // First scan through each file and vaidate that the constants defined in the constants code file are also contained in the validation file.
    for (let key1 in validationArray) {
      let path = validationArray[key1];
      phase1Results[key1] = ruleBroker.processRules(path, key1, rulesPhase1);
    }
    phase1ResultsKeysArray = phase1Results.keys;
    // END Phase 1 Constants Validation
    loggers.consoleLog(namespacePrefix + functionName, msg.cEndPhase1ConstantsValidation);

    // Phase 2 Constants Validation
    // BEGIN Phase 2 Constants Validation
    loggers.consoleLog(namespacePrefix + functionName, msg.cBeginPhase2ConstantsValidation);
    // Now verify that the values of the constants are what they are expected to be by using the constants validation data to validate.
    for (let key2 in validationArray) {
      phase2Results[key2] = ruleBroker.processRules(key2, '', rulesPhase2);
    }
    phase2ResultsKeysArray = phase2Results.keys;
    // END Phase 2 Constants Vaidation
    loggers.consoleLog(namespacePrefix + functionName, msg.cEndPhase2ConstantsValidation);

    for (let key3 in phase1Results) {
      loggers.constantsValidationSummaryLog(D[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][key3], phase1Results[key3]);
      if (phase1Results[key3] === false) {
        phase1FinalResult = false;
      }
    } // End-for (let key3 in phase1ResultsArray)

    for (let key4 in phase2Results) {
      loggers.constantsValidationSummaryLog(D[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][key4], phase2Results[key4]);
      if (phase2Results[key4] === false) {
        phase2FinalResult = false;
      }
    }

    if (phase1FinalResult === true && phase2FinalResult === true) {
      configurator.setConfigurationSetting(wrd.csystem, cfg.cpassAllConstantsValidation, true);
    } else {
      configurator.setConfigurationSetting(wrd.csystem, cfg.cpassAllConstantsValidation, false);
    }
  } else {
    // The enableConstantsValidation flag is disabled. Enable this flag in the configuration settings to activate this command.
    console.log(msg.ccconstantsGeneratorMessage3 + msg.cconstantsGeneratorMessage4);
    configurator.setConfigurationSetting(wrd.csystem, cfg.cpassAllConstantsValidation, false);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function validateCommandAliases
 * @description Validates all command aliases have no duplicates within a command, but also between commands.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/03/30
 */
const validateCommandAliases = function(inputData, inputMetaData) {
  let functionName = validateCommandAliases.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let allCommandAliases = D[sys.cCommandsAliases][wrd.cCommands];
  let passedAllCommandAliasesDuplicateCheck = true;
  let rules = [biz.ccountDuplicateCommandAliases];
loop1:
  for (let key1 in allCommandAliases) {
    // key1 is:
    loggers.consoleLog(namespacePrefix + functionName, msg.ckey1Is + key1);
    let currentCommand = allCommandAliases[key1];
    // currentCommand is:
    loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentCommandIs + JSON.stringify(currentCommand));
    let aliasList = currentCommand[wrd.cAliases];
    // aliasList is:
    loggers.consoleLog(namespacePrefix + functionName, msg.caliasListIs + aliasList);
    let arrayOfAliases = aliasList.split(bas.cComa);
loop2:
    for (let j = 0; j < arrayOfAliases.length; j++) {
      // BEGIN j-th loop:
      loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_jthLoop + j);
      let currentAlias = arrayOfAliases[j];
      // currentAlias is:
      loggers.consoleLog(namespacePrefix + functionName, msg.ccurrentAliasIs + currentAlias);
      let duplicateAliasCount = ruleBroker.processRules(currentAlias, allCommandAliases, rules);
      if (duplicateAliasCount > 1) {
        passedAllCommandAliasesDuplicateCheck = false;
      }
      // END j-th loop:
      loggers.consoleLog(namespacePrefix + functionName, msg.cEND_jthLoop + j);
    } // End-for (let j = 0; j < arrayOfAliases.length; j++)
  } // End-for (let i = 0; i < allCommandAliases.length; i++)
  if (passedAllCommandAliasesDuplicateCheck === true) {
    // PASSED: All duplicate command aliases validation tests!
    console.log(msg.cvalidateCommandAliasesMessage1);
  }
  configurator.setConfigurationSetting(wrd.csystem, cfg.cpassedAllCommandAliasesDuplicateChecks, passedAllCommandAliasesDuplicateCheck);
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

export default {
  validateConstants,
  validateCommandAliases
}
