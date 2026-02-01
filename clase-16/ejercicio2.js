const prompt = require("prompt-sync")();
// ejercicio 2 filtra los numeros pares de una lista
// se deben guardar solo los numeros divisibles por dos

// usamos filter para quedarnos solo con los pares

let numeros = [1, 2, 3, 4, 5, 6];

// el resto de dividir por 2 debe ser cero
let pares = numeros.filter(function(numero){
  return numero % 2 === 0;
})

console.log(pares);