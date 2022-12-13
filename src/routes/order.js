const express = require('express');
const route = express.Router();

const orderController = require('../app/controllers/OrderController');

// newsController.index
route.get('/:id', orderController.index);

module.exports = route;
