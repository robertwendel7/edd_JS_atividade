const numCerto = parseInt((Math.random() * 100)+1);

function descobrirNumero(){
    const numEscolhido = document.getElementById('num').value;
    let acertouResp = false;
    
        if(numEscolhido != numCerto){
            if(numEscolhido < numCerto){
                alert("Você errou, bobinho... digite um número maior");
            } else{
                alert("Você errou, bobinho... digite um número menor");
            }
            
        } else{
            acertouResp = true;
            alert("Você acertou, amiguinho bobinho... " + 'O número era: ' +numCerto);
        }
        
  
}