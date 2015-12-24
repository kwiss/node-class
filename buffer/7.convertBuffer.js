// -----------------
// Convert buf to json
// -----------------

// Following is the syntax of the method to convert a Node Buffer into JSON object:
// ---------------------------------------------------------
// buf.toJSON()
// ---------------------------------------------------------
// This method returns a JSON-representation of the Buffer instance.

// example
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);
console.log(json);