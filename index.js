const express = require('express');
const app = express();
const PORT = process.env.PORT || 8888;

app.get('/',(req, res) => {
  res.send({message: 'Bem vindo'});
  console.log(req);
});


app.listen(PORT);
