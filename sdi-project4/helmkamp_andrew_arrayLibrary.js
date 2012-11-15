/***********
*Andrew J. Helmkamp
*SDI 1211
*Array Library
***********/

var arrayLibrary = function() {
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
		"findSmallestNumber": findSmallestNumber,
		"sumArray":           sumArray, 
		"sortArray":          sortArray
	};
};