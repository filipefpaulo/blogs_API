const JWT = require('../../helpers/JWT');

module.exports = async (req, _res, next) => {
  const token = req.headers.authorization;
  const { id } = await JWT.verify(token);
  req.body.id = id;
  return next();
};
