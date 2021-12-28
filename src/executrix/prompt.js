/**
 * @file prompt.js
 * @module prompt
 * @description A simple prompt module to get input from the user using process.stdin.
 * @requires module:basic.constants
 * @requires module:function.constants
 * @requires module:generic.constants
 * @requires module:message.constants
 * @requires module:word1.constants
 * @requires module:loggers
 * @requires {@link https://nodejs.dev/learn/the-nodejs-fs-module|fs}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/26
 */

var bas = require('../constants/basic.constants');
var fnc = require('../constants/function.constants');
var gen = require('../constants/generic.constants');
var msg = require('../constants/message.constants');
var wr1 = require('../constants/word1.constants');
var loggers = require('./loggers');
var fs = require('fs');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = wr1.cexecutrix + bas.cDot + baseFileName + bas.cDot;
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
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`ask is: ${JSON.stringify(ask)}`);
  loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  loggers.consoleLog(namespacePrefix + functionName, msg.caskIs + JSON.stringify(ask));
  let input = '';
  if (ask) {
    process.stdout.write(ask);
  }

  var
    buffer = Buffer.alloc(1024),
    fd = process.platform === gen.cwin32 ? process.stdin.fd : fs.openSync(sys.cdevtty, bas.cr),
    //readSize = fs.readSync(fd, buffer, 0, 1024);
    readSize = fs.readSync(0, buffer, 0, 1024);

  // console.log('INPUT: ' + buffer.toString('utf8', 0, readSize));
  loggers.consoleLog(namespacePrefix + functionName, msg.cINPUT + buffer.toString(gen.cUTF8, 0, readSize));
  input = buffer.toString(gen.cUTF8, 0, readSize);
  if (input.includes(String.fromCharCode(term))) {
    // console.log('Caught the case that the input string contains the global carriage return term.')
    // console.log('index of the carriage return character: ' + input.indexOf(String.fromCharCode(term)));
    loggers.consoleLog(namespacePrefix + functionName, msg.cprompt01);
    loggers.consoleLog(namespacePrefix + functionName, msg.cprompt02 + input.indexOf(String.fromCharCode(term)));
    input = input.slice(0, input.indexOf(String.fromCharCode(term)));
  } else if (input.includes(bas.cCarriageReturn + bas.cNewLine)) {
    // console.log('Caught the case that the string includes a carriage return and new line characters.');
    loggers.consoleLog(namespacePrefix + functionName, msg.cprompt03);
    input = input.slice(0, input.indexOf(bas.cCarriageReturn + bas.cNewLine));
  }
  loggers.consoleLog(namespacePrefix + functionName, msg.cinputIs + JSON.stringify(input));
  loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  // console.log(`input is: ${JSON.stringify(input)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return input;
};

module.exports = {
  [fnc.cprompt]: (ask) => prompt(ask)
};
