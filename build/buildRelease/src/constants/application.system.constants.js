/**
 * @file application.system.constants.js
 * @module application.system.constants
 * @description A file to hold all of the client application system constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @require module:haystacks
 * @requires module:haystacks.basic.constants
 * @requires module:haystacks.generic.constants
 * @requires module:haystacks.word1.constants
 * @author Seth Hollingsead
 * @date 2022/04/05
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// External imports
import haystacks from 'haystacks';
let bas = haystacks.bas;
let gen = haystacks.gen;
let wr1 = haystacks.wr1;

// Constants Validation
export const cresolvedConstantsPath_Application = wr1.cresolved + wr1.cConstants + wr1.cPath + bas.cUnderscore + wr1.cApplication; // resolvedConstantsPath_Application
export const capplicationBusinessConstantsValidation = wr1.capplication + wr1.cBusiness + wr1.cConstants + wr1.cValidation; // applicationBusinessConstantsValidation
export const capplicationCommandConstantsValidation = wr1.capplication + wr1.cCommand + wr1.cConstants + wr1.cValidation; // applicationCommandConstantsValidation
export const capplicationConfigurationConstantsValidation = wr1.capplication + wr1.cConfiguration + wr1.cConstants + wr1.cValidation; // applicationConfigurationConstantsValidation
export const capplicationConstantsValidation = wr1.capplication + wr1.cConstants + wr1.cValidation; // applicationConstantsValidation
export const capplicationFunctionConstantsValidation = wr1.capplication + wr1.cFunction + wr1.cConstants + wr1.cValidation; // applicationFunctionConstantsValidation
export const capplicationMessageConstantsValidation = wr1.capplication + wr1.cMessage + wr1.cConstants + wr1.cValidation; // applicationMessageConstantsValidation
export const capplicationSystemConstantsValidation = wr1.capplication + wr1.cSystem + wr1.cConstants + wr1.cValidation; // applicationSystemConstantsValidation

// Filenames
export const capplication_business_constants_js = wr1.capplication + bas.cDot + wr1.cbusiness + bas.cDot + wr1.cconstants + gen.cDotjs; // application.busienss.constants.js
export const capplication_command_constants_js = wr1.capplication + bas.cDot + wr1.ccommand + bas.cDot + wr1.cconstants + gen.cDotjs; // application.command.constants.js
export const capplication_configuration_constants_js = wr1.capplication + bas.cDot + wr1.cconfiguration + bas.cDot + wr1.cconstants + gen.cDotjs; // application.configuration.constants.js
export const capplication_constants_js = wr1.capplication + bas.cDot + wr1.cconstants + gen.cDotjs; // application.constants.js
export const capplication_function_constants_js = wr1.capplication + bas.cDot + wr1.cfunction + bas.cDot + wr1.cconstants + gen.cDotjs; // application.function.constants.js
export const capplication_message_constants_js = wr1.capplication + bas.cDot + wr1.cmessage + bas.cDot + wr1.cconstants + gen.cDotjs; // application.message.constants.js
export const capplication_system_constants_js = wr1.capplication + bas.cDot + wr1.csystem + bas.cDot + wr1.cconstants + gen.cDotjs; // application.system.constants.js
