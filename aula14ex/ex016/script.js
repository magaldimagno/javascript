function contar() {
    var res = document.querySelector('div#resultado')
    res.innerHTML = `<p>Contando:</p>`
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    for (Number.ini; Number.ini<= Number.fim; Number.ini += Number.passo) {
        res.innerHTML += `${Number.inicio}`
    }
}