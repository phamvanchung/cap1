const express = require('express');
const router = express.Router();
const {uploadShop} =require('../middleware/multer');
const shopController = require('../controllers/shopController');

router.delete('/delete-shop/:shopId', shopController.deleteShop);
router.put('/update-shop/:shopId',shopController.updateShop);
router.post('/add-shop',uploadShop.single('avatar'),shopController.addShop);
router.get('/get-shopId/:shopId', shopController.getIdShop);
router.get('/',shopController.getAllShop);

module.exports = router;