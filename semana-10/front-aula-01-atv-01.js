(function exec() {
  const idade = 25;
  const quantidade = 1;
  const valor = 2;

  const valorNecessario = calcularSuprimento(idade, quantidade, valor);
  console.log(
    `Você precisará de R$${valorNecessario} para ter um suprimento de lanche até 85 anos`
  );
})();

function calcularSuprimento(idadeAtual, quantidadeLanchesPorDia, custo) {
  const maxIdade = 85;
  const tempoDeVida = maxIdade - idadeAtual;
  const tempoDeVidaEmDias = tempoDeVida * 365;

  const lanchesPorVida = quantidadeLanchesPorDia * tempoDeVidaEmDias;
  return (custoTotal = lanchesPorVida * custo);
}
