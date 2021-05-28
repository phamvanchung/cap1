const express = require('express');
const router = express.Router();
const cartController = require('../controllers/CartController');

router.get('/cart',cartController.getCart);
router.post('/add-to-cart', cartController.addToCart)

module.exports = router;
