const prompt = require('prompt-sync')()

let idade = prompt('Digite a sua idade: ')
idade = parseInt(idade)

if (idade < 12 || idade > 60){
    console.log('Você paga meia entrada')
}else{
    console.log('Você paga entrada normal')
}