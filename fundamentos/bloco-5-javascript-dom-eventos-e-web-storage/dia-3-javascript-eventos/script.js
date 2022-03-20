function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// ex 1 Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" .
//Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
//Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
//Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const ulDays = document.getElementById("days");

function addDezemberDays() {

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let daysNumbers = dezDaysList[index];
        let dezDaysListItem = document.createElement("li");

        if (daysNumbers === 24 || daysNumbers === 31) {
            dezDaysListItem.classList = "day holiday";
            dezDaysListItem.innerHTML = daysNumbers;

        } else if (daysNumbers === 4 || daysNumbers === 11 || daysNumbers === 18) {
            dezDaysListItem.classList = "day friday";
            dezDaysListItem.innerHTML = daysNumbers;

        } else if (daysNumbers === 25) {
            dezDaysListItem.classList = "day friday holiday";
            dezDaysListItem.innerHTML = daysNumbers;

        } else {
            dezDaysListItem.classList = "day";
            dezDaysListItem.innerHTML = daysNumbers;
        }

        // dezDaysListItem.innerHTML = daysNumbers;
        // dezDaysListItem.classList = "day"
        // dezDaysList[24].classList = "day holiday"
        // dezDaysList[25].classList = "day holiday"
        // dezDaysList[31].classList = "day holiday"
        // dezDaysList[4].classList = "day friday"
        // dezDaysList[11].classList = "day friday"
        // dezDaysList[18].classList = "day friday"
        // dezDaysList[25].classList = "day friday holiday"

        ulDays.appendChild(dezDaysListItem)
    };
}; addDezemberDays();

// ex 2
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
//Adicione a este botão a ID "btn-holiday" .
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
// https://www.devmedia.com.br/forum/criar-botao-dinamicamente-no-javascript/554111

let divPai = document.querySelector(".buttons-container")
let button = document.createElement("button");

function creatButtons(string) {

    button.id = "btn-holiday";
    button.innerHTML = string;

    divPai.appendChild(button);

} creatButtons("Feriados");

// ex3 
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
// https://www.w3schools.com/howto/howto_js_toggle_class.asp

let buttons = document.querySelector("#btn-holiday")
buttons.addEventListener("click", newColor)
let holydayDays = document.querySelectorAll(".holiday")

function newColor() {
    for (index = 0; index < holydayDays.length; index += 1) {
        if (holydayDays[index].style.background === "orange") {
            holydayDays[index].style.background = "rgb(238,238,238)"
        } else {
            holydayDays[index].style.background = "orange"
        }
    }
}

// ex 4 
//Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
//Adicione a este botão o ID "btn-friday" .
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
let container = document.querySelector(".buttons-container");
let fridayButton = document.createElement("button");

function createFridayButton(text) {

    fridayButton.id = "btn-friday"
    fridayButton.innerText = text

    container.appendChild(fridayButton);

} createFridayButton("Sexta-feira")


// ex 5 
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

// adicionar um eventListener
// selecionar os dias com a classe sexta
// fazer um for para percorrer todos os dias com a classe sexta feira
// criar uma função com style.text 
// usar um if /else 

let daysWithFridayClass = document.querySelectorAll(".friday")
let buttonFriday = document.querySelector("#btn-friday")
buttonFriday.addEventListener("click", changeText)


function changeText() {
    for (let index = 0; index < daysWithFridayClass.length; index += 1) {
            
        if (daysWithFridayClass[index].innerHTML === "sextouu!!") {
            daysWithFridayClass[0].innerHTML = 4
            daysWithFridayClass[1].innerHTML = 11 
            daysWithFridayClass[2].innerHTML = 18 
            daysWithFridayClass[3].innerHTML = 25 

        } else {
            daysWithFridayClass[index].innerText = "sextouu!!"
        }
    }
} changeText()

// ex 6
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
//
//

