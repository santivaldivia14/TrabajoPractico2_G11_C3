export const mostrarSeleccion = (evento) => {

    const resultado = document.querySelector("#resultado");

    resultado.textContent = `Lenguaje seleccionado: ${evento.target.value}`;

    console.log(`Seleccionado: ${evento.target.value}`);
};