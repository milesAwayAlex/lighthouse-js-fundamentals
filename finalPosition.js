const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = moves => {
  let coord = [0, 0];
  const step = (start, move) => {
    switch (move) {
      case 'north':
        start[1]++;
        break;
      case 'south':
        start[1]--;
        break;
      case 'west':
        start[0]--;
        break;
      case 'east':
        start[0]++;
        break;
      default:
        throw new Error('Unknown Direction');
    }
  };
  for (const move of moves) {
    step(coord, move);
  }
  return coord;
};

console.log(finalPosition(moves));
