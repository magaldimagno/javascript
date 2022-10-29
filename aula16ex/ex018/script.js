let val = []
let tab = document.querySelector('#selval')
let res = document.querySelector('#res')

function notinLista(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    let num = document.querySelector('#txtn')
    let n = Number(num.value)
    if (n < 1 | n > 100 | num.value.length == 0) {
        window.alert('[ERRO] Valor Inválido')
    } else if (notinLista(n, val)) {
        window.alert('[ERRO] Número já está na lista')
    } else {
        val.push(n)
        let valor = document.createElement('option')
        valor.text = `Valor ${val[val.length-1]} adicionado.`
        valor.value = `val${val.length-1}`
        tab.appendChild(valor)
    }
}

function fsoma(){
    let soma = 0
    for(let c = val.length-1; c >= 0; c--) {
        soma += val[c]
    }
    return soma
}

function fmedia(){
    let soma = fsoma()
    return soma/val.length
}

function finalizar(){
    if (val.length == 0) {
        window.alert('[ERRO] Adicione um valor')
    } else {
        let rnum = document.createElement('p')
        rnum.innerHTML = `Ao todo, temos ${val.length} números cadastrados.`
        rnum.id = 'num'
        res.appendChild(rnum)

        let rsoma = document.createElement('p')
        let soma = fsoma()
        rsoma.innerHTML = `Somando todos os valores, temos ${soma}.`
        rsoma.id = 'soma'
        res.appendChild(rsoma)

        let rmedia = document.createElement('p')
        rmedia.innerHTML = `A média dos valores adicionados é ${fmedia()}.`
        rmedia.id = 'media'
        res.appendChild(rmedia)
    }
}