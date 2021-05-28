const express = require('express');
const router = express.Router();
// const upload = require('../middleware/multer');

const multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/users')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const upload =  multer({storage : storage});

const userController = require('../controllers/UserController');

router.delete('/delete-user/:userId',userController.deleteUser)
router.put('/update-user/:userId',userController.updateUser)
router.post('/add-user',upload.single('avatar'),userController.addUser)
router.get('/get-userId/:userId',userController.getIdUser)
router.get('/',userController.getAllUser )

module.exports = router;
