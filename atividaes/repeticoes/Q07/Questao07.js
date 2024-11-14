let tentativas = 1;
let palavra = ['cacto', 'primo', 'burro', 'leite', 'besta'];

function numAleatorio(max){
    return Math.random() * (max - 0) + 0;
}

const aleatorio = parseInt(numAleatorio(palavra.length));
console.log(aleatorio);
function descobrirPalavra() {
    
    let resposta = document.getElementById('palavra').value;
    let acertou = false;



    if (resposta == palavra[aleatorio]) {
        alert("acertou com: " + tentativas + " tentativas..");
    } else {
        tentativas++
        alert("errou bobinho");
    }


}