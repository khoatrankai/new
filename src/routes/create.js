const express = require('express');
const route = express.Router();

const createController = require('../app/controllers/CreateController');

// newsController.index

route.get('/product', createController.create);
route.post('/store', createController.store);

module.exports = route;