const express = require('express');
const route = express.Router();

const homeController = require('../app/controllers/HomeController');

// newsController.index

route.get('/', homeController.index);
route.get('/test1', homeController.show);
module.exports = route;
