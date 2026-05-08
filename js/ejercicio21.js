import { paisesCapitales, sincronizarCapital } from "./funciones21.js";

const selectPais = document.querySelector("Pais");
const selectCapital = document.querySelector("Capital");

// Populate lists
Object.entries(paisesCapitales).forEach(([pais, capital]) => {
  const optPais = document.createElement("option");
  optPais.value = pais;
  optPais.textContent = pais;
  selectPais.appendChild(optPais);

  const optCapital = document.createElement("option");
  optCapital.value = capital;
  optCapital.textContent = capital;
  selectCapital.appendChild(optCapital);
});

// Sync on first load
sincronizarCapital(selectPais, selectCapital);

selectPais.addEventListener("change", () => sincronizarCapital(selectPais, selectCapital));