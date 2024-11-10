function askNumbers(){
    let numbers = []
    let userInput = parseFloat(prompt("Enter a number: "))

    while(userInput != 0){
        numbers.push(userInput)
        userInput = parseFloat(prompt("Enter a number: "))

       if(userInput == 0)
        break
    }

    numbers.sort((a,b) => a-b)
    console.log(numbers)
}

askNumbers()