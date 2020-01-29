const axios = require('axios');

module.exports = {
  async show(req, res) {

    const apiResponse = await axios.get('https://api.github.com/users/joseiltonjunior');

    const { name = login, html_url, bio, company, repos_url } = apiResponse.data;

    const profile = {
      name,
      html_url,
      bio,
      company,
      repos_url
    };

    return res.json(profile);

  }
}