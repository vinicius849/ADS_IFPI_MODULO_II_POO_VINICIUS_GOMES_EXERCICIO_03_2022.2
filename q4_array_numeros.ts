/* Crie uma função que retorne os números de um array passados por parâmetro separados
por traço (-) no formato string. Para isso, use o método forEach dos arrays - 4ª questão. */

/* Adaptando-se ao método forEach em Java Script - como se percore um array em JS?
O método forEach do Java Script é similar à semântica TypeScript, pois é uma de várias
maneiras de percorrer arrays. Cada métodfo tem recursos diferentes. É com você, dependendo 
do que estiver fazendo, decidir qual deles usar; considerando os tipos de arrays. */

// Exemplo 1
const numbers = [1, 2, 3, 4, 5];
let i : any = 0;
for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach(function() {
    // código;
});

/* Estabelecendo parâmetro para que a função seja executada para todo elemento do array.
Deve ter ao menos um parâmetro. */

numbers.forEach(function(number) {
    console.log(number);
});

// Representação alternativa para um arrow function do Ecma Script 6
numbers.forEach(number => console.log(number));

// Exemplo 2: TypeScript - Array forEach()
array.forEach(callback[, thisObject]);

/* Explicação do teste01: callback seria função de teste for each element
thisObject é o objeto que eu uso quando se executa o callback. */
let num = [7, 8, 9];
num.forEach(function(value)) {
    console.log(value);
});
// Agora, compilando o meu código e gerando o segmento Java Script Code:
var num = [7, 8, 9];
num.forEach(function(value)) {
    console.log(value);
});

// Vamos parfa a 4ª questão em análise:
function arrayToString(numeros: number[]): string {
    let resultado: string = '';
    for (let i = 0; i < numeros.length; i++) {
        resultado = resultado + numeros[i] + '-';
    }
    return resultado.slice(0, resultado.length-1);
}

function arrayToString2(numeros: number[]): string {
    let resultado: string = '';
    numeros.forEach(function (numero) {
        resultado = resultado + numero + '-';
    });
    
    return resultado.slice(0, resultado.length-1);
}

function arrayToString3(numeros: number[]): string {
    let resultado: string = '';
    numeros.forEach( numero => resultado +=  numero + '-');
    
    return resultado.slice(0, resultado.length-1);
}

function exibir(...parametros: string[]): void {
    for (let i = 0; i < parametros.length; i++) {
        console.log(parametros[i]);
    }
}


function exibir2(...parametros: string[]): void {
    parametros.forEach( p => console.log(p));
}

