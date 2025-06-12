const title = document.getElementById("typed")
const text = "Olá, eu sou o Lucas!"
let idx = 0

function type() {
    title.innerText = text.slice(0, idx++)
    if(idx <= text.length) setTimeout(type, 100)
}

type()