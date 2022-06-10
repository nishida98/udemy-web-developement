const sequece = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {}

function saveProducts(produto) {
    if(!produto.id) {
        produto.id = sequence.id
    }
    produtos[produto.id] = produto
    return produto
}

function getProductById(id) {
    return produtos[id] || {}
}

function getAllProducts() {
    return Object.values(produtos)
}

module.exports = {saveProducts, getProductById, getAllProducts}