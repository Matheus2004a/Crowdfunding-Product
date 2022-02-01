const buttonTopPage = document.querySelector(".button-top-page")
const buttonBookMark = document.querySelector(".container-btn-bookmark")

window.addEventListener("scroll", () => {
    scrollY >= 700 ? buttonTopPage.classList.add("show-button") : buttonTopPage.classList.remove("show-button")
})

buttonBookMark.addEventListener("click", checkButtonBookmark)

function checkButtonBookmark() {
    let imageBookMark = document.querySelector(".circle-btn-bookmark")
    let span = document.querySelector(".container-btn-bookmark span")

    imageBookMark.classList.toggle("marked")
    span.classList.toggle("marked")

    span.classList.contains("marked") ? span.innerHTML = "Bookmarked" : span.innerHTML = "Bookmark"
}