
let tarefas = [];

function adicionarTarefa() {

    let campoTarefa = document.getElementById("tarefa");

    let tarefa = campoTarefa.value.trim();

    if (tarefa === "") {
        alert("Digite uma tarefa!");
        return;
    }

    tarefas.push(tarefa);

    campoTarefa.value = "";

    listarTarefas();


}


function listarTarefas() {

    let lista = document.getElementById("listaTarefas");


    lista.innerHTML = "";


    for (let i = 0; i < tarefas.length; i++) {

    let item = document.createElement("li");

    item.innerHTML = `
        <span>${tarefas[i]}</span>

        <button onclick="removerTarefa(${i})">
            Remover
        </button>
    `;

    lista.appendChild(item);
}


function removerTarefa(indice) {

    tarefas.splice(indice, 1);

    listarTarefas();


}   
}