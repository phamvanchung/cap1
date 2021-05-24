const express = require('express');
const router = express.Router();
const postController = require('../controllers/PostController');
const upload = require('../middleware/multer');

router.delete('/delete-post/:postId',postController.deletePost);
router.put('/update-post/:postId',upload.single('avatar'),postController.updatePost);
router.get('/add-post',postController.showAddPost);
router.post('/add-post',upload.single('avatar'),postController.addPost);
router.get('/create',postController.create);
router.get('/get-postId/:postId',postController.getIdPost);
router.get('/',postController.getPost);


module.exports = router;