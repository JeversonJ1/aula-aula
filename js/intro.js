const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");
let idade = 0;// escopo global
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    idade = document.getElementById("idade").value;
    
    if(idade < 12){
    
    resultado.innerHTML ="voce é criança"
    let nome = "joao";
    resultado.innerHTML = nome
    
    }else if(idade >=12 && idade < 18){
        resultado.innerHTML = "voce é adolecente"
        let nome = "ana";
        resultado.innerHTML  = nome
        
    }else if(idade >=12 && idade < 60){
     resultado.innerHTML = "voce é adulto"
     let nome = "carlos";
     resultado.innerHTML = nome;
    
    } else{
        resultado.innerHTML ="voce é idoso"
        let nome = "maria";
        resultado.innerHTML =nome;
    }
    
}

)

//contenaçao texto + numero

/*
 console.log("ola mundo!");
 console.info("ola mundo!");
 console.warn("cuidado,mundo!");
 console.error("erro.mundo!");
 console.debug("depuração mundo!");
 palavras chaves para a criação de variaveis no JS 
 let = variavel que pode ser alteradas
 const = variavel que não pode ser alteradas
*/

//escopo de variaveis
//chaves abre bloco de codigo
//fora do escopo é global


//dentro do escopo é local    


    

