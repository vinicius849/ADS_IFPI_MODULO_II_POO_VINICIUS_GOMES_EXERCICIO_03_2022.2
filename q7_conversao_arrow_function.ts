/* Converta em arrow function a seguinte função:
function ola() {
    console.log("Olá");
} */

function olaMundo() {
    console.log("Olá, Mundo!");
}


/* O que são arrow functions e como usá-las? 
Seja no Front-End, Back-End ou mobile você declara uma função e, em seguida,
chama-a novamente transformando o corpo dessa função. */

// declaracao da funcao 
function sayHelloWorld() { 
    return 'Hello World!' 
  } 
  
  // declaracao da funcao como expressao 
  const sayHelloWorld2 = function() { 
    return 'Hello World!' 
  } 
  
  // declaracao da arrow function 
  const sayHelloWorld3 = () => 'Hello World!' 
  
  // chama a funcao 
  console.log(sayHelloWorld()) 
  console.log(sayHelloWorld2()) 
  console.log(sayHelloWorld3())
  
  // output: 
  // Hello World!
  // Hello World!
  // Hello World!