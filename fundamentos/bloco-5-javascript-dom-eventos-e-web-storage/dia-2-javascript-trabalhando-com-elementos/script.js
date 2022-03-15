// Acesse o elemento elementoOndeVoceEsta .
//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
//Acesse o primeiroFilho a partir de pai .
//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
//Agora acesse o terceiroFilho a partir de pai .



document.getElementById("elementoOndeVoceEsta")
const pai = document.getElementById("elementoOndeVoceEsta").parentNode
pai.style.backgroundColor ="pink"

const primeiroFilho = document.getElementById("elementoOndeVoceEsta").firstElementChild;
primeiroFilho.innerText = "Adiciona um novo texto ao filho"

const filhoApartirdoPai = document.getElementById("elementoOndeVoceEsta").parentNode.firstElementChild
//console.log(filhoApartirdoPai)

//console.log(document.getElementById("elementoOndeVoceEsta").firstElementChild)

const ultimoFilho = document.getElementById("elementoOndeVoceEsta").lastElementChild
//console.log(ultimoFilho)
    
const terceiroFilho = document.getElementById("elementoOndeVoceEsta").nextElementSibling;
//console.log(terceiroFilho) 

const cadeOAtencao = document.getElementById("elementoOndeVoceEsta").parentNode.parentNode
//console.log(cadeOAtencao.innerText) // Atenção!

const filho3DoPai = document.getElementById("pai").childNodes[5]
//console.log(filho3DoPai)

//Crie um irmão para elementoOndeVoceEsta .
//Crie um filho para elementoOndeVoceEsta .
//Crie um filho para primeiroFilhoDoFilho .
//A partir desse filho criado, acesse terceiroFilho ***.

document.getElementById("elementoOndeVoceEsta")
let texto = "texto adicionado para o elemento irmão criado"
let ondeVamosCriar = document.getElementById("pai");
let elementoIrmao = document.createElement("p"); 
elementoIrmao.innerText = texto
ondeVamosCriar.appendChild(elementoIrmao)

document.getElementById("elementoOndeVoceEsta")
let frase = "texto adicionado ao filho de onde eu estou"
let novoLugar = document.getElementById("elementoOndeVoceEsta");
let filhoDeOndeEstou = document.createElement("h1")
filhoDeOndeEstou.innerText = frase
novoLugar.appendChild(filhoDeOndeEstou)

let desenho = "*-* *-* *-* ";
let terceiroLugar = document.getElementById("primeiroFilhoDoFilho");
let filhoDoFilho = document.createElement ("h2");
filhoDoFilho.innerText = desenho;
terceiroLugar.appendChild(filhoDoFilho)

//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta 
// e primeiroFilhoDoFilho .
//removi o primeiro e o terceiro filho

pai.removeChild(filhoApartirdoPai)
pai.removeChild (terceiroFilho)

