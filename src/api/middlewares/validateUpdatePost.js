const postService = require('../services/postService');

const fieldValidation = require('../../helpers/fieldValidation');
const errorHandler = require('../../helpers/errorHandler');

module.exports = async (req, _res, next) => {
  const { title, content, categoryIds, id: userId } = req.body;
  const { id } = req.params;
  if (userId !== (await postService.getById(id)).userId) {
    throw errorHandler('Unauthorized user', 401);
  }
  fieldValidation(title, { name: 'title' });
  fieldValidation(content, { name: 'content' });
  if (categoryIds) throw errorHandler('Categories cannot be edited', 400);
  return next();
};
