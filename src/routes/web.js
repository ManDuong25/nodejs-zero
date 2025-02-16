const express = require('express');
const { getHomepage, getABCpage, getManDuongpage, postCreateUser, getCreatepage, getUpdatepage } = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route', handler);    
router.get('/', getHomepage);
router.get('/abc', getABCpage);
router.get('/manduong', getManDuongpage);
router.get('/create', getCreatepage)
router.get('/update/:userId', getUpdatepage);

router.post('/create', postCreateUser);
module.exports = router;