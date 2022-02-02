const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const randomButton = document.getElementById('random');

// SUBSCRIBE 
store.subscribe(() => {
  const { colors, index } = store.getState();
  const value = document.getElementById('value');
  const container = document.getElementById('container');

  value.innerHTML = colors[index];
  container.style.backgroundColor = colors[index];
});

// EVENT LISTENERS
previousButton.addEventListener('click', () => {
  store.dispatch(previousColor());
});

nextButton.addEventListener('click', () => {
  store.dispatch(nextColor());
});

randomButton.addEventListener('click', () => {
  store.dispatch(addRandomColor(randomColor()));
});
