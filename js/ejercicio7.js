const nombres = ["Lucía", "Martín", "Valentina", "Pedro", "Camila", "Santiago"];

const mostrarNombres = () => {
    let nombreMasLargo = nombres[0];

    console.log("Nombres:");

    nombres.forEach((nombre) => {
        console.log(nombre);

        if (nombre.length > nombreMasLargo.length) {
            nombreMasLargo = nombre;
        }
    });

    console.log(`El nombre más largo es: ${nombreMasLargo}`);
};

mostrarNombres();