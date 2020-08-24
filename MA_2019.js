//----------------------------------------------------------------------------------------

//    var StartYear = 2018;
//    var StopYear = 2019; // Tax parameters
//----------------------------------------------------------------------------------------
var _TY = _StopYear = "2019"; // Tax parameters
//----------------------------------------------------------------------------------------

// 2019

_FPL[_TY] = 7820;
_FPLAddr[_TY] = 4320;
_IndividualPercentage[_TY] = 0.0986;

_AffordTab1[_TY] = [
  {incomelimit:18210, percentage:0.0},
  {incomelimit:24280, percentage:0.029},
  {incomelimit:30350, percentage:0.042},
  {incomelimit:36420, percentage:0.05},
  {incomelimit:42490, percentage:0.0745},
  {incomelimit:48560, percentage:0.076},
  {incomelimit:48561, percentage:0.08}
];
_AffordTab2[_TY] = [
  {incomelimit:24690, percentage:0.0},
  {incomelimit:32920, percentage:0.043},
  {incomelimit:41150, percentage:0.062},
  {incomelimit:49380, percentage:0.0735},
  {incomelimit:57610, percentage:0.0745},
  {incomelimit:65840, percentage:0.076},
  {incomelimit:65841, percentage:0.08}
];
_AffordTab3Plus[_TY] = [
  {incomelimit:31170, percentage:0.0},
  {incomelimit:41560, percentage:0.034},
  {incomelimit:51950, percentage:0.049},
  {incomelimit:62340, percentage:0.0585},
  {incomelimit:72730, percentage:0.0745},
  {incomelimit:83120, percentage:0.076},
  {incomelimit:83121, percentage:0.08}
];
_PremiumRegion1[_TY] = [

 {age:30, individual:231, couple:461, family:596},
 {age:34, individual:250, couple:500, family:639},
 {age:39, individual:257, couple:513, family:652},
 {age:44, individual:275, couple:549, family:688},
 {age:49, individual:314, couple:627, family:766},
 {age:54, individual:364, couple:728, family:868},
 {age:55, individual:375, couple:750, family:889},
]

_PremiumRegion2[_TY] = [

 {age:30, individual:257, couple:514, family:665},
 {age:34, individual:279, couple:558, family:713},
 {age:39, individual:286, couple:572, family:728},
 {age:44, individual:306, couple:612, family:768},
 {age:49, individual:350, couple:699, family:855},
 {age:54, individual:406, couple:812, family:968},
 {age:55, individual:418, couple:836, family:992},
]

_PremiumRegion3[_TY] = [

 {age:30, individual:342, couple:683, family:885},
 {age:34, individual:421, couple:842, family:1077},
 {age:39, individual:432, couple:864, family:1099},
 {age:44, individual:463, couple:925, family:1160},
 {age:49, individual:528, couple:1056, family:1291},
 {age:54, individual:614, couple:1227, family:1462},
 {age:55, individual:632, couple:1263, family:1498},
]

_Region[_TY+"Berkshire"] = "1";
_Region[_TY+"Franklin"] = "1";
_Region[_TY+"Hampshire"] = "1";
_Region[_TY+"Bristol"] = "2";
_Region[_TY+"Barnstable"] = "2";
_Region[_TY+"Hampden"] = "2";
_Region[_TY+"Middlesex"] = "2";
_Region[_TY+"Norfolk"] = "2";
_Region[_TY+"Plymouth"] = "2";
_Region[_TY+"Suffolk"] = "2";
_Region[_TY+"Worcester"] = "2";
_Region[_TY+"Essex"] = "2";
_Region[_TY+"Dukes"] = "3";
_Region[_TY+"Nantucket"] = "3";
