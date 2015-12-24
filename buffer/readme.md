Pure JavaScript is Unicode friendly but not nice to binary data. When dealing with TCP streams or the file system, it's necessary to handle octet streams. Node provides Buffer class which provides instances to store raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.

Buffer class is a global class and can be accessed in application without importing buffer module.

# Methods Reference
Following is a reference of Buffers module available in Node.js. For a further detail you can refer to official documentation.

# SN  Method & Description
1 new Buffer(size) 
Allocates a new buffer of size octets. Note, size must be no more than kMaxLength. Otherwise, a RangeError will be thrown here.
2 new Buffer(buffer) 
Copies the passed buffer data onto a new Buffer instance.
3 new Buffer(str[, encoding])
Allocates a new buffer containing the given str. encoding defaults to 'utf8'.
4 buf.length
Returns the size of the buffer in bytes. Note that this is not necessarily the size of the contents. length refers to the amount of memory allocated for the buffer object. It does not change when the contents of the buffer are changed.
5 buf.write(string[, offset][, length][, encoding])
Writes string to the buffer at offset using the given encoding. offset defaults to 0, encoding defaults to 'utf8'. length is the number of bytes to write. Returns number of octets written.
6 buf.writeUIntLE(value, offset, byteLength[, noAssert])
Writes value to the buffer at the specified offset and byteLength. Supports up to 48 bits of accuracy. Set noAssert to true to skip validation of value and offset. Defaults to false.
7 buf.writeUIntBE(value, offset, byteLength[, noAssert])
Writes value to the buffer at the specified offset and byteLength. Supports up to 48 bits of accuracy. Set noAssert to true to skip validation of value and offset. Defaults to false.
8 buf.writeIntLE(value, offset, byteLength[, noAssert])
Writes value to the buffer at the specified offset and byteLength. Supports up to 48 bits of accuracy. Set noAssert to true to skip validation of value and offset. Defaults to false.
9 buf.writeIntBE(value, offset, byteLength[, noAssert])
Writes value to the buffer at the specified offset and byteLength. Supports up to 48 bits of accuracy. Set noAssert to true to skip validation of value and offset. Defaults to false.
10  buf.readUIntLE(offset, byteLength[, noAssert])
A generalized version of all numeric read methods. Supports up to 48 bits of accuracy.Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
11  buf.readUIntBE(offset, byteLength[, noAssert])
A generalized version of all numeric read methods. Supports up to 48 bits of accuracy.Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
12  buf.readIntLE(offset, byteLength[, noAssert])
A generalized version of all numeric read methods. Supports up to 48 bits of accuracy.Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
13  buf.readIntBE(offset, byteLength[, noAssert])
A generalized version of all numeric read methods. Supports up to 48 bits of accuracy.Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
14  buf.toString([encoding][, start][, end])
Decodes and returns a string from buffer data encoded using the specified character set encoding.
15  buf.toJSON()
Returns a JSON-representation of the Buffer instance. JSON.stringify implicitly calls this function when stringifying a Buffer instance.
16  buf[index]
Get and set the octet at index. The values refer to individual bytes, so the legal range is between 0x00 and 0xFF hex or 0 and 255.
17  buf.equals(otherBuffer)
Returns a boolean of whether this and otherBuffer have the same bytes.
18  buf.compare(otherBuffer)
Returns a number indicating whether this comes before or after or is the same as the otherBuffer in sort order.
19  buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
Copies data from a region of this buffer to a region in the target buffer even if the target memory region overlaps with the source. If undefined the targetStart and sourceStart parameters default to 0 while sourceEnd defaults to buffer.length.
20  buf.slice([start][, end])
Returns a new buffer which references the same memory as the old, but offset and cropped by the start (defaults to 0) and end (defaults to buffer.length) indexes. Negative indexes start from the end of the buffer.
21  buf.readUInt8(offset[, noAssert])
Reads an unsigned 8 bit integer from the buffer at the specified offset. Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
22  buf.readUInt16LE(offset[, noAssert])
Reads an unsigned 16 bit integer from the buffer at the specified offset with specified endian format. Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
23  buf.readUInt16BE(offset[, noAssert])
Reads an unsigned 16 bit integer from the buffer at the specified offset with specified endian format. Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
24  buf.readUInt32LE(offset[, noAssert])
Reads an unsigned 32 bit integer from the buffer at the specified offset with specified endian format. Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
25  buf.readUInt32BE(offset[, noAssert])
Reads an unsigned 32 bit integer from the buffer at the specified offset with specified endian format. Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
26  buf.readInt8(offset[, noAssert])
Reads a signed 8 bit integer from the buffer at the specified offset. Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
27  buf.readInt16LE(offset[, noAssert])
Reads a signed 16 bit integer from the buffer at the specified offset with specified endian format. Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
28  buf.readInt16BE(offset[, noAssert])
Reads a signed 16 bit integer from the buffer at the specified offset with specified endian format. Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
29  buf.readInt32LE(offset[, noAssert])
Reads a signed 32 bit integer from the buffer at the specified offset with specified endian format. Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
30  buf.readInt32BE(offset[, noAssert])
Reads a signed 32 bit integer from the buffer at the specified offset with specified endian format. Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
31  buf.readFloatLE(offset[, noAssert])
Reads a 32 bit float from the buffer at the specified offset with specified endian format. Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
32  buf.readFloatBE(offset[, noAssert])
Reads a 32 bit float from the buffer at the specified offset with specified endian format. Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
33  buf.readDoubleLE(offset[, noAssert])
Reads a 64 bit double from the buffer at the specified offset with specified endian format. Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
34  buf.readDoubleBE(offset[, noAssert])
Reads a 64 bit double from the buffer at the specified offset with specified endian format. Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
35  buf.writeUInt8(value, offset[, noAssert])
Writes value to the buffer at the specified offset. Note, value must be a valid unsigned 8 bit integer. Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
36  buf.writeUInt16LE(value, offset[, noAssert])
Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid unsigned 16 bit integer. Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
37  buf.writeUInt16BE(value, offset[, noAssert])
Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid unsigned 16 bit integer. Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
38  buf.writeUInt32LE(value, offset[, noAssert])
Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid unsigned 32 bit integer. Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
39  buf.writeUInt32BE(value, offset[, noAssert])
Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid unsigned 32 bit integer. Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
40  buf.writeInt8(value, offset[, noAssert])
Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid signed 8 bit integer. Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
41  buf.writeInt16LE(value, offset[, noAssert])
Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid signed 16 bit integer. Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
42  buf.writeInt16BE(value, offset[, noAssert])
Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid signed 16 bit integer. Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
43  buf.writeInt32LE(value, offset[, noAssert])
Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid signed 32 bit integer. Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
44  buf.writeInt32BE(value, offset[, noAssert])
Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid signed 32 bit integer. Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
45  buf.writeFloatLE(value, offset[, noAssert])
Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid 32 bit float. Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
46  buf.writeFloatBE(value, offset[, noAssert])
Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid 32 bit float. Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
47  buf.writeDoubleLE(value, offset[, noAssert])
Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid 64 bit double. Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
48  buf.writeDoubleBE(value, offset[, noAssert])
Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid 64 bit double. Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
49  buf.fill(value[, offset][, end])
Fills the buffer with the specified value. If the offset (defaults to 0) and end (defaults to buffer.length) are not given it will fill the entire buffer.
Class Methods
SN  Method & Description
1 Buffer.isEncoding(encoding)
Returns true if the encoding is a valid encoding argument, or false otherwise.
2 Buffer.isBuffer(obj)
Tests if obj is a Buffer.
3 Buffer.byteLength(string[, encoding])
Gives the actual byte length of a string. encoding defaults to 'utf8'. This is not the same as String.prototype.length since that returns the number of characters in a string.
4 Buffer.concat(list[, totalLength])
Returns a buffer which is the result of concatenating all the buffers in the list together.
5 Buffer.compare(buf1, buf2)
The same as buf1.compare(buf2). Useful for sorting an Array of Buffers.