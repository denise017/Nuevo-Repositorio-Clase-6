const prompt = require("prompt-sync")();
// ejercicio 4 calcular la suma total de los numeros

let numeros = [1, 2, 3, 4];

// reduce acumula todos los valores en uno solo
let sumaTotal = numeros.reduce(function(acumulador, numero){
  return acumulador + numero;
});

console.log(sumaTotal);