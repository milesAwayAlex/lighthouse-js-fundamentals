// The Sober Engineer Solution:
const lastIndexOf = (array, e) => {
  return array.lastIndexOf(e);
};

// The MadSkillz Solution:
const lastIndexOfMadSkills = (array, e) => {
  let i = array.length - 1;
  while (i >= 0) {
    if (array[i] === e) {
      return i;
    }
    i--;
  }
  return -1;
};

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), '=?', 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), '=?', 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), '=?', -1);
console.log(lastIndexOf([5, 5, 5], 5), '=?', 2);
console.log(lastIndexOf([], 3), '=?', -1);

console.log(lastIndexOfMadSkills([0, 1, 4, 1, 2], 1), '=?', 3);
console.log(lastIndexOfMadSkills([0, 1, 4, 1, 2], 2), '=?', 4);
console.log(lastIndexOfMadSkills([0, 1, 4, 1, 2], 3), '=?', -1);
console.log(lastIndexOfMadSkills([5, 5, 5], 5), '=?', 2);
console.log(lastIndexOfMadSkills([], 3), '=?', -1);
