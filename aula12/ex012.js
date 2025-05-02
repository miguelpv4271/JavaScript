var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são ${hora} horas`)

if (hora < 5){
    console.log(`Boa madrugada! Vai dormir`)
} else if (hora < 12){
    console.log(`Bom dia! Será que é um dia a mais ou um dia a menos?`)
} else if (hora < 19){
    console.log(`Boa tarde! Neymar`)
} else {
    console.log(`Boa noite! Bruno`)
}