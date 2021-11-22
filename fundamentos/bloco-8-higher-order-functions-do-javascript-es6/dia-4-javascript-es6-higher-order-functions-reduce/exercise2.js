const books = require('./books');

const reduceNames = () => {
  return `"${books.reduce((acc, book, index) => {
    acc.push(book.author.name);
    return acc;
  }, []).join(', ')}."`;
};
