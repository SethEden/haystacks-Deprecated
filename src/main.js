#!/usr/bin/env node

/**
 * @file main.js
 * @module main
 * @description Contains all customer facing functions to are used to interface with the rest of the application framework.
 * @requires module:configuration.constants
 * @requires module:system.constants
 * @requires module:warden
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/14
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var cfg = require('./constants/configuration.constants');
var sys = require('./constants/system.constants');
var warden = require('./controllers/warden');
var prompt = require('./executrix/prompt');
var path = require('path');
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
   // let functionName = initFramework.name;
   // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
   // console.log(`clientConfiguration is: ${JSON.stringify(clientConfiguration)}`);
   let appRootPath = warden.processRootPath(clientConfiguration);
   clientConfiguration[cfg.cappRootPath] = appRootPath;
   clientConfiguration[cfg.cappConfigPath] = appRootPath + clientConfiguration[cfg.cappConfigReferencePath];
   clientConfiguration[cfg.cframeworkConfigPath] = __dirname + sys.cframeworkResourcesConfigurationPath;
   warden.initFrameworkSchema(clientConfiguration);
   // console.log(`END ${namespacePrefix}${functionName} function`);
 };

module.exports = {
  ['initFramework']: (clientConfiguration) => initFramework(clientConfiguration),
  ['prompt']: (ask) => prompt.prompt(ask)
};
