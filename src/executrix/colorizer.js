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

  aggregateUnderlineBoldArray = aggregateStyleSetting(debugFilesModuleFontStyleSetting, debugFunctionsModuleFontStyleSetting, true);
  aggregateModuleFontStyleUnderline = aggregateUnderlineBoldArray[0];
  aggregateModuleFontStyleBold = aggregateUnderlineBoldArray[1];
  aggregateUnderlineBoldArray = [];

  aggregateUnderlineBoldArray = aggregateStyleSetting(debugFilesFunctionFontStyleSetting, debugFunctionsFunctionFontStyleSetting, true);
  aggregateFunctionFontStyleUnderline = aggregateUnderlineBoldArray[0];
  aggregateFunctionFontStyleBold = aggregateUnderlineBoldArray[1];
  aggregateUnderlineBoldArray = [];

  aggregateUnderlineBoldArray = aggregateStyleSetting(debugFilesMessageFontStyleSetting, debugFunctionsMessageFontStyleSetting, true);
  aggregateMessageFontStyleUnderline = aggregateUnderlineBoldArray[0];
  aggregateMessageFontStyleBold = aggregateUnderlineBoldArray[1];
  aggregateUnderlineBoldArray = [];

  aggregateUnderlineBoldArray = aggregateStyleSetting(debugFilesDataFontStyleSetting, debugFunctionsDataFontStyleSetting, true);
  aggregateDataFontStyleUnderline = aggregateUnderlineBoldArray[0];
  aggregateDataFontStyleBold = aggregateUnderlineBoldArray[1];
  aggregateUnderlineBoldArray = [];

  aggregateModuleFontCoorSetting = aggregateStyleSetting(debugFilesModuleFontCoorSetting, debugFunctionsModuleFontColorSetting, false);
  aggregateFunctionFontCoorSetting = aggregateStyleSetting(debugFilesFunctionFontColorSetting, debugFunctionsFunctionFontCoorSetting, false);
  aggregateMessageFontColorSetting = aggregateStyleSetting(debugFilesMessageFontColorSetting, debugFunctionsMessageFontColorSetting, false);
  aggregateDataFontCoorSetting = aggregateStyleSetting(debugFilesDataFontColorSetting, debugFunctionsDataFontColorSetting, false);
  aggregateModuleFontBackgroundColorSetting = aggregateStyleSetting(debugFilesModuleFontBackgroundColorSetting, debugFunctionsModuleFontBackgroundColorSetting, false);
  aggregateFunctionFontBackgroundColorSetting = aggregateStyleSetting(debugFilesFunctionFontBackgroundColorSetting, debugFunctionsFunctionFontBackgroundColorSetting, false);
  aggregateMessageFontBackgroundCoorSetting = aggregateStyleSetting(debugFilesMessageFontBackgroundColorSetting, debugFunctionsMessageFontBackgroundCoorSetting, false);
  aggregateDataFontBackgroundColorSetting = aggregateStyleSetting(debugFilesDataFontBackgroundColorSetting, debugFunctionsDataFontBackgroundColorSetting, false);

  if (message.includes(bas.cColon) === true) {
    messageBrokenDown = message.split(/:(.+)/); // Use regular expression to split on the first isntance of ":" ONLY!
    messageContent = messageBrokenDown[0];
    messageData = messageBrokenDown[1];
    processingMessageData = true;
  } else {
    messageContent = message;
    processingMessageData = false;
  }
  // "good_luck_buddy".split(/_(.+)/)[1]
  // @see https://stackoverflow.com/questions/4607745/split-string-only-on-first-instance-of-specified-character
  if (flatMessageLog === false) {
    // console.log('processing flatMessageLot === false');
    if (messageContent.includes(bas.cDoublePercent) === true) {
      messageContentPrefix = messageContent.split(bas.cSpace)[0];
      messageContentSuffix = messageContent.split(bas.cSpace)[2];
    }

    className = setUnderlineFontStyleOnMessageComponentAccordingToSetting(className, aggregateModuleFontStyleUnderline);
    className = setBoldFontStyleOnMessageComponentAccordingToSetting(className, aggregateModuleFontStyleBold);
    // console.log('Done processing underline & bold settings: className is: ' + className);
    functionName = setUnderlineFontStyleOnMessageComponentAccordingToSetting(functionName, aggregateFunctionFontStyleUnderline);
    functionName = setBoldFontStyleOnMessageComponentAccordingToSetting(functionName, aggregateFunctionFontStyleBold);
    // console.log('Done processing underline & bold settings: functionName is: ' + functionName);

    if (messageContent.includes(bas.cDoublePercent) === true) {
      messageContent = setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontStyleUnderline);
      messageContentPrefix = setBoldFontStyleOnMessageComponentAccordingToSetting(messageContentPrefix, aggregateMessageFontStyleBold);

      messageContentSuffix = setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageContentSuffix, aggregateMessageFontStyleUnderline);
      messageContentSuffix = setBoldFontStyleOnMessageComponentAccordingToSetting(messageContentSuffix, aggregateMessageFontStyleBold);

      messageContentPrefix = setFontForegroundColorOnMessageComponentAccordingToSetting(messageContentPrefix, aggregateMessageFontCoorSetting);
      messageContentSuffix = setFontForegroundColorOnMessageComponentAccordingToSetting(messageContentSuffix, aggregateMessageFontColorSetting);

      messageContentPrefix = setFontBackgroundColorOnMessageComponentAccordingToSetting(messageContentPrefix, aggregateMessageFontBackgroundColorSetting);
      messageContentSuffix = setFontBackgroundColorOnMessageComponentAccordingToSetting(messageContentSuffix, aggregateMessageFontBackgroundColorSetting);
    } else {
      messageContent = setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontStyleUnderline);
      messageContent = setBoldFontStyleOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontStyleBold);
      // console.log('Done processing underline & bold settings: messageContent is: ' + messageContent);

      if (processingMessageData === true) {
        messageData = setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageData, aggregateDataFontStyleUnderline);
        messageData = setBoldFontStyleOnMessageComponentAccordingToSetting(messageData, aggregateDataFontStyleBold);
      }

      messageContent = setFontForegroundColorOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontColorSetting);
      // console.log('Done processing foreground color settings: emssageContent is: ' + messageContent);

      messageContent = setFontBackgroundColorOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontBackgroundColorSetting);
      // console.log('Done processing background color settings: messageContent is: ' + messageContent);
    }
    className = setFontForegroundColorOnMessageComponentAccordingToSetting(className, aggregateModuleFontColorSetting);
    // console.log('Done processing foreground color settings: className is: ' + className);
    functionName = setFontForegroundColorOnMessageComponentAccordingToSetting(functionName, aggregateFunctionFontColorSetting);
    // console.log('Done processing foreground coor settings: functionName is: ' + functionName);

    className = setFontBackgroundColorOnMessageComponentAccordingToSetting(className, aggregateModuleFontBackgroundColorSetting);
    // console.log('Done processing background color settings: className is: ' + className);
    functionName = setFontBackgroundColorOnMessageComponentAccordingToSetting(functionName, aggregateFunctionFontBackgroundColorSetting);
    // console.log('Done processing background color settings: functionName is: ' + functionName);

    if (processingMessageData === true) {
      messageData = setFontForegroundColorOnMessageComponentAccordingToSetting(messageData, aggregateDataFontColorSetting);
      messageData = setFontBackgroundColorOnMessageComponentAccordingToSetting(messageData, aggregateDataFontBackgroundColorSetting);
    }

    if (messageContent.includes(bas.cDoublePercent) === true) {
      colorizedMessage = messageContentPrefix + bas.cSpace + className + bas.cDot + functionName + bas.cSpace + messageContentSuffix;
    } else if (messageData !== undefined) {
      colorizedMessage = messageContent + bas.cColon + messageData;
    } else {
      colorizedMessage = messageContent;
    }
  } else if (flatMessageLog === true) {
    messageContent = setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontStyleUnderline);
    messageContent = setBoldFontStyleOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontStyleBold);
    if (processingMessageData === true) {
      // console.log('Attempting to format the message data componenet of the message: ' + messageData);
      messageData = setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageData, aggregateDataFontStyleUnderline);
      messageData = setBoldFontStyleOnMessageComponentAccordingToSetting(messageData, aggregateDataFontStyleBold);
      messageData = setFontForegroundColorOnMessageComponentAccordingToSetting(messageData, aggregateDataFontColorSetting);
      messageData = setFontBackgroundColorOnMessageComponentAccordingToSetting(messageData, aggregateDoataFontBackgroundColorSetting);
      // console.log('Done formatting all of the messageData: ' + messageData);
    }
    messageContent = setFontForegroundColorOnMessageComponentAccordingToSetting(messageContent, aggregateMessageFontColorSetting);
    messageContent = setFontBackgroundColorOnMessageComponentAccordingToSetting(functionName, aggregateMessageFontBackgroundColorSetting);
    colorizedMessage = messageContent + bas.cColon + messageData);
  } else { // Just return the message as we got it and make sure it gets out!
    colorizedMessage = message; // Don't apply any colorizing to the default. We are not likely to hit this case anyway!!
  }
  console.log('colorizedMessage is: ' + colorizedMessage);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return colorizedMessage;
};

