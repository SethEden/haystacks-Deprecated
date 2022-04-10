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
 * @date 2021/12/30
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal Imports
import * as app_sys from './application.system.constants.js';

// External imports
import haystacks from 'haystacks';
let bas = haystacks.bas;
let msg = haystacks.msg;
let num = haystacks.num;
let phn = haystacks.phn;
let sys = haystacks.sys;
let wr1 = haystacks.wr1;

// Client String Parsing
export const cclientStringParsingDotCustomEcho = wr1.cclient + wr1.cString + wr1.cParsing + bas.cDot + wr1.ccustom + wr1.cEcho; // clientStringParsing.customEcho

// Application Test Harness
export const cargumentDrivenInterfaceIs = wr1.cargument + wr1.cDriven + wr1.cInterface + sys.cSpaceIsColonSpace; // argumentDrivenInterface is:

// Messages
export const ccomparisonIterationIs = wr1.ccomparison + bas.cSpace + wr1.citeration + sys.cSpaceIsColonSpace; // comparison iteration is:
export const cstartingPointIs = wr1.cstarting + wr1.cPoint + sys.cSpaceIsColonSpace; // startingPoint is:
export const cendingPointIs = wr1.cending + wr1.cPoint + sys.cSpaceIsColonSpace; // endingPoint is:
export const cinputDataDotCharAtJIs = wr1.cinput + wr1.cData + bas.cDot + wr1.cchar + wr1.cAt + bas.cOpenParenthesis + bas.cj + bas.cCloseParenthesis + sys.cSpaceIsColonSpace; // inputData.charAt(j) is:
export const cinputDataDotCharAtInputDataDotLengthDash = wr1.cinput + wr1.cData + bas.cDot + wr1.cchar + wr1.cAt + bas.cOpenParenthesis + wr1.cinput + wr1.cData + bas.cDot + wr1.clength + bas.cSpace + bas.cDash + bas.cSpace; // inputData.charAt(inputData.length) -
export const cCloseParenthesisIs = bas.cCloseParenthesis + sys.cSpaceIsColonSpace; // ) is:
export const cWeGotMismatch = bas.cWe + bas.cSpace + wr1.cgot + bas.cSpace + bas.ca + bas.cSpace + phn.cmis + wr1.cmatch + bas.cExclamation; // We got a mismatch!
export const cmisCompareCountBeforeIncrementIs = phn.cmis + wr1.cCompare + wr1.cCount + bas.cSpace + wr1.cbefore + bas.cSpace + wr1.cincrement + sys.cSpaceIsColonSpace; // misCompareCount before increment is:
export const cmisCompareCountPostIncrementIs = phn.cmis + wr1.cCompare + wr1.cCount + bas.cSpace + wr1.cpost + bas.cSpace + wr1.cincrement + sys.cSpaceIsColonSpace; // misCompareCount post increment is:
export const cmisCompareCountAfterForLoopIs = phn.cmis + wr1.cCompare + wr1.cCount + bas.cSpace + wr1.cafter + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cfor + bas.cDash + wr1.cloop + sys.cSpaceIsColonSpace; // misCompareCountafter the for-loop is:

