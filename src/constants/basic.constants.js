/**
 * @file basic.constants.js
 * @module basic-constants
 * @description Contains constants for all of the most basic characters and basic 2-character combinations.
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

let cSpace = ' ';
let cUnderscore = '_'; // _
let cPipe = '|'; // |
let cExclamation = '!'; // !
let cQuestion = '?'; // ?
let cSingleQuote = '\''; // '
let cBackTickQuote = '`'; // `
let cDoubleQuote = '"'; // "
let cForwardSlash = '/'; // /
let cDoubleForwardSlash = '//'; // //
let cOpenParenthesis = '('; // ()
let cCloseParenthesis = ')'; // )
let cOpenBracket = '['; // [
let cCloseBracket = ']'; // ]
let cOpenCurlyBrace = '{'; // {
let cCloseCurlyBrace = '}'; // }
let cBackSlash = '\\'; // Make sure to escape the backslash // \
let cDoubleBackSlash = '\\\\'; // \\
let cCarriageReturn = '\r'; // \r
let cNewLine = '\n'; // \n
let cPlus = '+'; // +
let cStar = '*'; // *
let cDash = '-'; // -
let cDoubleDash = cDash + cDash; // --
let cEqual = '='; // =
let cEqualEqual = cEqual + cEqual; // ==
let cEqualEqualEqual = cEqualEqual + cEqual; // ===
let cNotEqualEqual = cExclamation + cEqualEqual; // !==
let cGreaterThan = '>'; // >
let cLessThan = '<'; // <
let cArrowFunction = cEqual + cGreaterThan; // =>
let cAt = '@'; // @
let cHash = '#';  // #
let cDollar = '$'; // $
let cPercent = '%'; // %
let cDoublePercent = cPercent + cPercent; // %%
let cCarrot = '^'; // ^
let cAndPersand = '&'; // &
let cDot = '.'; // .
let cComa = ','; // ,
let cColon = ':'; // :
let cSemiColon = ';'; // ;
let cTilde = '~'; // ~

// Lower Case Letters
let ca = 'a'; // a
let cb = 'b'; // b
let cc = 'c'; // c
let cd = 'd'; // d
let ce = 'e'; // e
let cf = 'f'; // f
let cg = 'g'; // g
let ch = 'h'; // h
let ci = 'i'; // i
let cj = 'j'; // j
let ck = 'k'; // k
let cl = 'l'; // l
let cm = 'm'; // m
let cn = 'n'; // n
let co = 'o'; // o
let cp = 'p'; // p
let cq = 'q'; // q
let cr = 'r'; // r
let cs = 's'; // s
let ct = 't'; // t
let cu = 'u'; // u
let cv = 'v'; // v
let cw = 'w'; // w
let cx = 'x'; // x
let cy = 'y'; // y
let cz = 'z'; // z

// Upper Case Letters
let cA = 'A'; // A
let cB = 'B'; // B
let cC = 'C'; // C
let cD = 'D'; // D
let cE = 'E'; // E
let cF = 'F'; // F
let cG = 'G'; // G
let cH = 'H'; // H
let cI = 'I'; // I
let cJ = 'J'; // J
let cK = 'K'; // K
let cL = 'L'; // L
let cM = 'M'; // M
let cN = 'N'; // N
let cO = 'O'; // O
let cP = 'P'; // P
let cQ = 'Q'; // Q
let cR = 'R'; // R
let cS = 'S'; // S
let cT = 'T'; // T
let cU = 'U'; // U
let cV = 'V'; // V
let cW = 'W'; // W
let cX = 'X'; // X
let cY = 'Y'; // Y
let cZ = 'Z'; // Z

export default {
  // Special Characters
  ['cSpace']: cSpace,
  ['cUnderscore']: cUnderscore, // _
  ['cPipe']: cPipe, // |
  ['cExclamation']: cExclamation, // !
  ['cQuestion']: cQuestion, // ?
  ['cSingleQuote']: cSingleQuote, // '
  ['cBackTickQuote']: cBackTickQuote, // `
  ['cDoubleQuote']: cDoubleQuote, // "
  ['cForwardSlash']: cForwardSlash, // /
  ['cDoubleForwardSlash']: cDoubleForwardSlash, // //
  ['cOpenParenthesis']: cOpenParenthesis, // ()
  ['cCloseParenthesis']: cCloseParenthesis, // )
  ['cOpenBracket']: cOpenBracket, // [
  ['cCloseBracket']: cCloseBracket, // ]
  ['cOpenCurlyBrace']: cOpenCurlyBrace, // {
  ['cCloseCurlyBrace']: cCloseCurlyBrace, // }
  ['cBackSlash']: cBackSlash, // Make sure to escape the backslash // \
  ['cDoubleBackSlash']: cDoubleBackSlash, // \\
  ['cCarriageReturn']: cCarriageReturn, // \r
  ['cNewLine']: cNewLine, // \n
  ['cPlus']: cPlus, // +
  ['cStar']: cStar, // *
  ['cDash']: cDash, // -
  ['cDoubleDash']: cDoubleDash, // --
  ['cEqual']: cEqual, // =
  ['cEqualEqual']: cEqualEqual, // ==
  ['cEqualEqualEqual']: cEqualEqualEqual, // ===
  ['cNotEqualEqual']: cNotEqualEqual, // !==
  ['cGreaterThan']: cGreaterThan, // >
  ['cLessThan']: cLessThan, // <
  ['cArrowFunction']: cArrowFunction, // =>
  ['cAt']: cAt, // @
  ['cHash']: cHash,  // #
  ['cDollar']: cDollar, // $
  ['cPercent']: cPercent, // %
  ['cDoublePercent']: cDoublePercent, // %%
  ['cCarrot']: cCarrot, // ^
  ['cAndPersand']: cAndPersand, // &
  ['cDot']: cDot, // .
  ['cComa']: cComa, // ,
  ['cColon']: cColon, // :
  ['cSemiColon']: cSemiColon, // ;
  ['cTilde']: cTilde, // ~

  // Lower Case Letters
  [cc + ca]: ca, // a
  [cc + cb]: cb, // b
  [cc + cc]: cc, // c
  [cc + cd]: cd, // d
  [cc + ce]: ce, // e
  [cc + cf]: cf, // f
  [cc + cg]: cg, // g
  [cc + ch]: ch, // h
  [cc + ci]: ci, // i
  [cc + cj]: cj, // j
  [cc + ck]: ck, // k
  [cc + cl]: cl, // l
  [cc + cm]: cm, // m
  [cc + cn]: cn, // n
  [cc + co]: co, // o
  [cc + cp]: cp, // p
  [cc + cq]: cq, // q
  [cc + cr]: cr, // r
  [cc + cs]: cs, // s
  [cc + ct]: ct, // t
  [cc + cu]: cu, // u
  [cc + cv]: cv, // v
  [cc + cw]: cw, // w
  [cc + cx]: cx, // x
  [cc + cy]: cy, // y
  [cc + cz]: cz, // z

  // Upper Case Letters
  [cc + cA]: cA, // A
  [cc + cB]: cB, // B
  [cc + cC]: cC, // C
  [cc + cD]: cD, // D
  [cc + cE]: cE, // E
  [cc + cF]: cF, // F
  [cc + cG]: cG, // G
  [cc + cH]: cH, // H
  [cc + cI]: cI, // I
  [cc + cJ]: cJ, // J
  [cc + cK]: cK, // K
  [cc + cL]: cL, // L
  [cc + cM]: cM, // M
  [cc + cN]: cN, // N
  [cc + cO]: cO, // O
  [cc + cP]: cP, // P
  [cc + cQ]: cQ, // Q
  [cc + cR]: cR, // R
  [cc + cS]: cS, // S
  [cc + cT]: cT, // T
  [cc + cU]: cU, // U
  [cc + cV]: cV, // V
  [cc + cW]: cW, // W
  [cc + cX]: cX, // X
  [cc + cY]: cY, // Y
  [cc + cZ]: cZ, // Z

  // Alphabetic Codes
  // aa-AA
  [cc + ca + ca]: ca + ca, // aa
  [cc + ca + cb]: ca + cb, // ab
  [cc + ca + cc]: ca + cc, // ac
  // NOTE: Have to watch out for the rest of these 'ca' constants, could have problems with them in the future.
  // clmn1rt3 = 'ad'; // 'ca' & 'cd' is some how a reserved word.
  [cc + ca + ce]: ca + ce, // ae
  [cc + ca + cf]: ca + cf, // af
  [cc + ca + cg]: ca + cg, // ag
  [cc + ca + ch]: ca + ch, // ah
  [cc + ca + ci]: ca + ci, // ai
  [cc + ca + cj]: ca + cj, // aj
  [cc + ca + ck]: ca + ck, // ak
  [cc + ca + cl]: ca + cl, // al
  [cc + ca + cm]: ca + cm, // am
  [cc + ca + cn]: ca + cn, // an
  [cc + ca + co]: ca + co, // ao
  [cc + ca + cp]: ca + cp, // ap
  [cc + ca + cq]: ca + cq, // aq
  [cc + ca + cr]: ca + cr, // ar
  [cc + ca + cs]: ca + cs, // as
  [cc + ca + ct]: ca + ct, // at
  [cc + ca + cu]: ca + cu, // au
  [cc + ca + cv]: ca + cv, // av
  [cc + ca + cw]: ca + cw, // aw
  [cc + ca + cx]: ca + cx, // ax
  [cc + ca + cy]: ca + cy, // ay
  [cc + ca + cz]: ca + cz, // az

  [cc + cA + ca]: cA + ca, // Aa
  [cc + cA + cb]: cA + cb, // Ab
  [cc + cA + cc]: cA + cc, // Ac
  [cc + cA + cd]: cA + cd, // Ad
  [cc + cA + ce]: cA + ce, // Ae
  [cc + cA + cf]: cA + cf, // Af
  [cc + cA + cg]: cA + cg, // Ag
  [cc + cA + ch]: cA + ch, // Ah
  [cc + cA + ci]: cA + ci, // Ai
  [cc + cA + cj]: cA + cj, // Aj
  [cc + cA + ck]: cA + ck, // Ak
  [cc + cA + cl]: cA + cl, // Al
  [cc + cA + cm]: cA + cm, // Am
  [cc + cA + cn]: cA + cn, // An
  [cc + cA + co]: cA + co, // Ao
  [cc + cA + cp]: cA + cp, // Ap
  [cc + cA + cq]: cA + cq, // Aq
  [cc + cA + cr]: cA + cr, // Ar
  [cc + cA + cs]: cA + cs, // As
  // cAt = cA + ct; // We've already defined At = @
  [cc + cA + cu]: cA + cu, // Au
  [cc + cA + cv]: cA + cv, // Av
  [cc + cA + cw]: cA + cw, // Aw
  [cc + cA + cx]: cA + cx, // Ax
  [cc + cA + cy]: cA + cy, // Ay
  [cc + cA + cz]: cA + cz, // Az

  [cc + ca + cA]: ca + cA, // aA
  [cc + ca + cB]: ca + cB, // aB
  [cc + ca + cC]: ca + cC, // aC
  [cc + ca + cD]: ca + cD, // aD
  [cc + ca + cE]: ca + cE, // aE
  [cc + ca + cF]: ca + cF, // aF
  [cc + ca + cG]: ca + cG, // aG
  [cc + ca + cH]: ca + cH, // aH
  [cc + ca + cI]: ca + cI, // aI
  [cc + ca + cJ]: ca + cJ, // aJ
  [cc + ca + cK]: ca + cK, // aK
  [cc + ca + cL]: ca + cL, // aL
  [cc + ca + cM]: ca + cM, // aM
  [cc + ca + cN]: ca + cN, // aN
  [cc + ca + cO]: ca + cO, // aO
  [cc + ca + cP]: ca + cP, // aP
  [cc + ca + cQ]: ca + cQ, // aQ
  [cc + ca + cR]: ca + cR, // aR
  [cc + ca + cS]: ca + cS, // aS
  [cc + ca + cT]: ca + cT, // aT
  [cc + ca + cU]: ca + cU, // aU
  [cc + ca + cV]: ca + cV, // aV
  [cc + ca + cW]: ca + cW, // aW
  [cc + ca + cX]: ca + cX, // aX
  [cc + ca + cY]: ca + cY, // aY
  [cc + ca + cZ]: ca + cZ, // aZ

  [cc + cA + cA]: cA + cA, // AA
  [cc + cA + cB]: cA + cB, // AB
  [cc + cA + cC]: cA + cC, // AC
  [cc + cA + cD]: cA + cD, // AD
  [cc + cA + cE]: cA + cE, // AE
  [cc + cA + cF]: cA + cF, // AF
  [cc + cA + cG]: cA + cG, // AG
  [cc + cA + cH]: cA + cH, // AH
  [cc + cA + cI]: cA + cI, // AI
  [cc + cA + cJ]: cA + cJ, // AJ
  [cc + cA + cK]: cA + cK, // AK
  [cc + cA + cL]: cA + cL, // AL
  [cc + cA + cM]: cA + cM, // AM
  [cc + cA + cN]: cA + cN, // AN
  [cc + cA + cO]: cA + cO, // AO
  [cc + cA + cP]: cA + cP, // AP
  [cc + cA + cQ]: cA + cQ, // AQ
  [cc + cA + cR]: cA + cR, // AR
  [cc + cA + cS]: cA + cS, // AS
  [cc + cA + cT]: cA + cT, // AT
  [cc + cA + cU]: cA + cU, // AU
  [cc + cA + cV]: cA + cV, // AV
  [cc + cA + cW]: cA + cW, // AW
  [cc + cA + cX]: cA + cX, // AX
  [cc + cA + cY]: cA + cY, // AY
  [cc + cA + cZ]: cA + cZ, // AZ

  // ba-BA
  [cc + cb + ca]: cb + ca, // ba
  [cc + cb + cb]: cb + cb, // bb
  [cc + cb + cc]: cb + cc, // bc
  [cc + cb + cd]: cb + cd, // bd
  [cc + cb + ce]: cb + ce, // be
  [cc + cb + cf]: cb + cf, // bf
  [cc + cb + cg]: cb + cg, // bg
  [cc + cb + ch]: cb + ch, // bh
  [cc + cb + ci]: cb + ci, // bi
  [cc + cb + cj]: cb + cj, // bj
  [cc + cb + ck]: cb + ck, // bk
  [cc + cb + cl]: cb + cl, // bl
  [cc + cb + cm]: cb + cm, // bm
  [cc + cb + cn]: cb + cn, // bn
  [cc + cb + co]: cb + co, // bo
  [cc + cb + cp]: cb + cp, // bp
  [cc + cb + cq]: cb + cq, // bq
  [cc + cb + cr]: cb + cr, // br
  [cc + cb + cs]: cb + cs, // bs
  [cc + cb + ct]: cb + ct, // bt
  [cc + cb + cu]: cb + cu, // bu
  [cc + cb + cv]: cb + cv, // bv
  [cc + cb + cw]: cb + cw, // bw
  [cc + cb + cx]: cb + cx, // bx
  [cc + cb + cy]: cb + cy, // by
  [cc + cb + cz]: cb + cz, // bz

  [cc + cB + ca]: cB + ca, // Ba
  [cc + cB + cb]: cB + cb, // Bb
  [cc + cB + cc]: cB + cc, // Bc
  [cc + cB + cd]: cB + cd, // Bd
  [cc + cB + ce]: cB + ce, // Be
  [cc + cB + cf]: cB + cf, // Bf
  [cc + cB + cg]: cB + cg, // Bg
  [cc + cB + ch]: cB + ch, // Bh
  [cc + cB + ci]: cB + ci, // Bi
  [cc + cB + cj]: cB + cj, // Bj
  [cc + cB + ck]: cB + ck, // Bk
  [cc + cB + cl]: cB + cl, // Bl
  [cc + cB + cm]: cB + cm, // Bm
  [cc + cB + cn]: cB + cn, // Bn
  [cc + cB + co]: cB + co, // Bo
  [cc + cB + cp]: cB + cp, // Bp
  [cc + cB + cq]: cB + cq, // Bq
  [cc + cB + cr]: cB + cr, // Br
  [cc + cB + cs]: cB + cs, // Bs
  [cc + cB + ct]: cB + ct, // Bt
  [cc + cB + cu]: cB + cu, // Bu
  [cc + cB + cv]: cB + cv, // Bv
  [cc + cB + cw]: cB + cw, // Bw
  [cc + cB + cx]: cB + cx, // Bx
  [cc + cB + cy]: cB + cy, // By
  [cc + cB + cz]: cB + cz, // Bz

  [cc + cb + cA]: cb + cA, // bA
  [cc + cb + cB]: cb + cB, // bB
  [cc + cb + cC]: cb + cC, // bC
  [cc + cb + cD]: cb + cD, // bD
  [cc + cb + cE]: cb + cE, // bE
  [cc + cb + cF]: cb + cF, // bF
  [cc + cb + cG]: cb + cG, // bG
  [cc + cb + cH]: cb + cH, // bH
  [cc + cb + cI]: cb + cI, // bI
  [cc + cb + cJ]: cb + cJ, // bJ
  [cc + cb + cK]: cb + cK, // bK
  [cc + cb + cL]: cb + cL, // bL
  [cc + cb + cM]: cb + cM, // bM
  [cc + cb + cN]: cb + cN, // bN
  [cc + cb + cO]: cb + cO, // bO
  [cc + cb + cP]: cb + cP, // bP
  [cc + cb + cQ]: cb + cQ, // bQ
  [cc + cb + cR]: cb + cR, // bR
  [cc + cb + cS]: cb + cS, // bS
  [cc + cb + cT]: cb + cT, // bT
  [cc + cb + cU]: cb + cU, // bU
  [cc + cb + cV]: cb + cV, // bV
  [cc + cb + cW]: cb + cW, // bW
  [cc + cb + cX]: cb + cX, // bX
  [cc + cb + cY]: cb + cY, // bY
  [cc + cb + cZ]: cb + cZ, // bZ

  [cc + cB + cA]: cB + cA, // BA
  [cc + cB + cB]: cB + cB, // BB
  [cc + cB + cC]: cB + cC, // BC
  [cc + cB + cD]: cB + cD, // BD
  [cc + cB + cE]: cB + cE, // BE
  [cc + cB + cF]: cB + cF, // BF
  [cc + cB + cG]: cB + cG, // BG
  [cc + cB + cH]: cB + cH, // BH
  [cc + cB + cI]: cB + cI, // BI
  [cc + cB + cJ]: cB + cJ, // BJ
  [cc + cB + cK]: cB + cK, // BK
  [cc + cB + cL]: cB + cL, // BL
  [cc + cB + cM]: cB + cM, // BM
  [cc + cB + cN]: cB + cN, // BN
  [cc + cB + cO]: cB + cO, // BO
  [cc + cB + cP]: cB + cP, // BP
  [cc + cB + cQ]: cB + cQ, // BQ
  [cc + cB + cR]: cB + cR, // BR
  [cc + cB + cS]: cB + cS, // BS
  [cc + cB + cT]: cB + cT, // BT
  [cc + cB + cU]: cB + cU, // BU
  [cc + cB + cV]: cB + cV, // BV
  [cc + cB + cW]: cB + cW, // BW
  [cc + cB + cX]: cB + cX, // BX
  [cc + cB + cY]: cB + cY, // BY
  [cc + cB + cZ]: cB + cZ, // BZ

  // ca-CA
  [cc + cc + ca]: cc + ca, // ca
  [cc + cc + cb]: cc + cb, // cb
  [cc + cc + cc]: cc + cc, // cc
  [cc + cc + cd]: cc + cd, // cd
  [cc + cc + ce]: cc + ce, // ce
  [cc + cc + cf]: cc + cf, // cf
  [cc + cc + cg]: cc + cg, // cg
  [cc + cc + ch]: cc + ch, // ch
  [cc + cc + ci]: cc + ci, // ci
  [cc + cc + cj]: cc + cj, // cj
  [cc + cc + ck]: cc + ck, // ck
  [cc + cc + cl]: cc + cl, // cl
  [cc + cc + cm]: cc + cm, // cm
  [cc + cc + cn]: cc + cn, // cn
  [cc + cc + co]: cc + co, // co
  [cc + cc + cp]: cc + cp, // cp
  [cc + cc + cq]: cc + cq, // cq
  [cc + cc + cr]: cc + cr, // cr
  [cc + cc + cs]: cc + cs, // cs
  [cc + cc + ct]: cc + ct, // ct
  [cc + cc + cu]: cc + cu, // cu
  [cc + cc + cv]: cc + cv, // cv
  [cc + cc + cw]: cc + cw, // cw
  [cc + cc + cx]: cc + cx, // cx
  [cc + cc + cy]: cc + cy, // cy
  [cc + cc + cz]: cc + cz, // cz

  [cc + cC + ca]: cC + ca, // Ca
  [cc + cC + cb]: cC + cb, // Cb
  [cc + cC + cc]: cC + cc, // Cc
  [cc + cC + cd]: cC + cd, // Cd
  [cc + cC + ce]: cC + ce, // Ce
  [cc + cC + cf]: cC + cf, // Cf
  [cc + cC + cg]: cC + cg, // Cg
  [cc + cC + ch]: cC + ch, // Ch
  [cc + cC + ci]: cC + ci, // Ci
  [cc + cC + cj]: cC + cj, // Cj
  [cc + cC + ck]: cC + ck, // Ck
  [cc + cC + cl]: cC + cl, // Cl
  [cc + cC + cm]: cC + cm, // Cm
  [cc + cC + cn]: cC + cn, // Cn
  [cc + cC + co]: cC + co, // Co
  [cc + cC + cp]: cC + cp, // Cp
  [cc + cC + cq]: cC + cq, // Cq
  [cc + cC + cr]: cC + cr, // Cr
  [cc + cC + cs]: cC + cs, // Cs
  [cc + cC + ct]: cC + ct, // Ct
  [cc + cC + cu]: cC + cu, // Cu
  [cc + cC + cv]: cC + cv, // Cv
  [cc + cC + cw]: cC + cw, // Cw
  [cc + cC + cx]: cC + cx, // Cx
  [cc + cC + cy]: cC + cy, // Cy
  [cc + cC + cz]: cC + cz, // Cz

  [cc + cc + cA]: cc + cA, // cA
  [cc + cc + cB]: cc + cB, // cB
  [cc + cc + cC]: cc + cC, // cC
  [cc + cc + cD]: cc + cD, // cD
  [cc + cc + cE]: cc + cE, // cE
  [cc + cc + cF]: cc + cF, // cF
  [cc + cc + cG]: cc + cG, // cG
  [cc + cc + cH]: cc + cH, // cH
  [cc + cc + cI]: cc + cI, // cI
  [cc + cc + cJ]: cc + cJ, // cJ
  [cc + cc + cK]: cc + cK, // cK
  [cc + cc + cL]: cc + cL, // cL
  [cc + cc + cM]: cc + cM, // cM
  [cc + cc + cN]: cc + cN, // cN
  [cc + cc + cO]: cc + cO, // cO
  [cc + cc + cP]: cc + cP, // cP
  [cc + cc + cQ]: cc + cQ, // cQ
  [cc + cc + cR]: cc + cR, // cR
  [cc + cc + cS]: cc + cS, // cS
  [cc + cc + cT]: cc + cT, // cT
  [cc + cc + cU]: cc + cU, // cU
  [cc + cc + cV]: cc + cV, // cV
  [cc + cc + cW]: cc + cW, // cW
  [cc + cc + cX]: cc + cX, // cX
  [cc + cc + cY]: cc + cY, // cY
  [cc + cc + cZ]: cc + cZ, // cZ

  [cc + cC + cA]: cC + cA, // CA
  [cc + cC + cB]: cC + cB, // CB
  [cc + cC + cC]: cC + cC, // CC
  [cc + cC + cD]: cC + cD, // CD
  [cc + cC + cE]: cC + cE, // CE
  [cc + cC + cF]: cC + cF, // CF
  [cc + cC + cG]: cC + cG, // CG
  [cc + cC + cH]: cC + cH, // CH
  [cc + cC + cI]: cC + cI, // CI
  [cc + cC + cJ]: cC + cJ, // CJ
  [cc + cC + cK]: cC + cK, // CK
  [cc + cC + cL]: cC + cL, // CL
  [cc + cC + cM]: cC + cM, // CM
  [cc + cC + cN]: cC + cN, // CN
  [cc + cC + cO]: cC + cO, // CO
  [cc + cC + cP]: cC + cP, // CP
  [cc + cC + cQ]: cC + cQ, // CQ
  [cc + cC + cR]: cC + cR, // CR
  [cc + cC + cS]: cC + cS, // CS
  [cc + cC + cT]: cC + cT, // CT
  [cc + cC + cU]: cC + cU, // CU
  [cc + cC + cV]: cC + cV, // CV
  [cc + cC + cW]: cC + cW, // CW
  [cc + cC + cX]: cC + cX, // CX
  [cc + cC + cY]: cC + cY, // CY
  [cc + cC + cZ]: cC + cZ, // CZ

  // da-DA
  [cc + cd + ca]: cd + ca, // da
  [cc + cd + cb]: cd + cb, // db
  [cc + cd + cc]: cd + cc, // dc
  [cc + cd + cd]: cd + cd, // dd
  [cc + cd + ce]: cd + ce, // de
  [cc + cd + cf]: cd + cf, // df
  [cc + cd + cg]: cd + cg, // dg
  [cc + cd + ch]: cd + ch, // dh
  [cc + cd + ci]: cd + ci, // di
  [cc + cd + cj]: cd + cj, // dj
  [cc + cd + ck]: cd + ck, // dk
  [cc + cd + cl]: cd + cl, // dl
  [cc + cd + cm]: cd + cm, // dm
  [cc + cd + cn]: cd + cn, // dn
  [cc + cd + co]: cd + co, // do
  [cc + cd + cp]: cd + cp, // dp
  [cc + cd + cq]: cd + cq, // dq
  [cc + cd + cr]: cd + cr, // dr
  [cc + cd + cs]: cd + cs, // ds
  [cc + cd + ct]: cd + ct, // dt
  [cc + cd + cu]: cd + cu, // du
  [cc + cd + cv]: cd + cv, // dv
  [cc + cd + cw]: cd + cw, // dw
  [cc + cd + cx]: cd + cx, // dx
  [cc + cd + cy]: cd + cy, // dy
  [cc + cd + cz]: cd + cz, // dz

  [cc + cD + ca]: cD + ca, // Da
  [cc + cD + cb]: cD + cb, // Db
  [cc + cD + cc]: cD + cc, // Dc
  [cc + cD + cd]: cD + cd, // Dd
  [cc + cD + ce]: cD + ce, // De
  [cc + cD + cf]: cD + cf, // Df
  [cc + cD + cg]: cD + cg, // Dg
  [cc + cD + ch]: cD + ch, // Dh
  [cc + cD + ci]: cD + ci, // Di
  [cc + cD + cj]: cD + cj, // Dj
  [cc + cD + ck]: cD + ck, // Dk
  [cc + cD + cl]: cD + cl, // Dl
  [cc + cD + cm]: cD + cm, // Dm
  [cc + cD + cn]: cD + cn, // Dn
  [cc + cD + co]: cD + co, // Do
  [cc + cD + cp]: cD + cp, // Dp
  [cc + cD + cq]: cD + cq, // Dq
  [cc + cD + cr]: cD + cr, // Dr
  [cc + cD + cs]: cD + cs, // Ds
  [cc + cD + ct]: cD + ct, // Dt
  [cc + cD + cu]: cD + cu, // Du
  [cc + cD + cv]: cD + cv, // Dv
  [cc + cD + cw]: cD + cw, // Dw
  [cc + cD + cx]: cD + cx, // Dx
  [cc + cD + cy]: cD + cy, // Dy
  [cc + cD + cz]: cD + cz, // Dz

  [cc + cd + cA]: cd + cA, // dA
  [cc + cd + cB]: cd + cB, // dB
  [cc + cd + cC]: cd + cC, // dC
  [cc + cd + cD]: cd + cD, // dD
  [cc + cd + cE]: cd + cE, // dE
  [cc + cd + cF]: cd + cF, // dF
  [cc + cd + cG]: cd + cG, // dG
  [cc + cd + cH]: cd + cH, // dH
  [cc + cd + cI]: cd + cI, // dI
  [cc + cd + cJ]: cd + cJ, // dJ
  [cc + cd + cK]: cd + cK, // dK
  [cc + cd + cL]: cd + cL, // dL
  [cc + cd + cM]: cd + cM, // dM
  [cc + cd + cN]: cd + cN, // dN
  [cc + cd + cO]: cd + cO, // dO
  [cc + cd + cP]: cd + cP, // dP
  [cc + cd + cQ]: cd + cQ, // dQ
  [cc + cd + cR]: cd + cR, // dR
  [cc + cd + cS]: cd + cS, // dS
  [cc + cd + cT]: cd + cT, // dT
  [cc + cd + cU]: cd + cU, // dU
  [cc + cd + cV]: cd + cV, // dV
  [cc + cd + cW]: cd + cW, // dW
  [cc + cd + cX]: cd + cX, // dX
  [cc + cd + cY]: cd + cY, // dY
  [cc + cd + cZ]: cd + cZ, // dZ

  [cc + cD + cA]: cD + cA, // DA
  [cc + cD + cB]: cD + cB, // DB
  [cc + cD + cC]: cD + cC, // DC
  [cc + cD + cD]: cD + cD, // DD
  [cc + cD + cE]: cD + cE, // DE
  [cc + cD + cF]: cD + cF, // DF
  [cc + cD + cG]: cD + cG, // DG
  [cc + cD + cH]: cD + cH, // DH
  [cc + cD + cI]: cD + cI, // DI
  [cc + cD + cJ]: cD + cJ, // DJ
  [cc + cD + cK]: cD + cK, // DK
  [cc + cD + cL]: cD + cL, // DL
  [cc + cD + cM]: cD + cM, // DM
  [cc + cD + cN]: cD + cN, // DN
  [cc + cD + cO]: cD + cO, // DO
  [cc + cD + cP]: cD + cP, // DP
  [cc + cD + cQ]: cD + cQ, // DQ
  [cc + cD + cR]: cD + cR, // DR
  [cc + cD + cS]: cD + cS, // DS
  [cc + cD + cT]: cD + cT, // DT
  [cc + cD + cU]: cD + cU, // DU
  [cc + cD + cV]: cD + cV, // DV
  [cc + cD + cW]: cD + cW, // DW
  [cc + cD + cX]: cD + cX, // DX
  [cc + cD + cY]: cD + cY, // DY
  [cc + cD + cZ]: cD + cZ, // DZ

  // ea-EA
  [cc + ce + ca]: ce + ca, // ea
  [cc + ce + cb]: ce + cb, // eb
  [cc + ce + cc]: ce + cc, // ec
  [cc + ce + cd]: ce + cd, // ed
  [cc + ce + ce]: ce + ce, // ee
  [cc + ce + cf]: ce + cf, // ef
  [cc + ce + cg]: ce + cg, // eg
  [cc + ce + ch]: ce + ch, // eh
  [cc + ce + ci]: ce + ci, // ei
  [cc + ce + cj]: ce + cj, // ej
  [cc + ce + ck]: ce + ck, // ek
  [cc + ce + cl]: ce + cl, // el
  [cc + ce + cm]: ce + cm, // em
  [cc + ce + cn]: ce + cn, // en
  [cc + ce + co]: ce + co, // eo
  [cc + ce + cp]: ce + cp, // ep
  [cc + ce + cq]: ce + cq, // eq
  [cc + ce + cr]: ce + cr, // er
  [cc + ce + cs]: ce + cs, // es
  [cc + ce + ct]: ce + ct, // et
  [cc + ce + cu]: ce + cu, // eu
  [cc + ce + cv]: ce + cv, // ev
  [cc + ce + cw]: ce + cw, // ew
  [cc + ce + cx]: ce + cx, // ex
  [cc + ce + cy]: ce + cy, // ey
  [cc + ce + cz]: ce + cz, // ez

  [cc + cE + ca]: cE + ca, // Ea
  [cc + cE + cb]: cE + cb, // Eb
  [cc + cE + cc]: cE + cc, // Ec
  [cc + cE + cd]: cE + cd, // Ed
  [cc + cE + ce]: cE + ce, // Ee
  [cc + cE + cf]: cE + cf, // Ef
  [cc + cE + cg]: cE + cg, // Eg
  [cc + cE + ch]: cE + ch, // Eh
  [cc + cE + ci]: cE + ci, // Ei
  [cc + cE + cj]: cE + cj, // Ej
  [cc + cE + ck]: cE + ck, // Ek
  [cc + cE + cl]: cE + cl, // El
  [cc + cE + cm]: cE + cm, // Em
  [cc + cE + cn]: cE + cn, // En
  [cc + cE + co]: cE + co, // Eo
  [cc + cE + cp]: cE + cp, // Ep
  [cc + cE + cq]: cE + cq, // Eq
  [cc + cE + cr]: cE + cr, // Er
  [cc + cE + cs]: cE + cs, // Es
  [cc + cE + ct]: cE + ct, // Et
  [cc + cE + cu]: cE + cu, // Eu
  [cc + cE + cv]: cE + cv, // Ev
  [cc + cE + cw]: cE + cw, // Ew
  [cc + cE + cx]: cE + cx, // Ex
  [cc + cE + cy]: cE + cy, // Ey
  [cc + cE + cz]: cE + cz, // Ez

  [cc + ce + cA]: ce + cA, // eA
  [cc + ce + cB]: ce + cB, // eB
  [cc + ce + cC]: ce + cC, // eC
  [cc + ce + cD]: ce + cD, // eD
  [cc + ce + cE]: ce + cE, // eE
  [cc + ce + cF]: ce + cF, // eF
  [cc + ce + cG]: ce + cG, // eG
  [cc + ce + cH]: ce + cH, // eH
  [cc + ce + cI]: ce + cI, // eI
  [cc + ce + cJ]: ce + cJ, // eJ
  [cc + ce + cK]: ce + cK, // eK
  [cc + ce + cL]: ce + cL, // eL
  [cc + ce + cM]: ce + cM, // eM
  [cc + ce + cN]: ce + cN, // eN
  [cc + ce + cO]: ce + cO, // eO
  [cc + ce + cP]: ce + cP, // eP
  [cc + ce + cQ]: ce + cQ, // eQ
  [cc + ce + cR]: ce + cR, // eR
  [cc + ce + cS]: ce + cS, // eS
  [cc + ce + cT]: ce + cT, // eT
  [cc + ce + cU]: ce + cU, // eU
  [cc + ce + cV]: ce + cV, // eV
  [cc + ce + cW]: ce + cW, // eW
  [cc + ce + cX]: ce + cX, // eX
  [cc + ce + cY]: ce + cY, // eY
  [cc + ce + cZ]: ce + cZ, // eZ

  [cc + cE + cA]: cE + cA, // EA
  [cc + cE + cB]: cE + cB, // EB
  [cc + cE + cC]: cE + cC, // EC
  [cc + cE + cD]: cE + cD, // ED
  [cc + cE + cE]: cE + cE, // EE
  [cc + cE + cF]: cE + cF, // EF
  [cc + cE + cG]: cE + cG, // EG
  [cc + cE + cH]: cE + cH, // EH
  [cc + cE + cI]: cE + cI, // EI
  [cc + cE + cJ]: cE + cJ, // EJ
  [cc + cE + cK]: cE + cK, // EK
  [cc + cE + cL]: cE + cL, // EL
  [cc + cE + cM]: cE + cM, // EM
  [cc + cE + cN]: cE + cN, // EN
  [cc + cE + cO]: cE + cO, // EO
  [cc + cE + cP]: cE + cP, // EP
  [cc + cE + cQ]: cE + cQ, // EQ
  [cc + cE + cR]: cE + cR, // ER
  [cc + cE + cS]: cE + cS, // ES
  [cc + cE + cT]: cE + cT, // ET
  [cc + cE + cU]: cE + cU, // EU
  [cc + cE + cV]: cE + cV, // EV
  [cc + cE + cW]: cE + cW, // EW
  [cc + cE + cX]: cE + cX, // EX
  [cc + cE + cY]: cE + cY, // EY
  [cc + cE + cZ]: cE + cZ, // EZ

  // fa-FA
  [cc + cf + ca]: cf + ca, // fa
  [cc + cf + cb]: cf + cb, // fb
  [cc + cf + cc]: cf + cc, // fc
  [cc + cf + cd]: cf + cd, // fd
  [cc + cf + ce]: cf + ce, // fe
  [cc + cf + cf]: cf + cf, // ff
  [cc + cf + cg]: cf + cg, // fg
  [cc + cf + ch]: cf + ch, // fh
  [cc + cf + ci]: cf + ci, // fi
  [cc + cf + cj]: cf + cj, // fj
  [cc + cf + ck]: cf + ck, // fk
  [cc + cf + cl]: cf + cl, // fl
  [cc + cf + cm]: cf + cm, // fm
  [cc + cf + cn]: cf + cn, // fn
  [cc + cf + co]: cf + co, // fo
  [cc + cf + cp]: cf + cp, // fp
  [cc + cf + cq]: cf + cq, // fq
  [cc + cf + cr]: cf + cr, // fr
  [cc + cf + cs]: cf + cs, // fs
  [cc + cf + ct]: cf + ct, // ft
  [cc + cf + cu]: cf + cu, // fu
  [cc + cf + cv]: cf + cv, // fv
  [cc + cf + cw]: cf + cw, // fw
  [cc + cf + cx]: cf + cx, // fx
  [cc + cf + cy]: cf + cy, // fy
  [cc + cf + cz]: cf + cz, // fz

  [cc + cF + ca]: cF + ca, // Fa
  [cc + cF + cb]: cF + cb, // Fb
  [cc + cF + cc]: cF + cc, // Fc
  [cc + cF + cd]: cF + cd, // Fd
  [cc + cF + ce]: cF + ce, // Fe
  [cc + cF + cf]: cF + cf, // Ff
  [cc + cF + cg]: cF + cg, // Fg
  [cc + cF + ch]: cF + ch, // Fh
  [cc + cF + ci]: cF + ci, // Fi
  [cc + cF + cj]: cF + cj, // Fj
  [cc + cF + ck]: cF + ck, // Fk
  [cc + cF + cl]: cF + cl, // Fl
  [cc + cF + cm]: cF + cm, // Fm
  [cc + cF + cn]: cF + cn, // Fn
  [cc + cF + co]: cF + co, // Fo
  [cc + cF + cp]: cF + cp, // Fp
  [cc + cF + cq]: cF + cq, // Fq
  [cc + cF + cr]: cF + cr, // Fr
  [cc + cF + cs]: cF + cs, // Fs
  [cc + cF + ct]: cF + ct, // Ft
  [cc + cF + cu]: cF + cu, // Fu
  [cc + cF + cv]: cF + cv, // Fv
  [cc + cF + cw]: cF + cw, // Fw
  [cc + cF + cx]: cF + cx, // Fx
  [cc + cF + cy]: cF + cy, // Fy
  [cc + cF + cz]: cF + cz, // Fz

  [cc + cf + cA]: cf + cA, // fA
  [cc + cf + cB]: cf + cB, // fB
  [cc + cf + cC]: cf + cC, // fC
  [cc + cf + cD]: cf + cD, // fD
  [cc + cf + cE]: cf + cE, // fE
  [cc + cf + cF]: cf + cF, // fF
  [cc + cf + cG]: cf + cG, // fG
  [cc + cf + cH]: cf + cH, // fH
  [cc + cf + cI]: cf + cI, // fI
  [cc + cf + cJ]: cf + cJ, // fJ
  [cc + cf + cK]: cf + cK, // fK
  [cc + cf + cL]: cf + cL, // fL
  [cc + cf + cM]: cf + cM, // fM
  [cc + cf + cN]: cf + cN, // fN
  [cc + cf + cO]: cf + cO, // fO
  [cc + cf + cP]: cf + cP, // fP
  [cc + cf + cQ]: cf + cQ, // fQ
  [cc + cf + cR]: cf + cR, // fR
  [cc + cf + cS]: cf + cS, // fS
  [cc + cf + cT]: cf + cT, // fT
  [cc + cf + cU]: cf + cU, // fU
  [cc + cf + cV]: cf + cV, // fV
  [cc + cf + cW]: cf + cW, // fW
  [cc + cf + cX]: cf + cX, // fX
  [cc + cf + cY]: cf + cY, // fY
  [cc + cf + cZ]: cf + cZ, // fZ

  [cc + cF + cA]: cF + cA, // FA
  [cc + cF + cB]: cF + cB, // FB
  [cc + cF + cC]: cF + cC, // FC
  [cc + cF + cD]: cF + cD, // FD
  [cc + cF + cE]: cF + cE, // FE
  [cc + cF + cF]: cF + cF, // FF
  [cc + cF + cG]: cF + cG, // FG
  [cc + cF + cH]: cF + cH, // FH
  [cc + cF + cI]: cF + cI, // FI
  [cc + cF + cJ]: cF + cJ, // FJ
  [cc + cF + cK]: cF + cK, // FK
  [cc + cF + cL]: cF + cL, // FL
  [cc + cF + cM]: cF + cM, // FM
  [cc + cF + cN]: cF + cN, // FN
  [cc + cF + cO]: cF + cO, // FO
  [cc + cF + cP]: cF + cP, // FP
  [cc + cF + cQ]: cF + cQ, // FQ
  [cc + cF + cR]: cF + cR, // FR
  [cc + cF + cS]: cF + cS, // FS
  [cc + cF + cT]: cF + cT, // FT
  [cc + cF + cU]: cF + cU, // FU
  [cc + cF + cV]: cF + cV, // FV
  [cc + cF + cW]: cF + cW, // FW
  [cc + cF + cX]: cF + cX, // FX
  [cc + cF + cY]: cF + cY, // FY
  [cc + cF + cZ]: cF + cZ, // FZ

  // ga-GA
  [cc + cg + ca]: cg + ca, // ga
  [cc + cg + cb]: cg + cb, // gb
  [cc + cg + cc]: cg + cc, // gc
  [cc + cg + cd]: cg + cd, // gd
  [cc + cg + ce]: cg + ce, // ge
  [cc + cg + cf]: cg + cf, // gf
  [cc + cg + cg]: cg + cg, // gg
  [cc + cg + ch]: cg + ch, // gh
  [cc + cg + ci]: cg + ci, // gi
  [cc + cg + cj]: cg + cj, // gj
  [cc + cg + ck]: cg + ck, // gk
  [cc + cg + cl]: cg + cl, // gl
  [cc + cg + cm]: cg + cm, // gm
  [cc + cg + cn]: cg + cn, // gn
  [cc + cg + co]: cg + co, // go
  [cc + cg + cp]: cg + cp, // gp
  [cc + cg + cq]: cg + cq, // gq
  [cc + cg + cr]: cg + cr, // gr
  [cc + cg + cs]: cg + cs, // gs
  [cc + cg + ct]: cg + ct, // gt
  [cc + cg + cu]: cg + cu, // gu
  [cc + cg + cv]: cg + cv, // gv
  [cc + cg + cw]: cg + cw, // gw
  [cc + cg + cx]: cg + cx, // gx
  [cc + cg + cy]: cg + cy, // gy
  [cc + cg + cz]: cg + cz, // gz

  [cc + cG + ca]: cG + ca, // Ga
  [cc + cG + cb]: cG + cb, // Gb
  [cc + cG + cc]: cG + cc, // Gc
  [cc + cG + cd]: cG + cd, // Gd
  [cc + cG + ce]: cG + ce, // Ge
  [cc + cG + cf]: cG + cf, // Gf
  [cc + cG + cg]: cG + cg, // Gg
  [cc + cG + ch]: cG + ch, // Gh
  [cc + cG + ci]: cG + ci, // Gi
  [cc + cG + cj]: cG + cj, // Gj
  [cc + cG + ck]: cG + ck, // Gk
  [cc + cG + cl]: cG + cl, // Gl
  [cc + cG + cm]: cG + cm, // Gm
  [cc + cG + cn]: cG + cn, // Gn
  [cc + cG + co]: cG + co, // Go
  [cc + cG + cp]: cG + cp, // Gp
  [cc + cG + cq]: cG + cq, // Gq
  [cc + cG + cr]: cG + cr, // Gr
  [cc + cG + cs]: cG + cs, // Gs
  [cc + cG + ct]: cG + ct, // Gt
  [cc + cG + cu]: cG + cu, // Gu
  [cc + cG + cv]: cG + cv, // Gv
  [cc + cG + cw]: cG + cw, // Gw
  [cc + cG + cx]: cG + cx, // Gx
  [cc + cG + cy]: cG + cy, // Gy
  [cc + cG + cz]: cG + cz, // Gz

  [cc + cg + cA]: cg + cA, // gA
  [cc + cg + cB]: cg + cB, // gB
  [cc + cg + cC]: cg + cC, // gC
  [cc + cg + cD]: cg + cD, // gD
  [cc + cg + cE]: cg + cE, // gE
  [cc + cg + cF]: cg + cF, // gF
  [cc + cg + cG]: cg + cG, // gG
  [cc + cg + cH]: cg + cH, // gH
  [cc + cg + cI]: cg + cI, // gI
  [cc + cg + cJ]: cg + cJ, // gJ
  [cc + cg + cK]: cg + cK, // gK
  [cc + cg + cL]: cg + cL, // gL
  [cc + cg + cM]: cg + cM, // gM
  [cc + cg + cN]: cg + cN, // gN
  [cc + cg + cO]: cg + cO, // gO
  [cc + cg + cP]: cg + cP, // gP
  [cc + cg + cQ]: cg + cQ, // gQ
  [cc + cg + cR]: cg + cR, // gR
  [cc + cg + cS]: cg + cS, // gS
  [cc + cg + cT]: cg + cT, // gT
  [cc + cg + cU]: cg + cU, // gU
  [cc + cg + cV]: cg + cV, // gV
  [cc + cg + cW]: cg + cW, // gW
  [cc + cg + cX]: cg + cX, // gX
  [cc + cg + cY]: cg + cY, // gY
  [cc + cg + cZ]: cg + cZ, // gZ

  [cc + cG + cA]: cG + cA, // GA
  [cc + cG + cB]: cG + cB, // GB
  [cc + cG + cC]: cG + cC, // GC
  [cc + cG + cD]: cG + cD, // GD
  [cc + cG + cE]: cG + cE, // GE
  [cc + cG + cF]: cG + cF, // GF
  [cc + cG + cG]: cG + cG, // GG
  [cc + cG + cH]: cG + cH, // GH
  [cc + cG + cI]: cG + cI, // GI
  [cc + cG + cJ]: cG + cJ, // GJ
  [cc + cG + cK]: cG + cK, // GK
  [cc + cG + cL]: cG + cL, // GL
  [cc + cG + cM]: cG + cM, // GM
  [cc + cG + cN]: cG + cN, // GN
  [cc + cG + cO]: cG + cO, // GO
  [cc + cG + cP]: cG + cP, // GP
  [cc + cG + cQ]: cG + cQ, // GQ
  [cc + cG + cR]: cG + cR, // GR
  [cc + cG + cS]: cG + cS, // GS
  [cc + cG + cT]: cG + cT, // GT
  [cc + cG + cU]: cG + cU, // GU
  [cc + cG + cV]: cG + cV, // GV
  [cc + cG + cW]: cG + cW, // GW
  [cc + cG + cX]: cG + cX, // GX
  [cc + cG + cY]: cG + cY, // GY
  [cc + cG + cZ]: cG + cZ, // GZ

  // ha-HA
  [cc + ch + ca]: ch + ca, // ha
  [cc + ch + cb]: ch + cb, // hb
  [cc + ch + cc]: ch + cc, // hc
  [cc + ch + cd]: ch + cd, // hd
  [cc + ch + ce]: ch + ce, // he
  [cc + ch + cf]: ch + cf, // hf
  [cc + ch + cg]: ch + cg, // hg
  [cc + ch + ch]: ch + ch, // hh
  [cc + ch + ci]: ch + ci, // hi
  [cc + ch + cj]: ch + cj, // hj
  [cc + ch + ck]: ch + ck, // hk
  [cc + ch + cl]: ch + cl, // hl
  [cc + ch + cm]: ch + cm, // hm
  [cc + ch + cn]: ch + cn, // hn
  [cc + ch + co]: ch + co, // ho
  [cc + ch + cp]: ch + cp, // hp
  [cc + ch + cq]: ch + cq, // hq
  [cc + ch + cr]: ch + cr, // hr
  [cc + ch + cs]: ch + cs, // hs
  [cc + ch + ct]: ch + ct, // ht
  [cc + ch + cu]: ch + cu, // hu
  [cc + ch + cv]: ch + cv, // hv
  [cc + ch + cw]: ch + cw, // hw
  [cc + ch + cx]: ch + cx, // hx
  [cc + ch + cy]: ch + cy, // hy
  [cc + ch + cz]: ch + cz, // hz

  [cc + cH + ca]: cH + ca, // Ha
  [cc + cH + cb]: cH + cb, // Hb
  [cc + cH + cc]: cH + cc, // Hc
  [cc + cH + cd]: cH + cd, // Hd
  [cc + cH + ce]: cH + ce, // He
  [cc + cH + cf]: cH + cf, // Hf
  [cc + cH + cg]: cH + cg, // Hg
  [cc + cH + ch]: cH + ch, // Hh
  [cc + cH + ci]: cH + ci, // Hi
  [cc + cH + cj]: cH + cj, // Hj
  [cc + cH + ck]: cH + ck, // Hk
  [cc + cH + cl]: cH + cl, // Hl
  [cc + cH + cm]: cH + cm, // Hm
  [cc + cH + cn]: cH + cn, // Hn
  [cc + cH + co]: cH + co, // Ho
  [cc + cH + cp]: cH + cp, // Hp
  [cc + cH + cq]: cH + cq, // Hq
  [cc + cH + cr]: cH + cr, // Hr
  [cc + cH + cs]: cH + cs, // Hs
  [cc + cH + ct]: cH + ct, // Ht
  [cc + cH + cu]: cH + cu, // Hu
  [cc + cH + cv]: cH + cv, // Hv
  [cc + cH + cw]: cH + cw, // Hw
  [cc + cH + cx]: cH + cx, // Hx
  [cc + cH + cy]: cH + cy, // Hy
  [cc + cH + cz]: cH + cz, // Hz

  [cc + ch + cA]: ch + cA, // hA
  [cc + ch + cB]: ch + cB, // hB
  [cc + ch + cC]: ch + cC, // hC
  [cc + ch + cD]: ch + cD, // hD
  [cc + ch + cE]: ch + cE, // hE
  [cc + ch + cF]: ch + cF, // hF
  [cc + ch + cG]: ch + cG, // hG
  [cc + ch + cH]: ch + cH, // hH
  [cc + ch + cI]: ch + cI, // hI
  [cc + ch + cJ]: ch + cJ, // hJ
  [cc + ch + cK]: ch + cK, // hK
  [cc + ch + cL]: ch + cL, // hL
  [cc + ch + cM]: ch + cM, // hM
  [cc + ch + cN]: ch + cN, // hN
  [cc + ch + cO]: ch + cO, // hO
  [cc + ch + cP]: ch + cP, // hP
  [cc + ch + cQ]: ch + cQ, // hQ
  [cc + ch + cR]: ch + cR, // hR
  [cc + ch + cS]: ch + cS, // hS
  [cc + ch + cT]: ch + cT, // hT
  [cc + ch + cU]: ch + cU, // hU
  [cc + ch + cV]: ch + cV, // hV
  [cc + ch + cW]: ch + cW, // hW
  [cc + ch + cX]: ch + cX, // hX
  [cc + ch + cY]: ch + cY, // hY
  [cc + ch + cZ]: ch + cZ, // hZ

  [cc + cH + cA]: cH + cA, // HA
  [cc + cH + cB]: cH + cB, // HB
  [cc + cH + cC]: cH + cC, // HC
  [cc + cH + cD]: cH + cD, // HD
  [cc + cH + cE]: cH + cE, // HE
  [cc + cH + cF]: cH + cF, // HF
  [cc + cH + cG]: cH + cG, // HG
  [cc + cH + cH]: cH + cH, // HH
  [cc + cH + cI]: cH + cI, // HI
  [cc + cH + cJ]: cH + cJ, // HJ
  [cc + cH + cK]: cH + cK, // HK
  [cc + cH + cL]: cH + cL, // HL
  [cc + cH + cM]: cH + cM, // HM
  [cc + cH + cN]: cH + cN, // HN
  [cc + cH + cO]: cH + cO, // HO
  [cc + cH + cP]: cH + cP, // HP
  [cc + cH + cQ]: cH + cQ, // HQ
  [cc + cH + cR]: cH + cR, // HR
  [cc + cH + cS]: cH + cS, // HS
  [cc + cH + cT]: cH + cT, // HT
  [cc + cH + cU]: cH + cU, // HU
  [cc + cH + cV]: cH + cV, // HV
  [cc + cH + cW]: cH + cW, // HW
  [cc + cH + cX]: cH + cX, // HX
  [cc + cH + cY]: cH + cY, // HY
  [cc + cH + cZ]: cH + cZ, // HZ

  // ia-IA
  [cc + ci + ca]: ci + ca, // ia
  [cc + ci + cb]: ci + cb, // ib
  [cc + ci + cc]: ci + cc, // ic
  [cc + ci + cd]: ci + cd, // id
  [cc + ci + ce]: ci + ce, // ie
  [cc + ci + cf]: ci + cf, // if
  [cc + ci + cg]: ci + cg, // ig
  [cc + ci + ch]: ci + ch, // ih
  [cc + ci + ci]: ci + ci, // ii
  [cc + ci + cj]: ci + cj, // ij
  [cc + ci + ck]: ci + ck, // ik
  [cc + ci + cl]: ci + cl, // il
  [cc + ci + cm]: ci + cm, // im
  [cc + ci + cn]: ci + cn, // in
  [cc + ci + co]: ci + co, // io
  [cc + ci + cp]: ci + cp, // ip
  [cc + ci + cq]: ci + cq, // iq
  [cc + ci + cr]: ci + cr, // ir
  [cc + ci + cs]: ci + cs, // is
  [cc + ci + ct]: ci + ct, // it
  [cc + ci + cu]: ci + cu, // iu
  [cc + ci + cv]: ci + cv, // iv
  [cc + ci + cw]: ci + cw, // iw
  [cc + ci + cx]: ci + cx, // ix
  [cc + ci + cy]: ci + cy, // iy
  [cc + ci + cz]: ci + cz, // iz

  [cc + cI + ca]: cI + ca, // Ia
  [cc + cI + cb]: cI + cb, // Ib
  [cc + cI + cc]: cI + cc, // Ic
  [cc + cI + cd]: cI + cd, // Id
  [cc + cI + ce]: cI + ce, // Ie
  [cc + cI + cf]: cI + cf, // If
  [cc + cI + cg]: cI + cg, // Ig
  [cc + cI + ch]: cI + ch, // Ih
  [cc + cI + ci]: cI + ci, // Ii
  [cc + cI + cj]: cI + cj, // Ij
  [cc + cI + ck]: cI + ck, // Ik
  [cc + cI + cl]: cI + cl, // Il
  [cc + cI + cm]: cI + cm, // Im
  [cc + cI + cn]: cI + cn, // In
  [cc + cI + co]: cI + co, // Io
  [cc + cI + cp]: cI + cp, // Ip
  [cc + cI + cq]: cI + cq, // Iq
  [cc + cI + cr]: cI + cr, // Ir
  [cc + cI + cs]: cI + cs, // Is
  [cc + cI + ct]: cI + ct, // It
  [cc + cI + cu]: cI + cu, // Iu
  [cc + cI + cv]: cI + cv, // Iv
  [cc + cI + cw]: cI + cw, // Iw
  [cc + cI + cx]: cI + cx, // Ix
  [cc + cI + cy]: cI + cy, // Iy
  [cc + cI + cz]: cI + cz, // Iz

  [cc + ci + cA]: ci + cA, // iA
  [cc + ci + cB]: ci + cB, // iB
  [cc + ci + cC]: ci + cC, // iC
  [cc + ci + cD]: ci + cD, // iD
  [cc + ci + cE]: ci + cE, // iE
  [cc + ci + cF]: ci + cF, // iF
  [cc + ci + cG]: ci + cG, // iG
  [cc + ci + cH]: ci + cH, // iH
  [cc + ci + cI]: ci + cI, // iI
  [cc + ci + cJ]: ci + cJ, // iJ
  [cc + ci + cK]: ci + cK, // iK
  [cc + ci + cL]: ci + cL, // iL
  [cc + ci + cM]: ci + cM, // iM
  [cc + ci + cN]: ci + cN, // iN
  [cc + ci + cO]: ci + cO, // iO
  [cc + ci + cP]: ci + cP, // iP
  [cc + ci + cQ]: ci + cQ, // iQ
  [cc + ci + cR]: ci + cR, // iR
  [cc + ci + cS]: ci + cS, // iS
  [cc + ci + cT]: ci + cT, // iT
  [cc + ci + cU]: ci + cU, // iU
  [cc + ci + cV]: ci + cV, // iV
  [cc + ci + cW]: ci + cW, // iW
  [cc + ci + cX]: ci + cX, // iX
  [cc + ci + cY]: ci + cY, // iY
  [cc + ci + cZ]: ci + cZ, // iZ

  [cc + cI + cA]: cI + cA, // IA
  [cc + cI + cB]: cI + cB, // IB
  [cc + cI + cC]: cI + cC, // IC
  [cc + cI + cD]: cI + cD, // ID
  [cc + cI + cE]: cI + cE, // IE
  [cc + cI + cF]: cI + cF, // IF
  [cc + cI + cG]: cI + cG, // IG
  [cc + cI + cH]: cI + cH, // IH
  [cc + cI + cI]: cI + cI, // II
  [cc + cI + cJ]: cI + cJ, // IJ
  [cc + cI + cK]: cI + cK, // IK
  [cc + cI + cL]: cI + cL, // IL
  [cc + cI + cM]: cI + cM, // IM
  [cc + cI + cN]: cI + cN, // IN
  [cc + cI + cO]: cI + cO, // IO
  [cc + cI + cP]: cI + cP, // IP
  [cc + cI + cQ]: cI + cQ, // IQ
  [cc + cI + cR]: cI + cR, // IR
  [cc + cI + cS]: cI + cS, // IS
  [cc + cI + cT]: cI + cT, // IT
  [cc + cI + cU]: cI + cU, // IU
  [cc + cI + cV]: cI + cV, // IV
  [cc + cI + cW]: cI + cW, // IW
  [cc + cI + cX]: cI + cX, // IX
  [cc + cI + cY]: cI + cY, // IY
  [cc + cI + cZ]: cI + cZ, // IZ

  // ja-JA
  [cc + cj + ca]: cj + ca, // ja
  [cc + cj + cb]: cj + cb, // jb
  [cc + cj + cc]: cj + cc, // jc
  [cc + cj + cd]: cj + cd, // jd
  [cc + cj + ce]: cj + ce, // je
  [cc + cj + cf]: cj + cf, // jf
  [cc + cj + cg]: cj + cg, // jg
  [cc + cj + ch]: cj + ch, // jh
  [cc + cj + ci]: cj + ci, // ji
  [cc + cj + cj]: cj + cj, // jj
  [cc + cj + ck]: cj + ck, // jk
  [cc + cj + cl]: cj + cl, // jl
  [cc + cj + cm]: cj + cm, // jm
  [cc + cj + cn]: cj + cn, // jn
  [cc + cj + co]: cj + co, // jo
  [cc + cj + cp]: cj + cp, // jp
  [cc + cj + cq]: cj + cq, // jq
  [cc + cj + cr]: cj + cr, // jr
  [cc + cj + cs]: cj + cs, // js
  [cc + cj + ct]: cj + ct, // jt
  [cc + cj + cu]: cj + cu, // ju
  [cc + cj + cv]: cj + cv, // jv
  [cc + cj + cw]: cj + cw, // jw
  [cc + cj + cx]: cj + cx, // jx
  [cc + cj + cy]: cj + cy, // jy
  [cc + cj + cz]: cj + cz, // jz

  [cc + cJ + ca]: cJ + ca, // Ja
  [cc + cJ + cb]: cJ + cb, // Jb
  [cc + cJ + cc]: cJ + cc, // Jc
  [cc + cJ + cd]: cJ + cd, // Jd
  [cc + cJ + ce]: cJ + ce, // Je
  [cc + cJ + cf]: cJ + cf, // Jf
  [cc + cJ + cg]: cJ + cg, // Jg
  [cc + cJ + ch]: cJ + ch, // Jh
  [cc + cJ + ci]: cJ + ci, // Ji
  [cc + cJ + cj]: cJ + cj, // Jj
  [cc + cJ + ck]: cJ + ck, // Jk
  [cc + cJ + cl]: cJ + cl, // Jl
  [cc + cJ + cm]: cJ + cm, // Jm
  [cc + cJ + cn]: cJ + cn, // Jn
  [cc + cJ + co]: cJ + co, // Jo
  [cc + cJ + cp]: cJ + cp, // Jp
  [cc + cJ + cq]: cJ + cq, // Jq
  [cc + cJ + cr]: cJ + cr, // Jr
  [cc + cJ + cs]: cJ + cs, // Js
  [cc + cJ + ct]: cJ + ct, // Jt
  [cc + cJ + cu]: cJ + cu, // Ju
  [cc + cJ + cv]: cJ + cv, // Jv
  [cc + cJ + cw]: cJ + cw, // Jw
  [cc + cJ + cx]: cJ + cx, // Jx
  [cc + cJ + cy]: cJ + cy, // Jy
  [cc + cJ + cz]: cJ + cz, // Jz

  [cc + cj + cA]: cj + cA, // jA
  [cc + cj + cB]: cj + cB, // jB
  [cc + cj + cC]: cj + cC, // jC
  [cc + cj + cD]: cj + cD, // jD
  [cc + cj + cE]: cj + cE, // jE
  [cc + cj + cF]: cj + cF, // jF
  [cc + cj + cG]: cj + cG, // jG
  [cc + cj + cH]: cj + cH, // jH
  [cc + cj + cI]: cj + cI, // jI
  [cc + cj + cJ]: cj + cJ, // jJ
  [cc + cj + cK]: cj + cK, // jK
  [cc + cj + cL]: cj + cL, // jL
  [cc + cj + cM]: cj + cM, // jM
  [cc + cj + cN]: cj + cN, // jN
  [cc + cj + cO]: cj + cO, // jO
  [cc + cj + cP]: cj + cP, // jP
  [cc + cj + cQ]: cj + cQ, // jQ
  [cc + cj + cR]: cj + cR, // jR
  [cc + cj + cS]: cj + cS, // jS
  [cc + cj + cT]: cj + cT, // jT
  [cc + cj + cU]: cj + cU, // jU
  [cc + cj + cV]: cj + cV, // jV
  [cc + cj + cW]: cj + cW, // jW
  [cc + cj + cX]: cj + cX, // jX
  [cc + cj + cY]: cj + cY, // jY
  [cc + cj + cZ]: cj + cZ, // jZ

  [cc + cJ + cA]: cJ + cA, // JA
  [cc + cJ + cB]: cJ + cB, // JB
  [cc + cJ + cC]: cJ + cC, // JC
  [cc + cJ + cD]: cJ + cD, // JD
  [cc + cJ + cE]: cJ + cE, // JE
  [cc + cJ + cF]: cJ + cF, // JF
  [cc + cJ + cG]: cJ + cG, // JG
  [cc + cJ + cH]: cJ + cH, // JH
  [cc + cJ + cI]: cJ + cI, // JI
  [cc + cJ + cJ]: cJ + cJ, // JJ
  [cc + cJ + cK]: cJ + cK, // JK
  [cc + cJ + cL]: cJ + cL, // JL
  [cc + cJ + cM]: cJ + cM, // JM
  [cc + cJ + cN]: cJ + cN, // JN
  [cc + cJ + cO]: cJ + cO, // JO
  [cc + cJ + cP]: cJ + cP, // JP
  [cc + cJ + cQ]: cJ + cQ, // JQ
  [cc + cJ + cR]: cJ + cR, // JR
  [cc + cJ + cS]: cJ + cS, // JS
  [cc + cJ + cT]: cJ + cT, // JT
  [cc + cJ + cU]: cJ + cU, // JU
  [cc + cJ + cV]: cJ + cV, // JV
  [cc + cJ + cW]: cJ + cW, // JW
  [cc + cJ + cX]: cJ + cX, // JX
  [cc + cJ + cY]: cJ + cY, // JY
  [cc + cJ + cZ]: cJ + cZ, // JZ

  // ka-KA
  [cc + ck + ca]: ck + ca, // ka
  [cc + ck + cb]: ck + cb, // kb
  [cc + ck + cc]: ck + cc, // kc
  [cc + ck + cd]: ck + cd, // kd
  [cc + ck + ce]: ck + ce, // ke
  [cc + ck + cf]: ck + cf, // kf
  [cc + ck + cg]: ck + cg, // kg
  [cc + ck + ch]: ck + ch, // kh
  [cc + ck + ci]: ck + ci, // ki
  [cc + ck + cj]: ck + cj, // kj
  [cc + ck + ck]: ck + ck, // kk
  [cc + ck + cl]: ck + cl, // kl
  [cc + ck + cm]: ck + cm, // km
  [cc + ck + cn]: ck + cn, // kn
  [cc + ck + co]: ck + co, // ko
  [cc + ck + cp]: ck + cp, // kp
  [cc + ck + cq]: ck + cq, // kq
  [cc + ck + cr]: ck + cr, // kr
  [cc + ck + cs]: ck + cs, // ks
  [cc + ck + ct]: ck + ct, // kt
  [cc + ck + cu]: ck + cu, // ku
  [cc + ck + cv]: ck + cv, // kv
  [cc + ck + cw]: ck + cw, // kw
  [cc + ck + cx]: ck + cx, // kx
  [cc + ck + cy]: ck + cy, // ky
  [cc + ck + cz]: ck + cz, // kz

  [cc + cK + ca]: cK + ca, // Ka
  [cc + cK + cb]: cK + cb, // Kb
  [cc + cK + cc]: cK + cc, // Kc
  [cc + cK + cd]: cK + cd, // Kd
  [cc + cK + ce]: cK + ce, // Ke
  [cc + cK + cf]: cK + cf, // Kf
  [cc + cK + cg]: cK + cg, // Kg
  [cc + cK + ch]: cK + ch, // Kh
  [cc + cK + ci]: cK + ci, // Ki
  [cc + cK + cj]: cK + cj, // Kj
  [cc + cK + ck]: cK + ck, // Kk
  [cc + cK + cl]: cK + cl, // Kl
  [cc + cK + cm]: cK + cm, // Km
  [cc + cK + cn]: cK + cn, // Kn
  [cc + cK + co]: cK + co, // Ko
  [cc + cK + cp]: cK + cp, // Kp
  [cc + cK + cq]: cK + cq, // Kq
  [cc + cK + cr]: cK + cr, // Kr
  [cc + cK + cs]: cK + cs, // Ks
  [cc + cK + ct]: cK + ct, // Kt
  [cc + cK + cu]: cK + cu, // Ku
  [cc + cK + cv]: cK + cv, // Kv
  [cc + cK + cw]: cK + cw, // Kw
  [cc + cK + cx]: cK + cx, // Kx
  [cc + cK + cy]: cK + cy, // Ky
  [cc + cK + cz]: cK + cz, // Kz

  [cc + ck + cA]: ck + cA, // kA
  [cc + ck + cB]: ck + cB, // kB
  [cc + ck + cC]: ck + cC, // kC
  [cc + ck + cD]: ck + cD, // kD
  [cc + ck + cE]: ck + cE, // kE
  [cc + ck + cF]: ck + cF, // kF
  [cc + ck + cG]: ck + cG, // kG
  [cc + ck + cH]: ck + cH, // kH
  [cc + ck + cI]: ck + cI, // kI
  [cc + ck + cJ]: ck + cJ, // kJ
  [cc + ck + cK]: ck + cK, // kK
  [cc + ck + cL]: ck + cL, // kL
  [cc + ck + cM]: ck + cM, // kM
  [cc + ck + cN]: ck + cN, // kN
  [cc + ck + cO]: ck + cO, // kO
  [cc + ck + cP]: ck + cP, // kP
  [cc + ck + cQ]: ck + cQ, // kQ
  [cc + ck + cR]: ck + cR, // kR
  [cc + ck + cS]: ck + cS, // kS
  [cc + ck + cT]: ck + cT, // kT
  [cc + ck + cU]: ck + cU, // kU
  [cc + ck + cV]: ck + cV, // kV
  [cc + ck + cW]: ck + cW, // kW
  [cc + ck + cX]: ck + cX, // kX
  [cc + ck + cY]: ck + cY, // kY
  [cc + ck + cZ]: ck + cZ, // kZ

  [cc + cK + cA]: cK + cA, // KA
  [cc + cK + cB]: cK + cB, // KB
  [cc + cK + cC]: cK + cC, // KC
  [cc + cK + cD]: cK + cD, // KD
  [cc + cK + cE]: cK + cE, // KE
  [cc + cK + cF]: cK + cF, // KF
  [cc + cK + cG]: cK + cG, // KG
  [cc + cK + cH]: cK + cH, // KH
  [cc + cK + cI]: cK + cI, // KI
  [cc + cK + cJ]: cK + cJ, // KJ
  [cc + cK + cK]: cK + cK, // KK
  [cc + cK + cL]: cK + cL, // KL
  [cc + cK + cM]: cK + cM, // KM
  [cc + cK + cN]: cK + cN, // KN
  [cc + cK + cO]: cK + cO, // KO
  [cc + cK + cP]: cK + cP, // KP
  [cc + cK + cQ]: cK + cQ, // KQ
  [cc + cK + cR]: cK + cR, // KR
  [cc + cK + cS]: cK + cS, // KS
  [cc + cK + cT]: cK + cT, // KT
  [cc + cK + cU]: cK + cU, // KU
  [cc + cK + cV]: cK + cV, // KV
  [cc + cK + cW]: cK + cW, // KW
  [cc + cK + cX]: cK + cX, // KX
  [cc + cK + cY]: cK + cY, // KY
  [cc + cK + cZ]: cK + cZ, // KZ

  // la-LA
  [cc + cl + ca]: cl + ca, // la
  [cc + cl + cb]: cl + cb, // lb
  [cc + cl + cc]: cl + cc, // lc
  [cc + cl + cd]: cl + cd, // ld
  [cc + cl + ce]: cl + ce, // le
  [cc + cl + cf]: cl + cf, // lf
  [cc + cl + cg]: cl + cg, // lg
  [cc + cl + ch]: cl + ch, // lh
  [cc + cl + ci]: cl + ci, // li
  [cc + cl + cj]: cl + cj, // lj
  [cc + cl + ck]: cl + ck, // lk
  [cc + cl + cl]: cl + cl, // ll
  [cc + cl + cm]: cl + cm, // lm
  [cc + cl + cn]: cl + cn, // ln
  [cc + cl + co]: cl + co, // lo
  [cc + cl + cp]: cl + cp, // lp
  [cc + cl + cq]: cl + cq, // lq
  [cc + cl + cr]: cl + cr, // lr
  [cc + cl + cs]: cl + cs, // ls
  [cc + cl + ct]: cl + ct, // lt
  [cc + cl + cu]: cl + cu, // lu
  [cc + cl + cv]: cl + cv, // lv
  [cc + cl + cw]: cl + cw, // lw
  [cc + cl + cx]: cl + cx, // lx
  [cc + cl + cy]: cl + cy, // ly
  [cc + cl + cz]: cl + cz, // lz

  [cc + cL + ca]: cL + ca, // La
  [cc + cL + cb]: cL + cb, // Lb
  [cc + cL + cc]: cL + cc, // Lc
  [cc + cL + cd]: cL + cd, // Ld
  [cc + cL + ce]: cL + ce, // Le
  [cc + cL + cf]: cL + cf, // Lf
  [cc + cL + cg]: cL + cg, // Lg
  [cc + cL + ch]: cL + ch, // Lh
  [cc + cL + ci]: cL + ci, // Li
  [cc + cL + cj]: cL + cj, // Lj
  [cc + cL + ck]: cL + ck, // Lk
  [cc + cL + cl]: cL + cl, // Ll
  [cc + cL + cm]: cL + cm, // Lm
  [cc + cL + cn]: cL + cn, // Ln
  [cc + cL + co]: cL + co, // Lo
  [cc + cL + cp]: cL + cp, // Lp
  [cc + cL + cq]: cL + cq, // Lq
  [cc + cL + cr]: cL + cr, // Lr
  [cc + cL + cs]: cL + cs, // Ls
  [cc + cL + ct]: cL + ct, // Lt
  [cc + cL + cu]: cL + cu, // Lu
  [cc + cL + cv]: cL + cv, // Lv
  [cc + cL + cw]: cL + cw, // Lw
  [cc + cL + cx]: cL + cx, // Lx
  [cc + cL + cy]: cL + cy, // Ly
  [cc + cL + cz]: cL + cz, // Lz

  [cc + cl + cA]: cl + cA, // lA
  [cc + cl + cB]: cl + cB, // lB
  [cc + cl + cC]: cl + cC, // lC
  [cc + cl + cD]: cl + cD, // lD
  [cc + cl + cE]: cl + cE, // lE
  [cc + cl + cF]: cl + cF, // lF
  [cc + cl + cG]: cl + cG, // lG
  [cc + cl + cH]: cl + cH, // lH
  [cc + cl + cI]: cl + cI, // lI
  [cc + cl + cJ]: cl + cJ, // lJ
  [cc + cl + cK]: cl + cK, // lK
  [cc + cl + cL]: cl + cL, // lL
  [cc + cl + cM]: cl + cM, // lM
  [cc + cl + cN]: cl + cN, // lN
  [cc + cl + cO]: cl + cO, // lO
  [cc + cl + cP]: cl + cP, // lP
  [cc + cl + cQ]: cl + cQ, // lQ
  [cc + cl + cR]: cl + cR, // lR
  [cc + cl + cS]: cl + cS, // lS
  [cc + cl + cT]: cl + cT, // lT
  [cc + cl + cU]: cl + cU, // lU
  [cc + cl + cV]: cl + cV, // lV
  [cc + cl + cW]: cl + cW, // lW
  [cc + cl + cX]: cl + cX, // lX
  [cc + cl + cY]: cl + cY, // lY
  [cc + cl + cZ]: cl + cZ, // lZ

  [cc + cL + cA]: cL + cA, // LA
  [cc + cL + cB]: cL + cB, // LB
  [cc + cL + cC]: cL + cC, // LC
  [cc + cL + cD]: cL + cD, // LD
  [cc + cL + cE]: cL + cE, // LE
  [cc + cL + cF]: cL + cF, // LF
  [cc + cL + cG]: cL + cG, // LG
  [cc + cL + cH]: cL + cH, // LH
  [cc + cL + cI]: cL + cI, // LI
  [cc + cL + cJ]: cL + cJ, // LJ
  [cc + cL + cK]: cL + cK, // LK
  [cc + cL + cL]: cL + cL, // LL
  [cc + cL + cM]: cL + cM, // LM
  [cc + cL + cN]: cL + cN, // LN
  [cc + cL + cO]: cL + cO, // LO
  [cc + cL + cP]: cL + cP, // LP
  [cc + cL + cQ]: cL + cQ, // LQ
  [cc + cL + cR]: cL + cR, // LR
  [cc + cL + cS]: cL + cS, // LS
  [cc + cL + cT]: cL + cT, // LT
  [cc + cL + cU]: cL + cU, // LU
  [cc + cL + cV]: cL + cV, // LV
  [cc + cL + cW]: cL + cW, // LW
  [cc + cL + cX]: cL + cX, // LX
  [cc + cL + cY]: cL + cY, // LY
  [cc + cL + cZ]: cL + cZ, // LZ

  // ma-MA
  [cc + cm + ca]: cm + ca, // ma
  [cc + cm + cb]: cm + cb, // mb
  [cc + cm + cc]: cm + cc, // mc
  [cc + cm + cd]: cm + cd, // md
  [cc + cm + ce]: cm + ce, // me
  [cc + cm + cf]: cm + cf, // mf
  [cc + cm + cg]: cm + cg, // mg
  [cc + cm + ch]: cm + ch, // mh
  [cc + ca + cm + ca + ci]: cm + ci, // 'mi', // cm + ci; // mi
  [cc + cm + cj]: cm + cj, // mj
  [cc + cm + ck]: cm + ck, // mk
  [cc + cm + cl]: cm + cl, // ml
  [cc + cm + cm]: cm + cm, // mm
  [cc + cm + cn]: cm + cn, // mn
  [cc + cm + co]: cm + co, // mo
  [cc + cm + cp]: cm + cp, // mp
  [cc + cm + cq]: cm + cq, // mq
  [cc + cm + cr]: cm + cr, // mr
  [cc + cm + cs]: cm + cs, // ms
  [cc + cm + ct]: cm + ct, // mt
  [cc + cm + cu]: cm + cu, // mu
  [cc + cm + cv]: cm + cv, // mv
  [cc + cm + cw]: cm + cw, // mw
  [cc + cm + cx]: cm + cx, // mx
  [cc + cm + cy]: cm + cy, // my
  [cc + cm + cz]: cm + cz, // mz

  [cc + cM + ca]: cM + ca, // Ma
  [cc + cM + cb]: cM + cb, // Mb
  [cc + cM + cc]: cM + cc, // Mc
  [cc + cM + cd]: cM + cd, // Md
  [cc + cM + ce]: cM + ce, // Me
  [cc + cM + cf]: cM + cf, // Mf
  [cc + cM + cg]: cM + cg, // Mg
  [cc + cM + ch]: cM + ch, // Mh
  [cc + cM + ci]: cM + ci, // Mi
  [cc + cM + cj]: cM + cj, // Mj
  [cc + cM + ck]: cM + ck, // Mk
  [cc + cM + cl]: cM + cl, // Ml
  [cc + cM + cm]: cM + cm, // Mm
  [cc + cM + cn]: cM + cn, // Mn
  [cc + cM + co]: cM + co, // Mo
  [cc + cM + cp]: cM + cp, // Mp
  [cc + cM + cq]: cM + cq, // Mq
  [cc + cM + cr]: cM + cr, // Mr
  [cc + cM + cs]: cM + cs, // Ms
  [cc + cM + ct]: cM + ct, // Mt
  [cc + cM + cu]: cM + cu, // Mu
  [cc + cM + cv]: cM + cv, // Mv
  [cc + cM + cw]: cM + cw, // Mw
  [cc + cM + cx]: cM + cx, // Mx
  [cc + cM + cy]: cM + cy, // My
  [cc + cM + cz]: cM + cz, // Mz

  [cc + cm + cA]: cm + cA, // mA
  [cc + cm + cB]: cm + cB, // mB
  [cc + cm + cC]: cm + cC, // mC
  [cc + cm + cD]: cm + cD, // mD
  [cc + cm + cE]: cm + cE, // mE
  [cc + cm + cF]: cm + cF, // mF
  [cc + cm + cG]: cm + cG, // mG
  [cc + cm + cH]: cm + cH, // mH
  [cc + cm + cI]: cm + cI, // mI
  [cc + cm + cJ]: cm + cJ, // mJ
  [cc + cm + cK]: cm + cK, // mK
  [cc + cm + cL]: cm + cL, // mL
  [cc + cm + cM]: cm + cM, // mM
  [cc + cm + cN]: cm + cN, // mN
  [cc + cm + cO]: cm + cO, // mO
  [cc + cm + cP]: cm + cP, // mP
  [cc + cm + cQ]: cm + cQ, // mQ
  [cc + cm + cR]: cm + cR, // mR
  [cc + cm + cS]: cm + cS, // mS
  [cc + cm + cT]: cm + cT, // mT
  [cc + cm + cU]: cm + cU, // mU
  [cc + cm + cV]: cm + cV, // mV
  [cc + cm + cW]: cm + cW, // mW
  [cc + cm + cX]: cm + cX, // mX
  [cc + cm + cY]: cm + cY, // mY
  [cc + cm + cZ]: cm + cZ, // mZ

  [cc + cM + cA]: cM + cA, // MA
  [cc + cM + cB]: cM + cB, // MB
  [cc + cM + cC]: cM + cC, // MC
  [cc + cM + cD]: cM + cD, // MD
  [cc + cM + cE]: cM + cE, // ME
  [cc + cM + cF]: cM + cF, // MF
  [cc + cM + cG]: cM + cG, // MG
  [cc + cM + cH]: cM + cH, // MH
  [cc + cM + cI]: cM + cI, // MI
  [cc + cM + cJ]: cM + cJ, // MJ
  [cc + cM + cK]: cM + cK, // MK
  [cc + cM + cL]: cM + cL, // ML
  [cc + cM + cM]: cM + cM, // MM
  [cc + cM + cN]: cM + cN, // MN
  [cc + cM + cO]: cM + cO, // MO
  [cc + cM + cP]: cM + cP, // MP
  [cc + cM + cQ]: cM + cQ, // MQ
  [cc + cM + cR]: cM + cR, // MR
  [cc + cM + cS]: cM + cS, // MS
  [cc + cM + cT]: cM + cT, // MT
  [cc + cM + cU]: cM + cU, // MU
  [cc + cM + cV]: cM + cV, // MV
  [cc + cM + cW]: cM + cW, // MW
  [cc + cM + cX]: cM + cX, // MX
  [cc + cM + cY]: cM + cY, // MY
  [cc + cM + cZ]: cM + cZ, // MZ

  // na-NA
  [cc + cn + ca]: cn + ca, // na
  [cc + cn + cb]: cn + cb, // nb
  [cc + cn + cc]: cn + cc, // nc
  [cc + cn + cd]: cn + cd, // nd
  [cc + cn + ce]: cn + ce, // ne
  [cc + cn + cf]: cn + cf, // nf
  [cc + cn + cg]: cn + cg, // ng
  [cc + cn + ch]: cn + ch, // nh
  [cc + cn + ci]: cn + ci, // ni
  [cc + cn + cj]: cn + cj, // nj
  [cc + cn + ck]: cn + ck, // nk
  [cc + cn + cl]: cn + cl, // nl
  [cc + cn + cm]: cn + cm, // nm
  [cc + cn + cn]: cn + cn, // nn
  [cc + cn + co]: cn + co, // no
  [cc + cn + cp]: cn + cp, // np
  [cc + cn + cq]: cn + cq, // nq
  [cc + cn + cr]: cn + cr, // nr
  [cc + cn + cs]: cn + cs, // ns
  [cc + cn + ct]: cn + ct, // nt
  [cc + cn + cu]: cn + cu, // nu
  [cc + cn + cv]: cn + cv, // nv
  [cc + cn + cw]: cn + cw, // nw
  [cc + cn + cx]: cn + cx, // nx
  [cc + cn + cy]: cn + cy, // ny
  [cc + cn + cz]: cn + cz, // nz

  [cc + cN + ca]: cN + ca, // Na
  [cc + cN + cb]: cN + cb, // Nb
  [cc + cN + cc]: cN + cc, // Nc
  [cc + cN + cd]: cN + cd, // Nd
  [cc + cN + ce]: cN + ce, // Ne
  [cc + cN + cf]: cN + cf, // Nf
  [cc + cN + cg]: cN + cg, // Ng
  [cc + cN + ch]: cN + ch, // Nh
  [cc + cN + ci]: cN + ci, // Ni
  [cc + cN + cj]: cN + cj, // Nj
  [cc + cN + ck]: cN + ck, // Nk
  [cc + cN + cl]: cN + cl, // Nl
  [cc + cN + cm]: cN + cm, // Nm
  [cc + cN + cn]: cN + cn, // Nn
  [cc + cN + co]: cN + co, // No
  [cc + cN + cp]: cN + cp, // Np
  [cc + cN + cq]: cN + cq, // Nq
  [cc + cN + cr]: cN + cr, // Nr
  [cc + cN + cs]: cN + cs, // Ns
  [cc + cN + ct]: cN + ct, // Nt
  [cc + cN + cu]: cN + cu, // Nu
  [cc + cN + cv]: cN + cv, // Nv
  [cc + cN + cw]: cN + cw, // Nw
  [cc + cN + cx]: cN + cx, // Nx
  [cc + cN + cy]: cN + cy, // Ny
  [cc + cN + cz]: cN + cz, // Nz

  [cc + cn + cA]: cn + cA, // nA
  [cc + cn + cB]: cn + cB, // nB
  [cc + cn + cC]: cn + cC, // nC
  [cc + cn + cD]: cn + cD, // nD
  [cc + cn + cE]: cn + cE, // nE
  [cc + cn + cF]: cn + cF, // nF
  [cc + cn + cG]: cn + cG, // nG
  [cc + cn + cH]: cn + cH, // nH
  [cc + cn + cI]: cn + cI, // nI
  [cc + cn + cJ]: cn + cJ, // nJ
  [cc + cn + cK]: cn + cK, // nK
  [cc + cn + cL]: cn + cL, // nL
  [cc + cn + cM]: cn + cM, // nM
  [cc + cn + cN]: cn + cN, // nN
  [cc + cn + cO]: cn + cO, // nO
  [cc + cn + cP]: cn + cP, // nP
  [cc + cn + cQ]: cn + cQ, // nQ
  [cc + cn + cR]: cn + cR, // nR
  [cc + cn + cS]: cn + cS, // nS
  [cc + cn + cT]: cn + cT, // nT
  [cc + cn + cU]: cn + cU, // nU
  [cc + cn + cV]: cn + cV, // nV
  [cc + cn + cW]: cn + cW, // nW
  [cc + cn + cX]: cn + cX, // nX
  [cc + cn + cY]: cn + cY, // nY
  [cc + cn + cZ]: cn + cZ, // nZ

  [cc + cN + cA]: cN + cA, // NA
  [cc + cN + cB]: cN + cB, // NB
  [cc + cN + cC]: cN + cC, // NC
  [cc + cN + cD]: cN + cD, // ND
  [cc + cN + cE]: cN + cE, // NE
  [cc + cN + cF]: cN + cF, // NF
  [cc + cN + cG]: cN + cG, // NG
  [cc + cN + cH]: cN + cH, // NH
  [cc + cN + cI]: cN + cI, // NI
  [cc + cN + cJ]: cN + cJ, // NJ
  [cc + cN + cK]: cN + cK, // NK
  [cc + cN + cL]: cN + cL, // NL
  [cc + cN + cM]: cN + cM, // NM
  [cc + cN + cN]: cN + cN, // NN
  [cc + cN + cO]: cN + cO, // NO
  [cc + cN + cP]: cN + cP, // NP
  [cc + cN + cQ]: cN + cQ, // NQ
  [cc + cN + cR]: cN + cR, // NR
  [cc + cN + cS]: cN + cS, // NS
  [cc + cN + cT]: cN + cT, // NT
  [cc + cN + cU]: cN + cU, // NU
  [cc + cN + cV]: cN + cV, // NV
  [cc + cN + cW]: cN + cW, // NW
  [cc + cN + cX]: cN + cX, // NX
  [cc + cN + cY]: cN + cY, // NY
  [cc + cN + cZ]: cN + cZ, // NZ

  // oa-OA
  [cc + co + ca]: co + ca, // oa
  [cc + co + cb]: co + cb, // ob
  [cc + co + cc]: co + cc, // oc
  [cc + co + cd]: co + cd, // od
  [cc + co + ce]: co + ce, // oe
  [cc + co + cf]: co + cf, // of
  [cc + co + cg]: co + cg, // og
  [cc + co + ch]: co + ch, // oh
  [cc + co + ci]: co + ci, // oi
  [cc + co + cj]: co + cj, // oj
  [cc + co + ck]: co + ck, // ok
  [cc + co + cl]: co + cl, // ol
  [cc + co + cm]: co + cm, // om
  [cc + co + cn]: co + cn, // on
  [cc + co + co]: co + co, // oo
  [cc + co + cp]: co + cp, // op
  [cc + co + cq]: co + cq, // oq
  [cc + co + cr]: co + cr, // or
  [cc + co + cs]: co + cs, // os
  [cc + co + ct]: co + ct, // ot
  [cc + co + cu]: co + cu, // ou
  [cc + co + cv]: co + cv, // ov
  [cc + co + cw]: co + cw, // ow
  [cc + co + cx]: co + cx, // ox
  [cc + co + cy]: co + cy, // oy
  [cc + co + cz]: co + cz, // oz

  [cc + cO + ca]: cO + ca, // Oa
  [cc + cO + cb]: cO + cb, // Ob
  [cc + cO + cc]: cO + cc, // Oc
  [cc + cO + cd]: cO + cd, // Od
  [cc + cO + ce]: cO + ce, // Oe
  [cc + cO + cf]: cO + cf, // Of
  [cc + cO + cg]: cO + cg, // Og
  [cc + cO + ch]: cO + ch, // Oh
  [cc + cO + ci]: cO + ci, // Oi
  [cc + cO + cj]: cO + cj, // Oj
  [cc + cO + ck]: cO + ck, // Ok
  [cc + cO + cl]: cO + cl, // Ol
  [cc + cO + cm]: cO + cm, // Om
  [cc + cO + cn]: cO + cn, // On
  [cc + cO + co]: cO + co, // Oo
  [cc + cO + cp]: cO + cp, // Op
  [cc + cO + cq]: cO + cq, // Oq
  [cc + cO + cr]: cO + cr, // Or
  [cc + cO + cs]: cO + cs, // Os
  [cc + cO + ct]: cO + ct, // Ot
  [cc + cO + cu]: cO + cu, // Ou
  [cc + cO + cv]: cO + cv, // Ov
  [cc + cO + cw]: cO + cw, // Ow
  [cc + cO + cx]: cO + cx, // Ox
  [cc + cO + cy]: cO + cy, // Oy
  [cc + cO + cz]: cO + cz, // Oz

  [cc + co + cA]: co + cA, // oA
  [cc + co + cB]: co + cB, // oB
  [cc + co + cC]: co + cC, // oC
  [cc + co + cD]: co + cD, // oD
  [cc + co + cE]: co + cE, // oE
  [cc + co + cF]: co + cF, // oF
  [cc + co + cG]: co + cG, // oG
  [cc + co + cH]: co + cH, // oH
  [cc + co + cI]: co + cI, // oI
  [cc + co + cJ]: co + cJ, // oJ
  [cc + co + cK]: co + cK, // oK
  [cc + co + cL]: co + cL, // oL
  [cc + co + cM]: co + cM, // oM
  [cc + co + cN]: co + cN, // oN
  [cc + co + cO]: co + cO, // oO
  [cc + co + cP]: co + cP, // oP
  [cc + co + cQ]: co + cQ, // oQ
  [cc + co + cR]: co + cR, // oR
  [cc + co + cS]: co + cS, // oS
  [cc + co + cT]: co + cT, // oT
  [cc + co + cU]: co + cU, // oU
  [cc + co + cV]: co + cV, // oV
  [cc + co + cW]: co + cW, // oW
  [cc + co + cX]: co + cX, // oX
  [cc + co + cY]: co + cY, // oY
  [cc + co + cZ]: co + cZ, // oZ

  [cc + cO + cA]: cO + cA, // OA
  [cc + cO + cB]: cO + cB, // OB
  [cc + cO + cC]: cO + cC, // OC
  [cc + cO + cD]: cO + cD, // OD
  [cc + cO + cE]: cO + cE, // OE
  [cc + cO + cF]: cO + cF, // OF
  [cc + cO + cG]: cO + cG, // OG
  [cc + cO + cH]: cO + cH, // OH
  [cc + cO + cI]: cO + cI, // OI
  [cc + cO + cJ]: cO + cJ, // OJ
  [cc + cO + cK]: cO + cK, // OK
  [cc + cO + cL]: cO + cL, // OL
  [cc + cO + cM]: cO + cM, // OM
  [cc + cO + cN]: cO + cN, // ON
  [cc + cO + cO]: cO + cO, // OO
  [cc + cO + cP]: cO + cP, // OP
  [cc + cO + cQ]: cO + cQ, // OQ
  [cc + cO + cR]: cO + cR, // OR
  [cc + cO + cS]: cO + cS, // OS
  [cc + cO + cT]: cO + cT, // OT
  [cc + cO + cU]: cO + cU, // OU
  [cc + cO + cV]: cO + cV, // OV
  [cc + cO + cW]: cO + cW, // OW
  [cc + cO + cX]: cO + cX, // OX
  [cc + cO + cY]: cO + cY, // OY
  [cc + cO + cZ]: cO + cZ, // OZ

  // pa-PA
  [cc + cp + ca]: cp + ca, // pa
  [cc + cp + cb]: cp + cb, // pb
  [cc + cp + cc]: cp + cc, // pc
  [cc + cp + cd]: cp + cd, // pd
  [cc + cp + ce]: cp + ce, // pe
  [cc + cp + cf]: cp + cf, // pf
  [cc + cp + cg]: cp + cg, // pg
  [cc + cp + ch]: cp + ch, // ph
  [cc + cp + ci]: cp + ci, // pi
  [cc + cp + cj]: cp + cj, // pj
  [cc + cp + ck]: cp + ck, // pk
  [cc + cp + cl]: cp + cl, // pl
  [cc + cp + cm]: cp + cm, // pm
  [cc + cp + cn]: cp + cn, // pn
  [cc + cp + co]: cp + co, // po
  [cc + cp + cp]: cp + cp, // pp
  [cc + cp + cq]: cp + cq, // pq
  [cc + cp + cr]: cp + cr, // pr
  [cc + cp + cs]: cp + cs, // ps
  [cc + cp + ct]: cp + ct, // pt
  [cc + cp + cu]: cp + cu, // pu
  [cc + cp + cv]: cp + cv, // pv
  [cc + cp + cw]: cp + cw, // pw
  [cc + cp + cx]: cp + cx, // px
  [cc + cp + cy]: cp + cy, // py
  [cc + cp + cz]: cp + cz, // pz

  [cc + cP + ca]: cP + ca, // Pa
  [cc + cP + cb]: cP + cb, // Pb
  [cc + cP + cc]: cP + cc, // Pc
  [cc + cP + cd]: cP + cd, // Pd
  [cc + cP + ce]: cP + ce, // Pe
  [cc + cP + cf]: cP + cf, // Pf
  [cc + cP + cg]: cP + cg, // Pg
  [cc + cP + ch]: cP + ch, // Ph
  [cc + cP + ci]: cP + ci, // Pi
  [cc + cP + cj]: cP + cj, // Pj
  [cc + cP + ck]: cP + ck, // Pk
  [cc + cP + cl]: cP + cl, // Pl
  [cc + cP + cm]: cP + cm, // Pm
  [cc + cP + cn]: cP + cn, // Pn
  [cc + cP + co]: cP + co, // Po
  [cc + cP + cp]: cP + cp, // Pp
  [cc + cP + cq]: cP + cq, // Pq
  [cc + cP + cr]: cP + cr, // Pr
  [cc + cP + cs]: cP + cs, // Ps
  [cc + cP + ct]: cP + ct, // Pt
  [cc + cP + cu]: cP + cu, // Pu
  [cc + cP + cv]: cP + cv, // Pv
  [cc + cP + cw]: cP + cw, // Pw
  [cc + cP + cx]: cP + cx, // Px
  [cc + cP + cy]: cP + cy, // Py
  [cc + cP + cz]: cP + cz, // Pz

  [cc + cp + cA]: cp + cA, // pA
  [cc + cp + cB]: cp + cB, // pB
  [cc + cp + cC]: cp + cC, // pC
  [cc + cp + cD]: cp + cD, // pD
  [cc + cp + cE]: cp + cE, // pE
  [cc + cp + cF]: cp + cF, // pF
  [cc + cp + cG]: cp + cG, // pG
  [cc + cp + cH]: cp + cH, // pH
  [cc + cp + cI]: cp + cI, // pI
  [cc + cp + cJ]: cp + cJ, // pJ
  [cc + cp + cK]: cp + cK, // pK
  [cc + cp + cL]: cp + cL, // pL
  [cc + cp + cM]: cp + cM, // pM
  [cc + cp + cN]: cp + cN, // pN
  [cc + cp + cO]: cp + cO, // pO
  [cc + cp + cP]: cp + cP, // pP
  [cc + cp + cQ]: cp + cQ, // pQ
  [cc + cp + cR]: cp + cR, // pR
  [cc + cp + cS]: cp + cS, // pS
  [cc + cp + cT]: cp + cT, // pT
  [cc + cp + cU]: cp + cU, // pU
  [cc + cp + cV]: cp + cV, // pV
  [cc + cp + cW]: cp + cW, // pW
  [cc + cp + cX]: cp + cX, // pX
  [cc + cp + cY]: cp + cY, // pY
  [cc + cp + cZ]: cp + cZ, // pZ

  [cc + cP + cA]: cP + cA, // PA
  [cc + cP + cB]: cP + cB, // PB
  [cc + cP + cC]: cP + cC, // PC
  [cc + cP + cD]: cP + cD, // PD
  [cc + cP + cE]: cP + cE, // PE
  [cc + cP + cF]: cP + cF, // PF
  [cc + cP + cG]: cP + cG, // PG
  [cc + cP + cH]: cP + cH, // PH
  [cc + cP + cI]: cP + cI, // PI
  [cc + cP + cJ]: cP + cJ, // PJ
  [cc + cP + cK]: cP + cK, // PK
  [cc + cP + cL]: cP + cL, // PL
  [cc + cP + cM]: cP + cM, // PM
  [cc + cP + cN]: cP + cN, // PN
  [cc + cP + cO]: cP + cO, // PO
  [cc + cP + cP]: cP + cP, // PP
  [cc + cP + cQ]: cP + cQ, // PQ
  [cc + cP + cR]: cP + cR, // PR
  [cc + cP + cS]: cP + cS, // PS
  [cc + cP + cT]: cP + cT, // PT
  [cc + cP + cU]: cP + cU, // PU
  [cc + cP + cV]: cP + cV, // PV
  [cc + cP + cW]: cP + cW, // PW
  [cc + cP + cX]: cP + cX, // PX
  [cc + cP + cY]: cP + cY, // PY
  [cc + cP + cZ]: cP + cZ, // PZ

  // qa-QA
  [cc + cq + ca]: cq + ca, // qa
  [cc + cq + cb]: cq + cb, // qb
  [cc + cq + cc]: cq + cc, // qc
  [cc + cq + cd]: cq + cd, // qd
  [cc + cq + ce]: cq + ce, // qe
  [cc + cq + cf]: cq + cf, // qf
  [cc + cq + cg]: cq + cg, // qg
  [cc + cq + ch]: cq + ch, // qh
  [cc + cq + ci]: cq + ci, // qi
  [cc + cq + cj]: cq + cj, // qj
  [cc + cq + ck]: cq + ck, // qk
  [cc + cq + cl]: cq + cl, // ql
  [cc + cq + cm]: cq + cm, // qm
  [cc + cq + cn]: cq + cn, // qn
  [cc + cq + co]: cq + co, // qo
  [cc + cq + cp]: cq + cp, // qp
  [cc + cq + cq]: cq + cq, // qq
  [cc + cq + cr]: cq + cr, // qr
  [cc + cq + cs]: cq + cs, // qs
  [cc + cq + ct]: cq + ct, // qt
  [cc + cq + cu]: cq + cu, // qu
  [cc + cq + cv]: cq + cv, // qv
  [cc + cq + cw]: cq + cw, // qw
  [cc + cq + cx]: cq + cx, // qx
  [cc + cq + cy]: cq + cy, // qy
  [cc + cq + cz]: cq + cz, // qz

  [cc + cQ + ca]: cQ + ca, // Qa
  [cc + cQ + cb]: cQ + cb, // Qb
  [cc + cQ + cc]: cQ + cc, // Qc
  [cc + cQ + cd]: cQ + cd, // Qd
  [cc + cQ + ce]: cQ + ce, // Qe
  [cc + cQ + cf]: cQ + cf, // Qf
  [cc + cQ + cg]: cQ + cg, // Qg
  [cc + cQ + ch]: cQ + ch, // Qh
  [cc + cQ + ci]: cQ + ci, // Qi
  [cc + cQ + cj]: cQ + cj, // Qj
  [cc + cQ + ck]: cQ + ck, // Qk
  [cc + cQ + cl]: cQ + cl, // Ql
  [cc + cQ + cm]: cQ + cm, // Qm
  [cc + cQ + cn]: cQ + cn, // Qn
  [cc + cQ + co]: cQ + co, // Qo
  [cc + cQ + cp]: cQ + cp, // Qp
  [cc + cQ + cq]: cQ + cq, // Qq
  [cc + cQ + cr]: cQ + cr, // Qr
  [cc + cQ + cs]: cQ + cs, // Qs
  [cc + cQ + ct]: cQ + ct, // Qt
  [cc + cQ + cu]: cQ + cu, // Qu
  [cc + cQ + cv]: cQ + cv, // Qv
  [cc + cQ + cw]: cQ + cw, // Qw
  [cc + cQ + cx]: cQ + cx, // Qx
  [cc + cQ + cy]: cQ + cy, // Qy
  [cc + cQ + cz]: cQ + cz, // Qz

  [cc + cq + cA]: cq + cA, // qA
  [cc + cq + cB]: cq + cB, // qB
  [cc + cq + cC]: cq + cC, // qC
  [cc + cq + cD]: cq + cD, // qD
  [cc + cq + cE]: cq + cE, // qE
  [cc + cq + cF]: cq + cF, // qF
  [cc + cq + cG]: cq + cG, // qG
  [cc + cq + cH]: cq + cH, // qH
  [cc + cq + cI]: cq + cI, // qI
  [cc + cq + cJ]: cq + cJ, // qJ
  [cc + cq + cK]: cq + cK, // qK
  [cc + cq + cL]: cq + cL, // qL
  [cc + cq + cM]: cq + cM, // qM
  [cc + cq + cN]: cq + cN, // qN
  [cc + cq + cO]: cq + cO, // qO
  [cc + cq + cP]: cq + cP, // qP
  [cc + cq + cQ]: cq + cQ, // qQ
  [cc + cq + cR]: cq + cR, // qR
  [cc + cq + cS]: cq + cS, // qS
  [cc + cq + cT]: cq + cT, // qT
  [cc + cq + cU]: cq + cU, // qU
  [cc + cq + cV]: cq + cV, // qV
  [cc + cq + cW]: cq + cW, // qW
  [cc + cq + cX]: cq + cX, // qX
  [cc + cq + cY]: cq + cY, // qY
  [cc + cq + cZ]: cq + cZ, // qZ

  [cc + cQ + cA]: cQ + cA, // QA
  [cc + cQ + cB]: cQ + cB, // QB
  [cc + cQ + cC]: cQ + cC, // QC
  [cc + cQ + cD]: cQ + cD, // QD
  [cc + cQ + cE]: cQ + cE, // QE
  [cc + cQ + cF]: cQ + cF, // QF
  [cc + cQ + cG]: cQ + cG, // QG
  [cc + cQ + cH]: cQ + cH, // QH
  [cc + cQ + cI]: cQ + cI, // QI
  [cc + cQ + cJ]: cQ + cJ, // QJ
  [cc + cQ + cK]: cQ + cK, // QK
  [cc + cQ + cL]: cQ + cL, // QL
  [cc + cQ + cM]: cQ + cM, // QM
  [cc + cQ + cN]: cQ + cN, // QN
  [cc + cQ + cO]: cQ + cO, // QO
  [cc + cQ + cP]: cQ + cP, // QP
  [cc + cQ + cQ]: cQ + cQ, // QQ
  [cc + cQ + cR]: cQ + cR, // QR
  [cc + cQ + cS]: cQ + cS, // QS
  [cc + cQ + cT]: cQ + cT, // QT
  [cc + cQ + cU]: cQ + cU, // QU
  [cc + cQ + cV]: cQ + cV, // QV
  [cc + cQ + cW]: cQ + cW, // QW
  [cc + cQ + cX]: cQ + cX, // QX
  [cc + cQ + cY]: cQ + cY, // QY
  [cc + cQ + cZ]: cQ + cZ, // QZ

  // ra-RA
  [cc + cr + ca]: cr + ca, // ra
  [cc + cr + cb]: cr + cb, // rb
  [cc + cr + cc]: cr + cc, // rc
  [cc + cr + cd]: cr + cd, // rd
  [cc + cr + ce]: cr + ce, // re
  [cc + cr + cf]: cr + cf, // rf
  [cc + cr + cg]: cr + cg, // rg
  [cc + cr + ch]: cr + ch, // rh
  [cc + cr + ci]: cr + ci, // ri
  [cc + cr + cj]: cr + cj, // rj
  [cc + cr + ck]: cr + ck, // rk
  [cc + cr + cl]: cr + cl, // rl
  [cc + cr + cm]: cr + cm, // rm
  [cc + cr + cn]: cr + cn, // rn
  [cc + cr + co]: cr + co, // ro
  [cc + cr + cp]: cr + cp, // rp
  [cc + cr + cq]: cr + cq, // rq
  [cc + cr + cr]: cr + cr, // rr
  [cc + cr + cs]: cr + cs, // rs
  [cc + cr + ct]: cr + ct, // rt
  [cc + cr + cu]: cr + cu, // ru
  [cc + cr + cv]: cr + cv, // rv
  [cc + cr + cw]: cr + cw, // rw
  [cc + cr + cx]: cr + cx, // rx
  [cc + cr + cy]: cr + cy, // ry
  [cc + cr + cz]: cr + cz, // rz

  [cc + cR + ca]: cR + ca, // Ra
  [cc + cR + cb]: cR + cb, // Rb
  [cc + cR + cc]: cR + cc, // Rc
  [cc + cR + cd]: cR + cd, // Rd
  [cc + cR + ce]: cR + ce, // Re
  [cc + cR + cf]: cR + cf, // Rf
  [cc + cR + cg]: cR + cg, // Rg
  [cc + cR + ch]: cR + ch, // Rh
  [cc + cR + ci]: cR + ci, // Ri
  [cc + cR + cj]: cR + cj, // Rj
  [cc + cR + ck]: cR + ck, // Rk
  [cc + cR + cl]: cR + cl, // Rl
  [cc + cR + cm]: cR + cm, // Rm
  [cc + cR + cn]: cR + cn, // Rn
  [cc + cR + co]: cR + co, // Ro
  [cc + cR + cp]: cR + cp, // Rp
  [cc + cR + cq]: cR + cq, // Rq
  [cc + cR + cr]: cR + cr, // Rr
  [cc + cR + cs]: cR + cs, // Rs
  [cc + cR + ct]: cR + ct, // Rt
  [cc + cR + cu]: cR + cu, // Ru
  [cc + cR + cv]: cR + cv, // Rv
  [cc + cR + cw]: cR + cw, // Rw
  [cc + cR + cx]: cR + cx, // Rx
  [cc + cR + cy]: cR + cy, // Ry
  [cc + cR + cz]: cR + cz, // Rz

  [cc + cr + cA]: cr + cA, // rA
  [cc + cr + cB]: cr + cB, // rB
  [cc + cr + cC]: cr + cC, // rC
  [cc + cr + cD]: cr + cD, // rD
  [cc + cr + cE]: cr + cE, // rE
  [cc + cr + cF]: cr + cF, // rF
  [cc + cr + cG]: cr + cG, // rG
  [cc + cr + cH]: cr + cH, // rH
  [cc + cr + cI]: cr + cI, // rI
  [cc + cr + cJ]: cr + cJ, // rJ
  [cc + cr + cK]: cr + cK, // rK
  [cc + cr + cL]: cr + cL, // rL
  [cc + cr + cM]: cr + cM, // rM
  [cc + cr + cN]: cr + cN, // rN
  [cc + cr + cO]: cr + cO, // rO
  [cc + cr + cP]: cr + cP, // rP
  [cc + cr + cQ]: cr + cQ, // rQ
  [cc + cr + cR]: cr + cR, // rR
  [cc + cr + cS]: cr + cS, // rS
  [cc + cr + cT]: cr + cT, // rT
  [cc + cr + cU]: cr + cU, // rU
  [cc + cr + cV]: cr + cV, // rV
  [cc + cr + cW]: cr + cW, // rW
  [cc + cr + cX]: cr + cX, // rX
  [cc + cr + cY]: cr + cY, // rY
  [cc + cr + cZ]: cr + cZ, // rZ

  [cc + cR + cA]: cR + cA, // RA
  [cc + cR + cB]: cR + cB, // RB
  [cc + cR + cC]: cR + cC, // RC
  [cc + cR + cD]: cR + cD, // RD
  [cc + cR + cE]: cR + cE, // RE
  [cc + cR + cF]: cR + cF, // RF
  [cc + cR + cG]: cR + cG, // RG
  [cc + cR + cH]: cR + cH, // RH
  [cc + cR + cI]: cR + cI, // RI
  [cc + cR + cJ]: cR + cJ, // RJ
  [cc + cR + cK]: cR + cK, // RK
  [cc + cR + cL]: cR + cL, // RL
  [cc + cR + cM]: cR + cM, // RM
  [cc + cR + cN]: cR + cN, // RN
  [cc + cR + cO]: cR + cO, // RO
  [cc + cR + cP]: cR + cP, // RP
  [cc + cR + cQ]: cR + cQ, // RQ
  [cc + cR + cR]: cR + cR, // RR
  [cc + cR + cS]: cR + cS, // RS
  [cc + cR + cT]: cR + cT, // RT
  [cc + cR + cU]: cR + cU, // RU
  [cc + cR + cV]: cR + cV, // RV
  [cc + cR + cW]: cR + cW, // RW
  [cc + cR + cX]: cR + cX, // RX
  [cc + cR + cY]: cR + cY, // RY
  [cc + cR + cZ]: cR + cZ, // RZ

  // sa-SA
  [cc + cs + ca]: cs + ca, // sa
  [cc + cs + cb]: cs + cb, // sb
  [cc + cs + cc]: cs + cc, // sc
  [cc + cs + cd]: cs + cd, // sd
  [cc + cs + ce]: cs + ce, // se
  [cc + cs + cf]: cs + cf, // sf
  [cc + cs + cg]: cs + cg, // sg
  [cc + cs + ch]: cs + ch, // sh
  [cc + cs + ci]: cs + ci, // si
  [cc + cs + cj]: cs + cj, // sj
  [cc + cs + ck]: cs + ck, // sk
  [cc + cs + cl]: cs + cl, // sl
  [cc + cs + cm]: cs + cm, // sm
  [cc + cs + cn]: cs + cn, // sn
  [cc + cs + co]: cs + co, // so
  [cc + cs + cp]: cs + cp, // sp
  [cc + cs + cq]: cs + cq, // sq
  [cc + cs + cr]: cs + cr, // sr
  [cc + cs + cs]: cs + cs, // ss
  [cc + cs + ct]: cs + ct, // st
  [cc + cs + cu]: cs + cu, // su
  [cc + cs + cv]: cs + cv, // sv
  [cc + cs + cw]: cs + cw, // sw
  [cc + cs + cx]: cs + cx, // sx
  [cc + cs + cy]: cs + cy, // sy
  [cc + cs + cz]: cs + cz, // sz

  [cc + cS + ca]: cS + ca, // Sa
  [cc + cS + cb]: cS + cb, // Sb
  [cc + cS + cc]: cS + cc, // Sc
  [cc + cS + cd]: cS + cd, // Sd
  [cc + cS + ce]: cS + ce, // Se
  [cc + cS + cf]: cS + cf, // Sf
  [cc + cS + cg]: cS + cg, // Sg
  [cc + cS + ch]: cS + ch, // Sh
  [cc + cS + ci]: cS + ci, // Si
  [cc + cS + cj]: cS + cj, // Sj
  [cc + cS + ck]: cS + ck, // Sk
  [cc + cS + cl]: cS + cl, // Sl
  [cc + cS + cm]: cS + cm, // Sm
  [cc + cS + cn]: cS + cn, // Sn
  [cc + cS + co]: cS + co, // So
  [cc + cS + cp]: cS + cp, // Sp
  [cc + cS + cq]: cS + cq, // Sq
  [cc + cS + cr]: cS + cr, // Sr
  [cc + cS + cs]: cS + cs, // Ss
  [cc + cS + ct]: cS + ct, // St
  [cc + cS + cu]: cS + cu, // Su
  [cc + cS + cv]: cS + cv, // Sv
  [cc + cS + cw]: cS + cw, // Sw
  [cc + cS + cx]: cS + cx, // Sx
  [cc + cS + cy]: cS + cy, // Sy
  [cc + cS + cz]: cS + cz, // Sz

  [cc + cs + cA]: cs + cA, // sA
  [cc + cs + cB]: cs + cB, // sB
  [cc + cs + cC]: cs + cC, // sC
  [cc + cs + cD]: cs + cD, // sD
  [cc + cs + cE]: cs + cE, // sE
  [cc + cs + cF]: cs + cF, // sF
  [cc + cs + cG]: cs + cG, // sG
  [cc + cs + cH]: cs + cH, // sH
  [cc + cs + cI]: cs + cI, // sI
  [cc + cs + cJ]: cs + cJ, // sJ
  [cc + cs + cK]: cs + cK, // sK
  [cc + cs + cL]: cs + cL, // sL
  [cc + cs + cM]: cs + cM, // sM
  [cc + cs + cN]: cs + cN, // sN
  [cc + cs + cO]: cs + cO, // sO
  [cc + cs + cP]: cs + cP, // sP
  [cc + cs + cQ]: cs + cQ, // sQ
  [cc + cs + cR]: cs + cR, // sR
  [cc + cs + cS]: cs + cS, // sS
  [cc + cs + cT]: cs + cT, // sT
  [cc + cs + cU]: cs + cU, // sU
  [cc + cs + cV]: cs + cV, // sV
  [cc + cs + cW]: cs + cW, // sW
  [cc + cs + cX]: cs + cX, // sX
  [cc + cs + cY]: cs + cY, // sY
  [cc + cs + cZ]: cs + cZ, // sZ

  [cc + cS + cA]: cS + cA, // SA
  [cc + cS + cB]: cS + cB, // SB
  [cc + cS + cC]: cS + cC, // SC
  [cc + cS + cD]: cS + cD, // SD
  [cc + cS + cE]: cS + cE, // SE
  [cc + cS + cF]: cS + cF, // SF
  [cc + cS + cG]: cS + cG, // SG
  [cc + cS + cH]: cS + cH, // SH
  [cc + cS + cI]: cS + cI, // SI
  [cc + cS + cJ]: cS + cJ, // SJ
  [cc + cS + cK]: cS + cK, // SK
  [cc + cS + cL]: cS + cL, // SL
  [cc + cS + cM]: cS + cM, // SM
  [cc + cS + cN]: cS + cN, // SN
  [cc + cS + cO]: cS + cO, // SO
  [cc + cS + cP]: cS + cP, // SP
  [cc + cS + cQ]: cS + cQ, // SQ
  [cc + cS + cR]: cS + cR, // SR
  [cc + cS + cS]: cS + cS, // SS
  [cc + cS + cT]: cS + cT, // ST
  [cc + cS + cU]: cS + cU, // SU
  [cc + cS + cV]: cS + cV, // SV
  [cc + cS + cW]: cS + cW, // SW
  [cc + cS + cX]: cS + cX, // SX
  [cc + cS + cY]: cS + cY, // SY
  [cc + cS + cZ]: cS + cZ, // SZ

  // ta-TA
  [cc + ct + ca]: ct + ca, // ta
  [cc + ct + cb]: ct + cb, // tb
  [cc + ct + cc]: ct + cc, // tc
  [cc + ct + cd]: ct + cd, // td
  [cc + ct + ce]: ct + ce, // te
  [cc + ct + cf]: ct + cf, // tf
  [cc + ct + cg]: ct + cg, // tg
  [cc + ct + ch]: ct + ch, // th
  [cc + ct + ci]: ct + ci, // ti
  [cc + ct + cj]: ct + cj, // tj
  [cc + ct + ck]: ct + ck, // tk
  [cc + ct + cl]: ct + cl, // tl
  [cc + ct + cm]: ct + cm, // tm
  [cc + ct + cn]: ct + cn, // tn
  [cc + ct + co]: ct + co, // to
  [cc + ct + cp]: ct + cp, // tp
  [cc + ct + cq]: ct + cq, // tq
  [cc + ct + cr]: ct + cr, // tr
  [cc + ct + cs]: ct + cs, // ts
  [cc + ct + ct]: ct + ct, // tt
  [cc + ct + cu]: ct + cu, // tu
  [cc + ct + cv]: ct + cv, // tv
  [cc + ct + cw]: ct + cw, // tw
  [cc + ct + cx]: ct + cx, // tx
  [cc + ct + cy]: ct + cy, // ty
  [cc + ct + cz]: ct + cz, // tz

  [cc + cT + ca]: cT + ca, // Ta
  [cc + cT + cb]: cT + cb, // Tb
  [cc + cT + cc]: cT + cc, // Tc
  [cc + cT + cd]: cT + cd, // Td
  [cc + cT + ce]: cT + ce, // Te
  [cc + cT + cf]: cT + cf, // Tf
  [cc + cT + cg]: cT + cg, // Tg
  [cc + cT + ch]: cT + ch, // Th
  [cc + cT + ci]: cT + ci, // Ti
  [cc + cT + cj]: cT + cj, // Tj
  [cc + cT + ck]: cT + ck, // Tk
  [cc + cT + cl]: cT + cl, // Tl
  [cc + cT + cm]: cT + cm, // Tm
  [cc + cT + cn]: cT + cn, // Tn
  [cc + cT + co]: cT + co, // To
  [cc + cT + cp]: cT + cp, // Tp
  [cc + cT + cq]: cT + cq, // Tq
  [cc + cT + cr]: cT + cr, // Tr
  [cc + cT + cs]: cT + cs, // Ts
  [cc + cT + ct]: cT + ct, // Tt
  [cc + cT + cu]: cT + cu, // Tu
  [cc + cT + cv]: cT + cv, // Tv
  [cc + cT + cw]: cT + cw, // Tw
  [cc + cT + cx]: cT + cx, // Tx
  [cc + cT + cy]: cT + cy, // Ty
  [cc + cT + cz]: cT + cz, // Tz

  [cc + ct + cA]: ct + cA, // tA
  [cc + ct + cB]: ct + cB, // tB
  [cc + ct + cC]: ct + cC, // tC
  [cc + ct + cD]: ct + cD, // tD
  [cc + ct + cE]: ct + cE, // tE
  [cc + ct + cF]: ct + cF, // tF
  [cc + ct + cG]: ct + cG, // tG
  [cc + ct + cH]: ct + cH, // tH
  [cc + ct + cI]: ct + cI, // tI
  [cc + ct + cJ]: ct + cJ, // tJ
  [cc + ct + cK]: ct + cK, // tK
  [cc + ct + cL]: ct + cL, // tL
  [cc + ct + cM]: ct + cM, // tM
  [cc + ct + cN]: ct + cN, // tN
  [cc + ct + cO]: ct + cO, // tO
  [cc + ct + cP]: ct + cP, // tP
  [cc + ct + cQ]: ct + cQ, // tQ
  [cc + ct + cR]: ct + cR, // tR
  [cc + ct + cS]: ct + cS, // tS
  [cc + ct + cT]: ct + cT, // tT
  [cc + ct + cU]: ct + cU, // tU
  [cc + ct + cV]: ct + cV, // tV
  [cc + ct + cW]: ct + cW, // tW
  [cc + ct + cX]: ct + cX, // tX
  [cc + ct + cY]: ct + cY, // tY
  [cc + ct + cZ]: ct + cZ, // tZ

  [cc + cT + cA]: cT + cA, // TA
  [cc + cT + cB]: cT + cB, // TB
  [cc + cT + cC]: cT + cC, // TC
  [cc + cT + cD]: cT + cD, // TD
  [cc + cT + cE]: cT + cE, // TE
  [cc + cT + cF]: cT + cF, // TF
  [cc + cT + cG]: cT + cG, // TG
  [cc + cT + cH]: cT + cH, // TH
  [cc + cT + cI]: cT + cI, // TI
  [cc + cT + cJ]: cT + cJ, // TJ
  [cc + cT + cK]: cT + cK, // TK
  [cc + cT + cL]: cT + cL, // TL
  [cc + cT + cM]: cT + cM, // TM
  [cc + cT + cN]: cT + cN, // TN
  [cc + cT + cO]: cT + cO, // TO
  [cc + cT + cP]: cT + cP, // TP
  [cc + cT + cQ]: cT + cQ, // TQ
  [cc + cT + cR]: cT + cR, // TR
  [cc + cT + cS]: cT + cS, // TS
  [cc + cT + cT]: cT + cT, // TT
  [cc + cT + cU]: cT + cU, // TU
  [cc + cT + cV]: cT + cV, // TV
  [cc + cT + cW]: cT + cW, // TW
  [cc + cT + cX]: cT + cX, // TX
  [cc + cT + cY]: cT + cY, // TY
  [cc + cT + cZ]: cT + cZ, // TZ

  // ua-UA
  [cc + cu + ca]: cu + ca, // ua
  [cc + cu + cb]: cu + cb, // ub
  [cc + cu + cc]: cu + cc, // uc
  [cc + cu + cd]: cu + cd, // ud
  [cc + cu + ce]: cu + ce, // ue
  [cc + cu + cf]: cu + cf, // uf
  [cc + cu + cg]: cu + cg, // ug
  [cc + cu + ch]: cu + ch, // uh
  [cc + cu + ci]: cu + ci, // ui
  [cc + cu + cj]: cu + cj, // uj
  [cc + cu + ck]: cu + ck, // uk
  [cc + cu + cl]: cu + cl, // ul
  [cc + cu + cm]: cu + cm, // um
  [cc + cu + cn]: cu + cn, // un
  [cc + cu + co]: cu + co, // uo
  [cc + cu + cp]: cu + cp, // up
  [cc + cu + cq]: cu + cq, // uq
  [cc + cu + cr]: cu + cr, // ur
  [cc + cu + cs]: cu + cs, // us
  [cc + cu + ct]: cu + ct, // ut
  [cc + cu + cu]: cu + cu, // uu
  [cc + cu + cv]: cu + cv, // uv
  [cc + cu + cw]: cu + cw, // uw
  [cc + cu + cx]: cu + cx, // ux
  [cc + cu + cy]: cu + cy, // uy
  [cc + cu + cz]: cu + cz, // uz

  [cc + cU + ca]: cU + ca, // Ua
  [cc + cU + cb]: cU + cb, // Ub
  [cc + cU + cc]: cU + cc, // Uc
  [cc + cU + cd]: cU + cd, // Ud
  [cc + cU + ce]: cU + ce, // Ue
  [cc + cU + cf]: cU + cf, // Uf
  [cc + cU + cg]: cU + cg, // Ug
  [cc + cU + ch]: cU + ch, // Uh
  [cc + cU + ci]: cU + ci, // Ui
  [cc + cU + cj]: cU + cj, // Uj
  [cc + cU + ck]: cU + ck, // Uk
  [cc + cU + cl]: cU + cl, // Ul
  [cc + cU + cm]: cU + cm, // Um
  [cc + cU + cn]: cU + cn, // Un
  [cc + cU + co]: cU + co, // Uo
  [cc + cU + cp]: cU + cp, // Up
  [cc + cU + cq]: cU + cq, // Uq
  [cc + cU + cr]: cU + cr, // Ur
  [cc + cU + cs]: cU + cs, // Us
  [cc + cU + ct]: cU + ct, // Ut
  [cc + cU + cu]: cU + cu, // Uu
  [cc + cU + cv]: cU + cv, // Uv
  [cc + cU + cw]: cU + cw, // Uw
  [cc + cU + cx]: cU + cx, // Ux
  [cc + cU + cy]: cU + cy, // Uy
  [cc + cU + cz]: cU + cz, // Uz

  [cc + cu + cA]: cu + cA, // uA
  [cc + cu + cB]: cu + cB, // uB
  [cc + cu + cC]: cu + cC, // uC
  [cc + cu + cD]: cu + cD, // uD
  [cc + cu + cE]: cu + cE, // uE
  [cc + cu + cF]: cu + cF, // uF
  [cc + cu + cG]: cu + cG, // uG
  [cc + cu + cH]: cu + cH, // uH
  [cc + cu + cI]: cu + cI, // uI
  [cc + cu + cJ]: cu + cJ, // uJ
  [cc + cu + cK]: cu + cK, // uK
  [cc + cu + cL]: cu + cL, // uL
  [cc + cu + cM]: cu + cM, // uM
  [cc + cu + cN]: cu + cN, // uN
  [cc + cu + cO]: cu + cO, // uO
  [cc + cu + cP]: cu + cP, // uP
  [cc + cu + cQ]: cu + cQ, // uQ
  [cc + cu + cR]: cu + cR, // uR
  [cc + cu + cS]: cu + cS, // uS
  [cc + cu + cT]: cu + cT, // uT
  [cc + cu + cU]: cu + cU, // uU
  [cc + cu + cV]: cu + cV, // uV
  [cc + cu + cW]: cu + cW, // uW
  [cc + cu + cX]: cu + cX, // uX
  [cc + cu + cY]: cu + cY, // uY
  [cc + cu + cZ]: cu + cZ, // uZ

  [cc + cU + cA]: cU + cA, // UA
  [cc + cU + cB]: cU + cB, // UB
  [cc + cU + cC]: cU + cC, // UC
  [cc + cU + cD]: cU + cD, // UD
  [cc + cU + cE]: cU + cE, // UE
  [cc + cU + cF]: cU + cF, // UF
  [cc + cU + cG]: cU + cG, // UG
  [cc + cU + cH]: cU + cH, // UH
  [cc + cU + cI]: cU + cI, // UI
  [cc + cU + cJ]: cU + cJ, // UJ
  [cc + cU + cK]: cU + cK, // UK
  [cc + cU + cL]: cU + cL, // UL
  [cc + cU + cM]: cU + cM, // UM
  [cc + cU + cN]: cU + cN, // UN
  [cc + cU + cO]: cU + cO, // UO
  [cc + cU + cP]: cU + cP, // UP
  [cc + cU + cQ]: cU + cQ, // UQ
  [cc + cU + cR]: cU + cR, // UR
  [cc + cU + cS]: cU + cS, // US
  [cc + cU + cT]: cU + cT, // UT
  [cc + cU + cU]: cU + cU, // UU
  [cc + cU + cV]: cU + cV, // UV
  [cc + cU + cW]: cU + cW, // UW
  [cc + cU + cX]: cU + cX, // UX
  [cc + cU + cY]: cU + cY, // UY
  [cc + cU + cZ]: cU + cZ, // UZ

  // va-VA
  [cc + cv + ca]: cv + ca, // va
  [cc + cv + cb]: cv + cb, // vb
  [cc + cv + cc]: cv + cc, // vc
  [cc + cv + cd]: cv + cd, // vd
  [cc + cv + ce]: cv + ce, // ve
  [cc + cv + cf]: cv + cf, // vf
  [cc + cv + cg]: cv + cg, // vg
  [cc + cv + ch]: cv + ch, // vh
  [cc + cv + ci]: cv + ci, // vi
  [cc + cv + cj]: cv + cj, // vj
  [cc + cv + ck]: cv + ck, // vk
  [cc + cv + cl]: cv + cl, // vl
  [cc + cv + cm]: cv + cm, // vm
  [cc + cv + cn]: cv + cn, // vn
  [cc + cv + co]: cv + co, // vo
  [cc + cv + cp]: cv + cp, // vp
  [cc + cv + cq]: cv + cq, // vq
  [cc + cv + cr]: cv + cr, // vr
  [cc + cv + cs]: cv + cs, // vs
  [cc + cv + ct]: cv + ct, // vt
  [cc + cv + cu]: cv + cu, // vu
  [cc + cv + cv]: cv + cv, // vv
  [cc + cv + cw]: cv + cw, // vw
  [cc + cv + cx]: cv + cx, // vx
  [cc + cv + cy]: cv + cy, // vy
  [cc + cv + cz]: cv + cz, // vz

  [cc + cV + ca]: cV + ca, // Va
  [cc + cV + cb]: cV + cb, // Vb
  [cc + cV + cc]: cV + cc, // Vc
  [cc + cV + cd]: cV + cd, // Vd
  [cc + cV + ce]: cV + ce, // Ve
  [cc + cV + cf]: cV + cf, // Vf
  [cc + cV + cg]: cV + cg, // Vg
  [cc + cV + ch]: cV + ch, // Vh
  [cc + cV + ci]: cV + ci, // Vi
  [cc + cV + cj]: cV + cj, // Vj
  [cc + cV + ck]: cV + ck, // Vk
  [cc + cV + cl]: cV + cl, // Vl
  [cc + cV + cm]: cV + cm, // Vm
  [cc + cV + cn]: cV + cn, // Vn
  [cc + cV + co]: cV + co, // Vo
  [cc + cV + cp]: cV + cp, // Vp
  [cc + cV + cq]: cV + cq, // Vq
  [cc + cV + cr]: cV + cr, // Vr
  [cc + cV + cs]: cV + cs, // Vs
  [cc + cV + ct]: cV + ct, // Vt
  [cc + cV + cu]: cV + cu, // Vu
  [cc + cV + cv]: cV + cv, // Vv
  [cc + cV + cw]: cV + cw, // Vw
  [cc + cV + cx]: cV + cx, // Vx
  [cc + cV + cy]: cV + cy, // Vy
  [cc + cV + cz]: cV + cz, // Vz

  [cc + cv + cA]: cv + cA, // vA
  [cc + cv + cB]: cv + cB, // vB
  [cc + cv + cC]: cv + cC, // vC
  [cc + cv + cD]: cv + cD, // vD
  [cc + cv + cE]: cv + cE, // vE
  [cc + cv + cF]: cv + cF, // vF
  [cc + cv + cG]: cv + cG, // vG
  [cc + cv + cH]: cv + cH, // vH
  [cc + cv + cI]: cv + cI, // vI
  [cc + cv + cJ]: cv + cJ, // vJ
  [cc + cv + cK]: cv + cK, // vK
  [cc + cv + cL]: cv + cL, // vL
  [cc + cv + cM]: cv + cM, // vM
  [cc + cv + cN]: cv + cN, // vN
  [cc + cv + cO]: cv + cO, // vO
  [cc + cv + cP]: cv + cP, // vP
  [cc + cv + cQ]: cv + cQ, // vQ
  [cc + cv + cR]: cv + cR, // vR
  [cc + cv + cS]: cv + cS, // vS
  [cc + cv + cT]: cv + cT, // vT
  [cc + cv + cU]: cv + cU, // vU
  [cc + cv + cV]: cv + cV, // vV
  [cc + cv + cW]: cv + cW, // vW
  [cc + cv + cX]: cv + cX, // vX
  [cc + cv + cY]: cv + cY, // vY
  [cc + cv + cZ]: cv + cZ, // vZ

  [cc + cV + cA]: cV + cA, // VA
  [cc + cV + cB]: cV + cB, // VB
  [cc + cV + cC]: cV + cC, // VC
  [cc + cV + cD]: cV + cD, // VD
  [cc + cV + cE]: cV + cE, // VE
  [cc + cV + cF]: cV + cF, // VF
  [cc + cV + cG]: cV + cG, // VG
  [cc + cV + cH]: cV + cH, // VH
  [cc + cV + cI]: cV + cI, // VI
  [cc + cV + cJ]: cV + cJ, // VJ
  [cc + cV + cK]: cV + cK, // VK
  [cc + cV + cL]: cV + cL, // VL
  [cc + cV + cM]: cV + cM, // VM
  [cc + cV + cN]: cV + cN, // VN
  [cc + cV + cO]: cV + cO, // VO
  [cc + cV + cP]: cV + cP, // VP
  [cc + cV + cQ]: cV + cQ, // VQ
  [cc + cV + cR]: cV + cR, // VR
  [cc + cV + cS]: cV + cS, // VS
  [cc + cV + cT]: cV + cT, // VT
  [cc + cV + cU]: cV + cU, // VU
  [cc + cV + cV]: cV + cV, // VV
  [cc + cV + cW]: cV + cW, // VW
  [cc + cV + cX]: cV + cX, // VX
  [cc + cV + cY]: cV + cY, // VY
  [cc + cV + cZ]: cV + cZ, // VZ

  // wa-WA
  [cc + cw + ca]: cw + ca, // wa
  [cc + cw + cb]: cw + cb, // wb
  [cc + cw + cc]: cw + cc, // wc
  [cc + cw + cd]: cw + cd, // wd
  [cc + cw + ce]: cw + ce, // we
  [cc + cw + cf]: cw + cf, // wf
  [cc + cw + cg]: cw + cg, // wg
  [cc + cw + ch]: cw + ch, // wh
  [cc + cw + ci]: cw + ci, // wi
  [cc + cw + cj]: cw + cj, // wj
  [cc + cw + ck]: cw + ck, // wk
  [cc + cw + cl]: cw + cl, // wl
  [cc + cw + cm]: cw + cm, // wm
  [cc + cw + cn]: cw + cn, // wn
  [cc + cw + co]: cw + co, // wo
  [cc + cw + cp]: cw + cp, // wp
  [cc + cw + cq]: cw + cq, // wq
  [cc + cw + cr]: cw + cr, // wr
  [cc + cw + cs]: cw + cs, // ws
  [cc + cw + ct]: cw + ct, // wt
  [cc + cw + cu]: cw + cu, // wu
  [cc + cw + cv]: cw + cv, // wv
  [cc + cw + cw]: cw + cw, // ww
  [cc + cw + cx]: cw + cx, // wx
  [cc + cw + cy]: cw + cy, // wy
  [cc + cw + cz]: cw + cz, // wz

  [cc + cW + ca]: cW + ca, // Wa
  [cc + cW + cb]: cW + cb, // Wb
  [cc + cW + cc]: cW + cc, // Wc
  [cc + cW + cd]: cW + cd, // Wd
  [cc + cW + ce]: cW + ce, // We
  [cc + cW + cf]: cW + cf, // Wf
  [cc + cW + cg]: cW + cg, // Wg
  [cc + cW + ch]: cW + ch, // Wh
  [cc + cW + ci]: cW + ci, // Wi
  [cc + cW + cj]: cW + cj, // Wj
  [cc + cW + ck]: cW + ck, // Wk
  [cc + cW + cl]: cW + cl, // Wl
  [cc + cW + cm]: cW + cm, // Wm
  [cc + cW + cn]: cW + cn, // Wn
  [cc + cW + co]: cW + co, // Wo
  [cc + cW + cp]: cW + cp, // Wp
  [cc + cW + cq]: cW + cq, // Wq
  [cc + cW + cr]: cW + cr, // Wr
  [cc + cW + cs]: cW + cs, // Ws
  [cc + cW + ct]: cW + ct, // Wt
  [cc + cW + cu]: cW + cu, // Wu
  [cc + cW + cv]: cW + cv, // Wv
  [cc + cW + cw]: cW + cw, // Ww
  [cc + cW + cx]: cW + cx, // Wx
  [cc + cW + cy]: cW + cy, // Wy
  [cc + cW + cz]: cW + cz, // Wz

  [cc + cw + cA]: cw + cA, // wA
  [cc + cw + cB]: cw + cB, // wB
  [cc + cw + cC]: cw + cC, // wC
  [cc + cw + cD]: cw + cD, // wD
  [cc + cw + cE]: cw + cE, // wE
  [cc + cw + cF]: cw + cF, // wF
  [cc + cw + cG]: cw + cG, // wG
  [cc + cw + cH]: cw + cH, // wH
  [cc + cw + cI]: cw + cI, // wI
  [cc + cw + cJ]: cw + cJ, // wJ
  [cc + cw + cK]: cw + cK, // wK
  [cc + cw + cL]: cw + cL, // wL
  [cc + cw + cM]: cw + cM, // wM
  [cc + cw + cN]: cw + cN, // wN
  [cc + cw + cO]: cw + cO, // wO
  [cc + cw + cP]: cw + cP, // wP
  [cc + cw + cQ]: cw + cQ, // wQ
  [cc + cw + cR]: cw + cR, // wR
  [cc + cw + cS]: cw + cS, // wS
  [cc + cw + cT]: cw + cT, // wT
  [cc + cw + cU]: cw + cU, // wU
  [cc + cw + cV]: cw + cV, // wV
  [cc + cw + cW]: cw + cW, // wW
  [cc + cw + cX]: cw + cX, // wX
  [cc + cw + cY]: cw + cY, // wY
  [cc + cw + cZ]: cw + cZ, // wZ

  [cc + cW + cA]: cW + cA, // WA
  [cc + cW + cB]: cW + cB, // WB
  [cc + cW + cC]: cW + cC, // WC
  [cc + cW + cD]: cW + cD, // WD
  [cc + cW + cE]: cW + cE, // WE
  [cc + cW + cF]: cW + cF, // WF
  [cc + cW + cG]: cW + cG, // WG
  [cc + cW + cH]: cW + cH, // WH
  [cc + cW + cI]: cW + cI, // WI
  [cc + cW + cJ]: cW + cJ, // WJ
  [cc + cW + cK]: cW + cK, // WK
  [cc + cW + cL]: cW + cL, // WL
  [cc + cW + cM]: cW + cM, // WM
  [cc + cW + cN]: cW + cN, // WN
  [cc + cW + cO]: cW + cO, // WO
  [cc + cW + cP]: cW + cP, // WP
  [cc + cW + cQ]: cW + cQ, // WQ
  [cc + cW + cR]: cW + cR, // WR
  [cc + cW + cS]: cW + cS, // WS
  [cc + cW + cT]: cW + cT, // WT
  [cc + cW + cU]: cW + cU, // WU
  [cc + cW + cV]: cW + cV, // WV
  [cc + cW + cW]: cW + cW, // WW
  [cc + cW + cX]: cW + cX, // WX
  [cc + cW + cY]: cW + cY, // WY
  [cc + cW + cZ]: cW + cZ, // WZ

  // xa-XA
  [cc + cx + ca]: cx + ca, // xa
  [cc + cx + cb]: cx + cb, // xb
  [cc + cx + cc]: cx + cc, // xc
  [cc + cx + cd]: cx + cd, // xd
  [cc + cx + ce]: cx + ce, // xe
  [cc + cx + cf]: cx + cf, // xf
  [cc + cx + cg]: cx + cg, // xg
  [cc + cx + ch]: cx + ch, // xh
  [cc + cx + ci]: cx + ci, // xi
  [cc + cx + cj]: cx + cj, // xj
  [cc + cx + ck]: cx + ck, // xk
  [cc + cx + cl]: cx + cl, // xl
  [cc + cx + cm]: cx + cm, // xm
  [cc + cx + cn]: cx + cn, // xn
  [cc + cx + co]: cx + co, // xo
  [cc + cx + cp]: cx + cp, // xp
  [cc + cx + cq]: cx + cq, // xq
  [cc + cx + cr]: cx + cr, // xr
  [cc + cx + cs]: cx + cs, // xs
  [cc + cx + ct]: cx + ct, // xt
  [cc + cx + cu]: cx + cu, // xu
  [cc + cx + cv]: cx + cv, // xv
  [cc + cx + cw]: cx + cw, // xw
  [cc + cx + cx]: cx + cx, // xx
  [cc + cx + cy]: cx + cy, // xy
  [cc + cx + cz]: cx + cz, // xz

  [cc + cX + ca]: cX + ca, // Xa
  [cc + cX + cb]: cX + cb, // Xb
  [cc + cX + cc]: cX + cc, // Xc
  [cc + cX + cd]: cX + cd, // Xd
  [cc + cX + ce]: cX + ce, // Xe
  [cc + cX + cf]: cX + cf, // Xf
  [cc + cX + cg]: cX + cg, // Xg
  [cc + cX + ch]: cX + ch, // Xh
  [cc + cX + ci]: cX + ci, // Xi
  [cc + cX + cj]: cX + cj, // Xj
  [cc + cX + ck]: cX + ck, // Xk
  [cc + cX + cl]: cX + cl, // Xl
  [cc + cX + cm]: cX + cm, // Xm
  [cc + cX + cn]: cX + cn, // Xn
  [cc + cX + co]: cX + co, // Xo
  [cc + cX + cp]: cX + cp, // Xp
  [cc + cX + cq]: cX + cq, // Xq
  [cc + cX + cr]: cX + cr, // Xr
  [cc + cX + cs]: cX + cs, // Xs
  [cc + cX + ct]: cX + ct, // Xt
  [cc + cX + cu]: cX + cu, // Xu
  [cc + cX + cv]: cX + cv, // Xv
  [cc + cX + cw]: cX + cw, // Xw
  [cc + cX + cx]: cX + cx, // Xx
  [cc + cX + cy]: cX + cy, // Xy
  [cc + cX + cz]: cX + cz, // Xz

  [cc + cx + cA]: cx + cA, // xA
  [cc + cx + cB]: cx + cB, // xB
  [cc + cx + cC]: cx + cC, // xC
  [cc + cx + cD]: cx + cD, // xD
  [cc + cx + cE]: cx + cE, // xE
  [cc + cx + cF]: cx + cF, // xF
  [cc + cx + cG]: cx + cG, // xG
  [cc + cx + cH]: cx + cH, // xH
  [cc + cx + cI]: cx + cI, // xI
  [cc + cx + cJ]: cx + cJ, // xJ
  [cc + cx + cK]: cx + cK, // xK
  [cc + cx + cL]: cx + cL, // xL
  [cc + cx + cM]: cx + cM, // xM
  [cc + cx + cN]: cx + cN, // xN
  [cc + cx + cO]: cx + cO, // xO
  [cc + cx + cP]: cx + cP, // xP
  [cc + cx + cQ]: cx + cQ, // xQ
  [cc + cx + cR]: cx + cR, // xR
  [cc + cx + cS]: cx + cS, // xS
  [cc + cx + cT]: cx + cT, // xT
  [cc + cx + cU]: cx + cU, // xU
  [cc + cx + cV]: cx + cV, // xV
  [cc + cx + cW]: cx + cW, // xW
  [cc + cx + cX]: cx + cX, // xX
  [cc + cx + cY]: cx + cY, // xY
  [cc + cx + cZ]: cx + cZ, // xZ

  [cc + cX + cA]: cX + cA, // XA
  [cc + cX + cB]: cX + cB, // XB
  [cc + cX + cC]: cX + cC, // XC
  [cc + cX + cD]: cX + cD, // XD
  [cc + cX + cE]: cX + cE, // XE
  [cc + cX + cF]: cX + cF, // XF
  [cc + cX + cG]: cX + cG, // XG
  [cc + cX + cH]: cX + cH, // XH
  [cc + cX + cI]: cX + cI, // XI
  [cc + cX + cJ]: cX + cJ, // XJ
  [cc + cX + cK]: cX + cK, // XK
  [cc + cX + cL]: cX + cL, // XL
  [cc + cX + cM]: cX + cM, // XM
  [cc + cX + cN]: cX + cN, // XN
  [cc + cX + cO]: cX + cO, // XO
  [cc + cX + cP]: cX + cP, // XP
  [cc + cX + cQ]: cX + cQ, // XQ
  [cc + cX + cR]: cX + cR, // XR
  [cc + cX + cS]: cX + cS, // XS
  [cc + cX + cT]: cX + cT, // XT
  [cc + cX + cU]: cX + cU, // XU
  [cc + cX + cV]: cX + cV, // XV
  [cc + cX + cW]: cX + cW, // XW
  [cc + cX + cX]: cX + cX, // XX
  [cc + cX + cY]: cX + cY, // XY
  [cc + cX + cZ]: cX + cZ, // XZ

  // ya-YA
  [cc + cy + ca]: cy + ca, // ya
  [cc + cy + cb]: cy + cb, // yb
  [cc + cy + cc]: cy + cc, // yc
  [cc + cy + cd]: cy + cd, // yd
  [cc + cy + ce]: cy + ce, // ye
  [cc + cy + cf]: cy + cf, // yf
  [cc + cy + cg]: cy + cg, // yg
  [cc + cy + ch]: cy + ch, // yh
  [cc + cy + ci]: cy + ci, // yi
  [cc + cy + cj]: cy + cj, // yj
  [cc + cy + ck]: cy + ck, // yk
  [cc + cy + cl]: cy + cl, // yl
  [cc + cy + cm]: cy + cm, // ym
  [cc + cy + cn]: cy + cn, // yn
  [cc + cy + co]: cy + co, // yo
  [cc + cy + cp]: cy + cp, // yp
  [cc + cy + cq]: cy + cq, // yq
  [cc + cy + cr]: cy + cr, // yr
  [cc + cy + cs]: cy + cs, // ys
  [cc + cy + ct]: cy + ct, // yt
  [cc + cy + cu]: cy + cu, // yu
  [cc + cy + cv]: cy + cv, // yv
  [cc + cy + cw]: cy + cw, // yw
  [cc + cy + cx]: cy + cx, // yx
  [cc + cy + cy]: cy + cy, // yy
  [cc + cy + cz]: cy + cz, // yz

  [cc + cY + ca]: cY + ca, // Ya
  [cc + cY + cb]: cY + cb, // Yb
  [cc + cY + cc]: cY + cc, // Yc
  [cc + cY + cd]: cY + cd, // Yd
  [cc + cY + ce]: cY + ce, // Ye
  [cc + cY + cf]: cY + cf, // Yf
  [cc + cY + cg]: cY + cg, // Yg
  [cc + cY + ch]: cY + ch, // Yh
  [cc + cY + ci]: cY + ci, // Yi
  [cc + cY + cj]: cY + cj, // Yj
  [cc + cY + ck]: cY + ck, // Yk
  [cc + cY + cl]: cY + cl, // Yl
  [cc + cY + cm]: cY + cm, // Ym
  [cc + cY + cn]: cY + cn, // Yn
  [cc + cY + co]: cY + co, // Yo
  [cc + cY + cp]: cY + cp, // Yp
  [cc + cY + cq]: cY + cq, // Yq
  [cc + cY + cr]: cY + cr, // Yr
  [cc + cY + cs]: cY + cs, // Ys
  [cc + cY + ct]: cY + ct, // Yt
  [cc + cY + cu]: cY + cu, // Yu
  [cc + cY + cv]: cY + cv, // Yv
  [cc + cY + cw]: cY + cw, // Yw
  [cc + cY + cx]: cY + cx, // Yx
  [cc + cY + cy]: cY + cy, // Yy
  [cc + cY + cz]: cY + cz, // Yz

  [cc + cy + cA]: cy + cA, // yA
  [cc + cy + cB]: cy + cB, // yB
  [cc + cy + cC]: cy + cC, // yC
  [cc + cy + cD]: cy + cD, // yD
  [cc + cy + cE]: cy + cE, // yE
  [cc + cy + cF]: cy + cF, // yF
  [cc + cy + cG]: cy + cG, // yG
  [cc + cy + cH]: cy + cH, // yH
  [cc + cy + cI]: cy + cI, // yI
  [cc + cy + cJ]: cy + cJ, // yJ
  [cc + cy + cK]: cy + cK, // yK
  [cc + cy + cL]: cy + cL, // yL
  [cc + cy + cM]: cy + cM, // yM
  [cc + cy + cN]: cy + cN, // yN
  [cc + cy + cO]: cy + cO, // yO
  [cc + cy + cP]: cy + cP, // yP
  [cc + cy + cQ]: cy + cQ, // yQ
  [cc + cy + cR]: cy + cR, // yR
  [cc + cy + cS]: cy + cS, // yS
  [cc + cy + cT]: cy + cT, // yT
  [cc + cy + cU]: cy + cU, // yU
  [cc + cy + cV]: cy + cV, // yV
  [cc + cy + cW]: cy + cW, // yW
  [cc + cy + cX]: cy + cX, // yX
  [cc + cy + cY]: cy + cY, // yY
  [cc + cy + cZ]: cy + cZ, // yZ

  [cc + cY + cA]: cY + cA, // YA
  [cc + cY + cB]: cY + cB, // YB
  [cc + cY + cC]: cY + cC, // YC
  [cc + cY + cD]: cY + cD, // YD
  [cc + cY + cE]: cY + cE, // YE
  [cc + cY + cF]: cY + cF, // YF
  [cc + cY + cG]: cY + cG, // YG
  [cc + cY + cH]: cY + cH, // YH
  [cc + cY + cI]: cY + cI, // YI
  [cc + cY + cJ]: cY + cJ, // YJ
  [cc + cY + cK]: cY + cK, // YK
  [cc + cY + cL]: cY + cL, // YL
  [cc + cY + cM]: cY + cM, // YM
  [cc + cY + cN]: cY + cN, // YN
  [cc + cY + cO]: cY + cO, // YO
  [cc + cY + cP]: cY + cP, // YP
  [cc + cY + cQ]: cY + cQ, // YQ
  [cc + cY + cR]: cY + cR, // YR
  [cc + cY + cS]: cY + cS, // YS
  [cc + cY + cT]: cY + cT, // YT
  [cc + cY + cU]: cY + cU, // YU
  [cc + cY + cV]: cY + cV, // YV
  [cc + cY + cW]: cY + cW, // YW
  [cc + cY + cX]: cY + cX, // YX
  [cc + cY + cY]: cY + cY, // YY
  [cc + cY + cZ]: cY + cZ, // YZ

  // za-ZA
  [cc + cz + ca]: cz + ca, // za
  [cc + cz + cb]: cz + cb, // zb
  [cc + cz + cc]: cz + cc, // zc
  [cc + cz + cd]: cz + cd, // zd
  [cc + cz + ce]: cz + ce, // ze
  [cc + cz + cf]: cz + cf, // zf
  [cc + cz + cg]: cz + cg, // zg
  [cc + cz + ch]: cz + ch, // zh
  [cc + cz + ci]: cz + ci, // zi
  [cc + cz + cj]: cz + cj, // zj
  [cc + cz + ck]: cz + ck, // zk
  [cc + cz + cl]: cz + cl, // zl
  [cc + cz + cm]: cz + cm, // zm
  [cc + cz + cn]: cz + cn, // zn
  [cc + cz + co]: cz + co, // zo
  [cc + cz + cp]: cz + cp, // zp
  [cc + cz + cq]: cz + cq, // zq
  [cc + cz + cr]: cz + cr, // zr
  [cc + cz + cs]: cz + cs, // zs
  [cc + cz + ct]: cz + ct, // zt
  [cc + cz + cu]: cz + cu, // zu
  [cc + cz + cv]: cz + cv, // zv
  [cc + cz + cw]: cz + cw, // zw
  [cc + cz + cx]: cz + cx, // zx
  [cc + cz + cy]: cz + cy, // zy
  [cc + cz + cz]: cz + cz, // zz

  [cc + cZ + ca]: cZ + ca, // Za
  [cc + cZ + cb]: cZ + cb, // Zb
  [cc + cZ + cc]: cZ + cc, // Zc
  [cc + cZ + cd]: cZ + cd, // Zd
  [cc + cZ + ce]: cZ + ce, // Ze
  [cc + cZ + cf]: cZ + cf, // Zf
  [cc + cZ + cg]: cZ + cg, // Zg
  [cc + cZ + ch]: cZ + ch, // Zh
  [cc + cZ + ci]: cZ + ci, // Zi
  [cc + cZ + cj]: cZ + cj, // Zj
  [cc + cZ + ck]: cZ + ck, // Zk
  [cc + cZ + cl]: cZ + cl, // Zl
  [cc + cZ + cm]: cZ + cm, // Zm
  [cc + cZ + cn]: cZ + cn, // Zn
  [cc + cZ + co]: cZ + co, // Zo
  [cc + cZ + cp]: cZ + cp, // Zp
  [cc + cZ + cq]: cZ + cq, // Zq
  [cc + cZ + cr]: cZ + cr, // Zr
  [cc + cZ + cs]: cZ + cs, // Zs
  [cc + cZ + ct]: cZ + ct, // Zt
  [cc + cZ + cu]: cZ + cu, // Zu
  [cc + cZ + cv]: cZ + cv, // Zv
  [cc + cZ + cw]: cZ + cw, // Zw
  [cc + cZ + cx]: cZ + cx, // Zx
  [cc + cZ + cy]: cZ + cy, // Zy
  [cc + cZ + cz]: cZ + cz, // Zz

  [cc + cz + cA]: cz + cA, // zA
  [cc + cz + cB]: cz + cB, // zB
  [cc + cz + cC]: cz + cC, // zC
  [cc + cz + cD]: cz + cD, // zD
  [cc + cz + cE]: cz + cE, // zE
  [cc + cz + cF]: cz + cF, // zF
  [cc + cz + cG]: cz + cG, // zG
  [cc + cz + cH]: cz + cH, // zH
  [cc + cz + cI]: cz + cI, // zI
  [cc + cz + cJ]: cz + cJ, // zJ
  [cc + cz + cK]: cz + cK, // zK
  [cc + cz + cL]: cz + cL, // zL
  [cc + cz + cM]: cz + cM, // zM
  [cc + cz + cN]: cz + cN, // zN
  [cc + cz + cO]: cz + cO, // zO
  [cc + cz + cP]: cz + cP, // zP
  [cc + cz + cQ]: cz + cQ, // zQ
  [cc + cz + cR]: cz + cR, // zR
  [cc + cz + cS]: cz + cS, // zS
  [cc + cz + cT]: cz + cT, // zT
  [cc + cz + cU]: cz + cU, // zU
  [cc + cz + cV]: cz + cV, // zV
  [cc + cz + cW]: cz + cW, // zW
  [cc + cz + cX]: cz + cX, // zX
  [cc + cz + cY]: cz + cY, // zY
  [cc + cz + cZ]: cz + cZ, // zZ

  [cc + cZ + cA]: cZ + cA, // ZA
  [cc + cZ + cB]: cZ + cB, // ZB
  [cc + cZ + cC]: cZ + cC, // ZC
  [cc + cZ + cD]: cZ + cD, // ZD
  [cc + cZ + cE]: cZ + cE, // ZE
  [cc + cZ + cF]: cZ + cF, // ZF
  [cc + cZ + cG]: cZ + cG, // ZG
  [cc + cZ + cH]: cZ + cH, // ZH
  [cc + cZ + cI]: cZ + cI, // ZI
  [cc + cZ + cJ]: cZ + cJ, // ZJ
  [cc + cZ + cK]: cZ + cK, // ZK
  [cc + cZ + cL]: cZ + cL, // ZL
  [cc + cZ + cM]: cZ + cM, // ZM
  [cc + cZ + cN]: cZ + cN, // ZN
  [cc + cZ + cO]: cZ + cO, // ZO
  [cc + cZ + cP]: cZ + cP, // ZP
  [cc + cZ + cQ]: cZ + cQ, // ZQ
  [cc + cZ + cR]: cZ + cR, // ZR
  [cc + cZ + cS]: cZ + cS, // ZS
  [cc + cZ + cT]: cZ + cT, // ZT
  [cc + cZ + cU]: cZ + cU, // ZU
  [cc + cZ + cV]: cZ + cV, // ZV
  [cc + cZ + cW]: cZ + cW, // ZW
  [cc + cZ + cX]: cZ + cX, // ZX
  [cc + cZ + cY]: cZ + cY, // ZY
  [cc + cZ + cZ]: cZ + cZ // ZZ

  // inducedConstantsFailure = 'inducedConstantsFailure';
};
