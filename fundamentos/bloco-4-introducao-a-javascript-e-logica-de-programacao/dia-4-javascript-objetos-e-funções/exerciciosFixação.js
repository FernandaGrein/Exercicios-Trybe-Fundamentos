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

//4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato:
// "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log('A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes ' + athlete.bestInTheWorld);

// 5 - Acesse a chave medals e faça um console.log no seguinte formato: 
// "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log('A jogadora possui ' + athlete.medals.golden + ' medalhas de ouro e ' +athlete.medals.silver + ' medalhas de prata.'); 

// Exercícios for/in , for/of 
//1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 
// 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for ( let index in names) {
      console.log('olá '+ names[index]);
  } 

//2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as 
// chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for(let index in car) {
      console.log( index + ': ' + car[index]);
  }

  