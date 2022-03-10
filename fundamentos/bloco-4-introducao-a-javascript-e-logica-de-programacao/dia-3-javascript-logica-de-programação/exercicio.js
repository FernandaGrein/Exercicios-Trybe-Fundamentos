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


//desenvolva um algoritmo que é capaz de inverter uma palavra
//let word = 'tryber';

//criar a variavel com uma string
//criar uma variável para armazenar o resultado
//criar um looping que percorra a string de trás para frente  
// adicionar na variável os índices da string na ordem invertida


let word = 'tryber';
let inversion ='';
for (let index2 = word.length-1; index2 >=0; index2 -=1) {
    inversion += word[index2]; 
    }
 
 console.log('resultado' , inversion); 



//3
//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. 
//Considere o número de caracteres de cada palavra.
//let array = ['java', 'javascript', 'python', 'html', 'css'];

// abrir uma variável que se inicia na primeira posição do array para adicionar a maior palavra
//percorrer o array verificando o tamanho de cada palavra
// quando o tamanho do index for maior que o tamando valor da variável 'maiorPalavra', entra no if 
// altera a variavel 'maiorPalavra' para o index do array localizado
// o loop corre até que todas as palavras sejam comparadas
// imprime no terminar a maior palavra encontrada
// o processo é o mesmo para localizar a menor palavra

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array [0]
let menorPalavra = array[0]

for (let contador =0; contador< array.length; contador +=1){
    if (array[contador].length > maiorPalavra.length) {
        maiorPalavra = array[contador]
    }
}

for (let contador =0; contador< array.length; contador +=1){
    if (array[contador].length < menorPalavra.length) {
        menorPalavra = array[contador]
    }
}

console.log ('Maior Palavra ' , maiorPalavra); 
console.log ('Menor palavra ' , menorPalavra);
