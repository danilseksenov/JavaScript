let num = +prompt("Enter a number:");

if (num <= 1) {
    document.querySelector("#number").innerHTML = `${num} is not a prime number!`
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (document.querySelector("#number")) {
        document.querySelector("#number").innerHTML = `${num} is ${isPrime ? '' : 'not '}a prime number.`;
    }
}
