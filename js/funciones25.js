export const cambiarColor = () => {

    const colores = [
        "lightblue",
        "lightgreen",
        "lightpink",
        "lightyellow",
        "lavender",
        "orange"
    ];

    const numeroAleatorio = Math.floor(Math.random() * colores.length);

    document.body.style.backgroundColor = colores[numeroAleatorio];

    console.log("El color de fondo cambió");
};