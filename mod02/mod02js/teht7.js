function diceRoll(sides){
    let dice = []
    let roll
    
    while (true) {
        roll = Math.floor(Math.random()*sides)+1
        dice.push(roll)
        if (roll === sides)
            break
    }
    
    let resultHTML = "";
    for (let result of dice) {
        resultHTML += `<li>${result}</li>`;
    }
    document.querySelector("#result").innerHTML = resultHTML
}

let sides = parseFloat(prompt("How many sides on the dice?"))
if(sides > 1) {
    diceRoll(sides)
} else {
    alert("Please enter a number greater than 1")
}