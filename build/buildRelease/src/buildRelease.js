#!/usr/bin/env node

/**
 * @file buildRelease.js
 * @module buildRelease
 * @description This is the main init for the buildRelease application.
 * It contains everything to build and deploy the entire npm package.
 * @requires module:clientRules
 * @requires module:clientCommands
 * @requires module:application.command.constants
 * @requires module:application.configuration.constants
 * @requires module:application.constants
 * @requires module:application.function.constants
 * @requires module:application.message.constants
 * @requires module:haystacks
 * @requires module:haystacks.constants.basic
 * @requires module:haystacks.constants.configuration
 * @requires module:haystacks.constants.generic
 * @requires module:haystacks.constants.message
 * @requires module:haystacks.constants.phonic
 * @requires module:haystacks.constants.system
 * @requires module:haystacks.constants.word1
 * @requires {@link https://www.npmjs.com/package/url|url}
 * @requires {@link https://www.npmjs.com/package/dotenv|dotenv}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/03/12
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import clientRules from './businessRules/clientRulesLibrary.js';
import clientCommands from './commands/clientCommandsLibrary.js';
import * as app_cmd from './constants/application.command.constants.js';
import * as app_cfg from './constants/application.configuration.constants.js';
import * as apc from './constants/application.constants.js';
import * as app_fnc from './constants/application.function.constants.js';
import * as app_msg from './constants/application.message.constants.js';
// External imports
import haystacks from 'haystacks';
// const {bas, cfg, } = haystacks;
let bas = haystacks.bas;
let cmd = haystacks.cmd;
let cfg = haystacks.cfg;
let gen = haystacks.gen;
let msg = haystacks.msg;
let phn = haystacks.phn;
let sys = haystacks.sys;
let wr1 = haystacks.wr1;
import url from 'url';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

let clientRootPath = '';
let frameworkRootPath = '';
let appName = '';
let appVersion = '';
let appDescription = '';
let baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// buildRelease.
let namespacePrefix = baseFileName + bas.cDot;
global.appRoot = path.resolve(process.cwd());
dotenv.config();
const {NODE_ENV} = process.env;

/**
 * @function bootStrapApplication
 * @description Setup all the testHarness appication data and configruation settings.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/13
 */
function bootStrapApplication() {
  let functionName = bootStrapApplication.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  clientRootPath = url.fileURLToPath(path.dirname(import.meta.url));
  let rootPathArray = clientRootPath.split(bas.cBackSlash);
  rootPathArray.pop(); // remove any bin or src folder from the path.
  clientRootPath = rootPathArray.join(bas.cBackSlash);
  // rootPathArray.pop();
  // rootPathArray.pop();
  // frameworkRootPath = rootPathArray.join(bas.cBackSlash);
  // console.log('frameworkRootPath is: ' + frameworkRootPath);
  let appConfig = {};
  if (NODE_ENV === wr1.cdevelopment) {
    appConfig = {
      clientRootPath: clientRootPath,
      appConfigResourcesPath: clientRootPath + apc.cFullDevResourcesPath,
      appConfigReferencePath: clientRootPath + apc.cFullDevConfigurationPath,
      clientMetaDataPath: apc.cmetaDataDevPath,
      clientCommandAliasesPath: clientRootPath + apc.cFullDevCommandsPath,
      clientWorkflowsPath: clientRootPath + apc.cFullDevWorkflowsPath,
      clientBusinessRules: {},
      clientCommands: {}
    };
  } else if (NODE_ENV === wr1.cproduction) {
    appConfig = {
      clientRootPath: clientRootPath,
      appConfigResouresPath: clientRootPath + apc.cFullProdResourcesPath,
      appConfigReferencePath: clientRootPath + apc.cFullProdConfigurationPath,
      clientMetaDataPath: apc.cmetaDataProdPath,
      clientCommandAliasesPath: clientRootPath + apc.cFullProdCommandsPath,
      clientWorkflowsPath: clientRootPath + apc.cFullProdWorkflowsPath,
      clientBusinessRules: {},
      clientCommands: {}
    };
  } else {
    // WARNING: NO .env file found! Going to defalt to the DEVELOPMENT ENVIRONMENT!
    console.log(msg.cApplicationWarningMessage1a + msg.cApplicationWarningMessage1b);
    appConfig = {
      clientRootPath: clientRootPath,
      appConfigResourcesPath: clientRootPath + apc.cFullDevResourcesPath,
      appConfigReferencePath: clientRootPath + apc.cFullDevConfigurationPath,
      clientMetaDataPath: apc.cmetaDataDevPath,
      clientCommandAliasesPath: clientRootPath + apc.cFullDevCommandsPath,
      clientWorkflowsPath: clientRootPath + apc.cFullDevWorkflowsPath,
      clientBusinessRules: {},
      clientCommands: {}
    };
  }
  // console.log('appConfig is: ' + JSON.stringify(appConfig));
  appConfig[sys.cclientBusinessRules] = clientRules.initClientRulesLibrary();
  appConfig[sys.cclientCommands] = clientCommands.initClientCommandsLibrary();
  haystacks.initFramework(appConfig);
  // console.log(`END ${namespacePrefix}${functionName} function`);
};

/**
 * @function deployApplication
 * @description This is the main function to deploy the application.
 * The function copies all non-code files from the src/application/<myAppName>/resources/ folder to the
 * bin/<myAppName>/resources/ folder.
 * Finaly all the transpiled code and non-code files are packaged togetehr nto a zip file,
 * with the date-time stamp and version number. This forms either a patch or a release.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/13
 */
function deployApplication() {
  let functionName = deployApplication.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let copyResult;
  try {
    // fse.copySync('/src/Application/NodeJS-App/Resources/*', '/bin/Application/NodeJS-App/Resources/*');
    haystacks.setConfigurationSetting(wr1.csystem, cfg.creleaseCompleted, false);
    haystacks.setConfigurationSetting(wr1.csystem, cfg.cPassAllConstantsValidations, false);
    haystacks.setConfigurationSetting(wr1.csystem, cfg.cPassedAllCommandAliasesDuplicateChecks, false);
    haystacks.setConfigurationSetting(wr1.csystem, cfg.cSourceResourcesPath, apc.cDevelopResourcesPath);
    haystacks.setConfigurationSetting(wr1.csystem, cfg.cDestinatinoResourcesPath, apc.cProductionResourcesPath);
    // NOTE: We could use a similar process to deploy an application that is based on the haystacks framework.
    // However, in this case we are only concerned with building & releasing the framework.
    // The test harness is not a concern for the release process, neither is the buildRelease application.
    haystacks.enqueueCommand(app_cmd.cdeployMetaData);
    // haystacks.enqueueCommand(cmd.cbuildWorkflow);
    let commandResult = true;
    while (haystacks.isCommandQueueEmpty() === false) {
      commandResult = true;
      commandResult = haystacks.processCommandQueue();
    }
    let deploymentResult = haystacks.getConfigurationSetting(wr1.csystem, cfg.cdeploymentCompleted);
    if (deploymentResult) {
      // Deployment was completed:
      console.log(msg.cBuildMessage1 + deploymentResult);
    } else {
      console.log(msg.cBuildMessage1 + gen.cFalse);
      haystacks.setConfigurationSetting(wr1.csystem, cfg.cdeploymentCompleted, false);
    }
  } catch (err) {
    console.error(err);
    // deploymentCompleted
    haystacks.setConfigurationSetting(wr1.csystem, cfg.cdeploymentCompleted, false);
  }
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
};

bootStrapApplication();
deployApplication();
