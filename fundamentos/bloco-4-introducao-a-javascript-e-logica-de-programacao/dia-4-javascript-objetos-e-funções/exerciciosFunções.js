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

 //3 Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

 function lowestValue (secondoArray) {
let lowestIndex = 0 

for( let ind in secondoArray) {
    if (secondoArray[lowestIndex] > secondoArray[ind]) {
        lowestIndex = ind
    }
} console.log(lowestIndex)
 } lowestValue([2, 4, 6, 7, 10, 0, -3]);

 // 4 - Crie uma função que receba um array de nomes 
 //e retorne o nome com a maior quantidade de caracteres.

 function highestName (word) {
     let biggestWord = word[0]
    for (let index =0; index<word.length; index+=1) {
        if (biggestWord.length < word[index].length) {
            biggestWord = word[index]
        } 
    } console.log(biggestWord)
 }

 highestName (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])

 