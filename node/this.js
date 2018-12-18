console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(exports === module.exports)
console.log(this === exports)

function  logThis(){
    console.log( 'Dentro de uma funçao....')
    console.log(this === exports)
    console.log(this === module.exports)
    //dentro de uma funcao this aponta para objeto global
    console.log(this === global)
}
logThis()