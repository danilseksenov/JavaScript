let year1 = +prompt("Enter the start year")
let year2 = +prompt("Enter the end year")

for (let year = year1; year <= year2; year++){
    if((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)){
        document.querySelector("#list").innerHTML +=
        `<li>The year ${year} is a leap year </li>`
    }
}