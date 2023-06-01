const http = require('http');

http.createServer( (req, res) => {

    // console.log(req);

    // res.writeHead(200, { 'Content-Type' : 'application/json'})
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, { 'Content-Type' : 'application/csv'})

    // const persona = {
    //     id: 1,
    //     nombre: 'Andres'
    // }

    // res.write('404 | Page not found');
    // res.write(JSON.stringify('id, nombre\n'));
    // res.write(JSON.stringify('1, Andres\n'));
    // res.write(JSON.stringify('2, Anthony\n'));
    // res.write(JSON.stringify('2, Alejandro\n'));

    res.write(`Hola Mundo`);
    res.end();

} )

.listen( 8080 );

console.log('Escuchando el puerto',8080);