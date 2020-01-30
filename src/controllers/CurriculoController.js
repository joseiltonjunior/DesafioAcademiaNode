require('dotenv').config();
const axios = require('axios');


module.exports = {
  async show(req, res) {

    try {
      const apiFace = await axios.get(`https://graph.facebook.com/v5.0/me?fields=name%2Cbirthday%2Cgender%2Cemail%2Clocation%2Cphotos.limit(1)%7Bpicture%7D&access_token=${process.env.FACE_TOKEN}`);
      const apiGit = await axios.get('https://api.github.com/users/joseiltonjunior');

      const { name = login, html_url, bio, company, repos_url, avatar_url } = apiGit.data;
      const { birthday, gender, email, location } = apiFace.data;

      const profile = {
        "facebook_profile": {
          "Foto": avatar_url,
          "Nome: ": name,
          "Endereço: ": location.name,
          "Genero: ": gender,
          "Aniversário": birthday,
          "E-mail: ": email,
        },
        "github_profile": {
          "Nome: ": name,
          "Github: ": html_url,
          "Bio: ": bio,
          "Local de Trabalho: ": company,
          "Repositório: ": repos_url
        }
      };

      return res.json(profile);

    } catch (err) {
      console.error('ERROR: Problemas com o a Aplicação!');
    }
  }
}