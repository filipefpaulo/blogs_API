const userService = require('../services/userService');

const getAll = async (_req, res) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getById(id);
  return res.status(200).json(user);
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const token = await userService.create({
    displayName,
    email,
    password,
    image,
  });
  return res.status(201).json({ token });
};

const deleteUser = async (req, res) => {
  const { id } = req.body;
  await userService.deleteUser(id);
  return res.status(204).end();
};

module.exports = {
  getAll,
  getById,
  create,
  deleteUser,
};
