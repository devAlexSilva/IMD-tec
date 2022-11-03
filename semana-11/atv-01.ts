class MesaDeJantar {
    material: string
    lugares: number
    preco: number

    constructor(material: string, lugares = 4, preco = 0) {
        this.material = material
        this.lugares = lugares
        this.preco = preco
    }

    detalhar() {
        console.log(`material: ${this.material}\nlugares: ${this.lugares}\npreco: ${this.preco}`)
    }
}

const mobilia01 = new MesaDeJantar('Metal', 8, 100).detalhar()
const mobilia02 = new MesaDeJantar('Madeira', 6).detalhar()
const mobilia03 = new MesaDeJantar('Vidro').detalhar()
