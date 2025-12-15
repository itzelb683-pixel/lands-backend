const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Backend funcionando');
});

const port = 3000;
app.listen(port, () => {
  console.log('Servidor corriendo en puerto ' + port);
});
