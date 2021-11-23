// Criar uma função que receba um objeto como argumento e retorno todos os valores da chave gostos/likes contida nesse objeto

const { alex, gunnar } = require('./data');

const personLikes = ( { name, age, likes }) => 
  `${name} is ${age} years old and likes ${likes.join(', ')}.`;