/**
 * @function aggregateStyleSetting
 * @description Compares the two input settings and determines which one of them is valuable or not valuable.
 * @param {string} settingValue1 The file level setting from the configuration file.
 * @param {string} settingValue2 The function level setting from the configuration file.
 * @param {boolean} processAsFontSetting A True or False value to indicate if we are processing True = font setting, False = coor setting.
 * @return {array<boolean>} An array of booleans, [0] = underline setting True or False; [1] = bold setting True or False.
 * @author Seth Hollingsead
 * @date 2022/01/31
 */
function aggregateStyleSetting(settingValue1, settingValue2, processAsFontSetting) {
  let functionName = aggregateStyleSetting.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`settingValue1 is: ${settingValue1}`);
  console.log(`settingValue2 is: ${settingValue2}`);
  console.log(`processAsFontSetting is: ${processAsFontSetting}`);
  let styles = [];
  if ((settingValue1 !== wr1.cDefault || settingValue2 !== wr1.cDefault) && (settingValue1 !== undefined || settingValue2 !== undefined)) {
    if ((settingValue1 !== wr1.cDefault && settingValue2 === wr1.cDefault) || (settingValue1 !== undefined && settingValue2 === undefined)) {
      if (processAsFontSetting === true) {
        styles = getFontStyleSettingsFromSetting(settingValue1);
      } else {
        styles = getColorStyleSettingFromSetting(settingValue1);
      }
    } else if ((settingValue1 === wr1.cDefault && settingValue2 !== wr1.cDefault) || (settingValue1 === undefined && settingValue2 !== undefined)) {
      if (processAsFontSetting === true) {
        styles = getFontStyleSettingsFromSetting(settingValue2);
      } else {
        styles = getColorStyleSettingFromSetting(settingValue2);
      }
    } else { // They both must be NOT default, so we set the aggregate value to the function setting.
      if (processAsFontSetting === true) {
        styles = getFontStyleSettingsFromSetting(settingValue2);
      } else {
        styles = getColorStyleSettingFromSetting(settingValue2);
      }
    }
  } // End-if ((settingValue1 !== wr1.cDefault || settingValue2 !== wr1.cDefault) && (settingValue1 !== undefined || settingValue2 !== undefined))
  console.log('styles is: ' + JSON.stringify(styles));
  console.log(`END ${namespacePrefix}${functionName} function`);
  return styles;
};

