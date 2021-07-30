const { MongoClient } = require("mongodb");

module.exports = class Database {

    constructor(url) {
        this.client = new MongoClient(url);
    }

    async connect() {
        await this.client.connect();
    }
}