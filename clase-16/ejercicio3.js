const prompt = require("prompt-sync")();
// ejercicio 3 encontrar el primer numero mayor a 10

let numeros = [5, 8, 12, 20, 3];

// find devuelve solo el primer valor que cumple la condicion
let mayorA10 = numeros.find(function(numero){
  return numero > 10;
})

console.log(mayorA10);