 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
for (var indice =0; indice < numbers.length; indice+=1) {
    console.log(numbers [indice]);
};

//2
let soma =0;
for (var indice =0; indice < numbers.length; indice+=1) {
    soma += numbers[indice]
}
console.log(soma);

//3
let media = 0;
for (var indice =0; indice < numbers.length; indice+=1) {
    media = soma/ numbers.length
} 
console.log(media);

//4
let valor = 20
for (var indice =0; indice < numbers.length; indice+=1) {
    media = soma/ numbers.length
} 
console.log(media);
if (media > valor) {
    console.log("valor maior que 20")
} else { 
    console.log ("valor menor ou igual a 20")
}; 

//5 
let maiorValor = numbers[0]
for (var indice =1; indice < numbers.length; indice+=1){ 
 if (numbers [indice] > maiorValor) {
    maiorValor = numbers[indice];
 }
}
console.log (maiorValor)

//6
//let numbers = [ 2,4,6,8,10,];
let numerosImpares = 0;
for (var indice =0; indice < numbers.length; indice+=1) { 
    if ( numbers[indice] % 2 !== 0) {
        numerosImpares +=1 
    }
}

    if (numerosImpares === 0) {
        console.log ("nenhum valor ímpar encontrado")
    } else {
        console.log(numerosImpares)
    }
