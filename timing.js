var time = 0;
var timer = setInterval(function(){
  time+=2;
  console.log(time+" has passed");
  if(time>5){
    clearInterval(timer);
  }
},2000);
console.log(__dirname);

setTimeout(function(){
  console.log("time out of 3 seconds");
},3000);
