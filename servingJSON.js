var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
  res.writeHead(200,{
    "Content-Type" : "application/json"
  });
  var myObj = {
    name : "Niranjan",
    age : "21",
    job : "Developer"
  };
  res.end(JSON.stringify(myObj));
});

server.listen(1337,"127.0.0.1");
