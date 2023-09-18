require('dotenv').config();

const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


//handlerbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');




// para utilizar archivos index.html
app.use(express.static('public'))

app.get('/', (req, res ) => {
  res.render('home',{
    nombre:' ferney Figueroa',
    titulo:'Curso de node :'
  }); 
})

app.get('/generic', (req, res ) => {
  res.render('generic',{
    nombre:' ferney Figueroa',
    titulo:'Curso de node :'
  });
})
app.get('/elements', (req, res ) => {
  res.render('elements',{
    nombre:' ferney Figueroa',
    titulo:'Curso de node :'
  });
})

app.get('/hola-mundo', (req, res) =>{
    res.send('Hello World en su nueva ruta')
  })

  app.get('*', (req, res ) => {
    res.sendFile(__dirname + '/public/404.html')
  })
  app.listen(port, () => {
    console.log(`Corriendo en el puerto : ${port}`)
  })