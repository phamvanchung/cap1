const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');
const upload = require('../middleware/multer');

router.get('/private/:token',authController.private);
// router.post('/logout',authController.logout);
router.post('/login',authController.login);
router.post('/register',upload.single('avatar'),authController.register);


module.exports = router;