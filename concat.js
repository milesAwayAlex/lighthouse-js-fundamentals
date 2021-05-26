const concat = (array, ...arrs) => {
  return array.concat(...arrs);
};

console.log(
  concat([1, 2, 3], [4, 5, 6], [7, 8, 9]),
  '=?',
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
);
console.log(concat([0, 3, 1], [9, 7, 2]), '=?', [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), '=?', [9, 7, 2]);
console.log(concat([5, 10], []), '=?', [5, 10]);

// Merge Arrays Stretch

const merge = (array, ...arrs) => {
  return array.concat(...arrs).sort((a, b) => a - b);
};
console.log(merge([4, 5, 6], [1, 2, 3, 4]), '=?', [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), '=?', [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), '=?', [1, 2, 6]);
