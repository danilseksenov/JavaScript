function diceRoll(){
    let dice = []
    let roll
    
    while (true) {
        roll = Math.floor(Math.random()*6)+1
        dice.push(roll)
        if (roll === 6)
            break
    }
    
    let resultHTML = "";
    for (let result of dice) {
        resultHTML += `<li>${result}</li>`;
    }
    document.querySelector("#result").innerHTML = resultHTML
}

diceRoll()