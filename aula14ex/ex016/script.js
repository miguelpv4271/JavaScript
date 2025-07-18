function contar(){
    var inicio = document.getElementById('iinicio').value
    var numinicio = Number.parseInt(inicio)

    var fim = document.getElementById('ifim').value
    var numfim = Number.parseInt(fim)

    var passo = document.getElementById('ipasso').value
    var numpasso = Number.parseInt(passo)

    var resultado = document.getElementById('res')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0){
        window.alert("Faltam dados!")
        resultado.innerHTML = "Impossível contar!"
    }else{
        resultado.innerHTML = "Contando... <br>"

        if (numpasso <= 0){
            window.alert("Passo inválido, vamos considerá-lo como 1 ao invés disso!")
            numpasso = 1
        }
        if (numfim > numinicio){ //contagem crescente
            while (numinicio <= numfim){
                resultado.innerHTML += `${numinicio} 👉`
                numinicio += numpasso
            }
        } else { //contagem regressiva
            while (numinicio >= numfim){
                resultado.innerHTML += `${numinicio} 👉`
                numinicio -= numpasso
            }
        }
        resultado.innerHTML += `\u{1f3c1}`
        }
}