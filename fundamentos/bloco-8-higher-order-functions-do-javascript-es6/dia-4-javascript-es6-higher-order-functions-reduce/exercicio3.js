const books = require('./books');

const averageAge = () => {
  return books.reduce((acc, value) => {
    acc += Math.round((value.releaseYear - value.author.birthYear) / books.length);
    return acc;
  }, 0);
};
