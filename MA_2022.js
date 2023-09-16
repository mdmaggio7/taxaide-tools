//----------------------------------------------------------------------------------------

//    var StartYear = 2018;
//    var StopYear = 2020; // Tax parameters
//----------------------------------------------------------------------------------------
var _TY = _StopYear = "2022"; // Tax parameters
//----------------------------------------------------------------------------------------

// Preliminary 2022 values

_FPL[_TY] = 8340;
_FPLAddr[_TY] = 4540;
_IndividualPercentage[_TY] = 0.0961;

_AffordTab1[_TY] = [
  {incomelimit:19320, percentage:0.0},
  {incomelimit:25760, percentage:0.029},
  {incomelimit:32200, percentage:0.042},
  {incomelimit:38640, percentage:0.05},
  {incomelimit:45080, percentage:0.0745},
  {incomelimit:51520, percentage:0.076},
  {incomelimit:51521, percentage:0.08}
];
_AffordTab2[_TY] = [
  {incomelimit:26130, percentage:0.0},
  {incomelimit:34840, percentage:0.043},
  {incomelimit:43550, percentage:0.062},
  {incomelimit:52260, percentage:0.074},
  {incomelimit:60970, percentage:0.0745},
  {incomelimit:69680, percentage:0.076},
  {incomelimit:69681, percentage:0.08}
];
_AffordTab3Plus[_TY] = [
  {incomelimit:32940, percentage:0.0},
  {incomelimit:43920, percentage:0.0345},
  {incomelimit:54900, percentage:0.0495},
  {incomelimit:65880, percentage:0.0585},
  {incomelimit:76860, percentage:0.0745},
  {incomelimit:87840, percentage:0.076},
  {incomelimit:87841, percentage:0.08}
];
_PremiumRegion1[_TY] = [

 {age:30, individual:295, couple:590, family:764},
 {age:34, individual:311, couple:621, family:794},
 {age:39, individual:319, couple:637, family:810},
 {age:44, individual:341, couple:682, family:855},
 {age:49, individual:389, couple:778, family:951},
 {age:54, individual:452, couple:904, family:1077},
 {age:55, individual:466, couple:931, family:1104},
]

_PremiumRegion2[_TY] = [

 {age:30, individual:277, couple:554, family:716},
 {age:34, individual:290, couple:580, family:714},
 {age:39, individual:298, couple:595, family:756},
 {age:44, individual:318, couple:636, family:798},
 {age:49, individual:364, couple:727, family:888},
 {age:54, individual:422, couple:844, family:1006},
 {age:55, individual:435, couple:869, family:1031},
]

_PremiumRegion3[_TY] = [

 {age:30, individual:374, couple:748, family:968},
 {age:34, individual:444, couple:887, family:1135},
 {age:39, individual:455, couple:910, family:1158},
 {age:44, individual:487, couple:974, family:1222},
 {age:49, individual:557, couple:1113, family:1360},
 {age:54, individual:647, couple:1293, family:1540},
 {age:55, individual:666, couple:1331, family:1578},
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
