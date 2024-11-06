const num1 = parseInt(prompt("Input first number: "))
const num2 = parseInt(prompt("Input second number: "))
const num3 = parseInt(prompt("Input third number: "))

const sum = num1 + num2 + num3
const product = num1 * num2 * num3
const average = sum / 3

document.querySelector('#sum').innerHTML = `Sum: ${sum}`
document.querySelector('#product').innerHTML = `Product: ${product}`
document.querySelector('#average').innerHTML = `Average: ${average}`

