const form = document.forms['form1'];
let text = '';
for (let i = 0; i < form.length; i++) {
    text += form.elements[i].value + '<br></br>'

}

document.getElementById('test').innerHTML = text;