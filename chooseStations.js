const chooseStations = stations => {
  const filtered = stations.filter(station => {
    if (
      station[1] >= 20 &&
      ['school', 'community centre'].includes(station[2])
    ) {
      return true;
    }
  });
  return filtered.map(station => station[0]);
};

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
];
console.log(chooseStations(stations));
