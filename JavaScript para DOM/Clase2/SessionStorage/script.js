const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const job = document.getElementById('job')

document.getElementById('welcome').innerHTML = sessionStorage.getItem('userName') == null ? '' : 'Bienvenido ' + sessionStorage.getItem('userName')

const save = () => {
    sessionStorage.setItem('userName', firstName.value + ' ' + lastName.value)
    sessionStorage.setItem('job', job.value)
}