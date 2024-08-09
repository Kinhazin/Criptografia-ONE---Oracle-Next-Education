//Validação de caracteres.
let brandInput = document.querySelector('#inputText');
brandInput = addEventListener("keypress", function (e) {
    if (!checarCaracter(e)) {
        e.preventDefault();
    }
});

//Sumindo com o botão de copiar.
document.addEventListener("DOMContentLoaded", function () {
    var elementosCopiar = document.getElementsByClassName("criptografado__copiar");
    for (var i = 0; i < elementosCopiar.length; i++) {
        elementosCopiar[i].style.display = "none";
    }
});


function botaoCopiarAparecer() {
    var elementosCopiar = document.getElementsByClassName("criptografado__copiar");
    for (var i = 0; i < elementosCopiar.length; i++) {
        elementosCopiar[i].style.display = "flex";
    }
}

//Permitindo apenas letras minúsculas e o espaço.
function checarCaracter(e) {
    const char = String.fromCharCode(e.keyCode);
    const pattern = '[a-z ]';

    if (char.match(pattern)) {
        return true;
    }
}


function limparPreTexto() {
    var elementos = document.getElementsByClassName("cripto__resultado-pre")
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = "none";
    }
}

function aparecerPreTexto() {
    var elementos = document.getElementsByClassName("cripto__resultado-pre")
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = "flex";
    }
}

function limparTextoCodificado() {
    var elementos = document.getElementsByClassName("criptografado")
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = "none";
    }
}

function aparecerTextoCodificado() {
    var elementos = document.getElementsByClassName("criptografado")
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = "flex";
    }
}

function botaoCopiarSumir(){
    var elementosCopiar = document.getElementsByClassName("criptografado__copiar");
    for (var i = 0; i < elementosCopiar.length; i++) {
        elementosCopiar[i].style.display = "none";
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {

    });
}

function copiarTexto() {
    const paragrafoTexto = document.getElementById("output").innerText;
    botaoCopiarSumir();
    limparTextoCodificado();
    aparecerPreTexto();
    copyToClipboard(paragrafoTexto);
}


function pegarTexto() {
    var campoTexto = document.querySelector('#inputText');
    return campoTexto.value;
}

function limparCaixaTexto() {
    const inputText = document.querySelector('#inputText');
    inputText.value = '';
}


function codificarMensagem() {
    var texto;
    let textoCodificado;
    limparPreTexto();
    texto = pegarTexto();
    limparCaixaTexto();
    botaoCopiarAparecer()
    aparecerTextoCodificado()
    textoCodificado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById('output').innerText = textoCodificado;
}

function decodificarMensagem() {
    var texto;
    let textoDecoficado;
    limparPreTexto();
    texto = pegarTexto();
    limparCaixaTexto();
    botaoCopiarAparecer();
    aparecerTextoCodificado();
    textoDecoficado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById('output').innerText = textoDecoficado;

}


