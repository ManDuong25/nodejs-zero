const connection = require('../config/database');

const getHomepage = (req, res) => {

    let users = [];

    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            users = results;
        }
    )

    console.log(">>> check users: ", users);
    res.send('Hello World and Nodemon!')
}

const getABCpage = (req, res) => {
    console.log(req);
    res.send('Check ABC!')
}

const getManDuongpage = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage,
    getABCpage,
    getManDuongpage
}