// fazer uma função que diga se ele é negativo e se é maior ou menor que dez. 

function seEhPositivo(numero) {
    if (numero <0 ) {
    return "Este número é negativo e menor que 10"}
    else if (numero >10 ) {
        return "Este número é maior que 0 e maior que 10"} 
    else (numero > 0 && numero <= 10);       {
        return "Este número é maior que 0 e menor ou igual a 10"
    }


}
let res = seEhPositivo(20)
console.log(res)