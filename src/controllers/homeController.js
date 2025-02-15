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
    res.send("create a new user!");
}

module.exports = {
    getHomepage,
    getABCpage,
    getManDuongpage,
    postCreateUser
}