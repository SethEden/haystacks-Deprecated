#!/usr/bin/env node

/**
 * @file buildRelease.js
 * @module buildRelease
 * @description This is the main init for the buildRelease application.
 * It contains everything to build and deploy the entire npm package.
 * @requires module:clientRules
 * @requires module:clientCommands
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
import path from 'path';

let rootPath = '';
let baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// buildRelease.
let namespacePrefix = baseFileName + bas.cDot;
global.appRoot = path.resolve(process.cwd());
dotenv.config();
const {NODE_ENV} = process.env;

// NEW WAY!!
// fs = require('fs')
// json = JSON.parse(fs.readFileSync('package.json', 'utf8'))
// version = json.version
// Ref: https://stackoverflow.com/questions/9153571/is-there-a-way-to-get-version-from-package-json-in-nodejs-code

// OLD WAY!!
// const appName = process.env.npm_package_name;
// const appVersion = process.env.npm_package_version;
// const appDescription = process.env.npm_package_description;
// console.log('appName from: process.env.npm_package_name is: ' + appName);
// console.log('appVersion from: process.env.npm_package_version is: ' + appVersion);
// console.log('appDescription from: process.env.npm_package_description is: ' + appDescription);

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
  rootPath = url.fileURLToPath(path.dirname(import.meta.url));
  let rootPathArray = rootPath.split(bas.cBackSlash);
  rootPathArray.pop(); // remove any bin or src folder from the path.
  rootPath = rootPathArray.join(bas.cBackSlash);
  let appConfig = {};
  if (NODE_ENV === wr1.cdevelopment) {
    appConfig = {
      clientRootPath: rootPath,
      appConfigResourcesPath: rootPath + apc.cFullDevResourcesPath,
      appConfigReferencePath: rootPath + apc.cFullDevConfigurationPath,
      clientMetaDataPath: apc.cmetaDataDevPath,
      clientCommandAliasesPath: rootPath + apc.cFullDevCommandsPath,
      clientWorkflowsPath: rootPath + apc.cFullDevWorkflowsPath,
      clientBusinessRules: {},
      clientCommands: {}
    };
  } else if (NODE_ENV === wr1.cproduction) {
    appConfig = {
      clientRootPath: rootPath,
      appConfigResouresPath: rootPath + apc.cFullProdResourcesPath,
      appConfigReferencePath: rootPath + apc.cFullProdConfigurationPath,
      clientMetaDataPath: apc.cmetaDataProdPath,
      clientCommandAliasesPath: rootPath + apc.cFullProdCommandsPath,
      clientWorkflowsPath: rotPath + apc.cFullProdWorkflowsPath,
      clientBusinessRules: {},
      clientCommands: {}
    };
  } else {
    // WARNING: NO .env file found! Going to defalt to the DEVELOPMENT ENVIRONMENT!
    console.log(msg.cApplicationWarningMessage1a + msg.cApplicationWarningMessage1b);
    appConfig = {
      clientRootPath: rootPath,
      appConfigResourcesPath: rootPath + apc.cFullDevResourcesPath,
      appConfigReferencePath: rootPath + apc.cFullDevConfigurationPath,
      clientMetaDataPath: apc.cmetaDataDevPath,
      clientCommandAliasesPath: rootPath + apc.cFullDevCommandsPath,
      clientWorkflowsPath: rootPath + apc.cFullDevWorkflowsPath,
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

    // import {name, version, description} from '../package.json';

    // console.log('package.json name is: ' + name);
    // console.log('package.json version is: ' + version);
    // console.log('package.json description is: ' + description);
  } catch (err) {
    console.error(err);
    // deploymentCompleted
    haystacks.setConfigurationSetting(wr1.csystem, cfg.cdeploymentCompleted, false);
  }
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
};

bootStrapApplication();
deployApplication();
