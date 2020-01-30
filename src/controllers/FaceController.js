require('dotenv').config();
const axios = require('axios');

module.exports = {
  async show(req, res) {

    try {
      const apiFace = await axios.get(`https://graph.facebook.com/v5.0/me?fields=name%2Cbirthday%2Cgender%2Cemail%2Clocation%2Cphotos.limit(1)%7Bpicture%7D&access_token=${process.env.FACE_TOKEN}`);
      const { name, birthday, gender, email, location, photos } = apiFace.data;

      const profile = {
        name,
        birthday,
        gender,
        email,
        location,
        photos
      };

      return res.json(profile);
    }
    catch (err) {
      console.error('ERROR: Problemas com o a Aplicação!');
    }
  }
}