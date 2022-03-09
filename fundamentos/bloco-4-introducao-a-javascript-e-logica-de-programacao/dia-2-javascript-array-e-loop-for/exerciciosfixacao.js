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