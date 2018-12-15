console.log(typeof Array, typeof new Array, typeof [])
let aprovado = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovado)

aprovado = ['Bia', 'Carlos', 'Ana']
console.log(aprovado[0])
console.log(aprovado[1])
console.log(aprovado[2])
console.log(aprovado[3])

aprovado[3] = 'Paulo'
aprovado.push('Abia')
console.log(aprovado)
console.log(aprovado.length)

aprovado[9] = 'Rafael'
console.log(aprovado)
console.log(aprovado.length)
console.log(aprovado[8]===undefined)
console.log(aprovado[8]===null)

console.log(aprovado)

//O metodo sort ordena pela primeira letra crescente
aprovado.sort()
console.log(aprovado)

//Remove itens de um array
delete aprovado[1]
console.log(aprovado[1])
console.log(aprovado[2])

console.log('Bia', 'Carlos', 'Ana')

aprovado = ['Bia', 'Carlos', 'Ana']

//A funçao splice serve para adicionar e remover itens de um array
aprovado.splice(1, 1)
console.log(aprovado)

//Nesse exemplo e excluido dois elementos e inclue dois elemetos
aprovado.splice(1, 2,'Elemento1', 'Elemento2')
console.log(aprovado)


//Nesse exemplo nao excluido nenhum elemento e inclue dois elemetos
aprovado = ['Bia', 'Carlos', 'Ana']
aprovado.splice(1,1,'Elemento1', 'Elemento2')
console.log(aprovado)















