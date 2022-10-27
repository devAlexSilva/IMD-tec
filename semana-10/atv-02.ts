class ContaCorrente {
  nomeCorrentista: string;
  cpfCorrentista: string;
  saldo: number;

  setNome(nome: string) {
    this.nomeCorrentista = nome;
  }
  setCpf(cpf: string) {
    this.cpfCorrentista = cpf;
  }
  setSaldo(saldo: number) {
    this.saldo = saldo;
  }
  depositar(valor: number) {
    this.saldo += valor;
  }
  sacar(valor: number) {
    this.saldo -= valor;
  }
  mostrarInformacao() {
    console.log(`
            nome: ${this.nomeCorrentista},
            cpf: ${this.cpfCorrentista},
            saldo: ${this.saldo}
            `);
  }
}

const conta = new ContaCorrente();
conta.setNome("Alex");
conta.setCpf("60284545602");
conta.setSaldo(2000);
conta.depositar(1000);
conta.sacar(500);
conta.mostrarInformacao();
