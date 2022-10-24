function tabuada() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
//        location.reload()
    } else {
        tab.innerHTML = null
        let n = Number(num.value)
        for (let c = 1; c <= 10; c++) {
//            tab.innerHTML += `<option> ${n} x ${c} = ${n*c}</option>`
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
    
}