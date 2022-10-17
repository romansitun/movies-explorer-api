// код для авторизации запроса
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const AuthError = require('../errors/authError');

const auth = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new AuthError('При авторизации произошла ошибка. Токен не передан или передан не в том формате'));
  }

  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(new AuthError('При авторизации произошла ошибка. Переданный токен некорректен'));
  }

  req.user = payload;
  return next();
};

module.exports = auth;
