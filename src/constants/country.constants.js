/**
 * @file country.constants
 * @module country.constants
 * @description Contains many re-usable country constants.
 * @requires module:basic.constants
 * @requires module:phonic.constants
 * @requires module:numeric.constants
 * @requires module:generic.constants
 * @requires module:unit.constants
 * @requires module:word1.constants
 * @author Seth Hollingsead
 * @date 2021/11/15
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

let bas = require('./basic.constants');
let con = require('./constant.constants');
let phn = require('./phonic.constants');
let num = require('./numeric.constants');
let gen = require('./generic.constants');
let unt = require('./unit.constants');
let wr1 = require('./word1.constants');

// Countries
let cAfghanistan = bas.cAf + bas.cgh + bas.can + phn.cistan; // Afghanistan
let cAlbania = bas.cAl + bas.cba + phn.cnia; // Albania
let cAlgeria = bas.cAl + phn.cgeria; // Algeria
let cAndorra = wr1.cAnd + bas.cor + bas.cra; // Andorra
let cAngola = bas.cAn + bas.cgo + bas.cla; // Angola
let cAntigua = bas.cAn + bas.cti + phn.cgua; // Antigua
let cArgentina = gen.cArg + phn.cent + phn.cina; // Argentina
let cArmenia = bas.cAr + phn.cmen + bas.cia; // Armenia
let cAustralia = bas.cAu + bas.cst + phn.cral + bas.cia; // Australia
let cAustria = bas.cAu + bas.cst + phn.cria; // Austria
let cAzerbaijan = bas.cAz + bas.cer + bas.cba + bas.cij + bas.can; // Azerbaijan
let cBahamas = bas.cBa + bas.cha + phn.cmas; // Bahamas
let cBahrain = bas.cBa + bas.chr + phn.cain; // Bahrain
let cBangladesh = bas.cBa + bas.cng + bas.cla + bas.cde + bas.csh; // Bangladesh
let cBarbados = bas.cBa + bas.crb + wr1.c1a1d + bas.cos; // Barbados
let cBarbuda = bas.cBa + bas.crb + phn.cuda; // Barbuda
let cBelarus = bas.cBe + bas.cla + phn.crus; // Belarus
let cBelgium = bas.cBe + bas.clg + bas.ciu + bas.cm; // Belgium
let cBelize = bas.cBe + bas.cli + bas.cze; // Belize
let cBenin = bas.cBe + bas.cni + bas.cn; // Benin
let cBhutan = bas.cBh + bas.cut + bas.can; // Bhutan
let cBolivia = bas.cBo + bas.cli + phn.cvia; // Bolivia
let cBosnia = bas.cBo + bas.csn + bas.cia; // Bosnia
let cBotswana = bas.cBo + bas.cts + bas.cwa + bas.cna; // Botswana
let cBrazil = phn.cBra + bas.czi + bas.cl; // Brazil
let cBrunei = bas.cBr + bas.cun + bas.cei; // Brunei
let cBulgaria = bas.cBu + bas.clg + bas.car + bas.cia; // Bulgaria
let cBurkinaFaso = bas.cBu + bas.crk + phn.cina + bas.cFa + bas.cso; // BurkinaFaso
let cBurundi = bas.cBu + wr1.crun + bas.cdi; // Burundi
let cCotedlvoire = bas.cCo + bas.cte + bas.cSpace + bas.cd + bas.clv + bas.coi + bas.cre; // Cote dlvoire
let cCaboVerde = bas.cCa + bas.cbo + bas.cSpace + phn.cVer + bas.cde; // Cabo Verde
let cCambodia = bas.cCa + bas.cmb + bas.cod + bas.cia; // Cambodia
let cCameroon = bas.cCa + bas.cme + bas.cro + bas.con; // Cameroon
let cCanada = wr1.cCan + phn.cada; // Canada
let cCentralAfricanRepublic = wr1.cCentral + bas.cSpace + wr1.cAfrican + bas.cSpace + wr1.cRepublic; // Central African Republic
let cChad = bas.cCh + bas.ca + bas.cd; // Chad
let cChile = gen.cChi + bas.cle; // Chile
let cChina = gen.cChi + bas.cna; // China
let cColombia = phn.cCol + phn.comb + bas.cia; // Colombia
let cComoros = gen.cCom + bas.cor + bas.cos; // Comoros
let cCongo = bas.cC + phn.congo; // Congo
let cCostaRica = wr1.cCost + bas.ca + bas.cSpace + bas.cR + phn.cica; // Costa Rica
let cCroatia = bas.cCr + bas.coa + bas.cti + bas.ca; // Croatia
let cCuba = bas.cCu + bas.cba; // Cuba
let cCyprus = bas.cCy + bas.cpr + bas.cus; // Cyprus
let cCzechia = bas.cCz + bas.cec + bas.chi + bas.ca; // Czechia
let cDemocraticRepublicOfTheCongo = wr1.cDemocratic + bas.cSpace + wr1.cRepublic + bas.cSpace + bas.cof + bas.cSpace + wr1.cthe + bas.cSpace + cCongo; // Democratic Republic of the Congo
let cDenmark = bas.cDe + phn.cnmar + bas.ck; // Denmark
let cDjibouti = bas.cDj + bas.cib + wr1.cout + bas.ci; // Djibouti
let cDominica = bas.cDo + phn.cminica; // Dominica
let cDominicanRepublic = bas.cDo + phn.cminica + bas.cn + bas.cSpace + bas.cR + bas.cep + phn.cublic; // cDominican Republic
let cEcuador = bas.cEc + bas.cua + phn.cdor; // Ecuador
let cEgypt = bas.cEg + bas.cyp + bas.ct; // Egypt
let cElSalvador = bas.cEl + bas.cSpace + bas.cSa + bas.clv + phn.cador; // El Salvador
let cEquatorialGuinea = phn.cEqu + phn.cator + bas.cia + bas.cl + bas.cSpace + bas.cG + phn.cuinea; // Equatorial Guinea
let cEritrea = bas.cEr + bas.cit + phn.crea; // Eritrea
let cEstonia = bas.cEs + bas.cto + phn.cnia; // Estonia
let cEswatini = bas.cEs + bas.cwa + bas.cti + bas.cni; // Eswatini -- Formerly Swaziland
let cEthiopia = bas.cEt + bas.chi + bas.cop + bas.cia; // Ethiopia
let cFiji = bas.cFi + bas.cji; // Fiji
let cFinland = phn.cFin + bas.cla + bas.cnd; // Finland
let cFrance = phn.cFra + phn.cnce; // France
let cGabon = bas.cGa + bas.cbo + bas.cn; // Gabon
let cGambia = bas.cGa + phn.cmbia; // Gambia
let cGeorgia = bas.cGe + bas.cor + bas.cgi + bas.ca; // Georgia
let cGermany = bas.cGe + phn.crman + bas.cy; // Germany
let cGhana = bas.cGh + phn.cana; // Ghana
let cGreece = bas.cGr + bas.cee + bas.cce; // Greece
let cGrenada = bas.cGr + bas.cen + phn.cada; // Grenada
let cGuatemala = bas.cGu + phn.cate + phn.cmal + bas.ca; // Guatemala
let cGuinea = bas.cGu + phn.cinea; // Guinea
let cGuineaBissau = bas.cGu + phn.cinea + bas.cDash + bas.cBi + bas.css + bas.cau; // Guinea-Bissau
let cGuyana = bas.cGu + phn.cyan + bas.ca; // Guyana
let cHaiti = bas.cHa + phn.citi; // Haiti
let cHerzegovina = wr1.cHer + bas.cze + bas.cgo + bas.cvi + bas.cna; // Herzegovina
let cHolySee = bas.cHo + bas.cly + bas.cSpace + bas.cSe + bas.ce; // Holy See
let cHonduras = bas.cHo + bas.cnd + bas.cur + bas.cas; // Honduras
let cHungary = wr1.cHung + phn.cary; // Hungary
let cIceland = bas.cIc + phn.celand; // Iceland
let cIndia = bas.cIn + phn.cdia; // India
let cIndonesia = bas.cIn + wr1.cdone + phn.csia; // Indonesia
let cIran = bas.cIr + bas.can; // Iran
let cIraq = bas.cIr + bas.caq; // Iraq
let cIreland = bas.cIr + phn.celand; // Ireland
let cIsrael = bas.cIs + bas.cra + bas.cel; // Israel
let cItaly = bas.cIt + bas.cal + bas.cy; // Italy
let cJamaica = bas.cJa + bas.cma + phn.cica; // Jamaica
let cJapan = bas.cJa + bas.cpa + bas.cn; // Japan
let cJordan = bas.cJo + bas.crd + bas.can; // Jordan
let cKazakhstan = bas.cKa + bas.cza + bas.ckh + phn.cstan; // Kazakhstan
let cKenya = bas.cKe + bas.cny + bas.ca; // Kenya
let cKiribati = bas.cKi + bas.cri + bas.cba + bas.cti; // Kiribati
let cKuwait = bas.cKu + wr1.cwait; // Kuwait
let cKyrgyzstan = bas.cKy + bas.crg + bas.cyz + phn.cstan; // Kyrgyzstan
let cLaos = bas.cLa + bas.cos; // Laos
let cLatvia = bas.cLa + bas.ctv + bas.cia; // Latvia
let cLebanon = bas.cLe + bas.cba + phn.cnon; // Lebanon
let cLesotho = bas.cLe + bas.cso + bas.cth + bas.co; // Lesotho
let cLiberia = bas.cLi + bas.cbe + phn.cria; // Liberia
let cLibya = bas.cLi + bas.cby + bas.ca; // Libya
let cLiechtenstein = bas.cLi + bas.cec + bas.cht + bas.cen + phn.cste + bas.cin; // Liechtenstein
let cLithuania = wr1.cLit + bas.chu + phn.cania; // Lithuania
let cLuxembourg = bas.cLu + bas.cxe + bas.cmb + phn.cour + bas.cg; // Luxembourg
let cMadagascar = bas.cMa + bas.cda + bas.cga + bas.csc + bas.car; // Madagascar
let cMalawi = bas.cMa + bas.cla + bas.cwi; // Malawi
let cMalaysia = bas.cMa + phn.clay + phn.csia; // Malaysia
let cMaldives = bas.cMa + bas.cld + phn.cive + bas.cs; // Maldives
let cMali = bas.cMa + bas.cli; // Mali
let cMalta = bas.cMa + phn.clta; // Malta
let cMarshallIslands = bas.cMa + bas.crs + bas.cha + bas.cll + bas.cSpace + bas.cIs + bas.cla + phn.cnds; // Marshall Islands
let cMauritania = bas.cMa + bas.cur + bas.cit + phn.cania; // Mauritania
let cMauritius = bas.cMa + bas.cur + phn.citi + bas.cus; // Mauritius
let cMexico = bas.cMe + bas.cxi + bas.cco; // Mexico
let cMicronesia = unt.cMicro + phn.cnesia; // Micronesia
let cMoldova = bas.cMo + bas.cld + phn.cova; // Moldova
let cMonaco = bas.cMo + bas.cna + bas.cco; // Monaco
let cMongolia = bas.cMo + phn.cngo + phn.clia; // Mongolia
let cMontenegro = bas.cMo + bas.cnt + bas.cen + bas.ceg + bas.cro; // Montenegro
let cMorocco = bas.cMo + bas.cro + bas.ccc + bas.co; // Morocco
let cMozambique = bas.cMo + bas.cza + bas.cmb + bas.ciq + bas.cue; // Mozambique
let cMyanmar = bas.cMy + bas.can + phn.cmar; // Myanmar
let cNamibia = bas.cNa + bas.camai + phn.cbia; // Namibia
let cNauru = bas.cNa + phn.curu; // Nauru
let cNepal = bas.cNe + wr1.cpal; // Nepal
let cNetherlands = bas.cNe + phn.cther + bas.cla + phn.cnds; // Netherlands
let cNewZealand = wr1.cNew + bas.cSpace + bas.cZe + phn.cala + bas.cnd; // New Zealand
let cNevis = bas.cNe + bas.cvi + bas.cs; // Nevis
let cNicaragua = bas.cNi + phn.ccar + phn.cagua; // Nicaragua
let cNiger = bas.cNi + phn.cger; // Niger
let cNigeria = bas.cNi + phn.cgeria; // Nigeria
let cNorthKorea = bas.cNo + bas.crt + bas.ch + bas.cSpace + bas.cK + phn.corea; // North Korea
let cNorthMacedonia = bas.cNo + bas.crt + bas.ch + bas.cSpace + bas.cM + phn.cace + bas.cdo + phn.cnia; // North Macedonia
let cNorway = bas.cNo + bas.crw + bas.cay; // Norway
let cOman = bas.cOm + bas.can; // Oman
let cPakistan = bas.cPa + phn.ckistan; // Pakistan
let cPalau = wr1.cPal + bas.cau; // Palau
let cPalestine = wr1.cPal + phn.cest + phn.cine; // Palestine
let cPanama = bas.cPa + phn.cnam + bas.ca; // Panama
let cPapuaNewGuinea = wr1.cPapua + bas.cSpace + wr1.cNew + bas.cSpace + cGuinea; // Papua New Guinea
let cParaguay = phn.cPara + phn.cguay; // Paraguay
let cPeru = phn.cPer + bas.cu; // Peru
let cPhilippines = gen.cPhi + bas.cli + bas.cpp + phn.cine + bas.cs; // Philippines
let cPoland = bas.cPo + bas.cla + bas.cnd; // Poland
let cPortugal = wr1.cPort + bas.cug + bas.cal; // Portugal
let cPrincipe = phn.cPri + bas.cnc + bas.cip + bas.ce; // Principe
let cQatar = bas.cQa + phn.ctar; // Qatar
let cRomania = bas.cRo + wr1.cman + bas.cia; // Romania
let cRussia = bas.cRu + bas.css + bas.cia; // Russia
let cRwanda = bas.cRw + phn.canda; // Rwanda
let cSaintKitts = bas.cSa + phn.cint + bas.cSpace + bas.cKi + bas.ctt + bas.cs; // Saint Kitts
let cSaintLucia = bas.cSa + phn.cint + bas.cSpace + bas.cLu + bas.cci + bas.ca; // Saint Lucia
let cSaintVincent = bas.cSa + phn.cint + bas.cSpace + bas.cVi + phn.cnce + bas.cnt; // Saint Vincent
let cSomoa = bas.cSo + bas.cmo + bas.ca; // Somoa
let cSanMarino = gen.cSan + bas.cSpace + bas.cMa + bas.cri + bas.cno; // San Marino
let cSaoTome = bas.cSa + bas.co + bas.cSpace + bas.cT + phn.come; // Sao Tome
let cSaudiArabia = bas.cSa + bas.cud + bas.ci + bas.cSpace + bas.cA + bas.cra + phn.cbia; // Saudi Arabia
let cSenegal = bas.cSe + bas.cne + phn.cgal; // Senegal
let cSerbia = bas.cSe + bas.crb + bas.cia; // Serbia
let cSeychelles = bas.cSe + bas.cyc + bas.che + bas.cll + bas.ces; // Seychelles
let cSierraLeone = gen.cSierra + bas.cSpace + bas.cLe + num.cone; // Sierra Leone
let cSingapore = bas.cSi + phn.cnga + bas.cpo + bas.cre; // Singapore
let cSlovakia = bas.cSl + phn.cova + bas.cki + bas.ca; // Slovakia
let cSlovenia = bas.cSl + bas.cov + phn.cenia; // Slovenia
let cSolomonIslands = bas.cSo + bas.clo + phn.cmon + bas.cSpace + bas.cIs + bas.cla + phn.cnds; // Solomon Islands
let cSomalia = bas.cSo + phn.cmal + bas.cia; // Somalia
let cSouthAfrica = bas.cSo + bas.cut + bas.ch + bas.cSpace + bas.cA + phn.cfrica; // South Africa
let cSouthKorea = bas.cSo + bas.cut + bas.ch + bas.cSpace + bas.cK + phn.corea; // South Korea
let cSouthSudan = bas.cSo + bas.cut + bas.ch + bas.cSpace + bas.cS + phn.cudan; // South Sudan
let cSpain = bas.cSp + phn.cain; // Spain
let cSriLanka = bas.cSr + bas.ci + bas.cSpace + bas.cL + bas.can + bas.cka; // Sri Lanka
let cSudan = bas.cSu + phn.cdan; // Sudan
let cSuriname = bas.cSu + bas.cri + wr1.cname; // Suriname
let cSweden = bas.cSw + bas.ced + bas.cen; // Sweden
let cSwitzerland = bas.cSw + bas.cit + bas.cze + phn.crland; // Switzerland
let cSyria = bas.cSy + phn.cria; // Syria
let cTajikistan = bas.cTa + bas.cji + phn.ckistan; // Tajikistan
let cTanzania = bas.cTa + bas.cn + bas.cza + phn.cnia; // Tanzania
let cThailand = bas.cTh + phn.cail + phn.cand; // Thailand
let cTimorLeste = bas.cTi + bas.cmo + bas.cr + bas.cDash + bas.cL + phn.cest + bas.ce; // Timor-Leste
let cTogo = bas.cTo + bas.cgo; // Togo
let cTonga = bas.cTo + phn.cnga; // Tonga
let cTrinidadAndTabago = wr1.cTrinidad + bas.cSpace + wr1.cand + bas.cSpace + wr1.cTabago; // Trinidad and Tabago
let cTunisia = bas.cTu + bas.cni + phn.csia; // Tunisia
let cTurkey = bas.cTu + bas.crk + bas.cey; // Turkey
let cTurkmenistan = bas.cTu + bas.crk + phn.cmen + phn.cistan; // Turkmenistan
let cTuvalu = bas.cTu + phn.cval + bas.cu; // Tuvalu
let cUganda = bas.cUg + phn.canda; // Uganda
let cUkraine = bas.cUk + phn.crain + bas.ce; // Ukraine
let cUnitedArabEmirates = wr1.cUnited + bas.cSpace + wr1.cArab + bas.cSpace + wr1.cEmirates; // United Arab Emirates
let cUnitedKingdom = wr1.cUnited + bas.cSpace + bas.cKi + bas.cng + phn.cdom; // United Kingdom
let cUnitedStatesOfAmerica = wr1.cUnited + bas.cSpace + wr1.cStates + bas.cSpace + bas.cof + bas.cSpace + wr1.cAmerica; // United States Of Ammerica
let cUruguay = bas.cUr + bas.cug + phn.cuay; // Uruguay
let cUzbekistan = bas.cUz + bas.cbe + phn.ckistan; // Uzbekistan
let cVanuatu = bas.cVa + bas.cnu + bas.cat + bas.cu; // Vanuatu
let cVenezuela = bas.cVe + bas.cne + bas.czu + phn.cela; // Venezuela
let cVietnam = bas.cVi + bas.cet + phn.cnam; // Vietnam
let cYemen = bas.cYe + phn.cmen; // Yemen
let cZambia = bas.cZa + phn.cmbia; // Zambia
let cZimbabwe = bas.cZi + bas.cmb + bas.cab + bas.cwe; // Zimbabwe

module.exports = {
  // Countries
  [bas.cc + cAfghanistan]: cAfghanistan, // Afghanistan
  [bas.cc + cAlbania]: cAlbania, // Albania
  [bas.cc + cAlgeria]: cAlgeria, // Algeria
  [bas.cc + cAndorra]: cAndorra, // Andorra
  [bas.cc + cAngola]: cAngola, // Angola
  [bas.cc + cAntigua]: cAntigua, // Antigua
  [bas.cc + cArgentina]: cArgentina, // Argentina
  [bas.cc + cArmenia]: cArmenia, // Armenia
  [bas.cc + cAustralia]: cAustralia, // Australia
  [bas.cc + cAustria]: cAustria, // Austria
  [bas.cc + cAzerbaijan]: cAzerbaijan, // Azerbaijan
  [bas.cc + cBahamas]: cBahamas, // Bahamas
  [bas.cc + cBahrain]: cBahrain, // Bahrain
  [bas.cc + cBangladesh]: cBangladesh, // Bangladesh
  [bas.cc + cBarbados]: cBarbados, // Barbados
  [bas.cc + cBarbuda]: cBarbuda, // Barbuda
  [bas.cc + cBelarus]: cBelarus, // Belarus
  [bas.cc + cBelgium]: cBelgium, // Belgium
  [bas.cc + cBelize]: cBelize, // Belize
  [bas.cc + cBenin]: cBenin, // Benin
  [bas.cc + cBhutan]: cBhutan, // Bhutan
  [bas.cc + cBolivia]: cBolivia, // Bolivia
  [bas.cc + cBosnia]: cBosnia, // Bosnia
  [bas.cc + cBotswana]: cBotswana, // Botswana
  [bas.cc + cBrazil]: cBrazil, // Brazil
  [bas.cc + cBrunei]: cBrunei, // Brunei
  [bas.cc + cBulgaria]: cBulgaria, // Bulgaria
  [bas.cc + cBurkinaFaso]: cBurkinaFaso, // BurkinaFaso
  [bas.cc + cBurundi]: cBurundi, // Burundi
  [bas.cc + con.cCotedlvoire]: cCotedlvoire, // Cote dlvoire
  [bas.cc + con.cCaboVerde]: cCaboVerde, // Cabo Verde
  [bas.cc + cCambodia]: cCambodia, // Cambodia
  [bas.cc + cCameroon]: cCameroon, // Cameroon
  [bas.cc + cCanada]: cCanada, // Canada
  [bas.cc + con.cCentralAfricanRepublic]: cCentralAfricanRepublic, // Central African Republic
  [bas.cc + cChad]: cChad, // Chad
  [bas.cc + cChile]: cChile, // Chile
  [bas.cc + cChina]: cChina, // China
  [bas.cc + cColombia]: cColombia, // Colombia
  [bas.cc + cComoros]: cComoros, // Comoros
  [bas.cc + cCongo]: cCongo, // Congo
  [bas.cc + con.cCostaRica]: cCostaRica, // Costa Rica
  [bas.cc + cCroatia]: cCroatia, // Croatia
  [bas.cc + cCuba]: cCuba, // Cuba
  [bas.cc + cCyprus]: cCyprus, // Cyprus
  [bas.cc + cCzechia]: cCzechia, // Czechia
  [bas.cc + con.cDemocraticRepublicOfTheCongo]: cDemocraticRepublicOfTheCongo, // Democratic Republic of the Congo
  [bas.cc + cDenmark]: cDenmark, // Denmark
  [bas.cc + cDjibouti]: cDjibouti, // Djibouti
  [bas.cc + cDominica]: cDominica, // Dominica
  [bas.cc + con.cDominicanRepublic]: cDominicanRepublic, // cDominican Republic
  [bas.cc + cEcuador]: cEcuador, // Ecuador
  [bas.cc + cEgypt]: cEgypt, // Egypt
  [bas.cc + con.cElSalvador]: cElSalvador, // El Salvador
  [bas.cc + con.cEquatorialGuinea]: cEquatorialGuinea, // Equatorial Guinea
  [bas.cc + cEritrea]: cEritrea, // Eritrea
  [bas.cc + cEstonia]: cEstonia, // Estonia
  [bas.cc + cEswatini]: cEswatini, // Eswatini -- Formerly Swaziland
  [bas.cc + cEthiopia]: cEthiopia, // Ethiopia
  [bas.cc + cFiji]: cFiji, // Fiji
  [bas.cc + cFinland]: cFinland, // Finland
  [bas.cc + cFrance]: cFrance, // France
  [bas.cc + cGabon]: cGabon, // Gabon
  [bas.cc + cGambia]: cGambia, // Gambia
  [bas.cc + cGeorgia]: cGeorgia, // Georgia
  [bas.cc + cGermany]: cGermany, // Germany
  [bas.cc + cGhana]: cGhana, // Ghana
  [bas.cc + cGreece]: cGreece, // Greece
  [bas.cc + cGrenada]: cGrenada, // Grenada
  [bas.cc + cGuatemala]: cGuatemala, // Guatemala
  [bas.cc + cGuinea]: cGuinea, // Guinea
  [bas.cc + con.cGuineaBissau]: cGuineaBissau, // Guinea-Bissau
  [bas.cc + cGuyana]: cGuyana, // Guyana
  [bas.cc + cHaiti]: cHaiti, // Haiti
  [bas.cc + cHerzegovina]: cHerzegovina, // Herzegovina
  [bas.cc + con.cHolySee]: cHolySee, // Holy See
  [bas.cc + cHonduras]: cHonduras, // Honduras
  [bas.cc + cHungary]: cHungary, // Hungary
  [bas.cc + cIceland]: cIceland, // Iceland
  [bas.cc + cIndia]: cIndia, // India
  [bas.cc + cIndonesia]: cIndonesia, // Indonesia
  [bas.cc + cIran]: cIran, // Iran
  [bas.cc + cIraq]: cIraq, // Iraq
  [bas.cc + cIreland]: cIreland, // Ireland
  [bas.cc + cIsrael]: cIsrael, // Israel
  [bas.cc + cItaly]: cItaly, // Italy
  [bas.cc + cJamaica]: cJamaica, // Jamaica
  [bas.cc + cJapan]: cJapan, // Japan
  [bas.cc + cJordan]: cJordan, // Jordan
  [bas.cc + cKazakhstan]: cKazakhstan, // Kazakhstan
  [bas.cc + cKenya]: cKenya, // Kenya
  [bas.cc + cKiribati]: cKiribati, // Kiribati
  [bas.cc + cKuwait]: cKuwait, // Kuwait
  [bas.cc + cKyrgyzstan]: cKyrgyzstan, // Kyrgyzstan
  [bas.cc + cLaos]: cLaos, // Laos
  [bas.cc + cLatvia]: cLatvia, // Latvia
  [bas.cc + cLebanon]: cLebanon, // Lebanon
  [bas.cc + cLesotho]: cLesotho, // Lesotho
  [bas.cc + cLiberia]: cLiberia, // Liberia
  [bas.cc + cLibya]: cLibya, // Libya
  [bas.cc + cLiechtenstein]: cLiechtenstein, // Liechtenstein
  [bas.cc + cLithuania]: cLithuania, // Lithuania
  [bas.cc + cLuxembourg]: cLuxembourg, // Luxembourg
  [bas.cc + cMadagascar]: cMadagascar, // Madagascar
  [bas.cc + cMalawi]: cMalawi, // Malawi
  [bas.cc + cMalaysia]: cMalaysia, // Malaysia
  [bas.cc + cMaldives]: cMaldives, // Maldives
  [bas.cc + cMali]: cMali, // Mali
  [bas.cc + cMalta]: cMalta, // Malta
  [bas.cc + con.cMarshallIslands]: cMarshallIslands, // Marshall Islands
  [bas.cc + cMauritania]: cMauritania, // Mauritania
  [bas.cc + cMauritius]: cMauritius, // Mauritius
  [bas.cc + cMexico]: cMexico, // Mexico
  [bas.cc + cMicronesia]: cMicronesia, // Micronesia
  [bas.cc + cMoldova]: cMoldova, // Moldova
  [bas.cc + cMonaco]: cMonaco, // Monaco
  [bas.cc + cMongolia]: cMongolia, // Mongolia
  [bas.cc + cMontenegro]: cMontenegro, // Montenegro
  [bas.cc + cMorocco]: cMorocco, // Morocco
  [bas.cc + cMozambique]: cMozambique, // Mozambique
  [bas.cc + cMyanmar]: cMyanmar, // Myanmar
  [bas.cc + cNamibia]: cNamibia, // Namibia
  [bas.cc + cNauru]: cNauru, // Nauru
  [bas.cc + cNepal]: cNepal, // Nepal
  [bas.cc + cNetherlands]: cNetherlands, // Netherlands
  [bas.cc + con.cNewZealand]: cNewZealand, // New Zealand
  [bas.cc + cNevis]: cNevis, // Nevis
  [bas.cc + cNicaragua]: cNicaragua, // Nicaragua
  [bas.cc + cNiger]: cNiger, // Niger
  [bas.cc + cNigeria]: cNigeria, // Nigeria
  [bas.cc + con.cNorthKorea]: cNorthKorea, // North Korea
  [bas.cc + con.cNorthMacedonia]: cNorthMacedonia, // North Macedonia
  [bas.cc + cNorway]: cNorway, // Norway
  [bas.cc + cOman]: cOman, // Oman
  [bas.cc + cPakistan]: cPakistan, // Pakistan
  [bas.cc + cPalau]: cPalau, // Palau
  [bas.cc + cPalestine]: cPalestine, // Palestine
  [bas.cc + cPanama]: cPanama, // Panama
  [bas.cc + con.cPapuaNewGuinea]: cPapuaNewGuinea, // Papua New Guinea
  [bas.cc + cParaguay]: cParaguay, // Paraguay
  [bas.cc + cPeru]: cPeru, // Peru
  [bas.cc + cPhilippines]: cPhilippines, // Philippines
  [bas.cc + cPoland]: cPoland, // Poland
  [bas.cc + cPortugal]: cPortugal, // Portugal
  [bas.cc + cPrincipe]: cPrincipe, // Principe
  [bas.cc + cQatar]: cQatar, // Qatar
  [bas.cc + cRomania]: cRomania, // Romania
  [bas.cc + cRussia]: cRussia, // Russia
  [bas.cc + cRwanda]: cRwanda, // Rwanda
  [bas.cc + con.cSaintKitts]: cSaintKitts, // Saint Kitts
  [bas.cc + con.cSaintLucia]: cSaintLucia, // Saint Lucia
  [bas.cc + con.cSaintVincent]: cSaintVincent, // Saint Vincent
  [bas.cc + cSomoa]: cSomoa, // Somoa
  [bas.cc + con.cSanMarino]: cSanMarino, // San Marino
  [bas.cc + con.cSaoTome]: cSaoTome, // Sao Tome
  [bas.cc + con.cSaudiArabia]: cSaudiArabia, // Saudi Arabia
  [bas.cc + cSenegal]: cSenegal, // Senegal
  [bas.cc + cSerbia]: cSerbia, // Serbia
  [bas.cc + cSeychelles]: cSeychelles, // Seychelles
  [bas.cc + con.cSierraLeone]: cSierraLeone, // Sierra Leone
  [bas.cc + cSingapore]: cSingapore, // Singapore
  [bas.cc + cSlovakia]: cSlovakia, // Slovakia
  [bas.cc + cSlovenia]: cSlovenia, // Slovenia
  [bas.cc + con.cSolomonIslands]: cSolomonIslands, // Solomon Islands
  [bas.cc + cSomalia]: cSomalia, // Somalia
  [bas.cc + con.cSouthAfrica]: cSouthAfrica, // South Africa
  [bas.cc + con.cSouthKorea]: cSouthKorea, // South Korea
  [bas.cc + con.cSouthSudan]: cSouthSudan, // South Sudan
  [bas.cc + cSpain]: cSpain, // Spain
  [bas.cc + con.cSriLanka]: cSriLanka, // Sri Lanka
  [bas.cc + cSudan]: cSudan, // Sudan
  [bas.cc + cSuriname]: cSuriname, // Suriname
  [bas.cc + cSweden]: cSweden, // Sweden
  [bas.cc + cSwitzerland]: cSwitzerland, // Switzerland
  [bas.cc + cSyria]: cSyria, // Syria
  [bas.cc + cTajikistan]: cTajikistan, // Tajikistan
  [bas.cc + cTanzania]: cTanzania, // Tanzania
  [bas.cc + cThailand]: cThailand, // Thailand
  [bas.cc + con.cTimorLeste]: cTimorLeste, // Timor-Leste
  [bas.cc + cTogo]: cTogo, // Togo
  [bas.cc + cTonga]: cTonga, // Tonga
  [bas.cc + con.cTrinidadAndTabago]: cTrinidadAndTabago, // Trinidad and Tabago
  [bas.cc + cTunisia]: cTunisia, // Tunisia
  [bas.cc + cTurkey]: cTurkey, // Turkey
  [bas.cc + cTurkmenistan]: cTurkmenistan, // Turkmenistan
  [bas.cc + cTuvalu]: cTuvalu, // Tuvalu
  [bas.cc + cUganda]: cUganda, // Uganda
  [bas.cc + cUkraine]: cUkraine, // Ukraine
  [bas.cc + con.cUnitedArabEmirates]: cUnitedArabEmirates, // United Arab Emirates
  [bas.cc + con.cUnitedKingdom]: cUnitedKingdom, // United Kingdom
  [bas.cc + con.cUnitedStatesOfAmerica]: cUnitedStatesOfAmerica, // United States Of Ammerica
  [bas.cc + cUruguay]: cUruguay, // Uruguay
  [bas.cc + cUzbekistan]: cUzbekistan, // Uzbekistan
  [bas.cc + cVanuatu]: cVanuatu, // Vanuatu
  [bas.cc + cVenezuela]: cVenezuela, // Venezuela
  [bas.cc + cVietnam]: cVietnam, // Vietnam
  [bas.cc + cYemen]: cYemen, // Yemen
  [bas.cc + cZambia]: cZambia, // Zambia
  [bas.cc + cZimbabwe]: cZimbabwe // Zimbabwe
};
