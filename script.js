//função que é acionada quando o botão Enviar é apertado
const sendbutton = document.getElementById('BTenviar');
const popup = document.querySelectorAll('popup');
const input = document.getElementsByClassName('input');


sendbutton.addEventListener("click", function () { 
    let isValidated = false;
    for (var i = 0; i < input.length - 1; i++) {
        if (input[i].value != "") {
            isValidated = true;
        }
    }

    if (isValidated) {
        alert("Mensagem enviada com sucesso!");
    } else {
        alert("Por favor, preencha os dados requisitados");
    }
})
