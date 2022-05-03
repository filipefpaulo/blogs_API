const categoryService = require('../services/categoryService');

const getAll = async (_req, res) => {
  const users = await categoryService.getAll();
  return res.status(200).json(users);
};

const create = async (req, res) => {
  const { name } = req.body;
  const user = await categoryService.create(name);
  return res.status(201).json(user);
};

module.exports = {
  getAll,
  create,
};
