//----------------------------------------------------------------------------------------

//    var StartYear = 2018;
//    var StopYear = 2023; // Tax parameters
//----------------------------------------------------------------------------------------
var _TY = _StopYear = "2023"; // Tax parameters
//----------------------------------------------------------------------------------------

// Preliminary 2023 values

// These are Federal Poverty Level - Single is FLP + FPLAddr
_FPL[_TY] = 9440;
_FPLAddr[_TY] = 5140;
_IndividualPercentage[_TY] = 0.0912;

_AffordTab1[_TY] = [
   {incomelimit:20385, percentage:0},
   {incomelimit:27180, percentage:0.028},
   {incomelimit:33975, percentage:0.041},
   {incomelimit:40770, percentage:0.0485},
   {incomelimit:47565, percentage:0.0745},
   {incomelimit:54360, percentage:0.076},
   {incomelimit:54361, percentage:0.08}
];
_AffordTab2[_TY] = [
   {incomelimit:27465, percentage:0},
   {incomelimit:36620, percentage:0.043},
   {incomelimit:45775, percentage:0.062},
   {incomelimit:54930, percentage:0.074},
   {incomelimit:64085, percentage:0.0745},
   {incomelimit:73240, percentage:0.076},
   {incomelimit:73241, percentage:0.08}
];
_AffordTab3[_TY] = [
   {incomelimit:34545, percentage:0},
   {incomelimit:46060, percentage:0.034},
   {incomelimit:57575, percentage:0.049},
   {incomelimit:69090, percentage:0.0585},
   {incomelimit:80605, percentage:0.0745},
   {incomelimit:92120, percentage:0.076},
   {incomelimit:92121, percentage:0.08}
];
_PremiumRegion1[_TY] = [

   {age:30, individual:327, couple:653, family:833},
   {age:34, individual:342, couple:683, family:873},
   {age:39, individual:351, couple:701, family:891},
   {age:44, individual:380, couple:760, family:940},
   {age:49, individual:428, couple:856, family:1046},
   {age:54, individual:498, couple:995, family:1185},
   {age:55, individual:512, couple:1024, family:1214}
];

_PremiumRegion2[_TY] = [

   {age:30, individual:312, couple:624, family:806},
   {age:34, individual:326, couple:652, family:834},
   {age:39, individual:335, couple:669, family:851},
   {age:44, individual:358, couple:716, family:898},
   {age:49, individual:409, couple:818, family:1000},
   {age:54, individual:475, couple:950, family:1132},
   {age:55, individual:490, couple:979, family:1160}
];

_PremiumRegion3[_TY] = [

   {age:30, individual:406, couple:812, family:1051},
   {age:34, individual:489, couple:978, family:1251},
   {age:39, individual:502, couple:1004, family:1276},
   {age:44, individual:537, couple:1074, family:1347},
   {age:49, individual:614, couple:1227, family:1499},
   {age:54, individual:713, couple:1425, family:1698},
   {age:55, individual:734, couple:1467, family:1740}
];



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
