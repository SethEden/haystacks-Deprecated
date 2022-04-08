/**
 * @file application.configuration.constants.js
 * @module application.configuration.constants
 * @description A file to hold all of the cient configuration constants.
 * @requires module:haystacks
 * @requires module:haystacks.basic.constants
 * @requires module:haystacks.word1.constants
 * @author Seth Hollingsead
 * @date 2022/03/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// External imports
import haystacks from 'haystacks';
let bas = haystacks.bas;
let wr1 = haystacks.wr1;

export const cargumentDrivenInterface = wr1.cargument + wr1.cDriven + wr1.cInterface; // argumentDrivenInterface
export const csourceResourcesPath = wr1.csource + wr1.cResources + wr1.cPath; // sourceResourcesPath
export const cdestinationResourcesPath = wr1.cdestination + wr1.cResources + wr1.cPath; // destinationResourcesPath
export const creleasePath = wr1.crelease + wr1.cPath; // releasePath
export const cdeploymentCompleted = wr1.cdeployment + wr1.cCompleted; // deploymentCompleted