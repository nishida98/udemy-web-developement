const port = 5000

const { response } = require('express')
const express = require('express')
const db = require('./database')
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send(db.getAllProducts())

})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProductById(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = db.saveProducts({
        nome: req.body.name,
        preco: req.body.preco
    })
    
    res.send(produto)
})

app.listen(port, () => {
    console.log('Servidor executando na porta ' + port)
})