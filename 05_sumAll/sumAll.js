const sumAll = function (first, second) {
  let isNumber = typeof first === "number" && typeof second === "number";
  let isInteger = Number.isInteger(first) && Number.isInteger(second);
  let isNegative = first < 0 || second < 0;

  if (!isNumber || !isInteger || isNegative) {
    return "ERROR";
  } else {
    let arrayOfNumbers = [];
    let sumOfNumbers = 0;

    const getArrayOfNumbers = (first, second) => {
      if (first > second) {
        for (let i = second; i <= first; i++) {
          arrayOfNumbers.push(i);
        }
      } else {
        for (let i = first; i <= second; i++) {
          arrayOfNumbers.push(i);
        }
      }
    };
    getArrayOfNumbers(first, second);

    arrayOfNumbers.forEach((number) => {
      sumOfNumbers = sumOfNumbers + number;
    });

    return sumOfNumbers;
  }
};

sumAll(123, 1);

// Do not edit below this line
module.exports = sumAll;
