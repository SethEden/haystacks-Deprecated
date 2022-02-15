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
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/14
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

import * as bas from './constants/basic.constants.js';
import * as biz from './constants/business.constants.js';
import * as cfg from './constants/configuration.constants.js';
import * as con from './constants/constant.constants.js';
import * as ctr from './constants/country.constants.js';
import * as fnc from './constants/function.constants.js';
import * as gen from './constants/generic.constants.js';
import * as lng from './constants/language.constants.js';
import * as msg from './constants/message.constants.js';
import * as num from './constants/numeric.constants.js';
import * as phn from './constants/phonic.constants.js';
import * as sys from './constants/system.constants.js';
import * as unt from './constants/unit.constants.js';
import * as wr1 from './constants/word1.constants.js';
import * as wr2 from './constants/word2.constants.js';
import warden from './controllers/warden.js';
import loggers from './executrix/loggers.js';
import prompt from './executrix/prompt.js';
import D from './structures/data.js';
import path from 'path';
import url from 'url';
import dotenv from 'dotenv';
dotenv.config();

const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// main.
const namespacePrefix = baseFileName + bas.cDot;
const {NODE_ENV} = process.env;

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
 console.log(`BEGIN ${namespacePrefix}${functionName} function`);
 console.log(`clientConfiguration is: ${JSON.stringify(clientConfiguration)}`);
 loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
 loggers.consoleLog(namespacePrefix + functionName, msg.cclientConfigurationIs + clientConfiguration);

 // let frameworkRootPath = path.resolve(process.cwd());
 // let frameworkRootPath = path.resolve(path.dirname(import.meta.url));
 let frameworkRootPath = url.fileURLToPath(path.dirname(import.meta.url));
 frameworkRootPath = warden.processRootPath(frameworkRootPath) + bas.cDoubleForwardSlash;
 if (NODE_ENV === wr1.cdevelopment) {
   frameworkRootPath = frameworkRootPath + sys.cFrameworkDevelopRootPath;
 } else if (NODE_ENV === wr1.cproduction) {
   frameworkRootPath = frameworkRootPath + sys.cFrameworkProductionRootPath;
 } else {
   // WARNING: No .env file found! Going to default to the DEVELOPMENT ENVIRONMENT!
   console.log(msg.cApplicationWarningMessage1a + msg.cApplicationWarningMessage1b);
   frameworkRootPath = frameworkRootPath + sys.cFrameworkDevelopRootPath;
 }
 console.log('frameworkRootPath is: ' + frameworkRootPath);

 clientConfiguration[cfg.cframeworkRootPath] = frameworkRootPath;
 clientConfiguration[cfg.cappConfigPath] = clientConfiguration[cfg.cclientRootPath] + clientConfiguration[cfg.cappConfigReferencePath];
 clientConfiguration[cfg.cframeworkConfigPath] = frameworkRootPath + sys.cframeworkResourcesConfigurationPath;

 console.log(`clientConfiguration is: ${JSON.stringify(clientConfiguration)}`);

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

export default {
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
