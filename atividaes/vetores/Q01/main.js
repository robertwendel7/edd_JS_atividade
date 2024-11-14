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
    vetor.push(valor);

    rederVetor();
}
function popValue() {
    
    vetor.pop();

    rederVetor();
}
function pushValue() {
    
    vetor.shift();

    rederVetor();
}
function pushValue() {
    const valor = document.querySelector("#valor").value;
    vetor.unshift(valor);

    rederVetor();
}