export const cmostPopularNumberMessage01 = wr1.cBEGIN + bas.cSpace + num.cfirst + bas.cSpace + wr1.cfor + bas.cDash + wr1.cloop; // BEGIN first for-loop
export const cmostPopularNumberMessage02 = wr1.cBEGIN + bas.cSpace + wr1.cnested + bas.cSpace + wr1.cfor + bas.cDash + wr1.cloop + bas.cSpace + bas.ci + bas.cSpace + bas.cEqual + bas.cSpace; // BEGIN nested for-loop i =
export const cmostPopularNumberMessage03 = wr1.cBEGIN + bas.cSpace + wr1.cnested + bas.cSpace + wr1.cfor + bas.cDash + wr1.cloop + bas.cSpace + bas.cj + bas.cSpace + bas.cEqual + bas.cSpace; // BEGIN nested for-loop j =
export const cmostPopularNumberMessage04 = wr1.cFOUND + bas.cSpace + bas.ca + bas.cSpace + wr1.cMATCH + bas.cExclamation + bas.cExclamation; // FOUND a MATCH!!
export const cmostPopularNumberMessage05 = msg.cinputMetaData + bas.cOpenBracket + bas.ci + bas.cCloseBracket + sys.cSpaceIsColonSpace; // inputMetaData[i] is:
export const cmostPopularNumberMessage06 = msg.cinputMetaData + bas.cOpenBracket + bas.cj + bas.cCloseBracket + sys.cSpaceIsColonSpace; // inputMetaData[j] is:
export const cmostPopularNumberMessage07 = wr1.ccontents + bas.cSpace + bas.cof + bas.cSpace + wr1.ctemp + wr1.cArray + num.c1 + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // contents of tempArray1 are:
export const cmostPopularNumberMessage08 = wr1.cEND + bas.cSpace + wr1.cnested + bas.cSpace + wr1.cfor + bas.cDash + wr1.cloop + bas.cSpace + bas.cj + bas.cSpace + bas.cEqual + bas.cSpace; // END nested for-loop j =
export const cmostPopularNumberMessage09 = wr1.cEND + bas.cSpace + wr1.cnested + bas.cSpace + wr1.cfor + bas.cDash + wr1.cloop + bas.cSpace + bas.ci + bas.cSpace + bas.cEqual + bas.cSpace; // END nested for-loop i =
export const cmostPopularNumberMessage10 = wr1.cEND + bas.cSpace + num.cfirst + bas.cSpace + wr1.cfor + bas.cDash + wr1.cloop; // END first for-loop
export const cmostPopularNumberMessage11 = wr1.cBEGIN + bas.cSpace + num.csecond + bas.cSpace + wr1.cfor + bas.cDash + wr1.cloop; // BEGIN second for-loop
export const cmostPopularNumberMessage12 = wr1.cBEGIN + bas.cSpace + wr1.citeration + bas.cSpace + bas.cj + bas.cSpace + bas.cEqual + bas.cSpace; // BEGIN iteration j =
export const cmostPopularNumberMessage13 = wr1.ctemp + wr1.cArray + num.c1 + bas.cOpenBracket + bas.ci + bas.cCloseBracket + sys.cSpaceIsColonSpace; // tempArray1[i] is:
export const cmostPopularNumberMessage14 = wr1.cinstance + wr1.cCounter + bas.cSpace + wr1.cbefore + bas.cSpace + wr1.cincrement + sys.cSpaceIsColonSpace; // instanceCounter before increment is:
export const cmostPopularNumberMessage15 = wr1.cinstance + wr1.cCounter + bas.cSpace + wr1.cafter + bas.cSpace + wr1.cincrement + sys.cSpaceIsColonSpace; // instanceCounter after increment is:
export const cmostPopularNumberMessage16 = wr1.ccontents + bas.cSpace + wr1.cof + bas.cSpace + wr1.ctemp + wr1.cArray + num.c2 + bas.cSpace + wr1.care + bas.cColon + bas.cSpace; // contents of tempArray2 are:
export const cmostPopularNumberMessage17 = wr1.cEND + bas.cSpace + wr1.citeration + bas.cSpace + bas.cj + bas.cSpace + bas.cEqual + bas.cSpace; // END iteration j =
export const cmostPopularNumberMessage18 = wr1.cEND + bas.cSpace + wr1.cnested + bas.cSpace + wr1.cfor + bas.cDash + wr1.cloop + bas.cSpace + bas.ci + bas.cSpace + bas.cEqual + bas.cSpace; // END nested for-loop i =
export const cmostPopularNumberMessage19 = wr1.cEND + bas.cSpace + num.csecond + bas.cSpace + wr1.cfor + bas.cDash + wr1.cloop; // END second for-loop
export const cmostPopularNumberMessage20 = wr1.cBEGIN + bas.cSpace + num.cthird + bas.cSpace + wr1.cfor + bas.cDash + wr1.cloop; // BEGIN third for-loop
export const cmostPopularNumberMessage21 = wr1.ctemp + wr1.cArray + num.c2 + bas.cDot + wr1.clength + sys.cSpaceIsColonSpace; // tempArray2.length is:
export const cmostPopularNumberMessage22 = wr1.cBEGIN + bas.cSpace + wr1.citeration + bas.cSpace + bas.ci + bas.cSpace + bas.cEqual + bas.cSpace; // BEGIN iteration i =
// if-condition i = 0 has been met! i =
export const cmostPopularNumberMessage23 = wr1.cif + bas.cDash + wr1.ccondition + bas.cSpace + bas.ci + bas.cSpace + bas.cEqual + bas.cSpace + num.c0 + bas.cSpace + wr1.chas + bas.cSpace + wr1.cbeen + bas.cSpace + wr1.cmet + bas.cExclamation + bas.cSpace + bas.ci + bas.cSpace + bas.cEqual + bas.cSpace;
// if-condition-else i <> 0 has been met! i =
export const cmostPopularNumberMessage24 = wr1.cif + bas.cDash + wr1.ccondition + bas.cDash + wr1.celse + bas.cSpace + bas.ci + bas.cSpace + bas.cLessThan + bas.cGreaterThan + bas.cSpace + num.c0 + bas.cSpace + wr1.chas + bas.cSpace + wr1.cbeen + bas.cSpace + wr1.cmet + bas.cExclamation + bas.cSpace + bas.ci + bas.cSpace + bas.cEqual + bas.cSpace;
export const cmostPopularNumberMessage25 = wr1.cfound + bas.cSpace + num.cone + bas.cSpace + wr1.cgreater; // found one greater
export const cmostPopularNumberMessage26 = wr1.ctemp + wr1.cArray + num.c2 + bas.cOpenBracket + bas.ci + bas.cCloseBracket + sys.cSpaceIsColonSpace; // tempArray2[i] is:
export const cmostPopularNumberMessage27 = wr1.ctemp + wr1.cArray + num.c2 + bas.cOpenBracket + bas.ci + bas.cSpace + bas.cDash + bas.cSpace + num.c1 + bas.cCloseBracket + sys.cSpaceIsColonSpace; // tempArray2[i - 1] is:
export const cmostPopularNumberMessage28 = wr1.cEND + bas.cSpace + wr1.citeration + bas.cSpace + bas.ci + bas.cSpace + bas.cEqual + bas.cSpace; // END iteration i =
export const cmostPopularNumberMessage29 = wr1.cEND + bas.cSpace + num.cthird + bas.cSpace + wr1.cfor + bas.cDash + wr1.cloop; // END third for-loop
export const cmostPopularNumberMessage30 = wr1.cINVALID + bas.cSpace + wr1.cENTRY + bas.cColon + bas.cSpace + wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + wr1.csome + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.cnumbers + bas.cDot; // INVALID ENTRY: Please enter some valid numbers.

