
////// PRIMEIRA PARTE ACESSANDO OS DADOS //////
// const form = document.getElementById('novoItem');

// form.addEventListener("submit", (evento) => {
//     evento.preventDefault();

//     console.log(evento);

//     console.log(evento.target.elements['nome'].value);
//     console.log(evento.target.elements['quantidade'].value);
// })

////// SEGUNDA PARTE CRIANDO UM ITEM NA LISTA //////
// function criaElemento(nome, quantidade) {
//     console.log(nome);
//     console.log(quantidade);

//     //<li class="item"><strong>7</strong>Camisas</li>
//     const novoItem = document.createElement('li');
//     novoItem.classList.add("item");

//     const numeroItem = document.createElement('strong');
//     numeroItem.innerHTML = quantidade;

//     novoItem.appendChild(numeroItem);
//     novoItem += nome;

//     const lista = document.getElementById('lista');

//     lista.appendChild(novoItem);
// }


////// TERCEIRA PARTE INSERINDO DADOS NO LOCALSTORAGE //////
// const form = document.getElementById('novoItem');
// const lista = document.getElementById("lista");
// const itens = [];

// form.addEventListener("submit", (evento) => {
//     evento.preventDefault();
//     const nome = evento.target.elements['nome'];
//     const quantidade = evento.target.elements['quantidade'];

//     criaElemento(nome.value, quantidade.value);

//     nome.value = "";
//     quantidade.value = "";
// })

// function criaElemento(nome, quantidade) {
//     const novoItem = document.createElement("li");
//     novoItem.classList.add("item");

//     const numeroItem = document.createElement("strong");
//     numeroItem.innerHTML = quantidade;

//     novoItem.appendChild(numeroItem);
//     novoItem.innerHTML += nome;

//     lista.appendChild(novoItem);

//     const itemAtual = {
//         "nome": nome,
//         "quantidade": quantidade
//     }

//     itens.push(itemAtual);

//     localStorage.setItem("item", JSON.stringify(itens));

// }

////// QUARTA PARTE CONSULTANDO DADOS NO LOCALSTORAGE //////
// const form = document.getElementById('novoItem');
// const lista = document.getElementById("lista");
// const itens =  JSON.parse(localStorage.getItem("itens") || []);
// console.log(itens);

// itens.forEach( elemento => {
//     console.log(elemento.nome, elemento.quantidade);
// })

// form.addEventListener("submit", (evento) => {
//     evento.preventDefault();
//     const nome = evento.target.elements['nome'];
//     const quantidade = evento.target.elements['quantidade'];

//     criaElemento(nome.value, quantidade.value);

//     nome.value = "";
//     quantidade.value = "";
// })

// function criaElemento(nome, quantidade) {
//     const novoItem = document.createElement("li");
//     novoItem.classList.add("item");

//     const numeroItem = document.createElement("strong");
//     numeroItem.innerHTML = quantidade;

//     novoItem.appendChild(numeroItem);
//     novoItem.innerHTML += nome;

//     lista.appendChild(novoItem);

//     const itemAtual = {
//         "nome": nome,
//         "quantidade": quantidade
//     }

//     itens.push(itemAtual);

//     localStorage.setItem("itens", JSON.stringify(itens));

// }




////// QUINTA PARTE ATUALIANDO DADOS NA PAGINA AO CADASTRAR ITEM //////
// const form = document.getElementById('novoItem');
// const lista = document.getElementById("lista");
// const itens =  JSON.parse(localStorage.getItem("itens") || []);

// itens.forEach( elemento => {
//     criaElemento(elemento);
// })

// form.addEventListener("submit", (evento) => {
//     evento.preventDefault();
//     const nome = evento.target.elements['nome'];
//     const quantidade = evento.target.elements['quantidade'];

//     const itemAtual = {
//         "nome": nome.value,
//         "quantidade": quantidade.value
//     }

//     criaElemento(itemAtual);

//     itens.push(itemAtual);

//     localStorage.setItem("itens", JSON.stringify(itens));

//     nome.value = "";
//     quantidade.value = "";
// })

// function criaElemento(item) {
//     const novoItem = document.createElement("li");
//     novoItem.classList.add("item");

//     const numeroItem = document.createElement("strong");
//     numeroItem.innerHTML = item.quantidade;

//     novoItem.appendChild(numeroItem);
//     novoItem.innerHTML += item.nome;

//     lista.appendChild(novoItem);
// }



////// SEXTA PARTE MODIFICANDO A QUANTIDADE DE UM ITEM //////
// const form = document.getElementById('novoItem');
// const lista = document.getElementById("lista");
// const itens =  JSON.parse(localStorage.getItem("itens") || []);

// itens.forEach( elemento => {
//     criaElemento(elemento);
// })

// form.addEventListener("submit", (evento) => {
//     evento.preventDefault();
//     const nome = evento.target.elements['nome'];
//     const quantidade = evento.target.elements['quantidade'];
//     const existe = itens.find( elemento => elemento.nome === nome.value);

//     const itemAtual = {
//         "nome": nome.value,
//         "quantidade": quantidade.value
//     }

//     if(existe) {
//         itemAtual.id = existe.id;

//         atualizaElemento(itemAtual);
//     } else {
//         itemAtual.id = itens.length;

//         criaElemento(itemAtual);

//         itens.push(itemAtual);
//     }

//     localStorage.setItem("itens", JSON.stringify(itens));

//     nome.value = "";
//     quantidade.value = "";
// })

// function criaElemento(item) {
//     const novoItem = document.createElement("li");
//     novoItem.classList.add("item");

//     const numeroItem = document.createElement("strong");
//     numeroItem.innerHTML = item.quantidade;
//     numeroItem.dataset.id = item.id;

//     novoItem.appendChild(numeroItem);
//     novoItem.innerHTML += item.nome;

//     lista.appendChild(novoItem);
// }

// function atualizaElemento(item) {
//     document.querySelector("[data-id='"+item.id+"']");
// }


const form = document.getElementById('novoItem');
const lista = document.getElementById("lista");
const itens =  JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach( elemento => {
    criaElemento(elemento);
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const existe = itens.find( elemento => elemento.nome === nome.value);

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if(existe) {
        itemAtual.id = existe.id;

        atualizaElemento(itemAtual);

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;
    } else {
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length -1]).id + 1 : 0;

        criaElemento(itemAtual);

        itens.push(itemAtual);
    }

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
})

function criaElemento(item) {
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const numeroItem = document.createElement("strong");
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;
    novoItem.appendChild(numeroItem);
   
    novoItem.innerHTML += item.nome;

    novoItem.appendChild(botaoDeleta(item.id));

    lista.appendChild(novoItem);
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button");
    elementoBotao.innerText = "X";

    elementoBotao.addEventListener("click", function() {
        deletaElemento(this.parentNode, id);
    })

    return elementoBotao;
}

function deletaElemento(tag, id) {
    tag.remove();
    // console.log(id);

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1);

    localStorage.setItem("itens", JSON.stringify(itens));
}