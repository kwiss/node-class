// -----------------
// Slice Buffer
// -----------------

// Following is the syntax of the method to get a sub-buffer of a node buffer:
// ---------------------------------------------------------
// buf.slice([start][, end]);
// ---------------------------------------------------------
// Returns a new buffer which references the same memory as the old,
// but offset and cropped by the start (defaults to 0) 
// and end (defaults to buffer.length) indexes. 
// Negative indexes start from the end of the buffer.

// example
var buffer1 = new Buffer('TutorialsPoint');
// slicing a buffer
var buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString());