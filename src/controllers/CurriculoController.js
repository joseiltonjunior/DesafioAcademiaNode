require('dotenv').config();
const axios = require('axios');
const CurriculoModel = require('../models/CurriculoModels');

module.exports = {
  async show(req, res) {

    try {
      const apiFace = await axios.get(`https://graph.facebook.com/v5.0/me?fields=name%2Cbirthday%2Cgender%2Cemail%2Clocation%2Cphotos.limit(1)&access_token=${process.env.FACE_TOKEN}`);
      const apiGit = await axios.get('https://api.github.com/users/joseiltonjunior');

      const { name = login, html_url, bio, repos_url, avatar_url } = apiGit.data;
      const { birthday, gender, email, location } = apiFace.data;

      const profile = {
        "Nome: ": name,
        "Data de nascimento": birthday,
        "Endereço: ": location.name,
        "E-mail: ": email,
        "Genero: ": gender,
        "Bio: ": bio,
        "Foto": avatar_url,
        "Formação": CurriculoModel.Formacao,
        "Experiência Profissional": CurriculoModel.Profissional,
        "GitHub": {
          "Github: ": html_url,
          "Repositório: ": repos_url
        }
      };

      return res.json(profile);

    } catch (err) {
      console.error('ERROR: Problemas com o a Aplicação!');
    }
  }
}