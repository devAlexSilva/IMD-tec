function exec() {
	const obj = {
					a: 1,
					b: 2,
					c: true
	}

	let arrayByObject = objToArray(obj)
	console.log(arrayByObject)
}

const objToArray = (obj) => Object.entries(obj)

exec()