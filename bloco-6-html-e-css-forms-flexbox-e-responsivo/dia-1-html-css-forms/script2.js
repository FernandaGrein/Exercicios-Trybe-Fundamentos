const button = document.querySelector("button");
button.addEventListener("click", stopEvent);

function stopEvent (event){
    event.preventDefault()
} 

const buttonContainer = document.querySelector(".buttonContainer");

function createCleanButton () {
    const clearButton = document.createElement("button");
    clearButton.id = "clearAll"
    clearButton.innerHTML = "Limpar Campos"

    buttonContainer.appendChild(clearButton)
} createCleanButton ()

// https://www.javatpoint.com/javascript-reset#:~:text=In%20JavaScript%2C%20the%20reset(),does%20not%20return%20any%20value.

let buttonClear = document.querySelector("#clearAll");
buttonClear.addEventListener("click", clear);


function clear(){
    const form = document.querySelector("#myform")
    form.reset()
}