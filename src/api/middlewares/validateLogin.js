const fieldValidation = require('../../helpers/fieldValidation');

module.exports = (req, _res, next) => {
  const { email, password } = req.body;
  fieldValidation(email, { name: 'email' });
  fieldValidation(password, {
    length: 6,
    name: 'password',
  });
  return next();
};
