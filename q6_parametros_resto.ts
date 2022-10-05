/* Crie uma função exibir receba como parâmetro um “rest parameter” representando strings.
A função deve exibir no log cada um dos elementos do “rest parameter”. Chame a função
usando diferentes quantidade de parâmetros conforme abaixo:
exibir(“a”, “b”);
exibir(“a”, “b”, “c”);
exibir(“a”, “b”, “c”, “d”); */

function exibir(...parametros: string[]): void {
    for (let i = 0; i < parametros.length; i++) {
        console.log(parametros[i]);
    }

function exibir2(...parametros: string[]): void {
    parametros.forEach( p => console.log(p));
}

let numeros: number[] = [1, 2, 3, 4];
console.log(parametros.forEach(p => numeros));

exibir2();
exibir2('a');
exibir2('a','b'); 
exibir2('a','b', 'c');
exibir2('a', 'b', 'c', 'd');

function arrayToString(numeros: number[]): string {
    let resultado: string = '';
    for (let i = 0; i < numeros.length; i++) {
        resultado = resultado + numeros[i] + '-';
    }
    return resultado.slice(0, resultado.length-1);
}

}