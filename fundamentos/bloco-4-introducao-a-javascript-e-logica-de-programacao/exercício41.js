const a = 15;
const b = 3
console.log (a +b);
console.log (a-b);
console.log (a*b);
console.log (a/b);
console.log (a%b);
console.log (Math.max (a,b));
const c = 10;
console.log (Math.max (a,b,c));

//exercicio 2
if ( a>b) {
    console.log (a)
} else {
    console.log (b)
};

//exercicio 3
if (a>b && a>c) {
    console.log (a)
} else if (b>a && b>c) {
    console.log (b)
} else {
    console.log (c)
};

//exercício 4
const d = 54;
if ( d>0) {
    console.log ("positivo")
} else if (d<0) {
    console.log ("negativo")
} else {
    console.log ("zero")
};

// ecercício 5
const e = 60;
const f = 60;
const g = 60;
if ( e + f+ g === 180 ) {
  console.log ("true")
} else if (e<=0 || f<=0 || g<=0) {
    console.log ("erro")
} else {
    console.log ("false")
};

//exercício 6

// exercício 7
let nota = 34
  if (nota >=90 && nota <=100) {
    console.log("A")
} else if (nota >= 80  && nota <90) {
    console.log("B")
} else if ( nota >= 70 && nota <80) {
    console.log("C")
} else if ( nota >= 60 && nota <70) {
    console.log("D")
} else if ( nota >= 50 && nota <60) {
    console.log("E")
} else if ( nota < 50 && nota > 0) {
    console.log("F")
} else {
    console.log("erro, favor incerir uma nota válida")
}

// ou 
if (grade < 0 || grade > 100) {
    console.log("Erro, nota incorreta!");
  } else if (grade >= 90) {
    console.log("A");
  } else if (grade >= 80) {
    console.log("B");
  } else if (grade >= 70) {
    console.log("C");
  } else if (grade >= 60) {
    console.log("D");
  } else if (grade >= 50) {
    console.log("E");
  } else {
    console.log("F");
  }

// exercicio 8
