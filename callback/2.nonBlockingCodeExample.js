// Non-Blocking Code Example
// Require fs for file read
var fs = require("fs");

// we use callback
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program Ended");