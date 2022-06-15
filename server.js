const express = require('express');
const app = express();

const QUOTES_DATA = require('./data.js')
const PORT = process.env.PORT || 8000;

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})