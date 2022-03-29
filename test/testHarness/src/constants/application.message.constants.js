/**
 * @file application.message.constants.js
 * @module application.message.constants
 * @description Contains many re-usable application message constants.
 * @requires module:haystacks
 * @requires module:haystacks.basic.constants
 * @requires module:haystacks.numeric.constants
 * @requires module:haystacks.system.constants
 * @requires module:haystacks.word1.constants
 * @author Seth Hollingsead
 * @date 2021/12/30
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal Imports
import * as app_sys from './application.system.constants.js';

// External imports
import haystacks from 'haystacks';
let bas = haystacks.bas;
let num = haystacks.num;
let sys = haystacks.sys;
let wr1 = haystacks.wr1;

// Client String Parsing
export const cclientStringParsingDotCustomEcho = wr1.cclient + wr1.cString + wr1.cParsing + bas.cDot + wr1.ccustom + wr1.cEcho; // clientStringParsing.customEcho

// Application Test Harness
export const cargumentDrivenInterfaceIs = wr1.cargument + wr1.cDriven + wr1.cInterface + sys.cSpaceIsColonSpace; // argumentDrivenInterface is:

// Constants Validation
export const callClientConstantsValidationDataIs = wr1.call + wr1.cClient + wr1.cConstants + wr1.cValidation + wr1.cData + sys.cSpaceIsColonSpace; // allClientConstantsValidationData is:
export const cresolvedConstantsPath_ApplicationBusinessIs = app_sys.cresolvedConstantsPath_Application + wr1.cBusiness + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationBusiness is:
export const cresolvedConstantsPath_ApplicationCommandIs = app_sys.cresolvedConstantsPath_Application + wr1.cCommand + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationCommand is:
export const cresolvedConstantsPath_ApplicationConfigurationIs = app_sys.cresolvedConstantsPath_Application + wr1.cConfiguration + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationConfiguration is:
export const cresolvedConstantsPath_ApplicationConstantIs = app_sys.cresolvedConstantsPath_Application + wr1.cConstant + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationConstant is:
export const cresolvedConstantsPath_ApplicationFunctionIs = app_sys.cresolvedConstantsPath_Application + wr1.cFunction + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationFunction is:
export const cresolvedConstantsPath_ApplicationMessageIs = app_sys.cresolvedConstantsPath_Application + wr1.cMessage + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationMessage is:
export const cresolvedConstantsPath_ApplicationSystemIs = app_sys.cresolvedConstantsPath_Application + wr1.cSystem + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationSystem is:

export const cApplicationBusinessConstantsPhase1Validation = wr1.cApplication + bas.cSpace + wr1.cBusiness + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Application Business Constants Phase 1 Validation
export const cApplicationCommandConstantsPhase1Validation = wr1.cApplication + bas.cSpace + wr1.cCommand + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Application Command Constants Phase 1 Validation
export const cApplicationConfigurationConstantsPhase1Validation = wr1.cApplication + bas.cSpace + wr1.cConfiguration + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Application Configuration Constants Phase 1 Validation
export const cApplicationConstantsPhase1Validation = wr1.cApplication + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Application Constants Phase 1 Validation
export const cApplicationFunctionConstantsPhase1Validation = wr1.cApplication + bas.cSpace + wr1.cFunction + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Application Function Constants Phase 1 Validation
export const cApplicationMessageConstantsPhase1Validation = wr1.cApplication + bas.cSpace + wr1.cMessage + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Application Message Constants Phase 1 Validation
export const cApplicationSystemConstantsPhase1Validation = wr1.cApplication + bas.cSpace + wr1.cSystem + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c1 + bas.cSpace + wr1.cValidation; // Application System Constants Phase 1 Validation

export const cApplicationBusinessConstantsPhase2Validation = wr1.cApplication + bas.cSpace + wr1.cBusiness + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Application Business Constants Phase 2 Validation
export const cApplicationCommandConstantsPhase2Validation = wr1.cApplication + bas.cSpace + wr1.cCommand + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Application Command Constants Phase 2 Validation
export const cApplicationConfigurationConstantsPhase2Validation = wr1.cApplication + bas.cSpace + wr1.cConfiguration + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Application Configuration Constants Phase 2 Validation
export const cApplicationConstantsPhase2Validation = wr1.cApplication + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Application Constants Phase 2 Validation
export const cApplicationFunctionConstantsPhase2Validation = wr1.cApplication + bas.cSpace + wr1.cFunction + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Application Function Constants Phase 2 Validation
export const cApplicationMessageConstantsPhase2Validation = wr1.cApplication + bas.cSpace + wr1.cMessage + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Application Message Constants Phase 2 Validation
export const cApplicationSystemConstantsPhase2Validation = wr1.cApplication + bas.cSpace + wr1.cSystem + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Application System Constants Phase 2 Validation

export const capplicationMessage01 = wr1.cBEGIN + bas.cSpace + wr1.cmain + bas.cSpace + wr1.cprogram + bas.cSpace + wr1.cloop; // BEGIN main program loop
export const capplicationMessage02 = wr1.cBEGIN + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cparser; // BEGIN command parser
export const capplicationMessage03 = wr1.cEND + bas.cSpace + wr1.ccommand + bas.cSpace + wr1.cparser; // END command parser
export const capplicationMessage04 = wr1.cEND + bas.cSpace + wr1.cmain + bas.cSpace + wr1.cprogram + bas.cSpace + wr1.cloop; // END main program loop
export const capplicationMessage05 = wr1.cExiting + bas.cSpace + wr1.cTEST + bas.cSpace + wr1.cHARNESS + bas.cSpace + wr1.cAPPLICATION; // Exiting TEST HARNESS APPLICATION
