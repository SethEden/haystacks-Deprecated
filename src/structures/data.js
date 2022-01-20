/**
 * @file data.js
 * @module data
 * @description Contains the singleton data structure definition that allows the entire application,
 * to share data between various components of the framework and greater application platform.
 * @requires module:word1.constants
 * @author Seth Hollingsead
 * @date 2021/10/13
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

let wr1 = require('../constants/word1.constants');
let data = {};

module.exports = {
  [wr1.cdata]: data
};
