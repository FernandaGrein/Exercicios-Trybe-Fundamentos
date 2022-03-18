const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// pela aplicação do translateY(-20px) através de uma id 

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
firstLi.addEventListener("click", addAndremoveTech)
secondLi.addEventListener("click", addAndremoveTech2)
thirdLi.addEventListener("click", addAndremoveTech3)

function addAndremoveTech() {
  firstLi.classList.remove("tech")
  secondLi.classList.add("tech")
  thirdLi.classList.remove("tech")
}

function addAndremoveTech2() {
  secondLi.classList.remove("tech")
  thirdLi.classList.add("tech")
  firstLi.classList.remove("tech")
}

function addAndremoveTech3() {
  thirdLi.classList.remove("tech")
  firstLi.classList.add("tech")
  secondLi.classList.remove("tech")
}



// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';



// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener("dblclick", addWeb)

function addWeb() {
 let myGit = window.open("https://github.com/FernandaGrein", "_blank"); 
 return myGit
} 

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:

myWebpage.addEventListener("mouseover", changeColor)
myWebpage.addEventListener("mouseleave", colorBack)

function changeColor (event) {
event.target.style.color = "orange"
}

function colorBack (event) {
  event.target.style.color = "white"
}


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.