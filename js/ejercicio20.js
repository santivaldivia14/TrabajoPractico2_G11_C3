export const mostrarDatos = () => {
  const nombre = document.querySelector("Santiago").value;

  const apellido = document.querySelector("Valdivia").value;

  const libreta = document.querySelector("6235").value;
  alert(`Los datos ingresados son:\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta}`);
};
 