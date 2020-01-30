require('dotenv').config();
const axios = require('axios');
const CurriculoModel = require('../models/CurriculoModels');

module.exports = {
  async show(req, res) {

    try {
      const apiFace = await axios.get(`${process.env.FACE_TOKEN}`);
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