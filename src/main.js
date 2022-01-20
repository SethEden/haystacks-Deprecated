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

let bas = require('./constants/basic.constants');
let biz = require('./constants/business.constants');
let cfg = require('./constants/configuration.constants');
let con = require('./constants/constant.constants');
let ctr = require('./constants/country.constants');
let fnc = require('./constants/function.constants');
let gen = require('./constants/generic.constants');
let lng = require('./constants/language.constants');
let msg = require('./constants/message.constants');
let num = require('./constants/numeric.constants');
let phn = require('./constants/phonic.constants');
let sys = require('./constants/system.constants');
let unt = require('./constants/unit.constants');
let wr1 = require('./constants/word1.constants');
let wr2 = require('./constants/word2.constants');
let warden = require('./controllers/warden');
let loggers = require('./executrix/loggers');
let prompt = require('./executrix/prompt');
let path = require('path');
let D = require('./structures/data');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = baseFileName + bas.cDot;

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

/**
 * @function consoleLog
 * @description A wrapper function to expose the loggers.consoleLog function to the client application.
 * @param {string} theNamespacePrefix The namespace of the log that is being sent. Ex: folder.filename
 * @param {string} theFunctionName The name of the function that log is being called from.
 * @param {string|object} message The message that should be logged.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/12/30
 */
function consoleLog(theNamespacePrefix, theFunctionName, message) {
  let functionName = consoleLog.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`theNamespacePrefix is: ${theNamespacePrefix}`);
  // console.log(`theFunctionName is: ${theFunctionName}`);
  // console.log(`message is: ${JSON.stringify(message)}`);
  loggers.consoleLog(theNamespacePrefix + theFunctionName, message);
  // console.log(`END ${namespacePrefix}${functionName} function`);
};

module.exports = {
  [fnc.cinitFramework]: (clientConfiguration) => initFramework(clientConfiguration),
  [fnc.cconsoleLog]: (theNamespacePrefix, theFunctionName, message) => consoleLog(theNamespacePrefix, theFunctionName, message),
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
  [gen.cwr1]: wr1,
  [gen.cwr2]: wr2
};
