/**
 * @file allConstantsValidationMetaData.js
 * @module allConstantsValidationMetaData
 * @description Contains initialization for all constants validation meta-data.
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/03/22
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import configurator from '../../executrix/configurator.js';
import loggers from '../../executrix/loggers.js';

// External imports
import path from 'path';

const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// resources.constantsValidation.allConstantsValidationMetaData.
const namespacePrefix = wr1.cresources + bas.cDot + wr1.cconstants + wr1.cValidation + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initiaizeAllSystemConstantsVaidationData
 * @description Initializes all of the system constants validation data so that it cn be used to validate all of the constants.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/22
 */
function initiaizeAllSystemConstantsVaidationData() {
  let functionName = initiaizeAllSystemConstantsVaidationData.name;
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let constantsPath = configurator.getConfigurationSetting(wr1.csystem, cfg.c)
};
