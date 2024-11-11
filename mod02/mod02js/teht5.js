let numbers = []

while(true) {
    let number = parseFloat(prompt("Enter a number: "))

    if(numbers.includes(number)){
        alert("The number already exists!")
        break
    }
    numbers.push(number)
}
numbers.sort((a,b) => a-b)
console.log(`Numbers in ascending order ${numbers}`)