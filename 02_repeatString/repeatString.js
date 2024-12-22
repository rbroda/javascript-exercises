const repeatString = function (string, repeat) {
  if (repeat < 0) {
    return "ERROR";
  } else if (repeat < 1) {
    return "";
  } else {
    let repeatedString = "";

    for (let i = 1; i <= repeat; i++) {
      repeatedString = repeatedString.concat(string);
    }

    return repeatedString;
  }
};

// Do not edit below this line
module.exports = repeatString;
