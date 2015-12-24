Node js is a single threaded application but it support concurrency via concept of event and callbacks. As every API of Node js are asynchronous and being a single thread, it uses async function calls to maintain the concurrency. Node uses observer pattern. Node thread keeps an event loop and whenever any task get completed, it fires the corresponding event which signals the event listener function to get executed.

# Event Driven Programming

Node.js uses events heavily and it is also one of the reasons why Node.js is pretty fast compared to other similar technologies. As soon as Node starts its server, it simply initiates its variables, delcares functions and then simply waits for event to occur.

In an event-driven application, there is generally a main loop that listens for events, and then triggers a callback function when one of those events is detected.

![event loop](http://www.tutorialspoint.com/nodejs/images/event_loop.jpg "event loop")

While Events seems similar to what callbacks are. The difference lies in the fact that callback functions are called when an asynchronous function returns its result where as event handling works on the observer pattern. The functions which listens to events acts as Observers. Whenever an event gets fired, its listener function starts executing. Node.js has multiple in-built events available through events module and EventEmitter class which is used to bind events and event listeners as follows:

```javascript
// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
```

## Following is the syntax to bind event handler with an event:

```javascript
// Bind event and even handler as follows
eventEmitter.on('eventName', eventHandler);
We can fire an event programatically as follows:

// Fire an event 
eventEmitter.emit('eventName');
```

## Example

Create a js file named main.js having the following code:

```javascript
// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");
```

Now let's try to run the above program as check the output:

```shell
$ node main.js
```

This will produce following result:

```shell
connection succesful.
data received succesfully.
Program Ended.
How Node Applications Work?
In Node Application, any async function accepts a callback as a last parameter and the callback function accepts error as a first parameter. Let's revisit the previous example again. Create a text file named input.txt having following content

PlanetExpress is giving self learning content
to teach the world in simple and easy way!!!!!
```

Create a js file named main.js having the following code:

```javascript
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err){
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("Program Ended");
```

Here fs.readFile() is a async function whose purpose is to read a file. If an error occurs during read of file, then err object will contain the corresponding error else data will contain the contents of the file. readFile passes err and data to callback function after file read operation is complete, which finally prints the content.

```shell
Program Ended
PlanetExpress is giving self learning content
to teach the world in simple and easy way!!!!!
```