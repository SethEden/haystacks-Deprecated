/**
 * @file warden.js
 * @module warden
 * @description Contains all the functions to manage the entire application framework at the highest level.
 * Also provides an interface to easily manage all the framework features & various functionality from a single entry point.
 * @requires module:chiefConfiguration
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2021/10/15
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

var chiefConfiguration = require('./chiefConfiguration');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = `controllers.${baseFileName}.`;

 /**
 * @function processRootPath
 * @description Processes the root path of the application using business rules.
 * @NOTE: By calling path.resolve(__dirname); This does not return the true root path of the application.
 * It returns the path to the currently executing file, or the file that was executed first.
 * which is: C:/Calculator2/Application/Calculator2/
 * But what we really need for the root path is just C:/Calculator2/
 * @param {object} configData All of the configuration data that should be parsed as part of the setup process.
 * @return {string} the true root path of the application.
 * @author Seth Hollingsead
 * @date 2021/10/12
 */
function processRootPath(configData) {
  let functionName = processRootPath.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`configData is: ${JSON.stringify(configData)}`);

  // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  let applicationName = configData['applicationName'];
  let pathToProcess = configData['rootPath'];
  let resolvedPath = '';

  let pathElements = pathToProcess.split('\\');
  console.log(`pathElements is: ${JSON.stringify(pathElements)}`);
  loop1:
    for (let i = 0; i < pathElements.length; i++) {
      let pathElement = pathElements[i];
      if (i === 0) {
        resolvedPath = pathElement;
      } else if (pathElement === applicationName) {
        resolvedPath = resolvedPath + '\\' + pathElement + '\\';
        break loop1;
      } else {
        resolvedPath = resolvedPath + '\\' + pathElement;
      }
    }

    // Alternate simplified implementation: i-length checking might need to be i+1
    // let pathElements = pathToProcess.split('\');
    // for (let i = 0; i < pathElements.length; i++) {
    //   let pathElement = pathElement[i];
    //   if (i === 0) {
    //     resolvedPath = pathElement
    //   }
    //   else resolvedPath = resolvedPath + '\' + pathElement;
    // }
    // resolvedPath = resolvedPath + '\';

  // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  let rootPath = path.resolve(resolvedPath);
  console.log(`rootPath is: ${rootPath}`);

  console.log(`END ${namespacePrefix}${functionName} function`);
  return rootPath;
};

/**
 * @function initFrameworkSchema
 * @description Setup all the framework data and configuration settings.
 * @param {object} configData All of the configuration data that should be parsed as part of the setup process.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/12
 */
function initFrameworkSchema(configData) {
  let functionName = initFrameworkSchema.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`configData is: ${JSON.stringify(configData)}`);

  let appConfigPath = configData['appConfigPath'];
  let frameworkConfigPath = configData['frameworkConfigPath'];
  chiefConfiguration.setupConfiguration(appConfigPath, frameworkConfigPath);

  console.log(`END ${namespacePrefix}${functionName} function`);
};

module.exports = {
  ['processRootPath']: (configData) => processRootPath(configData),
  ['initFrameworkSchema']: (configData) => initFrameworkSchema(configData)
};
