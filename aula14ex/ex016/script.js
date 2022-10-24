var botao = document.querySelector('#contar')
botao.addEventListener('click', contar)

function contar() {
    var res = document.querySelector('div#resultado')
    res.innerHTML = `<p>Contando:</p>`
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    for (Number.inicio; Number.inicio<= Number.fim; Number.inicio += Number.passo) {
        res.innerHTML += `${Number.inicio}`
    }
}