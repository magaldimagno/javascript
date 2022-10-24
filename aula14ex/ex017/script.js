function tabuada() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        for (let c = 1; c <= 10; c++) {
            let prod = n*c
            tab.innerHTML += `<option> ${n} x ${c} = ${prod}</option>`
        }
    }
    
}