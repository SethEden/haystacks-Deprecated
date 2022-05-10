/**
 * @file dataDirectorate.js
 * @module dataDirectorate
 * @description Contains all of the data directorate commands.
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import dataBroker from '../../brokers/dataBroker.js';
import configurator from '../../executrix/configurator.js';
import loggers from '../../executrix/loggers.js';
import D from '../../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cmd, cfg, fnc, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// commandsBlob.commands.dataDirectorate.
const namespacePrefix = sys.ccommandsBlob + bas.cDot + wrd.ccommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function printDataHive
 * @description Prints out all the data contents of a particular data hive in the D-data structure.
 * If no hive is specified then the entire D-data structure will be printed.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a dat hive name at the top level of the D-data structure.
 * Examples: Configuration, Workflows, Colors, cCommandAliases, etc...
 * inputData[0] === 'printDataHive'
 * inputData[1] === dataHiveName
 * @NOTE This function is now going to support printing specific child data-hives.
 * Example: ConstantsValidationData.ColorConstantsValidation
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/24
 */
const printDataHive = function(inputData, inputMetaData) {
  let functionName = printDataHive.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  let printDataHiveToLogFileConfigSetting = configurator.getConfigurationSetting(wrd.csystem, cfg.cprintDataHiveToLogFile);
  let logFilePathAndName = '';
  // if (printDataHiveToLogFileConfigSetting === true) {
    logFilePathAndName = loggers.getLogFileNameAndPath();
    // logFilePathAndName is:
    loggers.consoleLog(namespacePrefix + functionName, msg.clogFilePathAndNameIs + logFilePathAndName);
  // }
  if (inputData && inputData[1].includes(bas.cDot) === true) {
    let dataHivePathArray = inputData[1].split(bas.cDot);
    let leafDataHiveElement = D;
    // dataHivePathArray is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cdataHivePathArrayIs + JSON.stringify(dataHivePathArray));
    // This for-loop should let us drill down in the D-Data structure followign the path that was provided.
    // This assumes the namespace style path provided is a valid heirarchy in the D-Data Structure.
    for (let i = 0; i < dataHivePathArray.length; i++) {
      // BEGIN i-th iteration:
      loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_ithIteration + i);
      leafDataHiveElement = leafDataHiveElement[dataHivePathArray[i]];
      // contents of leafDataHiveElement is:
      loggers.consoleLog(namespacePrefix + functionName, msg.ccontentsOfLeafDataHiveElementIs + JSON.stringify(leafDataHiveElement));
      // END i-th iteration:
      loggers.consoleLog(namespacePrefix + functionName, msg.cEND_ithIteration + i);
    }
    console.log(inputData[1] + bas.cSpace + msg.ccontentsAre + JSON.stringify(leafDataHiveElement));
    if (printDataHiveToLogFileConfigSetting === true) {
      loggers.printMessageToFile(logFilePathAndName, inputData[1] + bas.cSpace + msg.ccontentsAre + JSON.stringify(leafDataHiveElement));
    }
  } else {
    if (D[inputData[1]] !== undefined) {
      // contents are:
      console.log(inputData[1] + bas.cSpace + msg.ccontentsAre + JSON.stringify(D[inputData[1]]));
      if (printDataHiveToLogFileConfigSetting === true) {
        loggers.printMessageToFile(logFilePathAndName, inputData[1] + bas.cSpace + msg.ccontentsAre + JSON.stringify(D[inputData[1]]));
      }
    } else {
      // contents of D are:
      console.log(msg.ccontentsOfDare + JSON.stringify(D));
      if (printDataHiveToLogFileConfigSetting === true) {
        loggers.printMessageToFile(logFilePathAndName, msg.ccontentsOfDare + JSON.stringify(D));
      }
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function printDataHiveAttributes
 * @description Prints out all of the attributes for a given specified data-set from the D-data structure.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a data hive or leaf data structure in the heirarchy and
 * a name of an attribute where all values should be printed.
 * Examples ConstantsValidationData.ColorConstantsValidation.Actual
 * inputData[0] === 'printDataHiveAttributes'
 * inputData[1] === ConstantsValidationData.ColorConstantsValidation.Actual
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/24
 */
const printDataHiveAttributes = function(inputData, inputMetaData) {
  let functionName = printDataHiveAttributes.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (inputData && inputData.length > 1) {
    if (inputData[1].includes(bas.cDot) === true) {
      let dataHivePathArray = inputData[1].split(bas.cDot);
      let leafDataHiveElement = D;
      // dataHivePathArray is:
      loggers.consoleLog(namespacePrefix + functionName, msg.cdataHivePathArrayIs + JSON.stringify(dataHivePathArray));
      // This for-loop should let us drill down in the D-Data structue following the path that was provided.
      // This assumes the namespace style path provided is a valid heirarchy in the D-Data Structure.
      // Make sure we don't try to grab the very last term of the namespace. See note below.
      for (let i = 0; i < dataHivePathArray.length - 1; i++) {
        // BEGIN i-th iteration:
        loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_ithIteration + i);
        leafDataHiveElement = leafDataHiveElement[dataHivePathArray[i]];
        // contents of leafDataHiveElement is:
        loggers.consoleLog(namespacePrefix + functionName, msg.ccontentsOfLeafDataHiveElementIs + JSON.stringify(leafDataHiveElement));
        // END i-th iteration:
        loggers.consoleLog(namespacePrefix + functionName, msg.cEND_ithIteration + i);
      } // End-for (let i = 0; i < dataHivePathArray.length - 1; i++)
      loggers.consoleLog(namespacePrefix + functionName, inputData[1] + bas.cSpace + msg.ccontentsAre + JSON.stringify(leafDataHiveElement));
      let attributeName = dataHivePathArray[dataHivePathArray.length - 1];
      if (leafDataHiveElement && leafDataHiveElement.length > 0) {
        let leafDataHiveElementKeys1 = Object.keys(leafDataHiveElement);
        for (let j = 0; j < leafDataHiveElement.length; j++) {
          let dataEntry = leafDataHiveElement[j];
          if (dataEntry) {
            if (attributeName.toLowerCase() === wrd.centity) {
              // entity is:
              console.log(msg.centryIs + JSON.stringify(dataEntry));
            } else {
              if (dataEntry[attributeName]) {
                // attributeValue is:
                console.log(msg.cattributeValueIs + dataEntry[attributeName]);
              } // End-if (dataEntry[attributeName])
            }
          } // End-if (dataEntry)
        } // End-for (let j = 0; j < leafDataHiveElement.length; j++)
      } else {
        let leafDataHiveElementKeys2 = Object.keys(leafDataHiveElement);
        leafDataHiveElementKeys2.forEach((key2) => {
          if (attributeName.toLowerCase() === wrd.ckey) {
            // key2 is:
            console.log(msg.ckey2Is + key2);
          } else if (attributeName.toLowerCase() === wrd.centity) {
            // entity is:
            console.log(msg.centityIs + JSON.stringify(leafDataHiveElement[key2]));
          } else {
            let dataEntry2 = leafDataHiveElement[key2];
            if (dataEntry2) {
              // attributeValue is:
              console.log(msg.cattributeValueIs + dataEntry2[attributeName]);
            } // End-if (dataEntry2)
          }
        });
      }
    } else { // End-if (inputData[1].includes(bas.cDot) === true)
      // This is the case that the user has probably just specified a single data hive
      // that might not have specific attribute names such as the configuration data.
      console.log(msg.cprintDataHiveAttributesMessage1 + msg.cprintDataHiveAttributesMessage2);
    }
  } else { // End-if (inputData && inputData.length > 1)
    console.log(msg.cprintDataHiveAttributesMessage3);
  } // End-else condition if (inputData && inputData.length > 1)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function clearDataStorage
 * @description Completely wipes out all the data stored in the DataStorage data hive of the D data structure.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a data storage name to clear.
 * If none is provided, the all data storage will be cleared!
 * inputData[0] === 'clearDataStorage'
 * inputData[1] === myDataStorage
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2022/02/24
 */
const clearDataStorage = function(inputData, inputMetaData) {
  let functionName = clearDataStorage.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (inputData[1] !== undefined) {
    dataBroker.clearData(inputData[1]);
  } else {
    dataBroker.clearData('');
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

export default {
  printDataHive,
  printDataHiveAttributes,
  clearDataStorage
};
