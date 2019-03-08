var express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');



/* GET users listing. */
// to get all list of users
router.get('/', userController.list);



module.exports = router;
