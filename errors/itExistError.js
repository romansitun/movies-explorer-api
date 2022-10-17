const { ERROR_CODE_IT_EXIST } = require('../utils/constants');

class itExistError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_IT_EXIST;
  }
}

module.exports = itExistError;
