const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');

router.get('/private/:token',authController.private);
router.post('/logout',authController.logout);
router.post('/login',authController.login);
router.post('/register',authController.register);


module.exports = router;