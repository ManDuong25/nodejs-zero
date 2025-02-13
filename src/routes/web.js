const express = require('express');
const { getHomepage, getABCpage, getManDuongpage } = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route', handler);
router.get('/', getHomepage);
router.get('/abc', getABCpage);
router.get('/manduong', getManDuongpage);

module.exports = router;