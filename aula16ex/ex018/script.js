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

function quantidade() {
    return val.length
}

function maior(){
    let pos = val.length-1
    return val[pos]
}

function menor(){
    return val[0]
}

function soma(){
    let soma = 0
    for(let c = val.length-1; c >= 0; c--) {
        soma += val[c]
    }
    return soma
}

function media(){
    let s = soma()
    return s/val.length
}

function finalizar(){
    if (val.length == 0) {
        window.alert('[ERRO] Adicione um valor')
    } else {
        res.innerHTML = null

        val.sort()

        
        let rquantidade = document.createElement('p')
        rquantidade.innerHTML = `Ao todo, temos ${quantidade()} números cadastrados.`
        rquantidade.id = 'num'
        res.appendChild(rquantidade)
        
        let rmaior = document.createElement('p')
        rmaior.innerHTML = `O maior número cadastrado é ${maior()}.`
        rmaior.id = 'maior'
        res.appendChild(rmaior)

        let rmenor = document.createElement('p')
        rmenor.innerHTML = `O menor número cadastrado é ${menor()}.`
        rmenor.id = 'menor'
        res.appendChild(rmenor)

        let rsoma = document.createElement('p')
        rsoma.innerHTML = `Somando todos os valores, temos ${soma()}.`
        rsoma.id = 'soma'
        res.appendChild(rsoma)

        let rmedia = document.createElement('p')
        rmedia.innerHTML = `A média dos valores adicionados é ${media()}.`
        rmedia.id = 'media'
        res.appendChild(rmedia)
    }
}