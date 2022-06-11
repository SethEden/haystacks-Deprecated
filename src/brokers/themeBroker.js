/**
 * @file themeBroker.js
 * @module themeBroker
 * @description Contains all the functions necessary to load and unload debugging themes.
 * @requires module:ruleBroker
 * @requires module:loggers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/06/10
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleBroker from './ruleBroker.js';
import loggers from '../executrix/loggers.js';
import D from '../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// brokers.themeBroker.
const namespacePrefix = wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function getNamedThemes
 * @description Gets the names of the themes installed in the resources/themes folder.
 * @return {array<string>} The list of names for the themes that are currently installed.
 * @author Seth Hollingsead
 * @date 2022/06/10
 */
function getNamedThemes() {
  let functionName = getNamedThemes.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let themesNames = [];
  themesNames = ruleBroker.processRules(['C:\haystacks\src\resources\themes', ''], [biz.cgetDirectoryList]);
  loggers.consoleLog(namespacePrefix + functionName, 'themesNames is: ' + JSON.stringify(themesNames));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return themesNames;
};

export default {
  getNamedThemes
};
