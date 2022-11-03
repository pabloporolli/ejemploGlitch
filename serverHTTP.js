const http = require('http')  // Es una librería de Node, entonces no hay que instalar nada. Sólo se importa lal librería

const getMensaje = () => {
    const horaActual = new Date().getHours();
    if (horaActual >= 6 && horaActual <= 12) {
        return ("Buenos dias")
    }
    else if (horaActual >= 13 && horaActual <= 19) {
        return ("Buenas tardes")
    }
    else { 
        return ("Buenas noches")
    }
}

// Creamos un servidor
const server = http.createServer( (peticion, respuesta) => {
    // respuesta.end("Hola desde el back!")
    respuesta.end(getMensaje())
})

// Configuramos el puerto
const connectedServer = server.listen(8080, () => {
    console.log(`server http escuchando en el puerto ${connectedServer.address().port}`);
})

