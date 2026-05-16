export const actualizarCapital = () => {

    const pais = document.querySelector("#pais");
    const capital = document.querySelector("#capital");
    const mensaje = document.querySelector("#mensaje");

    const capitales = {
        Argentina: "Buenos Aires",
        Brasil: "Brasilia",
        Chile: "Santiago",
        Uruguay: "Montevideo",
        Paraguay: "Asunción",
        Perú: "Lima"
    };

    capital.value = capitales[pais.value];

    mensaje.textContent =
        `País seleccionado: ${pais.value} - Capital: ${capital.value}`;

    console.log(`País seleccionado: ${pais.value}`);
    console.log(`Capital seleccionada: ${capital.value}`);
};