const connection = require('../config/database');
const { getAllUsers, getUserById, updateUserById } = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results }); //
}

const getABCpage = (req, res) => {
    console.log(req);
    res.send('Check ABC!')
}

const getManDuongpage = (req, res) => {
    res.render('sample.ejs');
}

const getCreatepage = (req, res) => {
    res.render('create.ejs');
}

const getUpdatepage = async (req, res) => {
    const userId = req.params.userId;
    const user = await getUserById(userId);
    return res.render('update.ejs', { user: user });
}

const postCreateUser = async (req, res) => {
    console.log(req.body);
    let { email, name, city } = req.body;

    // // Cach 1: Su dung callback
    // connection.query(
    //     `INSERT INTO Users (email, name, city) VALUES (?, ?, ?);`,
    //     [email, name, city],
    //     function (err, results) {
    //         if (results) res.send("Created user succeed!");
    //         else res.send("created user failed!");
    //     }
    // );


    // // Cach 2: Su dung promise
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?);`, [email, name, city]
    );
    // console.log("Check result: ", results);
    if (results) res.send("Created user succeed!");
    else res.send("created user failed!");

    // let [results, fields] = await connection.query(`select * from Users`)
}

const postUpdateUser = async (req, res) => {
    let { email, name, city, userId } = req.body;
    let results = await updateUserById(email, name, city, userId);
    // req.flash('message', results ? 'Updated user succeeded!' : 'Updated user failed!');
    res.redirect('/');
}

module.exports = {
    getHomepage,
    getABCpage,
    getManDuongpage,
    getCreatepage,
    getUpdatepage,
    postCreateUser,
    postUpdateUser
}