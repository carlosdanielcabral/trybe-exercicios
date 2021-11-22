const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => {
  return arrays.reduce((acc, value) => {
    value.forEach(element => {
      acc.push(element);
    });
    return acc;
  }, []);
};
