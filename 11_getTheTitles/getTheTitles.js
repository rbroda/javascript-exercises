const getTheTitles = function (books) {
  let bookTitles = [];

  books.forEach((book) => {
    let bookTitle = book.title;

    bookTitles.push(bookTitle);
  });

  return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
