// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. retorno da função deve ser a string "Salário igual a R$x", em que x é o quanto o funcionário ganhou no mês.

function calcularSalario(horas, salario){
        calculo = horas * salario
        
        return `Salário igual a R$${calculo}, é o quanto o funcionário ganhou no mês.`
}

console.log(calcularSalario(150, 40.5))