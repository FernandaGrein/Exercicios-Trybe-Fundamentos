//1- Crie uma função que receba uma string e retorne true se for um palíndrom, 
// ou false , se não for.

//cortar a palavra
//inverter a ordem das letras
//juntar a palavra em uma nova variável 
//checar se o parâmtro da função é igual a nova variável 
// retornar true se for, e false se não for 

function palindrome(string) {

    let splitString = string.split("").reverse().join('');

    if (string === splitString) {
        console.log(true)
    } else {
        console.log(false)
    }
} palindrome('arara');
palindrome('abacaxi');

// 2- Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function highestValue (array) {
let highestIndex =0

for (let index in array) {
    if (array[highestIndex] < array[index]) {
        highestIndex = index
    }
} console.log(highestIndex)

}
 highestValue ([2, 3, 6, 7, 10, 1])