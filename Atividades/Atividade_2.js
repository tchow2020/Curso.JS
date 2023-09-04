// Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
// OBS: Considere que um ano tem 265 dias. Desconsidere anos bissextos (com 366 dias) e desconsidere também dias decorridos desde o último aniversário.

function converterIdadeEmAnosParaDias(idade){
    const ano = 365
    const result = idade * ano
    return result
}


console.log(converterIdadeEmAnosParaDias(25)) 
console.log(converterIdadeEmAnosParaDias(70)) 