module.exports = (message, code) => ({
  message,
  statusCode: code,
  stack: Error().stack,
});
