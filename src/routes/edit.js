const express = require('express');
const route = express.Router();

const editController = require('../app/controllers/EditController');

// newsController.index


route.get('/:id/edit', editController.index);
route.get('/:id/delete', editController.index2);
route.put('/:id', editController.update);
route.delete('/:id', editController.delete);
module.exports = route;
