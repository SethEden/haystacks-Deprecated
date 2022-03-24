/**
 * @file appication.business.constants.validation.js
 * @module appication.business.constants.validation
 * @description Contains all validations for named application business rule constants.
 * @requires module:application.business.constants
 * @author Seth Hollingsead
 * @date 2022/03/22
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_biz from '../../constants/application.business.constants.js';

/**
 * @function applicationBusienssConstantsValidation
 * @description Initializes the application business rules constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/22
 */
export const applicationBusinessConstantsVaidation = [
  // Client Busienss Rules
  {Name: 'cclientEcho', Actual: app_biz.cclientEcho, Expected: 'clientEcho'},

  // ********************************
  // ClientStringParsing rules in order
  // ********************************
  {Name: 'ccustomEcho', Actual: app_biz.ccustomEcho, Expected: 'customEcho'}
];
