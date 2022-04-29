function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.querySelector('#res')
    var txtnasc = document.querySelector('#txtnasc')
    var nasc = Number(txtnasc.value)
    
    if (nasc.lenght == 0 || nasc > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var sex = ''
        if (fsex[0].checked) {
            sex = 'Homem'
        } else if (fsex[1].checked) {
            sex = 'Mulher'
        }
        var idade = ano - nasc
        if (sex == 'Mulher') {
            res.innerHTML = `<p>Detectamos ${sex} com ${idade} anos.</p>`
            if (idade < 18) {
                res.innerHTML += '<img src="foto-bebe-f.png" alt="mulher bebê">'
            } else if (idade < 30) {
                res.innerHTML += '<img src="foto-jovem-f.png" alt="mulher jovem">'
            } else if (idade < 60) {
                res.innerHTML += '<img src="foto-adulto-f.png" alt="mulher adulta">'
            } else if (typeof(idade) == 'number') {
                res.innerHTML += '<img src="foto-idoso-f.png" alt="mulher idosa">'
            } else {
                window.alert('[ERRO] Verifique os dados e tente novamente!')
            }
        } else if (sex == 'Homem') {
            res.innerHTML = `<p>Detectamos ${sex} com ${idade} anos.</p>`
            if (idade < 18) {
                res.innerHTML += '<img src="foto-bebe-m.png" alt="homem bebê">'
            } else if (idade < 30) {
                res.innerHTML += '<img src="foto-jovem-m.png" alt="homem jovem">'
            } else if (idade < 60) {
                res.innerHTML += '<img src="foto-adulto-m.png" alt="homem adulto">'
            } else if (typeof(idade) == 'number') {
                res.innerHTML += '<img src="foto-idoso-m.png" alt="homem idoso">'
            } else {
                window.alert('[ERRO] Verifique os dados e tente novamente!')
            }
        } else {
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        }
    }
    //res.innerHTML = `<p>${idade}</p>`
}