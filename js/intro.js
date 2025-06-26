let idade = 25;
let none = "joaquin";
let idade2 ="23";
let resultado1 = idade + Number (idade2);
console;log(resultado1);
//contenaçao texto + numero

/*
// console.log("ola mundo!");
// console.info("ola mundo!");
// console.warn("cuidado,mundo!");
// console.error("erro.mundo!");
// console.debug("depuração mundo!");
*/

//escopo de variaveis
//chaves abre bloco de codigo
//fora do escopo é global
let idade3 = 30;
{
//dentro do escopo é local    
let idade3 = 35;
console.log(idade3);
}

