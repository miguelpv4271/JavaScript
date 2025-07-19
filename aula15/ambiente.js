let num = [5, 8, 2, 9, 3]
num.push()
num.push(1)
num.sort()
console.log(num)

console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O último valor do vetor é ${num[num.length - 1]}`)

pos = num.indexOf(4) //Buscando valores 

if (pos == -1){
    console.log(`O valor que você está procurando não existe na Array`)
} else{ 
    console.log(`O valor que você procura está na posição ${pos}`)
}

/* for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
} */ 
