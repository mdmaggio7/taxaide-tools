        //----------------------------------------------------------------------------------------
        var _TY = _StopYear = "2018"; // Tax parameters
        //----------------------------------------------------------------------------------------
        Barnstable	2
        Berkshire	1
        Bristol	2
        Dukes	3
        Essex	2
        Franklin	1
        Hampden	2
        Hampshire	1
        Middlesex	2
        Nantucket	3
        Norfolk	2
        Plymouth	2
        Suffolk	2
        Worcester	2

        _FPL[_TY] = 7880
        _FPLAddr[_TY] = 4180
        
        // Regions
        // var Region = [];

        _Region["Berkshire"] = "1";
        _Region["Franklin"] = "1";
        _Region["Hampshire"] = "1";
        _Region["Bristol"] = "2";
        _Region["Barnstable"] = "2";
        _Region["Hampden"] = "2";
        _Region["Middlesex"] = "2";
        _Region["Norfolk"] = "2";
        _Region["Plymouth"] = "2";
        _Region["Suffolk"] = "2";
        _Region["Worcester"] = "2";
        _Region["Essex"] = "2";
        _Region["Dukes"] = "3";
        _Region["Nantucket"] = "3";

        // Form line numbers
        // var LineNo = [];
		_LineNo[_TY+":Salary"] = "1";
		_LineNo[_TY+":Business"] = "S1-12";
                _LineNo[_TY+":Earned"] = "1&S1-12";
                _LineNo[_TY+":TaxExInc"] = "2a";
                _LineNo[_TY+":CapGains"] = "S1-13";
                _LineNo[_TY+":QDCG"] = "12";
		_LineNo[_TY+":Pension"] = "4b";
                _LineNo[_TY+":SSI"] = "5a";
                _LineNo[_TY+":SST"] = "5b";
                _LineNo[_TY+":AGI"] = "7";
                _LineNo[_TY+":QBI"] = "9";
                _LineNo[_TY+":Taxable"] = "10";
                _LineNo[_TY+":TNF"] = "";
                _LineNo[_TY+":SEHI"] = "S1-29";
                _LineNo[_TY+":Adjustments"] = "S1-36";
                _LineNo[_TY+":Deductions"] = "8";
                _LineNo[_TY+":TaxAmount"] = "11";
                _LineNo[_TY+":ExcessAPTC"] = "S2-46";
                _LineNo[_TY+":Foreign"] = "S3-48";
                _LineNo[_TY+":Care"] = "S3-49";
                _LineNo[_TY+":LLC"] = "S3-50";
                _LineNo[_TY+":Retire"] = "S3-51";
                _LineNo[_TY+":CTC"] = "12a";
                _LineNo[_TY+":COD"] = "12a";
                _LineNo[_TY+":NRCredit"] = "12";
                _LineNo[_TY+":IRP"] = "S4-61";
                _LineNo[_TY+":EIC"] = "17a";
                _LineNo[_TY+":ACTC"] = "17b";
                _LineNo[_TY+":AOC"] = "17c";
                _LineNo[_TY+":NetPTC"] = "S5-70";
                _LineNo[_TY+":SALT"] = "5d"; // Sched A
                _LineNo[_TY+":ItemDed"] = "17"; // Sched A
		_LineNo[_TY+":UseSchedA"] = "18"; // Sched A
	        _LineNo[_TY+":F8962A"] = "11a";
	        _LineNo[_TY+":F8962B"] = "11b";
	        _LineNo[_TY+":F8962F"] = "11f";
	        _LineNo[_TY+":F2555"] = "45 & 50"; //Form 2555

        // var EdExpenseLimits = [];
		// Source: Pub 970 or Form 8863 (AOC & LLC)
		// For TNF:
                _EdExpenseLimits["MAX"]  = 0;	// First limit
                _EdExpenseLimits["AGI1"] = 1;	// AGI max for first limit
                _EdExpenseLimits["MAX1"] = 2;	// Second limit
                _EdExpenseLimits["AGI2"] = 3;	// AGI max for second limit
                _EdExpenseLimits["MAX2"] = 4;	// Final limit
		// For AOC and LLC:
		_EdExpenseLimits["MAX"]  = 0;	// First limit
		_EdExpenseLimits["SNG1"] = 1;	// AGI max for first limit (SNG, WID, HOH)
		_EdExpenseLimits["SNG2"] = 2;	// AGI phase out (SNG, WID, HOH)
		_EdExpenseLimits["MFJ1"] = 3;	// AGI max for first limit (MFJ)
		_EdExpenseLimits["MFJ2"] = 4;	// AGI phase out (MFJ)
		// For SAV:
		_EdExpenseLimits["N/A"]  = 0;	// N/A
		_EdExpenseLimits["SNG"]  = 1;	// SAV phase out starts (SNG, HOH)
		_EdExpenseLimits["N/A"]  = 2;	// SAV gone (SNG, HOH)
		_EdExpenseLimits["N/A"]  = 3;	// SAV phase out starts (MFJ, WID)
		_EdExpenseLimits["N/A"]  = 4;	// SAV gone (MFJ, WID)

                _EdExpenseLimits[_TY+":TNF"] = "0,0,0,0,0";
                //_EdExpenseLimits[_TY+":TNF"] = "4000,65000,2000,80000,0";	// Need update!
                _EdExpenseLimits[_TY+":LLC"] = "10000,56000,66000,112000,132000";	// Need update!
                _EdExpenseLimits[_TY+":AOC"] = "4000,80000,90000,160000,180000";	// Need update!
		_EdExpenseLimits[_TY+":SAV"] = "N/A,77550,92550,116300,146300";	//Needs update	// Need update!

        // var Standard = [];	// Exemption and standard deductions
                _Standard["Exemption"] = 0;
                _Standard["Minimum"] = 1;
                _Standard["SNG"] = 2;
                _Standard["MFS"] = 4;
                _Standard["MFJ"] = 6;
                _Standard["WID"] = 8;
                _Standard["HOH"] = 10;
		_Standard["Kid"] = 12; // kiddie tax unearned income reporting limit (from Form 8815)
		_Standard["DepAsRel"] = 13; // maximum earned income to be a Dependent as a Relative

                // Standard[year] = Exemption,Mimimum,  SNG,inc,    MFS,inc,    MFJ,inc,    WID,inc,    HOH,inc,  Kiddie, DepAsRel
                _Standard[_TY] = "          0,1050,   12000,1600, 12000,1300, 24000,1300, 24000,1300, 18000,1600,  2100,   4150";

	// var ItemLimit = []; // Limit repealed by new tax law
                _ItemLimit[_TY+":SNG"] = 10000000; //261500;
                _ItemLimit[_TY+":MFJ"] = 10000000; //313800;
                _ItemLimit[_TY+":WID"] = 10000000; //313800;
                _ItemLimit[_TY+":MFS"] = 10000000; //156900;
                _ItemLimit[_TY+":HOH"] = 10000000; //287650;

        // var TaxRates = [];			// New tax law
                _TaxRates[_TY+":PCT"] = " 0.10,  0.12,   0.22,   0.24,   0.32,   0.35,   0.37";
                _TaxRates[_TY+":SNG"] = " 9525, 38700,  82500, 157500, 200000, 500000";
                _TaxRates[_TY+":MFJ"] = "19051, 77400, 165000, 315000, 400000, 600000";
                _TaxRates[_TY+":WID"] = "19051, 77400, 165000, 315000, 400000, 600000";
                _TaxRates[_TY+":MFS"] = " 9526, 38700,  82500, 157500, 200000, 300000";
                _TaxRates[_TY+":HOH"] = "13601, 51800,  82500, 157500, 200000, 500000";
                _TaxRates[_TY+":TRUST"]=" 2550,  2550,   2550,   9150,   9150,  12500";

	// CGRates //
                _CGRates[_TY+":PCT"] = "    0,   0.15,   0.20";
                _CGRates[_TY+":SNG"] = "38600, 425800";
                _CGRates[_TY+":MFJ"] = "77200, 479000";
                _CGRates[_TY+":WID"] = "77200, 479000";
                _CGRates[_TY+":MFS"] = "38600, 239500";
                _CGRates[_TY+":HOH"] = "51700, 452400";
                _CGRates[_TY+":TRUST"]=" 2600,  12700";
		// The old scheme would have been:
                //_CGRates[_TY+":SNG"] = "38700, 500000";
                //_CGRates[_TY+":MFJ"] = "77400, 600000";
                //_CGRates[_TY+":WID"] = "77400, 600000";
                //_CGRates[_TY+":MFS"] = "38700, 500000";
                //_CGRates[_TY+":HOH"] = "51800, 500000";

	// Self-employment tax rates
		_SESocSec[_TY] = 0.124;
		_SEMedicare[_TY] = 0.029;
		_SEMaxWages[_TY] = 128400;

	// MedicalExclusion
		_MedicalExclusion[_TY] = "0.075, 0.075";	// New tax law

	// StateTaxCap
		_SALT[_TY] = 10000;			// New tax law

        // RetireLimits = [];
                // Source: 1040 instructions for line 51
                // MFJ,SNG,HOH,WID,MFS
                _RetireLimits["SNG"] = 0;
                _RetireLimits["WID"] = 0;
                _RetireLimits["MFS"] = 0;
                _RetireLimits["HOH"] = 1;
                _RetireLimits["MFJ"] = 2;
                _RetireLimits[_TY] = "31500,47250,63000";

        // var CTCLimits = [];
                // Source: 1040 instructions for line 52 and Form 8812
                // MFJ,SNG,HOH,WID,MFS
                _CTCLimits["MFJ"] = 0;
                _CTCLimits["SNG"] = 1;
                _CTCLimits["HOH"] = 1;
                _CTCLimits["WID"] = 1;
                _CTCLimits["MFS"] = 2;
                _CTCLimits[_TY+":AGICap"] = "400000,200000,200000";
		_CTCLimits[_TY+":CTCRate"] = 2000;
		_CTCLimits[_TY+":FTCRate"] = 500;
		_CTCLimits[_TY+":ACTCRate"] = 1400;
		_CTCLimits[_TY+":ACTCThreshold"] = 2500;

        // var EICRates = [];
                // Source: search IRS web site "EIC limits" (easier than 1040 instructions)
		// In 1040 instructions, see the EIC table footnotes for limits
		// AGISNG and AGIMFJ are the amounts above which AGI must also be tested
                // SNG and MFJ are the max AGI endpoints of the phaseout
		// WID and HOH are same as SNG, MFS doesn't qualify
		// MAX is the cap amount of EIC
		// RATEUP is the ramp-up rate to the cap
		// RATEDOWN is the ramp-down rate from the cap
		// INVEST is the max investment limit to qualify for EIC
                // Columns are: 0, 1, 2, 3 children

                _EICRates[_TY+":AGISNG"] =   "  8500,  18700,  18700,  18700";
                _EICRates[_TY+":AGIMFJ"] =   " 14200,  24350,  24350,  24350";
                _EICRates[_TY+":SNG"] =      " 15269,  40319,  45801,  49193";
                _EICRates[_TY+":MFJ"] =      " 20949,  46009,  51491,  54883";
                _EICRates[_TY+":MAX"] =      "   519,   3461,   5716,   6431";
                _EICRates[_TY+":RATEUP"] =   "0.0765,   0.34,    0.4,   0.45";
                _EICRates[_TY+":RATEDOWN"] = "0.0765, 0.1598, 0.2106, 0.2106";
                _EICRates[_TY+":INVEST"] = 3500;

	// var FPL = [];
		_FPL[_TY+":US"] =     "12140, 4320";
		_FPL[_TY+":Alaska"] = "15180, 5400";
		_FPL[_TY+":Hawaii"] = "13960, 4970";

	// var PTCFactorVal = [];
		// A,B are FPL% ranges, C-D are PTC multipliers * 100
		// A-B = C-D : (C+(%%%-A)*(D-C)/(B-A))/100
		// 0-133 = 2-2
		// 133-150 = 3-4
		// 150-200 = 4-6.3
		// 200-250 = 6.3-8.05
		// 250-300 = 8.05-9.5
		// 300-400 = 9.5-9.5
		// col 4 = SNG APTC repayment limit

		_PTCFactorVal[_TY+":0"] =   "133, 2.01, 2.01,  300";
		_PTCFactorVal[_TY+":133"] = "150, 3.02, 4.03,  300";
		_PTCFactorVal[_TY+":150"] = "200, 4.03, 6.34,  300";
		_PTCFactorVal[_TY+":200"] = "250, 6.34, 8.10,  750";
		_PTCFactorVal[_TY+":250"] = "300, 8.10, 9.56,  750";
		_PTCFactorVal[_TY+":300"] = "400, 9.56, 9.56, 1250";

	// var AffordRate = [];	// Need verification!
		_AffordRate[_TY] = 0.0805;

	// var AffordRateEmployerSelf = [];
		_AffordRateEmployerSelf[_TY] = 0.0956;

	// var Qualified Business Income Deduction (0.24 tax rate?)
		_QBILimits[_TY+":Rate"] = "0.2";
		_QBILimits[_TY+":SNG"] = "157500";
		_QBILimits[_TY+":MFJ"] = "315000";
		_QBILimits[_TY+":MFS"] = "157500";
		_QBILimits[_TY+":HOH"] = "157500";
		_QBILimits[_TY+":WID"] = "157500";

	// Net Investment Income Tax
		_NIITLimits[_TY+":Rate"] = "0.038";
		_NIITLimits[_TY+":SNG"] = "200000";
		_NIITLimits[_TY+":MFJ"] = "250000";
		_NIITLimits[_TY+":MFS"] = "125000";
		_NIITLimits[_TY+":HOH"] = "200000";
		_NIITLimits[_TY+":WID"] = "250000";

	// Alternative Minimum Tax
		//                  Exempt  Phaseout //  amounts not correct
		_AMT[_TY+":MFJ"] = "109400, 1000000";
		_AMT[_TY+":SNG"] = "70300,   500000";
		_AMT[_TY+":MFS"] = "54700,   500000";
		_AMT[_TY+":HOH"] = "70300,   500000";
		_AMT[_TY+":WID"] = "70300,   500000";
