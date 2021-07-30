const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
    res.send({ alive: true });
});

module.exports = router;