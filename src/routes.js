const { Router } = require('express');
const RouteNotFound = require('./middlewares/RouteNotFound');
const CurriculoController = require('./controllers/CurriculoController')
const routes = Router();

routes.get('/', (req, res) => {
  res.render('index');
});
routes.get('/api/curriculo', CurriculoController.show);
routes.use(RouteNotFound);

module.exports = routes;