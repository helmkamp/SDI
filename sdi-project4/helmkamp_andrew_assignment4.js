/***********
*Andrew J. Helmkamp
*SDI 1211
*Project 4
***********/

//Array to send to the smallest number method
var smallArr = [1,2,5,12,3,8,9,4]
//Array to send to the adding method
var sumArr = [2, "34 43", 3];
//Array of objects to send to the sorting method
var sortArr = [{a:2}, {a:3}, {a:1}];


var myLib = new myLibrary();

console.log("Phone number test: " + myLib.phonePattern("123-456-7890"));
console.log("Email address test: " + myLib.emailPattern("helmy@fullsail.edu"));
console.log("URL test: " + myLib.urlPattern("http://www.fullsail.com"));
console.log(myLib.titleCase("This is a title"));
console.log(myLib.replaceSeperator("my,shopping,list"));
console.log("Your formated number is " + myLib.formatToCurrency(10.323423234));
console.log("The time difference is " + myLib.timeDifference("2012, 4, 11", "2012, 4, 12") + " hours.");
console.log("Number: ", myLib.stringToNumber("23"));
console.log(myLib.findSmallestNumber(smallArr, 2));
console.log(myLib.sumArray(sumArr));
console.log(myLib.sortArray(sortArr));