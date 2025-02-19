const express = require('express');
const { getHomepage, getABCpage, getManDuongpage, getCreatepage, getUpdatepage, postCreateUser, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route', handler);    
router.get('/', getHomepage);
router.get('/abc', getABCpage);
router.get('/manduong', getManDuongpage);
router.get('/create', getCreatepage)
router.get('/update/:userId', getUpdatepage);

router.post('/create', postCreateUser);
router.post('/update', postUpdateUser);
router.post('/delete-user/:userId', postDeleteUser);
router.post('/delete-user', postHandleRemoveUser);

module.exports = router;