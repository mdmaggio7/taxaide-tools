//----------------------------------------------------------------------------------------

//    var StartYear = 2018;
//    var StopYear = 2019; // Tax parameters
//----------------------------------------------------------------------------------------
var _TY = _StopYear = "2019"; // Tax parameters
//----------------------------------------------------------------------------------------

// 2018, 2019
// 2019 values are not correct - just created to test

_FPL[_TY] = 7820;
_FPLAddr[_TY] = 4320;
_IndividualPercentage[_TY] = 0.0975;

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

 {age:30, individual:240, couple:459, family:624},
 {age:34, individual:263, couple:506, family:647},
 {age:39, individual:270, couple:519, family:660},
 {age:44, individual:288, couple:555, family:696},
 {age:49, individual:327, couple:634, family:775},
 {age:54, individual:379, couple:737, family:878},
 {age:55, individual:389, couple:758, family:899},
]

_PremiumRegion2[_TY] = [

 {age:30, individual:249, couple:598, family:697},
 {age:34, individual:282, couple:664, family:721},
 {age:39, individual:290, couple:679, family:736},
 {age:44, individual:310, couple:719, family:777},
 {age:49, individual:354, couple:807, family:865},
 {age:54, individual:411, couple:922, family:979},
 {age:55, individual:423, couple:946, family:1003},
]

_PremiumRegion3[_TY] = [

 {age:30, individual:325, couple:650, family:1155},
 {age:34, individual:427, couple:854, family:1192},
 {age:39, individual:438, couple:876, family:1214},
 {age:44, individual:469, couple:938, family:1276},
 {age:49, individual:536, couple:1071, family:1409},
 {age:54, individual:622, couple:1244, family:1582},
 {age:55, individual:641, couple:1281, family:1619},
]
