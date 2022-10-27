function calcularArea(propriedade, formula) {
  return formula(propriedade);
}

function formulaQuadrado(prop) {
  const area = Math.pow(prop, 2);
  return console.log(`area do quadrado: ${area}`);
}

function formulaCirculo(prop) {
  const area = (Math.PI * Math.pow(prop, 2)).toFixed(2);
  return console.log(`area do circulo: ${area}`);
}

(function exec() {
  const lado = 5;
  const raio = 2;

  calcularArea(lado, formulaQuadrado);
  calcularArea(raio, formulaCirculo);
})();
