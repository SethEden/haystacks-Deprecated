/**
 * @file data.js
 * @module data
 * @description Contains the singleton data structure definition that allows the entire application,
 * to share data between various components of the framework and greater application platform.
 * @requires module:word.constants
 * @author Seth Hollingsead
 * @date 2021/10/13
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var wrd = require('../constants/word.constants');
var data = {};

module.exports = {
  [wrd.cdata]: data
};
