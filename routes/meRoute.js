const express = require('express');
const router = express.Router();

const meController = require('../controllers/MeController');

router.get('/trash/post', meController.trashPost);
router.get('/stored/post', meController.storedPost);

module.exports = router;