/* Crie uma função que recebe como parâmetro um número e retorna true se o número for
par e false se for ímpar. */

function definirNumero(x : any = 0) {
    console.log("Digite aqui um número: ", x);

if (x % 2 === 0) {
    return true;  
} else{
    return false;
  }
}