const GEOLOCATION = document.getElementById('ubicacion');

const showPosition = position => {
    GEOLOCATION.innerHTML = 'La latitud es: ' + position.coords.latitude + '<br> La longitud es: ' + position.coords.longitude;
}
const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        GEOLOCATION.innerHTML = 'La geolocalizacion esta apagada o no es soportada por el navegador'
    }
}