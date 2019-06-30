//----------------------------------------------------------------------------------------

//    var StartYear = 2018;
//    var StopYear = 2019; // Tax parameters
//----------------------------------------------------------------------------------------
var _TY = _StopYear = "2019"; // Tax parameters
//----------------------------------------------------------------------------------------

// 2018, 2019
// 2019 values are not correct - just created to test

_FPL[_TY] = 8880;
_FPLAddr[_TY] = 5180;
_IndividualPercentage[_TY] = 0.0975;

_AffordTab1[_TY] = [
 {incomelimit:19090, percentage:0.0},
 {incomelimit:25120, percentage:0.029},
 {incomelimit:31150, percentage:0.042},
 {incomelimit:37180, percentage:0.05},
 {incomelimit:43210, percentage:0.0745},
 {incomelimit:49240, percentage:0.076},
 {incomelimit:49241, percentage:0.0805}
];
_AffordTab2[_TY] = [
 {incomelimit:25360, percentage:0.0},
 {incomelimit:31480, percentage:0.0435},
 {incomelimit:41600, percentage:0.0625},
 {incomelimit:49720, percentage:0.0745},
 {incomelimit:57840, percentage:0.0745},
 {incomelimit:65960, percentage:0.076},
 {incomelimit:65961, percentage:0.0805}
];
_AffordTab3Plus[_TY] = [
 {incomelimit:31630, percentage:0.0},
 {incomelimit:41840, percentage:0.0345},
 {incomelimit:52050, percentage:0.0495},
 {incomelimit:62260, percentage:0.0595},
 {incomelimit:72470, percentage:0.0745},
 {incomelimit:82680, percentage:0.076},
 {incomelimit:82681, percentage:0.0805}
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
