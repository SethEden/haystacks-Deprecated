/**
 * @file constantStringParsing.js
 * @module constantStringParsing
 * @description Contains all system defined business rules for parsing strings related to constants.
 * @requires module:configurator
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires {@link https://www.npmjs.com/package/n-readlines|n-readlines}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/25
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import configurator from '../../../executrix/configurator.js';
import loggers from '../../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import chalk from 'chalk';
import lineByLine from 'n-readlines';
import path from 'path';

const {bas, clr, cfg, gen, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.stringParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function validateConstantsDataValidation
 * @description Validates that validation data to ensure that all the contents of the
 * constants validation data matches with the actual constants definitions.
 * @param {string} inputData the path of the constants file that should be validated.
 * @param {string} inputMetaData The name of the data hive that contains the appropriate matching constants validation data.
 * @return {boolean} True or False to indicate if all of the contents of the constants are fully validated or not.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const validateConstantsDataValidation = function(inputData, inputMetaData) {
  let functionName = validateConstantsDataValidation.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  let foundAFailure = false;
  if (inputData && inputMetaData) {
    const liner = new lineByLine(inputData);
    let line;
    let colorizeLogsEnabled = configurator.getConfigurationSetting(wrd.csystem, cfg.cenableColorizedConsoleLogs);

    while (line = liner.next()) {
      // constants line is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsLineIs + line.toString(gen.cascii));
      let lineInCode = line.toString(gen.cascii);
      let foundConstant = false;
      // TODO: This logic will need to change!!
      if (lineInCode.includes(sys.cexportconst) === true) {
        let lineArray = lineInCode.split(bas.cSpace);
        // lineArray[2] is
        loggers.consoleLog(namespacePrefix + functionName, msg.clineArray2Is + lineArray[2]);
        foundConstant = validateConstantsDataValidationLineItemName(lineArray[2], inputMetaData);
        let qualifiedConstantsFilename = getFileNameFromPath(inputData, '');
        if (foundConstant === true) {
          if (configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualConstantsValidationPassMessages) === true) {
            let passMessage = wrd.cPASS + bas.cColon + bas.cSpace + lineArray[2] + bas.cSpace + wrd.cPASS;
            if (colorizeLogsEnabled === true) {
              passMessage = chalk.rgb(0,0,0)(passMessage);
              passMessage = chalk.bgRgb(0,255,0)(passMessage);
            }
            console.log(qualifiedConstantsFilename + bas.cColon + bas.cSpace + passMessage)
          } // End-if (configurator.getConfigurationSetting(wrd.csystem, cfg.cDisplayIndividualConstantsValidationPassMessages) === true)
        } else { // Else-clause if (foundConstant === true)
          if (configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualCosntantsValidationFailMessages) === true) {
            let failMessage = wrd.cFAIL + bas.cColon + bas.cSpace + lineArray[2] + bas.cSpace + wrd.cFAIL;
            if (colorizeLogsEnabled === true) {
              failMessage = chalk.rgb(0,0,0)(failMessage);
              failMessage = chalk.bgRgb(255,0,0)(failMessage);
            }
            let qualifiedConstantsPrefix = determineConstantsContextQualifiedPrefix(qualifiedConstantsFilename, '');
            console.log(qualifiedConstantsFilename + bas.cColon + bas.cSpace + failMessage);
            // loggers.consoleLog(namespacePrefix + functionName, wrd.cFAIL + bas.cSpace + lineArray[2] + bas.cSpace + wrd.cFAIL);
            let suggestedLineOfCode = determineSuggestedConstantsValidationLineOfCode(lineArray[2], qualifiedConstantsPrefix);
            if (suggestedLineOfCode !== '') {
              if (colorizeLogsEnabled === true) {
                suggestedLineOfCode = chalk.rgb(0,0,0)(suggestedLineOfCode);
                suggestedLineOfCode = chalk.bgRgb(255,0,0)(suggestedLineOfCode);
              }
              // Suggested line of code is:
              console.log(msg.cSuggestedLineOfCodeIs + suggestedLineOfCode);
            } // End-if (suggestedLineOfCode !== '')
          } // End-if (configurator.getConfigurationSetting(wrd.csystem, cfg.cDisplayIndividualCosntantsValidationFailMessages) === true)
          foundAFailure = true;
        }
      } // End-if (lineInCode.includes(sys.cexportconst) === true)
    } // End-while (line = liner.next())
  } // End-if (inputData && inputMetaData)
  if (foundAFailure === false) {
    returnData = true;
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function determineConstantsContextQualifiedPrefix
 * @description Takes the filename to a constants file and determines
 * The standard prefix that should be used in the code to referance that constants file.
 * @param {string} inputData The filename of the constants file or
 * the full path and file name of the constants file. (Should work just the same with either one)
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string code that represents the method to referance a constants file in the code.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const determineConstantsContextQualifiedPrefix = function(inputData, inputMetaData) {
  let functionName = determineConstantsContextQualifiedPrefix.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData;
    let inputDataAsArray = inputData.split(bas.cDot);
    let constantsFileNames = D[sys.cConstantsValidationData][sys.cConstantsFileNames];
    let constantsShortNames = D[sys.cConstantsValidationData][sys.cConstantsShortNames];
    for (let key in constantsFileNames) {
      if (inputData === constantsFileNames[key]) {
        returnData = constantsShortNames[key];
      }
    } // End-for (let key in constantsFileNames)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function determineSuggestedConstantsValidationLineOfCode
 * @description Takes the name of the missing constant and determines a suggested lin of code to ad to the appropriate constants vaidation file.
 * This will make it really easy for developers to maintain the constants validation system.
 * @param {string} inputData The name of the constant file that is missing and should have a line of code generated for it.
 * @param {string} inputMetaData The prefix used to referance the constants file in the code.
 * @return {string} The suggested line of code that should be added to the appropriate constants validation code file.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const determineSuggestedConstantsValidationLineOfCode = function(inputData, inputMetaData) {
  let functionName = determineSuggestedConstantsValidationLineOfCode.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData && inputMetaData) {
    returnData = inputData;
    // Input: cZZTopInternationalSuccess
    // Output: {Name: 'cZZTopInternationalSuccess', Actual: wrd.cZZTopInternationalSuccess, Expected: 'ZZTopInternationalSuccess'}
    if (inputData.charAt(0) === bas.cc) {
      let literalValue = inputData.substr(1);
      // `{Name: '${inputData}', Actual: ${inputMetaData}.${inputData}, Expected: '${literalValue}'}`;
      returnData = bas.cOpenCurlyBrace + wrd.cName + bas.cColon + bas.cSpace + bas.cSingleQuote + inputData +
        bas.cSingleQuote + bas.cComa + bas.cSpace + wrd.cActual + bas.cColon + bas.cSpace + inputMetaData +
        bas.cDot + inputData + bas.cComa + bas.cSpace + wrd.cExpected + bas.cColon + bas.cSpace +
        bas.cSingleQuote + literalValue + bas.cSingleQuote + bas.cCloseCurlyBrace;
    } else { // Else-clause if (inputData.charAt(0) === bas.cc)
      // 'ERROR: Attempted to generate a suggested line of code to validate the constant, ' +
      // 'but the constant is not formatted correctly, it should begin with a lower case "c". ' +
      // 'Please reformat the constant correctly so a line of code can be generated for you.'
      console.log(msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5 +
        msg.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6);
      returnData = '';
    }
  } // End-if (inputData && inputMetaData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function validateConstantsDataValidationLineItemName
 * @description Loops through all of the constants validation data and verifies if a matching constan definition can be found, or not found.
 * @param {string} inputData the constant definition that should be searched for.
 * @param {string} inputMetaData The name of the data hive that contains the appropriate matching constants validation data.
 * @return {boolean} True or False to indicate if a match was found or not found.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const validateConstantsDataValidationLineItemName = function(inputData, inputMetaData) {
  let functionName = validateConstantsDataValidationLineItemName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    for (let i = 0; i < D[sys.cConstantsValidationData][inputMetaData].length; i++) {
      let validationLineItem = D[sys.cConstantsValidationData][inputMetaData][i];
      if (validationLineItem) {
        if (inputData === validationLineItem.Name) {
          returnData = true;
          break;
        }
      } // End-if (validationLineItem)
    } // End-for (let i = 0; i < D[sys.cConstantsValidationData][inputMetaData].length; i++)
  } // End-if (inputData && inputMetaData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function doesConstantExist
 * @description Walks through all of the constants validation files and
 * checks to see if any of the expected values match the string that is passed in.
 * @param {string} inputData The value that should be looked for in all the constants files.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if a matching constant definition was found or not.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const doesConstantExist = function(inputData, inputMetaData) {
  let functionName = doesConstantExist.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let constantsTypesKeys = Object.keys(D[sys.cConstantsValidationData]);
    // constantsTypesKeys is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop1:
    for (let i = 0; i < constantsTypesKeys.length; i++) {
      let constantTypeKey = constantsTypesKeys[i];
      // constantTypeKey is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
      let constantTypeValues = D[sys.cConstantsValidationData][constantTypeKey];
      // constantTypeValues is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues));
      let constantsKeys = Object.keys(constantTypeValues);
      // constantsKeys is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsKeysIs + JSON.stringify(constantsKeys));
loop2:
      for (let j = 0; j < constantsKeys.length; j++) {
        let constantKey = constantsKeys[j];
        // constantKey is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantKeyIs + JSON.stringify(constantKey));
        let constantActualValue = constantTypeValues[constantKey];
        // constantActualValue is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantActualValueIs + JSON.stringify(constantActualValue));
        if (inputData === constantActualValue.Actual) {
          returnData = true;
          break loop1;
        }
      } // End-for (let j = 0; j < constantsKeys.length; j++)
    } // End-for (let i = 0; i < constantsTypesKeys.length; i++)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getConstantType
 * @description Determines what constant library a particular constant is defined in.
 * (This will aid developers who are trying to understand & develop under this complicated constants system.)
 * @NOTE Just because a constant is found we do not break the loop,
 * but this function will report back all constants libraries where a particular constant would be defined.
 * Passing in a True to the inputMetaData will cause the function to exit upon first discovered match.
 * @param {string} inputData The string value that should be searched in all of the constants libraries.
 * @param {boolean} inputMetaData True or False to indicate if the function should exit on first discovery or continue to discover all possible matches.
 * @return {string} A list of constants libraries where the constant was found to be defined in.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const getConstantType = function(inputData, inputMetaData) {
  let functionName = getConstantType.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let constantsTypesKeys = Object.keys(D[sys.cConstantsValidationData]);
    // constantsTypesKeys is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop1:
    for (let i = 0; i < constantsTypesKeys.length; i++) {
      let constantTypeKey = constantsTypesKeys[i];
      // constantTypeKey is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
      let constantTypeValues = D[sys.cConstantsValidationData][constantTypeKey];
      // constantTypeValues is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues));
      let constantsKeys = Object.keys(constantTypeValues);
      // constantsKeys is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsKeysIs + JSON.stringify(constantsKeys));
loop2:
      for (let j = 0; j < constantsKeys.length; j++) {
        let constantKey = constantsKeys[j];
        // constantKey is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantKeyIs + JSON.stringify(constantKey));
        let constantActualValue = constantTypeValues[constantKey];
        // constantActualValue is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantActualValueIs + JSON.stringify(constantActualValue));
        if (inputData === constantActualValue.Actual) {
          if (returnData === '') {
            returnData = constantTypeKey;
            // NOTE: This is our first discovered match. Check the inputMetaData to see if we should exit or continue searching?
            if (inputMetaData === true) {
              // We are doing it this way so we can re-use this function as part of the optimized constants fulfillment system algorithm.
              break loop1;
            }
          } else {
            returnData = returnData + bas.cComa + constantTypeKey;
          }
        } // End-if (inputData === constantActualValue.Actual)
      } // End-for (let j = 0; j < constantsKeys.length; j++)
    } // End-for (let i = 0; i < constantsTypesKeys.length; i++)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getConstantActualValue
 * @description Determines the actual value of the named constant given the constant type.
 * @param {string} inputData The name of the constant we are looking for to get the actual value of the constant.
 * @param {string} inputMetaData (OPTIONAL) The type or library where the constant should be found.
 * @return {string} The actual value of the string.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const getConstantActualValue = function(inputData, inputMetaData) {
  let functionName = getConstantActualValue.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    if (isConstantTypeValid(inputMetaData, '') === true) {
      let constantTypeValues1 = D[sys.cConstantsValidationData][inputMetaData];
      // 1 constantsTypeValues is:
      loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues1));
      let constantsKeys1 = Object.keys(constantTypeValues1);
      // 1 constantsKeys is:
      loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantsKeysIs + JSON.stringify(constantsKeys1));
loop1:
      for (let i = 0; i < constantsKeys1.length; i++) {
        let constantKey1 = constantsKeys1[i];
        // 1 constantKey is:
        loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantKeyIs + JSON.stringify(constantKey1));
        let constantActualValue1 = constantTypeValues1[constantKey1];
        // 1 constantActualValue is:
        loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantActualValueIs + JSON.stringify(constantActualValue1));
        if (inputData === constantActualValue1.Name) {
          returnData = constantActualValue1.Actual;
        }
      } // End-for (let i = 0; i < constantsKeys1.length; i++)
    } else { // Else-clause if (isConstantTypeValid(inputMetaData, '') === true)
      let constantsTypesKeys = Object.keys(D[sys.cConstantsValidationData]);
      // constantsTypesKeys is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop2:
      for (let j = 0; j < constantsTypesKeys.length; j++) {
        let constantTypeKey = constantsTypesKeys[j];
        // constantTypeKey is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
        let constantTypeValues2 = D[sys.cConstantsValidationData][constantTypeKey];
        // 2 constantTypeValues is:
        loggers.consoleLog(namespacePrefix + functionName, num.c2 + bas.cSpace + msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues2));
        let constantsKeys2 = Object.keys(constantTypeValues2);
        // 2 constantsKeys is:
        loggers.consoleLog(namespacePrefix + functionName, num.c2 + bas.cSpace + msg.cconstantsKeysIs + JSON.stringify(constantsKeys2));
loop3:
        for (let k = 0; k < constantsKeys2.length; k++) {
          let constantKey2 = constantsKeys2[k];
          // 2 constantKey is:
          loggers.consoleLog(namespacePrefix + functionName, num.c2 + bas.cSpace + msg.cconstantKeyIs + JSON.stringify(constantKey2));
          let constantActualValue1 = constantTypeValues2[constantKey2];
          // 1 constantActualValue is:
          loggers.consoleLog(namespacePrefix + functionName, num.c1 + bas.cSpace + msg.cconstantActualValueIs + JSON.stringify(constantActualValue1));
          if (inputData === constantActualValue1.Name) {
            returnData = constantActualValue1.Actual;
          }
        } // End-for (let k = 0; k < constantsKeys2.length; k++)
      } // End-for (let j = 0; j < constantsTypesKeys.length; j++)
    } // else clause for the case that inputMetaData did not match a valid constant type in the system.
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getConstantName
 * @description Gets the constant name given the constant value, or what the constant should resolve as.
 * Can only return the first instance.
 * @param {string} inputData The constant string value that should be used when getting the constant name.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The name of the constant: eg: cSystem
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const getConstantName = function(inputData, inputMetaData) {
  let functionName = getConstantName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let constantsTypesKeys = Object.keys(D[sys.cConstantsValidationData]);
    // constantsTypesKeys is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));
loop1:
    for (let i = 0; i < constantsTypesKeys.length; i++) {
      let constantTypeKey = constantsTypesKeys[i];
      // constantTypeKey is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));
      let constantTypeValues = D[sys.cConstantsValidationData][constantTypeKey];
      // constantTypeValues is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantTypeValuesIs + JSON.stringify(constantTypeValues));
      let constantsKeys = Object.keys(constantTypeValues);
      // constantsKeys is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsKeysIs + JSON.stringify(constantsKeys));
loop2:
      for (let j = 0; j < constantsKeys.length; j++) {
        let constantKey = constantsKeys[j];
        // constantKey is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantKeyIs + JSON.stringify(constantKey));
        let constantActualValue = constantTypeValues[constantKey];
        // constantActualValue is:
        loggers.consoleLog(namespacePrefix + functionName, msg.cconstantActualValueIs + JSON.stringify(constantActualValue));
        if (inputData === constantActualValue.Actual) {
          returnData = constantActualValue.Name;
          break loop1;
        }
      } // End-for ((let j = 0; j < constantsKeys.length; j++)
    } // End-for (let i = 0; i < constantsTypesKeys.length; i++)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function findConstantName
 * @description Looks through a string and tries to weed out a constant name.
 * @param {string} inputData The string that should be searched for a constant name.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The name of the constant that was found.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const findConstantName = function(inputData, inputMetaData) {
  let functionName = findConstantName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    if (inputData.includes(bas.cDot)) {
      returnData = inputData.substr(inputData.lastIndexOf(bas.cDot) + 1, inputData.length);
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isConstantTypeValid
 * @description Determiens if a sring is a valid constant type/library or not.
 * @param {string} inputData The string that should be validated if it is a valid constant type or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string is a
 * valid constant type/library that exists within the system or not.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const isConstantTypeValid = function(inputData, inputMetaData) {
  let functionName = isConstantTypeValid.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let constantsShortNames = D[sys.cConstantsValidatinoData][sys.cConstantsShortNames];
    for (let key in constantsShortNames) {
      if (inputData === key || inputData === constantsShortNames[key]) {
        returnData = true;
        break;
      }
    } // End-for (let key in constantsShortNames)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function convertConstantTypeToConstantPrefix
 * @description Converts the constant type to a constant prefix so it can be used to assist with defining an optimized constant definition.
 * @param {string} inputData The constant type that should be used when converting to a constant prefix.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The appropriate constant prefix.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const convertConstantTypeToConstantPrefix = function(inputData, inputMetaData) {
  let functionName = convertConstantTypeToConstantPrefix.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData;
    let constantsPrefixData = D[sys.cConstantsValidationData][sys.cConstantsPrefix];
    for (let key in constantsPrefixData) {
      if (inputData === key) {
        returnData = constantsPrefixData[key];
      }
    } // End-for (let key in constantsPrefixData)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function constantsOptimizedFulfillmentSystem
 * @description Determines what is the most optimized way to define a string using existing constant strings.
 * @param {string} inputData the string that should be determined or find a constant to fulfill part of the string.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A constant that represents part of the input string.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const constantsOptimizedFulfillmentSystem = function(inputData, inputMetaData) {
  let functionName = constantsOptimizedFulfillmentSystem.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let constantType = '';
  let constantName = '';
  if (inputData) {
    if (doesConstantExist(inputData, '') === false) {
      returnData = constantsOptimizedFulfillmentSystem(inputData.substring(0, inputData.length - 1), inputMetaData);
    } else {
      constantType = getConstantType(inputData, true);
      constantName = getConstantName(inputData, '');
      let constantPrefix = convertConstantTypeToConstantPrefix(constantType, '');
      returnData = constantPrefix + constantName;
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function constantsFulfillmentSystem
 * @description Determines what is the most optimized way to define a new constant using existing constant strings.
 * @param {string} inputData The constant to be defined/fulfilled.
 * @param {string} inputMetaData The original user-defined constant to be fulfilled,
 * so the recursive algorithm can continue processing the rest of the string, after a first match is found.
 * @return {string} The fully optimized definition for the new constant.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const constantsFulfillmentSystem = function(inputData, inputMetaData) {
  let functionName = constantsFulfillmentSystem.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let constantName = '';
  let constantType = '';
  if (inputData) {
    returnData = constantsOptimizedFulfillmentSystem(inputData, '');
    // We found the first part of the string, now lets continue processing the rest of the string!
    // First determien how many characters are being returned so we can
    // determine what portion of the string we need to continue processing with.
    constantName = findConstantName(returnData, '');
    // constantName is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cconstantNameIs + constantName);
    let constantValue = getConstantActualValue(constantName, '');
    // constantValue is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cconstantValueIs + constantValue);

    let deltaLength = inputData.length - constantValue.length;
    // deltaLength is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cdeltaLengthIs + deltaLength);
    if (deltaLength != 0) {
      let recursiveSubString = inputMetaData.substring(inputMetaData.length - deltaLength, inputMetaData.length);
      // recursiveSubString is:
      loggers.consoleLog(namespacePrefix + functionName, msg.crecursivesu + recursiveSubString);
      returnData = returnData + bas.cSpace + bas.cPlus + bas.cSpace + constantsFulfillmentSystem(recursiveSubString, inputData);
    } // End-if (deltaLength != 0)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function validateConstantsDataValues
 * @description Iterates over all the constants values in the constants validation data
 * specified by the input parameter and validates the content.
 * @param {string} inputData The name of the data-hive that should contain all of
 * the validation data that should be used to execute the validation procedures.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the validation passed for the
 * entire data hive or if it did not pass.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const validateConstantsDataValues = function(inputData, inputMetaData) {
  let functionName = validateConstantsDataValues.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let passMessage = '';
  if (inputData) {
    let colorizeLogsEnabled = configurator.getConfigurationSetting(wrd.csystem, cfg.cenableColorizedConsoleLogs);
    for (let i = 0; i < D[sys.cConstantsValidationData][inputData].length; i++) {
      passMessage = '';
      let validationLineItem = D[sys.cConstantsValidationData][inputData][i];
      if (validationLineItem) {
        if (validationLineItem.Actual === validationLineItem.Expected) {
          // PASS
          if (configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualConstantsValidationPassMessages) === true) {
            // `PASS -- ${inputData} Actual: ${validationLineItem.Actual}, Expected: ${validationLineItem.Expected} -- PASS`;
            passMessage = wrd.cPASS + bas.cSpace + bas.cDoubleDash + bas.cSpace + inputData + bas.cSpace + wrd.cActual + bas.cColon + bas.cSpace +
              validationLineItem.Actual + bas.cComa + bas.cSpace + wrd.cExpected + bas.cColon + bas.cSpace + validationLineItem.Expected + bas.cSpace +
              bas.cDoubleDash + bas.cSpace + wrd.cPASS;
            if (colorizeLogsEnabled === true) {
              passMessage = chalk.rgb(0,0,0)(passMessage);
              passMessage = chalk.bgRgb(0,255,0)(passMessage);
            }
            console.log(passMessage);
          }
        } else {
          // FAIL
          returnData = false;
          if (configurator.getConfigurationSetting(wrd.csystem, cfg.cdisplayIndividualCosntantsValidationFailMessages) === true) {
            // `FAIL -- ${inputData} Actual: ${validationLineItem.Actual}, Expected: ${validationLineItem.Expected} -- FAIL`;
            passMessage = wrd.cFAIL + bas.cSpace + bas.cDoubleDash + bas.cSpace + inputData + bas.cSpace + wrd.cActual + bas.cColon + bas.cSpace +
              validationLineItem.Actual + bas.cComa + bas.cSpace + wrd.cExpected + bas.cColon + bas.cSpace + validationLineItem.Expected + bas.cSpace +
              bas.cDoubleDash + bas.cSpace + wrd.cFAIL;
            if (colorizeLogsEnabled === true) {
              passMessage = chalk.rgb(0,0,0)(passMessage);
              passMessage = chalk.bgRgb(255,0,0)(passMessage);
            }
            console.log(passMessage);
          }
        }
      } else { // Else-clause if (validationLineItem)
        // `FAIL -- ${inputData} -- FAIL`
        passMessage = wrd.cFAIL + bas.cSpace + bas.cDoubleDash + bas.cSpace + inputData + bas.cSpace + bas.cDoubleDash + bas.cSpace + wrd.cFAIL;
        if (colorizeLogsEnabled === true) {
          passMessage = chalk.rgb(0,0,0)(passMessage);
          passMessage = chalk.bgRgb(255,0,0)(passMessage);
        }
        console.log(passMessage);
      } // End else-clause if (validationLineItem)
    } // End-for (let i = 0; i < D[sys.cConstantsValidationData][inputData].length; i++)
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function isConstantValid
 * @description Determines if the user entered some valid input constant string or not. User must have entered more than 4 characters.
 * @param {string} inputData The value of the constant as a string.
 * @param {string} inputMetaData Not used for thsi business rule.
 * @return {boolean} True or False to indicate if the user entered a valid constant or not.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const isConstantValid = function(inputData, inputMetaData) {
  let functionName = isConstantValid.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    if (inputData.length >= 4) {
      returnData = true;
    }
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

export default {
  validateConstantsDataValidation,
  determineConstantsContextQualifiedPrefix,
  determineSuggestedConstantsValidationLineOfCode,
  validateConstantsDataValidationLineItemName,
  doesConstantExist,
  getConstantType,
  getConstantActualValue,
  getConstantName,
  findConstantName,
  isConstantTypeValid,
  convertConstantTypeToConstantPrefix,
  constantsOptimizedFulfillmentSystem,
  constantsFulfillmentSystem,
  validateConstantsDataValues,
  isConstantValid
};