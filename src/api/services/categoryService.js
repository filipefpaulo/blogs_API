const { Category } = require('../database/models');
const errorHandler = require('../../helpers/errorHandler');

const getAll = () => Category.findAll();

const getById = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) throw errorHandler('"categoryIds" not found', 400);
  return category;
};

const create = async (name) => {
  const [category, created] = await Category.findOrCreate({
    where: { name },
  });
  if (created) return category;
  throw errorHandler('Category already exists', 409);
};

module.exports = {
  getAll,
  getById,
  create,
};
