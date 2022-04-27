/**
* @file constant.js
* @module constant
* @description Contains all of the constant system commands.
* @requires module:ruleBroker
* @requires module:configurator
* @requires module:loggers
* @requires module:prompt
* @requires module:queue
* @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
* @requires {@link https://www.npmjs.com/package/path|path}
* @author Seth Hollingsead
* @date 2022/02/04
* @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
*/

// Internal imports
import ruleBroker from '../../brokers/ruleBroker.js';
import configurator from '../../executrix/configurator.js';
import loggers from '../../executrix/loggers.js';
import prompt from '../../executrix/prompt.js';
import queue from '../../structures/queue.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cmd, cfg, fnc, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// commandsBlob.commands.constant.
const namespacePrefix = sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + baseFileName + bas.cDot;
// prompt();

/**
* @function constantsGenerator
* @description Requests a string input the user would like to have converted nto a constant,
* while determining the most optimized way to define the new constant based on existing constants.
* Also checks to see if that new constant is already defined in the constants system.
* @param {string} inputData Parameterized constant to generate for.
* @param {string} inputMetaData Not used for this business rule.
* @return {boolean} True to indicate that the application should not exit.
* @author Seth Hollingsead
* @date 2022/03/30
*/
const constantsGenerator = function(inputData, inputMetaData) {
   let functionName = constantsGenerator.name;
   loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
   loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
   loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
   let returnData = true;
   if (configurator.getConfigurationSetting(wrd.csystem, cfg.cenableConstantsValidation) === true) {
     let validEntry = false;
     let userDefinedConstant = '';
     let validConstantRule = [];
     let doesConstantExistRule = [];
     let getConstantTypeRule = [];
     let constantsFulfillmentSystemRule = [];
     let wordsCountRule = [];
     let wordsArrayRule = [];
     let recombineArrayInputRule = [];
     validConstantRule[0] = biz.cisConstantValid;
     doesConstantExistRule[0] = biz.cdoesConstantExist;
     getConstantTypeRule[0] = biz.cgetConstantType;
     constantsFulfillmentSystemRule[0] = biz.cconstantsFulfillmentSystem;
     wordsCountRule[0] = biz.cgetWordCountInString;
     wordsArrayRule[0] = biz.cgetWordsArrayFromString;
     recombineArrayInputRule[0] = biz.crecombineStringArrayWithSpaces;

     if (inputData.length === 0) {
       while (validEntry === false) {
         console.log(msg.cConstantPrompt1);
         console.log(msg.cConstantPrompt2);
         console.log(msg.cConstantPrompt3);
         userDefinedConstant = prompt.prompt(bas.cGreaterThan);
         validEntry = ruleBroker.processRules(userDefinedConstant, '', validConstantRule);
         if (validEntry === false) {
           // INVALID INPUT: Please enter a valid constant value that contains more than 4 characters.
           console.log(msg.cconstantsGeneratorMessage1);
         }
       } // End-while (validEntry === false)
     } else if (inputData.length === 2) {
       userDefinedConstant = inputData[1];
     } else {
       // We need to recombine all of the array elements after the 0-th element into a single string with spaces inbetween.
       userDefinedConstant = ruleBroker.processRules(inputData, '', recombineArrayInputRule);
     }
     // userDefinedConstant is:
     loggers.consoleLog(namespacePrefix + functionName, msg.cuserDefinedConstantIs + userDefinedConstant);

     // First lets check if the constant is already defined, so we can warn the user.
     // NOTE: It could be that the developer is just lookng to optimize the existing constant,
     // but if not, a warning to the user would be a good idea!
     let doesConstantExist = ruleBroker.processRules(userDefinedConstant, '', doesConstantExistRule);
     if (doesConstantExist === true) {
       let constantType = ruleBroker.processRules(userDefinedConstant, '', getConstantTypeRule);
       // WARNING: The constant has already been defined in the following library(ies):
       console.log(msg.cconstantsGeneratorMessage2 + constantType);
     }
     userDefinedConstant = userDefinedConstant.trim();
     let wordCount = ruleBroker.processRules(userDefinedConstant, '', wordsCountRule);
     // wordCount is:
     loggers.consoleLog(namespacePrefix + functionName, msg.cwordCountIs + wordCount);
     // Now begin the fulfillment algorithm.
     if (wordCount > 1) {
       let wordsArray = ruleBroker.processRules(userDefinedConstant, '', wordsArrayRule);
       for (let j = 0; j < wordsArray.length; j++) {
         // Optimized constant definition for word:
         console.log(msg.cOptimizedConstantDefinitionForWord + bas.cc + wordsArray[j] + bas.cSpace + bas.cEqual + bas.cSpace +
         ruleBroker.processRules(wordsArray[j].trim(), wordsArray[j].trim(), constantsFulfillmentSystemRule));
       } // End-for (let j = 0; j < wordsArray.length; j++)
     } else { // There is only a single word to process.
       // output a proper line of code:
       // export const csomething = wrd.csome + wrd.cthing; // something
       console.log(wrd.cexport + bas.cSpace + gen.cconst + bas.cSpace + bas.cc + userDefinedConstant + bas.cSpace + bas.cEqual + bas.cSpace +
       ruleBroker.processRules(userDefinedConstant, userDefinedConstant, constantsFulfillmentSystemRule) +
       bas.cSemiColon + bas.cSpace + bas.cDoubleForwardSlash + bas.cSpace + userDefinedConstant);
     }
   } else {
     // The enableConstantsValidation flag is disabled. Enable this flag in the configuration settings to activate this command.
     console.log(msg.ccconstantsGeneratorMessage3 + msg.cconstantsGeneratorMessage4);
   }
   loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
   loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
   return returnData;
};

