const { User } = require('../database/models');
const errorHandler = require('../../helpers/errorHandler');
const JWT = require('../../helpers/JWT');

const login = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['password'] },
  });
  if (user) return JWT.create({ id: user.id });
  throw errorHandler('Invalid fields', 400);
};

module.exports = { login };
