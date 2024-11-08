const { whitelist } = require('../config/corsOptions');

const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (whitelist.includes(origin)) {
    res.header('Access-control-Allow-Credentials', true);
  }
  next();
};

module.exports = credentials;
