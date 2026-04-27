const action = () => {
    setTimeout(() => {
        console.log('Esta accion es la del boton')
    }, 2000);
}

const action2 = () => {

    const interval = setInterval(() => {
        console.log('Interval')
    }, 2000);

    const timeOut = setTimeout(() => {
        console.log('Limpiamos')
        clearInterval(interval)
    }, 10000);

    clearTimeout(timeOut)
}