let val = []
let tab = document.querySelector('#selval')

function adicionar(){
    let num = document.querySelector('#txtn')
    let n = Number(num.value)
    if (n < 1 | n > 100 | num.value.length == 0) {
        window.alert('[ERRO] Valor Inválido')
    } else {
        val.push(n)
        let valor = document.createElement('option')
        valor.text = `Valor ${val[val.length-1]} adicionado.`
        tab.appendChild(valor)
    }
}

function finalizar(){

}