const getAge = (birthDate, deathDate) => {
  if (!deathDate) {
    deathDate = new Date().getFullYear();
  }
  return deathDate - birthDate;
};

const findTheOldest = function (people) {
  return people.reduce((oldest, current) => {
    let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    return oldestAge < currentAge ? current : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
