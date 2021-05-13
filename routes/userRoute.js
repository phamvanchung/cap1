const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');

const userController = require('../controllers/UserController');

router.delete('/delete-user/:userId',userController.deleteUser)
router.put('/update-user/:userId',userController.updateUser)
router.post('/add-user',upload.single('avatar'),userController.addUser)
router.get('/get-userId/:userId',userController.getIdUser)
router.get('/',userController.getAllUser )

module.exports = router;
