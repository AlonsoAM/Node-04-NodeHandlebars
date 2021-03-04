const express = require('express')
const hbs = require('hbs')

const app = express()
const port = 3000

// Handlerbars
hbs.registerPartials(__dirname + '/views/partials')

// Servir contenido estático
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'AlonsoAM',
    titulo: 'Curos de NodeJS',
  })
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'AlonsoAM',
    titulo: 'Curos de NodeJS',
  })
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'AlonsoAM',
    titulo: 'Curos de NodeJS',
  })
})
app.get('*', (req, res) => {
  res.send('404 | Page Not Found')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
