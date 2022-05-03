const { User } = require('../database/models');
const errorHandler = require('../../helpers/errorHandler');
const JWT = require('../../helpers/JWT');

const getAll = () => User.findAll();

const getById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) throw errorHandler('User does not exist', 404);
  return user;
};

const create = async ({ displayName, email, password, image }) => {
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: { displayName, password, image },
  });
  if (created) return JWT.create({ id: user.id });
  throw errorHandler('User already registered', 409);
};

const deleteUser = async (id) => User.destroy({ where: { id } });

module.exports = {
  getAll,
  getById,
  create,
  deleteUser,
};
