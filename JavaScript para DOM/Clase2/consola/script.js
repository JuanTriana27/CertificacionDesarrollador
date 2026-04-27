const variable = "Esto es otro rexto"
const text = `testo de una variable : ${variable}`
console.log(text)

const array = ['html', 'css', 'js']
const objetc = {name: 'juan triana', job: 'desempleado'}
console.log(array, objetc)

const css = 'color: red; background: aqua'
console.log('%cHola css', css)

const a = 4
const b = 6
console.assert(a+b==11, 'No es igual a 11')

const otherMethod2 = () => {
    console.trace()
}

const otherMethod = () => {
    otherMethod2();
}

const myFunction = () => {
    otherMethod();
}