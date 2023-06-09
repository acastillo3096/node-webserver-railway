require('dotenv').config();
const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//  Servir contenido estatico 
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.send('Home Page')
// });

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Andres Castillo',
        titulo: 'Curso de node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Andres Castillo',
        titulo: 'Curso de node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Andres Castillo',
        titulo: 'Curso de node'
    });
});

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html')
// });

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
});

app.get('*', (req, res) => {
    // res.writeHead(404)
    res.sendFile(__dirname + '/public/404.html');
});

// app.listen(8080)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
