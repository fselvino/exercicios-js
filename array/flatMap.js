const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma m2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]

}]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurna = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurna)
console.log(notas1)

//criamos uma funcao flatMap que faz a uniao de varios arrays
Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurna)
console.log(notas2)