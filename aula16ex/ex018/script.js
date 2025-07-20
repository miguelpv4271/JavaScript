let tab = document.getElementById('itab')
let list = [] //array

function adicionar(){
    let num = Number.parseInt(document.getElementById('inum').value)
    
    let msg = document.createElement('option')

    if (num < 1 || num > 100 || document.getElementById('inum').value.length == 0){
        window.alert('Número inválido ou inexistente')
    } else {
        msg.innerHTML = `O número ${num} foi adicionado!`
        tab.appendChild(msg)
        vet(num) //chama a função que coloca o número na array 
    }
}

let vet = function vet(num){ //função que coloca o número na array
    list.push(num)
    return list
}

function finalizar(){ //função de quando clica no botão "finalizar"
    let res = document.getElementById('res')
    
    if (list.length == 0){
        window.alert('Informe ao menos um número')
    } else{
    list.sort()


    res.innerHTML = `Ao todo, temos ${list.length} números cadastrados <br>
    O maior valor informado foi ${list[list.length - 1]} <br>
    O menor valor informado foi ${list[0]} <br>
    A soma de todos os valores é ${soma(list)} <br>
    A média de todos os valores é ${soma(list) / list.length}
    ` 
    
    tab.innerHTML = '<option> Digite números acima! </option>'
    list = []
    }
}

let soma = function soma(n){ 
    if (n.length == 1){
        return n
    } else{
        let total = 0
        for (c in n){
            total += n[c] //adiciona o valor em cada posição a cada loop até acabar 
        }
        return total
    }
}