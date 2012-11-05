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
	} else {
		console.log("You missed your deadline. Now you won't be able to go.");
	};
};

var everyoneHasSeats = function (numTickets, city) {
	if (numTickets === 3) {
		console.log("Logan will have a reserved seat on the flight to " + city + ".");
		return true;
	} else {
		console.log("Logan will not have a reserved seat on the flight to " + city + ".");
		return false;
	}
};

var canIGetAWootWoot = function (woot) {
	while (woot > 1) {
		console.log("WOOT!");
		woot--;
	};

	return woot;
};

var comfortLevel = function (city, degreeOfComfort) {
	var statement = "Your flight to " + city + " will be " + degreeOfComfort + ".";
	return statement;
};

/*var assignTickets = function (planeTickets, numTickets) {
	if (numTickets === 3 && hasTickets) {
		var len = planeTickets.length;
		for (var i = 0; i < len; i++) {
			console.log(planeTickets[i] + " has been issued for the flight to Grand Forks.");
		};
		return planeTickets;
	};
};*/

var assignTickets = function (planeTickets, numTickets) {
	if (numTickets === 3 && hasTickets) {
		for (var i = planeTickets.length - 1; i >= 0; i--) {
			console.log(planeTickets[i] + " has been issued for the flight to Grand Forks.");
		};

		return planeTickets;
	};
};

//Function Calls

 
var tickets = assignTickets(planeTickets, 3);

if (tickets.length == 3) {
	ticketCheck(hasTickets);
	var woots = canIGetAWootWoot(woot);
	var seats = everyoneHasSeats(2, "Chicago");
	if (seats) {
		var comfort = comfortLevel("Chicago", "very comfortable");
		console.log(comfort);
	} else{
		var comfort = comfortLevel("Chicago", "very uncomfortable");
		console.log(comfort);
	};
} else{
	console.log("You seem to be missing a ticket or have too many. Please check to see if everyone has their ticket.");
};






