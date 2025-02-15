const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('home.ejs');
}

const getABCpage = (req, res) => {
    console.log(req);
    res.send('Check ABC!')
}

const getManDuongpage = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = (req, res) => {
    console.log(req.body);
    let { email, name, city } = req.body;

    connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?);`,
        [email, name, city],
        function (err, results) {
            if (results) res.send("Created user succeed!");
            else res.send("created user failed!");
        }
    );

}

module.exports = {
    getHomepage,
    getABCpage,
    getManDuongpage,
    postCreateUser
}