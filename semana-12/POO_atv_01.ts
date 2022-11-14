
class Cidade {
    constructor(readonly nome?:string) {
        this.nome = (nome === undefined) ? 'invalid' : nome
    }

    show() {
        console.log(this.nome)
    }
}

class Pessoa extends Cidade{
    constructor(public nome: string, public cidade: Cidade){
        super()
        this.nome = nome
        this.cidade = cidade
    }

    show() {
        console.log(`pessoa: ${this.nome}, cidade: ${this.cidade.nome}`)
    }
}

class Animal extends Pessoa {
    constructor(public nome: string, public dono: Pessoa) {
        super(nome, dono)
        this.nome = nome
        this.dono = dono
    }

    show(){
        console.log(`animal: ${this.nome}, dono: ${this.dono.nome}`)
    }
}

console.clear()

const natal = new Cidade('Natal')
natal.show()

const joao = new Pessoa("João", natal);
joao.show()

const toto = new Animal("Totó", joao);
toto.show()