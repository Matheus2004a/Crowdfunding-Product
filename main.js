const buttonTopPage = document.querySelector(".button-top-page")
const buttonBookMark = document.querySelector(".container-btn-bookmark")
const inputsTrial = document.querySelectorAll(".modal input")
const articlesTrial = document.querySelectorAll(".articles-modal")

inputsTrial.forEach((input, indexInput) => {
    input.addEventListener("click", () => {
        articlesTrial.forEach((article, indexArticle) => {
            if (input.checked && input[indexInput] == article[indexArticle]) {
                article.classList.add("check")
            } else {
                article.classList.remove("check")
            }
        })
    })
})

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