/**
* @function constantsGeneratorList
* @description Calls the constantsGenerator command to iterate over a list of constants and generate many constants sequentially.
* @NOTE This function will also walk the list and determine if there are any common strings
* internal to the list that could be defined as new constants to help with the optimization process.
* @NOTE Testing string: constGenL somethingXML,whatever that is,A basic NodeJS template App,that can easily
* @param {string} inputData Parameterized coma delimited list of constants to be auto-generated
* @param {string} inputMetaData Not used for this business rule.
* @return {boolean} True to indicate that the application should not exit.
* @author Seth Hollingsead
* @date 2022/03/30
*/
const constantsGeneratorList = function(inputData, inputMetaData) {
   let functionName = constantsGeneratorList.name;
   loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
   loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
   loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
   let returnData = true;
   if (configurator.getConfigurationSetting(wrd.csystem, cfg.cenableConstantsValidation) === true) {
     let validEntry = false;
     let userDefinedConstantList = '';
     let validConstantRule = [];
     let recombineArrayInputRule = [];
     validConstantRule[0] = biz.cisConstantValid;
     recombineArrayInputRule[0] = biz.crecombineStringArrayWithSpaces;
     if (inputData.length === 0) {
       while (validEntry === false) {
         console.log(msg.cConstantsListPrompt1);
         console.log(msg.cConstantsListPrompt2);
         console.log(msg.cConstantsListPrompt3);
         userDefinedConstantList = prompt.prompt(bas.cGreaterThan);
         validEntry = ruleBroker.processRules(userDefinedConstantList, '', validConstantRule);
         if (validEntry === false) {
           // INVALID INPUT: Please enter a valid constant list.
           console.log(msg.cconstantsGeneratorListMessage1);
         }
       } // End-while (validEntry === false)
     } else if (inputData.length === 2) {
       userDefinedConstantList = inputData[1];
     } else {
       // Combine all of the input parameters back into a single string then we will parse it for coma's into an array.
       // The array elements will then be used to enqueue the command constantsGenerator.
       userDefinedConstantList = ruleBroker.processRules(inputData, '', recombineArrayInputRule);
     }
     // userDefinedConstantList is:
     loggers.consoleLog(namespacePrefix + functionName, msg.cuserDefinedConstantListIs + userDefinedConstantList);
     if (userDefinedConstantList.includes(bas.cComa) === true) {
       // userDefinedConstantList contains comas
       loggers.consoleLog(namespacePrefix + functionName, msg.cuserDefinedConstantListContainsComas);
       let userDefinedConstantsListArray = userDefinedConstantList.split(bas.cComa);
       // userDefinedConstantsListArray is:
       loggers.consoleLog(namespacePrefix + functionName, msg.cuserDefinedConstantsListArrayIs + JSON.stringify(userDefinedConstantsListArray));
       if (userDefinedConstantsListArray.length > 1) {
         for (let i = 0; i < userDefinedConstantsListArray.length; i++) {
           queue.enqueue(sys.cCommandQueue, cmd.cconstantsGenerator + bas.cSpace + userDefinedConstantsListArray[i].trim());
         }
       } else if (userDefinedConstantsLIsArray.length === 1) {
         // Just enqueue the constants Generator command with the input directly.
         queue.enqueue(sys.cCommandQueue, cmd.cconstantsGenerator + bas.cSpace + userDefinedConstantsListArray[0].trim());
       }
     } else {
       // userDefinedConstantsList DOES NOT contain comas
       loggers.consoleLog(namespacePrefix + functionName, msg.cuserDefinedConstantsListDoesNotContainComas);
       queue.enqueue(sys.cCommandQueue, cmd.cconstantsGenerator + bas.cSpace + userDefinedConstantList.trim());
     }
   } else {
     // The enableConstantsValidation flag is disabled. Enable this flag in the configuration settings to activate this command.
     console.log(msg.ccconstantsGeneratorMessage3 + msg.cconstantsGeneratorMessage4);
   }
   loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
   loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
   return returnData;
};

