function carregar () {
    var agora = new Date()
    var hora = agora.getHours()
    var msg = document.querySelector('#msg')
    var foto = document.querySelector('#foto')
    var body = document.body
    msg.innerHTML = `<p>Agora são ${hora} horas!</p>`

    if (hora >= 5 && hora < 12) {
        // BOM DIA!
        foto.innerHTML = '<img src="fotomanha.png" alt="foto de manhã">'
        body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        foto.innerHTML = '<img src="fototarde.png" alt="foto de tarde">'
        body.style.backgroundColor = '#b9846f'
    } else {
        //BOA NOITE!
        foto.innerHTML = '<img src="fotonoite.png" alt="foto de noite">'
        body.style.backgroundColor = '#515154'
    }
}