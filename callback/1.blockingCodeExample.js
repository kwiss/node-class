// Require fs for file read
// no callback here
var fs = require("fs");
// Create a variable to store file read
var data = fs.readFileSync('input.txt');
// output data to string
console.log(data.toString());
// This will wait data read before outputing
console.log("Program Ended");