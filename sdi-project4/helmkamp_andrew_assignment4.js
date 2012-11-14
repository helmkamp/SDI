/***********
*Andrew J. Helmkamp
*SDI 1211
*Project 4
***********/

var myLib = new myLibrary();

console.log("Phone number test: " + myLib.phonePattern("123-456-7890"));
console.log("Email address test: " + myLib.emailPattern("helmy@fullsail.edu"));
console.log("URL test: " + myLib.urlPattern("http://www.fullsail.com"));
console.log(myLib.titleCase("This is a title"));
console.log(myLib.replaceSeperator("my,shopping,list"));
console.log(myLib.formatToCurrency(10.323423234));
console.log(myLib.stringToNumber("23"));