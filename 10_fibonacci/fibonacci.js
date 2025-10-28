const fibonacci = function (arg) {
  let count;
  if (typeof arg !== "number") {
    count = parseInt(arg);
  } else {
    count = arg;
  }

  if (count < 0) return "OOPS";
  if (count === 0) return 0;

  let firstLast = 1;
  let secondLast = 0;

  for (let x = 2; x <= count; x++) {
    let current = firstLast + secondLast;
    secondLast = firstLast;
    firstLast = current;
  }

  return firstLast;
};

// Do not edit below this line
module.exports = fibonacci;
