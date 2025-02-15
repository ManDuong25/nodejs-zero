const express = require('express');
const { getHomepage, getABCpage, getManDuongpage, postCreateUser } = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route', handler);    
router.get('/', getHomepage);
router.get('/abc', getABCpage);
router.get('/manduong', getManDuongpage);

router.post('/create-user', postCreateUser);

module.exports = router;