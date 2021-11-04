/**
 * @file unit.constants.js
 * @module unit-constants
 * @description Contains many unit & unit conversion constants.
 * Also included are units of measurement, units of time, etc...
 * @requires module:basic-constants
 * @requires module:phonic-constants
 * @author Seth Hollingsead
 * @date 2020/07/21
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

var bas = require('./basic.constants');
var phn = require('./phonic.constants');

// Units of Measure
let cFemto = bas.cFe + bas.cmt + bas.co; // Femto
let cPico = bas.cPi + bas.cco; // Pico
let cNano = bas.cNa + bas.cno; // Nano
let cMicro = bas.cMi + bas.ccr + bas.co; // Micro
let cMill = bas.cMi + bas.cll; // Mill
let cMilli = cMill + bas.ci; // Milli

// Units of Time
let csecond = bas.cse + phn.ccond; // second
let cSecond = bas.cSe + phn.ccond; // Second
let cSeconds = cSecond + bas.cs; // Seconds
let cMinute = bas.cMi + bas.cnu + bas.cte; // Minute
let cMinutes = cMinute + bas.cs; // Minutes
let cHour = bas.cHo + bas.cur; // Hour
let cHours = cHour + bas.cs; // Hours
let cDay = bas.cDa + bas.cy; // Day
let cDays = cDay + bas.cs; // Days
let cWeek = bas.cW + bas.cee + bas.ck; // Week
let cWeeks = cWeek + bas.cs; // Weeks
let cMonth = bas.cMo + bas.cn + bas.cth; // Month
let cMonths = cMonth + bas.cs; // Months
let cYear = bas.cYe + bas.car; // Year
let cYears = cYear + bas.cs; // Years
let cDecade = bas.cDe + bas.cca + bas.cde; // Decade
let cDecades = cDecade + bas.cs; // Decades
let ccent = bas.cc + phn.cent; // cent
let cCent = bas.cC + phn.cent; // Cent
let cCentur = cCent + bas.cur; // Centur
let cCentury = cCentur + bas.cy; // Century
let cCenturies = cCentur + phn.cies; // Centuries
let cMillennium = cMill + bas.cen + bas.cni + bas.cum; // Millennium // Millennium Falcon ;-)
let cMillenniums = cMillennium + bas.cs; // Millenniums
let cNanoSecond = cNano + cSecond; // NanoSecond
let cNanoSeconds = cNano + cSeconds; // NanoSeconds
let cMicroSecond = cMicro + cSecond; // MicroSecond
let cMicroSeconds = cMicro + cSeconds; // MicroSeconds
let cMilliSecond = cMilli + cSecond; // MilliSecond
let cMilliSeconds = cMilli + cSeconds; // MilliSeconds
let cPicoSecond = cPico + cSecond; // PicoSecond
let cPicoSeconds = cPico + cSeconds; // PicoSeconds
let cFemtoSecond = cFemto + cSecond; // FemtoSecond
let cFemtoSeconds = cFemto + cSeconds; // FemtoSeconds

// Unit Conversions
// Miles to Km
// Celcius to Ferinheight
// Liters to Gallons

module.exports = {
  // Units of Measure
  ['cFemto']: cFemto, // Femto
  ['cPico']: cPico, // Pico
  ['cNano']: cNano, // Nano
  ['cMicro']: cMicro, // Micro
  ['cMill']: cMill, // Mill
  ['cMilli']: cMilli, // Milli

  // Units of Time
  ['csecond']: csecond, // second
  ['cSecond']: cSecond, // Second
  ['cSeconds']: cSeconds, // Seconds
  ['cMinute']: cMinute, // Minute
  ['cMinutes']: cMinutes, // Minutes
  ['cHour']: cHour, // Hour
  ['cHours']: cHours, // Hours
  ['cDay']: cDay, // Day
  ['cDays']: cDays, // Days
  ['cWeek']: cWeek, // Week
  ['cWeeks']: cWeeks, // Weeks
  ['cMonth']: cMonth, // Month
  ['cMonths']: cMonths, // Months
  ['cYear']: cYear, // Year
  ['cYears']: cYears, // Years
  ['cDecade']: cDecade, // Decade
  ['cDecades']: cDecades, // Decades
  ['ccent']: ccent, // cent
  ['cCent']: cCent, // Cent
  ['cCentur']: cCentur, // Centur
  ['cCentury']: cCentury, // Century
  ['cCenturies']: cCenturies, // Centuries
  ['cMillennium']: cMillennium, // Millennium // Millennium Falcon ;-)
  ['cMillenniums']: cMillenniums, // Millenniums
  ['cNanoSecond']: cNanoSecond, // NanoSecond
  ['cNanoSeconds']: cNanoSeconds, // NanoSeconds
  ['cMicroSecond']: cMicroSecond, // MicroSecond
  ['cMicroSeconds']: cMicroSeconds, // MicroSeconds
  ['cMilliSecond']: cMilliSecond, // MilliSecond
  ['cMilliSeconds']: cMilliSeconds, // MilliSeconds
  ['cPicoSecond']: cPicoSecond, // PicoSecond
  ['cPicoSeconds']: cPicoSeconds, // PicoSeconds
  ['cFemtoSecond']: cFemtoSecond, // FemtoSecond
  ['cFemtoSeconds']: cFemtoSeconds, // FemtoSeconds

  // Unit Conversions
  // Miles to Km
  // Celcius to Ferinheight
  // Liters to Gallons
};
