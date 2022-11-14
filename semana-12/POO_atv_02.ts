class Computador {
    constructor(readonly processador: string, readonly memoria: number) {
        this.processador = processador
        this.memoria = memoria
    }
}

class Laptop extends Computador {
    constructor(public bateria_watts = 0){
        super('', 0)
        this.bateria_watts = bateria_watts
    }
}

class Desktop extends Computador {
    constructor(public gabinete = ''){
        super('', 0)
        this.gabinete = gabinete
    }
}

const desk = new Desktop('ferro')
console.log(desk.gabinete)