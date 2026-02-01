const prompt = require("prompt-sync")();
// ejercicio 8 buscar un nombre especifico

let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];

// find devuelve el valor encontrado o undefined
let resultado = nombres.find(function(nombre){
  return nombre === 'Laura';
});

console.log(resultado);
