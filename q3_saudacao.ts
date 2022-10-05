/* Crie uma função que receba como parâmetros um nome e um pronome de tratamento
opcional. Caso esse último não seja fornecido, deve ser considerado o valor “Sr”. Ao final,
imprima uma saudação semelhante a “Sra. Sávia”. */

function nomeSaudacao(a : string, b : string) {
    return a + b;
}

var a : string = "Sr.";
var b : string = "Vinícius";
var c : string = a + b;

console.log("Converse comigo somente após o veredito, como devo tratá-lo: ", c);