/**
 * @file stringGeneration.js
 * @module stringGeneration
 * @description Contains all business rules for randomly generating strings of all kinds.
 * @requires module:loggers
 * @requires module:stringParsingUtilities
 * @requires module:characterGeneration
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:numeric.constants
 * @requires module:word1.constants
 * @requires module:system.constants
 * @requires module:business.constants
 * @requires module:message.constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/01/25
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

import loggers from '../../executrix/loggers';
import { stringToBoolean } from './stringParsingUtilities';
