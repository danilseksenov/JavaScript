let year = +prompt("Enter a year to know if it is a leap year")

if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
    document.querySelector("#leapyear").innerHTML +=
    `${year} is a leap year <br>`
} 

else if((year % 400 != 0) || (year % 4 != 0 && year % 100 == 0)) {
    document.querySelector("#leapyear").innerHTML +=
    `${year} is not a leap year <br>`
}