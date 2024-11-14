function mostrarVogais(){
    let palavra = document.getElementById('string').value.toLowerCase();
    let vogais = ['a','e','i','o','u'];
    let quantidadeVogais = 0;

    for(elemento of palavra){
        if(vogais.includes(elemento)){
            quantidadeVogais++
        }
    }
    console.log(quantidadeVogais);
}