function tabuada(){
    var num = Number.parseInt(document.getElementById('inum').value)
    var tab = document.getElementById('itab')

    if (document.getElementById('inum').value.length == 0){
        window.alert("Digite um número!")
    } else {
    tab.innerHTML = `` //limpando o HTML
    for(c = 1; c<=10; c++){ //Tabuada 
        var item = document.createElement("option")
        item.text = `${num} x ${c} = ${num * c}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }} 
}