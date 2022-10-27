let idadeEmDias = 400;
console.log(idadeEmDias);

const ano = parseInt(idadeEmDias / 365);
const mes = (idadeEmDias % 365) / 30;
const dia = (idadeEmDias % 365) % 30;

function format(num) {
  return Math.floor(num);
}
console.log(
  `${format(ano)} ano(s)\n${format(mes)} mes(es)\n${format(dia)} dia(s)`
);
