vetor = [];

function rederVetor() {
    const div = document.querySelector("#array");
    div.innerHTML = "";
    
    for(let elemento of vetor){
        const pTemp = document.createElement("p");
        pTemp.innerHTML = elemento;
        div.appendChild(pTemp);
    }
}

function pushValue() {
    const valor = document.querySelector("#valor").value;
    vetor[vetor.length] = valor

    rederVetor();
}
function popValue() {
    
   

    rederVetor();
}
function shiftValue() {
    


    rederVetor();
}
function unshiftValue() {
    const valor = document.querySelector("#valor").value;
    for(let i = vetor.length; i > 0; i--){
        vetor[i] = vetor[i-1]
    }

    rederVetor();
}