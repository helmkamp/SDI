/***********
*Andrew J. Helmkamp
*SDI 1211
*String Library
***********/

var stringLibrary = function() {
//String Methods	
	//This method will check to see if the value given is a phone number.
	var phonePattern = function(phoneNumber) {
		var phoneReg = /(?:1-?)?\d{3}[\s-]?\d{3}[\s-]?\d{4}/;
		var isPhoneNumber = phoneReg.test(phoneNumber);

		return isPhoneNumber;
	};

	//This method will check to see if the value given is an email address.
	var emailPattern = function(email) {
		var emailReg = /\w+@\w+\.\w{3}/;
		var isEmailAddress = emailReg.test(email);

		return isEmailAddress;
	};

	//This method will check to see if the value given is a URL.
	var urlPattern = function(url) {
		var urlReg = /https?:\/\/.+/;
		var isURL = urlReg.test(url);

		return isURL;
	};

	//This method will break apart a string and capitalize the first letter of each word.
	//I found this bit of code at http://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
	var titleCase = function(string) {
		return string.replace(/\w\S*/g, 
					function(txt) {
						return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
					}
				);
	};

	//This method will replace a , with a /
	var replaceSeperator = function(string) {
		var newString = string.replace(/,/g,"/")

		return newString;
	};
	
	return {
		"phonePattern":       phonePattern,
		"emailPattern":       emailPattern,
		"urlPattern":         urlPattern,
		"titleCase":          titleCase,
		"replaceSeperator":   replaceSeperator
	};
};
























