const calcularRectangulo = (base, altura) => {
  const area = base * altura;
  const perimetro = 2 * (base + altura);

  console.log(`Rectángulo de ${base} cm x ${altura} cm`);
  console.log(`Área: ${area} cm²`);
  console.log(`Perímetro: ${perimetro} cm`);
};

calcularRectangulo(8, 5);