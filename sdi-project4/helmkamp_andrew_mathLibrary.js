/***********
*Andrew J. Helmkamp
*SDI 1211
*Math Library
***********/

var mathLibrary = function() {
	//Number Methods

	//This method will will format a number to make it have two decimal places
	var formatToCurrency = function(num) {
		var number = num.toFixed(2);

		return number;
	};

	//This method will tell if a number1 is within a certain percent of number2.
	var percentTest = function(num1, num2) {
		var perentage = 5/100;
		var pctOfNum1 = num1/100;
		var pctOfNum2 = num2/100;

		if (Math.abs(pctOfNum1-pctOfNum2) <= perentage) {
			return true;
		} else{
			return false;
		};
	};

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

	return {
		"formatToCurrency":   formatToCurrency,
		"percentTest": 		  percentTest,
		"timeDifference":     timeDifference,
		"stringToNumber":     stringToNumber
	};
};
