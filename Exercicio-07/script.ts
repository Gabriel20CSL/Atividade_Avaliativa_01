interface Resultado {
    media: number;
    situacao: string;
}


function calcularMedia(
    nota1: number,
    nota2: number,
    nota3: number
    ): number {

    return (nota1 + nota2 + nota3) / 3;


}


function verificarSituacao(media: number): string {

    if (media >= 7) {

        return "Aprovado";

    } else if (media >= 5) {

        return "Recuperação";

    } else {

        return "Reprovado";
    }


}


const nota1Input =
document.getElementById("nota1") as HTMLInputElement;

const nota2Input =
document.getElementById("nota2") as HTMLInputElement;

const nota3Input =
document.getElementById("nota3") as HTMLInputElement;

const botaoCalcular =
document.getElementById("btnCalcular") as HTMLButtonElement;

const botaoLimpar =
document.getElementById("btnLimpar") as HTMLButtonElement;

const campoMedia =
document.getElementById("media") as HTMLParagraphElement;

const campoSituacao =
document.getElementById("situacao") as HTMLParagraphElement;

botaoCalcular.addEventListener("click", (): void => {

    const nota1: number = Number(nota1Input.value);
    const nota2: number = Number(nota2Input.value);
    const nota3: number = Number(nota3Input.value);

    const media: number =
        calcularMedia(nota1, nota2, nota3);

    const situacao: string =
        verificarSituacao(media);

    const resultado: Resultado = {
        media: media,
        situacao: situacao
    };

    campoMedia.textContent =
        "Média: " + resultado.media.toFixed(2);

    campoSituacao.textContent =
        "Situação: " + resultado.situacao;


}
);

botaoLimpar.addEventListener("click", (): void => {

    nota1Input.value = "";
    nota2Input.value = "";
    nota3Input.value = "";

    campoMedia.textContent = "";
    campoSituacao.textContent = "";


});