const express = require('express')

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send(`Hola desde el back usando Express`)
})

// Configurar el puerto
const server = app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
})

// Escucha eventos en caso de error
server.on('error', error => console.log(`Error en servidor: ${error}`));
