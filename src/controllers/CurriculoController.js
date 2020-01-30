const github = require('./GithubController');
const facebook = require('./FaceController');

module.exports = {
  async show(req, res) {

    try {
      const profile = {
        "Foto": "",
        "Nome": "Junior Ferreira",
        "Cidade": "",
        "E-mail": "",
        "Aniversário": "",
        "Genero": "",
        "Github": "",
        "Biografia": "",
        "Empresa": "",
        "Repositórios": ""
      }

      return res.json(profile);

    } catch (err) {
      console.error('ERROR: Problemas com o a Aplicação!');
    }
  }
}