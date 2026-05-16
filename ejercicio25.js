// ejercicio25.js

const colores = [
  "#e63946", "#457b9d", "#2a9d8f", "#e9c46a",
  "#f4a261", "#264653", "#6d6875", "#b5838d",
  "#3d405b", "#81b29a", "#f2cc8f", "#e07a5f"
];

let colorActual = "#264653";

const cambiarColor = () => {
  let nuevoColor;
  do {
    nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  } while (nuevoColor === colorActual);

  colorActual = nuevoColor;
  document.body.style.backgroundColor = colorActual;
  document.getElementById("color-actual").textContent = colorActual;

  const chip = document.createElement("div");
  chip.className = "chip";
  chip.style.backgroundColor = colorActual;
  chip.title = colorActual;
  document.getElementById("historial").prepend(chip);

  console.log(`Color cambiado a: ${colorActual}`);
};

document.getElementById("btn-color").addEventListener("click", cambiarColor);
