function contar() {
    let res = document.querySelector('div#resultado')
    let txt = [document.querySelector('input#txti'), document.querySelector('input#txtf'), document.querySelector('input#txtp')]
    
    if (txt[0].value.length == 0 || txt[1].value.length == 0 || txt[2].value.length == 0) {
        // Dados incompletos
        res.innerHTML = '<p>Impossível contar, faltam dados!</p>'
        // window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = '<p>Contando: </p>'
        let num = [Number(txt[0].value), Number(txt[1].value), Number(txt[2].value)]

        if (num[2] <= 0) {
            // Passo 0 vira 1
            window.alert('Passo Inválido! Considerando PASSO 1')
            num[2] = 1
        }

        let cont = document.createElement('p')
        res.appendChild(cont)

        if (num[1] > num[0]) {
            // Contagem crescente
            for (let c = num[0]; c <= num[1]; c += num[2]) {
                cont.innerHTML += `${c} \u{1F449} `
            }
        } else {
            // Contagem decrescente
            for (let c = num[0]; c >= num[1]; c -= num[2]) {
                cont.innerHTML += `${c} \u{1F449} `
            }
        }

        cont.innerHTML += `\u{1F3C1}`
    }
}