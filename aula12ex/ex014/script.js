
function carregar(){
    var body = document.body.style
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 5 && hora < 12){
        img.src = 'fotos/manha.png'
        body.background = '#60B9F8'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'fotos/tarde.png'
        body.background = '#F5C97F'
    } else{
        img.src = 'fotos/noite.png'
        body.background = '#00111D'
    }
}

