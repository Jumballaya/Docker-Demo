const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

module.exports = class BookStore {

  constructor() {
    this.books = [];
  }

  async load() {
    const jsonPath = path.join(__dirname, 'books.json');
    this.books = JSON.parse((await readFile(jsonPath)).toString());
  }

  getBooks() {
    return this.books;
  }

  getBook(title) {
    for (const book of this.books) {
      if (book.title === title) {
        return book;
      }
    }
    return null;
  }

  getAuthor(author) {
    const books = [];
    for (const book of this.books) {
      if (book.author === author) {
        books.push(book);
      }
    }
    return books;
  }
}