const loopyLighthouse = (range, multiples, words) => {
  for (let i = range[0]; i <= range[1]; i++) {
    let out = '';
    if (i % multiples[0] === 0) {
      out += words[0];
    }
    if (i % multiples[1] === 0) {
      out += words[1];
    }
    console.log(out || i);
  }
};
