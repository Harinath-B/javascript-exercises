const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(n) {
	let res = 0;
    n.forEach(i => res += i);
    return res;
};

const multiply = function(n) {
    let pdt = 1;
    n.forEach(i => pdt *= i);
    return pdt;
};

const power = function(n1, n2) {
	return n1 ** n2;
};

const factorial = function(n) {
	if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
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
