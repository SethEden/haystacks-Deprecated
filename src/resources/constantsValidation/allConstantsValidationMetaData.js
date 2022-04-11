/**
 * @file allConstantsValidationMetadata.js
 * @module allConstantsValidationMetadata
 * @description Contains initialization for all constants validation meta-data.
 * @requires module:basic.constants
 * @requires module:configuration.constants
 * @requires module:generic.constants
 * @requires module:message.constants
 * @requires module:system.constants
 * @requires module:word.constants
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:basic.constants.validation
 * @requires module:business.constants.validation
 * @requires module:color.constants.validation
 * @requires module:command.constants.validation
 * @requires module:configuration.constants.validation
 * @requires module:country.constants.validation
 * @requires module:function.constants.validation
 * @requires module:generic.constants.validation
 * @requires module:language.constants.validation
 * @requires module:message.constants.validation
 * @requires module:numeric.constants.validation
 * @requires module:phonic.constants.validation
 * @requires module:system.constants.validation
 * @requires module:unit.constants.validation
 * @requires module:word.constants.validation
 * @requires module:word2.constants.validation
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/03/22
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from '../../constants/basic.constants.js';
import * as cfg from '../../constants/configuration.constants.js';
import * as gen from '../../constants/generic.constants.js';
import * as msg from '../../constants/message.constants.js';
import * as sys from '../../constants/system.constants.js';
import * as wrd from '../../constants/word.constants.js';
import configurator from '../../executrix/configurator.js';
import loggers from '../../executrix/loggers.js';
import * as bas_cv from './basic.constants.validation.js';
import * as biz_cv from './business.constants.validation.js';
import * as clr_cv from './color.constants.validation.js';
import * as cmd_cv from './command.constants.validation.js';
import * as cfg_cv from './configuration.constants.validation.js';
import * as ctr_cv from './country.constants.validation.js';
import * as fnc_cv from './function.constants.validation.js';
import * as gen_cv from './generic.constants.validation.js';
import * as lng_cv from './language.constants.validation.js';
import * as msg_cv from './message.constants.validation.js';
import * as num_cv from './numeric.constants.validation.js';
import * as phn_cv from './phonic.constants.validation.js';
import * as sys_cv from './system.constants.validation.js';
import * as unt_cv from './unit.constants.validation.js';
import * as wrd_cv from './word.constants.validation.js';

// External imports
import path from 'path';

const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// resources.constantsValidation.allConstantsValidationMetaData.
const namespacePrefix = wrd.cresources + bas.cDot + wrd.cconstants + wrd.cValidation + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initiaizeAllSystemConstantsValidationData
 * @description Initializes all of the system constants validation data so that it cn be used to validate all of the constants.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/22
 */
