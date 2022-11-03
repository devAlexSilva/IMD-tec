// CSS do body para que que tenha o atributo font-family
//com valor ‘Arial, sans-serif
function exec() {
	const nome = document.querySelector('#nome')
	const idade = document.querySelector('#idade')
	const cidade = document.querySelector('#cidade')
	const body = document.querySelector('body')
	const ul = document.querySelector('ul')
	
	//b)
	body.style.fontFamily = 'Arial, sans-serif'

	//c)
	nome.textContent = 'Alex'
	idade.textContent = 25
	cidade.textContent = 'Amarante'

	//d)
	const arrayUl = [...ul.children] 
	arrayUl.forEach(item => item.style.color = 'red')

	//e)
	const img = document.createElement('img')
	img.setAttribute('src', './myImg.jpg')
	img.style.width = '500px'
	body.appendChild(img)
	

}

exec()