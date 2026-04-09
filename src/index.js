const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

const data = {
  integrantes: [
    { nome: 'Eric Amorim' },
    { nome: 'Thiago Souto' },
    { nome: 'Rafael Lass' }
  ]
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/integrantes', (req, res) => {
  res.json(data)
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
