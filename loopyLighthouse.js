let i = 100;
while (i <= 200) {
  let out = '';
  if (i % 3 === 0) {
    out += 'Loopy';
  }
  if (i % 4 === 0) {
    out += 'Lighthouse';
  }
  console.log(out || i);
  i++;
}
