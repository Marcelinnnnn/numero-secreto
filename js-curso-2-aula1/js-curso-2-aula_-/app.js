let listaDeNumeroSorteados = [];
let numeroMaximo = 50
let numeroSecreto = gerarNumeroAleatorio() // Chama a função para atribuir o número aleatório
let tentativas = 1
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese female', { rate: 1.2 });
}
function exibirTextoInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'coloque um número entre 1 e 10');
}
exibirTextoInicial();
function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;

        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'o número é menor que o secreto');
        } else {
            exibirTextoNaTela('p', 'o número é maior que o secreto');
        }
        tentativas++;
        limparcampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementos = listaDeNumeroSorteados.length;
    if (quantidadeDeElementos == numeroMaximo) {
        listaDeNumeroSorteados = [];
    }

    if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
}
function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
