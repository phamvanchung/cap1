const express = require('express');
const router = express.Router();
const postController = require('../controllers/PostController');
const upload = require('../middleware/multer');


// router.get('/photo/:id',postController.showImgId);
// router.get('/photo',postController.showImg);


router.delete('/delete-post/:postId',postController.delete);
router.put('/update-post/:postId',upload.single('avatar'),postController.update);
router.get('/add-post',postController.showAddPost);
router.post('/add-post',upload.single('avatar'),postController.addPost);
router.get('/create',postController.create);
router.get('/get-postId/:postId',postController.showId);
router.get('/',postController.show);


module.exports = router;