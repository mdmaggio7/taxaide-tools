//----------------------------------------------------------------------------------------

//    var StartYear = 2018;
//    var StopYear = 2024; // Tax parameters
//----------------------------------------------------------------------------------------
var _TY = _StopYear = "2024"; // Tax parameters
//----------------------------------------------------------------------------------------

// Preliminary 2024 values

// These are Federal Poverty Level - Single is FLP + FPLAddr
_FPL[_TY] = 9680;
_FPLAddr[_TY] = 5380;
_IndividualPercentage[_TY] = 0.0839;


_AffordTab1[_TY] = [
    {incomelimit:21870, percentage:0},
    {incomelimit:29160, percentage:0.027},
    {incomelimit:36450, percentage:0.0395},
    {incomelimit:43740, percentage:0.0468},
    {incomelimit:51030, percentage:0.0745},
    {incomelimit:58320, percentage:0.076},
    {incomelimit:58321, percentage:0.08}
 ];
 _AffordTab2[_TY] = [
    {incomelimit:29580, percentage:0},
    {incomelimit:39440, percentage:0.04},
    {incomelimit:49300, percentage:0.0585},
    {incomelimit:59160, percentage:0.0695},
    {incomelimit:69020, percentage:0.0745},
    {incomelimit:78880, percentage:0.076},
    {incomelimit:78881, percentage:0.08}
 ];
 _AffordTab3Plus[_TY] = [
    {incomelimit:37290, percentage:0},
    {incomelimit:49720, percentage:0.0315},
    {incomelimit:62150, percentage:0.0465},
    {incomelimit:74580, percentage:0.055},
    {incomelimit:87010, percentage:0.0745},
    {incomelimit:99440, percentage:0.076},
    {incomelimit:99441, percentage:0.08}
 ];
 

 _PremiumRegion1[_TY] = [

    {age:30, individual:313, couple:626, family:811},
    {age:34, individual:334, couple:667, family:854},
    {age:39, individual:343, couple:685, family:871},
    {age:44, individual:367, couple:733, family:919},
    {age:49, individual:419, couple:837, family:1023},
    {age:54, individual:486, couple:972, family:1158},
    {age:55, individual:501, couple:1001, family:1187}
 ]
 
 _PremiumRegion2[_TY] = [
 
    {age:30, individual:299, couple:597, family:771},
    {age:34, individual:312, couple:624, family:798},
    {age:39, individual:320, couple:640, family:814},
    {age:44, individual:343, couple:685, family:859},
    {age:49, individual:392, couple:783, family:957},
    {age:54, individual:455, couple:909, family:1083},
    {age:55, individual:468, couple:936, family:1110}
 ]
 
 _PremiumRegion3[_TY] = [
 
    {age:30, individual:417, couple:833, family:1079},
    {age:34, individual:512, couple:1024, family:1309},
    {age:39, individual:526, couple:1051, family:1336},
    {age:44, individual:562, couple:1124, family:1410},
    {age:49, individual:642, couple:1284, family:1570},
    {age:54, individual:746, couple:1492, family:1777},
    {age:55, individual:768, couple:1536, family:1821}
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
