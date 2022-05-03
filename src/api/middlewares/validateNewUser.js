const fieldValidation = require('../../helpers/fieldValidation');

module.exports = (req, _res, next) => {
  const { displayName, email, password } = req.body;
  const fields = [
    [displayName, { length: 8, name: 'displayName' }],
    [email, { name: 'email' }],
    [password, { length: 6, name: 'password' }],
  ];
  fields.forEach((field) => {
    fieldValidation(...field);
  });
  return next();
};
