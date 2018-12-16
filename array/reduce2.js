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
console.log(alunos.map( a => a.bolsista).reduce(todosBolsistas))

//Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

//retornar quantos alunos sao bolsistas

