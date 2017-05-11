var express = require("express");
var app = express();

app.get("/",function(req,res){
  res.send("this is the requested home page");
});

app.get("/contacts",function(req,res){
  res.send("this is the requested response page");
});

app.get("/profile/:id",function(req,res){
  res.send("the requested profile id is : "+req.params.id);
});

app.listen(3000,"127.0.0.1");
