const reverseString = function (string) {
  let stringLength = string.length;
  let reversedString = "";

  for (let i = stringLength; i > 0; i--) {
    properPosition = stringLength - 1;
    removedLetter = string.charAt(properPosition);
    reversedString = reversedString.concat(removedLetter);
    stringLength = stringLength - 1;
  }

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
