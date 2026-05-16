import { actualizarTexto } from "./funciones23.js";

const input = document.querySelector("#texto");

input.addEventListener("input", actualizarTexto);