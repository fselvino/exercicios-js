const filhas = ['Valesca', 'Sibalena']
const filhos = ['Uoxiton', 'Uesclei']

// funcao concat concatenou os dois array e incluiu fulano no array todos
const todos = filhas.concat(filhos, 'Fulano')
console.log(todos, filhas, filhos)

//lembrando que concat não altera os arrays originais ele cria um novo
console.log(['a', 'b'].concat([1,2], [3,4], 5 , [[6,7]] ))