// Selecionando o elemento ul onde as frutas serão exibidas
var frutasList = document.getElementById("frutas");

// Lista de frutas
var frutas = ["maçã", "banana", "laranja", "uva", "morango"];

for (let i of frutas){
    var li = document.createElement("li"); // Criando elemento li
    li.textContent = i; // Definindo o texto do elemento li
    frutasList.appendChild(li); // Adicionando o elemento li à lista ul
    
}