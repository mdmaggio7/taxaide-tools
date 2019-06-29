//------------------------------------------------------------
// GLOBAL PARAMETERS FOR TAX PARAMETER FILES
//------------------------------------------------------------
var _LineNo = []; // Form line numbers
var _EdExpenseLimits = [];
var _Standard = []; // Exemption and standard deductions
var _ItemLimit = []; // Pease limit on itemized deductions
var _TaxRates = []; // Tax rate schedule
var _CGRates = []; // Capital gains rates
var _MedicalExclusion = [];
var _RetireLimits = [];
var _CTCLimits = [];
var _EICRates = [];
var _FPL = []; // Federal Poverty Line
var _FPLAddr = [];
var _IndividualPercentage = [];
var _PTCFactorVal = [];
var _AffordRate = [];
var _AffordRateEmployerSelf = [];
var _SESocSec = [];
var _SEMedicare = [];
var _SEMaxWages = [];
var _QBILimits = [];
var _NIITLimits = [];
var _AMT = [];
var _SALT = [];
var FPL150 = 0;
var FPL300 = 0;
var FPL;
var FPLAddr;

var _Region = [];
var _AffordTab1 = [];
var _AffordTab2 = [];
var _AffordTab3Plus = [];
var _PremiumRegion1 = [];
var _PremiumRegion2 = [];
var _PremiumRegion3 = [];


//------------------------------------------------------------
// DATE VARIABLES
//------------------------------------------------------------
var _ThisDate = new Date();
var _ThisYear = +_ThisDate.getFullYear();
var _ThisMonth = +_ThisDate.getMonth(); // 0 = January
// Show this year starting in July
var d = (_ThisMonth < 4) ? 1:0; // shift in May
//Reenable this line once we have more than 3 years supported
// var _StartYear = _ThisYear - 3 - d;
var _StartYear = 2018;
var _StopYear = _ThisYear - d; // overridden by individual year file
var d = (_ThisMonth < 11) ? 1:0; // start default year in December
var _DefaultYear = _ThisYear - d;

//------------------------------------------------------------
function _Write_Cookie(	// Writes a cookie
	cookie_name,	// Name of the cookie
	cookie_value,	// Cookie value
	cookie_expires	// Expires (in days)
	) {
// returns true if cookie is able to be set
//------------------------------------------------------------
	if (isNaN(cookie_expires)) cookie_expires = 365; // 1 year
	var d = new Date();
	d.setTime(d.getTime() + (cookie_expires*24*60*60*1000)); // days
	var c_name = cookie_name + "=" + cookie_value;
	var c_expire = "expires=" + d.toUTCString();

	// write the cookie
	document.cookie = c_name + ";" + c_expire + ";path=/;";

	// test the cookie
	var cookie_test = _Read_Cookie(cookie_name);
	return (cookie_test == cookie_value);
}

//------------------------------------------------------------
function _Read_Cookie(
	cookie_name	// Name of the cookie
	) {
// returns the cookie value as text
//------------------------------------------------------------
	var cookie = document.cookie;
	var cookieList = cookie.split(";");
	for (var cookieIdx = 0; cookieIdx < cookieList.length; cookieIdx++) {
		var cn = cookieList[cookieIdx];
		while (cn.charAt(0)==' ') cn = cn.substring(1);
		var cookieVar = cn.split("=");
		if (cookieVar[0] == cookie_name) return (cookieVar[1]);
	}
	return("");
}


// Regions
var Region = [];

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
