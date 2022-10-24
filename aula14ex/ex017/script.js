function tabuada() {
    let num = document.querySelector('#txtn')
    let res = document.querySelector('#tabuada')
    let n = Number(num.value)

    if (num.value.lenght > 0) {
        let prod = n*c
        for (let c = 1; c <= 10; c++) {
            res.innerHTML += `<option> ${n} x ${c} = ${prod}</option>`
        }
    }
    
}