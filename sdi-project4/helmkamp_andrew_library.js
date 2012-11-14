/***********
*Andrew J. Helmkamp
*SDI 1211
*Library
***********/

var myLibrary = function() {
	
	var phonePattern = function(phoneNumber) {
		var phoneReg = /(?:1-?)?\d{3}[\s-]?\d{3}[\s-]?\d{4}/;
		var isPhoneNumber = phoneReg.test(phoneNumber);

		return isPhoneNumber;
	};

	var emailPattern = function(email) {
		var emailReg = /\w+@\w+\.\w{3}/;
		var isEmailAddress = emailReg.test(email);

		return isEmailAddress;
	};

	var urlPattern = function(url) {
		var urlReg = /https?:\/\/.+/;
		var isURL = urlReg.test(url);

		return isURL;
	};

	return {
		"phonePattern": phonePattern,
		"emailPattern": emailPattern,
		"urlPattern":   urlPattern
	};
};