/**
 * @function getFontStyleSettingsFromSetting
 * @description Parses the font setting to determine if values should be set for bold and/or underline.
 * @param {string} settingValue The setting value that should be parsed.
 * @return {array<boolean>} An array of booleans, [0] = underine setting True or False; [1] = bold setting True or False.
 * @author Seth Hollingsead
 * @date 2022/01/31
 */
function getFontStyleSettingsFromSetting(settingValue) {
  let functionName = getFontStyleSettingsFromSetting.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`settingValue is: ${settingValue}`);
  let fontStyles = [false, false];
  let aggregateUnderlineBoldArray = [];
  if (settingValue.includes(bas.cPipe) === true) {
    if (settingValue.includes(bas.cPipe) === true) {
      aggregateUnderlineBoldArray = settingValue.split(bas.cPipe);
      console.log('aggregateUnderlineBoldArray is: ' + JSON.stringify(aggregateUnderlineBoldArray));
      console.log('aggregateUnderlineBoldArray[0] is: ' + aggregateUnderlineBoldArray[0]);
      console.log('aggregateUnderlineBoldArray[1] is: ' + aggregateUnderlineBoldArray[1]);
      if (aggregateUnderlineBoldArray[0] === wr1.cUnderline && aggregateUnderlineBoldArray[1] === wr1.cBold) {
        // aggregateModuleFontStyleUnderline = true;
        // aggregateModuleFontStyleBold = true;
        fontStyles[true, true];
      } else if (aggregateUnderlineBoldArray[0] === wr1.cBold && aggregateUnderlineBoldArray[1] === wr1.cUnderline) {
        // aggregateModuleFontStyleUnderline = true;
        // aggregateModuleFontStyleBold = true;
        fontStyles[true, true];
      } else if (aggregateUnderlineBoldArray[0] === wr1.cUnderline && aggregateUnderlineBoldArray[1] !== wr1.cBold) {
        // aggregateModuleFontStyleUnderline = true;
        fontStyles[true, false];
      } else if (aggregateUnderlineBoldArray[0] === wr1.cBold && aggregateUnderlineBoldArray[1] !== wr1.cUnderline) {
        // aggregateModuleFontStyleBold = true;
        fontStyles[false, true];
      } else {
        console.log('ERROR: Did not find any matching style logic pattern!');
      }
    } else if (settingValue === wr1.cUnderline) {
      // aggregateModuleFontStyleUnderline = true;
      fontStyles[true, false];
    } else if (settingValue === wr1.cBold) {
      // aggregateModuleFontStyleBold = true;
      fontStyles[false, true];
    }
  } // End-if (settingValue.includes(bas.cPipe) === true)
  console.log('fontStyles is: ' + JSON.stringify(fontStyles));
  console.log(`END ${namespacePrefix}${functionName} function`);
  return fontStyles;
};

