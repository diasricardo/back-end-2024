const prompt  = require('prompt-sync')()

let  nome = prompt('Qual seu nome: ')
console.log(`Seja bem-vindo ${nome}`)

let anoNasc = prompt('Em que ano você nasceu:')
anoNasc = parseInt(anoNasc);
let idade = 2024 -  anoNasc;
console.log(`${nome}, você nasceu em: ${anoNasc} e tem ${idade} anos.`)