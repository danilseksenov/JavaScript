const answer = confirm("Should I calculate the square root?")

if (answer){
    let number = +prompt("Enter a number: ")

    if(number < 0){
        document.querySelector("#square_root").innerHTML = "The square root of a negative number is not defined"
    }
        else{
            const sqrt = Math.sqrt(number)
            document.querySelector("#square_root").innerHTML = `The square root of ${number} is ${sqrt.toFixed(4)}`
        }
}
    else{
        document.querySelector("#square_root").innerHTML = "The square root is not calculated."
    }