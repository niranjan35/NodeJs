var http = require("http");
var fs = require("fs");

var readStream = fs.createReadStream(__dirname+"/readMe.txt","UTF-8");
var writeStream = fs.createWriteStream(__dirname+"/writeMe.txt");

fs.mkdir("stuff",function(){
    writeStream = fs.createWriteStream(__dirname+"/stuff/writeMe.txt");
    readStream.on("data",function(chunk){
        writeStream.write(chunk);
    });
 });
