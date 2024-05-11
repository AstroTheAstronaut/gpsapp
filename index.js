'use strict';

const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));