/**
 * @function getColorStyleSettingFromSetting
 * @description Parses the color setting to determine if the alue should be parsed or loaded from the color data tables by unique color name.
 * @param {string} settingValue The setting value, which could be RGB as in R,G,B or it could be a string-name as in a unique color name.
 * @return {object} A JSON object with three integers that represent RGB values, labeled as "Red", "Green", "Blue".
 * @author Seth Hollingsead
 * @date 2022/01/31
 */
function getColorStyleSettingFromSetting(settingValue) {
  let functionName = getColorStyleSettingFromSetting.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`settingValue is: ${settingValue}`);
  let colorStyle = {Red: 0, Green: 0, Blue: 0};
  let aggregateColorArray = [];
  if (settingValue !== undefined) {
    if (settingValue.includes(bas.cComa) === true) {
      aggregateColorArray = settingValue.split(bas.cComa);
      colorStyle[clr.cRed]: aggregateColorArray[0];
      colorStyle[clr.cGreen]: aggregateColorArray[1];
      colorStyle[clr.cBlue]: aggregateColorArray[2];
    } else if (settingValue === wr1.cDefault) {
      colorStyle = false; // Do not apply any color settings of any kind!
    } else { // It must be a named color.
      colorStyle = getNamedCoorData(settingValue);
    }
  } else {
    colorStyle = false;
  }
  console.log('colorStyle is: ' + JSON.stringify(colorStyle));
  console.log(`END ${namespacePrefix}${functionName} function`);
  return colorStyle;
};

