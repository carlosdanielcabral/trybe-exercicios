previousColor = () => ({
  type: PREVIOUS_COLOR,
});

nextColor = () => ({
  type: NEXT_COLOR,
});

addRandomColor = (randomColor) => ({
  type: RANDOM_COLOR,
  randomColor,
});
