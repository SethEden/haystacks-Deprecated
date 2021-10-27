/**
 * @file rulesLibrary.js
 * @module rulesLibrary
 * @description Contains all of the system defined busness rules as a map between function names and function calls.
 * @requires module:stringParsing
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var stringParsing = require('./rules/stringParsing');
var D = require('../structures/data');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = `businessRules.${baseFileName}.`;

/**
 * @function initRulesLibrary
 * @description Initializes the business rules function data structure on D.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/27
 * @NOTE Please be aware that the Commands and BusinessRules data fields in the
 * D-data structure are going to display as empty when printing out the D-data structure even when using JSON.stringify().
 * This is because the fnctions cannot really be serialized in any way. It actually kind of makes sense,
 * but could be really confusing if you are struggling, trying to debug commands or business rules that do not appear to exist.
 */
export const initRulesLibrary = function() {
  let functionName = initRulesLibrary.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  D['businessRules'] = {};
  D['businessRules'] = {
    ['echo']: (inputData, inputMetaData) => console.log(JSON.stringify(inputData)),

    // Business Rules
    // ***********************************************
    // stringParsing rules in order
    // ***********************************************
    ['parseSystemRootPath']: (inputData, inputMetaData) => stringParsing.parseSystemRootPath(inputData, inputMetaData)
  }
  console.log(`END ${namespacePrefix}${functionName} function`);
};
