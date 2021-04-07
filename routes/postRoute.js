const express = require('express');
const router = express.Router();
const postController = require('../controllers/PostController');
const upload = require('../controllers/model/ModelMulter');


router.delete('/delete-post/:postId',postController.delete);
router.put('/update-post/:postId',postController.update);
router.get('/add-post',postController.showAddPost);
router.post('/add-post',upload.single('avatar'),postController.addPost);
router.get('/create',postController.create);
router.get('/get-postId/:postId',postController.showId);
router.get('/',postController.show);


module.exports = router;