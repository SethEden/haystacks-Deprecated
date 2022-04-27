/**
 * @file arrayParsing.js
 * @module arrayParsing
 * @description Contains all system defined business rules for parsing arrays with various operations.
 * @requires module:stringParsing
 * @requires module:stringParsingUtilities
 * @requires module:configurator
 * @requires module:fileOperations
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/lodash|lodash}
 * @requires {@link https://mathjs.org/index.html|math}
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/28
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import stringParsing from './stringParsing.js';
import stringParsingUtilities from './stringParsingUtilities.js';
import configurator from '../../executrix/configurator.js';
import fileOperations from '../../executrix/fileOperations.js';
import loggers from '../../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import _ from 'lodash';
import * as math from 'mathjs';
import chalk from 'chalk';
import path from 'path';

const {bas, cfg, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

// Refactoring Guide:

// Auxiliary related rules:
// parseColorRangeInputs,
// doesArrayContainValue

// Character related rules:
// replaceCharacterWithCharacter
// doesArrayContainCharacter
// removeCharacterFromArray
// replaceCharacterAtIndex

// Command related rules:
// solveLehmerCode
// recursiveArrayExpansion
// getLehmerCodeValue
// generateCommandAliases
// aggregateCommandArguments

// Constant related rules:
// getLengthOfLongestStringInArray
// searchForPatternsInStringArray
// validatePatternsThatNeedImplementation

// Data related rules:
// arraysAreEqual
// storeData
// getStoredData
// isObjectEmpty
// isArrayEmpty
// isObject
// isArray
// isArrayOrObject
// isNonZeroLengthArray
// arrayDeepClone

// Path related rules:
// doesArrayContainFilename
// readDirectoryContents
// getFileAndPathListForPath

// Word related rules:
// convertCamelCaseStringToArray
// getWordsArrayFromString
// recombineStringArrayWithSpaces
// convertArrayToCamelCaseString
// doesArrayContainLowerCaseConsolidatedString
// ascertainMatchingElements
