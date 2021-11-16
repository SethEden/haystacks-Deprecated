/**
 * @file numeric.constants.js
 * @module numeric-constants
 * @description Contains numeric string values and numeric strings
 * @requires module:basic.constants
 * @requires module:phonic.constants
 * @author Seth Hollingsead
 * @date 2020/07/19
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

var bas = require('./basic.constants');
var phn = require('./phonic.constants');

// Numbers
let c0 = '0'; // 0
let c1 = '1'; // 1
let c2 = '2'; // 2
let c3 = '3'; // 3
let c4 = '4'; // 4
let c5 = '5'; // 5
let c6 = '6'; // 6
let c7 = '7'; // 7
let c8 = '8'; // 8
let c9 = '9'; // 9

let c00 = c0 + c0; // 00
let c01 = c0 + c1; // 01
let c02 = c0 + c2; // 02
let c03 = c0 + c3; // 03
let c04 = c0 + c4; // 04
let c05 = c0 + c5; // 05
let c06 = c0 + c6; // 06
let c07 = c0 + c7; // 07
let c08 = c0 + c8; // 08
let c09 = c0 + c9; // 09
let c10 = c1 + c0; // 10
let c11 = c1 + c1; // 11
let c12 = c1 + c2; // 12
let c13 = c1 + c3; // 13
let c14 = c1 + c4; // 14
let c15 = c1 + c5; // 15
let c16 = c1 + c6; // 16
let c17 = c1 + c7; // 17
let c18 = c1 + c8; // 18
let c19 = c1 + c9; // 19
let c20 = c2 + c0; // 20
let c21 = c2 + c1; // 21
let c22 = c2 + c2; // 22
let c23 = c2 + c3; // 23
let c24 = c2 + c4; // 24
let c25 = c2 + c5; // 25
let c26 = c2 + c6; // 26
let c27 = c2 + c7; // 27
let c28 = c2 + c8; // 28
let c29 = c2 + c9; // 29
let c30 = c3 + c0; // 30
let c31 = c3 + c1; // 31
let c32 = c3 + c2; // 32
let c33 = c3 + c3; // 33
let c34 = c3 + c4; // 34
let c35 = c3 + c5; // 35
let c36 = c3 + c6; // 36
let c37 = c3 + c7; // 37
let c38 = c3 + c8; // 38
let c39 = c3 + c9; // 39
let c40 = c4 + c0; // 40
let c41 = c4 + c1; // 41
let c42 = c4 + c2; // 42
let c43 = c4 + c3; // 43
let c44 = c4 + c4; // 44
let c45 = c4 + c5; // 45
let c46 = c4 + c6; // 46
let c47 = c4 + c7; // 47
let c48 = c4 + c8; // 48
let c49 = c4 + c9; // 49
let c50 = c5 + c0; // 50
let c51 = c5 + c1; // 51
let c52 = c5 + c2; // 52
let c53 = c5 + c3; // 53
let c54 = c5 + c4; // 54
let c55 = c5 + c5; // 55
let c56 = c5 + c6; // 56
let c57 = c5 + c7; // 57
let c58 = c5 + c8; // 58
let c59 = c5 + c9; // 59
let c60 = c6 + c0; // 60
let c61 = c6 + c1; // 61
let c62 = c6 + c2; // 62
let c63 = c6 + c3; // 63
let c64 = c6 + c4; // 64
let c65 = c6 + c5; // 65
let c66 = c6 + c6; // 66
let c67 = c6 + c7; // 67
let c68 = c6 + c8; // 68
let c69 = c6 + c9; // 69
let c70 = c7 + c0; // 70
let c71 = c7 + c1; // 71
let c72 = c7 + c2; // 72
let c73 = c7 + c3; // 73
let c74 = c7 + c4; // 74
let c75 = c7 + c5; // 75
let c76 = c7 + c6; // 76
let c77 = c7 + c7; // 77
let c78 = c7 + c8; // 78
let c79 = c7 + c9; // 79
let c80 = c8 + c0; // 80
let c81 = c8 + c1; // 81
let c82 = c8 + c2; // 82
let c83 = c8 + c3; // 83
let c84 = c8 + c4; // 84
let c85 = c8 + c5; // 85
let c86 = c8 + c6; // 86
let c87 = c8 + c7; // 87
let c88 = c8 + c8; // 88
let c89 = c8 + c9; // 89
let c90 = c9 + c0; // 90
let c91 = c9 + c1; // 91
let c92 = c9 + c2; // 92
let c93 = c9 + c3; // 93
let c94 = c9 + c4; // 94
let c95 = c9 + c5; // 95
let c96 = c9 + c6; // 96
let c97 = c9 + c7; // 97
let c98 = c9 + c8; // 98
let c99 = c9 + c9; // 99

// String Numbers
let czero = bas.cze + bas.cro; // zero
let cZero = bas.cZe + bas.cro; // Zero
let cone = bas.co + bas.cne; // one
let ctwo = bas.ct + bas.cwo; // two
let cthree = bas.ct + phn.chree; // three
let cfour = bas.cf + phn.cour; // four
let cfive = bas.cf + phn.cive; // five
let csix = bas.cs + bas.cix; // six
let cseven = bas.cs + phn.ceven; // seven
let ceight = bas.ce + phn.cight; // eight
let cnine = bas.cn + phn.cine; // nine
let cten = bas.ct + bas.cen; // ten
let celeven = bas.ce + phn.cleven; // eleven
let ctwelve = bas.ct + phn.cwelve; // twelve
let cthirteen = bas.ct + phn.chir + phn.cteen; // thirteen
let cfourteen = cfour + phn.cteen; // fourteen
let cfifteen = bas.cf + bas.cif + phn.cteen; // fifteen
let csixteen = csix + phn.cteen; // sixteen
let cseventeen = cseven + phn.cteen; // seventeen
let ceighteen = bas.ce + phn.cigh + phn.cteen; // eighteen
let cnineteen = cnine + phn.cteen; // nineteen
let ctwenty = bas.ct + phn.cwenty; // twenty
let cthirty = bas.ct + phn.chirty; // thirty
let cfourty = cfour + bas.cty; // fourty
let cfifty = bas.cf + phn.cifty; // fifty
let csixty = csix + bas.cty; // sixty
let cseventy = cseven + bas.cty; // seventy
let ceighty = ceight + bas.cy; // eighty
let cninety = cnine + bas.cty; // ninety
let chundred = bas.ch + phn.cundred; // hundred
let cthousand = bas.ct + phn.chousand; // thousand
let cmillion = bas.cm + phn.cillion; // million
let cbillion = bas.cb + phn.cillion; // billion
let ctrillion = bas.ctr + phn.cillion; // trillion
let cOne = bas.cO + bas.cne; // One
let cTwo = bas.cT + bas.cwo; // Two
let cThree = bas.cT + phn.chree; // Three
let cFour = bas.cF + phn.cour; // Four
let cFive = bas.cF + phn.cive; // Five
let cSix = bas.cS + bas.cix; // Six
let cSeven = bas.cS + phn.ceven; // Seven
let cEight = bas.cE + phn.cight; // Eight
let cNine = bas.cN + phn.cine; // Nine
let cTen = bas.cT + bas.cen; // Ten
let cEleven = bas.cE + phn.cleven; // Eleven
let cTwelve = bas.cT + phn.cwelve; // Twelve
let cThirteen = bas.cT + phn.chir + phn.cteen; // Thirteen
let cFourteen = cFour + phn.cteen; // Fourteen
let cFifteen = bas.cF + bas.cif + phn.cteen; // Fifteen
let cSixteen = cSix + phn.cteen; // Sixteen
let cSeventeen = cSeven + phn.cteen; // Seventeen
let cEighteen = bas.cE + phn.cigh + phn.cteen; // Eighteen
let cNineteen = cNine + phn.cteen; // Nineteen
let cTwenty = bas.cT + phn.cwenty; // Twenty
let cThirty = bas.cT + phn.chirty; // Thirty
let cFourty = cFour + bas.cty; // Fourty
let cFifty = bas.cF + phn.cifty; // Fifty
let cSixty = cSix + bas.cty; // Sixty
let cSeventy = cSeven + bas.cty; // Seventy
let cEighty = cEight + bas.cy; // Eighty
let cNinety = cNine + bas.cty; // Ninety
let cHundred = bas.cH + phn.cundred; // Hundred
let cThousand = bas.cT + phn.chousand; // Thousand
let cMillion = bas.cM + phn.cillion; // Million
let cBillion = bas.cB + phn.cillion; // Billion
let cTrillion = bas.cTr + phn.cillion; // Trillion

// String Number Values
let cfirst = bas.cfi + bas.crs + bas.ct; // first
let cFirst = bas.cFi + bas.crs + bas.ct; // First
// Second - See below
let cthird = bas.cth + bas.cir + bas.cd; // third
let cThird = bas.cTh + bas.cir + bas.cd; // Third
let cfourth = cfour + bas.cth; // fourth
let cFourth = cFour + bas.cth; // Fourth
let cfifth = bas.cfi + bas.cft + bas.ch; // fifth
let cFifth = bas.cFi + bas.cft + bas.ch; // Fifth
let csixth = csix + bas.cth; // sixth
let cSixth = cSix + bas.cth; // Sixth
let cseventh = cseven + bas.cth; // seventh
let cSeventh = cSeven + bas.cth; // Seventh
let ceighth = ceight + bas.ch; // eighth
let cEighth = cEight + bas.ch; // Eighth
let ctenth = cten + bas.cth; // tenth
let cTenth = cTen + bas.cth; // Tenth
let celeventh = celeven + bas.cth; // eleventh
let cEleventh = cEleven + bas.cth; // Eleventh
let ctwelveth = ctwelve + bas.cth; // twelveth
let cTwelveth = cTwelve + bas.cth; // Twelveth
let cthirteenth = cthirteen + bas.cth; // thirteenth
let cThirteenth = cThirteen + bas.cth; // Thirteenth
let cfourteenth = cfourteen + bas.cth; // fourteenth
let cFourteenth = cFourteen + bas.cth; // Fourteenth
let cfifteenth = cfifteen + bas.cth; // fifteenth
let cFifteenth = cFifteen + bas.cth; // Fifteenth
let csixteenth = csixteen + bas.cth; // sixteenth
let cSixteenth = cSixteen + bas.cth; // Sixteenth
let cseventeenth = cseventeen + bas.cth; // seventeenth
let cSeventeenth = cSeventeen + bas.cth; // Seventeenth
let ceighteenth = ceighteen + bas.cth; // eighteenth
let cEighteenth = cEighteen + bas.cth; // Eighteenth
let cnineteenth = cnineteen + bas.cth; // nineteenth
let cNineteenth = cNineteen + bas.cth; // Nineteenth
let ctwentieth = bas.ctw + bas.cen + phn.ctieth; // twentieth
let cTwentieth = bas.cTw + bas.cen + phn.ctieth; // Twentieth
let cthirtieth = bas.cth + bas.cir + phn.ctieth; // thirtieth
let cThirtieth = bas.cTh + bas.cir + phn.ctieth; // Thirtieth
let cfourtieth = cfour + phn.ctieth; // fourtieth
let cFourtieth = cFour + phn.ctieth; // Fourtieth
let cfiftieth = bas.cfi + bas.cf + phn.ctieth; // fiftieth
let cFiftieth = bas.cFi + bas.cf + phn.ctieth; // Fiftieth
let csixtieth = csix + phn.ctieth; // sixtieth
let cSixtieth = cSix + phn.ctieth; // Sixtieth
let cseventieth = cseven + phn.ctieth; // seventieth
let cSeventieth = cSeven + phn.ctieth; // Seventieth
let ceightieth = ceight + phn.cieth; // eightieth
let cEightieth = cEight + phn.cieth; // Eightieth
let cninetieth = cnine + phn.ctieth; // ninetieth
let cNinetieth = cNine + phn.ctieth; // Ninetieth
let chundredth = chundred + bas.cth; // hundredth
let cHundredth = cHundred + bas.cth; // Hundredth
let cthousandth = cthousand + bas.cth; // thousandth
let cThousandth = cThousand + bas.cth; // Thousandth
let cmillionth = cmillion + bas.cth; // millionth
let cMillionth = cMillion + bas.cth; // Millionth
let cbillionth = cbillion + bas.cth; // billionth
let cBillionth = cBillion + bas.cth; // Billionth
let ctrillionth = ctrillion + bas.cth; // trillionth
let cTrillionth = cTrillion + bas.cth; // Trillionth

module.exports = {
  // Numbers
  [bas.cc + c0]: c0, // 0
  [bas.cc + c1]: c1, // 1
  [bas.cc + c2]: c2, // 2
  [bas.cc + c3]: c3, // 3
  [bas.cc + c4]: c4, // 4
  [bas.cc + c5]: c5, // 5
  [bas.cc + c6]: c6, // 6
  [bas.cc + c7]: c7, // 7
  [bas.cc + c8]: c8, // 8
  [bas.cc + c9]: c9, // 9

  [bas.cc + c00]: c00, // 00
  [bas.cc + c01]: c01, // 01
  [bas.cc + c02]: c02, // 02
  [bas.cc + c03]: c03, // 03
  [bas.cc + c04]: c04, // 04
  [bas.cc + c05]: c05, // 05
  [bas.cc + c06]: c06, // 06
  [bas.cc + c07]: c07, // 07
  [bas.cc + c08]: c08, // 08
  [bas.cc + c09]: c09, // 09
  [bas.cc + c10]: c10, // 10
  [bas.cc + c11]: c11, // 11
  [bas.cc + c12]: c12, // 12
  [bas.cc + c13]: c13, // 13
  [bas.cc + c14]: c14, // 14
  [bas.cc + c15]: c15, // 15
  [bas.cc + c16]: c16, // 16
  [bas.cc + c17]: c17, // 17
  [bas.cc + c18]: c18, // 18
  [bas.cc + c19]: c19, // 19
  [bas.cc + c20]: c20, // 20
  [bas.cc + c21]: c21, // 21
  [bas.cc + c22]: c22, // 22
  [bas.cc + c23]: c23, // 23
  [bas.cc + c24]: c24, // 24
  [bas.cc + c25]: c25, // 25
  [bas.cc + c26]: c26, // 26
  [bas.cc + c27]: c27, // 27
  [bas.cc + c28]: c28, // 28
  [bas.cc + c29]: c29, // 29
  [bas.cc + c30]: c30, // 30
  [bas.cc + c31]: c31, // 31
  [bas.cc + c32]: c32, // 32
  [bas.cc + c33]: c33, // 33
  [bas.cc + c34]: c34, // 34
  [bas.cc + c35]: c35, // 35
  [bas.cc + c36]: c36, // 36
  [bas.cc + c37]: c37, // 37
  [bas.cc + c38]: c38, // 38
  [bas.cc + c39]: c39, // 39
  [bas.cc + c40]: c40, // 40
  [bas.cc + c41]: c41, // 41
  [bas.cc + c42]: c42, // 42
  [bas.cc + c43]: c43, // 43
  [bas.cc + c44]: c44, // 44
  [bas.cc + c45]: c45, // 45
  [bas.cc + c46]: c46, // 46
  [bas.cc + c47]: c47, // 47
  [bas.cc + c48]: c48, // 48
  [bas.cc + c49]: c49, // 49
  [bas.cc + c50]: c50, // 50
  [bas.cc + c51]: c51, // 51
  [bas.cc + c52]: c52, // 52
  [bas.cc + c53]: c53, // 53
  [bas.cc + c54]: c54, // 54
  [bas.cc + c55]: c55, // 55
  [bas.cc + c56]: c56, // 56
  [bas.cc + c57]: c57, // 57
  [bas.cc + c58]: c58, // 58
  [bas.cc + c59]: c59, // 59
  [bas.cc + c60]: c60, // 60
  [bas.cc + c61]: c61, // 61
  [bas.cc + c62]: c62, // 62
  [bas.cc + c63]: c63, // 63
  [bas.cc + c64]: c64, // 64
  [bas.cc + c65]: c65, // 65
  [bas.cc + c66]: c66, // 66
  [bas.cc + c67]: c67, // 67
  [bas.cc + c68]: c68, // 68
  [bas.cc + c69]: c69, // 69
  [bas.cc + c70]: c70, // 70
  [bas.cc + c71]: c71, // 71
  [bas.cc + c72]: c72, // 72
  [bas.cc + c73]: c73, // 73
  [bas.cc + c74]: c74, // 74
  [bas.cc + c75]: c75, // 75
  [bas.cc + c76]: c76, // 76
  [bas.cc + c77]: c77, // 77
  [bas.cc + c78]: c78, // 78
  [bas.cc + c79]: c79, // 79
  [bas.cc + c80]: c80, // 80
  [bas.cc + c81]: c81, // 81
  [bas.cc + c82]: c82, // 82
  [bas.cc + c83]: c83, // 83
  [bas.cc + c84]: c84, // 84
  [bas.cc + c85]: c85, // 85
  [bas.cc + c86]: c86, // 86
  [bas.cc + c87]: c87, // 87
  [bas.cc + c88]: c88, // 88
  [bas.cc + c89]: c89, // 89
  [bas.cc + c90]: c90, // 90
  [bas.cc + c91]: c91, // 91
  [bas.cc + c92]: c92, // 92
  [bas.cc + c93]: c93, // 93
  [bas.cc + c94]: c94, // 94
  [bas.cc + c95]: c95, // 95
  [bas.cc + c96]: c96, // 96
  [bas.cc + c97]: c97, // 97
  [bas.cc + c98]: c98, // 98
  [bas.cc + c99]: c99, // 99
  [bas.cc + c1 + c00]: c1 + c00, // 100

  [bas.cc + c1 + c01]: c1 + c01, // 101
  [bas.cc + c1 + c02]: c1 + c02, // 102
  [bas.cc + c1 + c03]: c1 + c03, // 103
  [bas.cc + c1 + c04]: c1 + c04, // 104
  [bas.cc + c1 + c05]: c1 + c05, // 105
  [bas.cc + c1 + c06]: c1 + c06, // 106
  [bas.cc + c1 + c07]: c1 + c07, // 107
  [bas.cc + c1 + c08]: c1 + c08, // 108
  [bas.cc + c1 + c09]: c1 + c09, // 109
  [bas.cc + c1 + c10]: c1 + c10, // 110
  [bas.cc + c1 + c11]: c1 + c11, // 111
  [bas.cc + c1 + c12]: c1 + c12, // 112
  [bas.cc + c1 + c13]: c1 + c13, // 113
  [bas.cc + c1 + c14]: c1 + c14, // 114
  [bas.cc + c1 + c15]: c1 + c15, // 115
  [bas.cc + c1 + c16]: c1 + c16, // 116
  [bas.cc + c1 + c17]: c1 + c17, // 117
  [bas.cc + c1 + c18]: c1 + c18, // 118
  [bas.cc + c1 + c19]: c1 + c19, // 119
  [bas.cc + c1 + c20]: c1 + c20, // 120
  [bas.cc + c1 + c21]: c1 + c21, // 121
  [bas.cc + c1 + c22]: c1 + c22, // 122
  [bas.cc + c1 + c23]: c1 + c23, // 123
  [bas.cc + c1 + c24]: c1 + c24, // 124
  [bas.cc + c1 + c25]: c1 + c25, // 125
  [bas.cc + c1 + c26]: c1 + c26, // 126
  [bas.cc + c1 + c27]: c1 + c27, // 127
  [bas.cc + c1 + c28]: c1 + c28, // 128
  [bas.cc + c1 + c29]: c1 + c29, // 129
  [bas.cc + c1 + c30]: c1 + c30, // 130
  [bas.cc + c1 + c31]: c1 + c31, // 131
  [bas.cc + c1 + c32]: c1 + c32, // 132
  [bas.cc + c1 + c33]: c1 + c33, // 133
  [bas.cc + c1 + c34]: c1 + c34, // 134
  [bas.cc + c1 + c35]: c1 + c35, // 135
  [bas.cc + c1 + c36]: c1 + c36, // 136
  [bas.cc + c1 + c37]: c1 + c37, // 137
  [bas.cc + c1 + c38]: c1 + c38, // 138
  [bas.cc + c1 + c39]: c1 + c39, // 139
  [bas.cc + c1 + c40]: c1 + c40, // 140
  [bas.cc + c1 + c41]: c1 + c41, // 141
  [bas.cc + c1 + c42]: c1 + c42, // 142
  [bas.cc + c1 + c43]: c1 + c43, // 143
  [bas.cc + c1 + c44]: c1 + c44, // 144
  [bas.cc + c1 + c45]: c1 + c45, // 145
  [bas.cc + c1 + c46]: c1 + c46, // 146
  [bas.cc + c1 + c47]: c1 + c47, // 147
  [bas.cc + c1 + c48]: c1 + c48, // 148
  [bas.cc + c1 + c49]: c1 + c49, // 149
  [bas.cc + c1 + c50]: c1 + c50, // 150
  [bas.cc + c1 + c51]: c1 + c51, // 151
  [bas.cc + c1 + c52]: c1 + c52, // 152
  [bas.cc + c1 + c53]: c1 + c53, // 153
  [bas.cc + c1 + c54]: c1 + c54, // 154
  [bas.cc + c1 + c55]: c1 + c55, // 155
  [bas.cc + c1 + c56]: c1 + c56, // 156
  [bas.cc + c1 + c57]: c1 + c57, // 157
  [bas.cc + c1 + c58]: c1 + c58, // 158
  [bas.cc + c1 + c59]: c1 + c59, // 159
  [bas.cc + c1 + c60]: c1 + c60, // 160
  [bas.cc + c1 + c61]: c1 + c61, // 161
  [bas.cc + c1 + c62]: c1 + c62, // 162
  [bas.cc + c1 + c63]: c1 + c63, // 163
  [bas.cc + c1 + c64]: c1 + c64, // 164
  [bas.cc + c1 + c65]: c1 + c65, // 165
  [bas.cc + c1 + c66]: c1 + c66, // 166
  [bas.cc + c1 + c67]: c1 + c67, // 167
  [bas.cc + c1 + c68]: c1 + c68, // 168
  [bas.cc + c1 + c69]: c1 + c69, // 169
  [bas.cc + c1 + c70]: c1 + c70, // 170
  [bas.cc + c1 + c71]: c1 + c71, // 171
  [bas.cc + c1 + c72]: c1 + c72, // 172
  [bas.cc + c1 + c73]: c1 + c73, // 173
  [bas.cc + c1 + c74]: c1 + c74, // 174
  [bas.cc + c1 + c75]: c1 + c75, // 175
  [bas.cc + c1 + c76]: c1 + c76, // 176
  [bas.cc + c1 + c77]: c1 + c77, // 177
  [bas.cc + c1 + c78]: c1 + c78, // 178
  [bas.cc + c1 + c79]: c1 + c79, // 179
  [bas.cc + c1 + c80]: c1 + c80, // 180
  [bas.cc + c1 + c81]: c1 + c81, // 181
  [bas.cc + c1 + c82]: c1 + c82, // 182
  [bas.cc + c1 + c83]: c1 + c83, // 183
  [bas.cc + c1 + c84]: c1 + c84, // 184
  [bas.cc + c1 + c85]: c1 + c85, // 185
  [bas.cc + c1 + c86]: c1 + c86, // 186
  [bas.cc + c1 + c87]: c1 + c87, // 187
  [bas.cc + c1 + c88]: c1 + c88, // 188
  [bas.cc + c1 + c89]: c1 + c89, // 189
  [bas.cc + c1 + c90]: c1 + c90, // 190
  [bas.cc + c1 + c91]: c1 + c91, // 191
  [bas.cc + c1 + c92]: c1 + c92, // 192
  [bas.cc + c1 + c93]: c1 + c93, // 193
  [bas.cc + c1 + c94]: c1 + c94, // 194
  [bas.cc + c1 + c95]: c1 + c95, // 195
  [bas.cc + c1 + c96]: c1 + c96, // 196
  [bas.cc + c1 + c97]: c1 + c97, // 197
  [bas.cc + c1 + c98]: c1 + c98, // 198
  [bas.cc + c1 + c99]: c1 + c99, // 199

  [bas.cc + c2 + c00]: c2 + c00, // 200
  [bas.cc + c2 + c01]: c2 + c01, // 201
  [bas.cc + c2 + c02]: c2 + c02, // 202
  [bas.cc + c2 + c03]: c2 + c03, // 203
  [bas.cc + c2 + c04]: c2 + c04, // 204
  [bas.cc + c2 + c05]: c2 + c05, // 205
  [bas.cc + c2 + c06]: c2 + c06, // 206
  [bas.cc + c2 + c07]: c2 + c07, // 207
  [bas.cc + c2 + c08]: c2 + c08, // 208
  [bas.cc + c2 + c09]: c2 + c09, // 209
  [bas.cc + c2 + c10]: c2 + c10, // 210
  [bas.cc + c2 + c11]: c2 + c11, // 211
  [bas.cc + c2 + c12]: c2 + c12, // 212
  [bas.cc + c2 + c13]: c2 + c13, // 213
  [bas.cc + c2 + c14]: c2 + c14, // 214
  [bas.cc + c2 + c15]: c2 + c15, // 215
  [bas.cc + c2 + c16]: c2 + c16, // 216
  [bas.cc + c2 + c17]: c2 + c17, // 217
  [bas.cc + c2 + c18]: c2 + c18, // 218
  [bas.cc + c2 + c19]: c2 + c19, // 219
  [bas.cc + c2 + c20]: c2 + c20, // 220
  [bas.cc + c2 + c21]: c2 + c21, // 221
  [bas.cc + c2 + c22]: c2 + c22, // 222
  [bas.cc + c2 + c23]: c2 + c23, // 223
  [bas.cc + c2 + c24]: c2 + c24, // 224
  [bas.cc + c2 + c25]: c2 + c25, // 225
  [bas.cc + c2 + c26]: c2 + c26, // 226
  [bas.cc + c2 + c27]: c2 + c27, // 227
  [bas.cc + c2 + c28]: c2 + c28, // 228
  [bas.cc + c2 + c29]: c2 + c29, // 229
  [bas.cc + c2 + c30]: c2 + c30, // 230
  [bas.cc + c2 + c31]: c2 + c31, // 231
  [bas.cc + c2 + c32]: c2 + c32, // 232
  [bas.cc + c2 + c33]: c2 + c33, // 233
  [bas.cc + c2 + c34]: c2 + c34, // 234
  [bas.cc + c2 + c35]: c2 + c35, // 235
  [bas.cc + c2 + c36]: c2 + c36, // 236
  [bas.cc + c2 + c37]: c2 + c37, // 237
  [bas.cc + c2 + c38]: c2 + c38, // 238
  [bas.cc + c2 + c39]: c2 + c39, // 239
  [bas.cc + c2 + c40]: c2 + c40, // 240
  [bas.cc + c2 + c41]: c2 + c41, // 241
  [bas.cc + c2 + c42]: c2 + c42, // 242
  [bas.cc + c2 + c43]: c2 + c43, // 243
  [bas.cc + c2 + c44]: c2 + c44, // 244
  [bas.cc + c2 + c45]: c2 + c45, // 245
  [bas.cc + c2 + c46]: c2 + c46, // 246
  [bas.cc + c2 + c47]: c2 + c47, // 247
  [bas.cc + c2 + c48]: c2 + c48, // 248
  [bas.cc + c2 + c49]: c2 + c49, // 249
  [bas.cc + c2 + c50]: c2 + c50, // 250
  [bas.cc + c2 + c51]: c2 + c51, // 251
  [bas.cc + c2 + c52]: c2 + c52, // 252
  [bas.cc + c2 + c53]: c2 + c53, // 253
  [bas.cc + c2 + c54]: c2 + c54, // 254
  [bas.cc + c2 + c55]: c2 + c55, // 255
  [bas.cc + c2 + c56]: c2 + c56, // 256
  [bas.cc + c2 + c57]: c2 + c57, // 257
  [bas.cc + c2 + c58]: c2 + c58, // 258
  [bas.cc + c2 + c59]: c2 + c59, // 259
  [bas.cc + c2 + c60]: c2 + c60, // 260
  [bas.cc + c2 + c61]: c2 + c61, // 261
  [bas.cc + c2 + c62]: c2 + c62, // 262
  [bas.cc + c2 + c63]: c2 + c63, // 263
  [bas.cc + c2 + c64]: c2 + c64, // 264
  [bas.cc + c2 + c65]: c2 + c65, // 265
  [bas.cc + c2 + c66]: c2 + c66, // 266
  [bas.cc + c2 + c67]: c2 + c67, // 267
  [bas.cc + c2 + c68]: c2 + c68, // 268
  [bas.cc + c2 + c69]: c2 + c69, // 269
  [bas.cc + c2 + c70]: c2 + c70, // 270
  [bas.cc + c2 + c71]: c2 + c71, // 271
  [bas.cc + c2 + c72]: c2 + c72, // 272
  [bas.cc + c2 + c73]: c2 + c73, // 273
  [bas.cc + c2 + c74]: c2 + c74, // 274
  [bas.cc + c2 + c75]: c2 + c75, // 275
  [bas.cc + c2 + c76]: c2 + c76, // 276
  [bas.cc + c2 + c77]: c2 + c77, // 277
  [bas.cc + c2 + c78]: c2 + c78, // 278
  [bas.cc + c2 + c79]: c2 + c79, // 279
  [bas.cc + c2 + c80]: c2 + c80, // 280
  [bas.cc + c2 + c81]: c2 + c81, // 281
  [bas.cc + c2 + c82]: c2 + c82, // 282
  [bas.cc + c2 + c83]: c2 + c83, // 283
  [bas.cc + c2 + c84]: c2 + c84, // 284
  [bas.cc + c2 + c85]: c2 + c85, // 285
  [bas.cc + c2 + c86]: c2 + c86, // 286
  [bas.cc + c2 + c87]: c2 + c87, // 287
  [bas.cc + c2 + c88]: c2 + c88, // 288
  [bas.cc + c2 + c89]: c2 + c89, // 289
  [bas.cc + c2 + c90]: c2 + c90, // 290
  [bas.cc + c2 + c91]: c2 + c91, // 291
  [bas.cc + c2 + c92]: c2 + c92, // 292
  [bas.cc + c2 + c93]: c2 + c93, // 293
  [bas.cc + c2 + c94]: c2 + c94, // 294
  [bas.cc + c2 + c95]: c2 + c95, // 295
  [bas.cc + c2 + c96]: c2 + c96, // 296
  [bas.cc + c2 + c97]: c2 + c97, // 297
  [bas.cc + c2 + c98]: c2 + c98, // 298
  [bas.cc + c2 + c99]: c2 + c99, // 299

  [bas.cc + c3 + c00]: c3 + c00, // 300
  [bas.cc + c3 + c01]: c3 + c01, // 301
  [bas.cc + c3 + c02]: c3 + c02, // 302
  [bas.cc + c3 + c03]: c3 + c03, // 303
  [bas.cc + c3 + c04]: c3 + c04, // 304
  [bas.cc + c3 + c05]: c3 + c05, // 305
  [bas.cc + c3 + c06]: c3 + c06, // 306
  [bas.cc + c3 + c07]: c3 + c07, // 307
  [bas.cc + c3 + c08]: c3 + c08, // 308
  [bas.cc + c3 + c09]: c3 + c09, // 309
  [bas.cc + c3 + c10]: c3 + c10, // 310
  [bas.cc + c3 + c11]: c3 + c11, // 311
  [bas.cc + c3 + c12]: c3 + c12, // 312
  [bas.cc + c3 + c13]: c3 + c13, // 313
  [bas.cc + c3 + c14]: c3 + c14, // 314
  [bas.cc + c3 + c15]: c3 + c15, // 315
  [bas.cc + c3 + c16]: c3 + c16, // 316
  [bas.cc + c3 + c17]: c3 + c17, // 317
  [bas.cc + c3 + c18]: c3 + c18, // 318
  [bas.cc + c3 + c19]: c3 + c19, // 319
  [bas.cc + c3 + c20]: c3 + c20, // 320
  [bas.cc + c3 + c21]: c3 + c21, // 321
  [bas.cc + c3 + c22]: c3 + c22, // 322
  [bas.cc + c3 + c23]: c3 + c23, // 323
  [bas.cc + c3 + c24]: c3 + c24, // 324
  [bas.cc + c3 + c25]: c3 + c25, // 325
  [bas.cc + c3 + c26]: c3 + c26, // 326
  [bas.cc + c3 + c27]: c3 + c27, // 327
  [bas.cc + c3 + c28]: c3 + c28, // 328
  [bas.cc + c3 + c29]: c3 + c29, // 329
  [bas.cc + c3 + c30]: c3 + c30, // 330
  [bas.cc + c3 + c31]: c3 + c31, // 331
  [bas.cc + c3 + c32]: c3 + c32, // 332
  [bas.cc + c3 + c33]: c3 + c33, // 333
  [bas.cc + c3 + c34]: c3 + c34, // 334
  [bas.cc + c3 + c35]: c3 + c35, // 335
  [bas.cc + c3 + c36]: c3 + c36, // 336
  [bas.cc + c3 + c37]: c3 + c37, // 337
  [bas.cc + c3 + c38]: c3 + c38, // 338
  [bas.cc + c3 + c39]: c3 + c39, // 339
  [bas.cc + c3 + c40]: c3 + c40, // 340
  [bas.cc + c3 + c41]: c3 + c41, // 341
  [bas.cc + c3 + c42]: c3 + c42, // 342
  [bas.cc + c3 + c43]: c3 + c43, // 343
  [bas.cc + c3 + c44]: c3 + c44, // 344
  [bas.cc + c3 + c45]: c3 + c45, // 345
  [bas.cc + c3 + c46]: c3 + c46, // 346
  [bas.cc + c3 + c47]: c3 + c47, // 347
  [bas.cc + c3 + c48]: c3 + c48, // 348
  [bas.cc + c3 + c49]: c3 + c49, // 349
  [bas.cc + c3 + c50]: c3 + c50, // 350
  [bas.cc + c3 + c51]: c3 + c51, // 351
  [bas.cc + c3 + c52]: c3 + c52, // 352
  [bas.cc + c3 + c53]: c3 + c53, // 353
  [bas.cc + c3 + c54]: c3 + c54, // 354
  [bas.cc + c3 + c55]: c3 + c55, // 355
  [bas.cc + c3 + c56]: c3 + c56, // 356
  [bas.cc + c3 + c57]: c3 + c57, // 357
  [bas.cc + c3 + c58]: c3 + c58, // 358
  [bas.cc + c3 + c59]: c3 + c59, // 359
  [bas.cc + c3 + c60]: c3 + c60, // 360
  [bas.cc + c3 + c61]: c3 + c61, // 361
  [bas.cc + c3 + c62]: c3 + c62, // 362
  [bas.cc + c3 + c63]: c3 + c63, // 363
  [bas.cc + c3 + c64]: c3 + c64, // 364
  [bas.cc + c3 + c65]: c3 + c65, // 365
  [bas.cc + c3 + c66]: c3 + c66, // 366
  [bas.cc + c3 + c67]: c3 + c67, // 367
  [bas.cc + c3 + c68]: c3 + c68, // 368
  [bas.cc + c3 + c69]: c3 + c69, // 369
  [bas.cc + c3 + c70]: c3 + c70, // 370
  [bas.cc + c3 + c71]: c3 + c71, // 371
  [bas.cc + c3 + c72]: c3 + c72, // 372
  [bas.cc + c3 + c73]: c3 + c73, // 373
  [bas.cc + c3 + c74]: c3 + c74, // 374
  [bas.cc + c3 + c75]: c3 + c75, // 375
  [bas.cc + c3 + c76]: c3 + c76, // 376
  [bas.cc + c3 + c77]: c3 + c77, // 377
  [bas.cc + c3 + c78]: c3 + c78, // 378
  [bas.cc + c3 + c79]: c3 + c79, // 379
  [bas.cc + c3 + c80]: c3 + c80, // 380
  [bas.cc + c3 + c81]: c3 + c81, // 381
  [bas.cc + c3 + c82]: c3 + c82, // 382
  [bas.cc + c3 + c83]: c3 + c83, // 383
  [bas.cc + c3 + c84]: c3 + c84, // 384
  [bas.cc + c3 + c85]: c3 + c85, // 385
  [bas.cc + c3 + c86]: c3 + c86, // 386
  [bas.cc + c3 + c87]: c3 + c87, // 387
  [bas.cc + c3 + c88]: c3 + c88, // 388
  [bas.cc + c3 + c89]: c3 + c89, // 389
  [bas.cc + c3 + c90]: c3 + c90, // 390
  [bas.cc + c3 + c91]: c3 + c91, // 391
  [bas.cc + c3 + c92]: c3 + c92, // 392
  [bas.cc + c3 + c93]: c3 + c93, // 393
  [bas.cc + c3 + c94]: c3 + c94, // 394
  [bas.cc + c3 + c95]: c3 + c95, // 395
  [bas.cc + c3 + c96]: c3 + c96, // 396
  [bas.cc + c3 + c97]: c3 + c97, // 397
  [bas.cc + c3 + c98]: c3 + c98, // 398
  [bas.cc + c3 + c99]: c3 + c99, // 399

  [bas.cc + c4 + c00]: c4 + c00, // 400
  [bas.cc + c4 + c01]: c4 + c01, // 401
  [bas.cc + c4 + c02]: c4 + c02, // 402
  [bas.cc + c4 + c03]: c4 + c03, // 403
  [bas.cc + c4 + c04]: c4 + c04, // 404
  [bas.cc + c4 + c05]: c4 + c05, // 405
  [bas.cc + c4 + c06]: c4 + c06, // 406
  [bas.cc + c4 + c07]: c4 + c07, // 407
  [bas.cc + c4 + c08]: c4 + c08, // 408
  [bas.cc + c4 + c09]: c4 + c09, // 409
  [bas.cc + c4 + c10]: c4 + c10, // 410
  [bas.cc + c4 + c11]: c4 + c11, // 411
  [bas.cc + c4 + c12]: c4 + c12, // 412
  [bas.cc + c4 + c13]: c4 + c13, // 413
  [bas.cc + c4 + c14]: c4 + c14, // 414
  [bas.cc + c4 + c15]: c4 + c15, // 415
  [bas.cc + c4 + c16]: c4 + c16, // 416
  [bas.cc + c4 + c17]: c4 + c17, // 417
  [bas.cc + c4 + c18]: c4 + c18, // 418
  [bas.cc + c4 + c19]: c4 + c19, // 419
  [bas.cc + c4 + c20]: c4 + c20, // 420
  [bas.cc + c4 + c21]: c4 + c21, // 421
  [bas.cc + c4 + c22]: c4 + c22, // 422
  [bas.cc + c4 + c23]: c4 + c23, // 423
  [bas.cc + c4 + c24]: c4 + c24, // 424
  [bas.cc + c4 + c25]: c4 + c25, // 425
  [bas.cc + c4 + c26]: c4 + c26, // 426
  [bas.cc + c4 + c27]: c4 + c27, // 427
  [bas.cc + c4 + c28]: c4 + c28, // 428
  [bas.cc + c4 + c29]: c4 + c29, // 429
  [bas.cc + c4 + c30]: c4 + c30, // 430
  [bas.cc + c4 + c31]: c4 + c31, // 431
  [bas.cc + c4 + c32]: c4 + c32, // 432
  [bas.cc + c4 + c33]: c4 + c33, // 433
  [bas.cc + c4 + c34]: c4 + c34, // 434
  [bas.cc + c4 + c35]: c4 + c35, // 435
  [bas.cc + c4 + c36]: c4 + c36, // 436
  [bas.cc + c4 + c37]: c4 + c37, // 437
  [bas.cc + c4 + c38]: c4 + c38, // 438
  [bas.cc + c4 + c39]: c4 + c39, // 439
  [bas.cc + c4 + c40]: c4 + c40, // 440
  [bas.cc + c4 + c41]: c4 + c41, // 441
  [bas.cc + c4 + c42]: c4 + c42, // 442
  [bas.cc + c4 + c43]: c4 + c43, // 443
  [bas.cc + c4 + c44]: c4 + c44, // 444
  [bas.cc + c4 + c45]: c4 + c45, // 445
  [bas.cc + c4 + c46]: c4 + c46, // 446
  [bas.cc + c4 + c47]: c4 + c47, // 447
  [bas.cc + c4 + c48]: c4 + c48, // 448
  [bas.cc + c4 + c49]: c4 + c49, // 449
  [bas.cc + c4 + c50]: c4 + c50, // 450
  [bas.cc + c4 + c51]: c4 + c51, // 451
  [bas.cc + c4 + c52]: c4 + c52, // 452
  [bas.cc + c4 + c53]: c4 + c53, // 453
  [bas.cc + c4 + c54]: c4 + c54, // 454
  [bas.cc + c4 + c55]: c4 + c55, // 455
  [bas.cc + c4 + c56]: c4 + c56, // 456
  [bas.cc + c4 + c57]: c4 + c57, // 457
  [bas.cc + c4 + c58]: c4 + c58, // 458
  [bas.cc + c4 + c59]: c4 + c59, // 459
  [bas.cc + c4 + c60]: c4 + c60, // 460
  [bas.cc + c4 + c61]: c4 + c61, // 461
  [bas.cc + c4 + c62]: c4 + c62, // 462
  [bas.cc + c4 + c63]: c4 + c63, // 463
  [bas.cc + c4 + c64]: c4 + c64, // 464
  [bas.cc + c4 + c65]: c4 + c65, // 465
  [bas.cc + c4 + c66]: c4 + c66, // 466
  [bas.cc + c4 + c67]: c4 + c67, // 467
  [bas.cc + c4 + c68]: c4 + c68, // 468
  [bas.cc + c4 + c69]: c4 + c69, // 469
  [bas.cc + c4 + c70]: c4 + c70, // 470
  [bas.cc + c4 + c71]: c4 + c71, // 471
  [bas.cc + c4 + c72]: c4 + c72, // 472
  [bas.cc + c4 + c73]: c4 + c73, // 473
  [bas.cc + c4 + c74]: c4 + c74, // 474
  [bas.cc + c4 + c75]: c4 + c75, // 475
  [bas.cc + c4 + c76]: c4 + c76, // 476
  [bas.cc + c4 + c77]: c4 + c77, // 477
  [bas.cc + c4 + c78]: c4 + c78, // 478
  [bas.cc + c4 + c79]: c4 + c79, // 479
  [bas.cc + c4 + c80]: c4 + c80, // 480
  [bas.cc + c4 + c81]: c4 + c81, // 481
  [bas.cc + c4 + c82]: c4 + c82, // 482
  [bas.cc + c4 + c83]: c4 + c83, // 483
  [bas.cc + c4 + c84]: c4 + c84, // 484
  [bas.cc + c4 + c85]: c4 + c85, // 485
  [bas.cc + c4 + c86]: c4 + c86, // 486
  [bas.cc + c4 + c87]: c4 + c87, // 487
  [bas.cc + c4 + c88]: c4 + c88, // 488
  [bas.cc + c4 + c89]: c4 + c89, // 489
  [bas.cc + c4 + c90]: c4 + c90, // 490
  [bas.cc + c4 + c91]: c4 + c91, // 491
  [bas.cc + c4 + c92]: c4 + c92, // 492
  [bas.cc + c4 + c93]: c4 + c93, // 493
  [bas.cc + c4 + c94]: c4 + c94, // 494
  [bas.cc + c4 + c95]: c4 + c95, // 495
  [bas.cc + c4 + c96]: c4 + c96, // 496
  [bas.cc + c4 + c97]: c4 + c97, // 497
  [bas.cc + c4 + c98]: c4 + c98, // 498
  [bas.cc + c4 + c99]: c4 + c99, // 499

  [bas.cc + c5 + c00]: c5 + c00, // 500
  [bas.cc + c5 + c01]: c5 + c01, // 501
  [bas.cc + c5 + c02]: c5 + c02, // 502
  [bas.cc + c5 + c03]: c5 + c03, // 503
  [bas.cc + c5 + c04]: c5 + c04, // 504
  [bas.cc + c5 + c05]: c5 + c05, // 505
  [bas.cc + c5 + c06]: c5 + c06, // 506
  [bas.cc + c5 + c07]: c5 + c07, // 507
  [bas.cc + c5 + c08]: c5 + c08, // 508
  [bas.cc + c5 + c09]: c5 + c09, // 509
  [bas.cc + c5 + c10]: c5 + c10, // 510
  [bas.cc + c5 + c11]: c5 + c11, // 511
  [bas.cc + c5 + c12]: c5 + c12, // 512
  [bas.cc + c5 + c13]: c5 + c13, // 513
  [bas.cc + c5 + c14]: c5 + c14, // 514
  [bas.cc + c5 + c15]: c5 + c15, // 515
  [bas.cc + c5 + c16]: c5 + c16, // 516
  [bas.cc + c5 + c17]: c5 + c17, // 517
  [bas.cc + c5 + c18]: c5 + c18, // 518
  [bas.cc + c5 + c19]: c5 + c19, // 519
  [bas.cc + c5 + c20]: c5 + c20, // 520
  [bas.cc + c5 + c21]: c5 + c21, // 521
  [bas.cc + c5 + c22]: c5 + c22, // 522
  [bas.cc + c5 + c23]: c5 + c23, // 523
  [bas.cc + c5 + c24]: c5 + c24, // 524
  [bas.cc + c5 + c25]: c5 + c25, // 525
  [bas.cc + c5 + c26]: c5 + c26, // 526
  [bas.cc + c5 + c27]: c5 + c27, // 527
  [bas.cc + c5 + c28]: c5 + c28, // 528
  [bas.cc + c5 + c29]: c5 + c29, // 529
  [bas.cc + c5 + c30]: c5 + c30, // 530
  [bas.cc + c5 + c31]: c5 + c31, // 531
  [bas.cc + c5 + c32]: c5 + c32, // 532
  [bas.cc + c5 + c33]: c5 + c33, // 533
  [bas.cc + c5 + c34]: c5 + c34, // 534
  [bas.cc + c5 + c35]: c5 + c35, // 535
  [bas.cc + c5 + c36]: c5 + c36, // 536
  [bas.cc + c5 + c37]: c5 + c37, // 537
  [bas.cc + c5 + c38]: c5 + c38, // 538
  [bas.cc + c5 + c39]: c5 + c39, // 539
  [bas.cc + c5 + c40]: c5 + c40, // 540
  [bas.cc + c5 + c41]: c5 + c41, // 541
  [bas.cc + c5 + c42]: c5 + c42, // 542
  [bas.cc + c5 + c43]: c5 + c43, // 543
  [bas.cc + c5 + c44]: c5 + c44, // 544
  [bas.cc + c5 + c45]: c5 + c45, // 545
  [bas.cc + c5 + c46]: c5 + c46, // 546
  [bas.cc + c5 + c47]: c5 + c47, // 547
  [bas.cc + c5 + c48]: c5 + c48, // 548
  [bas.cc + c5 + c49]: c5 + c49, // 549
  [bas.cc + c5 + c50]: c5 + c50, // 550
  [bas.cc + c5 + c51]: c5 + c51, // 551
  [bas.cc + c5 + c52]: c5 + c52, // 552
  [bas.cc + c5 + c53]: c5 + c53, // 553
  [bas.cc + c5 + c54]: c5 + c54, // 554
  [bas.cc + c5 + c55]: c5 + c55, // 555
  [bas.cc + c5 + c56]: c5 + c56, // 556
  [bas.cc + c5 + c57]: c5 + c57, // 557
  [bas.cc + c5 + c58]: c5 + c58, // 558
  [bas.cc + c5 + c59]: c5 + c59, // 559
  [bas.cc + c5 + c60]: c5 + c60, // 560
  [bas.cc + c5 + c61]: c5 + c61, // 561
  [bas.cc + c5 + c62]: c5 + c62, // 562
  [bas.cc + c5 + c63]: c5 + c63, // 563
  [bas.cc + c5 + c64]: c5 + c64, // 564
  [bas.cc + c5 + c65]: c5 + c65, // 565
  [bas.cc + c5 + c66]: c5 + c66, // 566
  [bas.cc + c5 + c67]: c5 + c67, // 567
  [bas.cc + c5 + c68]: c5 + c68, // 568
  [bas.cc + c5 + c69]: c5 + c69, // 569
  [bas.cc + c5 + c70]: c5 + c70, // 570
  [bas.cc + c5 + c71]: c5 + c71, // 571
  [bas.cc + c5 + c72]: c5 + c72, // 572
  [bas.cc + c5 + c73]: c5 + c73, // 573
  [bas.cc + c5 + c74]: c5 + c74, // 574
  [bas.cc + c5 + c75]: c5 + c75, // 575
  [bas.cc + c5 + c76]: c5 + c76, // 576
  [bas.cc + c5 + c77]: c5 + c77, // 577
  [bas.cc + c5 + c78]: c5 + c78, // 578
  [bas.cc + c5 + c79]: c5 + c79, // 579
  [bas.cc + c5 + c80]: c5 + c80, // 580
  [bas.cc + c5 + c81]: c5 + c81, // 581
  [bas.cc + c5 + c82]: c5 + c82, // 582
  [bas.cc + c5 + c83]: c5 + c83, // 583
  [bas.cc + c5 + c84]: c5 + c84, // 584
  [bas.cc + c5 + c85]: c5 + c85, // 585
  [bas.cc + c5 + c86]: c5 + c86, // 586
  [bas.cc + c5 + c87]: c5 + c87, // 587
  [bas.cc + c5 + c88]: c5 + c88, // 588
  [bas.cc + c5 + c89]: c5 + c89, // 589
  [bas.cc + c5 + c90]: c5 + c90, // 590
  [bas.cc + c5 + c91]: c5 + c91, // 591
  [bas.cc + c5 + c92]: c5 + c92, // 592
  [bas.cc + c5 + c93]: c5 + c93, // 593
  [bas.cc + c5 + c94]: c5 + c94, // 594
  [bas.cc + c5 + c95]: c5 + c95, // 595
  [bas.cc + c5 + c96]: c5 + c96, // 596
  [bas.cc + c5 + c97]: c5 + c97, // 597
  [bas.cc + c5 + c98]: c5 + c98, // 598
  [bas.cc + c5 + c99]: c5 + c99, // 599

  [bas.cc + c6 + c00]: c6 + c00, // 600
  [bas.cc + c6 + c01]: c6 + c01, // 601
  [bas.cc + c6 + c02]: c6 + c02, // 602
  [bas.cc + c6 + c03]: c6 + c03, // 603
  [bas.cc + c6 + c04]: c6 + c04, // 604
  [bas.cc + c6 + c05]: c6 + c05, // 605
  [bas.cc + c6 + c06]: c6 + c06, // 606
  [bas.cc + c6 + c07]: c6 + c07, // 607
  [bas.cc + c6 + c08]: c6 + c08, // 608
  [bas.cc + c6 + c09]: c6 + c09, // 609
  [bas.cc + c6 + c10]: c6 + c10, // 610
  [bas.cc + c6 + c11]: c6 + c11, // 611
  [bas.cc + c6 + c12]: c6 + c12, // 612
  [bas.cc + c6 + c13]: c6 + c13, // 613
  [bas.cc + c6 + c14]: c6 + c14, // 614
  [bas.cc + c6 + c15]: c6 + c15, // 615
  [bas.cc + c6 + c16]: c6 + c16, // 616
  [bas.cc + c6 + c17]: c6 + c17, // 617
  [bas.cc + c6 + c18]: c6 + c18, // 618
  [bas.cc + c6 + c19]: c6 + c19, // 619
  [bas.cc + c6 + c20]: c6 + c20, // 620
  [bas.cc + c6 + c21]: c6 + c21, // 621
  [bas.cc + c6 + c22]: c6 + c22, // 622
  [bas.cc + c6 + c23]: c6 + c23, // 623
  [bas.cc + c6 + c24]: c6 + c24, // 624
  [bas.cc + c6 + c25]: c6 + c25, // 625
  [bas.cc + c6 + c26]: c6 + c26, // 626
  [bas.cc + c6 + c27]: c6 + c27, // 627
  [bas.cc + c6 + c28]: c6 + c28, // 628
  [bas.cc + c6 + c29]: c6 + c29, // 629
  [bas.cc + c6 + c30]: c6 + c30, // 630
  [bas.cc + c6 + c31]: c6 + c31, // 631
  [bas.cc + c6 + c32]: c6 + c32, // 632
  [bas.cc + c6 + c33]: c6 + c33, // 633
  [bas.cc + c6 + c34]: c6 + c34, // 634
  [bas.cc + c6 + c35]: c6 + c35, // 635
  [bas.cc + c6 + c36]: c6 + c36, // 636
  [bas.cc + c6 + c37]: c6 + c37, // 637
  [bas.cc + c6 + c38]: c6 + c38, // 638
  [bas.cc + c6 + c39]: c6 + c39, // 639
  [bas.cc + c6 + c40]: c6 + c40, // 640
  [bas.cc + c6 + c41]: c6 + c41, // 641
  [bas.cc + c6 + c42]: c6 + c42, // 642
  [bas.cc + c6 + c43]: c6 + c43, // 643
  [bas.cc + c6 + c44]: c6 + c44, // 644
  [bas.cc + c6 + c45]: c6 + c45, // 645
  [bas.cc + c6 + c46]: c6 + c46, // 646
  [bas.cc + c6 + c47]: c6 + c47, // 647
  [bas.cc + c6 + c48]: c6 + c48, // 648
  [bas.cc + c6 + c49]: c6 + c49, // 649
  [bas.cc + c6 + c50]: c6 + c50, // 650
  [bas.cc + c6 + c51]: c6 + c51, // 651
  [bas.cc + c6 + c52]: c6 + c52, // 652
  [bas.cc + c6 + c53]: c6 + c53, // 653
  [bas.cc + c6 + c54]: c6 + c54, // 654
  [bas.cc + c6 + c55]: c6 + c55, // 655
  [bas.cc + c6 + c56]: c6 + c56, // 656
  [bas.cc + c6 + c57]: c6 + c57, // 657
  [bas.cc + c6 + c58]: c6 + c58, // 658
  [bas.cc + c6 + c59]: c6 + c59, // 659
  [bas.cc + c6 + c60]: c6 + c60, // 660
  [bas.cc + c6 + c61]: c6 + c61, // 661
  [bas.cc + c6 + c62]: c6 + c62, // 662
  [bas.cc + c6 + c63]: c6 + c63, // 663
  [bas.cc + c6 + c64]: c6 + c64, // 664
  [bas.cc + c6 + c65]: c6 + c65, // 665
  [bas.cc + c6 + c66]: c6 + c66, // 666
  [bas.cc + c6 + c67]: c6 + c67, // 667
  [bas.cc + c6 + c68]: c6 + c68, // 668
  [bas.cc + c6 + c69]: c6 + c69, // 669
  [bas.cc + c6 + c70]: c6 + c70, // 670
  [bas.cc + c6 + c71]: c6 + c71, // 671
  [bas.cc + c6 + c72]: c6 + c72, // 672
  [bas.cc + c6 + c73]: c6 + c73, // 673
  [bas.cc + c6 + c74]: c6 + c74, // 674
  [bas.cc + c6 + c75]: c6 + c75, // 675
  [bas.cc + c6 + c76]: c6 + c76, // 676
  [bas.cc + c6 + c77]: c6 + c77, // 677
  [bas.cc + c6 + c78]: c6 + c78, // 678
  [bas.cc + c6 + c79]: c6 + c79, // 679
  [bas.cc + c6 + c80]: c6 + c80, // 680
  [bas.cc + c6 + c81]: c6 + c81, // 681
  [bas.cc + c6 + c82]: c6 + c82, // 682
  [bas.cc + c6 + c83]: c6 + c83, // 683
  [bas.cc + c6 + c84]: c6 + c84, // 684
  [bas.cc + c6 + c85]: c6 + c85, // 685
  [bas.cc + c6 + c86]: c6 + c86, // 686
  [bas.cc + c6 + c87]: c6 + c87, // 687
  [bas.cc + c6 + c88]: c6 + c88, // 688
  [bas.cc + c6 + c89]: c6 + c89, // 689
  [bas.cc + c6 + c90]: c6 + c90, // 690
  [bas.cc + c6 + c91]: c6 + c91, // 691
  [bas.cc + c6 + c92]: c6 + c92, // 692
  [bas.cc + c6 + c93]: c6 + c93, // 693
  [bas.cc + c6 + c94]: c6 + c94, // 694
  [bas.cc + c6 + c95]: c6 + c95, // 695
  [bas.cc + c6 + c96]: c6 + c96, // 696
  [bas.cc + c6 + c97]: c6 + c97, // 697
  [bas.cc + c6 + c98]: c6 + c98, // 698
  [bas.cc + c6 + c99]: c6 + c99, // 699

  [bas.cc + c7 + c00]: c7 + c00, // 700
  [bas.cc + c7 + c01]: c7 + c01, // 701
  [bas.cc + c7 + c02]: c7 + c02, // 702
  [bas.cc + c7 + c03]: c7 + c03, // 703
  [bas.cc + c7 + c04]: c7 + c04, // 704
  [bas.cc + c7 + c05]: c7 + c05, // 705
  [bas.cc + c7 + c06]: c7 + c06, // 706
  [bas.cc + c7 + c07]: c7 + c07, // 707
  [bas.cc + c7 + c08]: c7 + c08, // 708
  [bas.cc + c7 + c09]: c7 + c09, // 709
  [bas.cc + c7 + c10]: c7 + c10, // 710
  [bas.cc + c7 + c11]: c7 + c11, // 711
  [bas.cc + c7 + c12]: c7 + c12, // 712
  [bas.cc + c7 + c13]: c7 + c13, // 713
  [bas.cc + c7 + c14]: c7 + c14, // 714
  [bas.cc + c7 + c15]: c7 + c15, // 715
  [bas.cc + c7 + c16]: c7 + c16, // 716
  [bas.cc + c7 + c17]: c7 + c17, // 717
  [bas.cc + c7 + c18]: c7 + c18, // 718
  [bas.cc + c7 + c19]: c7 + c19, // 719
  [bas.cc + c7 + c20]: c7 + c20, // 720
  [bas.cc + c7 + c21]: c7 + c21, // 721
  [bas.cc + c7 + c22]: c7 + c22, // 722
  [bas.cc + c7 + c23]: c7 + c23, // 723
  [bas.cc + c7 + c24]: c7 + c24, // 724
  [bas.cc + c7 + c25]: c7 + c25, // 725
  [bas.cc + c7 + c26]: c7 + c26, // 726
  [bas.cc + c7 + c27]: c7 + c27, // 727
  [bas.cc + c7 + c28]: c7 + c28, // 728
  [bas.cc + c7 + c29]: c7 + c29, // 729
  [bas.cc + c7 + c30]: c7 + c30, // 730
  [bas.cc + c7 + c31]: c7 + c31, // 731
  [bas.cc + c7 + c32]: c7 + c32, // 732
  [bas.cc + c7 + c33]: c7 + c33, // 733
  [bas.cc + c7 + c34]: c7 + c34, // 734
  [bas.cc + c7 + c35]: c7 + c35, // 735
  [bas.cc + c7 + c36]: c7 + c36, // 736
  [bas.cc + c7 + c37]: c7 + c37, // 737
  [bas.cc + c7 + c38]: c7 + c38, // 738
  [bas.cc + c7 + c39]: c7 + c39, // 739
  [bas.cc + c7 + c40]: c7 + c40, // 740
  [bas.cc + c7 + c41]: c7 + c41, // 741
  [bas.cc + c7 + c42]: c7 + c42, // 742
  [bas.cc + c7 + c43]: c7 + c43, // 743
  [bas.cc + c7 + c44]: c7 + c44, // 744
  [bas.cc + c7 + c45]: c7 + c45, // 745
  [bas.cc + c7 + c46]: c7 + c46, // 746
  [bas.cc + c7 + c47]: c7 + c47, // 747
  [bas.cc + c7 + c48]: c7 + c48, // 748
  [bas.cc + c7 + c49]: c7 + c49, // 749
  [bas.cc + c7 + c50]: c7 + c50, // 750
  [bas.cc + c7 + c51]: c7 + c51, // 751
  [bas.cc + c7 + c52]: c7 + c52, // 752
  [bas.cc + c7 + c53]: c7 + c53, // 753
  [bas.cc + c7 + c54]: c7 + c54, // 754
  [bas.cc + c7 + c55]: c7 + c55, // 755
  [bas.cc + c7 + c56]: c7 + c56, // 756
  [bas.cc + c7 + c57]: c7 + c57, // 757
  [bas.cc + c7 + c58]: c7 + c58, // 758
  [bas.cc + c7 + c59]: c7 + c59, // 759
  [bas.cc + c7 + c60]: c7 + c60, // 760
  [bas.cc + c7 + c61]: c7 + c61, // 761
  [bas.cc + c7 + c62]: c7 + c62, // 762
  [bas.cc + c7 + c63]: c7 + c63, // 763
  [bas.cc + c7 + c64]: c7 + c64, // 764
  [bas.cc + c7 + c65]: c7 + c65, // 765
  [bas.cc + c7 + c66]: c7 + c66, // 766
  [bas.cc + c7 + c67]: c7 + c67, // 767
  [bas.cc + c7 + c68]: c7 + c68, // 768
  [bas.cc + c7 + c69]: c7 + c69, // 769
  [bas.cc + c7 + c70]: c7 + c70, // 770
  [bas.cc + c7 + c71]: c7 + c71, // 771
  [bas.cc + c7 + c72]: c7 + c72, // 772
  [bas.cc + c7 + c73]: c7 + c73, // 773
  [bas.cc + c7 + c74]: c7 + c74, // 774
  [bas.cc + c7 + c75]: c7 + c75, // 775
  [bas.cc + c7 + c76]: c7 + c76, // 776
  [bas.cc + c7 + c77]: c7 + c77, // 777
  [bas.cc + c7 + c78]: c7 + c78, // 778
  [bas.cc + c7 + c79]: c7 + c79, // 779
  [bas.cc + c7 + c80]: c7 + c80, // 780
  [bas.cc + c7 + c81]: c7 + c81, // 781
  [bas.cc + c7 + c82]: c7 + c82, // 782
  [bas.cc + c7 + c83]: c7 + c83, // 783
  [bas.cc + c7 + c84]: c7 + c84, // 784
  [bas.cc + c7 + c85]: c7 + c85, // 785
  [bas.cc + c7 + c86]: c7 + c86, // 786
  [bas.cc + c7 + c87]: c7 + c87, // 787
  [bas.cc + c7 + c88]: c7 + c88, // 788
  [bas.cc + c7 + c89]: c7 + c89, // 789
  [bas.cc + c7 + c90]: c7 + c90, // 790
  [bas.cc + c7 + c91]: c7 + c91, // 791
  [bas.cc + c7 + c92]: c7 + c92, // 792
  [bas.cc + c7 + c93]: c7 + c93, // 793
  [bas.cc + c7 + c94]: c7 + c94, // 794
  [bas.cc + c7 + c95]: c7 + c95, // 795
  [bas.cc + c7 + c96]: c7 + c96, // 796
  [bas.cc + c7 + c97]: c7 + c97, // 797
  [bas.cc + c7 + c98]: c7 + c98, // 798
  [bas.cc + c7 + c99]: c7 + c99, // 799

  [bas.cc + c8 + c00]: c8 + c00, // 800
  [bas.cc + c8 + c01]: c8 + c01, // 801
  [bas.cc + c8 + c02]: c8 + c02, // 802
  [bas.cc + c8 + c03]: c8 + c03, // 803
  [bas.cc + c8 + c04]: c8 + c04, // 804
  [bas.cc + c8 + c05]: c8 + c05, // 805
  [bas.cc + c8 + c06]: c8 + c06, // 806
  [bas.cc + c8 + c07]: c8 + c07, // 807
  [bas.cc + c8 + c08]: c8 + c08, // 808
  [bas.cc + c8 + c09]: c8 + c09, // 809
  [bas.cc + c8 + c10]: c8 + c10, // 810
  [bas.cc + c8 + c11]: c8 + c11, // 811
  [bas.cc + c8 + c12]: c8 + c12, // 812
  [bas.cc + c8 + c13]: c8 + c13, // 813
  [bas.cc + c8 + c14]: c8 + c14, // 814
  [bas.cc + c8 + c15]: c8 + c15, // 815
  [bas.cc + c8 + c16]: c8 + c16, // 816
  [bas.cc + c8 + c17]: c8 + c17, // 817
  [bas.cc + c8 + c18]: c8 + c18, // 818
  [bas.cc + c8 + c19]: c8 + c19, // 819
  [bas.cc + c8 + c20]: c8 + c20, // 820
  [bas.cc + c8 + c21]: c8 + c21, // 821
  [bas.cc + c8 + c22]: c8 + c22, // 822
  [bas.cc + c8 + c23]: c8 + c23, // 823
  [bas.cc + c8 + c24]: c8 + c24, // 824
  [bas.cc + c8 + c25]: c8 + c25, // 825
  [bas.cc + c8 + c26]: c8 + c26, // 826
  [bas.cc + c8 + c27]: c8 + c27, // 827
  [bas.cc + c8 + c28]: c8 + c28, // 828
  [bas.cc + c8 + c29]: c8 + c29, // 829
  [bas.cc + c8 + c30]: c8 + c30, // 830
  [bas.cc + c8 + c31]: c8 + c31, // 831
  [bas.cc + c8 + c32]: c8 + c32, // 832
  [bas.cc + c8 + c33]: c8 + c33, // 833
  [bas.cc + c8 + c34]: c8 + c34, // 834
  [bas.cc + c8 + c35]: c8 + c35, // 835
  [bas.cc + c8 + c36]: c8 + c36, // 836
  [bas.cc + c8 + c37]: c8 + c37, // 837
  [bas.cc + c8 + c38]: c8 + c38, // 838
  [bas.cc + c8 + c39]: c8 + c39, // 839
  [bas.cc + c8 + c40]: c8 + c40, // 840
  [bas.cc + c8 + c41]: c8 + c41, // 841
  [bas.cc + c8 + c42]: c8 + c42, // 842
  [bas.cc + c8 + c43]: c8 + c43, // 843
  [bas.cc + c8 + c44]: c8 + c44, // 844
  [bas.cc + c8 + c45]: c8 + c45, // 845
  [bas.cc + c8 + c46]: c8 + c46, // 846
  [bas.cc + c8 + c47]: c8 + c47, // 847
  [bas.cc + c8 + c48]: c8 + c48, // 848
  [bas.cc + c8 + c49]: c8 + c49, // 849
  [bas.cc + c8 + c50]: c8 + c50, // 850
  [bas.cc + c8 + c51]: c8 + c51, // 851
  [bas.cc + c8 + c52]: c8 + c52, // 852
  [bas.cc + c8 + c53]: c8 + c53, // 853
  [bas.cc + c8 + c54]: c8 + c54, // 854
  [bas.cc + c8 + c55]: c8 + c55, // 855
  [bas.cc + c8 + c56]: c8 + c56, // 856
  [bas.cc + c8 + c57]: c8 + c57, // 857
  [bas.cc + c8 + c58]: c8 + c58, // 858
  [bas.cc + c8 + c59]: c8 + c59, // 859
  [bas.cc + c8 + c60]: c8 + c60, // 860
  [bas.cc + c8 + c61]: c8 + c61, // 861
  [bas.cc + c8 + c62]: c8 + c62, // 862
  [bas.cc + c8 + c63]: c8 + c63, // 863
  [bas.cc + c8 + c64]: c8 + c64, // 864
  [bas.cc + c8 + c65]: c8 + c65, // 865
  [bas.cc + c8 + c66]: c8 + c66, // 866
  [bas.cc + c8 + c67]: c8 + c67, // 867
  [bas.cc + c8 + c68]: c8 + c68, // 868
  [bas.cc + c8 + c69]: c8 + c69, // 869
  [bas.cc + c8 + c70]: c8 + c70, // 870
  [bas.cc + c8 + c71]: c8 + c71, // 871
  [bas.cc + c8 + c72]: c8 + c72, // 872
  [bas.cc + c8 + c73]: c8 + c73, // 873
  [bas.cc + c8 + c74]: c8 + c74, // 874
  [bas.cc + c8 + c75]: c8 + c75, // 875
  [bas.cc + c8 + c76]: c8 + c76, // 876
  [bas.cc + c8 + c77]: c8 + c77, // 877
  [bas.cc + c8 + c78]: c8 + c78, // 878
  [bas.cc + c8 + c79]: c8 + c79, // 879
  [bas.cc + c8 + c80]: c8 + c80, // 880
  [bas.cc + c8 + c81]: c8 + c81, // 881
  [bas.cc + c8 + c82]: c8 + c82, // 882
  [bas.cc + c8 + c83]: c8 + c83, // 883
  [bas.cc + c8 + c84]: c8 + c84, // 884
  [bas.cc + c8 + c85]: c8 + c85, // 885
  [bas.cc + c8 + c86]: c8 + c86, // 886
  [bas.cc + c8 + c87]: c8 + c87, // 887
  [bas.cc + c8 + c88]: c8 + c88, // 888
  [bas.cc + c8 + c89]: c8 + c89, // 889
  [bas.cc + c8 + c90]: c8 + c90, // 890
  [bas.cc + c8 + c91]: c8 + c91, // 891
  [bas.cc + c8 + c92]: c8 + c92, // 892
  [bas.cc + c8 + c93]: c8 + c93, // 893
  [bas.cc + c8 + c94]: c8 + c94, // 894
  [bas.cc + c8 + c95]: c8 + c95, // 895
  [bas.cc + c8 + c96]: c8 + c96, // 896
  [bas.cc + c8 + c97]: c8 + c97, // 897
  [bas.cc + c8 + c98]: c8 + c98, // 898
  [bas.cc + c8 + c99]: c8 + c99, // 899

  [bas.cc + c9 + c00]: c9 + c00, // 900
  [bas.cc + c9 + c01]: c9 + c01, // 901
  [bas.cc + c9 + c02]: c9 + c02, // 902
  [bas.cc + c9 + c03]: c9 + c03, // 903
  [bas.cc + c9 + c04]: c9 + c04, // 904
  [bas.cc + c9 + c05]: c9 + c05, // 905
  [bas.cc + c9 + c06]: c9 + c06, // 906
  [bas.cc + c9 + c07]: c9 + c07, // 907
  [bas.cc + c9 + c08]: c9 + c08, // 908
  [bas.cc + c9 + c09]: c9 + c09, // 909
  [bas.cc + c9 + c10]: c9 + c10, // 910
  [bas.cc + c9 + c11]: c9 + c11, // 911
  [bas.cc + c9 + c12]: c9 + c12, // 912
  [bas.cc + c9 + c13]: c9 + c13, // 913
  [bas.cc + c9 + c14]: c9 + c14, // 914
  [bas.cc + c9 + c15]: c9 + c15, // 915
  [bas.cc + c9 + c16]: c9 + c16, // 916
  [bas.cc + c9 + c17]: c9 + c17, // 917
  [bas.cc + c9 + c18]: c9 + c18, // 918
  [bas.cc + c9 + c19]: c9 + c19, // 919
  [bas.cc + c9 + c20]: c9 + c20, // 920
  [bas.cc + c9 + c21]: c9 + c21, // 921
  [bas.cc + c9 + c22]: c9 + c22, // 922
  [bas.cc + c9 + c23]: c9 + c23, // 923
  [bas.cc + c9 + c24]: c9 + c24, // 924
  [bas.cc + c9 + c25]: c9 + c25, // 925
  [bas.cc + c9 + c26]: c9 + c26, // 926
  [bas.cc + c9 + c27]: c9 + c27, // 927
  [bas.cc + c9 + c28]: c9 + c28, // 928
  [bas.cc + c9 + c29]: c9 + c29, // 929
  [bas.cc + c9 + c30]: c9 + c30, // 930
  [bas.cc + c9 + c31]: c9 + c31, // 931
  [bas.cc + c9 + c32]: c9 + c32, // 932
  [bas.cc + c9 + c33]: c9 + c33, // 933
  [bas.cc + c9 + c34]: c9 + c34, // 934
  [bas.cc + c9 + c35]: c9 + c35, // 935
  [bas.cc + c9 + c36]: c9 + c36, // 936
  [bas.cc + c9 + c37]: c9 + c37, // 937
  [bas.cc + c9 + c38]: c9 + c38, // 938
  [bas.cc + c9 + c39]: c9 + c39, // 939
  [bas.cc + c9 + c40]: c9 + c40, // 940
  [bas.cc + c9 + c41]: c9 + c41, // 941
  [bas.cc + c9 + c42]: c9 + c42, // 942
  [bas.cc + c9 + c43]: c9 + c43, // 943
  [bas.cc + c9 + c44]: c9 + c44, // 944
  [bas.cc + c9 + c45]: c9 + c45, // 945
  [bas.cc + c9 + c46]: c9 + c46, // 946
  [bas.cc + c9 + c47]: c9 + c47, // 947
  [bas.cc + c9 + c48]: c9 + c48, // 948
  [bas.cc + c9 + c49]: c9 + c49, // 949
  [bas.cc + c9 + c50]: c9 + c50, // 950
  [bas.cc + c9 + c51]: c9 + c51, // 951
  [bas.cc + c9 + c52]: c9 + c52, // 952
  [bas.cc + c9 + c53]: c9 + c53, // 953
  [bas.cc + c9 + c54]: c9 + c54, // 954
  [bas.cc + c9 + c55]: c9 + c55, // 955
  [bas.cc + c9 + c56]: c9 + c56, // 956
  [bas.cc + c9 + c57]: c9 + c57, // 957
  [bas.cc + c9 + c58]: c9 + c58, // 958
  [bas.cc + c9 + c59]: c9 + c59, // 959
  [bas.cc + c9 + c60]: c9 + c60, // 960
  [bas.cc + c9 + c61]: c9 + c61, // 961
  [bas.cc + c9 + c62]: c9 + c62, // 962
  [bas.cc + c9 + c63]: c9 + c63, // 963
  [bas.cc + c9 + c64]: c9 + c64, // 964
  [bas.cc + c9 + c65]: c9 + c65, // 965
  [bas.cc + c9 + c66]: c9 + c66, // 966
  [bas.cc + c9 + c67]: c9 + c67, // 967
  [bas.cc + c9 + c68]: c9 + c68, // 968
  [bas.cc + c9 + c69]: c9 + c69, // 969
  [bas.cc + c9 + c70]: c9 + c70, // 970
  [bas.cc + c9 + c71]: c9 + c71, // 971
  [bas.cc + c9 + c72]: c9 + c72, // 972
  [bas.cc + c9 + c73]: c9 + c73, // 973
  [bas.cc + c9 + c74]: c9 + c74, // 974
  [bas.cc + c9 + c75]: c9 + c75, // 975
  [bas.cc + c9 + c76]: c9 + c76, // 976
  [bas.cc + c9 + c77]: c9 + c77, // 977
  [bas.cc + c9 + c78]: c9 + c78, // 978
  [bas.cc + c9 + c79]: c9 + c79, // 979
  [bas.cc + c9 + c80]: c9 + c80, // 980
  [bas.cc + c9 + c81]: c9 + c81, // 981
  [bas.cc + c9 + c82]: c9 + c82, // 982
  [bas.cc + c9 + c83]: c9 + c83, // 983
  [bas.cc + c9 + c84]: c9 + c84, // 984
  [bas.cc + c9 + c85]: c9 + c85, // 985
  [bas.cc + c9 + c86]: c9 + c86, // 986
  [bas.cc + c9 + c87]: c9 + c87, // 987
  [bas.cc + c9 + c88]: c9 + c88, // 988
  [bas.cc + c9 + c89]: c9 + c89, // 989
  [bas.cc + c9 + c90]: c9 + c90, // 990
  [bas.cc + c9 + c91]: c9 + c91, // 991
  [bas.cc + c9 + c92]: c9 + c92, // 992
  [bas.cc + c9 + c93]: c9 + c93, // 993
  [bas.cc + c9 + c94]: c9 + c94, // 994
  [bas.cc + c9 + c95]: c9 + c95, // 995
  [bas.cc + c9 + c96]: c9 + c96, // 996
  [bas.cc + c9 + c97]: c9 + c97, // 997
  [bas.cc + c9 + c98]: c9 + c98, // 998
  [bas.cc + c9 + c99]: c9 + c99, // 999

  // String Numbers
  [bas.cc + cTen]: cTen, // Ten
  [bas.cc + czero]: czero, // zero
  [bas.cc + cZero]: cZero, // Zero
  [bas.cc + cone]: cone, // one
  [bas.cc + ctwo]: ctwo, // two
  [bas.cc + cthree]: cthree, // three
  [bas.cc + cfour]: cfour, // four
  [bas.cc + cfive]: cfive, // five
  [bas.cc + csix]: csix, // six
  [bas.cc + cseven]: cseven, // seven
  [bas.cc + ceight]: ceight, // eight
  [bas.cc + cnine]: cnine, // nine
  [bas.cc + cten]: cten, // ten
  [bas.cc + celeven]: celeven, // eleven
  [bas.cc + ctwelve]: ctwelve, // twelve
  [bas.cc + cthirteen]: cthirteen, // thirteen
  [bas.cc + cfourteen]: cfourteen, // fourteen
  [bas.cc + cfifteen]: cfifteen, // fifteen
  [bas.cc + csixteen]: csixteen, // sixteen
  [bas.cc + cseventeen]: cseventeen, // seventeen
  [bas.cc + ceighteen]: ceighteen, // eighteen
  [bas.cc + cnineteen]: cnineteen, // nineteen
  [bas.cc + ctwenty]: ctwenty, // twenty
  [bas.cc + cthirty]: cthirty, // thirty
  [bas.cc + cfourty]: cfourty, // fourty
  [bas.cc + cfifty]: cfifty, // fifty
  [bas.cc + csixty]: csixty, // sixty
  [bas.cc + cseventy]: cseventy, // seventy
  [bas.cc + ceighty]: ceighty, // eighty
  [bas.cc + cninety]: cninety, // ninety
  [bas.cc + chundred]: chundred, // hundred
  [bas.cc + cthousand]: cthousand, // thousand
  [bas.cc + cmillion]: cmillion, // million
  [bas.cc + cbillion]: cbillion, // billion
  [bas.cc + ctrillion]: ctrillion, // trillion
  [bas.cc + cOne]: cOne, // One
  [bas.cc + cTwo]: cTwo, // Two
  [bas.cc + cThree]: cThree, // Three
  [bas.cc + cFour]: cFour, // Four
  [bas.cc + cFive]: cFive, // Five
  [bas.cc + cSix]: cSix, // Six
  [bas.cc + cSeven]: cSeven, // Seven
  [bas.cc + cEight]: cEight, // Eight
  [bas.cc + cNine]: cNine, // Nine
  [bas.cc + cEleven]: cEleven, // Eleven
  [bas.cc + cTwelve]: cTwelve, // Twelve
  [bas.cc + cThirteen]: cThirteen, // Thirteen
  [bas.cc + cFourteen]: cFourteen, // Fourteen
  [bas.cc + cFifteen]: cFifteen, // Fifteen
  [bas.cc + cSixteen]: cSixteen, // Sixteen
  [bas.cc + cSeventeen]: cSeventeen, // Seventeen
  [bas.cc + cEighteen]: cEighteen, // Eighteen
  [bas.cc + cNineteen]: cNineteen, // Nineteen
  [bas.cc + cTwenty]: cTwenty, // Twenty
  [bas.cc + cThirty]: cThirty, // Thirty
  [bas.cc + cFourty]: cFourty, // Fourty
  [bas.cc + cFifty]: cFifty, // Fifty
  [bas.cc + cSixty]: cSixty, // Sixty
  [bas.cc + cSeventy]: cSeventy, // Seventy
  [bas.cc + cEighty]: cEighty, // Eighty
  [bas.cc + cNinety]: cNinety, // Ninety
  [bas.cc + cHundred]: cHundred, // Hundred
  [bas.cc + cThousand]: cThousand, // Thousand
  [bas.cc + cMillion]: cMillion, // Million
  [bas.cc + cBillion]: cBillion, // Billion
  [bas.cc + cTrillion]: cTrillion, // Trillion

  // String Number Values
  [bas.cc + cfirst]: cfirst, // first
  [bas.cc + cFirst]: cFirst, // First
  // Second - See below
  [bas.cc + cthird]: cthird, // third
  [bas.cc + cThird]: cThird, // Third
  [bas.cc + cfourth]: cfourth, // fourth
  [bas.cc + cFourth]: cFourth, // Fourth
  [bas.cc + cfifth]: cfifth, // fifth
  [bas.cc + cFifth]: cFifth, // Fifth
  [bas.cc + csixth]: csixth, // sixth
  [bas.cc + cSixth]: cSixth, // Sixth
  [bas.cc + cseventh]: cseventh, // seventh
  [bas.cc + cSeventh]: cSeventh, // Seventh
  [bas.cc + ceighth]: ceighth, // eighth
  [bas.cc + cEighth]: cEighth, // Eighth
  [bas.cc + ctenth]: ctenth, // tenth
  [bas.cc + cTenth]: cTenth, // Tenth
  [bas.cc + celeventh]: celeventh, // eleventh
  [bas.cc + cEleventh]: cEleventh, // Eleventh
  [bas.cc + ctwelveth]: ctwelveth, // twelveth
  [bas.cc + cTwelveth]: cTwelveth, // Twelveth
  [bas.cc + cthirteenth]: cthirteenth, // thirteenth
  [bas.cc + cThirteenth]: cThirteenth, // Thirteenth
  [bas.cc + cfourteenth]: cfourteenth, // fourteenth
  [bas.cc + cFourteenth]: cFourteenth, // Fourteenth
  [bas.cc + cfifteenth]: cfifteenth, // fifteenth
  [bas.cc + cFifteenth]: cFifteenth, // Fifteenth
  [bas.cc + csixteenth]: csixteenth, // sixteenth
  [bas.cc + cSixteenth]: cSixteenth, // Sixteenth
  [bas.cc + cseventeenth]: cseventeenth, // seventeenth
  [bas.cc + cSeventeenth]: cSeventeenth, // Seventeenth
  [bas.cc + ceighteenth]: ceighteenth, // eighteenth
  [bas.cc + cEighteenth]: cEighteenth, // Eighteenth
  [bas.cc + cnineteenth]: cnineteenth, // nineteenth
  [bas.cc + cNineteenth]: cNineteenth, // Nineteenth
  [bas.cc + ctwentieth]: ctwentieth, // twentieth
  [bas.cc + cTwentieth]: cTwentieth, // Twentieth
  [bas.cc + cthirtieth]: cthirtieth, // thirtieth
  [bas.cc + cThirtieth]: cThirtieth, // Thirtieth
  [bas.cc + cfourtieth]: cfourtieth, // fourtieth
  [bas.cc + cFourtieth]: cFourtieth, // Fourtieth
  [bas.cc + cfiftieth]: cfiftieth, // fiftieth
  [bas.cc + cFiftieth]: cFiftieth, // Fiftieth
  [bas.cc + csixtieth]: csixtieth, // sixtieth
  [bas.cc + cSixtieth]: cSixtieth, // Sixtieth
  [bas.cc + cseventieth]: cseventieth, // seventieth
  [bas.cc + cSeventieth]: cSeventieth, // Seventieth
  [bas.cc + ceightieth]: ceightieth, // eightieth
  [bas.cc + cEightieth]: cEightieth, // Eightieth
  [bas.cc + cninetieth]: cninetieth, // ninetieth
  [bas.cc + cNinetieth]: cNinetieth, // Ninetieth
  [bas.cc + chundredth]: chundredth, // hundredth
  [bas.cc + cHundredth]: cHundredth, // Hundredth
  [bas.cc + cthousandth]: cthousandth, // thousandth
  [bas.cc + cThousandth]: cThousandth, // Thousandth
  [bas.cc + cmillionth]: cmillionth, // millionth
  [bas.cc + cMillionth]: cMillionth, // Millionth
  [bas.cc + cbillionth]: cbillionth, // billionth
  [bas.cc + cBillionth]: cBillionth, // Billionth
  [bas.cc + ctrillionth]: ctrillionth, // trillionth
  [bas.cc + cTrillionth]: cTrillionth // Trillionth
};
