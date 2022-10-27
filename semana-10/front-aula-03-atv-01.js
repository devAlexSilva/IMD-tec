(function exec() {
  const exemplo = [1, 2, 1, 3, 2];
  const excluirArray = [1, 2];

  console.log(exemplo);

  const excluir = (array = [], itensParaExcluir) => {
    for (let i = 0; i < itensParaExcluir.length; i++) {
      array.map((item) => {
        if (item === itensParaExcluir[i]) {
          let index = array.indexOf(item);
          array.splice(index, 1);
        }
      });
    }
  };

  excluir(exemplo, excluirArray);
  console.log(exemplo);
})();
