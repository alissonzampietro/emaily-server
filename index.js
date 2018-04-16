const express = require('express');
const app = express();
const port = process.env.PORT || 5000; 

app.get('/',(req, res) => {
  res.send({message: 'Bem vindo'});
  console.log(req);
});


app.listen(5000);
