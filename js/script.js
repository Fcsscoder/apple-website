const buttons = document.querySelectorAll("#image-picker li")
const img = document.querySelector("#product-image")

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e)

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected")
        })

        const button = e.target

        const id = button.getAttribute("id")

        button.querySelector(".color").classList.add("selected")

        img.classList.add("changing")
        img.setAttribute("src", `./img/iphone_${id}.jpg`)
        setTimeout(() => {
            img.classList.toggle("changing")
        }, 200)
    })
})