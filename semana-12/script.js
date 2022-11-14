/**
 * b) Crie funções para cada uma das operações desejadas na nossa calculadora: uma para
retornar a potência de 3 (ao cubo) de um número; outra para retornar a metade de um
número; e uma para retornar a área de um círculo de raio N.
c) Para cada operação, crie um escutador de evento para o botão, e quando ele for clicado,
ache o valor passado na entrada (input) apropriada e mostre o resultado da div que tem
como id solucao.
d) Bônus: Responda também a eventos de teclado! Mapeie algumas teclas para isso!
 */

const btnPotencia = document.querySelector('#potencia-button')
const btnMetade = document.querySelector('#metade-button')
const btnArea = document.querySelector('#area-button')

const inputPotencia = document.querySelector('#potencia-input')
const inputMetade = document.querySelector('#metade-input')
const inputArea = document.querySelector('#area-input')

const resultado = document.querySelector('#solucao')

const potencia = (num) => Math.pow(num, 3)
const metade = (num) => num/2
const areaCirculo = (raio) => Math.PI * Math.pow(raio, 2)

let inputValue = ''

const input = (value) => inputValue = value
const result = (res) => resultado.innerHTML = res

btnPotencia.addEventListener('click', () =>  result( potencia(inputValue) ))
btnMetade.addEventListener('click', () => result( metade(inputValue) ))
btnArea.addEventListener('click', () => result( areaCirculo(inputValue) ))

inputPotencia.addEventListener('change', (e) => input(e.target.value))
inputMetade.addEventListener('change', (e) => input(e.target.value))
inputArea.addEventListener('change', (e) => input(e.target.value))