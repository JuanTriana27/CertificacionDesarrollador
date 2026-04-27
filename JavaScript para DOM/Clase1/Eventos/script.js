// Declarativ Functions
// function changeThisElement(element) {
//     element.innerHTML = 'Hola js'
// }

// Arrow Functions
//const changeThisElement = element => element.innerHTML = 'Hola js con arrow'

const displayDate = () => document.getElementById('test').innerHTML = Date();

document.getElementById('btn').onclick = displayDate 