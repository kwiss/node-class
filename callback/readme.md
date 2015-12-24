# What is Callback?

Callback is an asynchronous equivalent for a function. A callback function is called at the completion of a given task. Node makes heavy use of callbacks. All APIs of Node are written is such a way that they supports callbacks.

For example, a function to read a file may start reading file and return the control to execution environment immidiately so that next instruction can be executed. Once file I/O is complete, it will call the callback function while passing the callback function, the content of the file as parameter. So there is no blocking or wait for File I/O. This makes Node.js highly scalable, as it can process high number of request without waiting for any function to return result.

These two examples explain the concept of blocking and non-blocking calls. First example shows that program blocks until it reads the file and then only it proceeds to end the program where as in second example, program does not wait for file reading but it just proceeded to print "Program Ended" and same time program without blocking continues reading the file.

Thus, a blocking program executes very much in sequence and from programming point of view its easier to implement the logic but non-blocking programs does not execute in sequence, so in case a program needs to use any data to be processed, it should be kept with-in the same block to make it sequential execution.