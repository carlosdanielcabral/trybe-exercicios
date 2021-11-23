// Criar uma função que imprima a área dos trẽs retàngulos

const { rectangle1, rectangle2, rectangle3, rectangles } = require('./data');

const rectangleArea = ([ base, altura ]) => base * altura;

rectangles.forEach((rectangle) => console.log(rectangleArea(rectangle)));
