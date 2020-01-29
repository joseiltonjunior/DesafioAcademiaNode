const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.get('/', (req, res) => {
  res.render('index');
});

routes.post('/search', async (req, res) => {
  const { github_username } = req.body;

  const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

  const { name = login, html_url, bio, company, repos_url } = apiResponse.data;

  const skill = [name, html_url, bio, company, repos_url];

  return res.json(skill);

});

routes.get('/curriculo', (req, res) => {
  res.render('curriculo');
});



module.exports = routes;