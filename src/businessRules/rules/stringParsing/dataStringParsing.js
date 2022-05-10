/**
 * @file dataStringParsing.js
 * @module dataStringParsing
 * @description Contains all system defined business rules for parsing strings as related to data.
 * @requires module:ruleParsing
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/25
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleParsing from '../ruleParsing.js';
import loggers from '../../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, clr, cfg, gen, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.stringParsing.dataStringParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.cstring + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function getAttributeName
 * @description Takes a string representation of a JSON attribute and gets the name (left hand assignment key).
 * @param {string} inputData Teh string representation of the JSON attribute that should be parsed.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The name of the attribute.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
const getAttributeName = function(inputData, inputMetaData) {
  let functionName = getAttributeName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let attributeArray = inputData.split(bas.cColon);
    // attributeArray is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cattributeArrayIs + JSON.stringify(attributeArray));
    // attributeArray[0] is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cattributeArray0Is + attributeArray[0]);
    returnData = ruleParsing.processRulesInternal([attributeArray[0], [/"/g, '']], [biz.creplaceCharacterWithCharacter]);
    returnData = returnData.trim();
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getAttributeValue
 * @description Takes a string representation of a JSON attribute and gets the value (Right hand assignment value).
 * @param {string} inputData The string representation of the JSON attribute that should be parsed.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The value of the attribute.
 * @author Seth Hollingsead
 * @date 2022/01/10
 */
