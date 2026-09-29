
let produtos = [

    {
        nome: "Notebook",
        preco: 3500,
        categoria: "informatica",
        estoque: 5
    },

    {
        nome: "Mouse Gamer",
        preco: 150,
        categoria: "informatica",
        estoque: 10
    },

    {
        nome: "Smartphone",
        preco: 2200,
        categoria: "eletronicos",
        estoque: 0
    },

    {
        nome: "Fone de Ouvido",
        preco: 200,
        categoria: "eletronicos",
        estoque: 8
    },

    {
        nome: "Camiseta",
        preco: 80,
        categoria: "vestuario",
        estoque: 0
    }


];

function listarProdutos(lista) {

    let areaProdutos = document.getElementById("listaProdutos");

    areaProdutos.innerHTML = "";


    lista.forEach(function(produto) {

        let card = document.createElement("div");

        card.classList.add("produto");


        card.innerHTML = `
            <h2>${produto.nome}</h2>

            <p>
                <strong>Preço:</strong>
                R$ ${produto.preco.toFixed(2)}
            </p>

            <p>
                <strong>Categoria:</strong>
                ${produto.categoria}
            </p>

            <p>
                <strong>Estoque:</strong>
                ${produto.estoque}
            </p>
        `;


        areaProdutos.appendChild(card);

    });


    }


    function filtrarProdutos() {

        let categoriaSelecionada =
            document.getElementById("categoria").value;



        if (categoriaSelecionada === "todos") {

            listarProdutos(produtos);

            return;
    }


    let produtosFiltrados = produtos.filter(function(produto) {

        return produto.categoria === categoriaSelecionada;

        });


        listarProdutos(produtosFiltrados);


    }

    function mostrarSemEstoque() {

        let listaSemEstoque =
            document.getElementById("produtosSemEstoque");


        listaSemEstoque.innerHTML = "";


    
        let produtosSemEstoque = produtos.filter(function(produto) {

            return produto.estoque === 0;

        }
    );


    produtosSemEstoque.forEach(function(produto) {

        let item = document.createElement("li");

        item.textContent = produto.nome;

        listaSemEstoque.appendChild(item);

    });


}

listarProdutos(produtos);


mostrarSemEstoque();