/**
 * @function constantsPatternRecognizer
 * @description Walks through a list of constants lookng for patterns internal to the strings.
 * @param {string} inputData Parameterized coma delimited list of constants to be
 * passed through pattern recognition to find common strings among them.
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/03/31
 */
const constantsPatternRecognizer = function(inputData, inputMetaData) {
  let functionName = constantsPatternRecognizer.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (configurator.getConfigurationSetting(wrd.csystem, cfg.cenableConstantsValidation) === true) {
    let validEntry = false;
    let userDefinedConstantList = '';
    let validConstantRule = [];
    let recombineArrayInputRule = [];
    let wordsArrayFromStringRule = [];
    let searchForPatternsInStringArrayRule = [];
    let validatePatternsNeedImplementationRule = [];
    let wordsArray = [];
    let commonPatternsArray = [];
    validConstantRule[0] = biz.cisConstantValid;
    recombineArrayInputRule[0] = biz.crecombineStringArrayWithSpaces
    wordsArrayFromStringRule[0] = biz.cgetWordsArrayFromString;
    searchForPatternsInStringArrayRule[0] = biz.csearchForPatternsInStringArray;
    validatePatternsNeedImplementationRule[0] = biz.cvalidatePatternsThatNeedImplementation;
    if (inputData.length === 0) {
      while (validEntry === false) {
        console.log(msg.cConstantsListPatternSearchPrompt1);
        console.log(msg.cConstantsListPatternSearchPrompt2);
        console.log(msg.cConstantsListPatternSearchPrompt3);
        userDefinedConstantList = prompt.prompt(bas.cGreaterThan);
        validEntry = ruleBroker.processRules(userDefinedConstantList, '', validConstantRule);
        if (validEntry === false) {
          // INVALID INPUT: Please enter a valid constant list.
          console.log(msg.cconstantsGeneratorListMessage1);
        }
      } // End-while (validEntry === false)
    } else if (inputData.length === 2) {
      userDefinedConstantList = inputData[1];
    } else {
      // Combine all of the input parameters back into a single string then we will parse it for coma's into an array.
      // The array elements will then be used to enqueue the command constantsGenerator.
      userDefinedConstantList = ruleBroker.processRules(inputData, '', recombineArrayInputRule);
    }
    // userDefinedConstantLiset is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cuserDefinedConstantListIs + userDefinedConstantList);
    if (userDefinedConstantList.includes(bas.cComa) === true) {
      wordsArray = userDefinedConstantList.split(bas.cComa);
    } else {
      // userDefinedConstantList DOES NOT contain comas
      loggers.consoleLog(namespacePrefix + functionName, msg.cuserDefinedConstantsListDoesNotContainComas);
      // Check and see if there is another delimiter we can use to break up the string into an array,
      // such as a space character, Maybe the user entered a sentence and would like all the words of the sentence to be optimized.
      wordsArray = ruleBroker.processRules(userDefinedConstantList, '' , wordsArrayFromStringRule);
    }
    // wordsArray is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cwordsArrayIs + JSON.stringify(wordsArray));
    commonPatternsArray = ruleBroker.processRules(wordsArray, '', searchForPatternsInStringArrayRule);
    // commonPatternsArray is:
    loggers.consoleLog(namespacePrefix + functionName, msg.ccommonPatternsArrayIs + JSON.stringify(commonPatternsArray));
    // This next call will compare the identified string patterns with existing constants, and highlight which ones are not yet implemented.
    let newConstantsList = ruleBroker.processRules(commonPatternsArray, '', validatePatternsNeedImplementationRule);
    let constantsPatternGenerationSetting = configurator.getConfigurationSetting(wrd.csystem, cfg.cenableConstantsPatternGeneration);
    if (constantsPatternGenerationSetting === true) {
      queue.enqueue(sys.cCommandQueue, cmd.cconstantsGeneratorList + bas.cSpace + newConstantsList);
    }
  } else {
    // The enableConstantsValidation flag is disabled. Enable this flag in the configuration settings to activate this command.
    console.log(msg.ccconstantsGeneratorMessage3 + msg.cconstantsGeneratorMessage4);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

export default {
  constantsGenerator,
  constantsGeneratorList,
  constantsPatternRecognizer
};