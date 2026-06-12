const findTheOldest = function (array) {
  return array.reduce(
    (accum, current) => {
      let accumAge = accum.yearOfDeath - accum.yearOfBirth;
      let yearOfDeath = current.yearOfDeath
        ? current.yearOfDeath
        : new Date().getFullYear();
      let curreAge = yearOfDeath - current.yearOfBirth;

      if (curreAge > accumAge) {
        accum.name = current.name;
        accum.yearOfDeath = current.yearOfDeath
          ? current.yearOfDeath
          : yearOfDeath;
        accum.yearOfBirth = current.yearOfBirth;
        console.log(accum);
      }
      return accum;
    },
    {
      name: "",
      yearOfBirth: 0,
      yearOfDeath: 0,
    },
  );
};

// Do not edit below this line
module.exports = findTheOldest;
