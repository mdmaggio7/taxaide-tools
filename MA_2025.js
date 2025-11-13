//----------------------------------------------------------------------------------------

//    var StartYear = 2018;
//    var StopYear = 2025; // Tax parameters
//----------------------------------------------------------------------------------------
var _TY = _StopYear = "2025"; // Tax parameters
//----------------------------------------------------------------------------------------

// Preliminary 2025 values

// These are Federal Poverty Level - Single is FLP + FPLAddr
_FPL[_TY] = 9680;
_FPLAddr[_TY] = 5380;
_IndividualPercentage[_TY] = 0.0902;
_FPL_MULT = 5;

_AffordTab1[_TY] = [
   {incomelimit:22590, percentage:0},
   {incomelimit:30120, percentage:0.029},
   {incomelimit:37650, percentage:0.042},
   {incomelimit:45180, percentage:0.05},
   {incomelimit:52710, percentage:0.0745},
   {incomelimit:60240, percentage:0.076},
   {incomelimit:60241, percentage:0.08}
];
_AffordTab2[_TY] = [
   {incomelimit:30660, percentage:0},
   {incomelimit:40880, percentage:0.043},
   {incomelimit:51100, percentage:0.062},
   {incomelimit:61320, percentage:0.074},
   {incomelimit:71540, percentage:0.0745},
   {incomelimit:81760, percentage:0.076},
   {incomelimit:81761, percentage:0.08}
];
_AffordTab3Plus[_TY] = [
   {incomelimit:38730, percentage:0},
   {incomelimit:51640, percentage:0.0345},
   {incomelimit:64550, percentage:0.0495},
   {incomelimit:77460, percentage:0.0585},
   {incomelimit:90370, percentage:0.0745},
   {incomelimit:103280, percentage:0.076},
   {incomelimit:103281, percentage:0.08}
];
_PremiumRegion1[_TY] = [

   {age:30, individual:350, couple:699, family:905},
   {age:34, individual:374, couple:748, family:956},
   {age:39, individual:384, couple:767, family:976},
   {age:44, individual:411, couple:821, family:1029},
   {age:49, individual:469, couple:938, family:1146},
   {age:54, individual:545, couple:1089, family:1298},
   {age:55, individual:561, couple:1121, family:1330}
]

_PremiumRegion2[_TY] = [

   {age:30, individual:320, couple:639, family:825},
   {age:34, individual:334, couple:668, family:854},
   {age:39, individual:343, couple:685, family:871},
   {age:44, individual:367, couple:733, family:920},
   {age:49, individual:419, couple:838, family:1024},
   {age:54, individual:487, couple:973, family:1159},
   {age:55, individual:501, couple:1002, family:1188}
]

_PremiumRegion3[_TY] = [

   {age:30, individual:445, couple:890, family:1151},
   {age:34, individual:539, couple:1078, family:1378},
   {age:39, individual:553, couple:1106, family:1406},
   {age:44, individual:592, couple:1183, family:1484},
   {age:49, individual:676, couple:1351, family:1652},
   {age:54, individual:785, couple:1570, family:1870},
   {age:55, individual:808, couple:1616, family:1917}
]