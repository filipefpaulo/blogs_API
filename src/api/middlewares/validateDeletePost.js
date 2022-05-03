const postService = require('../services/postService');

const errorHandler = require('../../helpers/errorHandler');

module.exports = async (req, _res, next) => {
  const { id } = req.params;
  const { id: userId } = req.body;
  const post = await postService.getById(id);
  if (!post) throw errorHandler('Post does not exist', 404);
  if (userId !== post.userId) {
    throw errorHandler('Unauthorized user', 401);
  }
  return next();
};
