const doValidation = () => {
    const nameInput = document.getElementById('name');
    const errorEl = document.getElementById('error');

    // if (!number.checkValidity()) {
    //     document.getElementById('error').innerHTML = number.validationMessage
    // } else {
    //     document.getElementById('number').innerHTML = 'El numero esta correcto'
    // }

    errorEl.innerHTML = nameInput.checkValidity()
        ? 'El nombre está correcto'
        : 'El nombre es requerido, completa el campo';
}