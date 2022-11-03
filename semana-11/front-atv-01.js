function exec() {
    const exemplo = {
        a: 1,
        b: 2,
        c: true
    }

    const arrayToExclude = ['b', 'a']

    excluirPropriedades(exemplo, arrayToExclude)
}

const excluirPropriedades = (obj = {}, arr = []) => {
    console.log(obj)

    for (let key in obj) {
        arr.map(element => {
            if (key === element) delete obj[key]
        })
    }

    console.log(obj)
}
exec()