/**
 * @file numeric.constants.js
 * @module numeric-constants
 * @description Contains numeric string values and numeric strings
 * @requires module:basic-constants
 * @requires module:phonic-constants
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
  ['c0']: c0, // 0
  ['c1']: c1, // 1
  ['c2']: c2, // 2
  ['c3']: c3, // 3
  ['c4']: c4, // 4
  ['c5']: c5, // 5
  ['c6']: c6, // 6
  ['c7']: c7, // 7
  ['c8']: c8, // 8
  ['c9']: c9, // 9

  ['c00']: c00, // 00
  ['c01']: c01, // 01
  ['c02']: c02, // 02
  ['c03']: c03, // 03
  ['c04']: c04, // 04
  ['c05']: c05, // 05
  ['c06']: c06, // 06
  ['c07']: c07, // 07
  ['c08']: c08, // 08
  ['c09']: c09, // 09
  ['c10']: c10, // 10
  ['c11']: c11, // 11
  ['c12']: c12, // 12
  ['c13']: c13, // 13
  ['c14']: c14, // 14
  ['c15']: c15, // 15
  ['c16']: c16, // 16
  ['c17']: c17, // 17
  ['c18']: c18, // 18
  ['c19']: c19, // 19
  ['c20']: c20, // 20
  ['c21']: c21, // 21
  ['c22']: c22, // 22
  ['c23']: c23, // 23
  ['c24']: c24, // 24
  ['c25']: c25, // 25
  ['c26']: c26, // 26
  ['c27']: c27, // 27
  ['c28']: c28, // 28
  ['c29']: c29, // 29
  ['c30']: c30, // 30
  ['c31']: c31, // 31
  ['c32']: c32, // 32
  ['c33']: c33, // 33
  ['c34']: c34, // 34
  ['c35']: c35, // 35
  ['c36']: c36, // 36
  ['c37']: c37, // 37
  ['c38']: c38, // 38
  ['c39']: c39, // 39
  ['c40']: c40, // 40
  ['c41']: c41, // 41
  ['c42']: c42, // 42
  ['c43']: c43, // 43
  ['c44']: c44, // 44
  ['c45']: c45, // 45
  ['c46']: c46, // 46
  ['c47']: c47, // 47
  ['c48']: c48, // 48
  ['c49']: c49, // 49
  ['c50']: c50, // 50
  ['c51']: c51, // 51
  ['c52']: c52, // 52
  ['c53']: c53, // 53
  ['c54']: c54, // 54
  ['c55']: c55, // 55
  ['c56']: c56, // 56
  ['c57']: c57, // 57
  ['c58']: c58, // 58
  ['c59']: c59, // 59
  ['c60']: c60, // 60
  ['c61']: c61, // 61
  ['c62']: c62, // 62
  ['c63']: c63, // 63
  ['c64']: c64, // 64
  ['c65']: c65, // 65
  ['c66']: c66, // 66
  ['c67']: c67, // 67
  ['c68']: c68, // 68
  ['c69']: c69, // 69
  ['c70']: c70, // 70
  ['c71']: c71, // 71
  ['c72']: c72, // 72
  ['c73']: c73, // 73
  ['c74']: c74, // 74
  ['c75']: c75, // 75
  ['c76']: c76, // 76
  ['c77']: c77, // 77
  ['c78']: c78, // 78
  ['c79']: c79, // 79
  ['c80']: c80, // 80
  ['c81']: c81, // 81
  ['c82']: c82, // 82
  ['c83']: c83, // 83
  ['c84']: c84, // 84
  ['c85']: c85, // 85
  ['c86']: c86, // 86
  ['c87']: c87, // 87
  ['c88']: c88, // 88
  ['c89']: c89, // 89
  ['c90']: c90, // 90
  ['c91']: c91, // 91
  ['c92']: c92, // 92
  ['c93']: c93, // 93
  ['c94']: c94, // 94
  ['c95']: c95, // 95
  ['c96']: c96, // 96
  ['c97']: c97, // 97
  ['c98']: c98, // 98
  ['c99']: c99, // 99
  ['c100']: c1 + c00, // 100

  ['c101']: c1 + c01, // 101
  ['c102']: c1 + c02, // 102
  ['c103']: c1 + c03, // 103
  ['c104']: c1 + c04, // 104
  ['c105']: c1 + c05, // 105
  ['c106']: c1 + c06, // 106
  ['c107']: c1 + c07, // 107
  ['c108']: c1 + c08, // 108
  ['c109']: c1 + c09, // 109
  ['c110']: c1 + c10, // 110
  ['c111']: c1 + c11, // 111
  ['c112']: c1 + c12, // 112
  ['c113']: c1 + c13, // 113
  ['c114']: c1 + c14, // 114
  ['c115']: c1 + c15, // 115
  ['c116']: c1 + c16, // 116
  ['c117']: c1 + c17, // 117
  ['c118']: c1 + c18, // 118
  ['c119']: c1 + c19, // 119
  ['c120']: c1 + c20, // 120
  ['c121']: c1 + c21, // 121
  ['c122']: c1 + c22, // 122
  ['c123']: c1 + c23, // 123
  ['c124']: c1 + c24, // 124
  ['c125']: c1 + c25, // 125
  ['c126']: c1 + c26, // 126
  ['c127']: c1 + c27, // 127
  ['c128']: c1 + c28, // 128
  ['c129']: c1 + c29, // 129
  ['c130']: c1 + c30, // 130
  ['c131']: c1 + c31, // 131
  ['c132']: c1 + c32, // 132
  ['c133']: c1 + c33, // 133
  ['c134']: c1 + c34, // 134
  ['c135']: c1 + c35, // 135
  ['c136']: c1 + c36, // 136
  ['c137']: c1 + c37, // 137
  ['c138']: c1 + c38, // 138
  ['c139']: c1 + c39, // 139
  ['c140']: c1 + c40, // 140
  ['c141']: c1 + c41, // 141
  ['c142']: c1 + c42, // 142
  ['c143']: c1 + c43, // 143
  ['c144']: c1 + c44, // 144
  ['c145']: c1 + c45, // 145
  ['c146']: c1 + c46, // 146
  ['c147']: c1 + c47, // 147
  ['c148']: c1 + c48, // 148
  ['c149']: c1 + c49, // 149
  ['c150']: c1 + c50, // 150
  ['c151']: c1 + c51, // 151
  ['c152']: c1 + c52, // 152
  ['c153']: c1 + c53, // 153
  ['c154']: c1 + c54, // 154
  ['c155']: c1 + c55, // 155
  ['c156']: c1 + c56, // 156
  ['c157']: c1 + c57, // 157
  ['c158']: c1 + c58, // 158
  ['c159']: c1 + c59, // 159
  ['c160']: c1 + c60, // 160
  ['c161']: c1 + c61, // 161
  ['c162']: c1 + c62, // 162
  ['c163']: c1 + c63, // 163
  ['c164']: c1 + c64, // 164
  ['c165']: c1 + c65, // 165
  ['c166']: c1 + c66, // 166
  ['c167']: c1 + c67, // 167
  ['c168']: c1 + c68, // 168
  ['c169']: c1 + c69, // 169
  ['c170']: c1 + c70, // 170
  ['c171']: c1 + c71, // 171
  ['c172']: c1 + c72, // 172
  ['c173']: c1 + c73, // 173
  ['c174']: c1 + c74, // 174
  ['c175']: c1 + c75, // 175
  ['c176']: c1 + c76, // 176
  ['c177']: c1 + c77, // 177
  ['c178']: c1 + c78, // 178
  ['c179']: c1 + c79, // 179
  ['c180']: c1 + c80, // 180
  ['c181']: c1 + c81, // 181
  ['c182']: c1 + c82, // 182
  ['c183']: c1 + c83, // 183
  ['c184']: c1 + c84, // 184
  ['c185']: c1 + c85, // 185
  ['c186']: c1 + c86, // 186
  ['c187']: c1 + c87, // 187
  ['c188']: c1 + c88, // 188
  ['c189']: c1 + c89, // 189
  ['c190']: c1 + c90, // 190
  ['c191']: c1 + c91, // 191
  ['c192']: c1 + c92, // 192
  ['c193']: c1 + c93, // 193
  ['c194']: c1 + c94, // 194
  ['c195']: c1 + c95, // 195
  ['c196']: c1 + c96, // 196
  ['c197']: c1 + c97, // 197
  ['c198']: c1 + c98, // 198
  ['c199']: c1 + c99, // 199

  ['c200']: c2 + c00, // 200
  ['c201']: c2 + c01, // 201
  ['c202']: c2 + c02, // 202
  ['c203']: c2 + c03, // 203
  ['c204']: c2 + c04, // 204
  ['c205']: c2 + c05, // 205
  ['c206']: c2 + c06, // 206
  ['c207']: c2 + c07, // 207
  ['c208']: c2 + c08, // 208
  ['c209']: c2 + c09, // 209
  ['c210']: c2 + c10, // 210
  ['c211']: c2 + c11, // 211
  ['c212']: c2 + c12, // 212
  ['c213']: c2 + c13, // 213
  ['c214']: c2 + c14, // 214
  ['c215']: c2 + c15, // 215
  ['c216']: c2 + c16, // 216
  ['c217']: c2 + c17, // 217
  ['c218']: c2 + c18, // 218
  ['c219']: c2 + c19, // 219
  ['c220']: c2 + c20, // 220
  ['c221']: c2 + c21, // 221
  ['c222']: c2 + c22, // 222
  ['c223']: c2 + c23, // 223
  ['c224']: c2 + c24, // 224
  ['c225']: c2 + c25, // 225
  ['c226']: c2 + c26, // 226
  ['c227']: c2 + c27, // 227
  ['c228']: c2 + c28, // 228
  ['c229']: c2 + c29, // 229
  ['c230']: c2 + c30, // 230
  ['c231']: c2 + c31, // 231
  ['c232']: c2 + c32, // 232
  ['c233']: c2 + c33, // 233
  ['c234']: c2 + c34, // 234
  ['c235']: c2 + c35, // 235
  ['c236']: c2 + c36, // 236
  ['c237']: c2 + c37, // 237
  ['c238']: c2 + c38, // 238
  ['c239']: c2 + c39, // 239
  ['c240']: c2 + c40, // 240
  ['c241']: c2 + c41, // 241
  ['c242']: c2 + c42, // 242
  ['c243']: c2 + c43, // 243
  ['c244']: c2 + c44, // 244
  ['c245']: c2 + c45, // 245
  ['c246']: c2 + c46, // 246
  ['c247']: c2 + c47, // 247
  ['c248']: c2 + c48, // 248
  ['c249']: c2 + c49, // 249
  ['c250']: c2 + c50, // 250
  ['c251']: c2 + c51, // 251
  ['c252']: c2 + c52, // 252
  ['c253']: c2 + c53, // 253
  ['c254']: c2 + c54, // 254
  ['c255']: c2 + c55, // 255
  ['c256']: c2 + c56, // 256
  ['c257']: c2 + c57, // 257
  ['c258']: c2 + c58, // 258
  ['c259']: c2 + c59, // 259
  ['c260']: c2 + c60, // 260
  ['c261']: c2 + c61, // 261
  ['c262']: c2 + c62, // 262
  ['c263']: c2 + c63, // 263
  ['c264']: c2 + c64, // 264
  ['c265']: c2 + c65, // 265
  ['c266']: c2 + c66, // 266
  ['c267']: c2 + c67, // 267
  ['c268']: c2 + c68, // 268
  ['c269']: c2 + c69, // 269
  ['c270']: c2 + c70, // 270
  ['c271']: c2 + c71, // 271
  ['c272']: c2 + c72, // 272
  ['c273']: c2 + c73, // 273
  ['c274']: c2 + c74, // 274
  ['c275']: c2 + c75, // 275
  ['c276']: c2 + c76, // 276
  ['c277']: c2 + c77, // 277
  ['c278']: c2 + c78, // 278
  ['c279']: c2 + c79, // 279
  ['c280']: c2 + c80, // 280
  ['c281']: c2 + c81, // 281
  ['c282']: c2 + c82, // 282
  ['c283']: c2 + c83, // 283
  ['c284']: c2 + c84, // 284
  ['c285']: c2 + c85, // 285
  ['c286']: c2 + c86, // 286
  ['c287']: c2 + c87, // 287
  ['c288']: c2 + c88, // 288
  ['c289']: c2 + c89, // 289
  ['c290']: c2 + c90, // 290
  ['c291']: c2 + c91, // 291
  ['c292']: c2 + c92, // 292
  ['c293']: c2 + c93, // 293
  ['c294']: c2 + c94, // 294
  ['c295']: c2 + c95, // 295
  ['c296']: c2 + c96, // 296
  ['c297']: c2 + c97, // 297
  ['c298']: c2 + c98, // 298
  ['c299']: c2 + c99, // 299

  ['c300']: c3 + c00, // 300
  ['c301']: c3 + c01, // 301
  ['c302']: c3 + c02, // 302
  ['c303']: c3 + c03, // 303
  ['c304']: c3 + c04, // 304
  ['c305']: c3 + c05, // 305
  ['c306']: c3 + c06, // 306
  ['c307']: c3 + c07, // 307
  ['c308']: c3 + c08, // 308
  ['c309']: c3 + c09, // 309
  ['c310']: c3 + c10, // 310
  ['c311']: c3 + c11, // 311
  ['c312']: c3 + c12, // 312
  ['c313']: c3 + c13, // 313
  ['c314']: c3 + c14, // 314
  ['c315']: c3 + c15, // 315
  ['c316']: c3 + c16, // 316
  ['c317']: c3 + c17, // 317
  ['c318']: c3 + c18, // 318
  ['c319']: c3 + c19, // 319
  ['c320']: c3 + c20, // 320
  ['c321']: c3 + c21, // 321
  ['c322']: c3 + c22, // 322
  ['c323']: c3 + c23, // 323
  ['c324']: c3 + c24, // 324
  ['c325']: c3 + c25, // 325
  ['c326']: c3 + c26, // 326
  ['c327']: c3 + c27, // 327
  ['c328']: c3 + c28, // 328
  ['c329']: c3 + c29, // 329
  ['c330']: c3 + c30, // 330
  ['c331']: c3 + c31, // 331
  ['c332']: c3 + c32, // 332
  ['c333']: c3 + c33, // 333
  ['c334']: c3 + c34, // 334
  ['c335']: c3 + c35, // 335
  ['c336']: c3 + c36, // 336
  ['c337']: c3 + c37, // 337
  ['c338']: c3 + c38, // 338
  ['c339']: c3 + c39, // 339
  ['c340']: c3 + c40, // 340
  ['c341']: c3 + c41, // 341
  ['c342']: c3 + c42, // 342
  ['c343']: c3 + c43, // 343
  ['c344']: c3 + c44, // 344
  ['c345']: c3 + c45, // 345
  ['c346']: c3 + c46, // 346
  ['c347']: c3 + c47, // 347
  ['c348']: c3 + c48, // 348
  ['c349']: c3 + c49, // 349
  ['c350']: c3 + c50, // 350
  ['c351']: c3 + c51, // 351
  ['c352']: c3 + c52, // 352
  ['c353']: c3 + c53, // 353
  ['c354']: c3 + c54, // 354
  ['c355']: c3 + c55, // 355
  ['c356']: c3 + c56, // 356
  ['c357']: c3 + c57, // 357
  ['c358']: c3 + c58, // 358
  ['c359']: c3 + c59, // 359
  ['c360']: c3 + c60, // 360
  ['c361']: c3 + c61, // 361
  ['c362']: c3 + c62, // 362
  ['c363']: c3 + c63, // 363
  ['c364']: c3 + c64, // 364
  ['c365']: c3 + c65, // 365
  ['c366']: c3 + c66, // 366
  ['c367']: c3 + c67, // 367
  ['c368']: c3 + c68, // 368
  ['c369']: c3 + c69, // 369
  ['c370']: c3 + c70, // 370
  ['c371']: c3 + c71, // 371
  ['c372']: c3 + c72, // 372
  ['c373']: c3 + c73, // 373
  ['c374']: c3 + c74, // 374
  ['c375']: c3 + c75, // 375
  ['c376']: c3 + c76, // 376
  ['c377']: c3 + c77, // 377
  ['c378']: c3 + c78, // 378
  ['c379']: c3 + c79, // 379
  ['c380']: c3 + c80, // 380
  ['c381']: c3 + c81, // 381
  ['c382']: c3 + c82, // 382
  ['c383']: c3 + c83, // 383
  ['c384']: c3 + c84, // 384
  ['c385']: c3 + c85, // 385
  ['c386']: c3 + c86, // 386
  ['c387']: c3 + c87, // 387
  ['c388']: c3 + c88, // 388
  ['c389']: c3 + c89, // 389
  ['c390']: c3 + c90, // 390
  ['c391']: c3 + c91, // 391
  ['c392']: c3 + c92, // 392
  ['c393']: c3 + c93, // 393
  ['c394']: c3 + c94, // 394
  ['c395']: c3 + c95, // 395
  ['c396']: c3 + c96, // 396
  ['c397']: c3 + c97, // 397
  ['c398']: c3 + c98, // 398
  ['c399']: c3 + c99, // 399

  ['c400']: c4 + c00, // 400
  ['c401']: c4 + c01, // 401
  ['c402']: c4 + c02, // 402
  ['c403']: c4 + c03, // 403
  ['c404']: c4 + c04, // 404
  ['c405']: c4 + c05, // 405
  ['c406']: c4 + c06, // 406
  ['c407']: c4 + c07, // 407
  ['c408']: c4 + c08, // 408
  ['c409']: c4 + c09, // 409
  ['c410']: c4 + c10, // 410
  ['c411']: c4 + c11, // 411
  ['c412']: c4 + c12, // 412
  ['c413']: c4 + c13, // 413
  ['c414']: c4 + c14, // 414
  ['c415']: c4 + c15, // 415
  ['c416']: c4 + c16, // 416
  ['c417']: c4 + c17, // 417
  ['c418']: c4 + c18, // 418
  ['c419']: c4 + c19, // 419
  ['c420']: c4 + c20, // 420
  ['c421']: c4 + c21, // 421
  ['c422']: c4 + c22, // 422
  ['c423']: c4 + c23, // 423
  ['c424']: c4 + c24, // 424
  ['c425']: c4 + c25, // 425
  ['c426']: c4 + c26, // 426
  ['c427']: c4 + c27, // 427
  ['c428']: c4 + c28, // 428
  ['c429']: c4 + c29, // 429
  ['c430']: c4 + c30, // 430
  ['c431']: c4 + c31, // 431
  ['c432']: c4 + c32, // 432
  ['c433']: c4 + c33, // 433
  ['c434']: c4 + c34, // 434
  ['c435']: c4 + c35, // 435
  ['c436']: c4 + c36, // 436
  ['c437']: c4 + c37, // 437
  ['c438']: c4 + c38, // 438
  ['c439']: c4 + c39, // 439
  ['c440']: c4 + c40, // 440
  ['c441']: c4 + c41, // 441
  ['c442']: c4 + c42, // 442
  ['c443']: c4 + c43, // 443
  ['c444']: c4 + c44, // 444
  ['c445']: c4 + c45, // 445
  ['c446']: c4 + c46, // 446
  ['c447']: c4 + c47, // 447
  ['c448']: c4 + c48, // 448
  ['c449']: c4 + c49, // 449
  ['c450']: c4 + c50, // 450
  ['c451']: c4 + c51, // 451
  ['c452']: c4 + c52, // 452
  ['c453']: c4 + c53, // 453
  ['c454']: c4 + c54, // 454
  ['c455']: c4 + c55, // 455
  ['c456']: c4 + c56, // 456
  ['c457']: c4 + c57, // 457
  ['c458']: c4 + c58, // 458
  ['c459']: c4 + c59, // 459
  ['c460']: c4 + c60, // 460
  ['c461']: c4 + c61, // 461
  ['c462']: c4 + c62, // 462
  ['c463']: c4 + c63, // 463
  ['c464']: c4 + c64, // 464
  ['c465']: c4 + c65, // 465
  ['c466']: c4 + c66, // 466
  ['c467']: c4 + c67, // 467
  ['c468']: c4 + c68, // 468
  ['c469']: c4 + c69, // 469
  ['c470']: c4 + c70, // 470
  ['c471']: c4 + c71, // 471
  ['c472']: c4 + c72, // 472
  ['c473']: c4 + c73, // 473
  ['c474']: c4 + c74, // 474
  ['c475']: c4 + c75, // 475
  ['c476']: c4 + c76, // 476
  ['c477']: c4 + c77, // 477
  ['c478']: c4 + c78, // 478
  ['c479']: c4 + c79, // 479
  ['c480']: c4 + c80, // 480
  ['c481']: c4 + c81, // 481
  ['c482']: c4 + c82, // 482
  ['c483']: c4 + c83, // 483
  ['c484']: c4 + c84, // 484
  ['c485']: c4 + c85, // 485
  ['c486']: c4 + c86, // 486
  ['c487']: c4 + c87, // 487
  ['c488']: c4 + c88, // 488
  ['c489']: c4 + c89, // 489
  ['c490']: c4 + c90, // 490
  ['c491']: c4 + c91, // 491
  ['c492']: c4 + c92, // 492
  ['c493']: c4 + c93, // 493
  ['c494']: c4 + c94, // 494
  ['c495']: c4 + c95, // 495
  ['c496']: c4 + c96, // 496
  ['c497']: c4 + c97, // 497
  ['c498']: c4 + c98, // 498
  ['c499']: c4 + c99, // 499

  ['c500']: c5 + c00, // 500
  ['c501']: c5 + c01, // 501
  ['c502']: c5 + c02, // 502
  ['c503']: c5 + c03, // 503
  ['c504']: c5 + c04, // 504
  ['c505']: c5 + c05, // 505
  ['c506']: c5 + c06, // 506
  ['c507']: c5 + c07, // 507
  ['c508']: c5 + c08, // 508
  ['c509']: c5 + c09, // 509
  ['c510']: c5 + c10, // 510
  ['c511']: c5 + c11, // 511
  ['c512']: c5 + c12, // 512
  ['c513']: c5 + c13, // 513
  ['c514']: c5 + c14, // 514
  ['c515']: c5 + c15, // 515
  ['c516']: c5 + c16, // 516
  ['c517']: c5 + c17, // 517
  ['c518']: c5 + c18, // 518
  ['c519']: c5 + c19, // 519
  ['c520']: c5 + c20, // 520
  ['c521']: c5 + c21, // 521
  ['c522']: c5 + c22, // 522
  ['c523']: c5 + c23, // 523
  ['c524']: c5 + c24, // 524
  ['c525']: c5 + c25, // 525
  ['c526']: c5 + c26, // 526
  ['c527']: c5 + c27, // 527
  ['c528']: c5 + c28, // 528
  ['c529']: c5 + c29, // 529
  ['c530']: c5 + c30, // 530
  ['c531']: c5 + c31, // 531
  ['c532']: c5 + c32, // 532
  ['c533']: c5 + c33, // 533
  ['c534']: c5 + c34, // 534
  ['c535']: c5 + c35, // 535
  ['c536']: c5 + c36, // 536
  ['c537']: c5 + c37, // 537
  ['c538']: c5 + c38, // 538
  ['c539']: c5 + c39, // 539
  ['c540']: c5 + c40, // 540
  ['c541']: c5 + c41, // 541
  ['c542']: c5 + c42, // 542
  ['c543']: c5 + c43, // 543
  ['c544']: c5 + c44, // 544
  ['c545']: c5 + c45, // 545
  ['c546']: c5 + c46, // 546
  ['c547']: c5 + c47, // 547
  ['c548']: c5 + c48, // 548
  ['c549']: c5 + c49, // 549
  ['c550']: c5 + c50, // 550
  ['c551']: c5 + c51, // 551
  ['c552']: c5 + c52, // 552
  ['c553']: c5 + c53, // 553
  ['c554']: c5 + c54, // 554
  ['c555']: c5 + c55, // 555
  ['c556']: c5 + c56, // 556
  ['c557']: c5 + c57, // 557
  ['c558']: c5 + c58, // 558
  ['c559']: c5 + c59, // 559
  ['c560']: c5 + c60, // 560
  ['c561']: c5 + c61, // 561
  ['c562']: c5 + c62, // 562
  ['c563']: c5 + c63, // 563
  ['c564']: c5 + c64, // 564
  ['c565']: c5 + c65, // 565
  ['c566']: c5 + c66, // 566
  ['c567']: c5 + c67, // 567
  ['c568']: c5 + c68, // 568
  ['c569']: c5 + c69, // 569
  ['c570']: c5 + c70, // 570
  ['c571']: c5 + c71, // 571
  ['c572']: c5 + c72, // 572
  ['c573']: c5 + c73, // 573
  ['c574']: c5 + c74, // 574
  ['c575']: c5 + c75, // 575
  ['c576']: c5 + c76, // 576
  ['c577']: c5 + c77, // 577
  ['c578']: c5 + c78, // 578
  ['c579']: c5 + c79, // 579
  ['c580']: c5 + c80, // 580
  ['c581']: c5 + c81, // 581
  ['c582']: c5 + c82, // 582
  ['c583']: c5 + c83, // 583
  ['c584']: c5 + c84, // 584
  ['c585']: c5 + c85, // 585
  ['c586']: c5 + c86, // 586
  ['c587']: c5 + c87, // 587
  ['c588']: c5 + c88, // 588
  ['c589']: c5 + c89, // 589
  ['c590']: c5 + c90, // 590
  ['c591']: c5 + c91, // 591
  ['c592']: c5 + c92, // 592
  ['c593']: c5 + c93, // 593
  ['c594']: c5 + c94, // 594
  ['c595']: c5 + c95, // 595
  ['c596']: c5 + c96, // 596
  ['c597']: c5 + c97, // 597
  ['c598']: c5 + c98, // 598
  ['c599']: c5 + c99, // 599

  ['c600']: c6 + c00, // 600
  ['c601']: c6 + c01, // 601
  ['c602']: c6 + c02, // 602
  ['c603']: c6 + c03, // 603
  ['c604']: c6 + c04, // 604
  ['c605']: c6 + c05, // 605
  ['c606']: c6 + c06, // 606
  ['c607']: c6 + c07, // 607
  ['c608']: c6 + c08, // 608
  ['c609']: c6 + c09, // 609
  ['c610']: c6 + c10, // 610
  ['c611']: c6 + c11, // 611
  ['c612']: c6 + c12, // 612
  ['c613']: c6 + c13, // 613
  ['c614']: c6 + c14, // 614
  ['c615']: c6 + c15, // 615
  ['c616']: c6 + c16, // 616
  ['c617']: c6 + c17, // 617
  ['c618']: c6 + c18, // 618
  ['c619']: c6 + c19, // 619
  ['c620']: c6 + c20, // 620
  ['c621']: c6 + c21, // 621
  ['c622']: c6 + c22, // 622
  ['c623']: c6 + c23, // 623
  ['c624']: c6 + c24, // 624
  ['c625']: c6 + c25, // 625
  ['c626']: c6 + c26, // 626
  ['c627']: c6 + c27, // 627
  ['c628']: c6 + c28, // 628
  ['c629']: c6 + c29, // 629
  ['c630']: c6 + c30, // 630
  ['c631']: c6 + c31, // 631
  ['c632']: c6 + c32, // 632
  ['c633']: c6 + c33, // 633
  ['c634']: c6 + c34, // 634
  ['c635']: c6 + c35, // 635
  ['c636']: c6 + c36, // 636
  ['c637']: c6 + c37, // 637
  ['c638']: c6 + c38, // 638
  ['c639']: c6 + c39, // 639
  ['c640']: c6 + c40, // 640
  ['c641']: c6 + c41, // 641
  ['c642']: c6 + c42, // 642
  ['c643']: c6 + c43, // 643
  ['c644']: c6 + c44, // 644
  ['c645']: c6 + c45, // 645
  ['c646']: c6 + c46, // 646
  ['c647']: c6 + c47, // 647
  ['c648']: c6 + c48, // 648
  ['c649']: c6 + c49, // 649
  ['c650']: c6 + c50, // 650
  ['c651']: c6 + c51, // 651
  ['c652']: c6 + c52, // 652
  ['c653']: c6 + c53, // 653
  ['c654']: c6 + c54, // 654
  ['c655']: c6 + c55, // 655
  ['c656']: c6 + c56, // 656
  ['c657']: c6 + c57, // 657
  ['c658']: c6 + c58, // 658
  ['c659']: c6 + c59, // 659
  ['c660']: c6 + c60, // 660
  ['c661']: c6 + c61, // 661
  ['c662']: c6 + c62, // 662
  ['c663']: c6 + c63, // 663
  ['c664']: c6 + c64, // 664
  ['c665']: c6 + c65, // 665
  ['c666']: c6 + c66, // 666
  ['c667']: c6 + c67, // 667
  ['c668']: c6 + c68, // 668
  ['c669']: c6 + c69, // 669
  ['c670']: c6 + c70, // 670
  ['c671']: c6 + c71, // 671
  ['c672']: c6 + c72, // 672
  ['c673']: c6 + c73, // 673
  ['c674']: c6 + c74, // 674
  ['c675']: c6 + c75, // 675
  ['c676']: c6 + c76, // 676
  ['c677']: c6 + c77, // 677
  ['c678']: c6 + c78, // 678
  ['c679']: c6 + c79, // 679
  ['c680']: c6 + c80, // 680
  ['c681']: c6 + c81, // 681
  ['c682']: c6 + c82, // 682
  ['c683']: c6 + c83, // 683
  ['c684']: c6 + c84, // 684
  ['c685']: c6 + c85, // 685
  ['c686']: c6 + c86, // 686
  ['c687']: c6 + c87, // 687
  ['c688']: c6 + c88, // 688
  ['c689']: c6 + c89, // 689
  ['c690']: c6 + c90, // 690
  ['c691']: c6 + c91, // 691
  ['c692']: c6 + c92, // 692
  ['c693']: c6 + c93, // 693
  ['c694']: c6 + c94, // 694
  ['c695']: c6 + c95, // 695
  ['c696']: c6 + c96, // 696
  ['c697']: c6 + c97, // 697
  ['c698']: c6 + c98, // 698
  ['c699']: c6 + c99, // 699

  ['c700']: c7 + c00, // 700
  ['c701']: c7 + c01, // 701
  ['c702']: c7 + c02, // 702
  ['c703']: c7 + c03, // 703
  ['c704']: c7 + c04, // 704
  ['c705']: c7 + c05, // 705
  ['c706']: c7 + c06, // 706
  ['c707']: c7 + c07, // 707
  ['c708']: c7 + c08, // 708
  ['c709']: c7 + c09, // 709
  ['c710']: c7 + c10, // 710
  ['c711']: c7 + c11, // 711
  ['c712']: c7 + c12, // 712
  ['c713']: c7 + c13, // 713
  ['c714']: c7 + c14, // 714
  ['c715']: c7 + c15, // 715
  ['c716']: c7 + c16, // 716
  ['c717']: c7 + c17, // 717
  ['c718']: c7 + c18, // 718
  ['c719']: c7 + c19, // 719
  ['c720']: c7 + c20, // 720
  ['c721']: c7 + c21, // 721
  ['c722']: c7 + c22, // 722
  ['c723']: c7 + c23, // 723
  ['c724']: c7 + c24, // 724
  ['c725']: c7 + c25, // 725
  ['c726']: c7 + c26, // 726
  ['c727']: c7 + c27, // 727
  ['c728']: c7 + c28, // 728
  ['c729']: c7 + c29, // 729
  ['c730']: c7 + c30, // 730
  ['c731']: c7 + c31, // 731
  ['c732']: c7 + c32, // 732
  ['c733']: c7 + c33, // 733
  ['c734']: c7 + c34, // 734
  ['c735']: c7 + c35, // 735
  ['c736']: c7 + c36, // 736
  ['c737']: c7 + c37, // 737
  ['c738']: c7 + c38, // 738
  ['c739']: c7 + c39, // 739
  ['c740']: c7 + c40, // 740
  ['c741']: c7 + c41, // 741
  ['c742']: c7 + c42, // 742
  ['c743']: c7 + c43, // 743
  ['c744']: c7 + c44, // 744
  ['c745']: c7 + c45, // 745
  ['c746']: c7 + c46, // 746
  ['c747']: c7 + c47, // 747
  ['c748']: c7 + c48, // 748
  ['c749']: c7 + c49, // 749
  ['c750']: c7 + c50, // 750
  ['c751']: c7 + c51, // 751
  ['c752']: c7 + c52, // 752
  ['c753']: c7 + c53, // 753
  ['c754']: c7 + c54, // 754
  ['c755']: c7 + c55, // 755
  ['c756']: c7 + c56, // 756
  ['c757']: c7 + c57, // 757
  ['c758']: c7 + c58, // 758
  ['c759']: c7 + c59, // 759
  ['c760']: c7 + c60, // 760
  ['c761']: c7 + c61, // 761
  ['c762']: c7 + c62, // 762
  ['c763']: c7 + c63, // 763
  ['c764']: c7 + c64, // 764
  ['c765']: c7 + c65, // 765
  ['c766']: c7 + c66, // 766
  ['c767']: c7 + c67, // 767
  ['c768']: c7 + c68, // 768
  ['c769']: c7 + c69, // 769
  ['c770']: c7 + c70, // 770
  ['c771']: c7 + c71, // 771
  ['c772']: c7 + c72, // 772
  ['c773']: c7 + c73, // 773
  ['c774']: c7 + c74, // 774
  ['c775']: c7 + c75, // 775
  ['c776']: c7 + c76, // 776
  ['c777']: c7 + c77, // 777
  ['c778']: c7 + c78, // 778
  ['c779']: c7 + c79, // 779
  ['c780']: c7 + c80, // 780
  ['c781']: c7 + c81, // 781
  ['c782']: c7 + c82, // 782
  ['c783']: c7 + c83, // 783
  ['c784']: c7 + c84, // 784
  ['c785']: c7 + c85, // 785
  ['c786']: c7 + c86, // 786
  ['c787']: c7 + c87, // 787
  ['c788']: c7 + c88, // 788
  ['c789']: c7 + c89, // 789
  ['c790']: c7 + c90, // 790
  ['c791']: c7 + c91, // 791
  ['c792']: c7 + c92, // 792
  ['c793']: c7 + c93, // 793
  ['c794']: c7 + c94, // 794
  ['c795']: c7 + c95, // 795
  ['c796']: c7 + c96, // 796
  ['c797']: c7 + c97, // 797
  ['c798']: c7 + c98, // 798
  ['c799']: c7 + c99, // 799

  ['c800']: c8 + c00, // 800
  ['c801']: c8 + c01, // 801
  ['c802']: c8 + c02, // 802
  ['c803']: c8 + c03, // 803
  ['c804']: c8 + c04, // 804
  ['c805']: c8 + c05, // 805
  ['c806']: c8 + c06, // 806
  ['c807']: c8 + c07, // 807
  ['c808']: c8 + c08, // 808
  ['c809']: c8 + c09, // 809
  ['c810']: c8 + c10, // 810
  ['c811']: c8 + c11, // 811
  ['c812']: c8 + c12, // 812
  ['c813']: c8 + c13, // 813
  ['c814']: c8 + c14, // 814
  ['c815']: c8 + c15, // 815
  ['c816']: c8 + c16, // 816
  ['c817']: c8 + c17, // 817
  ['c818']: c8 + c18, // 818
  ['c819']: c8 + c19, // 819
  ['c820']: c8 + c20, // 820
  ['c821']: c8 + c21, // 821
  ['c822']: c8 + c22, // 822
  ['c823']: c8 + c23, // 823
  ['c824']: c8 + c24, // 824
  ['c825']: c8 + c25, // 825
  ['c826']: c8 + c26, // 826
  ['c827']: c8 + c27, // 827
  ['c828']: c8 + c28, // 828
  ['c829']: c8 + c29, // 829
  ['c830']: c8 + c30, // 830
  ['c831']: c8 + c31, // 831
  ['c832']: c8 + c32, // 832
  ['c833']: c8 + c33, // 833
  ['c834']: c8 + c34, // 834
  ['c835']: c8 + c35, // 835
  ['c836']: c8 + c36, // 836
  ['c837']: c8 + c37, // 837
  ['c838']: c8 + c38, // 838
  ['c839']: c8 + c39, // 839
  ['c840']: c8 + c40, // 840
  ['c841']: c8 + c41, // 841
  ['c842']: c8 + c42, // 842
  ['c843']: c8 + c43, // 843
  ['c844']: c8 + c44, // 844
  ['c845']: c8 + c45, // 845
  ['c846']: c8 + c46, // 846
  ['c847']: c8 + c47, // 847
  ['c848']: c8 + c48, // 848
  ['c849']: c8 + c49, // 849
  ['c850']: c8 + c50, // 850
  ['c851']: c8 + c51, // 851
  ['c852']: c8 + c52, // 852
  ['c853']: c8 + c53, // 853
  ['c854']: c8 + c54, // 854
  ['c855']: c8 + c55, // 855
  ['c856']: c8 + c56, // 856
  ['c857']: c8 + c57, // 857
  ['c858']: c8 + c58, // 858
  ['c859']: c8 + c59, // 859
  ['c860']: c8 + c60, // 860
  ['c861']: c8 + c61, // 861
  ['c862']: c8 + c62, // 862
  ['c863']: c8 + c63, // 863
  ['c864']: c8 + c64, // 864
  ['c865']: c8 + c65, // 865
  ['c866']: c8 + c66, // 866
  ['c867']: c8 + c67, // 867
  ['c868']: c8 + c68, // 868
  ['c869']: c8 + c69, // 869
  ['c870']: c8 + c70, // 870
  ['c871']: c8 + c71, // 871
  ['c872']: c8 + c72, // 872
  ['c873']: c8 + c73, // 873
  ['c874']: c8 + c74, // 874
  ['c875']: c8 + c75, // 875
  ['c876']: c8 + c76, // 876
  ['c877']: c8 + c77, // 877
  ['c878']: c8 + c78, // 878
  ['c879']: c8 + c79, // 879
  ['c880']: c8 + c80, // 880
  ['c881']: c8 + c81, // 881
  ['c882']: c8 + c82, // 882
  ['c883']: c8 + c83, // 883
  ['c884']: c8 + c84, // 884
  ['c885']: c8 + c85, // 885
  ['c886']: c8 + c86, // 886
  ['c887']: c8 + c87, // 887
  ['c888']: c8 + c88, // 888
  ['c889']: c8 + c89, // 889
  ['c890']: c8 + c90, // 890
  ['c891']: c8 + c91, // 891
  ['c892']: c8 + c92, // 892
  ['c893']: c8 + c93, // 893
  ['c894']: c8 + c94, // 894
  ['c895']: c8 + c95, // 895
  ['c896']: c8 + c96, // 896
  ['c897']: c8 + c97, // 897
  ['c898']: c8 + c98, // 898
  ['c899']: c8 + c99, // 899

  ['c900']: c9 + c00, // 900
  ['c901']: c9 + c01, // 901
  ['c902']: c9 + c02, // 902
  ['c903']: c9 + c03, // 903
  ['c904']: c9 + c04, // 904
  ['c905']: c9 + c05, // 905
  ['c906']: c9 + c06, // 906
  ['c907']: c9 + c07, // 907
  ['c908']: c9 + c08, // 908
  ['c909']: c9 + c09, // 909
  ['c910']: c9 + c10, // 910
  ['c911']: c9 + c11, // 911
  ['c912']: c9 + c12, // 912
  ['c913']: c9 + c13, // 913
  ['c914']: c9 + c14, // 914
  ['c915']: c9 + c15, // 915
  ['c916']: c9 + c16, // 916
  ['c917']: c9 + c17, // 917
  ['c918']: c9 + c18, // 918
  ['c919']: c9 + c19, // 919
  ['c920']: c9 + c20, // 920
  ['c921']: c9 + c21, // 921
  ['c922']: c9 + c22, // 922
  ['c923']: c9 + c23, // 923
  ['c924']: c9 + c24, // 924
  ['c925']: c9 + c25, // 925
  ['c926']: c9 + c26, // 926
  ['c927']: c9 + c27, // 927
  ['c928']: c9 + c28, // 928
  ['c929']: c9 + c29, // 929
  ['c930']: c9 + c30, // 930
  ['c931']: c9 + c31, // 931
  ['c932']: c9 + c32, // 932
  ['c933']: c9 + c33, // 933
  ['c934']: c9 + c34, // 934
  ['c935']: c9 + c35, // 935
  ['c936']: c9 + c36, // 936
  ['c937']: c9 + c37, // 937
  ['c938']: c9 + c38, // 938
  ['c939']: c9 + c39, // 939
  ['c940']: c9 + c40, // 940
  ['c941']: c9 + c41, // 941
  ['c942']: c9 + c42, // 942
  ['c943']: c9 + c43, // 943
  ['c944']: c9 + c44, // 944
  ['c945']: c9 + c45, // 945
  ['c946']: c9 + c46, // 946
  ['c947']: c9 + c47, // 947
  ['c948']: c9 + c48, // 948
  ['c949']: c9 + c49, // 949
  ['c950']: c9 + c50, // 950
  ['c951']: c9 + c51, // 951
  ['c952']: c9 + c52, // 952
  ['c953']: c9 + c53, // 953
  ['c954']: c9 + c54, // 954
  ['c955']: c9 + c55, // 955
  ['c956']: c9 + c56, // 956
  ['c957']: c9 + c57, // 957
  ['c958']: c9 + c58, // 958
  ['c959']: c9 + c59, // 959
  ['c960']: c9 + c60, // 960
  ['c961']: c9 + c61, // 961
  ['c962']: c9 + c62, // 962
  ['c963']: c9 + c63, // 963
  ['c964']: c9 + c64, // 964
  ['c965']: c9 + c65, // 965
  ['c966']: c9 + c66, // 966
  ['c967']: c9 + c67, // 967
  ['c968']: c9 + c68, // 968
  ['c969']: c9 + c69, // 969
  ['c970']: c9 + c70, // 970
  ['c971']: c9 + c71, // 971
  ['c972']: c9 + c72, // 972
  ['c973']: c9 + c73, // 973
  ['c974']: c9 + c74, // 974
  ['c975']: c9 + c75, // 975
  ['c976']: c9 + c76, // 976
  ['c977']: c9 + c77, // 977
  ['c978']: c9 + c78, // 978
  ['c979']: c9 + c79, // 979
  ['c980']: c9 + c80, // 980
  ['c981']: c9 + c81, // 981
  ['c982']: c9 + c82, // 982
  ['c983']: c9 + c83, // 983
  ['c984']: c9 + c84, // 984
  ['c985']: c9 + c85, // 985
  ['c986']: c9 + c86, // 986
  ['c987']: c9 + c87, // 987
  ['c988']: c9 + c88, // 988
  ['c989']: c9 + c89, // 989
  ['c990']: c9 + c90, // 990
  ['c991']: c9 + c91, // 991
  ['c992']: c9 + c92, // 992
  ['c993']: c9 + c93, // 993
  ['c994']: c9 + c94, // 994
  ['c995']: c9 + c95, // 995
  ['c996']: c9 + c96, // 996
  ['c997']: c9 + c97, // 997
  ['c998']: c9 + c98, // 998
  ['c999']: c9 + c99, // 999

  // String Numbers
  ['cTen']: cTen, // Ten
  ['czero']: czero, // zero
  ['cZero']: cZero, // Zero
  ['cone']: cone, // one
  ['ctwo']: ctwo, // two
  ['cthree']: cthree, // three
  ['cfour']: cfour, // four
  ['cfive']: cfive, // five
  ['csix']: csix, // six
  ['cseven']: cseven, // seven
  ['ceight']: ceight, // eight
  ['cnine']: cnine, // nine
  ['cten']: cten, // ten
  ['celeven']: celeven, // eleven
  ['ctwelve']: ctwelve, // twelve
  ['cthirteen']: cthirteen, // thirteen
  ['cfourteen']: cfourteen, // fourteen
  ['cfifteen']: cfifteen, // fifteen
  ['csixteen']: csixteen, // sixteen
  ['cseventeen']: cseventeen, // seventeen
  ['ceighteen']: ceighteen, // eighteen
  ['cnineteen']: cnineteen, // nineteen
  ['ctwenty']: ctwenty, // twenty
  ['cthirty']: cthirty, // thirty
  ['cfourty']: cfourty, // fourty
  ['cfifty']: cfifty, // fifty
  ['csixty']: csixty, // sixty
  ['cseventy']: cseventy, // seventy
  ['ceighty']: ceighty, // eighty
  ['cninety']: cninety, // ninety
  ['chundred']: chundred, // hundred
  ['cthousand']: cthousand, // thousand
  ['cmillion']: cmillion, // million
  ['cbillion']: cbillion, // billion
  ['ctrillion']: ctrillion, // trillion
  ['cOne']: cOne, // One
  ['cTwo']: cTwo, // Two
  ['cThree']: cThree, // Three
  ['cFour']: cFour, // Four
  ['cFive']: cFive, // Five
  ['cSix']: cSix, // Six
  ['cSeven']: cSeven, // Seven
  ['cEight']: cEight, // Eight
  ['cNine']: cNine, // Nine
  ['cEleven']: cEleven, // Eleven
  ['cTwelve']: cTwelve, // Twelve
  ['cThirteen']: cThirteen, // Thirteen
  ['cFourteen']: cFourteen, // Fourteen
  ['cFifteen']: cFifteen, // Fifteen
  ['cSixteen']: cSixteen, // Sixteen
  ['cSeventeen']: cSeventeen, // Seventeen
  ['cEighteen']: cEighteen, // Eighteen
  ['cNineteen']: cNineteen, // Nineteen
  ['cTwenty']: cTwenty, // Twenty
  ['cThirty']: cThirty, // Thirty
  ['cFourty']: cFourty, // Fourty
  ['cFifty']: cFifty, // Fifty
  ['cSixty']: cSixty, // Sixty
  ['cSeventy']: cSeventy, // Seventy
  ['cEighty']: cEighty, // Eighty
  ['cNinety']: cNinety, // Ninety
  ['cHundred']: cHundred, // Hundred
  ['cThousand']: cThousand, // Thousand
  ['cMillion']: cMillion, // Million
  ['cBillion']: cBillion, // Billion
  ['cTrillion']: cTrillion, // Trillion

  // String Number Values
  ['cfirst']: cfirst, // first
  ['cFirst']: cFirst, // First
  // Second - See below
  ['cthird']: cthird, // third
  ['cThird']: cThird, // Third
  ['cfourth']: cfourth, // fourth
  ['cFourth']: cFourth, // Fourth
  ['cfifth']: cfifth, // fifth
  ['cFifth']: cFifth, // Fifth
  ['csixth']: csixth, // sixth
  ['cSixth']: cSixth, // Sixth
  ['cseventh']: cseventh, // seventh
  ['cSeventh']: cSeventh, // Seventh
  ['ceighth']: ceighth, // eighth
  ['cEighth']: cEighth, // Eighth
  ['ctenth']: ctenth, // tenth
  ['cTenth']: cTenth, // Tenth
  ['celeventh']: celeventh, // eleventh
  ['cEleventh']: cEleventh, // Eleventh
  ['ctwelveth']: ctwelveth, // twelveth
  ['cTwelveth']: cTwelveth, // Twelveth
  ['cthirteenth']: cthirteenth, // thirteenth
  ['cThirteenth']: cThirteenth, // Thirteenth
  ['cfourteenth']: cfourteenth, // fourteenth
  ['cFourteenth']: cFourteenth, // Fourteenth
  ['cfifteenth']: cfifteenth, // fifteenth
  ['cFifteenth']: cFifteenth, // Fifteenth
  ['csixteenth']: csixteenth, // sixteenth
  ['cSixteenth']: cSixteenth, // Sixteenth
  ['cseventeenth']: cseventeenth, // seventeenth
  ['cSeventeenth']: cSeventeenth, // Seventeenth
  ['ceighteenth']: ceighteenth, // eighteenth
  ['cEighteenth']: cEighteenth, // Eighteenth
  ['cnineteenth']: cnineteenth, // nineteenth
  ['cNineteenth']: cNineteenth, // Nineteenth
  ['ctwentieth']: ctwentieth, // twentieth
  ['cTwentieth']: cTwentieth, // Twentieth
  ['cthirtieth']: cthirtieth, // thirtieth
  ['cThirtieth']: cThirtieth, // Thirtieth
  ['cfourtieth']: cfourtieth, // fourtieth
  ['cFourtieth']: cFourtieth, // Fourtieth
  ['cfiftieth']: cfiftieth, // fiftieth
  ['cFiftieth']: cFiftieth, // Fiftieth
  ['csixtieth']: csixtieth, // sixtieth
  ['cSixtieth']: cSixtieth, // Sixtieth
  ['cseventieth']: cseventieth, // seventieth
  ['cSeventieth']: cSeventieth, // Seventieth
  ['ceightieth']: ceightieth, // eightieth
  ['cEightieth']: cEightieth, // Eightieth
  ['cninetieth']: cninetieth, // ninetieth
  ['cNinetieth']: cNinetieth, // Ninetieth
  ['chundredth']: chundredth, // hundredth
  ['cHundredth']: cHundredth, // Hundredth
  ['cthousandth']: cthousandth, // thousandth
  ['cThousandth']: cThousandth, // Thousandth
  ['cmillionth']: cmillionth, // millionth
  ['cMillionth']: cMillionth, // Millionth
  ['cbillionth']: cbillionth, // billionth
  ['cBillionth']: cBillionth, // Billionth
  ['ctrillionth']: ctrillionth, // trillionth
  ['cTrillionth']: cTrillionth // Trillionth
};
