// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js

/**
 * @file stringParsing.js
 * @module stringParsing
 * @description Contains all system defined business rules for parsing strings,
 * with values of all kinds, and various parsing operations.
 * Excluding functions that cannot use the loggers.
 * @requires module:arrayParsing
 * @requires module:stringParsingUtilities
 * @requires module:colorizer
 * @requires module:configurator
 * @requires module:fileOperations
 * @requires module:loggers
 * @requires module:timers
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires {@link https://www.npmjs.com/package/n-readlines|n-readlines}
 * @requires {@link https://mathjs.org/index.html|math}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import arrayParsing from './arrayParsing.js';
import stringParsingUtilities from './stringParsingUtilities.js';
import colorizer from '../../executrix/colorizer.js';
import configurator from '../../executrix/configurator.js';
import fileOperations from '../../executrix/fileOperations.js';
import loggers from '../../executrix/loggers.js';
import timers from '../../executrix/timers.js';
import D from '../../structures/data.js';
// External imports
import hayConst from '@haystacks/constants';
import chalk from 'chalk';
import lineByLine from 'n-readlines';
import * as math from 'mathjs';
import path from 'path';

const {bas, clr, cfg, gen, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.stringParsing.
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

// Refactoring Guide:

// Auxiliary related rules:
// getNowMoment

// Character related rules:
// singleQuoteSwapAfterEquals
// swapForwardSlashToBackSlash
// swapBackSlashToForwardSlash
// swapDoubleForwardSlashToSingleForwardSlash
// swapDoubleBackSlashToSingleBackSlash
// replaceSpacesWithPlus
// replaceColonWithUnderscore
// cleanCarriageReturnFromString
// convertStringToLowerCase
// convertStringToUpperCase
// doesStringContainUpperCaseCharacter
// doesStringContainLowerCaseCharacter
// isFirstCharacterLowerCase
// isFirstCharacterUpperCase
// replaceCharacterAtIndexOfString

// Command related rules:
// cleanCommandInput
// isValidCommandNameString
// countDuplicateCommandAliases

// Constant related rules:
// validateConstantsDataValidation
// determineConstantsContextQualifiedPrefix
// determineSuggestedConstantsValidationLineOfCode
// validateConstantsDataValidationLineItemName
// doesConstantExist
// getConstantType
// getConstantActualValue
// getConstantName
// findConstantName
// isConstantTypeValid
// convertConstantTypeToConstantPrefix
// constantsOptimizedFulfillmentSystem
// constantsFulfillmentSystem
// validateConstantsDataValues
// isConstantValid

// Data related rules:
// getAttributeName
// getAttributeValue
// getValueFromAssignmentOperationString
// getDataCatagoryFromDataContextName
// getDataCatagoryDetailNameFromDataContextName
// getKeywordNameFromDataContextName
// loadDataFile
// saveDataFile
// getUserNameFromEmail

// File related rules:
// getFileNameFromPath,
// getFileExtension,
// removeDotFromFileExtension,
// removeFileExtensionFromFileName,
// ascertainMatchingFilenames,
// supportedFileFormatsAre,
// copyAllFilesAndFoldersFromFolderToFolder,
// removeXnumberOfFoldersFromEndOfPath,
// getFirstTopLevelFolderFromPath,
// createZipArchive

// Word related rules:
// isStringCamelCase
// mapWordToCamelCaseWord
// simplifyAndConsolidateString
// compareSimplifiedAndConsolidatedStrings
// countCamelCaseWords
// doesStringContainAcronym
// determineWordDelimiter
// countDelimiterInString
// getWordCountInString
// isStringList
// aggregateNumericalDifferenceBetweenTwoStrings
