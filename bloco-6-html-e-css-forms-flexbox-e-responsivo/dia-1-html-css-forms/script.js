// 1 - Adicione um evento click no elemento a que possui o id href . Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.
// 2 - Adicione um evento click no elemento checkbox que possui o id input-checkbox . Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.
// 3 - Adicione um evento keypress no elemento input type="text" que possui o id input-text . Na função do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra 'a' minúscula) possa ser digitado na caixinha. ( dica: para capturar a tecla digitada, utilize o event.key )
// Caso deseje entender melhor o comportamento do método .preventDefault() , acesse a documentação do MDN ou a página da w3schools .


// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

// ex1 e ex 2
HREF_LINK.addEventListener("click", testPreventDefault);
INPUT_CHECKBOX.addEventListener("click", testPreventDefault);

function testPreventDefault(event) {
    event.preventDefault();

} testPreventDefault()

// ex3
INPUT_TEXT.addEventListener("keypress", semTexto)

function semTexto(event) {
    let pressA = event.key
    if (pressA !== "a") {
        event.preventDefault();
    }

} semTexto()

