const express = require('express');

const postController = require('../api/controllers/postController');
const tokenMiddleware = require('../api/middlewares/tokenMiddleware');
const validateNewPost = require('../api/middlewares/validateNewPost');
const validateUpdatePost = require('../api/middlewares/validateUpdatePost');
const validateDeletePost = require('../api/middlewares/validateDeletePost');

const post = express.Router();
post.use(express.json());

post.use(tokenMiddleware);

post.get('/', postController.getAll);
post.get('/search', postController.getBySearch);
post.get('/:id', postController.getById);

post.post('/', validateNewPost, postController.create);

post.put('/:id', validateUpdatePost, postController.updateById);

post.delete('/:id', validateDeletePost, postController.deleteById);

module.exports = post;
