import { mostrarSeleccion } from "./funciones24.js";

const radios = document.querySelectorAll("input[name='lenguaje']");

radios.forEach((radio) => {
    radio.addEventListener("change", mostrarSeleccion);
});