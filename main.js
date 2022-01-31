const buttonTopPage = document.querySelector(".button-top-page")

window.addEventListener("scroll", () => {
    scrollY >= 700 ? buttonTopPage.classList.add("show-button") : buttonTopPage.classList.remove("show-button")
})