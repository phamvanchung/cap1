const express = require('express');
const router = express.Router();
const postController = require('../controllers/PostController');
const {uploadPost} = require('../middleware/multer');

// router.get('/search',postController.search)

router.delete('/delete-post/:postId',postController.deletePost);
router.put('/update-post/:postId',uploadPost.single('avatar'),postController.updatePost);
router.post('/add-post',uploadPost.single('avatar'),postController.addPost);
router.get('/get-postId/:postId',postController.getIdPost);
router.get('/get-all-post',postController.getPost);


module.exports = router;