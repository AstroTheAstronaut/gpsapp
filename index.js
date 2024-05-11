'use strict';
const express = require('express');
const app = express();
const port = 3000;
const INDEX = '/index.html';

app.get('/', (req, res) => res.sendFile(INDEX, { root: __dirname }));

app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));