function participants() {
    let numPart = parseFloat(prompt("Enter a number of participants: "))
    let names = []
    
    for(let i =  0; i < numPart; i++){
        let namePart = prompt("Enter the name of participant: ")
        names.push(namePart)
    }

    names.sort()

    let listHTML = "";
    for (let name of names) {
        listHTML += `<li>${name}</li>`;
    }

    document.querySelector("#list").innerHTML = listHTML;
}

participants()