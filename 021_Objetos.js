let produto = {
    nome: "Iphone",
    modelo: '14',
    valor: 3999.90,
    memoria: 256
}

let aluno = {
    nome:  "João",
    idade: 35,
    RM: 1081536
}

console.log(produto.nome)
console.log(produto.modelo)
console.log(produto.valor)
console.log(produto['valor']);

const nomeAluno = aluno.nome;
const idadeAluno = aluno.idade;

let valorProduto = produto.valor
valorProduto = valorProduto * 0.8

console.log(`Produto ${produto.nome} de ${produto.valor} por ${valorProduto} `)

produto.valor = 3890.00
console.log(produto.valor)


produto.fabricante = 'Apple'

for(let chave in produto){
    console.log(chave, produto[chave])
}


//Objetos aninhados

let funcionario = {
    nome: "João",
    idade: 35,
    salario: 5000,
    filhos: {
        filho1: 'Jorge',
        filho2: 'Matheus'
    }
}

console.log(funcionario.filhos.filho1)
console.log(funcionario.filhos.filho2)
