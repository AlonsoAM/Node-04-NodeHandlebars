const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT

// Handlerbars
hbs.registerPartials(__dirname + '/views/partials')

// Servir contenido estático
app.set('view engine', 'hbs')

app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.render('home', {
//     nombre: 'AlonsoAM',
//     titulo: 'Curos de NodeJS',
//   })
// })

// app.get('/generic', (req, res) => {
//   res.render('generic', {
//     nombre: 'AlonsoAM',
//     titulo: 'Curos de NodeJS',
//   })
// })

// app.get('/elements', (req, res) => {
//   res.render('elements', {
//     nombre: 'AlonsoAM',
//     titulo: 'Curos de NodeJS',
//   })
// })
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
