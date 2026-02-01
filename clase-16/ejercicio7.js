const prompt = require("prompt-sync")();
// ejercicio 7 filtrar nombres que empiecen con la letra a

let nombres = ['Ana', 'Luis', 'Andrea', 'Maria'];

let nombresConA = nombres.filter(function(nombre){
  return nombre[0] === 'A';
});

console.log(nombresConA);