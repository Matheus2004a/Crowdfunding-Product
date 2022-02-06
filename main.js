const buttonTopPage = document.querySelector(".button-top-page")
const buttonBookMark = document.querySelector(".container-btn-bookmark")
const inputsTrial = document.querySelectorAll(".modal input")
const articlesTrial = document.querySelectorAll(".articles-modal")
const numberBackers = document.querySelectorAll("section .indivation h2")[1]
const modalProject = document.querySelector("#modal-back-project")
const modalSupport = document.querySelector("#modal-support")
const buttonClose = document.querySelector(".btn-close")
const buttonModalSupport = document.querySelector("#modal-support button")
const section2 = document.querySelector(".section-2")

inputsTrial.forEach(input => {
    input.addEventListener("click", () => {
        articlesTrial.forEach(article => {
            if (input.checked && article.querySelectorAll("input")[0] === input) {
                article.classList.add("check")
                addContentToArticle()
            } else {
                article.classList.remove("check")
            }
            function addContentToArticle() {
                let contentPrice = document.createElement("div")
                contentPrice.classList.add("content")
                contentPrice.innerHTML = `<span>Enter your pledge</span>
                <form>
                    <input type="number" placeholder="0.00">
                    <button type="submit" class="button-continue" aria-label="Close" onclick="checkValueInputEmpty()">Continue</button>
                </form>`
                article.appendChild(contentPrice)
            }
        })
    })
})

function checkValueInputEmpty() {
    const modalProjectContent = document.querySelector("#modal-back-project .content")
    const inputsPrices = document.querySelectorAll("input[type='number']")
    inputsPrices.forEach(item => {
        if (Number(item.value) === "" || Number(item.value) <= 0) {
            let error = document.createElement("span")
            error.innerHTML = "Please insert a value valid!"
            item.classList.add("error")
            modalProjectContent.appendChild(error)
        } else {
            item.classList.remove("error")
            document.querySelectorAll("span")[1].style.display = "none"
        }
    })
}

buttonClose.addEventListener("click", clearAllDataArticle)

function clearAllDataArticle() {
    articlesTrial.forEach(article => {
        article.classList.remove("check")
    })
    inputsTrial.forEach(radio => {
        radio.checked = false
    })
    let inputPrices = document.querySelectorAll(".content input")
    inputPrices.forEach(price => {
        price.value = ""
    })
    let contentsArticles = document.querySelectorAll(".content")
    contentsArticles.forEach(content => {
        content.style.display = "none"
    })
}

buttonModalSupport.addEventListener("click", closeModalSupport)

function closeModalSupport() {
    if (modalProject.classList.contains("show") === true) {
        console.log("Para se tornar um contribuidor, insira um valor")
    }
    else {
        setTimeout(() => {
            section2.classList.add("animate")
            const newBackers = (Math.trunc(numberBackers.innerHTML.replace(",", "")) + 1).toString();
            numberBackers.innerHTML = newBackers.toString()
        }, 1000)
    }
    section2.classList.remove("animate")
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