#!/usr/bin/env node

/**
 * @file main.js
 * @module main
 * @description Contains all customer facing functions to are used to interface with the rest of the application framework.
 * @requires module:warden
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/14
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var warden = require('./controllers/warden');
var prompt = require('./executrix/prompt');
var phn = require('./constants/phonic.constants');
var bas = require('./constants/basic.constants');
var num = require('./constants/numeric.constants');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = `framework.${baseFileName}.`;

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
   clientConfiguration['appRootPath'] = appRootPath;
   clientConfiguration['appConfigPath'] = appRootPath + clientConfiguration['appConfigReferencePath'];
   clientConfiguration['frameworkConfigPath'] = __dirname + '//resources//configuration//';
   warden.initFrameworkSchema(clientConfiguration);

   console.log('BEGIN testing constants');
   console.log('bas.cUnderscore is: ' + bas.cUnderscore);
   console.log('bas.cSZ is: ' + bas.cSZ);
   console.log('bas.cZZ is: ' + bas.cZZ);
   console.log('phn.chree is: ' + phn.chree);
   console.log('num.cTen is: ' + num.cTen);
   console.log('END testing constants');

   // console.log(`END ${namespacePrefix}${functionName} function`);
 };

module.exports = {
  ['initFramework']: (clientConfiguration) => initFramework(clientConfiguration),
  ['prompt']: (ask) => prompt.prompt(ask)
};
