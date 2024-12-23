const convertToCelsius = function (degreesFahrenheit) {
  let degreesCelciusFull = ((degreesFahrenheit - 32) * 5) / 9;
  let degreesCelciusRounded = degreesCelciusFull.toFixed(1);
  return Number(degreesCelciusRounded);
};

const convertToFahrenheit = function (degreesCelcius) {
  let degreesFahrenheitFull = (degreesCelcius * 9) / 5 + 32;
  let degreesFahrenheitRounded = degreesFahrenheitFull.toFixed(1);
  return Number(degreesFahrenheitRounded);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
