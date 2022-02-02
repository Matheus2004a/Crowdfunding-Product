const buttonTopPage = document.querySelector(".button-top-page")
const buttonBookMark = document.querySelector(".container-btn-bookmark")
const inputsTrial = document.querySelectorAll(".modal input")
const articlesTrial = document.querySelectorAll(".articles-modal")

inputsTrial.forEach(input => {
    input.addEventListener("click", () => {
        articlesTrial.forEach(article => {
            if (input.checked && article.querySelectorAll("input")[0] === input) {
                article.classList.add("check")

                let contentPrice = document.createElement("div")
                contentPrice.classList.add("content")
                contentPrice.innerHTML = `<span>Enter your pledge</span> <div><input type='number' placeholder='0.00'> <button type='submit' data-bs-toggle='modal' data-bs-target='#modal-support' class='button-continue' onclick='clearAllDataArticle()'>Continue</button></div>`

                article.appendChild(contentPrice)
            } else {
                article.classList.remove("check")
            }
        })
    })
})

function clearAllDataArticle() {
    inputsTrial.forEach(radio => {
        radio.checked = false
    })
    let inputPrices = document.querySelectorAll(".content input")
    inputPrices.forEach(price => {
        price.value = ""
    })
    articlesTrial.forEach(article => {
        article.classList.remove("check")
    })
}

window.addEventListener("scroll", () => {
    scrollY >= 400 ? buttonTopPage.classList.add("show-button") : buttonTopPage.classList.remove("show-button")
})

buttonBookMark.addEventListener("click", checkButtonBookmark)

function checkButtonBookmark() {
    let imageBookMark = document.querySelector(".circle-btn-bookmark")
    let span = document.querySelector(".container-btn-bookmark span")

    imageBookMark.classList.toggle("marked")
    span.classList.toggle("marked")
    span.classList.contains("marked") ? span.innerHTML = "Bookmarked" : span.innerHTML = "Bookmark"
}