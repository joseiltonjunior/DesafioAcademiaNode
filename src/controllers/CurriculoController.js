require('dotenv').config();

const FacebookService = require('../services/facebook')
const GithubService = require('../services/github')
const CurriculoModel = require('../models/CurriculoModels');

module.exports = {
  async show(req, res) {

    try {
      const apiFace = await FacebookService.get(`/me?fields=name%2Cbirthday%2Cgender%2Cemail%2Clocation&access_token=${process.env.FACE_TOKEN}`);
      const apiGit = await GithubService.get();
      const apiRepo = await GithubService.get('/repos');

      const { name = login, bio, avatar_url, html_url } = apiGit.data;
      const { birthday, gender, email, location } = apiFace.data;

      const repos = apiRepo.data.map(repo => {
        let ReposUser = {
          size: repo.size,
          name: repo.name,
          url: repo.url
        }
        return ReposUser;
      });

      const ListRepo = repos.splice(0, 3).sort((a, b) => {
        if (a.size < b.size) return 1;
        if (a.size > b.size) return -1;
        return 0;
      });

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
        "Github": {
          "URL Perfil" : html_url,
          "Alguns Repositórios":ListRepo,
        }
      };


      return res.json(profile);

    } catch (err) {
      console.error('ERROR: Problemas com o a Aplicação!', err);
    }
  }
}