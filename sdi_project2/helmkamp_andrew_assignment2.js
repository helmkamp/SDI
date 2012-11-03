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

var assignTickets = function (planeTickets, numTickets) {
	if (numTickets === 3 && hasTickets) {
		var len = planeTickets.length;
		for (var i = len - 1; i >= 0; i--) {
			console.log(planeTickets[i] + " has been issued.");
		};
		return true;
	};
};

//Function Calls



if (hasTickets) { 
	var assignTickets = assignTickets(planeTickets, 3);
	if (assignTickets) {
		ticketCheck(hasTickets);
		var woots = canIGetAWootWoot(woot); 	
	} else{
		console.log("You seem to be missing a ticket or have too many. Please check to see if everyone has their ticket.");
	};
	

};





