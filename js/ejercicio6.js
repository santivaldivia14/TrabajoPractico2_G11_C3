const edades = [15, 18, 20, 22, 17, 19, 25, 30];

const mostrarEdades = () => {
    let sumaEdades = 0;

    console.log("Edades:");

    edades.forEach((edad) => {
        console.log(edad);
        sumaEdades += edad;
    });

    const promedioEdades = sumaEdades / edades.length;

    console.log(`Promedio de edades: ${promedioEdades}`);
};

mostrarEdades();