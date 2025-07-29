const title = document.getElementById("typed")
const text = "Desenvolvedor Front-end"
let idx = 0

function type() {
    title.innerText = text.slice(0, idx++)
    if(idx <= text.length) setTimeout(type, 100)
}

type()