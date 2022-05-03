const fieldValidation = require('../../helpers/fieldValidation');

module.exports = (req, _res, next) => {
  const { name } = req.body;
  fieldValidation(name, { name: 'name' });
  return next();
};
