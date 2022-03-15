/**
 * @file application.cmmand.constants.js
 * @module application.command.constants
 * @description A file to hold all of the client application command constants.
 * So non of the constants in this file should be generic/system/framework constants.
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

// ********************************
// Client Commands in order
// ********************************
export const ccustomEchoCommand = wr1.ccustom + wr1.cEcho + wr1.cCommand; // customEchoCommand
export const cdeployMetaData = wr1.cdeploy + wr1.cMetaData; // deployMetaData
