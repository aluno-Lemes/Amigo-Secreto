let amigosAdicionados = [];
let lista = document.getElementById('listaAmigos');

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == '') {
        alert("Preencha com o nome do seu amigo!");
        return;
    } else {
        amigosAdicionados.push(nome);
        limparCampo();
    }
    atualizarLista();
    console.log('Nome inserido: ', nome);
    return nome;
    
}

function sortearAmigo() {
    if (amigosAdicionados.length === 1) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio!');
        return;
    }

    let amigoSorteado = amigosAdicionados[Math.floor(Math.random() * amigosAdicionados.length)];
    resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
}


function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function atualizarLista() {
    lista.innerHTML = '';

    amigosAdicionados.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function limparLista() {
    amigosAdicionados = [];
    atualizarLista();
    resultado.innerHTML = '';
}