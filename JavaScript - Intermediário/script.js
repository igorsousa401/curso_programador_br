let n = 0
let intervalo
let atualizarTexto = () => {
    let h = document.getElementsByTagName("h1")[0]
    h.innerHTML += " " + n
    n++
}
let iniciar = () => {

   intervalo = setInterval(atualizarTexto, 1000)
}
let parar = () => {
    clearInterval(intervalo)
}