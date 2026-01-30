const prompt = require("prompt-sync")({ sigint: true });

let numero = parseInt(prompt("Ingrese un numero del 1 al 7: "));

if (numero === 1) {
  console.log("Lunes");
} else if (numero === 2) {
  console.log("Martes");
} else if (numero === 3) {
  console.log("Miercoles");
} else if (numero === 4) {
  console.log("Jueves");
} else if (numero === 5) {
  console.log("Viernes");
} else if (numero === 6) {
  console.log("Sabado");
} else if (numero === 7) {
  console.log("Domingo");
} else {
  console.log("Numero invalido");
}
