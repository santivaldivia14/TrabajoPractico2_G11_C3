const notas = [8, 5, 10, 6, 4, 7, 9, 3, 6, 2];

const analizarNotas = () => {
    let sumaNotas = 0;
    let aprobadas = 0;

    console.log("Notas:");

    notas.forEach((nota) => {
        console.log(nota);

        sumaNotas += nota;

        if (nota >= 6) {
            console.log(`Aprobada`);
            aprobadas++;
        } else {
            console.log(`Desaprobada`);
        }
    });

    const promedioGeneral = sumaNotas / notas.length;

    console.log(`Promedio general: ${promedioGeneral}`);
    console.log(`Cantidad de notas aprobadas: ${aprobadas}`);
};

analizarNotas();