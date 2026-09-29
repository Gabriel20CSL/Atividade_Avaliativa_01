"use strict";
function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}
function verificarSituacao(media) {
    if (media >= 7) {
        return "Aprovado";
    }
    else if (media >= 5) {
        return "Recuperação";
    }
    else {
        return "Reprovado";
    }
}
const nota1Input = document.getElementById("nota1");
const nota2Input = document.getElementById("nota2");
const nota3Input = document.getElementById("nota3");
const botaoCalcular = document.getElementById("btnCalcular");
const botaoLimpar = document.getElementById("btnLimpar");
const campoMedia = document.getElementById("media");
const campoSituacao = document.getElementById("situacao");
botaoCalcular.addEventListener("click", () => {
    const nota1 = Number(nota1Input.value);
    const nota2 = Number(nota2Input.value);
    const nota3 = Number(nota3Input.value);
    const media = calcularMedia(nota1, nota2, nota3);
    const situacao = verificarSituacao(media);
    const resultado = {
        media: media,
        situacao: situacao
    };
    campoMedia.textContent =
        "Média: " + resultado.media.toFixed(2);
    campoSituacao.textContent =
        "Situação: " + resultado.situacao;
});
botaoLimpar.addEventListener("click", () => {
    nota1Input.value = "";
    nota2Input.value = "";
    nota3Input.value = "";
    campoMedia.textContent = "";
    campoSituacao.textContent = "";
});
