let tab = document.querySelector('select#itab')
let list = [] //array
let res = document.getElementById('res') 

function adicionar(){
    let caixa = document.getElementById('inum')
    let num = Number(caixa.value)
    let msg = document.createElement('option')

    if (!isNumber(num) || inLista(num, list)){
        window.alert('Número inválido, inexistente ou já está na lista')
    } else {
        msg.innerHTML = `O número ${num} foi adicionado!`
        tab.appendChild(msg) //Resposta visual 
        list.push(num) //Adiciona o número na Array
        res.innerHTML = ''
    }

    caixa.value = '' //Limpa a caixa
    caixa.focus() //Volta o foco do mouse para a caixa
}

function isNumber(n){
    if (n >= 1 && n <= 100){ //Verifica se é um número válido
        return true
    } else {return false}
}

function inLista(n, l){
    if (l.indexOf(n) != -1){  //Se não tiver o valor na lista, retorna -1
        return true 
    } else {return false}
}   

function finalizar(){ //função de quando clica no botão "finalizar"
    if (list.length == 0){
        window.alert('Informe ao menos um número')
    } else{
    let maior = list[0]
    let menor = list[0]
    let soma = 0
    let media = 0
    for(pos in list){
        soma += list[pos]
        
        if (list[pos] > maior){
            maior = list[pos]
        }
        if (list[pos] < menor){
            menor = list[pos]
        }
    }
    
    media = soma / list.length


    res.innerHTML = `Ao todo, temos ${list.length} números cadastrados <br> 
    O maior valor informado foi ${maior} <br>
    O menor valor informado foi ${menor} <br>
    A soma de todos os valores é ${soma} <br>
    A média de todos os valores é ${media}
    ` 
    }
}

function resetar(){
    tab.innerHTML = '<option> Digite números acima! </option>'
    res.innerHTML = ''
    list = [] //Reseta tudo
}
