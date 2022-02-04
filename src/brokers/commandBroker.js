/**
 * @file commandBroker.js
 * @module commandBroker
 * @description Executes commands by calling the appropriate command-function from the commandLibrary,
 * which will actually be stored functions on the D-Data structure.
 * @requires module:configurator
 * @requires module:lexical
 * @requires module:commandsLibrary
 * @requires module:stack
 * @requires module:timers
 * @requires module:loggers
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:numeric.constants
 * @requires module:word1.constants
 * @requires module:system.constants
 * @requires module:business.constants
 * @requires module:configuration.constants
 * @requires module:message.constants
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/02
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

let configurator = require('../executrix/configurator');
let lexical = require('../executrix/lexical');
let commandsLibrary = require('../commandsBlob/commandsLibrary');
let stack = require('../structures/stack');
let timers = require('../executrix/timers');
let loggers = require('../executrix/loggers');
let bas = require('../constants/basic.constants');
let gen = require('../constants/generic.constants');
let num = require('../constants/numeric.constants');
let wr1 = require('../constants/word1.constants');
let sys = require('../constants/system.constants');
let biz = require('../constants/business.constants');
let cfg = require('../constants/configuration.constants');
let msg = require('../constants/message.constants');
let D = require('../structures/data');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
// brokers.commandBroker.
let namespacePrefix = wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function bootStrapCommands
 * @description Captures all of the commands string-to-function cal map data inthe commandsLibrary and migrates that dat a to the D-data structure.
 * This is important now because we are going to allow the clinet to define their own commands seperate from the system defined commands.
 * So we need a way to merge al the cient defned and system defined commands into one location.
 * Then the command broker will execute commands rom the D-Data structure and not the commands library per-say.
 * This will allow the system to expand much more dynamically and even be user-defined & flexible to client needs.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/02
 */
