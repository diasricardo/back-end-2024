const prompt =  require('prompt-sync')()
let soma = 0;
let num = parseInt(prompt('Digite um numero'))

while(num >= 0) {
        soma = num + soma;
        num = parseInt(prompt('Digite um numero'))
}

console.log(soma);