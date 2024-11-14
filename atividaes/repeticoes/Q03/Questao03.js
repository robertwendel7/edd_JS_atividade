function mostrarTabuada(){
    let numero = parseInt(document.getElementById("num").value);
    let list= [];
    
    for(let i = 1; i <= 10; i++){
        let tabuada = numero * i;
        list.push(tabuada);
    }
    alert(list);
}