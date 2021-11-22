const books = require('./books');

const longestNamedBook = () => {
  return books.reduce((acc,  book) => {
    if (acc.name.length > book.name.length) return acc;
    return book;
  });
};
