const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)
pilotos.pop() //Massa quebrou o carro . pop retira o ultimo piloto da lista
console.log(pilotos)

//Push acrescenta um elemento no array na ultima possiçao
pilotos.push('Verstappen')
console.log(pilotos)

//shift retira um elemento da primeira posicao
pilotos.shift()
console.log(pilotos)

//unshift inclui um elemento no array na primeira posiçao
pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos
//adicionar como splice
pilotos.splice(2,0, 'Botas', 'Massa')
console.log(pilotos)

//removendo com splice
pilotos.splice(3,1) //Massa saiu
console.log(pilotos)

// metodo slice retorna um novo array a partir do indice informado
const algunsPilotos = pilotos.slice(2) //novo array
console.log(algunsPilotos)

//nesse exemplo o array sera formado do indice 1 até o 4 porem o indece 4 nao entra
const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)
