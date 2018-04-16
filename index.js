const express = require('express');
const app = express();

app.get('/',(req, res) => {
  res.send({message: 'Bem vindo'});
  console.log(req);
});

app.listen(5000);
