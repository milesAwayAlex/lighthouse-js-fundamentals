const whichSchool = function (age) {
  let school =
    age < 13
      ? 'Elementary School'
      : age >= 13 && age <= 18
      ? 'Secondary School'
      : 'Lighthouse Labs';
  return school;
};
