/**
 * @file unit.constants.js
 * @module unit-constants
 * @description Contains many unit & unit conversion constants.
 * Also included are units of measurement, units of time, etc...
 * @requires module:basic.constants
 * @requires module:phonic.constants
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
  [bas.cc + cFemto]: cFemto, // Femto
  [bas.cc + cPico]: cPico, // Pico
  [bas.cc + cNano]: cNano, // Nano
  [bas.cc + cMicro]: cMicro, // Micro
  [bas.cc + cMill]: cMill, // Mill
  [bas.cc + cMilli]: cMilli, // Milli

  // Units of Time
  [bas.cc + csecond]: csecond, // second
  [bas.cc + cSecond]: cSecond, // Second
  [bas.cc + cSeconds]: cSeconds, // Seconds
  [bas.cc + cMinute]: cMinute, // Minute
  [bas.cc + cMinutes]: cMinutes, // Minutes
  [bas.cc + cHour]: cHour, // Hour
  [bas.cc + cHours]: cHours, // Hours
  [bas.cc + cDay]: cDay, // Day
  [bas.cc + cDays]: cDays, // Days
  [bas.cc + cWeek]: cWeek, // Week
  [bas.cc + cWeeks]: cWeeks, // Weeks
  [bas.cc + cMonth]: cMonth, // Month
  [bas.cc + cMonths]: cMonths, // Months
  [bas.cc + cYear]: cYear, // Year
  [bas.cc + cYears]: cYears, // Years
  [bas.cc + cDecade]: cDecade, // Decade
  [bas.cc + cDecades]: cDecades, // Decades
  [bas.cc + ccent]: ccent, // cent
  [bas.cc + cCent]: cCent, // Cent
  [bas.cc + cCentur]: cCentur, // Centur
  [bas.cc + cCentury]: cCentury, // Century
  [bas.cc + cCenturies]: cCenturies, // Centuries
  [bas.cc + cMillennium]: cMillennium, // Millennium // Millennium Falcon ;-)
  [bas.cc + cMillenniums]: cMillenniums, // Millenniums
  [bas.cc + cNanoSecond]: cNanoSecond, // NanoSecond
  [bas.cc + cNanoSeconds]: cNanoSeconds, // NanoSeconds
  [bas.cc + cMicroSecond]: cMicroSecond, // MicroSecond
  [bas.cc + cMicroSeconds]: cMicroSeconds, // MicroSeconds
  [bas.cc + cMilliSecond]: cMilliSecond, // MilliSecond
  [bas.cc + cMilliSeconds]: cMilliSeconds, // MilliSeconds
  [bas.cc + cPicoSecond]: cPicoSecond, // PicoSecond
  [bas.cc + cPicoSeconds]: cPicoSeconds, // PicoSeconds
  [bas.cc + cFemtoSecond]: cFemtoSecond, // FemtoSecond
  [bas.cc + cFemtoSeconds]: cFemtoSeconds, // FemtoSeconds

  // Unit Conversions
  // Miles to Km
  // Celcius to Ferinheight
  // Liters to Gallons
};
