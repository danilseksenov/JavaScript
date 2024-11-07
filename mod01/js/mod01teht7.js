let rollTimes = +prompt("How many times should we roll the dice?")

if(rollTimes <= 0){
    document.querySelector("#rolls").innerHTML = "The number must be greater than 0"
}

let totalSum = 0

for(let i = 0; i < rollTimes; i++){
    let roll = Math.floor(Math.random()*6)+1
    totalSum += roll
}

document.querySelector("#rolls").innerHTML = `The sum of the dice rolls is ${totalSum}`