randomColor = () => {
  const char = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let color = '#';
  const random = () => Math.floor(Math.random() * char.length);
  for (let i = 0; i < 6; i += 1) {
    color += char[random()];
  }
  return color;
}
