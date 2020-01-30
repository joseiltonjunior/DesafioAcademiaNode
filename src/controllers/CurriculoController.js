require('dotenv').config();
const axios = require('axios');


module.exports = {
  async show(req, res) {

    try {
      const apiFace = await axios.get(`https://graph.facebook.com/v5.0/me?fields=name%2Cbirthday%2Cgender%2Cemail%2Clocation%2Cphotos.limit(1)%2Caddress&access_token=${process.env.FACE_TOKEN}`);
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

        "Formação": [{
          "Instituição: ": "Faculdade Imaculada Conceição do Recife",
          "Curso: ": "ADS",
          "Inicio: ": "2019.1",
          "Termino: ": "2021.2",
        }],

        "Experiência Profissional": [
          {
            "Empresa": "Exército Brasileiro",
            "Função": "Suporte Técnico",
            "Atividade": "Realizar manutenção em computadores, impressoras e rede",
            "Inicio": "12/01/2019",
            "Termino": "atual"
          },
          {
            "Empresa": "Exército Brasileiro",
            "Função": "Auxiliar Admnistrativo",
            "Atividade": "Elaboração de documentos e planilhas administrativas, protocolo e arquivamento de documentos.",
            "Inicio": "03/03/2015",
            "Termino": "atual"
          },          
        ],

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