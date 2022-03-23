/**
 * @file application.command.constants.validation.js
 * @module application.command.constants.vaidation
 * @description Contains all validations for named application command constants.
 * @requires module:appication.command.constants
 * @author Seth Hollingsead
 * @date 2022/03/22
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_cmd from '../../constants/application.command.constants.js';

/**
 * @function applicationCommandConstantsVaidation
 * @description Initializes the appication command constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/22
 */
export const applicationCommandConstantsValidation = [
  // ********************************
  // Client Commands in order
  // ********************************
  {Name: 'ccustomEchoCommand', Actual: ap_cmd.ccustomEchoCommand, Expected: 'customEchoCommand'}
];
