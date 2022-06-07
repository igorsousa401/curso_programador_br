let audio = document.getElementsByTagName("audio")[0]

let btnRetroceder = document.getElementsByClassName("btn")[0]
let btnPausar = document.getElementsByClassName("btn")[1]
let btnPlay = document.getElementsByClassName("btn")[2]
let btnAvancar = document.getElementsByClassName("btn")[3]


btnRetroceder.addEventListener("click", () => {
    audio.currentTime -= 10
})
btnPausar.addEventListener("click", () => {
    audio.pause()
})
btnPlay.addEventListener("click", () => {
    audio.play()
})
btnAvancar.addEventListener("click", () => {
    audio.currentTime += 10
})
