// 1 - Crie um objeto player contendo as variáveis listadas abaixo.
//let name = 'Marta';
//let lastName = 'Silva';
//let age = 34;
//let medals = { golden: 2, silver: 3 };

let athlete = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

//2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console 
//uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log('A jogadora ' + athlete.name + ' ' + athlete.lastName +' tem ' + athlete.age + ' de idade.')

// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo
//as datas em que a jogadora Marta foi considerada a melhor do mundo.
// [2006, 2007, 2008, 2009, 2010, 2018]

athlete.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(athlete);