function initiaizeAllSystemConstantsValidationData() {
  let functionName = initiaizeAllSystemConstantsValidationData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let constantsPath = configurator.getConfigurationSetting(wrd.csystem, cfg.cframeworkConstantsPath);
  // constantsPath is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cconstantsPathIs + constantsPath);

  let allSystemConstantsValidationData = {};
  allSystemConstantsValidationData[sys.cConstantsValidationData] = {};
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames] = {};
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames] = {};
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix] = {};
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths] = {};
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages] = {};
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages] = {};
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cBasicConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cBusinessConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cColorConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cCommandConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConfigurationConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cCountryConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cFunctionConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cGenericConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cLanguageConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cMessageConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cNumericConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cPhonicConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cSystemConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cUnitConstantsValidation] = [];
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cWordConstantsValidation] = [];

  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cBasicConstantsValidation] = bas_cv.basicConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cBusinessConstantsValidation] = biz_cv.businessConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cColorConstantsValidation] = clr_cv.colorConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cCommandConstantsValidation] = cmd_cv.commandConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConfigurationConstantsValidation] = cfg_cv.configurationConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cCountryConstantsValidation] = ctr_cv.countryConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cFunctionConstantsValidation] = fnc_cv.functionConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cGenericConstantsValidation] = gen_cv.genericConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cLanguageConstantsValidation] = lng_cv.languageConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cMessageConstantsValidation] = msg_cv.messageConstantsVaidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cNumericConstantsValidation] = num_cv.numericConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cPhonicConstantsValidation] = phn_cv.phonicConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cSystemConstantsValidation] = sys_cv.systemConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cUnitConstantsValidation] = unt_cv.unitConstantsValidation;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cWordConstantsValidation] = wrd_cv.wordConstantsValidation;

  // Setup all the paths to the constants files.
  let resolvedConstantsPath_Basic = path.resolve(constantsPath + bas.cForwardSlash + sys.cbasic_constants_js);
  let resolvedConstantsPath_Business = path.resolve(constantsPath + bas.cForwardSlash + sys.cbusiness_constants_js);
  let resolvedConstantsPath_Color = path.resolve(constantsPath + bas.cForwardSlash + sys.ccolor_constants_js);
  let resolvedConstantsPath_Command = path.resolve(constantsPath + bas.cForwardSlash + sys.ccommand_constants_js);
  let resolvedConstantsPath_Configuration = path.resolve(constantsPath + bas.cForwardSlash + sys.cconfiguration_constants_js);
  let resolvedConstantsPath_Country = path.resolve(constantsPath + bas.cForwardSlash + sys.ccountry_constants_js);
  let resolvedConstantsPath_Function = path.resolve(constantsPath + bas.cForwardSlash + sys.cfunction_constants_js);
  let resolvedConstantsPath_Generic = path.resolve(constantsPath + bas.cForwardSlash + sys.cgeneric_constants_js);
  let resolvedConstantsPath_Language = path.resolve(constantsPath + bas.cForwardSlash + sys.clanguage_constants_js);
  let resolvedConstantsPath_Message = path.resolve(constantsPath + bas.cForwardSlash + sys.cmessage_constants_js);
  let resolvedConstantsPath_Numeric = path.resolve(constantsPath + bas.cForwardSlash + sys.cnumeric_constants_js);
  let resolvedConstantsPath_Phonic = path.resolve(constantsPath + bas.cForwardSlash + sys.cphonic_constants_js);
  let resolvedConstantsPath_System = path.resolve(constantsPath + bas.cForwardSlash + sys.csystem_constants_js);
  let resolvedConstantsPath_Unit = path.resolve(constantsPath + bas.cForwardSlash + sys.cunit_constants_js);
  let resolvedConstantsPath_Word = path.resolve(constantsPath + bas.cForwardSlash + sys.cword_constants_js);

  // resolvedConstantsPath_Basic is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_BasicIs + resolvedConstantsPath_Basic);
  // resolvedConstantsPath_Business is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_BusinessIs + resolvedConstantsPath_Business);
  // resolvedConstantsPath_Color is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_ColorIs + resolvedConstantsPath_Color);
  // resolvedConstantsPath_Command is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_CommandIs + resolvedConstantsPath_Command);
  // resolvedConstantsPath_Configuration is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_ConfigurationIs + resolvedConstantsPath_Configuration);
  // resolvedConstantsPath_Country is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_CountryIs + resolvedConstantsPath_Country);
  // resolvedConstantsPath_Function is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_FunctionIs + resolvedConstantsPath_Function);
  // resolvedConstantsPath_Generic is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_GenericIs + resolvedConstantsPath_Generic);
  // resolvedConstantsPath_Language is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_LanguageIs + resolvedConstantsPath_Language);
  // resolvedConstantsPath_Message is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_MessageIs + resolvedConstantsPath_Message);
  // resolvedConstantsPath_Numeric is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_NumericIs + resolvedConstantsPath_Numeric);
  // resolvedConstantsPath_Phonic is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_PhonicIs + resolvedConstantsPath_Phonic);
  // resolvedConstantsPath_System is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_SystemIs + resolvedConstantsPath_System);
  // resolvedConstantsPath_Unit is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_UnitIs + resolvedConstantsPath_Unit);
  // resolvedConstantsPath_Word1 is:
  loggers.consoleLog(namespacePrefix + functionName, msg.cresolvedConstantsPath_WordIs + resolvedConstantsPath_Word);

  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cBasicConstantsValidation] = resolvedConstantsPath_Basic;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cBusinessConstantsValidation] = resolvedConstantsPath_Business;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cColorConstantsValidation] = resolvedConstantsPath_Color;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cCommandConstantsValidation] = resolvedConstantsPath_Command;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cConfigurationConstantsValidation] = resolvedConstantsPath_Configuration;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cCountryConstantsValidation] = resolvedConstantsPath_Country;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cFunctionConstantsValidation] = resolvedConstantsPath_Function;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cGenericConstantsValidation] = resolvedConstantsPath_Generic;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cLanguageConstantsValidation] = resolvedConstantsPath_Language;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cMessageConstantsValidation] = resolvedConstantsPath_Message;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cNumericConstantsValidation] = resolvedConstantsPath_Numeric;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cPhonicConstantsValidation] = resolvedConstantsPath_Phonic;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cSystemConstantsValidation] = resolvedConstantsPath_System;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cUnitConstantsValidation] = resolvedConstantsPath_Unit;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][sys.cWordConstantsValidation] = resolvedConstantsPath_Word;

  // Basic Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cBasicConstantsValidation] = msg.cBasicConstantsPhase1Validation;
  // Business Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cBusinessConstantsValidation] = msg.cBusinessConstantsPhase1Validation;
  // Color Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cColorConstantsValidation] = msg.cColorConstantsPhase1Validation;
  // Command Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cCommandConstantsValidation] = msg.cCommandConstantsPhase1Validation;
  // Configuration Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cConfigurationConstantsValidation] = msg.cConfigurationConstantsPhase1Validation;
  // Country Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cCountryConstantsValidation] = msg.cCountryConstantsPhase1Validation;
  // Function Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cFunctionConstantsValidation] = msg.cFunctionConstantsPhase1Validation;
  // Generic Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cGenericConstantsValidation] = msg.cGenericConstantsPhase1Validation;
  // Language Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cLanguageConstantsValidation] = msg.cLanguageConstantsPhase1Validation;
  // Message Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cMessageConstantsValidation] = msg.cMessageConstantsPhase1Validation;
  // Numeric Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cNumericConstantsValidation] = msg.cNumericConstantsPhase1Validation;
  // Phonic Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cPhonicConstantsValidation] = msg.cPhonicConstantsPhase1Validation;
  // System Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cSystemConstantsValidation] = msg.cSystemConstantsPhase1Validation;
  // Unit Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cUnitConstantsValidation] = msg.cUnitConstantsPhase1Validation;
  // Word1 Constants Phase 1 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][sys.cWordConstantsValidation] = msg.cWordConstantsPhase1Validation;

  // Basic Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cBasicConstantsValidation] = msg.cBasicConstantsPhase2Validation;
  // Business Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cBusinessConstantsValidation] = msg.cBusinessConstantsPhase2Validation;
  // Color Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cColorConstantsValidation] = msg.cColorConstantsPhase2Validation;
  // Command Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cCommandConstantsValidation] = msg.cCommandConstantsPhase2Validation;
  // Configuration Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cConfigurationConstantsValidation] = msg.cConfigurationConstantsPhase2Validation;
  // Country Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cCountryConstantsValidation] = msg.cCountryConstantsPhase2Validation;
  // Function Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cFunctionConstantsValidation] = msg.cFunctionConstantsPhase2Validation;
  // Generic Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cGenericConstantsValidation] = msg.cGenericConstantsPhase2Validation;
  // Language Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cLanguageConstantsValidation] = msg.cLanguageConstantsPhase2Validation;
  // Message Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cMessageConstantsValidation] = msg.cMessageConstantsPhase2Validation;
  // Numeric Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cNumericConstantsValidation] = msg.cNumericConstantsPhase2Validation;
  // Phonic Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cPhonicConstantsValidation] = msg.cPhonicConstantsPhase2Validation;
  // System Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cSystemConstantsValidation] = msg.cSystemConstantsPhase2Validation;
  // Unit Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cUnitConstantsValidation] = msg.cUnitConstantsPhase2Validation;
  // Word1 Constants Phase 2 Validation
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][sys.cWordConstantsValidation] = msg.cWordConstantsPhase2Validation;

  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cBasicConstantsValidation] = gen.cbas;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cBusinessConstantsValidation] = gen.cbiz;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cColorConstantsValidation] = gen.cclr;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cCommandConstantsValidation] = gen.ccmd;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cConfigurationConstantsValidation] = gen.ccfg;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cCountryConstantsValidation] = gen.cctr;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cFunctionConstantsValidation] = gen.cfnc;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cGenericConstantsValidation] = gen.cgen;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cLanguageConstantsValidation] = gen.clng;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cMessageConstantsValidation] = gen.cmsg;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cNumericConstantsValidation] = gen.cnum;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cPhonicConstantsValidation] = gen.cphn;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cSystemConstantsValidation] = gen.csys;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cUnitConstantsValidation] = gen.cunt;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][sys.cWordConstantsValidation] = gen.cwrd;

  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cBasicConstantsValidation] = sys.cbasic_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cBusinessConstantsValidation] = sys.cbusiness_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cColorConstantsValidation] = sys.ccolor_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cCommandConstantsValidation] = sys.ccommand_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cConfigurationConstantsValidation] = sys.cconfiguration_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cCountryConstantsValidation] = sys.ccountry_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cFunctionConstantsValidation] = sys.cfunction_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cGenericConstantsValidation] = sys.cgeneric_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cLanguageConstantsValidation] = sys.clanguage_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cMessageConstantsValidation] = sys.cmessage_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cNumericConstantsValidation] = sys.cnumeric_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cPhonicConstantsValidation] = sys.cphonic_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cSystemConstantsValidation] = sys.csystem_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cUnitConstantsValidation] = sys.cunit_constants_js;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][sys.cWordConstantsValidation] = sys.cword_constants_js;

  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cBasicConstantsValidation] = gen.cbas + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cBusinessConstantsValidation] = gen.cbiz + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cColorConstantsValidation] = gen.cclr + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cCommandConstantsValidation] = gen.ccmd + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cConfigurationConstantsValidation] = gen.ccfg + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cCountryConstantsValidation] = gen.cctr + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cFunctionConstantsValidation] = gen.cfnc + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cGenericConstantsValidation] = gen.cgen + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cLanguageConstantsValidation] = gen.clng + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cMessageConstantsValidation] = gen.cmsg + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cNumericConstantsValidation] = gen.cnum + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cPhonicConstantsValidation] = gen.cphn + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cSystemConstantsValidation] = gen.csys + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cUnitConstantsValidation] = gen.cunt + bas.cDot;
  allSystemConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][sys.cWordConstantsValidation] = gen.cwrd + bas.cDot;

  loggers.consoleLog(namespacePrefix + functionName, msg.callSystemConstantsValidationDataIs + JSON.stringify(allSystemConstantsValidationData));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return allSystemConstantsValidationData;
};

export default {
  initiaizeAllSystemConstantsValidationData
};
