const express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    // res.send('Hello, World!!!');
    // res.sendFile(__dirname + '/../views/index.html');
    res.render('../views/html/index.html');
});

module.exports = router;

