const fieldValidation = require('../../helpers/fieldValidation');
const categoryIdsValidation = require('../../helpers/categoryIdsValidation');

module.exports = async (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  fieldValidation(title, { name: 'title' });
  fieldValidation(content, { name: 'content' });
  await categoryIdsValidation(categoryIds);
  return next();
};
