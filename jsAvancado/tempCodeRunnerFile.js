let addAluno = (nome, idade) => {
    return {nome, idade}
}

let alunos = [
    addAluno("Igor", 19),
    addAluno("Kelly", 19),
    addAluno("Anna", 26),
    addAluno("Pedro", 22),
    addAluno("Camilla", 35),
    addAluno("Paulo", 45),
    addAluno("João", 68)
]
let total = 0
let idadeTotal = total + aluno.idade
let totalIdade = (idadeTotal) =>  `A idade total da turma é de ${idadeTotal}`

console.log(alunos.reduce(totalIdade, 0))