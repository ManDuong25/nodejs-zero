const express = require('express');
const path = require('path');
require('dotenv').config();
// const express = require('express'); // common js

// console.log("check env: ", process.env);

const app = express(); // App cua express
const port = process.env.PORT || 3001; // port cua App
const hostname = process.env.HOST_NAME || "localhost";

// config template engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

console.log(path.join(__dirname, '/src/public'));

// config static files
app.use(express.static(path.join(__dirname, '/src/public')));

// Khai báo route
app.get('/', (req, res) => {
    res.send('Hello World! and Nodemon')
})

app.get('/abc', (req, res) => {
    console.log(req);
    res.send('Check ABC!')
})

app.get('/manduong', (req, res) => {
    res.render('sample.ejs');
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})