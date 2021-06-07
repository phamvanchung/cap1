const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');
const {uploadUser} = require('../middleware/multer');

router.post('/login',authController.login);
router.post('/register',uploadUser.single('avatar'),authController.register);


module.exports = router;