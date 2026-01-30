// Generamos un numero aleatorio entre 1 y 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1

// Permitimos hasta 3 intentos
for (let i = 1; i <= 3; i++) {
  let intento = Number(prompt("Adivina el numero del 1 al 10"))

  if (intento === numeroSecreto) {
    console.log("Felicitaciones adivinaste el numero")
    break
  }

  // Si es el ultimo intento y no acerto
  if (i === 3) {
    console.log("No acertaste el numero era " + numeroSecreto)
  }
}
