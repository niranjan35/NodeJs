var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
  if(req.url === "/home" || req.url === "/"){
    res.writeHead(200,{
      "Content-Type" : "text/html"
    });
    fs.createReadStream(__dirname+"/index.html").pipe(res);
  }
  else if(req.url === "/contact"){
    res.writeHead(200,{
      "Content-Type" : "text/html"
    });
    fs.createReadStream(__dirname+"/contacts.html").pipe(res);
  }
  else if(req.url === "/api/coder"){
    var coder = [{name : "Niranjan1", age : 21},{name : "Niranjan2", age : 20}];
    res.writeHead(200,{
      "Content-Type" : "application/json"
    });
    res.end(JSON.stringify(coder));
  }
  else{
    res.writeHead(200,{
      "Content-Type" : "text/html"
    });
    var reader = fs.createReadStream(__dirname+"/error.html");
    reader.pipe(res);
  }
});

server.listen(1337,"127.0.0.1");
