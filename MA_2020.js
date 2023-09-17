//----------------------------------------------------------------------------------------

//    var StartYear = 2018;
//    var StopYear = 2020; // Tax parameters
//----------------------------------------------------------------------------------------
var _TY = _StopYear = "2020"; // Tax parameters
//----------------------------------------------------------------------------------------

// 2020 values confirmed from 2020 Schedule HC Instructions

_FPL[_TY] = 8070;
_FPLAddr[_TY] = 4420;
_IndividualPercentage[_TY] = 0.0978;

_AffordTab1[_TY] = [
  {incomelimit:18735, percentage:0.0},
  {incomelimit:24980, percentage:0.029},
  {incomelimit:31225, percentage:0.042},
  {incomelimit:37470, percentage:0.05},
  {incomelimit:43715, percentage:0.0745},
  {incomelimit:49960, percentage:0.076},
  {incomelimit:49961, percentage:0.08}
];
_AffordTab2[_TY] = [
  {incomelimit:25365, percentage:0.0},
  {incomelimit:33820, percentage:0.043},
  {incomelimit:42275, percentage:0.062},
  {incomelimit:50730, percentage:0.074},
  {incomelimit:59185, percentage:0.0745},
  {incomelimit:67640, percentage:0.076},
  {incomelimit:67641, percentage:0.08}
];
_AffordTab3[_TY] = [
  {incomelimit:31995, percentage:0.0},
  {incomelimit:42660, percentage:0.034},
  {incomelimit:53325, percentage:0.049},
  {incomelimit:63990, percentage:0.0585},
  {incomelimit:74655, percentage:0.0745},
  {incomelimit:85320, percentage:0.076},
  {incomelimit:85321, percentage:0.08}
];
_PremiumRegion1[_TY] = [

 {age:30, individual:241, couple:482, family:624},
 {age:34, individual:258, couple:516, family:660},
 {age:39, individual:265, couple:530, family:674},
 {age:44, individual:284, couple:567, family:711},
 {age:49, individual:324, couple:647, family:791},
 {age:54, individual:376, couple:752, family:896},
 {age:55, individual:387, couple:774, family:918},
]

_PremiumRegion2[_TY] = [

 {age:30, individual:269, couple:538, family:696},
 {age:34, individual:288, couple:576, family:736},
 {age:39, individual:298, couple:591, family:751},
 {age:44, individual:316, couple:632, family:793},
 {age:49, individual:361, couple:722, family:883},
 {age:54, individual:420, couple:839, family:999},
 {age:55, individual:432, couple:864, family:1024},
]

_PremiumRegion3[_TY] = [

 {age:30, individual:343, couple:685, family:887},
 {age:34, individual:414, couple:827, family:1058},
 {age:39, individual:425, couple:849, family:1079},
 {age:44, individual:454, couple:908, family:1139},
 {age:49, individual:519, couple:1037, family:1268},
 {age:54, individual:603, couple:1205, family:1436},
 {age:55, individual:621, couple:1241, family:1471},
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
