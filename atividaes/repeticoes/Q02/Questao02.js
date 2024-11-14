function mostrarPares(){
    let numero = parseInt(document.getElementById("num").value);
    let list= [];
    
    for(let i = 0; i <= numero; i++){
        
        if (i % 2 == 0){
            list.push(i);
        }
    }
    alert(list);
}