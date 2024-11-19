document.getElementById("joke-form").addEventListener("submit", function(evt){
    evt.preventDefault()

    const search = document.getElementById("search").value.trim()
    const results = document.getElementById("results")
    results.innerHTML = ""

    fetch(`https://api.chucknorris.io/jokes/search?query=${search}`)
        .then(response => response.json())
        .then(data => {
            if (data.result.length > 0){
                data.result.forEach(joke =>{
                    const article = document.createElement("article")
                    const p = document.createElement("p")
                    p.textContent = joke.value
                    article.appendChild(p)
                    results.appendChild(article)
                })
            } else {
                results.innerHTML = '<p>No jokes found. Try a different keyword!</p>'
            }
        })
        .catch(error => {
            console.error("Error while fetching jokes", error)
            results.innerHTML = "<p>There was an error while fetching jokes</p>"
        })
})