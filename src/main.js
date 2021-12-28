#!/usr/bin/env node

/**
 * @file main.js
 * @module main
 * @description Contains all customer facing functions to are used to interface with the rest of the application framework.
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:configuration.constants
 * @requires module:constant.constants
 * @requires module:country.constants
 * @requires module:function.constants
 * @requires module:generic.constants
 * @requires module:language.constants
 * @requires module:message.constants
 * @requires module:numeric.constants
 * @requires module:phonic.constants
 * @requires module:system.constants
 * @requires module:unit.constants
 * @requires module:word1.constants
 * @requires module:warden
 * @requires module:loggers
 * @requires module:prompt
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/14
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var bas = require('./constants/basic.constants');
var biz = require('./constants/business.constants');
var cfg = require('./constants/configuration.constants');
var con = require('./constants/constant.constants');
var ctr = require('./constants/country.constants');
var fnc = require('./constants/function.constants');
var gen = require('./constants/generic.constants');
var lng = require('./constants/language.constants');
var msg = require('./constants/message.constants');
var num = require('./constants/numeric.constants');
var phn = require('./constants/phonic.constants');
var sys = require('./constants/system.constants');
var unt = require('./constants/unit.constants');
var wr1 = require('./constants/word1.constants');
var warden = require('./controllers/warden');
var loggers = require('./executrix/loggers');
var prompt = require('./executrix/prompt');
var path = require('path');
var D = require('./structures/data');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = baseFileName + bas.cDot;

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
   // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
   // console.log(`clientConfiguration is: ${JSON.stringify(clientConfiguration)}`);
   loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
   loggers.consoleLog(namespacePrefix + functionName, msg.cclientConfigurationIs + clientConfiguration);
   let appRootPath = warden.processRootPath(clientConfiguration);
   clientConfiguration[cfg.cappRootPath] = appRootPath;
   clientConfiguration[cfg.cappConfigPath] = appRootPath + clientConfiguration[cfg.cappConfigReferencePath];
   clientConfiguration[cfg.cframeworkConfigPath] = __dirname + sys.cframeworkResourcesConfigurationPath;
   warden.initFrameworkSchema(clientConfiguration);
   loggers.consoleLog(namespacePrefix + functionName, msg.cAllLoadedDataIs + JSON.stringify(D));
   loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
   // console.log('All loaded data is: ' + JSON.stringify(D));
   // console.log(`END ${namespacePrefix}${functionName} function`);
 };

module.exports = {
  [fnc.cinitFramework]: (clientConfiguration) => initFramework(clientConfiguration),
  [fnc.cprompt]: (ask) => prompt.prompt(ask),
  [gen.cbas]: bas,
  [gen.cbiz]: biz,
  [gen.ccfg]: cfg,
  [gen.ccon]: con,
  [gen.cctr]: ctr,
  [gen.cfnc]: fnc,
  [gen.cgen]: gen,
  [gen.clng]: lng,
  [gen.cmsg]: msg,
  [gen.cnum]: num,
  [gen.cphn]: phn,
  [gen.csys]: sys,
  [gen.cunt]: unt,
  [gen.cwr1]: wr1
};
