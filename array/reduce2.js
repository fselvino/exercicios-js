const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

//Desafio 1: todos os alunos são bolsista?

//respondendo com o filter
const bolsista = b => b.bolsista
console.log(alunos.filter(bolsista))

//Desafio 1: todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))


//retornar quantos alunos sao bolsistas sem atribuir a uma variavel
let cont = 0
alunos.map(a => a.bolsista).forEach(function (x) {
    //o valor de a é true or false
    //a funcao recebe o falor de a em x
    //realiza o teste, se verdadeiro contando os bolsistas
    if (x) {
        cont += 1
    }
})

console.log(cont)


//retornar quantos alunos sao bolsistas passando o valor para uma variavel
const contaBolsista = function () {

    let cont = 0
    //map constroe um novo array a partir de alunos retornando o valor do item bolsista
    //forEach percorre esse novo array e passa para a funcao o valor de a
    alunos.map(a => a.bolsista).forEach(function (x) {
        //o valor de a é true or false        /
        //realiza o teste, se verdadeiro conta os bolsistas
        if (x) {
            cont += 1
        }
    })
//concluido retorna o valor do contador para variavel contaBolsista
    return cont

}

//imprime o valor
console.log(` Temos ${contaBolsista()} bolsistas na universidade`)