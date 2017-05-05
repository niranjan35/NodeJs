var counter = function(arr){
  return "The length of the array is = "+arr.length;
};

var adder = function(a,b){
  return `the sum value = ${a+b}`;
};

var pi = 3.14;

module.exports = {
  counter : counter,
  adder : adder,
  pi : pi
};
