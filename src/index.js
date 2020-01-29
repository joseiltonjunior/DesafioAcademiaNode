const express = require('express');
const path = require('path');

const port = 3331;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/curriculo', (req, res) => {
  res.render('curriculo');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
})