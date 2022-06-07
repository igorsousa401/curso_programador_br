let tela = document.getElementById("tela")
let ctx = tela.getContext("2d")

let img = new Image()
img.src = "assets/stop.png"

function desenharImagem() {
    ctx.drawImage(this, 20, 20, 200, 200)
}
img.onload = desenharImagem
