const convertirASegundos = (horas, minutos) => {
  const segundos = (horas * 3600) + (minutos * 60);

  console.log(`Horas: ${horas}, Minutos: ${minutos}`);
  console.log(`Equivalente en segundos: ${segundos}`);
};

convertirASegundos(2, 30);