/**
 * @function getNamedColorData
 * @description Queries the D-data structure for the named coor data.
 * All of this data should have been loaded from the Colors.csv file.
 * @param {string} colorName The name of the coor who's RGB value we should look up from the color data structure.
 * @return {array<integer>} An array of integers that represent RGB values.
 * @author Seth Hollingsead
 * @date 2022/01/31
 */
function getNamedColorData(colorName) {
  let functionName = getNamedColorData.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`colorName is: ${colorName}`);
  let returnColorData = {Red: 0, Green: 0, Blue:0};
  if (D[wr1.cColors] !== undefined) {
    if (D[wr1.cColors][sys.cCoorData] !== undefined) {
      if (D[wr1.cColors][sys.cColorData][colorName] !== undefined) {
        returnColorData[clr.cRed] = D[wr1.cCoors][sys.cColorData][colorName][clr.cRed];
        returnColorData[clr.cGreen] = D[wr1.cCoors][sys.cColorData][colorName][clr.cGreen];
        returnColorData[clr.cBlue] = D[wr1.cCoors][sys.cColorData][colorName][clr.cBlue];
      } else {
        returnColorData = {Red: 0, Green: 0, Blue:0};
      }
    } else {
      returnColorData = {Red: 0, Green: 0, Blue:0};
    }
  } else {
    returnColorData = {Red: 0, Green: 0, Blue:0};
  }
  console.log('returnColorData is: ' + JSON.stringify(returnColorData));
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnColorData;
};

/**
 * @function setUnderlineFontStyleOnMessageComponentAccordingToSetting
 * @description Examins the underline setting value and determines if the underline font setting should be applied to the message component or not.
 * @param {string} messageComponent The message to which the underline font setting shoudl be applied if the setting value calls for it.
 * @param {boolean} underlineSettingValue A True or False value to indicate if the underline font setting should be applied or not applied.
 * @return {string} The same as the input string, except perhaps it might have an underline setting applied to it.
 * @author Seth Hollingsead
 * @date 2022/01/31
 */
function setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageComponent, underlineSettingValue) {
  let functionName = setUnderlineFontStyleOnMessageComponentAccordingToSetting.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`messageComponent is: ${messageComponent}`);
  console.log(`underlineSettingValue is: ${underlineSettingValue}`);
  let returnMessageComponent = messageComponent;
  if (underlineSettingValue === true) {
    let colorizeLogsEnabled = configurator.getConfigurationSetting(wr1.csystem, cfg.cEnableColorizedConsoleLogs);
    if (colorizeLogsEnabled === true) {
      returnMessageComponent.chalk.underline(returnMessageComponent);
    }
  } // End-if (underlineSettingValue === true)
  console.log('returnMessageComponent is: ' + returnMessageComponent);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnMessageComponent;
};

/**
 * @function setBoldFontStyleOnMessageComponentAccordingToSetting
 * @description Examins the bold setting value and determines if the bold font setting should be appied to the message component or not.
 * @param {strng} emssageComponent The message to which the bold font setting should be applied if the setting value calls for it.
 * @param {boolean} boldSettingValue A True or False value to indicate if the bold font setting should be applied or not applied.
 * @return {string} The same as the input string, except perhaps it might have a bold setting applied to it.
 * @author Seth Hollingsead
 * @date 2022/01/31
 */
