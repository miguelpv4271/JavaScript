let valores = [1, 7, 4, 8, 3, 9]
valores.push(2, 5, 6)
valores.sort()

console.log(valores)

/*for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

