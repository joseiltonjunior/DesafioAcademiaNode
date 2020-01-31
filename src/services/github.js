const axios = require("axios").default;

module.exports = axios.create({
  baseURL: "https://api.github.com/users/joseiltonjunior"
});