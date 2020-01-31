const middlewareNotFound = (req, res, next) => {
  res.status(404).send('<html><body><h1>Rota inexistente</h1><a href="/">Home</a></body></html>');
}

module.exports = middlewareNotFound;