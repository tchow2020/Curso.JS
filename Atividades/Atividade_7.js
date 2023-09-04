// Crie uma função que receba quatro número como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja informado, seu valor padrão deverá ser

function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if(inclusivo)
        return numero >= minimo && numero <= maximo
    else{
        return false
    }

}

console.log(estaEntre(10, 50 , 100))
console.log(estaEntre(16, 100 , 160))
console.log(estaEntre(3, 3 , 150))
console.log(estaEntre(3, 3 , 150, true)) 

