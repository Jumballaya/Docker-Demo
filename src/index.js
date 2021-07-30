const Application = require('./application');
const booksRouter = require('./books/books.router');
const appRouter = require('./app.router');

const app = new Application();
app.registerRouter('/books', booksRouter);
app.registerRouter('/', appRouter);
app.start();