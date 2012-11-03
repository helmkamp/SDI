/***********
*Andrew J. Helmkamp
*SDI 1211
*Project 2
***********/

var planeTickets = ["Logan's ticket", "Andrew's ticket", "Cherish's ticket"];
var someString;
var woot = 3;
var hasTickets = true;

var ticketCheck = function (hasTickets) {
	if (hasTickets) {
		console.log("Finally you have your tickets!");
	} else{
		console.log("You missed your deadline. Now you won't be able to go.");
	};
};

var boolFunction = function () {
	if (true) {

	} else{

	};

	return;
};

var canIGetAWootWoot = function (woot) {
	while (woot > 1) {
		console.log("WOOT!");
		woot--;
	}; 

	return woot;
};

var stringFunction = function () {

	return;
};

var arrayFunction = function (planeTickets) {
	for (var i = planeTickets.length - 1; i >= 0; i--) {
		console.log(planeTickets[i] + " has been issued.");
	};

	return;
};

//Function Calls
arrayFunction(planeTickets);
ticketCheck(hasTickets);

if (hasTickets) { canIGetAWootWoot(woot); };





