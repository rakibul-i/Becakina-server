function errorHandler(err, req, res, next) {
  if (err.headerSent) {
    return next();
  }
  res.status(500).send({ error: err });
}

module.exports = { errorHandler };
