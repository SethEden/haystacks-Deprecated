/**
 * @file application.message.constants.validation.js
 * @module application.message.constants.validation
 * @description Contains all validations for named appication message constants.
 * @requires module:appication.message.constants
 * @author Seth Hollingsead
 * @date 2022/03/22
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// External imports
import * as app_msg from '../../constants/application.message.constants.js';

/**
 * @function applicationMessageConstantsValidation
 * @description Initializes the application emssage constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/22
 */
export const applicationMessageConstantsValidation = [
  // Client String Parsing
  {Name: 'cclientStringParsingDotCustomEcho', Actual: app_msg.cclientStringParsingDotCustomEcho, Expected: 'clientStringParsing.customEcho'},

  // Application Test Harness
  {Name: 'cargumentDrivenInterfaceIs', Actual: app_msg.cargumentDrivenInterfaceIs, Expected: 'argumentDrivenInterface is:'},

  {Name: 'capplicationMessage01', Actual: app_msg.capplicationMessage01, Expected: 'BEGIN main program loop'},
  {Name: 'capplicationMessage02', Actual: app_msg.capplicationMessage02, Expected: 'BEGIN command parser'},
  {Name: 'capplicationMessage03', Actual: app_msg.capplicationMessage03, Expected: 'END command parser'},
  {Name: 'capplicationMessage04', Actual: app_msg.capplicationMessage04, Expected: 'END main program loop'},
  {Name: 'capplicationMessage05', Actual: app_msg.capplicationMessage05, Expected: 'Exiting TEST HARNESS APPLICATION'}

];
