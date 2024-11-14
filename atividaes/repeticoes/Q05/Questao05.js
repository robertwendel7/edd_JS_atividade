function transformarPalavra(){
    let palavra = document.getElementById('palavra').value;
    let novaPalavra = '';

    for(i = palavra.length - 1; i >= 0; i--){
        novaPalavra += palavra[i];
       
    }
    console.log(novaPalavra);
}