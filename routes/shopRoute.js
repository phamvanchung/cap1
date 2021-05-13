const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shopController');

router.delete('delete-shop/shopId', shopController.deleteShop);
router.put('update-shop/:shopId',shopController.updateShop);
router.post('/add-shop',shopController.addShop);
router.get('/get-shopId/:shopId', shopController.getIdShop);
router.get('/',shopController.getAllShop);

module.exports = router;