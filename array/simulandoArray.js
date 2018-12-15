const quanseArray = {
    0:'Rafael', 1:'Ana', 2:'Bia'
}

console.log(quanseArray)

Object.defineProperty(quanseArray, 'toString', {
    value: function(){return Object.values(this)},
    enumerable: false
})

console.log(quanseArray[0])

const meuArray  = ['Rafael', 'Ana', 'Bia' ]
console.log(quanseArray.toString(), meuArray)
