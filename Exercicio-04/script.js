function gerarTabuada() {


    let numero = Number(document.getElementById("numero").value);


    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";


    if (document.getElementById("numero").value === "") {
        resultado.innerHTML = "<p>Digite um número primeiro!</p>";
        return;
    }


    resultado.innerHTML = "<h2>Tabuada do " + numero + "</h2>";

    for (let i = 1; i <= 10; i++) {

        let calculo = numero * i;

        resultado.innerHTML +=
            "<p>" + numero + " × " + i + " = " + calculo + "</p>";
    }


}

function limparTabuada() {

    document.getElementById("numero").value = "";

    document.getElementById("resultado").innerHTML = "";


}