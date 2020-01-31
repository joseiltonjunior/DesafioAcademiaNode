const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(process.env.PORT || port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
})