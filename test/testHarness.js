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

import haystacks from '../src/main.js';
var apc = require('./constants/application.constants');
var apmsg = require('./constants/application.message.constants');
var path = require('path');
global.appRot = path.resolve(process.cwd());
var bas = haystacks.bas;
var cfg = haystacks.cfg;
var gen = haystacks.gen;
var msg = haystacks.msg;
var sys = haystacks.sys;
var wr1 = haystacks.wr1;
var phn = haystacks.phn;
var rootPath = '';
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = baseFileName + bas.cDot;

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
    capplicationName: apc.chaystacks,
    crootPath: rootPath,
    cappConfigReferencePath: apc.cclientConfigurationPath
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
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let argumnentDrivenInterface = false;
  let commandInput;
  let commandResult;
  if (argumnentDrivenInterface === false) {
    // BEGIN main program loop
    console.log(apmsg.capplicationMessage01);
    // BEGIN cmmand parser
    console.log(apmsg.capplicationMessage02);

    while(programRunning === true) {
      commandInput = haystacks.prompt('>');
      if (commandInput.toUpperCase() === wr1.cEXIT) {
        // END command parser
        console.log(apmsg.capplicationMessage03);
        programRunning = false;
        // END main program loop
        console.log(apmsg.capplicationMessage04);
        // Exiting TEST HARNESS APPLICATION
        console.log(apmsg.capplicationMessage05);
        break;
      }
    }
  }
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  // console.log(`END ${namespacePrefix}${functionName} function`);
};

// Launch the Test Harness application!!
var programRunning = false;
bootstrapApplication();
programRunning = true;
application();
