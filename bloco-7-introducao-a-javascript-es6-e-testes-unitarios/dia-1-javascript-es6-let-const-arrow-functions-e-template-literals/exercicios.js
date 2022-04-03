// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
const testingScope = escopo => {
  if (escopo === true) {
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope)
  } else {
    console.log(elseScope)
  }
  
}
testingScope(true)

let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
const testingScope = escopo => {
  if (escopo === true) {
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`)
  } else {
    console.log(`${elseScope}`)
  }
  
}
testingScope(false)


//  2 Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// sort((a,b), return(a - b)) 

// O sort altera o array original, reordenando os valores 
// o sort é uma Rai order function - há outras 
// Seu código aqui.

console.log(oddsAndEvens); // será necessário alterar essa linha 😉 

oddsAndEvens.sort((a, b) => a - b)
console.log (`Os númeors ${oddsAndEvens} se encontram ordenados de forma crescente!`)



// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
// Crie uma função que receba uma frase e retorne qual a maior palavra.


longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const fatorial = 4;