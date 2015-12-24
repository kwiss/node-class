// -----------------
// Write buffer
// -----------------

// Following is the syntax of the method to write into a Node Buffer:
// ---------------------------------------------------------
// buf.write(string[, offset][, length][, encoding])
// ---------------------------------------------------------
// This method returns number of octets written. 
// If there is not enough space in the buffer to fit the entire string, 
// it will write a part of the string.

// example
buf = new Buffer(256);
len = buf.write("Simply Easy Learning");
console.log("Octets written : "+  len);