const { Router } = require('express');

const GithubController = require('./controllers/GithubController')

const routes = Router();

routes.get('/', (req, res) => {
  res.render('index');
});

routes.get('/github', GithubController.show);

routes.get('/curriculo', (req, res) => {
  res.render('curriculo');
});



module.exports = routes;