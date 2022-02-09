#!/usr/bin/env node

/**
 * @file testHarness.js
 * @module testHarness
 * @description This is the main init for the testHarness application.
 * It contains just enough of the main program loop and/or basic argument parsing to effectively test the framework.
 * @requires module:haystacks.main
 * @requires module:haystacks.constants.basic
 * @requires module:haystacks.constants.configuration
 * @requires module:haystacks.constants.message
 * @requires module:haystacks.constants.system
 * @requires module:haystacks.constants.word1
 * @requires module:application.constants
 * @requires module:application.message.constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/07
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

import haystacks from '../../src/main.js';
let clientCommands = require('./commands/clientCommandsLibrary');
let apc = require('./constants/application.constants');
let app_msg = require('./constants/application.message.constants');
let dotenv = require('dotenv').config();
let path = require('path');
global.appRot = path.resolve(process.cwd());
let bas = haystacks.bas;
let cfg = haystacks.cfg;
let gen = haystacks.gen;
let msg = haystacks.msg;
let sys = haystacks.sys;
let wr1 = haystacks.wr1;
let phn = haystacks.phn;
let rootPath = '';
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = baseFileName + bas.cDot;

/**
 * @function bootstrapApplication
 * @description Setup all the testHarness application data and configuration settings.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/15
 */
function bootstrapApplication() {
  let functionName = bootstrapApplication.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  rootPath = path.resolve(process.cwd());
  const {capplicationName} = sys;
  const {crootPath, cappConfigReferencePath} = cfg;
  let appConfig = {
    applicationName: apc.cApplicationName,
    rootPath: rootPath,
    appConfigReferencePath: apc.cFullConfigurationPath,
    metaDataPath: apc.cmetaDataPath,
    clientCommandAliasesPath: apc.cFullCommandsPath,
    clientWorkflowsPath: apc.cFullWorkflowsPath
  };
  haystacks.initFramework(appConfig);
  // console.log(`END ${namespacePrefix}${functionName} function`);
};

/**
 * @function application
 * @description This is the main program loop, the init for the testHarness application.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/15
 */
async function application() {
  let functionName = application.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let argumnentDrivenInterface = false;
  let commandInput;
  let commandResult;
  if (argumnentDrivenInterface === false) {
    // BEGIN main program loop
    haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage01);

    // BEGIN cmmand parser
    haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage02);

    while(programRunning === true) {
      commandInput = haystacks.prompt('>');
      if (commandInput.toUpperCase() === wr1.cEXIT) {
        // END command parser
        haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage03);
        programRunning = false;
        // END main program loop
        haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage04);
        // Exiting TEST HARNESS APPLICATION
        haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage05);
        break;
      }
    }
  }
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
};

// Launch the Test Harness application!!
let programRunning = false;
bootstrapApplication();
programRunning = true;
application();
