const { Router } = require('express');

const CurriculoController = require('./controllers/CurriculoController')

const routes = Router();

routes.get('/', (req, res) => {
  res.render('index');
});

routes.get('/curriculo', CurriculoController.show);

routes.get('*', (req, res) => {
  res.status(404).send('<html><body><h1>Rota inexistente</h1><a href="/">Home</a></body></html>');
});

module.exports = routes;