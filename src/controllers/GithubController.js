const axios = require('axios');

module.exports = {
  async show(req, res) {

    try {
      const apiGit = await axios.get('https://api.github.com/users/joseiltonjunior');
      const { name = login, html_url, bio, company, repos_url, avatar_url } = apiGit.data;

      const profile = {
        avatar_url,
        name,
        html_url,
        bio,
        company,
        repos_url
      };

      return res.json(profile);
    }
    catch (err) {
      console.error('ERROR: Problemas com o a Aplicação!');
    }
  }
}