var botao = document.querySelector('#contar')
botao.addEventListener('click', clicar)

function clicar() {
    var inicio = document.querySelector('#inicio')
    var fim = document.querySelector('#fim')
    var passo = document.querySelector('#passo')
    var res = document.querySelector('#res')

    var inicionum = Number(inicio.value)
    var fimnum = Number(fim.value)
    var passonum = Number(passo.value)
    var cont = inicionum + passonum

    res.innerHTML = `<p>${inicionum}</p>`
    for (cont; cont <= fimnum; cont + passonum) {
        res.innerHTML =+ '&#x1F449'
        res.innerHTML =+ `${cont}`
    }
}