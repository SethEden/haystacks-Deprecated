#!/usr/bin/env node

/**
 * @file testHarness.js
 * @module testHarness
 * @description This is the main init for the testHarness application.
 * It contains just enough of the main program loop and/or basic argument parsing to effectively test the framework.
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/07
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

import haystacks from '../src/main.js';
var path = require('path');
global.appRot = path.resolve(process.cwd());
var rootPath = '';
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = `${baseFileName}.`;

/**
 * @function bootstrapApplication
 * @description Setup all the testHarness application data and configuration settings.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/15
 */
function bootstrapApplication() {
  rootPath = path.resolve(process.cwd());
  let appConfig = {
    "applicationName": "haystacks",
    "rootPath": rootPath,
    "appConfigReferencePath": "//test//resources//configuration//"
  };
  haystacks.initFramework(appConfig);
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
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  let argumnentDrivenInterface = false;
  let commandInput;
  let commandResult;

  if (argumnentDrivenInterface === false) {
    console.log('BEGIN main program loop');
    console.log('BEGIN cmmand parser');

    while(programRunning === true) {
      commandInput = haystacks.prompt('>');

      if (commandInput.toUpperCase() === 'EXIT') {
        console.log('END command parser');
        programRunning = false;
        console.log('END main program loop');
        console.log('Exiting TEST HARNESS APPLICATION');
        break;
      }
    }
  }
  console.log(`END ${namespacePrefix}${functionName} function`);
};

// Launch the Test Harness application!!
var programRunning = false;
bootstrapApplication();
programRunning = true;
application();
