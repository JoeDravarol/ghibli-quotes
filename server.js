const express = require('express');
const cors = require('cors')
const { quotes } = require('./data.js')
const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(express.static('public'))

app.get('/api/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length)

  res.json(quotes[randomIndex])
});

app.get('/api/quotes', (req, res) => {
  res.json(quotes)
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})