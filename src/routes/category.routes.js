const express = require('express');

const categoryController = require('../api/controllers/categoryController');
const tokenMiddleware = require('../api/middlewares/tokenMiddleware');

const validateNewCategory = require('../api/middlewares/validateNewCategory');

const category = express.Router();
category.use(express.json());

category.use(tokenMiddleware);

category.get('/', categoryController.getAll);

category.post('/', validateNewCategory, categoryController.create);

module.exports = category;
