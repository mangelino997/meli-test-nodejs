function handleError(status) {
    let message = null
    switch (status) {
        case 400: message = 'Parámetros incorrectos'
            break
        case 500: message = 'Error interno del servidor'
            break
        case 404: message = 'El ítem no existe'
            break;
        default: break;
    }
    return message
}

module.exports = {
    handleError
}