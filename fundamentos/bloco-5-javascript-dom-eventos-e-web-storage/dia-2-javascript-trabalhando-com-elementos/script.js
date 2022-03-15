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