const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (r) {
  let sum = 0;
  r.forEach((element) => {
    sum += element;
  });
  return sum;
};

const multiply = function (r) {
  let total = 0;
  r.forEach((element) => {
    if (total === 0) {
      total = element;
    } else {
      total *= element;
    }
  });
  return total;
};

const power = function (a, b) {
  let exponent = b;
  let total = a;
  for (let x = exponent; x > 1; x--) {
    total = total * a;
  }
  return total;
};

const factorial = function (num) {
  let total = num;
  if (total > 0) {
    for (let x = total - 1; x > 0; x--) {
      total = total * x;
      console.log(total);
    }
  } else {
    total = 1;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
