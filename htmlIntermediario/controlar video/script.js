let video = document.getElementsByTagName("video")[0]
let btnRetroceder = document.getElementsByClassName("btn")[0]
let btnDiminuir = document.getElementsByClassName("btn")[1]
let btnAumentar = document.getElementsByClassName("btn")[2]
let btnPausar = document.getElementsByClassName("btn")[3]
let btnReproduzir = document.getElementsByClassName("btn")[4]
let btnAvancar = document.getElementsByClassName("btn")[5]
let controles = document.getElementsByClassName("controles")[0]


video.onmouseover = () => {
    controles.classList.add("mostrar-controles")
}
video.onmouseout = () => {
    controles.classList.remove("mostrar-controles")
}




// Retroceder
let retroceder = () => {
    video.currentTime -= 15
}
btnRetroceder.addEventListener("click", retroceder)

// Diminuir
let diminuir = () =>{
    video.playbackRate -= 0.1
}
btnDiminuir.addEventListener("click", diminuir)

// Aumentar
let aumentar = () =>{
    video.playbackRate += 0.1
}
btnAumentar.addEventListener("click", aumentar)

// Pausar
let pausar = () =>{
    video.pause()
}
btnPausar.addEventListener("click", pausar)

// Reproduzir
let reproduzir = () =>{
    video.play()
}
btnReproduzir.addEventListener("click", reproduzir)

// Avançar
let avancar = () =>{
    video.currentTime += 15
}
btnAvancar.addEventListener("click", avancar)



