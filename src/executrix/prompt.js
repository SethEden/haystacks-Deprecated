/**
 * @file prompt.js
 * @module prompt
 * @description A simple prompt module to get input from the user using process.stdin.
 * @requires {@link https://www.npmjs.com/package/fs|fs}
 * @author Seth Hollingsead
 * @date 2021/10/26
 */

var fs = require('fs');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = `framework.${baseFileName}.`;
var term = 13; // carriage return

/**
 * @function prompt
 * @description Prompts the user for some input and returns the input.
 * @param {string} ask What the prompt should display when asking the user for input.
 * @return {string} A string of whatever input the user gave.
 * @author Seth Hollingsead
 * @date 2021/10/26
 */
function prompt(ask) {
  let functionName = prompt.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`ask is: ${JSON.stringify(ask)}`);
  if (ask) {
    process.stdout.write(ask);
  }

  console.log(`END ${namespacePrefix}${functionName} function`);
};

module.exports = {
  ['prompt']: (ask) => prompt(ask)
};
