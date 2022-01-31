/**
 * @file colorizer.js
 * @module colorizer
 * @description Contains all of the functions needed to manage, aprse and control font styles and font colors.
 * @requires module:configurator
 * @requires module:ruleBroker
 * @requires module:basic.constants
 * @requires module:word1.constants
 * @requires module:color.constants
 * @requires module:system.constants
 * @requires module:configuration.constants
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2021/10/15
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

let configurator = require('../executrix/configurator');
let ruleBroker = require('./ruleBroker');
let bas = require('../constants/basic.constants');
let wr1 = require('../constants/word1.constants');
let clr = require('../constants/color.constants');
let sys = require('../constants/system.constants');
let cfg = require('../constants/configuration.constants');
let chalk = require('chalk');
let D = require('../structures/data');

/**
 * @function colorizeMessage
 * @description Applies coor settings to various portions of the message according to the settings from the configuration system.
 * @param {string} message The message that should be formatted and returned to be logged to the console and/or logged to a log file.
 * @param {string} className The name of the module/file that made the log call.
 * @param {string} functionName The name of the function that made the log call.
 * @param {boolean} debugFilesSetting A True or False value to indicate if the log should happen according to the file/module name.
 * Setting is set in the configuration/settings system.
 * @param {boolean} debugFunctionsSetting A True or False value to indicate if the log should happen according to the function/method name.
 * Setting is set in the configuration/settings system.
 * @param {boolean} flatMessageLog A True or False value to indicate if we are logging a flat message or if we should do additional processing.
 * We will probably do some additional processing either way, but there is a difference in the workflows.
 * For one a non-flat message will certainly have to replace a "%%" ith the class path (className,functionName),
 * and the associated formatting that goes with that according to the settings.
 * @return {string} A colorized version of the message.
 * @author Seth Hollingsead
 * @date 2022/01/28
 */
function colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog) {
  let functionName = colorizeMessage.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`message is: ${message}`);
  console.log(`className is: ${className}`);
  console.log(`functionName is: ${functionName}`);
  console.log(`debugFilesSetting is: ${debugFilesSetting}`);
  console.log(`debugFunctionsSetting is: ${debugFunctionsSetting}`);
  console.log(`flatMessageLog is: ${flatMessageLog}`);
  let colorizedMessage;
  let messageContent;
  let messageContentPrefix;
  let messageContentSuffix;
  let messageData;
  let processingMessageData = false;
  let debugFilesModuleFontStyleSetting = wr1.cDefault;
  let debugFilesFunctionFontStyleSetting = wr1.cDefault;
  let debugFilesMessageFontStyleSetting = wr1.cDefault;
  let debugFilesDataFontStyleSetting = wr1.cDefault;
  let debugFilesModuleFontColorSetting = wr1.cDefault;
  let debugFilesFunctionFontColorSetting = wr1.cDefault;
  let debugFilesMessageFontColorSetting = wr1.cDefault;
  let debugFilesDataFontColorSetting = wr1.cDefault;
  let debugFilesModuleFontBackgroundColorSetting = wr1.cDefault;
  let debugFilesFunctionFontBackgroundColorSetting = wr1.cDefault;
  let debugFilesMessageFontBackgroundColorSetting = wr1.cDefault;
  let debugFilesDataFontBackgroundColorSettign = wr1.cDefault;

  let debugFunctionsModuleFontStyleSetting = wr1.cDefault;
  let debugFunctionsFunctionFontStyleSetting = wr1.cDefault;
  let debugFunctionsMessageFontStyleSetting = wr1.cDefault;
  let debugFunctionsDataFontStyleSetting = wr1.cDefault;
  let debugFunctionsModuleFontColorSetting = wr1.cDefault;
  let debugFunctionsFunctionFontColorSetting = wr1.cDefault;
  let debugFunctionsMessageFontColorSetting = wr1.cDefaul;
  let debugFunctionsDataFontColorSetting = wr1.cDefault;
  let debugFunctionsModuleFontBackgroundColorSetting = wr1.cDefault;
  let debugFunctionsFunctionFontBackgroundColorSetting = wr1.cDefault;
  let debugFunctionsMessageFontBackgroundColorSetting = wr1.cDefault;
  let debugFunctionsMessageFontBackgroundColorSetting = wr1.cDefault;
  let debugFunctionsDataFontBackgroundColorSetting = wr1.cDefault;

  // We need a 3rd set of variables because we wil need to aggregate these settings together to determine which ones are in effect.
  // One way is to aggregate each setting individually and let which ever one is defined be in effect.
  // Another way is to let the master debug functions and/or debug files setting be the controlling factor.
  // However, if both of them are set to true then we should default to deterien which one is in effect from either one.
  // This will also let us do additional processing on the values that come from the settings file.
  // Because some of those settings like the colros and the font styles might have multiple sub-settings.
  // The color setting will of course have R,G,B; And the style setting might have Bold|Underline, so we will of curse have to parse those out.
  let aggregateModuleFontStyleUnderline = false;
  let aggregateModuleFontStyleBols = false;
  let aggegateFunctionFontStyleUnderline = false;
  let aggregateFunctionFontStyleBold = false;
  let aggregateMessageFontStyleUnderline = false;
  let aggregateMessageFontStyleBold = false;
  let aggregateDataFontStyleUnderline = false;
  let aggregateDataFontStyleBold = false;
  let aggregateModuleFontColorSetting = {};
  let aggregateFunctionFontColorSetting = {};
  let aggregateMessageFontColorSetting = {};
  let aggregateDataFontColorSetting = {};
  let aggregateModuleFontBackgroundColorSetting = {};
  let aggregateFunctionFontBackgroundColorSetting = {};
  let aggregateMessageFontBackgroundColorSetting = {};
  let aggregateDataFontBackgroundColorSettign = {};
  let aggregateUnderlineBoldArray = [];
  let messageBokenDown = [];
  let rules = [];
  rules[0] = sys.creplaceDoublePercentWithmessage;

  debugFilesModuleFontStyleSetting = configurator.getConfigurationSetting(className, bas.cAt + sys.cModuleFontStyle);
  // console.log('debugFilesModuleFontStyleSetting is: ' + debugFilesModuleFontStyleSetting);
  debuFilesFunctionFontStyleSetting = configurator.getConfigurationSetting(className, bas.cAt + sys.cFucntionFontStyle);
  // console.log('debugFilesFunctionFontStyleSetting is: ' + debugFilesFunctionFontStyleSetting);
  debugFilesMessageFontStyleSetting = configurator.getConfigurationSetting(className, bas.cAt + sys.cMessageFontStyle);
  // console.log('debugFilesMessageFontStyleSetting is: ' + debugFilesMessageFontStyleSetting);
  dbugFilesDataFontStyleSetting = configurator.getConfigurationSetting(className, bas.cAt + sys.cDataFontStyle);
  // console.log('debugFilesDataFontStyleSetting is: ' + debugFilesDataFontStyleSetting);
  debugFilesModuleFontColorSetting = configurator.getConfigurationSetting(className, bas.cAt + sys.cModuleFontColor);
  // console.log('debugFilesModuleFontColorSetting is: ' + debuFilesModuleFontColorSetting);
  debugFilesFunctionFontColorSetting = configurator.getConfigurationSetting(className, bas.cAt + sys.cFunctionFontColor);
  // console.log('debugFilesFunctionFontColorSetting is: ' + debugFilesFunctionFontColorSetting);
  debuFilesMessageFontColorSetting = configurator.getConfigurationSetting(className, bas.cAt + sys.cMessageFontColor);
  // console.log('debugFilesMessageFontColorSetting is: ' + debugFilesMessageFontColorSetting);
  debugFilesDataFontColorSetting = configurator.getConfigurationSetting(className, bas.cAt + sys.cDataFontColor);
  // console.log('debugFilesDataFontColorSetting is: ' + debugFilesDataFontColorSetting);
  debugFilesModuleFontBackgroundColorSetting = configurator.getConfigurationSetting(className, bas.cAt + sys.cModuleFontBackgroundColor);
  // console.log('debugFilesModuleFontBackgroundColorSetting is: ' + debugFilesModuleFontBackgroundColorSetting);
  debugFilesFunctionFontBackgroundColorSetting = configurator.getConfigurationSetting(className, bas.cAt + sys.cFunctionFontBackgroundColor);
  // console.log('debugFilesFunctionFontBackgroundColorSetting is: ' + debugFilesFunctionFontBackgroundCoorSetting);
  dbugFilesMessageFontBackgroundColorSetting = configurator.getConfigurationSetting(className, bas.cAt + sys.cMessageFontBackgroundColor);
  // console.log('debugFilesMessageFontBackgroundColorSetting is: ' + debugFilesMessageFontBackgroundColorSetting);
  debugFilesDataFontBackgroundColorSetting = configurator.getConfigurationSetting(className, bas.cAt + sys.cDataFontBackgroundColor);
  // console.log('debugFilesDataFontBackgroundColorSetting is: ' + debugFilesDataFontBackgroundColorSetting);

  debugFunctionsModuleFontStyleSetting = configurator.getConfigurationSetting(className, functionName, bas.cAt + sys.cModuleFontStyle);
  // console.log('debugFunctionsModuleFontStyleSetting is: ' + debugFunctionsModuleFontStyleSetting);
  debugFunctionsFunctionFontStyleSetting = configurator.getConfigurationSetting(className, functionName, bas.cAt + sys.cFunctionFontStyle);
  // console.log('debugFunctionsFunctionFontStyleSetting is: ' + debugFunctionsFunctionFontStyleSetting);
  debugFunctionsMessageFontStyleSetting = configurator.getConfigurationSetting(className, functionName + bas.cAt + sys.cMessageFontStyle);
  // console.log('debugFunctionsMessageFontStyleSetting is: ' + debugFunctionsMessageFontStyleSetting);
  debugFunctionsDataFontStyleSetting = configurator.getConfigurationSetting(className, functionName + bas.cAt + sys.cDataFontStyle);
  // console.log('debugFunctionsDataFontStyleSetting is: ' + debugFunctionsDataFontStyleSetting);
  debugFunctionsModuleFontColorSetting = configurator.getConfigurationSetting(className, functionName + bas.cAt + sys.cModuleFontColor);
  // console.log('debugFunctionsModuleFontCoorSetting is: ' + debugFunctionsModuleFontColorSetting);
  debugFunctionsFunctionFontColorSetting = configurator.getConfigurationSetting(className, functionName + bas.cAt + sys.cFunctionFontColor);
  // console.log('debugFunctionsFunctionFontColorSetting is: ' + debugFunctionsFunctionFontColorSetting);
  debugFunctionsMessageFontColorSetting = configurator.getConfigurationSetting(className, functionName + bas.cAt + sys.cMessageFontColor);
  // console.log('debugFunctionsMessageFontColorSetting is: ' + debugFunctionsMessageFontColorSetting);
  debugFunctionsDataFontColorSetting = configurator.getConfigurationSetting(className, functionName + bas.cAt + sys.cDataFontColor);
  // console.log('debugFunctionsDataFontColorSetting is: ' + debugFunctionsDataFontColorSetting);
  debugfunctionsModuleFontBackgroundColorSetting = configurator.getConfigurationSetting(className, functionName + bas.cAt + sys.cModuleFontBackgroundColor);
  // console.log('debugFunctionsModuleFontBackgroundColorSetting is: ' + debugFunctionsModuleFontBackgroundColorSetting);
  debugFunctionsFunctionFontBackgroundColorSetting = configurator.getConfigurationSetting(className, functionName + bas.cAt + sys.cFunctionFontBackgroundColor);
  // console.log('debugFunctionsFunctionFontBackgroundColorSetting is: ' + debugFunctionsFunctionFontBackgroundColorSetting);
  debugFunctionsMessageFontBackgroundColorSetting = configurator.getConfigurationSetting(className, functionName + bas.cAt + sys.cMessageFontBackgroundColor);
  // console.log('debugFunctionsMessageFontBackgroundColorSetting is: ' + debugFunctionsMessageFontBackgroundColorSetting);
  debugFunctionsDataFontBackgroundColorSetting = configurator.getConfigurationSetting(className, functionName + bas.cAt + sys.cDataFontBackgroundColor);
  // console.log('debugFunctionsDataFontBackgroundColorSetting is: ' + debugFunctionsDataFontBackgroundColorSetting);

  
  console.log('colorizedMessage is: ' + colorizedMessage);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return colorizedMessage;
};
