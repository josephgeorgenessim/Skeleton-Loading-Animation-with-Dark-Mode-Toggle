const Button_darkMode = document.querySelector("#toggle")
const allLoadings = document.querySelectorAll(".loading")
Button_darkMode.addEventListener("click", () => {
    const body = document.querySelector("body")
    body.classList.toggle("dark-mode")

})

window.addEventListener("load", () => {
    setInterval(() => {
        allLoadings.forEach(loading => {
            loading.classList.remove("loading")
        })
    }, 2000)
})