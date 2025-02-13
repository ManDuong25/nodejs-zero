const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! and Nodemon')
})

router.get('/abc', (req, res) => {
    console.log(req);
    res.send('Check ABC!')
})

router.get('/manduong', (req, res) => {
    res.render('sample.ejs');
})

module.exports = router;