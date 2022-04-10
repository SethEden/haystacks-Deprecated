/**
 * @file clientStringParsing.js
 * @module clientStringParsing
 * @description Contains all client defined business rules for parsing strings, values, arrays,
 * values of all kinds, with various operations.
 * @requires module:application.busienss.constants
 * @requires module:application.constants
 * @requires module:haystacks
 * @requires module:haystacks.basic.constants
 * @requires module:haystacks.business.constants
 * @requires module:haystacks.generic.constants
 * @requires module:haystacks.message.constants
 * @requires module:haystacks.word1.constants
 * @requires module:haystacks.system.constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/03/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_biz from '../../constants/application.business.constants.js';
import * as apc from '../../constants/application.constants.js';
// External imports
import haystacks from 'haystacks';
let bas = haystacks.bas;
let biz = haystacks.biz;
let gen = haystacks.gen;
let msg = haystacks.msg;
let sys = haystacks.sys;
let wr1 = haystacks.wr1;
import path from 'path';

const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// buildRelease.busienssRules.clientRules.clientStringParsing.
const namespacePrefix = apc.cApplicationName + bas.cDot + wr1.cbusiness + wr1.cRules + bas.cDot + wr1.cclient + wr1.cRules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function customEcho
 * @description A quick business rule to validate that the new dynamic data storage technique for business rules.
 * @param {string} inputData The string input data.
 * @param {string} inputMetaData The string of input meta-data.
 * @return {string} An echo of the inputData with some hard-coded modifier.
 * @author Seth Hollingsead
 * @date 2022/03/13
 */
const customEcho = function(inputData, inputMetaData) {
  let functionName = customEcho.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData;
  // clientStringParsing.customEcho
  returnData = inputData + bas.cSpace + app_msg.cclientStringParsingDotCustomEcho;
  console.log(returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
};

/**
 * @function buildReleasePackage
 * @description Add all the files from the sourceFolder into a zip file and
 * give a name to the file for the current date-time and release version, saving to the destination folder.
 * @param {string} inputData The folder that should be packaged up for the release zip file.
 * @param {string} inputMetaData The folder where the zip file release package should be saved.
 * @return {boolean} A true or False to indicate if the release package process is sucessful or not.
 * @author Seth Hollingsead
 * @date 2022/04/07
 */
const buildReleasePackage = function(inputData, inputMetaData) {
  let functionName = buildReleasePackage.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  let releaseFiles = [];
  let releasedArchiveFiles = [];
  let currentVersion = haystacks.getConfigurationSetting(wr1.csystem, sys.cFrameworkVersionNumber);
  let frameworkName = haystacks.getConfigurationSetting(wr1.csystem, sys.cFrameworkName);
  let currentVersionReleased = false;
  let releaseDateTimeStamp;
  let originalSource, originalDestination;
  // current version is:
  haystacks.consoleLog(namespacePrefix, functionName, msg.ccurrentVersionIs + currentVersion);
  originalSource = path.resolve(inputData);
  originalDestination = path.resolve(inputMetaData);
  releaseFiles = haystacks.executeBusinessRule(biz.creadDirectoryContents, originalSource, '');
  releasedArchiveFiles = haystacks.executeBusinessRule(biz.creadDirectoryContents, originalDestination, '');
  // released archive files list is:
  haystacks.consoleLog(namespacePrefix, functionName, msg.creleasedArchiveFilesListIs + JSON.stringify(releasedArchiveFiles));
  // Check if the current version number has already een released as a zip file in the Release folder.
  // If it has ot been released, then we can build the zip file with the current reelase number and date-time stamp.
  for (let i = 0; i <= releasedArchiveFiles.length - 1; i++) {
    // file is:
    haystacks.consoleLog(namespacePrefix, functionName, msg.cfileIs + releasedArchiveFiles[i]);
    let pathAndFileName = releasedArchiveFiles[i];
    let fileName = haystacks.executeBusinessRule(biz.cgetFileNameFromPath, pathAndFileName, '');
    fileName = haystacks.executeBusinessRule(biz.cremoveFileExtensionFromFileName, fileName, '');
    // fileName is:
    haystacks.consoleLog(namespacePrefix, functionName, msg.cfileNameIs + fileName);
    if (fileName.includes(currentVersion) === true) {
      currentVersionReleased = true;
    }
  } // End-for (let i = 0; i <= releasedArchiveFiles.length - 1; i++)
  if (currentVersionReleased === false) {
    // release Files list is:
    haystacks.consoleLog(namespacePrefix, functionName, msg.creleaseFilesListIs + JSON.stringify(releaseFiles));
    releaseDateTimeStamp = haystacks.executeBusinessRule(biz.cgetNowMoment, haystacks.getConfigurationSetting(wr1.csystem, sys.cdateTimeStamp), '');
    // release date-time stamp is:
    haystacks.consoleLog(namespacePrefix, functionName, msg.creleaseDateTimeStampIs + releaseDateTimeStamp);
    let releaseFileName = releaseDateTimeStamp + bas.cUnderscore + currentVersion + bas.cUnderscore + frameworkName;
    // release fileName is:
    haystacks.consoleLog(namespacePrefix, functionName, msg.creleaseFileNameIs + releaseFileName);
    let fullReleasePath = path.resolve(originalDestination + bas.cForwardSlash + releaseFileName + gen.cDotzip);
    returnData = haystacks.executeBusinessRule(biz.ccreateZipArchive, originalSource, fullReleasePath);
    if (returnData) {
      // Set the return package success flag to True.
      haystacks.consoleLog(namespacePrefix, functionName, msg.cSetTheReturnPackageSuccessFlagToTrue);
    }
  } else {
    // current version already released
    haystacks.consoleLog(namespacePrefix, functionName, msg.ccurrentVersionAlreadyReleased);
  }
  haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
};

export default {
  customEcho,
  buildReleasePackage
};
