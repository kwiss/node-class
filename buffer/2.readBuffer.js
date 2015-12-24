// -----------------
// Reading from Buffers
// -----------------

// Following is the syntax of the method to read data from a Node Buffer:
// ---------------------------------------------------------
// buf.toString([encoding][, start][, end])
// ---------------------------------------------------------
// This method decodes and returns a string from buffer 
// data encoded using the specified character set encoding.

// example
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde
