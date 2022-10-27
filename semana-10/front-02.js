(function exec() {
  let a = 10;
  let b = 20.1;
  let c = 5.1;

  console.log(calcular(a, b, c));
})();

function calcular(a, b, c) {
  let _delta = b * b - 4 * a * c;

  if (_delta < 0 || a === 0) return "impossível calcular";

  if (_delta === 0) return `X = ${-b / (2 * a)}`;

  let x1 = bhaskara(a, b, _delta, 1);
  let x2 = bhaskara(a, b, _delta, 2);

  return `x1 = ${x1}\nx2 = ${x2}`;
}

function bhaskara(a, b, delta, xLinha) {
  if (xLinha === 1) return (-b + Math.sqrt(delta)) / (2 * a);
  return (-b - Math.sqrt(delta)) / (2 * a);
}
