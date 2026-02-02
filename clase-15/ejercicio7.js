const prompt = require("prompt-sync")();

// lista de comidas
let comidas = ["pizza", "hamburguesa", "tacos"];

// verificar si existe sushi
let existe = comidas.includes("sushi");

// mostrar resultado
if (existe) {
  console.log("sushi esta en la lista");
} else {
  console.log("sushi no esta en la lista");
}
