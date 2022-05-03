const errorHandler = require('./errorHandler');
const categoryService = require('../api/services/categoryService');

module.exports = async (categoryIds) => {
  if (!categoryIds) {
    throw errorHandler('"categoryIds" is required', 400);
  }
  await Promise.all(
    categoryIds.map((category) => categoryService.getById(category)),
  );
};
