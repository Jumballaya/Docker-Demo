const { Router } = require('express');
const BookStore = require('./books.store');

const store = new BookStore();
const router = new Router();

store.load();

router.get('/', (req, res) => {
    res.send({
        count: store.books.length,
        books: store.books,
    });
});

router.get('/title/:title', (req, res) => {
    const title = req.params.title;
    const book = store.getBook(title);
    res.send({
        title,
        book,
    });
});

router.get('/author/:author', (req, res) => {
    const author = req.params.author;
    const books = store.getAuthor(author);
    res.send({
        author,
        books,
    });
});

module.exports = router;