function bootStrapCommands() {
  let functionName = bootStrapCommands.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  commands.initCommandsLibrary();
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function addClientCommands
 * @description Merges client defined commands with the system defined commands.
 * @param {array<object>} clientCommands The client rules that should be merged with the system rules.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/02/02
 */
function addClientCommands(clientCommands) {
  let functionName = addClientCommands.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  Object.assign(D[wr1.cCommands], clientCommands);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
};

/**
 * @function getValidCommand
 * @description Parses the command string and returns an array that can be used to
 * enqueue or execute that command. Useful for determining if a command is a valid command and
 * working with multiple levels of delimiters for nested command calls, looking up a command alias, etc...
 * @param {string} commandString The command string that should be parsed for a valid command.
 * @param {string} commandDelimiter The delimiter that should be used to parse the command line.
 * @return {boolean|string} False if the command is not valid, otherwise it returns the command string.
 * @author Seth Hollingsead
 * @date 2022/02/02
 */
function getValidCommand(commandString, commandDelimiter) {
  let functionName = getValidCommand.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // cmmandString is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandStringIs + commandString);
  // commandDelimiter is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandDelimiterIs + commandDelimiter);
  let returnData = false;
  let foundValidCommand = false;
  let foundSomeCommandArgs = false;
  let commandToExecute, commandArgs;
  let commandArgsDelimiter = commandDelimiter;
  if (commandDelmiter === null || commandDelimiter !== commandDelimiter || commandDelimiter === undefined) {
    commandArgsDelimiter = bas.cSpace;
  }
  if (commandString && commandString.includes(commandArgsDelimiter) === true) {
    foundSomeCommandArgs = true;
    commandArgs = commandString.split(commandArgsDelimiter);
    commandToExecute = commandArgs[0];
  } else {
    commandToExecute = commandString;
  }
  loggers.consoleLog(namespacePrefix + functionName, 'commandString is: ' + commandString);
  loggers.consoleLog(namespacePrefix + functionName, 'commandToExecute is: ' + commandToExecute);
  if (commandString) {
    if (D[wr1.cCommands][commandToExecute] !== undefined) {
      foundValidCommand = true;
      returnData = cmmandToExecute;
    } else { // else-clause if (D[wr1.cCommands][commandToExecute] !== undefined)
      loggers.consoleLog(namespacePrefix + functionName, 'else-clause looking for command aliases');
      // NOTE: It could be that the user entered a command alias, so we will need to search through all of the command aliases,
      // to see if we can find a match, then get the actual command that should be executed.
      let allCommandAliases = D[sys.cCommandsAliases][wr1.cCommand];
      loggers.consoleLog(namespacePrefix + functionName, 'allCommandAliases is: ' + JSON.stringify(allCommandAliases));
loop1:
      for (let i = 0; i < allCmmandAliases.length; i++) {
        // Iterate through all of the command aliases and see if we can find a
        // command alias that matches the command the user is trying to execute.
        let currentCommand = allCommandAliases[i];
        let aliasList = currentCommand[wr1.cAliases];
        let arrayOfAliases = aliasList.split(bas.cComa);
loop2:
        for (let j = 0; j < arrayOfAliases.length; j++) {
          let currentAlias = arrayOfAliases[j];
          if (commandToExecute === currentAlias ||
          commandToExecute === bas.cDash + currentAlias ||
          commandToExecute === bas.cDoubleDash + currentAlias ||
          commandToExecute === bas.cForwardSlash + currentAlias ||
          commandToExecute === bas.cBackSlash + currentAlias ||
          commandToExecute.toUpperCase() === currentAlias.toUpperCase() ||
          commandToExecute.toUpperCase() === bas.cDash + currentAlias.toUpperCase() ||
          commandToExecute.toUpperCase() === bas.cDoubleDash + currentAlias.toUpperCase() ||
          commandToExecute.toUpperCase() === bas.cForwardSlash + currentAlias.toUpperCase() ||
          commandToExecute.toUpperCase() === bas.cBackSlash + currentAlias.toUpperCase() ||
          commandToExecute.toLowerCase() === currentAlias.toLowerCase() ||
          commandToExecute.toLowerCase() === bas.cDash + currentAlias.toLowerCase() ||
          commandToExecute.toLowerCase() === bas.cdoubleDash + currentAlias.toLowerCase() ||
          commandToExecute.toLowerCase() === bas.cForwardSlash + currentAlias.toLowerCase() ||
          commandToExecute.toLowerCase() === bas.cBackSlash + currentAlias.toLowerCase()) {
            foundValidCommand = true;
            // commandToExecute before the Alias is:
            loggers.consoleLog(namespacePrefix + functionName, msg.ccommandToExecuteBeforeTheAliasIs + commandToExecute);
            commandToExecute = currentCommand[wr1.cName];
            // commandToExecute after the Alias is:
            loggers.consoleLog(namespacePrefix + functionName, msg.ccommandToExecuteAfterTheAliasIs + commandToExecute);
            break loop1;
          }
        } // End-for (let j = 0; j < arrayOfAliases.length; j++)
      } // End-for (let i = 0; i < allCmmandAliases.length; i++)
      if (foundValidCommand === true) {
        if (D[wr1.cCommands][commandToExecute] !== undefined) {
          returnData = commandToExecute;
        } else {
          // WARNING: The specified command:
          // does not exist, please try again!
          console.log(msg.cWarningTheSpecifiedCommand + commandToExecute + msg.cdoesNotExistPleaseTryAgain + bas.cSpace num.c1);
        }
      } else {
        // WARNING: The specified command:
        // does not exist, please try again!
        console.log(msg.cWarningTheSpecifiedCommand + commandToExecute + msg.cdoesNotExistPleaseTryAgain + bas.cSpace num.c2);
      }
    } // End-else
  } else {
    // Looks like the user entered something undefined: Pop the standard error message:
    // WARNING: The specified command:
    // does not exist, please try again!
    console.log(msg.cWarningTheSpecifiedCommand + commandToExecute + msg.cdoesNotExistPleaseTryAgain);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.returnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getCommandArgs
 * @description Gets the arguments of the current command.
 * @param {string} commandString The command string that should be parsed fro command argumnts.
 * @param {string} commandDelimiter The delimiter that should be used to parse the command line.
 * @return {array<boolean|string|integer>} Any array of arguments, some times these might actually be nested command calls.
 * @author Seth Hollingsead
 * @date 2022/02/02
 */
function getCommandArgs(commandString, commandDelimiter) {
  let functionName = getCommandArgs.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // cmmandString is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandStringIs + commandString);
  // commandDelimiter is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandDelimiterIs + commandDelimiter);
  let returnData = false;
  let foundValidCommand = false;
  let commandArgsDelimiter = commandDelimiter;
  let isOddRule = [];
  let replaceCharacterAtIndexRule = [];
  let replaceTildesWithSingleQuoteRule = [];
  let stringLiteralCommandDelimiterAdded = false;
  isOddRule[0] = biz.cisOdd;
  replaceCharacterAtIndexRule[0] = biz.creplaceCharacterAtIndex;
  replaceTildesWithSingleQuoteRule[0] = biz.creplaceCharacterWithCharacter;
  let secondaryCommandArgsDelimiter = configurator.getConfigurationSetting(wr1.csystem, cfg.cSecondaryCommandDelimiter);
  if (commandDelimiter === null || commandDelimiter !== commandDelimiter || commandDelimiter === undefined) {
    commandArgsDelimiter = bas.cSpace;
  }
  if (commandString.includes(commandArgsDelimiter) === true) {
    // NOTE: All commands that enqueue or execute commands need to pass through this function.
    // There is a case where the user might pass a string with spaces or other code/syntax.
    // So we need to split first by single character string delimiters and parse the
    // non-string array elements to parse command arguments without accidently parsing string literal values as command arguments.
    if (commandString.includes(bas.cBackTickQuote) === true) {
      // commandString contains either a singleQuote or a backTickQuote
      loggers.consoleLog(namespacePrefix + functionName, msg.ccommandStringContainsEitherSingleQuoteOrBackTickQuote);
      let preSplitCommandString;
      if (commandString.includes(bas.cBackTickQuote) === true) {
        // commandString contaisn a singleQuote!
        loggers.consoleLog(namespacePrefix + functionName, msg.ccommandStringContainsSingleQuote);
        // NOTE: We cannot actually just replace ach single quote, we need to tag each single quote in pairs of 2.
        // The first one should be post-tagged, i.e. replace "'" with "'~" and the second should be pre-tagged i.e. replace "'" with "~'".
        // Then if there are more single quotes, the thirst post-tagged, i.e. replace "'" with "'~", etc...
        let numberOfSingleQuotes = commandString.split(bas.cBackTickQuote).length - 1;
        // Determine if the number of single quotes is odd or even?
        // About to call the rule broker to process on the number of single quotes and determien if it-be even or odd.
        loggers.consoleLog(namespacePrefix + functionName, msg.cgetCommandArgsMessage1 + sys.cgetCommandArgsMessage2);
        if (numberOfSingleQuotes >= 2 && ruleBroker.processRules(numberOfSingleQuotes, '', isOddRule) === false) {
          // numberOfSingleQuotes is >= 2 & the numberOfSingleQuotes is EVEN! YAY!
          loggers.consoleLog(namespacePrefix + functionName, msg.cnumberOfSingleQuotesInEven);
          let indexOfSingleDelimiter;
          for (let i = 0; i < numberOfSingleQuotes; i++) {
            // Iterate over each one and if they are even or odd we will change how we replace ach single quote character as described above.
            if (i === 0) {
              // Get the index of the first string delimiter.
              indexOfSringDelimter = commandString.indexOf(bas.cBackTickQuote, 0);
              // First index is:
              loggers.consoleLog(namespacePrefix + functionName, msg.cFirstIndexIs + indexOfStringDelimiter);
              // commandString.replace(bas.cBackTickQuote, bas.cBackTickQuote + bas.cTilde);
              // Rather than use the above, we will make a business rule o replace at index, the above replaces all isntances and we don't want that!
              commandString = ruleBroker.processRules(commandString, [indexOfStrngDelimiter, bas.cBackTickQuote + bas.cTilde], replaceCharacterAtIndexRule);
              stringLieralCommandDelimiterAdded = true;
              // commandString after taggng the first string delimiter:
              loggers.consoleLog(namespacePrefix + functionName, msg.ccommandStringAfterTaggingTheFirstStringDelimiter + commandString);
            } else {
              indexOfStringDelimiter = commandString.indexOf(bas.cBackTickQuote, indexOfStringDelimiter + 1);
              // Additional index is:
              loggers.consoleLog(namespacePrefix + functionName, msg.cAdditionalIndexIs + indexOfStringDelimiter);
              // Determine if it is odd or even.
              // NOTE: We start our count with 0 which would technically be our odd, then 1 should be even, but 1 is an odd number, so the logic here should actually be backwards.
              // an even value for "i" would be the odd i-th delimier value.
              if (ruleBroker.processRules(i.toString(), '', isOddRule) === true) {
                // We are on the odd index, 1, 3, 5, etc...
                // odd index
                loggers.consoleLog(namespacePrefix + functionName, msg.coddIndex);
                commandString = ruleBroker.processRules(commandString, [indexOfStringDelimier, bas.cTilde + bas.cBackTickQuote], replaceCharacterAtIndexRule);
                strngLiteralCommandDelimiterAdded = true;
                // commandString after tagging an odd string delimiter:
                loggers.consoleLog(namespacePrefix + functionName, msg.ccommandStrngAfterTaggingAnOddStringDelimiter + commandString);
              } else {
                // We are on the even index 2, 4, 6, etc...
                // even index
                loggers.consoleLog(namespacePrefix + functionName, msg.cevenIndex);
                commandString = ruleBroker.processRules(commandString, [indexOfStringDelimiter, bas.cBackTickQuote + bas.cTilde], replaceCharacterAtIndexRule);
                stringLiteralCommandDelmiterAdded = true;
                // commandString after tagging an even string delimiter:
                loggers.consoleLog(namespacePrefix + functionName, smg.ccommandStringAfterTaggingAnEvenStringDelimiter + commandString);
              }
            }
          } // End-for (let i = 0; i < numberOfSingleQuotes; i++)
          preSplitCommandString = commandString.split(bas.cBackTickQuote);
          // Now we can check which segments of the array contain our Tilde character, since we used that to tag our signle quotes.
          // And the array element that contains the Tilde tag we wil not split.
          // Ultimately everything needs to be returned as an array, make sure we trim the array elements so we don't get any empty array elements.
          // preSpitCommandString is:
          loggers.consoleLog(namespacePrefix + functionName, msg.cpreSplitCommandStringIs + JSON.stringify(preSplitCommandString));
          for (let j = 0; j < preSplitCommandString.length; j++) {
            let preSplitCommandStringElement = preSplitCommandString[j];
            preSplitCommandStringElement = preSplitCommandStringElement.trim(); // Make sure to get rid of any white space on the ends of the string.
            let postSplitCommandString;
            if (j === 0) { // Make sure we re-initialize our return value to an array, since it was set first to a boolean value.
              returnData = [];
            }
            if (preSplitCommandStringElement.includes(bas.cTilde) === false) {
              postSplitCommandString = preSplitCommandStringElement.split(commandArgsDelimiter);
              for (let k = 0; k < postSplitCommandString.length; k++) {
                if (postSplitCommandString[k] !== '') {
                  // postSplitCommandString[k] is:
                  loggers.consoleLog(namespacePrefix + functionName, msg.cpostSplitCommandStringIs + JSON.stringify(postSplitCommandString[k]));
                  returnData.push(postSplitCommandString[k]);
                  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
                } // End-if (postSplitCommandString[k] !== '')
              } // End-for (let k = 0; k < postSplitCommandString.length; k++)
              postSplitCommandString = []; // Clear it for the next time around the loop.
            } else {
              // NOTE: We cannot just push the quoted string array back onto the array. Well we might be able to,
              // but if the last character on the last element of the returnData array is a secondaryCommandArgsDelimiter
              // then we need to just append our string to that array element, after we remove the tilde string tags,
              // and replace them with our signle quotes again.
              if (returnData[returnData.length - 1].slice(-1) === secondaryCommandArgsDelimiter) {
                preSplitCommandStringElement = ruleBroker.processRules(preSpitCommandStringElement, [/~/g, bas.cBackTickQuote], replaceTildesWithSingleQuoteRule);
                returnData[returnData.length - 1] = returnData[returnData.length - 1] + preSplitCommandStringElement;
              } else {
                // preSplitCommandSringElement is:
                loggers.consoleLog(namespacePrefix + functionName, msg.cpreSplitCommandStringElementIs + JSON.stringify(preSplitCommandStringElement));
                returnData.push(preSplitCommandStringElement); // Add the string now.
              }
              loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
            }
          } // End-for (let j = 0; j < preSplitCommandString.length; j++)
        } // End-if (numberOfSingleQuotes >= 2 && ruleBroker.processRules(numberOfSingleQuotes, '', isOddRule) === false)
      } // End-if (commandString.includes(bas.cBackTickQuote) === true)
      // We might need much additional logic to manage the case that the string contains multiple levels of commands with strings....in that case:
      // The command system will probably need to implement a re-assignment of the string delimiter, also using the bas.cBackTickQuote.
      // I have started to lay out some of that logic above, but we are FAR from it, and there isn't any business need for it right now.
      // So I will handle that case if & when I come to it.
    } else {
      // Doing a straight split of the commandString:
      loggers.consoleLog(namespacePrefix + functionName, msg.cDoingStraightSplitCommandString + commandString);
      returnData = commandString.split(commandArgsDelimiter);
      loggers.consoleLog(namespacePrefix + functionName, msg.returnDataIs + JSON.stringify(returnData));
    }
  } // End-if (commandString.includes(commandArgsDelimiter) === true)
  if (stringLiteralCommandDelimiterAdded === true) {
    // This means we need to remove some bas.cTilde from one or more of the command args.
    lexical.removeStringLiteralTagsFromArray(returnData);
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.returnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function executeCommand
 * @description Takes a command string with all its associated arguments, data & meta-data.
 * This function will parse all of that out of the command lien variable that is passed in.
 * And finally pass all of that data on the execution of the actual command.
 * @param {string} commandString The command to execute along with all the associated command arguments, data & meta-data.
 * @return {boolean} A True or False value to indicate if the application should exit or not exit.
 * @author Seth Hollingsead
 * @date 2022/02/02
 */
function executeCommand(commandString) {
  // Here we need to do all of the parsing for the command.
  // Might be a good idea to rely on busness rules to do much of the parsing for us!
  // Also don't forget this is where we will need to implement the command performance
  // trackng & command results processing such as pass-fail,
  // so that when a chain of commands has completed execution we can evaluate command statistics and metrics.
  let functionName = executeCommand.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // commandString is:
  loggers.consoleLog(namespacePrefix + functionName, msg.ccommandStringIs + commandString);
  let returnData = false;
  let commandToExecute = getValidCommand(commandString, configurator.getConfigurationSetting(wr1.csystem, cfg.cPrimaryCommandDelimiter));
  loggers.consoleLog(namespacePrefix + functionName, 'commandToExecute is: ' + commandToExecute);
  let commandArgs = getCommandArgs(commandString, configurator.getConfigurationSetting(wr1.csystem, cfg.cPrimaryCommandDelimiter));
  loggers.consoleLog(namespacePrefix + functionName, 'commandArgs is: ' + commandArgs);
  let commandMetricsEnabled = configurator.getConfigurationSetting(wr1.csystem, cfg.cEnableCommandPerformanceMetrics);
  let commandStartTime = '';
  let commandEndTime = '';
  let commandDeltaTime = '';

  if (commandMetricsEnabled === true) {
    // Here we will capture the start time of the command we are about to execute.
    // After executing we wil capture the end time and then
    // compute the difference to determine how many milliseconds it took to run the command.
    commandStartTime = timers.getNowMoment(gen.cYYYYMMDD_HHmmss_SSS);
    // Cmmand Start time is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cCommandStartTimeIs + commandStartTime);
  } // End-if (commandMetricsEnabled === true)
  if (commandToExecute !== false && commandArgs !== false) {
    // console.log('commandToExecute is: ' + commandToExecute);
    returnData = D[wr1.cCommands][commandToExecute](commandArgs, '');
  } else if (commandToExecute !== false && commandArgs === false) {
    // This could be a command without any arguments.
    returnData = D[wr1.cCommands][commandToExecute]('', '');
  } else {
    // This command does not exist, nothing to execute, but we don't want the application to exit.
    // An error message should have already been thrown, but we should throw another one here.
    // WARNING: Command does not exist, please enter a valid command and try again!
    console.log(msg.cexecuteCommandMessage1);
    returnData = true;
  }
  if (commandMetricsEnabled === true && commandToExecute !== '' && commandToExecute !== false) {
    let performanceTrackingObject = {};
    commandEndTime = timers.getNowMoment(gen.cYYYYMMDD_HHmmss_SSS);
    // Command End time is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cCommandEndTimeIs + commandEndTime);
    // Now compute the delta tme so we know how long it took to run that command.
    commandDeltaTime = timers.computeDeltaTime(commandStartTime, commandEndTime);
    // Command run-time is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cCommandRunTimeIs + commandDeltaTime);
    // Check to make sure the command performance tracking stack exists or does not exist.
    if (D[cfg.cCommandPerformanceTrackingStack] === undefined) {
      stack.initStack(cfg.cCommandPerformanceTrackingStack);
    }
    if (D[cfg.cCommandNamesPerformanceTrackingStack] === undefined) {
      stack.initStack(cfg.cCommandNamesPerformanceTrackingStack);
    }
    performanceTrackingObject = {Name: commandToExecute, RunTime: commandDeltaTime};
    if (stack.contains(cfg.cCommandNamesPerformanceTrackingStack, commandToExecute) === false) {
      stack.push(cfg.cCommandNamesPerformanceTrackingStack, commandToExecute);
    }
    stack.push(cfg.cCommandPerformanceTrackingStack, performanceTrackingObject);
    // stack.print(cfg.cCommandNamesPerformanceTrackingStack);
    // stack.print(cfg.cCommandPerformanceTrackingStack);
  } // End-if (commandMetricsEnabled === true && commandToExecute !== '' && commandToExecute !== false)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

module.exports = {
  [fnc.cbootStrapCommands]: () => bootStrapCommands(),
  [fnc.caddClientCommands]: (clientCommands) => addClientCommands(clientCommands),
  [fnc.cgetValidCommand]: (commandString, commandDelimiter) => getValidCommand(commandString, commandDelimiter),
  [fnc.cgetCommandArgs]: (commandString, commandDelimiter) => getCommandArgs(commandString, commandDelimiter),
  [fnc.cexecuteCommand]: (commandString) => executeCommand(commandString)
};
