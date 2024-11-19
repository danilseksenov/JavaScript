document.getElementById("searc-form").addEventListener("submit", async function(evt){
    evt.preventDefault()

    const query = document.getElementById("query").value

    if (query.trim() ===""){
        console.error("Please enter a TV show name")
        return
    }

    try {
        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${query}`
        )
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        const resultContainer = document.getElementById("results")
        resultContainer.innerHTML = ""

        data.forEach(result => {
            const tvShow = result.show

            const article = document.createElement("article")

            const title = document.createElement("h2")
            title.textContent = tvShow.name
            article.appendChild(title)

            const link = document.createElement("a")
            link.href = tvShow.url
            link.target = "_blank"
            link.textContent = "More details"
            article.appendChild(link)

            if (tvShow.image?.medium) {
                const img = document.createElement("img")
                img.src = tvShow.image.medium
                img.alt = `${tvShow.name} poster`
                article.appendChild(img)
            }

            if (tvShow.summary) {
                const summaryDiv = document.createElement("div")
                summaryDiv.innerHTML = tvShow.summary
                article.appendChild(summaryDiv)
            }

            resultContainer.appendChild(article)
        })

    } catch (error) {
        console.error("Failed to fetch data", error)
    }
})