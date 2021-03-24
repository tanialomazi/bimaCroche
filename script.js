//função que é acionada quando o botão Enviar é apertado
var btEnviar = document.getElementById('BTenviar');
var popup = document.querySelectorAll('popup');
var input = document.getElementsByClassName('input');


if (btEnviar.addEventListener("click", function () {
    
    var contador = 0;

    for (var i = 0; i < input.length; i++) {
        if (input[i].value != "") {
            contador++;
        }
    }

    if (contador == input.length) {
        alert("Mensagem enviada com sucesso!");
    } else {
        alert("Por favor, preencha os dados requisitados");
    }
}))

(function () {
    ("popup").colorbox();
});



