
// Selecionando o elemento ul onde os números serão exibidos
var numerosList = document.getElementById("numeros");
const listaNum = [1, 2, 3, 4, 5]

// Loop for para adicionar números de 1 a 5 na lista
for (var i of listaNum) {
    var li = document.createElement("li"); // Criando elemento li
    li.textContent = i; // Definindo o texto do elemento li
    numerosList.appendChild(li); // Adicionando o elemento li à lista ul
}
