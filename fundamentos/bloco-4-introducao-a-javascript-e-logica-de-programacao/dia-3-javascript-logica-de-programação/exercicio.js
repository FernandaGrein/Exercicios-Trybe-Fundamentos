// crie um algoritmo que retorne o fatorial de 10


// criar um array com todos os números dentro do 10
// criar uma variável para armazenar a multiplicação
// com um loop percorrer cada indice do meu array 
//incrementar a variável com a multiplicação de cada indície do array
//imprimir o resultado da variável 
let factorial = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let result = 10;
for (let index =1; index< factorial.length; index+=1) {
    if (factorial[index] < factorial.length) {
        result += factorial[index] * result
    } 
    
    
} console.log(result)