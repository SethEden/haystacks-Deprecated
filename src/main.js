#!/usr/bin/env node

/**
 * @file main.js
 * @module main
 * @description Contains all customer facing functions to are used to interface with the rest of the application framework.
 * @requires module:configuration.constants
 * @requires module:function.constants
 * @requires module:system.constants
 * @requires module:word.constants
 * @requires module:warden
 * @requires module:loggers
 * @requires module:prompt
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/14
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var cfg = require('./constants/configuration.constants');
var fnc = require('./constants/function.constants');
var sys = require('./constants/system.constants');
var wrd = require('./constants/word.constants');
var warden = require('./controllers/warden');
var loggers = require('./executrix/loggers');
var prompt = require('./executrix/prompt');
var path = require('path');
var D = require('./structures/data');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = `${baseFileName}.`;

 /**
  * @function initFramework
  * @description Initializes the framework systems.
  * @param {object} clientConfiguration A configuration data object that contains
  * all the data needed to bootstrap the framework for a client application.
  * @return {void}
  * @author Seth Hollingsead
  * @date 2021/10/07
  */
 function initFramework(clientConfiguration) {
   let functionName = initFramework.name;
   loggers.consoleLog(namespacePrefix + functionName, 'BEGIN %% function');
   loggers.consoleLog(namespacePrefix + functionName, `clientConfiguration is: ${clientConfiguration}`);
   // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
   // console.log(`clientConfiguration is: ${JSON.stringify(clientConfiguration)}`);
   let appRootPath = warden.processRootPath(clientConfiguration);
   clientConfiguration[cfg.cappRootPath] = appRootPath;
   clientConfiguration[cfg.cappConfigPath] = appRootPath + clientConfiguration[cfg.cappConfigReferencePath];
   clientConfiguration[cfg.cframeworkConfigPath] = __dirname + sys.cframeworkResourcesConfigurationPath;
   warden.initFrameworkSchema(clientConfiguration);
   console.log('All loaded data is: ' + JSON.stringify(D));
   // console.log(`END ${namespacePrefix}${functionName} function`);
   loggers.consoleLog(namespacePrefix + functionName, 'END %% function');
 };

module.exports = {
  [fnc.cinitFramework]: (clientConfiguration) => initFramework(clientConfiguration),
  [fnc.cprompt]: (ask) => prompt.prompt(ask)
};
