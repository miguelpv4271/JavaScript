function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.getElementById('res')
    var fsex = document.getElementsByName('radsexo')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.length == 0 || fano.value > ano || fano.value < 0){
        window.alert('Verifique os dados e tente novamente')
    }else {
        if (fsex[0].checked){
            if (idade <= 12){
                //Criança
                img.setAttribute('src', 'fotos/criança-m.jpg')
            } else if (idade <= 25){
                //Jovem
                img.setAttribute('src', 'fotos/jovem-m.jpg')
            } else if (idade < 60){
                //Adulto
                img.setAttribute('src', 'fotos/adulto-m.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'fotos/idoso-m.jpg')
            }
            gênero = "Homem"
        } else if (fsex[1].checked){
            if (idade <= 12){
                //Criança
                img.setAttribute('src', 'fotos/criança-f.jpg')
            } else if (idade <= 25){
                //Jovem 
                img.setAttribute('src', 'fotos/jovem-f.jpg')
            } else if (idade < 60){
                //Adulto
                img.setAttribute('src', 'fotos/adulto-f.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'fotos/idoso-f.jpg')
            }
            gênero = "Mulher"
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}