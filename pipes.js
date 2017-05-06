var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
  res.writeHead(200,{
    "Content-Type" : "plain/text"
  });
  var readStream = fs.createReadStream(__dirname+"/readMe.txt","UTF-8");
  readStream.pipe(res);
});

server.listen(1337,"127.0.0.1");
