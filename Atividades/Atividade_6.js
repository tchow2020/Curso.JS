// Escreva uma função que receba um valor booleano ou número. Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. Por exemplo, se for fornecido 1, o retorno será -1. se o parâmetro de entrada não for de nenhum dos tipos acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo...".

function inverso(dado){
    if (dado != String)
        return -dado
    else if(dado != true){
        return dado
    
   

}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("Programação"))