function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.querySelector('#res')
    var txtnasc = document.querySelector('#txtnasc')
    var nasc = Number(txtnasc.value)
    
    if (nasc.lenght == 0 || nasc > ano || nasc == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = ano - nasc
        var fsex = document.getElementsByName('radsex')
        var sex = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            sex = 'Homem'
            if (idade < 18) {
                img.setAttribute('src', 'foto-bebe-m.png')
                img.setAttribute('alt', 'homem bebê')
            } else if (idade < 30) {
                img.setAttribute('src', 'foto-jovem-m.png')
                img.setAttribute('alt', 'homem jovem')
            } else if (idade < 60) {
                img.setAttribute('src', 'foto-adulto-m.png')
                img.setAttribute('alt', 'homem adulto')
            } else if (typeof(idade) == 'number') {
                img.setAttribute('src', 'foto-idoso-m.png')
                img.setAttribute('alt', 'homem idoso')
            } else {
                window.alert('[ERRO] Verifique os dados e tente novamente!')
            }
        } else if (fsex[1].checked) {
            sex = 'Mulher'
            if (idade < 18) {
                img.setAttribute('src', 'foto-bebe-f.png')
                img.setAttribute('alt', 'mulher bebê')
            } else if (idade < 30) {
                img.setAttribute('src', 'foto-jovem-f.png')
                img.setAttribute('alt', 'mulher jovem')
            } else if (idade < 60) {
                img.setAttribute('src', 'foto-adulto-f.png')
                img.setAttribute('alt', 'mulher adulta')
            } else if (typeof(idade) == 'number') {
                img.setAttribute('src', 'foto-idoso-f.png')
                img.setAttribute('alt', 'mulher idosa')
            } else {
                window.alert('[ERRO] Verifique os dados e tente novamente!')
            }
        } else {
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${sex} com ${idade} anos.</p>`
        res.appendChild(img)
    }
    //res.innerHTML = `<p>${idade}</p>`
}