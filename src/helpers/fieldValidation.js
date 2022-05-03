const errorHandler = require('./errorHandler');

const emailValidation = (field, name) => {
  if (name === 'email' && !/\S+@\S+\.\S+/.test(field)) {
    throw errorHandler('"email" must be a valid email', 400);
  }
};

const lengthValidation = (field, length, name) => {
  if (length && field.length < length) {
    throw errorHandler(
      `"${name}" length must be ${
        name === 'displayName' ? 'at least ' : ''
      }${length} characters long`,
      400,
    );
  }
};

module.exports = (field, { length, name }) => {
  if (field === '') {
    throw errorHandler(`"${name}" is not allowed to be empty`, 400);
  }
  if (!field) {
    throw errorHandler(`"${name}" is required`, 400);
  }
  lengthValidation(field, length, name);
  emailValidation(field, name);
};
