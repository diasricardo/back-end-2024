function CalcularComissao(valorVenda, percComissao){
    percComissao = percComissao / 100;
    const comissaoTotal = valorVenda * percComissao;
    return comissaoTotal
}

let comissao = CalcularComissao(1000, 25)
console.log(comissao)

comissao = CalcularComissao(2000, 7)
console.log(comissao.toFixed(2))

console.log(CalcularComissao(5500, 10))