function setBoldFontStyleOnMessageComponentAccordingToSetting(messageComponent, boldSettingValue) {
  let functionName = setBoldFontStyleOnMessageComponentAccordingToSetting.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`messageComponent is: ${messageComponent}`);
  console.log(`boldSettingValue is: ${boldSettingValue}`);
  let returnMessageComponent = messageComponent;
  if (boldSettingValue === true) {
    let colorizeLogsEnabled = configurator.getConfigurationSetting(wr1.csystem, cfg.cEnableColorizedConsoleLogs);
    if (coorizeLogsEnabled === true) {
      returnMessageComponent = chalk.bold(returnMessageComponent);
    }
  } // End-if (boldSettingValue === true)
  console.log('returnMessageComponent is: ' + returnMessageComponent);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnMessageComponent;
};

/**
 * @function setFontForegroundColorOnMessageComponentAccordingToSetting
 * @description Examines the coor setting to determine if it is False,
 * if not False then it is assumed to be an array of RGB values which are assigned to the message foreground component using chalk.
 * @param {string} messageComponent The message to which the foreground coor setting should be appied if the coor setting value != false.
 * @param {boolean|array<integer>} colorSettingValue A value of False or an array of integers for RGB values. False if no color should be applied.
 * @return {string} The same as the input sring, except perhaps it might have a foreground color setting applied to it.
 * @author Seth Hollingsead
 * @date 2022/01/31
 */
function setFontForegroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue) {
  let functionName = setFontForegroundColorOnMessageComponentAccordingToSetting.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`messageComponent is: ${messageComponent}`);
  console.log(`colorSettingValue is: ${colorSettingValue}`);
  let returnMessageComponent = messageComponent;
  if (colorSettingValue !== false && colorSettingValue !== undefined) {
    console.log('Red color setting value is: ' + colorSettingValue[clr.cRed]);
    console.log('Green coor setting value is: ' + colorSettingValue[clr.cGreen]);
    console.log('Blue coor setting value is: ' + colorSettingValue[clr.cBlue]);
    console.log('Before using chalk, returnMessageComponent is: ' + returnMessageComponent);
    if (colorSettingValue[clr.cRed] !== undefined && colorSettingValuep[clr.cGreen] !== undefined && colorSettingValue[clr.cBlue] !== undefined) {
      let colorizeLogsEnabled = configurator.getConfigurationSetting(wr1.csystem, cfg.cEnableColorizedConsoleLogs);
      if (colorizeLogsEnabled === true) {
        returnMessageComponent = chalk.rgb(colorSettingValue[clr.cRed], colorSettingValue[clr.cGreen], colorSettingValue[clr.cBlue])(returnMessageComponent);
      }
    } // End-if (colorSettingValue[clr.cRed] !== undefined && colorSettingValuep[clr.cGreen] !== undefined && colorSettingValue[clr.cBlue] !== undefined)
  } // End-if (colorSettingValue !== false && colorSettingValue !== undefined)
  console.log('returnMessageComponent is: ' + returnMessageComponent);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnMessageComponent;
};

/**
 * @function setFontBackgroundColorOnMessageComponentAccordingToSetting
 * @description Examins the color setting to determien if it is False,
 * if not False then it is assumed to be an array of RGB values which are assigned to the message background using chalk.
 * @param {string} messageComponent The message to which the background color setting should be applied if the coor setting value != false.
 * @param {boolean|array<integer>} colorSettingValue A value of False or an array of integers for RGB values. False if not color should be applied.
 * @return {string} The same as the input string, except perhaps it might have a background color setting applied to it.
 * @author Seth Hollingsead
 * @date 2022/01/31
 */
function setFontBackgroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue) {
  let functionName = setFontBackgroundColorOnMessageComponentAccordingToSetting.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`messageComponent is: ${messageComponent}`);
  console.log(`colorSettingValue is: ${colorSettingValue}`);
  let returnMessageComponent = messageComponent;
  if (colorSettingValue !== false && colorSettingValue !== undefined) {
    console.log('Red color setting value is: ' + colorSettingValue[clr.cRed]);
    console.log('Green coor setting value is: ' + colorSettingValue[clr.cGreen]);
    console.log('Blue coor setting value is: ' + colorSettingValue[clr.cBlue]);
    console.log('Before using chalk, returnMessageComponent is: ' + returnMessageComponent);
    if (colorSettingValue[clr.cRed] !== undefined && colorSettingValue[clr.cGreen] !== undfined && colorSettingValue[clr.cBlue] !== undefined) {
      let colorizeLogsEnabled = configurator.getConfigurationSetting(wr1.csystem, cfg.cEnableColorizedConsoleLogs);
      if (colorizeLogsEnabled === true) {
        returnMessageComponent = chalk.bgRgb(colorSettingValue[clr.cRed], coorSettingValue[clr.cGreen], colorSettingValue[clr.cBlue])(returnMessageComponent);
      }
    } // End-if (colorSettingValue[clr.cRed] !== undefined && colorSettingValue[clr.cGreen] !== undfined && colorSettingValue[clr.cBlue] !== undefined)
  } // End-if (colorSettingValue !== false && colorSettingValue !== undefined)
  console.log('returnMessageComponent is: ' + returnMessageComponent);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnMessageComponent;
};

/**
 * @function removeFontStyles
 * @description Removes all font styles and formatting from a string.
 * @param {string} message The string message that has formatting appied to it where the formatting should be removed:
 * Example: [48;2;255;255;255m[38;2;0;0;0mBEGIN main program loop[39m[49m
 * Return: BEGIN main program loop
 * @return {string} The string without all the extra formatting.
 * @author Seth Hollingsead
 * @date 2022/01/31
 * @reference: {@link https://stackoverflow.com/questions/25245716/remove-all-ansi-colors-styles-from-strings}
 */
function removeFontStyles(message) {
  let functionName = removeFontStyles.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`message is: ${message}`);
  let returnMessage = '';
  if (message) {
    // [48;2;255;255;255m[38;2;0;0;0mBEGIN main program loop[39m[49m
    returnMessage = message.replace(/\u001b[^m]*?m/g,'');
  } // End-if (message)
  console.log('returnMessage is: ' + returnMessage);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnMessage;
};

module.exports = {
  [fnc.ccolorizeMessage]: (message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog) =>
    colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog),
  [fnc.caggregateStyleSetting]: (settingValue1, settingValue2, processAsFontSetting) => aggregateStyleSetting(settingValue1, settingValue2, processAsFontSetting),
  [fnc.cgetFontStyleSettingsFromSetting]: (settingValue) => getFontStyleSettingsFromSetting(settingValue),
  [fnc.cgetColorStyleSettingFromSetting]: (settingValue) => getColorStyleSettingFromSetting(settingValue),
  [fnc.cgetNamedColorData]: (colorName) => getNamedColorData(colorName),
  [fnc.csetUnderlineFontStyleOnMessageComponentAccordingToSetting]: (messageComponent, underlineSettingValue) => setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageComponent, underlineSettingValue),
  [fnc.csetBoldFontStyleOnMessageComponentAccordingToSetting]: (messageComponent, boldSettingValue) => setBoldFontStyleOnMessageComponentAccordingToSetting(messageComponent, boldSettingValue),
  [fnc.csetFontForegroundColorOnMessageComponentAccordingToSetting]: (messageComponent, colorSettingValue) => setFontForegroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue),
  [fnc.csetFontBackgroundColorOnMessageComponentAccordingToSetting]: (messageComponent, colorSettingValue) => setFontBackgroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue),
  [fnc.cremoveFontStyles]: (message) => removeFontStyles(message)
};