const getAttributeValue = function(inputData, inputMetaData) {
  let functionName = getAttributeValue.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let attributeArray = inputData.split(bas.cColon);
    // attributeArray is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cattributeArrayIs + attributeArray);
    // attributeArray[0] is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cattributeArray1Is + attributeArray[1]);
    returnData = ruleParsing.processRulesInternal([attributeArray[1], [/"/g, '']], [biz.creplaceCharacterWithCharacter]);
    returnData = returnData.trim();
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getValueFromAssignmentOperationString
 * @description Parses the input string and finds the value on the right side of the '=' sign.
 * @param {string} inputData The string that should be parsed for the value on the right side of the assignmet operator.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string value of whatever is on the right side of the assinment operator.
 * @author Seth Hollingsead
 * @date 2022/01/23
 */
const getValueFromAssignmentOperationString = function(inputData, inputMetaData) {
  let functionName = getValueFromAssignmentOperationString.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let parsedString = inputData.split(bas.cEqual);
    loggers.consoleLog(namespacePrefix + functionName, msg.cparsedStringSpaceTerm + bas.cSpace + num.c1 + msg.cSpaceIsColonSpace + parsedString[0]);
    loggers.consoleLog(namespacePrefix + functionName, msg.cparsedStringSpaceTerm + bas.cSpace + num.c2 + msg.cSpaceIsColonSpace + parsedString[1]);
    returnData = parsedString[1].replace(/['"]+/g, '');
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getDataCatagoryFromDataContextName
 * @description Gets the data catagory from the context name, E.g. Input: Page_ProjectList, data catagory is 'Page'.
 * @param {string} inputData The data context name, which should also contain the data catagory seperated by underscore.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The data catagory, such as Page or Test.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const getDataCatagoryFromDataContextName = function(inputData, inputMetaData) {
  let functionName = getDataCatagoryFromDataContextName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let dataCatagory = inputData.split(bas.cUnderscore);
    returnData = dataCatagory[0];
    // Data Catagory should be:
    loggers.consoleLog(namespacePrefix + functionName, msg.cDataCatagoryShouldBe + dataCatagory[0]);
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getDataCatagoryDetailNameFromDataContextName
 * @description Gets the data catagory detail name from the context name, E.G. Input: Page_ProjectList, data catagory is 'ProjectList'.
 * @param {string} inputData The data context name, which should also contain the
 * data catagory and data catagory detail name seperated by an underscore.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The data catagory detail name, such as ProjectDetails or ProjectList.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const getDataCatagoryDetailNameFromDataContextName = function(inputData, inputMetaData) {
  let functionName = getDataCatagoryDetailNameFromDataContextName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let dataCatagoryDetailName = inputData.split(bas.cUnderscore);
    returnData = dataCatagoryDetailName[1];
    // Data Catagory Detail Name should be:
    loggers.consoleLog(namespacePrefix + functionName, msg.cDataCatagoryDetailNameShouldBe + dataCatagoryDetailName[1]);
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getKeywordNameFromDataContextName
 * @description Gets the keyword name from the context name, E.g. Input: Keywords_ProjectDetails_DeleteEntireProject, keyword is: 'DeleteEntireProject'.
 * @param {string} inputData The data context name, which should also contain the
 * data catagory and data catagory detail name and keyword name seperated by an underscore.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The keyword name, such as DeleteEntireProject or EditProjectInfoClick.
 * @author Seth Hollingsead
 * @date 2022/01/24
 */
const getKeywordNameFromDataContextName = function(inputData, inputMetaData) {
  let functionName = getKeywordNameFromDataContextName.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let dataCatagoryKeywordName = inputData.split(bas.cUnderscore);
    returnData = dataCatagoryKeywordName[2];
    // Keyword Name should be:
    loggers.consoleLog(namespacePrefix + functionName, msg.cKeywordNameShouldBe + dataCatagoryKeywordName[2]);
  } // End-if (inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function loadDataFile
 * @description Loads data from a specified file and stores it in the specified data hive path.
 * @param {string} inputData The full path and file name for the file that should be loaded into memory.
 * @param {string} inputMetaData The data hive path where the data should be stored once it is loaded.
 * @return {boolean} The data that was loaded, because sometimes a client command might need to use this to load data.
 * @author Seth Hollingsead
 * @date 2022/01/25
 */
const loadDataFile = function(inputData, inputMetaData) {
  let functionName = loadDataFile.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  let getXmlRule = [];
  let getCsvRule = [];
  let getJsonRule = [];
  getXmlRule[0] = biz.cgetXmlData;
  getCsvRule[0] = biz.cgetCsvData;
  getJsonRule[0] = biz.cgetJsonData;
  if (!inputData) {
    // WARNING: No data to load, please specify a valid path & filename!
    loggers.consoleLog(namespacePrefix + functionName, msg.cLoadDataFileMessage1 + msg.cloadDataFileMessage2);
    returnData = false;
  } else { // Else-clause if (!inputData)
    let loadedData = {};
    if (inputData.includes(gen.cDotxml) || inputData.includes(gen.cDotXml) || inputData.includes(gen.cDotXML)) {
      // Attempting to load XML data!
      loggers.consoleLog(namespacePrefix + functionName, msg.cAttemptingToLoadXmlData);
      loadedData = ruleBroker.processRules(inputData, '', getXmlRule);
    } else if (inputData.includes(gen.cDotcsv) || inputData.includes(gen.cDotCsv) || inputData.includes(gen.cDotCSV)) {
      // Attempting to load CSV data!
      loggers.consoleLog(namespacePrefix + functionName, msg.cAttemptingToLoadCsvData);
      loadedData = ruleBroker.processRules(inputData, '', getCsvRule);
    } else if (inputData.includes(gen.cDotjson) || inputData.includes(gen.cDotJson) || inputData.includes(gen.cDotJSON)) {
      // Attempting to load JSON data!
      loggers.consoleLog(namespacePrefix + functionName, msg.cAttemptingToLoadJsonData);
      loadedData = ruleBroker.processRules(inputData, '', getJsonRule);
    } else {
      // WARNING: Invalid file format, file formats supported are:
      loggers.consoleLog(namespacePrefix + functionName, msg.cloadedDataFileMessage3 + supportedFileFormatsAre());
    }
    // Loaded data is:
    loggers.consoleLog(namespacePrefix + functionName, msg.cLoadedDataIs + JSON.stringify(loadedData));
    returnData = loadedData;
    if (loadedData !== null && loadedData && inputMetaData) {
      dataBroker.storeData(inputMetaData, loadedData);
    }
  } // End-else-clause if (!inputData)
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function saveDataFile
 * @description Saves data from a specified data to a specified path and file name.
 * @param {string} inputData The full path and file name were the data should be saved.
 * @param {object} inputMetaData The data that should be saved out to the specified file.
 * @return {boolean} True or False value to indicate if the file was saved successfully or not.
 * @author Seth Hollingsead
 * @date 2022/03/17
 */
const saveDataFile = function(inputData, inputMetaData) {
  let functionName = saveDataFile.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  let writeJsonRule = [];
  writeJsonRule[0] = biz.cwriteJsonData;
  if (!inputData) {
    // WARNING: No data to save, please specify a valid path & filename!
    loggers.consoleLog(namespacePrefix + functionName, msg.csaveDataFileMessage1 + msg.cloadDataFileMessage2);
    returnData = false;
  } else {
    if (inputData.includes(gen.cDotxml) || inputData.includes(gen.cDotXml) || inputData.includes(gen.cDotXML)) {
      // WARNING: Invalid file format, file formats supported are:
      loggers.consoleLog(namespacePrefix + functionName, msg.cloadedDataFileMessage3 + supportedFileFormatsAre());
    } else if (inputData.includes(gen.cDotcsv) || inputData.includes(gen.cDotCsv) || inputData.includes(gen.cDotCSV)) {
      // WARNING: Invalid file format, file formats supported are:
      loggers.consoleLog(namespacePrefix + functionName, msg.cloadedDataFileMessage3 + supportedFileFormatsAre());
    } else if (inputData.includes(gen.cDotjson) || inputData.includes(gen.cDotJson) || inputData.includes(gen.cDotJSON)) {
      returnData = ruleBroker.processRules(inputData, inputMetaData, writeJsonRule); // Should return true if the write is successful.
    } else {
      // WARNING: Invalid file format, file formats supported are:
      loggers.consoleLog(namespacePrefix + functionName, msg.cloadedDataFileMessage3 + supportedFileFormatsAre());
    }
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function getUserNameFromEmail
 * @description Converts an email input into a username.
 * @param {string} inputData A string that contains an email address value.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string value of the sub-string from before the '@' symbol.
 * @author Seth Hollingsead
 * @date 2022/01/21
 */
const getUserNameFromEmail = function(inputData, inputMetaData) {
  let functionName = getUserNameFromEmail.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    loggers.consoleLog(namespacePrefix + functionName, msg.cIndexOfTheSpace + bas.cAt +
      sys.cSpaceIsColonSpace + inputData.indexOf(bas.cAt));
    returnData = inputData.substr(0, inputData.indexOf(bas.cAt));
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};

export default {
  getAttributeName,
  getAttributeValue,
  getValueFromAssignmentOperationString,
  getDataCatagoryFromDataContextName,
  getDataCatagoryDetailNameFromDataContextName,
  getKeywordNameFromDataContextName,
  loadDataFile,
  saveDataFile,
  getUserNameFromEmail
};
