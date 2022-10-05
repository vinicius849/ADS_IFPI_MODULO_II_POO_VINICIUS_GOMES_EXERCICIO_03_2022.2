/* Crie uma função que recebe como parâmetro um número e retorna true se o número for
primo e false caso contrário. */

function isPrime(x : any = 0) {
    console.log("Digite aqui um número qualquer: ", x);

/* Os primeiros números primos são: 2, 3, 5, 7 e assim por diante.
Um exercício de lógica muito comum pedido para verificar se o número é primo ou não. */

let num_1 : number = 2;
const isPrime = (num_1 : number) => {
    for (num_1 = 2, num_1 > 1, num_1++) {
        console.log("Minha variável num_1 é um número primo, no caso, 2(dois).");
        console.log("Por isso, digite um número para teste: ", num_1);
        if (num_1 % 2 === 0) {
        return true;
        }

    for (!(num_1 = 2, num_1 > 1, num_1++)) {
        console.log("Meu laço de iteração for será negado para retornar o boolean false.");
        console.log("Por isso, digite um número para teste: ", num_1);
        if (num_1 % 2 === 1) {
        return false;
        }
    }
    }

};