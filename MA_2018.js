        //----------------------------------------------------------------------------------------

    //    var StartYear = 2018;
    //    var StopYear = 2019; // Tax parameters
      //----------------------------------------------------------------------------------------
      var _TY = _StopYear = "2018"; // Tax parameters
      //----------------------------------------------------------------------------------------

// 2018, 2019
// 2019 values are not correct - just created to test

       _FPL[_TY] = 7880;
       _FPLAddr[_TY] = 4180;
       _IndividualPercentage[_TY] = 0.0956;

       _AffordTab1[_TY] = [
         {incomelimit:18090, percentage:0.0},
         {incomelimit:24120, percentage:0.029},
         {incomelimit:30150, percentage:0.042},
         {incomelimit:36180, percentage:0.05},
         {incomelimit:42210, percentage:0.0745},
         {incomelimit:48240, percentage:0.076},
         {incomelimit:48241, percentage:0.0805}
       ];
       _AffordTab2[_TY] = [
         {incomelimit:24360, percentage:0.0},
         {incomelimit:32480, percentage:0.0435},
         {incomelimit:40600, percentage:0.0625},
         {incomelimit:48720, percentage:0.0745},
         {incomelimit:56840, percentage:0.0745},
         {incomelimit:64960, percentage:0.076},
         {incomelimit:64961, percentage:0.0805}
       ];
       _AffordTab3Plus[_TY] = [
         {incomelimit:30630, percentage:0.0},
         {incomelimit:40840, percentage:0.0345},
         {incomelimit:51050, percentage:0.0495},
         {incomelimit:61260, percentage:0.0595},
         {incomelimit:71470, percentage:0.0745},
         {incomelimit:81680, percentage:0.076},
         {incomelimit:81681, percentage:0.0805}
       ];

       _PremiumRegion1[_TY] = [

         {age:30, individual:230, couple:459, family:624},
         {age:34, individual:253, couple:506, family:647},
         {age:39, individual:260, couple:519, family:660},
         {age:44, individual:278, couple:555, family:696},
         {age:49, individual:317, couple:634, family:775},
         {age:54, individual:369, couple:737, family:878},
         {age:55, individual:379, couple:758, family:899},
       ]

       _PremiumRegion2[_TY] = [

         {age:30, individual:249, couple:498, family:697},
         {age:34, individual:282, couple:564, family:721},
         {age:39, individual:290, couple:579, family:736},
         {age:44, individual:310, couple:619, family:777},
         {age:49, individual:354, couple:707, family:865},
         {age:54, individual:411, couple:822, family:979},
         {age:55, individual:423, couple:846, family:1003},
       ]

       _PremiumRegion3[_TY] = [

         {age:30, individual:325, couple:650, family:1055},
         {age:34, individual:427, couple:854, family:1092},
         {age:39, individual:438, couple:876, family:1114},
         {age:44, individual:469, couple:938, family:1176},
         {age:49, individual:536, couple:1071, family:1309},
         {age:54, individual:622, couple:1244, family:1482},
         {age:55, individual:641, couple:1281, family:1519},
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
