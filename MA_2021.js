//----------------------------------------------------------------------------------------

//    var StartYear = 2018;
//    var StopYear = 2020; // Tax parameters
//----------------------------------------------------------------------------------------
var _TY = _StopYear = "2021"; // Tax parameters
//----------------------------------------------------------------------------------------

// 2020 values confirmed from 2020 Schedule HC Instructions

_FPL[_TY] = 8280;
_FPLAddr[_TY] = 4480;
_IndividualPercentage[_TY] = 0.0983;

_AffordTab1[_TY] = [
  {incomelimit:19140, percentage:0.0},
  {incomelimit:25520, percentage:0.029},
  {incomelimit:31900, percentage:0.042},
  {incomelimit:38280, percentage:0.05},
  {incomelimit:44660, percentage:0.0745},
  {incomelimit:51040, percentage:0.076},
  {incomelimit:51041, percentage:0.08}
];
_AffordTab2[_TY] = [
  {incomelimit:25860, percentage:0.0},
  {incomelimit:34480, percentage:0.043},
  {incomelimit:43100, percentage:0.062},
  {incomelimit:51720, percentage:0.074},
  {incomelimit:60340, percentage:0.0745},
  {incomelimit:68960, percentage:0.076},
  {incomelimit:68961, percentage:0.08}
];
_AffordTab3Plus[_TY] = [
  {incomelimit:32580, percentage:0.0},
  {incomelimit:43440, percentage:0.034},
  {incomelimit:54300, percentage:0.0495},
  {incomelimit:65160, percentage:0.059},
  {incomelimit:76020, percentage:0.0745},
  {incomelimit:86880, percentage:0.076},
  {incomelimit:86881, percentage:0.08}
];
_PremiumRegion1[_TY] = [

 {age:30, individual:271, couple:541, family:700},
 {age:34, individual:283, couple:566, family:724},
 {age:39, individual:291, couple:581, family:738},
 {age:44, individual:311, couple:621, family:779},
 {age:49, individual:355, couple:710, family:867},
 {age:54, individual:413, couple:825, family:982},
 {age:55, individual:425, couple:849, family:1007},
]

_PremiumRegion2[_TY] = [

 {age:30, individual:263, couple:526, family:680},
 {age:34, individual:268, couple:535, family:684},
 {age:39, individual:275, couple:549, family:698},
 {age:44, individual:294, couple:587, family:736},
 {age:49, individual:336, couple:671, family:820},
 {age:54, individual:390, couple:779, family:928},
 {age:55, individual:401, couple:802, family:951},
]

_PremiumRegion3[_TY] = [

 {age:30, individual:365, couple:730, family:945},
 {age:34, individual:413, couple:825, family:1055},
 {age:39, individual:424, couple:847, family:1077},
 {age:44, individual:453, couple:906, family:1136},
 {age:49, individual:518, couple:1035, family:1265},
 {age:54, individual:601, couple:1202, family:1432},
 {age:55, individual:619, couple:1238, family:1468},
]

_Region[_TY+"Berkshire"] = "1";
_Region[_TY+"Franklin"] = "1";
_Region[_TY+"Hampshire"] = "1";
_Region[_TY+"Bristol"] = "2";
_Region[_TY+"Barnstable"] = "2";
_Region[_TY+"Hampden"] = "1";
_Region[_TY+"Middlesex"] = "2";
_Region[_TY+"Norfolk"] = "2";
_Region[_TY+"Plymouth"] = "2";
_Region[_TY+"Suffolk"] = "2";
_Region[_TY+"Worcester"] = "2";
_Region[_TY+"Essex"] = "2";
_Region[_TY+"Dukes"] = "3";
_Region[_TY+"Nantucket"] = "3";
