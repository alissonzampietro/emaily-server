const express = require('express');
const app = express();
const PORT = process.env.PORT || 8888;

app.get('/',(req, res) => {
  res.send({data: 'Let\'s be friends'});
  console.log(req);
});


app.listen(PORT);
