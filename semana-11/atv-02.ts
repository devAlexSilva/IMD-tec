class Estudante {
    readonly id: number
    public nome: string
    private credito: number

    constructor(id: number, nome: string) {
        this.id = id <= 0 ? 1 : id
        this.nome = nome
        this.credito = 1
    }

    addCredit(credito: number) {
        this.credito += credito
    }

    removeCredit(credito: number) {
        this.credito -= credito
    }

    detalhar() {
        console.log(`id: ${this.id}\nnome: ${this.nome}\ncredito: ${this.credito}`)
    }
}
const aluno01 = new Estudante(2, 'Alex')
console.clear()

aluno01.detalhar()
aluno01.addCredit(5)
aluno01.detalhar()