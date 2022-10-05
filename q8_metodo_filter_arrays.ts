/* Dado método filter dos arrays, crie uma implementação usando arrow function que filtre
todos os elementos pares do array abaixo:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; */

/* Explicação simplista de método filter:
O método filter() recebe cada elemento do array e aplica uma instrução
condicional a ele. Se essa condição for verdadeira, o elemento é colocado
no array de resultado. Se for falsa, o elemento não é colocado lá. */

// Então, vamos para a 8ª questão
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens);

/* Evens, em inglês, significa PAR. E com o método filter eu filtro os números pares
do meu array de valores 1 a 15. */