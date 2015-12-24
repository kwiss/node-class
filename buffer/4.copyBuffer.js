// -----------------
// Copy Buffer
// -----------------

// Following is the syntax of the method to copy a node buffer:
// ---------------------------------------------------------
// buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
// ---------------------------------------------------------
// No return value. Copies data from a region of this buffer 
// to a region in the target buffer even if the target memory 
// region overlaps with the source. If undefined the targetStart
// and sourceStart parameters default to 0 while sourceEnd defaults to buffer.length.

// example
var buffer1 = new Buffer('ABC');
// copy a buffer
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());
