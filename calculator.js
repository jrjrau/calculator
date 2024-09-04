const add = function(...x) {
	let sum = 0
  x.forEach(element => sum = sum+element);
  return sum
};

const subtract = function(x,y) {
  return x-y
};

const sum = function(x) {
	let result = 0
  x.forEach(element => result = result+=element);
  return result
};

const multiply = function(array) {
 return array.reduce((product, current) => product*current)
};

const power = function(x, y) {
  return Math.pow(x,y)
};

const factorial = function(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
