function contar() {
    let res = document.querySelector('div#resultado')
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // Dados incompletos
        res.innerHTML = '<p>Impossível contar, faltam dados!</p>'
        // window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = '<p>Contando: </p>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            // Passo 0 vira 1
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }

        if (f > i) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            // Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }
}