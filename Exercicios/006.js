const prompt = require('prompt-sync')()

let nota = 0;
let soma = 0;
let contador = 0

do{
    nota = prompt('Digite sua nota: ')
    nota = parseInt(nota)
    soma += nota;
    contador++
}while(nota != -1)

let media = soma  / contador

console.log(`${media}`)