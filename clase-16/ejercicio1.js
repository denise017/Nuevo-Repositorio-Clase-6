const prompt = require("prompt-sync")();
// ejercicio 1 crea un nuevo array con los cuadrados de los numeros
// se debe transformar cada numero de la lista original

// declaramos el array original
let numeros = [2, 4, 6, 8];

// usamos map para transformar cada numero
// cada valor se multiplica por si mismo
let cuadrados = numeros.map(function(numero){
  return numero * numero
})

// mostramos el nuevo array
console.log(cuadrados);