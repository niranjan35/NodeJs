var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
  res.writeHead(200,{
    "Content-Type" : "text/html"
  });
  var reader = fs.createReadStream(__dirname+"/index.html","UTF-8");
  reader.pipe(res);
});

server.listen(1337,"127.0.0.1");
