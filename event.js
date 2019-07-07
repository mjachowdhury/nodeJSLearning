const events = require("events");//it doesn't ned path as it is a core module of node js

const emitter = new events.EventEmitter();//event has EventEmitter constructor

//to file up custom event we use on function
//on call back function take two parameters 'message and user' here message is as as salamu alykum and user is Computer
emitter.on("customEvent", (message, user) => {
    console.log(`${ user } : ${ message }`);

});

//these are custom events
emitter.emit("customEvent", "As salamu alukum", "Computer");
emitter.emit("customEvent", "That is prety cool", "Mohammed");