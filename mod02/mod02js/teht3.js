function sixdogs(){
    let dogs = []

    for(let i = 0; i < 6; i++){
    let dogName = prompt("Enter a dog's name: ")
    dogs.push(dogName)
    }

    dogs.reverse()

    let namesHTML = "";
    for (let name of dogs) {
        namesHTML += `<li>${name}</li>`;
    }

    document.querySelector("#names").innerHTML = namesHTML;
}

sixdogs()