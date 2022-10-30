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
        // IDENTIFICA SE O VALOR É VÁLIDO ENTRE OS PARÂMETROS REQUISITADOS
        window.alert(`[ERRO] Valor ${n} inválido`)
    } else if (notinLista(n, val)) {
        // IDENTIFICA SE O VALOR JÁ FOI CADASTRADO
        window.alert(`[ERRO] Valor ${n} já está presente na lista`)
    } else {
        // CADASTRA O VALOR
        val.push(n)
        let valor = document.createElement('option')
        valor.text = `Valor ${val[val.length-1]} adicionado.`
        valor.value = `val${val.length-1}`
        tab.appendChild(valor)
    }
    num.value = null
    num.focus()
}

function quantidade() {
    // QUANTOS VALORES ESTÃO CADASTRADOS
    return val.length
}

function maior(){
    // MAIOR VALOR
    let pos = val.length-1
    return val[pos]
}

function menor(){
    // MENOR VALOR
    return val[0]
}

function soma(){
    // SOMA DOS VALORES
    let soma = 0
    for(let c = val.length-1; c >= 0; c--) {
        soma += val[c]
    }
    return soma
}

function media(){
    // MÉDIA DOS VALORES
    let s = soma()
    return s/val.length
}

function finalizar(){
    if (val.length == 0) {
        // IDENTIFICA SE HÁ VALORES CADASTRADOS
        window.alert('[ERRO] Adicione valores antes de finalizar!')
    } else {
        // ANALISA OS VALORES CADASTRADOS
        res.innerHTML = null

        val.sort()

        
        let rquantidade = document.createElement('p')
        rquantidade.innerHTML = `Ao todo, temos ${quantidade()} números cadastrados.`
        rquantidade.id = 'quantidade'
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

function reiniciar() {
    // REINICIA A ANÁLISE
/*
    val = []
    tab.innerHTML = []
    res.innerHTML = []
*/
    location.reload()
}