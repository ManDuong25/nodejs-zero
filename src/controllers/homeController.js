const getHomepage = (req, res) => {
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