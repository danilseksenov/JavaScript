const target = document.getElementById("target")

const item1 = document.createElement("li")
item1.textContent = "First item"

const item2 = document.createElement("li")
item2.textContent = "Second item"
item2.classList.add("my-item")

const item3 = document.createElement("li")
item3.textContent = "Third item"

target.appendChild(item1)
target.appendChild(item2)
target.appendChild(item3)