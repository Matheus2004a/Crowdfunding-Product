const buttonTopPage = document.querySelector(".button-top-page")
const buttonBookMark = document.querySelector(".container-btn-bookmark")

window.addEventListener("scroll", () => {
    scrollY >= 700 ? buttonTopPage.classList.add("show-button") : buttonTopPage.classList.remove("show-button")
})

buttonBookMark.addEventListener("click", checkButton)

function checkButton() {
    let imageBookMark = document.querySelector(".circle-btn-bookmark")
    let span = document.querySelector(".container-btn-bookmark span")

    imageBookMark.classList.toggle("marked")
    span.classList.toggle("marked")
}