
// Selecionando o elemento ul onde as cores serão exibidas
var coresList = document.getElementById("cores");

// Lista de cores
var cores = ["vermelho", "verde", "azul", "amarelo", "laranja"];


for (let i of cores){
    var li = document.createElement("li"); // Criando elemento li
    li.textContent = i; // Definindo o texto do elemento li
    coresList.appendChild(li); // Adicionando o elemento li à lista ul
   
}