export const cisAlmostPalindromeInvalidEntry = wr1.cINVALID + bas.cSpace + wr1.cENTRY + bas.cColon + bas.cSpace + wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + wr1.csome + bas.cSpace + wr1.cvalid + bas.cSpace + wr1.cstring + bas.cDot; // INVALID ENTRY: Please enter some valid string.
export const cstringInputIs = wr1.cstring + wr1.cInput + sys.cSpaceIsColonSpace; // stringInput is:
export const cstringArrayIs = wr1.cstring + wr1.cArray + sys.cSpaceIsColonSpace; // stringArray is:
// INVALID ENTRY: Please enter 3 arrays of numbers each containing 2 numbers in the following format:
export const cthreePointAverageInvalidInput = wr1.cINVALID + bas.cSpace + wr1.cENTRY + bas.cColon + bas.cSpace + wr1.cPlease + bas.cSpace + wr1.center + bas.cSpace + num.c3 + bas.cSpace + wr1.carrays + bas.cSpace + bas.cof + bas.cSpace + wr1.cnumbers + bas.cSpace + wr1.ceach + bas.cSpace + wr1.ccontaining + bas.cSpace + num.c2 + bas.cSpace + wr1.cnumbers + bas.cSpace + wr1.cin + bas.cSpace + wr1.cthe + bas.cSpace + wr1.cfollowing + bas.cSpace + wr1.cformat + bas.cColon + bas.cSpace;
// [x1,y1] [x2,y2] [x3,y3]
export const cthreePointAverageInputFormat = bas.cOpenBracket + bas.cx + num.c1 + bas.cComa + bas.cy + num.c1 + bas.cCloseBracket + bas.cSpace + bas.cOpenBracket + bas.cx + num.c2 + bas.cComa + bas.cy + num.c2 + bas.cCloseBracket + bas.cSpace + bas.cOpenBracket + bas.cx + num.c3 + bas.cComa + bas.cy + num.c3 + bas.cCloseBracket;
export const cx1Is = bas.cx + num.c1 + sys.cSpaceIsColonSpace; // x1 is:
export const cy1Is = bas.cy + num.c1 + sys.cSpaceIsColonSpace; // y1 is:
export const cx2Is = bas.cx + num.c2 + sys.cSpaceIsColonSpace; // x2 is:
export const cy2Is = bas.cy + num.c2 + sys.cSpaceIsColonSpace; // y2 is:
export const cx3Is = bas.cx + num.c3 + sys.cSpaceIsColonSpace; // x3 is:
export const cy3Is = bas.cy + num.c3 + sys.cSpaceIsColonSpace; // y3 is:
export const cx1x2x3Is = bas.cx + num.c1 + bas.cSpace + bas.cPlus + bas.cSpace + bas.cx + num.c2 + bas.cSpace + bas.cPlus + bas.cSpace + bas.cx + num.c3 + sys.cSpaceIsColonSpace; // x1 + x2 + x3 is:
export const cy1y2y3Is = bas.cy + num.c1 + bas.cSpace + bas.cPlus + bas.cSpace + bas.cy + num.c2 + bas.cSpace + bas.cPlus + bas.cSpace + bas.cy + num.c3 + sys.cSpaceIsColonSpace; // y1 + y2 + y3 is:

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
