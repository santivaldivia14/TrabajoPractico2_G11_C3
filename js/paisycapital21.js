export const paisesCapitales = {
  Argentina: "Buenos Aires",
  Brasil: "Brasilia",
  Chile: "Santiago",
  Colombia: "Bogotá",
  Peru: "Lima",
  Uruguay: "Montevideo",
};

export const sincronizarCapital = (selectPais, selectCapital) => {
  const capital = paisesCapitales[selectPais.value];
  selectCapital.value = capital;
  console.log(`País seleccionado: ${selectPais.value} | Capital: ${capital}`);
};