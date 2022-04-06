/**
 * @file clientCommands.js
 * @module clientCommands
 * @description Contains all client defined  commands for execution client actions with various operations.
 * @requires module:application.configuration.constants
 * @requires module:application.constants
 * @requires module:application.message.constants
 * @requires module:haystacks
 * @requires module:haystacks.basic.constants
 * @requires module:haystacks.business.constants
 * @requires module:haystacks.configuration.constants
 * @requires module:haystacks.generaic.constants
 * @requires module:haystacks.message.constants
 * @requires module:haystacks.numeric.constants
 * @requires module:haystacks.system.constants
 * @requires module:haystacks.word1.constants
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/03/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_cfg from '../../constants/application.configuration.constants.js';
import * as apc from '../../constants/application.constants.js';
import * as app_msg from '../../constants/application.message.constants.js';
// External imports
import haystacks from 'haystacks';
let bas = haystacks.bas;
let biz = haystacks.biz;
let cfg = haystacks.cfg;
let gen = haystacks.gen;
let msg = haystacks.msg;
let num = haystacks.num;
let sys = haystacks.sys;
let wr1 = haystacks.wr1;
import chalk from 'chalk';
import path from 'path';

const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// buildRelease.commands.cientCommands.clientCommands.
const namespacePrefix = apc.cApplicationName + bas.cDot + wr1.ccommands + bas.cDot + wr1.cclient + wr1.cCommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function customEchoCommand
 * @description A quick command to validate that the new
 * dynamic data storage technique for client commands is working.
 * @param {string} inputData The string input data.
 * @param {string} inputMetaData The string of input meta-data.
 * @return {string} An echo of the input Data with some hard-coded modifier.
 * @author Seth Hollingsead
 * @date 2022/03/13
 */
const customEchoCommand = function(inputData, inputMetaData) {
  let functionName = customEchoCommand.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  returnData = inputData + app_msg.cclientStringParsingDotCustomEcho;
  console.log(returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function deployMetaData
 * @description Copies application meta-data from the soure to the destination.
 * @param {object} inputData The data that should be transfered to the output file & path.
 * @param {string} inputMetaData The path the data should be written out to.
 * @return {boolean} A True or False value to indicate if the data was copied successfully or not.
 * @author Seth Hollingsead
 * @date 2022/03/14 Happy Pi day!! 3.141562653589793238462643383279502884197169399
 */
const deployMetaData = function(inputData, inputMetaData) {
  let functionName = deployMetaData.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;

  // inputData.shift(); // Remove the first element of the array, because that is what is used to call this command.
  // @Reference: {@Link https://stackoverflow.com/questions/9153571/is-there-a-way-to-get-version-from-package-json-in-nodejs-code}
  let frameworkMetaDataPathAndFilename = haystacks.getConfigurationSetting(wr1.csystem, cfg.cframeworkRootPath);
  frameworkMetaDataPathAndFilename = frameworkMetaDataPathAndFilename + bas.cForwardSlash + sys.cpackageDotJson;
  frameworkMetaDataPathAndFilename = path.resolve(frameworkMetaDataPathAndFilename);
  let frameworkMetaData = haystacks.executeBusinessRule(biz.cloadDataFile, frameworkMetaDataPathAndFilename, false);
  let frameworkName = frameworkMetaData[wr1.cname];
  let frameworkVersion = frameworkMetaData[wr1.cversion];
  let frameworkDescription = frameworkMetaData[wr1.cdescription];
  let metaDataOutput = {};
  metaDataOutput = {
    Name: frameworkName,
    Version: frameworkVersion,
    Description: frameworkDescription
  };

  let metaDataPathAndFilename = haystacks.getConfigurationSetting(wr1.csystem, cfg.cframeworkConfigPath);
  metaDataPathAndFilename = path.resolve(metaDataPathAndFilename + sys.cmetaDatadotJson);
  // metaDataPathAndFilename is:
  haystacks.consoleLog(namespacePrefix, functionName, msg.cmetaDataPathAndFilenameIs + metaDataPathAndFilename);
  // metaDataOutput is:
  haystacks.consoleLog(namespacePrefix, functionName, msg.cmetaDataOutputIs + JSON.stringify(metaDataOutput));
  haystacks.executeBusinessRule(biz.csaveDataFile, metaDataPathAndFilename, metaDataOutput);

  haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function deployApplication
 * @description Executes the deployment of the application, part of the build-deploy-release cycle.
 * This command copies the non-source code files from the src folder structure to the bin folder structure.
 * @param {string} inputData The path the non-code files should be copied from. (SOURCE)
 * @param {string} inputmetaData The path the non-code files should be copied to. (DESTINATION)
 * @return {boolean} a True or False value to indicate if the deployment was successful or not.
 * @author Seth Hollingsead
 * @date 2022/04/05
 */
const deployApplication = function(inputData, inputMetaData) {
  let functionName = deployApplication.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = true;
  if (haystacks.getConfigurationSetting(wr1.csystem, cfg.cpassAllConstantsValidation) === true &&
  haystacks.getConfigurationSetting(wr1.csystem, cfg.cpassedAllCommandAliasesDuplicateChecks) === true) {
    // DEPLOY APPLICATION
    console.log(msg.cDEPLOY_APPLICATION);
    let frameworkRootPath = haystacks.getConfigurationSetting(wr1.csystem, cfg.cframeworkRootPath)
    let sourcePath = frameworkRootPath + haystacks.getConfigurationSetting(wr1.csystem, app_cfg.csourceResourcesPath);
    let destinationPath = frameworkRootPath + haystacks.getConfigurationSetting(wr1.csystem, app_cfg.cdestinationResourcesPath);
    // sourcePath is:
    haystacks.consoleLog(namespacePrefix, functionName, app_msg.csourcePathIs + sourcePath);
    // destinationPath is:
    haystacks.consoleLog(namespacePrefix, functionName, app_msg.cdestinationPathIs + destinationPath);

  } else {
    console.log(app_msg.cERROR_DeploymentFailedValidationError);
    console.log(app_msg.cDeploymentFailureFix);
  }
  haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
};

export default {
  customEchoCommand,
  deployMetaData,
  deployApplication
};
