const { Router } = require('express');

const GithubController = require('./controllers/GithubController');
const FaceController = require('./controllers/FaceController')

const routes = Router();

routes.get('/', (req, res) => {
  res.render('index');
});

routes.get('/github', GithubController.show);
routes.get('/face', FaceController.show);

routes.get('*', (req, res) => {
  res.status(404).send('Rota inexistente');
});





module.exports = routes;