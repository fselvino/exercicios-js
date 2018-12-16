const produtos = [
    {nome: 'Notebook', preco:2499, fagil:true},
    {nome: 'iPad Pro', preco:4199, fagil:true},
    {nome: 'Copo de Vidro', preco:12.49, fagil:true},
    {nome: 'Copo de Plastico', preco:18.99, fagil:false},

]
console.log(produtos.filter(function(p){
    return 

}))

const caro = produto => produto.preco >=500
const fragil = produto => produto.fagil

console.log(produtos.filter(caro).filter(fragil))