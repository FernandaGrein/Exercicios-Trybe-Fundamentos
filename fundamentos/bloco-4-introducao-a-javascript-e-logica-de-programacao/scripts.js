const myName = "Fernanda";
const birthCity = "Cuiabá";
let birthYear = "1994";
console.log(myName);
console.log(birthCity);
console.log(birthYear);
birthYear = 2030
console.log(birthYear);

let patientID = 50
let isEnrolled = true
const patientInfo = {
    firstName: "Ana",
    lastName: "Santos",
};
const patientEmail = "anan@email.com";
console.log(typeof patientID);
console.log(typeof patienteAge);
patientID = "50";
console.log(patientID);
console.log(typeof patientID);

const base = 5;
let height = 8;
const area = base * height;
console.log(area);
const perimeter = base + base + height + height;
console.log(perimeter);
const perimeter2 = base * 2 + height * 2;
console.log(perimeter2);

const nota = 90;
if (nota >= 80) {
    console.log("Parabéns,você foi aprovada(o)!")
} else if (nota >= 60 && nota < 80) {
    console.log("Você está na nossa lista de espera")
} else {
    console.log("Você foi reprovado")
};

const currentHour = 3;
let message = "null";
if (currentHour >= 22) {
    message = console.log("Não deveriamos comer nada, é hora de dormir")
} else if (currentHour >= 18 && currentHour < 22) {
    message = console.log("Rango da noite, vamos jantar :D")
} else if (currentHour >= 14 && currentHour < 18) {
    message = console.log("Vamos fazer um bolo pro café da tarde?")
} else if (currentHour >= 11 && currentHour < 14) {
    message = console.log("Hora do almoço!!!")
} else if (currentHour >= 4 && currentHour < 11) {
    message = console.log("Hmmm, cheiro de café recém passado!")
} else {
    message = console.log("ZzzZzzzZzz")
};

let weekDay = "sábado";
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log ("Oba, mais um dia de aprendizado na Trybe >:D")
} else {
    console.log ("FINALMENTE, descanso merecido UwU")
};

let candidato = "grupo azul";
switch(candidato) {
    case "grupo azul": 
      console.log ("aprovada");
      break;
    case "grupo amarelo": 
      console.log ("Lista de espera");
      break;
    case "grupo vermelho":
        console.log ("reprovada");
        break;
    default:
        console.log ("não se aplica")
};

let menu = 1;
switch (menu) {
    case 1: console.log("Trybe Lanche Feliz");
    break;
    ca

}