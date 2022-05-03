const express = require('express');

const loginController = require('../api/controllers/loginController');

const validateLogin = require('../api/middlewares/validateLogin');

const login = express.Router();
login.use(express.json());

login.post('/', validateLogin, loginController.login);

module.exports = login;
