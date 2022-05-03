const express = require('express');

const userController = require('../api/controllers/userController');
const tokenMiddleware = require('../api/middlewares/tokenMiddleware');

const validateNewUser = require('../api/middlewares/validateNewUser');

const user = express.Router();
user.use(express.json());

user.post('/', validateNewUser, userController.create);

user.use(tokenMiddleware);

user.get('/', userController.getAll);
user.get('/:id', userController.getById);

user.delete('/me', userController.deleteUser);

module.exports = user;
