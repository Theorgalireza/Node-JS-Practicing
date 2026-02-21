const EventEmitter = require("events");

const customEmitter = new EventEmitter();

//two lovely methods for this object
// on - listen for an event
// emit - emit an event


//Sequence is matter
customEmitter.on("click", (name,age) => {
  console.log(`data recieved ${name} ${age}`);
});
customEmitter.on("click", () => {
  console.log(`Some other logic here`);
});
customEmitter.emit("click", "Alireza", 20);
