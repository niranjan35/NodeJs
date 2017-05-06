var http = require("http");

var server = http.createServer(function(req,res){
  res.writeHead(200,{
    "Content-Type" : "text/plain"
  });

  res.write("Hello, this'll showup on your localhost");

  res.end();
});

server.listen(1337,"127.0.0.1");
