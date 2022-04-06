/**
 * @file application.message.constants.js
 * @module application.message.constants
 * @description Contains many re-usable application message constants.
 * @requires module:haystacks
 * @requires module:haystacks.basic.constants
 * @requires module:haystacks.message.constants
 * @requires module:haystacks.numeric.constants
 * @requires module:haystacks.phonic.constants
 * @requires module:haystacks.system.constants
 * @requires module:haystacks.word1.constants
 * @author Seth Hollingsead
 * @date 2022/03/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

 // Internal Imports
 import * as app_sys from './application.system.constants.js';

// External imports
import haystacks from 'haystacks';
let bas = haystacks.bas;
let gen = haystacks.gen;
let msg = haystacks.msg;
let num = haystacks.num;
let phn = haystacks.phn;
let sys = haystacks.sys;
let wr1 = haystacks.wr1;

// Client String Parsing
export const cclientStringParsingDotCustomEcho = wr1.cclient + wr1.cString + wr1.cParsing + bas.cDot + wr1.ccustom + wr1.cEcho; // clientStringParsing.customEcho

// Messages
export const cBuildMessage1 = wr1.cDeployment + bas.cSpace + wr1.cwas + bas.cSpace + wr1.ccompleted + bas.cColon + bas.cSpace; // Deployment was completed:
export const csourcePathIs = wr1.csource + wr1.cPath + sys.cSpaceIsColonSpace; // sourcePath is:
export const cdestinationPathIs = wr1.cdestination + wr1.cPath + sys.cSpaceIsColonSpace; // destinationPath is:
export const cDeploymentWasCompleted = wr1.cDeployment + bas.cSpace + wr1.cwas + bas.cSpace + wr1.ccompleted + bas.cColon + bas.cSpace; // Deployment was completed:
export const cDeploymentFailed = wr1.cDeployment + bas.cSpace + wr1.cfailed; // Deployment failed
// ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another release.
export const cdeployApplicationMessage1a = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cRelease + bas.cSpace + wr1.cfailed + bas.cSpace + wr1.cbecause + bas.cSpace + bas.cof + bas.cSpace + bas.ca + bas.cSpace + wr1.cfailure + bas.cSpace + bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cconstants + bas.cSpace + wr1.cvalidation + bas.cSpace + wr1.csystem + bas.cDot + bas.cSpace; // ERROR: Release failed because of a failure in the constants validation system.
export const cdeployApplicationMessage2a = wr1.cPlease + bas.cSpace + wr1.cfix + bas.cSpace + gen.cASAP + bas.cSpace + wr1.cbefore + bas.cSpace + wr1.cattempting + bas.cSpace + wr1.canother + bas.cSpace + wr1.cdeployment + bas.cDot; // Please fix ASAP before attempting another deployment.
// ERROR: Release failed because of a failure in the commands alias validation system. Please fix ASAP before attempting another release.
export const cdeployApplicationMessage1b = wr1.cERROR + bas.cColon + bas.cSpace + wr1.cRelease + bas.cSpace + wr1.cfailed + bas.cSpace + wr1.cbecause + bas.cSpace + bas.cof + bas.cSpace + bas.ca + bas.cSpace + wr1.cfailure + bas.cSpace + bas.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.ccommands + bas.cSpace + wr1.calias + bas.cSpace + wr1.cvalidation + bas.cSpace + wr1.csystem + bas.cDot + bas.cSpace; //ERROR: Release failed because of a failure in the commands alias validation system.

// Constants Validation
export const callClientConstantsValidationDataIs = wr1.call + wr1.cClient + wr1.cConstants + wr1.cValidation + wr1.cData + sys.cSpaceIsColonSpace; // allClientConstantsValidationData is:
export const cresolvedConstantsPath_ApplicationBusinessIs = app_sys.cresolvedConstantsPath_Application + wr1.cBusiness + sys.cSpaceIsColonSpace; // resolvedConstantsPawth_ApplicationBusiness is:
export const cresolvedConstantsPath_ApplicationCommandIs = app_sys.cresolvedConstantsPath_Application + wr1.cCommand + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationCommand is:
export const cresolvedConstantsPath_ApplicationConfigurationIs = app_sys.cresolvedConstantsPath_Application + wr1.cConfiguration + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationConfiguration is:
export const cresolvedConstantsPath_ApplicationConstantsIs = app_sys.cresolvedConstantsPath_Application + wr1.cConstants + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationConstants is:
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
export const cApplicationConstantsPhase2Validation = wr1.cApplication + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Application Constants Phase 2 Vaidation
export const cApplicationFunctionConstantsPhase2Validation = wr1.cApplication + bas.cSpace + wr1.cFunction + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Application Function Constants Phase 2 Validation
export const cApplicationMessageConstantsPhase2Validation = wr1.cApplication + bas.cSpace + wr1.cMessage + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Application Message Constants Phase 2 Validation
export const cApplicationSystemConstantsPhase2Validation = wr1.cApplication + bas.cSpace + wr1.cSystem + bas.cSpace + wr1.cConstants + bas.cSpace + wr1.cPhase + bas.cSpace + num.c2 + bas.cSpace + wr1.cValidation; // Application System Constants Phase 2 Validation
