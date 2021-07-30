const Database = require('./mongo/database');
const express = require('express');
const config = require('./config');


module.exports = class Application {

  constructor() {
    this.config = config;
    this.app = express();
    this.database = new Database('mongodb://mongo:27017');
    this.database.connect();
  }

  registerRouter(path, router) {
    this.app.use(path, router);
  }

  start() {
    this.app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  }
}