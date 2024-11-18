function performCalculation() {
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    const op = document.getElementById("operation").value

    let result

    switch(op) {
        case "add":
            result = num1+num2
            break
        case "sub":
            result = num1-num2
            break
        case "multi":
            result = num1*num2
            break
        case "div":
            if(num2 !== 0) {
                result = num1/num2
            } else {
                result = "Error: Division by zero"
            }
            break

        default:
            result = "Invalid Operation"
    }

    document.getElementById("result").innerText = `Result: ${result}`
}