/***********
*Andrew J. Helmkamp
*SDI 1211
*Library
***********/

var myLibrary = function() {
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

//Number Methods
	//This method will will format a number to make it have two decimal places
	var formatToCurrency = function(num) {
		var number = num.toFixed(2);

		return number;
	};

	//This method will tell if a number is above or below a certain percent

	//This method will find the difference of hours or days between two dates
	var timeDifference = function(date1, date2) {
		var dateOne = new Date(date1);
		var dateTwo = new Date(date2);

		if (dateOne.getTime() > dateTwo.getTime()) {
			var difference = dateOne.getTime() - dateTwo.getTime();
		} else{
			var difference = dateTwo.getTime() - dateOne.getTime();
		};

		return difference/3600000;
	};

	//This method will convert a string to a number
	var stringToNumber = function(string) {
		if (isNaN(string)) {
			return;
		} else{
			var num = Number(string);
			return num;
		};
	};

//Array methods
	//This method will find the smallest number in an array that is greater 
	//than a given number
	var findSmallestNumber = function(arr, num) {
		var number = num;
		
		arr.sort(function(a,b){return a-b});

		for (i=0; i<arr.length; i++) {
			if ((arr[i] > num) && (arr[i] < arr[i]+1)) {
				 return arr[i];
			};
		};
	};

	//This method will find the total value of just the numbers in an array
	var sumArray = function(arr) {
		var sum = 0;
		for (i=0; i<arr.length; i++) {
			if (isFinite(arr[i])) {
				sum += arr[i];
			};
		};
		return sum;
	};

	//This method will sort an array of objects
	var sortArray = function(obs) {
		var sorted = obs.sort(function(a,b){return a.a-b.a});

		return sorted;
	};


	return {
		"phonePattern":       phonePattern,
		"emailPattern":       emailPattern,
		"urlPattern":         urlPattern,
		"titleCase":          titleCase,
		"replaceSeperator":   replaceSeperator,
		"formatToCurrency":   formatToCurrency,
		"timeDifference":     timeDifference,
		"stringToNumber":     stringToNumber,
		"findSmallestNumber": findSmallestNumber,
		"sumArray":           sumArray, 
		"sortArray":          sortArray
	};
};
























