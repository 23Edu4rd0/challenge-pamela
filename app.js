let amigos = [];

function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector("input").value;
    if (nomeDoAmigo == "") {
        alert('Por favor, insira um nome');
        return;
    }
    amigos.push(nomeDoAmigo);
    atualizarLista();
    limparCampo();
}

function limparCampo() {
    let inputAmigo = document.querySelector('input');
    inputAmigo.value = '';
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    let conteudo = '';
    for (let i = 0; i < amigos.length; i++) {
        conteudo += `<li>${amigos[i]}</li>`;
    }
    lista.innerHTML = conteudo;
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Digite pelo menos dois nomes para sortear!');
    } else {
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let nomeSorteado = amigos[indiceSorteado];

        document.getElementById('resultado').innerHTML = `O amigo secreto é ${nomeSorteado}`;
        dispararConfete();

        // Limpa a lista e a tela
        amigos = [];
        atualizarLista();
    }
}

function dispararConfete() {
    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}
