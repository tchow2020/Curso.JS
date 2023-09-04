// Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como string. Por exemplo, se a entrada for 2,  a função deverá retornar "fevereiro", pois este é o 2° mês.

function nomedoMes(num_mes){
    mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",]
    return num_mes > 0 && num_mes <= 12 ? mes[num_mes - 1]  : 'Mês inexistente';
}

console.log(nomedoMes(1))