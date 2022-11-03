const express = require('express')

const app = express();

const PORT = 8080;

const h1 = '<h1 style="color:blue">Bienvenidos al servidor Express!!</h1>'

app.get('/', (req, res) => {
    res.send(h1)
})

let counter = 0;
app.get('/visitas', (req, res) => {
    counter++;
    res.send(`La cantidad de visitas es ${counter}`)
})

app.get('/fyh', (req, res) => {
    let fyh = new Date();
    res.send(fyh.toLocaleString())
})

// Configurar el puerto
const server = app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
})

// Escucha eventos en caso de error
server.on('error', error => console.log(`Error en servidor: ${error}`));


