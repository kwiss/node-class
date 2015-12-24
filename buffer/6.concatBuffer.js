// -----------------
// Concatenate Buffers
// -----------------

// Following is the syntax of the method to concatenate Node buffers
// to a single Node Buffer:
// ---------------------------------------------------------
// Buffer.concat(list[, totalLength])
// ---------------------------------------------------------
// Returns a buffer which is the result of concatenating all the buffers in the list together.

// example
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());
