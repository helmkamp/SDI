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


var stringLib = new stringLibrary();
var mathLib = new mathLibrary();
var arrayLib = new arrayLibrary();

console.log("Phone number test: " + stringLib.phonePattern("123-456-7890"));
console.log("Email address test: " + stringLib.emailPattern("helmy@fullsail.edu"));
console.log("URL test: " + stringLib.urlPattern("http://www.fullsail.com"));
console.log(stringLib.titleCase("This is a title"));
console.log(stringLib.replaceSeperator("my,shopping,list"));
console.log("Your formated number is " + mathLib.formatToCurrency(10.323423234));
console.log("Percentage Test: " + mathLib.percentTest(4,6));
console.log("The time difference is " + mathLib.timeDifference("2012, 4, 11", "2012, 4, 12") + " hours.");
console.log("Number: ", mathLib.stringToNumber("23"));
console.log("The smallest number that's greater than your number is: " + arrayLib.findSmallestNumber(smallArr, 2));
console.log("The sum of your array is: " + arrayLib.sumArray(sumArr));
console.log("Sorted Array: ", arrayLib.sortArray(sortArr));