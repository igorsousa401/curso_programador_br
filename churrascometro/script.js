let calcular = () => {
    let inputAdultos = document.getElementsByClassName("input")[0]
    let inputCriancas = document.getElementsByClassName("input")[1]
    let inputDuracao = document.getElementsByClassName("input")[2]
    let carneResultado = document.getElementsByClassName("resultados")[0]
    let cervejaResultado = document.getElementsByClassName("resultados")[1]
    let refrigeranteResultado = document.getElementsByClassName("resultados")[2]
    let titleResultado = document.getElementsByClassName("title-resultado")[0]

    // Condições
    if((inputAdultos.value < 0) || (inputCriancas.value < 0) || (inputDuracao < 0)) {
        titleResultado.textContent = 'Valores inválidos'
        carneResultado.textContent = ''
        cervejaResultado.textContent = ''
        refrigeranteResultado.textContent = ''
    } else{

        // Adultos
        let carneAdultos = inputAdultos.value * 0.250 * inputDuracao.value // Em Kg
        let latasCerveja = Math.ceil((inputAdultos.value * 500 * inputDuracao.value)/350) // Em latas de 350ml
        let refrigeranteAdultos = (inputAdultos.value * 250 * inputDuracao.value)/2000 // Em garrafas de 2L
        
        // Crianças
        let carneCriancas = inputAdultos.value * 0.100 * inputDuracao.value // Em Kg
        let refrigeranteCriancas = (inputAdultos.value * 500 * inputDuracao.value)/2000 // Em garrafas de 2L
        
        
        // Calculos
        let carneTotal = carneAdultos + carneCriancas
        let refrigeranteTotal = Math.ceil(refrigeranteAdultos + refrigeranteCriancas)
        
        // Imprimir valores
        titleResultado.textContent = 'Resultado'
        carneResultado.textContent = `${carneTotal} Kg de Carne.`
        cervejaResultado.textContent = `${latasCerveja} Latas de Cerveja.`
        refrigeranteResultado.textContent = `${refrigeranteTotal} Garrafas de 2L de Refrigerante.`
    }

}
let enviar = () => {
    let buttonEnviar = document.getElementsByClassName("button-submit")[0]
    buttonEnviar.addEventListener("click", calcular)


}
