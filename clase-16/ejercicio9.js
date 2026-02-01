const prompt = require("prompt-sync")();
// ejercicio 9 contar la cantidad total de letras

let palabras = ['sol', 'luna', 'estrella'];

// acumulamos el largo de cada palabra
let totalLetras = palabras.reduce(function(acumulador, palabra){
  return acumulador + palabra.length;
}, 0);

console.log(totalLetras);