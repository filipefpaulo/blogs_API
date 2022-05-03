require('dotenv/config');
const jwt = require('jsonwebtoken');
const errorHandler = require('./errorHandler');

const create = (data) =>
  jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: '15m',
    algorithm: 'HS256',
  });

const verify = (token) =>
  new Promise((resolve, _reject) => {
    if (!token) throw errorHandler('Token not found', 401);
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) throw errorHandler('Expired or invalid token', 401);
      resolve(decoded);
    });
  });

module.exports = {
  create,
  verify,
};
