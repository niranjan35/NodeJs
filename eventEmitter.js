var events = require("events");
var util = require("util");

var person = function(name){
  this.name = name;
};

util.inherits(person,events.EventEmitter);

var name1 = new person("name1");
var name2 = new person("name2");
var name3 = new person("name3");

var people = [name1,name2,name3];

people.forEach(function(person){
  person.on("speak",function(mssg){
    console.log(mssg);
  });
});

name1.emit("speak","hello world from name1");
