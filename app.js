let numSecr = numSecreto();
let tentativas = 1
let quantTentativas

function colocatexto(tag, texto) {
    var campo = document.querySelector(tag);
    campo.innerHTML = texto
}
colocatexto('h1', 'joga de adivinha');
colocatexto('p', 'escolha entre 1 a 10');

function verChute() {
    let chute = document.querySelector('input').value
    console.log(numSecr);
    if (chute == numSecr) {
        quantTentativas = tentativas > 1 ? `${tentativas} tentativas` : `${tentativas} tentativa`; 
        colocatexto('h1', 'Acertou!');
        colocatexto('p', `Parabéns! Total de ${quantTentativas}.`, );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numSecr) {
            colocatexto('p', 'O número sorteado é menor'); 
        } else {
            colocatexto('p', 'O número sorteado é maior');
        }
        tentativas++
        limparQuadro()
    }
}
function recomecar() {
    window.location.reload()
}

function numSecreto() {
    return parseInt(Math.random() * 10 + 1);
}

function limparQuadro() {
     var chute = document.querySelector('input')
    chute.value = '';
}