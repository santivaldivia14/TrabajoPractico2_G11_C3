// ejercicio24.js
import { mostrarSeleccion } from "./funciones24.js";

const radios = document.querySelectorAll('input[name="lenguaje"]');
radios.forEach(radio => radio.addEventListener("change", mostrarSeleccion));

// funciones24.js
export const mostrarSeleccion = (evento) => {
  const seleccionado = evento.target.value;
  const resultado = document.querySelector("#resultado");
  resultado.textContent = `Seleccionaste: ${seleccionado}`;
  console.log(`Lenguaje seleccionado: ${seleccionado}`);
};

