
//essa funcao simula o metodo MAP
Array.prototype.map2 = function(callBack){
    const  newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callBack(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}']

    //Retorna um array apeanas com os preços
    const paraObjeto = json => JSON.parse(json)
    const apenaspreco = produto => produto.preco

    const resultado = carrinho.map2(paraObjeto).map2(apenaspreco)
console.log(resultado)