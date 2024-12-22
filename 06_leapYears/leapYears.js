const leapYears = function (year) {
  let nonCenturyLeapYear = year % 4 == 0;
  let centuryLeapYear = year % 100 !== 0 || year % 400 == 0;

  if (nonCenturyLeapYear && centuryLeapYear) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
